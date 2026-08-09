'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Download,
  Eye,
  FileText,
} from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import type { ReportSummary } from '../data';

function getReportFile(
  files: unknown
): string | null {
  if (!Array.isArray(files)) {
    return null;
  }

  const file = files.find(
    (value): value is string =>
      typeof value === 'string' &&
      value.trim().length > 0
  );

  return file ?? null;
}

function getCoverImage(
  images: unknown
): string | null {
  if (!Array.isArray(images)) {
    return null;
  }

  const image = images.find(
    (value): value is string =>
      typeof value === 'string' &&
      value.trim().length > 0
  );

  return image ?? null;
}

function formatDate(
  date: Date | string
) {
  return new Date(
    date
  ).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

async function incrementCount(
  reportId: number,
  action: 'increment-access' | 'increment-download'
): Promise<number | null> {
  try {
    const response = await fetch(
      `/api/reports/${reportId}/${action}`,
      { method: 'POST' }
    );

    if (!response.ok) {
      return null;
    }

    const data =
      await response.json();

    return action === 'increment-access'
      ? (data.accessCount ?? null)
      : (data.downloadCount ?? null);
  } catch {
    /*
     * View/download tracking is best-effort and should
     * never block the reader from opening or saving the file.
     */
    return null;
  }
}

export default function ReportCard({
  report,
  index,
}: {
  report: ReportSummary;
  index: number;
}) {
  const file = getReportFile(
    report.files
  );

  const cover = getCoverImage(
    report.images
  );

  const [accessCount, setAccessCount] =
    useState(report.accessCount);

  const [
    downloadCount,
    setDownloadCount,
  ] = useState(report.downloadCount);

  function handleView() {
    setAccessCount(
      (count) => count + 1
    );

    incrementCount(
      report.id,
      'increment-access'
    ).then((count) => {
      if (count !== null) {
        setAccessCount(count);
      }
    });
  }

  function handleDownload() {
    setDownloadCount(
      (count) => count + 1
    );

    incrementCount(
      report.id,
      'increment-download'
    ).then((count) => {
      if (count !== null) {
        setDownloadCount(count);
      }
    });
  }

  const meta = report.project?.title
    ? `${report.project.title} · ${formatDate(report.createdAt)}`
    : formatDate(report.createdAt);

  return (
    <Dialog>
      <motion.li
        initial={{
          opacity: 0,
          y: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-60px',
        }}
        transition={{
          delay: Math.min(index, 8) * 0.04,
          duration: 0.35,
        }}
        className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-[#9f004d]/30 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
      >
        {/* Thumbnail */}
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
          {cover ? (
            <Image
              src={cover}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400">
              <FileText
                aria-hidden="true"
                className="h-8 w-8"
              />
            </div>
          )}
        </div>

        {/* Title and meta */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-serif text-[length:calc(1rem*var(--font-scale))] font-semibold leading-tight text-gray-900 dark:text-white">
            {report.title}
          </h3>

          <p className="truncate text-[length:calc(0.75rem*var(--font-scale))] text-gray-500 dark:text-gray-400">
            {meta}
          </p>
        </div>

        {/* Stats */}
        <div className="hidden shrink-0 items-center gap-3 text-[length:calc(0.75rem*var(--font-scale))] font-medium text-gray-400 dark:text-gray-500 sm:flex">
          <span className="inline-flex items-center gap-1">
            <Eye
              aria-hidden="true"
              className="h-3.5 w-3.5"
            />

            {accessCount.toLocaleString()}
          </span>

          <span className="inline-flex items-center gap-1">
            <Download
              aria-hidden="true"
              className="h-3.5 w-3.5"
            />

            {downloadCount.toLocaleString()}
          </span>
        </div>

        {/* Actions */}
        {file ? (
          <div className="flex shrink-0 items-center gap-2">
            <DialogTrigger asChild>
              <button
                type="button"
                onClick={handleView}
                className="inline-flex items-center gap-1 rounded-full bg-[#9f004d]/10 px-3 py-1.5 text-[length:calc(0.75rem*var(--font-scale))] font-semibold text-[#9f004d] transition-colors hover:bg-[#9f004d]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f004d] focus-visible:ring-offset-2 dark:bg-pink-500/10 dark:text-pink-400 dark:hover:bg-pink-500/15 dark:focus-visible:ring-offset-gray-900"
              >
                View
              </button>
            </DialogTrigger>

            <a
              href={file}
              download
              onClick={handleDownload}
              aria-label={`Download ${report.title}`}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-[#9f004d]/30 hover:text-[#9f004d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f004d] focus-visible:ring-offset-2 dark:border-gray-700 dark:text-gray-400 dark:hover:border-pink-500/30 dark:hover:text-pink-400 dark:focus-visible:ring-offset-gray-900"
            >
              <Download className="h-3.5 w-3.5" />
            </a>
          </div>
        ) : (
          <span className="shrink-0 text-[length:calc(0.75rem*var(--font-scale))] font-medium text-gray-400 dark:text-gray-500">
            File unavailable
          </span>
        )}
      </motion.li>

      {file && (
        <DialogContent className="flex h-[85vh] w-full max-w-4xl flex-col gap-0 overflow-hidden p-0">
          <DialogHeader className="flex-row items-center justify-between gap-4 border-b border-gray-200 py-4 pl-6 pr-12 text-left dark:border-gray-800">
            <div className="min-w-0">
              <DialogTitle className="truncate font-serif text-[length:calc(1.25rem*var(--font-scale))]">
                {report.title}
              </DialogTitle>

              <DialogDescription className="text-[length:calc(0.875rem*var(--font-scale))]">
                {meta}
              </DialogDescription>
            </div>

            <a
              href={file}
              download
              onClick={handleDownload}
              aria-label={`Download ${report.title}`}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-[length:calc(0.75rem*var(--font-scale))] font-semibold text-gray-600 transition-colors hover:border-[#9f004d]/30 hover:text-[#9f004d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f004d] focus-visible:ring-offset-2 dark:border-gray-700 dark:text-gray-300 dark:hover:border-pink-500/30 dark:hover:text-pink-400 dark:focus-visible:ring-offset-gray-900"
            >
              <Download className="h-3.5 w-3.5" />
              Download
            </a>
          </DialogHeader>

          <div className="flex-1 overflow-hidden bg-gray-100 dark:bg-gray-950">
            <iframe
              src={`${file}#toolbar=0&navpanes=0`}
              title={report.title}
              className="h-full w-full"
            />
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
