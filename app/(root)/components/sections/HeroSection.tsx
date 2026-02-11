'use client';

import { useEffect, useState } from 'react';
import type { HomePageContent } from '../../types/home';

interface HeroSectionProps {
  content: HomePageContent | null;
}

// Break the text into meaningful segments
const TEXT_SEGMENTS = [
  'Empowering girls and young women through technology',
  'Bridging gender gaps in ICT',
  'Amplifying underrepresented voices',
  'Cultivating creators, leaders, and decision-makers',
  'Building confidence, competence, and critical thinking',
  'Digital skills as liberation and agency',
  'Enabling meaningful participation in the digital economy',
  'Creating just, innovative, and resilient societies',
];

export default function HeroSection({ content }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!content?.heroVideo?.trim()) {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome</h1>
          <p className="text-xl">Empowering girls through ICT</p>
        </div>
      </div>
    );
  }

  const videoSrc = content.heroVideo.startsWith('http')
    ? content.heroVideo
    : content.heroVideo.startsWith('/')
      ? content.heroVideo
      : `/${content.heroVideo}`;

  return (
    <div className="hero-section relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Main content container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Top section with site name */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-4 animate-fade-in">
              {content.siteName || 'GoGirls ICT Initiative'}
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto rounded-full" />

            {/* Call to action buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="#our-work"
                className="group px-8 py-3 bg-[#9f004d] hover:bg-[#8a0042] text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
              >
                <span>Explore Our Work</span>
              </a>
              <a
                href="#get-involved"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>

        {/* Bottom scrolling text cards - FULL WIDTH */}
        <div className="pb-20 md:pb-32">
          <div className="w-full overflow-hidden relative">
            {/* Gradient fade on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none" />

            {/* Two rows of scrolling cards for continuous effect */}
            <div className="space-y-4">
              {/* First row - scroll left */}
              <div className={`flex gap-4 ${mounted ? 'animate-scroll-left' : ''}`}>
                {[...TEXT_SEGMENTS, ...TEXT_SEGMENTS].map((text, idx) => (
                  <div
                    key={`row1-${idx}`}
                    className="flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-4 min-w-[300px] max-w-[400px] hover:bg-white/15 transition-colors duration-300"
                  >
                    <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Second row - scroll right (reverse animation) */}
              <div className={`flex gap-4 ${mounted ? 'animate-scroll-right' : ''}`}>
                {[...TEXT_SEGMENTS, ...TEXT_SEGMENTS].map((text, idx) => (
                  <div
                    key={`row2-${idx}`}
                    className="flex-shrink-0 bg-pink-600/20 backdrop-blur-md border border-pink-400/30 rounded-lg px-6 py-4 min-w-[300px] max-w-[400px] hover:bg-pink-600/30 transition-colors duration-300"
                  >
                    <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
