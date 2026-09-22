import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import {
  ArrowLeft,
  Calendar,
  FolderOpen,
  MapPin,
  Users,
  Video,
} from 'lucide-react';

import EventRegistrationForm from '@/app/(root)/get-involved/components/EventRegistrationForm';

import { getEventBySlugOrId } from '../data';
import { extractPlainText, isTiptapDocEmpty, normalizeTiptapDoc } from '@/lib/tiptap';
// Server Component — TiptapJsonViewer is a Client Component internally
// ('use client', `immediatelyRender: false`), so it's imported directly
// rather than via next/dynamic(...,{ssr:false}), which only works from
// inside a Client Component.
import TiptapJsonViewer from '@/components/editor/tiptap-json-viewer';
import '@/assets/styles/tiptap-editor.css';

// ISR: this specific event's path gets targeted directly by
// revalidatePath() when it's edited — same trigger as
// ../../get-involved/page.tsx.
export const revalidate = 3600;

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
      ? extractPlainText(event.eventTitle)
      : 'Event Not Found',

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

  const hasDescription = !isTiptapDocEmpty(
    event.eventDescription
  );

  const hasDetails = !isTiptapDocEmpty(
    event.eventDetails
  );

  const status =
    statusConfig[event.eventStatus] ??
    statusConfig.pending;

  const requiresRegistration =
    event.eventAttendance ===
    'registration_required';

  const isExternalRegistration =
    requiresRegistration &&
    event.registrationType === 'external' &&
    !!event.registrationLink;

  const modeLabel =
    event.eventMode === 'virtual'
      ? 'Virtual'
      : event.eventMode === 'hybrid'
        ? 'Hybrid'
        : 'On-site';

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <div className="mx-auto w-[90%] py-14 sm:py-20">
        <Link
          href="/get-involved#events"
          className="inline-flex items-center gap-2 caption font-semibold text-gray-600 transition-colors hover:text-[#9f004d] dark:text-gray-300 dark:hover:text-pink-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <style>{`
              .event-title-viewer .tiptap {
                min-height: 0;
                padding: 0;
                color: inherit;
                background: transparent;
              }
            `}</style>
            <div className="event-title-viewer heading-2 font-serif text-gray-900 dark:text-white">
              <TiptapJsonViewer
                content={normalizeTiptapDoc(event.eventTitle)}
                className="[&_p]:m-0"
              />
            </div>

            <span
              className={`rounded-full px-2.5 py-1 caption font-semibold ${status.className}`}
            >
              {status.label}
            </span>

            <span className="rounded-full bg-gray-100 px-2.5 py-1 caption font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-400">
              {modeLabel}
            </span>
          </div>

          {event.project && (
            <Link
              href={`/programs/${event.project.slug}`}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#9f004d]/10 px-3 py-1.5 caption font-semibold text-[#9f004d] transition-colors hover:bg-[#9f004d]/15 dark:bg-pink-500/10 dark:text-pink-400"
            >
              <FolderOpen className="h-3.5 w-3.5" />
              Related project:{' '}
              {extractPlainText(event.project.title)}
            </Link>
          )}
        </header>

        {/* Image on the left, details on the right (stacks on mobile) */}
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,360px)_1fr]">
          {event.eventBanner && (
            <div className="w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 md:sticky md:top-24 md:self-start">
              {/* Rendered at its own intrinsic aspect ratio (no crop) —
                  width fills the column, height follows naturally. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={event.eventBanner}
                alt={extractPlainText(event.eventTitle)}
                className="h-auto w-full"
              />
            </div>
          )}

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 caption text-gray-500 dark:text-gray-400">
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

            {event.participationLink && (
              <a
                href={event.participationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#9f004d] px-4 py-2 caption font-semibold text-white transition-colors hover:bg-[#9f004d]/90"
              >
                <Video className="h-4 w-4" />
                Join{' '}
                {event.eventMode === 'hybrid'
                  ? 'Virtually'
                  : 'Event'}
              </a>
            )}

            {hasDescription && (
              <div className="mt-6">
                <TiptapJsonViewer
                  content={normalizeTiptapDoc(
                    event.eventDescription
                  )}
                  className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-200"
                />
              </div>
            )}

            {hasDetails && (
              <div className="mt-6">
                <h2 className="heading-3 font-serif text-gray-900 dark:text-white">
                  Additional Details
                </h2>
                <TiptapJsonViewer
                  content={normalizeTiptapDoc(
                    event.eventDetails
                  )}
                  className="prose dark:prose-invert mt-2 max-w-none text-gray-700 dark:text-gray-200"
                />
              </div>
            )}

            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-950">
              {isExternalRegistration ? (
                <div className="text-center">
                  <p className="caption mb-3 text-gray-600 dark:text-gray-300">
                    Registration for this event happens on an external site.
                  </p>
                  <a
                    href={event.registrationLink!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#9f004d] px-4 py-2 caption font-semibold text-white transition-colors hover:bg-[#9f004d]/90"
                  >
                    Register Now
                  </a>
                </div>
              ) : requiresRegistration ? (
                <EventRegistrationForm
                  eventTitle={
                    extractPlainText(event.eventTitle)
                  }
                  maxAttendees={
                    event.maxAttendees ??
                    null
                  }
                />
              ) : (
                <p className="caption text-gray-500 dark:text-gray-400">
                  Open to everyone — no
                  registration required,
                  just show up!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
