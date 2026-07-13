'use client';

interface FilterTabsProps {
  filters: string[];
  activeFilter?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function FilterTabs({
  filters,
  activeFilter = 'All',
  onChange,
  className = '',
}: FilterTabsProps) {
  if (!filters.length) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {filters.map((filter) => {
        const active = filter === activeFilter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange?.(filter)}
            className={`rounded-full px-5 py-2 caption font-semibold transition-all ${
              active
                ? 'bg-[#9f004d] text-white shadow-lg shadow-[#9f004d]/20'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-[#9f004d] dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-pink-400'
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}