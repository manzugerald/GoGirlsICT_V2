import type { Metadata } from 'next';

import ReportsList from './components/ReportsList';

import {
  getResourcesPageData,
  normalizeResourceType,
} from './data';

export const metadata: Metadata = {
  title:
    'Resources | GoGirls ICT Initiative',
  description:
    'Browse reports and resources published by GoGirls ICT Initiative.',
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

  const activeType =
    normalizeResourceType(params.type);

  const { reports } =
    await getResourcesPageData();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {activeType === 'reports' && (
        <ReportsList reports={reports} />
      )}
    </main>
  );
}