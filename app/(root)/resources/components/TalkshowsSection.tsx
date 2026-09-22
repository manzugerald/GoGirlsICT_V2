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
      className="relative scroll-mt-20 overflow-hidden pt-4 pb-12 sm:scroll-mt-24 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20"
    >
      <div className="relative mx-auto w-[90%]">
        {talkshows.length > 0 ? (
          <ul className="flex flex-wrap items-start justify-evenly gap-5">

            {talkshows.map(
              (talkshow, index) => (
                <TalkshowCard
                  key={talkshow.id}
                  talkshow={talkshow}
                  index={index}
                  isActive={
                    activeId === talkshow.id
                  }
                  isAnyActive={activeId !== null}
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
