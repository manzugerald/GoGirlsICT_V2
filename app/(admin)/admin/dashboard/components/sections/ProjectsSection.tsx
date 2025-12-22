'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';

// Dynamically load the Tiptap JSON viewer (no SSR)
const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

export default function ProjectsSection({
  paginatedData,
  page,
  rowsPerPage,
  handleEdit,
  handleDelete,
  currentUserRole,
  TableActions,
  deleteId,
  deleteLoading,
  onToggleControls,
}: {
  paginatedData: any[];
  page: number;
  rowsPerPage: number;
  handleEdit: (record: any) => void;
  handleDelete: (id: string | number) => void;
  currentUserRole?: string;
  TableActions?: React.FC<any>;
  deleteId?: string | number | null;
  deleteLoading?: boolean;
  onToggleControls?: (hide: boolean) => void;
}) {
  const [viewing, setViewing] = useState<any | null>(null);

  // Debug: log incoming paginatedData
  useEffect(() => {
    console.log(
      '[ProjectsSection] paginatedData length:',
      Array.isArray(paginatedData) ? paginatedData.length : 0
    );
    if (Array.isArray(paginatedData) && paginatedData.length > 0) {
      console.log('[ProjectsSection] sample item:', paginatedData[0]);
    }
  }, [paginatedData]);

  // Notify parent to hide/show controls when viewing inline
  useEffect(() => {
    if (typeof onToggleControls === 'function') onToggleControls(!!viewing);
    return () => {
      if (typeof onToggleControls === 'function') onToggleControls(false);
    };
  }, [viewing, onToggleControls]);

  // Extract plain text from tiptap JSON structure
  function extractTextFromTiptap(node: any): string {
    if (!node) return '';
    if (typeof node === 'string') return node;
    let text = '';
    if (Array.isArray(node)) {
      for (const n of node) text += extractTextFromTiptap(n);
      return text;
    }
    if (typeof node === 'object') {
      if (typeof node.text === 'string') {
        text += node.text;
      }
      if (Array.isArray(node.content)) {
        for (const child of node.content) {
          text += extractTextFromTiptap(child);
        }
      }
      return text;
    }
    return '';
  }

  // build a preview text (~120 chars -> about 60 chars per line x 2 lines)
  function buildPreview(projectContent: any): string {
    if (projectContent == null) return '';
    let fullText = '';

    if (typeof projectContent === 'string') {
      // some items might store serialized tiptap JSON or plain text
      try {
        const parsed = JSON.parse(projectContent);
        if (parsed && typeof parsed === 'object') {
          fullText = extractTextFromTiptap(parsed);
        } else {
          fullText = projectContent;
        }
      } catch {
        fullText = projectContent;
      }
    } else if (typeof projectContent === 'object') {
      fullText = extractTextFromTiptap(projectContent);
    } else {
      fullText = String(projectContent);
    }

    fullText = fullText.replace(/\s+/g, ' ').trim();
    const maxChars = 120; // ~60 chars per line x 2 lines
    if (fullText.length <= maxChars) return fullText;
    return fullText.slice(0, maxChars).trim() + '...';
  }

  // Render full project details inline (title left-aligned, actions below meta)
  function renderFullProject(project: any) {
    const created = project.createdAt ? new Date(project.createdAt).toLocaleString() : '-';
    const updated = project.updatedAt ? new Date(project.updatedAt).toLocaleString() : '-';

    // Determine tiptap content (object or parsed string)
    let parsedContent: any = null;
    if (project.content && typeof project.content === 'object') {
      parsedContent = project.content;
    } else if (project.content && typeof project.content === 'string') {
      try {
        const maybe = JSON.parse(project.content);
        if (maybe && typeof maybe === 'object') parsedContent = maybe;
      } catch {
        parsedContent = null;
      }
    }

    const firstImage =
      Array.isArray(project.images) && project.images.length > 0 ? project.images[0] : null;

    return (
      <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
        <div>
          <h1 className="text-2xl font-semibold text-left">{project.title ?? 'Project'}</h1>
          <div className="text-sm text-gray-500 mt-2">
            By:{' '}
            {project.createdBy
              ? `${project.createdBy.firstName ?? ''} ${project.createdBy.lastName ?? ''}`.trim()
              : 'System'}{' '}
            · Created: {created} · Updated: {updated}
          </div>
        </div>

        {/* Actions inline (Download not typical for projects, so keep Edit/Delete here) */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              handleEdit(project);
            }}
          >
            Edit
          </Button>

          <Button
            size="sm"
            variant="destructive"
            onClick={async () => {
              await handleDelete(project.id);
              setViewing(null);
            }}
            disabled={Boolean(deleteLoading && deleteId === project.id)}
          >
            {deleteLoading && deleteId === project.id ? 'Deleting...' : 'Delete'}
          </Button>
        </div>

        <div>
          <div className="text-sm text-gray-500">Content</div>
          <div className="mt-2">
            {parsedContent ? (
              <div className="rounded border bg-white dark:bg-gray-900 p-3">
                <TiptapJsonViewer content={parsedContent} className="tiptap tiptap-view-only" />
              </div>
            ) : project.content ? (
              <div className="whitespace-pre-line">{String(project.content)}</div>
            ) : (
              <div className="text-sm text-muted">No content</div>
            )}
          </div>
        </div>

        {firstImage && (
          <div>
            <div className="text-sm text-gray-500 mb-2">Images</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {project.images.map((img: string) => (
                <img
                  key={img}
                  src={img}
                  alt="project"
                  className="w-full h-28 object-cover rounded border"
                />
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-500">
            Created: {created} · Updated: {updated}
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setViewing(null);
              }}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // When a project is selected to view inline, render it here (not a modal)
  if (viewing) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                setViewing(null);
              }}
            >
              ← Back
            </Button>
            {/* Title moved into renderFullProject to avoid duplication */}
          </div>

          {/* Actions moved into renderFullProject (below meta) */}
        </div>

        <div className="p-0">{renderFullProject(viewing)}</div>
      </div>
    );
  }

  // Default listing view (no inline project open)
  return (
    <>
      {/* Top "Create Project" button removed — creation is handled via dashboard "Add New" control */}

      <div className="space-y-4">
        {(!Array.isArray(paginatedData) || paginatedData.length === 0) && (
          <div className="text-center py-8 text-gray-500">No projects found.</div>
        )}

        {Array.isArray(paginatedData) &&
          paginatedData.map((project) => {
            const createdByLabel = project.createdBy
              ? `${project.createdBy.firstName ?? ''} ${project.createdBy.lastName ?? ''}`.trim()
              : 'System';
            const createdAt = project.createdAt
              ? new Date(project.createdAt).toLocaleString()
              : '-';

            const preview = buildPreview(project.content);

            return (
              <div
                key={project.id}
                className="p-4 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Clickable left area opens the Project inline view */}
                  <div
                    className="flex-1 min-w-0 cursor-pointer"
                    onClick={() => setViewing(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setViewing(project);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg truncate">
                        {project.title || 'Untitled Project'}
                      </h3>

                      <div className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">
                        {project.projectStatus ?? '-'}
                      </div>

                      <div className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">
                        {project.publishStatus ?? '-'}
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground mt-2">
                      {/* Two-line preview with ellipsis (approx 60 chars per line) */}
                      {preview ? (
                        <div
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                          className="text-sm text-gray-700 dark:text-gray-300"
                        >
                          {preview}
                        </div>
                      ) : (
                        <div className="text-sm text-muted">No content</div>
                      )}

                      <div className="text-xs text-gray-500 mt-2">
                        By: {createdByLabel} · Created: {createdAt}
                      </div>
                    </div>
                  </div>

                  {/* Actions on the right (same line, vertically centered) */}
                  <div className="flex items-center gap-2 min-w-max">
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        setViewing(project);
                      }}
                    >
                      View
                    </Button>

                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(project);
                      }}
                    >
                      Edit
                    </Button>

                    <Button
                      type="button"
                      size="sm"
                      variant="destructive"
                      onClick={async (e) => {
                        e.stopPropagation();
                        await handleDelete(project.id);
                      }}
                      disabled={Boolean(deleteLoading && deleteId === project.id)}
                    >
                      {deleteLoading && deleteId === project.id ? 'Deleting...' : 'Delete'}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* Optional TableActions component (kept for compatibility) */}
      <div className="mt-4">
        {TableActions ? (
          <TableActions data={paginatedData} columns={[]} tableRef={React.createRef()} />
        ) : null}
      </div>
    </>
  );
}
