'use server';

import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { revalidatePath } from 'next/cache';

const TEAM_IMAGES_DIR = '/assets/images/team';

/**
 * GET /api/teams
 * - Returns list of team members (sanitized) using only attributes in the Team model.
 */
export async function GET() {
  try {
    const members = await prisma.team.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        profileImage: true,
        about: true,
        email: true,
        phone: true,
        linkedInUrl: true,
        facebookUrl: true,
        xUrl: true,
        websiteUrl: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        // audit ids are part of model but excluded from regular list by default;
        // include them if you need them (createdById/updatedById)
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(members, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (err) {
    console.error('GET /api/teams error', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } });
  }
}

/**
 * POST /api/teams
 *
 * Expects multipart/form-data with fields matching the Team model:
 * - firstName (required)
 * - lastName (required)
 * - about (optional)
 * - email (optional, unique)
 * - phone (optional, unique)
 * - linkedInUrl, facebookUrl, xUrl, websiteUrl (optional)
 * - isActive (optional, 'true'|'false')
 * - profileImage (optional file)
 *
 * The request must be authenticated. createdById will be set from the current session user id.
 */
export async function POST(req: Request) {
  try {
    // Require authenticated user so we can set createdById automatically
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }
    const createdById = String(session.user.id);

    const contentType = req.headers.get('content-type') ?? '';
    if (!contentType.includes('form-data')) {
      return NextResponse.json({ error: 'Expected multipart/form-data' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    const formData = await req.formData();

    const firstName = (formData.get('firstName') as string) ?? null;
    const lastName = (formData.get('lastName') as string) ?? null;
    const about = formData.has('about') ? (formData.get('about') as string) : undefined;
    const email = (formData.get('email') as string) ?? undefined;
    const phone = (formData.get('phone') as string) ?? undefined;
    const linkedInUrl = (formData.get('linkedInUrl') as string) ?? undefined;
    const facebookUrl = (formData.get('facebookUrl') as string) ?? undefined;
    const xUrl = (formData.get('xUrl') as string) ?? undefined;
    const websiteUrl = (formData.get('websiteUrl') as string) ?? undefined;
    const isActiveRaw = formData.get('isActive') as string | null;
    const isActive = isActiveRaw == null ? true : String(isActiveRaw) === 'true';
    const profileImageFile = formData.get('profileImage') as File | null;

    if (!firstName || !lastName) {
      return NextResponse.json({ error: 'firstName and lastName are required' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
    }

    // Uniqueness checks
    if (email) {
      const existingByEmail = await prisma.team.findUnique({ where: { email } });
      if (existingByEmail) {
        return NextResponse.json({ error: 'Email already exists' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
      }
    }
    if (phone) {
      const existingByPhone = await prisma.team.findUnique({ where: { phone } });
      if (existingByPhone) {
        return NextResponse.json({ error: 'Phone already exists' }, { status: 400, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
      }
    }

    // Handle profile image upload
    let profileImage: string | undefined = undefined;
    if (profileImageFile && profileImageFile.size > 0) {
      const ext = profileImageFile.name.split('.').pop() || 'jpg';
      const filename = `${randomUUID()}.${ext}`;
      const uploadDir = path.join(process.cwd(), 'public', TEAM_IMAGES_DIR.replace(/^\//, ''));
      await fs.mkdir(uploadDir, { recursive: true });
      const buffer = Buffer.from(await profileImageFile.arrayBuffer());
      await fs.writeFile(path.join(uploadDir, filename), buffer);
      profileImage = `${TEAM_IMAGES_DIR}/${filename}`;
    }

    const created = await prisma.team.create({
      data: {
        firstName,
        lastName,
        profileImage: profileImage ?? undefined,
        about: about ?? undefined,
        email: email ?? undefined,
        phone: phone ?? undefined,
        linkedInUrl: linkedInUrl ?? undefined,
        facebookUrl: facebookUrl ?? undefined,
        xUrl: xUrl ?? undefined,
        websiteUrl: websiteUrl ?? undefined,
        isActive,
        createdById,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        profileImage: true,
        about: true,
        email: true,
        phone: true,
        linkedInUrl: true,
        facebookUrl: true,
        xUrl: true,
        websiteUrl: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    revalidatePath('/about');

    return NextResponse.json({ message: 'Team member created', team: created }, { status: 201, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  } catch (err) {
    console.error('POST /api/teams error', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
  }
}

// Explicitly disallow other methods
export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
}
export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405, headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } });
}
