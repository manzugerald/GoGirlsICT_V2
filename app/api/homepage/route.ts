import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redis } from '@/utils/redis';
import { saveUploadedFile } from '@/lib/uploadHelpers';

export const runtime = 'nodejs';

const HOMEPAGE_CACHE_KEY = 'homepage:latest';
const HOMEPAGE_CACHE_TTL = 60 * 60 * 24 * 7; // 7 days

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
 * - Accepts multipart/form-data with field "file" to upload a hero video (upload-only flow).
 *   The saved URL is returned as { url: string } so the client can populate heroVideo and then submit content.
 * - Also accepts JSON body to create a homepage record (heroVideo + vision + mission + focus + coreValues).
 *
 * Auth: requires authenticated user for both upload and creating DB record.
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

    if (contentType.includes('multipart/form-data')) {
      // Parse form and save a single video file (field name 'file')
      const form = await req.formData();

      // saveUploadedFile will validate extension and size for 'video' type
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

    // Upload-only flow: return saved file URL so client can set heroVideo and later submit full content
    const hasContentFields = Boolean(vision && mission && focus && coreValues);
    if (heroVideo && !hasContentFields) {
      return NextResponse.json({ url: heroVideo });
    }

    // For creation we require all fields
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
      },
    });

    try {
      await redis.del(HOMEPAGE_CACHE_KEY);
    } catch (err) {
      console.warn('Failed to invalidate homepage cache:', err);
    }

    return NextResponse.json(homePage, { status: 201 });
  } catch (err: any) {
    // Surface body-size errors clearly
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
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
