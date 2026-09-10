import type { Metadata } from 'next';

import PageHero from '@/app/(root)/components/shared/page/PageHero';
import { getResourcePosterUrl } from '@/lib/resourcePosterMeta';

import EventsSection from './components/EventsSection';
import VolunteerSection from './components/VolunteerSection';
import DonateSection from './components/DonateSection';
import ContactSection from './components/ContactSection';

import { getGetInvolvedPageData } from './data';

// ISR: the event list only changes when an admin creates/edits/deletes an
// event — revalidatePath('/get-involved') in app/api/events handles that
// on demand; 3600s is the safety-net upper bound if one is ever missed.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Get Involved',

  description:
    'Join, support, volunteer, donate, or connect with GoGirls ICT Initiative. Explore upcoming events, ways to volunteer, donation options, and how to reach us.',
};

export default async function GetInvolvedPage() {
  const { events } =
    await getGetInvolvedPageData();

  const heroPoster = await getResourcePosterUrl('get-involved');

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <PageHero
        title="Get Involved"
        backgroundImage={heroPoster ?? undefined}
        variant="poster"
      />

      <EventsSection events={events} />

      <VolunteerSection />

      <DonateSection />

      <ContactSection />
    </main>
  );
}
