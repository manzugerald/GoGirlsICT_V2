import { PrismaClient, GenderType } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

async function seedBeneficiaries() {
  const IMAGE_URL = '/assets/images/beneficiaries/manzu.jpg';

  // ✅ Use Manzu as the creator + approver
  const creator = await prisma.user.findUnique({
    where: { username: 'manzu' },
  });

  if (!creator) {
    throw new Error('❌ Creator user "manzu" not found. Seed users first.');
  }

  const beneficiaries = [
    {
      firstName: 'Amina',
      lastName: 'Deng',
      gender: GenderType.female,
      email: 'amina.beneficiary@gogirlsict.org',
    },
    {
      firstName: 'Nyaboth',
      lastName: 'Ajak',
      gender: GenderType.female,
      email: 'nyaboth@gogirlsict.org',
    },
    {
      firstName: 'Grace',
      lastName: 'Atim',
      gender: GenderType.female,
      email: 'grace.atim@gogirlsict.org',
    },
    {
      firstName: 'Linda',
      lastName: 'Wani',
      gender: GenderType.female,
      email: 'linda.wani@gogirlsict.org',
    },
    {
      firstName: 'Joy',
      lastName: 'Elijah',
      gender: GenderType.female,
      email: 'joy.elijah@gogirlsict.org',
    },
    {
      firstName: 'Mary',
      lastName: 'Akot',
      gender: GenderType.female,
      email: 'mary.akot@gogirlsict.org',
    },

    {
      firstName: 'Daniel',
      lastName: 'Lado',
      gender: GenderType.male,
      email: 'daniel.lado@gogirlsict.org',
    },
    {
      firstName: 'Peter',
      lastName: 'Lokonga',
      gender: GenderType.male,
      email: 'peter.lokonga@gogirlsict.org',
    },
    {
      firstName: 'Samuel',
      lastName: 'Kiden',
      gender: GenderType.male,
      email: 'samuel.kiden@gogirlsict.org',
    },
    {
      firstName: 'James',
      lastName: 'Taban',
      gender: GenderType.male,
      email: 'james.taban@gogirlsict.org',
    },
    {
      firstName: 'Michael',
      lastName: 'Wol',
      gender: GenderType.male,
      email: 'michael.wol@gogirlsict.org',
    },
    {
      firstName: 'John',
      lastName: 'Gatluak',
      gender: GenderType.male,
      email: 'john.gatluak@gogirlsict.org',
    },
  ];

  for (let i = 0; i < beneficiaries.length; i++) {
    const b = beneficiaries[i];

    // ✅ Realistic DOB spread
    const dob = new Date(1998 + (i % 5), i % 12, (i % 28) + 1);

    const created = await prisma.beneficiary.create({
      data: {
        firstName: b.firstName,
        lastName: b.lastName,
        gender: b.gender,
        email: b.email,
        phone: null,

        image: IMAGE_URL,
        images: [IMAGE_URL],

        dateOfBirth: dob,

        createdById: creator.id,
        approvedById: creator.id,
        updatedById: null,

        institutionId: null,
      },
    });

    console.log(`✅ Beneficiary seeded: ${created.firstName} ${created.lastName}`);
  }
}

seedBeneficiaries()
  .then(async () => {
    console.log('✅✅ All 12 beneficiaries seeded successfully');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Beneficiary seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
