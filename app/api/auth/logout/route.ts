import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';

/**
 * POST /api/auth/logout
 *
 * Behavior:
 * - Reads session id from the SESSION_COOKIE_NAME cookie or request body { sessionId }
 * - Marks the session ended (endedAt + active=false)
 * - If no other active sessions remain for the user, sets user.loginStatus to inactive
 * - Clears the httpOnly session cookie in the response
 */

const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME || 'app_session';

export async function POST(req: Request) {
  try {
    // Attempt to read cookie first
    const cookieHeader = req.headers.get('cookie') ?? '';
    let sessionId: string | null = null;
    const cookieMatch = cookieHeader
      .split(';')
      .map((s) => s.trim())
      .find((c) => c.startsWith(SESSION_COOKIE_NAME + '='));
    if (cookieMatch) {
      sessionId = cookieMatch.split('=')[1];
    }

    // fallback: read body
    if (!sessionId) {
      const body = await req.json().catch(() => ({}));
      sessionId = body?.sessionId ?? null;
    }

    if (!sessionId) {
      return NextResponse.json({ error: 'No session id provided' }, { status: 400 });
    }

    const session = await prisma.session.findUnique({ where: { id: sessionId } });
    if (!session) {
      const res = NextResponse.json({ ok: true });
      // clear cookie anyway
      res.cookies.delete(SESSION_COOKIE_NAME, { path: '/' });
      return res;
    }

    const endedAt = new Date();
    await prisma.session.update({
      where: { id: sessionId },
      data: { active: false, endedAt },
    });

    // check other active sessions for the user
    const otherActive = await prisma.session.count({
      where: { userId: session.userId, active: true },
    });
    if (otherActive === 0) {
      await prisma.user.update({
        where: { id: session.userId },
        data: { loginStatus: 'inactive' },
      });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.delete(SESSION_COOKIE_NAME, { path: '/' });
    return res;
  } catch (err: any) {
    console.error('Logout route error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
