'use client';

import {
  AlertCircle,
  RefreshCw,
} from 'lucide-react';

export default function TeamErrorState() {
  return (
    <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center rounded-3xl border border-red-200 bg-red-50 px-6 py-16 text-center dark:border-red-900/60 dark:bg-red-950/20">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
        <AlertCircle className="h-8 w-8" />
      </div>

      <h2 className="heading-3 mt-5 text-site-primary">
        We could not load the team
      </h2>

      <p className="body mt-2 max-w-lg text-site-secondary">
        The team directory is temporarily
        unavailable. Refresh the page to try
        loading it again.
      </p>

      <button
        type="button"
        onClick={() => window.location.reload()}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#9f004d] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#870041]"
      >
        <RefreshCw className="h-4 w-4" />
        Refresh page
      </button>
    </div>
  );
}