// ⛔️ DO NOT add 'use client' here!

import { prisma } from '@/db/prisma';
import SinglePageHome from './components/SinglePageHome';

// ISR: this page only changes when an admin publishes/edits homepage
// content, a project, report, event, institution, or beneficiary — not
// every request. Serve the cached render and let revalidatePath() calls in
// those admin API routes invalidate it the moment something actually
// changes; 3600s is just the safety-net upper bound if one is ever missed.
export const revalidate = 3600;

export default async function HomePage() {
  // Fetch everything this single-page design actually renders, in parallel.
  // Note: only ssrContent (hero/vision copy) and the partner list feed real
  // sections; the "Impact" numbers below are plain counts, not full records
  // — using count() instead of findMany() avoids pulling entire tables (with
  // relations, in beneficiaries' case) just to display a number.
  const [
    ssrContent,
    ssrInstitutions,
    projectsCount,
    reportsCount,
    eventsCount,
    institutionsCount,
    beneficiariesCount,
  ] = await Promise.all([
    // HomePage content
    prisma.homePage.findFirst({
      orderBy: { createdAt: 'desc' },
    }),

    // Institutions (partners)
    prisma.institution.findMany({
      where: {
        institutionCategory: 'funding'
      },
      select: {
        id: true,
        name: true,
        logo: true,
        institutionType: true,
        institutionCategory: true
      },
      orderBy: { name: 'asc' },
      take: 3,
    }),

    // Impact section counts — published/public content only.
    prisma.project.count({ where: { publishStatus: 'published' } }),
    prisma.report.count({ where: { publishStatus: 'published' } }),
    prisma.event.count({ where: { publishStatus: 'published' } }),
    prisma.institution.count(),
    prisma.beneficiary.count({ where: { beneficiaryStatus: 'published' } }),
  ]);

  return (
    <SinglePageHome
      ssrContent={ssrContent}
      ssrPartners={ssrInstitutions}
      impactCounts={{
        projects: projectsCount,
        reports: reportsCount,
        events: eventsCount,
        institutions: institutionsCount,
        beneficiaries: beneficiariesCount,
        users: 0, // not shown on the public page (admin-only column)
      }}
    />
  );
}
