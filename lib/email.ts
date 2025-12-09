import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const FROM_EMAIL = process.env.FROM_EMAIL || 'manzugerald@gmail.com';

/**
 * SMTP transporter and connection check on startup
 */
export const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  tls: {
    rejectUnauthorized: false,
  },
});

// Check SMTP connection at startup (safe to remove/comment out in prod)
transporter.verify(function (error, success) {
  if (error) {
    console.error('[EMAIL][VERIFY] SMTP connection error:', error);
  } else {
    console.log('[EMAIL][VERIFY] Server is ready to send emails');
  }
});

/**
 * Send password change notification email. Logs and propagates errors.
 */
export async function sendPasswordChangeEmail(
  to: string,
  opts: { time: string; ip?: string; userAgent?: string; username?: string; firstName?: string }
) {
  const subject = 'Your password was changed';
  const who = opts.firstName || opts.username || to;
  const body = `
Hello ${who},

This is a notification that the password for your account (${to}) was changed on ${opts.time}.

IP: ${opts.ip ?? 'unknown'}
User agent: ${opts.userAgent ?? 'unknown'}

If you did not make this change, please reset your password immediately or contact support.

-- 
Security Team
`;

  const html = `
    <div style="font-family:sans-serif;font-size:16px;line-height:1.5;margin:0;padding:0;">
      <p>Hello ${who},</p>
      <p>
        This is a notification that the password for your account (<b>${to}</b>) was changed on ${
    opts.time
  }.
      </p>
      <ul>
        <li><b>IP:</b> ${opts.ip ?? 'unknown'}</li>
        <li><b>User agent:</b> ${opts.userAgent ?? 'unknown'}</li>
      </ul>
      <p style="color:#c00;"><b>If you did not make this change, please reset your password immediately or contact support.</b></p>
      <br/>
      <p>--<br/>Security Team</p>
    </div>
  `;

  console.log(`[EMAIL][SEND] Attempting to send password change email to: ${to}`);
  try {
    const info = await transporter.sendMail({
      from: FROM_EMAIL,
      to,
      subject,
      text: body,
      html,
    });
    console.log(`[EMAIL][SEND] Success:`, info.messageId || info);
    return info;
  } catch (err) {
    console.error(`[EMAIL][ERROR] Failed to send password change email:`, err);
    throw err;
  }
}

/**
 * Send account deletion request confirmation email to the user.
 */
export async function sendAccountDeletionRequestEmail(
  to: string,
  opts: { username?: string; firstName?: string; time: string }
) {
  const who = opts.firstName || opts.username || to;
  const subject = 'We received your account deletion request';
  const body = `
Hello ${who},

This is to confirm we received your request for account deletion on ${opts.time}.

Our team will review and process your request as soon as possible.
If you did NOT request your account be deleted, please contact support immediately.

--
Support Team
`;

  const html = `
    <div style="font-family:sans-serif;font-size:16px;line-height:1.5;margin:0;padding:0;">
      <p>Hello ${who},</p>
      <p>
        This is to confirm we <b>received your request for account deletion</b> on ${opts.time}.
      </p>
      <p>
        Our team will review and process your request as soon as possible.<br/>
        <b>If you did NOT request this, please contact support immediately.</b>
      </p>
      <br/>
      <p>--<br/>Support Team</p>
    </div>
  `;

  console.log(`[EMAIL][SEND] Attempting to send account deletion confirmation email to: ${to}`);
  try {
    const info = await transporter.sendMail({
      from: FROM_EMAIL,
      to,
      subject,
      text: body,
      html,
    });
    console.log(`[EMAIL][SEND] Success:`, info.messageId || info);
    return info;
  } catch (err) {
    console.error(`[EMAIL][ERROR] Failed to send account deletion confirmation email:`, err);
    throw err;
  }
}
