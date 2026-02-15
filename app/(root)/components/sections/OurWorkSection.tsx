'use client';

import { useState, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Calendar,
  Download,
  Eye,
  ExternalLink,
  FileText,
  Folder,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import type { Project, Report } from '../../types/home';

interface OurWorkSectionProps {
  projects: Project[] | null;
  reports: Report[] | null;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
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
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function OurWorkSection({ projects, reports }: OurWorkSectionProps) {
  const [activeTab, setActiveTab] = useState('projects');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <div ref={containerRef} className="wrapper max-w-7xl mx-auto px-4 py-16 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-3xl"
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
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mb-4 shadow-lg"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <Folder className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </motion.div>
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wide">
            Our Portfolio
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
            className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
            style={{ backgroundSize: '200% 200%' }}
          >
            Our Work
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Explore our innovative projects and comprehensive reports that showcase our impact
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="h-1 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"
        />
      </motion.div>

      {/* Tabs Component */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10"
      >
        <Tabs defaultValue="projects" onValueChange={setActiveTab} className="w-full">
          {/* Tab List */}
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-14 bg-gray-100 dark:bg-gray-800 p-1 rounded-full shadow-lg">
            <TabsTrigger
              value="projects"
              className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-600 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 font-semibold text-base flex items-center gap-2"
            >
              <motion.div
                animate={activeTab === 'projects' ? { rotate: 360 } : {}}
                transition={{ duration: 0.6 }}
              >
                <Folder className="w-4 h-4" />
              </motion.div>
              Projects
              {projects && projects.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-1 px-2 py-0.5 text-xs rounded-full bg-white/20"
                >
                  {projects.length}
                </motion.span>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 font-semibold text-base flex items-center gap-2"
            >
              <motion.div
                animate={activeTab === 'reports' ? { rotate: 360 } : {}}
                transition={{ duration: 0.6 }}
              >
                <FileText className="w-4 h-4" />
              </motion.div>
              Reports
              {reports && reports.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-1 px-2 py-0.5 text-xs rounded-full bg-white/20"
                >
                  {reports.length}
                </motion.span>
              )}
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab Content */}
          <TabsContent value="projects" className="mt-0">
            <AnimatePresence mode="wait">
              {activeTab === 'projects' && (
                <motion.div
                  key="projects"
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -20 }}
                  variants={staggerContainer}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {projects && projects.length > 0 ? (
                    projects.map((project, idx) => (
                      <motion.div
                        key={project.id}
                        variants={cardVariant}
                        whileHover={{
                          y: -12,
                          scale: 1.02,
                          rotateY: 5,
                          transition: { duration: 0.3 },
                        }}
                        className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {/* Glowing border */}
                        <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />

                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20">
                          {project.images && project.images.length > 0 ? (
                            <>
                              <motion.img
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 0.6 }}
                                src={project.images[0]}
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                              <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center"
                              >
                                <motion.div
                                  initial={{ scale: 0 }}
                                  whileHover={{ scale: 1, rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                                >
                                  <ExternalLink className="w-8 h-8 text-white" />
                                </motion.div>
                              </motion.div>
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <Folder className="w-16 h-16 text-pink-400 opacity-30" />
                              </motion.div>
                            </div>
                          )}

                          {/* Status Badge */}
                          <motion.div
                            initial={{ x: 100 }}
                            animate={{ x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="absolute top-3 right-3"
                          >
                            <motion.span
                              whileHover={{ scale: 1.1 }}
                              className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
                                project.projectStatus === 'active'
                                  ? 'bg-green-500/90 text-white'
                                  : project.projectStatus === 'completed'
                                    ? 'bg-blue-500/90 text-white'
                                    : 'bg-gray-500/90 text-white'
                              }`}
                            >
                              {project.projectStatus}
                            </motion.span>
                          </motion.div>
                        </div>

                        {/* Project Content */}
                        <div className="relative p-6">
                          <motion.h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                            {project.title}
                          </motion.h3>

                          {/* Date */}
                          {project.createdAt && (
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                              <Calendar className="w-4 h-4" />
                              {new Date(project.createdAt).toLocaleDateString('en-US', {
                                month: 'short',
                                year: 'numeric',
                              })}
                            </div>
                          )}

                          {/* View Project Link */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
                          >
                            View Project
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </motion.div>
                          </motion.button>
                        </div>

                        {/* Corner decoration */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-tl-full"
                        />
                      </motion.div>
                    ))
                  ) : (
                    <EmptyState
                      icon={<Folder className="w-16 h-16" />}
                      title="No Projects Available"
                      description="Check back soon for exciting new projects"
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>

          {/* Reports Tab Content */}
          <TabsContent value="reports" className="mt-0">
            <AnimatePresence mode="wait">
              {activeTab === 'reports' && (
                <motion.div
                  key="reports"
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -20 }}
                  variants={staggerContainer}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {reports && reports.length > 0 ? (
                    reports.map((report, idx) => (
                      <motion.div
                        key={report.id}
                        variants={cardVariant}
                        whileHover={{
                          y: -12,
                          scale: 1.02,
                          rotateY: 5,
                          transition: { duration: 0.3 },
                        }}
                        className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {/* Glowing border */}
                        <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />

                        {/* Report Image */}
                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
                          {report.images && report.images.length > 0 ? (
                            <>
                              <motion.img
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 0.6 }}
                                src={report.images[0]}
                                alt={report.title}
                                className="w-full h-full object-cover"
                              />
                              <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center"
                              >
                                <motion.div
                                  initial={{ scale: 0 }}
                                  whileHover={{ scale: 1, rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                                >
                                  <FileText className="w-8 h-8 text-white" />
                                </motion.div>
                              </motion.div>
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <FileText className="w-16 h-16 text-blue-400 opacity-30" />
                              </motion.div>
                            </div>
                          )}

                          {/* File Count Badge */}
                          {report.files && report.files.length > 0 && (
                            <motion.div
                              initial={{ x: 100 }}
                              animate={{ x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="absolute top-3 right-3"
                            >
                              <motion.span
                                whileHover={{ scale: 1.1 }}
                                className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/90 text-white backdrop-blur-sm"
                              >
                                {report.files.length} {report.files.length === 1 ? 'file' : 'files'}
                              </motion.span>
                            </motion.div>
                          )}
                        </div>

                        {/* Report Content */}
                        <div className="relative p-6">
                          <motion.h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {report.title}
                          </motion.h3>

                          {/* Stats */}
                          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{report.accessCount || 0} views</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Download className="w-4 h-4" />
                              <span>{report.downloadCount || 0}</span>
                            </div>
                          </div>

                          {/* Date */}
                          {report.createdAt && (
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                              <Calendar className="w-4 h-4" />
                              {new Date(report.createdAt).toLocaleDateString('en-US', {
                                month: 'long',
                                year: 'numeric',
                              })}
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="flex gap-2 mt-4">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
                            >
                              View
                              <ExternalLink className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1, rotate: 360 }}
                              whileTap={{ scale: 0.9 }}
                              transition={{ duration: 0.3 }}
                              className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg transition-all duration-300"
                            >
                              <Download className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>

                        {/* Corner decoration */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-full"
                        />
                      </motion.div>
                    ))
                  ) : (
                    <EmptyState
                      icon={<FileText className="w-16 h-16" />}
                      title="No Reports Available"
                      description="Reports will be published here as they become available"
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}

// Empty State Component
function EmptyState({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="col-span-full flex flex-col items-center justify-center py-20 text-center"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-gray-300 dark:text-gray-600 mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 max-w-md">{description}</p>
    </motion.div>
  );
}
