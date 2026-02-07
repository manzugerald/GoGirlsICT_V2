'use client';

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
  // Use hybrid cached hooks with SSR as initialData
  const { data: content } = useHomePageContent(ssrContent);
  const { data: messages } = useExecutiveMessages(ssrMessages);
  const { data: projects } = useProjects(ssrProjects);
  const { data: reports } = useReports(ssrReports);
  const { data: events } = useEvents(ssrEvents);
  const { data: teamMembers } = useTeamMembers(ssrTeam);
  const { data: partners } = usePartners(ssrPartners);
  const { data: beneficiaries } = useBeneficiaries(ssrBeneficiaries);

  return (
    <div className="single-page-container">
      {/* 1. Hero Section */}
      <section id="hero" className="scroll-mt-14">
        <HeroSection content={content} />
      </section>

      {/* 2. Vision, Mission, Focus, Core Values */}
      <section id="vision" className="scroll-mt-14 bg-white dark:bg-gray-950">
        <VisionMissionSection content={content} />
      </section>

      {/* 3. Impact: Stats + Charts (Graphs) - NEW POSITION */}
      <section id="impact" className="scroll-mt-14 bg-gray-50 dark:bg-gray-900">
        <ImpactSection />
      </section>

      {/* 4. Our Work: Projects + Reports - NOW WITH TABS */}
      <section id="our-work" className="scroll-mt-14 bg-white dark:bg-gray-950">
        <OurWorkSection projects={projects} reports={reports} />
      </section>

      {/* 5. Social Feeds: Facebook + YouTube */}
      <section id="social" className="scroll-mt-14 bg-gray-50 dark:bg-gray-900">
        <SocialFeedsSection />
      </section>

      {/* 6. Executive Messages */}
      <section id="messages" className="scroll-mt-14 bg-white dark:bg-gray-950">
        <MessagesSection messages={messages} />
      </section>

      {/* 7. Get Involved: Events + Contact */}
      <section id="get-involved" className="scroll-mt-14 bg-gray-50 dark:bg-gray-900">
        <GetInvolvedSection events={events} />
      </section>

      {/* 8. About: Team + Partners + Beneficiaries */}
      <section id="about" className="scroll-mt-14 bg-white dark:bg-gray-950">
        <AboutSection teamMembers={teamMembers} partners={partners} beneficiaries={beneficiaries} />
      </section>

      {/* 9. Donate CTA */}
      <section id="donate" className="scroll-mt-14 bg-[#9f004d] text-white">
        <DonateSection />
      </section>
    </div>
  );
}
