import type { NextConfig } from 'next';

/**
 * Next.js configuration
 *
 * - Use images.remotePatterns instead of deprecated images.domains
 * - Keep experimental.serverActions.bodySizeLimit to allow larger multipart bodies (50mb)
 *
 * Restart the dev server after applying changes.
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  experimental: {
    // Increase server-side body parsing limit for Server Actions / route handlers
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
};

export default nextConfig;
