/**
 * Jest tests for lib/authClient helpers (loginAndSync, logoutAndSync).
 *
 * These tests mock:
 * - next-auth signIn / signOut
 * - window.fetch
 *
 * Place in your jest config to run. They assume jest environment jsdom.
 */

import { loginAndSync, logoutAndSync } from '@/lib/authClient';
import * as nextAuth from 'next-auth/react';

describe('authClient helpers', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  it('loginAndSync: success path', async () => {
    // mock next-auth signIn
    (nextAuth.signIn as any) = jest.fn(async () => ({ ok: true, url: '/admin/dashboard' }));

    // mock server login success
    global.fetch = jest.fn(async () =>
      Promise.resolve({
        ok: true,
        json: async () => ({ ok: true, sessionId: 'sess1' }),
      } as any)
    );

    const result = await loginAndSync({ identifier: 'test', password: 'p', callbackUrl: '/admin' });
    expect(result.ok).toBe(true);
    expect(result.redirectUrl).toBe('/admin/dashboard');
    expect((nextAuth.signIn as any)).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalled();
  });

  it('loginAndSync: server-side login fails -> clears next-auth session and returns error', async () => {
    (nextAuth.signIn as any) = jest.fn(async () => ({ ok: true, url: '/admin/dashboard' }));
    // server returns 401
    global.fetch = jest.fn(async () =>
      Promise.resolve({
        ok: false,
        json: async () => ({ error: 'locked' }),
      } as any)
    );

    // mock signOut to observe calls
    (nextAuth.signOut as any) = jest.fn(async () => null);

    const result = await loginAndSync({ identifier: 'test', password: 'p' });
    expect(result.ok).toBe(false);
    expect(result.error).toBeDefined();
    expect(nextAuth.signOut).toHaveBeenCalled();
  });

  it('logoutAndSync: calls server and next-auth signOut', async () => {
    global.fetch = jest.fn(async () =>
      Promise.resolve({
        ok: true,
        json: async () => ({ ok: true }),
      } as any)
    );
    (nextAuth.signOut as any) = jest.fn(async () => null);

    const r = await logoutAndSync();
    expect(r.ok).toBe(true);
    expect(global.fetch).toHaveBeenCalled();
    expect(nextAuth.signOut).toHaveBeenCalled();
  });
});
```

// Notes, caveats and next steps
// - Middleware vs heartbeat: Next.js edge middleware can't safely run Prisma. The common, robust pattern is to expose a small server endpoint (heartbeat) and call it from the client hook — implemented above. This is simple, reliable and portable across deployment platforms.
// - Heartbeat interval: default 60s. Tune with NEXT_PUBLIC_SESSION_HEARTBEAT_SECONDS env var.
// - Sessions list uses your existing /api/sessions endpoints (GET and DELETE). I reused credentials: 'include' to send/receive cookies.
// - Tests: these are Jest-style tests and rely on your project Jest config. They mock next-auth and global.fetch. Adjust import paths if your project layout differs.
// - Where to mount the heartbeat hook: add useSessionHeartbeat() to a top-level client layout (e.g., app/layout or admin layout) so it runs while the user is active. The sessions page already uses it.

// Would you like me to:
// - Add server-side pruning of very stale sessions (cron or migration) example?
// - Add a UI action to "revoke all other sessions" (useful when user wants to sign out everywhere)?
// - Wire the heartbeat to skip when cookie missing (already returns 400 and ignored by hook) or to fallback to JWT-based identification?

// Which would you like next?