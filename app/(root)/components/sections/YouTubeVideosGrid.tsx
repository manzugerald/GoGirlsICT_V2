'use client';

import { useEffect, useState } from 'react';
import { Play, ExternalLink, Clock, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

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

const VIDEOS_TO_SHOW = 6;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function YouTubeVideosGrid() {
  const [videos, setVideos] = useState<YtVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
            description: v.description ?? v.snippet?.description ?? null,
            thumbnail:
              v.thumbnail ??
              v.snippet?.thumbnails?.high?.url ??
              v.snippet?.thumbnails?.medium?.url ??
              null,
            publishedAt: v.publishedAt ?? v.snippet?.publishedAt ?? null,
            viewCount: v.viewCount ? Number(v.viewCount) : null,
            likeCount: v.likeCount ? Number(v.likeCount) : null,
            duration: v.duration ?? v.contentDetails?.duration ?? null,
          }))
          .filter((v: any) => v.id) as YtVideo[];

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
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error || videos.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <Play className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
        </motion.div>
        <p className="text-gray-500 dark:text-gray-400">{error || 'No videos available yet'}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {videos.map((video, idx) => (
        <motion.article
          key={video.id}
          variants={cardVariant}
          whileHover={{
            y: -10,
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          className="group relative bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
        >
          {/* Glowing border */}
          <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />

          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden">
            {video.thumbnail ? (
              <motion.img
                whileHover={{ scale: 1.1 }}
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

            {/* Play overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center"
              >
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </motion.div>
            </motion.div>

            {/* Duration badge */}
            {video.duration && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1"
              >
                <Clock className="w-3 h-3" />
                <span>{video.duration}</span>
              </motion.div>
            )}
          </div>

          {/* Content */}
          <div className="relative p-4">
            <motion.h4 className="font-semibold text-base text-gray-900 dark:text-gray-100 line-clamp-2 mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              {video.title || 'Untitled Video'}
            </motion.h4>

            {/* Stats */}
            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
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

            {/* Watch button */}
            <motion.a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-lg"
            >
              Watch
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ExternalLink className="w-3 h-3" />
              </motion.div>
            </motion.a>
          </div>

          {/* Corner decoration */}
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-red-500/10 to-transparent rounded-tl-full"
          />
        </motion.article>
      ))}
    </motion.div>
  );
}
