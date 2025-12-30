'use client';

import React, { useEffect, useState } from 'react';
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
 * - Tabbed interface (Inbox / Sent) where the bottom edge of the tabs aligns exactly
 *   with the top border of the messages container (tabs visually sit on top of the container).
 * - Tabs are square (no rounded corners) and the active tab receives a background color.
 * - Provides spacing between individual message cards.
 * - Inline viewing/composing for messages and responses (no navigation to separate section).
 * - Sanitized HTML + dark-mode normalization (preserve red).
 *
 * Adjustments made:
 * - tabs are translated upward by calc(-100% - 1px) to ensure their bottom edge sits flush
 *   with the container top border (this moves them slightly up to compensate for borders).
 * - message list is rendered inside an element with class `.messages-list` and each
 *   individual card has class `message-card` with margin to create padding between cards.
 */

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
  const [activeTab, setActiveTab] = useState<'inbox' | 'sent'>('inbox');
  const [viewingItem, setViewingItem] = useState<any | null>(null); // { type: 'message'|'response', payload }
  const [loadingView, setLoadingView] = useState(false);

  const [responses, setResponses] = useState<any[] | null>(null);
  const [loadingResponses, setLoadingResponses] = useState(false);

  // Reply composer state (inline)
  const [replyingToMessageId, setReplyingToMessageId] = useState<string | number | null>(null);
  const [replyContent, setReplyContent] = useState<string>('');
  const [sendingReply, setSendingReply] = useState(false);

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
      if (isHtmlString(c)) return { type: 'html', value: c };
      return { type: 'text', value: c };
    }
    return null;
  };

  const PREVIEW_CHAR_LIMIT = 300;

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
        const res = await fetch(`/api/messages/${id}`);
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
            : Number(base.id)
          : Number(id);
        if (Array.isArray(respData)) {
          respList = respData.filter(
            (r: any) =>
              (r.message && (r.message.id === parentId || Number(r.message.id) === parentId)) ||
              (r.messageId && Number(r.messageId) === parentId)
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
        const res = await fetch(`/api/responses/${id}`);
        resData = res.ok ? await res.json() : null;
      } catch {
        resData = null;
      }
      let parent = null;
      try {
        const mid = resData?.messageId ?? resData?.message?.id;
        if (mid) {
          const p = await fetch(`/api/messages/${mid}`);
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
    setReplyContent('');
    if (typeof onToggleControls === 'function') onToggleControls(false);
  };

  const openReplyComposer = (messageId: string | number) => {
    setReplyingToMessageId(messageId);
    setReplyContent('');
    const msg = (paginatedData ?? []).find((x: any) => String(x.id) === String(messageId));
    if (msg) openMessage(msg);
  };

  const sendReply = async () => {
    if (!replyingToMessageId || !replyContent.trim()) {
      alert('Please write a message before sending.');
      return;
    }
    setSendingReply(true);
    try {
      const payload = {
        messageId: replyingToMessageId,
        text: replyContent,
        content: replyContent,
      };
      const res = await fetch('/api/responses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.error ?? `Failed to send (${res.status})`);
      }
      const created = await res.json();
      if (
        viewingItem &&
        viewingItem.type === 'message' &&
        String(viewingItem.payload?.id) === String(replyingToMessageId)
      ) {
        viewingItem.payload.responses = viewingItem.payload.responses ?? [];
        viewingItem.payload.responses.unshift(created);
        setViewingItem({ ...viewingItem });
      }
      setResponses((prev) => (prev ? [created, ...prev] : [created]));
      setReplyingToMessageId(null);
      setReplyContent('');
    } catch (e: any) {
      console.error('sendReply error', e);
      alert('Failed to send reply: ' + (e?.message ?? e));
    } finally {
      setSendingReply(false);
    }
  };

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
                  onClick={() => openReplyComposer(m.id)}
                >
                  Reply
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

            {String(replyingToMessageId) === String(m.id) && (
              <div className="mt-4">
                <textarea
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  rows={4}
                  placeholder="Write your response..."
                  className="w-full border border-input rounded p-2 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200"
                />
                <div className="mt-2 flex gap-2">
                  <button
                    className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={sendReply}
                    disabled={sendingReply}
                  >
                    {sendingReply ? 'Sending...' : 'Send'}
                  </button>
                  <button
                    className="px-3 py-2 bg-gray-100 dark:bg-slate-700 text-slate-900 dark:text-slate-200 rounded hover:bg-gray-200"
                    onClick={() => {
                      setReplyingToMessageId(null);
                      setReplyContent('');
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

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

  const renderFullResponse = (r: any) => {
    const title = r.subject ?? r.title ?? `Response to ${r.messageId ?? ''}`;
    const createdAt = r.createdAt ? new Date(r.createdAt).toLocaleString() : '-';
    const createdBy = r.name ?? r.createdByName ?? 'You';
    return (
      <div className="w-full">
        <div className="px-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="text-sm text-slate-700 dark:text-slate-300 mt-1">
            Sent: {createdAt} · From: {createdBy}
            {r.parent
              ? ` · In reply to: ${r.parent.title ?? r.parent.subject ?? r.parent.name}`
              : null}
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
                onClick={() => handleEdit(r)}
              >
                Edit
              </button>

              <button
                className="px-3 py-2 bg-red-50 hover:bg-red-100 dark:bg-red-700 dark:hover:bg-red-600 text-red-800 dark:text-white rounded"
                onClick={() => handleDelete(r.id)}
                disabled={Boolean(deleteLoading && deleteId === r.id)}
              >
                {deleteLoading && deleteId === r.id ? 'Deleting...' : 'Delete'}
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

    /* Tabs: square, positioned so their bottom edge aligns exactly with container top border */
    .tabs-top {
      position: absolute;
      left: 24px;
      top: 0;
      /* move up slightly beyond -100% to sit exactly on top of container border */
      transform: translateY(calc(-100% - 1px));
      display:flex;
      gap:0;
      z-index:20;
    }
    .tab-pill {
      padding:10px 16px;
      height:40px;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      border:1px solid transparent;
      border-bottom: none; /* visually connect with container top border */
      border-radius:0;
      cursor:pointer;
      background:transparent;
      color:inherit;
      font-weight:600;
      box-sizing: border-box;
    }
    .tab-pill + .tab-pill { margin-left: -1px; } /* collapse borders between pills */
    .tab-pill:hover { background: rgba(0,0,0,0.03); }
    .tab-active {
      background: #eef2ff; /* light active background */
      color: #111;
      border-color: rgba(15,23,42,0.06);
      box-shadow: 0 1px 2px rgba(0,0,0,0.04);
    }
    .dark .tab-active {
      background: #0b1220; /* dark active background */
      color: #fff;
      border-color: rgba(255,255,255,0.04);
      box-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }

    /* messages list spacing: gives padding between individual cards */
    .messages-list { display:block; margin-top: 8px; }
    .messages-list .message-card { margin-bottom: 12px; }
    .messages-list .message-card:last-child { margin-bottom: 0; }

    /* ensure the top border of the container remains visible under tabs */
    .container-top-border { border-top-width: 1px; border-top-style: solid; border-top-color: inherit; padding-top: 12px; }
  `;

  return (
    <div className={outerClass}>
      <style>{injectedCss}</style>

      {/* Tabs (square) placed so bottom of tabs aligns with top border of the messages container */}
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

      {/* Container wrapper with explicit top border so tabs visually sit on it */}
      <div className="container-top-border">
        {/* Inline view if open */}
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
                      const createdBy = isSystem ? 'System' : createdByLabel(m);

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
                                      Created at: {createdAt ? createdAt.toLocaleString() : '-'}
                                      {showUpdated && (
                                        <>
                                          {' '}
                                          • Updated at:{' '}
                                          {updatedAt ? updatedAt.toLocaleString() : '-'}
                                        </>
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
                              >
                                View
                              </button>

                              {!isSystem && m.allowResponses && (
                                <button
                                  type="button"
                                  className="px-3 py-1 rounded text-sm bg-green-600 text-white hover:bg-green-700"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openReplyComposer(m.id);
                                  }}
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
                      const createdAt = r.createdAt ? new Date(r.createdAt) : null;
                      const title = r.subject ?? r.title ?? `Response to ${r.messageId ?? ''}`;
                      const createdBy = r.name ?? r.createdByName ?? 'You';
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
                                      Sent at: {createdAt ? createdAt.toLocaleString() : '-'}
                                    </div>
                                    <div className="text-xs text-slate-600 dark:text-slate-400">
                                      From: {createdBy}
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
                                onClick={() => handleDelete(r.id)}
                                disabled={Boolean(deleteLoading && deleteId === r.id)}
                              >
                                {deleteLoading && deleteId === r.id ? 'Deleting...' : 'Delete'}
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
