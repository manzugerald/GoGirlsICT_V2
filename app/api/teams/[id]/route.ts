'use server';

import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

const TEAM_IMAGES_DIR = '/assets/images/team';

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  try {
    const teamId = params?.id;
    if (!teamId) {
      return NextResponse.json({ error: 'Missing team id' }, { status: 400 });
    }

    const member = await prisma.team.findUnique({
      where: { id: Number(teamId) },
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
        createdById: true,
        updatedById: true,
      },
    });

    if (!member) {
      return NextResponse.json({ error: 'Team member not found' }, { status: 404 });
    }

    return NextResponse.json(member, { status: 200 });
  } catch (err: any) {
    console.error('GET /api/teams/:id error', err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const teamId = params?.id;
    if (!teamId) {
      return NextResponse.json({ error: 'Missing team id' }, { status: 400 });
    }

    const existing = await prisma.team.findUnique({ where: { id: Number(teamId) } });
    if (!existing) {
      return NextResponse.json({ error: 'Team member not found' }, { status: 404 });
    }

    const formData = await req.formData();
    // Basic text fields
    const firstName = (formData.get('firstName') as string) ?? undefined;
    const lastName = (formData.get('lastName') as string) ?? undefined;
    const about = formData.has('about') ? (formData.get('about') as string) : undefined;
    const email = (formData.get('email') as string) ?? undefined;
    const phone = (formData.get('phone') as string) ?? undefined;
    const linkedInUrl = (formData.get('linkedInUrl') as string) ?? undefined;
    const facebookUrl = (formData.get('facebookUrl') as string) ?? undefined;
    const xUrl = (formData.get('xUrl') as string) ?? undefined;
    const websiteUrl = (formData.get('websiteUrl') as string) ?? undefined;
    const isActiveRaw = formData.get('isActive') as string | null;
    const isActive = isActiveRaw === null ? undefined : String(isActiveRaw) === 'true';
    const updatedById = (formData.get('updatedById') as string) ?? undefined;

    // Image handling
    const profileImageFile = formData.get('profileImage') as File | null;
    const oldImageUrl = (formData.get('oldImageUrl') as string) ?? undefined;

    // If email changed, check uniqueness
    if (email && email !== existing.email) {
      const e = await prisma.team.findUnique({ where: { email } });
      if (e) {
        return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
      }
    }

    // If phone changed, check uniqueness
    if (phone && phone !== existing.phone) {
      const p = await prisma.team.findUnique({ where: { phone } });
      if (p) {
        return NextResponse.json({ error: 'Phone already exists' }, { status: 400 });
      }
    }

    // Prepare update data
    const updateData: any = {};
    if (typeof firstName !== 'undefined') updateData.firstName = firstName;
    if (typeof lastName !== 'undefined') updateData.lastName = lastName;
    if (typeof about !== 'undefined') updateData.about = about;
    if (typeof email !== 'undefined') updateData.email = email;
    if (typeof phone !== 'undefined') updateData.phone = phone;
    if (typeof linkedInUrl !== 'undefined') updateData.linkedInUrl = linkedInUrl;
    if (typeof facebookUrl !== 'undefined') updateData.facebookUrl = facebookUrl;
    if (typeof xUrl !== 'undefined') updateData.xUrl = xUrl;
    if (typeof websiteUrl !== 'undefined') updateData.websiteUrl = websiteUrl;
    if (typeof isActive !== 'undefined') updateData.isActive = isActive;
    if (typeof updatedById !== 'undefined') updateData.updatedById = String(updatedById);

    // Handle profile image upload (if present)
    if (profileImageFile && (profileImageFile as any).size > 0) {
      // delete old image if provided (and exists)
      if (oldImageUrl) {
        try {
          const oldPath = path.join(process.cwd(), 'public', oldImageUrl.replace(/^\//, ''));
          await fs.unlink(oldPath);
        } catch (e) {
          // ignore if file not present
        }
      } else if (existing.profileImage) {
        try {
          const oldPath = path.join(
            process.cwd(),
            'public',
            existing.profileImage.replace(/^\//, '')
          );
          await fs.unlink(oldPath);
        } catch (e) {
          // ignore
        }
      }

      const ext = profileImageFile.name.split('.').pop() || 'jpg';
      const filename = `${randomUUID()}.${ext}`;
      const uploadDir = path.join(process.cwd(), 'public', TEAM_IMAGES_DIR.replace(/^\//, ''));
      await fs.mkdir(uploadDir, { recursive: true });
      const buffer = Buffer.from(await profileImageFile.arrayBuffer());
      await fs.writeFile(path.join(uploadDir, filename), buffer);
      updateData.profileImage = `${TEAM_IMAGES_DIR}/${filename}`;
    }

    const hasUpdates = Object.keys(updateData).length > 0;
    if (!hasUpdates) {
      // return current sanitized record if nothing to update
      const current = await prisma.team.findUnique({
        where: { id: Number(teamId) },
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
          createdById: true,
          updatedById: true,
        },
      });
      return NextResponse.json({ message: 'No changes', team: current });
    }

    const updated = await prisma.team.update({
      where: { id: Number(teamId) },
      data: updateData,
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
        createdById: true,
        updatedById: true,
      },
    });

    return NextResponse.json({ message: 'Team member updated', team: updated }, { status: 200 });
  } catch (err: any) {
    console.error('PATCH /api/teams/:id error', err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    const teamId = params?.id;
    if (!teamId) {
      return NextResponse.json({ error: 'Missing team id' }, { status: 400 });
    }

    const member = await prisma.team.findUnique({ where: { id: Number(teamId) } });
    if (!member) {
      return NextResponse.json({ error: 'Team member not found' }, { status: 404 });
    }

    if (member.profileImage) {
      try {
        const filePath = path.join(process.cwd(), 'public', member.profileImage.replace(/^\//, ''));
        await fs.unlink(filePath);
      } catch (e) {
        // ignore missing file
      }
    }

    await prisma.team.delete({ where: { id: Number(teamId) } });

    return NextResponse.json({ message: 'Team member deleted' }, { status: 200 });
  } catch (err: any) {
    console.error('DELETE /api/teams/:id error', err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}

export async function POST() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
/**jjj */