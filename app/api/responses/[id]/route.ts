// app/api/responses/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const runtime = 'nodejs';

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

const canAdminDelete = (role: Role) => role === 'super' || role === 'admin';

// GET: fetch a single response by id (include parent message and related responder info)
export async function GET(_req: Request, context: { params: any }) {
  try {
    // Per Next.js dynamic API rules, params must be awaited
    const params = await context.params;

    const response = await prisma.response.findUnique({
      where: { id: params.id },
      include: {
        responderUser: { select: { id: true, firstName: true, lastName: true, email: true } },
        responderBeneficiary: { select: { id: true, firstName: true, lastName: true } },
        // include message and other responses for parent (with responderRole)
        message: {
          select: {
            id: true,
            title: true,
            messageCategory: true,
            messageStatus: true,
            createdById: true,
            beneficiary: { select: { id: true, firstName: true, lastName: true } },
            responses: {
              select: {
                id: true,
                content: true,
                createdAt: true,
                updatedAt: true,
                responderType: true,
                responderRole: true,
                responderUser: { select: { id: true, firstName: true, lastName: true } },
                responderBeneficiary: { select: { id: true, firstName: true, lastName: true } },
              },
              orderBy: { createdAt: 'asc' },
            },
          },
        },
      },
    });

    if (!response) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PATCH: update a response's content
export async function PATCH(req: Request, context: { params: any }) {
  try {
    const params = await context.params;
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const role = asRole(session.user.role);

    const existing = await prisma.response.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        responderType: true,
        responderUserId: true,
        responderBeneficiaryId: true,
        responderRole: true,
        message: { select: { id: true, createdById: true } },
      },
    });
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    const body = await req.json().catch(() => null);
    if (!body || body.content === undefined) {
      return NextResponse.json({ error: 'Missing required field: content' }, { status: 400 });
    }
    const { content } = body as { content: unknown };

    // Authorization rules (using responderRole):
    // - Admins/moderators/super can edit any response
    // - If responderRole === 'USER' -> allow if responderUserId === session.user.id
    // - If responderRole === 'AUTHOR' -> allow if session.user.id === message.createdById OR responderUserId === session.user.id
    // - If responderRole === 'BENEFICIARY' -> allow if session beneficiary maps to responderBeneficiaryId
    // - SYSTEM responses cannot be edited via API
    let allowed = false;
    const roleEnum = existing.responderRole as string | null;

    if (canAdminDelete(role)) {
      allowed = true;
    } else if (roleEnum === 'USER') {
      allowed = existing.responderUserId === session.user.id;
    } else if (roleEnum === 'AUTHOR') {
      const isCreator = !!(
        existing.message?.createdById && session.user.id === existing.message.createdById
      );
      const isResponderUser = existing.responderUserId === session.user.id;
      allowed = isCreator || isResponderUser;
    } else if (roleEnum === 'BENEFICIARY') {
      const ownBeneficiaryId = await getOwnBeneficiaryIdFromSession(session);
      allowed = ownBeneficiaryId !== null && ownBeneficiaryId === existing.responderBeneficiaryId;
    } else {
      // SYSTEM or unknown
      allowed = false;
    }

    if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    const updated = await prisma.response.update({
      where: { id: params.id },
      data: { content },
      include: {
        responderUser: { select: { id: true, firstName: true, lastName: true, email: true } },
        responderBeneficiary: { select: { id: true, firstName: true, lastName: true } },
        message: { select: { id: true, title: true, createdById: true } },
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE: delete a response (owner, message creator for AUTHOR, or admins)
export async function DELETE(_req: Request, context: { params: any }) {
  try {
    const params = await context.params;
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const role = asRole(session.user.role);

    const existing = await prisma.response.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        responderType: true,
        responderUserId: true,
        responderBeneficiaryId: true,
        responderRole: true,
        message: { select: { id: true, createdById: true } },
      },
    });
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    // Authorization: owner (user/beneficiary) OR message creator (for AUTHOR) OR admin/super can delete
    let allowed = false;
    const roleEnum = existing.responderRole as string | null;

    if (canAdminDelete(role)) {
      allowed = true;
    } else if (roleEnum === 'USER') {
      allowed = existing.responderUserId === session.user.id;
    } else if (roleEnum === 'AUTHOR') {
      const isCreator = !!(
        existing.message?.createdById && session.user.id === existing.message.createdById
      );
      const isResponderUser = existing.responderUserId === session.user.id;
      allowed = isCreator || isResponderUser;
    } else if (roleEnum === 'BENEFICIARY') {
      const ownBeneficiaryId = await getOwnBeneficiaryIdFromSession(session);
      allowed = ownBeneficiaryId !== null && ownBeneficiaryId === existing.responderBeneficiaryId;
    } else {
      allowed = false;
    }

    if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    await prisma.response.delete({ where: { id: params.id } });

    return NextResponse.json({ message: 'Deleted' });
  } catch (error: any) {
    if (error?.code === 'P2025') {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
