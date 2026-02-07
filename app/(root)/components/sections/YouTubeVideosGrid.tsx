'use client';

import { useEffect, useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
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

const VIDEOS_TO_SHOW = 6; // Show 6 videos on homepage

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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error || videos.length === 0) {
    return (
      <div className="text-center py-12">
        <Play className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
        <p className="text-gray-500 dark:text-gray-400">{error || 'No videos available yet'}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, idx) => (
        <motion.article
          key={video.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          whileHover={{ y: -8 }}
          className="group relative bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden">
            {video.thumbnail ? (
              <img
                src={video.thumbnail}
                alt={video.title || 'Video thumbnail'}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <Play className="w-12 h-12 text-gray-400" />
              </div>
            )}
            {/* Play overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Play className="w-12 h-12 text-white" fill="white" />
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h4 className="font-semibold text-base text-gray-900 dark:text-gray-100 line-clamp-2 mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              {video.title || 'Untitled Video'}
            </h4>

            {video.publishedAt && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                {new Date(video.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            )}

            {/* Watch button */}
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg"
            >
              Watch
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
