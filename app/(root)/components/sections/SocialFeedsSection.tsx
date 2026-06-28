'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Facebook, Youtube, ExternalLink } from 'lucide-react';
import FacebookPostsCard from '@/components/shared/facebookPostsCard/facebookPostsCard';
import YouTubeVideosGrid from './YouTubeVideosGrid';

import Section from '../shared/components/Section';
import SectionHeader from '../shared/components/SectionHeader';
import SectionBackground from '../shared/components/SectionBackground';

export default function SocialFeedsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <Section id="social" className="relative">
      <div ref={containerRef}>
        <SectionBackground
          gradient="from-blue-500 via-purple-500 to-red-500"
          position="center"
          duration={30}
          opacity={[0.04, 0.09, 0.04]}
        />

        <SectionHeader
          badge="Social Media"
          title="Connect With Us"
          description="Stay updated with our latest news, stories, and impact across our social channels"
          icon={<span className="text-base">🌐</span>}
          badgeClassName="bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
          titleGradient="from-blue-600 via-purple-600 to-red-600"
          dividerGradient="from-blue-500 via-purple-500 to-red-500"
        />

        <div className="space-y-12 relative z-10">
          {/* Facebook */}
          <SocialFeedBlock
            title="Latest from Facebook"
            description="Follow our journey and community stories"
            href="https://facebook.com/GoGirlsICTInitiative"
            actionLabel="Visit Page"
            icon={<Facebook className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            iconBoxClassName="bg-blue-100 dark:bg-blue-900/20"
            titleHoverClassName="group-hover:text-blue-600 dark:group-hover:text-blue-400"
            buttonClassName="bg-blue-600 hover:bg-blue-700"
            borderGradient="from-blue-500 to-blue-600"
            delay={0.35}
            isInView={isInView}
          >
            <FacebookPostsCard />
          </SocialFeedBlock>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
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
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          </motion.div>

          {/* YouTube */}
          <SocialFeedBlock
            title="Latest from YouTube"
            description="Watch our videos and educational content"
            href="https://youtube.com/@GoGirlsICT"
            actionLabel="Subscribe"
            icon={<Youtube className="w-6 h-6 text-red-600 dark:text-red-400" />}
            iconBoxClassName="bg-red-100 dark:bg-red-900/20"
            titleHoverClassName="group-hover:text-red-600 dark:group-hover:text-red-400"
            buttonClassName="bg-red-600 hover:bg-red-700"
            borderGradient="from-red-500 to-red-600"
            delay={0.75}
            isInView={isInView}
          >
            <YouTubeVideosGrid />
          </SocialFeedBlock>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-12 relative z-10"
        >
          <p className="body text-site-secondary mb-4">
            Follow us on social media for daily updates and inspiring stories
          </p>

          <div className="flex items-center justify-center gap-4">
            <SocialIconLink
              href="https://facebook.com/GoGirlsICTInitiative"
              label="Facebook"
              className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/20 dark:hover:bg-blue-900/40"
            >
              <Facebook className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </SocialIconLink>

            <SocialIconLink
              href="https://youtube.com/@GoGirlsICT"
              label="YouTube"
              className="bg-red-100 hover:bg-red-200 dark:bg-red-900/20 dark:hover:bg-red-900/40"
            >
              <Youtube className="w-5 h-5 text-red-600 dark:text-red-400" />
            </SocialIconLink>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function SocialFeedBlock({
  title,
  description,
  href,
  actionLabel,
  icon,
  iconBoxClassName,
  titleHoverClassName,
  buttonClassName,
  borderGradient,
  delay,
  isInView,
  children,
}: {
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  icon: React.ReactNode;
  iconBoxClassName: string;
  titleHoverClassName: string;
  buttonClassName: string;
  borderGradient: string;
  delay: number;
  isInView: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.8 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className={`p-3 rounded-xl shadow-md ${iconBoxClassName}`}
          >
            {icon}
          </motion.div>

          <div>
            <h3
              className={`heading-3 text-site-primary transition-colors ${titleHoverClassName}`}
            >
              {title}
            </h3>
            <p className="caption text-site-muted">{description}</p>
          </div>
        </div>

        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`hidden md:flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg ${buttonClassName}`}
        >
          {actionLabel}
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </div>

      <motion.div
        whileHover={{ y: -5 }}
        className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className={`absolute -inset-0.5 bg-gradient-to-r ${borderGradient} rounded-2xl blur`}
        />

        <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

function SocialIconLink({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`p-3 rounded-full shadow-lg ${className}`}
      aria-label={label}
    >
      {children}
    </motion.a>
  );
}