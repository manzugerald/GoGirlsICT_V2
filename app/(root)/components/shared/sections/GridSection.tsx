import type { ReactNode } from 'react';
import PageHeader from '../page/PageHeader';

interface GridSectionProps {
  badge?: string;
  title: string;
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
  const gridClass =
    columns === '2'
      ? 'grid-cols-1 md:grid-cols-2'
      : columns === '4'
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section className={`relative px-4 py-14 ${className}`}>
      <div className="wrapper max-w-7xl mx-auto">
        <PageHeader
          badge={badge}
          title={title}
          description={description}
          icon={icon}
        />

        <div className={`grid gap-6 ${gridClass}`}>
          {children}
        </div>
      </div>
    </section>
  );
}