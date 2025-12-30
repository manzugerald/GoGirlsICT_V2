import nodemailer from 'nodemailer';
import { transporter as sharedTransporter } from '@/lib/email';

/**
 * Helper to send admin-forced password-change emails.
 * Stored at: lib/admin-force-change-password/sendAdminForceChangeEmail.ts
 *
 * This re-uses the existing transporter exported from lib/email.ts (sharedTransporter).
 * If you prefer a separate transporter configuration for admin emails, replace sharedTransporter
 * with a locally created transporter.
 */

type Options = {
  time?: string; // ISO timestamp
  ip?: string | null;
  userAgent?: string | null;
  username?: string | null;
  firstName?: string | null;
  temporaryPassword?: string | null;
  expiresInDays?: number | null;
  note?: string | null;
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

export async function sendAdminForceChangeEmail(to: string, opts: Options = {}) {
  const {
    time,
    ip,
    userAgent,
    username,
    firstName,
    temporaryPassword,
    expiresInDays = 3,
    note,
  } = opts;

  const who = firstName || username || to;
  const when = time ? new Date(time).toLocaleString() : new Date().toLocaleString();
  const expiryText = expiresInDays
    ? `${expiresInDays} day${expiresInDays > 1 ? 's' : ''}`
    : '3 days';

  const subject = `Your account temporary password (change within ${expiryText})`;

  // Plain-text body
  let text = `Hello ${who},

An administrator has reset the password for your account (${to}) on ${when}.
`;

  if (ip) text += `IP: ${ip}\n`;
  if (userAgent) text += `User agent: ${userAgent}\n`;

  text += '\n';

  if (temporaryPassword) {
    text += `Temporary password (use this to sign in):\n\n${temporaryPassword}\n\n`;
    text += `IMPORTANT: Do NOT share this password with anyone.\n`;
    text += `You MUST change this temporary password within ${expiryText}, otherwise your account may be suspended.\n\n`;
  } else {
    text += `A temporary password was generated for your account. Please sign in and change your password as soon as possible.\n\n`;
  }

  if (note) {
    text += `${note}\n\n`;
  }

  text += `If you did not request or expect this change, contact support immediately.\n\n`;
  text += `Regards,\nSecurity Team\n`;

  // HTML body
  const htmlParts: string[] = [];
  htmlParts.push(
    `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; font-size:16px; line-height:1.5; color:#111">`
  );
  htmlParts.push(`<p>Hello ${escapeHtml(who)},</p>`);
  htmlParts.push(
    `<p>An administrator has reset the password for your account (<strong>${escapeHtml(
      to
    )}</strong>) on <strong>${escapeHtml(when)}</strong>.</p>`
  );

  if (ip || userAgent) {
    htmlParts.push('<ul>');
    if (ip) htmlParts.push(`<li><strong>IP:</strong> ${escapeHtml(String(ip))}</li>`);
    if (userAgent)
      htmlParts.push(`<li><strong>User agent:</strong> ${escapeHtml(String(userAgent))}</li>`);
    htmlParts.push('</ul>');
  }

  if (temporaryPassword) {
    htmlParts.push(
      `<p><strong>Temporary password (use this to sign in):</strong></p>
       <pre style="background:#f4f4f4;padding:12px;border-radius:6px;font-family:monospace;overflow:auto">${escapeHtml(
         temporaryPassword
       )}</pre>`
    );
    htmlParts.push(
      `<p style="color:#b91c1c"><strong>IMPORTANT:</strong> Do NOT share this password with anyone.</p>`
    );
    htmlParts.push(
      `<p>You must change this temporary password within <strong>${escapeHtml(
        expiryText
      )}</strong>. If you do not change it within ${escapeHtml(
        expiryText
      )}, your account may be suspended.</p>`
    );
  } else {
    htmlParts.push(
      `<p>A temporary password was generated for your account. Please sign in and change your password as soon as possible.</p>`
    );
  }

  if (note) {
    htmlParts.push(`<p><em>${escapeHtml(note)}</em></p>`);
  }

  htmlParts.push(`<p>If you did not request this change, contact support immediately.</p>`);
  htmlParts.push(`<hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>`);
  htmlParts.push(`<p style="font-size:12px;color:#666">Security Team</p>`);
  htmlParts.push(`</div>`);

  const html = htmlParts.join('\n');

  // Use the transporter from the shared email helper if available, otherwise create a minimal transporter.
  let t: nodemailer.Transporter;
  if (sharedTransporter) {
    t = sharedTransporter;
  } else {
    // Fallback transporter (development only) - uses SMTP env vars if present
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    t = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: user ? { user, pass } : undefined,
      tls: { rejectUnauthorized: false },
    });
  }

  const from = process.env.FROM_EMAIL || process.env.EMAIL_FROM || 'no-reply@example.com';

  console.log(`[ADMIN-PWD-EMAIL] Sending admin-forced password email to ${to}`);
  try {
    const info = await t.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });
    console.log('[ADMIN-PWD-EMAIL] Sent', info.messageId || info);
    // If using nodemailer's test account, optionally log preview URL:
    try {
      // @ts-ignore
      const preview = nodemailer.getTestMessageUrl && nodemailer.getTestMessageUrl(info);
      if (preview) console.log('[ADMIN-PWD-EMAIL] Preview URL:', preview);
    } catch {}
    return info;
  } catch (err) {
    console.error('[ADMIN-PWD-EMAIL] Send failed', err);
    throw err;
  }
}

export default sendAdminForceChangeEmail;
