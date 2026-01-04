'use client';

import React, { useEffect, useState } from 'react';

type YtVideo = {
  id: string;
  title?: string | null;
  description?: string | null;
  thumbnail?: string | null;
  publishedAt?: string | null;
  viewCount?: number | null;
  likeCount?: number | null;
  duration?: string | null;
};

const POSTS_PER_PAGE = 6; // 3 columns x 2 rows
const TRIM_LENGTH = 220;

export default function YouTubeSection() {
  const [allVideos, setAllVideos] = useState<YtVideo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchVideos() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch('/api/youtube-videos');
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || `HTTP ${res.status}`);
        }
        const json = await res.json();
        const raw: any[] = Array.isArray(json?.data) ? json.data : [];

        const normalized = raw
          .map((v: any) => {
            const id = String(v.id ?? v.videoId ?? '');
            if (!id) return null;
            const title = v.title ?? v.snippet?.title ?? null;
            const description = v.description ?? v.snippet?.description ?? null;
            const thumbnail =
              v.thumbnail ??
              v.snippet?.thumbnails?.high?.url ??
              v.snippet?.thumbnails?.medium?.url ??
              v.snippet?.thumbnails?.default?.url ??
              null;
            const publishedAt =
              v.publishedAt ??
              v.snippet?.publishedAt ??
              (v.published_at ? String(v.published_at) : null) ??
              null;

            return {
              id,
              title: typeof title === 'string' ? title : null,
              description: typeof description === 'string' ? description : null,
              thumbnail: typeof thumbnail === 'string' ? thumbnail : null,
              publishedAt: publishedAt ? String(publishedAt) : null,
              viewCount:
                typeof v.viewCount === 'number'
                  ? v.viewCount
                  : v.viewCount
                  ? Number(v.viewCount)
                  : null,
              likeCount:
                typeof v.likeCount === 'number'
                  ? v.likeCount
                  : v.likeCount
                  ? Number(v.likeCount)
                  : null,
              duration: v.duration ?? v.contentDetails?.duration ?? null,
            } as YtVideo;
          })
          .filter(Boolean) as YtVideo[];

        if (!mounted) return;

        if (normalized.length === 0) {
          setAllVideos([]);
          setError('No YouTube videos available.');
        } else {
          setAllVideos(normalized);
          setPage(1);
        }
      } catch (e: any) {
        if (!mounted) return;
        console.error('Failed to fetch YouTube videos', e);
        setError('Failed to load YouTube videos.');
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    }

    fetchVideos();

    return () => {
      mounted = false;
    };
  }, []);

  const totalPages = Math.max(1, Math.ceil(allVideos.length / POSTS_PER_PAGE));
  const paginated = allVideos.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <div className="w-full max-w-6xl mx-auto my-8 px-2">
      <div className="flex justify-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center drop-shadow-md dark:text-white">
          Latest YouTube Videos
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-6">
          <span className="text-muted-foreground text-lg">Loading...</span>
        </div>
      ) : error ? (
        <div className="text-center text-red-500 font-medium py-6">{error}</div>
      ) : allVideos.length === 0 ? (
        <div className="text-center text-slate-600 dark:text-slate-300 py-6">
          No videos to show.
        </div>
      ) : (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-4 md:p-6">
          <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {paginated.map((video) => (
                <YtVideoCard key={video.id} video={video} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center pt-6">
                <Pagination currentPage={page} totalPages={totalPages} setPage={setPage} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function YtVideoCard({ video }: { video: YtVideo }) {
  const trimmed =
    video.description && video.description.length > TRIM_LENGTH
      ? video.description.slice(0, TRIM_LENGTH) + '…'
      : video.description ?? '';

  const videoUrl = `https://www.youtube.com/watch?v=${encodeURIComponent(video.id)}`;

  return (
    <article
      className={`
        flex flex-col
        bg-gradient-to-tr from-red-50 to-red-100 dark:from-neutral-900 dark:to-neutral-800
        border border-red-200 dark:border-neutral-700
        rounded-2xl shadow-lg transition-all duration-300 transform
        hover:-translate-y-1 hover:scale-[1.015] hover:shadow-[0_6px_20px_0_rgba(210,48,48,0.12)]
        cursor-pointer group
        overflow-hidden
        w-full
      `}
      aria-label="YouTube video card"
    >
      {video.thumbnail ? (
        <img
          src={video.thumbnail}
          alt={video.title ? `${video.title} thumbnail` : 'Video thumbnail'}
          className="w-full object-cover rounded-t-2xl group-hover:shadow transition-shadow duration-300"
          style={{ height: '10.5rem', maxHeight: '10.5rem', minHeight: '10.5rem' }}
          loading="lazy"
        />
      ) : (
        <div
          className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-t-2xl flex items-center justify-center"
          style={{ minHeight: '10.5rem' }}
        >
          <span className="text-sm text-slate-500 dark:text-slate-400">No thumbnail</span>
        </div>
      )}

      <div className="flex flex-col p-3 md:p-4 pb-3 flex-1">
        <h3 className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-100 text-center mb-1">
          {video.title ?? 'Untitled'}
        </h3>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium text-center mb-2">
          published: {formatDate(video.publishedAt ?? '')}
        </span>

        <p className="text-gray-800 dark:text-gray-100 text-sm md:text-sm font-medium drop-shadow-sm mb-3 text-center whitespace-pre-line">
          {trimmed}
        </p>

        <div className="flex justify-center items-end mt-auto">
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full bg-red-600 dark:bg-red-500 text-white dark:text-gray-950 font-semibold shadow-sm transition hover:bg-red-700 dark:hover:bg-red-400 hover:scale-105 text-xs md:text-sm"
            aria-label="Watch on YouTube (opens in a new tab)"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </article>
  );
}

function Pagination({
  currentPage,
  totalPages,
  setPage,
}: {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}) {
  const prev = () => setPage(Math.max(1, currentPage - 1));
  const next = () => setPage(Math.min(totalPages, currentPage + 1));

  const renderPageNumbers = () => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + 4);
    if (end - start < 4) start = Math.max(1, end - 4);

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 rounded-lg font-semibold transition 
            ${
              i === currentPage
                ? 'bg-red-600 text-white dark:bg-red-400 dark:text-gray-900'
                : 'bg-red-100 dark:bg-neutral-700 text-red-800 dark:text-red-200 hover:bg-red-200 hover:dark:bg-neutral-600'
            }
          `}
          onClick={() => setPage(i)}
          disabled={i === currentPage}
          aria-current={i === currentPage ? 'page' : undefined}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <nav
      className="flex items-center bg-transparent shadow-none"
      aria-label="YouTube videos pagination"
    >
      <button
        onClick={prev}
        className="mx-1 px-3 py-1 rounded-lg font-semibold bg-red-100 dark:bg-neutral-700 text-red-800 dark:text-red-200 hover:bg-red-200 hover:dark:bg-neutral-600 transition"
        aria-label="Previous page"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        onClick={next}
        className="mx-1 px-3 py-1 rounded-lg font-semibold bg-red-100 dark:bg-neutral-700 text-red-800 dark:text-red-200 hover:bg-red-200 hover:dark:bg-neutral-600 transition"
        aria-label="Next page"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  );
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (!dateString || Number.isNaN(date.getTime())) return dateString || '';
  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
