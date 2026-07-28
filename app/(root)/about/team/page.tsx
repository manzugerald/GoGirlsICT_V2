import type { Metadata } from 'next';

import TeamPageContent from './components/TeamPageContent';

export const metadata: Metadata = {
  title: 'Our Team | GoGirls ICT Initiative',
  description:
    'Meet the advisory board, core team, and mentors supporting the mission of GoGirls ICT Initiative.',
};

export default function TeamPage() {
  return <TeamPageContent />;
}