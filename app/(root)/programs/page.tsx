import { getProgramsPageData } from './data';

import ProgramsAnalytics from './components/ProgramsAnalytics';
import ProgramsAnimatedStats from './components/ProgramsAnimatedStats';
import FeaturedProgram from './components/FeaturedProgram';
import ProgramsGrid from './components/ProgramsGrid';

import PageHero from '@/app/(root)/components/shared/page/PageHero';
import PageSection from '@/app/(root)/components/shared/page/PageSection';
import PageFilters from '@/app/(root)/components/shared/page/PageFilters';

export default async function ProgramsPage() {
  const {
    programs,
    analyticsPrograms,
    featuredProgram,
    stats,
  } = await getProgramsPageData();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <PageHero
        title="Our Programs"
        description="Discover the initiatives transforming communities through digital skills, innovation, mentorship, leadership, and inclusive technology."
        backgroundImage="/assets/projects/images/banner/banner2.jpg"
      >
        

        <div className="mt-4">
          <ProgramsAnimatedStats
            projects={stats.total}
            active={stats.active}
            completed={stats.completed}
            events={stats.events}
          />
        </div>
      </PageHero>

      {/* <PageSection className="py-3">
        <PageFilters
          searchPlaceholder="Search programs..."
          filters={['All', 'Active', 'Completed', 'Paused']}
          activeFilter="All"
        />
      </PageSection> */}

      {/* <FeaturedProgram program={featuredProgram} /> */}

      <ProgramsGrid programs={programs} />
    </main>
  );
}