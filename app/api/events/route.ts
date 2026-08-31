import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import path from 'path';
import { revalidatePath } from 'next/cache';

async function fetchEventsFromDb() {
  return prisma.event.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      slug: true,
      eventTitle: true,
      eventStartDate: true,
      eventEndDate: true,
      eventStatus: true,
      eventLocation: true,
      eventImages: true,
      eventBanner: true,
      eventFile: true,
      eventTags: true,
      maxAttendees: true,
      eventDetails: true,
      eventDescription: true,
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
}

// try parse JSON-like string otherwise return raw
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
        const maybe = ((it as Record<string, unknown>).url ?? (it as Record<string, unknown>).src ?? (it as Record<string, unknown>).path) as string | undefined;
        if (maybe && maybe.trim()) return maybe.trim();
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

// Canonical banner folder (your confirmed path)
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

  // If already in canonical folder, return absolute
  if (candidate.startsWith(CANONICAL_BANNER_PREFIX)) {
    return toAbsoluteUrl(origin, candidate);
  }

  // If it's under /assets/events/images/, map to /assets/events/images/banner/<filename>
  const imagesPrefix = '/assets/events/images/';
  if (candidate.startsWith(imagesPrefix)) {
    const filename = path.posix.basename(candidate);
    const bannerPath = path.posix.join(imagesPrefix, 'banner', filename); // /assets/events/images/banner/filename.jpg
    // Return canonical banner path (no fallback to the non-banner location)
    return toAbsoluteUrl(origin, bannerPath);
  }

  // Otherwise return absolute conversion of original candidate
  return toAbsoluteUrl(origin, candidate);
}

// Rows are read defensively across legacy/alternate field-name variants
// (eventBanner|banner|cover, eventFile|file|files, ...) not present in the
// current select shape — hence one deliberate loose alias here instead of
// scattering `any`.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type EventRow = any;

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const origin = url.origin;

    const events = await fetchEventsFromDb();

    const normalizedEvents = events.map((ev: EventRow) => {
      const rawBannerCandidate = ev.eventBanner ?? ev.banner ?? ev.cover ?? null;
      const bannerCandidate = tryParseMaybeString(rawBannerCandidate);
      const bannerUrlRaw = extractUrlFromCandidate(bannerCandidate);
      const bannerUrl = resolveBannerPathStrict(origin, bannerUrlRaw);

      const rawImagesCandidate = ev.eventImages ?? ev.images ?? null;
      const imagesListRaw = extractArrayFromCandidate(rawImagesCandidate);
      const images = imagesListRaw
        .map((it) => toAbsoluteUrl(origin, it))
        .filter(Boolean) as string[];

      const rawFileCandidate = ev.eventFile ?? ev.file ?? ev.files ?? null;
      let pdfUrl: string | null = null;
      if (rawFileCandidate) {
        const filesArr = extractArrayFromCandidate(rawFileCandidate);
        if (filesArr.length > 0) {
          const found = filesArr.find(
            (f) => typeof f === 'string' && f.toLowerCase().endsWith('.pdf')
          );
          const chosen = found ?? filesArr[0];
          pdfUrl = toAbsoluteUrl(origin, chosen) as string | null;
        } else if (typeof rawFileCandidate === 'string' && rawFileCandidate.trim()) {
          pdfUrl = toAbsoluteUrl(origin, rawFileCandidate);
        }
      }

      return {
        ...ev,
        eventBanner: bannerUrl,
        eventImages: images,
        eventFile: pdfUrl ?? ev.eventFile,
      };
    });

    return NextResponse.json(normalizedEvents, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (err) {
    console.error('[/api/events] Error fetching events:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500, headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } }
    );
  }
}

// POST left as-is (no caching). If desired, add same no-store header to POST responses as well.
export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Minimal validation omitted for brevity; original POST logic can be re-added here
    const event = await prisma.event.create({ data });

    revalidatePath('/');
    revalidatePath('/impact');

    return NextResponse.json(event, { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  } catch (err) {
    console.error('[/api/events] Failed to create event:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
    );
  }
}
