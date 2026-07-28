import {
  GraduationCap,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';

export type TeamCategory =
  | 'advisory'
  | 'core'
  | 'mentors';

export interface TeamCategoryConfig {
  value: TeamCategory;
  label: string;
  shortLabel: string;
  title: string;
  description: string;
  emptyTitle: string;
  emptyDescription: string;
  icon: LucideIcon;
}

export const teamPageData = {
  hero: {
    eyebrow: 'Our People',
    title: 'Meet the People Behind Our Mission',
    description:
      'Our team brings together professionals, advisors, mentors, and community leaders committed to expanding opportunities for girls and young women through technology.',
    image: '/assets/projects/images/banner/banner2.jpg',
  },

  introduction: {
    badge: 'Working Together',
    title: 'A Community Built Around Purpose',
    description:
      'GoGirls ICT Initiative is supported by people with different experiences, disciplines, and perspectives. Together, they guide our strategy, deliver our programs, mentor young people, and strengthen our connection with the communities we serve.',
  },
} as const;

export const teamCategories: TeamCategoryConfig[] =
  [
    {
      value: 'advisory',
      label: 'Advisory Board',
      shortLabel: 'Board',
      title: 'Our Advisory Board',
      description:
        'Experienced professionals who provide strategic guidance, governance support, and institutional leadership.',
      emptyTitle:
        'No Advisory Board Members Yet',
      emptyDescription:
        'Advisory board members will appear here once they have been added.',
      icon: ShieldCheck,
    },
    {
      value: 'core',
      label: 'Core Team',
      shortLabel: 'Core Team',
      title: 'Our Core Team',
      description:
        'The people coordinating programs, partnerships, operations, communications, and community engagement.',
      emptyTitle: 'No Core Team Members Yet',
      emptyDescription:
        'Core team members will appear here once they have been added.',
      icon: Users,
    },
    {
      value: 'mentors',
      label: 'Mentors',
      shortLabel: 'Mentors',
      title: 'Our Mentors',
      description:
        'Professionals and role models who share knowledge, experience, and encouragement with our learners.',
      emptyTitle: 'No Mentors Yet',
      emptyDescription:
        'Mentors will appear here once they have been added.',
      icon: GraduationCap,
    },
  ];

export const getTeamCategory = (
  about?: string | null
): TeamCategory => {
  const text = (about || '').toLowerCase();

  if (
    text.includes('advisory') ||
    text.includes('board')
  ) {
    return 'advisory';
  }

  if (text.includes('mentor')) {
    return 'mentors';
  }

  return 'core';
};

export const getInitials = (
  firstName?: string | null,
  lastName?: string | null
) => {
  const first =
    firstName?.trim().charAt(0) || '';

  const last =
    lastName?.trim().charAt(0) || '';

  return `${first}${last}`.toUpperCase() || 'TM';
};

export const getAvatarGradient = (
  firstName?: string | null,
  lastName?: string | null
) => {
  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-[#9f004d] to-pink-600',
    'from-orange-500 to-rose-500',
    'from-teal-500 to-emerald-500',
    'from-indigo-500 to-purple-500',
  ];

  const name = `${firstName || ''}${
    lastName || ''
  }`;

  const index = name
    .split('')
    .reduce(
      (total, character) =>
        total + character.charCodeAt(0),
      0
    );

  return gradients[index % gradients.length];
};