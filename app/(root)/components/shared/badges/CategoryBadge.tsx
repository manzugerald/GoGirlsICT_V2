import type { ReactNode } from 'react';

interface CategoryBadgeProps {
  label: string;
  icon?: ReactNode;
  tone?: 'brand' | 'blue' | 'green' | 'purple' | 'orange' | 'gray';
  className?: string;
}

const toneClasses = {
  brand:
    'bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-400',
  blue:
    'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  green:
    'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  purple:
    'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  orange:
    'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  gray:
    'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
};

export default function CategoryBadge({
  label,
  icon,
  tone = 'brand',
  className = '',
}: CategoryBadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 caption font-semibold ${toneClasses[tone]} ${className}`}
    >
      {icon}
      {label}
    </span>
  );
}