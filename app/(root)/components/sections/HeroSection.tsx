'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { HomePageContent } from '../../types/home';

interface HeroSectionProps {
  content: HomePageContent | null;
}

export default function HeroSection({ content }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure video plays and loops smoothly
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Video autoplay was prevented:', error);
        const playOnInteraction = () => {
          video.play();
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('touchstart', playOnInteraction);
        };
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('touchstart', playOnInteraction);
      }
    };

    playVideo();

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;
      if (duration - currentTime < 0.5) {
        video.style.transition = 'opacity 0.3s ease-in-out';
      }
    };

    const handleLoadedData = () => {
      video.style.opacity = '1';
    };

    const handleLoop = () => {
      video.style.transition = 'none';
      video.style.opacity = '1';
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('ended', handleLoop);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('ended', handleLoop);
    };
  }, []);

  if (!content?.heroVideo?.trim()) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-screen bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"
          />
        </div>

        <div className="text-center text-white px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Welcome
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-2xl"
          >
            Empowering girls through ICT
          </motion.p>
        </div>
      </motion.div>
    );
  }

  const videoSrc = content.heroVideo.startsWith('http')
    ? content.heroVideo
    : content.heroVideo.startsWith('/')
      ? content.heroVideo
      : `/${content.heroVideo}`;

  return (
    <div ref={sectionRef} className="hero-section relative w-full h-screen overflow-hidden">
      {/* Background Video with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: 0 }}
          webkit-playsinline="true"
          x5-playsinline="true"
        >
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Animated gradient overlays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
      />

      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(159, 0, 77, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(159, 0, 77, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(159, 0, 77, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      />

      {/* Main content with parallax */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center px-4"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Site Name with animation */}
          <motion.h1
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-6"
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white"
              style={{ backgroundSize: '200% 200%' }}
            >
              {content.siteName || 'GoGirls ICT Initiative'}
            </motion.span>
          </motion.h1>

          {/* Decorative animated line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
            className="h-1 w-32 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto rounded-full mb-8"
          />

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 100,
                  opacity: 0,
                }}
                animate={{
                  y: -100,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: 'linear',
                }}
                className="absolute w-1 h-1 bg-white rounded-full"
              />
            ))}
          </div>

          {/* Call to action buttons with stagger */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              href="#our-work"
              whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(159, 0, 77, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-[#9f004d] text-white font-semibold rounded-full transition-all shadow-lg overflow-hidden text-lg"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>

            <motion.a
              href="#get-involved"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-lg"
            >
              Get Involved
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator with bounce animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2,
          duration: 0.6,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-white text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
