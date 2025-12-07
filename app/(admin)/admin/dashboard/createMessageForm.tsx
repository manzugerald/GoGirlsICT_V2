'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

type Props = {
  messageId?: number | string;
  editId?: string | null;
  initialData?: any;
  onSuccess?: () => void;
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
    // If content might be JSON, stringify for editing
    if (initialData?.content && typeof initialData.content === 'object')
      return JSON.stringify(initialData.content, null, 2);
    return '';
  });
  const [loading, setLoading] = useState(false);
  const [messageCreatorId, setMessageCreatorId] = useState<string | null>(() => {
    // If editing an existing response, the initialData may include message.createdById
    return initialData?.message?.createdById ?? initialData?.message?.createdBy?.id ?? null;
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If messageId provided, fetch message to determine creator (to show hint that the response will be tagged Author)
    async function fetchMessage() {
      const id = messageId ?? initialData?.message?.id;
      if (!id) return;
      try {
        const res = await fetch(`/api/messages/${id}`);
        if (!res.ok) return;
        const json = await res.json();
        setMessageCreatorId(json.createdById ?? json.createdBy?.id ?? null);
      } catch {
        // ignore
      }
    }
    fetchMessage();
    // If initialData changes and contains message creator info, keep it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageId, initialData?.message?.id]);

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);

    const targetMessageId = messageId ?? initialData?.message?.id;
    if (!targetMessageId) {
      setError('No message selected to respond to.');
      return;
    }

    if (!content || !content.trim()) {
      setError('Content cannot be empty.');
      return;
    }

    setLoading(true);
    try {
      // Try to send JSON if the content looks like JSON, otherwise send as string
      let parsedContent: unknown = content;
      const trimmed = content.trim();
      if (
        (trimmed.startsWith('{') && trimmed.endsWith('}')) ||
        (trimmed.startsWith('[') && trimmed.endsWith(']'))
      ) {
        try {
          parsedContent = JSON.parse(content);
        } catch {
          // keep as string if parsing fails
          parsedContent = content;
        }
      }

      const payload = {
        messageId: targetMessageId,
        content: parsedContent,
      };

      let res: Response;
      if (editId || initialData?.id) {
        const id = editId ?? initialData?.id;
        res = await fetch(`/api/responses/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: payload.content }),
        });
      } else {
        res = await fetch(`/api/responses`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setError(body?.error || `Request failed (${res.status})`);
        setLoading(false);
        return;
      }

      if (onSuccess) onSuccess();
    } catch (err: any) {
      setError(err?.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  const isAuthor = !!(
    session?.user?.id &&
    messageCreatorId &&
    session.user.id === messageCreatorId
  );

  return (
    <form
      onSubmit={submit}
      className="w-full max-w-3xl mx-auto p-6 bg-background rounded-xl shadow space-y-4"
    >
      <h3 className="text-lg font-semibold">
        {editId || initialData ? 'Edit Response' : 'Create Response'}
      </h3>

      {isAuthor && (
        <div className="text-sm text-gray-700 dark:text-gray-300 p-2 rounded bg-yellow-50 dark:bg-yellow-900">
          You are the author of the original message — your response will be tagged as{' '}
          <strong>Author</strong>.
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={8}
          className="w-full border rounded p-2 bg-white dark:bg-gray-800 dark:text-white"
        />
        <p className="text-xs text-gray-500 mt-1">
          You can paste TipTap JSON or plain text. JSON will be preserved.
        </p>
      </div>

      {error && <div className="text-sm text-red-600">{error}</div>}

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-800 disabled:opacity-60"
        >
          {loading ? 'Saving...' : editId || initialData ? 'Save' : 'Create'}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
