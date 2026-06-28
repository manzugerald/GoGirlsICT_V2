'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GradientTitleProps {
  children: ReactNode;

  gradient?: string;

  className?: string;

  animated?: boolean;

  as?: 'h1' | 'h2' | 'h3';
}

export default function GradientTitle({
  children,

  gradient = 'from-[#9f004d] via-pink-600 to-purple-600',

  className = '',

  animated = true,

  as = 'h2',
}: GradientTitleProps) {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`heading-2 mb-4 ${className}`}
    >
      <motion.span
        animate={
          animated
            ? {
                backgroundPosition: [
                  '0% 50%',
                  '100% 50%',
                  '0% 50%',
                ],
              }
            : undefined
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: animated ? '200% 200%' : undefined,
        }}
        className={`
          bg-clip-text
          text-transparent
          bg-gradient-to-r
          ${gradient}
        `}
      >
        {children}
      </motion.span>
    </Component>
  );
}