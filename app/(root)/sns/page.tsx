import type { Metadata } from 'next';

import SocialFeeds from './components/SocialFeeds';

import {
  normalizeSnsType,
} from './data';

export const metadata: Metadata = {
  title: 'SNS',

  description:
    'Follow the latest Facebook posts and YouTube videos from GoGirls ICT Initiative.',
};

type SnsPageProps = {
  searchParams: Promise<{
    type?: string | string[];
  }>;
};

export default async function SnsPage({
  searchParams,
}: SnsPageProps) {
  const params = await searchParams;

  const activeType =
    normalizeSnsType(params.type);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {activeType === 'sns' && (
        <SocialFeeds />
      )}
    </main>
  );
}