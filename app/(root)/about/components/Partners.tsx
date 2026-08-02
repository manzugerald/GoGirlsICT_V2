import {
  Building2,
  Handshake,
  HeartHandshake,
} from 'lucide-react';

import type { Partner } from '../data';

import PartnerCard from './PartnerCard';

const groupConfigs = [
  {
    key: 'implementing' as const,
    label:
      'Implementing Stakeholders',
    icon: Handshake,
  },
  {
    key: 'funding' as const,
    label: 'Funding Partners',
    icon: HeartHandshake,
  },
];

export default function Partners({
  partners,
}: {
  partners: Partner[];
}) {
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

  return (
    <section
      aria-labelledby="partners-heading"
      className="relative overflow-hidden py-6 dark:bg-gray-950 sm:py-8 lg:py-10"
    >
      <div className="relative mx-auto w-[90%] max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="partners-heading"
            className="heading-2 text-site-primary"
          >
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

        {partners.length > 0 ? (
          <div className="mt-12 space-y-12">
            {groupConfigs.map(
              (group) => {
                const members =
                  groups[group.key];

                if (
                  members.length === 0
                ) {
                  return null;
                }

                const Icon = group.icon;

                return (
                  <div key={group.key}>
                    <div className="mx-auto flex max-w-md items-center justify-center gap-3">
                      <span className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />

                      <div className="flex shrink-0 items-center gap-2">
                        <Icon
                          aria-hidden="true"
                          className="h-4 w-4 text-[#9f004d] dark:text-pink-400"
                        />

                        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                          {group.label}
                        </h3>

                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                          {members.length}
                        </span>
                      </div>

                      <span className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                    </div>

                    <div className="mt-7 flex flex-wrap justify-center gap-3 sm:gap-4">
                      {members.map(
                        (partner, index) => (
                          <PartnerCard
                            key={
                              partner.id
                            }
                            partner={
                              partner
                            }
                            index={index}
                          />
                        )
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-gray-300 py-16 text-center dark:border-gray-700">
            <Building2 className="mx-auto h-14 w-14 text-gray-300 dark:text-gray-700" />

            <h3 className="heading-3 mt-4 text-site-primary">
              No partners yet
            </h3>

            <p className="body mt-2 text-site-secondary">
              Partners will appear here
              once added.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
