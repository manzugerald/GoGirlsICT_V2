import FeaturedCard from '@/app/(root)/components/shared/cards/FeaturedCard';
import FeaturedSection from '@/app/(root)/components/shared/sections/FeaturedSection';
import StatusBadge from '@/app/(root)/components/shared/badges/StatusBadge';

function formatDate(
  date?: Date | string | null
) {
  if (!date) return 'Recently';

  return new Date(date).toLocaleDateString(
    'en-US',
    {
      month: 'short',
      year: 'numeric',
    }
  );
}

export default function FeaturedProgram({
  program,
}: {
  program: any;
}) {
  if (!program) return null;

  return (
    <FeaturedSection
      title="Featured Program"
      description="A highlighted initiative from our latest published work."
      className="pb-7 pt-3"
    >
      <FeaturedCard
        title={program.title}
        href={`/programs/${program.slug ?? program.id}`}
        image={program.images?.[0]}
        imageAlt={program.title}
        meta={formatDate(program.createdAt)}
        eyebrow="Featured Program"
        ctaLabel="View Program"
        badge={
          <StatusBadge
            status={program.projectStatus}
          />
        }
      />
    </FeaturedSection>
  );
}