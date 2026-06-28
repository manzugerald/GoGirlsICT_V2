import prisma from './prisma';
import { PrismaClient, EventStatus, AttendanceType, PublishStatus } from '@/lib/generated/prisma';

// const prisma = new PrismaClient();

// Helper to shift dates
function addDays(days: number) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d;
}

async function seedEvents() {
  // Use Manzu as creator
  const creator = await prisma.user.findUnique({
    where: { username: 'manzu' },
  });

  if (!creator) {
    throw new Error('❌ User "manzu" not found. Seed users first.');
  }

  const events = [
    {
      slug: 'girls-digital-literacy-orientation',
      eventTitle: 'Girls Digital Literacy Bootcamp – Orientation',

      eventDescription: {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'This orientation marks the official start of the Girls Digital Literacy Bootcamp. Participants will be introduced to the program structure, learning outcomes, mentors, and community guidelines.',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'The session focuses on building confidence, understanding digital tools, and creating a safe and inclusive learning environment for young women.',
              },
            ],
          },
        ],
      },

      eventDetails: {
        agenda: [
          'Welcome & Introductions',
          'Program Overview',
          'Digital Safety Guidelines',
          'Q&A Session',
        ],
        facilitators: ['GoGirls ICT Team'],
        notes: 'Participants are encouraged to bring notebooks and personal devices if available.',
      },

      eventLocation: 'Juba Youth Community Center',

      // ✅ Shared banner
      eventBanner: '/assets/images/events/events-banner.jpg',

      // ✅ Event-specific image
      eventImages: ['/assets/images/events/event-1.png'],

      // ✅ Calendar PDF
      eventFile: '/assets/files/events/event-calendar-1.pdf',

      eventTags: ['digital literacy', 'bootcamp', 'orientation'],

      eventStartDate: addDays(3),
      eventEndDate: addDays(3),

      eventStatus: EventStatus.pending,
      publishStatus: PublishStatus.published,
      eventAttendance: AttendanceType.registration_required,
      maxAttendees: 60,
    },

    {
      slug: 'women-in-tech-mentorship-circle',
      eventTitle: 'Women in Technology Mentorship Circle',

      eventDescription: {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'The Women in Technology Mentorship Circle is a collaborative space where aspiring technologists engage with experienced mentors to discuss career growth, leadership, and resilience.',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'This event encourages peer learning, open dialogue, and long-term mentorship relationships.',
              },
            ],
          },
        ],
      },

      eventDetails: {
        format: 'Roundtable discussions',
        mentors: ['Senior Software Engineers', 'Data Scientists'],
        focusAreas: ['Career paths', 'Skill development', 'Work-life balance'],
      },

      eventLocation: 'Women in Technology Academy',

      eventBanner: '/assets/images/events/events-banner.jpg',
      eventImages: ['/assets/images/events/event-2.png'],
      eventFile: '/assets/files/events/event-calendar-2.pdf',

      eventTags: ['mentorship', 'women', 'technology'],

      eventStartDate: addDays(14),
      eventEndDate: addDays(14),

      eventStatus: EventStatus.pending,
      publishStatus: PublishStatus.published,
      eventAttendance: AttendanceType.public,
      maxAttendees: 120,
    },

    {
      slug: 'community-digital-safety-training',
      eventTitle: 'Community Digital Safety & Online Citizenship Training',

      eventDescription: {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'This training equips community members with essential knowledge on online safety, responsible digital behavior, and protection against misinformation.',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'The session is designed for educators, parents, and youth leaders to promote safer digital communities.',
              },
            ],
          },
        ],
      },

      eventDetails: {
        topics: [
          'Cyberbullying awareness',
          'Privacy protection',
          'Digital rights and responsibilities',
        ],
        targetAudience: ['Parents', 'Teachers', 'Youth Leaders'],
      },

      eventLocation: 'Bright Future Primary School – Main Hall',

      eventBanner: '/assets/images/events/events-banner.jpg',
      eventImages: ['/assets/images/events/event-3.png'],
      eventFile: '/assets/files/events/event-calendar-3.pdf',

      eventTags: ['online safety', 'digital citizenship', 'community'],

      eventStartDate: addDays(30),
      eventEndDate: addDays(30),

      eventStatus: EventStatus.pending,
      publishStatus: PublishStatus.published,
      eventAttendance: AttendanceType.public,
      maxAttendees: 200,
    },
  ];

  for (const evt of events) {
    const created = await prisma.event.upsert({
      where: { slug: evt.slug },
      update: {
        ...evt,
        updatedById: creator.id,
        updatedAt: new Date(),
      },
      create: {
        ...evt,
        createdById: creator.id,
        updatedById: creator.id,
      },
    });

    console.log(`✅ Event seeded: ${created.eventTitle}`);
  }
}

seedEvents()
  .then(async () => {
    console.log('✅✅ All 3 events seeded successfully');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Event seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
