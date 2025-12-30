/**
 * lib/admin-force-change-password/sendAdminForceChangePassword.ts
 *
 * Sends an admin-forced temporary-password email to a user.
 * - Produces the subject and message body matching the requested structure.
 * - Uses a shared transporter if available (imported from '@/lib/email'), otherwise builds one from env.
 *
 * Usage:
 *   import sendAdminForceChangePassword from '@/lib/admin-force-change-password/sendAdminForceChangePassword';
 *   await sendAdminForceChangePassword(toEmail, { firstName, lastName, username, temporaryPassword, time, ip, userAgent, expiryText });
 */

import nodemailer from 'nodemailer';
import { transporter as sharedTransporter } from '@/lib/email';

type Options = {
  time?: string;
  ip?: string | null;
  userAgent?: string | null;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  temporaryPassword?: string | null;
  expiresInDays?: number | null;
  expiryText?: string | null; // explicit text e.g. "48 hours"
};

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
 * Default export: sendAdminForceChangePassword
 */
export default async function sendAdminForceChangePassword(to: string, opts: Options = {}) {
  const {
    time,
    ip,
    userAgent,
    username,
    firstName,
    lastName,
    temporaryPassword,
    expiresInDays = null,
    expiryText = null,
  } = opts;

  const nameParts = [firstName, lastName].filter(Boolean);
  const who = nameParts.length > 0 ? nameParts.join(' ') : username || to;
  const when = time ? new Date(time).toLocaleString() : new Date().toLocaleString();

  // Determine expiry text: explicit > days > default of 48 hours
  const expiry =
    expiryText ??
    (expiresInDays ? `${expiresInDays} day${expiresInDays > 1 ? 's' : ''}` : '48 hours');

  const subject = `Your Accounts's temporary password (Change within ${expiry})`;

  // Plain-text body (matches requested layout) — plain text cannot render bold,
  // so bolding is applied in HTML only.
  const lines: string[] = [];
  lines.push(`Dear ${who}:`);
  lines.push('');
  lines.push(
    `Your account's password (email: ${to}, username: ${username ?? ''}) has been reset on ${when}.`
  );
  lines.push('');
  if (ip) lines.push(`IP: ${ip}`);
  if (userAgent) lines.push(`User agent: ${userAgent}`);
  lines.push('');
  if (temporaryPassword) {
    lines.push('IMPORTANT: Do NOT share this password with anyone.');
    lines.push('');
    lines.push('Temporary password (use this to sign in):');
    lines.push('');
    lines.push(`${temporaryPassword}`);
    lines.push('');
    lines.push(
      `You must change this temporary password within ${expiry} to avoid the suspension of your account.`
    );
    lines.push('');
  } else {
    lines.push(
      `A temporary password was generated for your account. Please sign in and change your password as soon as possible.`
    );
    lines.push('');
    lines.push(
      `You must change this temporary password within ${expiry} to avoid the suspension of your account.`
    );
    lines.push('');
  }
  lines.push('If you did not request this change of password, please contact support immediately.');
  lines.push('');
  lines.push('Thank you!');
  lines.push('');
  lines.push('Security team: admin@gogirlsict.org');

  const text = lines.join('\n');

  // HTML body - follows requested formatting:
  // - Dear FirstName LastName in bold
  // - IMPORTANT: red bold
  // - Temporary password block: red text inside styled pre
  // - Bold black sentence about changing within expiry
  const htmlParts: string[] = [];
  htmlParts.push(
    `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;font-size:16px;color:#111;line-height:1.5">`
  );

  // Dear FirstName LastName in bold
  htmlParts.push(`<p><strong>Dear ${escapeHtml(who)}:</strong></p>`);

  htmlParts.push(
    `<p>Your account's password (email: <strong>${escapeHtml(
      to
    )}</strong>, username: <strong>${escapeHtml(
      username ?? ''
    )}</strong>) has been reset on ${escapeHtml(when)}.</p>`
  );

  if (ip || userAgent) {
    htmlParts.push('<p>');
    if (ip) {
      htmlParts.push(
        `<div style="margin:6px 0"><strong>IP:</strong> <code style="background:#f3f3f3;padding:2px 6px;border-radius:4px;font-family:monospace">${escapeHtml(
          String(ip)
        )}</code></div>`
      );
    }
    if (userAgent) {
      htmlParts.push(
        `<div style="margin:6px 0"><strong>User agent:</strong> <span style="font-family:monospace">${escapeHtml(
          String(userAgent)
        )}</span></div>`
      );
    }
    htmlParts.push('</p>');
  }

  // IMPORTANT red bold
  htmlParts.push(
    `<p style="color:#b91c1c;font-weight:700;margin-top:12px">IMPORTANT: Do NOT share this password with anyone.</p>`
  );

  // Temporary password block (red)
  if (temporaryPassword) {
    htmlParts.push(
      `<div style="margin-top:10px;color:#b91c1c;font-weight:600;">
        <div style="margin-bottom:8px;"><strong>Temporary password (use this to sign in):</strong></div>
        <pre style="background:#fff0f0;border:1px solid #ffd6d6;padding:12px;border-radius:6px;font-size:16px;white-space:pre-wrap;word-break:break-word;color:#b91c1c;">${escapeHtml(
          temporaryPassword
        )}</pre>
      </div>`
    );
  } else {
    htmlParts.push(
      `<p>A temporary password was generated for your account. Please sign in and change your password as soon as possible.</p>`
    );
  }

  // Bold black instruction about changing within expiry
  htmlParts.push(
    `<p style="font-weight:700;color:#111;margin-top:12px">You must change this temporary password within ${escapeHtml(
      expiry
    )} to avoid the suspension of your account.</p>`
  );

  htmlParts.push(
    `<p>If you did not request for this change of password, please contact support immediately.</p>`
  );

  htmlParts.push('<p>Thank you!</p>');
  htmlParts.push(
    `<p>Security team: <a href="mailto:admin@gogirlsict.org">admin@gogirlsict.org</a></p>`
  );

  htmlParts.push('</div>');

  const html = htmlParts.join('\n');

  // Use shared transporter if available; otherwise build from env
  let transporter: nodemailer.Transporter;
  if (sharedTransporter) {
    transporter = sharedTransporter;
  } else {
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: user ? { user, pass } : undefined,
      tls: { rejectUnauthorized: false },
    });
  }

  const from =
    process.env.FROM_EMAIL || process.env.EMAIL_FROM || '"Security team" <admin@gogirlsict.org>';

  console.log(`[ADMIN-PWD-EMAIL] Sending admin-forced password email to ${to}`);
  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });

    console.log('[ADMIN-PWD-EMAIL] Sent', info.messageId || info);
    try {
      // @ts-ignore - nodemailer types
      const preview = nodemailer.getTestMessageUrl && nodemailer.getTestMessageUrl(info);
      if (preview) console.log('[ADMIN-PWD-EMAIL] Preview URL:', preview);
    } catch {}
    return info;
  } catch (err) {
    console.error('[ADMIN-PWD-EMAIL] Send failed', err);
    throw err;
  }
}
