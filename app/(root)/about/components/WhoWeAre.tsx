'use client';

import {
  motion,
  useReducedMotion,
} from 'framer-motion';

import {
  GraduationCap,
  Quote,
  Rocket,
  Sparkles,
  Users,
} from 'lucide-react';

import type {
  AboutContent,
} from '../data';

const pillars = [
  {
    key: 'engage',
    label: 'Engage',
    icon: Users,

    description:
      'Building trusted relationships with girls, schools, and local communities.',
  },
  {
    key: 'educate',
    label: 'Educate',
    icon: GraduationCap,

    description:
      'Delivering hands-on ICT skills, mentorship, and real learning pathways.',
  },
  {
    key: 'empower',
    label: 'Empower',
    icon: Rocket,

    description:
      'Equipping girls with the confidence and tools to lead in technology.',
  },
] as const;

const staggerContainer = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

function buildFadeUp(
  reducedMotion: boolean
) {
  return {
    hidden: {
      opacity: 0,

      y: reducedMotion
        ? 0
        : 18,
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

export default function WhoWeAre({
  content,
}: {
  content: AboutContent | null;
}) {
  const reducedMotion =
    useReducedMotion();

  const fadeUp = buildFadeUp(
    Boolean(reducedMotion)
  );

  const aboutText =
    content?.about ||
    'GoGirls ICT Initiative engages, educates, and empowers girls and communities through innovation and technology.';

  const aboutParagraphs =
    aboutText
      .split(/\n+/)
      .map((paragraph) =>
        paragraph.trim()
      )
      .filter(Boolean);

  return (
    <div aria-labelledby="who-we-are-heading">
      {/* Section heading */}
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
          id="who-we-are-heading"
          className="font-serif text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-gray-950 dark:text-white sm:text-5xl lg:text-[3.4rem]"
        >
          Who

          <span className="ml-3 bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-600 bg-clip-text text-transparent">
            We Are
          </span>
        </h2>
      </motion.header>

      {/* Identity banner and organisation story — stacked rows */}
      <motion.div
        variants={
          staggerContainer
        }
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
          margin:
            '0px 0px -40px 0px',
        }}
        className="mx-auto mt-8 flex max-w-6xl flex-col gap-10 sm:mt-10 lg:gap-14"
      >
        {/* Row 1 — organisation story, right below the heading */}
        <motion.div
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h3 className="font-serif text-2xl font-semibold leading-tight tracking-[-0.02em] text-gray-950 dark:text-white sm:text-3xl">
            Our{' '}
            <span className="bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Story
            </span>
          </h3>

          <div
            aria-hidden="true"
            className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-[#9f004d] to-purple-600"
          />

          <div className="mt-6 space-y-5 text-left">
            {aboutParagraphs.map(
              (
                paragraph,
                index
              ) => (
                <p
                  key={`${index}-${paragraph.slice(
                    0,
                    24
                  )}`}
                  className={
                    index === 0
                      ? 'whitespace-pre-line text-lg font-medium leading-8 text-gray-700 dark:text-gray-200 sm:text-xl sm:leading-9'
                      : 'body-lg whitespace-pre-line leading-8 text-gray-600 dark:text-gray-300'
                  }
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
        </motion.div>

        {/* Row 2 — identity banner with tagline and pillars */}
        <motion.div
          variants={fadeUp}
          className="group/identity relative overflow-hidden rounded-3xl border border-[#9f004d]/10 bg-gradient-to-br from-[#9f004d]/[0.07] via-white to-purple-500/[0.04] p-7 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-[#9f004d]/20 hover:shadow-[0_20px_50px_-35px_rgba(159,0,77,0.35)] dark:border-pink-500/15 dark:from-pink-500/[0.08] dark:via-gray-900 dark:to-purple-500/[0.07] dark:hover:border-pink-500/25 sm:p-9"
        >
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#9f004d]/10 transition-transform duration-500 group-hover/identity:scale-110 dark:border-pink-400/10"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-24 w-24 rounded-tr-full bg-[#9f004d]/[0.025] dark:bg-pink-500/[0.035]"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
            {/* Tagline */}
            <div className="lg:w-[280px] lg:shrink-0">
              <Quote
                aria-hidden="true"
                className="h-7 w-7 text-[#9f004d]/25 dark:text-pink-400/30"
              />

              <p className="mt-3 text-lg font-medium italic leading-8 text-gray-700 dark:text-gray-200">
                &ldquo;We create
                inclusive pathways
                through technology,
                education, and
                innovation.&rdquo;
              </p>
            </div>

            {/* Divider between tagline and pillars */}
            <div
              aria-hidden="true"
              className="h-px w-full bg-gradient-to-r from-[#9f004d]/35 to-transparent dark:from-pink-400/25 lg:h-20 lg:w-px lg:bg-gradient-to-b"
            />

            {/* Engage, Educate, Empower */}
            <div className="grid flex-1 gap-6 sm:grid-cols-3">
              {pillars.map(
                (
                  pillar,
                  index
                ) => {
                  const Icon =
                    pillar.icon;

                  return (
                    <div
                      key={
                        pillar.key
                      }
                      className={
                        index > 0
                          ? 'sm:border-l sm:border-gray-200/80 sm:pl-6 dark:sm:border-white/10'
                          : ''
                      }
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#9f004d]/20 bg-white text-[#9f004d] shadow-sm dark:border-pink-400/25 dark:bg-gray-900 dark:text-pink-300">
                        <Icon
                          aria-hidden="true"
                          className="h-4 w-4"
                        />
                      </span>

                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9f004d] dark:text-pink-300">
                        {
                          pillar.label
                        }
                      </p>

                      <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                        {
                          pillar.description
                        }
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
