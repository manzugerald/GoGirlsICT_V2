import { FolderOpen } from 'lucide-react';

import GridSection from '@/app/(root)/components/shared/sections/GridSection';
import EmptyState from '@/app/(root)/components/shared/page/EmptyState';

import ProgramCard from './ProgramCard';

export default function ProgramsGrid({
  programs,
}: {
  programs: any[];
}) {
  return (
    <GridSection
      title="Projects"
      description="Browse more published programs and initiatives."
      columns="4"
      className="pb-3 pt-1"
    >
      {programs.length > 0 ? (
        programs.map((program) => (
          <ProgramCard
            key={program.id}
            program={program}
          />
        ))
      ) : (
        <div className="col-span-full">
          <EmptyState
            title="No Programs Yet"
            description="Published programs will appear here."
            icon={<FolderOpen className="h-16 w-16" />}
          />
        </div>
      )}
    </GridSection>
  );
}