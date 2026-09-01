import type { Metadata } from 'next';

import PageHero from '@/app/(root)/components/shared/page/PageHero';

import AboutUs from './components/AboutUs';
import OurTeam from './components/OurTeam';
import Partners from './components/Partners';

import { getAboutPageData } from './data';

// ISR: content only changes when an admin edits homepage copy, the team
// roster, or an institution/partner — not every request. revalidatePath()
// in those admin API routes invalidates this on demand; 3600s is the
// safety-net upper bound if one is ever missed.
export const revalidate = 3600;

export const metadata: Metadata = {
  title:
    'About | GoGirls ICT Initiative',

  description:
    'Learn about GoGirls ICT Initiative, our people, our foundation, and the partners who make our work possible.',
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

      {/* About page banner */}
      <PageHero
        title="About GoGirls ICT Initiative"
        description="Discover who we are, what guides us, the partners supporting our work, and the people turning our mission into meaningful community impact."
        backgroundImage="/assets/images/about/about-banner.jpg"
      />

      {/* Who We Are and Our Foundation */}
      <div
        id="about"
        className="scroll-mt-20 sm:scroll-mt-24"
      >
        <AboutUs content={content} />
      </div>

      {/* Our Team */}
      <div
        id="team"
        className="scroll-mt-20 sm:scroll-mt-24"
      >
        <OurTeam
          teamMembers={teamMembers}
        />
      </div>

      {/* Partners */}
      <div
        id="partners"
        className="scroll-mt-20 sm:scroll-mt-24"
      >
        <Partners
          partners={partners}
        />
      </div>
    </main>
  );
}