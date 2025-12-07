import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const FROM_EMAIL = process.env.FROM_EMAIL || 'manzugerald@gmail.com';

/**
 * Create a transporter. For local/dev you can use Gmail SMTP (may require app password)
 * or use a provider like SendGrid / Mailgun / SES in production.
 */
export const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465, // true for 465
  auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
});

/**
 * Send password change notification email.
 * Returns nodemailer result. Best-effort; catch errors when calling.
 */
export async function sendPasswordChangeEmail(
  to: string,
  opts: { time: string; ip?: string; userAgent?: string }
) {
  const subject = 'Your password was changed';
  const body = `
Hello,

This is a notification that the password for your account (${to}) was changed on ${opts.time}.

IP: ${opts.ip ?? 'unknown'}
User agent: ${opts.userAgent ?? 'unknown'}

If you did not make this change, please reset your password immediately or contact support.

-- 
Security Team
`;

  const info = await transporter.sendMail({
    from: FROM_EMAIL,
    to,
    subject,
    text: body,
  });

  return info;
}
