import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { slugify } from '@/lib/utils';
import { revalidatePath } from 'next/cache';

// GET single report
export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const reportId = Number(params.id);
    if (!reportId || isNaN(reportId)) {
      return NextResponse.json({ error: 'Invalid Report ID' }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400' } });
    }

    const report = await prisma.report.findUnique({
      where: { id: reportId },
    });

    if (!report) {
      return NextResponse.json({ error: 'Report not found' }, { status: 404, headers: { 'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400' } });
    }

    return NextResponse.json(report, {
      headers: { 'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400' },
    });
  } catch (error) {
    console.error('Failed to fetch report:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400' } });
  }
}

// Handle PUT (update report) -- AUTH REQUIRED
export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }
    const userId = session.user.id;

    const reportId = Number(params.id);
    if (!reportId || isNaN(reportId)) {
      return NextResponse.json({ error: 'Invalid Report ID' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    const existing = await prisma.report.findUnique({ where: { id: reportId } });

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

    const updatedReport = await prisma.report.update({
      where: { id: reportId },
      data: {
        title,
        slug,
        images: Array.isArray(images) ? images : [],
        files: Array.isArray(files) ? files : [],
        publishStatus,
        updatedById: userId,
        accessCount,
        downloadCount,
        projectId: projectId ?? null,
      },
    });

    revalidatePath('/');
    revalidatePath('/impact');
    revalidatePath('/reports');
    revalidatePath(`/reports/${updatedReport.slug}`);
    if (existing?.slug && existing.slug !== updatedReport.slug) {
      revalidatePath(`/reports/${existing.slug}`);
    }

    return NextResponse.json(updatedReport, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    console.error('Failed to update report:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  }
}

// Handle DELETE
export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized Action' }, { status: 401, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    const reportId = Number(params.id);
    if (!reportId || isNaN(reportId)) {
      return NextResponse.json({ error: 'Invalid Report Id' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    const deleted = await prisma.report.delete({
      where: { id: reportId },
    });

    revalidatePath('/');
    revalidatePath('/impact');
    revalidatePath('/reports');
    if (deleted.slug) revalidatePath(`/reports/${deleted.slug}`);

    return NextResponse.json({ success: true }, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
      return NextResponse.json({ error: 'Report not found' }, { status: 404, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }
    console.error('Failed to delete report:', error);
    return NextResponse.json({ error: 'Failed to delete report' }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  }
}
