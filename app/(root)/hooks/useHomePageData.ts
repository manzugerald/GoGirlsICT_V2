'use client';

import { useHybridCachedData } from '@/utils/useHybridCachedData';
import type {
  HomePageContent,
  ExecutiveMessage,
  Project,
  Report,
  Event,
  TeamMember,
  Partner,
  Beneficiary,
} from '../types/home';

export function useHomePageContent(initialData: HomePageContent | null) {
  return useHybridCachedData<HomePageContent>(
    'homepage-content-v1',
    async () => {
      const res = await fetch('/api/homepage-content');
      if (!res.ok) throw new Error('Failed to fetch homepage content');
      return res.json();
    },
    { initialData, staleTime: 60 * 60 * 1000 }
  );
}

export function useExecutiveMessages(initialData: ExecutiveMessage[]) {
  return useHybridCachedData<ExecutiveMessage[]>(
    'executive-messages-v1',
    async () => {
      const res = await fetch('/api/executive-messages');
      if (!res.ok) throw new Error('Failed to fetch executive messages');
      return res.json();
    },
    { initialData, staleTime: 60 * 60 * 1000 }
  );
}

export function useProjects(initialData: Project[]) {
  return useHybridCachedData<Project[]>(
    'projects-v1',
    async () => {
      const res = await fetch('/api/projects?status=published&limit=6');
      if (!res.ok) throw new Error('Failed to fetch projects');
      return res.json();
    },
    { initialData, staleTime: 60 * 60 * 1000 }
  );
}

export function useReports(initialData: Report[]) {
  return useHybridCachedData<Report[]>(
    'reports-v1',
    async () => {
      const res = await fetch('/api/reports?status=published&limit=6');
      if (!res.ok) throw new Error('Failed to fetch reports');
      return res.json();
    },
    { initialData, staleTime: 60 * 60 * 1000 }
  );
}

export function useEvents(initialData: Event[]) {
  return useHybridCachedData<Event[]>(
    'events-v1',
    async () => {
      const res = await fetch('/api/events?status=published&limit=6');
      if (!res.ok) throw new Error('Failed to fetch events');
      return res.json();
    },
    { initialData, staleTime: 60 * 60 * 1000 }
  );
}

export function useTeamMembers(initialData: TeamMember[]) {
  return useHybridCachedData<TeamMember[]>(
    'team-members-v1',
    async () => {
      const res = await fetch('/api/teams?limit=8');
      if (!res.ok) throw new Error('Failed to fetch team members');
      return res.json();
    },
    { initialData, staleTime: 60 * 60 * 1000 }
  );
}

export function usePartners(initialData: Partner[]) {
  return useHybridCachedData<Partner[]>(
    'partners-v1',
    async () => {
      const res = await fetch('/api/organizations');
      if (!res.ok) throw new Error('Failed to fetch partners');
      return res.json();
    },
    { initialData, staleTime: 60 * 60 * 1000 }
  );
}

export function useBeneficiaries(initialData: Beneficiary[]) {
  return useHybridCachedData<Beneficiary[]>(
    'beneficiaries-v1',
    async () => {
      const res = await fetch('/api/beneficiaries?limit=12');
      if (!res.ok) throw new Error('Failed to fetch beneficiaries');
      return res.json();
    },
    { initialData, staleTime: 60 * 60 * 1000 }
  );
}
