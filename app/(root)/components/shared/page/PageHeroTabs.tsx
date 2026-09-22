import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

export type PageHeroTab = {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
};

/**
 * Pill-style tab switcher meant to sit inside a <PageHero>'s children —
 * e.g. Projects/Reports on /programs and /reports, or Podcasts/Radio
 * Talkshows on /resources. Each tab is a real link (either to a sibling
 * page, or the same page with a different `?type=` query), not client
 * state, so the active tab is whatever the caller determines server-side
 * from the current route/searchParams.
 */
export default function PageHeroTabs({ tabs }: { tabs: PageHeroTab[] }) {
  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-100/90 p-1 backdrop-blur dark:border-white/20 dark:bg-white/10">
      {tabs.map(({ href, label, icon: Icon, isActive }) => (
        <Link
          key={href}
          href={href}
          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 caption font-semibold transition-colors ${
            isActive
              ? 'bg-[#9f004d] text-white dark:bg-white dark:text-[#9f004d]'
              : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-white/85 dark:hover:bg-white/15 dark:hover:text-white'
          }`}
          aria-current={isActive ? 'page' : undefined}
        >
          <Icon className="h-4 w-4" />
          {label}
        </Link>
      ))}
    </div>
  );
}
