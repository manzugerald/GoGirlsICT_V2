'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, ArrowRight, Sparkles, Users, Target, TrendingUp } from 'lucide-react';

export default function DonateSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const impactStats = [
    { icon: Users, value: '500+', label: 'Girls Empowered' },
    { icon: Target, value: '20+', label: 'Active Projects' },
    { icon: Sparkles, value: '100%', label: 'Impact Driven' },
  ];

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9f004d] via-[#b0005a] to-[#8a0042]"></div>

      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
      </div>

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: ['100%', '-100%'],
              x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
            className="absolute"
            style={{ left: Math.random() * 100 + '%' }}
          >
            <Heart className="w-4 h-4 text-white" fill="white" />
          </motion.div>
        ))}
      </div>

      <div className="wrapper max-w-7xl mx-auto px-4 py-20 relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Icon Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-10 h-10 text-white" fill="white" />
            </motion.div>
            {/* Pulse rings */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 border-4 border-white rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 border-4 border-white rounded-full"
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 40px rgba(255,255,255,0.8)',
                  '0 0 20px rgba(255,255,255,0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Make a Difference Today
            </motion.span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Your donation helps us continue our work and reach more communities. Every contribution,
            big or small, creates lasting impact.
          </motion.p>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-12"
          >
            {impactStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Glowing effect */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  />

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white mx-auto mb-2" />
                  </motion.div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary Donate Button */}
            <Link
              href="/donate"
              className="group relative inline-flex items-center gap-3 bg-white text-[#9f004d] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-100 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <ShoppingCart className="w-5 h-5 relative z-10" />
              </motion.div>
              <span className="relative z-10">Donate Now</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>

            {/* Secondary Learn More Button */}
            <Link
              href="/get-involved"
              className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Learn More</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Quote/Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-white/20"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <blockquote className="text-white/90 text-lg md:text-xl italic max-w-3xl mx-auto">
              "When girls are empowered with knowledge and opportunity, societies become more just,
              innovative, and resilient."
            </blockquote>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-white/70 mt-4 font-semibold"
          >
            — GoGirls ICT Initiative
          </motion.p>
        </motion.div>
      </div>

      {/* Multi-layered gradient wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        {/* First wave layer */}
        <motion.svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          style={{ transform: 'translateY(1px)' }}
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <path
            d="M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z"
            className="fill-[#7a0039]"
            opacity="0.5"
          />
        </motion.svg>

        {/* Second wave layer */}
        <motion.svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          style={{ transform: 'translateY(10px)' }}
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          <path
            d="M0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50 L1200,120 L0,120 Z"
            className="fill-[#5a0029]"
            opacity="0.7"
          />
        </motion.svg>

        {/* Third wave layer */}
        <motion.svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          style={{ transform: 'translateY(20px)' }}
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4a0021" stopOpacity="0.9" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 C250,70 450,10 600,40 C750,70 950,10 1200,40 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            className="text-gray-50 dark:text-gray-950"
          />
        </motion.svg>
      </div>
    </div>
  );
}