import { prisma } from '@/db/prisma';

export async function getReportsPageData() {
  const reports =
    await prisma.report.findMany({
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
        files: true,
        accessCount: true,
        downloadCount: true,
        createdAt: true,

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
    reports,
  };
}

export async function getReportBySlugOrId(
  slugOrId: string
) {
  const numericId = Number(slugOrId);

  const isNumericId =
    Number.isInteger(numericId) &&
    numericId > 0;

  return prisma.report.findFirst({
    where: {
      publishStatus: 'published',

      OR: [
        { slug: slugOrId },

        ...(isNumericId
          ? [{ id: numericId }]
          : []),
      ],
    },

    select: {
      id: true,
      title: true,
      slug: true,
      images: true,
      files: true,
      accessCount: true,
      downloadCount: true,
      createdAt: true,

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

export type ReportsPageData =
  Awaited<
    ReturnType<
      typeof getReportsPageData
    >
  >;

export type ReportSummary =
  ReportsPageData['reports'][number];

export type ReportDetail = NonNullable<
  Awaited<
    ReturnType<
      typeof getReportBySlugOrId
    >
  >
>;

export async function getPodcasts() {
  return prisma.podcast.findMany({
    where: {
      publishStatus: 'published',
    },

    orderBy: {
      publishedAt: 'desc',
    },

    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      image: true,
      audioUrl: true,
      waveform: true,
      publishedAt: true,
      accessCount: true,
    },
  });
}

export type PodcastSummary =
  Awaited<
    ReturnType<typeof getPodcasts>
  >[number];
