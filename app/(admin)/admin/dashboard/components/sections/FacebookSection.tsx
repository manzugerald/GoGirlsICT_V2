'use client';

import React, { useEffect, useState } from 'react';

type FbPost = {
  id: string;
  message?: string | null;
  createdTime: string;
  permalinkUrl: string;
  fullPicture?: string | null;
  images?: string[] | null;
};

const POSTS_PER_PAGE = 6; // 3 columns x 2 rows
const TRIM_LENGTH = 200;

export default function FacebookSection() {
  const [allPosts, setAllPosts] = useState<FbPost[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchPosts() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/facebook-posts');
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || `HTTP ${res.status}`);
        }
        const json = await res.json();
        const raw: any[] = Array.isArray(json?.data) ? json.data : [];

        const withImages = raw
          .map((p: any) => {
            const id = String(p.id ?? '');
            const msg = p.message ?? null;
            const createdTime = p.createdTime
              ? String(p.createdTime)
              : String(p.created_time ?? '');
            const permalinkUrl = String(p.permalinkUrl ?? p.permalink_url ?? '#');
            let image = p.fullPicture ?? p.full_picture ?? null;
            if (!image && Array.isArray(p.images) && p.images.length > 0) {
              image = p.images[0];
            }
            if (!id) return null;
            return {
              id,
              message: typeof msg === 'string' ? msg : null,
              createdTime,
              permalinkUrl,
              fullPicture: image ?? null,
              images: Array.isArray(p.images) ? p.images : null,
            } as FbPost;
          })
          .filter(Boolean) as FbPost[];

        if (!mounted) return;
        if (withImages.length === 0) {
          setAllPosts([]);
          setError('No Facebook posts available.');
        } else {
          setAllPosts(withImages);
          setPage(1);
        }
      } catch (e: any) {
        if (!mounted) return;
        console.error('Failed to fetch facebook posts', e);
        setError('Failed to load Facebook posts.');
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    }

    fetchPosts();

    return () => {
      mounted = false;
    };
  }, []);

  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const paginated = allPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <div className="w-full max-w-6xl mx-auto my-8 px-2">
      <div className="flex justify-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center drop-shadow-md dark:text-white">
          Latest Facebook Feed
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-6">
          <span className="text-muted-foreground text-lg">Loading...</span>
        </div>
      ) : error ? (
        <div className="text-center text-red-500 font-medium py-6">{error}</div>
      ) : allPosts.length === 0 ? (
        <div className="text-center text-slate-600 dark:text-slate-300 py-6">No posts to show.</div>
      ) : (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-4 md:p-6">
          <div className="w-full max-w-5xl mx-auto">
            {/* Grid: 3 columns on md+, 2 on sm, 1 on xs. Two rows are enforced by POSTS_PER_PAGE = 6 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {paginated.map((post) => (
                <FbPostCard key={post.id} post={post} />
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

function FbPostCard({ post }: { post: FbPost }) {
  const trimmed =
    post.message && post.message.length > TRIM_LENGTH
      ? post.message.slice(0, TRIM_LENGTH) + '…'
      : post.message ?? '';

  return (
    <article
      className={`
        flex flex-col
        bg-gradient-to-tr from-blue-50 to-indigo-100 dark:from-neutral-900 dark:to-neutral-800
        border border-indigo-200 dark:border-neutral-700
        rounded-2xl shadow-lg transition-all duration-300 transform
        hover:-translate-y-1 hover:scale-[1.015] hover:shadow-[0_6px_20px_0_rgba(31,38,135,0.12)]
        cursor-pointer group
        overflow-hidden
        w-full
      `}
      aria-label="Facebook post card"
    >
      {post.fullPicture ? (
        <img
          src={post.fullPicture}
          alt="Facebook post image"
          className="w-full object-cover rounded-t-2xl group-hover:shadow transition-shadow duration-300"
          style={{ height: '10.5rem', maxHeight: '10.5rem', minHeight: '10.5rem' }}
          loading="lazy"
        />
      ) : (
        <div
          className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-t-2xl flex items-center justify-center"
          style={{ minHeight: '10.5rem' }}
        >
          <span className="text-sm text-slate-500 dark:text-slate-400">No image</span>
        </div>
      )}

      <div className="flex flex-col p-3 md:p-4 pb-3 flex-1">
        <div className="mb-1 flex flex-col items-center">
          <span className="font-semibold text-pink-600 dark:text-pink-400 text-sm md:text-base text-center">
            GoGirls ICT Initiative
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1 text-center">
            posted on: {formatDate(post.createdTime)}
          </span>
        </div>

        <p className="text-gray-800 dark:text-gray-100 text-sm md:text-sm font-medium drop-shadow-sm mb-3 text-center whitespace-pre-line">
          {trimmed}
        </p>

        <div className="flex justify-center items-end mt-auto">
          <a
            href={post.permalinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-950 font-semibold shadow-sm transition hover:bg-blue-700 dark:hover:bg-blue-400 hover:scale-105 text-xs md:text-sm"
            aria-label="Read on Facebook (opens in a new tab)"
          >
            Read on Facebook
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
                ? 'bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900'
                : 'bg-blue-100 dark:bg-neutral-700 text-blue-800 dark:text-blue-200 hover:bg-blue-200 hover:dark:bg-neutral-600'
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
      aria-label="Facebook posts pagination"
    >
      <button
        onClick={prev}
        className="mx-1 px-3 py-1 rounded-lg font-semibold bg-blue-100 dark:bg-neutral-700 text-blue-800 dark:text-blue-200 hover:bg-blue-200 hover:dark:bg-neutral-600 transition"
        aria-label="Previous page"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        onClick={next}
        className="mx-1 px-3 py-1 rounded-lg font-semibold bg-blue-100 dark:bg-neutral-700 text-blue-800 dark:text-blue-200 hover:bg-blue-200 hover:dark:bg-neutral-600 transition"
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
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
