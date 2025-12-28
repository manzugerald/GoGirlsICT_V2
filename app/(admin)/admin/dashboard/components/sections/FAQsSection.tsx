'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';

// JSON / Tiptap viewer (no SSR)
const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

type FAQWithRelations = {
  id: number;
  question: any;
  answer: any;
  category?: string;
  publishStatus?: string;
  createdAt?: string;
  updatedAt?: string;
  createdById?: string;
  updatedById?: string;
  approvedById?: string;
  createdBy?: { id: string; firstName?: string; lastName?: string; username?: string } | null;
  updatedBy?: { id: string; firstName?: string; lastName?: string; username?: string } | null;
  approvedBy?: { id: string; firstName?: string; lastName?: string; username?: string } | null;
};

export default function FAQsSection({
  paginatedData,
  handleEdit,
  handleDelete,
  onToggleControls,
}: {
  paginatedData: FAQWithRelations[];
  handleEdit: (record: FAQWithRelations) => void;
  handleDelete: (id: string | number) => void;
  onToggleControls?: (hide: boolean) => void;
}) {
  const [viewing, setViewing] = useState<FAQWithRelations | null>(null);

  useEffect(() => {
    if (typeof onToggleControls === 'function') onToggleControls(!!viewing);
    return () => {
      if (typeof onToggleControls === 'function') onToggleControls(false);
    };
  }, [viewing, onToggleControls]);

  // Helpers for parsing/rendering
  function tryParseMaybeString(v: any) {
    if (v == null) return null;
    if (typeof v !== 'string') return v;
    const s = v.trim();
    if (!s) return null;
    try {
      return JSON.parse(s);
    } catch {
      return s;
    }
  }

  function isTiptapDoc(obj: any): boolean {
    if (!obj || typeof obj !== 'object') return false;
    if (obj.type === 'doc') return true;
    if (Array.isArray(obj.content)) return true;
    if (typeof obj.content === 'object') return true;
    return false;
  }

  function extractTextFromTiptap(node: any): string {
    if (!node) return '';
    if (typeof node === 'string') return node;
    let text = '';
    if (Array.isArray(node)) {
      for (const n of node) text += extractTextFromTiptap(n);
      return text;
    }
    if (typeof node === 'object') {
      if (typeof node.text === 'string') text += node.text;
      if (Array.isArray(node.content))
        for (const child of node.content) text += extractTextFromTiptap(child);
      return text;
    }
    return '';
  }

  function buildPreviewFromJson(json: any, maxChars = 120) {
    const parsed = tryParseMaybeString(json);
    if (!parsed) return '';
    if (isTiptapDoc(parsed)) {
      const txt = extractTextFromTiptap(parsed);
      return (
        txt.replace(/\s+/g, ' ').trim().slice(0, maxChars) + (txt.length > maxChars ? '...' : '')
      );
    }
    if (typeof parsed === 'object') {
      // if object has 'text' or 'title' or 'question' keys try them
      const possible =
        parsed.text ??
        parsed.title ??
        parsed.question ??
        parsed.content ??
        (Array.isArray(parsed) ? parsed.join(' ') : undefined);
      if (possible) {
        if (typeof possible === 'object') {
          const s = JSON.stringify(possible);
          return s.slice(0, maxChars) + (s.length > maxChars ? '...' : '');
        }
        const s = String(possible);
        return (
          s.replace(/\s+/g, ' ').trim().slice(0, maxChars) + (s.length > maxChars ? '...' : '')
        );
      }
      // fallback pretty JSON snippet
      const s = JSON.stringify(parsed);
      return s.slice(0, maxChars) + (s.length > maxChars ? '...' : '');
    }
    return String(parsed).slice(0, maxChars) + (String(parsed).length > maxChars ? '...' : '');
  }

  function renderArbitraryJson(obj: any): React.ReactNode {
    if (obj == null) return <div className="text-sm text-gray-500">—</div>;
    if (Array.isArray(obj)) {
      return (
        <ul className="list-disc list-inside text-sm">
          {obj.map((it, i) => (
            <li key={i}>
              {typeof it === 'object' ? (
                <pre className="text-xs">{JSON.stringify(it, null, 2)}</pre>
              ) : (
                String(it)
              )}
            </li>
          ))}
        </ul>
      );
    }
    if (typeof obj !== 'object') {
      return <div className="whitespace-pre-line text-sm">{String(obj)}</div>;
    }
    // object: render keys
    return (
      <div className="space-y-2 text-sm">
        {Object.entries(obj).map(([k, v]) => (
          <div key={k}>
            <div className="text-xs font-medium text-gray-500">{k}</div>
            <div className="mt-1">
              {typeof v === 'object' ? (
                <pre className="text-xs">{JSON.stringify(v, null, 2)}</pre>
              ) : (
                String(v)
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  function renderFullFAQ(f: FAQWithRelations) {
    const parsedQuestion = tryParseMaybeString(f.question);
    const parsedAnswer = tryParseMaybeString(f.answer);

    return (
      <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-2xl font-semibold text-left">
              {/* If question is plain text or tiptap, try to extract a short heading */}
              {(() => {
                if (isTiptapDoc(parsedQuestion)) {
                  const txt = extractTextFromTiptap(parsedQuestion);
                  return txt ? txt.slice(0, 80) : 'FAQ';
                }
                if (typeof parsedQuestion === 'string') return parsedQuestion.slice(0, 80);
                if (typeof parsedQuestion === 'object') {
                  // try common keys
                  const maybe =
                    parsedQuestion.title ??
                    parsedQuestion.question ??
                    JSON.stringify(parsedQuestion);
                  return String(maybe).slice(0, 80);
                }
                return 'FAQ';
              })()}
            </h1>

            <div className="text-sm text-gray-500 mt-1">
              Category: {f.category ?? 'general'} · Status: {f.publishStatus ?? 'draft'} · Created:{' '}
              {f.createdAt ? new Date(f.createdAt).toLocaleString() : '-'}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                handleEdit(f);
              }}
            >
              Edit
            </Button>

            <Button
              size="sm"
              variant="destructive"
              onClick={async () => {
                await handleDelete(f.id);
                setViewing(null);
              }}
            >
              Delete
            </Button>
          </div>
        </div>

        <div className="p-0">
          <div className="rounded border bg-white dark:bg-gray-900 p-4 space-y-4">
            <div>
              <div className="text-sm font-medium mb-2">Question</div>
              {parsedQuestion ? (
                isTiptapDoc(parsedQuestion) ? (
                  <div className="prose dark:prose-invert">
                    <TiptapJsonViewer content={parsedQuestion} />
                  </div>
                ) : typeof parsedQuestion === 'object' ? (
                  renderArbitraryJson(parsedQuestion)
                ) : (
                  <div className="whitespace-pre-line">{String(parsedQuestion)}</div>
                )
              ) : (
                <div className="text-sm text-gray-500">No question</div>
              )}
            </div>

            <div>
              <div className="text-sm font-medium mb-2">Answer</div>
              {parsedAnswer ? (
                isTiptapDoc(parsedAnswer) ? (
                  <div className="prose dark:prose-invert">
                    <TiptapJsonViewer content={parsedAnswer} />
                  </div>
                ) : typeof parsedAnswer === 'object' ? (
                  renderArbitraryJson(parsedAnswer)
                ) : (
                  <div className="whitespace-pre-line">{String(parsedAnswer)}</div>
                )
              ) : (
                <div className="text-sm text-gray-500">No answer</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If viewing, render inline details
  if (viewing) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => setViewing(null)}>
              ← Back
            </Button>
          </div>
        </div>

        <div className="p-0">{renderFullFAQ(viewing)}</div>
      </div>
    );
  }

  // Default grid listing
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {(!Array.isArray(paginatedData) || paginatedData.length === 0) && (
          <div className="text-center py-8 col-span-3 text-gray-500">No FAQs found.</div>
        )}

        {Array.isArray(paginatedData) &&
          paginatedData.map((faq) => (
            <div
              key={faq.id}
              className="flex flex-col p-4 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow"
            >
              {/* Preview of question */}
              <div
                className="cursor-pointer"
                onClick={() => setViewing(faq)}
                role="button"
                tabIndex={0}
              >
                <div
                  className="font-medium text-lg truncate"
                  title={buildPreviewFromJson(faq.question, 200)}
                >
                  {buildPreviewFromJson(faq.question, 120) || 'Untitled FAQ'}
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Category: {faq.category ?? 'general'} · {faq.publishStatus ?? 'draft'}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 mt-4">
                <Button type="button" size="sm" variant="outline" onClick={() => setViewing(faq)}>
                  View
                </Button>
                <Button type="button" size="sm" variant="outline" onClick={() => handleEdit(faq)}>
                  Edit
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(faq.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
      </div>

      <div className="mt-4">{/* placeholder for TableActions if parent provides */}</div>
    </>
  );
}
