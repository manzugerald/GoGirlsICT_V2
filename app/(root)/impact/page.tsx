import { prisma } from '@/db/prisma';
import ImpactPageContent from './components/ImpactPageContent';
import { buildStat } from '@/app/(admin)/admin/dashboard/chart/statsConfig';
import PageHero from '@/app/(root)/components/shared/page/PageHero';
import { getResourcePosterUrl } from '@/lib/resourcePosterMeta';

// ISR: see app/(root)/page.tsx — same counts, same invalidation triggers.
export const revalidate = 3600;

export default async function ImpactPage() {
  // Same counts as the homepage's Impact section — computed here (not
  // fetched client-side) so this page doesn't repeat the six live API
  // calls DashboardChart/AnimatedStats used to fire on every visit.
  const [projectsCount, reportsCount, eventsCount, institutionsCount, beneficiariesCount, heroPoster] =
    await Promise.all([
      prisma.project.count({ where: { publishStatus: 'published' } }),
      prisma.report.count({ where: { publishStatus: 'published' } }),
      prisma.event.count({ where: { publishStatus: 'published' } }),
      prisma.institution.count(),
      prisma.beneficiary.count({ where: { beneficiaryStatus: 'published' } }),
      getResourcePosterUrl('impact'),
    ]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <PageHero
        title="Impact Metrics"
        backgroundImage={heroPoster ?? undefined}
        variant="poster"
      />

      <ImpactPageContent
        stats={[
          buildStat('projects', projectsCount),
          buildStat('reports', reportsCount),
          buildStat('events', eventsCount),
          buildStat('institutions', institutionsCount),
          buildStat('beneficiaries', beneficiariesCount),
        ]}
      />
    </main>
  );
}
