'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { extractPlainText, normalizeTiptapDoc } from '@/lib/tiptap';
import '@/assets/styles/tiptap-editor.css';

const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

// This section renders Podcast records defensively (polymorphic host —
// beneficiary/admin/guest — plus loosely-typed linked beneficiaries) rather
// than one fixed shape — hence one deliberate loose alias here instead of
// scattering `any`.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PodcastRecord = any;

export default function PodcastsSection({
  paginatedData,
  handleEdit,
  handleDelete,
  TableActions,
  deleteId,
  deleteLoading,
  onToggleControls,
}: {
  paginatedData: PodcastRecord[];
  page: number;
  rowsPerPage: number;
  handleEdit: (record: PodcastRecord) => void;
  handleDelete: (id: string | number) => void;
  TableActions?: React.ElementType;
  deleteId?: string | number | null;
  deleteLoading?: boolean;
  onToggleControls?: (hide: boolean) => void;
}) {
  const [viewing, setViewing] = useState<PodcastRecord | null>(null);
  const [data, setData] = useState<PodcastRecord[]>(paginatedData ?? []);

  useEffect(() => {
    setData(paginatedData ?? []);
  }, [paginatedData]);

  useEffect(() => {
    if (typeof onToggleControls === 'function') onToggleControls(!!viewing);
    return () => {
      if (typeof onToggleControls === 'function') onToggleControls(false);
    };
  }, [viewing, onToggleControls]);

  function formatDate(d: string | number | Date | null | undefined) {
    if (!d) return '-';
    try {
      return new Date(d).toLocaleDateString();
    } catch {
      return String(d);
    }
  }

  function authorLabel(podcast: PodcastRecord) {
    const a = podcast?.createdBy;
    if (!a) return 'System';
    return `${a.firstName ?? ''} ${a.lastName ?? ''}`.trim() || 'System';
  }

  function hostLabel(podcast: PodcastRecord) {
    if (!podcast?.hostType) return null;
    if (podcast.hostType === 'beneficiary') {
      const b = podcast.hostBeneficiary;
      if (!b) return null;
      return `${b.firstName ?? ''} ${b.lastName ?? ''}`.trim() || null;
    }
    if (podcast.hostType === 'admin') {
      const u = podcast.hostUser;
      if (!u) return null;
      return `${u.firstName ?? ''} ${u.lastName ?? ''}`.trim() || u.username || null;
    }
    if (podcast.hostType === 'guest') {
      return `${podcast.hostFirstName ?? ''} ${podcast.hostLastName ?? ''}`.trim() || null;
    }
    return null;
  }

  // If a podcast is selected, render the full view inline
  if (viewing) {
    const host = hostLabel(viewing);
    const participants: PodcastRecord[] = Array.isArray(viewing.beneficiaries) ? viewing.beneficiaries : [];

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
                alt={extractPlainText(viewing.title)}
                className="h-24 w-24 rounded-lg object-cover border shrink-0"
              />
            ) : null}

            <div className="min-w-0">
              <div className="text-2xl font-semibold">
                <TiptapJsonViewer
                  content={normalizeTiptapDoc(viewing.title)}
                  className="prose dark:prose-invert max-w-none [&_p]:m-0"
                />
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Added by: {authorLabel(viewing)} · Published: {formatDate(viewing.publishedAt)} · Plays:{' '}
                {viewing.accessCount ?? 0}
              </div>
              {host && <div className="text-sm text-gray-500 mt-1">By: {host}</div>}
            </div>
          </div>

          <div className="text-sm text-gray-700 dark:text-gray-300">
            <TiptapJsonViewer
              content={normalizeTiptapDoc(viewing.description)}
              className="prose prose-sm dark:prose-invert max-w-none"
            />
          </div>

          {viewing.audioUrl && (
            <audio controls src={viewing.audioUrl} className="w-full" />
          )}

          {(viewing.project || viewing.event || viewing.report || viewing.institution || viewing.talkshow) && (
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {viewing.project && (
                <div>Project: {extractPlainText(viewing.project.title) || `#${viewing.project.id}`}</div>
              )}
              {viewing.event && (
                <div>Event: {extractPlainText(viewing.event.eventTitle) || `#${viewing.event.id}`}</div>
              )}
              {viewing.report && <div>Report: {viewing.report.title ?? `#${viewing.report.id}`}</div>}
              {viewing.institution && <div>Institution: {viewing.institution.name}</div>}
              {viewing.talkshow && <div>Radio Talkshow: {viewing.talkshow.title ?? `#${viewing.talkshow.id}`}</div>}
            </div>
          )}

          {participants.length > 0 && (
            <div>
              <strong className="text-sm">Participants</strong>
              <ul className="mt-1 list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                {participants.map((p, idx) => (
                  <li key={p.beneficiary?.id ?? idx}>
                    {`${p.beneficiary?.firstName ?? ''} ${p.beneficiary?.lastName ?? ''}`.trim() || 'Unknown'}
                  </li>
                ))}
              </ul>
            </div>
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
                      alt={extractPlainText(podcast.title)}
                      className="h-12 w-12 rounded-lg object-cover border shrink-0"
                    />
                  ) : null}

                  <div className="min-w-0">
                    <h3 className="font-semibold text-lg truncate">
                      {extractPlainText(podcast.title).trim() || 'Untitled Podcast'}
                    </h3>

                    <div className="mt-1 text-sm text-gray-600 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                      <div className="whitespace-nowrap">Added by: {authorLabel(podcast)}</div>
                      {hostLabel(podcast) && (
                        <div className="whitespace-nowrap">By: {hostLabel(podcast)}</div>
                      )}
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
