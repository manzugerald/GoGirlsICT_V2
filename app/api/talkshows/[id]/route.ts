// app/api/talkshows/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import type { Session } from 'next-auth';
import { v4 as uuidv4 } from 'uuid';
import { promises as fs } from 'fs';
import path from 'path';

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

// Parses a JSON-encoded array of numeric ids (e.g. podcast ids).
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

async function savePoster(formData: FormData): Promise<string | null> {
  const file = formData.get('poster') as File | null;
  if (!file || typeof file === 'string') return null;

  const destDir = path.join(process.cwd(), 'public', 'assets', 'images', 'talkshows');
  await fs.mkdir(destDir, { recursive: true });

  const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
  const filename = `${uuidv4()}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(destDir, filename), buffer);

  return `/assets/images/talkshows/${filename}`;
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

// Parses the JSON-encoded array of waveform peaks (0..1) computed client-side.
function parseWaveform(formData: FormData): number[] | null {
  const raw = formData.get('waveform');
  if (!raw || typeof raw !== 'string') return null;
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;
    return parsed.map((v) => Number(v)).filter((n) => Number.isFinite(n));
  } catch {
    return null;
  }
}

// GET single talkshow — PUBLIC
export async function GET(_req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const id = Number(params.id);
    if (!id || Number.isNaN(id)) {
      return NextResponse.json({ error: 'Invalid Talkshow ID' }, { status: 400, headers: NO_STORE });
    }

    const talkshow = await prisma.radioTalkshow.findUnique({
      where: { id },
      include: includeShape,
    });

    if (!talkshow) {
      return NextResponse.json({ error: 'Talkshow not found' }, { status: 404, headers: NO_STORE });
    }

    return NextResponse.json(talkshow, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (error) {
    console.error('Failed to fetch talkshow:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: NO_STORE });
  }
}

// PATCH: update talkshow — super/admin/moderator only
export async function PATCH(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const id = Number(params.id);
    if (!id || Number.isNaN(id)) {
      return NextResponse.json({ error: 'Invalid Talkshow ID' }, { status: 400, headers: NO_STORE });
    }

    const session = await getServerSession(authOptions);
    const role = roleFrom(session);
    const userId = session?.user?.id as string | undefined;

    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: NO_STORE });
    if (!['super', 'admin', 'moderator'].includes(role)) {
      return NextResponse.json(
        { error: 'Forbidden: Only super/admin/moderator can update radio talkshows' },
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

    const projectIdRaw = (formData.get('projectId') as string) || '';
    const eventIdRaw = (formData.get('eventId') as string) || '';
    const reportIdRaw = (formData.get('reportId') as string) || '';
    const institutionIdRaw = (formData.get('institutionId') as string) || '';

    const hostTypeRaw = (formData.get('hostType') as string) || '';
    const hostType =
      hostTypeRaw === 'beneficiary' || hostTypeRaw === 'admin' || hostTypeRaw === 'guest'
        ? hostTypeRaw
        : null;
    const hostBeneficiaryIdRaw = (formData.get('hostBeneficiaryId') as string) || '';
    const hostUserIdRaw = (formData.get('hostUserId') as string) || '';
    const hostFirstNameRaw = (formData.get('hostFirstName') as string) || '';
    const hostLastNameRaw = (formData.get('hostLastName') as string) || '';

    const publishStatusRaw = (formData.get('publishStatus') as string) || 'draft';
    const publishStatus = publishStatusRaw === 'published' ? 'published' : 'draft';

    const participantIds = parseStringIdArray(formData, 'participantIds');
    const podcastIds = parseNumberIdArray(formData, 'podcastIds');

    const existing = await prisma.radioTalkshow.findUnique({
      where: { id },
      select: { poster: true, audioUrl: true, waveform: true },
    });
    if (!existing) {
      return NextResponse.json({ error: 'Talkshow not found' }, { status: 404, headers: NO_STORE });
    }

    const removePoster = formData.get('removePoster') === '1';
    const uploadedPoster = await savePoster(formData);
    const poster = uploadedPoster ?? (removePoster ? null : existing.poster);

    const removeAudio = formData.get('removeAudio') === '1';
    const uploadedAudio = await saveAudio(formData);
    const audioUrl = uploadedAudio ?? (removeAudio ? null : existing.audioUrl);
    const submittedWaveform = parseWaveform(formData);
    const waveform = uploadedAudio
      ? submittedWaveform ?? []
      : removeAudio
      ? []
      : existing.waveform;

    // Clear the fields belonging to whichever host type is NOT selected, so
    // switching from e.g. "guest" to "beneficiary" doesn't leave stale
    // hostFirstName/hostLastName sitting alongside the new hostBeneficiaryId.
    const updated = await prisma.radioTalkshow.update({
      where: { id },
      data: {
        title,
        date,
        poster,
        audioUrl,
        waveform,
        publishStatus,
        projectId: projectIdRaw ? Number(projectIdRaw) : null,
        eventId: eventIdRaw ? Number(eventIdRaw) : null,
        reportId: reportIdRaw ? Number(reportIdRaw) : null,
        institutionId: institutionIdRaw || null,
        hostType,
        hostBeneficiaryId: hostType === 'beneficiary' ? hostBeneficiaryIdRaw || null : null,
        hostUserId: hostType === 'admin' ? hostUserIdRaw || null : null,
        hostFirstName: hostType === 'guest' ? hostFirstNameRaw || null : null,
        hostLastName: hostType === 'guest' ? hostLastNameRaw || null : null,
        updatedById: userId,
      },
    });

    // Sync participants to exactly the given set.
    if (participantIds.length) {
      await prisma.beneficiaryTalkshow.deleteMany({
        where: { talkshowId: id, beneficiaryId: { notIn: participantIds } },
      });
    } else {
      await prisma.beneficiaryTalkshow.deleteMany({ where: { talkshowId: id } });
    }
    if (participantIds.length) {
      await prisma.beneficiaryTalkshow.createMany({
        data: participantIds.map((beneficiaryId) => ({ talkshowId: id, beneficiaryId })),
        skipDuplicates: true,
      });
    }

    // Podcasts own the FK (Podcast.talkshowId): unlink any podcast that
    // currently points here but isn't in the new set, then link the new set.
    if (podcastIds.length) {
      await prisma.podcast.updateMany({
        where: { talkshowId: id, id: { notIn: podcastIds } },
        data: { talkshowId: null },
      });
    } else {
      await prisma.podcast.updateMany({
        where: { talkshowId: id },
        data: { talkshowId: null },
      });
    }
    if (podcastIds.length) {
      await prisma.podcast.updateMany({
        where: { id: { in: podcastIds } },
        data: { talkshowId: id },
      });
    }

    const full = await prisma.radioTalkshow.findUniqueOrThrow({
      where: { id: updated.id },
      include: includeShape,
    });

    return NextResponse.json(full, { headers: NO_STORE });
  } catch (error) {
    console.error('Failed to update talkshow:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: NO_STORE });
  }
}

// DELETE — super/admin/moderator only
export async function DELETE(_req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const id = Number(params.id);
    if (!id || Number.isNaN(id)) {
      return NextResponse.json({ error: 'Invalid Talkshow ID' }, { status: 400, headers: NO_STORE });
    }

    const session = await getServerSession(authOptions);
    const role = roleFrom(session);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: NO_STORE });
    }
    if (!['super', 'admin', 'moderator'].includes(role)) {
      return NextResponse.json(
        { error: 'Forbidden: Only super/admin/moderator can delete radio talkshows' },
        { status: 403, headers: NO_STORE }
      );
    }

    const deleted = await prisma.radioTalkshow.delete({ where: { id } });

    return NextResponse.json({ message: 'Talkshow deleted', talkshow: deleted }, { headers: NO_STORE });
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
      return NextResponse.json({ error: 'Talkshow not found' }, { status: 404, headers: NO_STORE });
    }
    console.error('Failed to delete talkshow:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: NO_STORE });
  }
}
