'use client';

import { useState } from 'react';
import { Headphones } from 'lucide-react';

import EmptyState from '@/app/(root)/components/shared/page/EmptyState';

import type { PodcastSummary } from '../data';

import PodcastCard from './PodcastCard';

const CATEGORY_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'GNTL', label: '#GNTL' },
  { value: 'ClassroomOnPhone', label: '#ClassroomOnPhone' },
] as const;

type CategoryFilter = (typeof CATEGORY_OPTIONS)[number]['value'];

export default function PodcastsSection({
  podcasts,
}: {
  podcasts: PodcastSummary[];
}) {
  const [activeId, setActiveId] = useState<
    number | null
  >(null);

  const [category, setCategory] =
    useState<CategoryFilter>('all');

  const visiblePodcasts =
    category === 'all'
      ? podcasts
      : podcasts.filter(
          (podcast) => podcast.category === category
        );

  return (
    <section
      id="podcasts"
      aria-labelledby="podcasts-heading"
      className="relative scroll-mt-20 overflow-hidden pt-4 pb-12 sm:scroll-mt-24 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20"
    >
      <div className="relative mx-auto w-[90%]">
        <div className="mx-auto max-w-2xl text-center">
          <fieldset className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <legend className="sr-only">
              Filter podcasts by category
            </legend>

            {CATEGORY_OPTIONS.map((option) => (
              <label
                key={option.value}
                className="inline-flex cursor-pointer items-center gap-2 caption font-medium text-site-secondary"
              >
                <input
                  type="radio"
                  name="podcast-category"
                  value={option.value}
                  checked={category === option.value}
                  onChange={() =>
                    setCategory(option.value)
                  }
                  className="h-4 w-4 accent-[#9f004d]"
                />
                {option.label}
              </label>
            ))}
          </fieldset>
        </div>

        {visiblePodcasts.length > 0 ? (
          <ul className="mt-10 flex flex-wrap items-start justify-evenly gap-5">

            {visiblePodcasts.map(
              (podcast, index) => (
                <PodcastCard
                  key={podcast.id}
                  podcast={podcast}
                  index={index}
                  isActive={
                    activeId === podcast.id
                  }
                  isAnyActive={activeId !== null}
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
            title={
              podcasts.length > 0
                ? 'No Podcasts in This Category'
                : 'No Podcasts Yet'
            }
            description={
              podcasts.length > 0
                ? 'Try a different category, or view all podcasts.'
                : 'Published podcast episodes will appear here.'
            }
            icon={
              <Headphones className="h-16 w-16" />
            }
          />
        )}
      </div>
    </section>
  );
}
