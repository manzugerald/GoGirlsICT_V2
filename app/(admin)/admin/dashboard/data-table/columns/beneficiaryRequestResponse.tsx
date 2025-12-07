'use client';

import { ColumnDef } from '@tanstack/react-table';
import { BeneficiaryRequestResponse } from '@/lib/generated/prisma';
import { Button } from '@/components/ui/button';

type BeneficiaryRequestResponseWithRelations = BeneficiaryRequestResponse & {
  responder?: {
    id: string;
    firstName: string;
    lastName: string;
    email?: string;
  };
  request?: {
    id: string;
    title: string;
    beneficiary?: {
      id: string;
      firstName: string;
      lastName: string;
    };
  };
};

export function beneficiaryRequestResponseColumns({
  onEdit,
  onDelete,
}: {
  onEdit: (row: BeneficiaryRequestResponseWithRelations) => void;
  onDelete: (id: string) => void;
}): ColumnDef<BeneficiaryRequestResponseWithRelations>[] {
  return [
    {
      accessorKey: 'request',
      header: 'Request Title',
      cell: ({ row }) => row.original.request?.title || '-',
    },
    {
      accessorKey: 'responseText',
      header: 'Response Text',
      cell: ({ row }) => {
        const val = row.getValue('responseText');
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
      accessorKey: 'responder',
      header: 'Responder',
      cell: ({ row }) => {
        const responder = row.original.responder;
        return responder
          ? `${responder.firstName} ${responder.lastName}${
              responder.email ? ' (' + responder.email + ')' : ''
            }`
          : '-';
      },
    },
    {
      accessorKey: 'respondedAt',
      header: 'Responded At',
      cell: ({ row }) =>
        row.getValue('respondedAt')
          ? new Date(row.getValue('respondedAt') as string).toLocaleDateString()
          : '',
    },
    {
      accessorKey: 'responseUpdatedAt',
      header: 'Updated At',
      cell: ({ row }) =>
        row.getValue('responseUpdatedAt')
          ? new Date(row.getValue('responseUpdatedAt') as string).toLocaleDateString()
          : '',
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
