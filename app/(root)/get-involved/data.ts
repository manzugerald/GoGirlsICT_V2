import { prisma } from '@/db/prisma';

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
