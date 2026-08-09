import type { Metadata } from 'next';

import PageHero from '@/app/(root)/components/shared/page/PageHero';

import ReportsGrid from './components/ReportsGrid';

import { getReportsPageData } from './data';

export const metadata: Metadata = {
  title:
    'Reports | GoGirls ICT Initiative',

  description:
    'Browse published reports, program outcomes, and impact documentation from GoGirls ICT Initiative.',
};

export default async function ReportsPage() {
  const { reports } =
    await getReportsPageData();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <PageHero
        title="Reports & Publications"
        description="Explore our published reports, program outcomes, and impact documentation."
      />

      <ReportsGrid reports={reports} />
    </main>
  );
}
