// app/(admin)/admin/layout.tsx
'use client';

import { SessionProvider } from 'next-auth/react';
import AdminHeader from '@/components/shared/adminHeader/admin-header';
import Footer from '@/components/footer';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {/* use min-h-screen so footer is pushed below when content is taller than viewport */}
      <div className="min-h-screen flex flex-col">
        <AdminHeader />
        {/* main grows to fill remaining space; remove overflow-auto if you prefer page scrolling instead of inner scrolling */}
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </SessionProvider>
  );
}
