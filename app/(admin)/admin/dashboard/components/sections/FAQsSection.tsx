'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';

// JSON / Tiptap viewer (no SSR) — keep available if you want the rich renderer later
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
  // Only one expanded FAQ at a time (store the expanded id or null)
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      if (typeof onToggleControls === 'function') onToggleControls(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleExpand(id: number) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  // When clicking anywhere in the card, toggle — except when the click originates from
  // interactive controls (buttons, links, inputs, selects, textareas) so Edit/Delete still work.
  function handleCardClick(e: React.MouseEvent, id: number) {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    // if the click originated from an interactive element, ignore
    const interactive = target.closest('button, a, input, textarea, select, [data-no-toggle]');
    if (interactive) return;
    toggleExpand(id);
  }

  function handleCardKeyDown(e: React.KeyboardEvent, id: number) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExpand(id);
    }
  }

  // Helpers for parsing/rich rendering
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
      const cleaned = txt.replace(/\s+/g, ' ').trim();
      return cleaned.slice(0, maxChars) + (cleaned.length > maxChars ? '...' : '');
    }
    if (typeof parsed === 'object') {
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
      const s = JSON.stringify(parsed);
      return s.slice(0, maxChars) + (s.length > maxChars ? '...' : '');
    }
    return String(parsed).slice(0, maxChars) + (String(parsed).length > maxChars ? '...' : '');
  }

  // Prefer plain text extraction for answers
  function getPlainTextFromMaybeDoc(value: any): string | null {
    const parsed = tryParseMaybeString(value);
    if (parsed == null) return null;

    if (isTiptapDoc(parsed)) {
      const txt = extractTextFromTiptap(parsed);
      return txt.replace(/\s+/g, ' ').trim();
    }

    if (typeof parsed === 'object') {
      if (typeof parsed.text === 'string') return parsed.text.trim();
      if (parsed.content) {
        const txt = extractTextFromTiptap(parsed.content);
        if (txt) return txt.replace(/\s+/g, ' ').trim();
      }
      if (typeof parsed.answer === 'string') return parsed.answer.trim();
      if (typeof parsed.description === 'string') return parsed.description.trim();
      if (typeof parsed.paragraph === 'string') return parsed.paragraph.trim();
      try {
        return JSON.stringify(parsed);
      } catch {
        return String(parsed);
      }
    }

    if (typeof parsed === 'string') return parsed.trim();
    return null;
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

  // Render the answer area (shown when card expanded) — ONLY the answer content
  function renderAnswerArea(faq: FAQWithRelations) {
    const plain = getPlainTextFromMaybeDoc(faq.answer);
    if (plain) {
      return <div className="mt-2 whitespace-pre-line text-sm text-foreground">{plain}</div>;
    }

    const parsedAnswer = tryParseMaybeString(faq.answer);
    if (!parsedAnswer) {
      return <div className="text-sm text-gray-500">No answer provided.</div>;
    }

    if (isTiptapDoc(parsedAnswer)) {
      return (
        <div className="prose dark:prose-invert mt-2">
          <TiptapJsonViewer content={parsedAnswer} />
        </div>
      );
    }

    return <div className="mt-2">{renderArbitraryJson(parsedAnswer)}</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 mb-6">
        {(!Array.isArray(paginatedData) || paginatedData.length === 0) && (
          <div className="text-center py-8 text-gray-500">No FAQs found.</div>
        )}

        {Array.isArray(paginatedData) &&
          paginatedData.map((faq) => {
            const isExpanded = expandedId === faq.id;
            const preview = buildPreviewFromJson(faq.question, 200) || 'Untitled FAQ';

            return (
              <div
                key={faq.id}
                // whole card is clickable — attach click/key handlers to the card root
                onClick={(e) => handleCardClick(e, faq.id)}
                onKeyDown={(e) => handleCardKeyDown(e, faq.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                className={`w-full border rounded-md bg-white dark:bg-gray-900 shadow-sm transition-all overflow-hidden cursor-pointer focus:outline-pink-500`}
              >
                {/* Question area — highlight when active to match sidebar active style */}
                <div
                  className={`p-4 flex items-start justify-between gap-4 ${
                    isExpanded ? 'bg-pink-100 dark:bg-pink-950 rounded-t-md' : ''
                  }`}
                >
                  <div className="min-w-0 w-full">
                    <div className="flex items-start gap-3 w-full">
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-lg truncate" title={preview}>
                          {preview}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Category: {faq.category ?? 'general'} · {faq.publishStatus ?? 'draft'}
                        </div>
                      </div>

                      {/* Larger + / − with primary color */}
                      <div className="flex-shrink-0 ml-3">
                        <span
                          aria-hidden
                          className={`text-2xl font-bold ${
                            isExpanded
                              ? 'text-pink-600 dark:text-pink-400'
                              : 'text-pink-600/80 dark:text-pink-400/80'
                          }`}
                          style={{ lineHeight: 1 }}
                        >
                          {isExpanded ? '−' : '+'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded content: ONLY the answer content (no "Question" / "Answer" headings) */}
                {isExpanded && (
                  <div
                    className={`px-4 pb-4 pt-0 border-t ${
                      isExpanded
                        ? 'border-pink-200 dark:border-pink-900'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <div className="py-2">
                      <div className="text-sm text-foreground">{renderAnswerArea(faq)}</div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e: React.MouseEvent) => {
                          // prevent the card click handler from firing when Edit button clicked
                          e.stopPropagation();
                          // hide parent controls (search / export / add) when editing
                          if (typeof onToggleControls === 'function') onToggleControls(true);
                          handleEdit(faq);
                        }}
                        data-no-toggle
                      >
                        Edit
                      </Button>

                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={async (e: React.MouseEvent) => {
                          e.stopPropagation(); // prevent toggling when deleting
                          await handleDelete(faq.id);
                          setExpandedId((prev) => (prev === faq.id ? null : prev));
                        }}
                        data-no-toggle
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>

      <div className="mt-4">{/* placeholder for TableActions if parent provides */}</div>
    </>
  );
}
