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

  // Try to parse JSON-like strings, otherwise return raw
  function tryParseMaybeString(v: any) {
    if (v == null) return null;
    if (typeof v !== 'string') return v;
    const s = v.trim();
    if (!s) return null;
    if ((s.startsWith('{') && s.endsWith('}')) || (s.startsWith('[') && s.endsWith(']'))) {
      try {
        return JSON.parse(s);
      } catch {
        return s;
      }
    }
    return s;
  }

  // Extract a single URL from candidate (string | object | array)
  function extractUrlFromCandidate(candidate: any): string | null {
    if (!candidate) return null;
    const value = tryParseMaybeString(candidate);
    if (!value) return null;

    if (typeof value === 'string') {
      return value.trim() || null;
    }
    if (Array.isArray(value)) {
      for (const it of value) {
        if (typeof it === 'string' && it.trim()) return it.trim();
        if (it && typeof it === 'object') {
          const maybe = it.url ?? it.src ?? it.path;
          if (maybe && typeof maybe === 'string' && maybe.trim()) return maybe.trim();
        }
      }
      return null;
    }
    if (typeof value === 'object') {
      return (value.url ?? value.src ?? value.path ?? null) as string | null;
    }
    return null;
  }

  // Extract an array of urls from candidate (string/array/object)
  function extractArrayFromCandidate(candidate: any): string[] {
    const out: string[] = [];
    if (candidate == null) return out;
    const value = tryParseMaybeString(candidate);
    if (!value) return out;

    if (Array.isArray(value)) {
      for (const it of value) {
        if (!it) continue;
        if (typeof it === 'string' && it.trim()) out.push(it.trim());
        else if (typeof it === 'object') {
          const maybe = it.url ?? it.src ?? it.path;
          if (maybe && typeof maybe === 'string' && maybe.trim()) out.push(maybe.trim());
        }
      }
      return out;
    }

    if (typeof value === 'string' && value.trim()) {
      // handle comma-separated fallback
      if (value.includes(',')) {
        const parts = value
          .split(',')
          .map((p) => p.trim())
          .filter(Boolean);
        out.push(...parts);
      } else {
        out.push(value.trim());
      }
      return out;
    }

    if (typeof value === 'object') {
      const maybe = value.url ?? value.src ?? value.path;
      if (maybe && typeof maybe === 'string' && maybe.trim()) out.push(maybe.trim());
      return out;
    }

    return out;
  }

  // Convert possibly-relative url to absolute using current origin (if available)
  function toAbsoluteUrl(origin: string | null, url: string | null | undefined): string | null {
    if (!url) return null;
    const s = String(url).trim();
    if (!s) return null;
    if (/^https?:\/\//i.test(s)) return s;
    if (s.startsWith('//')) {
      // protocol relative - assume https from origin if missing
      if (origin) {
        return `${new URL(origin).protocol}${s}`;
      }
      return `https:${s}`;
    }
    if (s.startsWith('/')) {
      return origin ? `${origin}${s}` : s;
    }
    // treat as relative path
    return origin ? `${origin}/${s}` : s;
  }

  // Choose banner (single) and first array image (separate)
  function getBannerUrl(ev: any, origin: string | null) {
    const rawBanner = ev?.eventBanner ?? ev?.banner ?? ev?.cover ?? null;
    const bannerCandidate = extractUrlFromCandidate(rawBanner);
    return toAbsoluteUrl(origin, bannerCandidate);
  }

  function getFirstArrayImage(ev: any, origin: string | null) {
    const raw = ev?.eventImages ?? ev?.images ?? null;
    const arr = extractArrayFromCandidate(raw);
    if (arr.length === 0) return null;
    return toAbsoluteUrl(origin, arr[0]);
  }

  // Card/grid listing
  function renderGrid(origin: string | null) {
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
          const pdfUrl = extractUrlFromCandidate(event.eventFile ?? event.file ?? null);
          const firstImageRaw =
            extractArrayFromCandidate(event.eventImages ?? event.images ?? null)[0] ?? null;
          const firstImage = toAbsoluteUrl(origin, firstImageRaw);

          return (
            <div
              key={event.id}
              className="flex flex-col p-4 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow"
              role="button"
              tabIndex={0}
              onClick={() => setViewingEvent(event)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setViewingEvent(event);
              }}
            >
              {/* Title on top */}
              <h3 className="font-semibold text-lg truncate">{title}</h3>

              {/* Image below title (first from images array) */}
              {firstImage ? (
                <img
                  src={firstImage}
                  alt={title}
                  onClick={(e) => {
                    e.stopPropagation();
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

              {/* Actions */}
              <div className="mt-4 flex items-center gap-2">
                {pdfUrl ? (
                  <a
                    href={toAbsoluteUrl(window?.location?.origin ?? null, pdfUrl) ?? pdfUrl}
                    download
                    onClick={(e) => e.stopPropagation()}
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

  // small preview builder reused in cards
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

  // Render full inline event view (respect requested order)
  function renderFullEvent(ev: any, origin: string | null) {
    const title = ev.eventTitle ?? ev.title ?? 'Event';
    const bannerUrl = getBannerUrl(ev, origin);
    const firstImage = getFirstArrayImage(ev, origin);

    const createdBy = ev?.createdBy
      ? `${ev.createdBy.firstName ?? ''} ${ev.createdBy.lastName ?? ''}`.trim() ||
        ev.createdBy.username
      : 'System';
    const createdAt = formatDate(ev.createdAt ?? ev.eventStartDate);
    const updatedAt = formatDate(ev.updatedAt ?? ev.eventEndDate);
    const pdfUrl = extractUrlFromCandidate(ev.eventFile ?? ev.file ?? ev.files ?? null);

    return (
      <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
        {/* 1. Title (only once) */}
        <div>
          <h1 className="text-2xl font-semibold text-left">{title}</h1>
        </div>

        {/* 2. Full banner spanning left→right */}
        {bannerUrl ? (
          <div className="w-full">
            <img src={bannerUrl} alt={title} className="w-full h-[360px] object-cover rounded" />
          </div>
        ) : null}

        {/* 3. Created By / Created at / Updated at */}
        <div className="text-sm text-gray-500">
          <div>Created By: {createdBy}</div>
          <div>
            Created at: {createdAt} {updatedAt ? `· Updated at: ${updatedAt}` : null}
          </div>
        </div>

        {/* 4. Buttons */}
        <div className="flex items-center gap-2">
          {pdfUrl ? (
            <a
              href={toAbsoluteUrl(window?.location?.origin ?? origin, pdfUrl) ?? pdfUrl}
              download
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Download Event File
            </a>
          ) : null}

          <Button
            onClick={() => {
              handleEdit(ev);
            }}
            variant="outline"
            size="sm"
          >
            Edit
          </Button>

          <Button
            variant="destructive"
            size="sm"
            onClick={async () => {
              await handleDelete(ev.id);
              setViewingEvent(null);
            }}
            disabled={Boolean(deleteLoading && deleteId === ev.id)}
          >
            {deleteLoading && deleteId === ev.id ? 'Deleting...' : 'Delete'}
          </Button>
        </div>

        {/* 5. Details */}
        <div>
          <div className="text-sm text-gray-500 mb-2">Details</div>
          <div className="rounded border bg-white dark:bg-gray-900 p-3">
            <EventView data={ev} onClose={() => setViewingEvent(null)} />
          </div>
        </div>

        {/* 6. Full image (first image from array) */}
        {firstImage ? (
          <div className="w-full">
            <img src={firstImage} alt={`${title} image`} className="w-full object-cover rounded" />
          </div>
        ) : null}
      </div>
    );
  }

  // Determine origin for URL resolution (server might not be available in client render, so use window origin if present)
  const origin = typeof window !== 'undefined' ? window.location.origin : null;

  // Viewing mode
  if (viewingEvent) {
    return (
      <div className="space-y-4">
        {/* Back control */}
        <div className="flex items-center mb-2">
          <Button variant="ghost" onClick={() => setViewingEvent(null)}>
            ← Back
          </Button>
        </div>

        <div className="p-0">{renderFullEvent(viewingEvent, origin)}</div>
      </div>
    );
  }

  // Default: show cards grid
  return (
    <>
      {renderGrid(origin)}

      {/* Optional TableActions (kept for compatibility) */}
      <div className="mt-4">
        {TableActions ? (
          <TableActions data={data} columns={[]} tableRef={React.createRef()} />
        ) : null}
      </div>
    </>
  );
}
