'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { DataTable } from '@/app/(admin)/admin/dashboard/data-table/data-table/data-table';
import { reportColumns } from '@/app/(admin)/admin/dashboard/data-table/columns/reports';
import ReportView from '@/app/(admin)/admin/dashboard/components/views/reportView';
import CreateReportForm from '@/app/(admin)/admin/dashboard/createReportForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function ReportsSection({
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
  const [viewing, setViewing] = useState<any | null>(null);
  const [openCreate, setOpenCreate] = useState(false);
  const [data, setData] = useState<any[]>(paginatedData ?? []);

  useEffect(() => {
    setData(paginatedData ?? []);
  }, [paginatedData]);

  const baseCols = useMemo(
    () =>
      reportColumns({
        onEdit: handleEdit,
        onDelete: (id: number) => handleDelete(id),
      }),
    [handleEdit, handleDelete]
  );

  const viewColumn = {
    id: 'view',
    header: 'View',
    cell: ({ row }: any) => (
      <Button size="sm" onClick={() => setViewing(row.original)}>
        View
      </Button>
    ),
  };

  const cols = useMemo(() => {
    return [...baseCols.slice(0, -3), viewColumn, ...baseCols.slice(-3)];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseCols]);

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

      <DataTable columns={cols} data={data} />
      <TableActions data={data} columns={cols} tableRef={React.createRef()} />

      {/* View dialog */}
      <Dialog open={!!viewing} onOpenChange={(val) => !val && setViewing(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Report details</DialogTitle>
          </DialogHeader>
          {viewing && <ReportView data={viewing} onClose={() => setViewing(null)} />}
        </DialogContent>
      </Dialog>

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
