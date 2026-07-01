'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Heart, Menu as MenuIcon, Search, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';

import ModeToggle from './mode-toggle';
import FontSizeToggle from './font-size-toggle';
import { donateLink, navigationItems } from './navigation';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenMobileGroup(null);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-1">
        {navigationItems.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const active = isActive(item.href);

          if (hasChildren) {
            return (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-white/20 text-white shadow-md'
                      : 'text-white/85 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
                    <div className="p-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block rounded-xl px-4 py-3 transition-colors ${
                            isActive(child.href)
                              ? 'bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-400'
                              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                          }`}
                        >
                          <span className="block text-sm font-semibold">{child.label}</span>
                          {child.description && (
                            <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                active
                  ? 'bg-white/20 text-white shadow-md'
                  : 'text-white/85 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}

              {active && (
                <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white" />
              )}
            </Link>
          );
        })}

        {/* Utilities */}
        <button
          type="button"
          aria-label="Search"
          className="ml-2 inline-flex items-center justify-center rounded-full p-2 text-white hover:bg-white/10 transition-colors"
        >
          <Search className="h-5 w-5" />
        </button>

        <FontSizeToggle />
        <ModeToggle />

        <Link href={donateLink.href}>
          <Button
            size="sm"
            className="ml-2 bg-white text-[#9f004d] hover:bg-gray-100 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Heart className="mr-1 h-4 w-4" fill="currentColor" />
            {donateLink.label}
          </Button>
        </Link>
      </div>

      {/* Mobile Utilities + Menu Button */}
      <div className="lg:hidden flex items-center gap-2">
        <button
          type="button"
          aria-label="Search"
          className="inline-flex items-center justify-center rounded-full p-2 text-white hover:bg-white/10 transition-colors"
        >
          <Search className="h-5 w-5" />
        </button>

        <FontSizeToggle />
        <ModeToggle />

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg p-2 hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6 text-white" /> : <MenuIcon className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-14 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
        />

        <div
          className={`absolute left-0 right-0 top-0 bg-white shadow-2xl transition-transform duration-300 dark:bg-gray-900 ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-h-[calc(100vh-3.5rem)] overflow-y-auto">
            <div className="space-y-2 px-4 py-6">
              {navigationItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const expanded = openMobileGroup === item.label;
                const active = isActive(item.href);

                if (hasChildren) {
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileGroup(expanded ? null : item.label)
                        }
                        className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
                          active
                            ? 'bg-[#9f004d] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {expanded && (
                        <div className="mt-2 space-y-1 rounded-xl bg-gray-50 p-2 dark:bg-gray-950">
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className="block rounded-lg px-4 py-2 text-sm font-semibold text-[#9f004d] hover:bg-white dark:text-pink-400 dark:hover:bg-gray-900"
                          >
                            Overview
                          </Link>

                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeMenu}
                              className={`block rounded-lg px-4 py-2 text-sm transition-colors ${
                                isActive(child.href)
                                  ? 'bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-400'
                                  : 'text-gray-700 hover:bg-white dark:text-gray-300 dark:hover:bg-gray-900'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
                      active
                        ? 'bg-[#9f004d] text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="h-2 w-2 rounded-full bg-white" />}
                  </Link>
                );
              })}

              <Link href={donateLink.href} onClick={closeMenu} className="block pt-4">
                <Button
                  size="lg"
                  className="w-full bg-[#9f004d] hover:bg-[#8a0042] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                  Donate Now
                </Button>
              </Link>

              <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800">
                <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                  © {new Date().getFullYear()} {APP_NAME}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}