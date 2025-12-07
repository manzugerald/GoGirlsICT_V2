import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import bcrypt from 'bcrypt';
import path from 'path';
import { randomUUID } from 'crypto';
import { promises as fs } from 'fs';
// import { redis } from '@/utils/redis'; // Redis kept commented per request

const USERS_CACHE_KEY = 'users:all';
// const USERS_CACHE_TTL = 60 * 60 * 24 * 7; // 7 days (redis disabled)

/**
 * GET /api/users
 * - Default: return list of users (sanitized)
 * - ?checkAvailable=1&username=... -> { available: true|false }
 * - ?checkExact=1&userId=...&username=... -> { valid: true|false }
 */
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    // check-available behavior
    if (searchParams.has('checkAvailable')) {
      const username = searchParams.get('username') ?? '';
      if (!username) return NextResponse.json({ available: false });
      const user = await prisma.user.findUnique({ where: { username } });
      return NextResponse.json({ available: !user });
    }

    // check-exact behavior
    if (searchParams.has('checkExact')) {
      const userId = searchParams.get('userId');
      const username = searchParams.get('username');
      if (!userId || !username) return NextResponse.json({ valid: false });
      const user = await prisma.user.findUnique({ where: { id: userId } });
      return NextResponse.json({ valid: !!user && user.username === username });
    }

    // Default: list users (sanitized)
    // Redis usage commented out for now.
    // try {
    //   const cached = await redis.get(USERS_CACHE_KEY);
    //   if (cached) {
    //     return NextResponse.json(JSON.parse(cached));
    //   }
    // } catch (err) {
    //   console.warn('Redis get failed for users list', err);
    // }

    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        image: true,
        createdAt: true,
      },
    });

    // try {
    //   await redis.set(USERS_CACHE_KEY, JSON.stringify(users), 'EX', USERS_CACHE_TTL);
    // } catch (err) {
    //   console.warn('Redis set failed for users list', err);
    // }

    return NextResponse.json(users);
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return NextResponse.json(
      { error: 'Internal Server Error - Please contact the Admin' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/users
 *
 * Two uses:
 * - application/json { action?: 'delete-image', imageUrl } -> deletes image file
 * - multipart/form-data -> create user (firstName, lastName, username, email, password, image, role?)
 */
export async function POST(req: Request) {
  const contentType = req.headers.get('content-type') ?? '';

  // JSON-based delete-image (backwards compatibility: previously /api/users/delete-image)
  if (contentType.includes('application/json')) {
    try {
      const body = await req.json();
      const imageUrl = body?.imageUrl;
      if (!imageUrl) {
        return NextResponse.json({ error: 'No imageUrl' }, { status: 400 });
      }
      const filePath = path.join(process.cwd(), 'public', imageUrl);
      await fs.unlink(filePath);
      return NextResponse.json({ message: 'Image deleted' });
    } catch (err: any) {
      console.warn('Failed to delete image', err);
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }
  }

  // Otherwise treat as form-data user creation
  try {
    const formData = await req.formData();
    const firstName = (formData.get('firstName') as string) ?? null;
    const lastName = (formData.get('lastName') as string) ?? null;
    const email = (formData.get('email') as string) ?? null;
    const username = (formData.get('username') as string) ?? null;
    const password = (formData.get('password') as string) ?? null;
    const imageFile = formData.get('image') as File | null;
    const role = (formData.get('role') as string) ?? undefined;

    if (!firstName || !lastName || !username || !email || !password || !imageFile) {
      return NextResponse.json({ error: 'All fields and image are required' }, { status: 400 });
    }

    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ username }, { email }] },
    });
    if (existingUser) {
      return NextResponse.json({ error: 'Username or email already exists' }, { status: 400 });
    }

    const ext = imageFile.name.split('.').pop() || 'jpg';
    const filename = `${randomUUID()}.${ext}`;
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const uploadDir = path.join(process.cwd(), 'public/assets/images/users');
    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(path.join(uploadDir, filename), buffer);
    const imageUrl = `/assets/images/users/${filename}`;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
        image: imageUrl,
        role: role ?? undefined,
      },
    });

    // Store initial password hash in history so reuse checks work immediately
    try {
      await prisma.passwordHistory.create({
        data: {
          userId: user.id,
          passwordHash: hashedPassword,
        },
      });
    } catch (e) {
      console.warn('Failed to seed passwordHistory for new user', e);
    }

    // Invalidate cache after create (redis disabled)
    // try {
    //   await redis.del(USERS_CACHE_KEY);
    // } catch (err) {
    //   console.warn('Redis del failed after create user', err);
    // }

    return NextResponse.json({ message: 'User created', user });
  } catch (err: any) {
    console.error('Failed to create user:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Explicitly respond to other unsupported methods with 405
export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
