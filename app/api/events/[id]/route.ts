import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { revalidatePath } from 'next/cache';

function tryParseMaybeString(v: unknown) {
  if (v == null) return null;
  if (typeof v !== 'string') return v;
  const s = v.trim();
  if (!s) return null;
  if ((s.startsWith('{') && s.endsWith('}')) || (s.startsWith('[') && s.endsWith(']'))) {
    try {
      return JSON.parse(s);
    } catch {
      return s;
    }
  }
  return s;
}

function extractUrlFromCandidate(candidate: unknown): string | null {
  if (!candidate) return null;
  const value = tryParseMaybeString(candidate);
  if (!value) return null;

  if (typeof value === 'string') {
    return value.trim() || null;
  }
  if (Array.isArray(value)) {
    for (const it of value) {
      if (typeof it === 'string' && it.trim()) return it.trim();
      if (it && typeof it === 'object') {
        const maybe = (it as Record<string, unknown>).url ?? (it as Record<string, unknown>).src ?? (it as Record<string, unknown>).path;
        if (maybe && typeof maybe === 'string' && maybe.trim()) return maybe.trim();
      }
    }
    return null;
  }
  if (typeof value === 'object') {
    return ((value as Record<string, unknown>).url ?? (value as Record<string, unknown>).src ?? (value as Record<string, unknown>).path ?? null) as string | null;
  }
  return null;
}

function extractArrayFromCandidate(candidate: unknown): string[] {
  const out: string[] = [];
  if (candidate == null) return out;
  const value = tryParseMaybeString(candidate);
  if (!value) return out;

  if (Array.isArray(value)) {
    for (const it of value) {
      if (!it) continue;
      if (typeof it === 'string' && it.trim()) out.push(it.trim());
      else if (typeof it === 'object') {
        const maybe = (it as Record<string, unknown>).url ?? (it as Record<string, unknown>).src ?? (it as Record<string, unknown>).path;
        if (maybe && typeof maybe === 'string' && maybe.trim()) out.push(maybe.trim());
      }
    }
    return out;
  }

  if (typeof value === 'string' && value.trim()) {
    if (value.includes(',')) {
      const parts = value
        .split(',')
        .map((p) => p.trim())
        .filter(Boolean);
      out.push(...parts);
    } else {
      out.push(value.trim());
    }
    return out;
  }

  if (typeof value === 'object') {
    const maybe = (value as Record<string, unknown>).url ?? (value as Record<string, unknown>).src ?? (value as Record<string, unknown>).path;
    if (maybe && typeof maybe === 'string' && maybe.trim()) out.push(maybe.trim());
    return out;
  }

  return out;
}

function toAbsoluteUrl(origin: string, url: string | null | undefined): string | null {
  if (!url) return null;
  const s = String(url).trim();
  if (!s) return null;
  if (/^https?:\/\//i.test(s)) return s;
  if (s.startsWith('//')) return `${new URL(origin).protocol}${s}`;
  if (s.startsWith('/')) return `${origin}${s}`;
  return `${origin}/${s}`;
}

const CANONICAL_BANNER_PREFIX = '/assets/events/images/banner/';

function resolveBannerPathStrict(origin: string, bannerCandidateRaw: string | null): string | null {
  if (!bannerCandidateRaw) return null;
  let candidate = bannerCandidateRaw;
  try {
    if (/^https?:\/\//i.test(candidate) || candidate.startsWith('//')) {
      candidate = new URL(candidate, origin).pathname;
    }
  } catch {
    // ignore
  }

  if (!candidate.startsWith('/')) candidate = '/' + candidate;

  if (candidate.startsWith(CANONICAL_BANNER_PREFIX)) {
    return toAbsoluteUrl(origin, candidate);
  }

  const imagesPrefix = '/assets/events/images/';
  if (candidate.startsWith(imagesPrefix)) {
    const filename = path.posix.basename(candidate);
    const bannerPath = path.posix.join(imagesPrefix, 'banner', filename);
    return toAbsoluteUrl(origin, bannerPath);
  }

  return toAbsoluteUrl(origin, candidate);
}

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: idParam } = await params;
    const id = Number(idParam);
    if (isNaN(id))
      return NextResponse.json(
        { error: 'Invalid ID' },
        { status: 400, headers: { 'Cache-Control': 'no-store' } }
      );

    const event = await prisma.event.findUnique({
      where: { id },
      select: {
        id: true,
        slug: true,
        eventTitle: true,
        eventStartDate: true,
        eventEndDate: true,
        eventStatus: true,
        eventDescription: true,
        eventDetails: true,
        eventLocation: true,
        eventBanner: true,
        eventImages: true,
        eventFile: true,
        eventTags: true,
        eventAttendance: true,
        maxAttendees: true,
        publishStatus: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        createdBy: { select: { firstName: true, lastName: true, username: true } },
        updatedBy: { select: { username: true } },
        project: { select: { title: true, id: true } },
        report: { select: { title: true, id: true } },
        beneficiaries: {
          select: {
            beneficiary: { select: { id: true, firstName: true, lastName: true, image: true } },
          },
        },
      },
    });

    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404, headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } }
      );
    }

    const origin = new URL(req.url).origin;

    // These legacy field-name fallbacks (banner/cover/images/file/files)
    // aren't part of the current select shape — kept for rows saved under
    // older field names.
    const legacy = event as unknown as Record<string, unknown>;
    const bannerCandidate = event.eventBanner ?? legacy.banner ?? legacy.cover ?? null;
    const bannerUrlRaw = extractUrlFromCandidate(bannerCandidate);
    const bannerUrl = resolveBannerPathStrict(origin, bannerUrlRaw);

    const imagesRaw = event.eventImages ?? legacy.images ?? null;
    const imagesListRaw = extractArrayFromCandidate(imagesRaw);
    const images = imagesListRaw.map((it) => toAbsoluteUrl(origin, it)).filter(Boolean) as string[];

    const rawFileCandidate = event.eventFile ?? legacy.file ?? legacy.files ?? null;
    let pdfUrl: string | null = null;
    if (rawFileCandidate) {
      const filesArr = extractArrayFromCandidate(rawFileCandidate);
      if (filesArr.length > 0) {
        const foundPdf = filesArr.find(
          (f) => typeof f === 'string' && f.toLowerCase().endsWith('.pdf')
        );
        const chosen = foundPdf ?? filesArr[0];
        pdfUrl = toAbsoluteUrl(origin, chosen) as string | null;
      } else if (typeof rawFileCandidate === 'string' && rawFileCandidate.trim()) {
        pdfUrl = toAbsoluteUrl(origin, rawFileCandidate);
      }
    }

    const normalizedEvent = {
      ...event,
      eventBanner: bannerUrl,
      eventImages: images,
      eventFile: pdfUrl ?? event.eventFile,
    };

    return NextResponse.json(normalizedEvent, { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } });
  } catch (err) {
    console.error('Error fetching event:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500, headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } }
    );
  }
}

// PUT/DELETE - keep behavior but return no-store headers for responses
export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const session = await getServerSession(authOptions);
    if (!session?.user?.id)
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401, headers: { 'Cache-Control': 'no-store' } }
      );

    const trimmedId = params.id.trim();
    const eventId = Number(trimmedId);
    if (isNaN(eventId))
      return NextResponse.json(
        { error: 'Invalid Event ID' },
        { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
      );

    // ... (existing parsing / saving logic as before) ...
    // For brevity, re-use your existing PUT implementation here; make sure it returns no-store
    // For example after updating:
    // return NextResponse.json(updatedEvent, { headers: { 'Cache-Control': 'no-store' } });

    // Placeholder response until you paste your existing PUT body back in:
    return NextResponse.json(
      { error: 'PUT not implemented in this snippet' },
      { status: 501, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
    );
  } catch (err) {
    console.error('Failed to update event:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
    );
  }
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const session = await getServerSession(authOptions);
    if (!session?.user?.id)
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
      );

    const id = Number(params.id);
    if (isNaN(id))
      return NextResponse.json(
        { error: 'Invalid ID' },
        { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
      );

    await prisma.event.delete({ where: { id } });

    revalidatePath('/');
    revalidatePath('/impact');

    return NextResponse.json({ success: true }, { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  } catch (err) {
    console.error('Failed to delete event:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
    );
  }
}
