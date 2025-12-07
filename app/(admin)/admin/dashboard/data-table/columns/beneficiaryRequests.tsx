'use client';

import { ColumnDef } from '@tanstack/react-table';
import { BeneficiaryRequest } from '@/lib/generated/prisma';
import { Button } from '@/components/ui/button';

type BeneficiaryRequestWithRelations = BeneficiaryRequest & {
  beneficiary?: {
    id: string;
    firstName: string;
    lastName: string;
  };
};

export function beneficiaryRequestColumns({
  onEdit,
  onDelete,
}: {
  onEdit: (row: BeneficiaryRequestWithRelations) => void;
  onDelete: (id: string) => void;
}): ColumnDef<BeneficiaryRequestWithRelations>[] {
  return [
    {
      accessorKey: 'title',
      header: 'Title',
      cell: ({ row }) => row.getValue('title'),
    },
    {
      accessorKey: 'beneficiaryRequestText',
      header: 'Request Text',
      cell: ({ row }) => {
        const val = row.getValue('beneficiaryRequestText');
        if (!val) return '';
        if (typeof val === 'string') return val;
        try {
          return JSON.stringify(val);
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
