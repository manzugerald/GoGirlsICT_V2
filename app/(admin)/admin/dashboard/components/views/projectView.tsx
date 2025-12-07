'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import '@/assets/styles/tiptap-editor.css';

const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

type ProjectType = {
  id?: number | string;
  title?: string | null;
  slug?: string | null;
  content?: unknown;
  images?: string[] | null;
  projectStatus?: string | null;
  publishStatus?: string | null;
  createdAt?: string | Date | null;
  updatedAt?: string | Date | null;
  createdBy?: {
    firstName?: string | null;
    lastName?: string | null;
    username?: string | null;
  } | null;
};

/**
 * ProjectView - display a single project's details inside a modal/dialog
 */
export default function ProjectView({
  data,
  onClose,
}: {
  data: ProjectType | null | undefined;
  onClose?: () => void;
}) {
  if (!data) return null;

  const renderContent = (c: unknown) => {
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
          </div>
        </div>

        <div className="text-sm text-gray-500 text-right">
          <div>
            Status: <span className="font-medium">{data.projectStatus ?? '-'}</span>
          </div>
          <div>
            Publish: <span className="font-medium">{data.publishStatus ?? '-'}</span>
          </div>
        </div>
      </div>

      <div>
        <div className="text-sm text-gray-500">Content</div>
        <div className="mt-2">{renderContent(data.content)}</div>
      </div>

      {Array.isArray(data.images) && data.images.length > 0 && (
        <div>
          <div className="text-sm text-gray-500 mb-2">Images</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {data.images.map((img) => (
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
