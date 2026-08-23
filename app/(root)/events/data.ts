import { prisma } from '@/db/prisma';

export async function getEventBySlugOrId(
  slugOrId: string
) {
  const numericId = Number(slugOrId);

  const isNumericId =
    Number.isInteger(numericId) &&
    numericId > 0;

  return prisma.event.findFirst({
    where: {
      publishStatus: 'published',
      deletedAt: null,

      OR: [
        { slug: slugOrId },

        ...(isNumericId
          ? [{ id: numericId }]
          : []),
      ],
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
}

export type EventDetail = NonNullable<
  Awaited<
    ReturnType<
      typeof getEventBySlugOrId
    >
  >
>;
