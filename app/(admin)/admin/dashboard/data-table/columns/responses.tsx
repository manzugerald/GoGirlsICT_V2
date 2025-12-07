'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Response } from '@/lib/generated/prisma';
import { Button } from '@/components/ui/button';

type ResponseWithRelations = Response & {
  responderUser?: {
    id: string;
    firstName: string;
    lastName: string;
    email?: string | null;
  } | null;
  responderBeneficiary?: {
    id: string;
    firstName: string;
    lastName: string;
  } | null;
  message?: {
    id: number;
    title?: string | null;
    messageKind?: string | null;
  } | null;
};

type Opts = {
  onEdit: (row: ResponseWithRelations) => void;
  onView?: (row: ResponseWithRelations) => void;
  onDelete?: (id: string) => void;
  deleteId?: string | number | null;
  deleteLoading?: boolean;
  currentUserRole?: string;
};

export function responseColumns({
  onEdit,
  onView,
  onDelete,
  deleteId,
  deleteLoading,
}: Opts): ColumnDef<ResponseWithRelations>[] {
  const cols: ColumnDef<ResponseWithRelations>[] = [
    {
      accessorKey: 'message',
      header: 'Message',
      cell: ({ row }) => row.original.message?.title ?? '-',
    },
    {
      accessorKey: 'message.messageKind',
      header: 'Message Kind',
      cell: ({ row }) => row.original.message?.messageKind ?? '-',
    },
    {
      accessorKey: 'responder',
      header: 'Responder',
      cell: ({ row }) => {
        const u = row.original.responderUser;
        const b = row.original.responderBeneficiary;
        if (u) return `${u.firstName} ${u.lastName}${u.email ? ` (${u.email})` : ''}`;
        if (b) return `${b.firstName} ${b.lastName}`;
        return 'System';
      },
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      cell: ({ row }) =>
        row.getValue('createdAt')
          ? new Date(row.getValue('createdAt') as string).toLocaleString()
          : '',
    },
    {
      accessorKey: 'updatedAt',
      header: 'Updated At',
      cell: ({ row }) =>
        row.getValue('updatedAt')
          ? new Date(row.getValue('updatedAt') as string).toLocaleString()
          : '',
    },
    {
      id: 'edit',
      header: 'Edit',
      cell: ({ row }) => (
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="transition-colors duration-150 hover:bg-yellow-100 dark:hover:bg-yellow-800 hover:text-yellow-900 dark:hover:text-yellow-100"
          onClick={() => onEdit(row.original)}
        >
          Edit
        </Button>
      ),
    },
    {
      id: 'view',
      header: 'View',
      cell: ({ row }) =>
        onView ? (
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="transition-colors duration-150 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-900 dark:hover:text-blue-100"
            onClick={() => onView(row.original)}
          >
            View
          </Button>
        ) : null,
    },
    {
      id: 'delete',
      header: 'Delete',
      cell: ({ row }) => (
        <Button
          type="button"
          size="sm"
          variant="destructive"
          className="transition-colors duration-150 hover:bg-red-600 dark:hover:bg-red-800 hover:text-white dark:hover:text-white"
          onClick={() => onDelete && onDelete(row.original.id)}
          disabled={Boolean(deleteLoading && deleteId === row.original.id)}
        >
          {deleteLoading && deleteId === row.original.id ? 'Deleting...' : 'Delete'}
        </Button>
      ),
    },
  ];

  return cols;
}
