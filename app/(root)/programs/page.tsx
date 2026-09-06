import { FolderOpen, FileText } from 'lucide-react';

import { getProgramsPageData } from './data';

import ProgramsAnimatedStats from './components/ProgramsAnimatedStats';
import ProgramsGrid from './components/ProgramsGrid';

import PageHero from '@/app/(root)/components/shared/page/PageHero';
import PageHeroTabs from '@/app/(root)/components/shared/page/PageHeroTabs';

// ISR: this list only changes when an admin publishes/edits a project —
// revalidatePath('/programs') in the project API routes invalidates it
// instantly; 3600s is the safety-net upper bound otherwise.
export const revalidate = 3600;

export default async function ProgramsPage() {
  const { programs, stats } =
    await getProgramsPageData();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <PageHero
        title="Our Programs"
        description="Discover the initiatives transforming communities through digital skills, innovation, mentorship, leadership, and inclusive technology."
        backgroundImage="/assets/projects/images/banner/banner2.jpg"
      >
        <PageHeroTabs
          tabs={[
            {
              href: '/programs',
              label: 'Projects',
              icon: FolderOpen,
              isActive: true,
            },
            {
              href: '/reports',
              label: 'Reports',
              icon: FileText,
              isActive: false,
            },
          ]}
        />

        <div className="mt-4">
          <ProgramsAnimatedStats
            projects={stats.total}
            active={stats.active}
            completed={stats.completed}
            events={stats.events}
          />
        </div>
      </PageHero>

      <ProgramsGrid programs={programs} />
    </main>
  );
}