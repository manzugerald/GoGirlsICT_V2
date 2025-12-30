'use server';

import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import bcrypt from 'bcrypt';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { isPwned } from '@/lib/hibp';
import sendAdminForceChangePassword from '@/lib/admin-force-change-password/sendAdminForceChangePassword';
import { getIpFromRequest } from '@/lib/getIp';

const MAX_HISTORY = parseInt(process.env.MAX_HISTORY || '5', 10);
const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS || '12', 10);

function escapeHtml(str: string | null | undefined) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * PATCH /api/users/:id/admin-force-change-password
 *
 * Server-side admin-forced password reset. Sends email with the exact structured message.
 */
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions as any);
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
    // Use explicit 48 hours expiry text as requested
    const expiryText = '48 hours';

    // Build the plain text message that will be persisted and emailed
    const messagePlainLines: string[] = [];
    const displayName =
      [targetUser.firstName, targetUser.lastName].filter(Boolean).join(' ') ||
      targetUser.username ||
      'there';
    messagePlainLines.push(`Dear ${displayName}:`);
    messagePlainLines.push('');
    messagePlainLines.push(
      `Your account's password (email: ${
        targetUser.email
      }) has been reset on ${now.toLocaleString()}.`
    );
    messagePlainLines.push('');
    messagePlainLines.push(`IP: ${ip ?? 'unknown'}`);
    messagePlainLines.push(`User agent: ${userAgent ?? 'unknown'}`);
    messagePlainLines.push('');
    messagePlainLines.push('IMPORTANT: Do NOT share this password with anyone.');
    messagePlainLines.push('');
    messagePlainLines.push('Temporary password (use this to sign in):');
    messagePlainLines.push('');
    messagePlainLines.push(`${newPassword}`);
    messagePlainLines.push('');
    messagePlainLines.push(
      `You must change this temporary password within ${expiryText} to avoid the suspension of your account.`
    );
    messagePlainLines.push('');
    messagePlainLines.push('If you did not request this change, contact support immediately.');
    messagePlainLines.push('');
    messagePlainLines.push('Security team: admin@gogirlsict.org');

    const messagePlain = messagePlainLines.join('\n');

    // Build HTML variant for message content (matches the same structured content)
    const messageHtmlParts: string[] = [];
    messageHtmlParts.push(
      `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial;font-size:16px;color:#111;line-height:1.5">`
    );
    // Dear FirstName LastName in bold
    messageHtmlParts.push(`<p><strong>Dear ${escapeHtml(displayName)}:</strong></p>`);
    messageHtmlParts.push(
      `<p>Your account's password (email: <strong>${escapeHtml(
        targetUser.email ?? ''
      )}</strong>) has been reset on <strong>${escapeHtml(now.toLocaleString())}</strong>.</p>`
    );
    messageHtmlParts.push(
      `<div style="margin:8px 0"><strong>IP:</strong> ${escapeHtml(String(ip ?? 'unknown'))}</div>`
    );
    messageHtmlParts.push(
      `<div style="margin:8px 0"><strong>User agent:</strong> ${escapeHtml(
        String(userAgent ?? 'unknown')
      )}</div>`
    );

    // IMPORTANT red bold
    messageHtmlParts.push(
      `<p style="color:#b91c1c;font-weight:700;margin-top:12px">IMPORTANT: Do NOT share this password with anyone.</p>`
    );

    // Temporary password block (red)
    messageHtmlParts.push(
      `<div style="margin-top:10px;color:#b91c1c;font-weight:600;">
        <div style="margin-bottom:8px;"><strong>Temporary password (use this to sign in):</strong></div>
        <pre style="background:#fff0f0;border:1px solid #ffd6d6;padding:12px;border-radius:6px;font-size:16px;white-space:pre-wrap;word-break:break-word;color:#b91c1c;">${escapeHtml(
          newPassword
        )}</pre>
      </div>`
    );

    // Bold black instruction about changing within expiry
    messageHtmlParts.push(
      `<p style="font-weight:700;color:#111;margin-top:12px">You must change this temporary password within ${escapeHtml(
        expiryText
      )} to avoid the suspension of your account.</p>`
    );

    messageHtmlParts.push(
      `<p>If you did not request this change, please contact support immediately.</p>`
    );
    messageHtmlParts.push(
      `<p>Security team: <a href="mailto:admin@gogirlsict.org">admin@gogirlsict.org</a></p>`
    );
    messageHtmlParts.push('</div>');
    const messageHtml = messageHtmlParts.join('\n');

    // Persist changes and create message inside a transaction
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

      // Persist the system message — ensure plain text is stored in content.text
      await tx.message.create({
        data: {
          title: 'Admin reset your password',
          content: {
            text: messagePlain,
            html: messageHtml,
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
        await sendAdminForceChangePassword(targetUser.email, {
          time: now.toISOString(),
          ip,
          userAgent,
          username: targetUser.username,
          firstName: targetUser.firstName,
          lastName: targetUser.lastName,
          temporaryPassword: newPassword,
          expiryText, // explicit 48 hours string
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
