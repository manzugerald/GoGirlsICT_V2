"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import "@/assets/styles/tiptap-editor.css";
import { EMPTY_TIPTAP_DOC, normalizeTiptapDoc } from "@/lib/tiptap";
import { RichTextEditorProvider } from "@/components/editor/rich-text-context";
import RichTextToolbar from "@/components/editor/rich-text-toolbar";
import RichTextField from "@/components/editor/rich-text-field";

const categoryOptions = [
  "general",
  "beneficiaries",
  "institutions",
  "projects",
  "events",
  "reports",
  "technnology",
  "other",
] as const;
type FAQCategory = (typeof categoryOptions)[number];

const publishOptions = ["draft", "published"] as const;
type PublishStatus = (typeof publishOptions)[number];

type Mode = "create" | "edit";

interface FAQData {
  id?: string | number;
  question?: unknown;
  answer?: unknown;
  category?: FAQCategory;
  publishStatus?: PublishStatus;
}

interface CreateFAQFormProps {
  mode?: Mode;
  initialData?: FAQData;
  currentUserId?: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function CreateFAQForm({
  mode,
  initialData,
  currentUserId,
  onSuccess,
  onCancel,
}: CreateFAQFormProps) {
  const resolvedMode: Mode = mode ?? (initialData?.id ? "edit" : "create");

  const [question, setQuestion] = useState<object>(
    () => (initialData?.question ? normalizeTiptapDoc(initialData.question) : EMPTY_TIPTAP_DOC)
  );
  const [answer, setAnswer] = useState<object>(
    () => (initialData?.answer ? normalizeTiptapDoc(initialData.answer) : EMPTY_TIPTAP_DOC)
  );
  const [category, setCategory] = useState<FAQCategory>(initialData?.category ?? "general");
  const [publishStatus, setPublishStatus] = useState<PublishStatus>(
    initialData?.publishStatus ?? "draft"
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (resolvedMode === "edit" && initialData) {
      setQuestion(initialData.question ? normalizeTiptapDoc(initialData.question) : EMPTY_TIPTAP_DOC);
      setAnswer(initialData.answer ? normalizeTiptapDoc(initialData.answer) : EMPTY_TIPTAP_DOC);
      setCategory(initialData.category ?? "general");
      setPublishStatus(initialData.publishStatus ?? "draft");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedMode, initialData?.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const payload = {
        question,
        answer,
        category,
        publishStatus,
        createdById: currentUserId,
        updatedById: currentUserId,
        approvedById: currentUserId,
      };

      let res: Response;
      if (resolvedMode === "edit" && initialData?.id) {
        res = await fetch(`/api/faq/${initialData.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch("/api/faq", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || `Request failed (${res.status})`);
      }

      if (onSuccess) onSuccess();
    } catch (err: any) {
      setError(err?.message || "Unexpected error saving FAQ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto space-y-6 p-6 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded-xl shadow"
    >
      <h2 className="font-semibold text-xl mb-2">
        {resolvedMode === "edit" ? "Edit FAQ" : "Create New FAQ"}
      </h2>

      {/*
        One toolbar shared by both fields below: it acts on whichever of
        Question / Answer was last focused, instead of each field carrying
        its own separate toolbar.
      */}
      <RichTextEditorProvider key={initialData?.id ?? "new"}>
        <div className="tiptap-wrapper">
          <RichTextToolbar showLinkUnlink />

          <div className="space-y-2 p-3">
            <Label htmlFor="faq-question">Question</Label>
            <RichTextField
              content={question}
              onChange={setQuestion}
              placeholder="Type the question..."
            />
          </div>

          <div className="space-y-2 border-t border-gray-200 p-3 dark:border-gray-800">
            <Label htmlFor="faq-answer">Answer</Label>
            <RichTextField
              content={answer}
              onChange={setAnswer}
              placeholder="Type the answer..."
            />
          </div>
        </div>
      </RichTextEditorProvider>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="faq-category">Category</Label>
          <select
            id="faq-category"
            value={category}
            onChange={(e) => setCategory(e.target.value as FAQCategory)}
            className="w-full border border-input rounded-md p-2 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200"
          >
            {categoryOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="faq-status">Publish Status</Label>
          <select
            id="faq-status"
            value={publishStatus}
            onChange={(e) => setPublishStatus(e.target.value as PublishStatus)}
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

      {error && <div className="text-sm text-red-600">{error}</div>}

      <div className="flex gap-3">
        <Button
          type="submit"
          disabled={loading}
          className="flex-1 bg-[#9f004d] hover:bg-[#7c003c] text-white"
        >
          {loading
            ? resolvedMode === "edit"
              ? "Updating..."
              : "Creating..."
            : resolvedMode === "edit"
            ? "Update FAQ"
            : "Create FAQ"}
        </Button>
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            className="flex-1 border-[#9f004d] text-[#9f004d] hover:bg-[#f5e3ec]"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}
