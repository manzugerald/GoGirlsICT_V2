'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import '@/assets/styles/tiptap-editor.css';

const EditorClient = dynamic(() => import('@/components/editor/editor-client'), {
  ssr: false,
});

const publishOptions = ['draft', 'published'] as const;
type PublishStatus = (typeof publishOptions)[number];

const categoryOptions = [
  'general',
  'beneficiaries',
  'institutions',
  'projects',
  'events',
  'reports',
  'technnology',
  'other',
] as const;
type FAQCategory = (typeof categoryOptions)[number];

type FAQInitialData = {
  id?: string | number;
  question?: any;
  answer?: any;
  category?: FAQCategory | string;
  publishStatus?: PublishStatus;
  createdById?: string;
};

type CreateFAQFormProps = {
  mode?: 'create' | 'edit';
  initialData?: FAQInitialData;
  onSuccess?: () => void;
  onCancel?: () => void;
  currentUserId?: string | number;
};

/* Minimal empty Tiptap doc used as default */
const emptyDoc = {
  type: 'doc',
  content: [{ type: 'paragraph', content: [{ type: 'text', text: '' }] }],
} as const;

/**
 * Normalizer that handles:
 * - full Tiptap doc { type: 'doc', content: [...] }
 * - single node shapes like { type: 'paragraph', content: "text" }
 * - stringified JSON / HTML / plain text
 */
function ensureTiptapDoc(value: any) {
  if (!value) return emptyDoc;

  if (typeof value === 'object') {
    if (value.type === 'doc' && Array.isArray(value.content)) return value;

    if (value.type && value.type !== 'doc') {
      // content string => text node
      if (typeof value.content === 'string') {
        return {
          type: 'doc',
          content: [
            {
              type: value.type,
              content: [{ type: 'text', text: value.content }],
            },
          ],
        };
      }

      // content array => normalize inner text
      if (Array.isArray(value.content)) {
        const normalizedInner = value.content.map((item: any) =>
          typeof item === 'string' ? { type: 'text', text: item } : item
        );
        return {
          type: 'doc',
          content: [
            {
              type: value.type,
              content: normalizedInner,
            },
          ],
        };
      }

      return { type: 'doc', content: [value] };
    }

    // otherwise unknown object shape -> attempt to return as doc, else emptyDoc
    try {
      if (value.type === 'doc' && Array.isArray(value.content)) return value;
    } catch {
      return emptyDoc;
    }

    return emptyDoc;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();

    // try parse JSON
    if (
      (trimmed.startsWith('{') || trimmed.startsWith('[')) &&
      (trimmed.endsWith('}') || trimmed.endsWith(']'))
    ) {
      try {
        const parsed = JSON.parse(trimmed);
        return ensureTiptapDoc(parsed);
      } catch {
        // fallthrough
      }
    }

    // html -> extract text (browser runtime)
    if (trimmed.includes('<') && typeof window !== 'undefined') {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(trimmed, 'text/html');
        const text = doc.body.textContent || '';
        return {
          type: 'doc',
          content: [{ type: 'paragraph', content: [{ type: 'text', text }] }],
        };
      } catch {
        // fallthrough
      }
    }

    // plain text
    return {
      type: 'doc',
      content: [{ type: 'paragraph', content: [{ type: 'text', text: trimmed }] }],
    };
  }

  return emptyDoc;
}

/** Extract readable plain text (handles doc and node-only shapes) */
function tiptapDocToPlainText(doc: any) {
  if (!doc) return '';
  if (typeof doc === 'string') return doc;

  const walk = (node: any): string => {
    if (!node) return '';
    if (node.type === 'text') return node.text || '';
    if (typeof node.content === 'string') return node.content;
    if (Array.isArray(node.content)) return node.content.map(walk).join('');
    return '';
  };

  if (doc.type === 'doc' && Array.isArray(doc.content)) {
    return doc.content.map(walk).join('\n\n');
  }

  return walk(doc);
}

function plainTextToTiptapDoc(text: string) {
  return {
    type: 'doc',
    content: [{ type: 'paragraph', content: [{ type: 'text', text: text || '' }] }],
  };
}

export default function CreateFAQForm({
  mode = 'create',
  initialData,
  onSuccess,
  onCancel,
  currentUserId,
}: CreateFAQFormProps) {
  const router = useRouter();

  const [form, setForm] = useState({
    question: emptyDoc as any,
    answer: emptyDoc as any,
    category: '' as FAQCategory | string,
    publishStatus: 'draft' as PublishStatus,
  });

  const [questionText, setQuestionText] = useState('');
  const [answerText, setAnswerText] = useState('');

  const [editorMode, setEditorMode] = useState<'rich' | 'plain'>('rich');
  const [activeField, setActiveField] = useState<'question' | 'answer'>('question');

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  // label spacing applied when in plain mode
  const labelClass = editorMode === 'plain' ? 'mb-2' : '';

  // Populate when editing (fetch latest)
  useEffect(() => {
    let aborted = false;

    const populateFromData = (data?: FAQInitialData) => {
      const q = ensureTiptapDoc(data?.question);
      const a = ensureTiptapDoc(data?.answer);
      setForm({
        question: q,
        answer: a,
        category: (data?.category as FAQCategory) ?? '',
        publishStatus: data?.publishStatus ?? 'draft',
      });
      setQuestionText(tiptapDocToPlainText(q));
      setAnswerText(tiptapDocToPlainText(a));
    };

    const fetchFAQ = async (id: string | number) => {
      setFetching(true);
      try {
        const res = await fetch(`/api/faq/${id}`);
        if (!res.ok) throw new Error(`Failed to fetch FAQ (${res.status})`);
        const data = await res.json();
        if (aborted) return;
        populateFromData(data);
      } catch (err) {
        console.error('Error fetching FAQ:', err);
        if (!aborted && initialData) {
          populateFromData(initialData);
        }
      } finally {
        if (!aborted) setFetching(false);
      }
    };

    if (mode === 'edit' && initialData?.id) {
      fetchFAQ(initialData.id);
    } else if (initialData) {
      populateFromData(initialData);
    } else {
      setForm({ question: emptyDoc, answer: emptyDoc, category: '', publishStatus: 'draft' });
      setQuestionText('');
      setAnswerText('');
    }

    return () => {
      aborted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, initialData?.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Editor -> update appropriate field (activeField)
  const handleRichEditorChange = (doc: object) => {
    setForm((prev) => ({ ...prev, [activeField]: doc }));
    if (activeField === 'question') {
      setQuestionText(tiptapDocToPlainText(doc));
    } else {
      setAnswerText(tiptapDocToPlainText(doc));
    }
  };

  // Plain textareas update both plain text and tiptap doc in state
  const handleQuestionTextChange = (txt: string) => {
    setQuestionText(txt);
    setForm((prev) => ({ ...prev, question: plainTextToTiptapDoc(txt) }));
  };

  const handleAnswerTextChange = (txt: string) => {
    setAnswerText(txt);
    setForm((prev) => ({ ...prev, answer: plainTextToTiptapDoc(txt) }));
  };

  const isEditorEmpty = (doc: any) => {
    if (!doc) return true;
    try {
      const s = JSON.stringify(doc);
      return s === '{}' || s === 'null' || s.trim().length === 0;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (isEditorEmpty(form.question)) {
      alert('Please provide a question for the FAQ.');
      setLoading(false);
      return;
    }

    try {
      const payload = {
        question: form.question,
        answer: form.answer,
        category: form.category?.trim() || undefined,
        publishStatus: form.publishStatus,
        createdById: currentUserId ? String(currentUserId) : undefined,
      };

      let res: Response;
      if (mode === 'edit' && initialData?.id) {
        res = await fetch(`/api/faq/${initialData.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch('/api/faq', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.error || `Failed to ${mode === 'edit' ? 'update' : 'create'} FAQ`);
      }

      if (onSuccess) onSuccess();
      router.refresh();
      router.push('/admin/dashboard');
    } catch (err) {
      console.error(err);
      alert(
        `There was an error ${mode === 'edit' ? 'updating' : 'creating'} the FAQ. Please try again.`
      );
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-4 p-6 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl shadow text-center">
        <div className="text-lg font-medium">Loading FAQ...</div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto mt-4 space-y-6 p-6 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded-xl shadow"
    >
      <div className="text-2xl font-bold mb-4 text-center">
        {mode === 'edit' ? 'Edit FAQ' : 'Create New FAQ'}
      </div>

      {/* Editor mode toggle */}
      <div className="flex items-center gap-4">
        <Label className={labelClass}>Editor Mode</Label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="editorMode"
            checked={editorMode === 'rich'}
            onChange={() => setEditorMode('rich')}
          />
          <span className="ml-1">Rich editor (single instance)</span>
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="editorMode"
            checked={editorMode === 'plain'}
            onChange={() => setEditorMode('plain')}
          />
          <span className="ml-1">Plain text editor</span>
        </label>
      </div>

      {/* Rich editor: single instance used for both question and answer */}
      {editorMode === 'rich' ? (
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <button
              type="button"
              onClick={() => setActiveField('question')}
              className={`px-3 py-1 rounded-md ${
                activeField === 'question'
                  ? 'bg-[#9f004d] text-white'
                  : 'bg-gray-300 text-slate-900 hover:bg-gray-400 dark:bg-slate-700 dark:text-slate-200'
              }`}
            >
              Edit Question
            </button>
            <button
              type="button"
              onClick={() => setActiveField('answer')}
              className={`px-3 py-1 rounded-md ${
                activeField === 'answer'
                  ? 'bg-[#9f004d] text-white'
                  : 'bg-gray-300 text-slate-900 hover:bg-gray-400 dark:bg-slate-700 dark:text-slate-200'
              }`}
            >
              Edit Answer
            </button>
            <div className="ml-auto text-sm opacity-80 self-center">
              Currently editing: <strong>{activeField}</strong>
            </div>
          </div>

          {/* boxed editor area */}
          <div
            className="border border-gray-300 dark:border-slate-600 rounded-md p-3 bg-gray-50 dark:bg-slate-700 min-h-[160px]"
            aria-label={`Rich editor container for ${activeField}`}
          >
            <EditorClient
              // force remount when switching activeField so content is always replaced
              key={`editor-${activeField}-${initialData?.id ?? 'new'}`}
              content={activeField === 'question' ? form.question : form.answer}
              onChange={handleRichEditorChange}
              showLinkUnlink
            />
          </div>
        </div>
      ) : (
        // Plain mode: show two independent textareas for question and answer
        <div className="space-y-4">
          <div>
            <Label className={labelClass} htmlFor="questionPlain">
              Question (plain text)
            </Label>
            <textarea
              id="questionPlain"
              value={questionText}
              onChange={(e) => handleQuestionTextChange(e.target.value)}
              className="w-full min-h-[64px] border border-input rounded-md p-2 text-sm bg-gray-50 dark:bg-slate-700 text-slate-900 dark:text-slate-200"
              placeholder="Enter question (plain text)"
            />
          </div>

          <div>
            <Label className={labelClass} htmlFor="answerPlain">
              Answer (plain text)
            </Label>
            <textarea
              id="answerPlain"
              value={answerText}
              onChange={(e) => handleAnswerTextChange(e.target.value)}
              className="w-full min-h-[120px] border border-input rounded-md p-2 text-sm bg-gray-50 dark:bg-slate-700 text-slate-900 dark:text-slate-200"
              placeholder="Enter answer (plain text)"
            />
          </div>
        </div>
      )}

      {/* Category + Publish status (same row) */}
      <div className="flex gap-4">
        <div className="flex-1 space-y-4">
          <Label className={labelClass} htmlFor="category">
            Category
          </Label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-input rounded-md p-2 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200"
          >
            <option value="">Select a category</option>
            {categoryOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="w-1/2 space-y-4">
          <Label className={labelClass} htmlFor="publishStatus">
            Publish Status
          </Label>
          <select
            id="publishStatus"
            name="publishStatus"
            value={form.publishStatus}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, publishStatus: e.target.value as PublishStatus }))
            }
            className="w-full border border-input rounded-md p-2 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200"
          >
            {publishOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <Button
          type="submit"
          disabled={loading}
          className="w-40 bg-[#9f004d] hover:bg-[#8a0042] text-white"
        >
          {loading
            ? mode === 'edit'
              ? 'Updating...'
              : 'Creating...'
            : mode === 'edit'
            ? 'Update FAQ'
            : 'Create FAQ'}
        </Button>

        <Button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="w-40 bg-slate-700 hover:bg-slate-600 text-white dark:bg-slate-600"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
