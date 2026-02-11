import { NextRequest, NextResponse } from 'next/server';
import dayjs from 'dayjs';

const FETCH_MINUTES_TTL = 10; // minutes to consider DB fresh for YouTube videos (testing)
const MAX_RESULTS = 50; // how many videos to request/store

function makeResult(videos: any[], lastFetched: Date | null) {
  return { data: videos, lastFetched: lastFetched ?? null };
}

export async function GET(_req: NextRequest) {
  // lazy-import prisma so the Next build does not try to bundle Node-only modules (pg, dns, etc.)
  const { prisma } = await import('@/db/prisma');

  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

  if (!API_KEY || !CHANNEL_ID) {
    console.error('Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID');
    return NextResponse.json(
      { error: 'YouTube API key or channel ID not configured' },
      { status: 500 }
    );
  }

  // 1) Prefer DB: return cached videos if present
  let videosInDb: any[] = [];
  let metaLastFetched: Date | null = null;
  try {
    videosInDb = await prisma.youtube.findMany({
      orderBy: { publishedAt: 'desc' },
      take: MAX_RESULTS,
    });

    const meta = await prisma.youTubeCacheMeta.findUnique({ where: { id: 1 } });
    metaLastFetched = meta?.lastFetched ?? null;

    if (Array.isArray(videosInDb) && videosInDb.length > 0) {
      return NextResponse.json(makeResult(videosInDb, metaLastFetched), { 
        status: 200,
        headers: { 'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=3600' },
      });
    }
  } catch (err) {
    console.warn('Failed to read videos/meta from DB, will attempt to fetch from YouTube', err);
    // fall through to fetching
  }

  // 2) If DB empty, consult meta.lastFetched (minutes TTL) to avoid hitting YouTube too often
  try {
    const meta = await prisma.youTubeCacheMeta.findUnique({ where: { id: 1 } });
    const lastFetched = meta?.lastFetched ?? null;
    const needsFetch =
      !lastFetched || dayjs().diff(dayjs(lastFetched), 'minute') >= FETCH_MINUTES_TTL;

    if (!needsFetch) {
      // Recently fetched but DB empty -> return empty with lastFetched (so caller knows when last attempt was)
      return NextResponse.json(makeResult([], lastFetched), { 
        status: 200,
        headers: { 'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=3600' },
      });
    }
  } catch (err) {
    console.warn('Failed to read youTubeCacheMeta, proceeding to fetch', err);
    // proceed to fetch
  }

  // 3) Fetch from YouTube: search for recent videos, then fetch details
  try {
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${encodeURIComponent(
      API_KEY
    )}&channelId=${encodeURIComponent(
      CHANNEL_ID
    )}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&type=video`;

    const searchRes = await fetch(searchUrl);
    if (!searchRes.ok) {
      const body = await searchRes.text().catch(() => '');
      throw new Error(`YouTube search API error: ${searchRes.status} ${body}`);
    }
    const searchJson = await searchRes.json();
    const items = Array.isArray(searchJson.items) ? searchJson.items : [];

    const videoIds = items
      .map((it: any) => it?.id?.videoId)
      .filter(Boolean)
      .slice(0, MAX_RESULTS) as string[];

    if (videoIds.length === 0) {
      // No videos found. Do NOT delete DB; return empty result.
      console.warn('YouTube search returned no video IDs.');
      return NextResponse.json(makeResult([], null), { 
        status: 200,
        headers: { 'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=3600' },
      });
    }

    const videosUrl = `https://www.googleapis.com/youtube/v3/videos?key=${encodeURIComponent(
      API_KEY
    )}&id=${encodeURIComponent(videoIds.join(','))}&part=snippet,contentDetails,statistics`;

    const videosRes = await fetch(videosUrl);
    if (!videosRes.ok) {
      const body = await videosRes.text().catch(() => '');
      throw new Error(`YouTube videos API error: ${videosRes.status} ${body}`);
    }
    const videosJson = await videosRes.json();
    const videoItems = Array.isArray(videosJson.items) ? videosJson.items : [];

    if (videoItems.length === 0) {
      throw new Error('YouTube videos endpoint returned no items');
    }

    // 4) Normalize and persist videos into DB (model name: Youtube)
    const now = new Date();
    const toSave = videoItems.map((item: any) => {
      const id = String(item.id);
      const snippet = item.snippet ?? {};
      const statistics = item.statistics ?? {};
      const contentDetails = item.contentDetails ?? {};
      const thumbnail =
        (
          snippet.thumbnails &&
          (snippet.thumbnails.high || snippet.thumbnails.medium || snippet.thumbnails.default)
        )?.url ?? '';

      return {
        id,
        title: snippet.title ?? '',
        description: snippet.description ?? '',
        thumbnail: thumbnail ?? '',
        publishedAt: snippet.publishedAt ? new Date(snippet.publishedAt) : now,
        viewCount: statistics?.viewCount ? Number(statistics.viewCount) : null,
        likeCount: statistics?.likeCount ? Number(statistics.likeCount) : null,
        duration: contentDetails?.duration ?? '',
        fetchedAt: now,
      };
    });

    if (toSave.length === 0) {
      console.warn('No video items to save after normalization.');
      // Do not update meta; return empty result so DB is preserved
      return NextResponse.json(makeResult([], null), { 
        status: 200,
        headers: { 'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=3600' },
      });
    }

    try {
      // Replace existing rows atomically
      await prisma.$transaction([
        prisma.youtube.deleteMany({}),
        prisma.youtube.createMany({ data: toSave, skipDuplicates: true }),
      ]);
    } catch (err) {
      console.error('Prisma write error while saving youtube videos', err);
      // continue so we can try to read DB below
    }

    // 5) Update cache meta timestamp after successful save (best-effort)
    try {
      await prisma.youTubeCacheMeta.upsert({
        where: { id: 1 },
        update: { lastFetched: now },
        create: { id: 1, lastFetched: now },
      });
    } catch (e) {
      console.warn('Failed to upsert youTubeCacheMeta', e);
    }

    // 6) Read final videos from DB and return
    try {
      const final = await prisma.youtube.findMany({
        orderBy: { publishedAt: 'desc' },
        take: MAX_RESULTS,
      });
      return NextResponse.json(makeResult(final, now), { 
        status: 200,
        headers: { 'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=3600' },
      });
    } catch (err) {
      console.warn('Failed to read videos from DB after insert, returning normalized list', err);
      return NextResponse.json(makeResult(toSave, now), { 
        status: 200,
        headers: { 'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=3600' },
      });
    }
  } catch (err: any) {
    console.error('Error fetching YouTube videos:', err);

    // Fallback: serve existing DB videos if any
    try {
      const fallback = await prisma.youtube.findMany({
        orderBy: { publishedAt: 'desc' },
        take: MAX_RESULTS,
      });
      if (fallback && fallback.length > 0) {
        const meta = await prisma.youTubeCacheMeta.findUnique({ where: { id: 1 } });
        const lastFetched = meta?.lastFetched ?? null;
        return NextResponse.json(makeResult(fallback, lastFetched), { 
          status: 200,
          headers: { 'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=3600' },
        });
      }
    } catch (dbErr) {
      console.warn('Failed to read fallback videos from DB', dbErr);
    }

    return NextResponse.json(
      { error: 'Failed to fetch YouTube videos: ' + (err?.message ?? String(err)) },
      { status: 500,
        headers: { 'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=3600' },
      }
    );
  }
}
