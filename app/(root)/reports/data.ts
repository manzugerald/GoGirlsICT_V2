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
          },
        },
      },
    });

  return {
    reports,
  };
}

export type ReportsPageData =
  Awaited<
    ReturnType<
      typeof getReportsPageData
    >
  >;

export type ReportSummary =
  ReportsPageData['reports'][number];
