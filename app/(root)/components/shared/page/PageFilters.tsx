'use client';

import SearchBar from '../filters/SearchBar';
import FilterTabs from '../filters/FilterTabs';

interface PageFiltersProps {
  searchPlaceholder?: string;
  filters?: string[];
  activeFilter?: string;
  onFilterChange?: (value: string) => void;
  onSearchChange?: (value: string) => void;
}

export default function PageFilters({
  searchPlaceholder = 'Search...',
  filters = [],
  activeFilter = 'All',
  onFilterChange,
  onSearchChange,
}: PageFiltersProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
      <SearchBar placeholder={searchPlaceholder} onChange={onSearchChange} />

      {filters.length > 0 && (
        <FilterTabs
          filters={filters}
          activeFilter={activeFilter}
          onChange={onFilterChange}
        />
      )}
    </div>
  );
}