import type { Metadata } from 'next';

import TeamPageContent from './components/TeamPageContent';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the people behind GoGirls ICT Initiative — our core team, advisory board, and mentors.',
};

export default function TeamPage() {
  return <TeamPageContent />;
}
