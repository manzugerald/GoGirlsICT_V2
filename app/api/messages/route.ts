import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redis } from '@/utils/redis';
import { sendAccountDeletionRequestEmail } from '@/lib/email';

export const runtime = 'nodejs';

type PublishStatus = 'draft' | 'published';
function isPublishStatus(v: unknown): v is PublishStatus {
  return v === 'draft' || v === 'published';
}

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

const BENEFICIARIES_BASE_KEY = 'beneficiaries';
const BENEFICIARIES_ALL_KEY = `${BENEFICIARIES_BASE_KEY}:all`;
const BENEFICIARIES_OWN_PREFIX = `${BENEFICIARIES_BASE_KEY}:own:`;
const BENEFICIARY_BY_ID_PREFIX = `${BENEFICIARIES_BASE_KEY}:`;

function ownCacheKey(firstName: string, lastName: string) {
  return `${BENEFICIARIES_OWN_PREFIX}${encodeURIComponent(firstName)}|${encodeURIComponent(
    lastName
  )}`;
}

export async function OPTIONS() {
  return NextResponse.json(null, { status: 204 });
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const role = session?.user?.role ?? 'guest';

    let where: any | undefined = undefined;

    if (role === 'beneficiary') {
      const firstName = (session?.user as any)?.firstName;
      const lastName = (session?.user as any)?.lastName;
      if (!firstName || !lastName) {
        return NextResponse.json([]);
      }
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
        createdBy: {
          select: { id: true, firstName: true, lastName: true, email: true, username: true },
        },
      },
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error('GET /api/messages error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

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
      title,
      affiliated,
      name,
      content,
      messageCategory,
      messageStatus,
      senderEmail,
      allowResponses,
      meta, // used for logic, not storage!
    } = body as {
      title?: string;
      affiliated?: string;
      name?: string;
      content?: unknown;
      messageCategory?: unknown;
      messageStatus?: unknown;
      senderEmail?: string;
      allowResponses?: boolean;
      meta?: { type?: string; [key: string]: any };
      beneficiaryId?: string;
    };

    if (!title) {
      return NextResponse.json({ error: 'Missing required field: title' }, { status: 400 });
    }

    if (messageCategory !== undefined && !isMessageCategory(messageCategory)) {
      return NextResponse.json({ error: 'Invalid messageCategory' }, { status: 400 });
    }

    let beneficiaryConnect: any = undefined;
    const isAccountDeletionRequest = meta?.type === 'account-deletion-request';

    if (role === 'beneficiary' && !isAccountDeletionRequest) {
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
      beneficiaryConnect = { connect: { id: match.id } };
    } else if (role !== 'beneficiary' && body.beneficiaryId && !isAccountDeletionRequest) {
      beneficiaryConnect = { connect: { id: body.beneficiaryId } };
    }

    let resolvedCategory: MessageCategory = 'external';
    if (isMessageCategory(messageCategory)) {
      if (messageCategory === 'system' && role !== 'super') {
        resolvedCategory = 'request';
      } else {
        resolvedCategory = messageCategory as MessageCategory;
      }
    } else {
      resolvedCategory = role === 'beneficiary' || role === 'guest' ? 'request' : 'external';
    }

    const resolvedStatus: PublishStatus =
      role === 'beneficiary'
        ? 'draft'
        : isPublishStatus(messageStatus)
        ? (messageStatus as PublishStatus)
        : 'draft';

    // Construct Prisma message.create payload -- NO META FIELD!
    const data: any = {
      title,
      affiliated: affiliated ?? null,
      name: name ?? null,
      content: typeof content === 'string' ? content : JSON.stringify(content ?? ''),
      messageCategory: resolvedCategory,
      messageStatus: resolvedStatus,
      senderEmail: senderEmail ?? null,
      allowResponses: typeof allowResponses === 'boolean' ? allowResponses : true,
      createdBy: { connect: { id: session.user.id } },
    };
    if (beneficiaryConnect) data.beneficiary = beneficiaryConnect;

    const created = await prisma.message.create({
      data,
      include: {
        beneficiary: { select: { id: true, firstName: true, lastName: true } },
        createdBy: {
          select: { id: true, username: true, firstName: true, lastName: true, email: true },
        },
      },
    });

    // --- SEND EMAIL FOR ACCOUNT DELETION REQUEST ---
    if (meta?.type === 'account-deletion-request' && created.senderEmail) {
      try {
        await sendAccountDeletionRequestEmail(created.senderEmail, {
          username: created.createdBy?.username ?? '',
          firstName: created.createdBy?.firstName ?? '',
          time: new Date().toLocaleString(),
        });
      } catch (e) {
        console.error('[EMAIL] Failed to send account deletion confirmation:', e);
      }
    }
    // ----------------------------------------------

    // Invalidate beneficiaries caches so refreshed list has updated counts
    try {
      await redis.del(BENEFICIARIES_ALL_KEY);
      if (created.beneficiary?.id) {
        await redis.del(`${BENEFICIARY_BY_ID_PREFIX}${created.beneficiary.id}`);
        const beneficiary = await prisma.beneficiary.findUnique({
          where: { id: created.beneficiary.id },
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
