'use client';

import { motion } from 'framer-motion';

import {
  Building2,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

import type { Partner } from '../data';

function formatInstitutionType(
  value: string
) {
  return value
    .replace(/_/g, ' ')
    .replace(
      /\b\w/g,
      (character) =>
        character.toUpperCase()
    );
}

export default function PartnerCard({
  partner,
  index,
}: {
  partner: Partner;
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.06,
        duration: 0.45,
      }}
      whileHover={{
        y: -6,
      }}
      className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-500" />

      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
          {partner.logo ? (
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="h-full w-full object-contain p-1"
            />
          ) : (
            <Building2 className="h-7 w-7 text-[#9f004d] dark:text-pink-400" />
          )}
        </div>

        <div className="min-w-0">
          <h3 className="heading-3 text-site-primary">
            {partner.name}
          </h3>

          <span className="caption mt-2 inline-block rounded-full bg-[#9f004d]/10 px-3 py-1 font-semibold text-[#9f004d] dark:bg-pink-500/15 dark:text-pink-400">
            {formatInstitutionType(
              partner.institutionType
            )}
          </span>
        </div>
      </div>

      <div className="caption mt-5 space-y-2 text-site-secondary">
        {partner.headName && (
          <p>
            Contact: {partner.headName}
          </p>
        )}

        {partner.email && (
          <a
            href={`mailto:${partner.email}`}
            className="flex items-center gap-2 transition hover:text-[#9f004d] dark:hover:text-pink-400"
          >
            <Mail className="h-4 w-4 shrink-0" />

            <span className="truncate">
              {partner.email}
            </span>
          </a>
        )}

        {partner.phone && (
          <a
            href={`tel:${partner.phone}`}
            className="flex items-center gap-2 transition hover:text-[#9f004d] dark:hover:text-pink-400"
          >
            <Phone className="h-4 w-4 shrink-0" />

            {partner.phone}
          </a>
        )}

        {partner.locations.length >
          0 && (
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />

            {partner.locations
              .map(
                (location) =>
                  location.locationName
              )
              .join(', ')}
          </p>
        )}
      </div>
    </motion.article>
  );
}