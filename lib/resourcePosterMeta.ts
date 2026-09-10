import { promises as fs } from 'fs';
import path from 'path';

// Every top-level page's hero banner ("poster") is a single wide image per
// page/content type, not a field on any individual entry (Podcasts and
// Radio Talkshows originally each had their own per-row `poster` column;
// that's gone — see prisma/schema.prisma). This file is the source of
// truth for the one active poster per type, tracked with a small
// `meta.json` living right next to the image in its own upload folder:
//
//   public/assets/images/podcasts/poster/meta.json
//   public/assets/images/talkshows/poster/meta.json
//   public/assets/images/about/poster/meta.json
//   public/assets/images/programs/poster/meta.json
//   public/assets/images/impact/poster/meta.json
//   public/assets/images/sns/poster/meta.json
//   public/assets/images/get-involved/poster/meta.json
//
// Exactly one image file is kept per folder — uploading a new poster
// deletes the previous one — so the folder itself never accumulates stray
// uploads.

export type ResourcePosterType =
  | 'podcasts'
  | 'talkshows'
  | 'about'
  | 'programs'
  | 'impact'
  | 'sns'
  | 'get-involved';

export const RESOURCE_POSTER_TYPES: ResourcePosterType[] = [
  'podcasts',
  'talkshows',
  'about',
  'programs',
  'impact',
  'sns',
  'get-involved',
];

const PUBLIC_SUBDIR: Record<ResourcePosterType, string> = {
  podcasts: 'assets/images/podcasts/poster',
  talkshows: 'assets/images/talkshows/poster',
  about: 'assets/images/about/poster',
  programs: 'assets/images/programs/poster',
  impact: 'assets/images/impact/poster',
  sns: 'assets/images/sns/poster',
  'get-involved': 'assets/images/get-involved/poster',
};

const META_FILENAME = 'meta.json';

type PosterMeta = { filename: string; updatedAt: string };

function dirFor(type: ResourcePosterType): string {
  return path.join(process.cwd(), 'public', ...PUBLIC_SUBDIR[type].split('/'));
}

function metaPathFor(type: ResourcePosterType): string {
  return path.join(dirFor(type), META_FILENAME);
}

async function readMeta(type: ResourcePosterType): Promise<PosterMeta | null> {
  try {
    const raw = await fs.readFile(metaPathFor(type), 'utf8');
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.filename === 'string') return parsed as PosterMeta;
    return null;
  } catch {
    return null;
  }
}

/** Public URL of the current poster for `type`, or null if none is set. */
export async function getResourcePosterUrl(type: ResourcePosterType): Promise<string | null> {
  const meta = await readMeta(type);
  if (!meta) return null;
  return `/${PUBLIC_SUBDIR[type]}/${meta.filename}`;
}

/** Saves `file` as the new poster for `type`, removing whichever one it replaces. */
export async function setResourcePoster(type: ResourcePosterType, file: File): Promise<string> {
  const dir = dirFor(type);
  await fs.mkdir(dir, { recursive: true });

  const previous = await readMeta(type);
  if (previous) {
    await fs.rm(path.join(dir, previous.filename), { force: true }).catch(() => {});
  }

  const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
  const filename = `${Date.now()}_poster.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(dir, filename), buffer);

  const meta: PosterMeta = { filename, updatedAt: new Date().toISOString() };
  await fs.writeFile(metaPathFor(type), JSON.stringify(meta, null, 2));

  return `/${PUBLIC_SUBDIR[type]}/${filename}`;
}

/** Removes the current poster for `type`, if any. */
export async function clearResourcePoster(type: ResourcePosterType): Promise<void> {
  const dir = dirFor(type);
  const previous = await readMeta(type);
  if (previous) {
    await fs.rm(path.join(dir, previous.filename), { force: true }).catch(() => {});
  }
  await fs.rm(metaPathFor(type), { force: true }).catch(() => {});
}
