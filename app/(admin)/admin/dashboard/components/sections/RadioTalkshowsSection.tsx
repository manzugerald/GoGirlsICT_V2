'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { extractPlainText } from '@/lib/tiptap';

// This section renders Talkshow records defensively (polymorphic host —
// beneficiary/admin/guest — plus loosely-typed linked podcasts/participants)
// rather than one fixed shape — hence one deliberate loose alias here
// instead of scattering `any`.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TalkshowRecord = any;

function formatDate(d: string | number | Date | null | undefined) {
  if (!d) return '-';
  try {
    return new Date(d).toLocaleDateString();
  } catch {
    return String(d);
  }
}

function hostLabel(talkshow: TalkshowRecord) {
  if (!talkshow?.hostType) return null;
  if (talkshow.hostType === 'beneficiary') {
    const b = talkshow.hostBeneficiary;
    if (!b) return null;
    return `${b.firstName ?? ''} ${b.lastName ?? ''}`.trim() || null;
  }
  if (talkshow.hostType === 'admin') {
    const u = talkshow.hostUser;
    if (!u) return null;
    return `${u.firstName ?? ''} ${u.lastName ?? ''}`.trim() || u.username || null;
  }
  if (talkshow.hostType === 'guest') {
    return `${talkshow.hostFirstName ?? ''} ${talkshow.hostLastName ?? ''}`.trim() || null;
  }
  return null;
}

function authorLabel(talkshow: TalkshowRecord) {
  const a = talkshow?.createdBy;
  if (!a) return 'System';
  return `${a.firstName ?? ''} ${a.lastName ?? ''}`.trim() || 'System';
}

export default function RadioTalkshowsSection({
  paginatedData,
  handleEdit,
  handleDelete,
  TableActions,
  deleteId,
  deleteLoading,
  onToggleControls,
}: {
  paginatedData: TalkshowRecord[];
  page: number;
  rowsPerPage: number;
  handleEdit: (record: TalkshowRecord) => void;
  handleDelete: (id: string | number) => void;
  TableActions?: React.ElementType;
  deleteId?: string | number | null;
  deleteLoading?: boolean;
  onToggleControls?: (hide: boolean) => void;
}) {
  const [viewing, setViewing] = useState<TalkshowRecord | null>(null);
  const [data, setData] = useState<TalkshowRecord[]>(paginatedData ?? []);

  useEffect(() => {
    setData(paginatedData ?? []);
  }, [paginatedData]);

  useEffect(() => {
    if (typeof onToggleControls === 'function') onToggleControls(!!viewing);
    return () => {
      if (typeof onToggleControls === 'function') onToggleControls(false);
    };
  }, [viewing, onToggleControls]);

  if (viewing) {
    const host = hostLabel(viewing);
    const participants: TalkshowRecord[] = Array.isArray(viewing.participants) ? viewing.participants : [];

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Button variant="ghost" onClick={() => setViewing(null)}>
            ← Back
          </Button>
        </div>

        <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
          <div className="flex items-start gap-4">
            {viewing.poster ? (
              <img
                src={viewing.poster}
                alt={viewing.title}
                className="h-24 w-24 rounded-lg object-cover border shrink-0"
              />
            ) : null}

            <div className="min-w-0">
              <div className="text-2xl font-semibold truncate">{viewing.title || 'Untitled Talkshow'}</div>
              <div className="text-sm text-gray-500 mt-1">
                Date: {formatDate(viewing.date)} · Added by: {authorLabel(viewing)}
              </div>
              {host && <div className="text-sm text-gray-500 mt-1">By: {host}</div>}
              <div className="text-sm text-gray-500 mt-1 capitalize">{viewing.publishStatus}</div>
            </div>
          </div>

          {viewing.audioUrl && <audio controls src={viewing.audioUrl} className="w-full" />}

          {(viewing.project || viewing.event || viewing.report || viewing.institution) && (
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {viewing.project && (
                <div>Project: {extractPlainText(viewing.project.title) || `#${viewing.project.id}`}</div>
              )}
              {viewing.event && (
                <div>Event: {extractPlainText(viewing.event.eventTitle) || `#${viewing.event.id}`}</div>
              )}
              {viewing.report && <div>Report: {viewing.report.title ?? `#${viewing.report.id}`}</div>}
              {viewing.institution && <div>Institution: {viewing.institution.name}</div>}
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

          {Array.isArray(viewing.podcasts) && viewing.podcasts.length > 0 && (
            <div>
              <strong className="text-sm">Podcasts</strong>
              <ul className="mt-1 list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                {viewing.podcasts.map((p: TalkshowRecord, idx: number) => (
                  <li key={p.id ?? idx}>{extractPlainText(p.title) || `Podcast #${p.id}`}</li>
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

  return (
    <>
      <div className="space-y-4">
        {(!Array.isArray(data) || data.length === 0) && (
          <div className="text-center py-8 text-gray-500">No radio talkshows found.</div>
        )}

        {Array.isArray(data) &&
          data.map((talkshow) => {
            const host = hostLabel(talkshow);
            const participantCount = Array.isArray(talkshow.participants) ? talkshow.participants.length : 0;
            return (
              <div
                key={talkshow.id}
                className="p-4 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex flex-1 min-w-0 items-center gap-3 cursor-pointer"
                    onClick={() => setViewing(talkshow)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setViewing(talkshow);
                    }}
                  >
                    {talkshow.poster ? (
                      <img
                        src={talkshow.poster}
                        alt={talkshow.title}
                        className="h-12 w-12 rounded-lg object-cover border shrink-0"
                      />
                    ) : null}

                    <div className="min-w-0">
                      <h3 className="font-semibold text-lg truncate">{talkshow.title || 'Untitled Talkshow'}</h3>
                      <div className="mt-1 text-sm text-gray-600 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                        <div className="whitespace-nowrap">Date: {formatDate(talkshow.date)}</div>
                        {host && <div className="whitespace-nowrap">By: {host}</div>}
                        {participantCount > 0 && (
                          <div className="whitespace-nowrap">
                            {participantCount} participant{participantCount === 1 ? '' : 's'}
                          </div>
                        )}
                        <div className="whitespace-nowrap capitalize">{talkshow.publishStatus}</div>
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
                        setViewing(talkshow);
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
                        handleEdit(talkshow);
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
                        await handleDelete(talkshow.id);
                      }}
                      disabled={Boolean(deleteLoading && deleteId === talkshow.id)}
                    >
                      {deleteLoading && deleteId === talkshow.id ? 'Deleting...' : 'Delete'}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="mt-4">
        {TableActions ? <TableActions data={data} columns={[]} tableRef={React.createRef()} /> : null}
      </div>
    </>
  );
}
