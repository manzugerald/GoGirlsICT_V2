'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import ImagesCarousel from '@/app/components/imagesCarousel'; // extracted reusable carousel
import { extractPlainText, normalizeTiptapDoc } from '@/lib/tiptap';
import '@/assets/styles/tiptap-editor.css';

// Dynamically load the Tiptap JSON viewer (no SSR)
const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

// This section renders Project records defensively (optional beneficiary
// links, legacy content shapes handled via extractPlainText, etc.) rather
// than one fixed shape — hence one deliberate loose alias here instead of
// scattering `any`.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ProjectRecord = any;

export default function ProjectsSection({
  paginatedData,
  handleEdit,
  handleDelete,
  TableActions,
  deleteId,
  deleteLoading,
  onToggleControls,
}: {
  paginatedData: ProjectRecord[];
  page: number;
  rowsPerPage: number;
  handleEdit: (record: ProjectRecord) => void;
  handleDelete: (id: string | number) => void;
  currentUserRole?: string;
  TableActions?: React.ElementType;
  deleteId?: string | number | null;
  deleteLoading?: boolean;
  onToggleControls?: (hide: boolean) => void;
}) {
  const [viewing, setViewing] = useState<ProjectRecord | null>(null);

  // responsive maxChars (limits preview length)
  const [maxChars, setMaxChars] = useState<number>(500);
  const updateResponsive = useCallback(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1200;
    if (w >= 1024) setMaxChars(500);
    else if (w >= 768) setMaxChars(300);
    else setMaxChars(180);
  }, []);
  useEffect(() => {
    updateResponsive();
    window.addEventListener('resize', updateResponsive);
    return () => window.removeEventListener('resize', updateResponsive);
  }, [updateResponsive]);

  useEffect(() => {
    if (typeof onToggleControls === 'function') onToggleControls(!!viewing);
    return () => {
      if (typeof onToggleControls === 'function') onToggleControls(false);
    };
  }, [viewing, onToggleControls]);

  function escapeRegExp(str: string) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Build preview string trimmed to max chars and omitting title if present
  function buildPreview(projectContent: ProjectRecord, max = 500, title?: string): string {
    if (projectContent == null) return '';

    let fullText = extractPlainText(projectContent).replace(/\s+/g, ' ').trim();

    // Remove title occurrences from preview (case-insensitive), if title provided and non-empty
    if (title && typeof title === 'string' && title.trim().length > 0) {
      const trimmedTitle = title.trim();
      try {
        const re = new RegExp(escapeRegExp(trimmedTitle), 'gi');
        fullText = fullText.replace(re, '').replace(/\s+/g, ' ').trim();
      } catch {
        // if regex fails for any reason, skip removal
      }
    }

    if (!Number.isFinite(max)) return fullText;
    if (fullText.length <= max) return fullText;
    return fullText.slice(0, max).trim() + '...';
  }

  // Project card component
  function ProjectCard({ project }: { project: ProjectRecord }) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [lineClamp, setLineClamp] = useState<number>(6);

    // ResizeObserver computes appropriate number of lines for the preview
    useEffect(() => {
      const el = cardRef.current;
      if (!el) return;
      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const width = entry.contentRect.width;

          // tuned mapping (avoid tiny clamps)
          let lines = 6;
          if (width < 320) lines = 4;
          else if (width < 380) lines = 5;
          else if (width < 420) lines = 6;
          else if (width < 640) lines = 6;
          else if (width < 880) lines = 8;
          else lines = 10;

          setLineClamp(lines);
        }
      });
      ro.observe(el);
      // initial measure
      const rect = el.getBoundingClientRect();
      if (rect && rect.width) {
        const width = rect.width;
        let lines = 6;
        if (width < 320) lines = 4;
        else if (width < 380) lines = 5;
        else if (width < 420) lines = 6;
        else if (width < 640) lines = 6;
        else if (width < 880) lines = 8;
        else lines = 10;
        setLineClamp(lines);
      }
      return () => ro.disconnect();
    }, []);

    const createdByLabel = project.createdBy
      ? `${project.createdBy.firstName ?? ''} ${project.createdBy.lastName ?? ''}`.trim()
      : 'System';
    const createdAt = project.createdAt ? new Date(project.createdAt).toLocaleString() : '-';
    const preview = buildPreview(project.content, maxChars, extractPlainText(project.title));
    const images = Array.isArray(project.images) ? project.images : [];

    return (
      <div
        ref={cardRef}
        className="p-4 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow overflow-hidden box-border"
      >
        <div className="flex flex-col gap-4 items-start">
          {/* Title */}
          <div className="w-full">
            <h3 className="font-semibold text-base sm:text-lg break-words whitespace-normal m-0">
              {extractPlainText(project.title).trim() || 'Untitled Project'}
            </h3>
          </div>

          {/* Carousel/banner placed immediately under the title inside the card */}
          {images.length > 0 && <ImagesCarousel images={images} imgHeightClass="h-40 md:h-56" />}

          {/* badges BELOW the carousel/title */}
          <div className="mt-2 flex items-start gap-2 flex-wrap">
            <div className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm whitespace-nowrap">
              {project.projectStatus ?? '-'}
            </div>

            <div className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm whitespace-nowrap">
              {project.publishStatus ?? '-'}
            </div>
          </div>

          {/* Truncated preview with responsive line-clamp */}
          <div className="mt-2 w-full">
            <div
              style={{
                display: '-webkit-box',
                WebkitLineClamp: lineClamp,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
              className="text-sm text-gray-700 dark:text-gray-300 break-words whitespace-normal pr-4"
            >
              {preview}
            </div>
          </div>

          {/* Meta */}
          <div className="mt-2 w-full text-xs text-gray-500">
            By: {createdByLabel} · {createdAt}
          </div>

          {/* Buttons moved to the bottom of the card */}
          <div className="mt-2 w-full flex items-center justify-end gap-2 flex-wrap">
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => setViewing(project)}
              className="!py-1"
            >
              View
            </Button>

            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => handleEdit(project)}
              className="!py-1"
            >
              Edit
            </Button>

            <Button
              type="button"
              size="sm"
              variant="destructive"
              onClick={async () => {
                await handleDelete(project.id);
              }}
              disabled={Boolean(deleteLoading && deleteId === project.id)}
              className="!py-1"
            >
              {deleteLoading && deleteId === project.id ? 'Deleting...' : 'Delete'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Full inline view: show title + carousel + content + bottom buttons (same layout as card but expanded)
  function renderFullProject(project: ProjectRecord) {
    const created = project.createdAt ? new Date(project.createdAt).toLocaleString() : '-';
    const updated = project.updatedAt ? new Date(project.updatedAt).toLocaleString() : '-';

    const images = Array.isArray(project.images) ? project.images : [];

    // Beneficiaries linked to this project.
    const beneficiaries: { id: string; name: string; image?: string | null }[] = Array.isArray(
      project.beneficiaries
    )
      ? project.beneficiaries
          .map((link: ProjectRecord) => link.beneficiary)
          .filter(Boolean)
          .map((b: ProjectRecord) => ({
            id: b.id,
            name: `${b.firstName ?? ''} ${b.lastName ?? ''}`.trim() || 'Unnamed beneficiary',
            image: b.image,
          }))
      : [];

    return (
      <div className="w-full max-w-4xl mx-auto p-4 space-y-4 overflow-hidden border rounded-md bg-white dark:bg-gray-900">
        <div>
          <div className="text-2xl font-semibold">
            <TiptapJsonViewer
              content={normalizeTiptapDoc(project.title)}
              className="prose dark:prose-invert max-w-none [&_p]:m-0"
            />
          </div>
          <div className="text-sm text-gray-500 mt-1">
            By:{' '}
            {project.createdBy
              ? `${project.createdBy.firstName ?? ''} ${project.createdBy.lastName ?? ''}`.trim()
              : 'System'}{' '}
            · Created: {created} · Updated: {updated}
          </div>
        </div>

        {/* Carousel/banner inside the card, immediately below the title */}
        {images.length > 0 && (
          <ImagesCarousel images={images} imgHeightClass="h-56 md:h-72" autoplayMs={0} />
        )}

        <div>
          <div className="text-sm text-gray-500">Content</div>
          <div className="mt-2 rounded border bg-white dark:bg-gray-900 p-3 overflow-auto">
            <TiptapJsonViewer content={normalizeTiptapDoc(project.content)} />
          </div>
        </div>

        {images.length > 1 && (
          <div>
            <div className="text-sm text-gray-500 mb-2">All images</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {images.map((img: string) => (
                <img
                  key={img}
                  src={img}
                  alt="project"
                  className="w-full h-28 object-cover rounded border"
                />
              ))}
            </div>
          </div>
        )}

        {beneficiaries.length > 0 && (
          <div>
            <div className="text-sm text-gray-500 mb-2">
              Beneficiaries ({beneficiaries.length})
            </div>
            <div className="flex flex-wrap gap-3">
              {beneficiaries.map((b) => (
                <div
                  key={b.id}
                  className="flex items-center gap-2 rounded-full border bg-gray-50 dark:bg-gray-950 pl-1 pr-3 py-1"
                >
                  {b.image ? (
                    <img src={b.image} alt={b.name} className="w-7 h-7 rounded-full object-cover" />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-800" />
                  )}
                  <span className="text-sm">{b.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Buttons at bottom of expanded card */}
        <div className="flex items-center justify-between">
          <div>
            <Button variant="outline" onClick={() => setViewing(null)} className="!py-1">
              Back
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleEdit(project)}
              className="!py-1"
            >
              Edit
            </Button>

            <Button
              size="sm"
              variant="destructive"
              onClick={async () => {
                await handleDelete(project.id);
                setViewing(null);
              }}
              disabled={Boolean(deleteLoading && deleteId === project.id)}
              className="!py-1"
            >
              {deleteLoading && deleteId === project.id ? 'Deleting...' : 'Delete'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // When viewing inline
  if (viewing) {
    return (
      <div className="space-y-4">
        <div className="flex items-center mb-2">
          <Button variant="ghost" onClick={() => setViewing(null)}>
            ← Back to list
          </Button>
        </div>

        <div className="p-0">{renderFullProject(viewing)}</div>
      </div>
    );
  }

  // Listing
  return (
    <>
      <div className="space-y-4">
        {(!Array.isArray(paginatedData) || paginatedData.length === 0) && (
          <div className="text-center py-8 text-gray-500">No projects found.</div>
        )}

        {Array.isArray(paginatedData) &&
          paginatedData.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>

      {/* Optional TableActions */}
      <div className="mt-4">
        {TableActions ? (
          <TableActions data={paginatedData} columns={[]} tableRef={React.createRef()} />
        ) : null}
      </div>
    </>
  );
}
