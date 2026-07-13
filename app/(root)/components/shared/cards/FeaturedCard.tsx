import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight, Calendar, ImageIcon } from 'lucide-react';

interface FeaturedCardProps {
  title: string;
  href: string;
  image?: string | null;
  imageAlt?: string;
  badge?: ReactNode;
  meta?: string;
  description?: string | null;
  eyebrow?: string;
  ctaLabel?: string;
}

export default function FeaturedCard({
  title,
  href,
  image,
  imageAlt,
  badge,
  meta,
  description,
  eyebrow = 'Featured',
  ctaLabel = 'View Details',
}: FeaturedCardProps) {
  return (
    <Link
      href={href}
      className="group grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900 lg:grid-cols-2"
    >
      <div className="relative min-h-[280px] bg-gradient-to-br from-[#9f004d]/20 to-pink-200 dark:from-[#9f004d]/30 dark:to-gray-800">
        {image ? (
          <img
            src={image}
            alt={imageAlt || title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <ImageIcon className="h-20 w-20 text-[#9f004d]/40" />
          </div>
        )}

        {badge && <div className="absolute right-5 top-5">{badge}</div>}
      </div>

      <div className="flex flex-col justify-center p-8">
        <p className="caption mb-3 font-semibold uppercase tracking-wide text-[#9f004d] dark:text-pink-400">
          {eyebrow}
        </p>

        <h3 className="heading-2 mb-4 text-site-primary transition-colors group-hover:text-[#9f004d] dark:group-hover:text-pink-400">
          {title}
        </h3>

        {description && (
          <p className="body mb-5 line-clamp-4 text-site-secondary">
            {description}
          </p>
        )}

        {meta && (
          <div className="mb-6 flex items-center gap-2 caption text-site-muted">
            <Calendar className="h-4 w-4" />
            {meta}
          </div>
        )}

        <span className="inline-flex items-center gap-2 body font-semibold text-[#9f004d] dark:text-pink-400">
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}