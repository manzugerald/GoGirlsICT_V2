import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { slugify } from '@/lib/utils';
import { extractPlainText, isTiptapDocEmpty } from '@/lib/tiptap';
import { revalidatePath } from 'next/cache';

const NO_STORE = { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' };

const includeShape = {
  createdBy: { select: { firstName: true, lastName: true, image: true } },
  approvedBy: { select: { firstName: true, lastName: true } },
  updatedBy: { select: { firstName: true, lastName: true } },
  project: { select: { id: true, title: true, slug: true } },
  event: { select: { id: true, eventTitle: true, slug: true } },
  report: { select: { id: true, title: true, slug: true } },
  institution: { select: { id: true, name: true } },
  talkshow: { select: { id: true, title: true } },
  hostBeneficiary: { select: { id: true, firstName: true, lastName: true, image: true } },
  hostUser: { select: { id: true, firstName: true, lastName: true, username: true } },
  beneficiaries: {
    include: { beneficiary: { select: { id: true, firstName: true, lastName: true, image: true } } },
  },
} as const;

function cleanStringIdArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((v): v is string => typeof v === 'string' && v.trim().length > 0);
}

// GET single podcast -- PUBLIC
export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const podcastId = Number(params.id);
    if (!podcastId || isNaN(podcastId)) {
      return NextResponse.json({ error: 'Invalid Podcast ID' }, { status: 400, headers: { 'Cache-Control': 'no-store' } });
    }

    const podcast = await prisma.podcast.findUnique({ where: { id: podcastId }, include: includeShape });

    if (!podcast) {
      return NextResponse.json({ error: 'Podcast not found' }, { status: 404, headers: { 'Cache-Control': 'no-store' } });
    }

    return NextResponse.json(podcast, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (error) {
    console.error('Failed to fetch podcast:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'no-store' } });
  }
}

// Handle PUT (update podcast) -- AUTH REQUIRED
export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: NO_STORE });
    }
    const userId = session.user.id;

    const podcastId = Number(params.id);
    if (!podcastId || isNaN(podcastId)) {
      return NextResponse.json({ error: 'Invalid Podcast ID' }, { status: 400, headers: NO_STORE });
    }

    const data = await req.json();
    const {
      title,
      description,
      image = null,
      poster = null,
      audioUrl,
      waveform,
      publishedAt,
      publishStatus,
      accessCount = 0,
      // Everything below is optional.
      projectId = null,
      eventId = null,
      reportId = null,
      institutionId = null,
      talkshowId = null,
      hostType = null,
      hostBeneficiaryId = null,
      hostUserId = null,
      hostFirstName = null,
      hostLastName = null,
      beneficiaryIds = [],
    } = data;

    if (isTiptapDocEmpty(title) || !description || !audioUrl) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400, headers: NO_STORE });
    }

    const validHostType =
      hostType === 'beneficiary' || hostType === 'admin' || hostType === 'guest' ? hostType : null;

    const slug = slugify(extractPlainText(title).trim());
    const participantIds = cleanStringIdArray(beneficiaryIds);

    const updatedPodcast = await prisma.podcast.update({
      where: { id: podcastId },
      data: {
        title,
        slug,
        description,
        image,
        poster,
        audioUrl,
        waveform: Array.isArray(waveform) ? waveform : undefined,
        publishedAt: publishedAt ? new Date(publishedAt) : undefined,
        publishStatus,
        updatedById: userId,
        accessCount,
        projectId: projectId ? Number(projectId) : null,
        eventId: eventId ? Number(eventId) : null,
        reportId: reportId ? Number(reportId) : null,
        institutionId: institutionId || null,
        talkshowId: talkshowId ? Number(talkshowId) : null,
        hostType: validHostType,
        hostBeneficiaryId: validHostType === 'beneficiary' ? hostBeneficiaryId || null : null,
        hostUserId: validHostType === 'admin' ? hostUserId || null : null,
        hostFirstName: validHostType === 'guest' ? hostFirstName || null : null,
        hostLastName: validHostType === 'guest' ? hostLastName || null : null,
      },
    });

    // Sync beneficiary participation to exactly the given set.
    if (participantIds.length) {
      await prisma.beneficiaryPodcast.deleteMany({
        where: { podcastId, beneficiaryId: { notIn: participantIds } },
      });
    } else {
      await prisma.beneficiaryPodcast.deleteMany({ where: { podcastId } });
    }
    if (participantIds.length) {
      await prisma.beneficiaryPodcast.createMany({
        data: participantIds.map((beneficiaryId) => ({ podcastId, beneficiaryId })),
        skipDuplicates: true,
      });
    }

    const full = await prisma.podcast.findUniqueOrThrow({ where: { id: updatedPodcast.id }, include: includeShape });

    revalidatePath('/resources');

    return NextResponse.json(full, { headers: NO_STORE });
  } catch (error) {
    console.error('Failed to update podcast:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: NO_STORE });
  }
}

// Handle DELETE -- AUTH REQUIRED
export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized Action' }, { status: 401, headers: NO_STORE });
    }

    const podcastId = Number(params.id);
    if (!podcastId || isNaN(podcastId)) {
      return NextResponse.json({ error: 'Invalid Podcast Id' }, { status: 400, headers: NO_STORE });
    }

    await prisma.podcast.delete({ where: { id: podcastId } });

    revalidatePath('/resources');

    return NextResponse.json({ success: true }, { headers: NO_STORE });
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
      return NextResponse.json({ error: 'Podcast not found' }, { status: 404, headers: NO_STORE });
    }
    console.error('Failed to delete podcast:', error);
    return NextResponse.json({ error: 'Failed to delete podcast' }, { status: 500, headers: NO_STORE });
  }
}
