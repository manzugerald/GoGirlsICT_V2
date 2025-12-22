'use client';

import React, { useMemo, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import CreateReportForm from '@/app/(admin)/admin/dashboard/createReportForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

// Dynamically load the Tiptap JSON viewer (no SSR)
const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

export default function ReportsSection({
  paginatedData,
  page,
  rowsPerPage,
  handleEdit,
  handleDelete,
  currentUserRole,
  TableActions,
  deleteId,
  deleteLoading,
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
}) {
  const [viewing, setViewing] = useState<any | null>(null);
  const [openCreate, setOpenCreate] = useState(false);
  const [data, setData] = useState<any[]>(paginatedData ?? []);

  useEffect(() => {
    setData(paginatedData ?? []);
  }, [paginatedData]);

  // Debug
  useEffect(() => {
    console.log(
      '[ReportsSection] paginatedData length:',
      Array.isArray(paginatedData) ? paginatedData.length : 0
    );
    if (Array.isArray(paginatedData) && paginatedData.length > 0) {
      console.log('[ReportsSection] sample item:', paginatedData[0]);
    }
  }, [paginatedData]);

  // Extract plain text from tiptap JSON structure
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

  // build a preview text (~120 chars -> about 60 chars per line x 2 lines)
  function buildPreview(content: any): string {
    if (content == null) return '';
    let fullText = '';

    if (typeof content === 'string') {
      // some items might store serialized tiptap JSON or plain text
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
    const maxChars = 120; // ~60 chars per line x 2 lines
    if (fullText.length <= maxChars) return fullText;
    return fullText.slice(0, maxChars).trim() + '...';
  }

  // Render full report details inline (instead of modal)
  function renderFullReport(report: any) {
    const created = report.createdAt ? new Date(report.createdAt).toLocaleString() : '-';
    const updated = report.updatedAt ? new Date(report.updatedAt).toLocaleString() : '-';

    // Determine tiptap content (object or parsed string)
    let parsedContent: any = null;
    if (report.content && typeof report.content === 'object') {
      parsedContent = report.content;
    } else if (report.content && typeof report.content === 'string') {
      try {
        const maybe = JSON.parse(report.content);
        if (maybe && typeof maybe === 'object') parsedContent = maybe;
      } catch {
        parsedContent = null;
      }
    }

    return (
      <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">{report.title ?? 'Report'}</h2>
            <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {report.author
                ? `${report.author.firstName ?? ''} ${report.author.lastName ?? ''}`
                : 'System'}
            </div>
          </div>

          <div className="text-sm text-gray-500 text-right">
            <div>
              Status: <span className="font-medium">{report.status ?? '-'}</span>
            </div>
            <div>
              Category: <span className="font-medium">{report.category ?? '-'}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-500">Content</div>
          <div className="mt-2">
            {parsedContent ? (
              <div className="rounded border bg-white dark:bg-gray-900 p-3">
                <TiptapJsonViewer content={parsedContent} className="tiptap tiptap-view-only" />
              </div>
            ) : report.content ? (
              <div className="whitespace-pre-line">{String(report.content)}</div>
            ) : (
              <div className="text-sm text-muted">No content</div>
            )}
          </div>
        </div>

        {Array.isArray(report.attachments) && report.attachments.length > 0 && (
          <div>
            <div className="text-sm text-gray-500 mb-2">Attachments</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {report.attachments.map((a: string) => (
                <img
                  key={a}
                  src={a}
                  alt="attachment"
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
            <Button
              variant="outline"
              onClick={() => {
                setViewing(null);
              }}
            >
              Back
            </Button>
            <Button
              onClick={() => {
                handleEdit(report);
              }}
            >
              Edit
            </Button>
            <Button
              variant="destructive"
              onClick={async () => {
                await handleDelete(report.id);
                setViewing(null);
              }}
              disabled={Boolean(deleteLoading && deleteId === report.id)}
            >
              {deleteLoading && deleteId === report.id ? 'Deleting...' : 'Delete'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // If a report is selected, render it inline (not in a modal)
  if (viewing) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                setViewing(null);
              }}
            >
              ← Back
            </Button>
            <h2 className="text-lg font-semibold">{viewing.title || 'Report'}</h2>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                handleEdit(viewing);
              }}
            >
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

        <div className="p-0">{renderFullReport(viewing)}</div>

        {/* Keep create dialog accessible while viewing */}
        <Dialog open={openCreate} onOpenChange={(val) => !val && setOpenCreate(false)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Report</DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <CreateReportForm
                mode="create"
                onSuccess={() => setOpenCreate(false)}
                onCancel={() => setOpenCreate(false)}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  // Default listing (cards) view
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div />
        <div className="flex items-center gap-2">
          <Button onClick={() => setOpenCreate(true)} className="bg-green-600 text-white">
            Create Report
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {(!Array.isArray(data) || data.length === 0) && (
          <div className="text-center py-8 text-gray-500">No reports found.</div>
        )}

        {Array.isArray(data) &&
          data.map((report) => {
            const authorLabel = report.author
              ? `${report.author.firstName ?? ''} ${report.author.lastName ?? ''}`.trim()
              : 'System';
            const createdAt = report.createdAt ? new Date(report.createdAt).toLocaleString() : '-';
            const preview = buildPreview(report.content);

            return (
              <div
                key={report.id}
                className="p-4 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Clickable left area opens the report inline */}
                  <div
                    className="flex-1 min-w-0 cursor-pointer"
                    onClick={() => setViewing(report)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setViewing(report);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg truncate">
                        {report.title || 'Untitled Report'}
                      </h3>

                      <div className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">
                        {report.status ?? '-'}
                      </div>

                      <div className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">
                        {report.category ?? '-'}
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground mt-2">
                      {/* Two-line preview with ellipsis */}
                      {preview ? (
                        <div
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                          className="text-sm text-gray-700 dark:text-gray-300"
                        >
                          {preview}
                        </div>
                      ) : (
                        <div className="text-sm text-muted">No content</div>
                      )}

                      <div className="text-xs text-gray-500 mt-2">
                        By: {authorLabel} · Created: {createdAt}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 min-w-max">
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        setViewing(report);
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
                        handleEdit(report);
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
                        await handleDelete(report.id);
                      }}
                      disabled={Boolean(deleteLoading && deleteId === report.id)}
                    >
                      {deleteLoading && deleteId === report.id ? 'Deleting...' : 'Delete'}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* Optional TableActions component (kept for compatibility) */}
      <div className="mt-4">
        {TableActions ? (
          <TableActions data={data} columns={[]} tableRef={React.createRef()} />
        ) : null}
      </div>

      {/* Create dialog */}
      <Dialog open={openCreate} onOpenChange={(val) => !val && setOpenCreate(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Report</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <CreateReportForm
              mode="create"
              onSuccess={() => setOpenCreate(false)}
              onCancel={() => setOpenCreate(false)}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
