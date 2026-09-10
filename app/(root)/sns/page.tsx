import type { Metadata } from 'next';
import { Facebook, Youtube } from 'lucide-react';

import SocialFeeds from './components/SocialFeeds';
import PageHero from '@/app/(root)/components/shared/page/PageHero';
import PageHeroTabs from '@/app/(root)/components/shared/page/PageHeroTabs';
import { getResourcePosterUrl } from '@/lib/resourcePosterMeta';

import {
  normalizeSnsType,
} from './data';

export const metadata: Metadata = {
  title: 'SNS',

  description:
    'Follow the latest Facebook posts and YouTube videos from GoGirls ICT Initiative.',
};

type SnsPageProps = {
  searchParams: Promise<{
    type?: string | string[];
  }>;
};

export default async function SnsPage({
  searchParams,
}: SnsPageProps) {
  const params = await searchParams;

  const activeType =
    normalizeSnsType(params.type);

  const heroPoster = await getResourcePosterUrl('sns');

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <PageHero
        title="Social & News"
        description="Follow the latest Facebook posts and YouTube videos from GoGirls ICT Initiative."
        backgroundImage={heroPoster ?? undefined}
        variant="poster"
      >
        {/* Both sections always render on this page (see SocialFeeds) —
            these just scroll to the matching #facebook/#youtube anchor,
            so neither is ever the server-known "active" one. */}
        <PageHeroTabs
          tabs={[
            {
              href: '#facebook',
              label: 'Facebook',
              icon: Facebook,
              isActive: false,
            },
            {
              href: '#youtube',
              label: 'YouTube',
              icon: Youtube,
              isActive: false,
            },
          ]}
        />
      </PageHero>

      {activeType === 'sns' && (
        <SocialFeeds />
      )}
    </main>
  );
}