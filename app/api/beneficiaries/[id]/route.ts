// app/api/beneficiaries/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { Prisma } from '@/lib/generated/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { v4 as uuidv4 } from 'uuid';
import { promises as fs } from 'fs';
import path from 'path';
import { isTiptapDocEmpty, normalizeTiptapDoc } from '@/lib/tiptap';
import { revalidatePath } from 'next/cache';

export const runtime = 'nodejs';

const fullInclude = {
  createdBy: { select: { username: true, firstName: true, lastName: true, image: true } },
  approvedBy: { select: { username: true } },
  updatedBy: { select: { username: true } },
  institution: { select: { id: true, name: true } },
  projects: { include: { project: { select: { id: true, title: true, slug: true } } } },
  events: { include: { event: { select: { id: true, eventTitle: true, slug: true } } } },
  reports: { include: { report: { select: { id: true, title: true, slug: true } } } },
  podcasts: { include: { podcast: { select: { id: true, title: true, slug: true } } } },
  talkshows: { include: { talkshow: { select: { id: true, title: true } } } },
};

// Parses a JSON-encoded array of ids (sent as a form field) into a clean
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

// Replaces a beneficiary's links to one relation (project/event/report) with
// exactly the given set of ids: deletes links no longer present, creates
// links that are new, and leaves unchanged ones alone.
// `delegate` is genuinely one of several different Prisma join-table
// delegates (BeneficiaryProjectDelegate, BeneficiaryEventDelegate, ...),
// each with its own narrower where/data types — hence one deliberate loose
// signature here instead of the unsafe bare `Function` type this replaced.
async function syncParticipation(
  delegate: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deleteMany: (args: any) => Promise<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createMany: (args: any) => Promise<any>;
  },
  beneficiaryId: string,
  foreignKeyField: 'projectId' | 'eventId' | 'reportId' | 'podcastId' | 'talkshowId',
  desiredIds: number[]
) {
  await delegate.deleteMany(
    desiredIds.length
      ? { where: { beneficiaryId, [foreignKeyField]: { notIn: desiredIds } } }
      : { where: { beneficiaryId } }
  );
  if (desiredIds.length) {
    await delegate.createMany({
      data: desiredIds.map((id) => ({ beneficiaryId, [foreignKeyField]: id })),
      skipDuplicates: true,
    });
  }
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
export async function GET(_req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const id = params.id;

    const beneficiary = await prisma.beneficiary.findUnique({
      where: { id },
      include: { ...fullInclude, _count: { select: { messages: true, responses: true } } },
    });

    if (!beneficiary) {
      return NextResponse.json({ error: 'Beneficiary not found' }, { 
        status: 404,
        headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
      });
    }

    // add counts (from _count)
    const messageCount =
      typeof beneficiary._count?.messages === 'number' ? beneficiary._count.messages : 0;
    const responseCount =
      typeof beneficiary._count?.responses === 'number' ? beneficiary._count.responses : 0;

    const payload = { ...beneficiary, messageCount, responseCount };

    return NextResponse.json(payload, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (error) {
    console.error('Failed to fetch beneficiary:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { 
      status: 500,
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  }
}

// PATCH: Update beneficiary (beneficiary owner OR super/admin can update)
export async function PATCH(_req: Request, context: { params: Promise<{ id: string }> }) {
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
      where: { id },
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
    // Everything below is optional — only the name is required.
    const genderRaw = formData.get('gender') as string | null;
    const gender = genderRaw === 'male' || genderRaw === 'female' ? genderRaw : undefined;
    const dateOfBirthRaw = (formData.get('dateOfBirth') as string) || '';
    const institutionId = (formData.get('institutionId') as string) || undefined;

    // Optional fields
    const email = (formData.get('email') as string) || undefined;
    const phone = (formData.get('phone') as string) || undefined;

    const beneficiaryStatusRaw = (formData.get('beneficiaryStatus') as string) || 'draft';
    const beneficiaryStatus = beneficiaryStatusRaw === 'published' ? 'published' : 'draft';

    // "Beneficiary Voice" — an optional Tiptap rich-text testimonial. See the
    // matching comment in the POST handler for why emptiness is checked
    // after normalizing rather than on the raw JSON-encoded string.
    const voiceRaw = formData.get('voice');
    let voice = Prisma.JsonNull as Prisma.NullableJsonNullValueInput | Prisma.InputJsonValue;
    if (voiceRaw && typeof voiceRaw === 'string') {
      const normalizedVoice = normalizeTiptapDoc(voiceRaw);
      voice = isTiptapDocEmpty(normalizedVoice) ? Prisma.JsonNull : (normalizedVoice as Prisma.InputJsonValue);
    }

    const projectIds = parseIdArray(formData, 'projectIds');
    const eventIds = parseIdArray(formData, 'eventIds');
    const reportIds = parseIdArray(formData, 'reportIds');
    const podcastIds = parseIdArray(formData, 'podcastIds');
    const talkshowIds = parseIdArray(formData, 'talkshowIds');

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

    if (!firstName || !lastName) {
      return NextResponse.json({ error: 'First and last name are required' }, { status: 400 });
    }

    const dateOfBirth = dateOfBirthRaw ? new Date(dateOfBirthRaw) : undefined;
    if (dateOfBirth && Number.isNaN(dateOfBirth.getTime())) {
      return NextResponse.json({ error: 'Invalid date of birth' }, { status: 400 });
    }

    // Update beneficiary
    await prisma.beneficiary.update({
      where: { id },
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
        updatedById: userId,
      },
    });

    // Sync project/event/report/podcast/talkshow participation to exactly the given sets.
    await Promise.all([
      syncParticipation(prisma.beneficiaryProject, id, 'projectId', projectIds),
      syncParticipation(prisma.beneficiaryEvent, id, 'eventId', eventIds),
      syncParticipation(prisma.beneficiaryReport, id, 'reportId', reportIds),
      syncParticipation(prisma.beneficiaryPodcast, id, 'podcastId', podcastIds),
      syncParticipation(prisma.beneficiaryTalkshow, id, 'talkshowId', talkshowIds),
    ]);

    const updated = await prisma.beneficiary.findUniqueOrThrow({
      where: { id },
      include: { ...fullInclude, _count: { select: { messages: true, responses: true } } },
    });

    revalidatePath('/');
    revalidatePath('/impact');

    // attach convenience counts
    const messageCount =
      typeof updated._count?.messages === 'number'
        ? updated._count.messages
        : await prisma.message.count({ where: { beneficiaryId: updated.id } });
    const responseCount =
      typeof updated._count?.responses === 'number'
        ? updated._count.responses
        : await prisma.response.count({ where: { message: { beneficiaryId: updated.id } } });

    return NextResponse.json({ ...updated, messageCount, responseCount }, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    console.error('Failed to update beneficiary:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { 
      status: 500,
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  }
}

// DELETE: Only super/admin can delete beneficiary (also delete messages/responses)
export async function DELETE(_req: Request, context: { params: Promise<{ id: string }> }) {
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
      where: { id },
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
      where: { id },
    });

    revalidatePath('/');
    revalidatePath('/impact');

    return NextResponse.json({ message: 'Beneficiary deleted', beneficiary: deleted }, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
      return NextResponse.json({ error: 'Beneficiary not found' }, { 
        status: 404,
        headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
      });
    }
    console.error('Failed to delete beneficiary:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { 
      status: 500,
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  }
}
