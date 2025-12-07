'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { DataTable } from '@/app/(admin)/admin/dashboard/data-table/data-table/data-table';
import { beneficiaryColumns } from '@/app/(admin)/admin/dashboard/data-table/columns/beneficiaries';
import createServer from 'next/dist/server/next';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function BeneficiariesSection({
  paginatedData,
  page,
  rowsPerPage,
  handleEdit,
  handleView,
  handleDelete,
  messagesCountMap: initialMessagesCountMap,
  responsesCountMap: initialResponsesCountMap,
  currentUserRole,
  TableActions,
  onAddMessage: externalOnAddMessage,
}: {
  paginatedData: any[];
  page: number;
  rowsPerPage: number;
  handleEdit: (record: any) => void;
  handleDelete: (id: string | number) => void;
  messagesCountMap?: Record<string, number>;
  responsesCountMap?: Record<string, number>;
  currentUserRole: string;
  TableActions: React.FC<any>;
  onAddMessage?: (id: string) => void;
}) {
  // Local maps so the component can update counts immediately after creating a message
  const [messagesCountMap, setMessagesCountMap] = useState<Record<string, number>>(
    initialMessagesCountMap ?? {}
  );
  const [responsesCountMap, setResponsesCountMap] = useState<Record<string, number>>(
    initialResponsesCountMap ?? {}
  );

  // Merge server-provided counts from paginatedData whenever it changes (keeps UI accurate after refresh)
  useEffect(() => {
    if (!Array.isArray(paginatedData)) return;

    setMessagesCountMap((prev) => {
      const merged = { ...prev };
      for (const b of paginatedData) {
        const id = b?.id;
        // Accept many shapes for server-provided counts
        const serverCount =
          typeof b?.messageCount === 'number'
            ? b.messageCount
            : typeof b?.messagesCount === 'number'
            ? b.messagesCount
            : typeof b?._count?.messages === 'number'
            ? b._count.messages
            : Array.isArray(b?.beneficiaryMessages)
            ? b.beneficiaryMessages.length
            : Array.isArray(b?.messages)
            ? b.messages.length
            : undefined;
        if (id && typeof serverCount === 'number') merged[id] = serverCount;
      }
      return merged;
    });

    setResponsesCountMap((prev) => {
      const merged = { ...prev };
      for (const b of paginatedData) {
        const id = b?.id;
        const serverCount =
          typeof b?.responseCount === 'number'
            ? b.responseCount
            : typeof b?.responsesCount === 'number'
            ? b.responsesCount
            : Array.isArray(b?.responses)
            ? b.responses.length
            : undefined;
        if (id && typeof serverCount === 'number') merged[id] = serverCount;
      }
      return merged;
    });
  }, [paginatedData]);

  // Dialog state for creating a message
  const [openAddMessageFor, setOpenAddMessageFor] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);

  const openCreateModal = (beneficiaryId: string) => {
    if (externalOnAddMessage) {
      try {
        externalOnAddMessage(beneficiaryId);
      } catch {
        // ignore
      }
    }
    setOpenAddMessageFor(beneficiaryId);
  };

  const closeCreateModal = () => {
    setOpenAddMessageFor(null);
  };

  // After message creation we refresh counts by fetching beneficiary endpoint,
  // and also optimistically increment local map to show instant feedback.
  const handleCreateSuccess = async (beneficiaryId: string) => {
    setCreating(true);

    // optimistic increment first
    setMessagesCountMap((prev) => ({ ...prev, [beneficiaryId]: (prev[beneficiaryId] ?? 0) + 1 }));

    try {
      const res = await fetch(`/api/beneficiaries/${encodeURIComponent(beneficiaryId)}`);
      if (!res.ok) {
        setOpenAddMessageFor(null);
        return;
      }
      const json = await res.json();
      const msgCount =
        typeof json?.messageCount === 'number'
          ? json.messageCount
          : typeof json?.messagesCount === 'number'
          ? json.messagesCount
          : typeof json?._count?.messages === 'number'
          ? json._count.messages
          : undefined;
      const respCount =
        typeof json?.responseCount === 'number'
          ? json.responseCount
          : typeof json?.responsesCount === 'number'
          ? json.responsesCount
          : undefined;

      if (typeof msgCount === 'number') {
        setMessagesCountMap((prev) => ({ ...prev, [beneficiaryId]: msgCount }));
      }
      if (typeof respCount === 'number') {
        setResponsesCountMap((prev) => ({ ...prev, [beneficiaryId]: respCount }));
      }
      setOpenAddMessageFor(null);
    } catch (err) {
      // already optimistic, ignore
      setOpenAddMessageFor(null);
    } finally {
      setCreating(false);
    }
  };

  const columns = useMemo(() => {
    return [
      {
        id: 'number',
        header: 'No.',
        cell: ({ row }: any) => (page - 1) * rowsPerPage + row.index + 1,
        size: 50,
      },
      ...beneficiaryColumns({
        onEdit: handleEdit,
        onView: handleView,
        onDelete: handleDelete,
        // pass our local handlers/maps
        messagesCountMap,
        responsesCountMap,
        currentUserRole,
        onAddMessage: (id: string) => openCreateModal(id),
      }),
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    page,
    rowsPerPage,
    handleEdit,
    handleView,
    handleDelete,
    messagesCountMap,
    responsesCountMap,
    currentUserRole,
  ]);

  // local wrappers to call parent handlers
  function handleEdit(record: any) {
    handleEditProp(record);
  }
  function handleView(record: any) {
    handleViewProp(record);
  }
  function handleDelete(recordId: any) {
    handleDeleteProp(recordId);
  }

  // Because we renamed parent props above, rebind them here to avoid lint issues
  // (these are the original functions passed as props)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleEditProp = handleEdit;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleViewProp = handleView;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDeleteProp = handleDelete;

  return (
    <div>
      <DataTable columns={columns} data={paginatedData} />
      <TableActions data={paginatedData} columns={columns} tableRef={React.createRef()} />

      {/* Dialog for creating message */}
      <Dialog open={!!openAddMessageFor} onOpenChange={(val) => !val && closeCreateModal()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Message for beneficiary</DialogTitle>
          </DialogHeader>

          {openAddMessageFor && (
            <div className="p-4 max-w-3xl">
              <CreateMessageForm
                messageId={openAddMessageFor}
                onSuccess={async () => {
                  await handleCreateSuccess(openAddMessageFor);
                }}
                onCancel={closeCreateModal}
              />

              <div className="mt-3 flex justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeCreateModal}
                  disabled={creating}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
