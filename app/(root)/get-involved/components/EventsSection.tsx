'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';

import EmptyState from '@/app/(root)/components/shared/page/EmptyState';

import type { EventSummary } from '../data';

import EventCard from './EventCard';

export default function EventsSection({
  events,
}: {
  events: EventSummary[];
}) {
  const [
    expandedEventId,
    setExpandedEventId,
  ] = useState<number | null>(null);

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="scroll-mt-20 bg-gray-50 py-8 dark:bg-gray-950 sm:scroll-mt-24 sm:py-10 lg:py-12"
    >
      <div className="mx-auto w-[90%] max-w-[1600px]">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="events-heading"
            className="heading-2 text-site-primary"
          >
            Upcoming{' '}
            <span className="bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Events
            </span>
          </h2>

          <p className="body-lg mx-auto mt-4 max-w-2xl text-site-secondary">
            Join our workshops, bootcamps,
            trainings, and community
            activities.
          </p>
        </header>

        {events.length > 0 ? (
          <ul className="mt-8 space-y-3 sm:mt-10">
            {events.map(
              (event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                  isExpanded={
                    expandedEventId ===
                    event.id
                  }
                  onToggle={() =>
                    setExpandedEventId(
                      (current) =>
                        current ===
                        event.id
                          ? null
                          : event.id
                    )
                  }
                />
              )
            )}
          </ul>
        ) : (
          <div className="mt-8 sm:mt-10">
            <EmptyState
              title="No Events Scheduled"
              description="New events will appear here once they're announced."
              icon={
                <Calendar className="h-16 w-16" />
              }
            />
          </div>
        )}
      </div>
    </section>
  );
}
