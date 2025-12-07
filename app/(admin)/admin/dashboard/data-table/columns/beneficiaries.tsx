'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Beneficiary } from '@/lib/generated/prisma';
import { Button } from '@/components/ui/button';

type BeneficiaryWithRelations = Beneficiary & {
  createdBy?: {
    firstName: string;
    lastName: string;
  };
  institution?: {
    id: string;
    name: string;
  };
  beneficiaryMessages?: { id: string; title?: string }[];
  messagesCount?: number; // server-provided (various names used across APIs)
  messageCount?: number;
  messages?: any[]; // sometimes relations are present
  _count?: { messages?: number }; // Prisma _count shape
  responsesCount?: number; // server-provided
  responseCount?: number;
  responses?: any[];
};

type Opts = {
  onEdit: (beneficiary: BeneficiaryWithRelations) => void;
  onView: (beneficiary: BeneficiaryWithRelations) => void;
  onDelete?: (beneficiaryId: string) => void;
  onAddMessage?: (beneficiaryId: string) => void;
  onMessageIdClick?: (msgId: string) => void;
  messagesCountMap?: Record<string, number>;
  responsesCountMap?: Record<string, number>;
  currentUserRole?: string;
};

function numericOrUndefined(v: unknown): number | undefined {
  if (typeof v === 'number' && !Number.isNaN(v)) return v;
  if (typeof v === 'string' && v.trim() !== '' && !Number.isNaN(Number(v))) return Number(v);
  return undefined;
}

export function beneficiaryColumns({
  onEdit,
  onView,
  onDelete,
  onAddMessage,
  onMessageIdClick,
  messagesCountMap,
  responsesCountMap,
  currentUserRole,
}: Opts): ColumnDef<BeneficiaryWithRelations>[] {
  const cols: ColumnDef<BeneficiaryWithRelations>[] = [
    {
      accessorKey: 'firstName',
      header: 'First Name',
      cell: ({ row }) => (
        <div className="whitespace-normal break-words max-w-xs">{row.getValue('firstName')}</div>
      ),
    },
    {
      accessorKey: 'lastName',
      header: 'Last Name',
      cell: ({ row }) => (
        <div className="whitespace-normal break-words max-w-xs">{row.getValue('lastName')}</div>
      ),
    },

    {
      id: 'messagesCount',
      header: 'Messages',
      cell: ({ row }) => {
        const id = row.original.id as string | undefined;

        // Try a bunch of server-provided locations (to be resilient to different API shapes)
        const serverCandidates = [
          row.original.messageCount,
          row.original.messagesCount,
          row.original._count?.messages,
          numericOrUndefined(row.original._count?.messages),
          numericOrUndefined(row.original.messageCount),
          numericOrUndefined(row.original.messagesCount),
          // sometimes the API returns the relation array
          Array.isArray(row.original.beneficiaryMessages)
            ? row.original.beneficiaryMessages.length
            : undefined,
          Array.isArray(row.original.messages) ? row.original.messages.length : undefined,
        ];

        for (const cand of serverCandidates) {
          if (typeof cand === 'number') return cand;
          if (typeof cand === 'string' && cand !== '') {
            const parsed = Number(cand);
            if (!Number.isNaN(parsed)) return parsed;
          }
        }

        // Fallback to the messagesCountMap passed down from parent (optimistic updates)
        if (messagesCountMap && id) return messagesCountMap[id] ?? 0;

        // Last resort: zero
        return 0;
      },
    },
    {
      id: 'addMessage',
      header: '',
      cell: ({ row }) =>
        onAddMessage ? (
          <Button
            type="button"
            size="sm"
            className="px-2 py-1 rounded bg-green-600 text-white hover:bg-green-700 dark:hover:bg-green-800 text-xs"
            onClick={() => onAddMessage(row.original.id)}
          >
            Add Message
          </Button>
        ) : null,
    },

    {
      id: 'responsesCount',
      header: 'Responses',
      cell: ({ row }) => {
        const id = row.original.id as string | undefined;

        const serverCandidates = [
          row.original.responseCount,
          row.original.responsesCount,
          numericOrUndefined(row.original.responseCount),
          numericOrUndefined(row.original.responsesCount),
          Array.isArray(row.original.responses) ? row.original.responses.length : undefined,
        ];
        for (const cand of serverCandidates) {
          if (typeof cand === 'number') return cand;
          if (typeof cand === 'string' && cand !== '') {
            const parsed = Number(cand);
            if (!Number.isNaN(parsed)) return parsed;
          }
        }

        if (responsesCountMap && id) return responsesCountMap[id] ?? 0;
        return 0;
      },
    },

    {
      accessorKey: 'createdAt',
      header: 'Created At',
      cell: ({ row }) =>
        row.getValue('createdAt')
          ? new Date(row.getValue('createdAt') as string).toLocaleDateString()
          : '',
    },
    {
      accessorKey: 'updatedAt',
      header: 'Updated At',
      cell: ({ row }) =>
        row.getValue('updatedAt')
          ? new Date(row.getValue('updatedAt') as string).toLocaleDateString()
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
  ];

  if (onDelete && currentUserRole !== 'beneficiary') {
    cols.push({
      id: 'delete',
      header: 'Delete',
      cell: ({ row }) => (
        <Button
          type="button"
          size="sm"
          variant="destructive"
          className="transition-colors duration-150 hover:bg-red-600 dark:hover:bg-red-800 hover:text-white dark:hover:text-white"
          onClick={() => onDelete(row.original.id)}
        >
          Delete
        </Button>
      ),
    });
  }

  return cols;
}
