import { NextRequest, NextResponse } from 'next/server';
import dayjs from 'dayjs';
import { prisma } from '@/db/prisma';

// Reduced TTL for more frequent updates: 30 minutes (adjust as needed)
const FETCH_MINUTES_TTL = 600; // 10 hours - change this value to control cache duration

type FbApiPost = {
  id: string;
  message?: string;
  created_time?: string;
  permalink_url?: string;
  full_picture?: string;
  attachments?: any;
};

function makeResult(posts: any[], lastFetched: Date | null) {
  return { data: posts, lastFetched: lastFetched ?? null };
}

/**
 * Helper: try to extract an image URL from FB post object using several fallbacks:
 * - full_picture
 * - attachments.data[0].media.image.src
 * - attachments.data[0].subattachments.data[0].media.image.src
 */
function extractImageFromFbPost(p: any): string | null {
  if (!p) return null;
  if (p.full_picture) return String(p.full_picture);
  const att = p.attachments?.data;
  if (Array.isArray(att) && att.length > 0) {
    const first = att[0];
    if (first?.media?.image?.src) return String(first.media.image.src);
    const sub = first?.subattachments?.data;
    if (Array.isArray(sub) && sub.length > 0 && sub[0]?.media?.image?.src) {
      return String(sub[0].media.image.src);
    }
    if (first?.media?.image) {
      const img = first.media.image;
      if (img.src) return String(img.src);
    }
  }
  return null;
}

export async function GET(req: NextRequest) {
  const PAGE_ID = process.env.FB_PAGE_ID;
  const ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;

  if (!PAGE_ID || !ACCESS_TOKEN) {
    console.error('Facebook page ID or access token is missing');
    return NextResponse.json({ error: 'Facebook integration not configured' }, { status: 500 });
  }

  // Check if force refresh is requested via query param
  const { searchParams } = new URL(req.url);
  const forceRefresh = searchParams.get('refresh') === 'true';

  // 1) Read from DB first and check if cache is still valid
  let postsInDb: any[] = [];
  let metaLastFetched: Date | null = null;
  let needsFetch = forceRefresh; // Force fetch if requested

  try {
    const meta = await prisma.facebookCacheMeta.findUnique({ where: { id: 1 } });
    metaLastFetched = meta?.lastFetched ?? null;

    // Check if cache is expired
    if (!forceRefresh) {
      needsFetch =
        !metaLastFetched || dayjs().diff(dayjs(metaLastFetched), 'minute') >= FETCH_MINUTES_TTL;
    }

    // If cache is valid, return DB posts
    if (!needsFetch) {
      postsInDb = await prisma.facebookPost.findMany({
        orderBy: { createdTime: 'desc' },
        take: 10, // Limit to 10 most recent posts
      });

      if (postsInDb.length > 0) {
        console.log(
          `✅ Returning ${postsInDb.length} cached Facebook posts (last fetched: ${metaLastFetched})`
        );
        return NextResponse.json(makeResult(postsInDb, metaLastFetched));
      }
    }
  } catch (err) {
    console.warn('Failed to read posts/meta from DB, will fetch from Facebook API', err);
  }

  // 2) Fetch from Facebook Graph API
  console.log('🔄 Fetching fresh Facebook posts from API...');
  let fbData: any;
  try {
    const url = `https://graph.facebook.com/v19.0/${encodeURIComponent(
      PAGE_ID
    )}/posts?fields=id,message,created_time,permalink_url,full_picture,attachments{media,subattachments}&limit=10&access_token=${encodeURIComponent(
      ACCESS_TOKEN
    )}`;

    const fbRes = await fetch(url, {
      next: { revalidate: 0 }, // No Next.js caching
      cache: 'no-store', // No browser caching
    });

    if (!fbRes.ok) {
      const bodyText = await fbRes.text().catch(() => '');
      console.error('Facebook API returned non-OK:', fbRes.status, bodyText);

      // If fetch fails but we have old data, return it
      if (postsInDb.length > 0) {
        console.warn('⚠️ Using stale cache due to Facebook API error');
        return NextResponse.json(makeResult(postsInDb, metaLastFetched));
      }

      return NextResponse.json(
        { error: 'Facebook API returned an error', details: bodyText },
        { status: 502 }
      );
    }
    fbData = await fbRes.json();
  } catch (err) {
    console.error('Facebook fetch failed', err);

    // Fallback to cached data if available
    if (postsInDb.length > 0) {
      console.warn('⚠️ Using stale cache due to fetch error');
      return NextResponse.json(makeResult(postsInDb, metaLastFetched));
    }

    return NextResponse.json({ error: 'Failed to fetch Facebook posts' }, { status: 502 });
  }

  if (!fbData || fbData.error) {
    console.error('Facebook API error payload:', fbData?.error ?? fbData);
    return NextResponse.json(
      { error: fbData?.error?.message ?? 'Unexpected Facebook API response' },
      { status: 502 }
    );
  }

  const rawPosts: FbApiPost[] = Array.isArray(fbData.data) ? fbData.data : [];

  // 3) Normalize and persist posts to DB
  const toSave = (rawPosts || [])
    .map((p) => {
      const image = extractImageFromFbPost(p);
      return { raw: p, image };
    })
    .filter((x) => x.image) // keep only posts with an image
    .map((x) => {
      const p = x.raw;
      return {
        id: String(p.id),
        message: typeof p.message === 'string' && p.message.trim() ? p.message : null,
        createdTime: p.created_time ? new Date(p.created_time) : new Date(),
        permalinkUrl: p.permalink_url ?? '',
        fullPicture: String(x.image),
        fetchedAt: new Date(),
      };
    });

  if (toSave.length === 0) {
    console.warn('⚠️ No Facebook posts with images found. DB unchanged.');

    // Return whatever we have in DB
    try {
      postsInDb = await prisma.facebookPost.findMany({
        orderBy: { createdTime: 'desc' },
        take: 10,
      });
      return NextResponse.json(makeResult(postsInDb, metaLastFetched));
    } catch {
      return NextResponse.json(makeResult([], null));
    }
  }

  // 4) Save to database
  try {
    await prisma.$transaction([
      prisma.facebookPost.deleteMany({}),
      prisma.facebookPost.createMany({ data: toSave, skipDuplicates: true }),
    ]);

    // Update meta timestamp
    await prisma.facebookCacheMeta.upsert({
      where: { id: 1 },
      update: { lastFetched: new Date() },
      create: { id: 1, lastFetched: new Date() },
    });

    console.log(`✅ Saved ${toSave.length} Facebook posts to database`);
  } catch (err) {
    console.error('Prisma write error while saving facebook posts', err);
  }

  // 5) Read final posts from DB and return
  try {
    postsInDb = await prisma.facebookPost.findMany({
      orderBy: { createdTime: 'desc' },
      take: 10,
    });
  } catch (err) {
    console.warn('Failed to read posts from DB after insert, using in-memory data', err);
    postsInDb = toSave;
  }

  return NextResponse.json(makeResult(postsInDb, new Date()));
}
