'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import {
  BarChart3,
  TrendingUp,
  Users,
  Award,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Zap,
} from 'lucide-react';
import DashboardChart from '@/app/(admin)/admin/dashboard/chart/dashboardChart';
import AnimatedStats from '@/app/(admin)/admin/dashboard/chart/animatedStats';

const fadeInUp = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function ImpactSection() {
  const [isChartExpanded, setIsChartExpanded] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div ref={containerRef} className="wrapper max-w-7xl mx-auto px-4 py-16 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.1, 0.05, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="text-center mb-10 relative z-10"
      >
        {/* Badge with pulse effect */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 dark:bg-pink-900/20 rounded-full mb-4 shadow-lg"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <BarChart3 className="w-4 h-4 text-pink-600 dark:text-pink-400" />
          </motion.div>
          <span className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
            Impact Metrics
          </span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-pink-600 rounded-full"
          />
        </motion.div>

        {/* Title with gradient animation */}
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 dark:text-gray-100"
        >
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
            style={{ backgroundSize: '200% 200%' }}
          >
            Our Impact in Numbers
          </motion.span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Real-time data showcasing our reach and effectiveness
        </motion.p>
      </motion.div>

      {/* Decorative divider with icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex items-center justify-center gap-4 mb-8"
      >
        <motion.div
          animate={{ scaleX: [0, 1] }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-300 dark:via-pink-700 to-transparent"
        />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <TrendingUp className="w-5 h-5 text-pink-600 dark:text-pink-400" />
        </motion.div>
        <motion.div
          animate={{ scaleX: [0, 1] }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-300 dark:via-pink-700 to-transparent"
        />
      </motion.div>

      {/* Animated Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mb-12 relative z-10"
      >
        <AnimatedStats />
      </motion.div>

      {/* Dashboard Chart with 3D card effect */}
      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: 15 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ delay: 0.6, duration: 1 }}
        className="relative"
        style={{ perspective: '1000px' }}
      >
        {/* Glowing border effect */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl opacity-20 blur-lg"
        />

        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <motion.div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-850">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-2 bg-pink-100 dark:bg-pink-900/20 rounded-lg"
              >
                <BarChart3 className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              </motion.div>
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
              {/* Live indicator with pulse */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-green-700 dark:text-green-400">
                  Live Data
                </span>
              </motion.div>

              {/* Expand/Collapse button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsChartExpanded(!isChartExpanded)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label={isChartExpanded ? 'Collapse' : 'Expand'}
              >
                <motion.div
                  animate={{ rotate: isChartExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>

          {/* Chart content */}
          <motion.div
            initial={false}
            animate={{
              height: isChartExpanded ? 'auto' : '400px',
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <DashboardChart />
            </div>
          </motion.div>

          {/* Insights footer */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isChartExpanded ? 'auto' : 0,
              opacity: isChartExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: Users,
                    title: 'Community Reach',
                    desc: 'Growing our network of change-makers',
                    color: 'blue',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Year-over-Year Growth',
                    desc: 'Sustained impact across all metrics',
                    color: 'purple',
                  },
                  {
                    icon: Award,
                    title: 'Quality Outcomes',
                    desc: 'Excellence in program delivery',
                    color: 'pink',
                  },
                ].map((insight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isChartExpanded ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-2 bg-${insight.color}-100 dark:bg-${insight.color}-900/20 rounded-lg`}
                    >
                      <insight.icon
                        className={`w-5 h-5 text-${insight.color}-600 dark:text-${insight.color}-400`}
                      />
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {insight.title}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {insight.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA with enhanced design */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-center mt-12 relative z-10"
      >
        <div className="inline-flex flex-col items-center gap-4">
          <motion.div
            animate={{ scaleX: [0, 1] }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="h-px w-24 bg-gradient-to-r from-transparent via-pink-300 dark:via-pink-700 to-transparent"
          />
          <motion.a
            href="#our-work"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-pink-50 dark:bg-pink-900/10 hover:bg-pink-100 dark:hover:bg-pink-900/20 rounded-full transition-all duration-300 border border-pink-200 dark:border-pink-800 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            <span className="text-pink-600 dark:text-pink-400 font-semibold">
              Explore the work behind these numbers
            </span>
            <motion.svg
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-5 text-pink-600 dark:text-pink-400"
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
            </motion.svg>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
