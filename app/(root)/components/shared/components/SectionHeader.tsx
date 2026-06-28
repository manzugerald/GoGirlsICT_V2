'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  icon?: ReactNode;

  badgeClassName?: string;
  titleGradient?: string;
  dividerGradient?: string;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  icon,
  badgeClassName = 'bg-[#9f004d]/10 dark:bg-[#9f004d]/20 text-[#9f004d] dark:text-pink-400',
  titleGradient = 'from-[#9f004d] via-pink-600 to-purple-600',
  dividerGradient = 'from-[#9f004d] via-pink-500 to-purple-500',
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className={`text-center mb-12 relative z-10 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 shadow-lg ${badgeClassName}`}
      >
        {icon && <span className="flex items-center">{icon}</span>}

        <span className="caption font-semibold uppercase tracking-wide">
          {badge}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.8 }}
        className="heading-2 mb-4 text-site-primary"
      >
        <span
          className={`bg-clip-text text-transparent bg-gradient-to-r ${titleGradient}`}
          style={{ backgroundSize: '200% 200%' }}
        >
          {title}
        </span>
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="body-lg text-site-secondary max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}

      <SectionDivider gradient={dividerGradient} />
    </motion.div>
  );
}