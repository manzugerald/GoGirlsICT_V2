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
  Pause,
  Play,
  Radio,
  Square,
  Volume2,
  VolumeX,
} from 'lucide-react';

import type { TalkshowSummary } from '../data';
import { isTiptapDocEmpty, normalizeTiptapDoc } from '@/lib/tiptap';

const TiptapJsonViewer = dynamic(
  () => import('@/components/editor/tiptap-json-viewer'),
  { ssr: false }
);

// Used when a talkshow has no stored waveform yet (e.g. legacy rows
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

export default function TalkshowCard({
  talkshow,
  index,
  isActive,
  isAnyActive,
  onPlay,
  onPause,
}: {
  talkshow: TalkshowSummary;
  index: number;
  isActive: boolean;
  isAnyActive: boolean;
  onPlay: () => void;
  onPause: () => void;
}) {
  const isDimmed = isAnyActive && !isActive;
  const hasAudio = Boolean(talkshow.audioUrl);

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
    } else {
      audio.pause();
      setIsPlaying(false);
      onPause();
    }
  }

  // Distinct from the play/pause toggle: stop always resets playback back
  // to the start, rather than leaving off wherever it was paused.
  function stopPlaying() {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    onPause();
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
    talkshow.waveform && talkshow.waveform.length > 0
      ? talkshow.waveform
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
      className={`group relative flex shrink-0 grow-0 flex-col overflow-visible rounded-2xl border bg-white transition-all duration-300 dark:bg-gray-900 ${
        isActive
          ? 'z-20 my-6 w-full -translate-y-2 border-[#9f004d] opacity-100 shadow-[0_30px_70px_-12px_rgba(159,0,77,0.6)] ring-2 ring-[#9f004d]/40 hover:-translate-y-2.5 hover:shadow-[0_35px_80px_-12px_rgba(159,0,77,0.7)] sm:w-[calc(((100%_-_1.25rem)/2)*1.25)] lg:w-[calc(((100%_-_2.5rem)/3)*1.25)] xl:w-[calc(((100%_-_3.75rem)/4)*1.25)] 2xl:w-[calc(((100%_-_5rem)/5)*1.25)] dark:border-pink-500 dark:ring-pink-500/40 dark:shadow-[0_30px_70px_-12px_rgba(236,72,153,0.55)] dark:hover:shadow-[0_35px_80px_-12px_rgba(236,72,153,0.65)]'
          : isDimmed
            ? 'z-0 w-full border-gray-200 opacity-15 shadow-sm hover:opacity-100 hover:z-10 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#9f004d]/40 hover:shadow-xl hover:shadow-[#9f004d]/20 sm:w-[calc((100%_-_1.25rem)/2)] lg:w-[calc((100%_-_2.5rem)/3)] xl:w-[calc((100%_-_3.75rem)/4)] 2xl:w-[calc((100%_-_5rem)/5)] dark:border-gray-800 dark:hover:border-pink-500/40 dark:hover:shadow-pink-500/20'
            : 'z-0 w-full border-gray-200 opacity-100 shadow-sm hover:z-10 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#9f004d]/40 hover:shadow-xl hover:shadow-[#9f004d]/20 sm:w-[calc((100%_-_1.25rem)/2)] lg:w-[calc((100%_-_2.5rem)/3)] xl:w-[calc((100%_-_3.75rem)/4)] 2xl:w-[calc((100%_-_5rem)/5)] dark:border-gray-800 dark:hover:border-pink-500/40 dark:hover:shadow-pink-500/20'
      }`}
    >
      {isActive && (
        <span className="absolute -top-3 left-1/2 z-30 inline-flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-1.5 truncate rounded-full bg-[#9f004d] px-3.5 py-1.5 caption font-bold text-black shadow-lg shadow-[#9f004d]/40 dark:bg-pink-500 dark:shadow-pink-500/40">
          <Volume2 className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">Now Playing: {talkshow.title}</span>
        </span>
      )}

      {/* Illustration with the audio player UI overlaid on top */}
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#9f004d]/15 to-purple-100 dark:from-[#9f004d]/20 dark:to-gray-800">
        {talkshow.image ? (
          <Image
            src={talkshow.image}
            alt=""
            fill
            sizes="(min-width: 1536px) 20vw, (min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Radio className="h-12 w-12 text-[#9f004d]/35 dark:text-pink-400/35" />
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {hasAudio && (
          <>
            {/* Play / pause control, centered on top of the image */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={
                isPlaying
                  ? `Pause ${talkshow.title}`
                  : `Play ${talkshow.title}`
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
              <span className="tabular-nums caption font-semibold text-white/90">
                {formatTime(currentTime)}
              </span>

              <div
                ref={waveformRef}
                role="slider"
                tabIndex={0}
                aria-label={`Seek within ${talkshow.title}`}
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
                          ? 'linear-gradient(to top, #c2005f, #ff2d96)'
                          : 'rgba(255, 255, 255, 0.32)',
                        boxShadow: isPlayed
                          ? '0 0 8px rgba(255, 45, 150, 0.95)'
                          : '0 0 2px rgba(0, 0, 0, 0.4)',
                      }}
                    />
                  );
                })}
              </div>

              <span className="tabular-nums caption font-semibold text-white/90">
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
              src={talkshow.audioUrl ?? undefined}
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
          </>
        )}
      </div>

      {/* Title, description, date */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-serif body font-semibold text-gray-900 dark:text-white">
          {talkshow.title}
        </h3>

        {!isTiptapDocEmpty(talkshow.description) && (
          <div
            className="mt-1.5 overflow-hidden caption text-gray-600 dark:text-gray-400 [&_p]:m-0"
            style={
              isActive
                ? undefined
                : {
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }
            }
          >
            <TiptapJsonViewer
              content={normalizeTiptapDoc(talkshow.description)}
              className="prose-scaled prose prose-sm dark:prose-invert max-w-none"
            />
          </div>
        )}

        {isActive && !isTiptapDocEmpty(talkshow.details) && (
          <div className="mt-3 border-t border-gray-100 pt-3 dark:border-gray-800">
            <div className="caption mb-1 font-semibold text-gray-700 dark:text-gray-300">
              Additional Details
            </div>
            <TiptapJsonViewer
              content={normalizeTiptapDoc(talkshow.details)}
              className="prose-scaled prose prose-sm dark:prose-invert max-w-none"
            />
          </div>
        )}

        {isActive && (
          <button
            type="button"
            onClick={stopPlaying}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-2.5 caption font-bold text-white shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40"
          >
            <Square className="h-4 w-4" fill="currentColor" />
            Stop Playing
          </button>
        )}

        <div className="mt-3 flex items-center justify-between caption font-medium text-gray-400 dark:text-gray-500">
          <span>
            {formatDate(talkshow.date)}
          </span>

          {!hasAudio && (
            <span className="inline-flex items-center gap-1">
              <Radio className="h-3 w-3" />
              No recording yet
            </span>
          )}
        </div>
      </div>
    </motion.li>
  );
}
