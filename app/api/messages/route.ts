import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redis } from '@/utils/redis';

export const runtime = 'nodejs';

type PublishStatus = 'draft' | 'published';
function isPublishStatus(v: unknown): v is PublishStatus {
  return v === 'draft' || v === 'published';
}

// Updated to use "category" terminology to match Prisma schema
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

// Redis cache keys for beneficiaries (kept consistent with /api/beneficiaries)
const BENEFICIARIES_BASE_KEY = 'beneficiaries';
const BENEFICIARIES_ALL_KEY = `${BENEFICIARIES_BASE_KEY}:all`;
const BENEFICIARIES_OWN_PREFIX = `${BENEFICIARIES_BASE_KEY}:own:`; // + encodeURIComponent(first)|encodeURIComponent(last)
const BENEFICIARY_BY_ID_PREFIX = `${BENEFICIARIES_BASE_KEY}:`; // + id

function ownCacheKey(firstName: string, lastName: string) {
  return `${BENEFICIARIES_OWN_PREFIX}${encodeURIComponent(firstName)}|${encodeURIComponent(
    lastName
  )}`;
}

// (Optional) allow preflight without 405s
export async function OPTIONS() {
  return NextResponse.json(null, { status: 204 });
}

/**
 * GET:
 * - If role === 'beneficiary': return ONLY messages whose related beneficiary
 *   has (firstName AND lastName) matching the session.
 * - Else: return all messages.
 *
 * Includes beneficiary and createdBy relations so the UI can show the author and beneficiary.
 */
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const role = session?.user?.role ?? 'guest';

    let where: any | undefined = undefined;

    if (role === 'beneficiary') {
      const firstName = (session?.user as any)?.firstName;
      const lastName = (session?.user as any)?.lastName;

      // If the session doesn't carry names, return an empty list rather than leaking data
      if (!firstName || !lastName) {
        return NextResponse.json([]);
      }

      // Relational filter to Beneficiary by exact names
      where = {
        beneficiary: {
          firstName,
          lastName,
        },
      };
    }

    const messages = await prisma.message.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        beneficiary: { select: { id: true, firstName: true, lastName: true } },
        createdBy: { select: { id: true, firstName: true, lastName: true, email: true } },
      },
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error('GET /api/messages error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

/**
 * POST:
 * - Beneficiary: server resolves beneficiaryId by matching session first/last name; status is forced to 'draft'.
 * - Admin/Moderator/Super: may pass beneficiaryId; status can be 'draft' | 'published'.
 * - Authenticated guests: allowed to create messages but cannot set beneficiaryId; their messages are created unlinked
 *   (beneficiaryId = null) and forced to sensible defaults. This allows features like "account deletion request".
 *
 * Sets createdById to the signed-in user's id so the message author is recorded.
 * This enables the author to later post an AUTHOR response (server logic for responses should check createdById).
 *
 * Also invalidates beneficiary caches so message/response counts shown in the beneficiaries list stay accurate
 * after creating a message.
 */
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const role = session.user.role as
      | 'super'
      | 'admin'
      | 'moderator'
      | 'beneficiary'
      | 'guest'
      | undefined;

    const body = await req.json().catch(() => null);
    if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });

    const {
      beneficiaryId,
      title,
      affiliated,
      name,
      content,
      messageCategory,
      messageStatus,
      senderEmail,
      allowResponses,
    } = body as {
      beneficiaryId?: string;
      title?: string;
      affiliated?: string;
      name?: string;
      content?: unknown;
      messageCategory?: unknown;
      messageStatus?: unknown;
      senderEmail?: string;
      allowResponses?: boolean;
    };

    if (!title) {
      return NextResponse.json({ error: 'Missing required field: title' }, { status: 400 });
    }

    if (messageCategory !== undefined && !isMessageCategory(messageCategory)) {
      return NextResponse.json({ error: 'Invalid messageCategory' }, { status: 400 });
    }

    let targetBeneficiaryId: string | null = null;

    if (role === 'beneficiary') {
      const firstName = (session.user as any)?.firstName;
      const lastName = (session.user as any)?.lastName;
      if (!firstName || !lastName) {
        return NextResponse.json(
          { error: 'Your profile is missing first/last name; contact admin.' },
          { status: 400 }
        );
      }

      const match = await prisma.beneficiary.findFirst({
        where: { firstName, lastName },
        select: { id: true },
      });

      if (!match) {
        return NextResponse.json(
          { error: 'Beneficiary profile not found for your account.' },
          { status: 404 }
        );
      }

      targetBeneficiaryId = match.id;
    } else if (role === 'super' || role === 'admin' || role === 'moderator') {
      if (beneficiaryId) {
        const exists = await prisma.beneficiary.findUnique({
          where: { id: beneficiaryId },
          select: { id: true },
        });
        if (!exists) {
          return NextResponse.json({ error: 'Beneficiary not found' }, { status: 404 });
        }
        targetBeneficiaryId = beneficiaryId;
      } else {
        // leave null — messages can be unlinked (e.g., executive/system/external)
        targetBeneficiaryId = null;
      }
    } else {
      // role is 'guest' or other authenticated non-privileged role
      // allow creation but do not accept beneficiaryId from the client (prevent spoofing)
      targetBeneficiaryId = null;
    }

    // Enforce/normalize category and status based on role
    let resolvedCategory: MessageCategory = 'external';
    if (isMessageCategory(messageCategory)) {
      // Only 'super' may create 'system' messages; downgrade otherwise
      if (messageCategory === 'system' && role !== 'super') {
        resolvedCategory = 'request';
      } else {
        resolvedCategory = messageCategory as MessageCategory;
      }
    } else {
      // default for beneficiaries and guests: 'request' (so admins can easily find)
      if (role === 'beneficiary' || role === 'guest') {
        resolvedCategory = 'request';
      } else {
        resolvedCategory = 'external';
      }
    }

    const resolvedStatus: PublishStatus =
      role === 'beneficiary'
        ? 'draft'
        : isPublishStatus(messageStatus)
        ? (messageStatus as PublishStatus)
        : 'draft';

    const created = await prisma.message.create({
      data: {
        beneficiaryId: targetBeneficiaryId,
        title,
        affiliated: affiliated ?? null,
        name: name ?? null,
        content: content ?? '',
        // map to the normalized messageCategory
        messageCategory: resolvedCategory,
        messageStatus: resolvedStatus,
        senderEmail: senderEmail ?? null,
        allowResponses: typeof allowResponses === 'boolean' ? allowResponses : true,
        // record the creator so they can be identified as author later
        createdById: session.user.id,
      },
      include: {
        beneficiary: { select: { id: true, firstName: true, lastName: true } },
        createdBy: { select: { id: true, firstName: true, lastName: true, email: true } },
      },
    });

    // Invalidate beneficiaries caches so refreshed list has updated counts
    try {
      await redis.del(BENEFICIARIES_ALL_KEY);
      if (created.beneficiaryId) {
        // delete per-id cache if present
        await redis.del(`${BENEFICIARY_BY_ID_PREFIX}${created.beneficiaryId}`);
        // delete name-scoped cache if we can resolve names
        const beneficiary = await prisma.beneficiary.findUnique({
          where: { id: created.beneficiaryId },
          select: { firstName: true, lastName: true },
        });
        if (beneficiary?.firstName && beneficiary?.lastName) {
          await redis.del(ownCacheKey(beneficiary.firstName, beneficiary.lastName));
        }
      }
    } catch (err) {
      console.warn('Failed to invalidate beneficiary cache after message create', err);
    }

    return NextResponse.json(created);
  } catch (error) {
    console.error('POST /api/messages error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
