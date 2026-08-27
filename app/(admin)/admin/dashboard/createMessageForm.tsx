'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { EMPTY_TIPTAP_DOC, isTiptapDocEmpty, normalizeTiptapDoc } from '@/lib/tiptap';
import '@/assets/styles/tiptap-editor.css';
import { RichTextEditorProvider } from '@/components/editor/rich-text-context';
import RichTextToolbar from '@/components/editor/rich-text-toolbar';
import RichTextField from '@/components/editor/rich-text-field';

/**
 * CreateMessageForm
 *
 * A corrected form for creating / editing Message records (was previously the
 * create-response form pasted here by mistake).
 *
 * Model reference (important fields):
 * - title?: Json (Tiptap doc, optional)
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

  const [title, setTitle] = useState<object>(() =>
    initialData?.title ? normalizeTiptapDoc(initialData.title) : EMPTY_TIPTAP_DOC
  );
  const [affiliated, setAffiliated] = useState<string>(initialData?.affiliated ?? '');
  const [name, setName] = useState<string>(initialData?.name ?? '');
  const [content, setContent] = useState<object>(() =>
    initialData?.content ? normalizeTiptapDoc(initialData.content) : EMPTY_TIPTAP_DOC
  );
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
        setTitle(json.title ? normalizeTiptapDoc(json.title) : EMPTY_TIPTAP_DOC);
        setAffiliated(json.affiliated ?? '');
        setName(json.name ?? '');
        setContent(json.content ? normalizeTiptapDoc(json.content) : EMPTY_TIPTAP_DOC);
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
      setTitle(initialData.title ? normalizeTiptapDoc(initialData.title) : EMPTY_TIPTAP_DOC);
      setAffiliated(initialData.affiliated ?? '');
      setName(initialData.name ?? '');
      setContent(initialData.content ? normalizeTiptapDoc(initialData.content) : EMPTY_TIPTAP_DOC);
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
    if (isTiptapDocEmpty(content)) {
      setError('Content cannot be empty.');
      return;
    }

    setLoading(true);
    try {
      const payload: any = {
        title: isTiptapDocEmpty(title) ? undefined : title,
        affiliated: affiliated?.trim() || undefined,
        name: name?.trim() || undefined,
        content,
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

      {/*
        Shared toolbar sits on top of the form: it acts on whichever of
        Title / Content is currently (or was last) focused.
      */}
      <RichTextEditorProvider key={String(initialData?.id ?? 'new-message')}>
        <div className="tiptap-wrapper">
          <RichTextToolbar showLinkUnlink />
          <div className="space-y-2 p-3">
            <label className="block text-sm font-medium mb-1">Title (optional)</label>
            <RichTextField content={title} onChange={setTitle} placeholder="Optional title" />
          </div>
          <div className="space-y-2 border-t border-gray-200 p-3 dark:border-gray-800">
            <label className="block text-sm font-medium mb-1">Content</label>
            <RichTextField
              content={content}
              onChange={setContent}
              placeholder="Write the message content..."
            />
          </div>
        </div>
      </RichTextEditorProvider>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
