import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redis } from '@/utils/redis';
import { saveUploadedFile } from '@/lib/uploadHelpers';

export const runtime = 'nodejs';

const HOMEPAGE_CACHE_KEY = 'homepage:latest';
const SINGLE_HOMEPAGE_CACHE_PREFIX = 'homepage:'; // homepage:[id]
const CACHE_TTL = 60 * 60 * 24 * 7; // 7 days

/**
 * GET: Fetch single homepage by id (with cache)
 */
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const singleCacheKey = SINGLE_HOMEPAGE_CACHE_PREFIX + params.id;
    const cached = await redis.get(singleCacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached));
    }

    const homepage = await prisma.homePage.findUnique({
      where: { id: Number(params.id) },
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
 * PATCH: Update homepage content (auth required)
 * Supports multipart/form-data (file + fields) or JSON body.
 */
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
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

    if (contentType.includes('multipart/form-data')) {
      const form = await req.formData();

      // save uploaded video if provided
      const saved = await saveUploadedFile(form, 'file', 'video', 'homePage');
      if (saved) heroVideo = saved;

      const fHero = form.get('heroVideo');
      const fVision = form.get('vision');
      const fMission = form.get('mission');
      const fFocus = form.get('focus');
      const fCoreValues = form.get('coreValues');

      heroVideo = heroVideo ?? (typeof fHero === 'string' ? fHero : undefined);
      vision = typeof fVision === 'string' ? fVision : undefined;
      mission = typeof fMission === 'string' ? fMission : undefined;
      focus = typeof fFocus === 'string' ? fFocus : undefined;
      coreValues = typeof fCoreValues === 'string' ? fCoreValues : undefined;
    } else {
      const body = await req.json().catch(() => null);
      if (!body) {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
      }
      heroVideo = body.heroVideo;
      vision = body.vision;
      mission = body.mission;
      focus = body.focus;
      coreValues = body.coreValues;
    }

    // Require all fields to update
    if (!heroVideo || !vision || !mission || !focus || !coreValues) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const updated = await prisma.homePage.update({
      where: { id: Number(params.id) },
      data: {
        heroVideo,
        vision,
        mission,
        focus,
        coreValues,
      },
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
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
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

    const deleted = await prisma.homePage.delete({
      where: { id: Number(params.id) },
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
