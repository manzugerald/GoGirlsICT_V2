'use client';

import { useQuery } from '@tanstack/react-query';
import type { TeamMember } from '../types/home';

async function fetchTeamMembers(): Promise<TeamMember[]> {
  const res = await fetch('/api/teams');
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

// Team members for the public "Our Team" page — only active members,
// matching how the team directory groups/displays them.
export function useTeamMembers() {
  return useQuery({
    queryKey: ['team-members'],
    queryFn: async () => (await fetchTeamMembers()).filter((m) => m.isActive !== false),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
