'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, User } from 'lucide-react';
import TeamSection from './TeamSection';
import PartnersSection from './PartnersSection';
import BeneficiariesSection from './BeneficiariesSection';
import type { TeamMember, Partner, Beneficiary } from '../../types/home';
import SectionBackground from '../shared/components/SectionBackground';

interface AboutSectionProps {
  teamMembers: TeamMember[] | null;
  partners: Partner[] | null;
  beneficiaries: Beneficiary[] | null;
}

const getTeamCategory = (member: TeamMember) => {
  const text = `${member.about || ''}`.toLowerCase();

  if (text.includes('advisory') || text.includes('board')) return 'advisory';
  if (text.includes('mentor')) return 'mentors';

  return 'core';
};

const getInitials = (firstName?: string, lastName?: string) => {
  const first = firstName?.charAt(0) || '';
  const last = lastName?.charAt(0) || '';
  return (first + last).toUpperCase() || 'TM';
};

export default function AboutSection({
  teamMembers,
  partners,
  beneficiaries,
}: AboutSectionProps) {
  const coreTeam = useMemo(
    () => (teamMembers || []).filter((member) => getTeamCategory(member) === 'core'),
    [teamMembers]
  );

  return (
    <div className="space-y-16 relative">
      <SectionBackground
        gradient="from-cyan-500 via-blue-500 to-purple-500"
        position="center"
        duration={60}
        opacity={[0.015, 0.035, 0.015]}
      />

      {coreTeam.length > 0 && <CoreTeamPreview teamMembers={coreTeam} />}

      {partners && partners.length > 0 && (
        <FadeBlock>
          <PartnersSection partners={partners} />
        </FadeBlock>
      )}

      {beneficiaries && beneficiaries.length > 0 && (
        <FadeBlock>
          <BeneficiariesSection beneficiaries={beneficiaries} />
        </FadeBlock>
      )}
    </div>
  );
}

function CoreTeamPreview({ teamMembers }: { teamMembers: TeamMember[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleMembers = teamMembers.slice(0, 3);

  useEffect(() => {
    if (visibleMembers.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % visibleMembers.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [visibleMembers.length]);

  return (
    <section className="wrapper max-w-7xl mx-auto px-4 py-16 relative z-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9f004d]/10 dark:bg-[#9f004d]/20 text-[#9f004d] dark:text-pink-400 mb-4 shadow-lg">
          <User className="w-4 h-4" />
          <span className="caption font-semibold uppercase tracking-wide">Our Team</span>
        </div>

        <h2 className="heading-2 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9f004d] via-pink-600 to-purple-600">
            Meet Our Core Team
          </span>
        </h2>

        <p className="body-lg text-site-secondary max-w-2xl mx-auto">
          Dedicated people working behind the mission to empower girls and young women through
          technology.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {visibleMembers.map((member, index) => (
          <TeamPreviewCard
            key={member.id}
            member={member}
            isActive={index === activeIndex}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <motion.a
          href="/about/team"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-2 rounded-full bg-[#9f004d] hover:bg-[#8a0042] px-7 py-3 text-white shadow-xl transition-all"
        >
          <span className="body font-semibold">More on our Team, Mentors and Board Members</span>
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
}

function TeamPreviewCard({
  member,
  isActive,
  onMouseEnter,
}: {
  member: TeamMember;
  isActive: boolean;
  onMouseEnter: () => void;
}) {
  const initials = getInitials(member.firstName, member.lastName);

  return (
    <motion.article
      onMouseEnter={onMouseEnter}
      animate={{
        scale: isActive ? 1.04 : 1,
        y: isActive ? -8 : 0,
      }}
      transition={{ duration: 0.35 }}
      className={`relative overflow-hidden rounded-3xl bg-white/90 dark:bg-gray-900/90 border shadow-lg transition-all duration-500 ${
        isActive
          ? 'border-[#9f004d]/50 dark:border-pink-500/50 shadow-2xl'
          : 'border-gray-200 dark:border-gray-800'
      }`}
    >
      {isActive && (
        <motion.div
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -inset-0.5 bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-500 blur"
        />
      )}

      <div className="relative bg-white/95 dark:bg-gray-900/95 rounded-3xl">
        <div
          className={`h-28 ${
            isActive
              ? 'bg-gradient-to-br from-[#9f004d] via-pink-600 to-purple-600'
              : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900'
          }`}
        />

        <div className="relative px-6 pb-6 -mt-16 flex flex-col items-center text-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl bg-gray-100 dark:bg-gray-800 mb-4">
            {member.profileImage ? (
              <img
                src={member.profileImage}
                alt={`${member.firstName} ${member.lastName}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#9f004d] to-pink-600 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">{initials}</span>
              </div>
            )}
          </div>

          <h3 className="heading-3 text-site-primary mb-2">
            {member.firstName} {member.lastName}
          </h3>

          {member.about && (
            <span className="caption font-semibold px-3 py-1 rounded-full bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-400 mb-4">
              {member.about}
            </span>
          )}

          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="caption text-site-secondary hover:text-[#9f004d] dark:hover:text-pink-400 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span className="truncate max-w-[220px]">{member.email}</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function FadeBlock({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}