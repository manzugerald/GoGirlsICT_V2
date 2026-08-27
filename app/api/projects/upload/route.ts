import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/db/prisma';
import { slugify } from '@/lib/utils';
import { extractPlainText, isTiptapDocEmpty } from '@/lib/tiptap';
import { redis } from '@/utils/redis'; // <-- Include Redis

export const POST = async (req: Request) => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await req.formData();
  const files = formData.getAll('files') as File[];
  const title = formData.get('title') as string | null;
  const content = formData.get('content') as string | null;
  const projectStatus = formData.get('projectStatus') as string | null;
  const publishStatus = formData.get('publishStatus') as string | null;

  if (!title || !content || !projectStatus || !publishStatus) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  if (!files || files.length === 0) {
    return NextResponse.json({ error: 'Please upload at least one image.' }, { status: 400 });
  }

  let parsedContent;
  try {
    parsedContent = JSON.parse(content);
  } catch {
    return NextResponse.json({ error: 'Invalid content format' }, { status: 400 });
  }

  let parsedTitle;
  try {
    parsedTitle = JSON.parse(title);
  } catch {
    return NextResponse.json({ error: 'Invalid title format' }, { status: 400 });
  }
  if (isTiptapDocEmpty(parsedTitle)) {
    return NextResponse.json({ error: 'Missing required field: title' }, { status: 400 });
  }

  // Handle image uploads
  const allowedImageExts = ['.png', '.jpg', '.jpeg'];
  const uploadDir = '/public/assets/images/projects';
  const uploadPath = path.join(process.cwd(), uploadDir);
  await fs.mkdir(uploadPath, { recursive: true });

  const imagePaths: string[] = [];
  for (const file of files) {
    const ext = path.extname(file.name).toLowerCase();
    if (!allowedImageExts.includes(ext)) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }
    const filename = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
    const filePath = path.join(uploadPath, filename);
    const publicPath = path.posix.join('/assets/images/projects', filename);
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);
    imagePaths.push(publicPath);
  }

  const slug = slugify(extractPlainText(parsedTitle).trim());
  const userId = session.user.id;

  const project = await prisma.project.create({
    data: {
      title: parsedTitle,
      slug,
      content: parsedContent,
      images: imagePaths,
      projectStatus,
      publishStatus,
      createdById: userId,
      updatedById: userId,
      approvedById: null,
    },
  });

  // Invalidate Redis cache so the next GET will show new data
  await redis.del('projects:all');

  return NextResponse.json({
    success: true,
    project,
  });
};
