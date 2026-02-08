'use client';

import { Suspense, useEffect, useRef } from 'react';
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

  // Intersection Observer for smooth section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const sections = containerRef.current?.querySelectorAll('.section-snap');
    sections?.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="single-page-container">
      {/* 1. Hero Section */}
      <section id="hero" className="section-snap min-h-screen">
        <Suspense fallback={<SectionSkeleton variant="hero" />}>
          <HeroSection content={content} />
        </Suspense>
      </section>

      {/* 2. Vision, Mission, Focus, Core Values */}
      <section id="vision" className="section-snap min-h-screen bg-white dark:bg-gray-950">
        <Suspense fallback={<SectionSkeleton variant="cards" />}>
          <VisionMissionSection content={content} />
        </Suspense>
      </section>

      {/* 3. Impact: Stats + Charts (Graphs) */}
      <section id="impact" className="section-snap min-h-screen bg-gray-50 dark:bg-gray-900">
        <Suspense fallback={<SectionSkeleton variant="stats" />}>
          <ImpactSection />
        </Suspense>
      </section>

      {/* 4. Our Work: Projects + Reports */}
      <section id="our-work" className="section-snap min-h-screen bg-white dark:bg-gray-950">
        <Suspense fallback={<SectionSkeleton variant="tabs" />}>
          <OurWorkSection projects={projects} reports={reports} />
        </Suspense>
      </section>

      {/* 5. Social Feeds: Facebook + YouTube */}
      <section id="social" className="section-snap min-h-screen bg-gray-50 dark:bg-gray-900">
        <Suspense fallback={<SectionSkeleton variant="social" />}>
          <SocialFeedsSection />
        </Suspense>
      </section>

      {/* 6. Executive Messages */}
      <section id="messages" className="section-snap min-h-screen bg-white dark:bg-gray-950">
        <Suspense fallback={<SectionSkeleton variant="cards" />}>
          <MessagesSection messages={messages} />
        </Suspense>
      </section>

      {/* 7. Get Involved: Events + Contact */}
      <section id="get-involved" className="section-snap min-h-screen bg-gray-50 dark:bg-gray-900">
        <Suspense fallback={<SectionSkeleton variant="events" />}>
          <GetInvolvedSection events={events} />
        </Suspense>
      </section>

      {/* 8. About: Team + Partners + Beneficiaries */}
      <section id="about" className="section-snap min-h-screen bg-white dark:bg-gray-950">
        <Suspense fallback={<SectionSkeleton variant="team" />}>
          <AboutSection
            teamMembers={teamMembers}
            partners={partners}
            beneficiaries={beneficiaries}
          />
        </Suspense>
      </section>

      {/* 9. Donate CTA - No snap for smooth transition to footer */}
      <section id="donate" className="min-h-[60vh]">
        <Suspense fallback={<SectionSkeleton variant="cta" />}>
          <DonateSection />
        </Suspense>
      </section>
    </div>
  );
}
