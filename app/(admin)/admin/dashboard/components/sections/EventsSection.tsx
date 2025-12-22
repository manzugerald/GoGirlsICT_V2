'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { DataTable } from '@/app/(admin)/admin/dashboard/data-table/data-table/data-table';
import { eventColumns } from '@/app/(admin)/admin/dashboard/data-table/columns/events';
import EventView from '@/app/(admin)/admin/dashboard/components/views/eventView';
import { Button } from '@/components/ui/button';
import type { ColumnDef } from '@tanstack/react-table';

export default function EventsSection({
  paginatedData,
  page,
  rowsPerPage,
  handleEdit,
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
  handleDelete: (id: string | number) => void;
  currentUserRole?: string;
  TableActions?: React.FC<any>;
  deleteId?: string | number | null;
  deleteLoading?: boolean;
  onToggleControls?: (hide: boolean) => void;
}) {
  const [viewingEvent, setViewingEvent] = useState<any | null>(null);
  const [data, setData] = useState<any[]>(paginatedData ?? []);

  useEffect(() => {
    setData(paginatedData ?? []);
  }, [paginatedData]);

  // Notify parent to hide/show top controls when viewing inline
  useEffect(() => {
    if (typeof onToggleControls === 'function') onToggleControls(!!viewingEvent);
    return () => {
      if (typeof onToggleControls === 'function') onToggleControls(false);
    };
  }, [viewingEvent, onToggleControls]);

  const baseCols = useMemo(
    () =>
      eventColumns({
        onEdit: handleEdit,
        onDelete: (id: number) => handleDelete(id),
      }),
    [handleEdit, handleDelete]
  );

  // Add a "View" column so users can open the inline Event view
  const viewColumn: ColumnDef<any, any> = {
    id: 'view',
    header: 'View',
    cell: ({ row }: any) => (
      <Button size="sm" onClick={() => setViewingEvent(row.original)}>
        View
      </Button>
    ),
  };

  const cols = useMemo(() => {
    return [...baseCols.slice(0, -3), viewColumn, ...baseCols.slice(-3)];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseCols]);

  function formatDate(d: any) {
    if (!d) return '-';
    try {
      return new Date(d).toLocaleString();
    } catch {
      return String(d);
    }
  }

  function renderFullEvent(ev: any) {
    const created = formatDate(ev.createdAt);
    const updated = formatDate(ev.updatedAt);

    return (
      <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-left">{ev.title ?? 'Event'}</h1>
            <div className="text-sm text-gray-500 mt-2">
              By:{' '}
              {ev.createdBy
                ? `${ev.createdBy.firstName ?? ''} ${ev.createdBy.lastName ?? ''}`.trim()
                : 'System'}{' '}
              · Created: {created} · Updated: {updated}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                handleEdit(ev);
              }}
            >
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
        </div>

        <div className="p-0">
          <EventView data={ev} onClose={() => setViewingEvent(null)} />
        </div>

        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-500">
            Created: {created} · Updated: {updated}
          </div>
          <div>
            <Button variant="outline" onClick={() => setViewingEvent(null)}>
              Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // If an event is selected, render inline (not a modal)
  if (viewingEvent) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => setViewingEvent(null)}>
              ← Back
            </Button>
            {/* Title is rendered inside renderFullEvent */}
          </div>
        </div>

        <div className="p-0">{renderFullEvent(viewingEvent)}</div>
      </div>
    );
  }

  // Default listing view: no top "Create Event" button (creation handled via dashboard)
  return (
    <>
      <DataTable columns={cols} data={data} />
      {TableActions && <TableActions data={data} columns={cols} tableRef={React.createRef()} />}
    </>
  );
}
