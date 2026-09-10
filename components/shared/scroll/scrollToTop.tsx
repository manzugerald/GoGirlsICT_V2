'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

// The header's own brand color — the button face, its 3D "edge" shadow,
// and the glow all use exactly this, instead of mixing in a gray edge or
// a separate pink/purple/blue gradient glow.
const BRAND_COLOR = '#9f004d';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  // This button is `fixed bottom-right`, so it's pinned to the viewport
  // corner regardless of scroll — with nothing else guarding it, it ends
  // up painted on top of the footer's own bottom-right content (the
  // "Admin Login" link) as soon as that scrolls into view, since a fixed
  // element always renders above normal in-flow content at the same
  // stacking level. footerVisible is computed synchronously from the
  // footer's own getBoundingClientRect on every scroll tick (same handler
  // as the `visible` check below) rather than via an IntersectionObserver
  // — the observer's first callback only fires asynchronously on a later
  // frame, which left a brief window right after a fast scroll/jump where
  // the button could still flash over the footer before hiding.
  // getBoundingClientRect is synchronous layout info, so there's no such
  // gap: the button and the footer's visibility are always in lockstep.
  const [footerVisible, setFooterVisible] = useState(false);
  // Driven by a plain setTimeout, not a Framer Motion `delay` — a
  // transition delay only fires once and is easy to get swallowed by a
  // parent AnimatePresence remount; a real timer guarantees the glow
  // stays flat for exactly 5s before it starts pulsing.
  const [glowActive, setGlowActive] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');

    const handleScroll = () => {
      setVisible(window.scrollY > 200);
      setFooterVisible(
        footer ? footer.getBoundingClientRect().top < window.innerHeight : false
      );
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // sync state immediately on mount, not just on the next scroll
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      setGlowActive(false);
      return;
    }
    const timer = setTimeout(() => setGlowActive(true), 5000);
    return () => clearTimeout(timer);
  }, [visible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shown = visible && !footerVisible;

  return (
    <AnimatePresence>
      {shown && (
        <motion.div
          key="scroll-to-top"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed z-50"
          style={{ bottom: '1rem', right: '1rem', perspective: '600px' }}
        >
          {/* Flat at opacity 0.15 for the first 5s (glowActive false),
              then switches to the slow pulsing keyframe animation. */}
          <motion.div
            aria-hidden="true"
            animate={
              glowActive ? { opacity: [0.15, 0.4, 0.15] } : { opacity: 0.15 }
            }
            transition={
              glowActive
                ? { duration: 5, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0 }
            }
            className="absolute -inset-1 rounded-full blur-sm"
            style={{ backgroundColor: BRAND_COLOR }}
          />

          {/* 3D puck — face, edge, and glow are all the same brand color.
              The "edge" is a spread-only box-shadow (0 0 0 Npx, no x/y
              offset), which is the only shape that renders as an evenly
              thick ring all the way around a circle — an offset shadow
              (0 Npx 0) only shows as a sliver at the bottom and tapers to
              nothing at the sides, which read as an uneven gap. The
              separate blurred, offset ambient shadow below is expected to
              look soft/directional (like a real contact shadow) and isn't
              part of that ring. */}
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            whileHover={{ rotateX: -20, y: -3, scale: 1.08 }}
            whileTap={{ rotateX: 8, y: 2, scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 380, damping: 16 }}
            style={{
              transformStyle: 'preserve-3d',
              width: '2.25rem',
              height: '2.25rem',
              backgroundColor: BRAND_COLOR,
              boxShadow: `0 0 0 3px ${BRAND_COLOR}, 0 4px 8px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.35)`,
            }}
            className="relative flex items-center justify-center rounded-full text-white focus:outline-none"
          >
            {/* The "signal" — was a 1.2s color cycle, now considerably
                slower at 2.6s. */}
            <motion.span
              initial={{ color: '#fff' }}
              animate={{ color: ['#fff', '#1f2937', '#fff'] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center justify-center w-4 h-4"
            >
              <FaArrowUp size={13} />
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
