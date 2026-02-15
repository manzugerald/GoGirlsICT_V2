'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { EyeIcon, TargetIcon, FocusIcon, HeartIcon } from 'lucide-react';
import type { HomePageContent } from '../../types/home';

const visionImg = '/assets/images/vision-mission-values/vision.png';
const missionImg = '/assets/images/vision-mission-values/mission.png';
const focusImg = '/assets/images/vision-mission-values/focus.png';
const valuesImg = '/assets/images/vision-mission-values/values.png';

interface VisionMissionSectionProps {
  content: HomePageContent | null;
}

const cards = [
  {
    key: 'vision',
    title: 'Vision',
    icon: EyeIcon,
    imgUrl: visionImg,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-200 dark:border-blue-800',
    shadowColor: 'shadow-blue-500/50',
  },
  {
    key: 'mission',
    title: 'Mission',
    icon: TargetIcon,
    imgUrl: missionImg,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
    iconColor: 'text-purple-600 dark:text-purple-400',
    borderColor: 'border-purple-200 dark:border-purple-800',
    shadowColor: 'shadow-purple-500/50',
  },
  {
    key: 'focus',
    title: 'Focus',
    icon: FocusIcon,
    imgUrl: focusImg,
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
    iconColor: 'text-orange-600 dark:text-orange-400',
    borderColor: 'border-orange-200 dark:border-orange-800',
    shadowColor: 'shadow-orange-500/50',
  },
  {
    key: 'coreValues',
    title: 'Core Values',
    icon: HeartIcon,
    imgUrl: valuesImg,
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
    iconColor: 'text-pink-600 dark:text-pink-400',
    borderColor: 'border-pink-200 dark:border-pink-800',
    shadowColor: 'shadow-pink-500/50',
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: -15,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function VisionMissionSection({ content }: VisionMissionSectionProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  if (!content) return null;

  return (
    <div ref={containerRef} className="wrapper max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12"
      >
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 dark:bg-pink-900/20 rounded-full mb-4 shadow-lg"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            🌟
          </motion.span>
          <span className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
            Who We Are
          </span>
        </motion.div>

        {/* Animated title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100"
        >
          <motion.span
            animate={
              isInView
                ? {
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }
                : {}
            }
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600"
            style={{ backgroundSize: '200% 200%' }}
          >
            Our Foundation
          </motion.span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          The principles and values that guide our mission to empower girls through technology
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
          className="h-1 w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"
        />
      </motion.div>

      {/* Cards Grid with stagger animation */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        style={{ perspective: '1000px' }}
      >
        {cards.map((card, idx) => {
          const Icon = card.icon;
          const contentValue = content[card.key as keyof HomePageContent];
          const contentText = typeof contentValue === 'string' ? contentValue : '';

          return (
            <motion.div
              key={card.key}
              variants={cardVariant}
              whileHover={{
                y: -15,
                rotateY: 5,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="vision-card-wrapper"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className={`vision-card group relative overflow-hidden rounded-2xl border-2 ${card.borderColor} bg-gradient-to-br ${card.bgGradient} shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}
                />

                {/* Glowing border effect */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500`}
                />

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        x: Math.random() * 100 + '%',
                        y: '100%',
                        opacity: 0,
                      }}
                      animate={{
                        y: '-100%',
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: 'linear',
                      }}
                      className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${card.gradient}`}
                    />
                  ))}
                </div>

                {/* Card Content */}
                <div className="relative p-6 flex flex-col h-full min-h-[320px]">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className={`p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md`}
                    >
                      <Icon className={`w-6 h-6 ${card.iconColor}`} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      {card.title}
                    </h3>
                  </div>

                  {/* Animated decorative line */}
                  <motion.div
                    initial={{ width: '4rem' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`h-1 rounded-full bg-gradient-to-r ${card.gradient} mb-4`}
                  />

                  {/* Content with fade-in */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.8 }}
                    className="flex-1 overflow-y-auto custom-scrollbar"
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line">
                      {contentText || `Our ${card.title.toLowerCase()} statement...`}
                    </p>
                  </motion.div>

                  {/* Background image with parallax */}
                  <motion.div
                    whileHover={{ scale: 1.1, opacity: 0.15 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 right-0 w-32 h-32 opacity-5 pointer-events-none"
                  >
                    {card.imgUrl && (
                      <img
                        src={card.imgUrl}
                        alt={card.title}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </motion.div>

                  {/* Corner glow accent */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${card.gradient} blur-2xl`}
                  />

                  {/* Bottom corner decoration */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${card.gradient} opacity-10 rounded-tr-full`}
                  />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 flex justify-center"
      >
        <div className="flex items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
