'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import {
  Headphones,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from 'lucide-react';

import type { PodcastSummary } from '../data';

const TiptapJsonViewer = dynamic(
  () => import('@/components/editor/tiptap-json-viewer'),
  { ssr: false }
);

const EMPTY_DESCRIPTION: object = {
  type: 'doc',
  content: [{ type: 'paragraph' }],
};

function asTiptapDoc(value: unknown): object {
  return value && typeof value === 'object'
    ? (value as object)
    : EMPTY_DESCRIPTION;
}

// Used when a podcast has no stored waveform yet (e.g. legacy rows
// created before this feature) so the player still shows *something*
// bar-shaped and remains seekable.
const FALLBACK_WAVEFORM = Array.from(
  { length: 40 },
  () => 0.35
);

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString(
    'en-US',
    {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }
  );
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return '0:00';
  }

  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60);

  return `${minutes}:${remaining
    .toString()
    .padStart(2, '0')}`;
}

async function incrementPlayCount(
  podcastId: number
): Promise<number | null> {
  try {
    const response = await fetch(
      `/api/podcasts/${podcastId}/increment-access`,
      { method: 'POST' }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return data.accessCount ?? null;
  } catch {
    /*
     * Play tracking is best-effort and should never
     * block playback.
     */
    return null;
  }
}

export default function PodcastCard({
  podcast,
  index,
  isActive,
  onPlay,
  onPause,
}: {
  podcast: PodcastSummary;
  index: number;
  isActive: boolean;
  onPlay: () => void;
  onPause: () => void;
}) {
  const audioRef = useRef<HTMLAudioElement>(
    null
  );

  const waveformRef =
    useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [currentTime, setCurrentTime] =
    useState(0);

  const [duration, setDuration] =
    useState(0);

  const [isMuted, setIsMuted] =
    useState(false);

  const [playCount, setPlayCount] =
    useState(podcast.accessCount);

  const hasTrackedPlay = useRef(false);

  // Another card became active: stop this one.
  useEffect(() => {
    if (!isActive && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  // `loadedmetadata` can fire before React finishes attaching its
  // listener (e.g. when the audio is already cached), so it's easy to
  // miss entirely and leave `duration` stuck at 0. Read it directly
  // once mounted as a fallback.
  useEffect(() => {
    const audio = audioRef.current;

    if (
      audio &&
      audio.readyState >= 1 &&
      Number.isFinite(audio.duration)
    ) {
      setDuration(audio.duration);
    }
  }, []);

  function togglePlay() {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      onPlay();

      audio
        .play()
        .catch(() => {
          /* Playback can be rejected (e.g. missing/undecodable
             source); the UI simply stays in a paused state. */
          setIsPlaying(false);
        });

      setIsPlaying(true);

      if (!hasTrackedPlay.current) {
        hasTrackedPlay.current = true;
        setPlayCount((count) => count + 1);

        incrementPlayCount(
          podcast.id
        ).then((count) => {
          if (count !== null) {
            setPlayCount(count);
          }
        });
      }
    } else {
      audio.pause();
      setIsPlaying(false);
      onPause();
    }
  }

  function seekToClientX(clientX: number) {
    const audio = audioRef.current;
    const bar = waveformRef.current;

    if (!audio || !bar || !duration) {
      return;
    }

    const rect = bar.getBoundingClientRect();

    const fraction = Math.min(
      1,
      Math.max(
        0,
        (clientX - rect.left) / rect.width
      )
    );

    const nextTime = fraction * duration;

    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  }

  function handleWaveformPointerDown(
    event: React.PointerEvent<HTMLDivElement>
  ) {
    if (!duration) {
      return;
    }

    event.currentTarget.setPointerCapture(
      event.pointerId
    );

    seekToClientX(event.clientX);
  }

  function handleWaveformPointerMove(
    event: React.PointerEvent<HTMLDivElement>
  ) {
    // Only scrub while the primary button/touch is held down.
    if (event.buttons !== 1) {
      return;
    }

    seekToClientX(event.clientX);
  }

  function handleWaveformKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>
  ) {
    const audio = audioRef.current;

    if (!audio || !duration) {
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const next = Math.min(
        duration,
        currentTime + 5
      );
      audio.currentTime = next;
      setCurrentTime(next);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const next = Math.max(
        0,
        currentTime - 5
      );
      audio.currentTime = next;
      setCurrentTime(next);
    }
  }

  function toggleMute() {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  }

  const peaks =
    podcast.waveform && podcast.waveform.length > 0
      ? podcast.waveform
      : FALLBACK_WAVEFORM;

  const playedFraction =
    duration > 0 ? currentTime / duration : 0;

  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: '-60px',
      }}
      transition={{
        delay: Math.min(index, 8) * 0.05,
        duration: 0.35,
      }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-[#9f004d]/30 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      {/* Illustration with the audio player UI overlaid on top */}
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-gradient-to-br from-[#9f004d]/15 to-purple-100 dark:from-[#9f004d]/20 dark:to-gray-800">
        {podcast.image ? (
          <Image
            src={podcast.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Headphones className="h-12 w-12 text-[#9f004d]/35 dark:text-pink-400/35" />
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Play / pause control, centered on top of the image */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={
            isPlaying
              ? `Pause ${podcast.title}`
              : `Play ${podcast.title}`
          }
          className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#9f004d] shadow-lg backdrop-blur transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white dark:bg-gray-950/90 dark:text-pink-400"
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" fill="currentColor" />
          ) : (
            <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
          )}
        </button>

        {/* Waveform + timer, anchored to the bottom of the image */}
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 px-3 pb-2.5">
          <span className="tabular-nums text-[10px] font-semibold text-white/90">
            {formatTime(currentTime)}
          </span>

          <div
            ref={waveformRef}
            role="slider"
            tabIndex={0}
            aria-label={`Seek within ${podcast.title}`}
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            aria-valuenow={Math.round(currentTime)}
            aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
            onPointerDown={handleWaveformPointerDown}
            onPointerMove={handleWaveformPointerMove}
            onKeyDown={handleWaveformKeyDown}
            className="flex h-9 flex-1 cursor-pointer items-end gap-[2px] touch-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5aa8]/80 focus-visible:ring-offset-1 focus-visible:ring-offset-black/40"
          >
            {peaks.map((peak, barIndex) => {
              const isPlayed =
                duration > 0 &&
                barIndex / peaks.length <=
                  playedFraction;

              return (
                <span
                  key={barIndex}
                  aria-hidden="true"
                  className="min-w-[2.5px] flex-1 rounded-full transition-[background,box-shadow] duration-150"
                  style={{
                    height: `${Math.max(peak * 100, 16)}%`,
                    background: isPlayed
                      ? 'linear-gradient(to top, #9f004d, #ff4fa0)'
                      : 'rgba(255, 159, 203, 0.3)',
                    boxShadow: isPlayed
                      ? '0 0 6px rgba(255, 45, 150, 0.75)'
                      : 'none',
                  }}
                />
              );
            })}
          </div>

          <span className="tabular-nums text-[10px] font-semibold text-white/90">
            {formatTime(duration)}
          </span>

          <button
            type="button"
            onClick={toggleMute}
            aria-label={
              isMuted ? 'Unmute' : 'Mute'
            }
            className="shrink-0 text-white/90 transition-colors hover:text-white"
          >
            {isMuted ? (
              <VolumeX className="h-3.5 w-3.5" />
            ) : (
              <Volume2 className="h-3.5 w-3.5" />
            )}
          </button>
        </div>

        <audio
          ref={audioRef}
          src={podcast.audioUrl}
          preload="metadata"
          onTimeUpdate={(event) =>
            setCurrentTime(
              event.currentTarget.currentTime
            )
          }
          onLoadedMetadata={(event) =>
            setDuration(
              event.currentTarget.duration
            )
          }
          onDurationChange={(event) => {
            const value =
              event.currentTarget.duration;

            if (Number.isFinite(value)) {
              setDuration(value);
            }
          }}
          onEnded={() => {
            setIsPlaying(false);
            setCurrentTime(0);
            onPause();
          }}
        />
      </div>

      {/* Title, description, meta */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-serif text-[length:calc(1rem*var(--font-scale))] font-semibold leading-tight text-gray-900 dark:text-white">
          {podcast.title}
        </h3>

        <div
          className="mt-1.5 overflow-hidden text-[length:calc(0.8125rem*var(--font-scale))] leading-5 text-gray-600 dark:text-gray-400 [&_p]:m-0"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          <TiptapJsonViewer
            content={asTiptapDoc(podcast.description)}
            className="prose prose-sm dark:prose-invert max-w-none"
          />
        </div>

        <div className="mt-3 flex items-center justify-between text-[length:calc(0.6875rem*var(--font-scale))] font-medium text-gray-400 dark:text-gray-500">
          <span>
            {formatDate(podcast.publishedAt)}
          </span>

          <span className="inline-flex items-center gap-1">
            <Headphones className="h-3 w-3" />
            {playCount.toLocaleString()} plays
          </span>
        </div>
      </div>
    </motion.li>
  );
}
