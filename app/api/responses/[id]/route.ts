// app/api/responses/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { Prisma } from '@/lib/generated/prisma';
import { getServerSession } from 'next-auth';
import type { Session } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export const runtime = 'nodejs';

type Role = 'super' | 'admin' | 'moderator' | 'beneficiary' | 'user' | 'guest';

const KNOWN_ROLES = ['super', 'admin', 'moderator', 'beneficiary', 'user', 'guest'] as const;
function normalizeRole(r: unknown): Role {
  const v = String(r ?? 'guest')
    .trim()
    .toLowerCase();
  if ((KNOWN_ROLES as readonly string[]).includes(v)) return v as Role;
  return 'guest';
}

async function resolveDbUser(session: Session | null) {
  if (!session?.user) return null;
  const email = (session.user as { email?: string } | undefined)?.email;
  if (email) {
    try {
      const byEmail = await prisma.user.findUnique({ where: { email } });
      if (byEmail) {
        console.debug('resolveDbUser: found by email', { email, dbUserId: byEmail.id });
        return byEmail;
      }
      console.debug('resolveDbUser: no user found by email', { email });
    } catch (e) {
      console.debug('resolveDbUser: email lookup threw', { email, error: (e as Error).message });
    }
  }

  try {
    const idStr = String(session.user?.id ?? '').trim();
    if (idStr) {
      const byId = await prisma.user.findUnique({ where: { id: idStr } });
      if (byId) {
        console.debug('resolveDbUser: found by id', { id: idStr });
        return byId;
      }
      console.debug('resolveDbUser: no user found by id', { id: idStr });
    } else {
      console.debug('resolveDbUser: session.user.id missing or empty');
    }
  } catch (e) {
    console.debug('resolveDbUser: id lookup threw', {
      id: session?.user?.id,
      error: (e as Error).message,
    });
  }

  return null;
}

async function getOwnBeneficiaryIdFromSession(session: Session | null): Promise<string | null> {
  const role = normalizeRole(session?.user?.role);
  if (role !== 'beneficiary') return null;
  const firstName = (session?.user?.firstName ?? '').trim();
  const lastName = (session?.user?.lastName ?? '').trim();
  if (!firstName || !lastName) return null;
  try {
    const match = await prisma.beneficiary.findFirst({
      where: {
        firstName: { equals: firstName, mode: 'insensitive' },
        lastName: { equals: lastName, mode: 'insensitive' },
      },
      select: { id: true },
    });
    console.debug('getOwnBeneficiaryIdFromSession:', { firstName, lastName, found: !!match });
    return match?.id ?? null;
  } catch (e) {
    console.debug('getOwnBeneficiaryIdFromSession: prisma error', { error: (e as Error).message });
    return null;
  }
}

const canAdminDelete = (role: Role) => role === 'super' || role === 'admin';

export async function OPTIONS() {
  return NextResponse.json(null, { status: 204 });
}

// GET: fetch a single response
export async function GET(_req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const id = String(params?.id ?? '').trim();
    console.debug('GET /api/responses/[id] - id:', id);
    if (!id) return NextResponse.json({ error: 'Invalid id' }, { status: 400, headers: { 'Cache-Control': 'private, max-age=300, stale-while-revalidate=60' } });

    const response = await prisma.response.findUnique({
      where: { id },
      include: {
        responderUser: { select: { id: true, firstName: true, lastName: true, email: true } },
        responderBeneficiary: { select: { id: true, firstName: true, lastName: true } },
        message: {
          select: {
            id: true,
            title: true,
            messageCategory: true,
            messageStatus: true,
            createdById: true,
            beneficiary: { select: { id: true, firstName: true, lastName: true } },
          },
        },
      },
    });

    if (!response) {
      console.debug('GET /api/responses/[id] - not found', { id });
      return NextResponse.json({ error: 'Not found' }, { status: 404, headers: { 'Cache-Control': 'private, max-age=300, stale-while-revalidate=60' } });
    }

    return NextResponse.json(response, {
      headers: { 'Cache-Control': 'private, max-age=300, stale-while-revalidate=60' },
    });
  } catch (error) {
    console.error('GET /api/responses/[id] error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'private, max-age=300, stale-while-revalidate=60' } });
  }
}

// PATCH: update a response's content
export async function PATCH(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const id = String(params?.id ?? '').trim();
    console.debug('PATCH /api/responses/[id] - id:', id);
    if (!id) return NextResponse.json({ error: 'Invalid id' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });

    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      console.debug('PATCH /api/responses/[id] - unauthorized (no session user)', {});
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    const dbUser = await resolveDbUser(session);
    const resolvedRole = normalizeRole(dbUser?.role ?? session.user?.role);
    console.debug('PATCH /api/responses/[id] - session:', {
      sessionUserId: session.user?.id,
      sessionUserEmail: (session.user as { email?: string } | undefined)?.email,
      dbUserId: dbUser?.id,
      resolvedRole,
    });

    const existing = await prisma.response.findUnique({
      where: { id },
      select: {
        id: true,
        responderUserId: true,
        responderBeneficiaryId: true,
        responderType: true,
        message: { select: { id: true, createdById: true } },
      },
    });

    if (!existing) {
      console.debug('PATCH /api/responses/[id] - not found', { id });
      return NextResponse.json({ error: 'Not found' }, { status: 404, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }
    console.debug('PATCH /api/responses/[id] - existing:', existing);

    const body = await req.json().catch(() => null);
    if (!body || body.content === undefined) {
      console.debug('PATCH /api/responses/[id] - missing content', {});
      return NextResponse.json({ error: 'Missing required field: content' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }
    const { content } = body as { content: unknown };

    const sessionUserId = String(dbUser?.id ?? session.user?.id ?? '');
    const responderId = existing.responderUserId ?? existing.responderBeneficiaryId ?? null;
    const messageCreatorId = existing.message?.createdById ?? null;

    let allowed = false;
    if (canAdminDelete(resolvedRole)) {
      allowed = true;
      console.debug('PATCH allowed: admin', { resolvedRole });
    } else if (responderId && responderId === sessionUserId) {
      allowed = true;
      console.debug('PATCH allowed: responder is session user', { responderId, sessionUserId });
    } else if (messageCreatorId && messageCreatorId === sessionUserId) {
      allowed = true;
      console.debug('PATCH allowed: message creator', { messageCreatorId, sessionUserId });
    } else if (existing.responderBeneficiaryId) {
      const ownBeneficiaryId = await getOwnBeneficiaryIdFromSession(session);
      if (ownBeneficiaryId && ownBeneficiaryId === existing.responderBeneficiaryId) {
        allowed = true;
        console.debug('PATCH allowed: beneficiary owner', { ownBeneficiaryId });
      }
    }

    if (!allowed) {
      console.warn('PATCH /api/responses/[id] - Forbidden', {
        sessionUserId,
        resolvedRole,
        existing,
      });
      return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    const updated = await prisma.response.update({
      where: { id },
      data: { content: content as Prisma.InputJsonValue },
      include: {
        responderUser: { select: { id: true, firstName: true, lastName: true, email: true } },
        responderBeneficiary: { select: { id: true, firstName: true, lastName: true } },
        message: { select: { id: true, title: true, createdById: true } },
      },
    });

    console.debug('PATCH /api/responses/[id] - updated:', { id: updated.id });
    return NextResponse.json(updated, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    console.error('PATCH /api/responses/[id] error (stack):', (error as Error).stack ?? error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  }
}

// DELETE: delete a response (responder, message creator, or super/admin)
export async function DELETE(_req: Request, context: { params: Promise<{ id: string }> }) {
  const debugContext: Record<string, unknown> = {};
  try {
    const params = await context.params;
    const id = String(params?.id ?? '').trim();
    debugContext.requestId = id;
    console.debug('DELETE /api/responses/[id] - request id:', id);

    if (!id) {
      console.debug('DELETE invalid id', { id });
      return NextResponse.json({ error: 'Invalid id' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    const session = await getServerSession(authOptions);
    debugContext.sessionPresent = !!session;
    if (!session?.user?.id) {
      console.debug('DELETE unauthorized - no session user', { session: Boolean(session) });
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    const sessionSummary = {
      sessionUserId: session.user?.id,
      sessionUserEmail: (session.user as { email?: string } | undefined)?.email,
      sessionUserRole: session.user?.role,
      sessionFirstName: session.user?.firstName,
      sessionLastName: session.user?.lastName,
    };
    console.debug('DELETE session summary', sessionSummary);
    debugContext.sessionSummary = sessionSummary;

    const dbUser = await resolveDbUser(session);
    debugContext.dbUserId = dbUser?.id ?? null;
    const resolvedRole = normalizeRole(dbUser?.role ?? session.user?.role);
    console.debug('DELETE resolved dbUser/role', { dbUserId: dbUser?.id ?? null, resolvedRole });
    debugContext.resolvedRole = resolvedRole;

    let existing;
    try {
      existing = await prisma.response.findUnique({
        where: { id },
        select: {
          id: true,
          responderUserId: true,
          responderBeneficiaryId: true,
          responderType: true,
          message: { select: { id: true, createdById: true } },
        },
      });
      console.debug('DELETE prisma.findUnique returned', { existing });
      debugContext.existing = existing;
    } catch (e) {
      console.error('DELETE prisma.findUnique threw', {
        id,
        error: (e as Error)?.message ?? e,
        stack: (e as Error)?.stack,
      });
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    if (!existing) {
      console.debug('DELETE item not found', { id });
      return NextResponse.json({ error: 'Not found' }, { status: 404, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    const sessionUserId = String(dbUser?.id ?? session.user?.id ?? '');
    const responderId = existing.responderUserId ?? existing.responderBeneficiaryId ?? null;
    const messageCreatorId = existing.message?.createdById ?? null;

    debugContext.authCheck = { sessionUserId, responderId, messageCreatorId, resolvedRole };

    let allowed = false;
    if (canAdminDelete(resolvedRole)) {
      allowed = true;
      console.debug('DELETE allowed by role (admin/super)', { resolvedRole });
    } else if (responderId && String(responderId) === sessionUserId) {
      allowed = true;
      console.debug('DELETE allowed: requester is responder', { responderId, sessionUserId });
    } else if (messageCreatorId && String(messageCreatorId) === sessionUserId) {
      allowed = true;
      console.debug('DELETE allowed: requester is message creator', {
        messageCreatorId,
        sessionUserId,
      });
    } else if (existing.responderBeneficiaryId) {
      try {
        const ownBeneficiaryId = await getOwnBeneficiaryIdFromSession(session);
        console.debug('DELETE beneficiary mapping check', {
          ownBeneficiaryId,
          responderBeneficiaryId: existing.responderBeneficiaryId,
        });
        if (ownBeneficiaryId && ownBeneficiaryId === existing.responderBeneficiaryId) {
          allowed = true;
          console.debug('DELETE allowed: beneficiary owner');
        }
      } catch (e) {
        console.debug('DELETE beneficiary mapping threw', { error: (e as Error).message });
      }
    }

    if (!allowed) {
      console.warn('DELETE /api/responses/[id] - Forbidden', {
        sessionUserId,
        resolvedRole,
        existing,
      });
      return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    try {
      await prisma.response.delete({ where: { id: existing.id } });
      console.debug('DELETE /api/responses/[id] - deleted:', { id: existing.id });
    } catch (e) {
      const err = e as Error & { code?: string; meta?: unknown };
      console.error('DELETE prisma.delete failed', {
        id: existing.id,
        errorMessage: err?.message ?? err,
        errorCode: err?.code ?? null,
        errorMeta: err?.meta ?? null,
        stack: err?.stack ?? null,
      });

      try {
        const deleteManyRes = await prisma.response.deleteMany({ where: { id: existing.id } });
        console.debug('DELETE fallback deleteMany result', { deleteManyRes });
        if (deleteManyRes.count > 0) {
          return NextResponse.json({ message: 'Deleted (fallback)' }, {
            headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
          });
        }
      } catch (e2) {
        console.error('DELETE fallback deleteMany also failed', {
          id: existing.id,
          errorMessage: (e2 as Error)?.message ?? e2,
          stack: (e2 as Error)?.stack ?? null,
        });
      }

      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    return NextResponse.json({ message: 'Deleted' }, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    console.error('DELETE /api/responses/[id] error (outer):', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  }
}
