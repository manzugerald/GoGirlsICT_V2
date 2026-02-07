'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BarChart3, TrendingUp, Users, Award, ChevronDown, ChevronUp } from 'lucide-react';
import DashboardChart from '@/app/(admin)/admin/dashboard/chart/dashboardChart';
import AnimatedStats from '@/app/(admin)/admin/dashboard/chart/animatedStats';

export default function ImpactSection() {
  const [isChartExpanded, setIsChartExpanded] = useState(false);

  return (
    <div className="wrapper max-w-7xl mx-auto px-4 py-16">
      {/* Compact Header - less space than main sections */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 dark:bg-pink-900/20 rounded-full mb-4">
          <BarChart3 className="w-4 h-4 text-pink-600 dark:text-pink-400" />
          <span className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
            Impact Metrics
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 dark:text-gray-100">
          Our Impact in Numbers
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Real-time data showcasing our reach and effectiveness
        </p>
      </motion.div>

      {/* Quick Stats - Prominent Cards with enhanced design */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        {/* Optional: Add a decorative element above stats */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-200 dark:via-pink-800 to-transparent" />
          <TrendingUp className="w-5 h-5 text-pink-600 dark:text-pink-400" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-200 dark:via-pink-800 to-transparent" />
        </div>

        <AnimatedStats />
      </motion.div>

      {/* Dashboard Chart - Enhanced with tabs and interactions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative"
      >
        {/* Gradient border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-20 blur-lg"></div>

        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header with live indicator and expand/collapse */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-850">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-pink-100 dark:bg-pink-900/20 rounded-lg">
                <BarChart3 className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
                  Detailed Breakdown
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Interactive data visualization
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Live indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-green-700 dark:text-green-400">
                  Live Data
                </span>
              </div>

              {/* Expand/Collapse button */}
              <button
                onClick={() => setIsChartExpanded(!isChartExpanded)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label={isChartExpanded ? 'Collapse' : 'Expand'}
              >
                {isChartExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Chart content with smooth height transition */}
          <motion.div
            initial={false}
            animate={{
              height: isChartExpanded ? 'auto' : '400px',
              opacity: 1,
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <DashboardChart />
            </div>
          </motion.div>

          {/* Optional: Insights footer */}
          {isChartExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      Community Reach
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Growing our network of change-makers
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      Year-over-Year Growth
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Sustained impact across all metrics
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900/20 rounded-lg">
                    <Award className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      Quality Outcomes
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Excellence in program delivery
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* CTA with improved design */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-12"
      >
        <div className="inline-flex flex-col items-center gap-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-pink-300 dark:via-pink-700 to-transparent" />
          <a
            href="#our-work"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-pink-50 dark:bg-pink-900/10 hover:bg-pink-100 dark:hover:bg-pink-900/20 rounded-full transition-all duration-300 border border-pink-200 dark:border-pink-800"
          >
            <span className="text-pink-600 dark:text-pink-400 font-semibold">
              Explore the work behind these numbers
            </span>
            <svg
              className="w-5 h-5 text-pink-600 dark:text-pink-400 transition-transform group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
