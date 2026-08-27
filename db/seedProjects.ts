// seedProjects.ts
import prisma from './prisma';
import { PrismaClient, Status, PublishStatus } from '@/lib/generated/prisma';
import { extractPlainText, normalizeTiptapDoc } from '@/lib/tiptap';

// const prisma = new PrismaClient();

/**
 * Generate TipTap-style JSON (rich, long, realistic).
 * Matches a common TipTap doc schema: { type: 'doc', content: [...] }.
 */
function buildLongProjectContent(args: {
  title: string;
  theme: string;
  location: string;
  duration: string;
  intro?: string;
  problem?: string;
  approach?: string;
  outcomes: string[];
  activities: string[];
  partners: string[];
  risks: string[];
  sustainability: string[];
}) {
  const {
    title,
    theme,
    location,
    duration,
    intro,
    problem,
    approach,
    outcomes,
    activities,
    partners,
    risks,
    sustainability,
  } = args;

  const paragraph = (text: string) => ({
    type: 'paragraph',
    content: [{ type: 'text', text }],
  });

  const heading = (text: string, level: 2 | 3 | 4 | 1 = 2) => ({
    type: 'heading',
    attrs: { level },
    content: [{ type: 'text', text }],
  });

  const bulletList = (items: string[]) => ({
    type: 'bulletList',
    content: items.map((it) => ({
      type: 'listItem',
      content: [paragraph(it)],
    })),
  });

  const orderedList = (items: string[]) => ({
    type: 'orderedList',
    content: items.map((it) => ({
      type: 'listItem',
      content: [paragraph(it)],
    })),
  });

  const blockquote = (text: string) => ({
    type: 'blockquote',
    content: [paragraph(text)],
  });

  const divider = () => ({ type: 'horizontalRule' });

  return {
    type: 'doc',
    content: [
      heading(title, 1),

      paragraph(
        intro ??
          `This project focuses on ${theme} in ${location}. It is designed as a practical, community-rooted initiative that delivers measurable outcomes while strengthening the local ecosystem around education, skills, and opportunity.`
      ),
      paragraph(
        `Duration: ${duration}. Implementation blends mentorship, structured learning, and real-world problem solving, with an emphasis on inclusion and long-term sustainability.`
      ),

      divider(),

      heading('Background and context', 2),
      paragraph(
        problem ??
          `Many learners face layered barriers: limited access to devices, inconsistent connectivity, social expectations that discourage participation (especially for girls and women), and limited opportunities to practice in safe environments. These barriers reduce confidence and slow skill development, even when motivation is high.`
      ),
      paragraph(
        `To address this, the project uses a staged learning path: foundational skills → guided practice → peer support → applied projects. The goal is not only to train individuals, but to strengthen community capacity through reusable materials and local mentorship.`
      ),

      heading('Project objectives', 2),
      bulletList([
        'Increase practical digital skills using tasks that mirror real work and real life.',
        'Build confidence and leadership through mentorship and peer learning.',
        'Create visible outputs (projects, portfolios, demos) that improve employability.',
        'Strengthen partnerships so learning continues beyond the cohort.',
      ]),

      heading('Implementation approach', 2),
      paragraph(
        approach ??
          `Delivery is modular. Each module includes a short lesson, a guided exercise, independent practice, and reflection. Mentors provide feedback weekly. Participants complete a capstone mini-project linked to a community need.`
      ),
      orderedList([
        'Onboarding and baseline assessment (skills + confidence).',
        'Core training modules with hands-on exercises.',
        'Mentoring circles and weekly check-ins.',
        'Capstone mini-projects with peer review.',
        'Showcase day and learning review.',
      ]),

      heading('Key activities', 2),
      bulletList(activities),

      heading('Expected outcomes', 2),
      bulletList(outcomes),

      heading('Partnerships and stakeholders', 2),
      paragraph(
        `Sustainable impact requires collaboration. This project coordinates with stakeholders to align training with local needs and realistic pathways for participants.`
      ),
      bulletList(partners),

      heading('Monitoring, learning, and evidence', 2),
      paragraph(
        `We track participation, assignment completion, confidence growth, and skill acquisition using a simple rubric. We also collect stories of change and maintain a small portfolio archive (with participant consent) for showcasing progress and outcomes.`
      ),
      blockquote(
        `“I used to think technology was only for other people. Now I can build something and explain it.” — participant reflection`
      ),

      heading('Risks and mitigation', 2),
      paragraph(
        `We anticipate operational and social risks. Each risk has mitigation actions built into the plan.`
      ),
      bulletList(risks),

      heading('Sustainability plan', 2),
      paragraph(
        `Sustainability is supported through local capacity building, reusable learning materials, and a mentorship model that grows with each cohort. The goal is for trained participants to become peer facilitators and community champions.`
      ),
      bulletList(sustainability),

      heading('Reference link', 3),
      {
        type: 'paragraph',
        content: [
          { type: 'text', text: 'More updates: ' },
          {
            type: 'text',
            text: 'GoGirls ICT',
            marks: [{ type: 'link', attrs: { href: 'https://gogirlsict.org' } }],
          },
        ],
      },
    ],
  };
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

async function seedProjects() {
  // ✅ Use Manzu as creator + approver
  const creator = await prisma.user.findUnique({
    where: { username: 'manzu' },
  });

  if (!creator) {
    throw new Error('❌ Creator user "manzu" not found. Seed users first.');
  }

  const projects: Array<{
    title: string;
    projectStatus: Status;
    publishStatus: PublishStatus;
    images: string[];
    meta: { theme: string; location: string; duration: string };
    contentOverrides?: Partial<Parameters<typeof buildLongProjectContent>[0]>;
  }> = [
    {
      title: 'Girls Digital Literacy Bootcamp',
      projectStatus: Status.active,
      publishStatus: PublishStatus.published,
      images: ['/assets/images/projects/project-1.jpg', '/assets/images/projects/project-2.jpg'],
      meta: {
        theme: 'digital literacy and foundational computer skills',
        location: 'Juba, South Sudan',
        duration: '10 weeks',
      },
      contentOverrides: {
        intro:
          'A practical bootcamp designed to help learners confidently use computers, create documents, communicate online, and practice safe internet habits—supported by mentors and a strong peer community.',
      },
    },
    {
      title: 'Community STEM Mentorship Circle',
      projectStatus: Status.active,
      publishStatus: PublishStatus.published,
      images: ['/assets/images/projects/project-3.jpg'],
      meta: {
        theme: 'mentorship, leadership, and STEM role-modeling',
        location: 'Wau, South Sudan',
        duration: '6 months',
      },
      contentOverrides: {
        problem:
          'Many talented students lose momentum because they lack role models, guidance, and a safe space to ask questions. This circle creates regular, structured mentorship that normalizes ambition and helps learners build a clear learning path.',
      },
    },
    {
      title: 'Women in Tech Portfolio Project Lab',
      projectStatus: Status.active,
      publishStatus: PublishStatus.published,
      images: ['/assets/images/projects/project-4.jpg'],
      meta: {
        theme: 'portfolio building with web development basics',
        location: 'Bor, South Sudan',
        duration: '12 weeks',
      },
      contentOverrides: {
        approach:
          'Participants learn by building. Each learner produces at least one portfolio-ready project: a simple website, a profile page, or a small community information page, plus a short write-up explaining what they built and why.',
      },
    },
    {
      title: 'School Computer Club Activation',
      projectStatus: Status.completed,
      publishStatus: PublishStatus.published,
      images: ['/assets/images/projects/project-5.jpg'],
      meta: {
        theme: 'after-school computing clubs and peer-led learning',
        location: 'Juba, South Sudan',
        duration: '1 school term',
      },
    },
    {
      title: 'Safe Internet & Digital Citizenship Program',
      projectStatus: Status.active,
      publishStatus: PublishStatus.published,
      images: ['/assets/images/projects/project-6.jpg'],
      meta: {
        theme: 'online safety, privacy, and responsible digital behavior',
        location: 'Nimule, South Sudan',
        duration: '8 weeks',
      },
    },
    {
      title: 'Basic Data Skills for Community Advocates',
      projectStatus: Status.active,
      publishStatus: PublishStatus.draft,
      images: ['/assets/images/projects/project-7.jpg'],
      meta: {
        theme: 'spreadsheets, data storytelling, and evidence-based advocacy',
        location: 'Yei, South Sudan',
        duration: '6 weeks',
      },
      contentOverrides: {
        approach:
          'Learners practice on realistic datasets (attendance, outreach logs, service delivery counts) and learn how to clean, summarize, and tell a clear story using charts and short narrative insights.',
      },
    },
    {
      title: 'Women Entrepreneurs Tech Enablement',
      projectStatus: Status.active,
      publishStatus: PublishStatus.published,
      images: ['/assets/images/projects/project-8.jpg'],
      meta: {
        theme: 'mobile tools and business productivity skills',
        location: 'Aweil, South Sudan',
        duration: '10 weeks',
      },
    },
    {
      title: 'Intro to Coding for High School Girls',
      projectStatus: Status.completed,
      publishStatus: PublishStatus.published,
      images: ['/assets/images/projects/project-9.jpg'],
      meta: {
        theme: 'intro programming, logic, and small projects',
        location: 'Torit, South Sudan',
        duration: '8 weeks',
      },
    },
    {
      title: 'Digital Media & Storytelling for Social Impact',
      projectStatus: Status.active,
      publishStatus: PublishStatus.published,
      images: ['/assets/images/projects/project-10.jpg'],
      meta: {
        theme: 'media skills, storytelling, and advocacy',
        location: 'Malakal, South Sudan',
        duration: '6 weeks',
      },
    },
    {
      title: 'Community Tech Help Desk Pilot',
      projectStatus: Status.paused,
      publishStatus: PublishStatus.draft,
      images: ['/assets/images/projects/project-11.jpg'],
      meta: {
        theme: 'basic IT support and community troubleshooting',
        location: 'Rumbek, South Sudan',
        duration: '3 months',
      },
    },
    {
      title: 'Young Women Leadership in Technology Fellowship',
      projectStatus: Status.active,
      publishStatus: PublishStatus.published,
      images: ['/assets/images/projects/project-12.jpg'],
      meta: {
        theme: 'leadership + tech learning + mentoring',
        location: 'Juba, South Sudan',
        duration: '9 months',
      },
    },
    {
      title: 'Digital Inclusion for Rural Learners',
      projectStatus: Status.active,
      publishStatus: PublishStatus.draft,
      images: ['/assets/images/projects/project-2.jpg'],
      meta: {
        theme: 'access, inclusion, and offline-first learning materials',
        location: 'Kapoeta, South Sudan',
        duration: '4 months',
      },
      contentOverrides: {
        risks: [
          'Connectivity constraints → offline-first packs, printed guides, and periodic sync days.',
          'Transport and distance barriers → cluster sessions by locality, use local facilitators.',
          'Device shortages → shared devices + rotating practice sessions.',
          'Dropout risk → cohort support, mentorship check-ins, and flexible schedules.',
        ],
      },
    },
  ];

  for (const p of projects) {
    const slug = slugify(p.title);

    const baseArgs = {
      title: p.title,
      theme: p.meta.theme,
      location: p.meta.location,
      duration: p.meta.duration,
      outcomes: [
        'At least 70% of participants demonstrate improved confidence and task completion.',
        'Participants produce a tangible output (portfolio item, small project, or community demo).',
        'A mentorship network is strengthened through structured check-ins and peer support.',
        'A short monitoring summary is produced for internal learning and stakeholder reporting.',
      ],
      activities: [
        'Orientation and baseline assessment (skills + confidence).',
        'Hands-on sessions with practice tasks aligned to daily needs.',
        'Mentoring circles with weekly goals and feedback.',
        'Capstone mini-projects tied to real community priorities.',
        'Showcase day: presentations, reflection, and next-step planning.',
      ],
      partners: [
        'Local schools and community centers (venue + outreach).',
        'Women-led groups (mobilization + mentorship support).',
        'Local NGOs and education offices (coordination + referrals).',
        'Volunteer mentors (technical guidance and role modeling).',
      ],
      risks: [
        'Connectivity constraints → offline-first materials and downloadable resources.',
        'Low attendance due to responsibilities → flexible schedules + cohort support.',
        'Device shortages → group work, shared devices, and printed exercises.',
        'Confidence barriers → staged learning and mentorship reinforcement.',
      ],
      sustainability: [
        'Train peer facilitators (train-the-trainer) from each cohort.',
        'Maintain reusable learning packs and local curriculum copies.',
        'Partner with schools/community hubs for continued sessions.',
        'Support alumni groups and periodic refresher meetups.',
      ],
    };

    const content = buildLongProjectContent({
      ...baseArgs,
      ...(p.contentOverrides ?? {}),
    });

    const created = await prisma.project.upsert({
      where: { slug },
      update: {
        title: normalizeTiptapDoc(p.title),
        content,
        images: p.images, // ✅ jpg paths as you confirmed
        projectStatus: p.projectStatus,
        publishStatus: p.publishStatus,
        updatedById: creator.id,
        approvedById: creator.id,
        updatedAt: new Date(),
      },
      create: {
        title: normalizeTiptapDoc(p.title),
        slug,
        content,
        images: p.images,
        projectStatus: p.projectStatus,
        publishStatus: p.publishStatus,
        createdById: creator.id,
        updatedById: creator.id,
        approvedById: creator.id,
      },
    });

    console.log(`✅ Project seeded: ${extractPlainText(created.title)} (${created.projectStatus})`);
  }
}

seedProjects()
  .then(async () => {
    console.log('✅✅ 12 projects seeded successfully');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Project seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
