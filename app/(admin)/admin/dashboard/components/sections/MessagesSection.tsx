'use client';

import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { useRouter } from 'next/navigation';
import { Message } from '@/lib/generated/prisma';
import CreateResponseForm from '@/app/(admin)/admin/dashboard/createResponseForm';
import ConfirmModal from '@/app/(admin)/admin/dashboard/components/ui/ConfirmModal';

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
 * - Single place that performs HTTP DELETE calls for messages and responses.
 * - Defensive guards to avoid duplicate deletes (localDeletingId + localDeletedIds).
 * - Explicit callbacks:
 *     handleDeleteMessage?: (id: string | number) => void    // UI-only: parent should NOT call API
 *     handleDeleteResponse?: (id: string | number) => void   // UI-only: parent should NOT call API
 *
 * Parents must implement those two callbacks if they need to update parent state.
 *
 * Behavior change: after successfully deleting a message we now navigate to
 * /admin/dashboard?type=messages to ensure the messages view is loaded/refreshed.
 */

export default function MessagesSection({
  paginatedData,
  page,
  rowsPerPage,
  handleEdit,
  handleView,
  handleDeleteMessage, // UI-only callback for message deletes
  handleDeleteResponse, // UI-only callback for response deletes
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
  handleDeleteMessage?: (id: string | number) => void;
  handleDeleteResponse?: (id: string | number) => void;
  onRespond?: (messageId: number | string) => void;
  currentUserRole?: string;
  TableActions?: React.FC<any>;
  deleteId?: string | number | null;
  deleteLoading?: boolean;
  onToggleControls?: (hide: boolean) => void;
}) {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<'inbox' | 'sent'>('inbox');
  const [viewingItem, setViewingItem] = useState<any | null>(null); // { type: 'message'|'response', payload }
  const [loadingView, setLoadingView] = useState(false);

  const [responses, setResponses] = useState<any[] | null>(null);
  const [loadingResponses, setLoadingResponses] = useState(false);

  // Inline composer control
  const [replyingToMessageId, setReplyingToMessageId] = useState<string | number | null>(null);

  // Local delete state (component-level)
  const [localDeletingId, setLocalDeletingId] = useState<string | number | null>(null);
  const [localDeletedIds, setLocalDeletedIds] = useState<Record<string, boolean>>({});

  // Confirmation modal state for message deletes
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [pendingMessageDeleteId, setPendingMessageDeleteId] = useState<string | number | null>(
    null
  );

  // Helpers for message author
  const createdByLabel = (m: any) => {
    if (m.createdBy) {
      const parts = [m.createdBy.firstName, m.createdBy.lastName].filter(Boolean);
      if (parts.length > 0) return parts.join(' ');
      if (m.createdBy.username) return m.createdBy.username;
      if (m.createdBy.email) return m.createdBy.email;
    }
    if (m.createdByName) return m.createdByName;
    if (m.createdByUsername) return m.createdByUsername;
    if (m.name) return m.name;
    return 'System';
  };

  // Helpers for responder display
  const responderLabel = (r: any) => {
    if (r.name) return r.name;
    if (r.responderUser) {
      const parts = [r.responderUser.firstName, r.responderUser.lastName].filter(Boolean);
      if (parts.length > 0) return parts.join(' ');
    }
    if (r.responderBeneficiary) {
      const parts = [r.responderBeneficiary.firstName, r.responderBeneficiary.lastName].filter(
        Boolean
      );
      if (parts.length > 0) return parts.join(' ');
    }
    if (r.createdByName) return r.createdByName;
    if (r.createdByUsername) return r.createdByUsername;
    return 'User';
  };

  // Format date to "h:mm:ss AM/PM MON DD YYYY"
  const formatDateForDisplay = (d?: string | Date | null) => {
    if (!d) return '';
    const date = d instanceof Date ? d : new Date(d);
    if (Number.isNaN(date.getTime())) return '';
    const time = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const day = date.getDate();
    const year = date.getFullYear();
    return `${time} ${month} ${day} ${year}`;
  };

  const formatCreatedByAt = (m: any) => {
    const name = createdByLabel(m);
    const createdAt = formatDateForDisplay(m?.createdAt);
    return createdAt ? `${name}, at ${createdAt}` : name;
  };

  // Render responder name + optional Author tooltip and timestamp as JSX
  const renderResponderAt = (r: any, messageCreatorId?: string | number | null) => {
    const name = responderLabel(r);
    const responderUserId = r?.responderUser?.id ?? r?.responderUserId ?? null;
    const createdAt = formatDateForDisplay(r?.createdAt);
    const isAuthor =
      messageCreatorId && responderUserId && String(responderUserId) === String(messageCreatorId);

    return (
      <>
        <span className="font-medium">{name}</span>
        {isAuthor && (
          <span
            title="Author"
            aria-label="Author"
            className="ml-2 inline-flex items-center px-2 py-0.5 text-xs font-medium rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-white"
          >
            Author
          </span>
        )}
        {createdAt && (
          <span className="ml-2 text-xs text-slate-600 dark:text-slate-400">at {createdAt}</span>
        )}
      </>
    );
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
  const PREVIEW_CHAR_LIMIT = 300;

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
      if (isHtmlString(c)) return { type: 'html', value: c };
      return { type: 'text', value: c };
    }
    return null;
  };

  function normalizeHtmlForDark(sanitizedHtml: string) {
    if (typeof document === 'undefined') return sanitizedHtml;
    const isDark = document.documentElement.classList.contains('dark');
    if (!isDark) return sanitizedHtml;
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(sanitizedHtml, 'text/html');
      const all = Array.from(doc.body.querySelectorAll<HTMLElement>('*'));
      for (const el of all) {
        const inlineColor = el.style?.getPropertyValue('color') || el.getAttribute('color');
        if (inlineColor) {
          const s = inlineColor.trim().toLowerCase();
          if (s.includes('red') || s === '#b91c1c' || s === '#ff0000' || s.startsWith('rgb(255,')) {
            el.setAttribute('data-preserve-red', 'true');
          } else {
            el.style.removeProperty('color');
            if (el.hasAttribute('color')) el.removeAttribute('color');
          }
        }
      }
      return doc.body.innerHTML;
    } catch {
      return sanitizedHtml;
    }
  }

  const renderContent = (m: any, full = false) => {
    const candidate = getContentCandidate(m);
    if (!candidate)
      return <div className="text-sm text-slate-600 dark:text-slate-300">— No content —</div>;

    if (candidate.type === 'html') {
      const raw = String(candidate.value ?? '');
      const sanitized = DOMPurify.sanitize(raw, {
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
      const processed = normalizeHtmlForDark(sanitized);
      if (!full) {
        const textFallback = stripHtmlTags(processed).trim();
        if (!textFallback) {
          return (
            <div
              className="mt-2 text-sm rich-content"
              dangerouslySetInnerHTML={{ __html: processed }}
            />
          );
        }
        if (textFallback.length > PREVIEW_CHAR_LIMIT) {
          return (
            <div className="mt-2 text-sm rich-content">
              {textFallback.slice(0, PREVIEW_CHAR_LIMIT) + '…'}
            </div>
          );
        }
      }
      return (
        <div
          className="mt-2 text-sm rich-content"
          dangerouslySetInnerHTML={{ __html: processed }}
        />
      );
    }

    if (candidate.type === 'text') {
      const raw = String(candidate.value ?? '');
      const trimmed = raw.trim();
      if (!trimmed)
        return <div className="text-sm text-slate-600 dark:text-slate-300">— No content —</div>;
      const preview =
        !full && trimmed.length > PREVIEW_CHAR_LIMIT
          ? trimmed.slice(0, PREVIEW_CHAR_LIMIT) + '…'
          : trimmed;
      return (
        <div className="mt-2 text-sm text-slate-900 dark:text-slate-200 whitespace-pre-wrap">
          {preview}
        </div>
      );
    }

    if (candidate.type === 'json') {
      try {
        const pretty = JSON.stringify(candidate.value, null, 2);
        const preview =
          !full && pretty.length > PREVIEW_CHAR_LIMIT
            ? pretty.slice(0, PREVIEW_CHAR_LIMIT) + '…'
            : pretty;
        return (
          <pre className="mt-2 text-sm message-pre whitespace-pre-wrap overflow-auto">
            {preview}
          </pre>
        );
      } catch {
        return (
          <pre className="mt-2 text-sm message-pre whitespace-pre-wrap">
            {String(candidate.value)}
          </pre>
        );
      }
    }

    return (
      <div className="text-sm text-slate-600 dark:text-slate-300">— Unsupported content type —</div>
    );
  };

  // load responses for Sent tab
  useEffect(() => {
    let mounted = true;
    if (activeTab === 'sent' && responses === null) {
      setLoadingResponses(true);
      (async () => {
        try {
          const res = await fetch('/api/responses');
          const data = res.ok ? await res.json() : [];
          if (mounted) setResponses(Array.isArray(data) ? data : []);
        } catch {
          if (mounted) setResponses([]);
        } finally {
          if (mounted) setLoadingResponses(false);
        }
      })();
    }
    return () => {
      mounted = false;
    };
  }, [activeTab, responses]);

  // open a message inline (fetch full + responses)
  const openMessage = async (record: any) => {
    const id = record?.id ?? record;
    if (!id) return;
    setLoadingView(true);
    if (typeof onToggleControls === 'function') onToggleControls(true);
    try {
      let msgData: any = null;
      try {
        const res = await fetch(`/api/messages/${encodeURIComponent(String(id))}`);
        msgData = res.ok ? await res.json() : null;
      } catch {
        msgData = null;
      }
      const base = msgData ?? record;

      let respList: any[] = [];
      try {
        const respRes = await fetch('/api/responses');
        const respData = respRes.ok ? await respRes.json() : [];
        const parentId = base?.id
          ? typeof base.id === 'number'
            ? base.id
            : String(base.id)
          : String(id);
        if (Array.isArray(respData)) {
          respList = respData.filter(
            (r: any) =>
              (r.message && String(r.message.id) === String(parentId)) ||
              (r.messageId && String(r.messageId) === String(parentId))
          );
        }
      } catch {
        respList = [];
      }

      setViewingItem({ type: 'message', payload: { ...base, responses: respList } });
    } finally {
      setLoadingView(false);
    }
  };

  // open a response inline (fetch response + optionally its parent message)
  const openResponse = async (record: any) => {
    const id = record?.id ?? record;
    if (!id) return;
    setLoadingView(true);
    if (typeof onToggleControls === 'function') onToggleControls(true);
    try {
      let resData: any = null;
      try {
        const res = await fetch(`/api/responses/${encodeURIComponent(String(id))}`);
        resData = res.ok ? await res.json() : null;
      } catch {
        resData = null;
      }
      let parent = null;
      try {
        const mid = resData?.messageId ?? resData?.message?.id;
        if (mid) {
          const p = await fetch(`/api/messages/${encodeURIComponent(String(mid))}`);
          parent = p.ok ? await p.json() : null;
        }
      } catch {
        parent = null;
      }
      setViewingItem({ type: 'response', payload: { ...resData, parent } });
    } finally {
      setLoadingView(false);
    }
  };

  const closeView = () => {
    setViewingItem(null);
    setReplyingToMessageId(null);
    if (typeof onToggleControls === 'function') onToggleControls(false);
  };

  // When a response is created successfully:
  // - if the message is already open, append the response into that array
  // - otherwise open the parent message and show the response inline
  const handleResponseCreated = (created: any) => {
    const parentId = created?.message?.id ?? created?.messageId ?? null;
    if (!parentId) {
      setResponses((prev) => (prev ? [created, ...prev] : [created]));
      return;
    }

    // If currently viewing the parent message, append
    if (
      viewingItem &&
      viewingItem.type === 'message' &&
      String(viewingItem.payload?.id) === String(parentId)
    ) {
      viewingItem.payload.responses = viewingItem.payload.responses ?? [];
      viewingItem.payload.responses.push(created);
      setViewingItem({ ...viewingItem });
      setReplyingToMessageId(null);
      return;
    }

    // If not viewing, open the parent message and ensure the created response shows up
    (async () => {
      try {
        const res = await fetch(`/api/messages/${encodeURIComponent(String(parentId))}`);
        const msg = res.ok ? await res.json() : null;
        const respRes = await fetch('/api/responses');
        const respData = respRes.ok ? await respRes.json() : [];
        const list = Array.isArray(respData)
          ? respData.filter(
              (r: any) =>
                (r.message && String(r.message.id) === String(parentId)) ||
                (r.messageId && String(r.messageId) === String(parentId))
            )
          : [];
        const exists = list.find((r) => String(r.id) === String(created.id));
        if (!exists) list.push(created);
        setViewingItem({ type: 'message', payload: { ...msg, responses: list } });
        setActiveTab('inbox');
      } catch {
        setResponses((prev) => (prev ? [created, ...prev] : [created]));
      } finally {
        setReplyingToMessageId(null);
      }
    })();
  };

  // open composer: ensure message is open, then set replyingToMessageId
  const openComposerForMessage = async (messageId: number | string) => {
    const msg = (paginatedData ?? []).find((x: any) => String(x.id) === String(messageId));
    if (msg) {
      await openMessage(msg);
      setReplyingToMessageId(messageId);
      return;
    }
    await openMessage({ id: messageId });
    setReplyingToMessageId(messageId);
  };

  // --- Deletion helpers that call the proper API endpoint ---
  // Defensive: prevent duplicate deletes using localDeletingId + localDeletedIds

  // Prompt modal instead of native confirm
  function promptDeleteMessage(id: string | number) {
    setPendingMessageDeleteId(id);
    setConfirmDeleteOpen(true);
  }

  async function deleteMessageConfirmed(id: string | number) {
    if (localDeletedIds[String(id)]) return; // already deleted
    if (localDeletingId) return; // another delete in progress
    try {
      setLocalDeletingId(id);
      const res = await fetch(`/api/messages/${encodeURIComponent(String(id))}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || `Request failed (${res.status})`);
      }
      // mark deleted locally so duplicate attempts are ignored
      setLocalDeletedIds((s) => ({ ...s, [String(id)]: true }));

      // notify parent to update list if handler provided (UI-only)
      if (typeof handleDeleteMessage === 'function') {
        try {
          console.debug('MessagesSection: calling handleDeleteMessage', { id });
          handleDeleteMessage(id);
        } catch (e) {
          console.debug('handleDeleteMessage callback threw', e);
        }
      }
      // if currently viewing this message, close it
      if (
        viewingItem &&
        viewingItem.type === 'message' &&
        String(viewingItem.payload?.id) === String(id)
      ) {
        setViewingItem(null);
      }

      // Navigate to messages list view to ensure the dashboard shows messages
      try {
        router.replace('/admin/dashboard?type=messages');
      } catch (e) {
        // fallback: use location
        try {
          window.location.href = '/admin/dashboard?type=messages';
        } catch {
          // ignore
        }
      }
    } catch (err: any) {
      console.error('Failed to delete message:', err);
    } finally {
      setLocalDeletingId(null);
      setConfirmDeleteOpen(false);
      setPendingMessageDeleteId(null);
    }
  }

  // No confirmation prompt for response deletes
  async function deleteResponse(id: string | number) {
    if (localDeletedIds[String(id)]) return; // already deleted
    if (localDeletingId) return; // another delete in progress
    try {
      setLocalDeletingId(id);
      const res = await fetch(`/api/responses/${encodeURIComponent(String(id))}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || `Request failed (${res.status})`);
      }
      // mark deleted locally
      setLocalDeletedIds((s) => ({ ...s, [String(id)]: true }));

      // Update local UI:
      if (viewingItem && viewingItem.type === 'message') {
        const msgPayload = viewingItem.payload;
        if (Array.isArray(msgPayload.responses)) {
          const idx = msgPayload.responses.findIndex((r: any) => String(r.id) === String(id));
          if (idx !== -1) {
            msgPayload.responses.splice(idx, 1);
            setViewingItem({ ...viewingItem });
          }
        }
      }
      if (
        viewingItem &&
        viewingItem.type === 'response' &&
        String(viewingItem.payload?.id) === String(id)
      ) {
        setViewingItem(null);
      }
      if (activeTab === 'sent' && Array.isArray(responses)) {
        setResponses((prev) => (prev ? prev.filter((r) => String(r.id) !== String(id)) : prev));
      }

      // notify parent to update list if handler provided (UI-only)
      if (typeof handleDeleteResponse === 'function') {
        try {
          console.debug('MessagesSection: calling handleDeleteResponse', { id });
          handleDeleteResponse(id);
        } catch (e) {
          console.debug('handleDeleteResponse callback threw', e);
        }
      }
    } catch (err: any) {
      console.error('Failed to delete response:', err);
    } finally {
      setLocalDeletingId(null);
    }
  }

  // helper to pick the appropriate delete function based on item type
  const handleDeleteClick = (item: any, type: 'message' | 'response') => {
    const id = item?.id ?? item;
    if (type === 'message') return promptDeleteMessage(id);
    return deleteResponse(id);
  };

  // --- renderers (message/response) ---

  const renderFullMessage = (m: any) => {
    const category = m.messageCategory ?? m.category ?? 'System';
    const title = m.title ?? m.subject ?? m.messageTitle ?? m.name ?? '-';

    const createdAtDate = m.createdAt ? new Date(m.createdAt) : null;
    const updatedAtDate = m.updatedAt ? new Date(m.updatedAt) : null;
    const createdByAt = formatCreatedByAt(m);

    // showUpdated only when both dates exist and differ in time
    const showUpdated =
      createdAtDate && updatedAtDate && createdAtDate.getTime() !== updatedAtDate.getTime();

    const isEditableCategory = !['request', 'system'].includes(String(category).toLowerCase());

    return (
      <div className="w-full">
        <div className="px-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="text-sm text-slate-700 dark:text-slate-300 mt-1">
            {createdByAt}
            {showUpdated ? <> · Updated: {updatedAtDate?.toLocaleString()}</> : null}
          </div>
        </div>

        <div className="mt-4 px-2">
          <div className="rounded p-4" style={{ background: 'transparent' }}>
            <div className="mb-4">{renderContent(m, true)}</div>

            <div className="flex flex-wrap gap-2 items-center">
              <button
                className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded"
                onClick={() => closeView()}
              >
                ← Back
              </button>

              {String(category).toLowerCase() !== 'system' && m.allowResponses && (
                <button
                  className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  onClick={() => openComposerForMessage(m.id)}
                >
                  Respond
                </button>
              )}

              {isEditableCategory && (
                <button
                  className="px-3 py-2 bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-700 dark:hover:bg-yellow-600 text-yellow-800 dark:text-white rounded"
                  onClick={() => handleEdit(m)}
                >
                  Edit
                </button>
              )}

              <button
                className="px-3 py-2 bg-red-50 hover:bg-red-100 dark:bg-red-700 dark:hover:bg-red-600 text-red-800 dark:text-white rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteClick(m, 'message');
                }}
                disabled={
                  Boolean(localDeletingId && String(localDeletingId) === String(m.id)) ||
                  Boolean(localDeletedIds[String(m.id)])
                }
              >
                {localDeletingId && String(localDeletingId) === String(m.id)
                  ? 'Deleting...'
                  : localDeletedIds[String(m.id)]
                  ? 'Deleted'
                  : 'Delete'}
              </button>
            </div>

            {/* Composer shown inline when replyingToMessageId matches this message */}
            {String(replyingToMessageId) === String(m.id) && (
              <div className="mt-4">
                <CreateResponseForm
                  messageId={m.id}
                  onCancel={() => setReplyingToMessageId(null)}
                  onSuccess={(created) => handleResponseCreated(created)}
                />
              </div>
            )}

            {/* Responses list shown inline */}
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
                          <div className="text-sm">{renderResponderAt(r, m?.createdById)}</div>
                        </div>
                        <div className="text-right flex items-center gap-2">
                          <button
                            className="px-2 py-1 text-xs bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-700 dark:hover:bg-yellow-600 text-yellow-800 dark:text-white rounded"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEdit(r);
                            }}
                          >
                            Edit
                          </button>

                          <button
                            className="px-2 py-1 text-xs bg-red-50 hover:bg-red-100 dark:bg-red-700 dark:hover:bg-red-600 text-red-800 dark:text-white rounded"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteClick(r, 'response');
                            }}
                            disabled={
                              Boolean(
                                localDeletingId && String(localDeletingId) === String(r.id)
                              ) || Boolean(localDeletedIds[String(r.id)])
                            }
                          >
                            {localDeletingId && String(localDeletingId) === String(r.id)
                              ? 'Deleting...'
                              : localDeletedIds[String(r.id)]
                              ? 'Deleted'
                              : 'Delete'}
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

  const renderFullResponse = (r: any) => {
    const title = r.subject ?? r.title ?? `Response to ${r.messageId ?? ''}`;
    const parentCreatorId = r?.parent?.createdById ?? r?.message?.createdById ?? null;
    return (
      <div className="w-full">
        <div className="px-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="text-sm text-slate-700 dark:text-slate-300 mt-1">
            {renderResponderAt(r, parentCreatorId)}
          </div>
        </div>

        <div className="mt-4 px-2">
          <div className="rounded p-4" style={{ background: 'transparent' }}>
            <div className="mb-4">{renderContent(r, true)}</div>

            <div className="flex flex-wrap gap-2 items-center">
              <button
                className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded"
                onClick={() => closeView()}
              >
                ← Back
              </button>

              <button
                className="px-3 py-2 bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-700 dark:hover:bg-yellow-600 text-yellow-800 dark:text-white rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(r);
                }}
              >
                Edit
              </button>

              <button
                className="px-3 py-2 bg-red-50 hover:bg-red-100 dark:bg-red-700 dark:hover:bg-red-600 text-red-800 dark:text-white rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteClick(r, 'response');
                }}
                disabled={
                  Boolean(localDeletingId && String(localDeletingId) === String(r.id)) ||
                  Boolean(localDeletedIds[String(r.id)])
                }
              >
                {localDeletingId && String(localDeletingId) === String(r.id)
                  ? 'Deleting...'
                  : localDeletedIds[String(r.id)]
                  ? 'Deleted'
                  : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // container styles + injected CSS
  const outerClass =
    'w-full max-w-4xl mx-auto mt-6 p-6 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded-xl shadow relative border border-gray-200 dark:border-slate-700';
  const injectedCss = `
    .rich-content { color: inherit; }
    .rich-content img { max-width:100%; height:auto; border-radius:6px; display:block; margin:8px 0; }
    .rich-content code { background: rgba(0,0,0,0.04); padding:2px 6px; border-radius:4px; color: inherit; }
    .message-pre { background: #f8fafc; color: #0f172a; padding:12px; border-radius:6px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', monospace; overflow:auto; }
    .dark .rich-content, .dark .rich-content * { color: #e6edf3 !important; background: transparent !important; }
    .dark .message-pre { background: #0f172a !important; color: #e6edf3 !important; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02); }
    .rich-content [data-preserve-red], .rich-content [data-preserve-red] * { color: #b91c1c !important; }
    .dark .rich-content [data-preserve-red], .dark .rich-content [data-preserve-red] * { color: #b91c1c !important; }

    .tabs-top { position: absolute; left: 24px; top: 0; transform: translateY(calc(-100% - 1px)); display:flex; gap:0; z-index:20; }
    .tab-pill { padding:10px 16px; height:40px; display:inline-flex; align-items:center; justify-content:center; border:1px solid transparent; border-bottom: none; border-radius:0; cursor:pointer; background:transparent; color:inherit; font-weight:600; box-sizing: border-box; }
    .tab-pill + .tab-pill { margin-left: -1px; }
    .tab-active { background: #eef2ff; color: #111; border-color: rgba(15,23,42,0.06); box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
    .dark .tab-active { background: #0b1220; color: #fff; border-color: rgba(255,255,255,0.04); box-shadow: 0 1px 2px rgba(0,0,0,0.3); }

    .messages-list { display:block; margin-top: 8px; }
    .messages-list .message-card { margin-bottom: 12px; }
    .messages-list .message-card:last-child { margin-bottom: 0; }
    .container-top-border { border-top-width: 1px; border-top-style: solid; border-top-color: inherit; padding-top: 12px; }
  `;

  return (
    <div className={outerClass}>
      <style>{injectedCss}</style>

      {/* Confirm modal for message delete */}
      <ConfirmModal
        open={confirmDeleteOpen}
        title="Delete message?"
        description="Are you sure you want to delete this message? This will also remove all responses to it. This action cannot be undone."
        confirmLabel="Delete message"
        cancelLabel="Cancel"
        onConfirm={() => {
          if (pendingMessageDeleteId != null) deleteMessageConfirmed(pendingMessageDeleteId);
        }}
        onCancel={() => {
          setConfirmDeleteOpen(false);
          setPendingMessageDeleteId(null);
        }}
      />

      <div className="tabs-top" role="tablist" aria-label="Messages tabs">
        <div
          role="tab"
          aria-selected={activeTab === 'inbox'}
          className={`tab-pill ${activeTab === 'inbox' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('inbox')}
        >
          Inbox {Array.isArray(paginatedData) ? `(${paginatedData.length})` : ''}
        </div>
        <div
          role="tab"
          aria-selected={activeTab === 'sent'}
          className={`tab-pill ${activeTab === 'sent' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('sent')}
        >
          Sent{' '}
          {loadingResponses ? '(...)' : Array.isArray(responses) ? `(${responses.length})` : ''}
        </div>
      </div>

      <div className="container-top-border">
        {viewingItem ? (
          <div>
            {viewingItem.type === 'message' && renderFullMessage(viewingItem.payload)}
            {viewingItem.type === 'response' && renderFullResponse(viewingItem.payload)}
          </div>
        ) : (
          <>
            {activeTab === 'inbox' && (
              <>
                {(!Array.isArray(paginatedData) || paginatedData.length === 0) && (
                  <div className="text-center py-8 text-slate-600 dark:text-slate-300">
                    No messages found.
                  </div>
                )}

                <div className="messages-list">
                  {Array.isArray(paginatedData) &&
                    paginatedData.map((m: any) => {
                      const createdAt = m.createdAt ? new Date(m.createdAt) : null;
                      const updatedAt = m.updatedAt ? new Date(m.updatedAt) : null;
                      const showUpdated =
                        createdAt && updatedAt && createdAt.getTime() !== updatedAt.getTime();
                      const category = (m.messageCategory ?? m.category ?? 'System') as string;
                      const title = m.title ?? m.subject ?? m.messageTitle ?? m.name ?? '-';
                      const isSystem = String(category ?? '').toLowerCase() === 'system';
                      const createdByAt = formatCreatedByAt(m);
                      const isEditableCategory = !['request', 'system'].includes(
                        String(category).toLowerCase()
                      );

                      return (
                        <div key={m.id} className="message-card p-4 border rounded-md">
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
                                    <div className="font-medium truncate text-ellipsis">
                                      {title}
                                    </div>
                                    <div className="text-xs text-slate-600 dark:text-slate-400">
                                      {createdByAt}
                                      {showUpdated && (
                                        <>
                                          {' '}
                                          • Updated at:{' '}
                                          {updatedAt ? updatedAt.toLocaleString() : '-'}
                                        </>
                                      )}
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
                              >
                                View
                              </button>

                              {!isSystem && m.allowResponses && (
                                <button
                                  type="button"
                                  className="px-3 py-1 rounded text-sm bg-green-600 text-white hover:bg-green-700"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openComposerForMessage(m.id);
                                  }}
                                >
                                  Respond
                                </button>
                              )}

                              {isEditableCategory && (
                                <button
                                  type="button"
                                  className="px-3 py-1 rounded text-sm bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-700 dark:hover:bg-yellow-600 text-yellow-800 dark:text-white"
                                  onClick={() => handleEdit(m)}
                                >
                                  Edit
                                </button>
                              )}

                              <button
                                type="button"
                                className="px-3 py-1 rounded text-sm bg-red-50 hover:bg-red-100 dark:bg-red-700 dark:hover:bg-red-600 text-red-800 dark:text-white"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteClick(m, 'message');
                                }}
                                disabled={
                                  Boolean(
                                    localDeletingId && String(localDeletingId) === String(m.id)
                                  ) || Boolean(localDeletedIds[String(m.id)])
                                }
                              >
                                {localDeletingId && String(localDeletingId) === String(m.id)
                                  ? 'Deleting...'
                                  : localDeletedIds[String(m.id)]
                                  ? 'Deleted'
                                  : 'Delete'}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            )}

            {activeTab === 'sent' && (
              <>
                {loadingResponses && (
                  <div className="text-center py-8 text-slate-600 dark:text-slate-300">
                    Loading responses...
                  </div>
                )}

                {!loadingResponses && (!Array.isArray(responses) || responses.length === 0) && (
                  <div className="text-center py-8 text-slate-600 dark:text-slate-300">
                    No responses found.
                  </div>
                )}

                <div className="messages-list">
                  {!loadingResponses &&
                    Array.isArray(responses) &&
                    responses.map((r: any) => {
                      const responderAt = (() => {
                        const name = responderLabel(r);
                        const createdAt = formatDateForDisplay(r?.createdAt);
                        return createdAt ? `${name}, at ${createdAt}` : name;
                      })();
                      const title = r.subject ?? r.title ?? `Response to ${r.messageId ?? ''}`;
                      return (
                        <div key={r.id} className="message-card p-4 border rounded-md">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div
                              className="flex-1 min-w-0 cursor-pointer"
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') openResponse(r);
                              }}
                              onClick={() => openResponse(r)}
                            >
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm font-semibold">
                                    Sent
                                  </div>

                                  <div className="flex flex-col min-w-0">
                                    <div className="font-medium truncate text-ellipsis">
                                      {title}
                                    </div>
                                    <div className="text-xs text-slate-600 dark:text-slate-400">
                                      {responderAt}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => openResponse(r)}
                                className="px-3 py-1 rounded text-sm bg-blue-50 hover:bg-blue-100 dark:bg-blue-700 dark:hover:bg-blue-600 text-blue-800 dark:text-white"
                              >
                                View
                              </button>

                              <button
                                type="button"
                                className="px-3 py-1 rounded text-sm bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-700 dark:hover:bg-yellow-600 text-yellow-800 dark:text-white"
                                onClick={() => handleEdit(r)}
                              >
                                Edit
                              </button>

                              <button
                                type="button"
                                className="px-3 py-1 rounded text-sm bg-red-50 hover:bg-red-100 dark:bg-red-700 dark:hover:bg-red-600 text-red-800 dark:text-white"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteClick(r, 'response');
                                }}
                                disabled={
                                  Boolean(
                                    localDeletingId && String(localDeletingId) === String(r.id)
                                  ) || Boolean(localDeletedIds[String(r.id)])
                                }
                              >
                                {localDeletingId && String(localDeletingId) === String(r.id)
                                  ? 'Deleting...'
                                  : localDeletedIds[String(r.id)]
                                  ? 'Deleted'
                                  : 'Delete'}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            )}

            <div>
              {TableActions ? (
                <TableActions
                  data={activeTab === 'inbox' ? paginatedData : responses ?? []}
                  columns={[]}
                  tableRef={React.createRef()}
                />
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
