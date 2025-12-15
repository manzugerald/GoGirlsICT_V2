import { PrismaClient, InstitutionType } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

async function seedInstitutions() {
  // ✅ Use Manzu as creator + approver
  const creator = await prisma.user.findUnique({
    where: { username: 'manzu' },
  });

  if (!creator) {
    throw new Error('❌ Creator user "manzu" not found. Seed users first.');
  }

  const institutions = [
    {
      name: 'Bright Future Primary School',
      email: 'info@brightfuture.edu',
      phone: '+211912000001',
      headName: 'Sr. Mary Lado',
      institutionType: InstitutionType.education,
      logo: '/assets/images/institutions/logoipsum-1.png',
    },
    {
      name: 'Juba Youth Community Center',
      email: 'contact@jubayouth.org',
      phone: '+211912000002',
      headName: 'Paul Taban',
      institutionType: InstitutionType.local_community,
      logo: '/assets/images/institutions/logoipsum-2.png',
    },
    {
      name: 'Hope for Girls South Sudan',
      email: 'admin@hopeforgirls.org',
      phone: '+211912000003',
      headName: 'Grace Akot',
      institutionType: InstitutionType.ngo,
      logo: '/assets/images/institutions/logoipsum-3.png',
    },
    {
      name: 'Global Education Aid International',
      email: 'office@geai.org',
      phone: '+211912000004',
      headName: 'Dr. Michael Peter',
      institutionType: InstitutionType.ngo,
      logo: '/assets/images/institutions/logoipsum-4.png',
    },
    {
      name: 'St. Joseph Faith-Based Mission',
      email: 'mission@stjoseph.org',
      phone: '+211912000005',
      headName: 'Rev. John Gatluak',
      institutionType: InstitutionType.faith_based_organization,
      logo: '/assets/images/institutions/logoipsum-5.png',
    },
    {
      name: 'Women in Technology Academy',
      email: 'hello@wita.academy',
      phone: '+211912000006',
      headName: 'Linda Wani',
      institutionType: InstitutionType.education,
      logo: '/assets/images/institutions/logoipsum-6.png',
    },
    {
      name: 'Central Equatoria Skills Development Office',
      email: 'skills@cesdo.gov.ss',
      phone: '+211912000007',
      headName: 'Mr. James Lokonga',
      institutionType: InstitutionType.government,
      logo: '/assets/images/institutions/logoipsum-7.png',
    },
    {
      name: 'Community Women Empowerment Network',
      email: 'info@cwenet.org',
      phone: '+211912000008',
      headName: 'Amina Deng',
      institutionType: InstitutionType.other,
      logo: '/assets/images/institutions/logoipsum-8.png',
    },
  ];

  for (const inst of institutions) {
    const created = await prisma.institution.upsert({
      where: { email: inst.email },
      update: {
        name: inst.name,
        phone: inst.phone,
        logo: inst.logo,
        institutionImages: [inst.logo],
        headName: inst.headName,
        institutionType: inst.institutionType,
        updatedById: creator.id,
        approvedById: creator.id,
        updatedAt: new Date(),
      },
      create: {
        name: inst.name,
        email: inst.email,
        phone: inst.phone,
        logo: inst.logo,
        institutionImages: [inst.logo],
        headName: inst.headName,
        institutionType: inst.institutionType,

        createdById: creator.id,
        updatedById: null,
        approvedById: creator.id,
      },
    });

    console.log(`✅ Institution seeded: ${created.name} (${created.institutionType})`);
  }
}

seedInstitutions()
  .then(async () => {
    console.log('✅✅ All 8 institutions seeded successfully');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Institution seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
