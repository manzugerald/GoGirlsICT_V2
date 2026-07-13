'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ArrowRight,
  ChevronDown,
  Heart,
  Menu as MenuIcon,
  Search,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';

import ModeToggle from './mode-toggle';
import FontSizeToggle from './font-size-toggle';
import { donateLink, navigationItems } from './navigation';

const desktopNavBase =
  'relative inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03]';

const desktopNavActive =
  'bg-white text-[#9f004d] shadow-md ring-1 ring-white/40';

const desktopNavInactive =
  'text-white/85 hover:bg-white/12 hover:text-white hover:shadow-sm';

const utilityButton =
  'inline-flex items-center justify-center rounded-full p-2 text-white/90 hover:bg-white/12 hover:text-white transition-all duration-200 hover:scale-[1.06]';

const mobileNavBase =
  'flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200';

const mobileNavActive =
  'bg-[#9f004d] text-white shadow-md dark:bg-pink-600';

const mobileNavInactive =
  'text-gray-700 hover:bg-[#9f004d]/8 dark:text-gray-300 dark:hover:bg-pink-500/10';

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    pointerEvents: 'none' as const,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    pointerEvents: 'auto' as const,
  },
};

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktopGroup, setOpenDesktopGroup] = useState<string | null>(null);
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
          const Icon = item.icon;
          const hasChildren = item.children && item.children.length > 0;
          const active = isActive(item.href);
          const isDropdownOpen = openDesktopGroup === item.label;

          if (hasChildren) {
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDesktopGroup(item.label)}
                onMouseLeave={() => {
                  window.setTimeout(() => setOpenDesktopGroup(null), 80)}
                } 
              >
                <Link
                  href={item.href}
                  className={`${desktopNavBase} ${
                    active ? desktopNavActive : desktopNavInactive
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </Link>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 top-full z-50 w-[350px] origin-top-left pt-3"
                    >
                      <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/95 shadow-2xl shadow-black/20 backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/95">
                        {/* Dropdown Header */}
                        <div className="border-b border-gray-200/80 bg-gradient-to-br from-[#9f004d]/10 via-pink-50 to-white p-4 dark:border-gray-800 dark:from-[#9f004d]/25 dark:via-gray-950 dark:to-gray-900">
                          <div className="flex gap-3">
                            {Icon && (
                              <motion.div
                                whileHover={{ x: 3 }}
                                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#9f004d]/10 text-[#9f004d] ring-1 ring-[#9f004d]/10 dark:bg-pink-500/15 dark:text-pink-300 dark:ring-pink-500/10"
                              >
                                <Icon className="h-5 w-5" />
                              </motion.div>
                            )}

                            <div className="min-w-0">
                              <p className="text-xs font-bold uppercase tracking-wide text-[#9f004d] dark:text-pink-300">
                                {item.label}
                              </p>

                              {item.description && (
                                <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                                  {item.description}
                                </p>
                              )}

                              <Link
                                href={item.href}
                                className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#9f004d] hover:text-[#8a0042] dark:text-pink-300 dark:hover:text-pink-200"
                              >
                                Explore {item.label}
                                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Dropdown Links */}
                        <div className="p-2">
                          {item.children?.map((child) => {
                            const ChildIcon = child.icon;
                            const childActive = isActive(child.href);

                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`group flex gap-3 rounded-2xl px-3 py-3 transition-all duration-200 ${
                                  childActive
                                    ? 'bg-[#9f004d]/10 text-[#9f004d] ring-1 ring-[#9f004d]/10 dark:bg-pink-500/15 dark:text-pink-300 dark:ring-pink-500/10'
                                    : 'text-gray-700 hover:bg-[#9f004d]/8 hover:text-[#9f004d] dark:text-gray-300 dark:hover:bg-pink-500/10 dark:hover:text-pink-300'
                                }`}
                              >
                                {ChildIcon && (
                                  <div
                                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-200 group-hover:translate-x-0.5 ${
                                      childActive
                                        ? 'bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-300'
                                        : 'bg-gray-100 text-gray-600 group-hover:bg-[#9f004d]/10 dark:bg-gray-800 dark:text-gray-300'
                                    }`}
                                  >
                                    <ChildIcon className="h-4 w-4" />
                                  </div>
                                )}

                                <div>
                                  <span className="block text-sm font-bold">
                                    {child.label}
                                  </span>

                                  {child.description && (
                                    <span className="mt-1 block text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                                      {child.description}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${desktopNavBase} ${
                active ? desktopNavActive : desktopNavInactive
              }`}
            >
              {item.label}
            </Link>
          );
        })}

        {/* Header Utilities */}
        <button type="button" aria-label="Search" className={`ml-2 ${utilityButton}`}>
          <Search className="h-5 w-5" />
        </button>

        <FontSizeToggle />
        <ModeToggle />

        <Link href={donateLink.href}>
          <Button
            size="sm"
            className="ml-2 rounded-full bg-white text-[#9f004d] hover:bg-pink-50 font-bold shadow-md hover:shadow-lg ring-1 ring-white/30 transition-all duration-300 hover:scale-105"
          >
            <Heart className="mr-1 h-4 w-4" fill="currentColor" />
            {donateLink.label}
          </Button>
        </Link>
      </div>

      {/* Mobile Utilities + Menu Button */}
      <div className="lg:hidden flex items-center gap-2">
        <button type="button" aria-label="Search" className={utilityButton}>
          <Search className="h-5 w-5" />
        </button>

        <FontSizeToggle />
        <ModeToggle />

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full p-2 text-white/90 hover:bg-white/12 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <MenuIcon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden fixed inset-0 top-14 z-40"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />

            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 top-0 bg-white/95 shadow-2xl backdrop-blur-xl dark:bg-gray-950/95"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-h-[calc(100vh-3.5rem)] overflow-y-auto">
                <div className="space-y-2 px-4 py-6">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const hasChildren = item.children && item.children.length > 0;
                    const expanded = openMobileGroup === item.label;
                    const active = isActive(item.href);

                    if (hasChildren) {
                      return (
                        <div key={item.label}>
                          <button
                            type="button"
                            onClick={() => setOpenMobileGroup(expanded ? null : item.label)}
                            className={`${mobileNavBase} ${
                              active ? mobileNavActive : mobileNavInactive
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              {Icon && <Icon className="h-5 w-5" />}
                              {item.label}
                            </span>

                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                expanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {expanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="mt-2 overflow-hidden rounded-2xl bg-gray-50 p-2 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                                  {/* Mobile Dropdown Header */}
                                  <Link
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="mb-2 block rounded-2xl border border-gray-200 bg-gradient-to-br from-[#9f004d]/10 via-pink-50 to-white p-4 hover:bg-gray-50 dark:border-gray-800 dark:from-[#9f004d]/25 dark:via-gray-950 dark:to-gray-900"
                                  >
                                    <div className="flex gap-3">
                                      {Icon && (
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-300">
                                          <Icon className="h-5 w-5" />
                                        </div>
                                      )}

                                      <div>
                                        <p className="text-sm font-bold text-[#9f004d] dark:text-pink-300">
                                          Explore {item.label}
                                        </p>

                                        {item.description && (
                                          <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                                            {item.description}
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                  </Link>

                                  {item.children?.map((child) => {
                                    const ChildIcon = child.icon;
                                    const childActive = isActive(child.href);

                                    return (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={closeMenu}
                                        className={`flex gap-3 rounded-xl px-4 py-3 text-sm transition-colors ${
                                          childActive
                                            ? 'bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/15 dark:text-pink-300'
                                            : 'text-gray-700 hover:bg-white hover:text-[#9f004d] dark:text-gray-300 dark:hover:bg-gray-950 dark:hover:text-pink-300'
                                        }`}
                                      >
                                        {ChildIcon && (
                                          <ChildIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                        )}

                                        <span>
                                          <span className="block font-bold">{child.label}</span>

                                          {child.description && (
                                            <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                                              {child.description}
                                            </span>
                                          )}
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className={`${mobileNavBase} ${
                          active ? mobileNavActive : mobileNavInactive
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {Icon && <Icon className="h-5 w-5" />}
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}

                  <Link href={donateLink.href} onClick={closeMenu} className="block pt-4">
                    <Button
                      size="lg"
                      className="w-full rounded-full bg-[#9f004d] hover:bg-[#8a0042] text-white font-bold shadow-md hover:shadow-lg transition-all duration-300"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}