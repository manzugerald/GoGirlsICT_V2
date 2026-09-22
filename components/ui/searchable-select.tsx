'use client';

import { useEffect, useRef, useState } from 'react';
import { Input } from './input';
import { Button } from './button';

export type SearchableSelectOption = {
  id: string;
  label: string;
};

type Props = {
  id?: string;
  value: string; // option id, or '' for none
  onChange: (value: string) => void;
  options: SearchableSelectOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  loading?: boolean;
};

/**
 * A single-select combobox: type to filter, click an option to choose it
 * and close. There's no existing combobox in the design system (no cmdk /
 * radix popover in use), so this follows the same custom popover pattern
 * as DateTimePicker — local state + outside-click to dismiss — rather
 * than pulling in a new dependency for one field.
 */
export default function SearchableSelect({
  id,
  value,
  onChange,
  options,
  placeholder = 'Select...',
  searchPlaceholder = 'Search...',
  loading,
}: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const selected = options.find((opt) => opt.id === value) ?? null;

  const filtered = search.trim()
    ? options.filter((opt) => opt.label.toLowerCase().includes(search.trim().toLowerCase()))
    : options;

  const handleSelect = (optionId: string) => {
    onChange(optionId);
    setOpen(false);
    setSearch('');
  };

  const handleClear = () => {
    onChange('');
    setOpen(false);
    setSearch('');
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground text-left truncate"
      >
        {selected ? selected.label : <span className="text-muted-foreground">{placeholder}</span>}
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full min-w-[280px] rounded-md border border-input bg-background p-2 shadow-lg space-y-2">
          <Input
            autoFocus
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchPlaceholder}
            className="h-8 text-sm"
          />

          <div className="max-h-48 overflow-y-auto space-y-0.5">
            {loading ? (
              <div className="p-2 text-sm text-muted-foreground">Loading...</div>
            ) : filtered.length === 0 ? (
              <div className="p-2 text-sm text-muted-foreground">No matches</div>
            ) : (
              filtered.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelect(opt.id)}
                  className={`w-full text-left truncate rounded px-2 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    opt.id === value ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''
                  }`}
                >
                  {opt.label}
                </button>
              ))
            )}
          </div>

          {value && (
            <div className="flex justify-end pt-1">
              <Button type="button" variant="outline" size="sm" onClick={handleClear}>
                Clear
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
