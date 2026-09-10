'use client';

import { useEffect, useRef, useState } from 'react';
import { cardHoverClass } from '@/utils/styles/card-hover';
import { ADMIN_STAT_KEYS, buildStat, fetchStatsForKeys, type Stat } from './statsConfig';

// ---- Sized for a compact multi-column grid ----
const CARD_PADDING_X = 8;
const CARD_PADDING_Y = 8;
const SVG_SIZE = 56;
const CIRCLE_RADIUS = 20;
const CIRCLE_STROKE_WIDTH = 5;
const CIRCLE_DASHARRAY = 2 * Math.PI * CIRCLE_RADIUS;
const ANIMATION_DURATION = 10; // seconds
const CIRCLE_DELAY_STEP = 0.32;

export default function AnimatedStats({ stats: statsProp }: { stats?: Stat[] } = {}) {
  const [stats, setStats] = useState<Stat[]>(statsProp ?? []);
  // When `stats` is supplied by the caller (public pages compute their own
  // curated, server-side counts), there's nothing to fetch — skip the
  // client-side requests entirely instead of firing them and overwriting
  // the prop with different data a moment later.
  const [loading, setLoading] = useState(!statsProp);

  useEffect(() => {
    if (statsProp) return;
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const result = await fetchStatsForKeys(ADMIN_STAT_KEYS);
        if (!cancelled) setStats(result);
      } catch {
        if (!cancelled) setStats(ADMIN_STAT_KEYS.map((key) => buildStat(key, 0)));
      }
      if (!cancelled) setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <span className="text-muted-foreground" style={{ fontSize: 24 }}>
          Loading stats...
        </span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <style>{`
        @keyframes progressCircleDash {
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
      {/* flex-wrap + justify-center (not CSS grid) so a partial last row —
          5 stats on the home page, or 14 on admin (6+6+2) — stays centered
          instead of sitting flush left under the empty trailing columns a
          grid would leave. Each card's width is a calc() that reproduces
          the same per-breakpoint column count as before, minus its share
          of the row gap. */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </div>
  );
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const start = 0;
    const end = stat.value;
    if (end === 0) {
      ref.current.textContent = '0';
      return;
    }
    const duration = 1800 + Math.random() * 800;
    const startTimestamp = performance.now();
    function animate(now: number) {
      const progress = Math.min((now - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      if (ref.current) ref.current.textContent = value.toLocaleString();
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [stat.value]);

  // Stagger circle animation for each stat
  const circleDelay = `${index * CIRCLE_DELAY_STEP}s`;

  return (
    <div
      // No width class — each card sizes itself to its own content
      // (the circle's own fixed footprint, or the label's text length,
      // whichever is wider) instead of being stretched into uniform
      // grid-like columns shared by every card regardless of label
      // length.
      // cardHoverClass's dark mode is a translucent, backdrop-blurred glass
      // card (dark:bg-zinc-900/70) — fine for admin tables, but on public
      // pages it lets whatever is behind the card (the page's own
      // background) show through, which reads as "another item behind
      // this one" once you're scrolling. The `!` (important) overrides
      // force it fully opaque here without touching the shared class.
      className={
        cardHoverClass +
        ' flex flex-col items-center justify-center text-center dark:!bg-zinc-900 dark:!backdrop-blur-none'
      }
      style={{
        borderTop: `7px solid ${stat.color || '#7c3aed'}`,
        padding: `${CARD_PADDING_Y}px ${CARD_PADDING_X}px`,
        height: 'auto',
      }}
    >
      <div
        className="flex items-center justify-center relative mb-2"
        style={{
          width: SVG_SIZE,
          height: SVG_SIZE,
          margin: '0 auto',
        }}
      >
        {/* Animated SVG Circle */}
        <svg
          width={SVG_SIZE}
          height={SVG_SIZE}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 0,
            display: 'block',
            margin: '0 auto',
          }}
        >
          <circle
            cx={SVG_SIZE / 2}
            cy={SVG_SIZE / 2}
            r={CIRCLE_RADIUS}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={CIRCLE_STROKE_WIDTH}
          />
          <circle
            cx={SVG_SIZE / 2}
            cy={SVG_SIZE / 2}
            r={CIRCLE_RADIUS}
            fill="none"
            stroke={stat.color || '#7c3aed'}
            strokeWidth={CIRCLE_STROKE_WIDTH}
            strokeDasharray={CIRCLE_DASHARRAY}
            strokeDashoffset={CIRCLE_DASHARRAY}
            style={{
              transition: 'none',
              strokeLinecap: 'round',
              filter: `drop-shadow(0 0 8px ${stat.color || '#7c3aed'}66)`,
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
              animation: `progressCircleDash ${ANIMATION_DURATION}s cubic-bezier(.56,1.84,.64,1) ${circleDelay} infinite`,
            }}
          />
        </svg>
        {/* The animated number — sized off the site's own heading-3 type
            token (globals.css, a clamp() that already scales fluidly with
            viewport width and with the header's Aa font-scale control)
            instead of a fixed px value, so it tracks the rest of the
            site's typography rather than its own bespoke scale. */}
        <span
          ref={ref}
          className="heading-3 flex items-center justify-center"
          style={{
            color: stat.color || '#7c3aed',
            position: 'relative',
            zIndex: 1,
            width: SVG_SIZE,
            height: SVG_SIZE,
            fontVariantNumeric: 'tabular-nums',
            letterSpacing: '-0.02em',
            userSelect: 'none',
            fontWeight: 800,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          0
        </span>
      </div>
      {/* caption token, same reasoning — and no uppercase transform: the
          labels (see statsConfig.ts) are already properly capitalized
          ("Radio Talkshows"), not meant to shout in all-caps. */}
      <span
        className="caption text-site-primary"
        style={{
          marginTop: 6,
          letterSpacing: '0.02em',
          fontWeight: 700,
          textAlign: 'center',
          // No ellipsis/max-width truncation — now that the card's own
          // width comes from this label's length, there's nothing to
          // truncate against; nowrap just keeps it on one line.
          whiteSpace: 'nowrap',
        }}
      >
        {stat.label}
      </span>
    </div>
  );
}
// This component displays animated stats cards (a progress circle + count)
// in a two-column grid. Pass `stats` explicitly (public pages compute a
// curated, server-side list) or omit it to self-fetch every content table
// for the admin dashboard's Home section — see statsConfig.ts.
