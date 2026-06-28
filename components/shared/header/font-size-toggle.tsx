'use client';

import { useEffect, useState } from 'react';
import { ALargeSmall, Check } from 'lucide-react';

const options = [
  { label: 'Small', value: 'small' },
  { label: 'Normal', value: 'normal' },
  { label: 'Large', value: 'large' },
  { label: 'Extra Large', value: 'xlarge' },
];

export default function FontSizeToggle() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState('normal');

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem('font-size') || 'normal';

    document.documentElement.setAttribute('data-font-size', saved);
    setFontSize(saved);
  }, []);

  if (!mounted) return null;

  function changeSize(size: string) {
    document.documentElement.setAttribute('data-font-size', size);
    localStorage.setItem('font-size', size);
    setFontSize(size);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Change font size"
        className="inline-flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <ALargeSmall className="w-5 h-5 text-white" />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-52 rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-700 z-50">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => changeSize(option.value)}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="text-gray-800 dark:text-white">
                {option.label}
              </span>

              {fontSize === option.value && (
                <Check className="w-4 h-4 text-[#9f004d]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}