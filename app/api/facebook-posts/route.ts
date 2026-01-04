import { NextRequest, NextResponse } from 'next/server';
import dayjs from 'dayjs';
import { prisma } from '@/db/prisma';

// Redis caching temporarily disabled.
// We will consult DB first and only call FB when DB is empty or meta TTL has expired.
// For testing we use a short TTL: 10 minutes.
const FETCH_MINUTES_TTL = 60 * 10; // minutes to consider DB fresh for testing

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

export async function GET(_req: NextRequest) {
  const PAGE_ID = process.env.FB_PAGE_ID;
  const ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;

  if (!PAGE_ID || !ACCESS_TOKEN) {
    console.error('Facebook page ID or access token is missing');
    return NextResponse.json({ error: 'Facebook integration not configured' }, { status: 500 });
  }

  // 1) Read from DB first and return if we have posts (preferred source)
  let postsInDb: any[] = [];
  let metaLastFetched: Date | null = null;
  try {
    postsInDb = await prisma.facebookPost.findMany({ orderBy: { createdTime: 'desc' } });
    const meta = await prisma.facebookCacheMeta.findUnique({ where: { id: 1 } });
    metaLastFetched = meta?.lastFetched ?? null;

    if (Array.isArray(postsInDb) && postsInDb.length > 0) {
      const result = makeResult(postsInDb, metaLastFetched);
      return NextResponse.json(result);
    }
  } catch (err) {
    console.warn('Failed to read posts/meta from DB, will attempt fetching from Facebook API', err);
    // continue to fetch
  }

  // 2) If DB empty, consult meta to avoid hitting FB too often
  try {
    const meta = await prisma.facebookCacheMeta.findUnique({ where: { id: 1 } });
    const lastFetched = meta?.lastFetched ?? null;
    const needsFetch =
      !lastFetched || dayjs().diff(dayjs(lastFetched), 'minute') >= FETCH_MINUTES_TTL;

    if (!needsFetch) {
      // Recently fetched but DB empty -> return empty with lastFetched
      const result = makeResult([], lastFetched);
      return NextResponse.json(result);
    }
  } catch (err) {
    // proceed to fetch if meta read fails
    console.warn('Failed to read facebookCacheMeta, proceeding to fetch', err);
  }

  // 3) Fetch from Facebook Graph API (include attachments as fallback source for images)
  let fbData: any;
  try {
    // Add attachments to fields so we can derive images when full_picture is not present
    const url = `https://graph.facebook.com/v19.0/${encodeURIComponent(
      PAGE_ID
    )}/posts?fields=id,message,created_time,permalink_url,full_picture,attachments{media,subattachments}&access_token=${encodeURIComponent(
      ACCESS_TOKEN
    )}`;

    const fbRes = await fetch(url, { next: { revalidate: 0 } });
    if (!fbRes.ok) {
      const bodyText = await fbRes.text().catch(() => '');
      console.error('Facebook API returned non-OK:', fbRes.status, bodyText);
      return NextResponse.json(
        { error: 'Facebook API returned an error', details: bodyText },
        { status: 502 }
      );
    }
    fbData = await fbRes.json();
  } catch (err) {
    console.error('Facebook fetch failed', err);
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

  // 4) Normalize and persist posts to DB.
  // We will only persist posts that we can extract a non-empty fullPicture (DB requires it).
  const toSave = (rawPosts || [])
    .map((p) => {
      const image = extractImageFromFbPost(p);
      return {
        raw: p,
        image,
      };
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
    // We couldn't extract any posts with images; do NOT delete DB. Return empty and do not update meta.
    console.warn(
      'Facebook fetch returned no posts with images (toSave is empty). DB left unchanged.'
    );
    const result = makeResult([], null);
    return NextResponse.json(result);
  }

  try {
    // Persist: delete existing and insert new (atomic)
    await prisma.$transaction([
      prisma.facebookPost.deleteMany({}),
      prisma.facebookPost.createMany({ data: toSave, skipDuplicates: true }),
    ]);
  } catch (err) {
    console.error('Prisma write error while saving facebook posts', err);
    // continue so we can return whatever we have
  }

  // update meta
  try {
    await prisma.facebookCacheMeta.upsert({
      where: { id: 1 },
      update: { lastFetched: new Date() },
      create: { id: 1, lastFetched: new Date() },
    });
  } catch (err) {
    console.warn('Failed to update facebookCacheMeta', err);
  }

  // 5) Read final posts from DB and return
  try {
    postsInDb = await prisma.facebookPost.findMany({ orderBy: { createdTime: 'desc' } });
  } catch (err) {
    console.warn(
      'Failed to read posts from DB after insert, falling back to in-memory toSave',
      err
    );
    postsInDb = toSave;
  }

  const result = makeResult(postsInDb, new Date());

  return NextResponse.json(result);
}
