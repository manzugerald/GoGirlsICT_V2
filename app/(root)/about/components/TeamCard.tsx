'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';
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

function ProfileDivider() {
  return (
    <div className="flex items-center gap-2.5 px-5 pt-4">
      <span className="h-px w-8 bg-[#9f004d]" />

      <span className="h-1.5 w-1.5 rotate-45 bg-[#9f004d]" />

      <span className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
    </div>
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

  return (
    <Dialog>
      <article
        className="animate-in fade-in slide-in-from-bottom-3 fill-mode-backwards group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_28px_-24px_rgba(31,25,28,0.5)] transition-[transform,border-color,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:border-[#9f004d]/30 hover:shadow-[0_18px_38px_-22px_rgba(159,0,77,0.22)] motion-reduce:animate-none motion-reduce:transition-none dark:border-gray-800 dark:bg-gray-900 dark:hover:border-pink-500/30"
        style={{
          animationDelay: `${Math.min(index, 8) * 60}ms`,
          animationDuration: '500ms',
        }}
      >
        {/* 
          Fixed-height portrait mat.
          The photograph uses object-contain, so it is never cropped.
        */}
        <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#9f004d]/[0.05] via-gray-50 to-purple-500/[0.06] dark:from-pink-500/[0.06] dark:via-gray-950 dark:to-purple-500/[0.08]">
          {member.profileImage ? (
            <div className="relative h-[86%] w-[58%] max-w-[150px] overflow-hidden rounded-xl bg-white shadow-[0_6px_20px_-8px_rgba(31,25,28,0.35)] ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <Image
                src={member.profileImage}
                alt={`Portrait of ${fullName}`}
                fill
                priority={index < 2}
                sizes="150px"
                className="object-contain object-center grayscale transition-[filter,transform] duration-700 ease-out motion-safe:group-hover:scale-[1.04] group-hover:grayscale-0 motion-reduce:transition-none"
              />
            </div>
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#9f004d] via-pink-600 to-purple-700 shadow-[0_6px_20px_-8px_rgba(159,0,77,0.5)]">
              <span className="font-serif text-2xl font-semibold tracking-tight text-white/95">
                {initials}
              </span>
            </div>
          )}
        </div>

        {/* Accent divider */}
        <ProfileDivider />

        {/* Identity and biography */}
        <div className="flex flex-1 flex-col gap-3 px-5 pb-5 pt-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500">
              Team Member
            </p>

            <h3 className="mt-1 font-serif text-xl font-semibold leading-tight text-gray-900 dark:text-white">
              {fullName}
            </h3>
          </div>

          <p className="line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
            {bio}
          </p>

          <div className="mt-auto flex items-center justify-between gap-3 pt-3">
            {socials.length > 0 ? (
              <div className="flex flex-wrap items-center gap-1.5">
                {socials.map((entry) => (
                  <SocialLink
                    key={entry.key}
                    entry={entry}
                  />
                ))}
              </div>
            ) : (
              <span />
            )}

            <ViewProfileTrigger />
          </div>
        </div>
      </article>

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