'use client';

import React from 'react';

export default function ConfirmModal({
  open,
  title,
  description,
  confirmLabel = 'Delete',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
}: {
  open: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="fixed inset-0 bg-black/40" onClick={onCancel} />

      <div className="relative z-10 w-full max-w-lg bg-white dark:bg-slate-800 rounded-lg shadow-lg border dark:border-slate-700">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
          {description ? (
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{description}</p>
          ) : null}

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100"
              onClick={onCancel}
            >
              {cancelLabel}
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white"
              onClick={onConfirm}
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
