'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';

type Props = {
  messageId: number | string;
  editId?: number | string | null;
  initialData?: any;
  onSuccess?: (createdResponse: any) => void; // called with created response object
  onCancel?: () => void;
};

export default function CreateResponseForm({
  messageId,
  editId,
  initialData,
  onSuccess,
  onCancel,
}: Props) {
  const { data: session } = useSession();
  const [content, setContent] = useState<string>(() => {
    if (initialData?.content && typeof initialData.content === 'string') return initialData.content;
    if (initialData?.content && typeof initialData.content === 'object')
      return JSON.stringify(initialData.content, null, 2);
    return '';
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);

    if (!messageId) {
      setError('No message selected to respond to.');
      return;
    }

    if (!content || !content.trim()) {
      setError('Content cannot be empty.');
      return;
    }

    setLoading(true);
    try {
      // Attempt to parse JSON content, otherwise send string
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

      let res: Response;
      if (editId || initialData?.id) {
        const id = editId ?? initialData?.id;
        res = await fetch(`/api/responses/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: parsedContent }),
        });
      } else {
        res = await fetch(`/api/responses`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messageId, content: parsedContent }),
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
    } catch (err: any) {
      setError(err?.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="w-full space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Response</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="w-full border border-input rounded-md p-2 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200"
          placeholder="Write your response (plain text or TipTap JSON)..."
        />
      </div>

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
