'use client';

import { ChevronDown } from 'lucide-react';

export type FilterSelectOption = {
  label: string;
  value: string;
};

interface FilterSelectProps {
  label?: string;
  value?: string;
  options: FilterSelectOption[];
  onChange?: (value: string) => void;
  className?: string;
}

export default function FilterSelect({
  label,
  value,
  options,
  onChange,
  className = '',
}: FilterSelectProps) {
  return (
    <label className={`block ${className}`}>
      {label && (
        <span className="mb-2 block caption font-semibold text-site-secondary">
          {label}
        </span>
      )}

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full appearance-none rounded-full border border-gray-200 bg-white px-5 py-3 pr-11 text-site-primary outline-none transition-all focus:border-[#9f004d] focus:ring-4 focus:ring-[#9f004d]/10 dark:border-gray-800 dark:bg-gray-900 dark:focus:border-pink-500 dark:focus:ring-pink-500/10"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-site-muted" />
      </div>
    </label>
  );
}