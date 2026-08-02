import { User } from 'lucide-react';

import type { TeamMember } from '../data';

import TeamCard from './TeamCard';

export default function OurTeam({
  teamMembers,
}: {
  teamMembers: TeamMember[];
}) {
  return (
    <section
      aria-labelledby="our-team-heading"
      className="relative overflow-hidden bg-gray-50 py-6 dark:bg-gray-950 sm:py-8 lg:py-10"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#9f004d]/[0.025] via-transparent to-purple-500/[0.035] dark:from-pink-500/[0.035] dark:to-purple-500/[0.04]" />

        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#9f004d]/[0.035] blur-3xl dark:bg-pink-500/[0.04]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/[0.035] blur-3xl dark:bg-purple-500/[0.04]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-800" />
      </div>

      <div className="relative mx-auto w-[90%] max-w-7xl">
        {/* Section title */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="our-team-heading"
            className="heading-2 text-gray-950 dark:text-white"
          >
            Meet the People Behind

            <span className="block bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Our Mission
            </span>
          </h2>

          <p className="body-lg mx-auto mt-4 max-w-2xl leading-8 text-gray-600 dark:text-gray-300">
            Meet the dedicated people whose
            experience, creativity, and
            commitment drive our work and
            create meaningful opportunities
            for communities.
          </p>

          <div
            aria-hidden="true"
            className="mx-auto mt-6 flex items-center justify-center gap-2"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#9f004d]/50" />

            <span className="h-2 w-2 rotate-45 bg-[#9f004d] dark:bg-pink-400" />

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#9f004d]/50" />
          </div>
        </header>

        {teamMembers.length > 0 ? (
          <div className="mt-8 flex flex-wrap justify-center gap-6 sm:mt-10">
            {teamMembers.map(
              (member, index) => (
                <div
                  key={member.id}
                  className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
                >
                  <TeamCard
                    member={member}
                    index={index}
                  />
                </div>
              )
            )}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-20 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:mt-10">
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/10 dark:text-pink-400">
              <User className="h-10 w-10" />
            </span>

            <h3 className="heading-3 mt-6 text-site-primary">
              No Team Members Yet
            </h3>

            <p className="body mt-2 text-site-secondary">
              Active team members will
              appear here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}