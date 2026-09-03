import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import {
  ArrowLeft,
  FolderOpen,
} from 'lucide-react';

import { getReportBySlugOrId } from '../data';

import ReportDetailViewer from '../components/ReportDetailViewer';
import { extractPlainText } from '@/lib/tiptap';

// ISR: this specific report's path gets targeted directly by
// revalidatePath() when it's edited — same trigger as ../page.tsx.
export const revalidate = 3600;

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

function formatDate(date: Date) {
  return date.toLocaleDateString(
    'en-US',
    {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const report = await getReportBySlugOrId(
    slug
  );

  return {
    title: report
      ? report.title
      : 'Report Not Found',

    description:
      'A published report from GoGirls ICT Initiative.',
  };
}

export default async function ReportDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = await getReportBySlugOrId(
    slug
  );

  if (!report) {
    notFound();
  }

  const file = getReportFile(
    report.files
  );

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <div className="mx-auto w-[90%] max-w-4xl py-14 sm:py-20">
        <Link
          href="/reports"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-[#9f004d] dark:text-gray-300 dark:hover:text-pink-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Reports
        </Link>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400 dark:text-gray-500">
            {formatDate(
              report.createdAt
            )}
          </p>

          <h1 className="mt-2 font-serif text-2xl font-semibold leading-tight text-gray-900 dark:text-white sm:text-3xl">
            {report.title}
          </h1>

          {report.project && (
            <Link
              href={`/programs/${report.project.slug}`}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#9f004d]/10 px-3 py-1.5 text-xs font-semibold text-[#9f004d] transition-colors hover:bg-[#9f004d]/15 dark:bg-pink-500/10 dark:text-pink-400"
            >
              <FolderOpen className="h-3.5 w-3.5" />
              Related project:{' '}
              {extractPlainText(report.project.title)}
            </Link>
          )}
        </header>

        <div className="mt-8">
          <ReportDetailViewer
            reportId={report.id}
            title={report.title}
            file={file}
            initialAccessCount={
              report.accessCount
            }
            initialDownloadCount={
              report.downloadCount
            }
          />
        </div>
      </div>
    </main>
  );
}
