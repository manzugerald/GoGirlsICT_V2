import type { ReactNode } from 'react';

interface PageSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function PageSection({ id, children, className = '' }: PageSectionProps) {
  return (
    <section id={id} className={`relative px-4 py-16 ${className}`}>
      <div className="wrapper max-w-7xl mx-auto">{children}</div>
    </section>
  );
}