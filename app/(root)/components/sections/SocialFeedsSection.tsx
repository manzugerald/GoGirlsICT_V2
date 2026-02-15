'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Facebook, Youtube, ExternalLink, Sparkles } from 'lucide-react';
import FacebookPostsCard from '@/components/shared/facebookPostsCard/facebookPostsCard';
import YouTubeVideosGrid from './YouTubeVideosGrid';

export default function SocialFeedsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <div ref={containerRef} className="wrapper max-w-7xl mx-auto px-4 py-16 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 rounded-full blur-3xl"
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
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4 shadow-lg"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            🌐
          </motion.div>
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">
            Social Media
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
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
            style={{ backgroundSize: '200% 200%' }}
          >
            Connect With Us
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Stay updated with our latest news, stories, and impact across our social channels
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 mx-auto rounded-full mt-6"
        />
      </motion.div>

      <div className="space-y-12 relative z-10">
        {/* Facebook Feed Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="group"
        >
          {/* Facebook Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-xl shadow-md"
              >
                <Facebook className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </motion.div>
              <div>
                <motion.h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Latest from Facebook
                </motion.h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Follow our journey and community stories
                </p>
              </div>
            </div>
            <motion.a
              href="https://facebook.com/GoGirlsICTInitiative"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
            >
              Visit Page
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Facebook Content */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Gradient border effect */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur"
            />

            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6">
              <FacebookPostsCard />
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.div
            animate={{ scaleX: [0, 1] }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
          />
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
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-red-500"
              />
            ))}
          </div>
          <motion.div
            animate={{ scaleX: [0, 1] }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
          />
        </motion.div>

        {/* YouTube Feed Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="group"
        >
          {/* YouTube Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 bg-red-100 dark:bg-red-900/20 rounded-xl shadow-md"
              >
                <Youtube className="w-6 h-6 text-red-600 dark:text-red-400" />
              </motion.div>
              <div>
                <motion.h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  Latest from YouTube
                </motion.h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Watch our videos and educational content
                </p>
              </div>
            </div>
            <motion.a
              href="https://youtube.com/@GoGirlsICT"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
            >
              Subscribe
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>

          {/* YouTube Content */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Gradient border effect */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur"
            />

            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6">
              <YouTubeVideosGrid />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="text-center mt-12 relative z-10"
      >
        <motion.p className="text-gray-600 dark:text-gray-400 mb-4">
          Follow us on social media for daily updates and inspiring stories
        </motion.p>
        <div className="flex items-center justify-center gap-4">
          <motion.a
            href="https://facebook.com/GoGirlsICTInitiative"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="p-3 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 rounded-full shadow-lg"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </motion.a>
          <motion.a
            href="https://youtube.com/@GoGirlsICT"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="p-3 bg-red-100 hover:bg-red-200 dark:bg-red-900/20 dark:hover:bg-red-900/40 rounded-full shadow-lg"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 text-red-600 dark:text-red-400" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
