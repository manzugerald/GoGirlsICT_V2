import { prisma } from '@/db/prisma';

export async function getProgramsPageData() {
  const programs = await prisma.project.findMany({
    where: {
      publishStatus: 'published',
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      title: true,
      slug: true,
      images: true,
      projectStatus: true,
      createdAt: true,

      // Only counts are needed on the list page.
      reports: {
        where: {
          publishStatus: 'published',
        },
        select: {
          id: true,
        },
      },

      events: {
        where: {
          publishStatus: 'published',
          deletedAt: null,
        },
        select: {
          id: true,
        },
      },
    },
  });

  const activePrograms = programs.filter(
    (program) => program.projectStatus === 'active'
  );

  const completedPrograms = programs.filter(
    (program) => program.projectStatus === 'completed'
  );

  const pausedPrograms = programs.filter(
    (program) => program.projectStatus === 'paused'
  );

  const totalEvents = programs.reduce(
    (total, program) => total + program.events.length,
    0
  );

  const totalReports = programs.reduce(
    (total, program) => total + program.reports.length,
    0
  );

  return {
    programs,

    stats: {
      total: programs.length,
      active: activePrograms.length,
      completed: completedPrograms.length,
      paused: pausedPrograms.length,
      events: totalEvents,
      reports: totalReports,
    },
  };
}

export async function getProgramBySlugOrId(slugOrId: string) {
  const numericId = Number(slugOrId);
  const isNumericId = Number.isInteger(numericId) && numericId > 0;

  return prisma.project.findFirst({
    where: {
      publishStatus: 'published',
      OR: [
        {
          slug: slugOrId,
        },
        ...(isNumericId
          ? [
              {
                id: numericId,
              },
            ]
          : []),
      ],
    },
    select: {
      id: true,
      title: true,
      slug: true,
      content: true,
      images: true,
      projectStatus: true,
      createdAt: true,

      // A project can have any number of published reports.
      reports: {
        where: {
          publishStatus: 'published',
        },
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          title: true,
          slug: true,
          images: true,
          createdAt: true,
        },
      },

      events: {
        where: {
          publishStatus: 'published',
          deletedAt: null,
        },
        orderBy: {
          eventStartDate: 'asc',
        },
        select: {
          id: true,
          eventTitle: true,
          slug: true,
          eventBanner: true,
          eventStartDate: true,
        },
      },
    },
  });
}

export async function getRelatedPrograms(currentProgramId: number) {
  return prisma.project.findMany({
    where: {
      publishStatus: 'published',
      id: {
        not: currentProgramId,
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 3,
    select: {
      id: true,
      title: true,
      slug: true,
      images: true,
      projectStatus: true,
      createdAt: true,
    },
  });
}
