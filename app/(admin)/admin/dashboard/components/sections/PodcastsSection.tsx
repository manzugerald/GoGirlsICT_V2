'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import '@/assets/styles/tiptap-editor.css';

const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

const EMPTY_DESCRIPTION: object = { type: 'doc', content: [{ type: 'paragraph' }] };

function asTiptapDoc(value: unknown): object {
  return value && typeof value === 'object' ? (value as object) : EMPTY_DESCRIPTION;
}

export default function PodcastsSection({
  paginatedData,
  page,
  rowsPerPage,
  handleEdit,
  handleDelete,
  TableActions,
  deleteId,
  deleteLoading,
  onToggleControls,
}: {
  paginatedData: any[];
  page: number;
  rowsPerPage: number;
  handleEdit: (record: any) => void;
  handleDelete: (id: string | number) => void;
  TableActions?: React.FC<any>;
  deleteId?: string | number | null;
  deleteLoading?: boolean;
  onToggleControls?: (hide: boolean) => void;
}) {
  const [viewing, setViewing] = useState<any | null>(null);
  const [data, setData] = useState<any[]>(paginatedData ?? []);

  useEffect(() => {
    setData(paginatedData ?? []);
  }, [paginatedData]);

  useEffect(() => {
    if (typeof onToggleControls === 'function') onToggleControls(!!viewing);
    return () => {
      if (typeof onToggleControls === 'function') onToggleControls(false);
    };
  }, [viewing, onToggleControls]);

  function formatDate(d: any) {
    if (!d) return '-';
    try {
      return new Date(d).toLocaleDateString();
    } catch {
      return String(d);
    }
  }

  function authorLabel(podcast: any) {
    const a = podcast?.createdBy;
    if (!a) return 'System';
    return `${a.firstName ?? ''} ${a.lastName ?? ''}`.trim() || 'System';
  }

  // If a podcast is selected, render the full view inline
  if (viewing) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Button variant="ghost" onClick={() => setViewing(null)}>
            ← Back
          </Button>
        </div>

        <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
          <div className="flex items-start gap-4">
            {viewing.image ? (
              <img
                src={viewing.image}
                alt={viewing.title}
                className="h-24 w-24 rounded-lg object-cover border shrink-0"
              />
            ) : null}

            <div className="min-w-0">
              <h1 className="text-2xl font-semibold">{viewing.title}</h1>
              <div className="text-sm text-gray-500 mt-1">
                By: {authorLabel(viewing)} · Published: {formatDate(viewing.publishedAt)} · Plays:{' '}
                {viewing.accessCount ?? 0}
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-700 dark:text-gray-300">
            <TiptapJsonViewer
              content={asTiptapDoc(viewing.description)}
              className="prose prose-sm dark:prose-invert max-w-none"
            />
          </div>

          {viewing.audioUrl && (
            <audio controls src={viewing.audioUrl} className="w-full" />
          )}

          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={() => handleEdit(viewing)}>
              Edit
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={async () => {
                await handleDelete(viewing.id);
                setViewing(null);
              }}
              disabled={Boolean(deleteLoading && deleteId === viewing.id)}
            >
              {deleteLoading && deleteId === viewing.id ? 'Deleting...' : 'Delete'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Default listing view: cards
  return (
    <>
      <div className="space-y-4">
        {(!Array.isArray(data) || data.length === 0) && (
          <div className="text-center py-8 text-gray-500">No podcasts found.</div>
        )}

        {Array.isArray(data) &&
          data.map((podcast) => (
            <div
              key={podcast.id}
              className="p-4 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className="flex flex-1 min-w-0 items-center gap-3 cursor-pointer"
                  onClick={() => setViewing(podcast)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setViewing(podcast);
                  }}
                >
                  {podcast.image ? (
                    <img
                      src={podcast.image}
                      alt={podcast.title}
                      className="h-12 w-12 rounded-lg object-cover border shrink-0"
                    />
                  ) : null}

                  <div className="min-w-0">
                    <h3 className="font-semibold text-lg truncate">
                      {podcast.title || 'Untitled Podcast'}
                    </h3>

                    <div className="mt-1 text-sm text-gray-600 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                      <div className="whitespace-nowrap">By: {authorLabel(podcast)}</div>
                      <div className="whitespace-nowrap">
                        Published: {formatDate(podcast.publishedAt)}
                      </div>
                      <div className="whitespace-nowrap">Plays: {podcast.accessCount ?? 0}</div>
                      <div className="whitespace-nowrap capitalize">{podcast.publishStatus}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 min-w-max">
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewing(podcast);
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
                      handleEdit(podcast);
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
                      await handleDelete(podcast.id);
                    }}
                    disabled={Boolean(deleteLoading && deleteId === podcast.id)}
                  >
                    {deleteLoading && deleteId === podcast.id ? 'Deleting...' : 'Delete'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="mt-4">
        {TableActions ? <TableActions data={data} columns={[]} tableRef={React.createRef()} /> : null}
      </div>
    </>
  );
}
