'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import ModeToggle from '../header/mode-toggle';
import { LogIn, LogOut, User as UserIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { logoutAndSync } from '@/lib/authClient';

interface AdminMenuProps {
  isAuthenticated: boolean;
  user?: {
    firstName: string;
    lastName: string;
    image?: string;
  };
}

const isSameCalendarDay = (tsA: number, tsB: number) => {
  try {
    const a = new Date(tsA);
    const b = new Date(tsB);
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  } catch {
    return false;
  }
};

const formatElapsed = (ms: number) => {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  if (totalSeconds < 60) {
    return `${totalSeconds} secs`;
  }
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const padded = seconds.toString().padStart(2, '0');
  return `${minutes}:${padded} secs`;
};

const AdminMenu: React.FC<AdminMenuProps> = ({ isAuthenticated, user }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin';

  const [showWelcomeBack, setShowWelcomeBack] = useState(false);
  const [elapsedText, setElapsedText] = useState<string>('');
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowWelcomeBack(false);
      setElapsedText('');
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    (async () => {
      // Determine lastLogoutAt (localStorage)
      let lastLogoutAt: number | null = null;
      try {
        const raw = localStorage.getItem('lastLogoutAt');
        if (raw) lastLogoutAt = parseInt(raw, 10);
      } catch {
        lastLogoutAt = null;
      }

      // Determine loginStartedAt (sessionStorage) — if not present, fetch from server
      let loginStartedAt: number | null = null;
      try {
        const raw = sessionStorage.getItem('loginStartedAt');
        if (raw) loginStartedAt = parseInt(raw, 10);
      } catch {
        loginStartedAt = null;
      }

      if (!loginStartedAt) {
        // Ask server for authoritative start time (best-effort)
        try {
          const r = await fetch('/api/auth/session-start', { credentials: 'include' });
          if (r.ok) {
            const j = await r.json().catch(() => ({}));
            const start = j?.start ?? null;
            if (start) {
              loginStartedAt = parseInt(String(start), 10);
              try {
                sessionStorage.setItem('loginStartedAt', String(loginStartedAt));
              } catch {}
            }
          }
        } catch (e) {
          // ignore and fallback to now
        }
      }

      const now = Date.now();
      const welcome =
        !!lastLogoutAt &&
        isSameCalendarDay(lastLogoutAt, now) &&
        !!loginStartedAt &&
        loginStartedAt > lastLogoutAt;

      setShowWelcomeBack(Boolean(welcome));

      const start = loginStartedAt ?? now;
      setElapsedText(formatElapsed(now - start));

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      intervalRef.current = window.setInterval(() => {
        setElapsedText(formatElapsed(Date.now() - start));
      }, 1000);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const handleLogout = async () => {
    try {
      try {
        localStorage.setItem('lastLogoutAt', String(Date.now()));
        sessionStorage.removeItem('loginStartedAt');
      } catch {}
      await logoutAndSync();
      router.push('/admin');
    } catch {
      router.push('/admin');
    }
  };

  const handleLogin = () => {
    router.push('/admin');
  };

  return (
    <div className="flex items-center gap-4">
      {isLoginPage ? (
        <>
          <Button variant="ghost" onClick={handleLogin} aria-label="Login">
            <LogIn className="mr-1 w-4 h-4" /> <span>Login</span>
          </Button>
          <ModeToggle />
        </>
      ) : (
        <>
          {isAuthenticated && user ? (
            <div className="flex items-center gap-3">
              {user.image ? (
                <div className="w-10 h-10 relative rounded-full overflow-hidden ring-1 ring-white/25 flex-shrink-0">
                  <Image
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <UserIcon className="w-5 h-5 text-white" />
                </div>
              )}

              <div className="flex flex-col leading-tight">
                <span className="text-sm font-medium">
                  Hello,&nbsp;{user.firstName} {user.lastName}
                </span>

                <div className="text-xs opacity-90">
                  {showWelcomeBack ? (
                    <span className="block">
                      Welcome back — you have been active for {elapsedText}
                    </span>
                  ) : (
                    <span className="block">You have been active for {elapsedText}</span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 ml-2">
                <Button variant="ghost" onClick={handleLogout} aria-label="Logout">
                  <LogOut className="mr-1 w-4 h-4" /> <span>Logout</span>
                </Button>

                <ModeToggle />
              </div>
            </div>
          ) : (
            <>
              <Button variant="ghost" onClick={handleLogin} aria-label="Login">
                <LogIn className="mr-1 w-4 h-4" /> <span>Login</span>
              </Button>
              <ModeToggle />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AdminMenu;
