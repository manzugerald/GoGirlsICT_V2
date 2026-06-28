'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  gradient?: string;
  className?: string;
}

export default function SectionDivider({
  gradient = 'from-[#9f004d] via-pink-500 to-purple-500',
  className = '',
}: SectionDividerProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className={`h-1 w-32 bg-gradient-to-r ${gradient} mx-auto rounded-full mt-6 origin-center ${className}`}
    />
  );
}