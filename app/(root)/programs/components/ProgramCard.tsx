import ContentCard from '@/app/(root)/components/shared/cards/ContentCard';
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

function truncateTitle(
  title: string,
  maximumLength = 48
) {
  if (title.length <= maximumLength) {
    return title;
  }

  const shortened = title.slice(
    0,
    maximumLength
  );

  const finalSpace =
    shortened.lastIndexOf(' ');

  if (finalSpace <= 0) {
    return `${shortened.trim()}...`;
  }

  return `${shortened
    .slice(0, finalSpace)
    .trim()}...`;
}

export default function ProgramCard({
  program,
}: {
  program: any;
}) {
  return (
    <ContentCard
      title={truncateTitle(program.title)}
      href={`/programs/${
        program.slug ?? program.id
      }`}
      image={program.images?.[0]}
      imageAlt={program.title}
      meta={formatDate(program.createdAt)}
      ctaLabel="View Program"
      badge={
        <StatusBadge
          status={program.projectStatus}
        />
      }
    />
  );
}