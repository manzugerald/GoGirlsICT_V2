import { useEffect, useState } from 'react';

type Fetcher<T> = () => Promise<T>;
type Options<T> = {
  initialData?: T;
  staleTime?: number; // ms
  // When false, the hook never touches localStorage or the network — it
  // just returns `initialData` as-is. Used when the caller already has a
  // fresh value (e.g. computed server-side and passed as a prop) and the
  // hook's own caching would be redundant, or worse, would overwrite the
  // shared localStorage entry with data another caller (a different key
  // reuse) didn't ask for.
  enabled?: boolean;
};

export function useHybridCachedData<T>(
  key: string,
  fetcher: Fetcher<T>,
  options: Options<T> = {}
): { data: T | undefined; isLoading: boolean; refresh: () => void } {
  const { initialData, staleTime = 60 * 60 * 1000, enabled = true } = options;
  const [data, setData] = useState<T | undefined>(initialData);
  const [isLoading, setIsLoading] = useState(enabled && !initialData);

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    async function load() {
      // Try localStorage first, and skip the network entirely if that
      // cached value is still within staleTime.
      let usedCache = false;
      try {
        const raw = localStorage.getItem(key);
        if (raw) {
          const parsed = JSON.parse(raw);
          setData(parsed.value);
          setIsLoading(false);
          usedCache = true;
          const age = Date.now() - (parsed.ts ?? 0);
          if (age < staleTime) return; // cache is fresh — no fetch needed
        }
      } catch {}

      if (!usedCache && initialData !== undefined) {
        setData(initialData);
        setIsLoading(false);
      }

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
  }, [key, enabled]);

  // Manual refresh always hits the network, regardless of staleTime.
  const refresh = async () => {
    if (!enabled) return;
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
