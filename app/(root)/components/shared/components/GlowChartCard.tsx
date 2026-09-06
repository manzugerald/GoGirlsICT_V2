'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

/**
 * The glowing gradient-bordered card used to frame a chart on public
 * pages (Impact section, /impact page) — pink→purple→blue glow, rounded
 * corners, an icon+title header. Extracted so multiple charts (pie, bar)
 * can each get their own instance instead of sharing one big card.
 */
export default function GlowChartCard({
  icon: Icon,
  title,
  subtitle,
  headerRight,
  delay = 0.45,
  children,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  headerRight?: ReactNode;
  delay?: number;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay, duration: 1 }}
      className="relative z-10"
      style={{ perspective: '1000px' }}
    >
      {/* Glowing border */}
      <motion.div
        animate={{ opacity: [0.35, 0.85, 0.35] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl blur-lg"
      />

      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="p-2 bg-pink-100 dark:bg-pink-900/20 rounded-lg"
            >
              <Icon className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            </motion.div>

            <div>
              <h3 className="heading-3 text-site-primary">{title}</h3>
              <p className="caption text-site-muted">{subtitle}</p>
            </div>
          </div>

          {headerRight}
        </div>

        <div className="p-6 md:p-8">{children}</div>
      </div>
    </motion.div>
  );
}
