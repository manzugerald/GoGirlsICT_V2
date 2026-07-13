import { ImageIcon } from 'lucide-react';

interface GalleryCardProps {
  title?: string;
  image?: string | null;
  imageAlt?: string;
  meta?: string;
}

export default function GalleryCard({
  title,
  image,
  imageAlt,
  meta,
}: GalleryCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-[#9f004d]/10 to-pink-100 dark:from-[#9f004d]/20 dark:to-gray-800">
        {image ? (
          <img
            src={image}
            alt={imageAlt || title || 'Gallery image'}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <ImageIcon className="h-14 w-14 text-[#9f004d]/40" />
          </div>
        )}
      </div>

      {(title || meta) && (
        <div className="p-5">
          {title && (
            <h3 className="heading-3 line-clamp-2 text-site-primary">{title}</h3>
          )}

          {meta && (
            <p className="caption mt-2 text-site-muted">{meta}</p>
          )}
        </div>
      )}
    </article>
  );
}