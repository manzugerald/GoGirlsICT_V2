import path from 'path';
import { promises as fs } from 'fs';
import { randomUUID } from 'crypto';

// Helper to save uploaded files and return their URLs/paths
export async function saveUploadedFiles(
  formData: FormData,
  field: string, // e.g. "files", "bannerFile", "eventFileUpload"
  type: 'image' | 'pdf' | 'video', // decides path and url
  eventSlug: string // to organize per event (for video, use e.g. 'homePage' or any subfolder)
): Promise<string[]> {
  const files = formData.getAll(field) as File[];
  const savedFiles: string[] = [];
  // Set destination directory and public path accordingly
  let destDir = '';
  let publicBase = '';
  if (type === 'image') {
    destDir = path.join(process.cwd(), 'public', 'assets', 'images', 'events', eventSlug);
    publicBase = `/assets/images/events/${eventSlug}`;
  } else if (type === 'pdf') {
    destDir = path.join(process.cwd(), 'public', 'assets', 'pdfs', 'events', eventSlug);
    publicBase = `/assets/pdfs/events/${eventSlug}`;
  } else {
    // video
    const sub = eventSlug && eventSlug.trim() ? eventSlug : 'homePage';
    destDir = path.join(process.cwd(), 'public', 'assets', 'videos', sub);
    publicBase = `/assets/videos/${sub}`;
  }
  if (files && files.length > 0) {
    await fs.mkdir(destDir, { recursive: true });
    for (const file of files) {
      if (!file || typeof file === 'string') continue;
      const ext = file.name.split('.').pop();
      const filename = `${randomUUID()}.${ext}`;
      const buffer = Buffer.from(await file.arrayBuffer());
      const filePath = path.join(destDir, filename);
      await fs.writeFile(filePath, buffer);
      savedFiles.push(`${publicBase}/${filename}`);
    }
  }
  return savedFiles;
}

// Helper for single file (banner or single PDF or single video)
export async function saveUploadedFile(
  formData: FormData,
  field: string,
  type: 'image' | 'pdf' | 'video',
  eventSlug: string
): Promise<string | null> {
  const file = formData.get(field) as File | null;
  if (!file || typeof file === 'string') return null;

  let destDir = '';
  let publicBase = '';
  if (type === 'image') {
    destDir = path.join(process.cwd(), 'public', 'assets', 'images', 'events', eventSlug);
    publicBase = `/assets/images/events/${eventSlug}`;
  } else if (type === 'pdf') {
    destDir = path.join(process.cwd(), 'public', 'assets', 'pdfs', 'events', eventSlug);
    publicBase = `/assets/pdfs/events/${eventSlug}`;
  } else {
    // video
    const sub = eventSlug && eventSlug.trim() ? eventSlug : 'homePage';
    destDir = path.join(process.cwd(), 'public', 'assets', 'videos', sub);
    publicBase = `/assets/videos/${sub}`;
  }

  await fs.mkdir(destDir, { recursive: true });

  // Basic server-side validation for video
  if (type === 'video') {
    const size = (file as any).size ?? 0;
    const MAX_FILE_BYTES = 50 * 1024 * 1024; // 50MB
    if (size > MAX_FILE_BYTES) {
      throw new Error('File too large (max 50MB)');
    }
    const name = (file as any).name ?? '';
    const ext = path.extname(name).toLowerCase();
    const allowed = ['.mov', '.mp4', '.gif'];
    if (!allowed.includes(ext)) {
      throw new Error('Unsupported file extension. Allowed: .mov, .mp4, .gif');
    }
  }

  const ext = file.name.split('.').pop();
  const filename = `${randomUUID()}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(destDir, filename);
  await fs.writeFile(filePath, buffer);
  return `${publicBase}/${filename}`;
}
