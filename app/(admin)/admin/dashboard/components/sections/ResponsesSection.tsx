'use client';

import React from 'react';
import { DataTable } from '@/app/(admin)/admin/dashboard/data-table/data-table/data-table';
import { responseColumns } from '@/app/(admin)/admin/dashboard/data-table/columns/responses';

export default function ResponsesSection({
  paginatedData,
  page,
  rowsPerPage,
  handleEdit,
  handleView,
  handleDelete,
  TableActions,
  deleteId,
  deleteLoading,
}: {
  paginatedData: any[];
  page: number;
  rowsPerPage: number;
  handleEdit: (record: any) => void;
  handleView: (record: any) => void;
  handleDelete: (id: string | number) => void;
  TableActions: React.FC<any>;
  deleteId?: string | number | null;
  deleteLoading?: boolean;
}) {
  const columns = [
    {
      id: 'number',
      header: 'No.',
      cell: ({ row }: any) => (page - 1) * rowsPerPage + row.index + 1,
      size: 50,
    },
    ...responseColumns({
      onEdit: handleEdit,
      onView: handleView,
      onDelete: handleDelete,
      deleteId,
      deleteLoading,
    }),
  ];

  return (
    <>
      <DataTable columns={columns} data={paginatedData} />
      <TableActions data={paginatedData} columns={columns} tableRef={React.createRef()} />
    </>
  );
}
