import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import {
  ArrowLeft,
  ExternalLink,
} from 'lucide-react';

import { prisma } from '@/db/prisma';

// ISR: Facebook posts are synced in by a background job, not edited by an
// admin, so there's no revalidatePath() trigger for this one — just the
// time-based safety net.
export const revalidate = 3600;

function formatDate(date: Date) {
  return date.toLocaleDateString(
    'en-US',
    {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }
  );
}

async function getPost(id: string) {
  return prisma.facebookPost.findUnique(
    {
      where: { id },
    }
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post
      ? 'Facebook Post | GoGirls ICT Initiative'
      : 'Post Not Found | GoGirls ICT Initiative',

    description:
      post?.message?.slice(0, 160) ??
      'A Facebook post from GoGirls ICT Initiative.',
  };
}

export default async function FacebookPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <div className="mx-auto w-[90%] max-w-2xl py-14 sm:py-20">
        <Link
          href="/sns"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-[#9f004d] dark:text-gray-300 dark:hover:text-pink-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Social Media
        </Link>

        <article className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.fullPicture}
              alt=""
              className="w-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400 dark:text-gray-500">
              {formatDate(
                post.createdTime
              )}
            </p>

            {post.message && (
              <p className="mt-4 whitespace-pre-line text-base leading-7 text-gray-700 dark:text-gray-200">
                {post.message}
              </p>
            )}

            <a
              href={post.permalinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              View on Facebook
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
