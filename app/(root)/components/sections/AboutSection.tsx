'use client';

import TeamSection from './TeamSection';
import PartnersSection from './PartnersSection';
import BeneficiariesSection from './BeneficiariesSection';
import type { TeamMember, Partner, Beneficiary } from '../../types/home';

interface AboutSectionProps {
  teamMembers: TeamMember[] | null;
  partners: Partner[] | null;
  beneficiaries: Beneficiary[] | null;
}

export default function AboutSection({ teamMembers, partners, beneficiaries }: AboutSectionProps) {
  return (
    <div className="space-y-16">
      {/* Team Section with Carousel */}
      <TeamSection teamMembers={teamMembers} />

      {/* Partners Section */}
      {partners && partners.length > 0 && <PartnersSection partners={partners} />}

      {/* Beneficiaries Section */}
      {beneficiaries && beneficiaries.length > 0 && (
        <BeneficiariesSection beneficiaries={beneficiaries} />
      )}
    </div>
  );
}
