import { prisma } from '@/db/prisma';
import ImpactPageContent from './components/ImpactPageContent';

// ISR: see app/(root)/page.tsx — same counts, same invalidation triggers.
export const revalidate = 3600;

export default async function ImpactPage() {
  // Same counts as the homepage's Impact section — computed here (not
  // fetched client-side) so this page doesn't repeat the six live API
  // calls DashboardChart/AnimatedStats used to fire on every visit.
  const [projectsCount, reportsCount, eventsCount, institutionsCount, beneficiariesCount] =
    await Promise.all([
      prisma.project.count({ where: { publishStatus: 'published' } }),
      prisma.report.count({ where: { publishStatus: 'published' } }),
      prisma.event.count({ where: { publishStatus: 'published' } }),
      prisma.institution.count(),
      prisma.beneficiary.count({ where: { beneficiaryStatus: 'published' } }),
    ]);

  return (
    <ImpactPageContent
      counts={{
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
