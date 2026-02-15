'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, MapPin, Users, Building2, Sparkles } from 'lucide-react';
import type { Partner } from '../../types/home';

interface PartnersSectionProps {
  partners: Partner[] | null;
}

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
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PartnersSection({ partners }: PartnersSectionProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  if (!partners || partners.length === 0) {
    return null;
  }

  return (
    <div ref={containerRef} className="wrapper max-w-7xl mx-auto px-4 py-16 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-3xl"
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
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4 shadow-lg"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🤝
          </motion.div>
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">
            Our Partners
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
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
            style={{ backgroundSize: '200% 200%' }}
          >
            Working Together for Change
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Collaborating with organizations that share our vision of empowering girls through
          technology
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="h-1 w-32 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto rounded-full mt-6"
        />
      </motion.div>

      {/* Partners Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
      >
        {partners.map((partner, idx) => (
          <motion.div
            key={partner.id}
            variants={cardVariant}
            whileHover={{
              y: -10,
              scale: 1.03,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Glowing border */}
            <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />

            {/* Gradient overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.1 }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5"
            />

            {/* Card Content */}
            <div className="relative p-6">
              {/* Logo/Name Section */}
              <div className="flex items-start gap-4 mb-4">
                {partner.logo ? (
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0 shadow-md"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md"
                  >
                    <span className="text-white text-2xl font-bold">
                      {partner.name.charAt(0).toUpperCase()}
                    </span>
                  </motion.div>
                )}

                <div className="flex-1 min-w-0">
                  <motion.h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {partner.name}
                  </motion.h3>

                  {partner.type && (
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-block px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-medium rounded"
                    >
                      {partner.type}
                    </motion.span>
                  )}
                </div>
              </div>

              {/* Animated divider */}
              <motion.div
                initial={{ width: '4rem' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.5 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4"
              />

              {/* Description */}
              {partner.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {partner.description}
                </p>
              )}

              {/* Stats */}
              <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 dark:text-gray-400">
                {partner._count?.beneficiaries !== undefined && (
                  <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>{partner._count.beneficiaries} beneficiaries</span>
                  </motion.div>
                )}

                {partner.locations && partner.locations.length > 0 && (
                  <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>{partner.locations.length} locations</span>
                  </motion.div>
                )}
              </div>

              {/* Locations */}
              {partner.locations && partner.locations.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {partner.locations.slice(0, 3).map((location: any) => (
                      <motion.span
                        key={location.id}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {location.name}
                      </motion.span>
                    ))}
                    {partner.locations.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded">
                        +{partner.locations.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Website Link */}
              {partner.website && (
                <motion.a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
                >
                  <span>Visit Website</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </motion.a>
              )}
            </div>

            {/* Corner decoration */}
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-tr-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
