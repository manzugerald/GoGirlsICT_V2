'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import {
  BarChart3,
  ArrowBigRight,
  TrendingUp,
  Users,
  Award,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

import DashboardChart from '@/app/(admin)/admin/dashboard/chart/dashboardChart';
import AnimatedStats from '@/app/(admin)/admin/dashboard/chart/animatedStats';

import Section from '@/app/(root)/components/shared/components/Section';
import SectionHeader from '@/app/(root)/components/shared/components/SectionHeader';
import SectionBackground from '@/app/(root)/components/shared/components/SectionBackground';

type ImpactCounts = {
  projects: number;
  reports: number;
  events: number;
  users: number;
  institutions: number;
  beneficiaries: number;
};

const insights = [
  {
    icon: Users,
    title: 'Community Reach',
    desc: 'Growing our network of change-makers',
    iconBoxClassName: 'bg-blue-100 dark:bg-blue-900/20',
    iconClassName: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: TrendingUp,
    title: 'Year-over-Year Growth',
    desc: 'Sustained impact across all metrics',
    iconBoxClassName: 'bg-purple-100 dark:bg-purple-900/20',
    iconClassName: 'text-purple-600 dark:text-purple-400',
  },
  {
    icon: Award,
    title: 'Quality Outcomes',
    desc: 'Excellence in program delivery',
    iconBoxClassName: 'bg-pink-100 dark:bg-pink-900/20',
    iconClassName: 'text-pink-600 dark:text-pink-400',
  },
];

export default function ImpactPageContent({ counts }: { counts: ImpactCounts }) {
  const [isChartExpanded, setIsChartExpanded] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <Section id="impact" className="relative">
      <div ref={containerRef}>
        <SectionBackground
          gradient="from-pink-500 via-purple-500 to-blue-500"
          position="top-right"
          duration={24}
          opacity={[0.04, 0.09, 0.04]}
        />

        <SectionHeader
          badge="Impact Metrics"
          title="Our Impact in Numbers"
          description="Real-time data showcasing our reach and effectiveness"
          icon={<BarChart3 className="w-4 h-4" />}
          badgeClassName="bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400"
          titleGradient="from-pink-600 via-purple-600 to-blue-600"
          dividerGradient="from-pink-500 via-purple-500 to-blue-500"
        />

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mb-12 relative z-10"
        >
          <AnimatedStats counts={counts} />
        </motion.div>

        {/* Dashboard Chart */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 15 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ delay: 0.45, duration: 1 }}
          className="relative z-10"
          style={{ perspective: '1000px' }}
        >
          {/* Glowing border */}
          <motion.div
            animate={{ opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl blur-lg"
          />

          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
            {/* Chart Header */}
            <div className="flex items-center justify-between gap-4 p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-2 bg-pink-100 dark:bg-pink-900/20 rounded-lg"
                >
                  <BarChart3 className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </motion.div>

                <div>
                  <h3 className="heading-3 text-site-primary">
                    Detailed Breakdown
                  </h3>
                  <p className="caption text-site-muted">
                    Interactive data visualization
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Live indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                  className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>

                  <span className="caption font-medium text-green-700 dark:text-green-400">
                    Live Data
                  </span>
                </motion.div>

                {/* Expand Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsChartExpanded((prev) => !prev)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label={isChartExpanded ? 'Collapse chart' : 'Expand chart'}
                >
                  <motion.div
                    animate={{ rotate: isChartExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-site-secondary" />
                  </motion.div>
                </motion.button>
              </div>
            </div>

            {/* Chart Content */}
            <motion.div
              initial={false}
              animate={{
                height: isChartExpanded ? 'auto' : '400px',
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <DashboardChart counts={counts} />
              </div>
            </motion.div>

            {/* Insights Footer */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isChartExpanded ? 'auto' : 0,
                opacity: isChartExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="p-6 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {insights.map((insight, i) => {
                    const Icon = insight.icon;

                    return (
                      <motion.div
                        key={insight.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isChartExpanded ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                        className="flex items-start gap-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`p-2 rounded-lg ${insight.iconBoxClassName}`}
                        >
                          <Icon className={`w-5 h-5 ${insight.iconClassName}`} />
                        </motion.div>

                        <div>
                          <p className="body font-semibold text-site-primary">
                            {insight.title}
                          </p>
                          <p className="caption text-site-secondary mt-1">
                            {insight.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="mt-8 flex justify-center relative z-10"
        >
          <motion.a
            href="/impact"
            whileHover={{ scale: 1.03, x: 3 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-full border border-pink-200 dark:border-pink-800 bg-pink-50 dark:bg-pink-900/10 hover:bg-pink-100 dark:hover:bg-pink-900/20 px-6 py-3 shadow-lg transition-all"
          >
            <Sparkles className="w-5 h-5 text-pink-600 dark:text-pink-400" />

            <span className="body font-semibold text-pink-600 dark:text-pink-400">
              Explore the work behind these numbers
            </span>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowBigRight className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
}
