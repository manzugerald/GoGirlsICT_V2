import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

// Make Redis optional and controllable via DISABLE_REDIS=1
let redis: any = null;
if (process.env.DISABLE_REDIS !== '1') {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    redis = require('@/utils/redis').redis;
  } catch (e) {
    console.warn('[/api/events] redis not available, continuing without cache', e);
    redis = null;
  }
}

const EVENTS_CACHE_KEY = 'events:all';
const EVENTS_CACHE_TTL = 60 * 60 * 24 * 7; // 7 days

async function fetchEventsFromDb() {
  return prisma.event.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      slug: true,
      eventTitle: true,
      eventStartDate: true,
      eventEndDate: true,
      eventStatus: true,
      eventLocation: true,
      eventImages: true,
      eventBanner: true,
      eventFile: true,
      eventTags: true,
      maxAttendees: true,
      eventDetails: true,
      eventDescription: true,
      publishStatus: true,
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
      createdBy: { select: { firstName: true, lastName: true, username: true } },
      updatedBy: { select: { username: true } },
      project: { select: { title: true, id: true } },
      report: { select: { title: true, id: true } },
    },
  });
}

// Handle GET (fetch all events, no auth required)
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const noCache = url.searchParams.get('noCache');

    // Try Redis cache unless disabled or bypass requested
    if (redis && !noCache) {
      try {
        const cached = await redis.get(EVENTS_CACHE_KEY);
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            if (Array.isArray(parsed) && parsed.length > 0) {
              console.log('[/api/events] returning cached events count=', parsed.length);
              return NextResponse.json(parsed);
            }
            console.log('[/api/events] cached events empty — refreshing from DB');
          } catch (parseErr) {
            console.warn('[/api/events] failed to parse cached value, will fetch DB', parseErr);
          }
        } else {
          console.log('[/api/events] no cached value found');
        }
      } catch (redisErr) {
        console.warn('[/api/events] redis.get error, will fetch DB', redisErr);
      }
    } else {
      if (!redis) console.log('[/api/events] redis disabled, fetching DB');
      else console.log('[/api/events] bypassing cache (noCache=1)');
    }

    // Fetch from DB
    const events = await fetchEventsFromDb();
    console.log('[/api/events] fetched from DB, count=', Array.isArray(events) ? events.length : 0);

    // Update cache (best-effort)
    if (redis) {
      try {
        await redis.set(EVENTS_CACHE_KEY, JSON.stringify(events), 'EX', EVENTS_CACHE_TTL);
      } catch (cacheErr) {
        console.warn('[/api/events] redis.set error', cacheErr);
      }
    }

    return NextResponse.json(events);
  } catch (err) {
    console.error('[/api/events] Error fetching events:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Handle POST (create new event, auth required)
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.json();

    const {
      slug,
      eventTitle,
      eventDescription,
      eventDetails,
      eventLocation,
      eventBanner,
      eventImages,
      eventFile,
      eventStartDate,
      eventEndDate,
      eventTags,
      eventStatus,
      publishStatus,
      eventAttendance,
      maxAttendees,
      projectId,
      reportId,
    } = data;

    // Required fields validation
    if (
      !slug ||
      !eventTitle ||
      !eventDescription ||
      !eventBanner ||
      !eventStartDate ||
      !eventEndDate
    ) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const userId = session.user.id;

    const event = await prisma.event.create({
      data: {
        slug,
        eventTitle,
        eventDescription,
        eventDetails,
        eventLocation,
        eventBanner,
        eventImages,
        eventFile,
        eventStartDate: new Date(eventStartDate),
        eventEndDate: new Date(eventEndDate),
        eventTags,
        eventStatus,
        publishStatus,
        eventAttendance,
        maxAttendees: maxAttendees ? Number(maxAttendees) : null,
        createdById: userId,
        updatedById: userId,
        projectId: projectId ?? null,
        reportId: reportId ?? null,
      },
    });

    // Invalidate cache after write (if redis available)
    if (redis) {
      try {
        await redis.del(EVENTS_CACHE_KEY);
        console.log('[/api/events] cleared events cache after create');
      } catch (cacheErr) {
        console.warn('[/api/events] failed to delete cache after create', cacheErr);
      }
    }

    return NextResponse.json(event);
  } catch (error) {
    console.error('[/api/events] Failed to create event:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
