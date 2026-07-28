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

const VIDEOS_TO_SHOW = 3;

export default function YouTubeVideosGrid() {
  const [videos, setVideos] =
    useState<YouTubeVideo[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const [
    hoveredVideoId,
    setHoveredVideoId,
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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map(
        (video, index) => {
          const isHovered =
            hoveredVideoId ===
            video.id;

          return (
            <motion.article
              key={video.id}
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: isHovered
                  ? -7
                  : 0,
              }}
              transition={{
                delay:
                  index * 0.07,
                duration: 0.35,
              }}
              onMouseEnter={() =>
                setHoveredVideoId(
                  video.id
                )
              }
              onMouseLeave={() =>
                setHoveredVideoId(
                  null
                )
              }
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
                  {video.thumbnail ? (
                    <motion.img
                      src={
                        video.thumbnail
                      }
                      alt={
                        video.title ||
                        'YouTube video thumbnail'
                      }
                      animate={{
                        scale:
                          isHovered
                            ? 1.07
                            : 1,
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Play className="h-12 w-12 text-gray-400" />
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/45">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition-transform group-hover:scale-110">
                      <Play className="ml-1 h-7 w-7 fill-current" />
                    </span>
                  </div>

                  {video.duration && (
                    <span className="caption absolute bottom-2 right-2 flex items-center gap-1 rounded bg-black/80 px-2 py-1 text-white">
                      <Clock className="h-3 w-3" />

                      {video.duration}
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="body line-clamp-2 font-semibold text-site-primary transition-colors group-hover:text-red-600 dark:group-hover:text-red-400">
                    {video.title ||
                      'Untitled Video'}
                  </h3>

                  <div className="caption mt-3 flex flex-wrap items-center gap-3 text-site-muted">
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
                            year: 'numeric',
                          }
                        )}
                      </span>
                    )}
                  </div>

                  <span className="caption mt-4 inline-flex items-center gap-2 font-semibold text-red-600 dark:text-red-400">
                    Watch video

                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            </motion.article>
          );
        }
      )}
    </div>
  );
}