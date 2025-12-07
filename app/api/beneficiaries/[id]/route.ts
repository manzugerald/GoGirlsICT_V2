// app/api/beneficiaries/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { v4 as uuidv4 } from 'uuid';
import { promises as fs } from 'fs';
import path from 'path';
import { redis } from '@/utils/redis';

export const runtime = 'nodejs';

const ALL_BENEFICIARIES_CACHE_KEY = 'beneficiaries:all';
const SINGLE_BENEFICIARY_CACHE_PREFIX = 'beneficiaries:'; // + id
const BENEFICIARIES_OWN_PREFIX = 'beneficiaries:own:'; // + encodeURIComponent(first)|encodeURIComponent(last)
const SINGLE_CACHE_TTL = 60 * 60 * 24 * 7; // 7 days

function ownCacheKey(firstName: string, lastName: string) {
  return `${BENEFICIARIES_OWN_PREFIX}${encodeURIComponent(firstName)}|${encodeURIComponent(
    lastName
  )}`;
}

// Helper to save uploaded images (profile/message)
async function saveBeneficiaryFiles(
  formData: FormData,
  field: string,
  destDir: string
): Promise<string[]> {
  const files = formData.getAll(field) as File[];
  const saved: string[] = [];
  if (files && files.length > 0) {
    await fs.mkdir(destDir, { recursive: true });
    for (const file of files) {
      if (!file || typeof file === 'string') continue;
      const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
      const filename = `${uuidv4()}.${ext}`;
      const buffer = Buffer.from(await file.arrayBuffer());
      const filePath = path.join(destDir, filename);
      await fs.writeFile(filePath, buffer);
      saved.push(`/assets/images/beneficiaries/${filename}`);
    }
  }
  return saved;
}

// allow preflight
export async function OPTIONS() {
  return NextResponse.json(null, { status: 204 });
}

// GET: Fetch single beneficiary details (include basic relations and counts)
export async function GET(_req: Request, context: { params: any }) {
  try {
    const params = await context.params;
    const id = params.id;

    // Try Redis cache first
    const singleCacheKey = SINGLE_BENEFICIARY_CACHE_PREFIX + id;
    const cached = await redis.get(singleCacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached));
    }

    const beneficiary = await prisma.beneficiary.findUnique({
      where: { id: Number(id) || id },
      include: {
        createdBy: { select: { username: true, firstName: true, lastName: true, image: true } },
        approvedBy: { select: { username: true } },
        updatedBy: { select: { username: true } },
        institution: { select: { id: true, name: true } },
        _count: { select: { messages: true, responses: true } },
      },
    });

    if (!beneficiary) {
      return NextResponse.json({ error: 'Beneficiary not found' }, { status: 404 });
    }

    // add counts (from _count)
    const messageCount =
      typeof beneficiary._count?.messages === 'number' ? beneficiary._count.messages : 0;
    const responseCount =
      typeof beneficiary._count?.responses === 'number' ? beneficiary._count.responses : 0;

    const payload = { ...beneficiary, messageCount, responseCount };

    // Cache result for this beneficiary for 7 days
    try {
      await redis.set(singleCacheKey, JSON.stringify(payload), 'EX', SINGLE_CACHE_TTL);
      // Also cache name-scoped key if names available (used for beneficiary-session lookups)
      if (beneficiary.firstName && beneficiary.lastName) {
        await redis.set(
          ownCacheKey(beneficiary.firstName, beneficiary.lastName),
          JSON.stringify(payload),
          'EX',
          SINGLE_CACHE_TTL
        );
      }
    } catch (err) {
      // cache failures should not block response
      console.warn('beneficiary cache set failed', err);
    }

    return NextResponse.json(payload);
  } catch (error) {
    console.error('Failed to fetch beneficiary:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PATCH: Update beneficiary (beneficiary owner OR super/admin can update)
export async function PATCH(_req: Request, context: { params: any }) {
  try {
    const params = await context.params;
    const id = params.id;

    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const userId = session.user.id;
    const role = session.user.role ?? 'guest';

    // Permission check: allow super/admin OR the beneficiary owner (createdById)
    const beneficiaryRecord = await prisma.beneficiary.findUnique({
      where: { id: Number(id) || id },
      select: { createdById: true, firstName: true, lastName: true },
    });
    if (!beneficiaryRecord) {
      return NextResponse.json({ error: 'Beneficiary not found' }, { status: 404 });
    }
    const isOwner = beneficiaryRecord.createdById === userId;
    const isPrivileged = role === 'super' || role === 'admin' || role === 'moderator';
    if (!isOwner && !isPrivileged) {
      return NextResponse.json(
        {
          error:
            'Forbidden: You can only update your own beneficiary profile or must be privileged',
        },
        { status: 403 }
      );
    }

    const contentType = _req.headers.get('content-type') ?? '';
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json({ error: 'FormData required' }, { status: 400 });
    }
    const formData = await _req.formData();

    // Required/primary fields
    const firstName = ((formData.get('firstName') as string) || '').trim();
    const lastName = ((formData.get('lastName') as string) || '').trim();
    const gender = (formData.get('gender') as string) || undefined;
    const dateOfBirth = (formData.get('dateOfBirth') as string) || '';
    const institutionId = (formData.get('institutionId') as string) || undefined;

    // Optional fields
    const email = (formData.get('email') as string) || undefined;
    const phone = (formData.get('phone') as string) || undefined;

    // Existing images (JSON array string)
    let existingImages: string[] = [];
    const imagesRaw = formData.get('images');
    if (imagesRaw) {
      try {
        existingImages = JSON.parse(imagesRaw as string) || [];
      } catch {
        existingImages = [];
      }
    }
    // Images to remove (JSON array string)
    let imagesToRemove: string[] = [];
    const imagesToRemoveRaw = formData.get('imagesToRemove');
    if (imagesToRemoveRaw) {
      try {
        imagesToRemove = JSON.parse(imagesToRemoveRaw as string) || [];
      } catch {
        imagesToRemove = [];
      }
    }

    // Upload new profile images
    const newImageUrls = await saveBeneficiaryFiles(
      formData,
      'newImages',
      path.join(process.cwd(), 'public', 'assets', 'images', 'beneficiaries')
    );
    const images = [...(existingImages || []), ...newImageUrls].filter(
      (img) => !imagesToRemove.includes(img)
    );
    const image = images.length > 0 ? images[0] : null;

    if (!firstName || !lastName || !gender || !dateOfBirth) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Update beneficiary
    const updated = await prisma.beneficiary.update({
      where: { id: Number(id) || id },
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
        updatedById: userId,
      },
      include: {
        institution: { select: { id: true, name: true } },
        _count: { select: { messages: true, responses: true } },
      },
    });

    // Invalidate caches: single, all, and name-scoped for old and new names
    const oldFirst = beneficiaryRecord.firstName;
    const oldLast = beneficiaryRecord.lastName;
    const newFirst = updated.firstName;
    const newLast = updated.lastName;

    try {
      const keysToDel = [SINGLE_BENEFICIARY_CACHE_PREFIX + id, ALL_BENEFICIARIES_CACHE_KEY];
      // delete old name-scoped
      if (oldFirst && oldLast) keysToDel.push(ownCacheKey(oldFirst, oldLast));
      // delete new name-scoped (in case names changed)
      if (newFirst && newLast) keysToDel.push(ownCacheKey(newFirst, newLast));
      await Promise.all(keysToDel.map((k) => redis.del(k)));
    } catch (err) {
      console.warn('Failed to invalidate beneficiary caches after update', err);
    }

    // attach convenience counts
    const messageCount =
      typeof updated._count?.messages === 'number'
        ? updated._count.messages
        : await prisma.message.count({ where: { beneficiaryId: updated.id } });
    const responseCount =
      typeof updated._count?.responses === 'number'
        ? updated._count.responses
        : await prisma.response.count({ where: { message: { beneficiaryId: updated.id } } });

    return NextResponse.json({ ...updated, messageCount, responseCount });
  } catch (error) {
    console.error('Failed to update beneficiary:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE: Only super/admin can delete beneficiary (also delete messages/responses)
export async function DELETE(_req: Request, context: { params: any }) {
  try {
    const params = await context.params;
    const id = params.id;

    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const role = session.user.role || 'guest';
    if (!['super', 'admin'].includes(role)) {
      return NextResponse.json(
        { error: 'Forbidden: Only super/admin can delete beneficiaries' },
        { status: 403 }
      );
    }

    // find beneficiary to capture names for cache invalidation
    const existing = await prisma.beneficiary.findUnique({
      where: { id: Number(id) || id },
      select: { firstName: true, lastName: true },
    });
    if (!existing) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    // Delete responses that belong to messages of this beneficiary, then delete messages, then beneficiary
    await prisma.response.deleteMany({
      where: { message: { beneficiaryId: id } },
    });
    await prisma.message.deleteMany({
      where: { beneficiaryId: id },
    });

    const deleted = await prisma.beneficiary.delete({
      where: { id: Number(id) || id },
    });

    // Invalidate caches
    try {
      const keysToDel = [SINGLE_BENEFICIARY_CACHE_PREFIX + id, ALL_BENEFICIARIES_CACHE_KEY];
      if (existing.firstName && existing.lastName) {
        keysToDel.push(ownCacheKey(existing.firstName, existing.lastName));
      }
      await Promise.all(keysToDel.map((k) => redis.del(k)));
    } catch (err) {
      console.warn('Failed to invalidate beneficiary caches after delete', err);
    }

    return NextResponse.json({ message: 'Beneficiary deleted', beneficiary: deleted });
  } catch (error: any) {
    if (error?.code === 'P2025') {
      return NextResponse.json({ error: 'Beneficiary not found' }, { status: 404 });
    }
    console.error('Failed to delete beneficiary:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
