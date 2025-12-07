'use client';

import React from 'react';
import { Message } from '@/lib/generated/prisma';

type MessageWithRelations = Message & {
  beneficiary?: {
    id: string;
    firstName: string;
    lastName: string;
  } | null;
};

export default function MessagesSection({
  paginatedData,
  page,
  rowsPerPage,
  handleEdit,
  handleView,
  handleDelete,
  onRespond,
  currentUserRole,
  TableActions,
  deleteId,
  deleteLoading,
}: {
  paginatedData: MessageWithRelations[] | any[];
  page: number;
  rowsPerPage: number;
  handleEdit: (record: any) => void;
  // now handleView accepts an optional source so the dashboard knows this came from the messages list
  handleView: (record: any, source?: 'messages' | 'responses' | string) => void;
  handleDelete: (id: string | number) => void;
  onRespond?: (messageId: number | string) => void;
  currentUserRole?: string;
  TableActions?: React.FC<any>;
  deleteId?: string | number | null;
  deleteLoading?: boolean;
}) {
  const ownerLabel = (m: MessageWithRelations) => {
    if (m.name && `${m.name}`.trim().length > 0) return m.name;
    if (m.beneficiary) return `${m.beneficiary.firstName} ${m.beneficiary.lastName}`;
    return 'System';
  };

  return (
    <div className="space-y-4">
      {(!Array.isArray(paginatedData) || paginatedData.length === 0) && (
        <div className="text-center py-8 text-gray-500">No messages found.</div>
      )}

      {Array.isArray(paginatedData) &&
        paginatedData.map((m: any) => (
          <div
            key={m.id}
            className="p-4 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div
                className="flex-1 min-w-0 cursor-pointer"
                onClick={() => handleView(m, 'messages')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleView(m, 'messages');
                }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <div className="font-medium truncate">{ownerLabel(m)}</div>
                  <div className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">
                    {m.messageKind ?? '-'}
                  </div>
                  <div className="text-xs text-gray-500">
                    Created: {m.createdAt ? new Date(m.createdAt).toLocaleString() : '-'}
                  </div>
                  <div className="text-xs text-gray-500">
                    Updated: {m.updatedAt ? new Date(m.updatedAt).toLocaleString() : '-'}
                  </div>
                </div>

                {/* Intentionally not showing message content here */}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="px-2 py-1 border rounded text-sm bg-blue-50 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-blue-900"
                  onClick={() => handleView(m, 'messages')}
                >
                  View
                </button>

                {onRespond && m.allowResponses && (
                  <button
                    type="button"
                    className="px-2 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                    onClick={() => onRespond(m.id)}
                  >
                    Respond
                  </button>
                )}

                <button
                  type="button"
                  className="px-2 py-1 border rounded text-sm bg-yellow-50 hover:bg-yellow-100 dark:bg-gray-800 dark:hover:bg-yellow-900"
                  onClick={() => handleEdit(m)}
                >
                  Edit
                </button>

                <button
                  type="button"
                  className="px-2 py-1 border rounded text-sm bg-red-50 hover:bg-red-100 dark:bg-gray-800 dark:hover:bg-red-900"
                  onClick={() => handleDelete(m.id)}
                  disabled={Boolean(deleteLoading && deleteId === m.id)}
                >
                  {deleteLoading && deleteId === m.id ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          </div>
        ))}

      {/* TableActions optional */}
      <div>
        {TableActions ? (
          <TableActions data={paginatedData} columns={[]} tableRef={React.createRef()} />
        ) : null}
      </div>
    </div>
  );
}
