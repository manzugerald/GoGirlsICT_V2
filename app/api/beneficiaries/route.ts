// app/api/beneficiaries/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { v4 as uuidv4 } from 'uuid';
import { promises as fs } from 'fs';
import path from 'path';
import { redis } from '@/utils/redis';
import { isTiptapDocEmpty, normalizeTiptapDoc } from '@/lib/tiptap';
import { revalidatePath } from 'next/cache';

export const runtime = 'nodejs';

const BASE_CACHE_KEY = 'beneficiaries';
const CACHE_TTL = 10 * 60; // 10 minutes

const includeShape = {
  createdBy: { select: { username: true, firstName: true, lastName: true, image: true } },
  approvedBy: { select: { username: true } },
  updatedBy: { select: { username: true } },
  institution: { select: { id: true, name: true } },
  projects: { include: { project: { select: { id: true, title: true, slug: true } } } },
  events: { include: { event: { select: { id: true, eventTitle: true, slug: true } } } },
  reports: { include: { report: { select: { id: true, title: true, slug: true } } } },
  podcasts: { include: { podcast: { select: { id: true, title: true, slug: true } } } },
  talkshows: { include: { talkshow: { select: { id: true, title: true } } } },
} as const;

// Parses a JSON-encoded array of ids (sent as a form field, e.g.
// `formData.append('eventIds', JSON.stringify([1, 2]))`) into a clean
// array of positive integers, discarding anything malformed.
function parseIdArray(formData: FormData, field: string): number[] {
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

function roleFrom(session: any): string {
  return session?.user?.role ?? 'guest';
}
function namesFrom(session: any): { firstName?: string; lastName?: string } {
  return {
    firstName: session?.user?.firstName ?? undefined,
    lastName: session?.user?.lastName ?? undefined,
  };
}
function ownCacheKey(firstName: string, lastName: string) {
  return `${BASE_CACHE_KEY}:own:${encodeURIComponent(firstName)}|${encodeURIComponent(lastName)}`;
}

async function saveFiles(formData: FormData, field: string, destDir: string): Promise<string[]> {
  const files = formData.getAll(field) as File[];
  const savedNames: string[] = [];
  if (files && files.length > 0) {
    await fs.mkdir(destDir, { recursive: true });
    for (const file of files) {
      if (!file || typeof file === 'string') continue;
      const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
      const filename = `${uuidv4()}.${ext}`;
      const buffer = Buffer.from(await file.arrayBuffer());
      await fs.writeFile(path.join(destDir, filename), buffer);
      savedNames.push(filename);
    }
  }
  return savedNames;
}

// ---------- GET ----------
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const role = roleFrom(session);

    // Beneficiary: query DB directly (no cache) with case-insensitive exact name match
    if (role === 'beneficiary') {
      const { firstName, lastName } = namesFrom(session);
      const fn = firstName?.trim();
      const ln = lastName?.trim();

      if (!fn || !ln) return NextResponse.json([]);

      const beneficiaries = await prisma.beneficiary.findMany({
        where: {
          firstName: { equals: fn, mode: 'insensitive' },
          lastName: { equals: ln, mode: 'insensitive' },
        },
        orderBy: { createdAt: 'desc' },
        include: {
          ...includeShape,
          _count: {
            select: { messages: true, responses: true },
          },
        },
      });

      // Normalize to include common convenience fields (messageCount/responseCount)
      const enriched = beneficiaries.map((b: any) => {
        const messageCount = typeof b._count?.messages === 'number' ? b._count.messages : 0;
        const responseCount = typeof b._count?.responses === 'number' ? b._count.responses : 0;
        return { ...b, messageCount, responseCount };
      });

      return NextResponse.json(enriched, {
        headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
      });
    }

    // Others (super/admin/moderator/guest): use cache for "all"
    const keyAll = `${BASE_CACHE_KEY}:all`;
    const cached = await redis.get(keyAll);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        return NextResponse.json(Array.isArray(parsed) ? parsed : [], {
          headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
        });
      } catch {
        await redis.del(keyAll);
      }
    }

    const all = await prisma.beneficiary.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        ...includeShape,
        _count: {
          select: { messages: true, responses: true },
        },
      },
    });

    // Normalize beneficiaries with convenience fields
    const enrichedAll = all.map((b: any) => {
      const messageCount = typeof b._count?.messages === 'number' ? b._count.messages : 0;
      const responseCount = typeof b._count?.responses === 'number' ? b._count.responses : 0;
      return { ...b, messageCount, responseCount };
    });

    await redis.set(keyAll, JSON.stringify(enrichedAll), 'EX', CACHE_TTL);
    return NextResponse.json(enrichedAll, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (err) {
    console.error('Error fetching beneficiaries:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { 
      status: 500,
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  }
}

// ---------- POST ----------
// Only super/admin
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const role = roleFrom(session);
    const userId = session?.user?.id as string | undefined;

    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    if (!['super', 'admin'].includes(role)) {
      return NextResponse.json(
        { error: 'Forbidden: Only super/admin can create beneficiaries' },
        { status: 403 }
      );
    }

    const contentType = req.headers.get('content-type') ?? '';
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json({ error: 'FormData required' }, { status: 400 });
    }

    const formData = await req.formData();

    const firstName = ((formData.get('firstName') as string) || '').trim();
    const lastName = ((formData.get('lastName') as string) || '').trim();
    // Everything below is optional — only the name is required.
    const genderRaw = formData.get('gender') as string | null;
    const gender = genderRaw === 'male' || genderRaw === 'female' ? genderRaw : undefined;
    const dateOfBirthRaw = (formData.get('dateOfBirth') as string) || '';
    const institutionId = (formData.get('institutionId') as string) || undefined;

    const email = (formData.get('email') as string) || undefined;
    const phone = (formData.get('phone') as string) || undefined;

    const beneficiaryStatusRaw = (formData.get('beneficiaryStatus') as string) || 'draft';
    const beneficiaryStatus = beneficiaryStatusRaw === 'published' ? 'published' : 'draft';

    // "Beneficiary Voice" — an optional Tiptap rich-text testimonial.
    // Empty is stored as null rather than an empty doc. normalizeTiptapDoc
    // parses the JSON-encoded string the form sends before we can check
    // emptiness — checking the raw string directly would never see it as
    // empty, since a bare "no visible text" doc still contains characters.
    const voiceRaw = formData.get('voice');
    let voice: object | null = null;
    if (voiceRaw && typeof voiceRaw === 'string') {
      const normalizedVoice = normalizeTiptapDoc(voiceRaw);
      voice = isTiptapDocEmpty(normalizedVoice) ? null : normalizedVoice;
    }

    const projectIds = parseIdArray(formData, 'projectIds');
    const eventIds = parseIdArray(formData, 'eventIds');
    const reportIds = parseIdArray(formData, 'reportIds');
    const podcastIds = parseIdArray(formData, 'podcastIds');
    const talkshowIds = parseIdArray(formData, 'talkshowIds');

    if (!firstName || !lastName) {
      return NextResponse.json({ error: 'First and last name are required' }, { status: 400 });
    }

    const dateOfBirth = dateOfBirthRaw ? new Date(dateOfBirthRaw) : undefined;
    if (dateOfBirth && Number.isNaN(dateOfBirth.getTime())) {
      return NextResponse.json({ error: 'Invalid date of birth' }, { status: 400 });
    }

    const destDir = path.join(process.cwd(), 'public', 'assets', 'images', 'beneficiaries');
    const imageFileNames = await saveFiles(formData, 'images', destDir);
    const images = imageFileNames.map((file) => `/assets/images/beneficiaries/${file}`);
    const image = images[0] ?? null;

    const created = await prisma.beneficiary.create({
      data: {
        firstName,
        lastName,
        gender,
        dateOfBirth,
        images,
        image,
        email,
        phone,
        institutionId: institutionId || null,
        beneficiaryStatus,
        voice,
        createdById: userId,
        updatedById: userId,
        approvedById: userId,
        ...(projectIds.length && {
          projects: { create: projectIds.map((projectId) => ({ projectId })) },
        }),
        ...(eventIds.length && {
          events: { create: eventIds.map((eventId) => ({ eventId })) },
        }),
        ...(reportIds.length && {
          reports: { create: reportIds.map((reportId) => ({ reportId })) },
        }),
        ...(podcastIds.length && {
          podcasts: { create: podcastIds.map((podcastId) => ({ podcastId })) },
        }),
        ...(talkshowIds.length && {
          talkshows: { create: talkshowIds.map((talkshowId) => ({ talkshowId })) },
        }),
      },
    });

    const beneficiary = await prisma.beneficiary.findUniqueOrThrow({
      where: { id: created.id },
      include: { ...includeShape, _count: { select: { messages: true, responses: true } } },
    });

    // Invalidate caches
    await redis.del(`${BASE_CACHE_KEY}:all`);
    // also invalidate potential name-scoped cache for the created beneficiary
    await redis.del(ownCacheKey(firstName, lastName));

    revalidatePath('/');
    revalidatePath('/impact');

    // add convenience counts on response
    const messageCount =
      typeof beneficiary._count?.messages === 'number' ? beneficiary._count.messages : 0;
    const responseCount =
      typeof beneficiary._count?.responses === 'number' ? beneficiary._count.responses : 0;

    return NextResponse.json({ ...beneficiary, messageCount, responseCount }, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    console.error('Failed to create beneficiary:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { 
      status: 500,
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  }
}
