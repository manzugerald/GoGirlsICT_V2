import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  FolderOpen,
  Globe2,
  Lock,
  MapPin,
  PauseCircle,
  Radio,
  UserPlus,
  Users,
  Video,
  type LucideIcon,
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

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// e.g. "2026 April 01 at 00:00 AM"
function formatFriendlyDateTime(date: Date) {
  const pad = (n: number) => String(n).padStart(2, '0');
  const year = date.getFullYear();
  const month = MONTH_NAMES[date.getMonth()];
  const day = pad(date.getDate());
  const hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hour12 = pad(hours % 12);
  const minutes = pad(date.getMinutes());
  return `${year} ${month} ${day} at ${hour12}:${minutes} ${ampm}`;
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
  { label: string; icon: LucideIcon; className: string }
> = {
  pending: {
    label: 'Upcoming',
    icon: Clock,

    className:
      'bg-[#9f004d]/10 text-[#9f004d] ring-1 ring-inset ring-[#9f004d]/20 dark:bg-pink-500/10 dark:text-pink-400 dark:ring-pink-400/20',
  },

  ongoing: {
    label: 'Happening now',
    icon: Radio,

    className:
      'bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/20',
  },

  completed: {
    label: 'Completed',
    icon: CheckCircle2,

    className:
      'bg-gray-200 text-gray-700 ring-1 ring-inset ring-gray-400/30 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-600/30',
  },

  paused: {
    label: 'Paused',
    icon: PauseCircle,

    className:
      'bg-amber-100 text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-400/20',
  },
};

const modeConfig: Record<
  'on_site' | 'virtual' | 'hybrid',
  { label: string; icon: LucideIcon; className: string }
> = {
  on_site: {
    label: 'On-site',
    icon: MapPin,

    className:
      'bg-blue-100 text-blue-700 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-400/20',
  },

  virtual: {
    label: 'Virtual',
    icon: Video,

    className:
      'bg-purple-100 text-purple-700 ring-1 ring-inset ring-purple-600/20 dark:bg-purple-500/10 dark:text-purple-400 dark:ring-purple-400/20',
  },

  hybrid: {
    label: 'Hybrid',
    icon: Globe2,

    className:
      'bg-teal-100 text-teal-700 ring-1 ring-inset ring-teal-600/20 dark:bg-teal-500/10 dark:text-teal-400 dark:ring-teal-400/20',
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

  const hasTags =
    Array.isArray(event.eventTags) &&
    event.eventTags.length > 0;

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

  const isRegistrationClosed = Boolean(
    event.registrationEndDate &&
      new Date(event.registrationEndDate).getTime() < Date.now()
  );

  const isEventEnded =
    new Date(event.eventEndDate).getTime() < Date.now();

  const mode =
    modeConfig[event.eventMode] ??
    modeConfig.on_site;

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50/50 via-white to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
      <div className="mx-auto w-[90%] max-w-6xl py-14 sm:py-20">
        <Link
          href="/get-involved"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 caption font-semibold text-gray-600 shadow-sm transition-all hover:-translate-x-0.5 hover:border-[#9f004d]/30 hover:text-[#9f004d] dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:text-pink-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>

        <header className="mt-8">
          <div className="flex items-start justify-between gap-4">
            <style>{`
              /* .tiptap's own base rule hardcodes font-size: 1rem so the
                 rich-text editor always WYSIWYGs at body size while
                 typing — fine for editing, but it also silently overrides
                 the heading-2/heading-3/body scale class meant to size
                 these read-only viewers, so the title/description/details
                 below would never actually track the header's Aa
                 font-size setting. Tailwind's prose class (applied to
                 the description/details viewers) sets its own fixed
                 font-size the same way, on the very element .tiptap
                 inherits from — so that has to be pinned back to the
                 scaled value too, not just .tiptap itself. */
              .event-title-viewer .tiptap,
              .event-content-viewer .tiptap {
                min-height: 0;
                padding: 0;
                color: inherit;
                background: transparent;
                font-size: inherit;
              }
              /* Tight leading on wrapped title lines specifically — body
                 content below keeps its own readable line-height. */
              .event-title-viewer .tiptap {
                line-height: inherit;
              }
              .event-content-viewer.prose {
                font-size: calc(1rem * var(--font-scale));
              }
            `}</style>
            <h3
              className="event-title-viewer heading-2 min-w-0 flex-1 font-serif tracking-tight text-gray-900 dark:text-white"
              style={{ lineHeight: 1 }}
            >
              <TiptapJsonViewer
                content={normalizeTiptapDoc(event.eventTitle)}
                className="[&_p]:m-0"
              />
            </h3>

            <div className="flex shrink-0 flex-wrap items-center justify-end gap-2.5">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 caption font-semibold ${status.className}`}
              >
                <status.icon className="h-3.5 w-3.5" />
                {status.label}
              </span>

              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 caption font-semibold ${mode.className}`}
              >
                <mode.icon className="h-3.5 w-3.5" />
                {mode.label}
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 caption font-medium text-gray-600 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
              <Calendar className="h-4 w-4 text-[#9f004d] dark:text-pink-400" />
              {formatDateRange(
                event.eventStartDate,
                event.eventEndDate
              )}
            </span>

            {event.eventLocation && (
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 caption font-medium text-gray-600 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                <MapPin className="h-4 w-4 text-[#9f004d] dark:text-pink-400" />
                {event.eventLocation}
              </span>
            )}

            {event.maxAttendees && (
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 caption font-medium text-gray-600 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                <Users className="h-4 w-4 text-[#9f004d] dark:text-pink-400" />
                Up to {event.maxAttendees}{' '}
                attendees
              </span>
            )}
          </div>

          {event.project && (
            <Link
              href={`/programs/${event.project.slug}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#9f004d]/10 px-3.5 py-1.5 caption font-semibold text-[#9f004d] transition-colors hover:bg-[#9f004d]/15 dark:bg-pink-500/10 dark:text-pink-400"
            >
              <FolderOpen className="h-3.5 w-3.5" />
              Related project:{' '}
              {extractPlainText(event.project.title)}
            </Link>
          )}
        </header>

        {/* Image (+ registration card directly below it) on the left,
            details on the right (stacks on mobile) — the image starts a
            touch lower than the column top so it settles just under the
            date/location row above, not flush with it. */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,360px)_1fr]">
          <div className="space-y-6">
            {event.eventBanner && (
              <div className="mt-10 w-full overflow-hidden rounded-3xl bg-gray-100 shadow-xl shadow-gray-200/60 ring-1 ring-black/5 dark:bg-gray-800 dark:shadow-black/40">
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

            <div className="rounded-2xl border-2 border-[#9f004d]/10 bg-gradient-to-br from-pink-50 to-purple-50 p-6 shadow-sm dark:border-pink-500/10 dark:from-gray-900 dark:to-gray-900 sm:p-8">
              {isExternalRegistration ? (
                <div className="text-center">
                  <p className="caption mb-4 text-gray-600 dark:text-gray-300">
                    {isRegistrationClosed
                      ? 'Registration for this event has closed.'
                      : 'Registration for this event happens on an external site.'}
                  </p>
                  {isRegistrationClosed ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-5 py-3 caption font-semibold text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                      <Lock className="h-4 w-4" />
                      Registration Closed
                    </span>
                  ) : (
                    <a
                      href={event.registrationLink!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3.5 caption font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-emerald-600/40 active:scale-[0.98]"
                    >
                      <UserPlus className="h-5 w-5" />
                      Register Now
                    </a>
                  )}
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
                <p className="caption text-center text-gray-500 dark:text-gray-400">
                  Open to everyone — no
                  registration required,
                  just show up!
                </p>
              )}
            </div>
          </div>

          <div className="min-w-0">
            {event.participationLink && (
              isEventEnded ? (
                <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-gray-200 px-5 py-3 caption font-semibold text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  <Lock className="h-4 w-4" />
                  Event Ended
                </span>
              ) : (
                <a
                  href={event.participationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3.5 caption font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-emerald-600/40 active:scale-[0.98]"
                >
                  <Video className="h-5 w-5" />
                  Join{' '}
                  {event.eventMode === 'hybrid'
                    ? 'Virtually'
                    : 'Event'}
                </a>
              )
            )}

            {(hasDescription || hasDetails || hasTags) && (
              <div className="mt-6 space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
                {hasDescription && (
                  <div>
                    <div className="caption mb-1 font-medium text-[#9f004d] dark:text-pink-400">
                      {event.postedAt && (
                        <span>
                          Posted: {formatFriendlyDateTime(event.postedAt)}
                        </span>
                      )}
                      {event.editedAt && (
                        <span>
                          {event.postedAt ? ' · ' : ''}
                          Edited: {formatFriendlyDateTime(event.editedAt)}
                        </span>
                      )}
                    </div>
                    <h4 className="heading-3 font-serif text-gray-900 dark:text-white">
                      Details
                    </h4>
                    <TiptapJsonViewer
                      content={normalizeTiptapDoc(
                        event.eventDescription
                      )}
                      className="event-content-viewer prose dark:prose-invert mt-2 max-w-none text-gray-700 dark:text-gray-200"
                    />
                  </div>
                )}

                {hasDetails && (
                  <div
                    className={
                      hasDescription
                        ? 'border-t border-gray-100 pt-6 dark:border-gray-800'
                        : ''
                    }
                  >
                    <h4 className="heading-3 font-serif text-gray-900 dark:text-white">
                      Additional Details
                    </h4>
                    <TiptapJsonViewer
                      content={normalizeTiptapDoc(
                        event.eventDetails
                      )}
                      className="event-content-viewer prose dark:prose-invert mt-2 max-w-none text-gray-700 dark:text-gray-200"
                    />
                  </div>
                )}

                {hasTags && (
                  <div
                    className={
                      hasDescription || hasDetails
                        ? 'border-t border-gray-100 pt-6 dark:border-gray-800'
                        : ''
                    }
                  >
                    <h4 className="heading-3 font-serif text-gray-900 dark:text-white">
                      Event Tags
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {event.eventTags.map((tag) => (
                        <span
                          key={tag}
                          className="caption rounded-full bg-[#9f004d]/10 px-2.5 py-1 font-medium text-[#9f004d] dark:bg-pink-500/10 dark:text-pink-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
