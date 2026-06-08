'use client';

import { Suspense, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  useHomePageContent,
  useExecutiveMessages,
  useProjects,
  useReports,
  useEvents,
  useTeamMembers,
  usePartners,
  useBeneficiaries,
} from '../hooks/useHomePageData';

// Import section components
import HeroSection from './sections/HeroSection';
import VisionMissionSection from './sections/VisionMissionSection';
import ImpactSection from './sections/ImpactSection';
import OurWorkSection from './sections/OurWorkSection';
import SocialFeedsSection from './sections/SocialFeedsSection';
import MessagesSection from './sections/MessagesSection';
import GetInvolvedSection from './sections/GetInvolvedSection';
import AboutSection from './sections/AboutSection';
import DonateSection from './sections/DonateSection';

// Skeleton components
import SectionSkeleton from './skeletons/SectionSkeleton';

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
  ssrMessages,
  ssrProjects,
  ssrReports,
  ssrEvents,
  ssrTeam,
  ssrPartners,
  ssrBeneficiaries,
}: SinglePageHomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use hybrid cached hooks with SSR as initialData
  const { data: content } = useHomePageContent(ssrContent);
  const { data: messages } = useExecutiveMessages(ssrMessages);
  const { data: projects } = useProjects(ssrProjects);
  const { data: reports } = useReports(ssrReports);
  const { data: events } = useEvents(ssrEvents);
  const { data: teamMembers } = useTeamMembers(ssrTeam);
  const { data: partners } = usePartners(ssrPartners);
  const { data: beneficiaries } = useBeneficiaries(ssrBeneficiaries);

  // Scroll progress for the progress bar
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Smooth scroll behavior
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
      {/* Global animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.02, 0.05],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-full h-full bg-gradient-to-tl from-pink-500 via-rose-500 to-orange-500 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50 shadow-lg shadow-purple-500/50"
        style={{ scaleX: scaleProgress }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-sm"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
          scale: scrollYProgress.get() > 0.1 ? 1 : 0,
        }}
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-br from-[#9f004d] to-pink-600 text-white rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all"
        aria-label="Scroll to top"
      >
        <motion.svg
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </motion.svg>
      </motion.button>

      {/* Sections - NO WRAPPER, let each handle its own animations */}

      {/* 1. Hero Section */}
      <section id="hero" className="min-h-screen relative z-10">
        <Suspense fallback={<SectionSkeleton variant="hero" />}>
          <HeroSection content={content} />
        </Suspense>
      </section>

      {/* 2. Vision, Mission, Focus, Core Values */}
      <section id="vision" className="min-h-screen relative z-10">
        <Suspense fallback={<SectionSkeleton variant="cards" />}>
          <VisionMissionSection content={content} />
        </Suspense>
      </section>

      {/* 3. Impact: Stats + Charts */}
      <section id="impact" className="min-h-screen relative z-10">
        <Suspense fallback={<SectionSkeleton variant="stats" />}>
          <ImpactSection />
        </Suspense>
      </section>

      {/* 4. Our Work: Projects + Reports */}
      <section id="our-work" className="min-h-screen relative z-10">
        <Suspense fallback={<SectionSkeleton variant="tabs" />}>
          <OurWorkSection projects={projects} reports={reports} />
        </Suspense>
      </section>

      {/* 5. Social Feeds: Facebook + YouTube */}
      <section id="social" className="min-h-screen relative z-10">
        <Suspense fallback={<SectionSkeleton variant="social" />}>
          <SocialFeedsSection />
        </Suspense>
      </section>

      {/* 6. Executive Messages */}
      <section id="messages" className="min-h-screen relative z-10">
        <Suspense fallback={<SectionSkeleton variant="cards" />}>
          <MessagesSection messages={messages} />
        </Suspense>
      </section>

      {/* 7. Get Involved: Events + Contact */}
      <section id="get-involved" className="min-h-screen relative z-10">
        <Suspense fallback={<SectionSkeleton variant="events" />}>
          <GetInvolvedSection events={events} />
        </Suspense>
      </section>

      {/* 8. About: Team + Partners + Beneficiaries */}
      <section id="about" className="min-h-screen relative z-10">
        <Suspense fallback={<SectionSkeleton variant="team" />}>
          <AboutSection
            teamMembers={teamMembers}
            partners={partners}
            beneficiaries={beneficiaries}
          />
        </Suspense>
      </section>

      {/* 9. Donate CTA */}
      <section id="donate" className="min-h-[60vh] relative z-10">
        <Suspense fallback={<SectionSkeleton variant="cta" />}>
          <DonateSection />
        </Suspense>
      </section>
    </div>
  );
}
