'use client';

import React from 'react';
import { User as UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BeneficiariesSection({
  paginatedData,
  handleEdit,
  handleView,
  handleDelete,
}: {
  paginatedData: any[];
  handleEdit: (record: any) => void;
  handleView: (record: any) => void;
  handleDelete: (id: string | number) => void;
}) {
  return (
    <div className="space-y-4">
      {(!Array.isArray(paginatedData) || paginatedData.length === 0) && (
        <div className="text-center py-8 text-gray-500">No beneficiaries found.</div>
      )}
      {Array.isArray(paginatedData) &&
        paginatedData.map((beneficiary) => (
          <div
            key={beneficiary.id}
            className="p-4 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center justify-between gap-4">
              {/* Left: Beneficiary profile */}
              <div className="flex-1 min-w-0 flex items-center gap-3">
                {beneficiary.image ? (
                  <img
                    src={beneficiary.image}
                    alt={beneficiary.firstName || beneficiary.lastName || 'avatar'}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted border">
                    <UserIcon className="w-7 h-7 text-muted-foreground" />
                  </div>
                )}
                <div className="flex flex-col min-w-0">
                  <div className="font-medium text-lg truncate">
                    {beneficiary.firstName || beneficiary.lastName
                      ? `${beneficiary.firstName ?? ''} ${beneficiary.lastName ?? ''}`.trim()
                      : 'Unknown'}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">{beneficiary.gender}</div>
                  <div className="text-sm text-muted-foreground truncate">{beneficiary.phone}</div>
                  <div className="text-sm text-muted-foreground truncate">{beneficiary.email}</div>
                </div>
              </div>
              {/* Right: Actions, centered vertically */}
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => handleView(beneficiary)}
                >
                  View
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(beneficiary)}
                >
                  Edit
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(beneficiary.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
