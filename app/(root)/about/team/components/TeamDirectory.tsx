'use client';

import {
  useMemo,
  useState,
} from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import type { TeamMember } from '../../../types/home';

import {
  getTeamCategory,
  teamCategories,
  type TeamCategory,
} from '../data';

import TeamEmptyState from './TeamEmptyState';
import TeamMemberCard from './TeamMemberCard';

interface TeamDirectoryProps {
  teamMembers: TeamMember[];
}

export default function TeamDirectory({
  teamMembers,
}: TeamDirectoryProps) {
  const [activeCategory, setActiveCategory] =
    useState<TeamCategory>('core');

  const groupedMembers = useMemo(
    () => ({
      advisory: teamMembers.filter(
        (member) =>
          getTeamCategory(member.about) ===
          'advisory'
      ),

      core: teamMembers.filter(
        (member) =>
          getTeamCategory(member.about) ===
          'core'
      ),

      mentors: teamMembers.filter(
        (member) =>
          getTeamCategory(member.about) ===
          'mentors'
      ),
    }),
    [teamMembers]
  );

  const activeConfig =
    teamCategories.find(
      (category) =>
        category.value === activeCategory
    ) || teamCategories[1];

  const activeMembers =
    groupedMembers[activeCategory];

  return (
    <section className="mt-12">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 rounded-3xl border border-gray-200 bg-white/80 p-2 shadow-lg backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/80">
        {teamCategories.map((category) => {
          const Icon = category.icon;

          const isActive =
            activeCategory === category.value;

          const count =
            groupedMembers[category.value].length;

          return (
            <button
              key={category.value}
              type="button"
              onClick={() =>
                setActiveCategory(
                  category.value
                )
              }
              className={`relative flex min-w-[150px] flex-1 items-center justify-center gap-2 overflow-hidden rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                isActive
                  ? 'text-white'
                  : 'text-site-secondary hover:bg-gray-100 hover:text-site-primary dark:hover:bg-gray-800'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="team-active-tab"
                  className="absolute inset-0 bg-gradient-to-r from-[#9f004d] via-pink-600 to-purple-600"
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10 flex items-center gap-2">
                <Icon className="h-4 w-4 shrink-0" />

                <span className="hidden sm:inline">
                  {category.label}
                </span>

                <span className="sm:hidden">
                  {category.shortLabel}
                </span>

                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-site-secondary dark:bg-gray-800'
                  }`}
                >
                  {count}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -12,
          }}
          transition={{ duration: 0.35 }}
          className="mt-12"
        >
          <div className="mb-9 text-center">
            <h2 className="heading-2 text-site-primary">
              {activeConfig.title}
            </h2>

            <p className="body-lg mx-auto mt-3 max-w-2xl text-site-secondary">
              {activeConfig.description}
            </p>
          </div>

          {activeMembers.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {activeMembers.map(
                (member, index) => (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                    index={index}
                  />
                )
              )}
            </div>
          ) : (
            <TeamEmptyState
              title={activeConfig.emptyTitle}
              description={
                activeConfig.emptyDescription
              }
              icon={activeConfig.icon}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}