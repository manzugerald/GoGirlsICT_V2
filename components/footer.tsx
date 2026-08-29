import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Youtube,
  Mail,
  MapPin,
  ArrowRight,
  Info,
  Users,
  Building2,
  BookMarked,
  Calendar,
  HeartHandshake,
  MessageCircle,
  Headphones,
  FileText,
  BarChart3,
  Share2,
  LogIn,
  type LucideIcon,
} from 'lucide-react';

import { APP_NAME } from '@/lib/constants';

type FooterLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks: Record<string, FooterLink[]> = {
    organization: [
      { label: 'Who We Are', href: '/about#about', icon: Info },
      { label: 'Our Team', href: '/about#team', icon: Users },
      { label: 'Our Partners', href: '/about#partners', icon: Building2 },
      { label: 'Our Programs', href: '/programs', icon: BookMarked },
    ],
    getInvolved: [
      { label: 'Upcoming Events', href: '/get-involved#events', icon: Calendar },
      { label: 'Volunteer', href: '/get-involved#volunteer', icon: HeartHandshake },
      { label: 'Contact Us', href: '/get-involved#contact', icon: MessageCircle },
    ],
    resources: [
      { label: 'Podcasts', href: '/reports', icon: Headphones },
      { label: 'Published Reports', href: '/reports#reports', icon: FileText },
      { label: 'Impact', href: '/impact', icon: BarChart3 },
      { label: 'Social & News', href: '/sns', icon: Share2 },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://facebook.com/GoGirlsICTInitiative',
      label: 'Facebook',
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@GoGirlsICT',
      label: 'YouTube',
    },
    {
      icon: Mail,
      href: 'mailto:info@gogirlsict.org',
      label: 'Email',
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      {/* Main Footer Content */}
      <div className="wrapper max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <Image
                src="/assets/images/system/goGirlsLogoV2.svg"
                alt={`${APP_NAME} logo`}
                height={40}
                width={40}
                className="h-auto transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-2xl font-bold">{APP_NAME}</span>
            </Link>

            <p className="text-gray-400 mt-6 mb-6 leading-relaxed">
              Empowering Communities and young women through technology, digital literacy, and innovation.
              Building a future where every girl can be a creator, leader, and decision-maker.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-lg text-[#9f004d] transition-all duration-300 hover:text-pink-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Direct contact */}
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@gogirlsict.org"
                  className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#9f004d]" />
                  info@gogirlsict.org
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 shrink-0 text-[#9f004d]" />
                Juba, South Sudan
              </li>
            </ul>
          </div>

          {/* Organization Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-white">Organization</h3>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-1.5 group"
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0 text-[#9f004d] group-hover:text-pink-300 transition-colors" />
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-white">Get Involved</h3>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-1.5 group"
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0 text-[#9f004d] group-hover:text-pink-300 transition-colors" />
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-1.5 group"
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0 text-[#9f004d] group-hover:text-pink-300 transition-colors" />
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="wrapper max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} {APP_NAME}. All Rights Reserved.
            </div>

            {/* Admin Login */}
            <div className="text-sm">
              <Link
                href="/admin"
                className="text-gray-400 hover:text-[#9f004d] transition-colors duration-200 inline-flex items-center gap-1.5 group"
              >
                <LogIn className="w-3.5 h-3.5 shrink-0 text-[#9f004d] group-hover:text-pink-300 transition-colors" />
                <span>Admin Login</span>
                <ArrowRight className="w-3 h-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
