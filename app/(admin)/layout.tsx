'use client';

import { SessionProvider } from 'next-auth/react';
import AdminHeader from '@/components/shared/adminHeader/admin-header';
import Footer from '@/components/footer';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {/* min-h-screen keeps layout at least full viewport; main gets top padding to account for the fixed header */}
      <div className="min-h-screen flex flex-col">
        <AdminHeader />
        {/* Reserve space for the fixed header (h-14). The footer below is a normal,
            non-fixed element now, so no bottom padding is needed to make room for it. */}
        <main className="flex-1 pt-14">{children}</main>

        <Footer />
      </div>
    </SessionProvider>
  );
}
