import { Pool } from 'pg';
import { PrismaClient } from '@/lib/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
  pgPool?: Pool;
};

// Warn early if DATABASE_URL missing (helps debugging)
if (!process.env.DATABASE_URL) {
  // eslint-disable-next-line no-console
  console.warn('Warning: DATABASE_URL is not set. Prisma will not be able to connect.');
}

// Reuse a single pg Pool across hot reloads in development
const pool =
  globalForPrisma.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.pgPool = pool;
}

// Instantiate the PrismaPg adapter. If your adapter requires a different
// constructor signature, change `new PrismaPg(pool)` -> `new PrismaPg({ pool })`.
let pgAdapter: any;
try {
  pgAdapter = new (PrismaPg as any)(pool);
} catch (err) {
  try {
    // Fallback if adapter expects an options object
    pgAdapter = new (PrismaPg as any)({ pool });
  } catch (err2) {
    // eslint-disable-next-line no-console
    console.error(
      'Failed to instantiate PrismaPg adapter. Tried new PrismaPg(pool) and new PrismaPg({ pool }).'
    );
    throw err2;
  }
}

// Create or reuse PrismaClient. Export as both named and default to be compatible
// with imports using either `import prisma from '@/db/prisma'` or `import { prisma } from '@/db/prisma'`.
const _prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: pgAdapter, // requires engineType="library" when generating the client
    // optional: log: process.env.NODE_ENV !== 'production' ? ['query','warn','error'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = _prisma;
}

export const prisma = _prisma;
export default prisma;
export { pool };
