import type { Metadata } from 'next';

import PageHero from '@/app/(root)/components/shared/page/PageHero';

import AboutUs from './components/AboutUs';
import AfricanPatternBackground from './components/AfricanPatternBackground';
import OurTeam from './components/OurTeam';
import Partners from './components/Partners';

import { getAboutPageData } from './data';

export const metadata: Metadata = {
  title:
    'About | GoGirls ICT Initiative',

  description:
    'Learn about GoGirls ICT Initiative, our people, and the partners who make our work possible.',
};

export default async function AboutPage() {
  const {
    content,
    teamMembers,
    partners,
  } = await getAboutPageData();

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>

      {/* Page banner */}
      <PageHero
        title="About GoGirls ICT Initiative"
        description="Discover who we are, what guides us, the partners supporting our work, and the people turning our mission into meaningful community impact."
        backgroundImage="/assets/images/about/about-banner.jpg"
      />

      {/* 
        Shared background for every section of the About page.
        The hero remains visually separate.
      */}
      <div className="relative isolate overflow-hidden">
        <AfricanPatternBackground />

        {/* 
          The sections are made transparent so the shared pattern
          remains visible across the complete About page.
        */}
        <div className="relative z-10 [&>div>section]:!bg-transparent">
          <div
            id="about"
            className="scroll-mt-20 sm:scroll-mt-24"
          >
            <AboutUs content={content} />
          </div>

          <div
            id="partners"
            className="scroll-mt-20 sm:scroll-mt-24"
          >
            <Partners
              partners={partners}
            />
          </div>

          <div
            id="team"
            className="scroll-mt-20 sm:scroll-mt-24"
          >
            <OurTeam
              teamMembers={
                teamMembers
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
}