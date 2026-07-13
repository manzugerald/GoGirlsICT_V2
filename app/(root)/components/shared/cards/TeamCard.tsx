import type { ReactNode } from 'react';
import { UserRound } from 'lucide-react';
import CategoryBadge from '../badges/CategoryBadge';

interface TeamCardProps {
  name: string;
  role?: string | null;
  image?: string | null;
  category?: string | null;
  bio?: string | null;
  actions?: ReactNode;
}

export default function TeamCard({
  name,
  role,
  image,
  category,
  bio,
  actions,
}: TeamCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">
      <div className="relative h-64 bg-gradient-to-br from-[#9f004d]/10 to-pink-100 dark:from-[#9f004d]/20 dark:to-gray-800">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <UserRound className="h-20 w-20 text-[#9f004d]/40" />
          </div>
        )}

        {category && (
          <div className="absolute right-4 top-4">
            <CategoryBadge label={category} tone="brand" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="heading-3 text-site-primary">{name}</h3>

        {role && (
          <p className="body mt-1 font-semibold text-[#9f004d] dark:text-pink-400">
            {role}
          </p>
        )}

        {bio && (
          <p className="body mt-4 line-clamp-3 text-site-secondary">{bio}</p>
        )}

        {actions && <div className="mt-5">{actions}</div>}
      </div>
    </article>
  );
}