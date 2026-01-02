// app/api/messages/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const runtime = 'nodejs';

type Role = 'super' | 'admin' | 'moderator' | 'beneficiary' | 'user' | 'guest';
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

// Only super and admin can delete any message
const canAdminDelete = (role: Role) => role === 'super' || role === 'admin';

// GET: fetch a single message (include responses)
export async function GET(_req: Request, context: { params: any }) {
  try {
    const params = await context.params;
    const idRaw = params?.id;
    const id = Number(idRaw);
    if (!Number.isFinite(id)) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
    }

    const message = await prisma.message.findUnique({
      where: { id },
      include: {
        beneficiary: { select: { id: true, firstName: true, lastName: true } },
        createdBy: { select: { id: true, firstName: true, lastName: true } },
        responses: {
          include: {
            responderUser: { select: { id: true, firstName: true, lastName: true } },
            responderBeneficiary: { select: { id: true, firstName: true, lastName: true } },
          },
          orderBy: { createdAt: 'asc' },
        },
      },
    });
    if (!message) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(message);
  } catch (error) {
    console.error('GET /api/messages/[id] error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE: delete a message and its responses
export async function DELETE(_req: Request, context: { params: any }) {
  try {
    const params = await context.params;
    const idRaw = params?.id;
    const id = Number(idRaw);
    if (!Number.isFinite(id)) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
    }

    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const role = asRole(session.user.role);

    // fetch message with creator info
    const existing = await prisma.message.findUnique({
      where: { id },
      select: { id: true, createdById: true },
    });
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    // Authorization: allow if super/admin OR session user is the message creator
    const isAdmin = canAdminDelete(role);
    const isCreator = !!(existing.createdById && session.user.id === existing.createdById);

    if (!isAdmin && !isCreator) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Delete in a transaction: responses then message.
    await prisma.$transaction([
      prisma.response.deleteMany({ where: { messageId: existing.id } }),
      prisma.message.delete({ where: { id: existing.id } }),
    ]);

    return NextResponse.json({ message: 'Deleted' });
  } catch (error: any) {
    if (error?.code === 'P2025') {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    console.error('DELETE /api/messages/[id] error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
