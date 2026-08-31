'use client';

import { Suspense, useEffect, useRef } from 'react';
import { useHomePageContent, usePartners } from '../hooks/useHomePageData';

import HeroSection from './sections/HeroSection';
import VisionMissionSection from './sections/VisionMissionSection';
import ImpactSection from './sections/ImpactSection';

import SectionSkeleton from './skeletons/SectionSkeleton';
import ExploreSection from './sections/ExploreSection';

import type { HomePageContent, Partner } from '../types/home';

type ImpactCounts = {
  projects: number;
  reports: number;
  events: number;
  users: number;
  institutions: number;
  beneficiaries: number;
};

interface SinglePageHomeProps {
  ssrContent: HomePageContent | null;
  ssrPartners: Partner[];
  impactCounts: ImpactCounts;
}

export default function SinglePageHome({
  ssrContent,
  ssrPartners,
  impactCounts,
}: SinglePageHomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { data: content } = useHomePageContent(ssrContent);
  usePartners(ssrPartners); // prime the query cache for consumers elsewhere on the page

  

  

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
          <ImpactSection counts={impactCounts} />
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