import type { ReactNode } from 'react';
import PageHeader from '../page/PageHeader';
import PageStats, { type PageStatItem } from '../page/PageStats';

interface StatsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  items: PageStatItem[];
  className?: string;
}

export default function StatsSection({
  badge,
  title,
  description,
  icon,
  items,
  className = '',
}: StatsSectionProps) {
  return (
    <section className={`relative px-4 py-14 ${className}`}>
      <div className="wrapper max-w-7xl mx-auto">
        <PageHeader
          badge={badge}
          title={title}
          description={description}
          icon={icon}
          align="center"
        />

        <PageStats items={items} />
      </div>
    </section>
  );
}