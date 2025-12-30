'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem('theme')) setTheme('dark');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';
  const handleToggle = () => setTheme(isDark ? 'light' : 'dark');

  // generate 8 rays programmatically (every 45deg)
  const rayCount = 8;
  const rays = Array.from({ length: rayCount }).map((_, i) => {
    const angle = i * (360 / rayCount); // 0,45,90,...
    // a short line starting near the top and rotated around center (12,12)
    return (
      <line
        key={i}
        x1="12"
        y1="2.7"
        x2="12"
        y2="5.2"
        stroke="#f6c94d"
        strokeWidth="1.6"
        strokeLinecap="round"
        transform={`rotate(${angle} 12 12)`}
      />
    );
  });

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={handleToggle}
      className="inline-flex items-center justify-center p-2 rounded-full !bg-transparent hover:!bg-transparent active:!bg-transparent focus:outline-none focus:ring-0"
    >
      {isDark ? (
        // Moon: filled, gray color
        <svg
          className="w-6 h-6 text-gray-300"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          role="img"
        >
          <path d="M21.752 15.002A9.718 9.718 0 0 1 12 22C6.477 22 2 17.523 2 12c0-4.97 4.05-9 9-9 .67 0 1.33.07 1.97.2a.75.75 0 0 1 .46 1.2 6.5 6.5 0 1 0 8.32 10.582.75.75 0 0 1 1.2.46z" />
        </svg>
      ) : (
        // Sun: central white ring + programmatically generated yellow rays
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          role="img"
        >
          {/* central circle ring (white) */}
          <circle cx="12" cy="12" r="3.25" stroke="#ffffff" strokeWidth="1.6" fill="none" />
          {/* rays generated above */}
          <g>{rays}</g>
        </svg>
      )}
    </button>
  );
};

export default ModeToggle;
