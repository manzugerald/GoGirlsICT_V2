import type {
  LucideIcon,
} from 'lucide-react';

import {
  Share2,
  Home,
  Info,
  BookMarked,
  BarChart3,
  FileText,
  HeartHandshake,
} from 'lucide-react';

export type NavigationChild = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  children?: NavigationChild[];
};

export const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    description:
      'Return to the GoGirls ICT landing page.',
    icon: Home,
  },

  {
    label: 'About',
    href: '/about',
    description:
      'Learn about our story, people, partners, values, and mission.',
    icon: Info,
  },

  {
    label: 'Programs',
    href: '/programs',
    description:
      'Explore our digital literacy, mentorship, innovation, and community programs.',
    icon: BookMarked,
  },

  {
    label: 'Impact',
    href: '/impact',
    description:
      'Explore our data, outcomes, and measurable change.',
    icon: BarChart3,
  },

  {
    label: 'Resources',
    href: '/reports',
    description:
      'Listen to our podcasts and access reports, publications, and useful resources.',
    icon: FileText,
  },

  {
    label: 'SNS',
    href: '/sns',
    description:
      'Explore our social updates, news, articles, and galleries.',
    icon: Share2,
  },

  {
    label: 'Get Involved',
    href: '/get-involved',
    description:
      'Join, support, volunteer, donate, or connect with GoGirls ICT.',
    icon: HeartHandshake,
  },
];

export const donateLink = {
  label: 'Donate',
  href: '/get-involved#donate',
};
