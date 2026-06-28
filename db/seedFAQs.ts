import prisma from './prisma';
import { PrismaClient, FAQCategory, PublishStatus } from '@/lib/generated/prisma';

// const prisma = new PrismaClient();

async function seedFAQs() {
  // Use Manzu as creator, updater, and approver
  const creator = await prisma.user.findUnique({
    where: { username: 'manzu' },
  });

  if (!creator) {
    throw new Error('❌ User "manzu" not found. Seed users first.');
  }

  const faqs = [
    {
      category: FAQCategory.general,
      question: {
        type: 'paragraph',
        content: 'What is GoGirls ICT Initiative?',
      },
      answer: {
        type: 'paragraph',
        content:
          'GoGirls ICT Initiative is a community-driven organization focused on empowering girls and young women through digital skills, technology education, and innovation programs. We work with schools, communities, and institutions to promote inclusive access to ICT.',
      },
    },
    {
      category: FAQCategory.general,
      question: {
        type: 'paragraph',
        content: 'Who can benefit from GoGirls ICT programs?',
      },
      answer: {
        type: 'paragraph',
        content:
          'Our programs primarily target girls and young women, but we also support educators, community leaders, and institutions that promote digital inclusion and gender equality in technology.',
      },
    },
    {
      category: FAQCategory.beneficiaries,
      question: {
        type: 'paragraph',
        content: 'How do I become a beneficiary?',
      },
      answer: {
        type: 'paragraph',
        content:
          'You can become a beneficiary by registering through our platform or by being referred through one of our partner institutions. Once registered, your profile will be reviewed by administrators.',
      },
    },
    {
      category: FAQCategory.beneficiaries,
      question: {
        type: 'paragraph',
        content: 'Do beneficiaries need prior computer skills?',
      },
      answer: {
        type: 'paragraph',
        content:
          'No prior technical experience is required. Our programs are designed for beginners as well as intermediate learners, and training is adapted to different skill levels.',
      },
    },
    {
      category: FAQCategory.projects,
      question: {
        type: 'paragraph',
        content: 'What types of projects does GoGirls ICT run?',
      },
      answer: {
        type: 'paragraph',
        content:
          'We run projects focused on digital literacy, coding, online safety, data skills, leadership, and community-based ICT solutions that address real social challenges.',
      },
    },
    {
      category: FAQCategory.projects,
      question: {
        type: 'paragraph',
        content: 'Can institutions collaborate on projects?',
      },
      answer: {
        type: 'paragraph',
        content:
          'Yes. Schools, NGOs, community groups, and government institutions can collaborate with us on projects by contacting our team or submitting a partnership request.',
      },
    },
    {
      category: FAQCategory.events,
      question: {
        type: 'paragraph',
        content: 'How can I register for GoGirls ICT events?',
      },
      answer: {
        type: 'paragraph',
        content:
          'Event registration details are published on the Events page. Some events require prior registration, while others are open to the public.',
      },
    },
    {
      category: FAQCategory.events,
      question: {
        type: 'paragraph',
        content: 'Are GoGirls ICT events free?',
      },
      answer: {
        type: 'paragraph',
        content:
          'Most of our events are free of charge, especially those aimed at beneficiaries. Some specialized workshops may have limited slots or require institutional sponsorship.',
      },
    },
    {
      category: FAQCategory.reports,
      question: {
        type: 'paragraph',
        content: 'What kind of reports are published on the platform?',
      },
      answer: {
        type: 'paragraph',
        content:
          'We publish project reports, training summaries, research insights, and impact assessments that document our activities and outcomes.',
      },
    },
    {
      category: FAQCategory.reports,
      question: {
        type: 'paragraph',
        content: 'Can reports be downloaded?',
      },
      answer: {
        type: 'paragraph',
        content:
          'Yes. Many reports are available for download in PDF format. Download and access counts help us understand which resources are most useful.',
      },
    },
    {
      category: FAQCategory.institutions,
      question: {
        type: 'paragraph',
        content: 'What types of institutions work with GoGirls ICT?',
      },
      answer: {
        type: 'paragraph',
        content:
          'We collaborate with schools, community organizations, NGOs, faith-based organizations, and government institutions that support education and digital empowerment.',
      },
    },
    {
      category: FAQCategory.technnology,
      question: {
        type: 'paragraph',
        content: 'What technologies are taught in GoGirls ICT programs?',
      },
      answer: {
        type: 'paragraph',
        content:
          'Our programs cover basic computer skills, internet safety, productivity tools, coding fundamentals, data literacy, and emerging digital technologies relevant to community development.',
      },
    },
  ];

  for (const faq of faqs) {
    const created = await prisma.fAQ.create({
      data: {
        question: faq.question,
        answer: faq.answer,
        category: faq.category,
        publishStatus: PublishStatus.published,

        createdById: creator.id,
        updatedById: creator.id,
        approvedById: creator.id,
      },
    });

    console.log(`✅ FAQ seeded: ${faq.question.content}`);
  }
}

seedFAQs()
  .then(async () => {
    console.log('✅✅ All FAQs seeded successfully');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ FAQ seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
