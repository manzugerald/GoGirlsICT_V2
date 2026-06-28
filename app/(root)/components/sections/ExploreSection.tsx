'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
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
      <div className="wrapper max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex rounded-full bg-[#9f004d]/10 px-4 py-2 caption font-semibold uppercase tracking-wide text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-400">
            Explore
          </span>

          <h2 className="heading-2 mt-4 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9f004d] via-pink-600 to-purple-600">
              Explore GoGirls ICT
            </span>
          </h2>

          <p className="body-lg text-site-secondary max-w-2xl mx-auto">
            Continue your journey through our programs, impact, media, events, people, and ways to get involved.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exploreItems.map((item, index) => {
            const Icon = item.icon;

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
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-lg transition-all duration-500 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900/90"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.gradient}`}
                />

                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="heading-3 text-site-primary mb-3 group-hover:text-[#9f004d] dark:group-hover:text-pink-400 transition-colors">
                  {item.title}
                </h3>

                <p className="body text-site-secondary mb-6 line-clamp-3">
                  {item.description}
                </p>

                <div className="inline-flex items-center gap-2 body font-semibold text-[#9f004d] dark:text-pink-400">
                  Explore
                  <motion.span
                    className="inline-flex"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}