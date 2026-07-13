'use client';

import FilterSelect, { type FilterSelectOption } from './FilterSelect';

interface SortSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  options?: FilterSelectOption[];
  className?: string;
}

const defaultSortOptions: FilterSelectOption[] = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Oldest First', value: 'oldest' },
  { label: 'A–Z', value: 'az' },
  { label: 'Z–A', value: 'za' },
];

export default function SortSelect({
  value = 'newest',
  onChange,
  options = defaultSortOptions,
  className = '',
}: SortSelectProps) {
  return (
    <FilterSelect
      label="Sort by"
      value={value}
      options={options}
      onChange={onChange}
      className={className}
    />
  );
}