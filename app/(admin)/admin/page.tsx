'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { loginAndSync, logoutAndSync } from '@/lib/authClient';
import { Eye, EyeOff } from 'lucide-react';

export default function AdminLoginPage() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /*
   * Use the provided callback query param only if it's a genuine
   * relative path into the admin area. Anything else — missing, a bare
   * origin (e.g. "http://host:port" with no path, which NextAuth's own
   * /api/auth/signin computes as a callbackUrl when nothing better is
   * known — see the footer's login link), or a path outside /admin —
   * falls back to the dashboard so a bad callbackUrl can never bounce
   * a signed-in admin out to the public site.
   */
  const rawCallbackUrl = searchParams?.get('callbackUrl') || '';
  const callbackUrl =
    rawCallbackUrl.startsWith('/admin') ? rawCallbackUrl : '/admin/dashboard?type=home';

  /*
   * Guards against a real race: next-auth's own session cookie (and thus
   * `status`) can flip to "authenticated" as soon as signIn() resolves,
   * but middleware also requires a second, server-set `app_session`
   * cookie that a later step in loginAndSync() is still writing at that
   * exact moment. If this effect reacted to that early flip, middleware
   * would see one cookie present and one missing, bounce the navigation
   * back to /admin?callbackUrl=..., and — since `status` never changes
   * again — the effect would never retry, stranding an authenticated
   * user on the login page. While a submit is in flight, `handleSubmit`
   * owns the redirect and does it only once both cookies are confirmed.
   */
  const isSubmittingRef = useRef(false);

  /*
   * Whenever we're authenticated, a redirect to callbackUrl is already
   * in flight (either this effect fires it, or handleSubmit already
   * did). That redirect is a real full navigation, so it normally
   * replaces this page before the user perceives anything — but if the
   * destination is slow to compile/respond (a cold dev-server compile,
   * a cold serverless start, a slow dashboard query), this component
   * stays mounted and re-renders in the meantime. Without this flag,
   * that re-render showed an actionable "Continue to Dashboard" button,
   * which reads as "click here to proceed" even though the redirect is
   * already happening on its own. Revealing that button only after a
   * grace period keeps the common case silent while still giving a
   * genuinely stuck user (e.g. a popup blocker on window.location, or a
   * request that failed silently) a manual way forward.
   */
  const [showManualContinue, setShowManualContinue] = useState(false);

  useEffect(() => {
    // If already authenticated (e.g. a direct visit to /admin while a
    // session is still valid), redirect to callbackUrl. A full reload
    // (rather than router.replace) guarantees middleware re-checks with
    // whatever cookies are currently committed, sidestepping any client
    // router-cache staleness.
    if (status === 'authenticated' && !isSubmittingRef.current) {
      window.location.href = callbackUrl;
    }
  }, [status, callbackUrl]);

  useEffect(() => {
    if (status !== 'authenticated') {
      setShowManualContinue(false);
      return;
    }
    const timer = setTimeout(() => setShowManualContinue(true), 4000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    isSubmittingRef.current = true;

    try {
      const result = await loginAndSync({ identifier: username, password, callbackUrl });
      setLoading(false);
      if (!result.ok) {
        isSubmittingRef.current = false;
        setError(result.error || 'Login failed');
        return;
      }
      // Both the next-auth session cookie and the server-side app_session
      // cookie are guaranteed set by now. Use a full navigation (not
      // router.push) so middleware sees a fresh request with both
      // cookies attached, rather than a client-side transition that can
      // race ahead of cookie propagation.
      window.location.href = result.redirectUrl ?? callbackUrl;
    } catch (err) {
      console.error('Login error', err);
      isSubmittingRef.current = false;
      setError('Server error during login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLogoutLoading(true);
    setError('');
    try {
      const r = await logoutAndSync();
      if (!r.ok) {
        setError(r.error || 'Logout failed');
        setLogoutLoading(false);
        return;
      }
    } catch (err) {
      console.error('Logout error', err);
      setError('Logout failed');
    } finally {
      setLogoutLoading(false);
    }
  };

  if (status === 'loading') {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-300">Checking session...</p>
      </main>
    );
  }

  if (status === 'authenticated' && session?.user) {
    // The redirect to callbackUrl is already in flight by the time this
    // renders (see the effects above / handleSubmit). Show a plain
    // loading state for it — no clickable "continue" — so a normal-speed
    // redirect never looks like it's waiting on the user. Only past the
    // grace period do we assume something's actually stuck and offer a
    // manual way forward.
    if (!showManualContinue) {
      return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <p className="flex items-baseline gap-1 text-lg text-gray-600 dark:text-gray-300">
            <span>Signing you in</span>
            <span className="flex items-baseline" aria-hidden="true">
              <span className="animate-pulse text-3xl leading-none [animation-delay:0ms]">.</span>
              <span className="animate-pulse text-3xl leading-none [animation-delay:200ms]">.</span>
              <span className="animate-pulse text-3xl leading-none [animation-delay:400ms]">.</span>
            </span>
            <span className="sr-only">Loading</span>
          </p>
        </main>
      );
    }

    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="space-y-4 w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded shadow-md dark:shadow-lg text-center">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Still redirecting…
          </h1>
          <p className="text-sm text-muted-foreground">
            Signed in as <span className="font-medium">{session.user.username}</span>. This is
            taking longer than expected.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center mt-2">
            <button
              onClick={() => {
                window.location.href = callbackUrl;
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Continue to Dashboard
            </button>
            <button
              onClick={handleLogout}
              disabled={logoutLoading}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              {logoutLoading ? 'Signing out…' : 'Sign out'}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full max-w-sm p-6 bg-white dark:bg-gray-800 rounded shadow-md dark:shadow-lg"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
          Admin Login
        </h1>

        <div>
          <input
            type="text"
            placeholder="Username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password field with toggle */}
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-2 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2 px-4 rounded w-full transition-colors"
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
    </main>
  );
}
