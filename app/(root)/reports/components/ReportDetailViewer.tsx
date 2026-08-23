'use client';

import { useEffect, useState } from 'react';
import { Download, Eye } from 'lucide-react';

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
    return null;
  }
}

export default function ReportDetailViewer({
  reportId,
  title,
  file,
  initialAccessCount,
  initialDownloadCount,
}: {
  reportId: number;
  title: string;
  file: string | null;
  initialAccessCount: number;
  initialDownloadCount: number;
}) {
  const [accessCount, setAccessCount] =
    useState(initialAccessCount);

  const [
    downloadCount,
    setDownloadCount,
  ] = useState(initialDownloadCount);

  useEffect(() => {
    let cancelled = false;

    incrementCount(
      reportId,
      'increment-access'
    ).then((count) => {
      if (!cancelled && count !== null) {
        setAccessCount(count);
      }
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reportId]);

  function handleDownload() {
    setDownloadCount(
      (count) => count + 1
    );

    incrementCount(
      reportId,
      'increment-download'
    ).then((count) => {
      if (count !== null) {
        setDownloadCount(count);
      }
    });
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
          <span className="inline-flex items-center gap-1.5">
            <Eye
              aria-hidden="true"
              className="h-3.5 w-3.5"
            />
            {accessCount.toLocaleString()}{' '}
            views
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Download
              aria-hidden="true"
              className="h-3.5 w-3.5"
            />
            {downloadCount.toLocaleString()}{' '}
            downloads
          </span>
        </div>

        {file && (
          <a
            href={file}
            download
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-full bg-[#9f004d] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#8a0042]"
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </a>
        )}
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-950">
        {file ? (
          <iframe
            src={`${file}#toolbar=0&navpanes=0`}
            title={title}
            className="h-[75vh] w-full"
          />
        ) : (
          <p className="p-10 text-center text-sm text-gray-500 dark:text-gray-400">
            This report&apos;s file is
            currently unavailable.
          </p>
        )}
      </div>
    </div>
  );
}
