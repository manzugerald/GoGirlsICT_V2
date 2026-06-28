'use client';

import { motion } from 'framer-motion';

type Position =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'center';

interface SectionBackgroundProps {
  gradient?: string;
  position?: Position;
  duration?: number;
  blur?: string;
  opacity?: [number, number, number];
  scale?: [number, number, number];
  rotate?: boolean;
}

export default function SectionBackground({
  gradient = 'from-[#9f004d] via-pink-500 to-purple-500',
  position = 'center',
  duration = 30,
  blur = 'blur-3xl',
  opacity = [0.04, 0.08, 0.04],
  scale = [1, 1.2, 1],
  rotate = true,
}: SectionBackgroundProps) {
  const positions = {
    'top-left': '-top-1/2 -left-1/2',
    'top-right': '-top-1/2 -right-1/2',
    'bottom-left': '-bottom-1/2 -left-1/2',
    'bottom-right': '-bottom-1/2 -right-1/2',
    center:
      'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          scale,
          opacity,
          rotate: rotate ? [0, 180, 360] : undefined,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
        className={`
          absolute
          ${positions[position]}
          w-full
          h-full
          rounded-full
          bg-gradient-to-br
          ${gradient}
          ${blur}
        `}
      />
    </div>
  );
}