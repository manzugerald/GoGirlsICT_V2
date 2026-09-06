'use client';

import { useEffect, useRef, useState } from 'react';
import { cardHoverClass } from '@/utils/styles/card-hover';
import { ADMIN_STAT_KEYS, buildStat, fetchStatsForKeys, type Stat } from './statsConfig';

// ---- Resized for a two-column grid (was a single scrolling row of much
// larger cards — with up to 14 stats now shown on admin, that no longer
// fits comfortably) ----
const CARD_PADDING_X = 10;
const CARD_PADDING_Y = 10;
const SVG_SIZE = 72;
const CIRCLE_RADIUS = 26;
const CIRCLE_STROKE_WIDTH = 7;
const CIRCLE_DASHARRAY = 2 * Math.PI * CIRCLE_RADIUS;
const FONT_SIZE = 28;
const ANIMATION_DURATION = 10; // seconds
const CIRCLE_DELAY_STEP = 0.32;
const STAT_LABEL_FONT_SIZE = 15;

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
      className={
        cardHoverClass +
        ' flex flex-col items-center justify-center text-center' +
        ' w-[calc(50%-0.375rem)] sm:w-[calc(33.3333%-0.6667rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)] xl:w-[calc(16.6667%-0.8333rem)]'
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
        {/* The animated number */}
        <span
          ref={ref}
          className="flex items-center justify-center"
          style={{
            color: stat.color || '#7c3aed',
            position: 'relative',
            zIndex: 1,
            width: SVG_SIZE,
            height: SVG_SIZE,
            fontVariantNumeric: 'tabular-nums',
            letterSpacing: '-0.02em',
            userSelect: 'none',
            // calc() against the site's own --font-scale (set by the
            // header's Aa font-size control, globals.css) instead of a
            // fixed px value, so this text grows/shrinks along with the
            // rest of the site's typography.
            fontSize: `calc(${FONT_SIZE / 16}rem * var(--font-scale, 1))`,
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
      <span
        className="text-site-primary"
        style={{
          fontSize: `calc(${STAT_LABEL_FONT_SIZE / 16}rem * var(--font-scale, 1))`,
          marginTop: 6,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          fontWeight: 700,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '100%',
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
