'use client';

import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constants';
import AdminMenu from './adminMenu';
import { useSession } from 'next-auth/react';

/**
 * AdminHeader
 *
 * - Logo on the left (explicit size so Next/Image renders reliably)
 * - Center-right: "Welcome to the Admin Dashboard" (hidden on very small screens)
 * - Far right: AdminMenu (avatar, name, welcome/back message, active time, logout)
 * - Preserves brand color bg-[#9f004d]
 */

const AdminHeader = () => {
  const { data: session, status } = useSession();

  return (
    <header className="w-full bg-[#9f004d] text-white h-14 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/images/system/goGirlsLogoV2.svg"
            alt={`${APP_NAME} logo`}
            width={40}
            height={40}
            priority
          />
          <span className="font-bold text-lg leading-none select-none">{APP_NAME}</span>
        </Link>

        {/* Optional center message */}
        <div className="flex-1 flex justify-center">
          <h2 className="text-base font-medium hidden md:block">Welcome to the Admin Dashboard</h2>
        </div>

        {/* Menu / profile */}
        <div className="flex items-center gap-6">
          <AdminMenu
            isAuthenticated={status === 'authenticated'}
            user={{
              firstName: (session as any)?.user?.firstName || '',
              lastName: (session as any)?.user?.lastName || '',
              image: (session as any)?.user?.image || undefined,
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
