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

// This section renders Event records defensively across several legacy/
// alternate field-name variants (eventBanner|banner|cover, eventStatus|status,
// etc.) rather than one fixed shape — hence one deliberate loose alias here
// instead of scattering `any` throughout the file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type EventRecord = any;

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
  handleEdit,
  handleView, // optional callback
  handleDelete,
  TableActions,
  deleteId,
  deleteLoading,
  onToggleControls,
}: {
  paginatedData: EventRecord[];
  page: number;
  rowsPerPage: number;
  handleEdit: (record: EventRecord) => void;
  handleView?: (r: EventRecord) => void;
  handleDelete: (id: string | number) => void;
  currentUserRole?: string;
  TableActions?: React.ElementType;
  deleteId?: string | number | null;
  deleteLoading?: boolean;
  onToggleControls?: (hide: boolean) => void;
}) {
  const [data, setData] = useState<EventRecord[]>(paginatedData ?? []);
  const [viewingEvent, setViewingEvent] = useState<EventRecord | null>(null);

  useEffect(() => setData(paginatedData ?? []), [paginatedData]);

  useEffect(() => {
    if (typeof onToggleControls === 'function') onToggleControls(!!viewingEvent);
    return () => {
      if (typeof onToggleControls === 'function') onToggleControls(false);
    };
  }, [viewingEvent, onToggleControls]);

  // ---------- helpers ----------
  function tryParseMaybeString(v: unknown) {
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

  function extractUrlFromCandidate(candidate: unknown): string | null {
    if (!candidate) return null;
    const value = tryParseMaybeString(candidate);
    if (!value) return null;
    if (typeof value === 'string') return value.trim() || null;
    if (Array.isArray(value)) {
      for (const it of value) {
        if (typeof it === 'string' && it.trim()) return it.trim();
        if (it && typeof it === 'object') {
          const maybe = (it as Record<string, unknown>).url ?? (it as Record<string, unknown>).src ?? (it as Record<string, unknown>).path;
          if (maybe && typeof maybe === 'string' && maybe.trim()) return maybe.trim();
        }
      }
      return null;
    }
    if (typeof value === 'object') {
      return ((value as Record<string, unknown>).url ??
        (value as Record<string, unknown>).src ??
        (value as Record<string, unknown>).path ??
        null) as string | null;
    }
    return null;
  }

  function extractArrayFromCandidate(candidate: unknown): string[] {
    const out: string[] = [];
    if (candidate == null) return out;
    const value = tryParseMaybeString(candidate);
    if (!value) return out;

    if (Array.isArray(value)) {
      for (const it of value) {
        if (!it) continue;
        if (typeof it === 'string' && it.trim()) out.push(it.trim());
        else if (typeof it === 'object') {
          const maybe = (it as Record<string, unknown>).url ?? (it as Record<string, unknown>).src ?? (it as Record<string, unknown>).path;
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
      const maybe = (value as Record<string, unknown>).url ?? (value as Record<string, unknown>).src ?? (value as Record<string, unknown>).path;
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

  function formatDate(d: string | number | Date | null | undefined) {
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
      <div className="space-y-3">
        {data.map((ev) => {
          const title = tiptapExcerpt(ev.eventTitle, 200) || 'Untitled Event';

          // use banner for card preview
          const bannerRaw = extractUrlFromCandidate(
            ev.eventBanner ?? ev.banner ?? ev.cover ?? null
          );
          const bannerSrc = toAbsoluteUrl(bannerRaw) ?? null;
          const firstImage = extractArrayFromCandidate(ev?.eventImages ?? ev?.images ?? null)[0] ?? null;
          const thumbSrc = bannerSrc ?? (firstImage ? toAbsoluteUrl(firstImage) : null);

          const preview = tiptapExcerpt(ev.eventDescription ?? ev.eventDetails, 120);
          const start = formatDate(ev.eventStartDate);
          const end = formatDate(ev.eventEndDate);
          const pdf = extractUrlFromCandidate(ev.eventFile ?? ev.file ?? null);

          const openView = () => {
            setViewingEvent(ev);
            if (typeof handleView === 'function') handleView(ev);
          };

          return (
            <div
              key={ev.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-[#9f004d]/30 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex w-full flex-col gap-4 p-3 sm:flex-row sm:items-center">
                {/* Thumbnail (banner, left) */}
                <button
                  type="button"
                  onClick={openView}
                  className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 text-left dark:bg-gray-800"
                >
                  {thumbSrc ? (
                    <img src={thumbSrc} alt={title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                      No image
                    </div>
                  )}
                </button>

                {/* Title and meta */}
                <div className="min-w-0 flex-1">
                  <h3
                    className="font-semibold text-lg truncate cursor-pointer"
                    onClick={openView}
                  >
                    {title}
                  </h3>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-400 flex flex-wrap gap-x-4 gap-y-1">
                    <div className="whitespace-nowrap">
                      By:{' '}
                      {ev.createdBy
                        ? `${ev.createdBy.firstName ?? ''} ${ev.createdBy.lastName ?? ''}`.trim()
                        : 'System'}
                    </div>
                    <div className="whitespace-nowrap">Start: {start}</div>
                    <div className="whitespace-nowrap">End: {end}</div>
                  </div>

                  {preview ? (
                    <div
                      className="mt-2 text-sm text-gray-700 dark:text-gray-300"
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
                    <div className="mt-2 text-sm text-muted">No description</div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-stretch">
                  {pdf ? (
                    <a
                      href={toAbsoluteUrl(pdf) ?? undefined}
                      download
                      className="px-3 py-1 bg-blue-600 text-white rounded text-sm text-center"
                    >
                      Download
                    </a>
                  ) : null}

                  <Button size="sm" variant="outline" onClick={openView}>
                    View
                  </Button>

                  <Button size="sm" variant="outline" onClick={() => handleEdit(ev)}>
                    Edit
                  </Button>

                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={async () => {
                      await handleDelete(ev.id);
                    }}
                    disabled={Boolean(deleteLoading && deleteId === ev.id)}
                  >
                    {deleteLoading && deleteId === ev.id ? 'Deleting...' : 'Delete'}
                  </Button>
                </div>
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
  function renderFullEvent(ev: EventRecord) {
    const bannerRaw = extractUrlFromCandidate(ev.eventBanner ?? ev.banner ?? ev.cover ?? null);
    const bannerSrc = toAbsoluteUrl(bannerRaw) ?? undefined;
    const title = ev.eventTitle;
    const titleText = tiptapExcerpt(ev.eventTitle, 200) || 'Event';
    const createdBy =
      ev.createdBy && (ev.createdBy.firstName || ev.createdBy.lastName)
        ? `${ev.createdBy.firstName ?? ''} ${ev.createdBy.lastName ?? ''}`.trim()
        : ev.createdBy?.username ?? 'System';
    // "Posted"/"Edited" (see prisma/schema.prisma's Event model). Posted
    // falls back to createdAt for events saved before the field existed.
    // Edited only ever has a value once a real modification happens — a
    // freshly-created, never-edited event has no editedAt (and its
    // updatedAt still equals createdAt), so it only falls back to
    // updatedAt when that actually differs from createdAt (a real edit
    // that happened before this field existed), not unconditionally.
    const hasLegacyEdit =
      ev.updatedAt && ev.createdAt && new Date(ev.updatedAt).getTime() !== new Date(ev.createdAt).getTime();
    const editedRaw = ev.editedAt ?? (hasLegacyEdit ? ev.updatedAt : null);
    const createdAt = formatDate(ev.postedAt ?? ev.createdAt ?? ev.eventStartDate);
    const updatedAt = editedRaw ? formatDate(editedRaw) : null;
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
    const eventMode = ev.eventMode ?? 'on_site';
    const participationLink = ev.participationLink ?? '';
    const eventAttendance = ev.eventAttendance ?? ev.attendance ?? 'public';
    const registrationType = ev.registrationType ?? 'internal';
    const registrationLink = ev.registrationLink ?? '';
    const registrationStartDate = ev.registrationStartDate ? formatDate(ev.registrationStartDate) : null;
    const registrationEndDate = ev.registrationEndDate ? formatDate(ev.registrationEndDate) : null;
    const relatedProject = ev.project ?? null;
    const relatedReport = ev.report ?? null;

    // Beneficiaries linked to this event (e.g. "who attended").
    const attendees: { id: string; name: string; image?: string | null }[] = Array.isArray(
      ev.beneficiaries
    )
      ? ev.beneficiaries
          .map((link: EventRecord) => link.beneficiary)
          .filter(Boolean)
          .map((b: EventRecord) => ({
            id: b.id,
            name: `${b.firstName ?? ''} ${b.lastName ?? ''}`.trim() || 'Unnamed beneficiary',
            image: b.image,
          }))
      : [];

    return (
      <div className="w-full max-w-4xl mx-auto">
        {/* Actions (on top, before title) */}
        <div className="px-2 flex flex-wrap items-center gap-2">
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

        {/* Title & meta */}
        <div className="px-2 mt-4">
          <div className="text-2xl font-semibold text-left">
            <TiptapJsonViewer
              content={normalizeTiptapDoc(title)}
              className="prose dark:prose-invert max-w-none [&_p]:m-0"
            />
          </div>
          <div className="text-sm text-gray-500 mt-2">
            By: {createdBy} · Posted: {createdAt}
            {updatedAt ? ` · Edited: ${updatedAt}` : null}
          </div>
        </div>

        {/* Banner (below title/meta) */}
        {bannerSrc && (
          <div className="w-full my-4">
            <img src={bannerSrc} alt={titleText} className="w-full h-[320px] object-cover rounded-md" />
          </div>
        )}

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
                <div className="text-sm text-gray-700 flex items-center gap-2">
                  <span>{status || '-'}</span>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium capitalize text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    {String(eventMode).replace('_', '-')}
                  </span>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium">Publish Status</div>
                <div className="text-sm text-gray-700">{publishStatus || '-'}</div>
              </div>

              {participationLink && (
                <div>
                  <div className="text-sm font-medium">Participation Link</div>
                  <a
                    href={participationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 underline break-all"
                  >
                    {participationLink}
                  </a>
                </div>
              )}

              {eventAttendance === 'registration_required' && (
                <div>
                  <div className="text-sm font-medium">Registration</div>
                  <div className="text-sm text-gray-700 capitalize">
                    {registrationType}
                  </div>
                  {registrationType === 'external' && registrationLink && (
                    <a
                      href={registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 underline break-all"
                    >
                      {registrationLink}
                    </a>
                  )}
                  {(registrationStartDate || registrationEndDate) && (
                    <div className="text-sm text-gray-700">
                      {registrationStartDate ?? 'Open'} – {registrationEndDate ?? 'No end date'}
                    </div>
                  )}
                </div>
              )}

              {(relatedProject || relatedReport) && (
                <div>
                  <div className="text-sm font-medium">Related To</div>
                  {relatedProject && (
                    <div className="text-sm text-gray-700">
                      Project: {tiptapExcerpt(relatedProject.title, 80) || `#${relatedProject.id}`}
                    </div>
                  )}
                  {relatedReport && (
                    <div className="text-sm text-gray-700">
                      Report: {typeof relatedReport.title === 'string' ? relatedReport.title : `#${relatedReport.id}`}
                    </div>
                  )}
                </div>
              )}

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
