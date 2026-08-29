'use client';

import React, { useEffect, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { isTiptapDocEmpty, normalizeTiptapDoc, tiptapExcerpt } from '@/lib/tiptap';
import '@/assets/styles/tiptap-editor.css';

// JSON / Tiptap viewer (no SSR)
const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

/**
 * EventsSection
 *
 * - Grid of events by default (cards use banner as preview).
 * - When an event is selected, renders full detail view inside this component:
 *   Title -> By / Created / Updated -> Text preview -> Banner -> Actions (Back, Download, Edit, Delete)
 *   -> Details card (uses JSON/Tiptap viewer for any JSON-like content) -> Event Images slider.
 * - Calls onToggleControls(true) when opening a detail and onToggleControls(false) when closing.
 *
 * Hooks are top-level (no hook calls inside nested/conditional functions).
 */

export default function EventsSection({
  paginatedData,
  page,
  rowsPerPage,
  handleEdit,
  handleView, // optional callback
  handleDelete,
  currentUserRole,
  TableActions,
  deleteId,
  deleteLoading,
  onToggleControls,
}: {
  paginatedData: any[];
  page: number;
  rowsPerPage: number;
  handleEdit: (record: any) => void;
  handleView?: (r: any) => void;
  handleDelete: (id: string | number) => void;
  currentUserRole?: string;
  TableActions?: React.FC<any>;
  deleteId?: string | number | null;
  deleteLoading?: boolean;
  onToggleControls?: (hide: boolean) => void;
}) {
  const [data, setData] = useState<any[]>(paginatedData ?? []);
  const [viewingEvent, setViewingEvent] = useState<any | null>(null);

  useEffect(() => setData(paginatedData ?? []), [paginatedData]);

  useEffect(() => {
    if (typeof onToggleControls === 'function') onToggleControls(!!viewingEvent);
    return () => {
      if (typeof onToggleControls === 'function') onToggleControls(false);
    };
  }, [viewingEvent, onToggleControls]);

  // ---------- helpers ----------
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

  function extractUrlFromCandidate(candidate: any): string | null {
    if (!candidate) return null;
    const value = tryParseMaybeString(candidate);
    if (!value) return null;
    if (typeof value === 'string') return value.trim() || null;
    if (Array.isArray(value)) {
      for (const it of value) {
        if (typeof it === 'string' && it.trim()) return it.trim();
        if (it && typeof it === 'object') {
          const maybe = (it as any).url ?? (it as any).src ?? (it as any).path;
          if (maybe && typeof maybe === 'string' && maybe.trim()) return maybe.trim();
        }
      }
      return null;
    }
    if (typeof value === 'object') {
      return (value as any).url ?? (value as any).src ?? (value as any).path ?? null;
    }
    return null;
  }

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
          const maybe = (it as any).url ?? (it as any).src ?? (it as any).path;
          if (maybe && typeof maybe === 'string' && maybe.trim()) out.push(maybe.trim());
        }
      }
      return out;
    }

    if (typeof value === 'string' && value.trim()) {
      if (value.includes(',')) {
        out.push(
          ...value
            .split(',')
            .map((p: string) => p.trim())
            .filter(Boolean)
        );
      } else {
        out.push(value.trim());
      }
      return out;
    }

    if (typeof value === 'object') {
      const maybe = (value as any).url ?? (value as any).src ?? (value as any).path;
      if (maybe && typeof maybe === 'string' && maybe.trim()) out.push(maybe.trim());
      return out;
    }

    return out;
  }

  function toAbsoluteUrl(url: string | null | undefined): string | null {
    if (!url) return null;
    const s = String(url).trim();
    if (!s) return null;
    if (/^https?:\/\//i.test(s)) return s;
    if (s.startsWith('//')) {
      if (typeof window !== 'undefined') return `${window.location.protocol}${s}`;
      return `https:${s}`;
    }
    if (s.startsWith('/')) {
      if (typeof window !== 'undefined') return `${window.location.origin}${s}`;
      return s;
    }
    if (typeof window !== 'undefined') return `${window.location.origin}/${s}`;
    return s;
  }

  function formatDate(d: any) {
    if (!d) return '-';
    try {
      return new Date(d).toLocaleString();
    } catch {
      return String(d);
    }
  }

  // ---------- grid ----------
  function renderGrid() {
    if (!Array.isArray(data) || data.length === 0) {
      return <div className="text-center py-8 text-gray-500">No events found.</div>;
    }

    return (
      <div className="grid grid-cols-1 gap-4">
        {data.map((ev) => {
          const title = tiptapExcerpt(ev.eventTitle, 200) || 'Untitled Event';

          // use banner for card preview
          const bannerRaw = extractUrlFromCandidate(
            ev.eventBanner ?? ev.banner ?? ev.cover ?? null
          );
          const bannerSrc = toAbsoluteUrl(bannerRaw) ?? null;

          const preview = tiptapExcerpt(ev.eventDescription ?? ev.eventDetails, 120);
          const start = formatDate(ev.eventStartDate);
          const end = formatDate(ev.eventEndDate);
          const pdf = extractUrlFromCandidate(ev.eventFile ?? ev.file ?? null);

          return (
            <div
              key={ev.id}
              className="p-0 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow overflow-hidden"
            >
              {/* Title & meta above the banner */}
              <div className="p-3">
                <h3
                  className="font-semibold text-lg truncate cursor-pointer"
                  onClick={() => {
                    setViewingEvent(ev);
                    if (typeof handleView === 'function') handleView(ev);
                  }}
                >
                  {title}
                </h3>
                <div className="mt-2 text-sm text-gray-600 flex flex-wrap gap-4">
                  <div className="whitespace-nowrap">
                    By:{' '}
                    {ev.createdBy
                      ? `${ev.createdBy.firstName ?? ''} ${ev.createdBy.lastName ?? ''}`.trim()
                      : 'System'}
                  </div>
                  <div className="whitespace-nowrap">Start: {start}</div>
                  <div className="whitespace-nowrap">End: {end}</div>
                </div>

                {/* Text preview above the banner */}
                <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
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
              </div>

              {/* Banner area (clickable) */}
              <div
                className="relative w-full h-40 md:h-44 cursor-pointer"
                onClick={() => {
                  setViewingEvent(ev);
                  if (typeof handleView === 'function') handleView(ev);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setViewingEvent(ev);
                    if (typeof handleView === 'function') handleView(ev);
                  }
                }}
              >
                {bannerSrc ? (
                  <img src={bannerSrc} alt={title} className="w-full h-full object-cover" />
                ) : (
                  (() => {
                    const firstImage =
                      extractArrayFromCandidate(ev?.eventImages ?? ev?.images ?? null)[0] ?? null;
                    if (firstImage) {
                      return (
                        <img
                          src={toAbsoluteUrl(firstImage) ?? undefined}
                          alt={title}
                          className="w-full h-full object-cover"
                        />
                      );
                    }
                    return <div className="w-full h-full bg-gray-100 dark:bg-gray-800" />;
                  })()
                )}
              </div>

              {/* Buttons immediately below the banner */}
              <div className="p-3 flex items-center justify-end gap-2 border-t dark:border-gray-800 bg-white dark:bg-gray-900">
                {pdf ? (
                  <a
                    href={toAbsoluteUrl(pdf) ?? undefined}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                  >
                    Download
                  </a>
                ) : null}

                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewingEvent(ev);
                    if (typeof handleView === 'function') handleView(ev);
                  }}
                >
                  View
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(ev);
                  }}
                >
                  Edit
                </Button>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={async (e) => {
                    e.stopPropagation();
                    await handleDelete(ev.id);
                  }}
                  disabled={Boolean(deleteLoading && deleteId === ev.id)}
                >
                  {deleteLoading && deleteId === ev.id ? 'Deleting...' : 'Delete'}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // ---------- detail view - nested component for image slider ----------
  function EventImagesSlider({ images }: { images: string[] }) {
    const valid = images.map((i) => toAbsoluteUrl(i)).filter(Boolean) as string[];
    const [idx, setIdx] = useState(0);
    const imagesKey = useMemo(() => JSON.stringify(valid), [valid]);

    useEffect(() => setIdx(0), [imagesKey]);

    if (valid.length === 0) return null;
    if (valid.length === 1) {
      return (
        <div className="w-full">
          <img src={valid[0]} alt="Event image" className="w-full h-80 object-cover rounded" />
        </div>
      );
    }

    return (
      <div className="w-full">
        <div className="relative">
          <img
            src={valid[idx]}
            alt={`Event image ${idx + 1}`}
            className="w-full h-80 object-cover rounded"
          />
          <button
            aria-label="Prev image"
            onClick={() => setIdx((i) => (i - 1 + valid.length) % valid.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            onClick={() => setIdx((i) => (i + 1) % valid.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
          >
            ›
          </button>
        </div>

        {/* indicators */}
        <div className="flex items-center justify-center gap-2 mt-2">
          {valid.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2 h-2 rounded-full ${
                i === idx ? 'bg-gray-800' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // ---------- full event renderer ----------
  function renderFullEvent(ev: any) {
    const bannerRaw = extractUrlFromCandidate(ev.eventBanner ?? ev.banner ?? ev.cover ?? null);
    const bannerSrc = toAbsoluteUrl(bannerRaw) ?? undefined;
    const title = ev.eventTitle;
    const titleText = tiptapExcerpt(ev.eventTitle, 200) || 'Event';
    const createdBy =
      ev.createdBy && (ev.createdBy.firstName || ev.createdBy.lastName)
        ? `${ev.createdBy.firstName ?? ''} ${ev.createdBy.lastName ?? ''}`.trim()
        : ev.createdBy?.username ?? 'System';
    const createdAt = formatDate(ev.createdAt ?? ev.eventStartDate);
    const updatedAt = formatDate(ev.updatedAt ?? ev.eventEndDate);
    const pdfUrl = extractUrlFromCandidate(ev.eventFile ?? ev.file ?? null);
    const pdfSrc = toAbsoluteUrl(pdfUrl) ?? undefined;
    const images = extractArrayFromCandidate(ev.eventImages ?? ev.images ?? null);

    // eventDescription/eventDetails are Tiptap JSON docs; normalizeTiptapDoc
    // guarantees a shape the viewer can render even for legacy/malformed data.
    const hasDetails = !isTiptapDocEmpty(ev.eventDetails);
    const hasDescription = !isTiptapDocEmpty(ev.eventDescription);

    // parse tags (array or JSON string or comma separated)
    const tags = extractArrayFromCandidate(ev.eventTags ?? ev.tags ?? null);

    // other simple fields
    const location = ev.eventLocation ?? ev.location ?? '';
    const startDate = formatDate(ev.eventStartDate);
    const endDate = formatDate(ev.eventEndDate);
    const status = ev.eventStatus ?? ev.status ?? '';
    const publishStatus = ev.publishStatus ?? '';

    // Beneficiaries linked to this event (e.g. "who attended").
    const attendees: { id: string; name: string; image?: string | null }[] = Array.isArray(
      ev.beneficiaries
    )
      ? ev.beneficiaries
          .map((link: any) => link.beneficiary)
          .filter(Boolean)
          .map((b: any) => ({
            id: b.id,
            name: `${b.firstName ?? ''} ${b.lastName ?? ''}`.trim() || 'Unnamed beneficiary',
            image: b.image,
          }))
      : [];

    return (
      <div className="w-full max-w-4xl mx-auto">
        {/* Title & meta (on top) */}
        <div className="px-2">
          <div className="text-2xl font-semibold text-left">
            <TiptapJsonViewer
              content={normalizeTiptapDoc(title)}
              className="prose dark:prose-invert max-w-none [&_p]:m-0"
            />
          </div>
          <div className="text-sm text-gray-500 mt-2">
            By: {createdBy} · Created: {createdAt}
            {updatedAt ? ` · Updated: ${updatedAt}` : null}
          </div>
        </div>

        {/* Banner (below title/meta) */}
        {bannerSrc && (
          <div className="w-full my-4">
            <img src={bannerSrc} alt={titleText} className="w-full h-[320px] object-cover rounded-md" />
          </div>
        )}

        {/* Actions (below banner) */}
        <div className="px-2 mt-1 flex flex-wrap items-center gap-2">
          <Button variant="ghost" onClick={() => setViewingEvent(null)}>
            ← Back
          </Button>

          {pdfSrc && (
            <a
              href={pdfSrc}
              download
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Download Event File
            </a>
          )}

          <Button size="sm" variant="outline" onClick={() => handleEdit(ev)}>
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

        {/* Details card */}
        <div className="px-2 mt-4">
          <div className="rounded border bg-white dark:bg-gray-900 p-4 space-y-4">
            <div className="text-sm text-gray-500">Details</div>

            {/* Event Details */}
            <div>
              <div className="text-sm font-medium mb-1">Event Details</div>
              {hasDetails ? (
                <TiptapJsonViewer content={normalizeTiptapDoc(ev.eventDetails)} />
              ) : (
                <div className="text-sm text-gray-500">No event details</div>
              )}
            </div>

            {/* Event Description */}
            <div>
              <div className="text-sm font-medium mb-1">Event Description</div>
              {hasDescription ? (
                <TiptapJsonViewer content={normalizeTiptapDoc(ev.eventDescription)} />
              ) : (
                <div className="text-sm text-gray-500">No description</div>
              )}
            </div>

            {/* Metadata grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <div className="text-sm font-medium">Event Location</div>
                <div className="text-sm text-gray-700">{location || '-'}</div>
              </div>

              <div>
                <div className="text-sm font-medium">Event Start</div>
                <div className="text-sm text-gray-700">{startDate}</div>
              </div>

              <div>
                <div className="text-sm font-medium">Event End</div>
                <div className="text-sm text-gray-700">{endDate}</div>
              </div>

              <div>
                <div className="text-sm font-medium">Event Status</div>
                <div className="text-sm text-gray-700">{status || '-'}</div>
              </div>

              <div>
                <div className="text-sm font-medium">Publish Status</div>
                <div className="text-sm text-gray-700">{publishStatus || '-'}</div>
              </div>

              <div>
                <div className="text-sm font-medium">Event Tags</div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {Array.isArray(tags) && tags.length > 0 ? (
                    tags.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full cursor-help"
                        title={t}
                        aria-label={`Tag: ${t}`}
                      >
                        {t}
                      </span>
                    ))
                  ) : (
                    <div className="text-sm text-gray-500">—</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Images section */}
        <div className="px-2 mt-6">
          <h3 className="text-lg font-medium mb-2">Event Images</h3>
          <EventImagesSlider images={images} />
        </div>

        {/* Beneficiaries who attended */}
        {attendees.length > 0 && (
          <div className="px-2 mt-6">
            <h3 className="text-lg font-medium mb-2">Beneficiaries who attended ({attendees.length})</h3>
            <div className="flex flex-wrap gap-3">
              {attendees.map((b) => (
                <div
                  key={b.id}
                  className="flex items-center gap-2 rounded-full border bg-gray-50 dark:bg-gray-900 pl-1 pr-3 py-1"
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
      </div>
    );
  }

  // ---------- render ----------
  return viewingEvent ? (
    <div className="space-y-4">{renderFullEvent(viewingEvent)}</div>
  ) : (
    <>
      {renderGrid()}
      <div className="mt-4">
        {TableActions ? (
          <TableActions data={data} columns={[]} tableRef={React.createRef()} />
        ) : null}
      </div>
    </>
  );
}
