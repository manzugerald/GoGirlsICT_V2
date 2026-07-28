import { User, Users } from 'lucide-react';

import type { TeamMember } from '../data';

import TeamCard from './TeamCard';

export default function OurTeam({
  teamMembers,
}: {
  teamMembers: TeamMember[];
}) {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-4 dark:bg-gray-950 sm:py-5">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#9f004d]/[0.018] via-transparent to-purple-500/[0.025] dark:from-pink-500/[0.025] dark:to-purple-500/[0.03]" />

      <div className="relative mx-auto w-[90%] max-w-7xl">
        {teamMembers.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-20 text-center dark:border-gray-800 dark:bg-gray-900">
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/10 dark:text-pink-400">
              <User className="h-10 w-10" />
            </span>

            <h2 className="heading-3 mt-6 text-site-primary">
              No Team Members Yet
            </h2>

            <p className="body mt-2 text-site-secondary">
              Active team members will appear here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}