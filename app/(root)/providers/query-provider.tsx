'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useState } from 'react';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

export function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes - data is fresh
            gcTime: 1000 * 60 * 60 * 24, // 24 hours - keep in cache
            refetchOnWindowFocus: false, // Don't refetch on window focus
            refetchOnReconnect: false, // Don't refetch on reconnect
            refetchOnMount: false, // Don't refetch on component mount
            retry: 1,
            retryDelay: 1000,
          },
        },
      })
  );

  // Create persister for localStorage
  const persister =
    typeof window !== 'undefined'
      ? createSyncStoragePersister({
          storage: window.localStorage,
          key: 'GOGIRLS_CACHE', // Custom cache key
        })
      : undefined;

  if (persister) {
    return (
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{
          persister,
          maxAge: 1000 * 60 * 60 * 24, // 24 hours
          dehydrateOptions: {
            shouldDehydrateQuery: (query) => {
              // Only persist successful queries
              return query.state.status === 'success';
            },
          },
        }}
      >
        {children}
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      </PersistQueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
