import { prisma } from '@/db/prisma';

export const ABOUT_SECTIONS = [
  'about',
  'partners',
  'team',
] as const;

export type AboutSection =
  (typeof ABOUT_SECTIONS)[number];

export const aboutNavigation: Array<{
  id: AboutSection;
  label: string;
  href: string;
  description: string;
}> = [
  {
    id: 'about',
    label: 'About Us',
    href: '/about#about',
    description:
      'Our story, vision, mission, focus, and values.',
  },
  {
    id: 'partners',
    label: 'Partners',
    href: '/about#partners',
    description:
      'The institutions supporting and implementing our work.',
  },
  {
    id: 'team',
    label: 'Our Team',
    href: '/about#team',
    description:
      'Meet our advisory board, core team, and mentors.',
  },
];

/**
 * Converts a private email address into two safe pieces.
 *
 * The original email address is never sent to the client.
 *
 * example@example.com becomes:
 *
 * {
 *   local: 'example',
 *   domain: 'example.com'
 * }
 */
function protectEmail(email: string | null) {
  if (!email) {
    return null;
  }

  const separatorIndex =
    email.indexOf('@');

  if (
    separatorIndex <= 0 ||
    separatorIndex === email.length - 1
  ) {
    return null;
  }

  return {
    local: email.slice(
      0,
      separatorIndex
    ),

    domain: email.slice(
      separatorIndex + 1
    ),
  };
}

export async function getAboutPageData() {
  const [
    content,
    teamRecords,
    partners,
  ] = await Promise.all([
    prisma.homePage.findFirst({
      orderBy: {
        createdAt: 'desc',
      },

      select: {
        id: true,
        about: true,
        vision: true,
        mission: true,
        focus: true,
        coreValues: true,
        banner: true,
      },
    }),

    prisma.team.findMany({
      where: {
        isActive: true,
      },

      orderBy: {
        createdAt: 'asc',
      },

      select: {
        id: true,
        firstName: true,
        lastName: true,
        profileImage: true,
        about: true,
        email: true,
        phone: true,
        linkedInUrl: true,
        facebookUrl: true,
        xUrl: true,
        websiteUrl: true,
      },
    }),

    prisma.institution.findMany({
      orderBy: [
        {
          institutionCategory: 'asc',
        },
        {
          name: 'asc',
        },
      ],

      select: {
        id: true,
        name: true,
        logo: true,
        institutionType: true,
        institutionCategory: true,
        email: true,
        phone: true,
        headName: true,

        locations: {
          select: {
            id: true,
            locationName: true,
          },
        },
      },
    }),
  ]);

  /**
   * Remove the raw email address before team records
   * are passed into client components.
   */
  const teamMembers =
    teamRecords.map(
      ({
        email,
        ...member
      }) => ({
        ...member,

        protectedEmail:
          protectEmail(email),
      })
    );

  return {
    content,
    teamMembers,
    partners,
  };
}

export type AboutPageData =
  Awaited<
    ReturnType<typeof getAboutPageData>
  >;

export type AboutContent =
  NonNullable<
    AboutPageData['content']
  >;

export type TeamMember =
  AboutPageData['teamMembers'][number];

export type Partner =
  AboutPageData['partners'][number];