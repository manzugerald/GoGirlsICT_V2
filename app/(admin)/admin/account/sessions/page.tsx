'use client';

import React from 'react';
import SessionsList from './components/SessionsList';
import useSessionHeartbeat from '@/lib/hooks/useSessionHeartbeat';

export default function SessionsPage() {
  // activate heartbeat so the current session gets updated while on this page
  useSessionHeartbeat();

  return (
    <main className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Active sessions</h1>
        <p className="text-sm text-muted-foreground mb-4">
          You can see and revoke active sessions. Revoking a session will sign that device out.
        </p>

        <SessionsList />
      </div>
    </main>
  );
}
