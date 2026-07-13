import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-site-muted">
      <Link href="/" className="hover:text-[#9f004d] dark:hover:text-pink-400">
        <Home className="w-4 h-4" />
      </Link>

      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4" />

          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-[#9f004d] dark:hover:text-pink-400"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-site-primary font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}