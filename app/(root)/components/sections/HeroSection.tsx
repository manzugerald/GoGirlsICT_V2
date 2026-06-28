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
  const videoY = useTransform(scrollY, [0, 600], [0, 160]);
  const contentOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const contentY = useTransform(scrollY, [0, 350], [0, -80]);

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
    <section className="relative w-full h-screen overflow-hidden bg-gray-950">
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
        <div className="text-center max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-sm md:text-base uppercase tracking-[0.35em] text-pink-200"
          >
            Empowering Communities through Innovation & Technology
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 70, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl mb-6"
          >
            {content?.siteName || 'GoGirls ICT Initiative'}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="h-1 w-40 bg-gradient-to-r from-transparent via-[#ff4fa3] to-transparent mx-auto rounded-full mb-8 origin-center"
          />

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="max-w-3xl mx-auto text-lg md:text-2xl text-white/85 leading-relaxed mb-10"
          >
            Building confidence, skills, leadership, and opportunity for girls and young women
            through technology, mentorship, and digital inclusion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              href="#our-work"
              whileHover={{
                scale: 1.07,
                y: -3,
                boxShadow: '0 24px 60px rgba(159, 0, 77, 0.45)',
              }}
              whileTap={{ scale: 0.96 }}
              className="group relative px-8 py-4 bg-[#9f004d] text-white font-semibold rounded-full shadow-xl overflow-hidden text-lg"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Work
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>

            <motion.a
              href="#get-involved"
              whileHover={{ scale: 1.07, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:border-white/60 transition-all duration-300 text-lg shadow-xl"
            >
              Get Involved
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/90"
        aria-label="Scroll to explore"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.7, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center p-2"
        >
          <span className="w-1 h-3 bg-white rounded-full" />
        </motion.span>
      </motion.button>
    </section>
  );
}