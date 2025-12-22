'use client';

import React, { useState } from 'react';
import ProjectView from '@/app/(admin)/admin/dashboard/components/views/projectView';
import CreateProjectForm from '@/app/(admin)/admin/dashboard/createProjectForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

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
}) {
  const [viewing, setViewing] = useState<any | null>(null);
  const [openCreate, setOpenCreate] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div />
        <div className="flex items-center gap-2">
          <Button onClick={() => setOpenCreate(true)} className="bg-green-600 text-white">
            Create Project
          </Button>
        </div>
      </div>

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

            // Short snippet for content
            let snippet = '-';
            if (project.content !== undefined && project.content !== null) {
              if (typeof project.content === 'string') {
                snippet = project.content;
              } else {
                try {
                  // try JSON -> string
                  snippet = JSON.stringify(project.content);
                } catch {
                  snippet = String(project.content);
                }
              }
            }

            return (
              <div
                key={project.id}
                className="p-4 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Clickable left area opens the ProjectView */}
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
                      <div className="truncate">{snippet === '-' ? '-' : snippet}</div>
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

      {/* View dialog */}
      <Dialog open={!!viewing} onOpenChange={(val) => !val && setViewing(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Project details</DialogTitle>
          </DialogHeader>
          {viewing && <ProjectView data={viewing} onClose={() => setViewing(null)} />}
        </DialogContent>
      </Dialog>

      {/* Create dialog */}
      <Dialog open={openCreate} onOpenChange={(val) => !val && setOpenCreate(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <CreateProjectForm
              mode="create"
              onSuccess={() => {
                setOpenCreate(false);
              }}
              onCancel={() => setOpenCreate(false)}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
