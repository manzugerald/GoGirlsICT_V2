'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Copy,
  Facebook,
  Globe,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import type { TeamMember } from '../data';

function getInitials(member: TeamMember): string {
  const first = member.firstName?.[0] || '';
  const last = member.lastName?.[0] || '';

  return `${first}${last}`.toUpperCase() || 'TM';
}

const BIO_PREVIEW_WORD_LIMIT = 10;

function truncateToWords(
  text: string,
  wordLimit: number
): string {
  const words = text
    .trim()
    .split(/\s+/);

  if (words.length <= wordLimit) {
    return text.trim();
  }

  return `${words.slice(0, wordLimit).join(' ')}…`;
}

type SocialEntry = {
  key: string;
  href: string;
  label: string;
  icon: ReactNode;
  hoverClassName: string;
};

function buildSocials(
  member: TeamMember,
  fullName: string
): SocialEntry[] {
  const socials: SocialEntry[] = [];

  if (member.facebookUrl) {
    socials.push({
      key: 'facebook',
      href: member.facebookUrl,
      label: `${fullName} on Facebook`,
      icon: <Facebook className="h-4 w-4" />,
      hoverClassName:
        'hover:border-blue-500 hover:bg-blue-500 hover:text-white',
    });
  }

  if (member.linkedInUrl) {
    socials.push({
      key: 'linkedin',
      href: member.linkedInUrl,
      label: `${fullName} on LinkedIn`,
      icon: <Linkedin className="h-4 w-4" />,
      hoverClassName:
        'hover:border-blue-600 hover:bg-blue-600 hover:text-white',
    });
  }

  if (member.xUrl) {
    socials.push({
      key: 'x',
      href: member.xUrl,
      label: `${fullName} on X`,
      icon: (
        <span className="text-[13px] font-bold leading-none">
          X
        </span>
      ),
      hoverClassName:
        'hover:border-gray-950 hover:bg-gray-950 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-gray-950',
    });
  }

  if (member.websiteUrl) {
    socials.push({
      key: 'website',
      href: member.websiteUrl,
      label: `${fullName}'s website`,
      icon: <Globe className="h-4 w-4" />,
      hoverClassName:
        'hover:border-[#9f004d] hover:bg-[#9f004d] hover:text-white',
    });
  }

  return socials;
}

function SocialLink({ entry }: { entry: SocialEntry }) {
  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={entry.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={entry.label}
            onClick={(event) =>
              event.stopPropagation()
            }
            className={
              'flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-[transform,background-color,border-color,color] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f004d] focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:focus-visible:ring-pink-500 dark:focus-visible:ring-offset-gray-950 ' +
              entry.hoverClassName
            }
          >
            {entry.icon}
          </a>
        </TooltipTrigger>

        <TooltipContent>
          <p>{entry.label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function ProtectedEmail({
  protectedEmail,
}: {
  protectedEmail: NonNullable<TeamMember['protectedEmail']>;
}) {
  const [copied, setCopied] = useState(false);

  const display = `${protectedEmail.local} [at] ${protectedEmail.domain}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(
        `${protectedEmail.local}@${protectedEmail.domain}`
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      /*
       * Clipboard access may be unavailable.
       * The protected address remains visible so the
       * user can enter it manually.
       */
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={
        copied
          ? 'Email address copied'
          : 'Copy email address'
      }
      className="group flex w-full items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-left transition-colors hover:border-[#9f004d]/30 hover:bg-[#9f004d]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f004d] focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-pink-500/30 dark:hover:bg-pink-500/10 dark:focus-visible:ring-pink-500 dark:focus-visible:ring-offset-gray-900"
    >
      <span className="flex min-w-0 items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300">
        <Mail className="h-4 w-4 shrink-0 text-[#9f004d] dark:text-pink-400" />

        <span className="truncate">
          {display}
        </span>
      </span>

      <span className="shrink-0 text-xs font-medium text-gray-500 dark:text-gray-400">
        {copied ? (
          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
            <Check className="h-3.5 w-3.5" />
            Copied
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <Copy className="h-3.5 w-3.5" />
            Copy
          </span>
        )}
      </span>
    </button>
  );
}

function ViewProfileTrigger() {
  return (
    <DialogTrigger asChild>
      <button
        type="button"
        className="group/link inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#9f004d] transition-colors hover:text-[#7a003c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f004d] focus-visible:ring-offset-2 dark:text-pink-400 dark:hover:text-pink-300 dark:focus-visible:ring-offset-gray-900"
      >
        View profile

        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
      </button>
    </DialogTrigger>
  );
}

export default function TeamCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const fullName =
    [member.firstName, member.lastName]
      .filter(Boolean)
      .join(' ') || 'Team Member';

  const initials = getInitials(member);
  const socials = buildSocials(member, fullName);

  const bio =
    member.about ||
    `${fullName} is a valued member of the GoGirls ICT Initiative team.`;

  const bioPreview = truncateToWords(
    bio,
    BIO_PREVIEW_WORD_LIMIT
  );

  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <motion.article
        initial={{
          opacity: 0,
          y: 20,
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
          delay: Math.min(index, 8) * 0.06,
          duration: 0.4,
        }}
        onClick={() => setOpen(true)}
        className="group flex h-full cursor-pointer flex-col items-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-[transform,border-color,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:border-[#9f004d]/30 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
      >
        {/* Portrait */}
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-gray-100 ring-4 ring-gray-50 dark:bg-gray-800 dark:ring-gray-800/60">
          {member.profileImage ? (
            <Image
              src={member.profileImage}
              alt={`Portrait of ${fullName}`}
              fill
              priority={index < 2}
              sizes="96px"
              className="object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#9f004d] via-pink-600 to-purple-700">
              <span className="font-serif text-xl font-semibold tracking-tight text-white/95">
                {initials}
              </span>
            </div>
          )}
        </div>

        {/* Identity and biography */}
        <div className="flex flex-1 flex-col items-center gap-2 pt-4">
          <h3 className="font-serif text-lg font-semibold leading-tight text-gray-900 dark:text-white">
            {fullName}
          </h3>

          <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
            {bioPreview}
          </p>

          <div className="mt-auto flex w-full items-center justify-between gap-3 pt-2">
            <ViewProfileTrigger />

            {socials.length > 0 && (
              <div className="flex flex-wrap items-center justify-end gap-1.5">
                {socials.map((entry) => (
                  <SocialLink
                    key={entry.key}
                    entry={entry}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.article>

      {/* Full biography dialog */}
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 shrink-0 border border-gray-200 dark:border-gray-700">
              {member.profileImage && (
                <AvatarImage
                  src={member.profileImage}
                  alt={`Portrait of ${fullName}`}
                  className="object-cover object-center"
                />
              )}

              <AvatarFallback className="bg-gradient-to-br from-[#9f004d] via-pink-600 to-purple-700 font-serif text-lg font-semibold text-white">
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0">
              <DialogTitle className="font-serif text-2xl">
                {fullName}
              </DialogTitle>

              <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-[#9f004d] dark:text-pink-400">
                Team Member
              </p>
            </div>
          </div>
        </DialogHeader>

        <Separator className="my-2" />

        <p className="whitespace-pre-line text-left text-sm leading-7 text-gray-600 dark:text-gray-300 sm:[hyphens:auto] sm:[text-align:justify] sm:[text-justify:inter-word]">
          {bio}
        </p>

        {(socials.length > 0 ||
          member.protectedEmail ||
          member.phone) && (
          <>
            <Separator className="my-2" />

            <div className="space-y-3">
              {socials.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  {socials.map((entry) => (
                    <SocialLink
                      key={entry.key}
                      entry={entry}
                    />
                  ))}
                </div>
              )}

              {member.protectedEmail && (
                <ProtectedEmail
                  protectedEmail={member.protectedEmail}
                />
              )}

              {member.phone && (
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-700 transition-colors hover:border-[#9f004d]/30 hover:bg-[#9f004d]/5 hover:text-[#9f004d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f004d] focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-pink-500/30 dark:hover:bg-pink-500/10 dark:hover:text-pink-400 dark:focus-visible:ring-pink-500 dark:focus-visible:ring-offset-gray-900"
                >
                  <Phone className="h-4 w-4 shrink-0" />

                  <span>{member.phone}</span>
                </a>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
