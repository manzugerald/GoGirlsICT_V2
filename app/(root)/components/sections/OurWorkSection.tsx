'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Download, Eye, ExternalLink, FileText, Folder } from 'lucide-react';
import type { Project, Report } from '../../types/home';

interface OurWorkSectionProps {
  projects: Project[] | null;
  reports: Report[] | null;
}

export default function OurWorkSection({ projects, reports }: OurWorkSectionProps) {
  const [activeTab, setActiveTab] = useState('projects');

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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Our Work
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our innovative projects and comprehensive reports that showcase our impact
        </p>
      </motion.div>

      {/* Tabs Component */}
      <Tabs defaultValue="projects" onValueChange={setActiveTab} className="w-full">
        {/* Tab List - Enhanced Design */}
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-14 bg-gray-100 dark:bg-gray-800 p-1 rounded-full shadow-lg">
          <TabsTrigger
            value="projects"
            className="rounded-full data-[state=active]:bg-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 font-semibold text-base flex items-center gap-2"
          >
            <Folder className="w-4 h-4" />
            Projects
            {projects && projects.length > 0 && (
              <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-white/20">
                {projects.length}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger
            value="reports"
            className="rounded-full data-[state=active]:bg-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 font-semibold text-base flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Reports
            {reports && reports.length > 0 && (
              <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-white/20">
                {reports.length}
              </span>
            )}
          </TabsTrigger>
        </TabsList>

        {/* Projects Tab Content */}
        <TabsContent value="projects" className="mt-0">
          <AnimatePresence mode="wait">
            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {projects && projects.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, idx) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        whileHover={{ y: -8 }}
                        className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                      >
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20">
                          {project.images && project.images.length > 0 ? (
                            <>
                              <img
                                src={project.images[0]}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Folder className="w-16 h-16 text-pink-400 opacity-30" />
                            </div>
                          )}
                          {/* Status Badge */}
                          <div className="absolute top-3 right-3">
                            <span
                              className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
                                project.projectStatus === 'active'
                                  ? 'bg-green-500/90 text-white'
                                  : project.projectStatus === 'completed'
                                    ? 'bg-blue-500/90 text-white'
                                    : 'bg-gray-500/90 text-white'
                              }`}
                            >
                              {project.projectStatus}
                            </span>
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-6">
                          <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                            {project.title}
                          </h3>

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
                          <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg">
                            View Project
                            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {reports && reports.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {reports.map((report, idx) => (
                      <motion.div
                        key={report.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        whileHover={{ y: -8 }}
                        className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                      >
                        {/* Report Image/Thumbnail */}
                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
                          {report.images && report.images.length > 0 ? (
                            <>
                              <img
                                src={report.images[0]}
                                alt={report.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <FileText className="w-16 h-16 text-blue-400 opacity-30" />
                            </div>
                          )}
                          {/* File Count Badge */}
                          {report.files && report.files.length > 0 && (
                            <div className="absolute top-3 right-3">
                              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/90 text-white backdrop-blur-sm">
                                {report.files.length} {report.files.length === 1 ? 'file' : 'files'}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Report Content */}
                        <div className="p-6">
                          <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {report.title}
                          </h3>

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
                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
                              View
                              <ExternalLink className="w-4 h-4" />
                            </button>
                            <button className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg transition-all duration-300">
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      <div className="text-gray-300 dark:text-gray-600 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 max-w-md">{description}</p>
    </motion.div>
  );
}
