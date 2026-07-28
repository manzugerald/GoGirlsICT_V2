'use client';

import { motion } from 'framer-motion';

import type { LucideIcon } from 'lucide-react';

interface TeamEmptyStateProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function TeamEmptyState({
  title,
  description,
  icon: Icon,
}: TeamEmptyStateProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="flex flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white/80 px-6 py-20 text-center dark:border-gray-800 dark:bg-gray-900/80"
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-400">
        <Icon className="h-8 w-8" />
      </div>

      <h3 className="heading-3 text-site-primary">
        {title}
      </h3>

      <p className="body mt-2 max-w-md text-site-secondary">
        {description}
      </p>
    </motion.div>
  );
}