import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { slugify } from '@/lib/utils';
import { revalidatePath } from 'next/cache';

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
      beneficiaries: {
        select: {
          beneficiary: { select: { id: true, firstName: true, lastName: true, image: true } },
        },
      },
    },
  });
}

// Handle GET (fetch all reports) -- PUBLIC
export async function GET() {
  try {
    const reports = await fetchReportsFromDb();

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

    revalidatePath('/');
    revalidatePath('/impact');
    revalidatePath('/reports');
    revalidatePath(`/reports/${report.slug}`);

    return NextResponse.json(report, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    console.error('[/api/reports] Failed to create report:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  }
}
