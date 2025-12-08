import { signIn, signOut } from 'next-auth/react';

const DEFAULT_POST_LOGIN = '/admin/dashboard?type=home';

function deleteCookie(name: string) {
  try {
    document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
    document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=None;`;
  } catch (e) {
    // ignore
  }
}

/**
 * loginAndSync
 * - Performs next-auth signIn then calls server-side login endpoint.
 * - After server login, fetches the authoritative session start time from the server
 *   and stores it in sessionStorage under 'loginStartedAt' so the client active-time
 *   counter can continue across page reloads.
 */
export async function loginAndSync({
  identifier,
  password,
  callbackUrl,
}: {
  identifier: string;
  password: string;
  callbackUrl?: string;
}): Promise<{ ok: boolean; error?: string; redirectUrl?: string }> {
  const finalCallback = callbackUrl ?? DEFAULT_POST_LOGIN;

  // 1) NextAuth signIn to create JWT session (do not redirect automatically)
  const next = await signIn('credentials', {
    redirect: false,
    username: identifier,
    password,
    callbackUrl: finalCallback,
  });

  if (!next) {
    return { ok: false, error: 'Sign-in failed' };
  }
  if ((next as any).error) {
    return { ok: false, error: (next as any).error };
  }

  // 2) Create server-side session/cookie
  try {
    const resp = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ identifier, password }),
    });

    const payload = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      // If server-side login fails, clear NextAuth session to avoid mismatch
      try {
        await signOut({ redirect: false });
      } catch {}
      return { ok: false, error: payload?.error || 'Server-side login failed' };
    }

    // Fetch authoritative server session start timestamp (ms) and store in sessionStorage
    try {
      const r = await fetch('/api/auth/session-start', { credentials: 'include' });
      if (r.ok) {
        const j = await r.json().catch(() => ({}));
        const start = j?.start ?? null;
        if (start) {
          try {
            sessionStorage.setItem('loginStartedAt', String(start));
          } catch (e) {
            // ignore
          }
        } else {
          // fallback to now if server didn't return start
          try {
            sessionStorage.setItem('loginStartedAt', String(Date.now()));
          } catch {}
        }
      } else {
        try {
          sessionStorage.setItem('loginStartedAt', String(Date.now()));
        } catch {}
      }
    } catch (e) {
      try {
        sessionStorage.setItem('loginStartedAt', String(Date.now()));
      } catch {}
    }

    // Determine redirect: next-auth returned url > provided callbackUrl > default
    const redirectUrl = (next as any).url ?? callbackUrl ?? DEFAULT_POST_LOGIN;
    return { ok: true, redirectUrl };
  } catch (err: any) {
    // On network error, clear NextAuth session
    try {
      await signOut({ redirect: false });
    } catch {}
    return { ok: false, error: 'Network error during login' };
  }
}

/**
 * logoutAndSync
 * - Best-effort clears client-side next-auth callback cookies (to avoid stale redirects)
 * - Stores lastLogoutAt in localStorage so subsequent login can detect "Welcome back"
 * - Calls server logout endpoint and next-auth signOut
 */
export async function logoutAndSync(): Promise<{ ok: boolean; error?: string }> {
  try {
    // 1) Clear client-side next-auth stored callback-cookie(s) to avoid stale redirect
    deleteCookie('next-auth.callback-url');
    deleteCookie('next-auth.csrf-token');

    // 2) Record logout time to enable "welcome back" detection
    try {
      localStorage.setItem('lastLogoutAt', String(Date.now()));
      sessionStorage.removeItem('loginStartedAt');
    } catch (e) {
      // ignore if storage not available
    }

    // 3) Call server logout to close server session and clear app cookie
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    }).catch(() => null);

    // 4) Clear NextAuth client-side session and redirect to admin login page.
    await signOut({ callbackUrl: '/admin' });

    return { ok: true };
  } catch (err: any) {
    return { ok: false, error: 'Logout failed' };
  }
}
