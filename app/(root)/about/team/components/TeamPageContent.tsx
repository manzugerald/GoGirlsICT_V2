'use client';

import PageHero from '../../../components/shared/page/PageHero';
import PageHeader from '../../../components/shared/page/PageHeader';
import PageSection from '../../../components/shared/page/PageSection';

import { useTeamMembers } from '../../../hooks/useTeamMembers';

import { teamPageData } from '../data';

import TeamDirectory from './TeamDirectory';
import TeamErrorState from './TeamErrorState';
import TeamLoadingState from './TeamLoadingState';

export default function TeamPageContent() {
  const {
    data: teamMembers,
    isLoading,
    error,
  } = useTeamMembers();

  return (
    <main className="min-h-screen overflow-hidden">
      <PageHero
        badge={teamPageData.hero.eyebrow}
        title={teamPageData.hero.title}
        description={
          teamPageData.hero.description
        }
        backgroundImage={teamPageData.hero.image}
      />

      <PageSection>
        <PageHeader
          badge={
            teamPageData.introduction.badge
          }
          title={
            teamPageData.introduction.title
          }
          description={
            teamPageData.introduction
              .description
          }
          align="center"
        />

        {isLoading && <TeamLoadingState />}

        {!isLoading && error && (
          <TeamErrorState />
        )}

        {!isLoading && !error && (
          <TeamDirectory
            teamMembers={teamMembers || []}
          />
        )}
      </PageSection>
    </main>
  );
}