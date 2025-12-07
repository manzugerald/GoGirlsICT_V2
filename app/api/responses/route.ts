// app/api/responses/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const runtime = 'nodejs';

const CACHE_KEY = 'responses:all';

// Role helpers
type Role = 'super' | 'admin' | 'moderator' | 'beneficiary' | 'guest';
const asRole = (r: any): Role => (r ?? 'guest') as Role;

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

const canAdminManage = (role: Role) => role === 'super' || role === 'admin' || role === 'moderator';

// Allow preflight
export async function OPTIONS() {
  return NextResponse.json(null, { status: 204 });
}

/**
 * GET:
 * - If role === 'beneficiary': return ONLY responses whose parent message is tied
 *   to the beneficiary matching session names.
 * - Else: return all responses.
 *
 * Includes responderRole and message.createdById so client can mark "Author" responses.
 */
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const role = asRole(session?.user?.role);

    let where: any | undefined = undefined;

    if (role === 'beneficiary') {
      const { firstName, lastName } = getNames(session);
      if (!firstName || !lastName) {
        // don't leak data
        return NextResponse.json([]);
      }
      where = {
        message: {
          beneficiary: {
            firstName,
            lastName,
          },
        },
      };
    }

    const responses = await prisma.response.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        responderUser: { select: { id: true, firstName: true, lastName: true, email: true } },
        responderBeneficiary: { select: { id: true, firstName: true, lastName: true } },
        // include message creator so client can identify author responses,
        // also include messageCategory (renamed) for completeness
        message: {
          select: {
            id: true,
            title: true,
            createdById: true,
            messageCategory: true,
            beneficiary: { select: { id: true, firstName: true, lastName: true } },
          },
        },
      },
    });

    return NextResponse.json(responses);
  } catch (error: any) {
    console.error('GET /api/responses error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', message: error?.message ?? '' },
      { status: 500 }
    );
  }
}

/**
 * POST:
 * - Auth required.
 * - For beneficiaries: responderType = 'beneficiary', responderBeneficiaryId resolved via session.
 *   Beneficiaries may only respond to messages tied to their beneficiary profile.
 * - For privileged users (super/admin/moderator): responderType = 'user' and responderUserId = session.user.id.
 * - If the signed-in user is the creator of the message, server will tag responderRole = 'AUTHOR'.
 * - System responder is not supported via this endpoint.
 *
 * NOTE: we detect at runtime if the Prisma schema/database has the responderRole field.
 * If it does not (PrismaClientValidationError: Unknown argument `responderRole`), we retry
 * creating the response without that field. This lets you deploy the API code before running
 * a migration; but you should still add the enum/column to your schema and run migrations.
 */
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const role = asRole(session.user.role);

    const body = await req.json().catch(() => null);
    if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });

    const { messageId: rawMessageId, content } = body as {
      messageId?: number | string;
      content?: unknown;
    };

    if (rawMessageId === undefined || rawMessageId === null || rawMessageId === '') {
      return NextResponse.json({ error: 'Missing required field: messageId' }, { status: 400 });
    }

    // coerce id
    const parsedMessageId = Number(rawMessageId);
    const messageId =
      Number.isFinite(parsedMessageId) && !Number.isNaN(parsedMessageId)
        ? parsedMessageId
        : rawMessageId;

    if (content === undefined) {
      return NextResponse.json({ error: 'Missing required field: content' }, { status: 400 });
    }

    // Ensure parent message exists and allows responses and fetch its creator
    const msg = await prisma.message.findUnique({
      where: { id: messageId as any },
      select: { id: true, allowResponses: true, beneficiaryId: true, createdById: true },
    });
    if (!msg) return NextResponse.json({ error: 'Parent message not found' }, { status: 404 });

    if (!msg.allowResponses) {
      return NextResponse.json(
        { error: 'Responses are not allowed for this message' },
        { status: 403 }
      );
    }

    // Build responder fields
    let responderType: 'user' | 'beneficiary' | 'system' = 'user';
    let responderUserId: string | undefined = undefined;
    let responderBeneficiaryId: string | undefined = undefined;
    // Responder role enum: USER | BENEFICIARY | AUTHOR | SYSTEM
    let responderRole: 'USER' | 'BENEFICIARY' | 'AUTHOR' | 'SYSTEM' = 'USER';

    if (role === 'beneficiary') {
      const ownId = await getOwnBeneficiaryIdFromSession(session);
      if (!ownId) {
        return NextResponse.json(
          { error: 'Beneficiary profile not resolvable from session' },
          { status: 400 }
        );
      }
      // Beneficiaries can only respond to messages linked to their beneficiary profile
      if (msg.beneficiaryId && msg.beneficiaryId !== ownId) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
      }
      responderType = 'beneficiary';
      responderBeneficiaryId = ownId;
      responderRole = 'BENEFICIARY';
    } else if (role === 'super' || role === 'admin' || role === 'moderator') {
      responderType = 'user';
      responderUserId = session.user.id;
      responderRole = 'USER';
    } else {
      // guests cannot create responses
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // If the session user is the message creator, set AUTHOR role
    if (session.user?.id && msg.createdById && session.user.id === msg.createdById) {
      responderRole = 'AUTHOR';
    }

    // attempt to create with responderRole; if the DB/schema doesn't have the field, retry without it
    try {
      const created = await prisma.response.create({
        data: {
          messageId: messageId as any,
          responderType,
          responderUserId: responderUserId ?? undefined,
          responderBeneficiaryId: responderBeneficiaryId ?? undefined,
          content,
          responderRole,
        },
        include: {
          responderUser: { select: { id: true, firstName: true, lastName: true, email: true } },
          responderBeneficiary: { select: { id: true, firstName: true, lastName: true } },
          message: {
            select: {
              id: true,
              title: true,
              createdById: true,
              messageCategory: true,
            },
          },
        },
      });
      return NextResponse.json(created);
    } catch (err: any) {
      // fallback when responderRole does not exist in the Prisma model / DB
      const msgErr = String(err?.message ?? err);
      if (
        msgErr.includes('Unknown argument `responderRole`') ||
        msgErr.includes('Unknown arg `responderRole`')
      ) {
        console.warn('responderRole not present in Prisma model — retrying create without it');
        const created = await prisma.response.create({
          data: {
            messageId: messageId as any,
            responderType,
            responderUserId: responderUserId ?? undefined,
            responderBeneficiaryId: responderBeneficiaryId ?? undefined,
            content,
            // note: responderRole omitted
          },
          include: {
            responderUser: { select: { id: true, firstName: true, lastName: true, email: true } },
            responderBeneficiary: { select: { id: true, firstName: true, lastName: true } },
            message: {
              select: {
                id: true,
                title: true,
                createdById: true,
                messageCategory: true,
              },
            },
          },
        });
        return NextResponse.json(created);
      }
      // rethrow to outer catch
      throw err;
    }
  } catch (error: any) {
    // Log and return the error message to help debugging (remove message in production)
    console.error('POST /api/responses error:', error);
    const msg = error?.message ?? String(error);
    return NextResponse.json({ error: 'Internal Server Error', message: msg }, { status: 500 });
  }
}
