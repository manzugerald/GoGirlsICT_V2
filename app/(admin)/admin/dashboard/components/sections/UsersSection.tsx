'use client';

import React, { useMemo } from 'react';
import { DataTable } from '@/app/(admin)/admin/dashboard/data-table/data-table/data-table';
import { Button } from '@/components/ui/button';

export default function UsersSection({
  paginatedData,
  page,
  rowsPerPage,
  handleEdit,
  handleView,
  handleDelete,
  messagesCountMap, // not used here but kept for API compatibility with other sections
  responsesCountMap,
  currentUserRole,
  TableActions,
  onAddMessage,
}: {
  paginatedData: any[];
  page: number;
  rowsPerPage: number;
  handleEdit: (record: any) => void;
  handleView: (record: any) => void;
  handleDelete: (id: string | number) => void;
  messagesCountMap: Record<string, number>;
  responsesCountMap?: Record<string, number>;
  currentUserRole: string;
  TableActions: React.FC<any>;
  onAddMessage?: (id: string) => void;
}) {
  const columns = useMemo(
    () => [
      {
        id: 'number',
        header: 'No.',
        cell: ({ row }: any) => (page - 1) * rowsPerPage + row.index + 1,
        size: 50,
      },
      {
        accessorKey: 'username',
        header: 'Username',
        cell: ({ row }: any) => (
          <div className="whitespace-normal break-words max-w-xs">{row.getValue('username')}</div>
        ),
      },
      {
        id: 'name',
        header: 'Name',
        cell: ({ row }: any) =>
          `${row.original.firstName ?? ''} ${row.original.lastName ?? ''}`.trim() || '-',
      },
      {
        accessorKey: 'email',
        header: 'Email',
        cell: ({ row }: any) => row.getValue('email') ?? '-',
      },
      {
        id: 'role',
        header: 'Role',
        cell: ({ row }: any) => row.original.role ?? '-',
      },
      {
        accessorKey: 'createdAt',
        header: 'Created At',
        cell: ({ row }: any) =>
          row.getValue('createdAt')
            ? new Date(row.getValue('createdAt') as string).toLocaleDateString()
            : '',
      },
      {
        id: 'view',
        header: 'View',
        cell: ({ row }: any) =>
          handleView ? (
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="transition-colors duration-150 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-900 dark:hover:text-blue-100"
              onClick={() => handleView(row.original)}
            >
              View
            </Button>
          ) : null,
      },
      {
        id: 'edit',
        header: 'Edit',
        cell: ({ row }: any) =>
          handleEdit ? (
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="transition-colors duration-150 hover:bg-yellow-100 dark:hover:bg-yellow-800 hover:text-yellow-900 dark:hover:text-yellow-100"
              onClick={() => handleEdit(row.original)}
            >
              Edit
            </Button>
          ) : null,
      },
      {
        id: 'delete',
        header: 'Delete',
        cell: ({ row }: any) =>
          handleDelete ? (
            <Button
              type="button"
              size="sm"
              variant="destructive"
              className="transition-colors duration-150 hover:bg-red-600 dark:hover:bg-red-800 hover:text-white dark:hover:text-white"
              onClick={() => handleDelete(row.original.id)}
            >
              Delete
            </Button>
          ) : null,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [page, rowsPerPage, handleEdit, handleView, handleDelete]
  );

  return (
    <div>
      <div className="mb-4 flex items-center justify-end">
        {/* Optionally the parent can render Add User; we keep it out of the table to let parent control creation */}
      </div>

      <DataTable columns={columns} data={paginatedData} />
      <TableActions data={paginatedData} columns={columns} tableRef={React.createRef()} />
    </div>
  );
}
