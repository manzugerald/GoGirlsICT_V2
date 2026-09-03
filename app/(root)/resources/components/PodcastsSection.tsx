'use client';

import { useState } from 'react';
import { Headphones } from 'lucide-react';

import EmptyState from '@/app/(root)/components/shared/page/EmptyState';

import type { PodcastSummary } from '../data';

import PodcastCard from './PodcastCard';

export default function PodcastsSection({
  podcasts,
}: {
  podcasts: PodcastSummary[];
}) {
  const [activeId, setActiveId] = useState<
    number | null
  >(null);

  return (
    <section
      id="podcasts"
      aria-labelledby="podcasts-heading"
      className="relative scroll-mt-20 overflow-hidden py-12 sm:scroll-mt-24 sm:py-16 lg:py-20"
    >
      <div className="relative mx-auto w-[90%] max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="podcasts-heading"
            className="heading-2 text-site-primary"
          >
            Listen to our{' '}
            <span className="bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Podcasts
            </span>
          </h2>

          <p className="body-lg mx-auto mt-3 max-w-xl text-site-secondary">
            Conversations, stories, and
            insights from the GoGirls ICT
            community.
          </p>
        </div>

        {podcasts.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {podcasts.map(
              (podcast, index) => (
                <PodcastCard
                  key={podcast.id}
                  podcast={podcast}
                  index={index}
                  isActive={
                    activeId === podcast.id
                  }
                  onPlay={() =>
                    setActiveId(podcast.id)
                  }
                  onPause={() =>
                    setActiveId((current) =>
                      current === podcast.id
                        ? null
                        : current
                    )
                  }
                />
              )
            )}
          </ul>
        ) : (
          <EmptyState
            title="No Podcasts Yet"
            description="Published podcast episodes will appear here."
            icon={
              <Headphones className="h-16 w-16" />
            }
          />
        )}
      </div>
    </section>
  );
}
