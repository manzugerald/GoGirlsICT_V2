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
      // Uploaded event/project/etc. images are served back as absolute
      // URLs built from the request origin (see app/api/events/route.ts),
      // which in local dev is localhost on whatever port the server
      // happens to be running on — no `port` means any port is allowed.
      {
        protocol: 'http',
        hostname: 'localhost',
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
