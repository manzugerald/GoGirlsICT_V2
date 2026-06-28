import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section
      id={id}
      className={`wrapper max-w-7xl mx-auto px-4 py-16 relative ${className}`}
    >
      {children}
    </section>
  );
}