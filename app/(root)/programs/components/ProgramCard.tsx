import {
  Calendar,
  FileText,
} from 'lucide-react';

import ContentCard from '@/app/(root)/components/shared/cards/ContentCard';
import StatusBadge from '@/app/(root)/components/shared/badges/StatusBadge';
import { extractPlainText } from '@/lib/tiptap';

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  program: any;
}) {
  const reportCount: number =
    program.reports?.length ?? 0;

  const eventCount: number =
    program.events?.length ?? 0;

  const hasRelated =
    reportCount > 0 || eventCount > 0;

  const titleText = extractPlainText(program.title);

  return (
    <ContentCard
      title={truncateTitle(titleText)}
      href={`/programs/${
        program.slug ?? program.id
      }`}
      image={program.images?.[0]}
      imageAlt={titleText}
      meta={formatDate(program.createdAt)}
      ctaLabel="View Program"
      badge={
        <StatusBadge
          status={program.projectStatus}
        />
      }
      extra={
        hasRelated ? (
          <>
            {reportCount > 0 && (
              <span className="inline-flex items-center gap-1">
                <FileText className="h-3 w-3 shrink-0" />
                {reportCount}{' '}
                {reportCount === 1
                  ? 'Report'
                  : 'Reports'}
              </span>
            )}

            {eventCount > 0 && (
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3 shrink-0" />
                {eventCount}{' '}
                {eventCount === 1
                  ? 'Event'
                  : 'Events'}
              </span>
            )}
          </>
        ) : undefined
      }
    />
  );
}