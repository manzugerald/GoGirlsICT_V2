import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { revalidatePath } from 'next/cache';

// GET = fetch location details
export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;

    const location = await prisma.location.findUnique({
      where: { id: params.id },
      include: {
        institution: {
          select: { id: true, name: true },
        },
      },
    });

    if (!location) {
      return NextResponse.json({ error: 'Location not found' }, { status: 404, headers: { 'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400' } });
    }

    return NextResponse.json(location, {
      headers: { 'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400' },
    });
  } catch (error) {
    console.error('Failed to fetch location:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400' } });
  }
}

// PATCH = update location
export async function PATCH(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    const body = await req.json();
    const { locationName, latitude, longitude, institutionId } = body;

    if (!institutionId) {
      return NextResponse.json({ error: 'Missing required field: institutionId' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    const updated = await prisma.location.update({
      where: { id: params.id },
      data: {
        locationName,
        latitude,
        longitude,
        institutionId,
      },
      include: {
        institution: {
          select: { id: true, name: true },
        },
      },
    });

    revalidatePath('/about');

    return NextResponse.json(updated, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    console.error('Failed to update location:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  }
}

// DELETE = delete location
export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const deleted = await prisma.location.delete({
      where: { id: params.id },
    });

    revalidatePath('/about');

    return NextResponse.json({ message: 'Location deleted', location: deleted }, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
      return NextResponse.json({ error: 'Location not found' }, { status: 404, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }
    console.error('Failed to delete location:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  }
}
