'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { Message, Response } from '@/lib/generated/prisma';
import '@/assets/styles/tiptap-editor.css';

// TipTap JSON viewer for rich text message
const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

type MessageWithRelations = Message & {
  beneficiary?: {
    id: string;
    firstName: string;
    lastName: string;
    createdById?: string | null;
  } | null;
  createdBy?: {
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
  } | null;
  // include createdById on the message when available (some APIs return it)
  createdById?: string | null;
  responses?: Array<
    Response & {
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
        createdById?: string | null;
      } | null;
      message?: { id: number; title?: string | null };
      responderRole?: 'USER' | 'BENEFICIARY' | 'AUTHOR' | 'SYSTEM';
    }
  >;
};

function AuthorBadge() {
  return (
    <span className="ml-2 inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
      Author
    </span>
  );
}

export default function MessageView({
  data,
  onClose,
  onRespond,
}: {
  data: MessageWithRelations;
  onClose?: () => void;
  onRespond?: (messageId: number | string) => void;
}) {
  const { data: session } = useSession();

  if (!data) return null;

  const content = data.content;

  const renderContent = (c: unknown) => {
    if (c === undefined || c === null) return <span>-</span>;
    if (typeof c === 'object') {
      return (
        <div className="border rounded bg-white dark:bg-gray-900 mt-2">
          <TiptapJsonViewer content={c} className="tiptap tiptap-view-only" />
        </div>
      );
    }
    return <span className="whitespace-pre-line">{String(c)}</span>;
  };

  const ownerLabel = () => {
    if (data.name && `${data.name}`.trim().length > 0) return data.name;
    if (data.beneficiary) return `${data.beneficiary.firstName} ${data.beneficiary.lastName}`;
    if (data.createdBy)
      return `${data.createdBy.firstName ?? ''} ${data.createdBy.lastName ?? ''}`.trim();
    return 'System';
  };

  const responderLabelText = (r: any) => {
    if (!r) return 'System';
    if (r.responderUser) {
      const u = r.responderUser;
      return `${u.firstName} ${u.lastName}${u.email ? ` (${u.email})` : ''}`;
    }
    if (r.responderBeneficiary) {
      const b = r.responderBeneficiary;
      return `${b.firstName} ${b.lastName}`;
    }
    // fallback to role
    if (r.responderRole === 'AUTHOR') return 'Author';
    return 'System';
  };

  // Helper: strict identity-based author check
  const isResponseAuthor = (msg: MessageWithRelations, r: any) => {
    // 1) server-declared AUTHOR is authoritative
    if (r?.responderRole === 'AUTHOR') return true;

    // message-level keys
    const messageAuthorUserId =
      (msg.createdBy && (msg.createdBy as any).id) ?? (msg as any).createdById ?? undefined;
    const messageBeneficiaryId = msg.beneficiary?.id ?? (msg as any).beneficiaryId ?? undefined;

    // responder-level keys
    const responderUserId = r?.responderUser?.id ?? undefined;
    const responderBeneficiaryId = r?.responderBeneficiary?.id ?? undefined;
    const responderBeneficiaryOwnerId = r?.responderBeneficiary?.createdById ?? undefined;

    // 2) If message was authored by a user account and responder is that same user
    if (
      messageAuthorUserId &&
      responderUserId &&
      String(messageAuthorUserId) === String(responderUserId)
    )
      return true;

    // 3) If message is tied to a beneficiary (author is that beneficiary) and responder is that beneficiary
    if (
      messageBeneficiaryId &&
      responderBeneficiaryId &&
      String(messageBeneficiaryId) === String(responderBeneficiaryId)
    )
      return true;

    // 4) If message was authored by a user account, and responder is a beneficiary whose createdById matches that user
    //    (i.e., the responder beneficiary account is owned by the same user who authored the message)
    if (
      messageAuthorUserId &&
      responderBeneficiaryOwnerId &&
      String(messageAuthorUserId) === String(responderBeneficiaryOwnerId)
    )
      return true;

    // No strict identity match => not author
    return false;
  };

  // split responses by responder being the author of the message or not
  const authorResponses = Array.isArray(data.responses)
    ? data.responses.filter((r) => isResponseAuthor(data, r))
    : [];
  const otherResponses = Array.isArray(data.responses)
    ? data.responses.filter((r) => !isResponseAuthor(data, r))
    : [];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 p-6 bg-background rounded-xl shadow">
      <h2 className="font-semibold text-xl mb-4">View Message</h2>

      <div className="space-y-3">
        {/* First line: owner name, category, createdAt, updatedAt (inline) */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
          <div className="font-medium">{ownerLabel()}</div>
          <div className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-xs">
            {(data as any).messageCategory ?? '-'}
          </div>
          <div className="text-xs text-gray-500">
            Created: {data.createdAt ? new Date(data.createdAt).toLocaleString() : '-'}
          </div>
          <div className="text-xs text-gray-500">
            Updated: {data.updatedAt ? new Date(data.updatedAt).toLocaleString() : '-'}
          </div>
        </div>

        {/* Second line: message content */}
        <div className="mt-2">
          <div className="font-medium mb-1">Content</div>
          <div className="ml-0">{renderContent(content)}</div>
        </div>

        {/* Author response (distinct) */}
        {authorResponses.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3">Author's response</h3>
            <div className="space-y-4">
              {authorResponses.map((r) => {
                const isAuthor = isResponseAuthor(data, r);
                return (
                  <div
                    key={r.id}
                    className="p-3 border-l-4 border-pink-600 bg-pink-50 dark:bg-pink-900 rounded"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm font-medium">{responderLabelText(r)}</div>
                        {isAuthor && <AuthorBadge />}
                      </div>
                      <div className="text-xs text-gray-500">
                        {r.createdAt ? new Date(r.createdAt).toLocaleString() : ''}
                      </div>
                    </div>
                    <div className="mt-2">{renderContent((r as any).content)}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Other responses */}
        {otherResponses.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3">Responses</h3>
            <div className="space-y-4">
              {otherResponses.map((r) => {
                const isAuthor = isResponseAuthor(data, r);
                return (
                  <div key={r.id} className="p-3 border rounded bg-white dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm font-medium">{responderLabelText(r)}</div>
                        {isAuthor && <AuthorBadge />}
                      </div>
                      <div className="text-xs text-gray-500">
                        {r.createdAt ? new Date(r.createdAt).toLocaleString() : ''}
                      </div>
                    </div>
                    <div className="mt-2">{renderContent((r as any).content)}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-3 mt-4">
        {onClose && (
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={onClose}
          >
            Close
          </button>
        )}

        {onRespond && data.allowResponses && (
          <button
            type="button"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => onRespond(data.id)}
          >
            Respond
          </button>
        )}
      </div>
    </div>
  );
}
