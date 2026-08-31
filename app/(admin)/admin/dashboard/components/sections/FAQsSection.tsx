'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { normalizeTiptapDoc, tiptapExcerpt } from '@/lib/tiptap';
import '@/assets/styles/tiptap-editor.css';

const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

type FAQWithRelations = {
  id: number;
  question: unknown;
  answer: unknown;
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

  // Render the answer area (shown when card expanded) — always the rich
  // Tiptap viewer; normalizeTiptapDoc guarantees a shape ProseMirror can
  // parse even for legacy/malformed data.
  function renderAnswerArea(faq: FAQWithRelations) {
    return (
      <div className="mt-2">
        <TiptapJsonViewer content={normalizeTiptapDoc(faq.answer)} />
      </div>
    );
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
            const preview = tiptapExcerpt(faq.question, 200) || 'Untitled FAQ';

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
