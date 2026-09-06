import type { Metadata } from 'next';
import { Headphones, Radio } from 'lucide-react';

import PageHero from '@/app/(root)/components/shared/page/PageHero';
import PageHeroTabs from '@/app/(root)/components/shared/page/PageHeroTabs';

import PodcastsSection from './components/PodcastsSection';
import TalkshowsSection from './components/TalkshowsSection';

import {
  getPodcasts,
  getRadioTalkshows,
  latestPoster,
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

  // The hero banner uses the poster of the latest published item in
  // whichever tab is active, falling back to the default gradient (no
  // backgroundImage) when none has one set.
  const heroPoster =
    activeType === 'talkshows'
      ? latestPoster(talkshows ?? [])
      : latestPoster(podcasts ?? []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <PageHero
        title="Resources"
        description="Listen to our podcasts and radio talkshow recordings."
        backgroundImage={heroPoster ?? undefined}
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
