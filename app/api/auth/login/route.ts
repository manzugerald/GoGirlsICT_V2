import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import bcrypt from 'bcrypt';

/**
 * POST /api/auth/login
 *
 * Body: { identifier: string (username or email), password: string, ip?: string, userAgent?: string }
 *
 * Behavior:
 * - Performs credential verification (username/email + password)
 * - Enforces lockout (lockedUntil)
 * - Records failed attempts, increments counters, sets lock if threshold reached
 * - On success:
 *    - creates Session row (server-side session tracking)
 *    - resets failed counters, updates user.lastLogin and user.loginStatus
 *    - sets a server-side httpOnly cookie with session id (SESSION_COOKIE_NAME)
 *    - returns safe user info and sessionId
 *
 * Note: This endpoint is independent from NextAuth's signIn flow. If you use NextAuth
 * client signIn('credentials'), that path goes through NextAuth authorize (which does not
 * create server-side Session rows anymore). Choose which login flow your frontend should use.
 */

const LOCK_THRESHOLD = parseInt(process.env.LOCK_THRESHOLD || '3', 10);
const LOCK_DURATION_MINUTES = parseInt(process.env.LOCK_DURATION_MINUTES || '3', 10);
const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME || 'app_session';
const SESSION_MAX_AGE = parseInt(process.env.SESSION_MAX_AGE || String(60 * 60 * 24 * 30), 10); // seconds

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const identifier = String(body.identifier ?? '').trim();
    const password = String(body.password ?? '');
    const ip = String(body.ip ?? req.headers.get('x-forwarded-for') ?? '');
    const userAgent = String(body.userAgent ?? req.headers.get('user-agent') ?? '');

    if (!identifier || !password) {
      return NextResponse.json({ error: 'Missing identifier or password' }, { status: 400 });
    }

    const user = await prisma.user.findFirst({
      where: { OR: [{ username: identifier }, { email: identifier }] },
    });

    // Generic response for invalid credentials or non-existent user
    if (!user) {
      // small delay to reduce username enumeration
      await new Promise((r) => setTimeout(r, 200));
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Check lockout
    const now = new Date();
    if (user.lockedUntil && user.lockedUntil > now) {
      return NextResponse.json(
        { error: 'Account locked', lockedUntil: user.lockedUntil },
        { status: 423 }
      );
    }

    // Verify password
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      // record failed attempt
      await prisma.failedLoginAttempt.create({
        data: { userId: user.id, ip: ip || null },
      });

      // increment failed counter and possibly lock
      const newCount = (user.failedLoginCount ?? 0) + 1;
      const updateData: any = { failedLoginCount: newCount };
      if (newCount >= LOCK_THRESHOLD) {
        updateData.lockedUntil = new Date(Date.now() + LOCK_DURATION_MINUTES * 60 * 1000);
      }
      await prisma.user.update({ where: { id: user.id }, data: updateData });

      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Successful login: create server-side session and update user metadata
    const startedAt = new Date();
    const session = await prisma.session.create({
      data: {
        userId: user.id,
        startedAt,
        lastSeenAt: startedAt,
        ip: ip || null,
        userAgent: userAgent || null,
        active: true,
      },
    });

    await prisma.user.update({
      where: { id: user.id },
      data: {
        failedLoginCount: 0,
        lockedUntil: null,
        lastLogin: startedAt,
        loginStatus: 'active',
      },
    });

    // Set httpOnly cookie with session id
    const res = NextResponse.json({
      ok: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
      sessionId: session.id,
    });

    res.cookies.set(SESSION_COOKIE_NAME, session.id, {
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      maxAge: SESSION_MAX_AGE,
      secure: process.env.NODE_ENV === 'production',
    });

    return res;
  } catch (err: any) {
    console.error('Login route error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
