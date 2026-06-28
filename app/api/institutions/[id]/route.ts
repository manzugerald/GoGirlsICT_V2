import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { v4 as uuidv4 } from 'uuid';
import { promises as fs } from 'fs';
import path from 'path';
import { InstitutionCategory, InstitutionType } from '@/lib/generated/prisma';

async function saveInstitutionFiles(formData: FormData, destDir: string): Promise<string[]> {
  const files = formData.getAll('files') as File[];
  const saved: string[] = [];

  if (files && files.length > 0) {
    await fs.mkdir(destDir, { recursive: true });

    for (const file of files) {
      if (!file || typeof file === 'string') continue;

      const ext = file.name.split('.').pop();
      const filename = `${uuidv4()}.${ext}`;
      const buffer = Buffer.from(await file.arrayBuffer());
      const filePath = path.join(destDir, filename);

      await fs.writeFile(filePath, buffer);
      saved.push(`/uploads/institutions/${filename}`);
    }
  }

  return saved;
}

async function saveLogoFile(logoFile: File, destDir: string): Promise<string | null> {
  if (!logoFile || typeof logoFile === 'string') return null;

  await fs.mkdir(destDir, { recursive: true });

  const ext = logoFile.name.split('.').pop();
  const filename = `logo_${uuidv4()}.${ext}`;
  const buffer = Buffer.from(await logoFile.arrayBuffer());
  const filePath = path.join(destDir, filename);

  await fs.writeFile(filePath, buffer);

  return `/uploads/institutions/${filename}`;
}

function toEnumValue<T extends Record<string, string>>(
  enumObject: T,
  value: FormDataEntryValue | null,
  fallback: T[keyof T]
): T[keyof T] {
  const raw = typeof value === 'string' ? value.trim() : '';

  if (raw && Object.values(enumObject).includes(raw as T[keyof T])) {
    return raw as T[keyof T];
  }

  return fallback;
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const institution = await prisma.institution.findUnique({
      where: { id: params.id },
      include: {
        createdBy: { select: { username: true } },
        approvedBy: { select: { username: true } },
        updatedBy: { select: { username: true } },
        locations: true,
        beneficiaries: true,
      },
    });

    if (!institution) {
      return NextResponse.json(
        { error: 'Institution not found' },
        {
          status: 404,
          headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        }
      );
    }

    return NextResponse.json(institution, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Failed to fetch institution:', error);

    return NextResponse.json(
      { error: 'Internal Server Error' },
      {
        status: 500,
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        {
          status: 401,
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
        }
      );
    }

    const userId = session.user.id;
    const contentType = req.headers.get('content-type') ?? '';

    let formData: FormData | null = null;

    if (contentType.includes('multipart/form-data')) {
      formData = await req.formData();
    }

    if (!formData) {
      return NextResponse.json(
        { error: 'FormData required' },
        {
          status: 400,
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
        }
      );
    }

    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const headName = (formData.get('headName') as string) || '';

    const institutionType = toEnumValue(
      InstitutionType,
      formData.get('institutionType'),
      InstitutionType.other
    );

    const institutionCategory = toEnumValue(
      InstitutionCategory,
      formData.get('institutionCategory'),
      InstitutionCategory.implementing
    );

    let existingImages: string[] = [];
    let imagesToRemove: string[] = [];

    const imagesRaw = formData.get('institutionImages');
    if (imagesRaw) {
      try {
        existingImages = JSON.parse(imagesRaw as string) || [];
      } catch {
        existingImages = [];
      }
    }

    const imagesToRemoveRaw = formData.get('imagesToRemove');
    if (imagesToRemoveRaw) {
      try {
        imagesToRemove = JSON.parse(imagesToRemoveRaw as string) || [];
      } catch {
        imagesToRemove = [];
      }
    }

    const newImageUrls = await saveInstitutionFiles(
      formData,
      path.join(process.cwd(), 'public', 'uploads', 'institutions')
    );

    const logoFile = formData.get('logoFile') as File;
    const logoUrl = logoFile
      ? await saveLogoFile(
          logoFile,
          path.join(process.cwd(), 'public', 'uploads', 'institutions')
        )
      : null;

    const institutionImages = [...existingImages, ...newImageUrls].filter(
      (img) => !imagesToRemove.includes(img)
    );

    if (!name || !institutionType || !institutionCategory) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        {
          status: 400,
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
        }
      );
    }

    const updated = await prisma.institution.update({
      where: { id: params.id },
      data: {
        name,
        email: email || null,
        phone: phone || null,
        logo: logoUrl || undefined,
        institutionType,
        institutionCategory,
        headName: headName || null,
        institutionImages,
        updatedById: userId,
      },
      include: {
        locations: true,
        beneficiaries: true,
      },
    });

    return NextResponse.json(updated, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
    });
  } catch (error) {
    console.error('Failed to update institution:', error);

    return NextResponse.json(
      { error: 'Internal Server Error' },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        },
      }
    );
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const deleted = await prisma.institution.delete({
      where: { id: params.id },
    });

    return NextResponse.json(
      { message: 'Institution deleted', institution: deleted },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        },
      }
    );
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Institution not found' },
        {
          status: 404,
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
        }
      );
    }

    console.error('Failed to delete institution:', error);

    return NextResponse.json(
      { error: 'Internal Server Error' },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        },
      }
    );
  }
}