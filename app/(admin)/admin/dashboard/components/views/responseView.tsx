'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { Response } from '@/lib/generated/prisma';
import '@/assets/styles/tiptap-editor.css';

// Lazy TipTap JSON viewer for rich text
const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

type ResponseWithRelations = Response & {
  responderUser?: {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
  } | null;
  responderBeneficiary?: {
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    // include createdById when available so we can map between user<->beneficiary ownership
    createdById?: string | null;
  } | null;
  message?: {
    id?: number | string;
    title?: string | null;
    // creator user (if the message was authored by a user account)
    createdById?: string | null;
    createdBy?: {
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email?: string | null;
    } | null;
    // beneficiary the message is tied to (if any)
    beneficiary?: {
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      // include createdById when available
      createdById?: string | null;
    } | null;
    // visitor fields
    name?: string | null;
    senderEmail?: string | null;
  } | null;
  responderRole?: 'USER' | 'BENEFICIARY' | 'AUTHOR' | 'SYSTEM';
};

function RoleBadge({ role }: { role?: string }) {
  if (!role) return null;
  const cls =
    role === 'AUTHOR'
      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
      : role === 'BENEFICIARY'
      ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100'
      : role === 'SYSTEM'
      ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100'
      : 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
  return (
    <span
      className={`ml-2 inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded ${cls}`}
    >
      {role === 'AUTHOR' ? 'Author' : role.charAt(0) + role.slice(1).toLowerCase()}
    </span>
  );
}

/**
 * Response view component
 *
 * The "Author" badge is shown only when the responder is the same entity as the author of the message.
 * Checks performed (in order of preference):
 * 1) Server-provided responderRole === 'AUTHOR' (definitive)
 * 2) If both message.createdById and responderUser.id exist -> compare user ids
 * 3) If both message.beneficiary.id and responderBeneficiary.id exist -> compare beneficiary ids
 * 4) If message.createdById exists and responderBeneficiary.createdById exists -> compare those user ids
 *
 * NOTE: For reliable behavior, ensure your API includes:
 *  - message.createdById or message.createdBy.id
 *  - message.beneficiary.id (if message ties to a beneficiary)
 *  - responderUser.id when responder is a user
 *  - responderBeneficiary.id and responderBeneficiary.createdById when responder is a beneficiary
 */
export default function ResponseView({
  data,
  onClose,
}: {
  data: ResponseWithRelations | null | undefined;
  onClose?: () => void;
}) {
  const { data: session } = useSession();

  if (!data) return null;

  const renderContent = (c: unknown) => {
    if (c === undefined || c === null) return <span>-</span>;
    if (typeof c === 'object') {
      return (
        <TiptapJsonViewer
          content={c}
          className="tiptap tiptap-view-only border rounded bg-white dark:bg-gray-900 p-3"
        />
      );
    }
    return <div className="whitespace-pre-line">{String(c)}</div>;
  };

  const responderLabelText = () => {
    if (data.responderUser) {
      const u = data.responderUser;
      return `${u.firstName ?? ''} ${u.lastName ?? ''}`.trim() + (u.email ? ` (${u.email})` : '');
    }
    if (data.responderBeneficiary) {
      const b = data.responderBeneficiary;
      return `${b.firstName ?? ''} ${b.lastName ?? ''}`.trim();
    }
    return 'System';
  };

  // Determine if this response should be tagged "Author"
  const isAuthor =
    // 1) Server-declared author
    data.responderRole === 'AUTHOR' ||
    // 2) message.createdById === responderUser.id (user-to-user match)
    (!!data.message?.createdById &&
      !!data.responderUser?.id &&
      String(data.message.createdById) === String(data.responderUser.id)) ||
    // 3) message.beneficiary.id === responderBeneficiary.id (beneficiary-to-beneficiary match)
    (!!data.message?.beneficiary?.id &&
      !!data.responderBeneficiary?.id &&
      String(data.message.beneficiary.id) === String(data.responderBeneficiary.id)) ||
    // 4) message.createdById === responderBeneficiary.createdById (message authored by a user account that also owns the beneficiary account)
    (!!data.message?.createdById &&
      !!data.responderBeneficiary?.createdById &&
      String(data.message.createdById) === String(data.responderBeneficiary.createdById));

  const badgeRole = isAuthor ? 'AUTHOR' : data.responderRole ?? undefined;

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-background rounded-xl shadow space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center">
            <div className="text-lg font-medium">{responderLabelText()}</div>
            {/* Place the Author tag (or other role badge) directly after the name/email */}
            <RoleBadge role={badgeRole} />
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {data.createdAt ? new Date(data.createdAt).toLocaleString() : ''}
            {data.message?.title ? <span className="ml-2">· in "{data.message.title}"</span> : null}
          </div>
        </div>

        <div className="text-right text-xs text-gray-500">
          {data.updatedAt ? `Updated ${new Date(data.updatedAt).toLocaleString()}` : ''}
        </div>
      </div>

      <div className="pt-2 pb-4 border-t">{renderContent((data as any).content)}</div>

      <div className="flex gap-3">
        {onClose && (
          <button
            className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={onClose}
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
}
