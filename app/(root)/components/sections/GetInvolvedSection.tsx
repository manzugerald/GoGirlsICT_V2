'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Clock, Sparkles, ArrowRight } from 'lucide-react';
import type { Event } from '../../types/home';
import { extractPlainText } from '@/lib/tiptap';

interface GetInvolvedSectionProps {
  events: Event[] | null;
}

export default function GetInvolvedSection({ events }: GetInvolvedSectionProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <div ref={containerRef} className="wrapper max-w-7xl mx-auto px-4 py-16 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [0, 90, 180],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.05, 0.1],
            rotate: [180, 90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500 to-red-500 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/20 rounded-full mb-4 shadow-lg"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
          </motion.div>

          <span className="caption text-orange-600 dark:text-orange-400 font-semibold uppercase tracking-wide">
            Join Us
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="heading-2 mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
            Get Involved
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="body-lg text-site-secondary max-w-2xl mx-auto"
        >
          Join our community and be part of the change. Attend events, volunteer, or reach out to us.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="h-1 w-32 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto rounded-full mt-6"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mb-10 relative z-10"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-xl"
            >
              <Calendar className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </motion.div>

            <h3 className="heading-3 text-site-primary">Upcoming Events</h3>
          </div>
        </div>

        {events && events.length > 0 ? (
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {events.slice(0, 3).map((event: any, idx) => {
              const title = extractPlainText(event.eventTitle) || 'Untitled Event';
              const startAt = event.startAt ?? event.startDate ?? event.eventStartDate;
              const location = event.location ?? event.eventLocation;
              const description = extractPlainText(event.description ?? event.eventDescription);

              return (
                <motion.div
                  key={event.id}
                  variants={{
                    hidden: { opacity: 0, y: 40, rotateX: -10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-800"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />

                  <div className="relative h-40 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 overflow-hidden">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <Calendar className="w-16 h-16 text-white/80" />
                    </div>

                    {startAt && (
                      <motion.div
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="absolute top-3 left-3 bg-white dark:bg-gray-900 px-3 py-2 rounded-lg shadow-lg"
                      >
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">
                            {new Date(startAt).getDate()}
                          </div>
                          <div className="caption text-site-muted">
                            {new Date(startAt).toLocaleDateString('en-US', {
                              month: 'short',
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="relative p-6">
                    <h4 className="body-lg font-semibold text-site-primary mb-2 line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {title}
                    </h4>

                    <p className="body text-site-secondary line-clamp-3 mb-4">
                      {description}
                    </p>

                    <div className="space-y-2 caption text-site-muted">
                      {startAt && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-orange-500" />
                          <span>
                            {new Date(startAt).toLocaleTimeString('en-US', {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                        </div>
                      )}

                      {location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-orange-500" />
                          <span className="line-clamp-1">{location}</span>
                        </div>
                      )}
                    </div>

                    <motion.a
                      href={`/events/${event.slug ?? event.id}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
                    >
                      View Event
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
            <p className="body-lg text-site-muted">No upcoming events at the moment</p>
            <p className="body text-site-muted mt-2">Check back soon for exciting new events!</p>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-10 flex justify-center relative z-10"
      >
        <motion.a
          href="/events"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-2 rounded-full bg-[#9f004d] hover:bg-[#8a0042] px-7 py-3 text-white font-semibold shadow-xl transition-all duration-300"
        >
          View All Events
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </div>
  );
}