'use client';

import { useEffect, useRef } from 'react';

type ProgramStat = {
  label: string;
  value: number;
  color: string;
};

interface ProgramsAnimatedStatsProps {
  projects: number;
  active: number;
  completed: number;
  events: number;
}

// The card's min-width used to be a fixed CARD_MIN_WIDTH = 150 constant.
// It's now a clamp() (see the `article` style below) starting from that
// same 150px floor and growing on large/ultra-wide desktops instead of
// capping out there.
const CARD_PADDING_X = 10;
const CARD_PADDING_Y = 8;

// SVG_SIZE/CIRCLE_RADIUS/CIRCLE_STROKE_WIDTH are the fixed logical viewBox
// coordinate system the ring is drawn in — NOT the rendered pixel size.
// The wrapper around the <svg> resolves its actual on-screen size via a
// clamp() (see ringSize below), and the <svg> fills that wrapper at 100%.
const SVG_SIZE = 86;
const CIRCLE_RADIUS = 31;
const CIRCLE_STROKE_WIDTH = 9;
const CIRCLE_DASHARRAY =
  2 * Math.PI * CIRCLE_RADIUS;

const ANIMATION_DURATION = 10;
const CIRCLE_DELAY_STEP = 0.32;

export default function ProgramsAnimatedStats({
  projects,
  active,
  completed,
  events,
}: ProgramsAnimatedStatsProps) {
  const stats: ProgramStat[] = [
    {
      label: 'Projects',
      value: projects,
      color: '#7c3aed',
    },
    {
      label: 'Active',
      value: active,
      color: '#059669',
    },
    {
      label: 'Completed',
      value: completed,
      color: '#2563eb',
    },
    {
      label: 'Events',
      value: events,
      color: '#f59e0b',
    },
  ];

  return (
    <div className="w-full">
      <style>{`
        @keyframes programProgressCircle {
          0% {
            stroke-dashoffset: ${CIRCLE_DASHARRAY};
          }

          60% {
            stroke-dashoffset: 0;
          }

          100% {
            stroke-dashoffset: ${CIRCLE_DASHARRAY};
          }
        }
      `}</style>

      <div className="flex w-full justify-start gap-4 overflow-x-auto overflow-y-visible pb-2 sm:justify-center">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            stat={stat}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function StatCard({
  stat,
  index,
}: {
  stat: ProgramStat;
  index: number;
}) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = numberRef.current;

    if (!element) return;

    const targetValue = Math.max(0, stat.value);

    if (targetValue === 0) {
      element.textContent = '0';
      return;
    }

    const duration =
      1800 + Math.random() * 800;

    const startedAt = performance.now();

    let animationFrameId: number;

    function animate(currentTime: number) {
      const progress = Math.min(
        (currentTime - startedAt) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const value = Math.floor(
        easedProgress * targetValue
      );

      if (numberRef.current) {
        numberRef.current.textContent =
          value.toLocaleString();
      }

      if (progress < 1) {
        animationFrameId =
          requestAnimationFrame(animate);
      }
    }

    animationFrameId =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stat.value]);

  const circleDelay =
    `${index * CIRCLE_DELAY_STEP}s`;

  return (
    <article
      className="group flex shrink-0 flex-col items-center justify-center rounded-2xl border border-white/25 bg-white/95 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-gray-950/90"
      style={{
        borderTop: `7px solid ${stat.color}`,
        // Grows from the CARD_MIN_WIDTH floor (150px) up to ~260px on
        // very large/ultra-wide screens, scaling together with the ring
        // inside it instead of staying pinned at its small-screen size.
        minWidth: 'clamp(9.375rem, 7rem + 6vw, 16.25rem)',
        padding: `${CARD_PADDING_Y}px ${CARD_PADDING_X}px`,
      }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          // Rendered ring box: starts at the component's original 86px
          // baseline and grows to ~150px at very large viewports instead
          // of capping out. SVG_SIZE stays the fixed viewBox unit system.
          width: 'clamp(5.375rem, 4rem + 3.25vw, 9.375rem)',
          height: 'clamp(5.375rem, 4rem + 3.25vw, 9.375rem)',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
          className="absolute inset-0 block"
          aria-hidden="true"
        >
          <circle
            cx={SVG_SIZE / 2}
            cy={SVG_SIZE / 2}
            r={CIRCLE_RADIUS}
            fill="none"
            stroke="rgba(156,163,175,0.25)"
            strokeWidth={CIRCLE_STROKE_WIDTH}
          />

          <circle
            cx={SVG_SIZE / 2}
            cy={SVG_SIZE / 2}
            r={CIRCLE_RADIUS}
            fill="none"
            stroke={stat.color}
            strokeWidth={CIRCLE_STROKE_WIDTH}
            strokeDasharray={CIRCLE_DASHARRAY}
            strokeDashoffset={CIRCLE_DASHARRAY}
            style={{
              strokeLinecap: 'round',
              filter: `drop-shadow(0 0 8px ${stat.color}66)`,
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
              animation: `programProgressCircle ${ANIMATION_DURATION}s cubic-bezier(.56,1.84,.64,1) ${circleDelay} infinite`,
            }}
          />
        </svg>

        <span
          ref={numberRef}
          className="relative z-10 flex h-full w-full select-none items-center justify-center text-center font-extrabold tabular-nums"
          style={{
            color: stat.color,
            letterSpacing: '-0.02em',
            // Proportional to the ring's own clamp() above (~35% of its
            // box) so the number keeps scaling together with the ring
            // instead of overflowing it once the ring grows past its old
            // fixed 86px size. Replaces the old `heading-2` class, whose
            // clamp wasn't tied to the ring's size at all.
            fontSize: 'clamp(1.75rem, 1.3rem + 1.1vw, 3.25rem)',
          }}
        >
          0
        </span>
      </div>

      <span className="caption mt-1 max-w-[145px] truncate text-center font-bold uppercase tracking-[0.08em] text-gray-600 dark:text-gray-300">
        {stat.label}
      </span>
    </article>
  );
}