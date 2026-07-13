interface StatusBadgeProps {
  status?: string | null;
  label?: string;
  className?: string;
}

const statusClasses: Record<string, string> = {
  active:
    'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  completed:
    'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  pending:
    'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  ongoing:
    'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  published:
    'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  draft:
    'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  archived:
    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  funding:
    'bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-400',
  collaborating:
    'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  implementing:
    'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
  beneficiary:
    'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
};

function formatLabel(value?: string | null) {
  if (!value) return 'Status';

  return value
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function StatusBadge({
  status,
  label,
  className = '',
}: StatusBadgeProps) {
  const key = String(status || '').toLowerCase();
  const colorClass =
    statusClasses[key] ||
    'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';

  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-3 py-1 caption font-semibold ${colorClass} ${className}`}
    >
      {label || formatLabel(status)}
    </span>
  );
}