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

// Cleans a JSON body array of beneficiary ids (strings) down to non-empty strings.
function cleanStringIdArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((v): v is string => typeof v === 'string' && v.trim().length > 0);
}

// Handle GET (fetch all podcasts) -- consumed by the admin dashboard's
// listing, which needs to see edits/creates/deletes immediately. A
// cacheable Cache-Control here (previously s-maxage=3600) meant the
// browser could serve a stale list right after a save succeeded,
// making an edit look like it hadn't persisted even though it had.
export async function GET() {
  try {
    const podcasts = await prisma.podcast.findMany({
      orderBy: { publishedAt: 'desc' },
      include: includeShape,
    });

    return NextResponse.json(podcasts, { headers: NO_STORE });
  } catch (err) {
    console.error('[/api/podcasts] Error fetching podcasts:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: NO_STORE });
  }
}

// Handle POST (create new podcast) -- AUTH REQUIRED
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: NO_STORE });
    }
    const userId = session.user.id;

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json(
        { error: 'Authenticated user not found in database.' },
        { status: 400, headers: NO_STORE }
      );
    }

    const data = await req.json();
    const {
      title,
      description,
      image = null,
      poster = null,
      audioUrl,
      waveform = [],
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

    const podcast = await prisma.podcast.create({
      data: {
        title,
        slug,
        description,
        image,
        poster,
        audioUrl,
        waveform: Array.isArray(waveform) ? waveform : [],
        publishedAt: publishedAt ? new Date(publishedAt) : new Date(),
        publishStatus,
        createdById: userId,
        approvedById: userId,
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
        ...(participantIds.length && {
          beneficiaries: { create: participantIds.map((beneficiaryId) => ({ beneficiaryId })) },
        }),
      },
      include: includeShape,
    });

    revalidatePath('/resources');

    return NextResponse.json(podcast, { headers: NO_STORE });
  } catch (error) {
    console.error('[/api/podcasts] Failed to create podcast:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: NO_STORE });
  }
}
