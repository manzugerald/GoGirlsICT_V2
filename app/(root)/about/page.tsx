import type { Metadata } from 'next';

import PageHero from '@/app/(root)/components/shared/page/PageHero';

import AboutUs from './components/AboutUs';
import OurTeam from './components/OurTeam';
import Partners from './components/Partners';

import { getAboutPageData } from './data';

export const metadata: Metadata = {
  title: 'About | GoGirls ICT Initiative',

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
    <main className="min-h-screen bg-white dark:bg-gray-950">
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

      <PageHero
        title="About GoGirls ICT Initiative"
        description="Discover who we are, what guides us, the partners supporting our work, and the people turning our mission into meaningful community impact."
        backgroundImage="/assets/images/about/about-banner.jpg"
      />

      <div
        id="about"
        className="scroll-mt-20 sm:scroll-mt-24"
      >
        <AboutUs content={content} />
      </div>

      

      <div
        id="team"
        className="scroll-mt-20 sm:scroll-mt-24"
      >
        <OurTeam teamMembers={teamMembers} />
      </div>
      <div
        id="partners"
        className="scroll-mt-20 sm:scroll-mt-24"
      >
        <Partners partners={partners} />
      </div>
    </main>
  );
}