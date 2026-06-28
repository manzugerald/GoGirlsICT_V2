'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Building2, HeartHandshake, Star } from 'lucide-react';
import type { Partner } from '../../types/home';

import Section from '../shared/components/Section';
import SectionHeader from '../shared/components/SectionHeader';
import SectionBackground from '../shared/components/SectionBackground';

interface PartnersSectionProps {
  partners: Partner[] | null;
}

const isFundingPartner = (partner: Partner) => partner.institutionCategory === 'funding';

const formatInstitutionType = (type?: string | null) => {
  if (!type) return 'Institution';

  return type.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
};

export default function PartnersSection({ partners }: PartnersSectionProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  if (!partners || partners.length === 0) return null;

  const fundingPartners = partners.filter(isFundingPartner).slice(0, 3);

  return (
    <Section className="relative">
      <div ref={containerRef}>
        <SectionBackground
          gradient="from-pink-500 via-purple-500 to-[#9f004d]"
          position="top-left"
          duration={45}
          opacity={[0.015, 0.035, 0.015]}
        />

        <SectionHeader
          badge="Funding Partners"
          title="Partners Supporting Our Mission"
          description="We work with stakeholders who share our vision of engaging, educating, and empowering communities through Innovation and Technology"
          icon={<HeartHandshake className="w-4 h-4" />}
          badgeClassName="bg-[#9f004d]/10 dark:bg-[#9f004d]/20 text-[#9f004d] dark:text-pink-400"
          titleGradient="from-[#9f004d] via-pink-600 to-purple-600"
          dividerGradient="from-[#9f004d] via-pink-500 to-purple-500"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="relative z-10"
        >
          {fundingPartners.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-6">
              {fundingPartners.map((partner, index) => (
                <div
                  key={partner.id}
                  className="w-full sm:w-[360px] flex-shrink-0"
                >
                  <PartnerCard partner={partner} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <EmptyState />
          )}

          <div className="mt-10 flex justify-center">
            <motion.a
              href="/stakeholders"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#9f004d] hover:bg-[#8a0042] px-7 py-3 text-white shadow-xl transition-all"
            >
              <span className="body font-semibold">Check all our Stakeholders</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  return (
    <motion.article
  initial={{ opacity: 0, y: 28 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.08, duration: 0.55 }}
  whileHover={{ y: -6 }}
  className="group relative flex h-full overflow-hidden rounded-3xl border border-gray-200 bg-white/90 shadow-lg transition-all duration-500 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900/90"
>
  {/* Accent bar */}
  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-500" />

  {/* Funding badge */}
  <div className="absolute top-5 right-5 z-10">
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#9f004d]/10 px-3 py-1 caption font-semibold text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-400">
      <Star className="h-3.5 w-3.5 fill-current" />
      Funding
    </span>
  </div>

  <div className="flex w-full flex-col p-6">
    {/* Top row */}
    <div className="flex items-start gap-4 pr-24">
      {partner.logo ? (
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-md dark:border-gray-700 dark:bg-gray-800">
          <img
            src={partner.logo}
            alt={partner.name}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9f004d] to-pink-600 shadow-md">
          <span className="text-2xl font-bold text-white">
            {partner.name.charAt(0).toUpperCase()}
          </span>
        </div>
      )}

      <div className="min-w-0 flex-1">
        <h3 className="heading-3 line-clamp-2 text-site-primary transition-colors group-hover:text-[#9f004d] dark:group-hover:text-pink-400">
          {partner.name}
        </h3>
      </div>
    </div>

    {/* Institution type */}
    <div className="mt-5">
      <span className="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 caption font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {formatInstitutionType(partner.institutionType)}
      </span>
    </div>
  </div>
</motion.article>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center rounded-3xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800">
      <Building2 className="w-14 h-14 text-pink-300 dark:text-pink-700 mb-4" />
      <h3 className="heading-3 text-site-primary mb-2">No Funding Partners Yet</h3>
      <p className="body text-site-secondary max-w-md">
        Funding partners will appear here once added.
      </p>
    </div>
  );
}