'use client';

import React, { useState } from 'react';
import CreateInstitutionForm from '@/app/(admin)/admin/dashboard/createInstitutionForm';
import InstitutionView from '@/app/(admin)/admin/dashboard/components/views/institutionView';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { InstitutionWithRelations } from '@/app/(admin)/admin/dashboard/data-table/columns/institutions';

export default function InstitutionsSection({
  paginatedData,
  handleEdit,
  handleView,
  handleDelete,
}: {
  paginatedData: InstitutionWithRelations[];
  handleEdit: (record: InstitutionWithRelations) => void;
  handleView: (record: InstitutionWithRelations) => void;
  handleDelete: (id: string | number) => void;
}) {
  const [viewing, setViewing] = useState<InstitutionWithRelations | null>(null);
  const [openCreate, setOpenCreate] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div />
        <div className="flex items-center gap-2">
          <Button onClick={() => setOpenCreate(true)} className="bg-green-600 text-white">
            Create Institution
          </Button>
        </div>
      </div>

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
              {/* Only Logo */}
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

      {/* View dialog */}
      <Dialog open={!!viewing} onOpenChange={(val) => !val && setViewing(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Institution details</DialogTitle>
          </DialogHeader>
          {viewing && <InstitutionView data={viewing} onClose={() => setViewing(null)} />}
        </DialogContent>
      </Dialog>

      {/* Create dialog */}
      <Dialog open={openCreate} onOpenChange={(val) => !val && setOpenCreate(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Institution</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <CreateInstitutionForm
              mode="create"
              onSuccess={() => setOpenCreate(false)}
              onCancel={() => setOpenCreate(false)}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
