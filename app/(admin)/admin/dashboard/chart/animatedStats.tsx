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

export default function AnimatedStats({
  stats: statsProp,
  uniform = false,
}: { stats?: Stat[]; uniform?: boolean } = {}) {
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
          of the row gap. items-start overrides the flex row's default
          align-items:stretch, which was stretching every card in a line
          to match the tallest one — fighting a uniform card's own
          aspect-square and leaving it a few px taller than it is wide. */}
      <div
        className={
          'flex flex-wrap justify-center items-start gap-3 sm:gap-4' +
          // From tablet width up, uniform cards get slightly more breathing
          // room between them to match their own size bump at md/lg.
          (uniform ? ' md:gap-5 lg:gap-6' : '')
        }
      >
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} uniform={uniform} />
        ))}
      </div>
    </div>
  );
}

function StatCard({
  stat,
  index,
  uniform,
}: {
  stat: Stat;
  index: number;
  uniform?: boolean;
}) {
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
      // Default: no width class — each card sizes itself to its own
      // content (the circle's own fixed footprint, or the label's text
      // length, whichever is wider) instead of being stretched into
      // uniform grid-like columns shared by every card regardless of
      // label length. `uniform` (home page) opts into a fixed width
      // instead, shared by every card and itself scaling up at wider
      // breakpoints, so cards line up evenly rather than each hugging its
      // own label.
      // cardHoverClass's dark mode is a translucent, backdrop-blurred glass
      // card (dark:bg-zinc-900/70) — fine for admin tables, but on public
      // pages it lets whatever is behind the card (the page's own
      // background) show through, which reads as "another item behind
      // this one" once you're scrolling. The `!` (important) overrides
      // force it fully opaque here without touching the shared class.
      className={
        cardHoverClass +
        ' flex flex-col items-center justify-center text-center dark:!bg-zinc-900 dark:!backdrop-blur-none' +
        // One continuous clamp (not stepped breakpoints) sets the WIDTH,
        // and `aspect-square` forces height to always equal that width —
        // a square card at every viewport width, not just at the handful
        // of breakpoints a stepped class list would cover. It keeps
        // growing through common desktop widths before leveling off at
        // 14rem instead of topping out and going flat partway through.
        (uniform ? ' w-[clamp(8rem,_6rem_+_5vw,_14rem)] aspect-square overflow-hidden' : '')
      }
      style={{
        borderTop: `7px solid ${stat.color || '#7c3aed'}`,
        // Percentage padding resolves against the card's own width on all
        // four sides — it grows/shrinks together with the square instead
        // of eating a proportionally bigger bite out of a small card.
        padding: uniform ? '6%' : `${CARD_PADDING_Y}px ${CARD_PADDING_X}px`,
        height: 'auto',
      }}
    >
      <div
        className={uniform ? 'flex items-center justify-center' : 'flex items-center justify-center relative mb-2'}
        style={
          // Default: fixed SVG_SIZE px, in-flow above the label, same as
          // always.
          // `uniform` instead scales the circle with the card via its own
          // clamp() (each term ~1.15x the card's own, so it keeps growing
          // together with the card and reads a bit bigger than before),
          // and — since a card holding both a big centered circle AND a
          // label underneath can't also center the circle ALONE within
          // the square using normal flow (the pair centers as a group,
          // leaving the circle sitting above true-center) — is taken out
          // of flow with absolute positioning + a translate(-50%,-50%)
          // centering trick instead, independent of the label below it.
          uniform
            ? {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'clamp(4.8rem, 3.6rem + 3vw, 8.4rem)',
                height: 'clamp(4.8rem, 3.6rem + 3vw, 8.4rem)',
              }
            : { width: SVG_SIZE, height: SVG_SIZE, margin: '0 auto', flexShrink: 0 }
        }
      >
        {/* Animated SVG Circle — width/height 100% + a matching viewBox
            (instead of fixed pixel attributes) so it scales with its
            wrapper above rather than staying pinned at SVG_SIZE px. */}
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
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
        {/* The animated number. Default: sized off the site's own
            heading-3 type token (globals.css) — a clamp() that scales with
            viewport width and the header's Aa font-scale control, fine
            since the circle behind it is a fixed 56px there too.
            `uniform`'s circle instead grows with the card via its own
            clamp() above, and heading-3's clamp isn't tied to that at
            all — it was overflowing past the ring at sizes where the two
            clamps drifted apart. Its own proportional clamp (~30% of the
            circle box, comfortably inside the ring) replaces it instead,
            so the number always scales together with its circle. */}
        <span
          ref={ref}
          className={(uniform ? '' : 'heading-3 ') + 'flex items-center justify-center'}
          style={{
            color: stat.color || '#7c3aed',
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            fontSize: uniform ? 'clamp(1.4rem, 1.05rem + 0.9vw, 2.55rem)' : undefined,
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
          marginTop: uniform ? 0 : 6,
          letterSpacing: '0.02em',
          fontWeight: 700,
          textAlign: 'center',
          fontSize: uniform ? 'clamp(0.6rem, 0.5rem + 0.35vw, 0.85rem)' : undefined,
          // Uniform cards are a fixed square, so a long label is clamped
          // to 2 lines with an ellipsis instead of wrapping freely —
          // unbounded wrapping could grow taller than the square has room
          // for. The default (card sized to its own label) has nothing to
          // wrap against, so nowrap stays.
          // Pulled out of flow (bottom: 6%, matching the card's own 6%
          // padding) for the same reason the circle above is absolute —
          // with the circle now centered independently, the label has to
          // anchor to the bottom of the square on its own rather than
          // just following the circle in normal flow.
          ...(uniform
            ? {
                position: 'absolute' as const,
                bottom: '6%',
                left: '6%',
                right: '6%',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical' as const,
                overflow: 'hidden',
              }
            : { whiteSpace: 'nowrap' as const }),
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
