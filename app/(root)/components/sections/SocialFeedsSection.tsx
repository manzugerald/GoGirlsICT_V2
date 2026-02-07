'use client';

import { motion } from 'framer-motion';
import { Facebook, Youtube, ExternalLink } from 'lucide-react';
import FacebookPostsCard from '@/components/shared/facebookPostsCard/facebookPostsCard';
import YouTubeVideosGrid from './YouTubeVideosGrid';

export default function SocialFeedsSection() {
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
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">
            🌐 Social Media
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Connect With Us
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Stay updated with our latest news, stories, and impact across our social channels
        </p>
      </motion.div>

      <div className="space-y-12">
        {/* Facebook Feed Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group"
        >
          {/* Facebook Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Facebook className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Latest from Facebook
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Follow our journey and community stories
                </p>
              </div>
            </div>
            <a
              href="https://facebook.com/GoGirlsICTInitiative" // Replace with your actual Facebook page
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Visit Page
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Facebook Content with hover effect */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {/* Gradient border effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />

            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6">
              <FacebookPostsCard />
            </div>
          </div>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
            <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
        </motion.div>

        {/* YouTube Feed Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group"
        >
          {/* YouTube Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Youtube className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  Latest from YouTube
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Watch our videos and educational content
                </p>
              </div>
            </div>
            <a
              href="https://youtube.com/@GoGirlsICT" // Replace with your actual YouTube channel
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Subscribe
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* YouTube Content with hover effect */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {/* Gradient border effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />

            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6">
              <YouTubeVideosGrid />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-12"
      >
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Follow us on social media for daily updates and inspiring stories
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://facebook.com/GoGirlsICTInitiative"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </a>
          <a
            href="https://youtube.com/@GoGirlsICT"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-red-100 hover:bg-red-200 dark:bg-red-900/20 dark:hover:bg-red-900/40 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 text-red-600 dark:text-red-400" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
