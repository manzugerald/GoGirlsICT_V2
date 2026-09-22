import type { Metadata } from 'next';
import { Calendar, Heart, HeartHandshake, MessageCircle } from 'lucide-react';

import PageHero from '@/app/(root)/components/shared/page/PageHero';
import PageHeroTabs from '@/app/(root)/components/shared/page/PageHeroTabs';
import { getResourcePosterUrl, type ResourcePosterType } from '@/lib/resourcePosterMeta';

import EventsSection from './components/EventsSection';
import VolunteerSection from './components/VolunteerSection';
import DonateSection from './components/DonateSection';
import ContactSection from './components/ContactSection';

import {
  getGetInvolvedPageData,
  normalizeGetInvolvedSection,
  type GetInvolvedSection,
} from './data';

// ISR: the event list only changes when an admin creates/edits/deletes an
// event — revalidatePath('/get-involved') in app/api/events handles that
// on demand; 3600s is the safety-net upper bound if one is ever missed.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Get Involved',

  description:
    'Join, support, volunteer, donate, or connect with GoGirls ICT Initiative. Explore upcoming events, ways to volunteer, donation options, and how to reach us.',
};

const POSTER_TYPE_BY_SECTION: Record<GetInvolvedSection, ResourcePosterType> = {
  events: 'get-involved-events',
  volunteer: 'get-involved-volunteer',
  reachout: 'get-involved-contact',
  donate: 'get-involved-donate',
};

type GetInvolvedPageProps = {
  searchParams: Promise<{
    section?: string | string[];
  }>;
};

export default async function GetInvolvedPage({
  searchParams,
}: GetInvolvedPageProps) {
  const params = await searchParams;
  const activeSection = normalizeGetInvolvedSection(params.section);

  // Only the active tab's data is needed for this request.
  const { events } =
    activeSection === 'events'
      ? await getGetInvolvedPageData()
      : { events: [] };

  const heroPoster = await getResourcePosterUrl(
    POSTER_TYPE_BY_SECTION[activeSection]
  );

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <PageHero
        title="Get Involved"
        backgroundImage={heroPoster ?? undefined}
        variant="poster"
      >
        <PageHeroTabs
          tabs={[
            {
              href: '/get-involved',
              label: 'Events',
              icon: Calendar,
              isActive: activeSection === 'events',
            },
            {
              href: '/get-involved?section=volunteer',
              label: 'Volunteer',
              icon: HeartHandshake,
              isActive: activeSection === 'volunteer',
            },
            {
              href: '/get-involved?section=reachout',
              label: 'Reachout',
              icon: MessageCircle,
              isActive: activeSection === 'reachout',
            },
            {
              href: '/get-involved?section=donate',
              label: 'Donate',
              icon: Heart,
              isActive: activeSection === 'donate',
            },
          ]}
        />
      </PageHero>

      {activeSection === 'volunteer' && <VolunteerSection />}
      {activeSection === 'reachout' && <ContactSection />}
      {activeSection === 'donate' && <DonateSection />}
      {activeSection === 'events' && <EventsSection events={events} />}
    </main>
  );
}
