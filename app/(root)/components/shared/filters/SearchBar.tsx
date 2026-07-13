'use client';

import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  className?: string;
}

export default function SearchBar({
  value = '',
  placeholder = 'Search...',
  onChange,
  onClear,
  className = '',
}: SearchBarProps) {
  const hasValue = value.length > 0;

  return (
    <div className={`relative w-full lg:max-w-md ${className}`}>
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-site-muted" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-gray-200 bg-white px-12 py-3 text-site-primary outline-none transition-all placeholder:text-site-muted focus:border-[#9f004d] focus:ring-4 focus:ring-[#9f004d]/10 dark:border-gray-800 dark:bg-gray-900 dark:focus:border-pink-500 dark:focus:ring-pink-500/10"
      />

      {hasValue && (
        <button
          type="button"
          onClick={() => {
            onChange?.('');
            onClear?.();
          }}
          aria-label="Clear search"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-site-muted hover:bg-gray-100 hover:text-site-primary dark:hover:bg-gray-800"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}