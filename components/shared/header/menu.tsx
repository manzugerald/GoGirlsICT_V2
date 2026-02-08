'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu as MenuIcon, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ModeToggle from './mode-toggle';
import { APP_NAME } from '@/lib/constants';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname();

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'vision',
        'impact',
        'our-work',
        'social',
        'messages',
        'get-involved',
        'about',
        'donate',
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is active if it's in the top quarter of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '/#hero', section: 'hero' },
    { label: 'Who We Are', href: '/#vision', section: 'vision' },
    { label: 'Impact', href: '/#impact', section: 'impact' },
    { label: 'Our Work', href: '/#our-work', section: 'our-work' },
    { label: 'Get Involved', href: '/#get-involved', section: 'get-involved' },
    { label: 'About', href: '/#about', section: 'about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const id = href.split('#')[1];
    const element = document.getElementById(id);

    if (element) {
      const offset = 56; // Header height (h-14 = 56px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const isActive = (section: string) => {
    if (pathname !== '/') return false;
    return activeSection === section;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-2">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive(link.section)
                ? 'bg-white/20 text-white shadow-md'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            {link.label}
            {isActive(link.section) && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
            )}
          </a>
        ))}

        {/* Donate Button - Desktop */}
        <a href="/#donate" onClick={(e) => handleNavClick(e, '/#donate')}>
          <Button
            size="sm"
            className="bg-white text-[#9f004d] hover:bg-gray-100 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ml-2"
          >
            <Heart className="w-4 h-4 mr-1" fill="currentColor" />
            Donate
          </Button>
        </a>

        {/* Mode Toggle */}
        <ModeToggle />
      </div>

      {/* Mobile: Mode Toggle + Menu Button */}
      <div className="lg:hidden flex items-center gap-2">
        <ModeToggle />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MenuIcon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-14 transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-h-[calc(100vh-3.5rem)] overflow-y-auto">
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(link.section)
                      ? 'bg-[#9f004d] text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive(link.section) && <span className="w-2 h-2 bg-white rounded-full" />}
                </a>
              ))}

              {/* Donate Button - Mobile */}
              <a
                href="/#donate"
                onClick={(e) => handleNavClick(e, '/#donate')}
                className="block mt-4"
              >
                <Button
                  size="lg"
                  className="w-full bg-[#9f004d] hover:bg-[#8a0042] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                  Donate Now
                </Button>
              </a>

              {/* Divider */}
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
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
