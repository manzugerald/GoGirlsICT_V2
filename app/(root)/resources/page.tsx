import type { Metadata } from 'next';
import { Headphones, Radio } from 'lucide-react';

import PageHero from '@/app/(root)/components/shared/page/PageHero';
import PageHeroTabs from '@/app/(root)/components/shared/page/PageHeroTabs';

import PodcastsSection from './components/PodcastsSection';
import TalkshowsSection from './components/TalkshowsSection';

import { getResourcePosterUrl } from '@/lib/resourcePosterMeta';

import {
  getPodcasts,
  getRadioTalkshows,
  normalizeResourceType,
} from './data';

export const metadata: Metadata = {
  title: 'Resources',

  description:
    'Listen to our podcasts and radio talkshow recordings from GoGirls ICT Initiative.',
};

type ResourcesPageProps = {
  searchParams: Promise<{
    type?: string | string[];
  }>;
};

export default async function ResourcesPage({
  searchParams,
}: ResourcesPageProps) {
  const params = await searchParams;
  const activeType = normalizeResourceType(params.type);

  // Only fetch the active tab's list — the other tab's data isn't needed
  // for this request.
  const podcasts = activeType === 'podcasts' ? await getPodcasts() : null;
  const talkshows = activeType === 'talkshows' ? await getRadioTalkshows() : null;

  // The hero banner uses the single whole-section poster set for whichever
  // tab is active (see lib/resourcePosterMeta.ts — an admin-managed image,
  // not tied to any one podcast/talkshow entry), falling back to the
  // default gradient (no backgroundImage) when none has been set.
  const heroPoster = await getResourcePosterUrl(activeType);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <PageHero
        title="Resources"
        description="Listen to our podcasts and radio talkshow recordings."
        backgroundImage={heroPoster ?? undefined}
        variant="poster"
      >
        <PageHeroTabs
          tabs={[
            {
              href: '/resources',
              label: 'Podcasts',
              icon: Headphones,
              isActive: activeType === 'podcasts',
            },
            {
              href: '/resources?type=talkshows',
              label: 'Radio Talkshows',
              icon: Radio,
              isActive: activeType === 'talkshows',
            },
          ]}
        />
      </PageHero>

      {activeType === 'talkshows' ? (
        <TalkshowsSection talkshows={talkshows ?? []} />
      ) : (
        <PodcastsSection podcasts={podcasts ?? []} />
      )}
    </main>
  );
}
