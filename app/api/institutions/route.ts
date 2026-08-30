import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { v4 as uuidv4 } from 'uuid';
import { promises as fs } from 'fs';
import path from 'path';
import { InstitutionCategory, InstitutionType } from '@/lib/generated/prisma';
import { revalidatePath } from 'next/cache';

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

export async function GET() {
  try {
    const institutions = await prisma.institution.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        createdBy: {
          select: {
            username: true,
            firstName: true,
            lastName: true,
            image: true,
          },
        },
        approvedBy: { select: { username: true } },
        updatedBy: { select: { username: true } },
        locations: true,
        beneficiaries: true,
      },
    });

    return NextResponse.json(institutions, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (err) {
    console.error('❌ Error fetching institutions:', err);

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

export async function POST(req: Request) {
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
    const locationsRaw = formData.get('locations') as string;

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

    const logoFile = formData.get('logoFile') as File;
    let logoUrl: string | null = null;

    if (logoFile) {
      logoUrl = await saveLogoFile(
        logoFile,
        path.join(process.cwd(), 'public', 'uploads', 'institutions')
      );
    } else {
      return NextResponse.json(
        { error: 'Logo file required' },
        {
          status: 400,
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
        }
      );
    }

    const institutionImages = await saveInstitutionFiles(
      formData,
      path.join(process.cwd(), 'public', 'uploads', 'institutions')
    );

    let locations: any[] = [];

    if (locationsRaw) {
      try {
        locations = JSON.parse(locationsRaw);
      } catch {
        locations = [];
      }
    }

    const userId = session.user.id;

    const institution = await prisma.institution.create({
      data: {
        name,
        email: email || null,
        phone: phone || null,
        logo: logoUrl,
        institutionImages: institutionImages || [],
        headName: headName || null,
        institutionType,
        institutionCategory,

        createdById: userId,
        approvedById: userId,
        updatedById: userId,

        locations:
          locations && Array.isArray(locations)
            ? {
                create: locations.map((loc: any) => ({
                  locationName: loc.locationName,
                  latitude: loc.latitude,
                  longitude: loc.longitude,
                })),
              }
            : undefined,
      },
      include: {
        locations: true,
      },
    });

    revalidatePath('/');
    revalidatePath('/impact');

    return NextResponse.json(institution, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
    });
  } catch (error) {
    console.error('❌ Failed to create institution:', error);

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