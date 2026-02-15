'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Send,
  Mail,
  MessageSquare,
  User,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import type { Event } from '../../types/home';

interface GetInvolvedSectionProps {
  events: Event[] | null;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function GetInvolvedSection({ events }: GetInvolvedSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement contact form submission
    console.log('Contact form submitted:', formData);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div ref={containerRef} className="wrapper max-w-7xl mx-auto px-4 py-16 relative">
      {/* Animated background */}
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

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        {/* Badge */}
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
          <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-wide">
            Join Us
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100"
        >
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600"
            style={{ backgroundSize: '200% 200%' }}
          >
            Get Involved
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Join our community and be part of the change. Attend events, volunteer, or reach out to us
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="h-1 w-32 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto rounded-full mt-6"
        />
      </motion.div>

      {/* Events Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mb-16 relative z-10"
      >
        <motion.div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-xl"
            >
              <Calendar className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
              Upcoming Events
            </h3>
          </div>
        </motion.div>

        {events && events.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {events.map((event, idx) => (
              <motion.div
                key={event.id}
                variants={cardVariant}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glowing border */}
                <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />

                {/* Event image placeholder with gradient */}
                <div className="relative h-40 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Calendar className="w-16 h-16 text-white/80" />
                    </motion.div>
                  </div>

                  {/* Date badge */}
                  {event.startAt && (
                    <motion.div
                      initial={{ x: -100 }}
                      animate={{ x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="absolute top-3 left-3 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-lg"
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">
                          {new Date(event.startAt).getDate()}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {new Date(event.startAt).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="relative p-6">
                  <motion.h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {event.title}
                  </motion.h4>

                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                    {event.description}
                  </p>

                  {/* Event details */}
                  <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                    {event.startAt && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-500" />
                        <span>
                          {new Date(event.startAt).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    )}
                  </div>

                  {/* RSVP Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
                  >
                    RSVP Now
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Corner decoration */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-tl-full"
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
            </motion.div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No upcoming events at the moment
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
              Check back soon for exciting new events!
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="max-w-2xl mx-auto relative z-10"
      >
        {/* Form Header */}
        <motion.div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="p-3 bg-pink-100 dark:bg-pink-900/20 rounded-xl"
            >
              <MessageSquare className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
              Contact Us
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Glowing border */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-2xl blur"
          />

          <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <User className="w-4 h-4" />
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl dark:bg-gray-900 dark:text-gray-100 focus:border-pink-500 dark:focus:border-pink-500 focus:outline-none transition-all"
                  required
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9 }}
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <Mail className="w-4 h-4" />
                  Your Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl dark:bg-gray-900 dark:text-gray-100 focus:border-pink-500 dark:focus:border-pink-500 focus:outline-none transition-all"
                  required
                />
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 }}
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4" />
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl dark:bg-gray-900 dark:text-gray-100 focus:border-pink-500 dark:focus:border-pink-500 focus:outline-none transition-all resize-none"
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full relative overflow-hidden bg-gradient-to-r from-[#9f004d] via-pink-600 to-orange-600 text-white py-4 rounded-xl font-bold text-lg shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <motion.div
                  animate={isSubmitting ? { x: ['-100%', '100%'] } : {}}
                  transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
