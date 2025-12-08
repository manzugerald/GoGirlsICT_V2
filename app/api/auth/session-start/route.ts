import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';

/**
 * GET /api/auth/session-start
 *
 * Given the server session cookie (SESSION_COOKIE_NAME, default 'app_session'),
 * look up the Session row and return the authoritative session start time.
 *
 * Response:
 *  - 200 { start: number | null, lastSeenAt?: number | null, active?: boolean }
 *
 * Behavior:
 *  - If a matching active session is found:
 *      - returns start = session.startedAt (ms since epoch)
 *      - returns lastSeenAt = session.lastSeenAt (ms) AFTER updating lastSeenAt to now
 *      - returns active: true
 *  - Otherwise returns start: null, active: false
 *
 * Notes / Assumptions:
 *  - The session cookie contains the session.id (string) as stored in the DB.
 *    If your cookie stores a different token, adapt the lookup logic accordingly.
 *  - This endpoint updates lastSeenAt to the current time so the DB reflects activity.
 *  - The endpoint is intentionally simple and Edge-safe (no heavy logic).
 */

export async function GET(req: Request) {
  try {
    const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME || 'app_session';

    const cookieHeader = req.headers.get('cookie') ?? '';
    const cookies = cookieHeader
      .split(';')
      .map((s) => s.trim())
      .filter(Boolean);

    const sessionCookie = cookies.find((c) => c.startsWith(`${SESSION_COOKIE_NAME}=`));
    if (!sessionCookie) {
      return NextResponse.json({ start: null, lastSeenAt: null, active: false });
    }

    // cookie value after "="
    let sessionId = sessionCookie.split('=')[1] ?? '';
    // decode in case it was encoded, and strip possible surrounding quotes
    try {
      sessionId = decodeURIComponent(sessionId);
    } catch {}
    sessionId = sessionId.replace(/^"|"$/g, '');

    if (!sessionId) {
      return NextResponse.json({ start: null, lastSeenAt: null, active: false });
    }

    // Find the session by id
    const sessionRow = await prisma.session.findUnique({
      where: { id: sessionId },
      select: {
        id: true,
        startedAt: true,
        lastSeenAt: true,
        active: true,
      },
    });

    if (!sessionRow || sessionRow.active === false) {
      return NextResponse.json({ start: null, lastSeenAt: null, active: false });
    }

    // Update lastSeenAt to now (best-effort) and return the authoritative startedAt
    const now = new Date();
    let updated: { startedAt: Date; lastSeenAt: Date } | null = null;
    try {
      const up = await prisma.session.update({
        where: { id: sessionRow.id },
        data: { lastSeenAt: now },
        select: { startedAt: true, lastSeenAt: true },
      });
      updated = up;
    } catch (e) {
      // If update fails for any reason, fall back to original values
      updated = {
        startedAt: sessionRow.startedAt,
        lastSeenAt: sessionRow.lastSeenAt ?? sessionRow.startedAt,
      };
    }

    const startMs = updated.startedAt ? updated.startedAt.getTime() : null;
    const lastSeenMs = updated.lastSeenAt ? updated.lastSeenAt.getTime() : null;

    return NextResponse.json({ start: startMs, lastSeenAt: lastSeenMs, active: true });
  } catch (err: any) {
    console.error('GET /api/auth/session-start error', err);
    return NextResponse.json({ start: null, lastSeenAt: null, active: false }, { status: 500 });
  }
}
