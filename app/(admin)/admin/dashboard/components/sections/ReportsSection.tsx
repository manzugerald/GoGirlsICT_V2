'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';

// Dynamically load the Tiptap JSON viewer (no SSR) — kept in case some reports use tiptap content
const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

// This section renders Report records defensively (legacy field-name
// fallbacks like files/file/pdf, optional beneficiary links, etc.) rather
// than one fixed shape — hence one deliberate loose alias here instead of
// scattering `any` throughout the file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReportRecord = any;

export default function ReportsSection({
  paginatedData,
  handleEdit,
  handleDelete,
  TableActions,
  deleteId,
  deleteLoading,
  onToggleControls,
}: {
  paginatedData: ReportRecord[];
  page: number;
  rowsPerPage: number;
  handleEdit: (record: ReportRecord) => void;
  handleDelete: (id: string | number) => void;
  currentUserRole?: string;
  TableActions?: React.ElementType;
  deleteId?: string | number | null;
  deleteLoading?: boolean;
  onToggleControls?: (hide: boolean) => void;
}) {
  const [viewing, setViewing] = useState<ReportRecord | null>(null);
  const [data, setData] = useState<ReportRecord[]>(paginatedData ?? []);

  useEffect(() => {
    setData(paginatedData ?? []);
  }, [paginatedData]);

  // Notify parent to hide controls when viewing inline
  useEffect(() => {
    if (typeof onToggleControls === 'function') onToggleControls(!!viewing);
    return () => {
      if (typeof onToggleControls === 'function') onToggleControls(false);
    };
  }, [viewing, onToggleControls]);

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

  // Helpers
  function formatDate(d: string | number | Date | null | undefined) {
    if (!d) return '-';
    try {
      return new Date(d).toLocaleString();
    } catch {
      return String(d);
    }
  }

  function authorLabel(report: ReportRecord) {
    const a = report?.createdBy;
    if (!a) return 'System';
    return `${a.firstName ?? ''} ${a.lastName ?? ''}`.trim() || (a.username ?? 'System');
  }

  function getPdfUrl(report: ReportRecord): string | null {
    if (Array.isArray(report.files) && report.files.length > 0) {
      const pdfFile = report.files.find(
        (f: string) => typeof f === 'string' && f.toLowerCase().endsWith('.pdf')
      );
      if (pdfFile) return pdfFile;
      // fallback to first file if it's a URL
      return typeof report.files[0] === 'string' ? report.files[0] : null;
    }
    if (typeof report.file === 'string') return report.file;
    if (typeof report.pdf === 'string') return report.pdf;
    return null;
  }

  // When viewing a report inline, render title + content + pdf + image at the bottom
  function renderFullReport(report: ReportRecord) {
    const created = formatDate(report.createdAt);
    const updated = formatDate(report.updatedAt);

    const pdfUrl = getPdfUrl(report);

    // Determine tiptap content (object or parsed string)
    let parsedContent: ReportRecord = null;
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

    // Use first image if present (will be displayed at bottom)
    const firstImage =
      Array.isArray(report.images) && report.images.length > 0 ? report.images[0] : null;

    // Beneficiaries linked to this report.
    const beneficiaries: { id: string; name: string; image?: string | null }[] = Array.isArray(
      report.beneficiaries
    )
      ? report.beneficiaries
          .map((link: ReportRecord) => link.beneficiary)
          .filter(Boolean)
          .map((b: ReportRecord) => ({
            id: b.id,
            name: `${b.firstName ?? ''} ${b.lastName ?? ''}`.trim() || 'Unnamed beneficiary',
            image: b.image,
          }))
      : [];

    return (
      <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
        {/* Left-aligned title + meta */}
        <div className="">
          <h1 className="text-2xl font-semibold text-left">{report.title ?? 'Report'}</h1>
          <div className="text-sm text-gray-500 mt-2">
            By: {authorLabel(report)} · Created: {created} · Updated: {updated}
          </div>
        </div>

        {/* Download + Edit + Delete inline (just below meta) */}
        <div className="flex items-center gap-2">
          {pdfUrl && (
            <a
              href={pdfUrl}
              download
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Download Report
            </a>
          )}

          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              handleEdit(report);
            }}
          >
            Edit
          </Button>

          <Button
            size="sm"
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

        {/* Show embedded PDF (if any) or tiptap/plain content */}
        {pdfUrl ? (
          <div>
            <div className="text-sm text-gray-500 mb-2">Document</div>
            <div className="w-full border rounded overflow-hidden">
              <iframe
                src={pdfUrl}
                title={report.title ?? 'report-pdf'}
                className="w-full h-[800px]"
              />
            </div>
            <div className="mt-2 flex gap-2">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-slate-100 dark:bg-gray-800 rounded text-sm"
              >
                Open PDF in new tab
              </a>
            </div>
          </div>
        ) : parsedContent ? (
          <div>
            <div className="text-sm text-gray-500 mb-2">Content</div>
            <div className="rounded border bg-white dark:bg-gray-900 p-3">
              <TiptapJsonViewer content={parsedContent} className="tiptap tiptap-view-only" />
            </div>
          </div>
        ) : report.content ? (
          <div>
            <div className="text-sm text-gray-500 mb-2">Content</div>
            <div className="whitespace-pre-line">{String(report.content)}</div>
          </div>
        ) : null}

        {/* Image placed at the bottom */}
        {firstImage && (
          <div className="flex justify-start">
            <img
              src={firstImage}
              alt="report image"
              className="max-h-60 w-auto object-cover rounded border"
            />
          </div>
        )}

        {beneficiaries.length > 0 && (
          <div>
            <div className="text-sm text-gray-500 mb-2">
              Beneficiaries ({beneficiaries.length})
            </div>
            <div className="flex flex-wrap gap-3">
              {beneficiaries.map((b) => (
                <div
                  key={b.id}
                  className="flex items-center gap-2 rounded-full border bg-gray-50 dark:bg-gray-950 pl-1 pr-3 py-1"
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

  // If a report is selected, render the full view inline
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
            {/* Title removed here to avoid duplication; renderFullReport shows it left-aligned */}
          </div>

          {/* Top-right small actions are no longer required; actions live under the title in renderFullReport */}
        </div>

        <div className="p-0">{renderFullReport(viewing)}</div>
      </div>
    );
  }

  // Default listing view: cards (title, then By / Created / Updated under the title on one line for larger screens)
  return (
    <>
      {/* Top "Create Report" button removed — creation is handled via dashboard "Add New" control */}

      <div className="space-y-4">
        {(!Array.isArray(data) || data.length === 0) && (
          <div className="text-center py-8 text-gray-500">No reports found.</div>
        )}

        {Array.isArray(data) &&
          data.map((report) => {
            const created = formatDate(report.createdAt);
            const updated = formatDate(report.updatedAt);
            const pdfUrl = getPdfUrl(report);

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
                    <h3 className="font-semibold text-lg truncate">
                      {report.title || 'Untitled Report'}
                    </h3>

                    <div className="mt-2 text-sm text-gray-600 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                      <div className="whitespace-nowrap">
                        By:{' '}
                        {report.createdBy
                          ? `${report.createdBy.firstName ?? ''} ${
                              report.createdBy.lastName ?? ''
                            }`.trim()
                          : 'System'}
                      </div>
                      <div className="whitespace-nowrap">Created: {created}</div>
                      <div className="whitespace-nowrap">Updated: {updated}</div>
                    </div>
                  </div>

                  {/* Actions: Download (if available), View, Edit, Delete */}
                  <div className="flex items-center gap-2 min-w-max">
                    {pdfUrl ? (
                      <a
                        href={pdfUrl}
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
    </>
  );
}
