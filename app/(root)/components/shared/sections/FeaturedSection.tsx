import type { ReactNode } from 'react';
import PageHeader from '../page/PageHeader';

interface FeaturedSectionProps {
  badge?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function FeaturedSection({
  badge,
  title,
  description,
  icon,
  children,
  className = '',
}: FeaturedSectionProps) {
  return (
    <section className={`relative px-4 py-12 ${className}`}>
      <div className="wrapper max-w-7xl mx-auto">
        <PageHeader
          badge={badge}
          title={title}
          description={description}
          icon={icon}
        />

        {children}
      </div>
    </section>
  );
}