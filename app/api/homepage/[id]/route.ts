'use server';

import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redis } from '@/utils/redis';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const HOMEPAGE_CACHE_KEY = 'homepage:latest';
const SINGLE_HOMEPAGE_CACHE_PREFIX = 'homepage:'; // homepage:[id]
const CACHE_TTL = 60 * 60 * 24 * 7; // 7 days

// File limits and allowed extensions
const IMAGE_MAX_BYTES = 5 * 1024 * 1024; // 5MB
const VIDEO_MAX_BYTES = 50 * 1024 * 1024; // 50MB
const ALLOWED_IMAGE_EXT = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg'];
const ALLOWED_VIDEO_EXT = ['mp4', 'mov', 'webm', 'gif', 'm4v'];

async function ensureDir(dir: string) {
  try {
    await fs.promises.mkdir(dir, { recursive: true });
  } catch {
    // ignore
  }
}

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
  const ext = extGuess || (kind === 'image' ? 'png' : 'mp4');

  if (kind === 'image' && !ALLOWED_IMAGE_EXT.includes(ext))
    throw new Error(`Unsupported image extension .${ext}`);
  if (kind === 'video' && !ALLOWED_VIDEO_EXT.includes(ext))
    throw new Error(`Unsupported video extension .${ext}`);

  const folder = subfolder ? String(subfolder) : 'homepage';
  const saveDir = path.join(process.cwd(), 'public', 'assets', 'images', folder);
  await ensureDir(saveDir);

  const unique = `${Date.now()}-${crypto.randomBytes(6).toString('hex')}`;
  const filename = `${unique}.${ext}`;
  const outPath = path.join(saveDir, filename);

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  await fs.promises.writeFile(outPath, buffer, { encoding: 'binary' });

  return `/assets/images/${folder}/${filename}`;
}

/**
 * GET: Fetch single homepage by id (with cache)
 */
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const idNum = Number(params.id);
    if (Number.isNaN(idNum)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 });

    const singleCacheKey = SINGLE_HOMEPAGE_CACHE_PREFIX + params.id;
    const cached = await redis.get(singleCacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached));
    }

    const homepage = await prisma.homePage.findUnique({
      where: { id: idNum },
    });

    if (!homepage) {
      return NextResponse.json({ error: 'HomePage not found' }, { status: 404 });
    }

    await redis.set(singleCacheKey, JSON.stringify(homepage), 'EX', CACHE_TTL);

    return NextResponse.json(homepage);
  } catch (error) {
    console.error('Failed to fetch homepage:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

/**
 * PATCH: Partial update (auth required).
 * - Accepts multipart/form-data or JSON.
 * - If multipart and includes a file, the file is saved and mapped using optional 'target' form field:
 *   target = 'hero'|'banner'|'logo' — otherwise video -> heroVideo, image -> banner.
 *
 * IMPORTANT: This handler will update only the fields provided in the request.
 * Fields omitted from the request will remain unchanged in the DB.
 */
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const idNum = Number(params.id);
    if (Number.isNaN(idNum)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 });

    const contentType = String(req.headers.get('content-type') ?? '').toLowerCase();
    const updates: Record<string, any> = {};

    if (contentType.includes('multipart/form-data')) {
      const form = await req.formData();
      const target = (form.get('target') as string) || undefined;

      // handle file if present
      const file = form.get('file') as File | null;
      if (file && file instanceof File && (file.size ?? 0) > 0) {
        const mime = file.type || '';
        const kind = mime.startsWith('video/') ? 'video' : 'image';
        const folder =
          target === 'logo'
            ? 'logo'
            : target === 'banner'
            ? 'banner'
            : target === 'hero'
            ? 'hero'
            : 'homepage';
        const saved = await saveUploadedFileLocal(file, kind as any, folder);
        if (saved) {
          if (target === 'logo') updates.logo = saved;
          else if (target === 'banner') updates.banner = saved;
          else if (target === 'hero' || kind === 'video') updates.heroVideo = saved;
          else updates.banner = saved;
        }
      }

      // other fields from form (only set if provided)
      const fSiteName = form.get('siteName');
      const fHero = form.get('heroVideo');
      const fVision = form.get('vision');
      const fMission = form.get('mission');
      const fFocus = form.get('focus');
      const fCoreValues = form.get('coreValues');
      const fAbout = form.get('about');
      const fLogo = form.get('logo');
      const fBanner = form.get('banner');

      if (typeof fSiteName === 'string') updates.siteName = fSiteName;
      if (typeof fHero === 'string') updates.heroVideo = fHero;
      if (typeof fVision === 'string') updates.vision = fVision;
      if (typeof fMission === 'string') updates.mission = fMission;
      if (typeof fFocus === 'string') updates.focus = fFocus;
      if (typeof fCoreValues === 'string') updates.coreValues = fCoreValues;
      if (typeof fAbout === 'string') updates.about = fAbout;
      if (typeof fLogo === 'string') updates.logo = fLogo;
      if (typeof fBanner === 'string') updates.banner = fBanner;
    } else {
      const body = await req.json().catch(() => null);
      if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });

      // copy only provided fields (partial update)
      const allowed = [
        'siteName',
        'heroVideo',
        'vision',
        'mission',
        'focus',
        'coreValues',
        'about',
        'logo',
        'banner',
      ];
      for (const k of allowed) {
        if (Object.prototype.hasOwnProperty.call(body, k)) {
          updates[k] = body[k];
        }
      }
    }

    // Sanitize updates: remove undefined keys (keep explicit nulls)
    for (const k of Object.keys(updates)) {
      if (updates[k] === undefined) delete updates[k];
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: 'No fields provided to update' }, { status: 400 });
    }

    // Ensure the record exists
    const existing = await prisma.homePage.findUnique({
      where: { id: idNum },
    });
    if (!existing) {
      return NextResponse.json({ error: 'HomePage not found' }, { status: 404 });
    }

    // Directly update only the provided fields.
    // This preserves any omitted fields unchanged in the DB.
    const updated = await prisma.homePage.update({
      where: { id: idNum },
      data: updates,
    });

    // Invalidate caches
    try {
      await Promise.all([
        redis.del(SINGLE_HOMEPAGE_CACHE_PREFIX + params.id),
        redis.del(HOMEPAGE_CACHE_KEY),
      ]);
    } catch (err) {
      console.warn('Failed to invalidate homepage caches:', err);
    }

    return NextResponse.json(updated);
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

    if (err?.code === 'P2025') {
      return NextResponse.json({ error: 'HomePage not found' }, { status: 404 });
    }
    console.error('Failed to update homepage:', err);
    return NextResponse.json({ error: err?.message || 'Internal Server Error' }, { status: 500 });
  }
}

/**
 * DELETE: Delete homepage content (auth required)
 */
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const idNum = Number(params.id);
    if (Number.isNaN(idNum)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 });

    const deleted = await prisma.homePage.delete({
      where: { id: idNum },
    });

    try {
      await Promise.all([
        redis.del(SINGLE_HOMEPAGE_CACHE_PREFIX + params.id),
        redis.del(HOMEPAGE_CACHE_KEY),
      ]);
    } catch (err) {
      console.warn('Failed to invalidate homepage caches:', err);
    }

    return NextResponse.json({ message: 'HomePage deleted', homepage: deleted });
  } catch (error: any) {
    if (error?.code === 'P2025') {
      return NextResponse.json({ error: 'HomePage not found' }, { status: 404 });
    }
    console.error('Failed to delete homepage:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
