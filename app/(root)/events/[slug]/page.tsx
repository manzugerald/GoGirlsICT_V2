import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import {
  ArrowLeft,
  Calendar,
  FolderOpen,
  MapPin,
  Users,
} from 'lucide-react';

import EventRegistrationForm from '@/app/(root)/get-involved/components/EventRegistrationForm';

import { getEventBySlugOrId } from '../data';

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
    .join('\n\n');
}

function formatDateRange(
  start: Date,
  end: Date
) {
  const sameDay =
    start.toDateString() ===
    end.toDateString();

  const dateFormat: Intl.DateTimeFormatOptions =
    {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };

  if (sameDay) {
    return start.toLocaleDateString(
      'en-US',
      dateFormat
    );
  }

  return `${start.toLocaleDateString('en-US', dateFormat)} – ${end.toLocaleDateString('en-US', dateFormat)}`;
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlugOrId(
    slug
  );

  return {
    title: event
      ? `${event.eventTitle} | GoGirls ICT Initiative`
      : 'Event Not Found | GoGirls ICT Initiative',

    description:
      'An event hosted by GoGirls ICT Initiative.',
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getEventBySlugOrId(
    slug
  );

  if (!event) {
    notFound();
  }

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
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <div className="mx-auto w-[90%] max-w-3xl py-14 sm:py-20">
        <Link
          href="/get-involved#events"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-[#9f004d] dark:text-gray-300 dark:hover:text-pink-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>

        {event.eventBanner && (
          <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
            <Image
              src={event.eventBanner}
              alt={event.eventTitle}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-serif text-2xl font-semibold leading-tight text-gray-900 dark:text-white sm:text-3xl">
              {event.eventTitle}
            </h1>

            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${status.className}`}
            >
              {status.label}
            </span>
          </div>

          {event.project && (
            <Link
              href={`/programs/${event.project.slug}`}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#9f004d]/10 px-3 py-1.5 text-xs font-semibold text-[#9f004d] transition-colors hover:bg-[#9f004d]/15 dark:bg-pink-500/10 dark:text-pink-400"
            >
              <FolderOpen className="h-3.5 w-3.5" />
              Related project:{' '}
              {event.project.title}
            </Link>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDateRange(
                event.eventStartDate,
                event.eventEndDate
              )}
            </span>

            {event.eventLocation && (
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {event.eventLocation}
              </span>
            )}

            {event.maxAttendees && (
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4" />
                Up to {event.maxAttendees}{' '}
                attendees
              </span>
            )}
          </div>
        </header>

        {description && (
          <div className="mt-8 space-y-4">
            {description
              .split('\n\n')
              .filter(Boolean)
              .map((paragraph, index) => (
                <p
                  key={`${index}-${paragraph.slice(0, 30)}`}
                  className="text-base leading-7 text-gray-700 dark:text-gray-200"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        )}

        <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-950">
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
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Open to everyone — no
              registration required,
              just show up!
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
