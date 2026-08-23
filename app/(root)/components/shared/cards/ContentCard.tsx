import Link from 'next/link';
import type { ReactNode } from 'react';

import {
  ArrowRight,
  Calendar,
  ImageIcon,
} from 'lucide-react';

interface ContentCardProps {
  title: string;
  href: string;

  image?: string | null;
  imageAlt?: string;

  meta?: string;
  badge?: ReactNode;
  extra?: ReactNode;

  description?: string | null;
  ctaLabel?: string;

  className?: string;
}

export default function ContentCard({
  title,
  href,
  image,
  imageAlt,
  meta,
  badge,
  extra,
  description,
  ctaLabel = 'Read More',
  className = '',
}: ContentCardProps) {
  return (
    <Link
      href={href}
      aria-label={`${ctaLabel}: ${imageAlt || title}`}
      className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1.5 hover:border-[#9f004d]/30 hover:shadow-[0_20px_45px_-24px_rgba(159,0,77,0.35)] dark:border-gray-800 dark:bg-gray-900 dark:hover:border-pink-500/30 dark:hover:shadow-[0_20px_45px_-24px_rgba(0,0,0,0.6)] ${className}`}
    >
      {/* Top accent, reveals on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-600 transition-transform duration-300 group-hover:scale-x-100"
      />

      {/* Short image */}
      <div className="relative h-28 shrink-0 overflow-hidden bg-gradient-to-br from-[#9f004d]/10 to-pink-100 sm:h-32 dark:from-[#9f004d]/20 dark:to-gray-800">
        {image ? (
          <img
            src={image}
            alt={imageAlt || title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <ImageIcon className="h-9 w-9 text-[#9f004d]/35 dark:text-pink-400/35" />
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {badge && (
          <div className="absolute right-2.5 top-2.5">
            {badge}
          </div>
        )}
      </div>

      {/* Compact body */}
      <div className="flex min-h-0 flex-1 flex-col p-3">
        <h3
          title={imageAlt || title}
          className="min-h-[2.5rem] overflow-hidden text-[length:calc(0.875rem*var(--font-scale))] font-bold leading-5 text-gray-900 transition-colors duration-200 group-hover:text-[#9f004d] dark:text-gray-100 dark:group-hover:text-pink-400"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {title}
        </h3>

        {description && (
          <p
            className="mt-1.5 overflow-hidden text-[length:calc(0.75rem*var(--font-scale))] leading-4 text-gray-600 dark:text-gray-400"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {description}
          </p>
        )}

        <div className="mt-auto pt-2.5">
          {meta && (
            <div className="flex items-center gap-1.5 text-[length:calc(0.6875rem*var(--font-scale))] font-medium text-gray-500 dark:text-gray-400">
              <Calendar className="h-3 w-3 shrink-0" />
              <span className="truncate">{meta}</span>
            </div>
          )}

          {extra && (
            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[length:calc(0.6875rem*var(--font-scale))] font-medium text-gray-400 dark:text-gray-500">
              {extra}
            </div>
          )}

          <div className="mt-2 inline-flex items-center gap-1.5 text-[length:calc(0.75rem*var(--font-scale))] font-semibold text-[#9f004d] dark:text-pink-400">
            {ctaLabel}

            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
