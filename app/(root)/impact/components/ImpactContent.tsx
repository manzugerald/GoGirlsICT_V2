'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

import {
  Award,
  BarChart3,
  ChevronDown,
  TrendingUp,
  Users,
} from 'lucide-react';

import DashboardChart from '@/app/(admin)/admin/dashboard/chart/dashboardChart';
import AnimatedStats from '@/app/(admin)/admin/dashboard/chart/animatedStats';

import PageHero from '@/app/(root)/components/shared/page/PageHero';
import PageSection from '@/app/(root)/components/shared/page/PageSection';
import PageHeader from '@/app/(root)/components/shared/page/PageHeader';

const insights = [
  {
    icon: Users,
    title: 'Community Reach',
    description: 'Growing our network of learners, communities, and change-makers.',
    iconBoxClassName:
      'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
  },
  {
    icon: TrendingUp,
    title: 'Year-over-Year Growth',
    description: 'Sustained progress across our programs and activities.',
    iconBoxClassName:
      'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
  },
  {
    icon: Award,
    title: 'Quality Outcomes',
    description: 'A continued focus on meaningful and responsible program delivery.',
    iconBoxClassName:
      'bg-pink-100 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400',
  },
];

export default function ImpactContent() {
  const [isChartExpanded, setIsChartExpanded] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(contentRef, {
    once: true,
    margin: '-80px',
  });

  return (
    <>
      <PageHero
        title="Our Impact"
        description="Explore the data, outcomes, and progress behind our work in digital inclusion, education, innovation, and community development."
        backgroundImage="/assets/projects/images/banner/banner2.jpg"
      />

      <div ref={contentRef}>
        {/* Impact statistics */}
        <PageSection className="pb-6 pt-8">
          <PageHeader
            badge="Impact Metrics"
            title="Our Impact in Numbers"
            description="Current data showcasing our reach, programs, partnerships, and effectiveness."
            icon={<BarChart3 className="h-4 w-4" />}
            align="center"
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="relative z-10"
          >
            <AnimatedStats />
          </motion.div>
        </PageSection>

        {/* Main chart */}
        <PageSection className="pb-8 pt-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="relative"
          >
            <motion.div
              animate={{
                opacity: [0.25, 0.6, 0.25],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-lg"
            />

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
              {/* Chart header */}
              <div className="flex flex-col gap-4 border-b border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-950 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400">
                    <BarChart3 className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="heading-3 text-site-primary">
                      Detailed Impact Breakdown
                    </h2>

                    <p className="caption mt-1 text-site-muted">
                      Interactive visualization of current organizational data
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 sm:justify-end">
                  <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 dark:bg-green-900/20">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>

                    <span className="caption font-semibold text-green-700 dark:text-green-400">
                      Live Data
                    </span>
                  </div>

                  <motion.button
                    type="button"
                    whileHover={{
                      scale: 1.06,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    onClick={() => setIsChartExpanded((current) => !current)}
                    aria-label={
                      isChartExpanded
                        ? 'Collapse impact chart'
                        : 'Expand impact chart'
                    }
                    aria-expanded={isChartExpanded}
                    className="rounded-xl p-2 text-site-secondary transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <motion.div
                      animate={{
                        rotate: isChartExpanded ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </motion.button>
                </div>
              </div>

              {/* Chart content */}
              <motion.div
                initial={false}
                animate={{
                  height: isChartExpanded ? 'auto' : 430,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden"
              >
                <div className="p-4 sm:p-6 lg:p-8">
                  <DashboardChart />
                </div>
              </motion.div>

              {/* Expanded insights */}
              <motion.div
                initial={false}
                animate={{
                  height: isChartExpanded ? 'auto' : 0,
                  opacity: isChartExpanded ? 1 : 0,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
                  <div className="grid gap-5 md:grid-cols-3">
                    {insights.map((insight, index) => {
                      const Icon = insight.icon;

                      return (
                        <motion.article
                          key={insight.title}
                          initial={{
                            opacity: 0,
                            y: 15,
                          }}
                          animate={
                            isChartExpanded
                              ? {
                                  opacity: 1,
                                  y: 0,
                                }
                              : {}
                          }
                          transition={{
                            delay: index * 0.08,
                            duration: 0.4,
                          }}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${insight.iconBoxClassName}`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>

                          <div>
                            <h3 className="body font-bold text-site-primary">
                              {insight.title}
                            </h3>

                            <p className="caption mt-1 leading-relaxed text-site-secondary">
                              {insight.description}
                            </p>
                          </div>
                        </motion.article>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </PageSection>

        {/* Key insights */}
        <PageSection className="pb-16 pt-6">
          <PageHeader
            badge="What the Data Shows"
            title="Key Impact Insights"
            description="A concise interpretation of what our current metrics represent."
            icon={<TrendingUp className="h-4 w-4" />}
            align="center"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {insights.map((insight, index) => {
              const Icon = insight.icon;

              return (
                <motion.article
                  key={insight.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: '-60px',
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${insight.iconBoxClassName}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="heading-3 text-site-primary">
                    {insight.title}
                  </h3>

                  <p className="body mt-3 leading-relaxed text-site-secondary">
                    {insight.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </PageSection>
      </div>
    </>
  );
}