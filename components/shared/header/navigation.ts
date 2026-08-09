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
  Images,
  HeartHandshake,
  Users,
  Handshake,
  CalendarDays,
  Newspaper,
  Download,
  Target,
  Award,
  Mail,
  HandCoins,
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

    children: [
      {
        label: 'About Us',
        href: '/about#about',
        description:
          'Explore our story, vision, mission, focus, and core values.',
        icon: Info,
      },
      {
        label: 'Partners',
        href: '/about#partners',
        description:
          'Explore our funding, collaborating, and implementing stakeholders.',
        icon: Handshake,
      },
      {
        label: 'Our Team',
        href: '/about#team',
        description:
          'Meet our core team, advisory board, and mentors.',
        icon: Users,
      },
    ],
  },

  {
    label: 'Programs',
    href: '/programs',
    description:
      'Explore our digital literacy, mentorship, innovation, and community programs.',
    icon: BookMarked,

    children: [
      {
        label: 'Active Programs',
        href: '/programs?status=active',
        description:
          'Currently running programs and initiatives.',
        icon: Target,
      },
      {
        label: 'Completed Programs',
        href: '/programs?status=completed',
        description:
          'Completed programs and past initiatives.',
        icon: Award,
      },
    ],
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
    href: '/resources',
    description:
      'Access reports, publications, downloads, and useful resources.',
    icon: FileText,

    children: [
      {
        label: 'Reports',
        href: '/reports',
        description:
          'Annual reports, program reports, and impact documents.',
        icon: FileText,
      },
      {
        label: 'Downloads',
        href: '/resources/downloads',
        description:
          'Toolkits, documents, and downloadable materials.',
        icon: Download,
      },
    ],
  },

  {
    label: 'SNS',
    href: '/sns',
    description:
      'Explore our social updates, news, articles, and galleries.',
    icon: Share2,

    children: [
      {
        label: 'SNS',
        href: '/sns?type=sns',
        description:
          'Follow our social media updates and community conversations.',
        icon: Share2,
      },
      {
        label: 'News',
        href: '/sns?type=news',
        description:
          'Latest stories, announcements, and updates.',
        icon: Newspaper,
      },
      {
        label: 'Articles',
        href: '/sns?type=articles',
        description:
          'Read insights, features, and articles from our community.',
        icon: FileText,
      },
      {
        label: 'Gallery',
        href: '/sns?type=gallery',
        description:
          'Photos from programs, workshops, and events.',
        icon: Images,
      },
    ],
  },

  {
    label: 'Get Involved',
    href: '/get-involved',
    description:
      'Join, support, volunteer, donate, or connect with GoGirls ICT.',
    icon: HeartHandshake,

    children: [
      {
        label: 'Events',
        href: '/get-involved#events',
        description:
          'Upcoming workshops, bootcamps, trainings, and activities.',
        icon: CalendarDays,
      },
      {
        label: 'Volunteer',
        href: '/get-involved#volunteer',
        description:
          'Support our mission with your time and skills.',
        icon: Users,
      },
      {
        label: 'Donate',
        href: '/get-involved#donate',
        description:
          'Support our mission with a financial contribution.',
        icon: HandCoins,
      },
      {
        label: 'Contact',
        href: '/get-involved#contact',
        description:
          'Reach out to the GoGirls ICT team.',
        icon: Mail,
      },
    ],
  },
];

export const donateLink = {
  label: 'Donate',
  href: '/get-involved#donate',
};