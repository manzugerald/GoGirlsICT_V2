import type { ReactNode } from 'react';

interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  align?: 'left' | 'center';
}

export default function PageHeader({
  badge,
  title,
  description,
  icon,
  align = 'left',
}: PageHeaderProps) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'text-center max-w-3xl mx-auto mb-10' : 'mb-10'}>
      {badge && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#9f004d]/10 px-4 py-2 text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-400">
          {icon}
          <span className="caption font-semibold uppercase tracking-wide">{badge}</span>
        </div>
      )}

      <h1 className="heading-1 text-site-primary mb-4">{title}</h1>

      {description && (
        <p className="body-lg text-site-secondary max-w-3xl">{description}</p>
      )}
    </div>
  );
}