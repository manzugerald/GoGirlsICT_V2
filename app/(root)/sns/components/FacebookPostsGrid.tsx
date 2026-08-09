'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Facebook,
} from 'lucide-react';
import { motion } from 'framer-motion';

type FbPost = {
  id: string;
  message: string | null;
  createdTime: string;
  permalinkUrl: string;
  fullPicture: string | null;
};

const POSTS_TO_SHOW = 9;

function formatDate(dateString: string) {
  return new Date(
    dateString
  ).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function FacebookPostsGrid() {
  const [posts, setPosts] = useState<
    FbPost[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState<
    string | null
  >(null);

  useEffect(() => {
    const controller =
      new AbortController();

    async function loadPosts() {
      try {
        const response = await fetch(
          '/api/facebook-posts',
          {
            signal:
              controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(
            `HTTP ${response.status}`
          );
        }

        const json =
          await response.json();

        const rawPosts: any[] =
          Array.isArray(json?.data)
            ? json.data
            : [];

        const normalized = rawPosts
          .filter(
            (post) =>
              post.fullPicture
          )
          .map(
            (post): FbPost => ({
              id: String(post.id),
              message:
                post.message ?? null,
              createdTime:
                post.createdTime,
              permalinkUrl:
                post.permalinkUrl,
              fullPicture:
                post.fullPicture,
            })
          )
          .slice(0, POSTS_TO_SHOW);

        setPosts(normalized);
      } catch (caughtError) {
        if (
          controller.signal.aborted
        ) {
          return;
        }

        console.error(
          'Failed to fetch Facebook posts',
          caughtError
        );

        setError(
          'Unable to load posts.'
        );
      } finally {
        if (
          !controller.signal.aborted
        ) {
          setLoading(false);
        }
      }
    }

    loadPosts();

    return () =>
      controller.abort();
  }, []);

  if (loading) {
    return (
      <div
        className="flex justify-center py-12"
        role="status"
        aria-label="Loading posts"
      >
        <div className="h-11 w-11 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div className="py-12 text-center">
        <Facebook className="mx-auto mb-4 h-14 w-14 text-gray-300 dark:text-gray-600" />

        <p className="body text-site-muted">
          {error ||
            'No posts available yet.'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{
            opacity: 0,
            y: 20,
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
            delay:
              Math.min(index, 8) *
              0.05,
            duration: 0.35,
          }}
        >
          <Link
            href={`/sns/post/${post.id}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-[transform,border-color,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-gray-800 dark:bg-gray-900 dark:focus-visible:ring-offset-gray-950"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
              {post.fullPicture && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={
                    post.fullPicture
                  }
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
                />
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2 p-4">
              {post.message && (
                <p className="line-clamp-3 text-sm leading-6 text-gray-700 transition-[font-size] duration-300 group-hover:text-[15px] dark:text-gray-300">
                  {post.message}
                </p>
              )}

              <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {formatDate(
                    post.createdTime
                  )}
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.06em] text-blue-600 transition-transform group-hover:translate-x-0.5 dark:text-blue-400">
                  Read

                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
