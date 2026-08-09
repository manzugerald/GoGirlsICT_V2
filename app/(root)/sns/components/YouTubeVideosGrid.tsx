'use client';

import {
  useEffect,
  useState,
} from 'react';

import {
  Clock,
  ExternalLink,
  Eye,
  Play,
} from 'lucide-react';

import {
  motion,
} from 'framer-motion';

type YouTubeVideo = {
  id: string;
  title: string | null;
  thumbnail: string | null;
  publishedAt: string | null;
  viewCount: number | null;
  duration: string | null;
};

const VIDEOS_TO_SHOW = 9;

export default function YouTubeVideosGrid() {
  const [videos, setVideos] =
    useState<YouTubeVideo[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const [
    expandedVideoId,
    setExpandedVideoId,
  ] = useState<string | null>(null);

  useEffect(() => {
    const controller =
      new AbortController();

    async function loadVideos() {
      try {
        const response = await fetch(
          '/api/youtube-videos',
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

        const rawVideos: any[] =
          Array.isArray(json?.data)
            ? json.data
            : [];

        const normalized =
          rawVideos
            .map(
              (
                video
              ): YouTubeVideo => ({
                id: String(
                  video.id ??
                    video.videoId ??
                    ''
                ),

                title:
                  video.title ??
                  video.snippet
                    ?.title ??
                  null,

                thumbnail:
                  video.thumbnail ??
                  video.snippet
                    ?.thumbnails
                    ?.high?.url ??
                  video.snippet
                    ?.thumbnails
                    ?.medium?.url ??
                  video.snippet
                    ?.thumbnails
                    ?.default?.url ??
                  null,

                publishedAt:
                  video.publishedAt ??
                  video.snippet
                    ?.publishedAt ??
                  null,

                viewCount:
                  video.viewCount !==
                    undefined &&
                  video.viewCount !==
                    null
                    ? Number(
                        video.viewCount
                      )
                    : null,

                duration:
                  video.duration ??
                  video.contentDetails
                    ?.duration ??
                  null,
              })
            )
            .filter(
              (video) => video.id
            )
            .slice(
              0,
              VIDEOS_TO_SHOW
            );

        setVideos(normalized);
      } catch (caughtError) {
        if (
          controller.signal.aborted
        ) {
          return;
        }

        console.error(
          'Failed to fetch YouTube videos',
          caughtError
        );

        setError(
          'Unable to load videos.'
        );
      } finally {
        if (
          !controller.signal.aborted
        ) {
          setLoading(false);
        }
      }
    }

    loadVideos();

    return () =>
      controller.abort();
  }, []);

  if (loading) {
    return (
      <div
        className="flex justify-center py-12"
        role="status"
        aria-label="Loading videos"
      >
        <div className="h-11 w-11 animate-spin rounded-full border-4 border-red-600 border-t-transparent" />
      </div>
    );
  }

  if (
    error ||
    videos.length === 0
  ) {
    return (
      <div className="py-12 text-center">
        <Play className="mx-auto mb-4 h-14 w-14 text-gray-300 dark:text-gray-600" />

        <p className="body text-site-muted">
          {error ||
            'No videos available yet.'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map(
        (video, index) => {
          const isExpanded =
            expandedVideoId ===
            video.id;

          function toggle() {
            setExpandedVideoId(
              (current) =>
                current === video.id
                  ? null
                  : video.id
            );
          }

          return (
            <motion.article
              key={video.id}
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
                  Math.min(
                    index,
                    8
                  ) * 0.05,
                duration: 0.35,
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-[transform,border-color,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:border-red-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-950">
                {isExpanded ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={
                      video.title ||
                      'YouTube video'
                    }
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={toggle}
                    aria-label={`Play ${video.title || 'video'}`}
                    className="absolute inset-0 h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  >
                    {video.thumbnail ? (
                      <img
                        src={
                          video.thumbnail
                        }
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Play className="h-10 w-10 text-gray-400" />
                      </div>
                    )}

                    <div className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors group-hover:bg-black/40">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover:scale-110">
                        <Play className="ml-0.5 h-5 w-5 fill-current" />
                      </span>
                    </div>

                    {video.duration && (
                      <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded bg-black/80 px-1.5 py-0.5 text-[11px] text-white">
                        <Clock className="h-3 w-3" />

                        {video.duration}
                      </span>
                    )}
                  </button>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <button
                  type="button"
                  onClick={toggle}
                  aria-expanded={
                    isExpanded
                  }
                  className="text-left"
                >
                  <h3
                    className={`font-semibold leading-6 text-gray-900 transition-[font-size] duration-300 dark:text-white ${
                      isExpanded
                        ? 'text-sm'
                        : 'line-clamp-2 text-sm group-hover:text-base'
                    }`}
                  >
                    {video.title ||
                      'Untitled Video'}
                  </h3>
                </button>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-gray-400 dark:text-gray-500">
                  <span className="flex items-center gap-2">
                    {video.viewCount !==
                      null &&
                      Number.isFinite(
                        video.viewCount
                      ) && (
                        <span className="flex items-center gap-1">
                          <Eye className="h-3.5 w-3.5" />

                          {video.viewCount.toLocaleString()}
                        </span>
                      )}

                    {video.publishedAt && (
                      <span>
                        {new Date(
                          video.publishedAt
                        ).toLocaleDateString(
                          'en-US',
                          {
                            month:
                              'short',
                            day: 'numeric',
                          }
                        )}
                      </span>
                    )}
                  </span>

                  {!isExpanded && (
                    <span className="inline-flex items-center gap-1 font-semibold uppercase tracking-[0.06em] text-red-600 dark:text-red-400">
                      Watch
                    </span>
                  )}
                </div>

                {isExpanded && (
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    Open on YouTube

                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          );
        }
      )}
    </div>
  );
}