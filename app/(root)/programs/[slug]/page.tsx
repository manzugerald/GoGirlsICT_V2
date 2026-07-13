import type { ReactNode } from 'react';

import Link from 'next/link';
import { notFound } from 'next/navigation';

import {
  ArrowLeft,
  CalendarDays,
  FileText,
  FolderOpen,
} from 'lucide-react';

import {
  getProgramBySlugOrId,
  getRelatedPrograms,
} from '../data';

import PageSection from '@/app/(root)/components/shared/page/PageSection';
import StatusBadge from '@/app/(root)/components/shared/badges/StatusBadge';
import ContentCard from '@/app/(root)/components/shared/cards/ContentCard';
import GridSection from '@/app/(root)/components/shared/sections/GridSection';

function formatDate(
  date?: Date | string | null
) {
  if (!date) return 'Recently';

  return new Date(date).toLocaleDateString(
    'en-US',
    {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }
  );
}

function getPlainTextFromContent(
  content: unknown
): string {
  if (!content) return '';

  if (typeof content === 'string') {
    return content;
  }

  if (
    typeof content === 'object' &&
    content !== null &&
    'content' in content &&
    Array.isArray(content.content)
  ) {
    return content.content
      .map((block: any) => {
        if (!Array.isArray(block?.content)) {
          return '';
        }

        return block.content
          .map((item: any) => item?.text)
          .filter(Boolean)
          .join(' ');
      })
      .filter(Boolean)
      .join('\n\n');
  }

  return '';
}

export default async function ProgramDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const program =
    await getProgramBySlugOrId(params.slug);

  if (!program) {
    notFound();
  }

  const relatedPrograms =
    await getRelatedPrograms(program.id);

  const description =
    getPlainTextFromContent(program.content);

  const images = Array.isArray(program.images)
    ? program.images
    : [];

  const coverImage = images[0] ?? null;

  const reportCount = program.reports ? 1 : 0;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Compact cover hero */}
      <section className="relative isolate min-h-[330px] overflow-hidden">
        {coverImage ? (
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage: `url("${coverImage}")`,
            }}
          />
        ) : (
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#9f004d] via-pink-900 to-purple-950" />
        )}

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_45%)]" />

        <div className="mx-auto flex min-h-[330px] max-w-7xl flex-col px-4 pb-8 pt-16 sm:px-6 lg:px-8">
          {/* Metadata at top */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/programs"
              className="caption inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/15 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All Programs
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge
                status={program.projectStatus}
                className="border border-white/20 shadow-lg"
              />

              <HeroTag
                icon={
                  <CalendarDays className="h-4 w-4" />
                }
              >
                {formatDate(program.createdAt)}
              </HeroTag>

              <HeroTag
                icon={
                  <FileText className="h-4 w-4" />
                }
              >
                {reportCount}{' '}
                {reportCount === 1
                  ? 'Report'
                  : 'Reports'}
              </HeroTag>
            </div>
          </div>

          {/* Centered title */}
          <div className="flex flex-1 items-center justify-center py-7 text-center">
            <h1 className="heading-1 max-w-5xl text-white">
              {program.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main program content */}
      <PageSection className="pb-8 pt-10">
        <article className="mx-auto max-w-4xl">
          {description ? (
            <div className="space-y-7">
              {description
                .split('\n\n')
                .filter(Boolean)
                .map((paragraph, index) => (
                  <p
                    key={`${index}-${paragraph.slice(
                      0,
                      30
                    )}`}
                    className={`body-lg text-justify leading-relaxed text-site-secondary ${
                      index === 0
                        ? 'first-letter:mr-1 first-letter:text-5xl first-letter:font-bold first-letter:leading-none first-letter:text-[#9f004d] dark:first-letter:text-pink-400'
                        : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          ) : (
            <div className="py-14 text-center">
              <FolderOpen className="mx-auto h-14 w-14 text-[#9f004d]/40" />

              <p className="body mt-4 text-site-secondary">
                More information about this program
                will be added soon.
              </p>
            </div>
          )}
        </article>
      </PageSection>

      {/* Related programs */}
      {relatedPrograms.length > 0 && (
        <GridSection
          title="Related Programs"
          description="Continue exploring GoGirls ICT programs and initiatives."
          columns="3"
          className="pb-16 pt-5"
        >
          {relatedPrograms.map((related) => (
            <ContentCard
              key={related.id}
              title={related.title}
              href={`/programs/${
                related.slug ?? related.id
              }`}
              image={related.images?.[0]}
              imageAlt={related.title}
              meta={formatDate(
                related.createdAt
              )}
              badge={
                <StatusBadge
                  status={
                    related.projectStatus
                  }
                />
              }
              ctaLabel="View Program"
            />
          ))}
        </GridSection>
      )}
    </main>
  );
}

function HeroTag({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <span className="caption inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-semibold text-white/90 shadow-lg backdrop-blur-md">
      {icon}
      {children}
    </span>
  );
}