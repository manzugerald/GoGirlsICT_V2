'use server';

import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import bcrypt from 'bcrypt';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { isPwned } from '@/lib/hibp';
// Use the new admin-forced email helper
import sendAdminForceChangeEmail from '@/lib/admin-force-change-password/sendAdminForceChangePassword';
import { getIpFromRequest } from '@/lib/getIp';

const MAX_HISTORY = parseInt(process.env.MAX_HISTORY || '5', 10);
const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS || '12', 10);

/**
 * PATCH /api/users/:id/admin-force-change-password
 *
 * Behaviour:
 * - Caller must be authenticated.
 * - If actorId provided and not equal to callerId, caller must be 'super'.
 * - If actorId omitted or equals target user id => treat as self-change and require currentPassword.
 * - Enforces complexity, HIBP, reuse prevention (against current + last MAX_HISTORY).
 * - In a transaction:
 *    - archive old password to PasswordHistory
 *    - update users.password
 *    - create PasswordChangeLog
 *    - create a system message (informing user an admin changed their password; plaintext NOT included there)
 *    - prune old history rows
 *    - revoke active sessions
 *    - set user.loginStatus = 'inactive' (force re-login)
 * - Sends an email to user containing the temporary password (plaintext) and explicit instructions:
 *    - do NOT share the password
 *    - change it within 3 days or account will be suspended
 */
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }
    const callerId = (session.user as any)?.id ?? null;
    const callerRole = (session.user as any)?.role ?? null;

    const userId = params?.id;
    if (!userId) return NextResponse.json({ error: 'Missing user id' }, { status: 400 });

    const body = await req.json().catch(() => ({}));
    const newPassword = body?.newPassword;
    const currentPassword = body?.currentPassword ?? undefined;
    const actorId = body?.actorId ?? null;
    const ip = body?.ip ?? getIpFromRequest(req);
    const userAgent = body?.userAgent ?? req.headers.get('user-agent') ?? undefined;

    if (!newPassword || typeof newPassword !== 'string') {
      return NextResponse.json({ error: 'newPassword is required' }, { status: 400 });
    }

    // If actorId provided and not equal to caller, require caller to be 'super'
    if (
      actorId &&
      String(actorId) !== String(callerId) &&
      String(callerRole).toLowerCase() !== 'super'
    ) {
      return NextResponse.json(
        { error: 'Forbidden: requires super user to change another user password' },
        { status: 403 }
      );
    }

    const targetUser = await prisma.user.findUnique({ where: { id: userId } });
    if (!targetUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // If actorId not provided or actorId equals target user -> treat as self-change: require currentPassword
    const isSelfChange = !actorId || String(actorId) === String(userId);
    if (isSelfChange) {
      if (!currentPassword) {
        return NextResponse.json({ error: 'Current password required' }, { status: 400 });
      }
      const ok = await bcrypt.compare(currentPassword, targetUser.password);
      if (!ok) {
        return NextResponse.json({ error: 'Current password incorrect' }, { status: 401 });
      }
    }

    // Complexity checks
    if (
      newPassword.length < 8 ||
      !/[A-Z]/.test(newPassword) ||
      !/[a-z]/.test(newPassword) ||
      !/[0-9]/.test(newPassword) ||
      !/[^A-Za-z0-9]/.test(newPassword)
    ) {
      return NextResponse.json(
        {
          error:
            'Password must be at least 8 chars and include upper, lower, number, and special char',
        },
        { status: 400 }
      );
    }

    // HIBP check (best-effort)
    try {
      const { pwned, count } = await isPwned(newPassword);
      if (pwned) {
        return NextResponse.json(
          { error: `This password appears in ${count} breached datasets. Choose another.` },
          { status: 400 }
        );
      }
    } catch (e) {
      console.warn('HIBP check failed, continuing', e);
    }

    // Prevent reuse against recent history (current + last MAX_HISTORY)
    const historyRows = await prisma.passwordHistory.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: MAX_HISTORY,
      select: { passwordHash: true },
    });
    const hashesToCheck = [targetUser.password, ...historyRows.map((r) => r.passwordHash)].filter(
      Boolean
    );
    for (const h of hashesToCheck) {
      const same = await bcrypt.compare(newPassword, h);
      if (same) {
        return NextResponse.json(
          { error: 'New password must not match a recent password' },
          { status: 400 }
        );
      }
    }

    const newHash = await bcrypt.hash(newPassword, BCRYPT_ROUNDS);
    const now = new Date();

    await prisma.$transaction(async (tx) => {
      if (targetUser.password) {
        await tx.passwordHistory.create({
          data: { userId, passwordHash: targetUser.password },
        });
      }

      await tx.user.update({
        where: { id: userId },
        data: { password: newHash, updatedAt: now },
      });

      await tx.passwordChangeLog.create({
        data: {
          userId,
          changedBy: actorId ? String(actorId) : String(callerId),
          ip: ip ?? null,
          userAgent: userAgent ?? null,
        },
      });

      // CREATE SYSTEM MESSAGE FOR USER (informational — do NOT include plaintext password here)
      await tx.message.create({
        data: {
          title: 'Your password was changed by an administrator',
          content: {
            text: `An administrator reset your account password on ${now.toLocaleString()} from IP ${ip}. For your security, please change this temporary password within 3 days and do not share it with anyone.`,
          },
          messageCategory: 'system',
          allowResponses: false,
          senderEmail: targetUser.email ?? undefined,
          senderIp: ip ?? undefined,
          createdById: userId,
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

      // revoke all active sessions for target user
      await tx.session.updateMany({
        where: { userId, active: true },
        data: { active: false, endedAt: now },
      });

      // mark user as inactive (force re-login)
      await tx.user.update({ where: { id: userId }, data: { loginStatus: 'inactive' } });
    });

    // Notify user via admin-forced email helper (best-effort) — include the temporary plaintext password and clear instructions.
    if (targetUser.email) {
      try {
        await sendAdminForceChangeEmail(targetUser.email, {
          time: now.toISOString(),
          ip,
          userAgent,
          username: targetUser.username,
          firstName: targetUser.firstName,
          temporaryPassword: newPassword,
          note: `An administrator has reset your password. Do NOT share this password with anyone.`,
          expiresInDays: 3,
        });
      } catch (e) {
        console.warn('Failed to send admin-forced password change email', e);
      }
    }

    return NextResponse.json({ ok: true, message: 'Password updated' }, { status: 200 });
  } catch (err: any) {
    console.error('admin-force-change-password error', err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}
