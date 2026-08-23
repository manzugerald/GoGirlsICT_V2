import type { Metadata } from 'next';

import PageHero from '@/app/(root)/components/shared/page/PageHero';

import PodcastsSection from './components/PodcastsSection';
import ReportsGrid from './components/ReportsGrid';

import {
  getPodcasts,
  getReportsPageData,
} from './data';

export const metadata: Metadata = {
  title:
    'Resources | GoGirls ICT Initiative',

  description:
    'Listen to our podcasts and browse published reports, program outcomes, and impact documentation from GoGirls ICT Initiative.',
};

export default async function ReportsPage() {
  const [{ reports }, podcasts] =
    await Promise.all([
      getReportsPageData(),
      getPodcasts(),
    ]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <PageHero
        title="Resources"
        description="Listen to our podcasts and explore our published reports, program outcomes, and impact documentation."
      />

      <PodcastsSection podcasts={podcasts} />

      <div
        id="reports"
        className="scroll-mt-20 sm:scroll-mt-24"
      >
        <ReportsGrid reports={reports} />
      </div>
    </main>
  );
}
