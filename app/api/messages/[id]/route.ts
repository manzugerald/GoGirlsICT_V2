// app/api/messages/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redis } from '@/utils/redis';

export const runtime = 'nodejs';

type Role = 'super' | 'admin' | 'moderator' | 'beneficiary' | 'guest';
const asRole = (r: any): Role => (r ?? 'guest') as Role;

const ALL_CACHE_KEY = 'messages:all';
const SINGLE_CACHE_PREFIX = 'messages:';

const BENEFICIARIES_BASE_KEY = 'beneficiaries';
const BENEFICIARIES_ALL_KEY = `${BENEFICIARIES_BASE_KEY}:all`;
const BENEFICIARIES_OWN_PREFIX = `${BENEFICIARIES_BASE_KEY}:own:`; // + encodeURIComponent(first)|encodeURIComponent(last)
const BENEFICIARY_BY_ID_PREFIX = `${BENEFICIARIES_BASE_KEY}:`; // + id

const publishOptions = ['draft', 'published'] as const;
type PublishStatus = (typeof publishOptions)[number];
function isPublishStatus(v: unknown): v is PublishStatus {
  return v === 'draft' || v === 'published';
}

// renamed to category terminology to match Prisma schema
const messageCategoryOptions = [
  'beneficiary',
  'request',
  'system',
  'external',
  'go_girls_ict_team',
  'testimonial',
] as const;
type MessageCategory = (typeof messageCategoryOptions)[number];
function isMessageCategory(v: unknown): v is MessageCategory {
  return typeof v === 'string' && (messageCategoryOptions as readonly string[]).includes(v);
}

function getNames(session: any) {
  const firstName = (session?.user?.firstName ?? '').trim();
  const lastName = (session?.user?.lastName ?? '').trim();
  return { firstName, lastName };
}

async function getOwnBeneficiaryIdFromSession(session: any): Promise<string | null> {
  const role = asRole(session?.user?.role);
  if (role !== 'beneficiary') return null;
  const { firstName, lastName } = getNames(session);
  if (!firstName || !lastName) return null;

  const match = await prisma.beneficiary.findFirst({
    where: {
      firstName: { equals: firstName, mode: 'insensitive' },
      lastName: { equals: lastName, mode: 'insensitive' },
    },
    select: { id: true },
  });
  return match?.id ?? null;
}

const canPublish = (role: Role) => role === 'super' || role === 'admin' || role === 'moderator';
const canDelete = (role: Role) => role === 'super' || role === 'admin';

function ownCacheKey(firstName: string, lastName: string) {
  return `${BENEFICIARIES_OWN_PREFIX}${encodeURIComponent(firstName)}|${encodeURIComponent(
    lastName
  )}`;
}

// ---------- GET (one) ----------
export async function GET(_req: Request, context: { params: any }) {
  try {
    // params must be awaited per Next.js dynamic API requirements
    const params = await context.params;
    const session = await getServerSession(authOptions);
    const role = asRole(session?.user?.role);

    const data = await prisma.message.findUnique({
      where: { id: Number(params.id) || params.id },
      include: {
        beneficiary: { select: { id: true, firstName: true, lastName: true } },
        createdBy: { select: { id: true, firstName: true, lastName: true, email: true } },
      },
    });
    if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    // Beneficiary can only view own message
    if (role === 'beneficiary') {
      const ownId = await getOwnBeneficiaryIdFromSession(session);
      if (!ownId || data.beneficiaryId !== ownId) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
      }
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error('GET /api/messages/[id] error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// ---------- PATCH (update) ----------
export async function PATCH(req: Request, context: { params: any }) {
  try {
    const params = await context.params;
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const role = asRole(session.user.role);

    const existing = await prisma.message.findUnique({
      where: { id: Number(params.id) || params.id },
      select: { id: true, beneficiaryId: true, messageStatus: true, createdById: true },
    });
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    const body = await req.json().catch(() => ({} as any));
    let {
      title,
      affiliated,
      name,
      content,
      messageCategory,
      messageStatus,
      senderEmail,
      allowResponses,
      beneficiaryId,
    } = body as {
      title?: string;
      affiliated?: string | null;
      name?: string | null;
      content?: unknown;
      messageCategory?: unknown;
      messageStatus?: unknown;
      senderEmail?: string | null;
      allowResponses?: boolean;
      beneficiaryId?: string | null;
    };

    // Beneficiary: can only edit own message, and cannot publish or relink beneficiary
    if (role === 'beneficiary') {
      const ownId = await getOwnBeneficiaryIdFromSession(session);
      if (!ownId || existing.beneficiaryId !== ownId) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
      }
      // force draft and disallow changing beneficiaryId
      messageStatus = 'draft';
      beneficiaryId = existing.beneficiaryId;
    } else {
      // privileged publish control
      if (messageStatus === 'published' && !canPublish(role)) {
        return NextResponse.json({ error: 'You cannot publish messages' }, { status: 403 });
      }
      if (messageStatus && !isPublishStatus(messageStatus)) {
        messageStatus = undefined;
      }
      // If a beneficiaryId is provided by privileged user, validate existence
      if (beneficiaryId) {
        const exists = await prisma.beneficiary.findUnique({
          where: { id: beneficiaryId },
          select: { id: true },
        });
        if (!exists) return NextResponse.json({ error: 'Beneficiary not found' }, { status: 404 });
      }
    }

    // Validate messageCategory if provided
    if (messageCategory !== undefined && !isMessageCategory(messageCategory)) {
      return NextResponse.json({ error: 'Invalid messageCategory' }, { status: 400 });
    }

    const updateData: any = {
      ...(title !== undefined ? { title } : {}),
      ...(affiliated !== undefined ? { affiliated } : {}),
      ...(name !== undefined ? { name } : {}),
      ...(content !== undefined ? { content } : {}),
      ...(messageCategory !== undefined ? { messageCategory } : {}),
      ...(messageStatus !== undefined ? { messageStatus } : {}),
      ...(senderEmail !== undefined ? { senderEmail } : {}),
      ...(typeof allowResponses === 'boolean' ? { allowResponses } : {}),
      // Only include beneficiaryId if explicitly set (and allowed above)
      ...(beneficiaryId !== undefined ? { beneficiaryId } : {}),
    };

    const updated = await prisma.message.update({
      where: { id: Number(params.id) || params.id },
      data: updateData,
      include: {
        beneficiary: { select: { id: true, firstName: true, lastName: true } },
        createdBy: { select: { id: true, firstName: true, lastName: true, email: true } },
      },
    });

    // Clear beneficiary caches for old and new beneficiary if necessary
    try {
      await redis.del(BENEFICIARIES_ALL_KEY);
      const touchedBeneficiaryIds = new Set<string>();
      if (existing.beneficiaryId) touchedBeneficiaryIds.add(existing.beneficiaryId);
      if (updated.beneficiaryId) touchedBeneficiaryIds.add(updated.beneficiaryId);
      for (const bid of touchedBeneficiaryIds) {
        // per-id cache
        await redis.del(`${BENEFICIARY_BY_ID_PREFIX}${bid}`);
        // name-scoped cache
        const b = await prisma.beneficiary.findUnique({
          where: { id: bid },
          select: { firstName: true, lastName: true },
        });
        if (b?.firstName && b?.lastName) {
          await redis.del(ownCacheKey(b.firstName, b.lastName));
        }
      }
    } catch (err) {
      console.warn('Failed to invalidate beneficiary cache after message update', err);
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error('PATCH /api/messages/[id] error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// ---------- DELETE ----------
export async function DELETE(_req: Request, context: { params: any }) {
  try {
    const params = await context.params;
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const role = asRole(session.user.role);
    if (!canDelete(role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // find message to get beneficiaryId
    const existing = await prisma.message.findUnique({
      where: { id: Number(params.id) || params.id },
      select: { beneficiaryId: true },
    });
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    await prisma.message.delete({ where: { id: Number(params.id) || params.id } });

    // invalidate beneficiary caches
    try {
      await redis.del(BENEFICIARIES_ALL_KEY);
      if (existing.beneficiaryId) {
        await redis.del(`${BENEFICIARY_BY_ID_PREFIX}${existing.beneficiaryId}`);
        const b = await prisma.beneficiary.findUnique({
          where: { id: existing.beneficiaryId },
          select: { firstName: true, lastName: true },
        });
        if (b?.firstName && b?.lastName) {
          await redis.del(ownCacheKey(b.firstName, b.lastName));
        }
      }
    } catch (err) {
      console.warn('Failed to invalidate beneficiary cache after message delete', err);
    }

    return NextResponse.json({ message: 'Deleted' });
  } catch (error: any) {
    if (error?.code === 'P2025') {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    console.error('DELETE /api/messages/[id] error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
