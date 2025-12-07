'use client';

import { ColumnDef } from '@tanstack/react-table';
import { BeneficiaryMessage } from '@/lib/generated/prisma';
import { Button } from '@/components/ui/button';

type BeneficiaryMessageWithRelations = BeneficiaryMessage & {
  beneficiary?: {
    id: string;
    firstName: string;
    lastName: string;
  };
};

export function beneficiaryMessageColumns({
  onEdit,
  onDelete,
}: {
  onEdit: (row: BeneficiaryMessageWithRelations) => void;
  onDelete: (id: string) => void;
}): ColumnDef<BeneficiaryMessageWithRelations>[] {
  return [
    {
      accessorKey: 'title',
      header: 'Title',
      cell: ({ row }) => row.getValue('title'),
    },
    {
      accessorKey: 'beneficiaryMessageText',
      header: 'Message',
      cell: ({ row }) => {
        const msg = row.getValue('beneficiaryMessageText');
        if (!msg) return '';
        if (typeof msg === 'string') return msg;
        try {
          return JSON.stringify(msg);
        } catch {
          return '[object]';
        }
      },
    },
    {
      accessorKey: 'beneficiary',
      header: 'Beneficiary',
      cell: ({ row }) => {
        const beneficiary = row.original.beneficiary;
        return beneficiary ? `${beneficiary.firstName} ${beneficiary.lastName}` : '-';
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => row.getValue('status') || '-',
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      cell: ({ row }) =>
        row.getValue('createdAt') ? new Date(row.getValue('createdAt')).toLocaleDateString() : '',
    },
    {
      accessorKey: 'updatedAt',
      header: 'Updated At',
      cell: ({ row }) =>
        row.getValue('updatedAt') ? new Date(row.getValue('updatedAt')).toLocaleDateString() : '',
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <Button type="button" size="sm" variant="outline" onClick={() => onEdit(row.original)}>
          Edit
        </Button>
      ),
    },
    {
      id: 'delete',
      header: 'Delete',
      cell: ({ row }) => (
        <Button
          type="button"
          size="sm"
          variant="destructive"
          onClick={() => onDelete(row.original.id)}
        >
          Delete
        </Button>
      ),
    },
  ];
}
