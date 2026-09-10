'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { EyeIcon, TargetIcon, FocusIcon, HeartIcon } from 'lucide-react';
import type { HomePageContent } from '../../types/home';

import Section from '../shared/components/Section';
import SectionHeader from '../shared/components/SectionHeader';

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
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950',
    iconColor: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-200 dark:border-blue-800',
  },
  {
    key: 'mission',
    title: 'Mission',
    icon: TargetIcon,
    imgUrl: missionImg,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950',
    iconColor: 'text-purple-600 dark:text-purple-400',
    borderColor: 'border-purple-200 dark:border-purple-800',
  },
  {
    key: 'focus',
    title: 'Focus',
    icon: FocusIcon,
    imgUrl: focusImg,
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950',
    iconColor: 'text-orange-600 dark:text-orange-400',
    borderColor: 'border-orange-200 dark:border-orange-800',
  },
  {
    key: 'coreValues',
    title: 'Core Values',
    icon: HeartIcon,
    imgUrl: valuesImg,
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950',
    iconColor: 'text-pink-600 dark:text-pink-400',
    borderColor: 'border-pink-200 dark:border-pink-800',
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

const cardVariant: Variants = {
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
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function VisionMissionSection({ content }: VisionMissionSectionProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  if (!content) return null;

  return (
    <Section className="relative" id="vision">
      <div ref={containerRef}>
        {/* titleGradient matches the standard used across the home page's
            section titles (was set on "Our Impact in Numbers", now
            propagated here even though that title itself is gone). */}
        <SectionHeader
          title="Our Foundation"
          description="The principles and values that guide our mission to empower girls through technology"
          titleGradient="from-pink-600 via-purple-600 to-blue-600"
          dividerGradient="from-pink-500 via-purple-500 to-blue-500"
        />

        {/* items-start (not the grid default of stretch): each card keeps
            its own natural height based on how much text it has, instead
            of every card in a row being forced to match the tallest one. */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4"
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
                  {/* No h-full/fixed min-height and no scrollable text
                      area — the card just grows to fit its own content;
                      min-h-[220px] is only a floor so a very short
                      statement doesn't look cramped. */}
                  <div className="relative p-6 flex flex-col min-h-[220px]">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={{
                          rotate: 360,
                          scale: 1.2,
                        }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md"
                      >
                        <Icon className={`w-6 h-6 ${card.iconColor}`} />
                      </motion.div>

                      <h3 className="heading-3 text-site-primary">
                        {card.title}
                      </h3>
                    </div>

                    <motion.div
                      initial={{ width: '4rem' }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className={`h-1 rounded-full bg-gradient-to-r ${card.gradient} mb-4`}
                    />

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1, duration: 0.8 }}
                    >
                      <p className="body text-site-secondary whitespace-pre-line">
                        {contentText || `Our ${card.title.toLowerCase()} statement...`}
                      </p>
                    </motion.div>

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
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}