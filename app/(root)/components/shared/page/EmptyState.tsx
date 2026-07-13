import type { ReactNode } from 'react';
import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
}

export default function EmptyState({ title, description, icon }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white py-20 px-6 text-center dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-4 flex justify-center text-site-muted">
        {icon || <Inbox className="w-16 h-16" />}
      </div>

      <h3 className="heading-3 text-site-primary">{title}</h3>

      {description && (
        <p className="body text-site-secondary mt-2 max-w-md mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}