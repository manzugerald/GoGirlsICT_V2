import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { slugify } from '@/lib/utils';

// Make Redis usage optional (can be disabled with DISABLE_REDIS=1)
let redis: any = null;
if (process.env.DISABLE_REDIS !== '1') {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    redis = require('@/utils/redis').redis;
  } catch (e) {
    // If import fails, continue without redis
    console.warn('[/api/reports] redis not available, continuing without cache', e);
    redis = null;
  }
}

const REPORTS_CACHE_KEY = 'reports:all';
const REPORTS_CACHE_TTL = 60 * 60 * 24 * 7; // 7 days

async function fetchReportsFromDb() {
  return prisma.report.findMany({
    orderBy: { createdAt: 'asc' },
    include: {
      createdBy: {
        select: {
          firstName: true,
          lastName: true,
          image: true,
        },
      },
      approvedBy: { select: { firstName: true, lastName: true } },
      updatedBy: { select: { firstName: true, lastName: true } },
      project: { select: { title: true, id: true } },
    },
  });
}

// Handle GET (fetch all reports) -- PUBLIC
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const noCache = url.searchParams.get('noCache');

    // Try Redis cache unless disabled or bypass requested
    if (redis && !noCache) {
      try {
        const cached = await redis.get(REPORTS_CACHE_KEY);
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            // If cached contains a non-empty array, return it
            if (Array.isArray(parsed) && parsed.length > 0) {
              console.log('[/api/reports] returning cached reports count=', parsed.length);
              return NextResponse.json(parsed, {
                headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
              });
            }
            // If cached is empty array, fall through to DB fetch and refresh cache
            console.log('[/api/reports] cached reports empty — refreshing from DB');
          } catch (parseErr) {
            console.warn('[/api/reports] failed to parse cached value, will fetch DB', parseErr);
          }
        } else {
          console.log('[/api/reports] no cached value found');
        }
      } catch (redisErr) {
        console.warn('[/api/reports] redis.get error, will fetch DB', redisErr);
      }
    } else {
      if (!redis) console.log('[/api/reports] redis disabled, fetching DB');
      else console.log('[/api/reports] bypassing cache (noCache=1)');
    }

    // Fetch from DB
    const reports = await fetchReportsFromDb();
    console.log(
      '[/api/reports] fetched from DB, count=',
      Array.isArray(reports) ? reports.length : 0
    );

    // Update cache (best-effort)
    if (redis) {
      try {
        await redis.set(REPORTS_CACHE_KEY, JSON.stringify(reports), 'EX', REPORTS_CACHE_TTL);
      } catch (cacheErr) {
        console.warn('[/api/reports] redis.set error', cacheErr);
      }
    }

    return NextResponse.json(reports, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (err) {
    console.error('[/api/reports] Error fetching reports:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } });
  }
}

// Handle POST (create new report) -- AUTH REQUIRED
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }
    const userId = session.user.id;

    // Check user existence
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json(
        { error: 'Authenticated user not found in database.' },
        { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
      );
    }

    const data = await req.json();
    const {
      title,
      images = [],
      files = [],
      publishStatus,
      projectId,
      accessCount = 0,
      downloadCount = 0,
    } = data;

    if (!title) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    const slug = slugify(title.trim());

    const report = await prisma.report.create({
      data: {
        title,
        slug,
        images: Array.isArray(images) ? images : [],
        files: Array.isArray(files) ? files : [],
        publishStatus,
        createdById: userId,
        approvedById: userId,
        updatedById: userId,
        accessCount,
        downloadCount,
        projectId: projectId ?? null,
      },
    });

    // Invalidate cache after write (if redis available)
    if (redis) {
      try {
        await redis.del(REPORTS_CACHE_KEY);
        console.log('[/api/reports] cleared reports cache after create');
      } catch (cacheErr) {
        console.warn('[/api/reports] failed to delete cache after create', cacheErr);
      }
    }

    return NextResponse.json(report, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    console.error('[/api/reports] Failed to create report:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  }
}
