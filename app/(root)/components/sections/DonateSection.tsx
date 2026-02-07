'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, ShoppingCart, ArrowRight, Sparkles, Users, Target } from 'lucide-react';

export default function DonateSection() {
  const impactStats = [
    { icon: Users, value: '500+', label: 'Girls Empowered' },
    { icon: Target, value: '20+', label: 'Active Projects' },
    { icon: Sparkles, value: '100%', label: 'Impact Driven' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9f004d] via-[#b0005a] to-[#8a0042]"></div>

      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
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

      <div className="wrapper max-w-7xl mx-auto px-4 py-20 relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Icon Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6"
          >
            <Heart className="w-10 h-10 text-white" fill="white" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Make a Difference Today
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your donation helps us continue our work and reach more communities. Every contribution,
            big or small, creates lasting impact.
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-12">
            {impactStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-colors duration-300"
                >
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-white mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary Donate Button */}
            <Link
              href="/donate"
              className="group relative inline-flex items-center gap-3 bg-white text-[#9f004d] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-white/20 hover:scale-105 duration-300 overflow-hidden"
            >
              <ShoppingCart className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Donate Now</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
            </Link>

            {/* Secondary Learn More Button */}
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Quote/Testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-white/20"
        >
          <blockquote className="text-white/90 text-lg md:text-xl italic max-w-3xl mx-auto">
            "When girls are empowered with knowledge and opportunity, societies become more just,
            innovative, and resilient."
          </blockquote>
          <p className="text-white/70 mt-4 font-semibold">— GoGirls ICT Initiative</p>
        </motion.div>
      </div>

      {/* Multi-layered gradient wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        {/* First wave layer - darker pink */}
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          style={{ transform: 'translateY(1px)' }}
        >
          <path
            d="M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z"
            className="fill-[#7a0039]"
            opacity="0.5"
          />
        </svg>

        {/* Second wave layer - medium */}
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          style={{ transform: 'translateY(10px)' }}
        >
          <path
            d="M0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50 L1200,120 L0,120 Z"
            className="fill-[#5a0029]"
            opacity="0.7"
          />
        </svg>

        {/* Third wave layer - footer color with gradient */}
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          style={{ transform: 'translateY(20px)' }}
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
        </svg>
      </div>
    </div>
  );
}
