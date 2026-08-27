import { APP_NAME } from '@/lib/constants';
import Link from 'next/link';
import { Facebook, Youtube, Mail, Phone, MapPin, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    organization: [
      { label: 'About Us', href: '/#about' },
      { label: 'Our Work', href: '/#our-work' },
      { label: 'Impact', href: '/#impact' },
      { label: 'Team', href: '/#team' }, // Changed from /#about
    ],
    getInvolved: [
      { label: 'Donate', href: '/donate' },
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Partner With Us', href: '/partner' },
      { label: 'Events', href: '/#events' }, // Changed from /#get-involved
    ],
    resources: [
      { label: 'Projects', href: '/projects' },
      { label: 'Reports', href: '/reports' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'FAQs', href: '/faqs' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://facebook.com/GoGirlsICTInitiative',
      label: 'Facebook',
      color: 'hover:text-blue-400',
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@GoGirlsICT',
      label: 'YouTube',
      color: 'hover:text-red-400',
    },
    {
      icon: Mail,
      href: 'mailto:info@gogirlsict.org',
      label: 'Email',
      color: 'hover:text-green-400',
    },
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@gogirlsict.org', href: 'mailto:info@gogirlsict.org' },
    { icon: Phone, text: '+211 XXX XXX XXX', href: 'tel:+211-xxx-xx-xxx' },
    { icon: MapPin, text: 'Suk Melitia, Juba, South Sudan', href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      {/* Main Footer Content */}
      <div className="wrapper max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Brand Column - Spans 4 columns on large screens */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center gap-2 group">
                <div className="w-10 h-10 bg-[#9f004d] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" fill="white" />
                </div>
                <span className="text-2xl font-bold">{APP_NAME}</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering girls and young women through technology, digital literacy, and innovation.
              Building a future where every girl can be a creator, leader, and decision-maker.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 ${social.color} hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Organization Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-white">Organization</h3>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.label}>
                  {' '}
                  {/* Changed key to link.label for uniqueness */}
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-white">Get Involved</h3>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.label}>
                  {' '}
                  {/* Changed key to link.label for uniqueness */}
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {' '}
                  {/* Changed key to link.label for uniqueness */}
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, idx) => {
                const Icon = contact.icon;
                return (
                  <li key={`contact-${idx}`}>
                    {' '}
                    {/* Added prefix to make keys unique */}
                    <a
                      href={contact.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-start gap-2 group"
                    >
                      <Icon className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-[#9f004d]" />
                      <span>{contact.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup (Optional) */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to our newsletter for the latest news and updates
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#9f004d] transition-colors text-sm"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#9f004d] hover:bg-[#8a0042] rounded-lg font-semibold transition-colors text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
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

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              {footerLinks.legal.map((link, idx) => (
                <span key={`legal-${link.label}`} className="flex items-center gap-6">
                  {' '}
                  {/* Made key unique */}
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                  {idx < footerLinks.legal.length - 1 && <span className="text-gray-600">•</span>}
                </span>
              ))}
            </div>

            {/* Admin Login */}
            <div className="text-sm">
              <Link
                href="/admin"
                className="text-gray-400 hover:text-[#9f004d] transition-colors duration-200 inline-flex items-center gap-1"
              >
                <span>Admin Login</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Made with love */}
          <div className="text-center mt-6 pt-6 border-t border-white/5">
            <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-[#9f004d] fill-current" /> for girls
              everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
