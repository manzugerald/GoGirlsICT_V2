'use client';

import { useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';

/**
 * useSessionHeartbeat
 *
 * - Calls POST /api/sessions/heartbeat periodically while a server-side session cookie exists.
 * - Triggers on page visibility (when tab becomes visible) and on mount.
 * - Default interval: 60 seconds (configurable by env via NEXT_PUBLIC_SESSION_HEARTBEAT_SECONDS)
 *
 * Usage: place once near your root (e.g., in app/layout or top-level admin layout).
 */
export default function useSessionHeartbeat() {
  const { status } = useSession();
  const timerRef = useRef<number | null>(null);
  const intervalSec = parseInt(process.env.NEXT_PUBLIC_SESSION_HEARTBEAT_SECONDS || '60', 10);

  async function pingHeartbeat() {
    try {
      await fetch('/api/sessions/heartbeat', {
        method: 'POST',
        credentials: 'include',
      });
    } catch (e) {
      // silently ignore network errors
    }
  }

  useEffect(() => {
    if (status !== 'authenticated') return;

    // initial ping
    pingHeartbeat();

    // interval
    timerRef.current = window.setInterval(() => {
      pingHeartbeat();
    }, Math.max(10, intervalSec) * 1000);

    // visibility change: when tab becomes visible ping immediately
    function handleVisibility() {
      if (document.visibilityState === 'visible') {
        pingHeartbeat();
      }
    }
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
}
