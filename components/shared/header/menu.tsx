'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useSWR from 'swr';
import clsx from 'clsx';
import { Menu as MenuIcon, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import ModeToggle from './mode-toggle';
import { menuData } from './menu-data';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Menu = () => {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname();

  const { data } = useSWR('/api/menu', fetcher, {
    fallbackData: menuData,
    revalidateOnFocus: false,
    dedupingInterval: 60 * 60 * 1000,
  });

  useEffect(() => setMounted(true), []);

  // Smooth scroll observer for active section
  useEffect(() => {
    if (pathname !== '/') return;

    const sections = [
      'hero',
      'vision',
      'messages',
      'our-work',
      'get-involved',
      'about',
      'impact',
      'donate',
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  if (!mounted) return null;

  const counts = data.counts;

  const linkBase =
    'text-[15px] font-medium text-white/80 transition-colors px-2 py-1 rounded hover:text-white hover:bg-white/10';
  const activeClass = 'text-white font-semibold bg-white/20';

  // For homepage, use anchor links
  const isHomePage = pathname === '/';

  return (
    <div className="flex justify-end items-center gap-3">
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-4 ml-auto">
        {isHomePage ? (
          <>
            <a href="#hero" className={clsx(linkBase, activeSection === 'hero' && activeClass)}>
              Home
            </a>
            <a
              href="#our-work"
              className={clsx(linkBase, activeSection === 'our-work' && activeClass)}
            >
              Our Work
            </a>
            <a
              href="#get-involved"
              className={clsx(linkBase, activeSection === 'get-involved' && activeClass)}
            >
              Get Involved
            </a>
            <a href="#about" className={clsx(linkBase, activeSection === 'about' && activeClass)}>
              About
            </a>
            <a href="#impact" className={clsx(linkBase, activeSection === 'impact' && activeClass)}>
              Impact
            </a>
          </>
        ) : (
          <>
            <Link href="/" prefetch={true} className={linkBase}>
              Home
            </Link>
            <Link href="/projects" prefetch={true} className={linkBase}>
              Projects
            </Link>
            <Link href="/gallery" prefetch={true} className={linkBase}>
              Gallery
            </Link>
          </>
        )}
        <Button
          asChild
          variant="outline"
          className="rounded-full px-4 py-1.5 shadow-sm hover:shadow-md bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <Link href="#donate" className="flex items-center gap-1 text-[15px]">
            <ShoppingCart className="w-4 h-4" /> Donate
          </Link>
        </Button>
        <ModeToggle />
      </nav>

      {/* Mobile Menu */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="text-white">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start gap-4 pt-8">
            <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
            {isHomePage ? (
              <>
                <a href="#hero" className={linkBase}>
                  Home
                </a>
                <a href="#our-work" className={linkBase}>
                  Our Work
                </a>
                <a href="#get-involved" className={linkBase}>
                  Get Involved
                </a>
                <a href="#about" className={linkBase}>
                  About
                </a>
                <a href="#impact" className={linkBase}>
                  Impact
                </a>
                <a href="#donate" className={linkBase}>
                  Donate
                </a>
              </>
            ) : (
              <>
                <Link href="/" className={linkBase}>
                  Home
                </Link>
                <Link href="/projects" className={linkBase}>
                  Projects
                </Link>
                <Link href="/gallery" className={linkBase}>
                  Gallery
                </Link>
              </>
            )}
            <ModeToggle />
            <SheetDescription />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
