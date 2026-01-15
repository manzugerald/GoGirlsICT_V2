import prisma from '@/db/prisma'

async function main() {
  const TEAM_IMAGE_URL = '/assets/images/team/avatar.png';

  // pick a system actor
  const admin = await prisma.user.findFirst({
    where: { role: { in: ['super', 'admin'] } },
    orderBy: { createdAt: 'asc' },
  });

  if (!admin) {
    throw new Error('❌ No admin or super user found. Seed users first.');
  }

  const teamMembers = [
    {
      firstName: 'Manzu',
      lastName: 'Gerald',
      email: 'manzu@gogirlsict.org',
      about: 'Founder and strategic lead of GoGirls ICT Initiative.',
    },
    {
      firstName: 'Yine',
      lastName: 'Yenki Nyika',
      email: 'yine.admin@gogirlsict.org',
      about: 'Board member providing governance and oversight.',
    },
    {
      firstName: 'Yine',
      lastName: 'Beatrice',
      email: 'yine.beatrice@gogirlsict.org',
      about: 'Project Director overseeing program delivery.',
    },
    {
      firstName: 'Grace',
      lastName: 'Peter',
      email: 'grace@gogirlsict.org',
      about: 'Web Developer responsible for platform development.',
    },
    {
      firstName: 'Sarah',
      lastName: 'Joseph',
      email: 'sarah@gogirlsict.org',
      about: 'Web Maintainer ensuring system stability and updates.',
    },
  ];

  for (const member of teamMembers) {
    await prisma.team.upsert({
      where: { email: member.email },
      update: {
        firstName: member.firstName,
        lastName: member.lastName,
        about: member.about,
        profileImage: TEAM_IMAGE_URL,
        isActive: true,
        updatedById: admin.id,
        updatedAt: new Date(),
      },
      create: {
        firstName: member.firstName,
        lastName: member.lastName,
        email: member.email,
        about: member.about,
        profileImage: TEAM_IMAGE_URL,
        isActive: true,
        createdById: admin.id,
      },
    });

    console.log(`👥 Seeded team member: ${member.firstName} ${member.lastName}`);
  }
}

main()
  .then(async () => {
    console.log('✅ Team seeding completed');
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error('❌ Team seeding failed:', error);
    await prisma.$disconnect();
    process.exit(1);
  });
