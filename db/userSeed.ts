import { PrismaClient, Role, LoginStatus } from '@/lib/generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const PASSWORD = process.env.SEED_ADMIN_PASSWORD || 'ChangeMe!234';
  const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS || '12', 10);
  const hashedPassword = await bcrypt.hash(PASSWORD, BCRYPT_ROUNDS);

  const IMAGE_URL = '/assets/images/users/evayayi.jpg';

  const users = [
    // ✅ REQUIRED 3
    {
      firstName: 'Manzu',
      lastName: 'Gerald',
      username: 'manzu',
      email: 'manzu@gogirlsict.org',
      role: Role.super,
    },
    {
      firstName: 'Yine',
      lastName: 'Yenki Nyika',
      username: 'yineadmin',
      email: 'yine.admin@gogirlsict.org',
      role: Role.admin,
    },
    {
      firstName: 'Yine',
      lastName: 'Beatrice',
      username: 'yinemod',
      email: 'yine.beatrice@gogirlsict.org',
      role: Role.moderator,
    },

    // ✅ 8 BENEFICIARIES
    {
      firstName: 'Amina',
      lastName: 'Deng',
      username: 'amina',
      email: 'amina@gogirlsict.org',
      role: Role.beneficiary,
    },
    {
      firstName: 'Nyakim',
      lastName: 'Bol',
      username: 'nyakim',
      email: 'nyakim@gogirlsict.org',
      role: Role.beneficiary,
    },
    {
      firstName: 'Mary',
      lastName: 'Akot',
      username: 'maryakot',
      email: 'mary.akot@gogirlsict.org',
      role: Role.beneficiary,
    },
    {
      firstName: 'Theresa',
      lastName: 'Lado',
      username: 'theresalado',
      email: 'theresa@gogirlsict.org',
      role: Role.beneficiary,
    },
    {
      firstName: 'Linda',
      lastName: 'Wani',
      username: 'lindawani',
      email: 'linda@gogirlsict.org',
      role: Role.beneficiary,
    },
    {
      firstName: 'Sarah',
      lastName: 'Joseph',
      username: 'sarahj',
      email: 'sarah@gogirlsict.org',
      role: Role.beneficiary,
    },
    {
      firstName: 'Grace',
      lastName: 'Peter',
      username: 'gracep',
      email: 'grace@gogirlsict.org',
      role: Role.beneficiary,
    },
    {
      firstName: 'Joy',
      lastName: 'Elijah',
      username: 'joye',
      email: 'joy@gogirlsict.org',
      role: Role.beneficiary,
    },
  ];

  for (const user of users) {
    const created = await prisma.user.upsert({
      where: { username: user.username },
      update: {
        password: hashedPassword,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        image: IMAGE_URL,
        role: user.role,
        lastLogin: new Date(),
        loginStatus: LoginStatus.active,
        failedLoginCount: 0,
        lockedUntil: null,
        updatedAt: new Date(),
      },
      create: {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        password: hashedPassword,
        image: IMAGE_URL,
        about: `${user.role} user`,
        role: user.role,
        lastLogin: new Date(),
        loginStatus: LoginStatus.active,
        failedLoginCount: 0,
        lockedUntil: null,

        passwordHistory: {
          create: [{ passwordHash: hashedPassword }],
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

    console.log(`✅ Seeded: ${created.username} (${created.role})`);
  }
}

main()
  .then(async () => {
    console.log('✅✅ All 11 users seeded successfully');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
