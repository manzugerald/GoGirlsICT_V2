'use client';

import { useState, useEffect } from 'react';
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

const faqCategoryOptions = [
  'general',
  'beneficiaries',
  'institutions',
  'projects',
  'events',
  'reports',
  'technnology',
  'other',
] as const;
type FAQCategory = (typeof faqCategoryOptions)[number];

type CreateFAQFormProps = {
  mode?: 'create' | 'edit';
  initialData?: {
    id?: number;
    question?: any; // Json or string
    answer?: any; // Json or string
    category?: FAQCategory;
    publishStatus?: PublishStatus;
  };
  currentUserId?: string; // required for create
  onSuccess?: () => void;
  onCancel?: () => void;
};

function ensureTiptapDoc(value: any) {
  if (value == null) return { type: 'doc', content: [{ type: 'paragraph', text: '' }] };
  if (typeof value === 'object') return value;
  // string -> simple tiptap doc
  return { type: 'doc', content: [{ type: 'paragraph', text: String(value) }] };
}

export default function CreateFAQForm({
  mode = 'create',
  initialData,
  currentUserId,
  onSuccess,
  onCancel,
}: CreateFAQFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    question: ensureTiptapDoc(initialData?.question ?? ''),
    answer: ensureTiptapDoc(initialData?.answer ?? ''),
    category: (initialData?.category as FAQCategory) ?? 'general',
    publishStatus: (initialData?.publishStatus as PublishStatus) ?? 'draft',
  });
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setForm((prev) => ({
        ...prev,
        question: ensureTiptapDoc(initialData.question ?? prev.question),
        answer: ensureTiptapDoc(initialData.answer ?? prev.answer),
        category: (initialData.category as FAQCategory) ?? prev.category,
        publishStatus: (initialData.publishStatus as PublishStatus) ?? prev.publishStatus,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData?.id]);

  const handleQuestionChange = (json: object) => {
    setForm((p) => ({ ...p, question: json }));
  };
  const handleAnswerChange = (json: object) => {
    setForm((p) => ({ ...p, answer: json }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement & HTMLSelectElement;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate minimal
      if (!form.question) {
        alert('Question is required');
        setLoading(false);
        return;
      }
      if (!form.answer) {
        alert('Answer is required');
        setLoading(false);
        return;
      }

      const payload: any = {
        question: form.question,
        answer: form.answer,
        category: form.category,
        publishStatus: form.publishStatus,
      };

      let res: Response;
      if (mode === 'edit' && initialData?.id) {
        res = await fetch(`/api/faq/${initialData.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        // create requires createdById; prefer prop currentUserId
        if (!currentUserId) {
          // try to proceed but warn
          alert('currentUserId is required to create an FAQ (pass via props)');
          setLoading(false);
          return;
        }
        payload.createdById = currentUserId;
        payload.updatedById = currentUserId;
        payload.approvedById = currentUserId;

        res = await fetch('/api/faq', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        const msg = err?.error || `Failed to ${mode === 'edit' ? 'update' : 'create'} FAQ`;
        throw new Error(msg);
      }

      if (onSuccess) onSuccess();
      router.refresh();
      router.push('/admin/dashboard');
    } catch (err) {
      // @ts-ignore
      alert(String(err?.message ?? 'An error occurred'));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (mode !== 'edit' || !initialData?.id) return;
    if (!confirm('Are you sure you want to delete this FAQ? This cannot be undone.')) return;

    setDeleting(true);
    try {
      const res = await fetch(`/api/faq/${initialData.id}`, { method: 'DELETE' });
      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.error || 'Failed to delete FAQ');
      }

      if (onSuccess) onSuccess();
      router.refresh();
      router.push('/admin/dashboard');
    } catch (err) {
      // @ts-ignore
      alert(String(err?.message ?? 'Failed to delete FAQ'));
    } finally {
      setDeleting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto mt-4 space-y-6 p-6 bg-background rounded-xl shadow"
    >
      <div className="text-2xl font-bold mb-4 text-center">
        {mode === 'edit' ? 'Edit FAQ' : 'Create New FAQ'}
      </div>

      {/* Question */}
      <div className="space-y-2">
        <Label htmlFor="question">Question</Label>
        <EditorClient content={form.question} onChange={handleQuestionChange} showLinkUnlink />
      </div>

      {/* Answer */}
      <div className="space-y-2">
        <Label htmlFor="answer">Answer</Label>
        <EditorClient content={form.answer} onChange={handleAnswerChange} showLinkUnlink />
      </div>

      {/* Category */}
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <select
          id="category"
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
        >
          {faqCategoryOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Publish Status */}
      <div className="space-y-2">
        <Label htmlFor="publishStatus">Publish Status</Label>
        <select
          id="publishStatus"
          name="publishStatus"
          value={form.publishStatus}
          onChange={handleChange}
          className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
        >
          {publishOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4 w-full">
        <Button type="submit" disabled={loading} className="w-1/2 bg-[#9f004d]">
          {loading
            ? mode === 'edit'
              ? 'Updating...'
              : 'Creating...'
            : mode === 'edit'
            ? 'Update FAQ'
            : 'Create FAQ'}
        </Button>

        <Button type="button" onClick={onCancel} disabled={loading} className="w-1/2 bg-black">
          Cancel
        </Button>
      </div>

      {mode === 'edit' && (
        <div className="pt-2 border-t dark:border-gray-800">
          <Button
            type="button"
            onClick={handleDelete}
            disabled={deleting}
            className="w-full bg-red-700"
          >
            {deleting ? 'Deleting...' : 'Delete FAQ'}
          </Button>
        </div>
      )}
    </form>
  );
}
