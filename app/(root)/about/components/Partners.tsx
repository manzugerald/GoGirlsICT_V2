'use client';

import { useState } from 'react';

import {
  Building2,
  Handshake,
  HeartHandshake,
} from 'lucide-react';

import PageSection from '@/app/(root)/components/shared/page/PageSection';

import type { Partner } from '../data';

import PartnerCard from './PartnerCard';

type PartnerCategory =
  | 'implementing'
  | 'funding';

const tabs = [
  {
    value: 'implementing' as const,
    label:
      'Implementing Stakeholders',
    icon: Handshake,
  },
  {
    value: 'funding' as const,
    label: 'Funding Partners',
    icon: HeartHandshake,
  },
];

export default function Partners({
  partners,
}: {
  partners: Partner[];
}) {
  const [activeTab, setActiveTab] =
    useState<PartnerCategory>(
      'implementing'
    );

  const groups = {
    implementing: partners.filter(
      (partner) =>
        partner.institutionCategory ===
        'implementing'
    ),

    funding: partners.filter(
      (partner) =>
        partner.institutionCategory ===
        'funding'
    ),
  };

  const visiblePartners =
    groups[activeTab];

  return (
    <PageSection className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#9f004d]/10 px-4 py-2 font-semibold text-[#9f004d] dark:text-pink-400">
            <HeartHandshake className="h-4 w-4" />

            Our Network
          </span>

          <h2 className="heading-2 mt-5 text-site-primary">
            Partners supporting our
            mission
          </h2>

          <p className="body-lg mt-4 text-site-secondary">
            We work with stakeholders who
            share our vision of engaging,
            educating, and empowering
            communities through innovation
            and technology.
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Partner groups"
          className="mx-auto mt-10 flex max-w-2xl gap-2 overflow-x-auto rounded-2xl bg-gray-100 p-2 dark:bg-gray-900"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;

            const active =
              activeTab === tab.value;

            return (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() =>
                  setActiveTab(
                    tab.value
                  )
                }
                className={`flex flex-1 shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold transition ${
                  active
                    ? 'bg-[#9f004d] text-white shadow-lg'
                    : 'text-gray-600 hover:text-[#9f004d] dark:text-gray-300 dark:hover:text-pink-400'
                }`}
              >
                <Icon className="h-4 w-4" />

                {tab.label}

                <span className="rounded-full bg-black/10 px-2 py-0.5 text-xs dark:bg-white/15">
                  {
                    groups[
                      tab.value
                    ].length
                  }
                </span>
              </button>
            );
          })}
        </div>

        {visiblePartners.length >
        0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visiblePartners.map(
              (partner, index) => (
                <PartnerCard
                  key={partner.id}
                  partner={partner}
                  index={index}
                />
              )
            )}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-gray-300 py-16 text-center dark:border-gray-700">
            <Building2 className="mx-auto h-14 w-14 text-gray-300 dark:text-gray-700" />

            <h3 className="heading-3 mt-4 text-site-primary">
              No partners in this group
              yet
            </h3>

            <p className="body mt-2 text-site-secondary">
              Partners will appear here
              once added.
            </p>
          </div>
        )}
      </div>
    </PageSection>
  );
}