'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import '@/assets/styles/tiptap-editor.css';

/**
 * CreateMessageForm
 *
 * A corrected form for creating / editing Message records (was previously the
 * create-response form pasted here by mistake).
 *
 * Model reference (important fields):
 * - title?: string
 * - affiliated?: string
 * - name?: string
 * - content: Json
 * - nameImageUrl?: string
 * - messageImageUrl?: string
 * - messageStatus: PublishStatus ('draft'|'published')
 * - messageCategory: MessageCategory (enum values below)
 * - senderEmail?: string
 * - senderIp?: string
 * - allowResponses?: boolean
 * - beneficiaryId?: string
 *
 * This component:
 * - supports create (POST /api/messages) and edit (PUT /api/messages/:id)
 * - accepts initialData when editing and pre-populates fields
 * - content field accepts plain text or JSON (stringified for editing)
 * - uses the same container styling as other admin forms
 */

const categoryOptions = [
  'beneficiary',
  'request',
  'system',
  'external',
  'go_girls_ict_team',
  'testimonial',
] as const;
type MessageCategory = (typeof categoryOptions)[number];

const publishOptions = ['draft', 'published'] as const;
type PublishStatus = (typeof publishOptions)[number];

type Props = {
  mode?: 'create' | 'edit';
  initialData?: any;
  onSuccess?: () => void;
  onCancel?: () => void;
};

export default function CreateMessageForm({
  mode = 'create',
  initialData,
  onSuccess,
  onCancel,
}: Props) {
  const router = useRouter();
  const { data: session } = useSession();

  const [title, setTitle] = useState<string>(initialData?.title ?? '');
  const [affiliated, setAffiliated] = useState<string>(initialData?.affiliated ?? '');
  const [name, setName] = useState<string>(initialData?.name ?? '');
  const [content, setContent] = useState<string>(() => {
    if (initialData?.content && typeof initialData.content === 'string') return initialData.content;
    if (initialData?.content && typeof initialData.content === 'object')
      return JSON.stringify(initialData.content, null, 2);
    return initialData?.contentText ?? '';
  });
  const [nameImageUrl, setNameImageUrl] = useState<string>(initialData?.nameImageUrl ?? '');
  const [messageImageUrl, setMessageImageUrl] = useState<string>(
    initialData?.messageImageUrl ?? ''
  );
  const [messageCategory, setMessageCategory] = useState<MessageCategory>(
    (initialData?.messageCategory as MessageCategory) ?? 'external'
  );
  const [messageStatus, setMessageStatus] = useState<PublishStatus>(
    (initialData?.messageStatus as PublishStatus) ?? 'draft'
  );
  const [senderEmail, setSenderEmail] = useState<string>(initialData?.senderEmail ?? '');
  const [senderIp, setSenderIp] = useState<string>(initialData?.senderIp ?? '');
  const [allowResponses, setAllowResponses] = useState<boolean>(
    initialData?.allowResponses === false ? false : true
  );
  const [beneficiaryId, setBeneficiaryId] = useState<string | undefined>(
    initialData?.beneficiaryId ?? undefined
  );

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // If editing and initialData isn't fully populated, try fetching latest
  useEffect(() => {
    let aborted = false;
    async function fetchMessage(id: string | number) {
      setFetching(true);
      try {
        const res = await fetch(`/api/messages/${id}`);
        if (!res.ok) throw new Error(`Failed to fetch message (${res.status})`);
        const json = await res.json();
        if (aborted) return;
        // populate fields from fetched data
        setTitle(json.title ?? '');
        setAffiliated(json.affiliated ?? '');
        setName(json.name ?? '');
        if (json.content && typeof json.content === 'object') {
          setContent(JSON.stringify(json.content, null, 2));
        } else if (typeof json.content === 'string') {
          setContent(json.content);
        } else {
          setContent('');
        }
        setNameImageUrl(json.nameImageUrl ?? '');
        setMessageImageUrl(json.messageImageUrl ?? '');
        setMessageCategory((json.messageCategory as MessageCategory) ?? 'external');
        setMessageStatus((json.messageStatus as PublishStatus) ?? 'draft');
        setSenderEmail(json.senderEmail ?? '');
        setSenderIp(json.senderIp ?? '');
        setAllowResponses(json.allowResponses === false ? false : true);
        setBeneficiaryId(json.beneficiaryId ?? undefined);
      } catch (err) {
        // ignore fetch error — keep any initialData present
        // eslint-disable-next-line no-console
        console.warn('fetchMessage error', err);
      } finally {
        if (!aborted) setFetching(false);
      }
    }

    if (mode === 'edit' && initialData?.id) {
      fetchMessage(initialData.id);
    } else if (initialData && initialData.id) {
      // populate from initialData
      setTitle(initialData.title ?? '');
      setAffiliated(initialData.affiliated ?? '');
      setName(initialData.name ?? '');
      if (initialData.content && typeof initialData.content === 'object') {
        setContent(JSON.stringify(initialData.content, null, 2));
      } else if (typeof initialData.content === 'string') {
        setContent(initialData.content);
      }
      setNameImageUrl(initialData.nameImageUrl ?? '');
      setMessageImageUrl(initialData.messageImageUrl ?? '');
      setMessageCategory((initialData.messageCategory as MessageCategory) ?? 'external');
      setMessageStatus((initialData.messageStatus as PublishStatus) ?? 'draft');
      setSenderEmail(initialData.senderEmail ?? '');
      setSenderIp(initialData.senderIp ?? '');
      setAllowResponses(initialData.allowResponses === false ? false : true);
      setBeneficiaryId(initialData.beneficiaryId ?? undefined);
    }

    return () => {
      aborted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, initialData?.id]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);

    // Basic validation: content required
    if (!content || !content.trim()) {
      setError('Content cannot be empty.');
      return;
    }

    setLoading(true);
    try {
      // Try to parse content as JSON; if not valid, send as string
      let parsedContent: unknown = content;
      const trimmed = content.trim();
      if (
        (trimmed.startsWith('{') && trimmed.endsWith('}')) ||
        (trimmed.startsWith('[') && trimmed.endsWith(']'))
      ) {
        try {
          parsedContent = JSON.parse(content);
        } catch {
          parsedContent = content;
        }
      }

      const payload: any = {
        title: title?.trim() || undefined,
        affiliated: affiliated?.trim() || undefined,
        name: name?.trim() || undefined,
        content: parsedContent,
        nameImageUrl: nameImageUrl?.trim() || undefined,
        messageImageUrl: messageImageUrl?.trim() || undefined,
        messageStatus: messageStatus ?? 'draft',
        messageCategory: messageCategory ?? 'external',
        senderEmail: senderEmail?.trim() || undefined,
        senderIp: senderIp?.trim() || undefined,
        allowResponses: !!allowResponses,
        beneficiaryId: beneficiaryId || undefined,
      };

      let res: Response;
      if (mode === 'edit' && (initialData?.id || initialData?.messageId)) {
        const id = initialData?.id ?? initialData?.messageId;
        res = await fetch(`/api/messages/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || `Request failed (${res.status})`);
      }

      if (onSuccess) onSuccess();
      // refresh page and navigate back to dashboard list
      router.refresh();
      router.push('/admin/dashboard');
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error('CreateMessageForm submit error', err);
      setError(err?.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto mt-4 space-y-6 p-6 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded-xl shadow"
    >
      <div className="text-2xl font-bold mb-2 text-center">
        {mode === 'edit' ? 'Edit Message' : 'Create New Message'}
      </div>

      {fetching ? (
        <div className="w-full p-6 bg-white dark:bg-slate-800 rounded-xl shadow text-center">
          <div className="text-lg font-medium">Loading message...</div>
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-input rounded-md p-2 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200"
            placeholder="Optional title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            value={messageCategory}
            onChange={(e) => setMessageCategory(e.target.value as MessageCategory)}
            className="w-full border border-input rounded-md p-2 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200"
          >
            {categoryOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Affiliated</label>
          <input
            value={affiliated}
            onChange={(e) => setAffiliated(e.target.value)}
            className="w-full border border-input rounded-md p-2 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200"
            placeholder="Organization / affiliation (optional)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message Status</label>
          <select
            value={messageStatus}
            onChange={(e) => setMessageStatus(e.target.value as PublishStatus)}
            className="w-full border border-input rounded-md p-2 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200"
          >
            {publishOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Name (optional)</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-input rounded-md p-2 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200"
          placeholder="Person or sender name (optional)"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          className="w-full border border-input rounded-md p-3 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200"
          placeholder="Paste TipTap JSON, HTML or plain text. JSON will be preserved."
        />
        <p className="text-xs text-gray-500 mt-1">
          Content is stored as JSON. If you paste a JSON object/TipTap doc it will be used as-is;
          otherwise plain text will be sent as the content value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name image URL</label>
          <input
            value={nameImageUrl}
            onChange={(e) => setNameImageUrl(e.target.value)}
            className="w-full border border-input rounded-md p-2 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200"
            placeholder="Optional small image for name/avatar"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message image URL</label>
          <input
            value={messageImageUrl}
            onChange={(e) => setMessageImageUrl(e.target.value)}
            className="w-full border border-input rounded-md p-2 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200"
            placeholder="Optional banner/image for the message"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Sender email</label>
          <input
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            className="w-full border border-input rounded-md p-2 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200"
            placeholder="Optional sender email (for external)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Sender IP</label>
          <input
            value={senderIp}
            onChange={(e) => setSenderIp(e.target.value)}
            className="w-full border border-input rounded-md p-2 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200"
            placeholder="Optional sender IP"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            checked={allowResponses}
            onChange={(e) => setAllowResponses(e.target.checked)}
            className="form-checkbox"
          />
          <span className="text-sm">Allow responses</span>
        </label>

        <div className="ml-auto space-x-3">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-[#9f004d] hover:bg-[#8a0042] text-white rounded w-36"
          >
            {loading
              ? mode === 'edit'
                ? 'Updating...'
                : 'Creating...'
              : mode === 'edit'
              ? 'Update'
              : 'Create'}
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded w-36"
          >
            Cancel
          </button>
        </div>
      </div>

      {error && <div className="text-sm text-red-600 mt-2">{error}</div>}
    </form>
  );
}
