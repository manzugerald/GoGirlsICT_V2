// app/api/beneficiaries/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { v4 as uuidv4 } from 'uuid';
import { promises as fs } from 'fs';
import path from 'path';
import { redis } from '@/utils/redis';

export const runtime = 'nodejs';

const BASE_CACHE_KEY = 'beneficiaries';
const CACHE_TTL = 10 * 60; // 10 minutes

const includeShape = {
  createdBy: { select: { username: true, firstName: true, lastName: true, image: true } },
  approvedBy: { select: { username: true } },
  updatedBy: { select: { username: true } },
  institution: { select: { id: true, name: true } },
} as const;

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

      return NextResponse.json(enriched);
    }

    // Others (super/admin/moderator/guest): use cache for "all"
    const keyAll = `${BASE_CACHE_KEY}:all`;
    const cached = await redis.get(keyAll);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        return NextResponse.json(Array.isArray(parsed) ? parsed : []);
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
    return NextResponse.json(enrichedAll);
  } catch (err) {
    console.error('Error fetching beneficiaries:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
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
    const gender = formData.get('gender') as 'male' | 'female' | null;
    const dateOfBirth = (formData.get('dateOfBirth') as string) || '';
    const institutionId = (formData.get('institutionId') as string) || undefined;

    const email = (formData.get('email') as string) || undefined;
    const phone = (formData.get('phone') as string) || undefined;

    if (!firstName || !lastName || !gender || !dateOfBirth) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const destDir = path.join(process.cwd(), 'public', 'assets', 'images', 'beneficiaries');
    const imageFileNames = await saveFiles(formData, 'images', destDir);
    const images = imageFileNames.map((file) => `/assets/images/beneficiaries/${file}`);
    const image = images[0] ?? null;

    const beneficiary = await prisma.beneficiary.create({
      data: {
        firstName,
        lastName,
        gender,
        dateOfBirth: new Date(dateOfBirth),
        images,
        image,
        email,
        phone,
        institutionId: institutionId || null,
        createdById: userId,
        updatedById: userId,
        approvedById: userId,
      },
      include: {
        institution: { select: { id: true, name: true } },
        _count: { select: { messages: true, responses: true } },
      },
    });

    // Invalidate caches
    await redis.del(`${BASE_CACHE_KEY}:all`);
    // also invalidate potential name-scoped cache for the created beneficiary
    await redis.del(ownCacheKey(firstName, lastName));

    // add convenience counts on response
    const messageCount =
      typeof beneficiary._count?.messages === 'number' ? beneficiary._count.messages : 0;
    const responseCount =
      typeof beneficiary._count?.responses === 'number' ? beneficiary._count.responses : 0;

    return NextResponse.json({ ...beneficiary, messageCount, responseCount });
  } catch (error) {
    console.error('Failed to create beneficiary:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
