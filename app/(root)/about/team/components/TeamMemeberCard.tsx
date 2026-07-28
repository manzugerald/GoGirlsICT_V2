'use client';

import { motion } from 'framer-motion';

import {
  Facebook,
  Globe,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';

import type { TeamMember } from '../../../types/home';

import {
  getAvatarGradient,
  getInitials,
} from '../data';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamMemberCard({
  member,
  index,
}: TeamMemberCardProps) {
  const fullName = [
    member.firstName,
    member.lastName,
  ]
    .filter(Boolean)
    .join(' ');

  const initials = getInitials(
    member.firstName,
    member.lastName
  );

  const avatarGradient =
    getAvatarGradient(
      member.firstName,
      member.lastName
    );

  const hasContactDetails = Boolean(
    member.email || member.phone
  );

  const hasSocialLinks = Boolean(
    member.linkedInUrl ||
      member.facebookUrl ||
      member.websiteUrl
  );

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
        margin: '-60px',
      }}
      transition={{
        delay: Math.min(index * 0.06, 0.3),
        duration: 0.5,
      }}
      whileHover={{ y: -7 }}
      className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/90 shadow-lg transition-shadow duration-500 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900/90"
    >
      <div className="h-28 bg-gradient-to-r from-[#9f004d] via-pink-600 to-purple-600" />

      <div className="-mt-16 flex flex-col items-center px-6 pb-7 text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-xl dark:border-gray-900 dark:bg-gray-800">
          {member.profileImage ? (
            <img
              src={member.profileImage}
              alt={fullName || 'Team member'}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${avatarGradient}`}
            >
              <span className="text-3xl font-bold text-white">
                {initials}
              </span>
            </div>
          )}
        </div>

        <h3 className="heading-3 mt-5 text-site-primary">
          {fullName || 'Team Member'}
        </h3>

        {member.about && (
          <span className="caption mt-2 inline-flex rounded-full bg-[#9f004d]/10 px-3 py-1 font-semibold text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-400">
            {member.about}
          </span>
        )}

        <div className="my-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#9f004d] to-pink-500 transition-all duration-500 group-hover:w-28" />

        {hasContactDetails && (
          <div className="w-full space-y-2">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="caption flex items-center justify-center gap-2 text-site-secondary transition-colors hover:text-[#9f004d] dark:hover:text-pink-400"
              >
                <Mail className="h-4 w-4 shrink-0" />

                <span className="truncate">
                  {member.email}
                </span>
              </a>
            )}

            {member.phone && (
              <a
                href={`tel:${member.phone}`}
                className="caption flex items-center justify-center gap-2 text-site-secondary transition-colors hover:text-[#9f004d] dark:hover:text-pink-400"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>{member.phone}</span>
              </a>
            )}
          </div>
        )}

        {hasSocialLinks && (
          <div className="mt-6 flex w-full items-center justify-center gap-3 border-t border-gray-200 pt-5 dark:border-gray-800">
            {member.linkedInUrl && (
              <SocialLink
                href={member.linkedInUrl}
                label={`${fullName} on LinkedIn`}
              >
                <Linkedin className="h-5 w-5" />
              </SocialLink>
            )}

            {member.facebookUrl && (
              <SocialLink
                href={member.facebookUrl}
                label={`${fullName} on Facebook`}
              >
                <Facebook className="h-5 w-5" />
              </SocialLink>
            )}

            {member.websiteUrl && (
              <SocialLink
                href={member.websiteUrl}
                label={`${fullName}'s website`}
              >
                <Globe className="h-5 w-5" />
              </SocialLink>
            )}
          </div>
        )}
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
      aria-label={label}
      whileHover={{
        scale: 1.15,
        rotate: 8,
      }}
      whileTap={{ scale: 0.95 }}
      className="rounded-xl bg-gray-100 p-2 text-site-secondary transition-colors hover:bg-[#9f004d]/10 hover:text-[#9f004d] dark:bg-gray-800 dark:hover:bg-pink-900/30 dark:hover:text-pink-400"
    >
      {children}
    </motion.a>
  );
}