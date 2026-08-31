'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ExecutiveMessage } from '../../types/home';

interface MessagesSectionProps {
  messages: ExecutiveMessage[] | null;
}

export default function MessagesSection({ messages }: MessagesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  if (!messages || messages.length === 0) {
    return null;
  }

  const nextMessage = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  const prevMessage = () => {
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  const currentMessage = messages[currentIndex];

  return (
    <div ref={containerRef} className="wrapper max-w-7xl mx-auto px-4 py-16 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-full blur-3xl"
        />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/20 rounded-full mb-4 shadow-lg"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Quote className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </motion.div>
          <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-wide">
            Leadership Messages
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100"
        >
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600"
            style={{ backgroundSize: '200% 200%' }}
          >
            Words from Our Leaders
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Inspiring messages from those leading our mission
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="h-1 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 mx-auto rounded-full mt-6"
        />
      </motion.div>

      {/* Message Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.95, rotateY: 10 }}
          transition={{ duration: 0.6 }}
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Glowing border */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-3xl blur-lg"
          />

          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            {/* Quote icon decoration */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-6 right-6 text-purple-200 dark:text-purple-900/30"
            >
              <Quote className="w-32 h-32" />
            </motion.div>

            <div className="relative p-8 md:p-12">
              {/* Message content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed italic">
                  &quot;{currentMessage.message}&quot;
                </p>
              </motion.div>

              {/* Author info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 pt-6 border-t-2 border-purple-100 dark:border-purple-900"
              >
                {currentMessage.authorImage && (
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-800 shadow-lg"
                  >
                    <img
                      src={currentMessage.authorImage}
                      alt={currentMessage.authorName}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
                <div>
                  <motion.h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {currentMessage.authorName}
                  </motion.h4>
                  {currentMessage.authorTitle && (
                    <motion.p className="text-sm text-purple-600 dark:text-purple-400">
                      {currentMessage.authorTitle}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        {messages.length > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevMessage}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-2">
              {messages.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 w-8'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextMessage}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
