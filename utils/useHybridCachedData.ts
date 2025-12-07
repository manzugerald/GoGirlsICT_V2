import { useEffect, useState } from 'react';

type Fetcher<T> = () => Promise<T>;
type Options<T> = {
  initialData?: T;
  staleTime?: number; // ms
};

export function useHybridCachedData<T>(
  key: string,
  fetcher: Fetcher<T>,
  options: Options<T> = {}
): { data: T | undefined; isLoading: boolean; refresh: () => void } {
  const { initialData, staleTime = 60 * 60 * 1000 } = options;
  const [data, setData] = useState<T | undefined>(initialData);
  const [isLoading, setIsLoading] = useState(!initialData);

  // Always show cached data if available, but always fetch in background for freshness
  useEffect(() => {
    let cancelled = false;
    async function load() {
      // Try localStorage first
      let usedCache = false;
      try {
        const raw = localStorage.getItem(key);
        if (raw) {
          const parsed = JSON.parse(raw);
          setData(parsed.value);
          setIsLoading(false);
          usedCache = true;
        }
      } catch {}
      // Use initialData if provided and nothing in cache
      if (!usedCache && initialData !== undefined) {
        setData(initialData);
        setIsLoading(false);
      }
      // Always fetch in background
      setIsLoading(true);
      const fresh = await fetcher();
      if (!cancelled) {
        setData(fresh);
        setIsLoading(false);
        try {
          localStorage.setItem(key, JSON.stringify({ value: fresh, ts: Date.now() }));
        } catch {}
      }
    }
    load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line
  }, [key]);

  // Manual refresh
  const refresh = async () => {
    setIsLoading(true);
    const fresh = await fetcher();
    setData(fresh);
    setIsLoading(false);
    try {
      localStorage.setItem(key, JSON.stringify({ value: fresh, ts: Date.now() }));
    } catch {}
  };

  return { data, isLoading, refresh };
}
