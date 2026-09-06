// app/api/talkshows/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import type { Session } from 'next-auth';
import { v4 as uuidv4 } from 'uuid';
import { promises as fs } from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';

export const runtime = 'nodejs';

const NO_STORE = { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' };

const includeShape = {
  createdBy: { select: { username: true, firstName: true, lastName: true, image: true } },
  approvedBy: { select: { username: true } },
  updatedBy: { select: { username: true } },
  project: { select: { id: true, title: true, slug: true } },
  event: { select: { id: true, eventTitle: true, slug: true } },
  report: { select: { id: true, title: true, slug: true } },
  institution: { select: { id: true, name: true } },
  hostBeneficiary: { select: { id: true, firstName: true, lastName: true, image: true } },
  hostUser: { select: { id: true, firstName: true, lastName: true, username: true } },
  participants: {
    include: { beneficiary: { select: { id: true, firstName: true, lastName: true, image: true } } },
  },
  podcasts: { select: { id: true, title: true } },
} as const;

// Parses a JSON-encoded array of beneficiary ids (strings) sent as a form
// field, e.g. `formData.append('participantIds', JSON.stringify(['a','b']))`.
function parseStringIdArray(formData: FormData, field: string): string[] {
  const raw = formData.get(field);
  if (!raw || typeof raw !== 'string') return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((v) => typeof v === 'string' && v.trim().length > 0);
  } catch {
    return [];
  }
}

// Parses a JSON-encoded array of numeric ids (e.g. podcast ids) sent as a
// form field, e.g. `formData.append('podcastIds', JSON.stringify([1, 2]))`.
function parseNumberIdArray(formData: FormData, field: string): number[] {
  const raw = formData.get(field);
  if (!raw || typeof raw !== 'string') return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((v) => Number(v)).filter((n) => Number.isFinite(n));
  } catch {
    return [];
  }
}

function roleFrom(session: Session | null): string {
  return session?.user?.role ?? 'guest';
}

// `field` is the FormData key to read the file from; `subdir` is where
// under public/assets/images/talkshows it's saved (empty for the card
// thumbnail, 'poster' for the wide /resources hero banner).
async function saveTalkshowImage(
  formData: FormData,
  field: string,
  subdir: string
): Promise<string | null> {
  const file = formData.get(field) as File | null;
  if (!file || typeof file === 'string') return null;

  const publicBase = subdir
    ? `/assets/images/talkshows/${subdir}`
    : '/assets/images/talkshows';
  const destDir = path.join(process.cwd(), 'public', ...publicBase.split('/').filter(Boolean));
  await fs.mkdir(destDir, { recursive: true });

  const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
  const filename = `${uuidv4()}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(destDir, filename), buffer);

  return `${publicBase}/${filename}`;
}

async function saveAudio(formData: FormData): Promise<string | null> {
  const file = formData.get('audio') as File | null;
  if (!file || typeof file === 'string') return null;

  const destDir = path.join(process.cwd(), 'public', 'assets', 'audio', 'talkshows');
  await fs.mkdir(destDir, { recursive: true });

  const ext = (file.name.split('.').pop() || 'mp3').toLowerCase();
  const filename = `${uuidv4()}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(destDir, filename), buffer);

  return `/assets/audio/talkshows/${filename}`;
}

// Parses the JSON-encoded array of waveform peaks (0..1) computed client-side
// (see lib/audioWaveform's computeWaveformPeaks) — mirrors Podcast.waveform.
function parseWaveform(formData: FormData): number[] {
  const raw = formData.get('waveform');
  if (!raw || typeof raw !== 'string') return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((v) => Number(v)).filter((n) => Number.isFinite(n));
  } catch {
    return [];
  }
}

// ---------- GET ----------
// Consumed by the admin dashboard's own listing AND as a live options source
// for the Beneficiary/Podcast/Talkshow forms' "linked talkshow" pickers — a
// cacheable Cache-Control here would let those pickers (and this section's
// own list) show a talkshow that was just edited/deleted as if nothing had
// changed, and worse, let a deleted talkshow's stale id be resubmitted from
// a picker (foreign key violation). See the matching note on /api/podcasts.
export async function GET() {
  try {
    const talkshows = await prisma.radioTalkshow.findMany({
      orderBy: { date: 'desc' },
      include: includeShape,
    });

    return NextResponse.json(talkshows, { headers: NO_STORE });
  } catch (err) {
    console.error('[/api/talkshows] Error fetching talkshows:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: NO_STORE });
  }
}

// ---------- POST ----------
// Only super/admin/moderator can create talkshows.
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const role = roleFrom(session);
    const userId = session?.user?.id as string | undefined;

    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: NO_STORE });
    if (!['super', 'admin', 'moderator'].includes(role)) {
      return NextResponse.json(
        { error: 'Forbidden: Only super/admin/moderator can create radio talkshows' },
        { status: 403, headers: NO_STORE }
      );
    }

    const contentType = req.headers.get('content-type') ?? '';
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json({ error: 'FormData required' }, { status: 400, headers: NO_STORE });
    }

    const formData = await req.formData();

    const title = ((formData.get('title') as string) || '').trim();
    const dateRaw = (formData.get('date') as string) || '';

    if (!title || !dateRaw) {
      return NextResponse.json(
        { error: 'Title and date are required' },
        { status: 400, headers: NO_STORE }
      );
    }

    const date = new Date(dateRaw);
    if (Number.isNaN(date.getTime())) {
      return NextResponse.json({ error: 'Invalid date' }, { status: 400, headers: NO_STORE });
    }

    // Optional single links to other content — everything below is optional.
    const projectIdRaw = (formData.get('projectId') as string) || '';
    const eventIdRaw = (formData.get('eventId') as string) || '';
    const reportIdRaw = (formData.get('reportId') as string) || '';
    const institutionId = ((formData.get('institutionId') as string) || '').trim() || undefined;

    const projectId = projectIdRaw ? Number(projectIdRaw) : undefined;
    const eventId = eventIdRaw ? Number(eventIdRaw) : undefined;
    const reportId = reportIdRaw ? Number(reportIdRaw) : undefined;

    // "By" — host of the talkshow.
    const hostTypeRaw = (formData.get('hostType') as string) || '';
    const hostType =
      hostTypeRaw === 'beneficiary' || hostTypeRaw === 'admin' || hostTypeRaw === 'guest'
        ? hostTypeRaw
        : undefined;
    const hostBeneficiaryId =
      hostType === 'beneficiary' ? ((formData.get('hostBeneficiaryId') as string) || '').trim() || undefined : undefined;
    const hostUserId =
      hostType === 'admin' ? ((formData.get('hostUserId') as string) || '').trim() || undefined : undefined;
    const hostFirstName =
      hostType === 'guest' ? ((formData.get('hostFirstName') as string) || '').trim() || undefined : undefined;
    const hostLastName =
      hostType === 'guest' ? ((formData.get('hostLastName') as string) || '').trim() || undefined : undefined;

    const publishStatusRaw = (formData.get('publishStatus') as string) || 'draft';
    const publishStatus = publishStatusRaw === 'published' ? 'published' : 'draft';

    const participantIds = parseStringIdArray(formData, 'participantIds');
    const podcastIds = parseNumberIdArray(formData, 'podcastIds');

    const image = await saveTalkshowImage(formData, 'image', '');
    const poster = await saveTalkshowImage(formData, 'poster', 'poster');
    const audioUrl = await saveAudio(formData);
    const waveform = parseWaveform(formData);

    const created = await prisma.radioTalkshow.create({
      data: {
        title,
        date,
        image,
        poster,
        audioUrl,
        waveform,
        publishStatus,
        projectId,
        eventId,
        reportId,
        institutionId,
        hostType,
        hostBeneficiaryId,
        hostUserId,
        hostFirstName,
        hostLastName,
        createdById: userId,
        updatedById: userId,
        approvedById: userId,
        ...(participantIds.length && {
          participants: { create: participantIds.map((beneficiaryId) => ({ beneficiaryId })) },
        }),
      },
      include: includeShape,
    });

    // Podcasts own the FK (Podcast.talkshowId), so linking them to this new
    // talkshow is a direct update on the podcast side.
    if (podcastIds.length) {
      await prisma.podcast.updateMany({
        where: { id: { in: podcastIds } },
        data: { talkshowId: created.id },
      });
    }

    const full = podcastIds.length
      ? await prisma.radioTalkshow.findUniqueOrThrow({ where: { id: created.id }, include: includeShape })
      : created;

    revalidatePath('/resources');

    return NextResponse.json(full, { headers: NO_STORE });
  } catch (error) {
    console.error('[/api/talkshows] Failed to create talkshow:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: NO_STORE });
  }
}
