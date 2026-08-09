'use client';

import {
  useRef,
} from 'react';

import {
  motion,
  useInView,
} from 'framer-motion';

import {
  ExternalLink,
  Facebook,
  Share2,
  Youtube,
} from 'lucide-react';

import {
  socialLinks,
} from '../data';

import FacebookPostsGrid from './FacebookPostsGrid';
import YouTubeVideosGrid from './YouTubeVideosGrid';

export default function SocialFeeds() {
  const sectionRef =
    useRef<HTMLElement>(null);

  const isInView = useInView(
    sectionRef,
    {
      once: true,
      margin: '-80px',
    }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pb-14 pt-20 sm:pb-20 sm:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] via-purple-500/[0.04] to-red-500/[0.04] dark:from-blue-500/[0.07] dark:via-purple-500/[0.06] dark:to-red-500/[0.07]" />

      <div className="relative mx-auto w-[90%]">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 font-semibold text-purple-700 dark:bg-purple-500/15 dark:text-purple-300">
            <Share2 className="h-4 w-4" />

            Social Media
          </span>

          <h1 className="heading-2 mt-5 text-site-primary">
            Connect With Us
          </h1>

          <p className="body-lg mt-4 text-site-secondary">
            Stay updated with our latest
            stories, videos, and community
            impact across our social
            channels.
          </p>
        </header>

        <div className="space-y-14">
          <SocialFeedBlock
            title="Latest from Facebook"
            description="Follow our journey and community stories."
            href={
              socialLinks.facebook
            }
            actionLabel="Visit Page"
            icon={
              <Facebook className="h-6 w-6" />
            }
            color="blue"
            delay={0.15}
            isInView={isInView}
          >
            <FacebookPostsGrid />
          </SocialFeedBlock>

          <div
            className="flex items-center gap-4"
            aria-hidden="true"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />

            <span className="h-2 w-2 rounded-full bg-blue-500" />

            <span className="h-2 w-2 rounded-full bg-purple-500" />

            <span className="h-2 w-2 rounded-full bg-red-500" />

            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />
          </div>

          <SocialFeedBlock
            title="Latest from YouTube"
            description="Watch our videos and educational content."
            href={
              socialLinks.youtube
            }
            actionLabel="Subscribe"
            icon={
              <Youtube className="h-6 w-6" />
            }
            color="red"
            delay={0.3}
            isInView={isInView}
          >
            <YouTubeVideosGrid />
          </SocialFeedBlock>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            delay: 0.5,
            duration: 0.55,
          }}
          className="mt-14 text-center"
        >
          <p className="body mb-5 text-site-secondary">
            Follow us for daily updates and
            inspiring stories.
          </p>

          <div className="flex justify-center gap-3">
            <SocialIconLink
              href={
                socialLinks.facebook
              }
              label="Facebook"
              className="bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white dark:bg-blue-500/15 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
            >
              <Facebook className="h-5 w-5" />
            </SocialIconLink>

            <SocialIconLink
              href={
                socialLinks.youtube
              }
              label="YouTube"
              className="bg-red-100 text-red-600 hover:bg-red-600 hover:text-white dark:bg-red-500/15 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white"
            >
              <Youtube className="h-5 w-5" />
            </SocialIconLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type SocialFeedBlockProps = {
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  icon: React.ReactNode;
  color: 'blue' | 'red';
  delay: number;
  isInView: boolean;
  children: React.ReactNode;
};

function SocialFeedBlock({
  title,
  description,
  href,
  actionLabel,
  icon,
  color,
  delay,
  isInView,
  children,
}: SocialFeedBlockProps) {
  const styles =
    color === 'blue'
      ? {
          icon:
            'bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400',

          button:
            'bg-blue-600 hover:bg-blue-700',

          title:
            'group-hover:text-blue-600 dark:group-hover:text-blue-400',
        }
      : {
          icon:
            'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400',

          button:
            'bg-red-600 hover:bg-red-700',

          title:
            'group-hover:text-red-600 dark:group-hover:text-red-400',
        };

  return (
    <motion.article
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
        delay,
        duration: 0.6,
      }}
      className="group"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm ${styles.icon}`}
          >
            {icon}
          </span>

          <div className="min-w-0">
            <h2
              className={`heading-3 text-site-primary transition-colors ${styles.title}`}
            >
              {title}
            </h2>

            <p className="caption text-site-muted">
              {description}
            </p>
          </div>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden shrink-0 items-center gap-2 rounded-xl px-4 py-2 font-semibold text-white shadow-md transition md:inline-flex ${styles.button}`}
        >
          {actionLabel}

          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {children}
    </motion.article>
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
      whileHover={{
        scale: 1.1,
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`rounded-full p-3 shadow-md transition-colors ${className}`}
      aria-label={label}
    >
      {children}
    </motion.a>
  );
}