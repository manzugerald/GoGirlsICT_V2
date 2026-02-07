'use client';

import type { TeamMember, Partner, Beneficiary } from '../../types/home';

interface AboutSectionProps {
  teamMembers: TeamMember[] | null;
  partners: Partner[] | null;
  beneficiaries: Beneficiary[] | null;
}

export default function AboutSection({ teamMembers, partners, beneficiaries }: AboutSectionProps) {
  return (
    <div className="wrapper max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
        About Us
      </h2>

      {/* Team */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Our Team</h3>
        {teamMembers && teamMembers.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 dark:bg-gray-700 mb-3 overflow-hidden">
                  {member.profileImage ? (
                    <img
                      src={member.profileImage}
                      alt={`${member.firstName} ${member.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400">
                      {member.firstName.charAt(0)}
                      {member.lastName.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="font-semibold text-gray-900 dark:text-gray-100">
                  {member.firstName} {member.lastName}
                </div>
                {member.role && (
                  <div className="text-sm text-gray-600 dark:text-gray-300">{member.role}</div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">No team members available</p>
        )}
      </div>

      {/* Partners */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Partners & Institutions
        </h3>
        {partners && partners.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {partners.map((partner) => (
              <div key={partner.id} className="text-center">
                {partner.logoUrl ? (
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="w-24 h-24 mx-auto object-contain mb-2"
                  />
                ) : (
                  <div className="w-24 h-24 mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-lg font-bold text-gray-400">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {partner.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{partner.type}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">No partners available</p>
        )}
      </div>

      {/* Beneficiaries */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Beneficiaries
        </h3>
        {beneficiaries && beneficiaries.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beneficiaries.map((beneficiary) => (
              <div
                key={beneficiary.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
              >
                <div className="font-semibold text-gray-900 dark:text-gray-100">
                  {beneficiary.name}
                </div>
                {beneficiary.category && (
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {beneficiary.category}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">No beneficiaries available</p>
        )}
      </div>
    </div>
  );
}
