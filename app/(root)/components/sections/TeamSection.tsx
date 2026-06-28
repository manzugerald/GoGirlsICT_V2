'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import {
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Globe,
  User,
  ShieldCheck,
  Users,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import type { TeamMember } from '../../types/home';

import Section from '../shared/components/Section';
import SectionHeader from '../shared/components/SectionHeader';
import SectionBackground from '../shared/components/SectionBackground';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface TeamSectionProps {
  teamMembers: TeamMember[] | null;
}

const getInitials = (firstName?: string, lastName?: string) => {
  const first = firstName?.charAt(0) || '';
  const last = lastName?.charAt(0) || '';
  return (first + last).toUpperCase() || 'TM';
};

const getAvatarColor = (firstName?: string, lastName?: string) => {
  const colors = [
    'from-blue-500 to-blue-600',
    'from-purple-500 to-purple-600',
    'from-pink-500 to-pink-600',
    'from-[#9f004d] to-pink-600',
    'from-orange-500 to-orange-600',
    'from-teal-500 to-teal-600',
    'from-indigo-500 to-indigo-600',
    'from-rose-500 to-rose-600',
  ];

  const name = `${firstName}${lastName}`;
  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return colors[index % colors.length];
};

const getTeamCategory = (member: TeamMember) => {
  const text = `${member.about || ''}`.toLowerCase();

  if (text.includes('advisory') || text.includes('board')) return 'advisory';
  if (text.includes('mentor')) return 'mentors';

  return 'core';
};

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  const [activeTab, setActiveTab] = useState('core');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  if (!teamMembers || teamMembers.length === 0) return null;

  const advisoryBoard = teamMembers.filter((member) => getTeamCategory(member) === 'advisory');
  const coreTeam = teamMembers.filter((member) => getTeamCategory(member) === 'core');
  const mentors = teamMembers.filter((member) => getTeamCategory(member) === 'mentors');

  return (
    <Section className="relative">
      <div ref={containerRef}>
        <SectionBackground
          gradient="from-[#9f004d] via-pink-500 to-purple-500"
          position="center"
          duration={30}
          opacity={[0.03, 0.08, 0.03]}
        />

        <SectionHeader
          badge="Our Team"
          title="Meet the People Behind Our Mission"
          description="Dedicated professionals, advisors, and mentors working together to empower girls through technology"
          icon={<User className="w-4 h-4" />}
          badgeClassName="bg-[#9f004d]/10 dark:bg-[#9f004d]/20 text-[#9f004d] dark:text-pink-400"
          titleGradient="from-[#9f004d] via-pink-600 to-purple-600"
          dividerGradient="from-[#9f004d] via-pink-500 to-purple-500"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="relative z-10"
        >
          <Tabs defaultValue="core" onValueChange={setActiveTab} className="w-full">
            <TabsList className="max-w-5xl mx-auto mb-12">
              <TeamTabTrigger
                value="advisory"
                activeTab={activeTab}
                icon={<ShieldCheck className="w-4 h-4" />}
                label="Advisory Board"
                count={advisoryBoard.length}
              />

              <TeamTabTrigger
                value="core"
                activeTab={activeTab}
                icon={<Users className="w-4 h-4" />}
                label="Core Team"
                count={coreTeam.length}
              />

              <TeamTabTrigger
                value="mentors"
                activeTab={activeTab}
                icon={<GraduationCap className="w-4 h-4" />}
                label="Mentors"
                count={mentors.length}
              />
            </TabsList>

            <TabsContent value="advisory" className="mt-0">
              <TeamCarousel
                members={advisoryBoard}
                active={activeTab === 'advisory'}
                emptyTitle="No Advisory Board Members Yet"
                emptyDescription="Advisory board members will appear here once added."
              />
            </TabsContent>

            <TabsContent value="core" className="mt-0">
              <TeamCarousel
                members={coreTeam}
                active={activeTab === 'core'}
                emptyTitle="No Core Team Members Yet"
                emptyDescription="Core team members will appear here once added."
              />
            </TabsContent>

            <TabsContent value="mentors" className="mt-0">
              <TeamCarousel
                members={mentors}
                active={activeTab === 'mentors'}
                emptyTitle="No Mentors Yet"
                emptyDescription="Mentors will appear here once added."
              />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </Section>
  );
}

function TeamTabTrigger({
  value,
  activeTab,
  icon,
  label,
  count,
}: {
  value: string;
  activeTab: string;
  icon: React.ReactNode;
  label: string;
  count: number;
}) {
  return (
    <TabsTrigger value={value}>
      <motion.span
        animate={activeTab === value ? { rotate: 360 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center shrink-0"
      >
        {icon}
      </motion.span>

      <span className="truncate">{label}</span>

      {count > 0 && (
        <span className="shrink-0 px-2 py-0.5 caption rounded-full bg-white/20 text-current">
          {count}
        </span>
      )}
    </TabsTrigger>
  );
}

function TeamCarousel({
  members,
  active,
  emptyTitle,
  emptyDescription,
}: {
  members: TeamMember[];
  active: boolean;
  emptyTitle: string;
  emptyDescription: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <AnimatePresence mode="wait">
      {active && (
        <motion.div
          key={emptyTitle}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {members.length > 0 ? (
            <>
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                effect="coverflow"
                grabCursor
                centeredSlides
                slidesPerView={1}
                spaceBetween={28}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 120,
                  modifier: 2,
                  slideShadows: false,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={members.length > 3}
                onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
                className="team-swiper pb-16 !px-4 md:!px-8"
              >
                {members.map((member, idx) => (
                  <SwiperSlide key={member.id} className="!h-auto py-4">
                    <TeamCard
                      member={member}
                      isActive={idx === activeIndex}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="mt-2 flex justify-center">
                <motion.a
                  href="/team"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#9f004d] px-7 py-3 text-white shadow-xl hover:bg-[#8a0042] transition-all"
                >
                  <span className="body font-semibold">Find More</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </>
          ) : (
            <EmptyTeamState title={emptyTitle} description={emptyDescription} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TeamCard({
  member,
  isActive,
}: {
  member: TeamMember;
  isActive: boolean;
}) {
  const initials = getInitials(member.firstName, member.lastName);
  const avatarColor = getAvatarColor(member.firstName, member.lastName);

  return (
    <motion.article
      animate={{
        scale: isActive ? 1.03 : 0.94,
        opacity: isActive ? 1 : 0.72,
        y: isActive ? -8 : 0,
      }}
      transition={{ duration: 0.35 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white/90
        dark:bg-gray-900/90
        backdrop-blur-xl
        border
        border-gray-200
        dark:border-gray-800
        shadow-lg
        transition-all
        duration-500
      "
    >
      {isActive && (
        <motion.div
          animate={{
            opacity: [0.18, 0.32, 0.18],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="absolute -inset-0.5 bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-500 blur"
        />
      )}

      <div className="relative bg-white/95 dark:bg-gray-900/95 rounded-3xl">
        <div
          className={`h-28 bg-gradient-to-br ${
            isActive
              ? 'from-[#9f004d] via-pink-600 to-purple-600'
              : 'from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800'
          }`}
        />

        <div className="relative px-6 pb-6 -mt-16 flex flex-col items-center text-center">
          <motion.div
            animate={
              isActive
                ? {
                    scale: [1, 1.04, 1],
                    rotate: [0, 1.5, 0],
                  }
                : undefined
            }
            transition={{ duration: 3, repeat: Infinity }}
            className="relative mb-4"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl bg-white dark:bg-gray-900">
              {member.profileImage ? (
                <img
                  src={member.profileImage}
                  alt={`${member.firstName} ${member.lastName}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-br ${avatarColor} flex items-center justify-center`}
                >
                  <span className="text-white text-3xl font-bold">{initials}</span>
                </div>
              )}
            </div>

            {isActive && (
              <motion.div
                animate={{
                  scale: [1, 1.22, 1],
                  opacity: [0.45, 0, 0.45],
                }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="absolute inset-0 border-4 border-[#9f004d]/70 rounded-full"
              />
            )}
          </motion.div>

          <h3 className="heading-3 text-site-primary mb-2">
            {member.firstName} {member.lastName}
          </h3>

          {member.about && (
            <span className="inline-block px-3 py-1 bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-400 caption font-semibold rounded-full mb-4 max-w-full">
              {member.about}
            </span>
          )}

          <div
            className={`h-1 rounded-full bg-gradient-to-r from-[#9f004d] to-pink-500 mb-5 transition-all duration-500 ${
              isActive ? 'w-32' : 'w-16'
            }`}
          />

          <div className="space-y-2 w-full mb-5">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex items-center justify-center gap-2 caption text-site-secondary hover:text-[#9f004d] dark:hover:text-pink-400 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="truncate max-w-[220px]">{member.email}</span>
              </a>
            )}

            {member.phone && (
              <a
                href={`tel:${member.phone}`}
                className="flex items-center justify-center gap-2 caption text-site-secondary hover:text-[#9f004d] dark:hover:text-pink-400 transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>{member.phone}</span>
              </a>
            )}
          </div>

          {(member.linkedInUrl || member.facebookUrl || member.websiteUrl) && (
            <div className="flex items-center justify-center gap-3 pt-5 border-t border-gray-200 dark:border-gray-800 w-full">
              {member.linkedInUrl && (
                <SocialLink href={member.linkedInUrl} label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </SocialLink>
              )}

              {member.facebookUrl && (
                <SocialLink href={member.facebookUrl} label="Facebook">
                  <Facebook className="w-5 h-5" />
                </SocialLink>
              )}

              {member.websiteUrl && (
                <SocialLink href={member.websiteUrl} label="Website">
                  <Globe className="w-5 h-5" />
                </SocialLink>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.18, rotate: 360 }}
      transition={{ duration: 0.3 }}
      className="
        p-2
        bg-gray-100
        dark:bg-gray-800
        hover:bg-[#9f004d]/10
        dark:hover:bg-pink-900/30
        rounded-xl
        text-site-secondary
        hover:text-[#9f004d]
        dark:hover:text-pink-400
        transition-colors
      "
      aria-label={label}
    >
      {children}
    </motion.a>
  );
}

function EmptyTeamState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      <User className="w-16 h-16 text-pink-300 dark:text-pink-700 mb-4" />
      <h3 className="heading-3 text-site-primary mb-2">{title}</h3>
      <p className="body text-site-secondary max-w-md">{description}</p>
    </motion.div>
  );
}