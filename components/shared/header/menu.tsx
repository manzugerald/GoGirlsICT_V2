'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import Link from 'next/link';

import {
  usePathname,
  useSearchParams,
} from 'next/navigation';

import {
  ArrowRight,
  ChevronDown,
  Heart,
  Menu as MenuIcon,
  Search,
  X,
} from 'lucide-react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import { Button } from '@/components/ui/button';

import { APP_NAME } from '@/lib/constants';

import ModeToggle from './mode-toggle';
import FontSizeToggle from './font-size-toggle';

import {
  donateLink,
  navigationItems,
} from './navigation';

const desktopNavBase =
  'relative inline-flex items-center gap-0.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12px] font-semibold transition-all duration-200 hover:scale-[1.02] xl:px-3 xl:text-[13px]';

const desktopNavActive =
  'bg-white text-[#9f004d] shadow-md ring-1 ring-white/40';

const desktopNavInactive =
  'text-white/85 hover:bg-white/12 hover:text-white hover:shadow-sm';

const utilityButton =
  'inline-flex items-center justify-center rounded-full p-1.5 text-white/90 transition-all duration-200 hover:scale-[1.04] hover:bg-white/12 hover:text-white';

const mobileNavBase =
  'flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200';

const mobileNavActive =
  'bg-[#9f004d] text-white shadow-md dark:bg-pink-600';

const mobileNavInactive =
  'text-gray-700 hover:bg-[#9f004d]/8 dark:text-gray-300 dark:hover:bg-pink-500/10';

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -7,
    scale: 0.985,
    pointerEvents: 'none' as const,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    pointerEvents: 'auto' as const,
  },
};

type ParsedHref = {
  pathname: string;
  queryString: string;
  hash: string;
};

function parseHref(href: string): ParsedHref {
  const [
    hrefWithoutHash,
    hashValue = '',
  ] = href.split('#');

  const [
    hrefPathname,
    queryString = '',
  ] = hrefWithoutHash.split('?');

  return {
    pathname:
      hrefPathname || '/',

    queryString,

    hash: hashValue
      ? `#${hashValue}`
      : '',
  };
}

export default function Menu() {
  const pathname = usePathname();
  const searchParams =
    useSearchParams();

  const [currentHash, setCurrentHash] =
    useState('');

  const [isOpen, setIsOpen] =
    useState(false);

  const [
    openDesktopGroup,
    setOpenDesktopGroup,
  ] = useState<string | null>(null);

  const [
    openMobileGroup,
    setOpenMobileGroup,
  ] = useState<string | null>(null);

  const desktopCloseTimer =
    useRef<
      ReturnType<typeof setTimeout> | null
    >(null);

  /*
   * Next.js usePathname does not contain the URL hash.
   * Track it separately so dropdown anchor links can
   * receive the correct active style.
   */
  useEffect(() => {
    const syncHash = () => {
      setCurrentHash(
        window.location.hash
      );
    };

    syncHash();

    window.addEventListener(
      'hashchange',
      syncHash
    );

    window.addEventListener(
      'popstate',
      syncHash
    );

    return () => {
      window.removeEventListener(
        'hashchange',
        syncHash
      );

      window.removeEventListener(
        'popstate',
        syncHash
      );
    };
  }, [pathname, searchParams]);

  useEffect(() => {
    document.body.style.overflow =
      isOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow =
        'unset';
    };
  }, [isOpen]);

  /*
   * Close the menus after normal route, query-string,
   * or hash navigation.
   */
  useEffect(() => {
    setOpenDesktopGroup(null);
    setOpenMobileGroup(null);
    setIsOpen(false);
  }, [
    pathname,
    searchParams,
    currentHash,
  ]);

  useEffect(() => {
    return () => {
      if (desktopCloseTimer.current) {
        clearTimeout(
          desktopCloseTimer.current
        );
      }
    };
  }, []);

  const isActive = (
    href: string
  ) => {
    const parsed =
      parseHref(href);

    if (parsed.pathname === '/') {
      return (
        pathname === '/' &&
        !parsed.hash
      );
    }

    const pathnameMatches =
      pathname === parsed.pathname ||
      pathname.startsWith(
        `${parsed.pathname}/`
      );

    if (!pathnameMatches) {
      return false;
    }

    if (parsed.queryString) {
      const expectedParams =
        new URLSearchParams(
          parsed.queryString
        );

      const queryMatches =
        Array.from(
          expectedParams.entries()
        ).every(
          ([key, value]) =>
            searchParams.get(key) ===
            value
        );

      if (!queryMatches) {
        return false;
      }
    }

    if (parsed.hash) {
      return (
        currentHash === parsed.hash
      );
    }

    return true;
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenMobileGroup(null);
  };

  const openDesktopDropdown = (
    label: string
  ) => {
    if (desktopCloseTimer.current) {
      clearTimeout(
        desktopCloseTimer.current
      );

      desktopCloseTimer.current = null;
    }

    setOpenDesktopGroup(label);
  };

  const scheduleDesktopDropdownClose =
    () => {
      if (desktopCloseTimer.current) {
        clearTimeout(
          desktopCloseTimer.current
        );
      }

      desktopCloseTimer.current =
        setTimeout(() => {
          setOpenDesktopGroup(null);
        }, 110);
    };

  return (
    <>
      {/* Desktop navigation */}
      <div className="hidden items-center gap-0.5 lg:flex xl:gap-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          const hasChildren =
            Boolean(
              item.children?.length
            );

          const active =
            isActive(item.href);

          const isDropdownOpen =
            openDesktopGroup ===
            item.label;

          if (hasChildren) {
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  openDesktopDropdown(
                    item.label
                  )
                }
                onMouseLeave={
                  scheduleDesktopDropdownClose
                }
              >
                <Link
                  href={item.href}
                  aria-haspopup="menu"
                  aria-expanded={
                    isDropdownOpen
                  }
                  className={`${desktopNavBase} ${
                    active
                      ? desktopNavActive
                      : desktopNavInactive
                  }`}
                >
                  {item.label}

                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${
                      isDropdownOpen
                        ? 'rotate-180'
                        : ''
                    }`}
                  />
                </Link>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={
                        dropdownVariants
                      }
                      transition={{
                        duration: 0.16,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className="absolute left-0 top-full z-50 w-[320px] origin-top-left pt-2"
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/40 bg-white/95 shadow-2xl shadow-black/20 backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/95">
                        {/* Dropdown heading */}
                        <div className="border-b border-gray-200/80 bg-gradient-to-br from-[#9f004d]/10 via-pink-50 to-white p-3 dark:border-gray-800 dark:from-[#9f004d]/25 dark:via-gray-950 dark:to-gray-900">
                          <div className="flex gap-3">
                            {Icon && (
                              <motion.div
                                whileHover={{
                                  x: 2,
                                }}
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#9f004d]/10 text-[#9f004d] ring-1 ring-[#9f004d]/10 dark:bg-pink-500/15 dark:text-pink-300 dark:ring-pink-500/10"
                              >
                                <Icon className="h-4.5 w-4.5" />
                              </motion.div>
                            )}

                            <div className="min-w-0">
                              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#9f004d] dark:text-pink-300">
                                {item.label}
                              </p>

                              {item.description && (
                                <p className="mt-1 text-[11px] leading-4 text-gray-600 dark:text-gray-400">
                                  {item.description}
                                </p>
                              )}

                              <Link
                                href={item.href}
                                className="group mt-2 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#9f004d] hover:text-[#8a0042] dark:text-pink-300 dark:hover:text-pink-200"
                              >
                                Explore{' '}
                                {item.label}

                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Dropdown links */}
                        <div className="p-2">
                          {item.children?.map(
                            (child) => {
                              const ChildIcon =
                                child.icon;

                              const childActive =
                                isActive(
                                  child.href
                                );

                              return (
                                <Link
                                  key={
                                    child.href
                                  }
                                  href={
                                    child.href
                                  }
                                  className={`group flex gap-2.5 rounded-xl px-3 py-2.5 transition-all duration-200 ${
                                    childActive
                                      ? 'bg-[#9f004d]/10 text-[#9f004d] ring-1 ring-[#9f004d]/10 dark:bg-pink-500/15 dark:text-pink-300 dark:ring-pink-500/10'
                                      : 'text-gray-700 hover:bg-[#9f004d]/8 hover:text-[#9f004d] dark:text-gray-300 dark:hover:bg-pink-500/10 dark:hover:text-pink-300'
                                  }`}
                                >
                                  {ChildIcon && (
                                    <div
                                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-200 group-hover:translate-x-0.5 ${
                                        childActive
                                          ? 'bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-300'
                                          : 'bg-gray-100 text-gray-600 group-hover:bg-[#9f004d]/10 dark:bg-gray-800 dark:text-gray-300'
                                      }`}
                                    >
                                      <ChildIcon className="h-3.5 w-3.5" />
                                    </div>
                                  )}

                                  <div className="min-w-0">
                                    <span className="block text-[13px] font-semibold leading-4">
                                      {child.label}
                                    </span>

                                    {child.description && (
                                      <span className="mt-1 block text-[11px] leading-4 text-gray-500 dark:text-gray-400">
                                        {child.description}
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              );
                            }
                          )}
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
                active
                  ? desktopNavActive
                  : desktopNavInactive
              }`}
            >
              {item.label}
            </Link>
          );
        })}

        {/* Desktop utilities */}
        <button
          type="button"
          aria-label="Search"
          className={`ml-1 ${utilityButton}`}
        >
          <Search className="h-4 w-4" />
        </button>

        <FontSizeToggle />

        <ModeToggle />

        <Link href={donateLink.href}>
          <Button
            size="sm"
            className="ml-1 rounded-full bg-white px-3 py-1.5 text-[12px] font-bold text-[#9f004d] shadow-md ring-1 ring-white/30 transition-all duration-300 hover:scale-[1.03] hover:bg-pink-50 hover:shadow-lg"
          >
            <Heart
              className="mr-1 h-3.5 w-3.5"
              fill="currentColor"
            />

            {donateLink.label}
          </Button>
        </Link>
      </div>

      {/* Mobile header controls */}
      <div className="flex items-center gap-1.5 lg:hidden">
        <button
          type="button"
          aria-label="Search"
          className={utilityButton}
        >
          <Search className="h-4 w-4" />
        </button>

        <FontSizeToggle />

        <ModeToggle />

        <button
          type="button"
          onClick={() =>
            setIsOpen(
              (current) => !current
            )
          }
          className="rounded-full p-1.5 text-white/90 transition-colors hover:bg-white/12 hover:text-white"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <MenuIcon className="h-5 w-5 text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.18,
            }}
            className="fixed inset-0 top-14 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeMenu}
            />

            <motion.div
              initial={{
                y: -18,
                opacity: 0,
                scale: 0.985,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                y: -18,
                opacity: 0,
                scale: 0.985,
              }}
              transition={{
                duration: 0.22,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="absolute left-0 right-0 top-0 bg-white/95 shadow-2xl backdrop-blur-xl dark:bg-gray-950/95"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <div className="max-h-[calc(100vh-3.5rem)] overflow-y-auto">
                <div className="space-y-2 px-4 py-5">
                  {navigationItems.map(
                    (item) => {
                      const Icon =
                        item.icon;

                      const hasChildren =
                        Boolean(
                          item.children
                            ?.length
                        );

                      const expanded =
                        openMobileGroup ===
                        item.label;

                      const active =
                        isActive(
                          item.href
                        );

                      if (hasChildren) {
                        return (
                          <div
                            key={
                              item.label
                            }
                          >
                            <button
                              type="button"
                              onClick={() =>
                                setOpenMobileGroup(
                                  expanded
                                    ? null
                                    : item.label
                                )
                              }
                              className={`${mobileNavBase} ${
                                active
                                  ? mobileNavActive
                                  : mobileNavInactive
                              }`}
                            >
                              <span className="flex items-center gap-3">
                                {Icon && (
                                  <Icon className="h-4.5 w-4.5" />
                                )}

                                {item.label}
                              </span>

                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${
                                  expanded
                                    ? 'rotate-180'
                                    : ''
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {expanded && (
                                <motion.div
                                  initial={{
                                    height: 0,
                                    opacity: 0,
                                  }}
                                  animate={{
                                    height: 'auto',
                                    opacity: 1,
                                  }}
                                  exit={{
                                    height: 0,
                                    opacity: 0,
                                  }}
                                  transition={{
                                    duration: 0.22,
                                    ease: [
                                      0.22,
                                      1,
                                      0.36,
                                      1,
                                    ],
                                  }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-2 overflow-hidden rounded-2xl bg-gray-50 p-2 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                                    <Link
                                      href={
                                        item.href
                                      }
                                      onClick={
                                        closeMenu
                                      }
                                      className="mb-2 block rounded-xl border border-gray-200 bg-gradient-to-br from-[#9f004d]/10 via-pink-50 to-white p-3 transition hover:bg-gray-50 dark:border-gray-800 dark:from-[#9f004d]/25 dark:via-gray-950 dark:to-gray-900"
                                    >
                                      <div className="flex gap-3">
                                        {Icon && (
                                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-300">
                                            <Icon className="h-4.5 w-4.5" />
                                          </div>
                                        )}

                                        <div>
                                          <p className="text-[13px] font-bold text-[#9f004d] dark:text-pink-300">
                                            Explore{' '}
                                            {item.label}
                                          </p>

                                          {item.description && (
                                            <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                                              {item.description}
                                            </p>
                                          )}
                                        </div>
                                      </div>
                                    </Link>

                                    {item.children?.map(
                                      (child) => {
                                        const ChildIcon =
                                          child.icon;

                                        const childActive =
                                          isActive(
                                            child.href
                                          );

                                        return (
                                          <Link
                                            key={
                                              child.href
                                            }
                                            href={
                                              child.href
                                            }
                                            onClick={
                                              closeMenu
                                            }
                                            className={`flex gap-3 rounded-xl px-3 py-2.5 text-[13px] transition-colors ${
                                              childActive
                                                ? 'bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/15 dark:text-pink-300'
                                                : 'text-gray-700 hover:bg-white hover:text-[#9f004d] dark:text-gray-300 dark:hover:bg-gray-950 dark:hover:text-pink-300'
                                            }`}
                                          >
                                            {ChildIcon && (
                                              <ChildIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                            )}

                                            <span>
                                              <span className="block font-bold">
                                                {child.label}
                                              </span>

                                              {child.description && (
                                                <span className="mt-1 block text-xs leading-4 text-gray-500 dark:text-gray-400">
                                                  {child.description}
                                                </span>
                                              )}
                                            </span>
                                          </Link>
                                        );
                                      }
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={
                            item.href
                          }
                          href={
                            item.href
                          }
                          onClick={
                            closeMenu
                          }
                          className={`${mobileNavBase} ${
                            active
                              ? mobileNavActive
                              : mobileNavInactive
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            {Icon && (
                              <Icon className="h-4.5 w-4.5" />
                            )}

                            {item.label}
                          </span>
                        </Link>
                      );
                    }
                  )}

                  <Link
                    href={donateLink.href}
                    onClick={closeMenu}
                    className="block pt-3"
                  >
                    <Button
                      size="lg"
                      className="w-full rounded-full bg-[#9f004d] text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#8a0042] hover:shadow-lg"
                    >
                      <Heart
                        className="mr-2 h-4 w-4"
                        fill="currentColor"
                      />

                      Donate Now
                    </Button>
                  </Link>

                  <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800">
                    <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                      ©{' '}
                      {new Date().getFullYear()}{' '}
                      {APP_NAME}
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