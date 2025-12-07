'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { DataTable } from '@/app/(admin)/admin/dashboard/data-table/data-table/data-table';
import { eventColumns } from '@/app/(admin)/admin/dashboard/data-table/columns/events';
import EventView from '@/app/(admin)/admin/dashboard/components/views/eventView';
import CreateEventForm from '@/app/(admin)/admin/dashboard/createEventForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function EventsSection({
  paginatedData,
  page,
  rowsPerPage,
  handleEdit,
  handleDelete,
  currentUserRole,
  TableActions,
}: {
  paginatedData: any[];
  page: number;
  rowsPerPage: number;
  handleEdit: (record: any) => void;
  handleDelete: (id: string | number) => void;
  currentUserRole: string;
  TableActions: React.FC<any>;
}) {
  const [viewingEvent, setViewingEvent] = useState<any | null>(null);
  const [openCreate, setOpenCreate] = useState(false);

  // Keep a local copy of paginatedData for the table; merge server-provided values if needed
  const [data, setData] = useState<any[]>(paginatedData ?? []);

  useEffect(() => {
    setData(paginatedData ?? []);
  }, [paginatedData]);

  const baseCols = useMemo(
    () =>
      eventColumns({
        onEdit: handleEdit,
        onDelete: (id: number) => handleDelete(id),
      }),
    [handleEdit, handleDelete]
  );

  // Add a "View" column so users can open the EventView dialog
  const viewColumn = {
    id: 'view',
    header: 'View',
    cell: ({ row }: any) => (
      <Button size="sm" onClick={() => setViewingEvent(row.original)}>
        View
      </Button>
    ),
  };

  const cols = useMemo(() => {
    // append view column before actions for convenience
    return [...baseCols.slice(0, -3), viewColumn, ...baseCols.slice(-3)];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseCols]);

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div />
        <div className="flex items-center gap-2">
          <Button onClick={() => setOpenCreate(true)} className="bg-green-600 text-white">
            Create Event
          </Button>
        </div>
      </div>

      <DataTable columns={cols} data={data} />
      <TableActions data={data} columns={cols} tableRef={React.createRef()} />

      {/* View dialog */}
      <Dialog open={!!viewingEvent} onOpenChange={(val) => !val && setViewingEvent(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Event details</DialogTitle>
          </DialogHeader>
          {viewingEvent && (
            <EventView
              data={viewingEvent}
              onClose={() => {
                setViewingEvent(null);
              }}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Create dialog */}
      <Dialog open={openCreate} onOpenChange={(val) => !val && setOpenCreate(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Event</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <CreateEventForm
              mode="create"
              onSuccess={() => {
                setOpenCreate(false);
                // parent page should refresh; we do a soft update by removing nothing here
              }}
              onCancel={() => setOpenCreate(false)}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
