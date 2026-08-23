'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import {
  Calendar,
  ChevronDown,
  ExternalLink,
  FolderOpen,
  MapPin,
  Users,
} from 'lucide-react';

import type { EventSummary } from '../data';

import EventRegistrationForm from './EventRegistrationForm';

function getTextFromRichDescription(
  description: unknown
): string {
  if (!description) {
    return '';
  }

  if (typeof description === 'string') {
    return description;
  }

  const doc = description as {
    content?: Array<{
      content?: Array<{
        text?: string;
      }>;
    }>;
  };

  if (!Array.isArray(doc.content)) {
    return '';
  }

  return doc.content
    .map((block) =>
      (block.content ?? [])
        .map((item) => item.text)
        .filter(Boolean)
        .join(' ')
    )
    .filter(Boolean)
    .join(' ');
}

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
  isExpanded,
  onToggle,
}: {
  event: EventSummary;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const description =
    getTextFromRichDescription(
      event.eventDescription
    );

  const status =
    statusConfig[event.eventStatus] ??
    statusConfig.pending;

  const requiresRegistration =
    event.eventAttendance ===
    'registration_required';

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
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
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
            <h3 className="truncate font-serif text-[length:calc(1rem*var(--font-scale))] font-semibold leading-tight text-gray-900 dark:text-white">
              {event.eventTitle}
            </h3>

            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-[length:calc(0.7rem*var(--font-scale))] font-semibold ${status.className}`}
            >
              {status.label}
            </span>
          </div>

          {description && (
            <p className="mt-1 line-clamp-1 text-[length:calc(0.8125rem*var(--font-scale))] text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}

          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[length:calc(0.75rem*var(--font-scale))] text-gray-400 dark:text-gray-500">
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

        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-gray-100 p-4 dark:border-gray-800 sm:p-5">
              {event.eventBanner && (
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={
                      event.eventBanner
                    }
                    alt={
                      event.eventTitle
                    }
                    fill
                    sizes="(min-width: 768px) 640px, 100vw"
                    className="object-cover"
                  />
                </div>
              )}

              {description && (
                <p className="text-[length:calc(0.875rem*var(--font-scale))] leading-6 text-gray-600 dark:text-gray-300">
                  {description}
                </p>
              )}

              {event.maxAttendees && (
                <div className="flex items-center gap-1.5 text-[length:calc(0.75rem*var(--font-scale))] text-gray-500 dark:text-gray-400">
                  <Users
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                  />
                  Up to{' '}
                  {event.maxAttendees}{' '}
                  attendees
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3">
                {event.project && (
                  <Link
                    href={`/programs/${event.project.slug}`}
                    onClick={(
                      clickEvent
                    ) =>
                      clickEvent.stopPropagation()
                    }
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#9f004d]/10 px-3 py-1.5 text-[length:calc(0.75rem*var(--font-scale))] font-semibold text-[#9f004d] transition-colors hover:bg-[#9f004d]/15 dark:bg-pink-500/10 dark:text-pink-400"
                  >
                    <FolderOpen className="h-3.5 w-3.5" />
                    Related project:{' '}
                    {event.project.title}
                  </Link>
                )}

                <Link
                  href={`/events/${event.slug}`}
                  onClick={(
                    clickEvent
                  ) =>
                    clickEvent.stopPropagation()
                  }
                  className="inline-flex items-center gap-1 text-[length:calc(0.75rem*var(--font-scale))] font-semibold text-gray-500 transition-colors hover:text-[#9f004d] dark:text-gray-400 dark:hover:text-pink-400"
                >
                  View full details
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>

              {requiresRegistration ? (
                <EventRegistrationForm
                  eventTitle={
                    event.eventTitle
                  }
                  maxAttendees={
                    event.maxAttendees ??
                    null
                  }
                />
              ) : (
                <p className="rounded-lg bg-gray-50 px-3 py-2.5 text-[length:calc(0.75rem*var(--font-scale))] text-gray-500 dark:bg-gray-950 dark:text-gray-400">
                  Open to everyone —
                  no registration
                  required, just show
                  up!
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
