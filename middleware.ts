import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

/**
 * Edge-safe middleware protecting /admin/* routes.
 *
 * - Place this file at the project root (./middleware.ts) or ./src/middleware.ts
 * - Requires NEXTAUTH_SECRET to be set for getToken() to work.
 * - By default it requires both a valid next-auth token and a server-side session cookie
 *   (SESSION_COOKIE_NAME, default: "app_session") before allowing access to /admin/* pages.
 *   Adjust the check if you prefer "either/or" semantics.
 *
 * Notes:
 * - Keep middleware simple: no database / fs / Node-only APIs here.
 * - Restart the dev server after adding/updating this file.
 */

const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME || 'app_session';

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Allow Next internals, static assets, favicon and auth routes without checks
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname === '/favicon.ico' ||
    pathname.startsWith('/assets') ||
    pathname.startsWith('/api/auth')
  ) {
    return NextResponse.next();
  }

  // Protect everything under /admin
  if (pathname.startsWith('/admin')) {
    // Allow the admin login page itself
    const normalized = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    if (normalized === '/admin') {
      return NextResponse.next();
    }

    // Safely obtain next-auth token (may throw if NEXTAUTH_SECRET missing)
    let token = null;
    try {
      token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    } catch (e) {
      token = null;
    }

    // Check for server session cookie presence in the Cookie header
    const cookieHeader = req.headers.get('cookie') ?? '';
    const sessionCookie = cookieHeader
      .split(';')
      .map((s) => s.trim())
      .find((c) => c.startsWith(`${SESSION_COOKIE_NAME}=`));

    // If either token or server session cookie is missing, redirect to login
    // (policy: require BOTH). Change the condition if you want OR semantics.
    if (!token || !sessionCookie) {
      const redirectUrl = new URL('/admin', req.url);
      const callback = pathname + (search ?? '');
      redirectUrl.searchParams.set('callbackUrl', callback);
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
// -----------------------