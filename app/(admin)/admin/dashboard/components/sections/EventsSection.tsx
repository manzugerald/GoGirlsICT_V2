'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import EventView from '@/app/(admin)/admin/dashboard/components/views/eventView';
import { Button } from '@/components/ui/button';

// Dynamically load the Tiptap JSON viewer (no SSR) — kept for description rendering if needed
const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

export default function EventsSection({
  paginatedData,
  page,
  rowsPerPage,
  handleEdit,
  handleDelete,
  currentUserRole,
  TableActions, // kept for compatibility though not used for card UI
  deleteId,
  deleteLoading,
  onToggleControls,
}: {
  paginatedData: any[];
  page: number;
  rowsPerPage: number;
  handleEdit: (record: any) => void;
  handleDelete: (id: string | number) => void;
  currentUserRole?: string;
  TableActions?: React.FC<any>;
  deleteId?: string | number | null;
  deleteLoading?: boolean;
  onToggleControls?: (hide: boolean) => void;
}) {
  const [viewingEvent, setViewingEvent] = useState<any | null>(null);
  const [data, setData] = useState<any[]>(paginatedData ?? []);

  useEffect(() => {
    setData(paginatedData ?? []);
  }, [paginatedData]);

  // Notify parent (dashboard) to hide/show controls when an event is opened inline
  useEffect(() => {
    if (typeof onToggleControls === 'function') onToggleControls(!!viewingEvent);
    return () => {
      if (typeof onToggleControls === 'function') onToggleControls(false);
    };
  }, [viewingEvent, onToggleControls]);

  // Helpers
  function formatDate(d: any) {
    if (!d) return '-';
    try {
      return new Date(d).toLocaleString();
    } catch {
      return String(d);
    }
  }

  // Extract plain text from tiptap-style JSON or return string
  function extractTextFromTiptap(node: any): string {
    if (!node) return '';
    if (typeof node === 'string') return node;
    let text = '';
    if (Array.isArray(node)) {
      for (const n of node) text += extractTextFromTiptap(n);
      return text;
    }
    if (typeof node === 'object') {
      if (typeof node.text === 'string') {
        text += node.text;
      }
      if (Array.isArray(node.content)) {
        for (const child of node.content) {
          text += extractTextFromTiptap(child);
        }
      }
      return text;
    }
    return '';
  }

  function buildPreview(content: any, maxChars = 120) {
    if (content == null) return '';
    let fullText = '';
    if (typeof content === 'string') {
      try {
        const parsed = JSON.parse(content);
        if (parsed && typeof parsed === 'object') {
          fullText = extractTextFromTiptap(parsed);
        } else {
          fullText = content;
        }
      } catch {
        fullText = content;
      }
    } else if (typeof content === 'object') {
      fullText = extractTextFromTiptap(content);
    } else {
      fullText = String(content);
    }
    fullText = fullText.replace(/\s+/g, ' ').trim();
    if (fullText.length <= maxChars) return fullText;
    return fullText.slice(0, maxChars).trim() + '...';
  }

  // Banner extraction: prefer explicit banner field (eventBanner / banner),
  // do NOT return array images here — banner is separate from images array.
  function getBannerUrl(event: any): string | null {
    const candidates: any[] = [event?.eventBanner, event?.banner, event?.cover];
    for (const c of candidates) {
      if (typeof c === 'string' && c.trim()) return c;
    }
    return null;
  }

  // First image from eventImages array (or event.images) — used as "image" (separate from banner).
  function getFirstArrayImage(event: any): string | null {
    if (Array.isArray(event?.eventImages)) {
      const firstValid = event.eventImages.find(
        (i: any) => typeof i === 'string' && i.trim().length > 0
      );
      if (firstValid) return firstValid;
    }
    if (Array.isArray(event?.images)) {
      const firstValid = event.images.find(
        (i: any) => typeof i === 'string' && i.trim().length > 0
      );
      if (firstValid) return firstValid;
    }
    return null;
  }

  function getPdfUrl(event: any): string | null {
    if (event?.eventFile && typeof event.eventFile === 'string') {
      return event.eventFile;
    }
    if (Array.isArray(event?.eventFiles) && event.eventFiles.length > 0) {
      const pdf = event.eventFiles.find(
        (f: string) => typeof f === 'string' && f.toLowerCase().endsWith('.pdf')
      );
      if (pdf) return pdf;
      return typeof event.eventFiles[0] === 'string' ? event.eventFiles[0] : null;
    }
    if (Array.isArray(event?.files) && event.files.length > 0) {
      const pdf = event.files.find(
        (f: string) => typeof f === 'string' && f.toLowerCase().endsWith('.pdf')
      );
      if (pdf) return pdf;
      return typeof event.files[0] === 'string' ? event.files[0] : null;
    }
    return null;
  }

  // Render the full event inline (title left-aligned, banner directly below title spanning full width)
  // After details/description, display the first array image (if any).
  function renderFullEvent(ev: any) {
    const created = formatDate(ev.createdAt ?? ev.eventStartDate);
    const updated = formatDate(ev.updatedAt ?? ev.eventEndDate);
    const pdfUrl = getPdfUrl(ev);

    const title = ev.eventTitle ?? ev.title ?? 'Event';
    const bannerUrl = getBannerUrl(ev);
    const firstImage = getFirstArrayImage(ev);

    return (
      <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-left">{title}</h1>

          {/* Banner below the title spanning full width */}
          {bannerUrl ? (
            <div className="mt-4 w-full">
              <img src={bannerUrl} alt={title} className="w-full h-[360px] object-cover rounded" />
            </div>
          ) : null}

          <div className="text-sm text-gray-500 mt-4">
            By:{' '}
            {ev.createdBy
              ? `${ev.createdBy.firstName ?? ''} ${ev.createdBy.lastName ?? ''}`.trim()
              : 'System'}{' '}
            · Created: {created} · Updated: {updated}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {pdfUrl && (
            <a
              href={pdfUrl}
              download
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Download Event File
            </a>
          )}

          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              handleEdit(ev);
            }}
          >
            Edit
          </Button>

          <Button
            size="sm"
            variant="destructive"
            onClick={async () => {
              await handleDelete(ev.id);
              setViewingEvent(null);
            }}
            disabled={Boolean(deleteLoading && deleteId === ev.id)}
          >
            {deleteLoading && deleteId === ev.id ? 'Deleting...' : 'Delete'}
          </Button>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-2">Details</div>
          <div className="rounded border bg-white dark:bg-gray-900 p-3">
            {/* Prefer EventView for full rendering if present */}
            <EventView data={ev} onClose={() => setViewingEvent(null)} />
          </div>
        </div>

        {/* After the details/description, show the first image from the images array (if any) */}
        {firstImage && (
          <div className="flex justify-start">
            <img
              src={firstImage}
              alt={`${title} image`}
              className="max-h-60 w-auto object-cover rounded border"
            />
          </div>
        )}
      </div>
    );
  }

  // Card/grid listing
  // Each card shows title, image (below title, from array), then status/start/end, short preview, and actions
  function renderGrid() {
    if (!Array.isArray(data) || data.length === 0) {
      return <div className="text-center py-8 text-gray-500">No events found.</div>;
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {data.map((event) => {
          const title = event.eventTitle ?? event.title ?? 'Untitled Event';
          const start = formatDate(event.eventStartDate);
          const end = formatDate(event.eventEndDate);
          const status = event.eventStatus ?? event.status ?? '-';
          const preview = buildPreview(event.eventDescription ?? event.eventDetails);
          const pdfUrl = getPdfUrl(event);
          const firstImage = getFirstArrayImage(event);

          return (
            <div
              key={event.id}
              className="flex flex-col p-4 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow"
              // make the entire card focusable and clickable for accessibility
              role="button"
              tabIndex={0}
              onClick={() => setViewingEvent(event)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setViewingEvent(event);
              }}
            >
              {/* Title on top (only once) */}
              <h3 className="font-semibold text-lg truncate">{title}</h3>

              {/* Image below title (use first image from event.eventImages array) */}
              {firstImage ? (
                <img
                  src={firstImage}
                  alt={title}
                  onClick={(e) => {
                    e.stopPropagation();
                    // clicking the image opens the inline view; banner will be shown below title in detailed view
                    setViewingEvent(event);
                  }}
                  className="w-full h-40 object-cover rounded mt-3 mb-3 cursor-pointer"
                />
              ) : (
                <div className="w-full h-40 bg-gray-100 dark:bg-gray-800 rounded mt-3 mb-3" />
              )}

              {/* Status / Dates */}
              <div className="text-sm text-gray-600">
                <div className="whitespace-nowrap font-medium">Status: {status}</div>
                <div className="whitespace-nowrap">Start: {start}</div>
                <div className="whitespace-nowrap">End: {end}</div>
              </div>

              {/* Preview */}
              <div className="mt-3 text-sm text-gray-700 dark:text-gray-300 flex-1">
                {preview ? (
                  <div
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {preview}
                  </div>
                ) : (
                  <div className="text-sm text-muted">No description</div>
                )}
              </div>

              {/* Actions: stop propagation so buttons don't trigger card click */}
              <div className="mt-4 flex items-center gap-2">
                {pdfUrl ? (
                  <a
                    href={pdfUrl}
                    download
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                  >
                    Download
                  </a>
                ) : null}

                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewingEvent(event);
                  }}
                >
                  View
                </Button>

                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(event);
                  }}
                >
                  Edit
                </Button>

                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  onClick={async (e) => {
                    e.stopPropagation();
                    await handleDelete(event.id);
                  }}
                  disabled={Boolean(deleteLoading && deleteId === event.id)}
                >
                  {deleteLoading && deleteId === event.id ? 'Deleting...' : 'Delete'}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // If an event is selected, show full inline view (not modal)
  if (viewingEvent) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => setViewingEvent(null)}>
              ← Back
            </Button>
            {/* Title & banner rendered inside renderFullEvent */}
          </div>
        </div>

        <div className="p-0">{renderFullEvent(viewingEvent)}</div>
      </div>
    );
  }

  // Default: grid cards
  return (
    <>
      {renderGrid()}

      {/* Optional TableActions (kept for compatibility) */}
      <div className="mt-4">
        {TableActions ? (
          <TableActions data={data} columns={[]} tableRef={React.createRef()} />
        ) : null}
      </div>
    </>
  );
}
