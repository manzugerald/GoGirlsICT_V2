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
    <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur">
      {tabs.map(({ href, label, icon: Icon, isActive }) => (
        <Link
          key={href}
          href={href}
          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            isActive
              ? 'bg-white text-[#9f004d]'
              : 'text-white/85 hover:bg-white/15 hover:text-white'
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
