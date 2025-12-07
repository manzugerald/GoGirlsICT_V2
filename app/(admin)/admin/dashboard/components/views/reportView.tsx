'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import '@/assets/styles/tiptap-editor.css';

const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

type ReportType = {
  id?: number | string;
  title?: string | null;
  slug?: string | null;
  images?: string[] | null;
  files?: string[] | null;
  publishStatus?: string | null;
  createdAt?: string | Date | null;
  updatedAt?: string | Date | null;
  createdBy?: { firstName?: string | null; lastName?: string | null } | null;
  project?: { id?: number; title?: string } | null;
};

/**
 * ReportView - present a detailed view of a report
 */
export default function ReportView({
  data,
  onClose,
}: {
  data: ReportType | null | undefined;
  onClose?: () => void;
}) {
  if (!data) return null;

  const created = data.createdAt ? new Date(data.createdAt).toLocaleString() : '-';
  const updated = data.updatedAt ? new Date(data.updatedAt).toLocaleString() : '-';

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">{data.title}</h2>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {data.createdBy
              ? `${data.createdBy.firstName ?? ''} ${data.createdBy.lastName ?? ''}`
              : 'System'}
            {data.project ? <span className="ml-3">· Project: {data.project.title}</span> : null}
          </div>
        </div>

        <div className="text-sm text-gray-500 text-right">
          <div>
            Publish: <span className="font-medium">{data.publishStatus ?? '-'}</span>
          </div>
        </div>
      </div>

      {/* Images */}
      {Array.isArray(data.images) && data.images.length > 0 && (
        <div>
          <div className="text-sm text-gray-500 mb-2">Images</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {data.images.map((img) => (
              <img
                key={img}
                src={img}
                alt="report"
                className="w-full h-28 object-cover rounded border"
              />
            ))}
          </div>
        </div>
      )}

      {/* Files */}
      {Array.isArray(data.files) && data.files.length > 0 && (
        <div>
          <div className="text-sm text-gray-500 mb-2">Files</div>
          <ul className="list-disc pl-5">
            {data.files.map((f) => (
              <li key={f}>
                <a
                  href={f}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {f.split('/').pop()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

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
