import type { ReactNode } from 'react';
import PageHeader from '../page/PageHeader';

interface GridSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  columns?: '2' | '3' | '4';
}

export default function GridSection({
  badge,
  title,
  description,
  icon,
  children,
  className = '',
  columns = '3',
}: GridSectionProps) {
  // In a full-bleed .wrapper (no max-width), capping the column count at
  // `lg:` (1024px) and never adding an xl:/2xl: step left each card
  // absurdly wide on a real desktop/ultra-wide monitor (3 columns at
  // 2560px is ~760px/card) instead of using the extra width to show more
  // content at once.
  const gridClass =
    columns === '2'
      ? 'grid-cols-1 md:grid-cols-2'
      : columns === '4'
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5';

  return (
    <section className={`relative px-4 py-14 ${className}`}>
      <div className="wrapper">
        {title && (
          <PageHeader
            badge={badge}
            title={title}
            description={description}
            icon={icon}
          />
        )}

        {/* items-start: cards size to their own content height instead
            of the grid's default stretch forcing every card in a row to
            match the tallest one (ContentCard's badge/meta/extra rows
            vary in count per item). */}
        <div className={`grid items-start gap-6 ${gridClass}`}>
          {children}
        </div>
      </div>
    </section>
  );
}