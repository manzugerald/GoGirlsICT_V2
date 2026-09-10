'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { HomePageContent } from '../../types/home';

interface HeroSectionProps {
  content: HomePageContent | null;
}

export default function HeroSection({ content }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollY } = useScroll();
  // Smaller-magnitude parallax than before — the hero is now a compact
  // ~400px banner (was a full 100vh section), so the old 160px/-80px
  // travel distances would visibly overshoot a box this short.
  const videoY = useTransform(scrollY, [0, 600], [0, 50]);
  const contentOpacity = useTransform(scrollY, [0, 250], [1, 0]);
  const contentY = useTransform(scrollY, [0, 250], [0, -30]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      const playOnInteraction = () => {
        video.play();
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('touchstart', playOnInteraction);
      };

      document.addEventListener('click', playOnInteraction);
      document.addEventListener('touchstart', playOnInteraction);
    });
  }, []);

  const videoSrc = content?.heroVideo?.trim()
    ? content.heroVideo.startsWith('http')
      ? content.heroVideo
      : content.heroVideo.startsWith('/')
        ? content.heroVideo
        : `/${content.heroVideo}`
    : null;

  return (
    // Full width always (no max-width cap); height is viewport-relative
    // (45vh) clamped between 280px and 420px — ~400px on a typical desktop
    // window, scaling down proportionally on shorter/mobile viewports
    // instead of the old full-100vh hero.
    <section className="relative w-full h-[clamp(280px,45vh,420px)] overflow-hidden bg-gray-950">
      {/* Background video */}
      {videoSrc ? (
        <motion.div style={{ y: videoY }} className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </motion.div>
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#9f004d] via-purple-800 to-gray-950" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/55" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

      {/* Hero content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 h-full flex items-center justify-center px-4"
      >
        {/* Fluid clamp() font sizes — text shrinks continuously with the
            browser width instead of only jumping at sm/md/lg breakpoints. */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 70, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(1.5rem,1.1rem+2.2vw,3rem)] font-black text-white drop-shadow-2xl mb-3 sm:mb-4"
          >
            {content?.siteName || 'GoGirls ICT Initiative'}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="h-1 w-24 bg-gradient-to-r from-transparent via-[#ff4fa3] to-transparent mx-auto rounded-full mb-3 sm:mb-4 origin-center"
          />

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="max-w-3xl mx-auto text-[clamp(0.75rem,0.65rem+0.5vw,1rem)] text-white/85 leading-snug"
          >
            Building confidence, skills, leadership, and opportunity for girls and young women
            through technology, mentorship, and digital inclusion.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}