'use client';

import React, { useEffect, useState } from 'react';
import InstitutionView from '@/app/(admin)/admin/dashboard/components/views/institutionView';
import { Button } from '@/components/ui/button';
import type { InstitutionWithRelations } from '@/app/(admin)/admin/dashboard/data-table/columns/institutions';

export default function InstitutionsSection({
  paginatedData,
  handleEdit,
  handleDelete,
  onToggleControls,
}: {
  paginatedData: InstitutionWithRelations[];
  handleEdit: (record: InstitutionWithRelations) => void;
  handleDelete: (id: string | number) => void;
  onToggleControls?: (hide: boolean) => void;
}) {
  const [viewing, setViewing] = useState<InstitutionWithRelations | null>(null);

  // Notify parent (dashboard) to hide/show controls when an institution is opened inline
  useEffect(() => {
    if (typeof onToggleControls === 'function') onToggleControls(!!viewing);
    return () => {
      if (typeof onToggleControls === 'function') onToggleControls(false);
    };
  }, [viewing, onToggleControls]);

  // Render full institution inline (uses InstitutionView component to keep existing rendering)
  // We show a Back button and inline Edit/Delete controls, and render the InstitutionView below them.
  function renderFullInstitution(inst: InstitutionWithRelations) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-left">{inst.name ?? 'Institution'}</h1>
            <div className="text-sm text-gray-500 mt-1">{inst.address ? inst.address : ''}</div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                handleEdit(inst);
              }}
            >
              Edit
            </Button>

            <Button
              size="sm"
              variant="destructive"
              onClick={async () => {
                await handleDelete(inst.id);
                setViewing(null);
              }}
            >
              Delete
            </Button>
          </div>
        </div>

        <div className="p-0">
          {/* InstitutionView renders the rest of the details (reused inline) */}
          <InstitutionView data={inst} onClose={() => setViewing(null)} />
        </div>
      </div>
    );
  }

  // If viewing, render inline details (not a modal)
  if (viewing) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => setViewing(null)}>
              ← Back
            </Button>
            {/* Title moved into renderFullInstitution to avoid duplication */}
          </div>
          {/* No top-right duplicate actions here — actions live under the title in renderFullInstitution */}
        </div>

        <div className="p-0">{renderFullInstitution(viewing)}</div>
      </div>
    );
  }

  // Default grid listing view (no top "Create" button - creation happens via Dashboard "Add a new ..." control)
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {(!Array.isArray(paginatedData) || paginatedData.length === 0) && (
          <div className="text-center py-8 col-span-3 text-gray-500">No institutions found.</div>
        )}
        {Array.isArray(paginatedData) &&
          paginatedData.map((institution) => (
            <div
              key={institution.id}
              className="flex flex-col items-center p-6 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow"
            >
              {/* Logo or placeholder */}
              {institution.logo ? (
                <img
                  src={institution.logo}
                  alt={institution.name || 'Institution logo'}
                  className="w-20 h-20 rounded-full object-cover border mb-2"
                />
              ) : (
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-muted border mb-2">
                  <span className="text-3xl font-bold text-muted-foreground">
                    {institution.name ? institution.name.charAt(0).toUpperCase() : '?'}
                  </span>
                </div>
              )}

              {/* Name, truncated */}
              <div
                className="font-medium text-lg text-center truncate w-40 mt-2"
                title={institution.name || 'Unnamed Institution'}
              >
                {institution.name || 'Unnamed Institution'}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 mt-4">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => setViewing(institution)}
                >
                  View
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(institution)}
                >
                  Edit
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(institution.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
      </div>

      {/* Optional TableActions component (kept for compatibility) */}
      <div className="mt-4">
        {/* If parent passes TableActions via props, it will be rendered by the parent wrapper — keep placeholder */}
      </div>
    </>
  );
}
