import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { slugify } from '@/lib/utils';
import { extractPlainText, isTiptapDocEmpty } from '@/lib/tiptap';

// GET single podcast -- PUBLIC
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const podcastId = Number(params.id);
    if (!podcastId || isNaN(podcastId)) {
      return NextResponse.json(
        { error: 'Invalid Podcast ID' },
        { status: 400, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    const podcast = await prisma.podcast.findUnique({ where: { id: podcastId } });

    if (!podcast) {
      return NextResponse.json(
        { error: 'Podcast not found' },
        { status: 404, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    return NextResponse.json(podcast, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (error) {
    console.error('Failed to fetch podcast:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}

// Handle PUT (update podcast) -- AUTH REQUIRED
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
      );
    }
    const userId = session.user.id;

    const podcastId = Number(params.id);
    if (!podcastId || isNaN(podcastId)) {
      return NextResponse.json(
        { error: 'Invalid Podcast ID' },
        { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
      );
    }

    const data = await req.json();
    const {
      title,
      description,
      image = null,
      audioUrl,
      waveform,
      publishedAt,
      publishStatus,
      accessCount = 0,
    } = data;

    if (isTiptapDocEmpty(title) || !description || !audioUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
      );
    }

    const slug = slugify(extractPlainText(title).trim());

    const updatedPodcast = await prisma.podcast.update({
      where: { id: podcastId },
      data: {
        title,
        slug,
        description,
        image,
        audioUrl,
        waveform: Array.isArray(waveform) ? waveform : undefined,
        publishedAt: publishedAt ? new Date(publishedAt) : undefined,
        publishStatus,
        updatedById: userId,
        accessCount,
      },
    });

    return NextResponse.json(updatedPodcast, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    console.error('Failed to update podcast:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
    );
  }
}

// Handle DELETE -- AUTH REQUIRED
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized Action' },
        { status: 401, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
      );
    }

    const podcastId = Number(params.id);
    if (!podcastId || isNaN(podcastId)) {
      return NextResponse.json(
        { error: 'Invalid Podcast Id' },
        { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
      );
    }

    await prisma.podcast.delete({ where: { id: podcastId } });

    return NextResponse.json(
      { success: true },
      { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
    );
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Podcast not found' },
        { status: 404, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
      );
    }
    console.error('Failed to delete podcast:', error);
    return NextResponse.json(
      { error: 'Failed to delete podcast' },
      { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } }
    );
  }
}
