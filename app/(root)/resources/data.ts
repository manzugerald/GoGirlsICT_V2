import { prisma } from '@/db/prisma';

export const RESOURCE_TYPES = [
  'podcasts',
  'talkshows',
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
    : 'podcasts';
}

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
      poster: true,
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

export async function getRadioTalkshows() {
  return prisma.radioTalkshow.findMany({
    where: {
      publishStatus: 'published',
    },

    orderBy: {
      date: 'desc',
    },

    select: {
      id: true,
      title: true,
      date: true,
      image: true,
      poster: true,
      audioUrl: true,
      waveform: true,
    },
  });
}

export type TalkshowSummary =
  Awaited<
    ReturnType<typeof getRadioTalkshows>
  >[number];

/**
 * The /resources hero banner for a tab uses the poster of the most
 * recently published item in that category — skipping over any
 * without one, since the field is optional and a stray missing poster
 * on the very latest episode shouldn't blank the whole banner.
 */
export function latestPoster(
  items: { poster?: string | null }[]
): string | null {
  return (
    items.find((item) => Boolean(item.poster))?.poster ?? null
  );
}
