import { Building2, Star } from 'lucide-react';
import CategoryBadge from '../badges/CategoryBadge';

interface PartnerCardProps {
  name: string;
  logo?: string | null;
  type?: string | null;
  category?: string | null;
}

function formatLabel(value?: string | null) {
  if (!value) return 'Institution';

  return value
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function PartnerCard({
  name,
  logo,
  type,
  category,
}: PartnerCardProps) {
  return (
    <article className="group relative flex h-full overflow-hidden rounded-3xl border border-gray-200 bg-white/90 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900/90">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-500" />

      {category && (
        <div className="absolute right-5 top-5 z-10">
          <CategoryBadge
            label={formatLabel(category)}
            icon={<Star className="h-3.5 w-3.5 fill-current" />}
            tone="brand"
          />
        </div>
      )}

      <div className="flex w-full flex-col p-6">
        <div className="flex items-start gap-4 pr-24">
          {logo ? (
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-md dark:border-gray-700 dark:bg-gray-800">
              <img src={logo} alt={name} className="h-full w-full object-cover" />
            </div>
          ) : (
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9f004d] to-pink-600 shadow-md">
              <Building2 className="h-8 w-8 text-white" />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <h3 className="heading-3 line-clamp-2 text-site-primary transition-colors group-hover:text-[#9f004d] dark:group-hover:text-pink-400">
              {name}
            </h3>
          </div>
        </div>

        <div className="mt-5">
          <span className="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 caption font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
            {formatLabel(type)}
          </span>
        </div>
      </div>
    </article>
  );
}