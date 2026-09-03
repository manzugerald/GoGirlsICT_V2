import type { Metadata } from 'next';
import Link from 'next/link';
import { Headphones, Radio } from 'lucide-react';

import PageHero from '@/app/(root)/components/shared/page/PageHero';

import PodcastsSection from './components/PodcastsSection';
import TalkshowsSection from './components/TalkshowsSection';

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

const tabs = [
  { type: 'podcasts', label: 'Podcasts', icon: Headphones },
  { type: 'talkshows', label: 'Radio Talkshows', icon: Radio },
] as const;

export default async function ResourcesPage({
  searchParams,
}: ResourcesPageProps) {
  const params = await searchParams;
  const activeType = normalizeResourceType(params.type);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <PageHero
        title="Resources"
        description="Listen to our podcasts and radio talkshow recordings."
      >
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur">
          {tabs.map(({ type, label, icon: Icon }) => {
            const isActiveTab = activeType === type;

            return (
              <Link
                key={type}
                href={
                  type === 'podcasts'
                    ? '/resources'
                    : `/resources?type=${type}`
                }
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActiveTab
                    ? 'bg-white text-[#9f004d]'
                    : 'text-white/85 hover:bg-white/15 hover:text-white'
                }`}
                aria-current={
                  isActiveTab ? 'page' : undefined
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </div>
      </PageHero>

      {activeType === 'talkshows' ? (
        <TalkshowsView />
      ) : (
        <PodcastsView />
      )}
    </main>
  );
}

async function PodcastsView() {
  const podcasts = await getPodcasts();

  return <PodcastsSection podcasts={podcasts} />;
}

async function TalkshowsView() {
  const talkshows = await getRadioTalkshows();

  return <TalkshowsSection talkshows={talkshows} />;
}
