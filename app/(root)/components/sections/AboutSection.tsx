'use client';

import { motion } from 'framer-motion';
import TeamSection from './TeamSection';
import PartnersSection from './PartnersSection';
import BeneficiariesSection from './BeneficiariesSection';
import type { TeamMember, Partner, Beneficiary } from '../../types/home';

interface AboutSectionProps {
  teamMembers: TeamMember[] | null;
  partners: Partner[] | null;
  beneficiaries: Beneficiary[] | null;
}

export default function AboutSection({ teamMembers, partners, beneficiaries }: AboutSectionProps) {
  return (
    <div className="space-y-16 relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-full h-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.02, 0.05],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-full h-full bg-gradient-to-tl from-pink-500 via-rose-500 to-orange-500 rounded-full blur-3xl"
        />
      </div>

      {/* Team Section with Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <TeamSection teamMembers={teamMembers} />
      </motion.div>

      {/* Decorative divider */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-4 py-8"
      >
        <motion.div
          animate={{ scaleX: [0, 1] }}
          transition={{ duration: 1 }}
          className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent max-w-xs"
        />
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            />
          ))}
        </div>
        <motion.div
          animate={{ scaleX: [0, 1] }}
          transition={{ duration: 1 }}
          className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent max-w-xs"
        />
      </motion.div>

      {/* Partners Section */}
      {partners && partners.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <PartnersSection partners={partners} />
        </motion.div>
      )}

      {/* Decorative divider */}
      {beneficiaries && beneficiaries.length > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 py-8"
        >
          <motion.div
            animate={{ scaleX: [0, 1] }}
            transition={{ duration: 1 }}
            className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-300 dark:via-emerald-700 to-transparent max-w-xs"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="text-emerald-500"
          >
            ✨
          </motion.div>
          <motion.div
            animate={{ scaleX: [0, 1] }}
            transition={{ duration: 1 }}
            className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-300 dark:via-emerald-700 to-transparent max-w-xs"
          />
        </motion.div>
      )}

      {/* Beneficiaries Section */}
      {beneficiaries && beneficiaries.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <BeneficiariesSection beneficiaries={beneficiaries} />
        </motion.div>
      )}
    </div>
  );
}
