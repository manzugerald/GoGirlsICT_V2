'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Calendar,
  Download,
  Eye,
  ExternalLink,
  FileText,
  Folder,
  ArrowRight,
} from 'lucide-react';
import type { Project, Report } from '../../types/home';

import Section from '../shared/components/Section';
import SectionHeader from '../shared/components/SectionHeader';
import SectionBackground from '../shared/components/SectionBackground';

interface OurWorkSectionProps {
  projects: Project[] | null;
  reports: Report[] | null;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OurWorkSection({ projects, reports }: OurWorkSectionProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  const featuredProjects = projects?.slice(0, 3) ?? [];
  const latestReports = reports?.slice(0, 3) ?? [];

  return (
    <Section id="our-work" className="relative">
      <div ref={containerRef}>
        <SectionBackground
          gradient="from-indigo-500 via-purple-500 to-pink-500"
          position="top-right"
          duration={50}
          opacity={[0.015, 0.035, 0.015]}
        />

        <SectionHeader
          badge="Our Portfolio"
          title="Our Work"
          description="Explore our innovative projects and comprehensive reports that showcase our impact"
          icon={<Folder className="w-4 h-4" />}
          badgeClassName="bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
          titleGradient="from-indigo-600 via-purple-600 to-pink-600"
          dividerGradient="from-indigo-500 via-purple-500 to-pink-500"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="relative z-10 space-y-16"
        >
          <WorkBlock
            title="Featured Projects"
            href="/projects"
            linkLabel="View All Projects"
            icon={<Folder className="w-6 h-6 text-pink-600 dark:text-pink-400" />}
            accent="pink"
          >
            {featuredProjects.length > 0 ? (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {featuredProjects.map((project, idx) => (
                  <ProjectCard key={project.id} project={project} index={idx} />
                ))}
              </motion.div>
            ) : (
              <EmptyState
                icon={<Folder className="w-16 h-16" />}
                title="No Projects Available"
                description="Check back soon for exciting new projects"
              />
            )}
          </WorkBlock>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
            <div className="h-2 w-2 rounded-full bg-[#9f004d]" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          </div>

          <WorkBlock
            title="Latest Reports"
            href="/reports"
            linkLabel="View All Reports"
            icon={<FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            accent="blue"
          >
            {latestReports.length > 0 ? (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {latestReports.map((report, idx) => (
                  <ReportCard key={report.id} report={report} index={idx} />
                ))}
              </motion.div>
            ) : (
              <EmptyState
                icon={<FileText className="w-16 h-16" />}
                title="No Reports Available"
                description="Reports will be published here as they become available"
              />
            )}
          </WorkBlock>
        </motion.div>
      </div>
    </Section>
  );
}

function WorkBlock({
  title,
  href,
  linkLabel,
  icon,
  accent,
  children,
}: {
  title: string;
  href: string;
  linkLabel: string;
  icon: React.ReactNode;
  accent: 'pink' | 'blue';
  children: React.ReactNode;
}) {
  const linkClass =
    accent === 'pink'
      ? 'text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300'
      : 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300';

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-800">
            {icon}
          </div>
          <h3 className="heading-3 text-site-primary">{title}</h3>
        </div>

        <motion.a
          href={href}
          whileHover={{ x: 5 }}
          className={`inline-flex items-center gap-2 body font-semibold ${linkClass}`}
        >
          {linkLabel}
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>

      {children}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.2 } }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-25 blur transition-opacity duration-300" />

      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20">
        {project.images && project.images.length > 0 ? (
          <>
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <ExternalLink className="w-7 h-7 text-white" />
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Folder className="w-16 h-16 text-pink-400 opacity-30" />
          </div>
        )}

        {project.projectStatus && (
          <div className="absolute top-3 right-3">
            <span
              className={`px-3 py-1 caption font-semibold rounded-full backdrop-blur-sm ${
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
        )}
      </div>

      <div className="relative p-6">
        <h3 className="heading-3 text-site-primary mb-2 line-clamp-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
          {project.title}
        </h3>

        {project.createdAt && (
          <div className="flex items-center gap-2 caption text-site-muted mb-4">
            <Calendar className="w-4 h-4" />
            {new Date(project.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            })}
          </div>
        )}

        <motion.a
          href={`/projects/${project.slug ?? project.id}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
        >
          View Project
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
}

function ReportCard({ report, index }: { report: Report; index: number }) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.2 } }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-25 blur transition-opacity duration-300" />

      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
        {report.images && report.images.length > 0 ? (
          <>
            <img
              src={report.images[0]}
              alt={report.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <FileText className="w-7 h-7 text-white" />
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FileText className="w-16 h-16 text-blue-400 opacity-30" />
          </div>
        )}

        {report.files && report.files.length > 0 && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 caption font-semibold rounded-full bg-indigo-500/90 text-white backdrop-blur-sm">
              {report.files.length} {report.files.length === 1 ? 'file' : 'files'}
            </span>
          </div>
        )}
      </div>

      <div className="relative p-6">
        <h3 className="heading-3 text-site-primary mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {report.title}
        </h3>

        <div className="flex items-center gap-4 caption text-site-muted mb-4">
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{report.accessCount || 0} views</span>
          </div>

          <div className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            <span>{report.downloadCount || 0}</span>
          </div>
        </div>

        {report.createdAt && (
          <div className="flex items-center gap-2 caption text-site-muted mb-4">
            <Calendar className="w-4 h-4" />
            {new Date(report.createdAt).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </div>
        )}

        <div className="flex gap-2 mt-4">
          <motion.a
            href={`/reports/${report.slug ?? report.id}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
          >
            View
            <ExternalLink className="w-4 h-4" />
          </motion.a>

          <button className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-site-primary font-semibold rounded-lg transition-all duration-300">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

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
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <div className="text-gray-300 dark:text-gray-600 mb-4">{icon}</div>
      <h3 className="heading-3 text-site-primary mb-2">{title}</h3>
      <p className="body text-site-secondary max-w-md">{description}</p>
    </div>
  );
}