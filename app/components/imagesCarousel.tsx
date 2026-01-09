'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ImagesCarouselProps = {
  images: string[];
  // Tailwind height classes for the image container (default matches previous code)
  imgHeightClass?: string; // e.g. "h-56 md:h-72"
  className?: string;
  showIndicators?: boolean;
  showArrows?: boolean;
  // optional autoplay (milliseconds). 0 or undefined = no autoplay
  autoplayMs?: number;
};

export default function ImagesCarousel({
  images,
  imgHeightClass = 'h-56 md:h-72',
  className = '',
  showIndicators = true,
  showArrows = true,
  autoplayMs = 0,
}: ImagesCarouselProps) {
  const [idx, setIdx] = useState(0);
  const length = images?.length ?? 0;
  const rootRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // reset index if images changed
    if (idx >= length) setIdx(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length]);

  useEffect(() => {
    if (!autoplayMs || length <= 1) return;
    intervalRef.current = window.setInterval(() => {
      setIdx((s) => (s + 1) % length);
    }, autoplayMs);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoplayMs, length]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'ArrowLeft') setIdx((s) => (s - 1 + length) % length);
      if (ev.key === 'ArrowRight') setIdx((s) => (s + 1) % length);
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [length]);

  if (!images || images.length === 0) return null;

  const goPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIdx((s) => (s - 1 + length) % length);
  };
  const goNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIdx((s) => (s + 1) % length);
  };

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      aria-roledescription="carousel"
      className={`w-full rounded overflow-hidden relative bg-black/5 dark:bg-white/5 ${className}`}
    >
      <img
        src={images[idx]}
        alt={`image ${idx + 1}`}
        className={`w-full ${imgHeightClass} object-cover rounded`}
      />

      {showArrows && length > 1 && (
        <>
          <button
            aria-label="Previous image"
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/60 rounded-full p-1 shadow"
            type="button"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            aria-label="Next image"
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/60 rounded-full p-1 shadow"
            type="button"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {showIndicators && length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setIdx(i);
              }}
              aria-label={`Go to image ${i + 1}`}
              className={`w-2 h-2 rounded-full ${
                i === idx ? 'bg-white dark:bg-white' : 'bg-white/60 dark:bg-white/30'
              }`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}
