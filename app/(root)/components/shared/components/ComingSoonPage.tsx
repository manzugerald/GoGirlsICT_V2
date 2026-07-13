// app/(root)/components/shared/page/ComingSoonPage.tsx

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ComingSoonPageProps {
  title: string;
  description?: string;
}

export default function ComingSoonPage({ title, description }: ComingSoonPageProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pt-24 px-4">
      <section className="wrapper max-w-5xl mx-auto py-20 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#9f004d] dark:text-pink-400 font-semibold mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back Home
        </Link>

        <p className="caption uppercase tracking-wide font-semibold text-[#9f004d] dark:text-pink-400 mb-3">
          Section Title
        </p>

        <h1 className="heading-1 text-site-primary mb-4">
          {title}
        </h1>

        <p className="body-lg text-site-secondary max-w-2xl mx-auto">
          {description || 'Coming soon.'}
        </p>
      </section>
    </main>
  );
}