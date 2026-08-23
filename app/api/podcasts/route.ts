import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { slugify } from '@/lib/utils';

// Handle GET (fetch all podcasts) -- PUBLIC
export async function GET() {
  try {
    const podcasts = await prisma.podcast.findMany({
      orderBy: { publishedAt: 'desc' },
      include: {
        createdBy: {
          select: { firstName: true, lastName: true, image: true },
        },
        approvedBy: { select: { firstName: true, lastName: true } },
        updatedBy: { select: { firstName: true, lastName: true } },
      },
    });

    return NextResponse.json(podcasts, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (err) {
    console.error('[/api/podcasts] Error fetching podcasts:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500, headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } }
    );
  }
}

// Handle POST (create new podcast) -- AUTH REQUIRED
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
      );
    }
    const userId = session.user.id;

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
      description,
      image = null,
      audioUrl,
      waveform = [],
      publishedAt,
      publishStatus,
      accessCount = 0,
    } = data;

    if (!title || !description || !audioUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
      );
    }

    const slug = slugify(title.trim());

    const podcast = await prisma.podcast.create({
      data: {
        title,
        slug,
        description,
        image,
        audioUrl,
        waveform: Array.isArray(waveform) ? waveform : [],
        publishedAt: publishedAt ? new Date(publishedAt) : new Date(),
        publishStatus,
        createdById: userId,
        approvedById: userId,
        updatedById: userId,
        accessCount,
      },
    });

    return NextResponse.json(podcast, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    console.error('[/api/podcasts] Failed to create podcast:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
    );
  }
}
