'use client';

import { useEffect, useState } from 'react';

const DEFAULT_FONT_SCALE = 1;

function readFontScale(): number {
  if (typeof document === 'undefined') return DEFAULT_FONT_SCALE;
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--font-scale').trim();
  const parsed = parseFloat(raw);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_FONT_SCALE;
}

/**
 * Tracks the site's own font-size preference — the header's "Aa" control
 * (components/shared/header/font-size-toggle.tsx) sets `data-font-size` on
 * `<html>`, which drives the `--font-scale` CSS variable that every
 * heading, body and caption class in globals.css scales against.
 *
 * Regular DOM text can just reference `calc(...* var(--font-scale))`
 * directly in its own style and the browser keeps it live for free — no
 * hook needed. This hook exists only for Chart.js canvas text (bar/pie
 * chart ticks, legend, tooltips), which draws to a `<canvas>` and can't
 * use CSS variables — it needs an actual pixel number, recomputed in JS,
 * and a way to know when the preference changes.
 */
export function useFontScale(): number {
  const [scale, setScale] = useState<number>(DEFAULT_FONT_SCALE);

  useEffect(() => {
    setScale(readFontScale());

    const observer = new MutationObserver(() => setScale(readFontScale()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-font-size'],
    });

    return () => observer.disconnect();
  }, []);

  return scale;
}
