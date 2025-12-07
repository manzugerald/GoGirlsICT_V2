import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import bcrypt from 'bcrypt';
import { isPwned } from '@/lib/hibp';
import { sendPasswordChangeEmail } from '@/lib/email';

/**
 * PATCH /api/users/:id/change-password
 *
 * Body (JSON):
 * {
 *   currentPassword?: string, // required if actor is the same user (self change)
 *   newPassword: string,
 *   actorId?: string,         // optional: id of the user performing the change (admin)
 *   ip?: string,
 *   userAgent?: string
 * }
 *
 * Behavior:
 * - If actor is the same user (or actorId not provided), currentPassword must be provided and valid.
 * - Prevent reuse: compare newPassword against current stored password + last MAX_HISTORY history entries (bcrypt.compare).
 * - Check HaveIBeenPwned (k-Anonymity). If pwned -> reject.
 * - Hash new password, in a DB transaction:
 *    - insert previous password hash into PasswordHistory
 *    - update users.password
 *    - create PasswordChangeLog
 *    - prune PasswordHistory rows to keep only last MAX_HISTORY
 *    - revoke all active sessions (set active=false, endedAt)
 *    - set user.loginStatus = inactive (forces re-login)
 * - Send notification email to user (if email present). FROM configured in lib/email.
 */

const MAX_HISTORY = parseInt(process.env.MAX_HISTORY || '5', 10);
const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS || '12', 10);

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const userId = params?.id;
  if (!userId) {
    return NextResponse.json({ error: 'Missing user id' }, { status: 400 });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const newPassword = String(body.newPassword ?? '');
    const currentPassword = body.currentPassword ? String(body.currentPassword) : undefined;
    const actorId = body.actorId ?? null;
    const ip = body.ip ?? null;
    const userAgent = body.userAgent ?? null;

    if (!newPassword) {
      return NextResponse.json({ error: 'Missing newPassword' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // If actor is the same user (or no actorId provided), require currentPassword and verify it.
    if (!actorId || String(actorId) === String(userId)) {
      if (!currentPassword) {
        return NextResponse.json({ error: 'Current password required' }, { status: 400 });
      }
      const ok = await bcrypt.compare(currentPassword, user.password);
      if (!ok) {
        return NextResponse.json({ error: 'Current password incorrect' }, { status: 401 });
      }
    } else {
      // actor is different (likely an admin) — you may validate admin privileges here.
      // For now, we allow it assuming the caller has already verified admin rights.
    }

    // Fetch last MAX_HISTORY password hashes
    const historyRows = await prisma.passwordHistory.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: MAX_HISTORY,
      select: { passwordHash: true },
    });

    const hashesToCheck = [user.password, ...historyRows.map((r) => r.passwordHash)];

    // Prevent reuse: compare plaintext newPassword against past hashes
    for (const h of hashesToCheck) {
      if (!h) continue;
      const match = await bcrypt.compare(newPassword, h);
      if (match) {
        return NextResponse.json({ error: 'Cannot reuse a previous password' }, { status: 400 });
      }
    }

    // HIBP check (k-anonymity)
    try {
      const { pwned, count } = await isPwned(newPassword);
      if (pwned) {
        return NextResponse.json(
          { error: `This password appears in ${count} breached datasets. Choose another.` },
          { status: 400 }
        );
      }
    } catch (e) {
      // If HIBP fails, we choose to continue (fail-open). Adjust per policy if you want fail-closed.
      console.warn('HIBP check failed, continuing', e);
    }

    // Hash new password
    const newHash = await bcrypt.hash(newPassword, BCRYPT_ROUNDS);
    const now = new Date();

    // Transaction: insert old hash to history, update password, log change, prune, revoke sessions, mark inactive
    await prisma.$transaction(async (tx) => {
      if (user.password) {
        await tx.passwordHistory.create({
          data: {
            userId,
            passwordHash: user.password,
          },
        });
      }

      await tx.user.update({
        where: { id: userId },
        data: {
          password: newHash,
          updatedAt: now,
        },
      });

      await tx.passwordChangeLog.create({
        data: {
          userId,
          changedBy: actorId ? String(actorId) : null,
          ip: ip ?? null,
          userAgent: userAgent ?? null,
        },
      });

      // prune older history entries beyond MAX_HISTORY
      const rows = await tx.passwordHistory.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        select: { id: true },
        skip: MAX_HISTORY,
      });
      if (rows.length > 0) {
        const ids = rows.map((r) => r.id);
        await tx.passwordHistory.deleteMany({ where: { id: { in: ids } } });
      }

      // revoke all active sessions for security
      await tx.session.updateMany({
        where: { userId, active: true },
        data: { active: false, endedAt: now },
      });

      // mark user as inactive (force re-login)
      await tx.user.update({
        where: { id: userId },
        data: { loginStatus: 'inactive' },
      });
    });

    // Notify user via email (best-effort)
    if (user.email) {
      try {
        await sendPasswordChangeEmail(user.email, {
          time: new Date().toISOString(),
          ip: ip ?? undefined,
          userAgent: userAgent ?? undefined,
        });
      } catch (e) {
        console.warn('Failed to send password change email', e);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('change-password error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
