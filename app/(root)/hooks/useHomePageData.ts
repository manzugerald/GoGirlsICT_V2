'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';

// Generic fetch function with error handling
async function fetchData<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url, {
      // Remove next.revalidate, use React Query for caching
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch from ${url}:`, error);
    throw error;
  }
}

// Home page content hook with selective refetching
export function useHomePageContent(initialData?: any) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['homepage-content'],
    queryFn: () => fetchData<any>('/api/homepage-content'),
    initialData,
    staleTime: 1000 * 60 * 10, // 10 minutes
    gcTime: 1000 * 60 * 60 * 24, // 24 hours
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    // Only refetch when data is older than staleTime
    refetchInterval: false,
    // Enable background refetching when data becomes stale
    refetchOnReconnect: true,
    retry: 1,
  });
}

// Hook to manually invalidate and refetch specific data
export function useInvalidateHomeContent() {
  const queryClient = useQueryClient();

  return {
    invalidateContent: () => queryClient.invalidateQueries({ queryKey: ['homepage-content'] }),
    invalidateMessages: () => queryClient.invalidateQueries({ queryKey: ['executive-messages'] }),
    invalidateProjects: () => queryClient.invalidateQueries({ queryKey: ['projects'] }),
    invalidateReports: () => queryClient.invalidateQueries({ queryKey: ['reports'] }),
    invalidateEvents: () => queryClient.invalidateQueries({ queryKey: ['events'] }),
    invalidateTeam: () => queryClient.invalidateQueries({ queryKey: ['team-members'] }),
    invalidatePartners: () => queryClient.invalidateQueries({ queryKey: ['partners'] }),
    invalidateBeneficiaries: () => queryClient.invalidateQueries({ queryKey: ['beneficiaries'] }),
    invalidateAll: () => queryClient.invalidateQueries(),
  };
}

// Executive messages hook
export function useExecutiveMessages(initialData?: any[]) {
  return useQuery({
    queryKey: ['executive-messages'],
    queryFn: () => fetchData<any[]>('/api/executive-messages'),
    initialData: initialData || [],
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}

// Projects hook
export function useProjects(initialData?: any[]) {
  return useQuery({
    queryKey: ['projects'],
    queryFn: () => fetchData<any[]>('/api/projects'),
    initialData: initialData || [],
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}

// Reports hook
export function useReports(initialData?: any[]) {
  return useQuery({
    queryKey: ['reports'],
    queryFn: () => fetchData<any[]>('/api/reports'),
    initialData: initialData || [],
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}

// Events hook
export function useEvents(initialData?: any[]) {
  return useQuery({
    queryKey: ['events'],
    queryFn: () => fetchData<any[]>('/api/events'),
    initialData: initialData || [],
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}

// Team members hook
export function useTeamMembers(initialData?: any[]) {
  return useQuery({
    queryKey: ['team-members'],
    queryFn: () => fetchData<any[]>('/api/team-members'),
    initialData: initialData || [],
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}

// Partners hook
export function usePartners(initialData?: any[]) {
  return useQuery({
    queryKey: ['partners'],
    queryFn: () => fetchData<any[]>('/api/partners'),
    initialData: initialData || [],
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}

// Beneficiaries hook
export function useBeneficiaries(initialData?: any[]) {
  return useQuery({
    queryKey: ['beneficiaries'],
    queryFn: () => fetchData<any[]>('/api/beneficiaries'),
    initialData: initialData || [],
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
