'use client';

import { useEffect, useState } from 'react';
import { Play, ExternalLink, Clock, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

type YtVideo = {
  id: string;
  title?: string | null;
  thumbnail?: string | null;
  publishedAt?: string | null;
  viewCount?: number | null;
  duration?: string | null;
};

const VIDEOS_TO_SHOW = 3;

export default function YouTubeVideosGrid() {
  const [videos, setVideos] = useState<YtVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchVideos() {
      try {
        const res = await fetch('/api/youtube-videos');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const json = await res.json();
        const raw: any[] = Array.isArray(json?.data) ? json.data : [];

        const normalized = raw
          .map((v: any) => ({
            id: String(v.id ?? v.videoId ?? ''),
            title: v.title ?? v.snippet?.title ?? null,
            thumbnail:
              v.thumbnail ??
              v.snippet?.thumbnails?.high?.url ??
              v.snippet?.thumbnails?.medium?.url ??
              v.snippet?.thumbnails?.default?.url ??
              null,
            publishedAt: v.publishedAt ?? v.snippet?.publishedAt ?? null,
            viewCount: v.viewCount ? Number(v.viewCount) : null,
            duration: v.duration ?? v.contentDetails?.duration ?? null,
          }))
          .filter((v: YtVideo) => v.id);

        if (!mounted) return;
        setVideos(normalized.slice(0, VIDEOS_TO_SHOW));
      } catch (e) {
        if (!mounted) return;
        console.error('Failed to fetch YouTube videos', e);
        setError('Unable to load videos');
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

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || videos.length === 0) {
    return (
      <div className="text-center py-12">
        <Play className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
        <p className="body text-site-muted">{error || 'No videos available yet'}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, idx) => {
          const isHovered = hoveredVideoId === video.id;

          return (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
            >
              <motion.article
                onMouseEnter={() => setHoveredVideoId(video.id)}
                onMouseLeave={() => setHoveredVideoId(null)}
                animate={{ y: isHovered ? -10 : 0, scale: isHovered ? 1.02 : 1 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl overflow-hidden shadow-md border border-red-100 dark:border-red-900/20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10"
              >
                <motion.div
                  animate={{ opacity: isHovered ? 0.3 : 0 }}
                  className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur"
                />

                <div className="relative aspect-video overflow-hidden">
                  {video.thumbnail ? (
                    <motion.img
                      animate={{ scale: isHovered ? 1.1 : 1 }}
                      transition={{ duration: 0.6 }}
                      src={video.thumbnail}
                      alt={video.title || 'Video thumbnail'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <Play className="w-12 h-12 text-gray-400" />
                    </div>
                  )}

                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center pointer-events-none"
                  >
                    <motion.div
                      animate={{ scale: isHovered ? 1 : 0, rotate: isHovered ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center"
                    >
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </motion.div>
                  </motion.div>

                  {video.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white caption px-2 py-1 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{video.duration}</span>
                    </div>
                  )}
                </div>

                <div className="relative p-4 bg-white/70 dark:bg-gray-900/70">
                  <h4
                    className={`body font-semibold line-clamp-2 mb-2 transition-colors ${
                      isHovered ? 'text-red-600 dark:text-red-400' : 'text-site-primary'
                    }`}
                  >
                    {video.title || 'Untitled Video'}
                  </h4>

                  <div className="flex items-center gap-3 caption text-site-muted mb-3">
                    {video.viewCount !== null && (
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{video.viewCount.toLocaleString()}</span>
                      </div>
                    )}

                    {video.publishedAt && (
                      <span>
                        {new Date(video.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    )}
                  </div>

                  <motion.a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white caption font-semibold rounded-lg shadow-lg"
                  >
                    Watch
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </div>
              </motion.article>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <motion.a
          href="/videos"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 text-white shadow-xl hover:bg-red-700 transition-all"
        >
          <span className="body font-semibold">Check More Videos</span>
          <ExternalLink className="w-5 h-5" />
        </motion.a>
      </div>
    </div>
  );
}