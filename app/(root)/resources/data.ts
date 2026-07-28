import { prisma } from '@/db/prisma';

export const RESOURCE_TYPES = [
  'reports',
] as const;

export type ResourceType =
  (typeof RESOURCE_TYPES)[number];

export function normalizeResourceType(
  value?: string | string[]
): ResourceType {
  const candidate = Array.isArray(value)
    ? value[0]
    : value;

  return RESOURCE_TYPES.includes(
    candidate as ResourceType
  )
    ? (candidate as ResourceType)
    : 'reports';
}

export async function getResourcesPageData() {
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
        files: true,
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

export type ResourcesPageData =
  Awaited<
    ReturnType<
      typeof getResourcesPageData
    >
  >;

export type ReportListItem =
  ResourcesPageData['reports'][number];