// prisma.config.ts
import { defineConfig, env } from 'prisma/config';
import 'dotenv/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  // Prisma Migrate connection:
  datasource: {
    // Use your env var (same one you were using before)
    url: env('DATABASE_URL'),
  },
});
