'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, ArrowRight, Sparkles, Users, Target } from 'lucide-react';

export default function DonateSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const impactStats = [
    { icon: Users, value: '500+', label: 'Girls Empowered' },
    { icon: Target, value: '20+', label: 'Active Projects' },
    { icon: Sparkles, value: '100%', label: 'Impact Driven' },
  ];

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-site-main">
      {/* Soft synced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-[#18000c]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.08, 0.16, 0.08],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full blur-3xl bg-gradient-to-br from-[#9f004d] via-pink-500 to-purple-500"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.06, 0.12, 0.06],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full blur-3xl bg-gradient-to-tr from-purple-500 via-pink-500 to-[#9f004d]"
        />
      </div>

      <div className="wrapper max-w-7xl mx-auto px-4 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-[#9f004d]/10 dark:bg-pink-500/10 rounded-full mb-6 relative"
          >
            <Heart className="w-10 h-10 text-[#9f004d] dark:text-pink-400" fill="currentColor" />

            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 border-4 border-[#9f004d]/40 dark:border-pink-400/40 rounded-full"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="heading-1 mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9f004d] via-pink-600 to-purple-600">
              Make a Difference Today
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="body-lg text-site-secondary mb-10 max-w-3xl mx-auto"
          >
            Your donation helps us continue our work and reach more communities. Every contribution,
            big or small, creates lasting impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-12"
          >
            {impactStats.map((stat, idx) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.06, y: -5 }}
                  className="relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-pink-100 dark:border-pink-900/30 shadow-lg p-5 md:p-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9f004d]/5 to-purple-500/5" />

                  <div className="relative">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#9f004d] dark:text-pink-400 mx-auto mb-3" />
                    <div className="heading-3 text-site-primary mb-1">{stat.value}</div>
                    <div className="caption text-site-secondary">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/donate"
              className="group relative inline-flex items-center gap-3 bg-[#9f004d] hover:bg-[#8a0042] text-white px-8 py-4 rounded-full font-bold shadow-2xl overflow-hidden transition-all"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />

              <ShoppingCart className="w-5 h-5 relative z-10" />
              <span className="relative z-10 body font-bold">Donate Now</span>

              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>

            <Link
              href="/get-involved"
              className="group inline-flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-800 text-site-primary px-8 py-4 rounded-full font-semibold border border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300"
            >
              <span className="body font-semibold">Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <blockquote className="body-lg text-site-secondary italic max-w-3xl mx-auto">
            "When girls are empowered with knowledge and opportunity, societies become more just,
            innovative, and resilient."
          </blockquote>

          <p className="body text-site-muted mt-4 font-semibold">
            — GoGirls ICT Initiative
          </p>
        </motion.div>
      </div>
    </section>
  );
}