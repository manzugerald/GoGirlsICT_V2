'use server';

import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { revalidatePath } from 'next/cache';

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

  if (kind === 'image' && !ALLOWED_IMAGE_EXT.includes(ext))
    throw new Error(
      `Unsupported image extension .${ext}. Allowed: ${ALLOWED_IMAGE_EXT.join(', ')}`
    );
  if (kind === 'video' && !ALLOWED_VIDEO_EXT.includes(ext))
    throw new Error(
      `Unsupported video extension .${ext}. Allowed: ${ALLOWED_VIDEO_EXT.join(', ')}`
    );

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
 * GET: Fetch single homepage by id
 */
export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;

    const homepage = await prisma.homePage.findUnique({
      where: { id: Number(id) },
    });

    if (!homepage) {
      return NextResponse.json(
        { error: 'HomePage not found' },
        {
          status: 404,
          headers: { 'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400' },
        }
      );
    }

    return NextResponse.json(homepage, {
      headers: { 'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400' },
    });
  } catch (error) {
    console.error('Failed to fetch homepage:', error);
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
 * PATCH: Partial update (auth required).
 */
export async function PATCH(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const idNum = Number(id);
    if (Number.isNaN(idNum)) {
      return NextResponse.json(
        { error: 'Invalid id' },
        {
          status: 400,
          headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
        }
      );
    }

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

    const updates: Record<string, unknown> = {};

    if (contentType.includes('multipart/form-data')) {
      const form = await req.formData();

      const target = (form.get('target') as string) || undefined;

      // If a file is included, save it and map to appropriate field
      const file = form.get('file') as File | null;
      if (file && file instanceof File && (file.size ?? 0) > 0) {
        const mime = file.type || '';
        const kind = mime.startsWith('video/') ? 'video' : 'image';

        // ✅ Map target to specific locations
        if (target === 'hero') {
          const savedUrl = await saveUploadedFileLocal(file, kind, 'hero');
          if (kind === 'video') {
            updates.heroVideo = savedUrl;
          } else {
            updates.banner = savedUrl; // fallback if hero is image
          }
        } else if (target === 'logo') {
          const savedUrl = await saveUploadedFileLocal(file, 'image', 'logo');
          updates.logo = savedUrl;
        } else if (target === 'banner') {
          const savedUrl = await saveUploadedFileLocal(file, 'image', 'banner');
          updates.banner = savedUrl;
        } else {
          // No target specified
          const savedUrl = await saveUploadedFileLocal(
            file,
            kind,
            kind === 'video' ? 'hero' : undefined
          );
          if (kind === 'video') {
            updates.heroVideo = savedUrl;
          } else {
            updates.banner = savedUrl;
          }
        }
      }

      // read other fields (only set when provided)
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
      if (!body) {
        return NextResponse.json(
          { error: 'Invalid JSON' },
          {
            status: 400,
            headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
          }
        );
      }

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
      return NextResponse.json(
        { error: 'No fields provided to update' },
        {
          status: 400,
          headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
        }
      );
    }

    // Ensure the record exists
    const existing = await prisma.homePage.findUnique({
      where: { id: idNum },
    });
    if (!existing) {
      return NextResponse.json(
        { error: 'HomePage not found' },
        {
          status: 404,
          headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
        }
      );
    }

    // Update only provided fields
    const updated = await prisma.homePage.update({
      where: { id: idNum },
      data: updates,
    });

    revalidatePath('/');
    revalidatePath('/about');

    return NextResponse.json(updated, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (err) {
    const e = err as { message?: string; statusCode?: number; cause?: unknown; code?: string };
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

    if (e?.code === 'P2025') {
      return NextResponse.json(
        { error: 'HomePage not found' },
        {
          status: 404,
          headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
        }
      );
    }
    console.error('Failed to update homepage:', err);
    return NextResponse.json(
      { error: e?.message || 'Internal Server Error' },
      {
        status: 500,
        headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
      }
    );
  }
}

/**
 * DELETE: Delete homepage content (auth required)
 */
export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const idNum = Number(id);
    if (Number.isNaN(idNum)) {
      return NextResponse.json(
        { error: 'Invalid id' },
        {
          status: 400,
          headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
        }
      );
    }

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

    const deleted = await prisma.homePage.delete({
      where: { id: idNum },
    });

    revalidatePath('/');
    revalidatePath('/about');

    return NextResponse.json(
      { message: 'HomePage deleted', homepage: deleted },
      {
        headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
      }
    );
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
      return NextResponse.json(
        { error: 'HomePage not found' },
        {
          status: 404,
          headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
        }
      );
    }
    console.error('Failed to delete homepage:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      {
        status: 500,
        headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
      }
    );
  }
}
