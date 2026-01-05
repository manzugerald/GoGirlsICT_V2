'use client';

import { SessionProvider } from 'next-auth/react';
import AdminHeader from '@/components/shared/adminHeader/admin-header';
import Footer from '@/components/footer';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {/* min-h-screen keeps layout at least full viewport; main gets top/bottom padding to account for fixed header/footer */}
      <div className="min-h-screen flex flex-col">
        <AdminHeader />
        {/* Reserve space for fixed header (h-14) and fixed footer (h-14) so content isn't covered */}
        <main className="flex-1 pt-14 pb-14">{children}</main>

        <Footer />
      </div>
    </SessionProvider>
  );
}
