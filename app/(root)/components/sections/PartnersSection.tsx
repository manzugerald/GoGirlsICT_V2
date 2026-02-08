'use client';

import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Users } from 'lucide-react';
import type { Partner } from '../../types/home';

interface PartnersSectionProps {
  partners: Partner[] | null;
}

export default function PartnersSection({ partners }: PartnersSectionProps) {
  if (!partners || partners.length === 0) {
    return null;
  }

  return (
    <div className="wrapper max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">
            🤝 Our Partners
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Working Together for Change
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Collaborating with organizations that share our vision of empowering girls through
          technology
        </p>
      </motion.div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, idx) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Card Content */}
            <div className="relative p-6">
              {/* Logo/Name Section */}
              <div className="flex items-start gap-4 mb-4">
                {partner.logo ? (
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">
                      {partner.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {partner.name}
                  </h3>

                  {partner.type && (
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-medium rounded">
                      {partner.type}
                    </span>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4 group-hover:w-full transition-all duration-500"></div>

              {/* Description */}
              {partner.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {partner.description}
                </p>
              )}

              {/* Stats */}
              <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 dark:text-gray-400">
                {partner._count?.beneficiaries !== undefined && (
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>{partner._count.beneficiaries} beneficiaries</span>
                  </div>
                )}

                {partner.locations && partner.locations.length > 0 && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>{partner.locations.length} locations</span>
                  </div>
                )}
              </div>

              {/* Locations */}
              {partner.locations && partner.locations.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {partner.locations.slice(0, 3).map((location: any) => (
                      <span
                        key={location.id}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {location.name}
                      </span>
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
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              )}
            </div>

            {/* Corner decoration */}
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
