'use client';

interface SectionSkeletonProps {
  variant?: 'hero' | 'cards' | 'stats' | 'tabs' | 'social' | 'events' | 'team' | 'cta';
}

export default function SectionSkeleton({ variant = 'cards' }: SectionSkeletonProps) {
  if (variant === 'hero') {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 animate-pulse relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            <div className="h-16 w-96 max-w-full bg-white/20 rounded-lg mx-auto"></div>
            <div className="h-8 w-64 max-w-full bg-white/10 rounded-lg mx-auto"></div>
          </div>
        </div>

        {/* Scrolling cards skeleton */}
        <div className="absolute bottom-32 left-0 right-0">
          <div className="flex gap-4 overflow-hidden px-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-shrink-0 h-24 w-80 bg-white/10 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'stats') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 animate-pulse">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
          <div className="h-12 w-96 max-w-full bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4"></div>
          <div className="h-6 w-64 max-w-full bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto"></div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
          ))}
        </div>

        {/* Chart */}
        <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
      </div>
    );
  }

  if (variant === 'tabs') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 animate-pulse">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
          <div className="h-12 w-80 max-w-full bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4"></div>
          <div className="h-6 w-64 max-w-full bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="h-14 w-40 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="h-14 w-40 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-t-2xl"></div>
              <div className="px-4 space-y-3">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'social') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 animate-pulse">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
          <div className="h-12 w-80 max-w-full bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4"></div>
          <div className="h-6 w-64 max-w-full bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto"></div>
        </div>

        {/* Social Sections */}
        <div className="space-y-12">
          {/* Facebook Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-200 dark:bg-blue-800 rounded-xl"></div>
              <div className="space-y-2">
                <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
            <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
          </div>

          {/* YouTube Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-200 dark:bg-red-800 rounded-xl"></div>
              <div className="space-y-2">
                <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
            <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'team') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 animate-pulse">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
          <div className="h-12 w-96 max-w-full bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4"></div>
          <div className="h-6 w-64 max-w-full bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto"></div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4 text-center">
              <div className="h-32 w-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto"></div>
              <div className="space-y-2">
                <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto"></div>
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto"></div>
                <div className="h-px w-16 bg-gray-200 dark:bg-gray-700 mx-auto my-4"></div>
                <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded mx-auto"></div>
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'events') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 animate-pulse">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
          <div className="h-12 w-80 max-w-full bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4"></div>
          <div className="h-6 w-64 max-w-full bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto"></div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'cta') {
    return (
      <div className="w-full min-h-[60vh] bg-gradient-to-br from-[#9f004d]/20 to-pink-500/20 animate-pulse flex items-center justify-center">
        <div className="text-center space-y-6 px-4">
          <div className="w-20 h-20 bg-white/20 rounded-full mx-auto"></div>
          <div className="h-16 w-96 max-w-full bg-white/20 rounded-lg mx-auto"></div>
          <div className="h-8 w-64 max-w-full bg-white/10 rounded-lg mx-auto"></div>
          <div className="flex gap-4 justify-center mt-8">
            <div className="h-14 w-40 bg-white/20 rounded-full"></div>
            <div className="h-14 w-40 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  // Default cards skeleton
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-pulse">
      <div className="text-center mb-12">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
        <div className="h-12 w-80 max-w-full bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4"></div>
        <div className="h-6 w-64 max-w-full bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-80 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
        ))}
      </div>
    </div>
  );
}
