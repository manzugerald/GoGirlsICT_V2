import type { Metadata } from 'next';

import PageHero from '@/app/(root)/components/shared/page/PageHero';

import ReportsGrid from './components/ReportsGrid';

import { getReportsPageData } from './data';

// ISR: reports only change when an admin creates/edits/deletes one —
// revalidatePath('/reports') in app/api/reports handles that on demand;
// 3600s is the safety-net upper bound if one is ever missed.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Reports',

  description:
    'Browse our published reports, program outcomes, and impact documentation from GoGirls ICT Initiative.',
};

export default async function ReportsPage() {
  const { reports } = await getReportsPageData();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <PageHero
        title="Reports"
        description="Explore our published reports, program outcomes, and impact documentation."
      />

      <div
        id="reports"
        className="scroll-mt-20 sm:scroll-mt-24"
      >
        <ReportsGrid reports={reports} />
      </div>
    </main>
  );
}
