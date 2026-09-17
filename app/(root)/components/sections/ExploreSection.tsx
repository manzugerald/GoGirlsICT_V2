'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  BarChart3,
  Video,
  CalendarDays,
  Users,
  HeartHandshake,
} from 'lucide-react';

const exploreItems = [
  {
    title: 'Programs',
    description: 'Explore our digital skills, mentorship, innovation, and community programs.',
    href: '/programs',
    icon: BookOpen,
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Impact',
    description: 'See the measurable change we are creating with girls, women, and communities.',
    href: '/impact',
    icon: BarChart3,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Media',
    description: 'Watch videos, follow stories, and explore our digital media updates.',
    href: '/media',
    icon: Video,
    gradient: 'from-red-500 to-orange-600',
  },
  {
    title: 'Events',
    description: 'Join trainings, workshops, bootcamps, and community activities.',
    href: '/events',
    icon: CalendarDays,
    gradient: 'from-orange-500 to-yellow-600',
  },
  {
    title: 'About Us',
    description: 'Learn about our story, mission, values, team, mentors, and board members.',
    href: '/about',
    icon: Users,
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Get Involved',
    description: 'Partner, volunteer, donate, or connect with GoGirls ICT Initiative.',
    href: '/get-involved',
    icon: HeartHandshake,
    gradient: 'from-[#9f004d] to-pink-600',
  },
];

export default function ExploreSection() {
  return (
    <section className="relative px-4 py-5">
      <div className="wrapper">
        <div className="text-center mb-12">
          <span className="inline-flex rounded-full bg-[#9f004d]/10 px-4 py-2 caption font-semibold uppercase tracking-wide text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-400">
            Explore
          </span>

          {/* Same title gradient standard as the rest of the home page's
              section titles. */}
          <h2 className="heading-2 mt-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
              Explore GoGirls ICT
            </span>
          </h2>
        </div>

        {/* items-start so each card keeps its own content-driven height
            instead of the grid stretching every card in a row to match
            the tallest one. xl: goes to all 6 cards in a single row —
            there are exactly 6 fixed items, so on a large/ultra-wide
            screen (inside the full-bleed .wrapper) showing them all at
            once reads better than 2 rows of 3 stretched unnecessarily
            wide. */}
        <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {exploreItems.map((item, index) => {
            const Icon = item.icon;

            // The whole card is the link (no separate "Explore" label/
            // arrow needed) — a flat card, no glow/blur behind it.
            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative block"
              >
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-500 group-hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.gradient}`}
                  />

                  {/* Icon box scales with viewport instead of a fixed 56px. */}
                  <div
                    className={`mb-5 flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                  </div>

                  <h3 className="heading-3 text-site-primary mb-3 group-hover:text-[#9f004d] dark:group-hover:text-pink-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* No line-clamp — the card grows to fit the full
                      description instead of truncating it. */}
                  <p className="body text-site-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}