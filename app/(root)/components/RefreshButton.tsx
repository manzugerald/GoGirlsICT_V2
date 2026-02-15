'use client';

import { RefreshCw } from 'lucide-react';
import { useInvalidateHomeContent } from '../hooks/useHomePageData';
import { useState } from 'react';

export default function RefreshButton() {
  const { invalidateAll } = useInvalidateHomeContent();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await invalidateAll();
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <button
      onClick={handleRefresh}
      disabled={isRefreshing}
      className="fixed bottom-4 right-4 z-50 p-3 bg-[#9f004d] hover:bg-[#8a0042] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50"
      aria-label="Refresh content"
      title="Refresh content"
    >
      <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
    </button>
  );
}
