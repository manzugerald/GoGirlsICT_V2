'use server';

import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redis } from '@/utils/redis';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// export const runtime = 'nodejs';

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
  } catch (err) {
    // ignore
  }
}

/**
 * Save uploaded file (File from formData) into public/assets/images/{folder}
 * Returns public URL path (e.g. /assets/images/homepage/abc.png)
 */
async function saveUploadedFileLocal(
  file: File,
  kind: 'image' | 'video',
  subfolder?: string
): Promise<string> {
  if (!file) throw new Error('No file provided');

  const size = Number(file.size ?? 0);
  if (kind === 'image' && size > IMAGE_MAX_BYTES)
    throw new Error(`Image too large. Max ${IMAGE_MAX_BYTES} bytes`);
  if (kind === 'video' && size > VIDEO_MAX_BYTES)
    throw new Error(`Video too large. Max ${VIDEO_MAX_BYTES} bytes`);

  const filenameRaw = String((file as any).name ?? '');
  const extGuess = (filenameRaw.split('.').pop() || '').toLowerCase();
  const ext = extGuess || (kind === 'image' ? 'png' : 'mp4'); // fallback

  if (kind === 'image' && !ALLOWED_IMAGE_EXT.includes(ext)) {
    throw new Error(`Unsupported image extension .${ext}`);
  }
  if (kind === 'video' && !ALLOWED_VIDEO_EXT.includes(ext)) {
    throw new Error(`Unsupported video extension .${ext}`);
  }

  // ensure public/assets/images/... path
  const folder = subfolder ? String(subfolder) : 'homepage';
  const saveDir = path.join(process.cwd(), 'public', 'assets', 'images', folder);
  await ensureDir(saveDir);

  const unique = `${Date.now()}-${crypto.randomBytes(6).toString('hex')}`;
  const filename = `${unique}.${ext}`;
  const outPath = path.join(saveDir, filename);

  // File is a web File/Blob - use arrayBuffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  await fs.promises.writeFile(outPath, buffer, { encoding: 'binary' });

  // Return public URL path
  const publicUrl = `/assets/images/${folder}/${filename}`;
  return publicUrl;
}

/**
 * GET: Fetch latest homepage content (cache with Redis)
 */
export async function GET() {
  try {
    const cached = await redis.get(HOMEPAGE_CACHE_KEY);
    if (cached) {
      return NextResponse.json(JSON.parse(cached));
    }

    const homePage = await prisma.homePage.findFirst({
      orderBy: { createdAt: 'desc' },
    });

    if (!homePage) {
      return NextResponse.json({ error: 'No HomePage found' }, { status: 404 });
    }

    await redis.set(HOMEPAGE_CACHE_KEY, JSON.stringify(homePage), 'EX', HOMEPAGE_CACHE_TTL);

    return NextResponse.json(homePage);
  } catch (err: any) {
    console.error('Error fetching homepage:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

/**
 * POST:
 * - Accepts multipart/form-data with field "file" to upload a file (video or image).
 *   Returns { url } if upload-only.
 * - Accepts JSON to create a HomePage record including new fields (about, logo, banner, siteName)
 *
 * Auth required.
 */
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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

      // handle file if included
      const file = form.get('file') as File | null;
      if (file && file instanceof File && (file.size ?? 0) > 0) {
        const mime = file.type || '';
        const kind = mime.startsWith('video/') ? 'video' : 'image';
        // map target to subfolder: logo -> logo, banner -> banner, otherwise 'homepage'
        const folder =
          target === 'logo'
            ? 'logo'
            : target === 'banner'
            ? 'banner'
            : target === 'hero'
            ? 'hero'
            : 'homepage';
        const savedUrl = await saveUploadedFileLocal(file, kind as any, folder);
        if (kind === 'video') {
          // if target explicitly logo/banner, prefer mapping; else video -> heroVideo
          if (target === 'hero' || !target) heroVideo = savedUrl;
          else if (target === 'banner') banner = savedUrl;
          else if (target === 'logo') logo = savedUrl;
        } else {
          // image
          if (target === 'logo') logo = savedUrl;
          else if (target === 'banner') banner = savedUrl;
          else banner = savedUrl;
        }
      }

      // read optional fields from form
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
      if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });

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
      return NextResponse.json({ url });
    }

    // For creation require core fields
    if (!heroVideo || !vision || !mission || !focus || !coreValues) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
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

    return NextResponse.json(homePage, { status: 201 });
  } catch (err: any) {
    if (
      err?.message?.includes?.('Body exceeded') ||
      err?.statusCode === 413 ||
      (err?.cause && String(err.cause).includes('Body exceeded'))
    ) {
      console.error('Request body too large:', err);
      return NextResponse.json(
        {
          error:
            'Request body too large. Increase server body size limit or upload a smaller file.',
        },
        { status: 413 }
      );
    }

    console.error('Failed to create homepage:', err);
    return NextResponse.json({ error: err?.message || 'Internal Server Error' }, { status: 500 });
  }
}
