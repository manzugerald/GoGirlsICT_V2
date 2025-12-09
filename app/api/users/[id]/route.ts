import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import bcrypt from 'bcrypt';
import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
// import { redis } from '@/utils/redis';
import { isPwned } from '@/lib/hibp';
import { sendPasswordChangeEmail } from '@/lib/email';
import { getIpFromRequest } from '@/lib/getIp';

const USERS_CACHE_KEY = 'users:all';
const SINGLE_USER_CACHE_PREFIX = 'users:';
// const CACHE_TTL = 60 * 60 * 24 * 7;

const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS || '12', 10);
const MAX_HISTORY = parseInt(process.env.MAX_HISTORY || '5', 10);

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  try {
    const userId = params?.id;
    if (!userId) {
      return NextResponse.json({ error: 'Missing user id' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        image: true,
        about: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err: any) {
    console.error('GET /api/users/:id error', err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const userId = params.id;
    const ip = getIpFromRequest(req);
    const userAgent = req.headers.get('user-agent') ?? 'unknown';
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const formData = await req.formData();
    const username = (formData.get('username') as string) ?? null;
    const newUsername = (formData.get('newUsername') as string) ?? null;
    const password = (formData.get('password') as string) ?? null;
    const email = (formData.get('email') as string) ?? null;
    const firstName = (formData.get('firstName') as string) ?? null;
    const lastName = (formData.get('lastName') as string) ?? null;
    const imageFile = formData.get('image') as File | null;
    const oldImageUrl = (formData.get('oldImageUrl') as string) ?? null;
    const role = (formData.get('role') as string) ?? undefined;
    const about = formData.has('about') ? (formData.get('about') as string) : undefined;

    if (username && username !== user.username) {
      return NextResponse.json(
        { error: 'The original username does not match the record.' },
        { status: 400 }
      );
    }

    // Password change flow (with IP, email notification, and system message)
    if (password) {
      const currentPassword = (formData.get('currentPassword') as string) ?? null;
      if (!currentPassword) {
        return NextResponse.json(
          { error: 'Current password required to change password' },
          { status: 400 }
        );
      }

      const ok = await bcrypt.compare(currentPassword, user.password);
      if (!ok) {
        return NextResponse.json({ error: 'Current password incorrect' }, { status: 401 });
      }

      const historyRows = await prisma.passwordHistory.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        take: MAX_HISTORY,
        select: { passwordHash: true },
      });
      const hashesToCheck = [user.password, ...historyRows.map((r) => r.passwordHash)];
      for (const h of hashesToCheck) {
        if (!h) continue;
        const match = await bcrypt.compare(password, h);
        if (match) {
          return NextResponse.json({ error: 'Cannot reuse a previous password' }, { status: 400 });
        }
      }

      try {
        const { pwned, count } = await isPwned(password);
        if (pwned) {
          return NextResponse.json(
            { error: `This password appears in ${count} breached datasets. Choose another.` },
            { status: 400 }
          );
        }
      } catch (e) {
        console.warn('HIBP check failed, continuing', e);
      }

      const newHash = await bcrypt.hash(password, BCRYPT_ROUNDS);
      const now = new Date();

      await prisma.$transaction(async (tx) => {
        if (user.password) {
          await tx.passwordHistory.create({
            data: {
              userId,
              passwordHash: user.password,
            },
          });
        }

        await tx.user.update({
          where: { id: userId },
          data: { password: newHash, updatedAt: now },
        });

        await tx.passwordChangeLog.create({
          data: {
            userId,
            changedBy: null,
            ip,
            userAgent,
          },
        });

        // CREATE SYSTEM MESSAGE FOR USER
        await tx.message.create({
          data: {
            title: 'Your password was changed',
            content: {
              text: `Your account password was changed on ${now.toLocaleString()} from IP ${ip}. If this wasn't you, please contact support immediately.`,
            },
            messageCategory: 'system',
            allowResponses: false,
            senderEmail: user.email ?? undefined,
            senderIp: ip ?? undefined,
            createdById: userId,
          },
        });

        const rows = await tx.passwordHistory.findMany({
          where: { userId },
          orderBy: { createdAt: 'desc' },
          select: { id: true },
          skip: MAX_HISTORY,
        });
        if (rows.length > 0) {
          const ids = rows.map((r) => r.id);
          await tx.passwordHistory.deleteMany({ where: { id: { in: ids } } });
        }

        await tx.session.updateMany({
          where: { userId, active: true },
          data: { active: false, endedAt: now },
        });
        await tx.user.update({ where: { id: userId }, data: { loginStatus: 'inactive' } });
      });

      // Logging for troubleshooting
      console.log('[PATCH] Sending password change email to', user.email, { ip, userAgent });
      // Notify user by email (IP/user-agent included)
      if (user.email) {
        try {
          const emailResult = await sendPasswordChangeEmail(user.email, {
            time: now.toISOString(),
            ip,
            userAgent,
            username: user.username,
            firstName: user.firstName,
          });
          console.log('[PATCH] Password change email sent:', emailResult?.messageId || emailResult);
        } catch (e) {
          console.error('[PATCH] Password change email failed:', e);
        }
      }

      return NextResponse.json({ message: 'Password changed' });
    }

    // Standard profile update flow
    const updateData: any = {};

    if (firstName) updateData.firstName = firstName;
    if (lastName) updateData.lastName = lastName;
    if (email) updateData.email = email;
    if (typeof role !== 'undefined') updateData.role = role;
    if (typeof about !== 'undefined') updateData.about = about;

    if (newUsername && newUsername !== user.username) {
      const existing = await prisma.user.findUnique({ where: { username: newUsername } });
      if (existing) {
        return NextResponse.json({ error: 'Username already taken' }, { status: 400 });
      }
      updateData.username = newUsername;
    }

    if (imageFile && (imageFile as any).size > 0) {
      if (oldImageUrl) {
        try {
          const filePath = path.join(process.cwd(), 'public', oldImageUrl);
          await fs.unlink(filePath);
        } catch {
          // ignore file not found
        }
      }
      const ext = imageFile.name.split('.').pop() || 'jpg';
      const filename = `${randomUUID()}.${ext}`;
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const uploadDir = path.join(process.cwd(), 'public/assets/images/users');
      await fs.mkdir(uploadDir, { recursive: true });
      await fs.writeFile(path.join(uploadDir, filename), buffer);
      updateData.image = `/assets/images/users/${filename}`;
    }

    const hasUpdates = Object.keys(updateData).length > 0;
    if (!hasUpdates) {
      const current = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          username: true,
          email: true,
          image: true,
          firstName: true,
          lastName: true,
          role: true,
          about: true,
        },
      });
      return NextResponse.json({ message: 'No changes', user: current });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        username: true,
        email: true,
        image: true,
        firstName: true,
        lastName: true,
        role: true,
        about: true,
      },
    });

    // Invalidate cache (redis commented)
    // try {
    //   await Promise.all([
    //     redis.del(SINGLE_USER_CACHE_PREFIX + userId),
    //     redis.del(USERS_CACHE_KEY),
    //   ]);
    // } catch (err) {
    //   console.warn('Redis del failed during PATCH:', err);
    // }

    return NextResponse.json({ message: 'User updated', user: updatedUser });
  } catch (err: any) {
    console.error('PATCH /api/users/:id error', err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    const userId = params.id;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (user.image) {
      try {
        const filePath = path.join(process.cwd(), 'public', user.image);
        await fs.unlink(filePath);
      } catch (e) {
        // It's ok if the file doesn't exist
      }
    }

    await prisma.user.delete({ where: { id: userId } });

    // Invalidate cache (redis commented)
    // try {
    //   await Promise.all([
    //     redis.del(SINGLE_USER_CACHE_PREFIX + userId),
    //     redis.del(USERS_CACHE_KEY),
    //   ]);
    // } catch (err) {
    //   console.warn('Redis del failed during DELETE:', err);
    // }

    return NextResponse.json({ message: 'User deleted' });
  } catch (err: any) {
    console.error('DELETE /api/users/:id error', err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}

export async function POST() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
