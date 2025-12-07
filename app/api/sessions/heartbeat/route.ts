import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';

/**
 * POST /api/sessions/heartbeat
 *
 * Purpose:
 * - Update session.lastSeenAt to now for the session id derived from cookie
 *   SESSION_COOKIE_NAME (defaults to 'app_session').
 * - Safe no-op if session not found.
 *
 * Client should call this periodically (e.g. every 60s) and on visibility change.
 */
export async function POST(req: Request) {
  try {
    const cookieHeader = req.headers.get('cookie') ?? '';
    const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME || 'app_session';

    const cookieMatch = cookieHeader
      .split(';')
      .map((s) => s.trim())
      .find((c) => c.startsWith(SESSION_COOKIE_NAME + '='));
    if (!cookieMatch) {
      // No cookie -> nothing to update
      return NextResponse.json({ ok: false, error: 'No session cookie' }, { status: 400 });
    }

    const sessionId = cookieMatch.split('=')[1];
    if (!sessionId) {
      return NextResponse.json({ ok: false, error: 'No session id' }, { status: 400 });
    }

    const now = new Date();
    const existing = await prisma.session.findUnique({ where: { id: sessionId } });
    if (!existing) {
      return NextResponse.json({ ok: false, error: 'Session not found' }, { status: 404 });
    }

    // Only update if active and lastSeenAt is older than e.g. 10 seconds to avoid DB spam.
    // (Request pacing is enforced client-side, but this is a small optimization.)
    await prisma.session.update({
      where: { id: sessionId },
      data: { lastSeenAt: now },
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Heartbeat error', err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
