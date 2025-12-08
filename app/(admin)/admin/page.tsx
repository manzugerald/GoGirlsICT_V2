'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { loginAndSync, logoutAndSync } from '@/lib/authClient';

export default function AdminLoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  // Use provided callback query param if present, otherwise default to home dashboard
  const callbackUrl = searchParams?.get('callbackUrl') || '/admin/dashboard?type=home';

  useEffect(() => {
    // If already authenticated, redirect to callbackUrl
    if (status === 'authenticated') {
      router.replace(callbackUrl);
    }
  }, [status, router, callbackUrl]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await loginAndSync({ identifier: username, password, callbackUrl });
      setLoading(false);
      if (!result.ok) {
        setError(result.error || 'Login failed');
        return;
      }
      // Prefer redirectUrl returned by loginAndSync (which prefers next-auth url, then callback, then default)
      router.push(result.redirectUrl ?? callbackUrl);
    } catch (err: any) {
      console.error('Login error', err);
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
    } catch (err: any) {
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
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="space-y-4 w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded shadow-md dark:shadow-lg text-center">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            You are signed in
          </h1>
          <p className="text-sm text-muted-foreground">
            Signed in as <span className="font-medium">{session.user.username}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center mt-2">
            <button
              onClick={() => router.push(callbackUrl)}
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

        <input
          type="text"
          placeholder="Username or email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-2 w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-2 w-full"
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
    </main>
  );
}
