'use server';

import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { redis } from '@/utils/redis';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { revalidatePath } from 'next/cache';

const HOMEPAGE_CACHE_KEY = 'homepage:latest';
const HOMEPAGE_CACHE_TTL = 60 * 60 * 24 * 7; // 7 days

// File limits
const IMAGE_MAX_BYTES = 5 * 1024 * 1024; // 5MB
const VIDEO_MAX_BYTES = 50 * 1024 * 1024; // 50MB
const ALLOWED_IMAGE_EXT = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg'];
const ALLOWED_VIDEO_EXT = ['mp4', 'mov', 'webm', 'gif', 'm4v'];

/**
 * Ensure directory exists
 */
async function ensureDir(dir: string) {
  try {
    await fs.promises.mkdir(dir, { recursive: true });
  } catch {
    // ignore
  }
}

/**
 * Save uploaded file to appropriate location based on type and target
 * - Hero videos go to public/assets/videos/homePage/hero
 * - Logos go to public/assets/images/logo
 * - Banners go to public/assets/images/banner
 * Returns public URL path
 */
async function saveUploadedFileLocal(
  file: File,
  kind: 'image' | 'video',
  target?: 'hero' | 'logo' | 'banner'
): Promise<string> {
  if (!file) throw new Error('No file provided');

  const size = Number(file.size ?? 0);
  if (kind === 'image' && size > IMAGE_MAX_BYTES)
    throw new Error(`Image too large. Max ${IMAGE_MAX_BYTES / 1024 / 1024}MB`);
  if (kind === 'video' && size > VIDEO_MAX_BYTES)
    throw new Error(`Video too large. Max ${VIDEO_MAX_BYTES / 1024 / 1024}MB`);

  const filenameRaw = String(file.name ?? '');
  const extGuess = (filenameRaw.split('.').pop() || '').toLowerCase();
  const ext = extGuess || (kind === 'image' ? 'png' : 'mp4');

  if (kind === 'image' && !ALLOWED_IMAGE_EXT.includes(ext)) {
    throw new Error(
      `Unsupported image extension .${ext}. Allowed: ${ALLOWED_IMAGE_EXT.join(', ')}`
    );
  }
  if (kind === 'video' && !ALLOWED_VIDEO_EXT.includes(ext)) {
    throw new Error(
      `Unsupported video extension .${ext}. Allowed: ${ALLOWED_VIDEO_EXT.join(', ')}`
    );
  }

  // ✅ Determine save directory based on target and kind
  let saveDir: string;
  let publicUrl: string;

  if (target === 'hero' && kind === 'video') {
    // Hero videos → public/assets/videos/homePage/hero
    saveDir = path.join(process.cwd(), 'public', 'assets', 'videos', 'homePage', 'hero');
    const unique = `${Date.now()}-${crypto.randomBytes(6).toString('hex')}`;
    const filename = `${unique}.${ext}`;
    await ensureDir(saveDir);
    const outPath = path.join(saveDir, filename);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.promises.writeFile(outPath, buffer, { encoding: 'binary' });
    publicUrl = `/assets/videos/homePage/hero/${filename}`;
  } else if (target === 'logo') {
    // Logos → public/assets/images/logo
    saveDir = path.join(process.cwd(), 'public', 'assets', 'images', 'logo');
    const unique = `${Date.now()}-${crypto.randomBytes(6).toString('hex')}`;
    const filename = `${unique}.${ext}`;
    await ensureDir(saveDir);
    const outPath = path.join(saveDir, filename);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.promises.writeFile(outPath, buffer, { encoding: 'binary' });
    publicUrl = `/assets/images/logo/${filename}`;
  } else if (target === 'banner') {
    // Banners → public/assets/images/banner
    saveDir = path.join(process.cwd(), 'public', 'assets', 'images', 'banner');
    const unique = `${Date.now()}-${crypto.randomBytes(6).toString('hex')}`;
    const filename = `${unique}.${ext}`;
    await ensureDir(saveDir);
    const outPath = path.join(saveDir, filename);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.promises.writeFile(outPath, buffer, { encoding: 'binary' });
    publicUrl = `/assets/images/banner/${filename}`;
  } else {
    // Default fallback → public/assets/images/homepage
    saveDir = path.join(process.cwd(), 'public', 'assets', 'images', 'homepage');
    const unique = `${Date.now()}-${crypto.randomBytes(6).toString('hex')}`;
    const filename = `${unique}.${ext}`;
    await ensureDir(saveDir);
    const outPath = path.join(saveDir, filename);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.promises.writeFile(outPath, buffer, { encoding: 'binary' });
    publicUrl = `/assets/images/homepage/${filename}`;
  }

  return publicUrl;
}

/**
 * GET: Fetch latest homepage content (cache with Redis)
 */
export async function GET() {
  try {
    const cached = await redis.get(HOMEPAGE_CACHE_KEY);
    if (cached) {
      return NextResponse.json(JSON.parse(cached), {
        headers: { 'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400' },
      });
    }

    const homePage = await prisma.homePage.findFirst({
      orderBy: { createdAt: 'desc' },
    });

    if (!homePage) {
      return NextResponse.json(
        { error: 'No HomePage found' },
        {
          status: 404,
          headers: { 'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400' },
        }
      );
    }

    await redis.set(HOMEPAGE_CACHE_KEY, JSON.stringify(homePage), 'EX', HOMEPAGE_CACHE_TTL);

    return NextResponse.json(homePage, {
      headers: { 'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400' },
    });
  } catch (err) {
    console.error('Error fetching homepage:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      {
        status: 500,
        headers: { 'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400' },
      }
    );
  }
}

/**
 * POST:
 * - Accepts multipart/form-data with field "file" to upload a file (video or image).
 * - Accepts JSON to create a HomePage record
 * Auth required.
 */
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        {
          status: 401,
          headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
        }
      );
    }

    const contentType = String(req.headers.get('content-type') ?? '').toLowerCase();

    let heroVideo: string | undefined;
    let vision: string | undefined;
    let mission: string | undefined;
    let focus: string | undefined;
    let coreValues: string | undefined;
    let about: string | null = null;
    let logo: string | null = null;
    let banner: string | null = null;
    let siteName: string | null = null;

    if (contentType.includes('multipart/form-data')) {
      const form = await req.formData();

      const target = (form.get('target') as string) || undefined;

      // Handle file upload
      const file = form.get('file') as File | null;
      if (file && file instanceof File && (file.size ?? 0) > 0) {
        const mime = file.type || '';
        const kind = mime.startsWith('video/') ? 'video' : 'image';

        // ✅ Map target to specific locations
        if (target === 'hero') {
          const savedUrl = await saveUploadedFileLocal(file, kind, 'hero');
          if (kind === 'video') {
            heroVideo = savedUrl;
          } else {
            banner = savedUrl; // fallback if hero is image
          }
        } else if (target === 'logo') {
          const savedUrl = await saveUploadedFileLocal(file, 'image', 'logo');
          logo = savedUrl;
        } else if (target === 'banner') {
          const savedUrl = await saveUploadedFileLocal(file, 'image', 'banner');
          banner = savedUrl;
        } else {
          // No target specified
          const savedUrl = await saveUploadedFileLocal(
            file,
            kind,
            kind === 'video' ? 'hero' : undefined
          );
          if (kind === 'video') {
            heroVideo = savedUrl;
          } else {
            banner = savedUrl;
          }
        }
      }

      // Read optional fields from form
      const fHero = form.get('heroVideo');
      const fVision = form.get('vision');
      const fMission = form.get('mission');
      const fFocus = form.get('focus');
      const fCoreValues = form.get('coreValues');
      const fAbout = form.get('about');
      const fLogo = form.get('logo');
      const fBanner = form.get('banner');
      const fSiteName = form.get('siteName');

      heroVideo = heroVideo ?? (typeof fHero === 'string' ? fHero : undefined);
      vision = typeof fVision === 'string' ? fVision : undefined;
      mission = typeof fMission === 'string' ? fMission : undefined;
      focus = typeof fFocus === 'string' ? fFocus : undefined;
      coreValues = typeof fCoreValues === 'string' ? fCoreValues : undefined;
      about = typeof fAbout === 'string' ? fAbout : about;
      logo = logo ?? (typeof fLogo === 'string' ? fLogo : logo);
      banner = banner ?? (typeof fBanner === 'string' ? fBanner : banner);
      siteName = typeof fSiteName === 'string' ? fSiteName : siteName;
    } else {
      const body = await req.json().catch(() => null);
      if (!body) {
        return NextResponse.json(
          { error: 'Invalid JSON' },
          {
            status: 400,
            headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
          }
        );
      }

      heroVideo = body.heroVideo;
      vision = body.vision;
      mission = body.mission;
      focus = body.focus;
      coreValues = body.coreValues;
      about = body.about ?? null;
      logo = body.logo ?? null;
      banner = body.banner ?? null;
      siteName = body.siteName ?? null;
    }

    // Upload-only flow: return uploaded URL if no content fields included
    const hasContentFields = Boolean(vision || mission || focus || coreValues || siteName || about);
    if ((heroVideo || banner || logo) && !hasContentFields) {
      const url = heroVideo ?? banner ?? logo;
      return NextResponse.json(
        { url },
        {
          headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
        }
      );
    }

    // For creation require core fields
    if (!heroVideo || !vision || !mission || !focus || !coreValues) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        {
          status: 400,
          headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
        }
      );
    }

    const homePage = await prisma.homePage.create({
      data: {
        heroVideo,
        vision,
        mission,
        focus,
        coreValues,
        about,
        logo,
        banner,
        siteName,
      },
    });

    try {
      await redis.del(HOMEPAGE_CACHE_KEY);
    } catch (err) {
      console.warn('Failed to invalidate homepage cache:', err);
    }

    revalidatePath('/');

    return NextResponse.json(homePage, {
      status: 201,
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (err) {
    const e = err as { message?: string; statusCode?: number; cause?: unknown };
    if (
      e?.message?.includes?.('Body exceeded') ||
      e?.statusCode === 413 ||
      (e?.cause && String(e.cause).includes('Body exceeded'))
    ) {
      console.error('Request body too large:', err);
      return NextResponse.json(
        {
          error:
            'Request body too large. Increase server body size limit or upload a smaller file.',
        },
        {
          status: 413,
          headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
        }
      );
    }

    console.error('Failed to create homepage:', err);
    return NextResponse.json(
      { error: e?.message || 'Internal Server Error' },
      {
        status: 500,
        headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
      }
    );
  }
}
