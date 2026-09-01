'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { extractPlainText, normalizeTiptapDoc } from '@/lib/tiptap';
import '@/assets/styles/tiptap-editor.css';

const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

type EventType = {
  id?: number | string;
  slug?: string;
  eventTitle?: unknown; // Tiptap JSON doc
  eventDescription?: unknown;
  eventDetails?: unknown;
  eventLocation?: string | null;
  eventBanner?: string | null;
  eventImages?: string[] | null;
  eventFile?: string | null;
  eventStartDate?: string | Date | null;
  eventEndDate?: string | Date | null;
  eventTags?: string[] | null;
  eventStatus?: string | null;
  publishStatus?: string | null;
  eventAttendance?: string | null;
  maxAttendees?: number | null;
  createdAt?: string | Date | null;
  updatedAt?: string | Date | null;
  createdBy?: {
    firstName?: string | null;
    lastName?: string | null;
    username?: string | null;
  } | null;
  project?: { id?: number; title?: unknown } | null;
  report?: { id?: number; title?: string } | null;
};

/**
 * EventView
 * Renders a detailed view of a single event (used inside a dialog/modal).
 */
export default function EventView({
  data,
  onClose,
}: {
  data: EventType | null | undefined;
  onClose?: () => void;
}) {
  if (!data) return null;

  const renderJson = (c: unknown) => {
    if (c === undefined || c === null) return <span className="text-sm text-muted">-</span>;
    if (typeof c === 'object') {
      return (
        <div className="rounded border bg-white dark:bg-gray-900 p-3">
          <TiptapJsonViewer content={c} className="tiptap tiptap-view-only" />
        </div>
      );
    }
    return <div className="whitespace-pre-line">{String(c)}</div>;
  };

  const eventTags: string[] = Array.isArray(data.eventTags) ? data.eventTags : [];

  const start = data.eventStartDate ? new Date(data.eventStartDate).toLocaleString() : '-';
  const end = data.eventEndDate ? new Date(data.eventEndDate).toLocaleString() : '-';
  const created = data.createdAt ? new Date(data.createdAt).toLocaleString() : '-';
  const updated = data.updatedAt ? new Date(data.updatedAt).toLocaleString() : '-';

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      {/* Banner */}
      {data.eventBanner ? (
        <div className="w-full rounded overflow-hidden border">
          <img
            src={data.eventBanner}
            alt={extractPlainText(data.eventTitle) || 'Event banner'}
            className="w-full object-cover"
          />
        </div>
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xl font-semibold">
            <TiptapJsonViewer
              content={normalizeTiptapDoc(data.eventTitle)}
              className="prose dark:prose-invert max-w-none [&_p]:m-0"
            />
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {data.createdBy
              ? `${data.createdBy.firstName ?? ''} ${data.createdBy.lastName ?? ''}`
              : 'System'}
            {data.project ? (
              <span className="ml-3">· Project: {extractPlainText(data.project.title)}</span>
            ) : null}
            {data.report ? <span className="ml-3">· Report: {data.report.title}</span> : null}
          </div>
        </div>

        <div className="text-sm text-gray-500 text-right">
          <div>Start: {start}</div>
          <div>End: {end}</div>
          <div className="mt-2">
            Status: <span className="font-medium">{data.eventStatus ?? '-'}</span>
          </div>
          <div>
            Publish: <span className="font-medium">{data.publishStatus ?? '-'}</span>
          </div>
        </div>
      </div>

      {/* Location / tags / attendance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <div className="text-xs text-gray-500">Location</div>
          <div className="font-medium">{data.eventLocation ?? '-'}</div>
        </div>

        <div>
          <div className="text-xs text-gray-500">Attendance</div>
          <div className="font-medium">
            {data.eventAttendance ?? '-'}
            {typeof data.maxAttendees === 'number' && (
              <span className="text-gray-500"> (max {data.maxAttendees})</span>
            )}
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-500">Tags</div>
          <div className="flex flex-wrap gap-2 mt-1">
            {eventTags.length > 0 ? (
              eventTags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs"
                >
                  {t}
                </span>
              ))
            ) : (
              <span className="text-sm text-gray-500">-</span>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <div className="text-sm text-gray-500">Description</div>
        <div className="mt-2">{renderJson(data.eventDescription)}</div>
      </div>

      {/* Additional details */}
      {data.eventDetails != null && (
        <div>
          <div className="text-sm text-gray-500">Details</div>
          <div className="mt-2">{renderJson(data.eventDetails)}</div>
        </div>
      )}

      {/* Images gallery */}
      {Array.isArray(data.eventImages) && data.eventImages.length > 0 && (
        <div>
          <div className="text-sm text-gray-500 mb-2">Images</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {data.eventImages.map((img) => (
              <img
                key={img}
                src={img}
                alt="event"
                className="w-full h-28 object-cover rounded border"
              />
            ))}
          </div>
        </div>
      )}

      {/* Attached file */}
      {data.eventFile ? (
        <div>
          <div className="text-sm text-gray-500">Attached File</div>
          <div className="mt-2">
            <a
              href={data.eventFile}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              {data.eventFile.split('/').pop()}
            </a>
          </div>
        </div>
      ) : null}

      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-500">
          Created: {created} · Updated: {updated}
        </div>

        <div className="flex gap-2">
          {onClose && (
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
