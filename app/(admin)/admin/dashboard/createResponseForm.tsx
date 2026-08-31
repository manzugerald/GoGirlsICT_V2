'use client';

import React, { useState } from 'react';
import { EMPTY_TIPTAP_DOC, isTiptapDocEmpty, normalizeTiptapDoc } from '@/lib/tiptap';
import '@/assets/styles/tiptap-editor.css';
import { RichTextEditorProvider } from '@/components/editor/rich-text-context';
import RichTextToolbar from '@/components/editor/rich-text-toolbar';
import RichTextField from '@/components/editor/rich-text-field';

// The Response record this form creates/edits — genuinely dynamic, hence one
// deliberate loose alias here instead of scattering `any`.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ResponseRecord = any;

type Props = {
  messageId: number | string;
  editId?: number | string | null;
  initialData?: ResponseRecord;
  onSuccess?: (createdResponse: ResponseRecord) => void; // called with created response object
  onCancel?: () => void;
};

export default function CreateResponseForm({
  messageId,
  editId,
  initialData,
  onSuccess,
  onCancel,
}: Props) {
  const [content, setContent] = useState<object>(() =>
    initialData?.content ? normalizeTiptapDoc(initialData.content) : EMPTY_TIPTAP_DOC
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);

    if (!messageId) {
      setError('No message selected to respond to.');
      return;
    }

    if (isTiptapDocEmpty(content)) {
      setError('Content cannot be empty.');
      return;
    }

    setLoading(true);
    try {
      let res: Response;
      if (editId || initialData?.id) {
        const id = editId ?? initialData?.id;
        res = await fetch(`/api/responses/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content }),
        });
      } else {
        res = await fetch(`/api/responses`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messageId, content }),
        });
      }

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setError(body?.error || `Request failed (${res.status})`);
        setLoading(false);
        return;
      }

      const created = await res.json();
      if (onSuccess) onSuccess(created);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="w-full space-y-4">
      <RichTextEditorProvider key={String(editId ?? initialData?.id ?? 'new-response')}>
        <div className="tiptap-wrapper">
          <RichTextToolbar showLinkUnlink />
          <div className="space-y-2 p-3">
            <label className="block text-sm font-medium mb-1">Response</label>
            <RichTextField
              content={content}
              onChange={setContent}
              placeholder="Write your response..."
            />
          </div>
        </div>
      </RichTextEditorProvider>

      {error && <div className="text-sm text-red-600">{error}</div>}

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-60"
        >
          {loading ? 'Saving...' : editId || initialData ? 'Save' : 'Send'}
        </button>

        <button
          type="button"
          onClick={() => {
            if (onCancel) onCancel();
          }}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
