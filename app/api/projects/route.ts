import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { isTiptapDocEmpty } from '@/lib/tiptap';
import { revalidatePath } from 'next/cache';

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
export async function GET() {
  try {
    const projects = await fetchProjectsFromDb();

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

    // Invalidate the ISR cache on every public page this project feeds —
    // its count on home/impact, and its own listing/detail page.
    revalidatePath('/');
    revalidatePath('/impact');
    revalidatePath('/programs');
    revalidatePath(`/programs/${project.slug}`);

    return NextResponse.json(project, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (error) {
    console.error('[/api/projects] Failed to create project:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  }
}
