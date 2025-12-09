import { PrismaClient } from '@/lib/generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Use a stronger default seed password; encourage replacing in production.
  const PASSWORD = process.env.SEED_ADMIN_PASSWORD || 'ChangeMe!234';
  const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS || '12', 10);
  const hashedPassword = await bcrypt.hash(PASSWORD, BCRYPT_ROUNDS);

  // Upsert ensures running the seed multiple times is idempotent.
  const admin = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {
      // keep password updated for seed runs (optional)
      password: hashedPassword,
      email: 'evayayir@gogirlsict.org',
      firstName: 'Eva',
      lastName: 'Yayi',
      image: '/assets/images/users/evayayi.jpg',
      about: 'Co-founder and Admin User',
      role: 'admin',
      lastLogin: new Date(),
      loginStatus: 'active',
      failedLoginCount: 0,
      lockedUntil: null,
      updatedAt: new Date(),
    },
    create: {
      firstName: 'Admin',
      lastName: 'Super',
      username: 'admin',
      email: 'super@gogirlsict.org',
      password: hashedPassword,
      image: '/assets/images/users/evayayi.jpg',
      about: 'Super Admin User',
      role: 'super',
      lastLogin: new Date(),
      loginStatus: 'active',
      failedLoginCount: 0,
      lockedUntil: null,
      // create related records so history/logs/sessions exist for the seeded admin
      passwordHistory: {
        create: [
          {
            passwordHash: hashedPassword,
            // createdAt will default to now()
          },
        ],
      },
      passwordChangeLog: {
        create: [
          {
            changedBy: null,
            ip: '127.0.0.1',
            userAgent: 'seed-script',
          },
        ],
      },
      sessions: {
        create: [
          {
            startedAt: new Date(),
            lastSeenAt: new Date(),
            ip: '127.0.0.1',
            userAgent: 'seed-script',
            active: true,
          },
        ],
      },
    },
  });

  console.log('Seeded admin user:', { id: admin.id, username: admin.username, email: admin.email });
}

main()
  .then(async () => {
    console.log('✅ Seeding complete');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
