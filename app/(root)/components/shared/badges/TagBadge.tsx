interface TagBadgeProps {
  label: string;
  className?: string;
}

export default function TagBadge({ label, className = '' }: TagBadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border border-gray-200 bg-white px-3 py-1 caption font-medium text-site-secondary dark:border-gray-700 dark:bg-gray-900 ${className}`}
    >
      #{label}
    </span>
  );
}