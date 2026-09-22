import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import type { Session } from 'next-auth';
import { revalidatePath } from 'next/cache';
import {
  clearResourcePoster,
  getResourcePosterUrl,
  setResourcePoster,
  RESOURCE_POSTER_TYPES,
  type ResourcePosterType,
} from '@/lib/resourcePosterMeta';

// Manages the single, whole-page poster for any page listed in
// RESOURCE_POSTER_TYPES (Podcasts, Radio Talkshows, About, Programs,
// Impact, SNS, Get Involved) — see lib/resourcePosterMeta.ts. One route
// for every type instead of a near-duplicate file per page.

const NO_STORE = { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' };

// Which page each poster type's revalidatePath should hit — /resources
// serves two of these types (podcasts, talkshows) off one route.
const REVALIDATE_PATH: Record<ResourcePosterType, string> = {
  podcasts: '/resources',
  talkshows: '/resources',
  about: '/about',
  programs: '/programs',
  impact: '/impact',
  sns: '/sns',
  'get-involved-events': '/get-involved',
  'get-involved-volunteer': '/get-involved',
  'get-involved-contact': '/get-involved',
  'get-involved-donate': '/get-involved',
};

function roleFrom(session: Session | null): string {
  return session?.user?.role ?? 'guest';
}

function parseType(raw: string): ResourcePosterType | null {
  return (RESOURCE_POSTER_TYPES as string[]).includes(raw) ? (raw as ResourcePosterType) : null;
}

// PUBLIC — each page reads this to render its hero banner.
export async function GET(_req: Request, context: { params: Promise<{ type: string }> }) {
  const { type: raw } = await context.params;
  const type = parseType(raw);
  if (!type) {
    return NextResponse.json({ error: 'Unknown poster type' }, { status: 404, headers: NO_STORE });
  }

  try {
    const url = await getResourcePosterUrl(type);
    return NextResponse.json({ url }, { headers: NO_STORE });
  } catch (error) {
    console.error(`[/api/posters/${type}] Failed to read poster:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: NO_STORE });
  }
}

// super/admin/moderator only.
export async function POST(req: Request, context: { params: Promise<{ type: string }> }) {
  const { type: raw } = await context.params;
  const type = parseType(raw);
  if (!type) {
    return NextResponse.json({ error: 'Unknown poster type' }, { status: 404, headers: NO_STORE });
  }

  try {
    const session = await getServerSession(authOptions);
    if (!['super', 'admin', 'moderator'].includes(roleFrom(session))) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: NO_STORE });
    }

    const formData = await req.formData();
    const file = formData.get('file');
    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400, headers: NO_STORE });
    }

    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    if (!['png', 'jpg', 'jpeg'].includes(ext)) {
      return NextResponse.json({ error: 'Only PNG or JPG images are allowed' }, { status: 400, headers: NO_STORE });
    }

    const url = await setResourcePoster(type, file);
    revalidatePath(REVALIDATE_PATH[type]);

    return NextResponse.json({ url }, { headers: NO_STORE });
  } catch (error) {
    console.error(`[/api/posters/${type}] Failed to save poster:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: NO_STORE });
  }
}

// super/admin/moderator only.
export async function DELETE(_req: Request, context: { params: Promise<{ type: string }> }) {
  const { type: raw } = await context.params;
  const type = parseType(raw);
  if (!type) {
    return NextResponse.json({ error: 'Unknown poster type' }, { status: 404, headers: NO_STORE });
  }

  try {
    const session = await getServerSession(authOptions);
    if (!['super', 'admin', 'moderator'].includes(roleFrom(session))) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: NO_STORE });
    }

    await clearResourcePoster(type);
    revalidatePath(REVALIDATE_PATH[type]);

    return NextResponse.json({ success: true }, { headers: NO_STORE });
  } catch (error) {
    console.error(`[/api/posters/${type}] Failed to remove poster:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: NO_STORE });
  }
}
