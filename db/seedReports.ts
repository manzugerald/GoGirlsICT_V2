// seedReports.ts
// run npx tsx db/seedReports.ts
import prisma from './prisma';
import { PrismaClient, PublishStatus } from '@/lib/generated/prisma';

// const prisma = new PrismaClient();

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

async function seedReports() {
  // ✅ Use Manzu as creator + approver
  const creator = await prisma.user.findUnique({
    where: { username: 'manzu' },
  });

  if (!creator) {
    throw new Error('❌ Creator user "manzu" not found. Seed users first.');
  }

  // Optional project linking (safe if projects exist)
  const projects = await prisma.project.findMany({
    select: { id: true, slug: true },
  });
  const projectIdBySlug = new Map(projects.map((p) => [p.slug, p.id]));

  const reports = [
    {
      title: 'Digital Literacy Bootcamp — Cohort Summary (2025)',
      images: ['/assets/images/reports/report-1.jpg'],
      files: ['/assets/files/reports/report-1.pdf'],
      publishStatus: PublishStatus.published,
      projectSlug: 'girls-digital-literacy-bootcamp',
    },
    {
      title: 'STEM Mentorship Circle — Quarterly Learning Brief (Q2)',
      images: ['/assets/images/reports/report-2.jpg'],
      files: ['/assets/files/reports/report-2.pdf'],
      publishStatus: PublishStatus.published,
      projectSlug: 'community-stem-mentorship-circle',
    },
    {
      title: 'Women in Tech Portfolio Lab — Showcase Booklet',
      images: ['/assets/images/reports/report-3.jpg'],
      files: ['/assets/files/reports/report-3.pdf'],
      publishStatus: PublishStatus.published,
      projectSlug: 'women-in-tech-portfolio-project-lab',
    },
    {
      title: 'School Computer Club Activation — Term Report',
      images: ['/assets/images/reports/report-4.jpg'],
      files: ['/assets/files/reports/report-4.pdf'],
      publishStatus: PublishStatus.published,
      projectSlug: 'school-computer-club-activation',
    },
    {
      title: 'Safe Internet & Digital Citizenship — Facilitator Guide',
      images: ['/assets/images/reports/report-5.jpg'],
      files: ['/assets/files/reports/report-5.pdf'],
      publishStatus: PublishStatus.draft,
      projectSlug: 'safe-internet-digital-citizenship-program',
    },
    {
      title: 'Basic Data Skills for Community Advocates — Training Notes',
      images: ['/assets/images/reports/report-6.jpg'],
      files: ['/assets/files/reports/report-6.pdf'],
      publishStatus: PublishStatus.draft,
      projectSlug: 'basic-data-skills-for-community-advocates',
    },
    {
      title: 'Women Entrepreneurs Tech Enablement — Snapshot',
      images: ['/assets/images/reports/report-7.jpg'],
      files: ['/assets/files/reports/report-7.pdf'],
      publishStatus: PublishStatus.published,
      projectSlug: 'women-entrepreneurs-tech-enablement',
    },
    {
      title: 'Intro to Coding for High School Girls — Outcomes',
      images: ['/assets/images/reports/report-8.jpg'],
      files: ['/assets/files/reports/report-8.pdf'],
      publishStatus: PublishStatus.published,
      projectSlug: 'intro-to-coding-for-high-school-girls',
    },
    {
      title: 'Digital Media & Storytelling — Portfolio Samples',
      images: ['/assets/images/reports/report-9.jpg'],
      files: ['/assets/files/reports/report-9.pdf'],
      publishStatus: PublishStatus.published,
      projectSlug: 'digital-media-storytelling-for-social-impact',
    },
    {
      title: 'Community Tech Help Desk Pilot — Lessons Learned',
      images: ['/assets/images/reports/report-10.jpg'],
      files: ['/assets/files/reports/report-10.pdf'],
      publishStatus: PublishStatus.draft,
      projectSlug: 'community-tech-help-desk-pilot',
    },
    {
      title: 'Young Women Leadership in Technology — Midline Report',
      images: ['/assets/images/reports/report-11.jpg'],
      files: ['/assets/files/reports/report-11.pdf'],
      publishStatus: PublishStatus.published,
      projectSlug: 'young-women-leadership-in-technology-fellowship',
    },
    {
      title: 'Digital Inclusion for Rural Learners — Design Brief',
      images: ['/assets/images/reports/report-12.jpg'],
      files: ['/assets/files/reports/report-12.pdf'],
      publishStatus: PublishStatus.draft,
      projectSlug: 'digital-inclusion-for-rural-learners',
    },
  ];

  for (const r of reports) {
    const slug = slugify(r.title);
    const projectId = r.projectSlug ? projectIdBySlug.get(r.projectSlug) : undefined;

    const created = await prisma.report.upsert({
      where: { slug },
      update: {
        title: r.title,
        images: r.images,
        files: r.files,
        publishStatus: r.publishStatus,
        projectId,
        updatedById: creator.id,
        approvedById: creator.id,
        updatedAt: new Date(),
      },
      create: {
        title: r.title,
        slug,
        images: r.images,
        files: r.files,
        publishStatus: r.publishStatus,
        accessCount: 0,
        downloadCount: 0,
        projectId,
        createdById: creator.id,
        updatedById: creator.id,
        approvedById: creator.id,
      },
    });

    console.log(`✅ Report seeded: ${created.title}`);
  }
}

seedReports()
  .then(async () => {
    console.log('✅✅ All 12 reports seeded successfully');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Report seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
