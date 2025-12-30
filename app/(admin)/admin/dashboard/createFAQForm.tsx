'use client';

import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { Message } from '@/lib/generated/prisma';

type MessageWithRelations = Message & {
  beneficiary?: {
    id: string;
    firstName: string;
    lastName: string;
  } | null;
  createdBy?: {
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    username?: string | null;
    email?: string | null;
  } | null;
};

/**
 * MessagesSection
 *
 * - Renders a list of messages.
 * - When a message is "viewed" it fetches the full message + responses and renders an inline full view
 *   inside this component (same pattern as EventsSection).
 * - Uses the same background / foreground color scheme and container styles as CreateFAQForm:
 *     bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200
 *   with rounded-xl, shadow and p-6.
 *
 * Notes:
 * - This component renders inline detail view and DOES NOT trigger parent navigation to Responses.
 */

export default function MessagesSection({
  paginatedData,
  page,
  rowsPerPage,
  handleEdit,
  handleView, // optional analytics/navigation callback — will NOT be used to trigger parent navigation
  handleDelete,
  onRespond,
  currentUserRole,
  TableActions,
  deleteId,
  deleteLoading,
  onToggleControls,
}: {
  paginatedData: MessageWithRelations[] | any[];
  page: number;
  rowsPerPage: number;
  handleEdit: (record: any) => void;
  handleView?: (record: any, source?: 'messages' | 'responses' | string) => void;
  handleDelete: (id: string | number) => void;
  onRespond?: (messageId: number | string) => void;
  currentUserRole?: string;
  TableActions?: React.FC<any>;
  deleteId?: string | number | null;
  deleteLoading?: boolean;
  onToggleControls?: (hide: boolean) => void;
}) {
  const [viewingMessage, setViewingMessage] = useState<any | null>(null);
  const [loadingView, setLoadingView] = useState(false);

  const ownerLabel = (m: MessageWithRelations) => {
    if (m.name && `${m.name}`.trim().length > 0) return m.name;
    if (m.beneficiary) return `${m.beneficiary.firstName} ${m.beneficiary.lastName}`;
    return 'System';
  };

  const createdByLabel = (m: MessageWithRelations) => {
    if (m.createdBy) {
      const parts = [m.createdBy.firstName, m.createdBy.lastName].filter(Boolean);
      if (parts.length > 0) return parts.join(' ');
      if (m.createdBy.username) return m.createdBy.username;
      if (m.createdBy.email) return m.createdBy.email;
    }
    if (m.createdByName) return m.createdByName;
    if (m.createdByUsername) return m.createdByUsername;
    return 'System';
  };

  const isHtmlString = (s: string) => /<\/?[a-z][\s\S]*>/i.test(s);

  const tryParseJson = (s: string) => {
    try {
      return JSON.parse(s);
    } catch {
      return null;
    }
  };

  const stripHtmlTags = (html: string) => {
    try {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
    } catch {
      return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
  };

  const getContentCandidate = (m: any) => {
    if (!m) return null;

    const candidates = ['content', 'body', 'messageContent', 'text', 'html', 'message'];
    let c: any = null;
    for (const key of candidates) {
      if (Object.prototype.hasOwnProperty.call(m, key) && m[key] != null) {
        c = m[key];
        break;
      }
    }

    if (!c && m.content && typeof m.content === 'object') c = m.content;

    if (!c) return null;

    if (typeof c === 'object') {
      if (c.html) return { type: 'html', value: String(c.html) };
      if (c.text) return { type: 'text', value: String(c.text) };
      return { type: 'json', value: c };
    }

    if (typeof c === 'string') {
      const maybeJson = tryParseJson(c);
      if (maybeJson) {
        if (maybeJson.html) return { type: 'html', value: String(maybeJson.html) };
        if (maybeJson.text) return { type: 'text', value: String(maybeJson.text) };
        return { type: 'json', value: maybeJson };
      }
      if (isHtmlString(c)) {
        return { type: 'html', value: c };
      }
      return { type: 'text', value: c };
    }

    return null;
  };

  const PREVIEW_CHAR_LIMIT = 300;

  const renderContent = (m: any, full = false) => {
    const candidate = getContentCandidate(m);
    if (!candidate) {
      return <div className="text-sm text-gray-500 dark:text-gray-400">— No content —</div>;
    }

    if (candidate.type === 'html') {
      const raw = String(candidate.value ?? '');
      const clean = DOMPurify.sanitize(raw, {
        ALLOWED_TAGS: [
          'a',
          'b',
          'i',
          'strong',
          'em',
          'p',
          'br',
          'ul',
          'ol',
          'li',
          'span',
          'div',
          'pre',
          'code',
          'blockquote',
          'img',
          'h1',
          'h2',
          'h3',
          'h4',
        ],
        ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'style'],
      });

      if (!full) {
        const textFallback = stripHtmlTags(clean).trim();
        if (textFallback.length === 0) {
          return (
            <div
              className="mt-2 text-sm prose max-w-none text-slate-900 dark:text-slate-200"
              dangerouslySetInnerHTML={{ __html: clean }}
            />
          );
        }
        if (textFallback.length > PREVIEW_CHAR_LIMIT) {
          const truncatedText = textFallback.slice(0, PREVIEW_CHAR_LIMIT) + '…';
          return (
            <div className="mt-2 text-sm text-slate-900 dark:text-slate-200">
              <div className="mb-1" aria-hidden>
                {truncatedText}
              </div>
            </div>
          );
        }
      }

      return (
        <div
          className="mt-2 text-sm prose max-w-none text-slate-900 dark:text-slate-200"
          dangerouslySetInnerHTML={{ __html: clean }}
        />
      );
    }

    if (candidate.type === 'text') {
      const raw = String(candidate.value ?? '');
      const trimmed = raw.trim();
      if (!trimmed)
        return <div className="text-sm text-gray-500 dark:text-gray-400">— No content —</div>;
      if (!full) {
        const preview =
          trimmed.length > PREVIEW_CHAR_LIMIT
            ? trimmed.slice(0, PREVIEW_CHAR_LIMIT) + '…'
            : trimmed;
        return (
          <div className="mt-2 text-sm text-slate-900 dark:text-slate-200 whitespace-pre-wrap">
            {preview}
          </div>
        );
      }
      return (
        <div className="mt-2 text-sm text-slate-900 dark:text-slate-200 whitespace-pre-wrap">
          {trimmed}
        </div>
      );
    }

    if (candidate.type === 'json') {
      try {
        const pretty = JSON.stringify(candidate.value, null, 2);
        if (!full) {
          const preview =
            pretty.length > PREVIEW_CHAR_LIMIT ? pretty.slice(0, PREVIEW_CHAR_LIMIT) + '…' : pretty;
          return (
            <pre className="mt-2 text-sm text-slate-900 dark:text-slate-200 whitespace-pre-wrap max-h-48 overflow-auto">
              {preview}
            </pre>
          );
        }
        return (
          <pre className="mt-2 text-sm text-slate-900 dark:text-slate-200 whitespace-pre-wrap overflow-auto">
            {pretty}
          </pre>
        );
      } catch {
        return (
          <pre className="mt-2 text-sm text-slate-900 dark:text-slate-200 whitespace-pre-wrap">
            {String(candidate.value)}
          </pre>
        );
      }
    }

    return (
      <div className="text-sm text-gray-500 dark:text-gray-400">— Unsupported content type —</div>
    );
  };

  // When a message is selected for view, fetch full message and responses and render inside this component
  const openMessage = async (record: any) => {
    const id = record?.id ?? record;
    if (!id) return;
    setLoadingView(true);
    if (typeof onToggleControls === 'function') onToggleControls(true);
    try {
      let msgData: any = null;
      try {
        const res = await fetch(`/api/messages/${id}`);
        msgData = res.ok ? await res.json() : null;
      } catch {
        msgData = null;
      }
      const base = msgData ?? record;

      let responses: any[] = [];
      try {
        const respRes = await fetch('/api/responses');
        const respData = respRes.ok ? await respRes.json() : [];
        const parentId = base?.id
          ? typeof base.id === 'number'
            ? base.id
            : Number(base.id)
          : Number(id);
        if (Array.isArray(respData)) {
          responses = respData.filter(
            (r: any) =>
              (r.message && (r.message.id === parentId || Number(r.message.id) === parentId)) ||
              (r.messageId && Number(r.messageId) === parentId)
          );
        }
      } catch {
        responses = [];
      }

      // IMPORTANT: render inline (don't call parent handleView to avoid switching sections)
      setViewingMessage({ ...base, responses: responses ?? [] });
    } finally {
      setLoadingView(false);
    }
  };

  const closeMessage = () => {
    setViewingMessage(null);
    if (typeof onToggleControls === 'function') onToggleControls(false);
  };

  // Full message renderer (inline)
  const renderFullMessage = (m: any) => {
    const category = m.messageCategory ?? m.category ?? 'System';
    const title = m.title ?? m.subject ?? m.messageTitle ?? m.name ?? '-';
    const createdAt = m.createdAt ? new Date(m.createdAt).toLocaleString() : '-';
    const updatedAt = m.updatedAt ? new Date(m.updatedAt).toLocaleString() : null;
    const showUpdated = updatedAt && updatedAt !== createdAt;
    const createdBy =
      String(category ?? '').toLowerCase() === 'system' ? 'System' : createdByLabel(m);

    return (
      <div className="w-full">
        <div className="px-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="text-sm text-slate-700 dark:text-slate-300 mt-1">
            Category: <strong>{category}</strong> · Created: {createdAt}
            {showUpdated ? <> · Updated: {updatedAt}</> : null} · Created by: {createdBy}
          </div>
        </div>

        <div className="mt-4 px-2">
          <div className="rounded p-4" style={{ background: 'transparent' }}>
            {/* message content */}
            <div className="mb-4">{renderContent(m, true)}</div>

            {/* actions */}
            <div className="flex flex-wrap gap-2 items-center">
              <button
                className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded"
                onClick={() => closeMessage()}
              >
                ← Back
              </button>

              {/* Respond only for non-system and when allowResponses */}
              {String(category).toLowerCase() !== 'system' && onRespond && m.allowResponses && (
                <button
                  className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  onClick={() => {
                    onRespond(m.id);
                  }}
                >
                  Respond
                </button>
              )}

              <button
                className="px-3 py-2 bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-700 dark:hover:bg-yellow-600 text-yellow-800 dark:text-white rounded"
                onClick={() => handleEdit(m)}
              >
                Edit
              </button>

              <button
                className="px-3 py-2 bg-red-50 hover:bg-red-100 dark:bg-red-700 dark:hover:bg-red-600 text-red-800 dark:text-white rounded"
                onClick={() => handleDelete(m.id)}
                disabled={Boolean(deleteLoading && deleteId === m.id)}
              >
                {deleteLoading && deleteId === m.id ? 'Deleting...' : 'Delete'}
              </button>
            </div>

            {/* Responses */}
            <div className="mt-6">
              <h3 className="font-medium">
                Responses ({Array.isArray(m.responses) ? m.responses.length : 0})
              </h3>
              <div className="space-y-3 mt-3">
                {Array.isArray(m.responses) && m.responses.length > 0 ? (
                  m.responses.map((r: any) => (
                    <div
                      key={r.id}
                      className="p-3 rounded border"
                      style={{ background: 'rgba(0,0,0,0.03)' }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm font-medium">
                            {r.name ?? r.createdByName ?? 'User'}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            {r.createdAt ? new Date(r.createdAt).toLocaleString() : '-'}
                          </div>
                        </div>
                        <div className="text-right">
                          <button
                            className="px-2 py-1 text-xs bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-700 dark:hover:bg-yellow-600 text-yellow-800 dark:text-white rounded"
                            onClick={() => handleEdit(r)}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 text-sm">{renderContent(r, true)}</div>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    No responses yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Outer container uses same colors/styles as CreateFAQForm
  const outerClass =
    'w-full max-w-4xl mx-auto mt-4 space-y-4 p-6 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded-xl shadow';

  return (
    <div className={outerClass}>
      {/* When viewingMessage is set, render the full message view (inline). */}
      {viewingMessage ? (
        <div>{renderFullMessage(viewingMessage)}</div>
      ) : (
        <>
          {(!Array.isArray(paginatedData) || paginatedData.length === 0) && (
            <div className="text-center py-8 text-slate-600 dark:text-slate-300">
              No messages found.
            </div>
          )}

          {Array.isArray(paginatedData) &&
            paginatedData.map((m: any) => {
              const createdAt = m.createdAt ? new Date(m.createdAt) : null;
              const updatedAt = m.updatedAt ? new Date(m.updatedAt) : null;
              const showUpdated =
                createdAt && updatedAt && createdAt.getTime() !== updatedAt.getTime();

              const category = (m.messageCategory ?? m.category ?? 'System') as string;
              const title = m.title ?? m.subject ?? m.messageTitle ?? m.name ?? '-';
              const isSystem = String(category ?? '').toLowerCase() === 'system';
              const createdBy = isSystem ? 'System' : createdByLabel(m);

              return (
                <div
                  key={m.id}
                  className="p-4 border rounded-md"
                  // keep background transparent to show outer container color
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div
                      className="flex-1 min-w-0 cursor-pointer"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') openMessage(m);
                      }}
                      onClick={() => openMessage(m)}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm font-semibold">
                            {category}
                          </div>

                          <div className="flex flex-col min-w-0">
                            <div className="font-medium truncate text-ellipsis">{title}</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">
                              Created at: {createdAt ? createdAt.toLocaleString() : '-'}
                              {showUpdated && (
                                <> • Updated at: {updatedAt ? updatedAt.toLocaleString() : '-'}</>
                              )}
                            </div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">
                              Created by: {createdBy}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => openMessage(m)}
                        className="px-3 py-1 rounded text-sm bg-blue-50 hover:bg-blue-100 dark:bg-blue-700 dark:hover:bg-blue-600 text-blue-800 dark:text-white"
                        aria-expanded={false}
                        aria-controls={`message-body-${m.id}`}
                      >
                        View
                      </button>

                      {/* Respond button only for non-system messages and when allowResponses is true */}
                      {!isSystem && onRespond && m.allowResponses && (
                        <button
                          type="button"
                          className="px-3 py-1 rounded text-sm bg-green-600 text-white hover:bg-green-700"
                          onClick={() => onRespond(m.id)}
                        >
                          Respond
                        </button>
                      )}

                      <button
                        type="button"
                        className="px-3 py-1 rounded text-sm bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-700 dark:hover:bg-yellow-600 text-yellow-800 dark:text-white"
                        onClick={() => handleEdit(m)}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="px-3 py-1 rounded text-sm bg-red-50 hover:bg-red-100 dark:bg-red-700 dark:hover:bg-red-600 text-red-800 dark:text-white"
                        onClick={() => handleDelete(m.id)}
                        disabled={Boolean(deleteLoading && deleteId === m.id)}
                      >
                        {deleteLoading && deleteId === m.id ? 'Deleting...' : 'Delete'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* TableActions optional */}
          <div>
            {TableActions ? (
              <TableActions data={paginatedData} columns={[]} tableRef={React.createRef()} />
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
