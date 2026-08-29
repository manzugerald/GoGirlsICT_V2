import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redis } from '@/utils/redis';
import { isTiptapDocEmpty } from '@/lib/tiptap';

const PROJECTS_CACHE_KEY = 'projects:all';
const PROJECTS_CACHE_TTL = 60 * 60 * 24 * 7; // 7 days

// Helper: fetch projects from DB
async function fetchProjectsFromDb() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      createdBy: { select: { username: true } },
      approvedBy: { select: { username: true } },
      updatedBy: { select: { username: true } },
      reports: true,
      beneficiaries: {
        select: {
          beneficiary: { select: { id: true, firstName: true, lastName: true, image: true } },
        },
      },
    },
  });
  return projects;
}

// Handle GET (fetch all projects, no auth required)
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const noCache = url.searchParams.get('noCache'); // set to "1" to bypass

    // Try Redis cache unless bypass requested
    if (!noCache) {
      try {
        const cached = await redis.get(PROJECTS_CACHE_KEY);
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            // If cache contains a non-empty array, return it immediately
            if (Array.isArray(parsed) && parsed.length > 0) {
              console.log('[/api/projects] returning cached projects count=', parsed.length);
              return NextResponse.json(parsed, {
                headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
              });
            }
            // If cached is an empty array, fall through to fetch DB and refresh cache
            console.log('[/api/projects] cached projects is empty — refreshing from DB');
          } catch (parseErr) {
            console.warn('[/api/projects] failed to parse cached value, will fetch DB', parseErr);
          }
        } else {
          console.log('[/api/projects] no cached value found');
        }
      } catch (redisErr) {
        console.warn('[/api/projects] redis get error, will fetch DB', redisErr);
      }
    } else {
      console.log('[/api/projects] bypassing cache (noCache=1)');
    }

    // Fetch from DB
    const projects = await fetchProjectsFromDb();
    console.log(
      '[/api/projects] fetched from DB, count=',
      Array.isArray(projects) ? projects.length : 0
    );

    // Update cache (best-effort)
    try {
      await redis.set(PROJECTS_CACHE_KEY, JSON.stringify(projects), 'EX', PROJECTS_CACHE_TTL);
    } catch (cacheErr) {
      console.warn('[/api/projects] redis set error', cacheErr);
    }

    return NextResponse.json(projects, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (err) {
    console.error('[/api/projects] Error fetching projects:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } });
  }
}

// Handle POST (create new project, auth required)
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    const data = await req.json();
    const { title, slug, content, images, projectStatus, publishStatus } = data;

    if (isTiptapDocEmpty(title) || !slug || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    const userId = session.user.id;

    const project = await prisma.project.create({
      data: {
        title,
        slug,
        content,
        images,
        projectStatus,
        publishStatus,
        createdById: userId,
        approvedById: userId,
        updatedById: userId,
      },
    });

    // Invalidate cache after write
    try {
      await redis.del(PROJECTS_CACHE_KEY);
      console.log('[/api/projects] cleared projects cache after create');
    } catch (cacheErr) {
      console.warn('[/api/projects] failed to delete cache after create', cacheErr);
    }

    return NextResponse.json(project, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    console.error('[/api/projects] Failed to create project:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  }
}
