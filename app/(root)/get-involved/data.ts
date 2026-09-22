import { prisma } from '@/db/prisma';

export const GET_INVOLVED_SECTIONS = [
  'events',
  'volunteer',
  'reachout',
  'donate',
] as const;

export type GetInvolvedSection =
  (typeof GET_INVOLVED_SECTIONS)[number];

export function normalizeGetInvolvedSection(
  value?: string | string[]
): GetInvolvedSection {
  const candidate = Array.isArray(value)
    ? value[0]
    : value;

  return GET_INVOLVED_SECTIONS.includes(
    candidate as GetInvolvedSection
  )
    ? (candidate as GetInvolvedSection)
    : 'events';
}

export async function getGetInvolvedPageData() {
  const events =
    await prisma.event.findMany({
      where: {
        publishStatus: 'published',
        deletedAt: null,
      },

      orderBy: {
        eventStartDate: 'asc',
      },

      select: {
        id: true,
        slug: true,
        eventTitle: true,
        eventDescription: true,
        eventLocation: true,
        eventBanner: true,
        eventStartDate: true,
        eventEndDate: true,
        eventStatus: true,
        eventAttendance: true,
        maxAttendees: true,
        eventMode: true,

        project: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
      },
    });

  return {
    events,
  };
}

export type GetInvolvedPageData =
  Awaited<
    ReturnType<
      typeof getGetInvolvedPageData
    >
  >;

export type EventSummary =
  GetInvolvedPageData['events'][number];
