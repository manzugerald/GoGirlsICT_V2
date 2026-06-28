'use client';

import { Suspense, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useHomePageContent, usePartners } from '../hooks/useHomePageData';

import HeroSection from './sections/HeroSection';
import VisionMissionSection from './sections/VisionMissionSection';
import ImpactSection from './sections/ImpactSection';
import PartnersSection from './sections/PartnersSection';

import SectionSkeleton from './skeletons/SectionSkeleton';
import ExploreSection from './sections/ExploreSection';

import type {
  HomePageContent,
  ExecutiveMessage,
  Project,
  Report,
  Event,
  TeamMember,
  Partner,
  Beneficiary,
} from '../types/home';

interface SinglePageHomeProps {
  ssrContent: HomePageContent | null;
  ssrMessages: ExecutiveMessage[];
  ssrProjects: Project[];
  ssrReports: Report[];
  ssrEvents: Event[];
  ssrTeam: TeamMember[];
  ssrPartners: Partner[];
  ssrBeneficiaries: Beneficiary[];
}

export default function SinglePageHome({
  ssrContent,
  ssrPartners,
}: SinglePageHomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { data: content } = useHomePageContent(ssrContent);
  const { data: partners } = usePartners(ssrPartners);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="single-page-container relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-500 origin-left z-50 shadow-lg shadow-pink-500/30"
        style={{ scaleX: scaleProgress }}
      />

      {/* 1. Hero Section */}
      <section id="hero" className="min-h-screen relative z-10">
        <Suspense fallback={<SectionSkeleton variant="hero" />}>
          <HeroSection content={content} />
        </Suspense>
      </section>

      {/* 2. Vision, Mission, Focus, Core Values */}
      <section id="vision" className="relative z-10">
        <Suspense fallback={<SectionSkeleton variant="cards" />}>
          <VisionMissionSection content={content} />
        </Suspense>
      </section>

      {/* 3. Impact */}
      <section id="impact" className="relative z-10">
        <Suspense fallback={<SectionSkeleton variant="stats" />}>
          <ImpactSection />
        </Suspense>
      </section>

      {/* 4. Funding Partners */}
      {/* <section id="partners" className="relative z-10">
        <Suspense fallback={<SectionSkeleton variant="cards" />}>
          <PartnersSection partners={partners} />
        </Suspense>
      </section> */}

      <section id="explore" className="relative z-10">
  <Suspense fallback={<SectionSkeleton variant="cards" />}>
    <ExploreSection />
  </Suspense>
</section>
    </div>
  );
}