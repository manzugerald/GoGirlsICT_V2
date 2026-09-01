import type { Metadata } from 'next';

import PageHero from '@/app/(root)/components/shared/page/PageHero';

import PodcastsSection from './components/PodcastsSection';
import ReportsGrid from './components/ReportsGrid';

import {
  getPodcasts,
  getReportsPageData,
} from './data';

// ISR: reports/podcasts only change when an admin creates/edits/deletes
// one — revalidatePath('/reports') in app/api/reports and app/api/podcasts
// handles that on demand; 3600s is the safety-net upper bound if one is
// ever missed.
export const revalidate = 3600;

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
