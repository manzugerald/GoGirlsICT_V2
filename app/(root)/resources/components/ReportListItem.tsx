import {
  ExternalLink,
  FileText,
} from 'lucide-react';

import type {
  ReportListItem as ReportListItemType,
} from '../data';

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

export default function ReportListItem({
  report,
}: {
  report: ReportListItemType;
}) {
  const file = getReportFile(
    report.files
  );

  const content = (
    <>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100 transition-colors group-hover:bg-red-600 group-hover:text-white dark:bg-red-500/10 dark:text-red-400 dark:ring-red-500/20 dark:group-hover:bg-red-500 dark:group-hover:text-white">
        <FileText className="h-6 w-6" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-site-primary transition-colors group-hover:text-[#9f004d] dark:group-hover:text-pink-400">
          {report.title}
        </span>

        <span className="caption mt-1 block text-site-secondary">
          {report.project?.title
            ? `${
                report.project.title
              } · ${formatDate(
                report.createdAt
              )}`
            : formatDate(
                report.createdAt
              )}
        </span>
      </span>

      {file && (
        <ExternalLink className="h-5 w-5 shrink-0 text-gray-400 transition group-hover:translate-x-0.5 group-hover:text-[#9f004d] dark:group-hover:text-pink-400" />
      )}
    </>
  );

  return (
    <li className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      {file ? (
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 px-5 py-5 transition-colors hover:bg-[#9f004d]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#9f004d] dark:hover:bg-pink-500/5 sm:px-6"
        >
          {content}
        </a>
      ) : (
        <div className="group flex items-center gap-4 px-5 py-5 opacity-75 sm:px-6">
          {content}
        </div>
      )}
    </li>
  );
}