'use client';

import { useState } from 'react';
import { Radio } from 'lucide-react';

import EmptyState from '@/app/(root)/components/shared/page/EmptyState';

import type { TalkshowSummary } from '../data';

import TalkshowCard from './TalkshowCard';

export default function TalkshowsSection({
  talkshows,
}: {
  talkshows: TalkshowSummary[];
}) {
  const [activeId, setActiveId] = useState<
    number | null
  >(null);

  return (
    <section
      id="talkshows"
      aria-labelledby="talkshows-heading"
      className="relative scroll-mt-20 overflow-hidden py-12 sm:scroll-mt-24 sm:py-16 lg:py-20"
    >
      <div className="relative mx-auto w-[90%] max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="talkshows-heading"
            className="heading-2 text-site-primary"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Radio Talkshows
            </span>
          </h2>

          <p className="body-lg mx-auto mt-3 max-w-xl text-site-secondary">
            Recordings of our on-air radio
            talkshow appearances.
          </p>
        </div>

        {talkshows.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {talkshows.map(
              (talkshow, index) => (
                <TalkshowCard
                  key={talkshow.id}
                  talkshow={talkshow}
                  index={index}
                  isActive={
                    activeId === talkshow.id
                  }
                  onPlay={() =>
                    setActiveId(talkshow.id)
                  }
                  onPause={() =>
                    setActiveId((current) =>
                      current === talkshow.id
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
            title="No Radio Talkshows Yet"
            description="Recordings of our radio talkshow appearances will appear here."
            icon={
              <Radio className="h-16 w-16" />
            }
          />
        )}
      </div>
    </section>
  );
}
