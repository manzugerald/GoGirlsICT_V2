'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#9f004d]/98 backdrop-blur-md shadow-lg'
          : 'bg-[#9f004d]/95 backdrop-blur-md shadow-md'
      } h-14 flex items-center`}
    >
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4">
        {/* Logo + App Name */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <div className="relative">
            <Image
              src="/assets/images/system/goGirlsLogoV2.svg"
              alt={`${APP_NAME} logo`}
              height={40}
              width={40}
              className="h-auto transition-transform duration-300 group-hover:scale-110"
              priority
            />
          </div>
          <span className="hidden lg:inline text-white text-lg font-semibold tracking-wide">
            {APP_NAME}
          </span>
        </Link>

        {/* Right-aligned Menu */}
        <div className="ml-auto">
          <Menu />
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-white via-pink-200 to-white transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
