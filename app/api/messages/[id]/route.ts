// app/api/messages/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export const runtime = 'nodejs';

type Role = 'super' | 'admin' | 'moderator' | 'beneficiary' | 'user' | 'guest';
const KNOWN_ROLES = ['super', 'admin', 'moderator', 'beneficiary', 'user', 'guest'];

const normalizeRole = (r: unknown): Role => {
  const normalized = String(r ?? 'guest')
    .trim()
    .toLowerCase();
  if (KNOWN_ROLES.includes(normalized)) return normalized as Role;
  return 'guest';
};

// Only super and admin can delete any message
const canAdminDelete = (role: Role) => role === 'super' || role === 'admin';

// GET: fetch a single message (include responses)
export async function GET(_req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const idRaw = params?.id;
    const id = Number(idRaw);
    if (!Number.isFinite(id)) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400, headers: { 'Cache-Control': 'private, max-age=300, stale-while-revalidate=60' } });
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
    if (!message) return NextResponse.json({ error: 'Not found' }, { status: 404, headers: { 'Cache-Control': 'private, max-age=300, stale-while-revalidate=60' } });
    return NextResponse.json(message, {
      headers: { 'Cache-Control': 'private, max-age=300, stale-while-revalidate=60' },
    });
  } catch (error) {
    console.error('GET /api/messages/[id] error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'private, max-age=300, stale-while-revalidate=60' } });
  }
}

// DELETE: delete a message and its responses
export async function DELETE(_req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const idRaw = params?.id;
    const id = Number(idRaw);
    if (!Number.isFinite(id)) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    // Use DB-stored role when possible (authoritative)
    const dbUser = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { id: true, role: true },
    });
    const resolvedRole = normalizeRole(dbUser?.role ?? session.user?.role);

    // debug: will help diagnose if role mismatch occurs (remove when stable)
    console.debug(
      'DELETE /api/messages/[id] - userId:',
      session.user?.id,
      'dbRole:',
      dbUser?.role,
      'sessionRole:',
      session.user?.role,
      'resolvedRole:',
      resolvedRole
    );

    // fetch message with creator info and category
    const existing = await prisma.message.findUnique({
      where: { id },
      select: { id: true, createdById: true, messageCategory: true },
    });
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });

    // Authorization: allow if super/admin OR session user is the message creator
    const isAdmin = canAdminDelete(resolvedRole);
    const isCreator = !!(existing.createdById && session.user.id === existing.createdById);

    if (!isAdmin && !isCreator) {
      console.warn(
        'DELETE /api/messages/[id] - Forbidden. user:',
        session.user?.id,
        'resolvedRole:',
        resolvedRole,
        'message.createdById:',
        existing.createdById,
        'messageCategory:',
        existing.messageCategory
      );
      return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    // If allowed, perform deletion in transaction: responses then message.
    await prisma.$transaction([
      prisma.response.deleteMany({ where: { messageId: existing.id } }),
      prisma.message.delete({ where: { id: existing.id } }),
    ]);

    return NextResponse.json({ message: 'Deleted' }, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
      return NextResponse.json({ error: 'Not found' }, { status: 404, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }
    console.error('DELETE /api/messages/[id] error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  }
}
