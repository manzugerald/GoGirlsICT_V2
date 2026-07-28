'use client';

import { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useInView,
  useReducedMotion,
} from 'framer-motion';
import {
  EyeIcon,
  FocusIcon,
  HeartIcon,
  Sparkles,
  TargetIcon,
} from 'lucide-react';

import type { AboutContent } from '../data';

const foundationCards = [
  {
    key: 'vision',
    title: 'Vision',
    icon: EyeIcon,
    image: '/assets/images/vision-mission-values/vision.png',
    gradient: 'from-[#9f004d] to-pink-500',
    border: 'border-[#9f004d]/15 dark:border-pink-500/20',
    iconBackground: 'bg-[#9f004d]/[0.08] dark:bg-pink-500/10',
    iconColor: 'text-[#9f004d] dark:text-pink-300',
  },
  {
    key: 'mission',
    title: 'Mission',
    icon: TargetIcon,
    image: '/assets/images/vision-mission-values/mission.png',
    gradient: 'from-purple-600 to-[#9f004d]',
    border: 'border-purple-500/15 dark:border-purple-400/20',
    iconBackground: 'bg-purple-600/[0.08] dark:bg-purple-500/10',
    iconColor: 'text-purple-600 dark:text-purple-300',
  },
  {
    key: 'focus',
    title: 'Focus',
    icon: FocusIcon,
    image: '/assets/images/vision-mission-values/focus.png',
    gradient: 'from-pink-500 to-rose-500',
    border: 'border-pink-500/15 dark:border-pink-400/20',
    iconBackground: 'bg-pink-500/[0.08] dark:bg-pink-500/10',
    iconColor: 'text-pink-600 dark:text-pink-300',
  },
  {
    key: 'coreValues',
    title: 'Core Values',
    icon: HeartIcon,
    image: '/assets/images/vision-mission-values/values.png',
    gradient: 'from-[#9f004d] to-purple-700',
    border: 'border-[#9f004d]/15 dark:border-pink-500/20',
    iconBackground: 'bg-[#9f004d]/[0.08] dark:bg-pink-500/10',
    iconColor: 'text-[#9f004d] dark:text-pink-300',
  },
] as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

function buildCardVariant(reduced: boolean) {
  return {
    hidden: {
      opacity: 0,
      y: reduced ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0.3 : 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };
}

export default function AboutUs({
  content,
}: {
  content: AboutContent | null;
}) {
  const containerRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const isInView = useInView(containerRef, {
    once: true,
    margin: '-80px',
  });

  const aboutText =
    content?.about ||
    'GoGirls ICT Initiative engages, educates, and empowers girls and communities through innovation and technology.';

  const aboutParagraphs = aboutText
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  const cardVariant = buildCardVariant(Boolean(reducedMotion));
  const liftOnHover = reducedMotion
    ? {}
    : { y: -6, transition: { duration: 0.25 } };

  return (
    <section
      ref={containerRef}
      aria-labelledby="who-we-are-heading"
      className="relative isolate overflow-hidden bg-[#fafafa] p-14 dark:bg-gray-950 sm:pb-20 lg:pb-24"
    >
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)]" />
        <div className="absolute -left-48 top-0 h-[480px] w-[480px] rounded-full bg-[#9f004d]/[0.04] blur-[120px] dark:bg-pink-500/[0.05]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300/80 to-transparent dark:via-gray-800" />
      </div>

      <div className="relative mx-auto w-[90%] max-w-[1400px]">
        {/* Who We Are — plain content on the section background, no card wrapper */}
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            id="who-we-are-heading"
            className="text-center font-serif text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-gray-950 dark:text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Who
            <span className="ml-3 bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-600 bg-clip-text text-transparent">
              We Are
            </span>
          </h2>

          {/* Tagline + story row */}
          <div className="mb-4 p-4 grid gap-6 lg:grid-cols-[0.5fr_1fr] lg:gap-14">
            {/* Left: tagline + tags, in its own tinted panel for identity */}
            <div>
              <p className="text-base font-medium leading-7 text-gray-700 dark:text-gray-200 sm:text-lg sm:leading-8">
                We create inclusive pathways through technology, education,
                and innovation.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9f004d] dark:text-pink-300">
                <span>Engage</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#9f004d] dark:bg-pink-400" />
                <span>Educate</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#9f004d] dark:bg-pink-400" />
                <span>Empower</span>
              </div>
            </div>

            {/* Right: paragraphs */}
            <div className="lg:flex lg:flex-col lg:justify-center lg:border-l lg:border-gray-200 lg:pl-14 dark:lg:border-white/10">
              {/* Left-aligned prose — justified text creates uneven gaps at this
                  column width, so we keep natural ragged-right edges instead. */}
              <div className="space-y-5">
                {aboutParagraphs.map((paragraph, index) => (
                  <p
                    key={`${index}-${paragraph.slice(0, 24)}`}
                    className={
                      index === 0
                        ? 'whitespace-pre-line text-lg font-medium leading-8 text-gray-700 dark:text-gray-200 sm:text-xl sm:leading-9'
                        : 'body-lg whitespace-pre-line leading-8 text-gray-600 dark:text-gray-300'
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision, Mission, Focus and Core Values cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {foundationCards.map((card) => {
            const Icon = card.icon;
            const contentValue = content?.[card.key];
            const contentText =
              typeof contentValue === 'string' ? contentValue : '';

            return (
              <motion.article
                key={card.key}
                variants={cardVariant}
                whileHover={liftOnHover}
                className="group/card relative h-full"
              >
                <div
                  className={`relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[1.5rem] border ${card.border} bg-white p-6 shadow-[0_16px_45px_-32px_rgba(15,23,42,0.4)] transition-[border-color,box-shadow] duration-300 group-hover/card:shadow-[0_22px_55px_-32px_rgba(15,23,42,0.32)] dark:bg-gray-900/90 dark:shadow-[0_16px_45px_-32px_rgba(0,0,0,0.85)] sm:p-7`}
                >
                  {/* Top accent */}
                  <span
                    className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-50 bg-gradient-to-r ${card.gradient} transition-transform duration-500 group-hover/card:scale-x-100`}
                  />

                  {/* Background illustration */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-2 right-2 h-32 w-32 opacity-[0.06] grayscale transition-[opacity,filter] duration-500 group-hover/card:opacity-[0.1] group-hover/card:grayscale-0 dark:opacity-[0.08]"
                  >
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="128px"
                      className="object-contain"
                    />
                  </div>

                  <div className="relative flex h-full flex-col">
                    {/* Icon and title */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/80 ${card.iconBackground} shadow-sm dark:border-white/10`}
                      >
                        <Icon className={`h-6 w-6 ${card.iconColor}`} />
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500">
                          Our
                        </p>
                        <h3 className="font-serif text-2xl font-semibold text-gray-950 dark:text-white">
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-2">
                      <span
                        className={`h-1 w-12 rounded-full bg-gradient-to-r ${card.gradient} transition-[width] duration-500 group-hover/card:w-20`}
                      />
                      <span className="h-px flex-1 bg-gray-200/90 dark:bg-white/[0.08]" />
                    </div>

                    {/* Content from database — left-aligned for even, readable rag */}
                    <div className="relative z-10 flex-1">
                      <p className="body whitespace-pre-line leading-7 text-gray-600 dark:text-gray-300">
                        {contentText ||
                          `Our ${card.title.toLowerCase()} statement will be available soon.`}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom divider — matches the accent motif used above, static rather
            than a perpetually looping animation */}
        <div
          aria-hidden="true"
          className="mx-auto mt-16 flex max-w-xs items-center justify-center gap-3"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#9f004d]/40 dark:to-pink-400/30" />
          <span className="h-2 w-2 rotate-45 bg-[#9f004d] dark:bg-pink-400" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#9f004d]/40 dark:to-pink-400/30" />
        </div>
      </div>
    </section>
  );
}