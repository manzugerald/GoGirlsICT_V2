// app/api/responses/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import type { Session } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { Prisma } from '@/lib/generated/prisma';

export const runtime = 'nodejs';

// Role helpers
type Role = 'super' | 'admin' | 'moderator' | 'beneficiary' | 'user' | 'guest';
const asRole = (r: unknown): Role => (r ?? 'guest') as Role;

function getNames(session: Session | null) {
  const firstName = (session?.user?.firstName ?? '').trim();
  const lastName = (session?.user?.lastName ?? '').trim();
  return { firstName, lastName };
}

async function getOwnBeneficiaryIdFromSession(session: Session | null): Promise<string | null> {
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

    let where: Prisma.ResponseWhereInput | undefined = undefined;

    if (role === 'beneficiary') {
      const { firstName, lastName } = getNames(session);
      if (!firstName || !lastName) {
        // don't leak data
        return NextResponse.json([], {
          headers: { 'Cache-Control': 'private, max-age=300, stale-while-revalidate=60' },
        });
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

    return NextResponse.json(responses, {
      headers: { 'Cache-Control': 'private, max-age=300, stale-while-revalidate=60' },
    });
  } catch (error) {
    console.error('GET /api/responses error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', message: error instanceof Error ? error.message : '' },
      { status: 500, headers: { 'Cache-Control': 'private, max-age=300, stale-while-revalidate=60' } }
    );
  }
}

/**
 * POST:
 * - Auth required.
 * - Authorization rules:
 *   - super/admin/moderator: may respond to any message.
 *   - authenticated "user": may respond only to messages they authored.
 *   - beneficiary: may respond if message is tied to their beneficiary profile OR they are the author.
 *   - guests: forbidden.
 *
 * - For beneficiaries: responderType = 'beneficiary', responderBeneficiaryId resolved via session.
 * - For privileged users (super/admin/moderator) and authors: responderType = 'user' and responderUserId = session.user.id.
 * - If the signed-in user is the creator of the message, server will tag responderRole = 'AUTHOR'.
 */
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }
    const role = asRole(session.user.role);

    const body = await req.json().catch(() => null);
    if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });

    const { messageId: rawMessageId, content } = body as {
      messageId?: number | string;
      content?: unknown;
    };

    if (rawMessageId === undefined || rawMessageId === null || rawMessageId === '') {
      return NextResponse.json({ error: 'Missing required field: messageId' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    // coerce id
    const parsedMessageId = Number(rawMessageId);
    const messageId =
      Number.isFinite(parsedMessageId) && !Number.isNaN(parsedMessageId)
        ? parsedMessageId
        : rawMessageId;

    if (content === undefined) {
      return NextResponse.json({ error: 'Missing required field: content' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    // Ensure parent message exists and allows responses and fetch its creator
    const msg = await prisma.message.findUnique({
      where: { id: messageId as number },
      select: { id: true, allowResponses: true, beneficiaryId: true, createdById: true },
    });
    if (!msg) return NextResponse.json({ error: 'Parent message not found' }, { status: 404, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });

    if (!msg.allowResponses) {
      return NextResponse.json(
        { error: 'Responses are not allowed for this message' },
        { status: 403, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
      );
    }

    // Authorization logic: determine who can respond per your rules
    const isAdmin = canAdminManage(role);
    const isBeneficiaryRole = role === 'beneficiary';
    const sessionUserId = session.user?.id ?? null;
    const isAuthorUser = !!(sessionUserId && msg.createdById && sessionUserId === msg.createdById);

    let responderType: 'user' | 'beneficiary' | 'system' = 'user';
    let responderUserId: string | undefined = undefined;
    let responderBeneficiaryId: string | undefined = undefined;
    // Responder role enum: USER | BENEFICIARY | AUTHOR | SYSTEM
    let responderRole: 'USER' | 'BENEFICIARY' | 'AUTHOR' | 'SYSTEM' = 'USER';

    if (isAdmin) {
      // admins/moderators/super can respond as user
      responderType = 'user';
      responderUserId = sessionUserId ?? undefined;
      responderRole = isAuthorUser ? 'AUTHOR' : 'USER';
    } else if (isBeneficiaryRole) {
      // beneficiary: resolve own beneficiary id
      const ownId = await getOwnBeneficiaryIdFromSession(session);
      if (!ownId) {
        return NextResponse.json(
          { error: 'Beneficiary profile not resolvable from session' },
          { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
        );
      }
      // allow if message is tied to this beneficiary OR the session user is the message author
      if (msg.beneficiaryId && msg.beneficiaryId === ownId) {
        responderType = 'beneficiary';
        responderBeneficiaryId = ownId;
        responderRole = 'BENEFICIARY';
      } else if (isAuthorUser) {
        // beneficiary who is also the message author -> treat as author (user)
        responderType = 'user';
        responderUserId = sessionUserId ?? undefined;
        responderRole = 'AUTHOR';
      } else {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
      }
    } else {
      // other authenticated users (e.g., regular "user") can respond only if they are the message author
      if (isAuthorUser) {
        responderType = 'user';
        responderUserId = sessionUserId ?? undefined;
        responderRole = 'AUTHOR';
      } else {
        // guests or authenticated non-authors cannot respond
        return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
      }
    }

    // attempt to create with responderRole; if the DB/schema doesn't have the field, retry without it
    try {
      const created = await prisma.response.create({
        data: {
          messageId: messageId as number,
          responderType,
          responderUserId: responderUserId ?? undefined,
          responderBeneficiaryId: responderBeneficiaryId ?? undefined,
          content: content as Prisma.InputJsonValue,
          // Not (yet) part of the Prisma schema — kept as a forward-compatible
          // attempt; the catch block below retries without it when the DB
          // rejects the unknown column, which is the path that always runs
          // today. Cast needed since the current schema has no such field.
          ...({ responderRole } as Record<string, unknown>),
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
      return NextResponse.json(created, {
        headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
      });
    } catch (err) {
      // fallback when responderRole does not exist in the Prisma model / DB
      const msgErr = err instanceof Error ? err.message : String(err);
      if (
        msgErr.includes('Unknown argument `responderRole`') ||
        msgErr.includes('Unknown arg `responderRole`')
      ) {
        console.warn('responderRole not present in Prisma model — retrying create without it');
        const created = await prisma.response.create({
          data: {
            messageId: messageId as number,
            responderType,
            responderUserId: responderUserId ?? undefined,
            responderBeneficiaryId: responderBeneficiaryId ?? undefined,
            content: content as Prisma.InputJsonValue,
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
        return NextResponse.json(created, {
          headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
        });
      }
      // rethrow to outer catch
      throw err;
    }
  } catch (error) {
    // Log and return the error message to help debugging (remove message in production)
    console.error('POST /api/responses error:', error);
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: 'Internal Server Error', message: msg }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  }
}
