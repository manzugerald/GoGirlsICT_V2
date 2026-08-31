'use client';

import Image from 'next/image';

import {
  motion,
  useReducedMotion,
} from 'framer-motion';

import {
  EyeIcon,
  FocusIcon,
  HeartIcon,
  TargetIcon,
} from 'lucide-react';

import type {
  AboutContent,
} from '../data';

const foundationCards = [
  {
    key: 'vision',
    title: 'Vision',
    icon: EyeIcon,

    image:
      '/assets/images/vision-mission-values/vision.png',

    gradient:
      'from-[#9f004d] to-pink-500',

    border:
      'border-[#9f004d]/15 dark:border-pink-500/20',

    iconBackground:
      'bg-[#9f004d]/[0.08] dark:bg-pink-500/10',

    iconColor:
      'text-[#9f004d] dark:text-pink-300',
  },
  {
    key: 'mission',
    title: 'Mission',
    icon: TargetIcon,

    image:
      '/assets/images/vision-mission-values/mission.png',

    gradient:
      'from-purple-600 to-[#9f004d]',

    border:
      'border-purple-500/15 dark:border-purple-400/20',

    iconBackground:
      'bg-purple-600/[0.08] dark:bg-purple-500/10',

    iconColor:
      'text-purple-600 dark:text-purple-300',
  },
  {
    key: 'focus',
    title: 'Focus',
    icon: FocusIcon,

    image:
      '/assets/images/vision-mission-values/focus.png',

    gradient:
      'from-pink-500 to-rose-500',

    border:
      'border-pink-500/15 dark:border-pink-400/20',

    iconBackground:
      'bg-pink-500/[0.08] dark:bg-pink-500/10',

    iconColor:
      'text-pink-600 dark:text-pink-300',
  },
  {
    key: 'coreValues',
    title: 'Core Values',
    icon: HeartIcon,

    image:
      '/assets/images/vision-mission-values/values.png',

    gradient:
      'from-[#9f004d] to-purple-700',

    border:
      'border-[#9f004d]/15 dark:border-pink-500/20',

    iconBackground:
      'bg-[#9f004d]/[0.08] dark:bg-pink-500/10',

    iconColor:
      'text-[#9f004d] dark:text-pink-300',
  },
] as const;

const staggerContainer = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

function buildCardVariant(
  reducedMotion: boolean
) {
  return {
    hidden: {
      opacity: 0,

      y: reducedMotion
        ? 0
        : 24,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration:
          reducedMotion
            ? 0.3
            : 0.6,

        ease: [
          0.22,
          1,
          0.36,
          1,
        ] as const,
      },
    },
  };
}

export default function OurFoundation({
  content,
}: {
  content: AboutContent | null;
}) {
  const reducedMotion =
    useReducedMotion();

  const cardVariant =
    buildCardVariant(
      Boolean(reducedMotion)
    );

  const liftOnHover =
    reducedMotion
      ? {}
      : {
          y: -6,

          transition: {
            duration: 0.25,
          },
        };

  return (
    <div
      aria-labelledby="our-foundation-heading"
    >
      {/* Foundation heading */}
      <motion.header
        initial={{
          opacity: 0,

          y: reducedMotion
            ? 0
            : 18,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration:
            reducedMotion
              ? 0.3
              : 0.6,

          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2
          id="our-foundation-heading"
          className="font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] text-gray-950 dark:text-white sm:text-4xl lg:text-5xl"
        >
          What Guides

          <span className="ml-2 bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-600 bg-clip-text text-transparent sm:ml-3">
            Our Work
          </span>
        </h2>

        <p className="body-lg mx-auto mt-4 max-w-2xl leading-8 text-gray-600 dark:text-gray-300">
          Our vision, mission, focus, and
          core values define our purpose,
          guide our decisions, and shape
          the impact we seek to create.
        </p>

        <div
          aria-hidden="true"
          className="mx-auto mt-6 flex items-center justify-center gap-2"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#9f004d]/50" />

          <span className="h-2 w-2 rotate-45 bg-[#9f004d] dark:bg-pink-400" />

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#9f004d]/50" />
        </div>
      </motion.header>

      {/* Foundation cards */}
      <motion.div
        variants={
          staggerContainer
        }
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
          margin:
            '0px 0px -40px 0px',
        }}
        className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4"
      >
        {foundationCards.map(
          (card) => {
            const Icon =
              card.icon;

            const contentValue =
              content?.[card.key];

            const contentText =
              typeof contentValue ===
              'string'
                ? contentValue
                : '';

            return (
              <motion.article
                key={card.key}
                variants={
                  cardVariant
                }
                whileHover={
                  liftOnHover
                }
                className="group/card relative h-full"
              >
                <div
                  className={`relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[1.5rem] border ${card.border} bg-white p-6 shadow-[0_16px_45px_-32px_rgba(15,23,42,0.4)] transition-[border-color,box-shadow] duration-300 group-hover/card:shadow-[0_22px_55px_-32px_rgba(15,23,42,0.32)] dark:bg-gray-900/90 dark:shadow-[0_16px_45px_-32px_rgba(0,0,0,0.85)] sm:p-7`}
                >
                  {/* Top accent */}
                  <span
                    className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-50 bg-gradient-to-r ${card.gradient} transition-transform duration-500 group-hover/card:scale-x-100`}
                  />

                  {/* Illustration */}
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
                        <Icon
                          className={`h-6 w-6 ${card.iconColor}`}
                        />
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

                    {/* Content */}
                    <div className="relative z-10 flex-1">
                      <p className="body whitespace-pre-line leading-7 text-gray-600 [hyphens:auto] [text-align:justify] [text-justify:inter-word] dark:text-gray-300">
                        {contentText ||
                          `Our ${card.title.toLowerCase()} statement will be available soon.`}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          }
        )}
      </motion.div>
    </div>
  );
}