'use client';

import { motion } from 'framer-motion';
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
  },
];

export default function VisionMissionSection({ content }: VisionMissionSectionProps) {
  if (!content) return null;

  return (
    <div className="wrapper max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 dark:bg-pink-900/20 rounded-full mb-4">
          <span className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
            🌟 Who We Are
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Our Foundation
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The principles and values that guide our mission to empower girls through technology
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          const contentValue = content[card.key as keyof HomePageContent];
          const contentText = typeof contentValue === 'string' ? contentValue : '';

          return (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="vision-card-wrapper"
            >
              <div
                className={`vision-card group relative overflow-hidden rounded-2xl border-2 ${card.borderColor} bg-gradient-to-br ${card.bgGradient} shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                {/* Animated gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="particle particle-1"></div>
                  <div className="particle particle-2"></div>
                  <div className="particle particle-3"></div>
                </div>

                {/* Card Content */}
                <div className="relative p-6 flex flex-col h-full min-h-[320px]">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <Icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:scale-105 transition-transform duration-300">
                      {card.title}
                    </h3>
                  </div>

                  {/* Decorative line */}
                  <div
                    className={`h-1 w-16 rounded-full bg-gradient-to-r ${card.gradient} mb-4 group-hover:w-full transition-all duration-500`}
                  />

                  {/* Content */}
                  <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line">
                      {contentText || `Our ${card.title.toLowerCase()} statement...`}
                    </p>
                  </div>

                  {/* Background image with overlay */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                    {card.imgUrl && (
                      <img
                        src={card.imgUrl}
                        alt={card.title}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>

                  {/* Corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${card.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
