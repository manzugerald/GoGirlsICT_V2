// ⛔️ DO NOT add 'use client' here!

import { prisma } from '@/db/prisma';
import SinglePageHome from './components/SinglePageHome';

export default async function HomePage() {
  // Fetch all data needed for single-page design in parallel
  const [
    ssrContent,
    ssrMessages,
    ssrProjects,
    ssrReports,
    ssrEvents,
    ssrTeam,
    ssrInstitutions,
    ssrBeneficiaries,
  ] = await Promise.all([
    // HomePage content
    prisma.homePage.findFirst({
      orderBy: { createdAt: 'desc' },
    }),

    // Messages (executive messages) - published only
    prisma.message.findMany({
      where: {
        messageStatus: 'published',
        messageCategory: 'go_girls_ict_team',
      },
      orderBy: { createdAt: 'desc' },
      take: 4,
    }),

    // Projects - published only
    prisma.project.findMany({
      where: { publishStatus: 'published' },
      orderBy: { createdAt: 'desc' },
      take: 6,
    }),

    // Reports - published only
    prisma.report.findMany({
      where: { publishStatus: 'published' },
      orderBy: { createdAt: 'desc' },
      take: 6,
    }),

    // Events - published and upcoming/ongoing
    prisma.event.findMany({
      where: {
        publishStatus: 'published',
        eventStatus: { in: ['pending', 'ongoing'] },
      },
      orderBy: { eventStartDate: 'desc' },
      take: 6,
    }),

    // Team members - active only
    prisma.team.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
      take: 8,
    }),

    // Institutions (partners)
    prisma.institution.findMany({
      where: {
        institutionCategory: 'funding'
      },
      select: {
        id: true,
        name: true,
        logo: true,
        institutionType: true,
        institutionCategory: true
      },
      orderBy: { name: 'asc' },
      take: 3,
    }),

    // Beneficiaries - published only
    prisma.beneficiary.findMany({
      where: { beneficiaryStatus: 'published' },
      orderBy: { createdAt: 'desc' },
      take: 12,
    }),
  ]);

  // Debug logging (remove after testing)
  console.log('=== SERVER: HomePage Data ===');
  console.log('ssrContent:', ssrContent);
  console.log('heroVideo:', ssrContent?.heroVideo);
  console.log('Messages count:', ssrMessages?.length);
  console.log('Projects count:', ssrProjects?.length);
  console.log('=============================');

  return (
    <SinglePageHome
      ssrContent={ssrContent}
      ssrMessages={ssrMessages}
      ssrProjects={ssrProjects}
      ssrReports={ssrReports}
      ssrEvents={ssrEvents}
      ssrTeam={ssrTeam}
      ssrPartners={ssrInstitutions}
      ssrBeneficiaries={ssrBeneficiaries}
    />
  );
}
