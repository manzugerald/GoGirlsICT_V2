import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { sendAccountDeletionRequestEmail } from '@/lib/email';
import { isTiptapDocEmpty, normalizeTiptapDoc } from '@/lib/tiptap';
import { Prisma } from '@/lib/generated/prisma';

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

export async function OPTIONS() {
  return NextResponse.json(null, { status: 204 });
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const role = session?.user?.role ?? 'guest';

    let where: Prisma.MessageWhereInput | undefined = undefined;

    if (role === 'beneficiary') {
      const firstName = session?.user?.firstName;
      const lastName = session?.user?.lastName;
      if (!firstName || !lastName) {
        return NextResponse.json([], {
          headers: { 'Cache-Control': 'private, max-age=300, stale-while-revalidate=60' },
        });
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

    return NextResponse.json(messages, {
      headers: { 'Cache-Control': 'private, max-age=300, stale-while-revalidate=60' },
    });
  } catch (error) {
    console.error('GET /api/messages error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'private, max-age=300, stale-while-revalidate=60' } });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });

    const role = session.user.role as
      | 'super'
      | 'admin'
      | 'moderator'
      | 'beneficiary'
      | 'guest'
      | undefined;

    const body = await req.json().catch(() => null);
    if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });

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
      title?: unknown; // Tiptap JSON doc, optional
      affiliated?: string;
      name?: string;
      content?: unknown;
      messageCategory?: unknown;
      messageStatus?: unknown;
      senderEmail?: string;
      allowResponses?: boolean;
      meta?: { type?: string; [key: string]: unknown };
      beneficiaryId?: string;
    };

    // title is optional (Message.title is nullable) — normalize whatever was
    // sent (a real Tiptap doc from the admin form, or a plain string from an
    // internal caller like the account-deletion-request flow) into a valid
    // Tiptap doc, or drop it entirely if empty.
    const normalizedTitle = title != null && !isTiptapDocEmpty(title) ? normalizeTiptapDoc(title) : null;

    if (messageCategory !== undefined && !isMessageCategory(messageCategory)) {
      return NextResponse.json({ error: 'Invalid messageCategory' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    let beneficiaryConnect: Prisma.BeneficiaryCreateNestedOneWithoutMessagesInput | undefined = undefined;
    const isAccountDeletionRequest = meta?.type === 'account-deletion-request';

    if (role === 'beneficiary' && !isAccountDeletionRequest) {
      const firstName = session.user?.firstName;
      const lastName = session.user?.lastName;
      if (!firstName || !lastName) {
        return NextResponse.json(
          { error: 'Your profile is missing first/last name; contact admin.' },
          { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
        );
      }
      const match = await prisma.beneficiary.findFirst({
        where: { firstName, lastName },
        select: { id: true },
      });
      if (!match) {
        return NextResponse.json(
          { error: 'Beneficiary profile not found for your account.' },
          { status: 404, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
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
    const data: Prisma.MessageCreateInput = {
      title: (normalizedTitle as Prisma.InputJsonValue | null) ?? Prisma.JsonNull,
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

    return NextResponse.json(created, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    console.error('POST /api/messages error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  }
}
