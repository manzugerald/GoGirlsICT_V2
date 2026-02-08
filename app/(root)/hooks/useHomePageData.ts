'use client';

import { useQuery } from '@tanstack/react-query';

// Helper to safely parse content that might be a string or object
function parseContent(content: any) {
  if (!content) return content;
  if (typeof content === 'string') {
    try {
      return JSON.parse(content);
    } catch {
      return content;
    }
  }
  return content;
}

// Custom hook for hybrid cached data (SSR + client-side fetching)
function useHybridCachedData<T>(
  queryKey: string[],
  fetcher: () => Promise<T>,
  initialData?: T,
  options?: {
    staleTime?: number;
    cacheTime?: number;
    enabled?: boolean;
  }
) {
  return useQuery<T>({
    queryKey,
    queryFn: fetcher,
    initialData,
    staleTime: options?.staleTime ?? 1000 * 60 * 5, // 5 minutes default
    gcTime: options?.cacheTime ?? 1000 * 60 * 10, // 10 minutes default (renamed from cacheTime)
    enabled: options?.enabled ?? true,
    retry: 1, // Only retry once
    retryDelay: 1000, // Wait 1 second before retry
  });
}

// Home page content
export function useHomePageContent(initialData?: any) {
  return useHybridCachedData(
    ['homepage-content'],
    async () => {
      const res = await fetch('/api/homepage-content');
      if (!res.ok) {
        // If fetch fails, return initial data instead of throwing
        if (initialData) return initialData;
        throw new Error('Failed to fetch homepage content');
      }
      const data = await res.json();
      return parseContent(data);
    },
    initialData,
    { staleTime: 1000 * 60 * 5 }
  );
}

// Executive messages
export function useExecutiveMessages(initialData?: any[]) {
  return useHybridCachedData(
    ['executive-messages'],
    async () => {
      const res = await fetch('/api/executive-messages');
      if (!res.ok) {
        if (initialData) return initialData;
        return []; // Return empty array instead of throwing
      }
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    },
    initialData || [],
    { staleTime: 1000 * 60 * 5 }
  );
}

// Projects
export function useProjects(initialData?: any[]) {
  return useHybridCachedData(
    ['projects'],
    async () => {
      const res = await fetch('/api/projects');
      if (!res.ok) {
        if (initialData) return initialData;
        return [];
      }
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    },
    initialData || [],
    { staleTime: 1000 * 60 * 5 }
  );
}

// Reports
export function useReports(initialData?: any[]) {
  return useHybridCachedData(
    ['reports'],
    async () => {
      const res = await fetch('/api/reports');
      if (!res.ok) {
        if (initialData) return initialData;
        return [];
      }
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    },
    initialData || [],
    { staleTime: 1000 * 60 * 5 }
  );
}

// Events
export function useEvents(initialData?: any[]) {
  return useHybridCachedData(
    ['events'],
    async () => {
      const res = await fetch('/api/events');
      if (!res.ok) {
        if (initialData) return initialData;
        return [];
      }
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    },
    initialData || [],
    { staleTime: 1000 * 60 * 5 }
  );
}

// Team members
export function useTeamMembers(initialData?: any[]) {
  return useHybridCachedData(
    ['team-members'],
    async () => {
      const res = await fetch('/api/team-members');
      if (!res.ok) {
        if (initialData) return initialData;
        return [];
      }
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    },
    initialData || [],
    { staleTime: 1000 * 60 * 5 }
  );
}

// Partners
export function usePartners(initialData?: any[]) {
  return useHybridCachedData(
    ['partners'],
    async () => {
      const res = await fetch('/api/partners');
      if (!res.ok) {
        if (initialData) return initialData;
        return [];
      }
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    },
    initialData || [],
    { staleTime: 1000 * 60 * 5 }
  );
}

// Beneficiaries
export function useBeneficiaries(initialData?: any[]) {
  return useHybridCachedData(
    ['beneficiaries'],
    async () => {
      const res = await fetch('/api/beneficiaries');
      if (!res.ok) {
        if (initialData) return initialData;
        return [];
      }
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    },
    initialData || [],
    { staleTime: 1000 * 60 * 5 }
  );
}
