export type PageStatItem = {
  label: string;
  value: string | number;
};

interface PageStatsProps {
  items: PageStatItem[];
  variant?: 'cards' | 'tags';
}

export default function PageStats({ items, variant = 'cards' }: PageStatsProps) {
  if (!items.length) return null;

  if (variant === 'tags') {
    return (
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-white shadow-lg backdrop-blur-md"
          >
            <span className="text-base font-bold">{item.value}</span>
            <span className="caption font-semibold text-white/80">{item.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-lg backdrop-blur dark:border-gray-800 dark:bg-gray-900/80"
        >
          <div className="heading-2 text-[#9f004d] dark:text-pink-400">
            {item.value}
          </div>
          <div className="caption text-site-secondary font-semibold">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}