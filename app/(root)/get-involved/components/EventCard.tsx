'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
} from 'lucide-react';

import type { EventSummary } from '../data';

import { extractPlainText } from '@/lib/tiptap';

function formatDateRange(
  start: Date | string,
  end: Date | string
) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const sameDay =
    startDate.toDateString() ===
    endDate.toDateString();

  const dateFormat: Intl.DateTimeFormatOptions =
    {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };

  if (sameDay) {
    return startDate.toLocaleDateString(
      'en-US',
      dateFormat
    );
  }

  return `${startDate.toLocaleDateString('en-US', dateFormat)} – ${endDate.toLocaleDateString('en-US', dateFormat)}`;
}

const statusConfig: Record<
  string,
  { label: string; className: string }
> = {
  pending: {
    label: 'Upcoming',

    className:
      'bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/10 dark:text-pink-400',
  },

  ongoing: {
    label: 'Happening now',

    className:
      'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400',
  },

  completed: {
    label: 'Completed',

    className:
      'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  },

  paused: {
    label: 'Paused',

    className:
      'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
  },
};

export default function EventCard({
  event,
  index,
}: {
  event: EventSummary;
  index: number;
}) {
  const description = extractPlainText(
    event.eventDescription
  ).replace(/\s+/g, ' ').trim();

  const status =
    statusConfig[event.eventStatus] ??
    statusConfig.pending;

  const modeLabel =
    event.eventMode === 'virtual'
      ? 'Virtual'
      : event.eventMode === 'hybrid'
        ? 'Hybrid'
        : 'On-site';

  return (
    <motion.li
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-60px',
      }}
      transition={{
        delay: Math.min(index, 8) * 0.04,
        duration: 0.35,
      }}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-[#9f004d]/30 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      <Link
        href={`/events/${event.slug}`}
        className="flex w-full items-center gap-4 p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f004d] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
      >
        {/* Thumbnail */}
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
          {event.eventBanner ? (
            <Image
              src={event.eventBanner}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/10 dark:text-pink-400">
              <Calendar
                aria-hidden="true"
                className="h-8 w-8"
              />
            </div>
          )}
        </div>

        {/* Title and meta */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="heading-3 truncate font-serif text-gray-900 dark:text-white">
              {extractPlainText(event.eventTitle)}
            </h3>

            <span
              className={`caption shrink-0 rounded-full px-2 py-0.5 font-semibold ${status.className}`}
            >
              {status.label}
            </span>

            <span className="caption shrink-0 rounded-full bg-gray-100 px-2 py-0.5 font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-400">
              {modeLabel}
            </span>
          </div>

          {description && (
            <p className="caption mt-1 line-clamp-1 text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}

          <div className="caption mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-400 dark:text-gray-500">
            <span className="inline-flex items-center gap-1">
              <Calendar
                aria-hidden="true"
                className="h-3.5 w-3.5"
              />

              {formatDateRange(
                event.eventStartDate,
                event.eventEndDate
              )}
            </span>

            {event.eventLocation && (
              <span className="inline-flex items-center gap-1">
                <MapPin
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                />

                <span className="truncate">
                  {event.eventLocation}
                </span>
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.li>
  );
}
