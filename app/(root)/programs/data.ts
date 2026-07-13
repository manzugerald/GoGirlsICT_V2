import { prisma } from '@/db/prisma';

export async function getProgramsPageData() {
  const programs = await prisma.project.findMany({
    where: {
      publishStatus: 'published',
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      createdBy: {
        select: {
          username: true,
        },
      },
      approvedBy: {
        select: {
          username: true,
        },
      },
      updatedBy: {
        select: {
          username: true,
        },
      },

      // One optional report per project.
      reports: true,

      // Only public/published events are used in public statistics.
      events: {
        where: {
          publishStatus: 'published',
          deletedAt: null,
        },
        orderBy: {
          eventStartDate: 'desc',
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
    (total, program) => total + (program.reports ? 1 : 0),
    0
  );

  // Send only the fields needed by the client Chart.js component.
  const analyticsPrograms = programs.map((program) => ({
    id: program.id,
    createdAt: program.createdAt.toISOString(),
    projectStatus: program.projectStatus,
  }));

  return {
    programs,
    analyticsPrograms,
    featuredProgram: programs[0] ?? null,

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
    include: {
      createdBy: {
        select: {
          username: true,
        },
      },
      approvedBy: {
        select: {
          username: true,
        },
      },
      updatedBy: {
        select: {
          username: true,
        },
      },

      // Singular optional report.
      reports: true,

      events: {
        where: {
          publishStatus: 'published',
          deletedAt: null,
        },
        orderBy: {
          eventStartDate: 'asc',
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
    include: {
      reports: true,
      events: {
        where: {
          publishStatus: 'published',
          deletedAt: null,
        },
      },
    },
  });
}