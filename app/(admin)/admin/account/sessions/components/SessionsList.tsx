'use client';

import React, { useEffect, useState } from 'react';

type SessionRow = {
  id: string;
  userId: string;
  startedAt: string | null;
  lastSeenAt: string | null;
  endedAt: string | null;
  ip?: string | null;
  userAgent?: string | null;
  active: boolean;
};

function formatDate(d?: string | null) {
  if (!d) return '—';
  try {
    return new Date(d).toLocaleString();
  } catch {
    return d ?? '—';
  }
}

export default function SessionsList() {
  const [sessions, setSessions] = useState<SessionRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [revoking, setRevoking] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/sessions', { credentials: 'include' });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        setError(j?.error || 'Failed to fetch sessions');
        setSessions([]);
      } else {
        const j = await res.json();
        setSessions(j.sessions ?? []);
      }
    } catch (e: any) {
      setError('Network error');
      setSessions([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function revoke(id: string) {
    setRevoking((s) => ({ ...s, [id]: true }));
    try {
      const url = `/api/sessions?id=${encodeURIComponent(id)}`;
      const res = await fetch(url, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        setError(j?.error || 'Failed to revoke session');
      } else {
        // refresh list
        await load();
      }
    } catch (e: any) {
      setError('Network error while revoking');
    } finally {
      setRevoking((s) => {
        const copy = { ...s };
        delete copy[id];
        return copy;
      });
    }
  }

  if (loading) return <div className="p-4">Loading sessions…</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-lg font-semibold mb-3">Active sessions</h2>
      {sessions.length === 0 ? (
        <div className="text-sm text-muted-foreground">No sessions found.</div>
      ) : (
        <div className="space-y-3">
          {sessions.map((s) => (
            <div
              key={s.id}
              className="flex items-center justify-between gap-4 border p-3 rounded bg-gray-50 dark:bg-gray-900"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">
                    {s.active ? 'Active session' : 'Ended session'}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Started: {formatDate(s.startedAt)}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Last seen: {formatDate(s.lastSeenAt)} • IP: {s.ip ?? '—'}
                </div>
                <div className="text-xs text-muted-foreground mt-1">UA: {s.userAgent ?? '—'}</div>
              </div>

              <div className="flex-shrink-0">
                <button
                  disabled={!s.active || !!revoking[s.id]}
                  onClick={() => revoke(s.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded disabled:opacity-50"
                >
                  {revoking[s.id] ? 'Revoking…' : s.active ? 'Revoke' : 'Revoked'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
