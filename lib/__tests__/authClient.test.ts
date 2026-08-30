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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (nextAuth.signIn as any) = jest.fn(async () => ({ ok: true, url: '/admin/dashboard' }));

    // mock server login success
    global.fetch = jest.fn(async () =>
      Promise.resolve({
        ok: true,
        json: async () => ({ ok: true, sessionId: 'sess1' }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any)
    );

    const result = await loginAndSync({ identifier: 'test', password: 'p', callbackUrl: '/admin' });
    expect(result.ok).toBe(true);
    expect(result.redirectUrl).toBe('/admin/dashboard');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((nextAuth.signIn as any)).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalled();
  });

  it('loginAndSync: server-side login fails -> clears next-auth session and returns error', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (nextAuth.signIn as any) = jest.fn(async () => ({ ok: true, url: '/admin/dashboard' }));
    // server returns 401
    global.fetch = jest.fn(async () =>
      Promise.resolve({
        ok: false,
        json: async () => ({ error: 'locked' }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any)
    );

    // mock signOut to observe calls
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any)
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (nextAuth.signOut as any) = jest.fn(async () => null);

    const r = await logoutAndSync();
    expect(r.ok).toBe(true);
    expect(global.fetch).toHaveBeenCalled();
    expect(nextAuth.signOut).toHaveBeenCalled();
  });
});