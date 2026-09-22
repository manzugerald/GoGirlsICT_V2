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
  FolderOpen,
  Headphones,
  Radio,
  Calendar,
  MessageCircle,
  Heart,
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
      'Explore our digital literacy, mentorship, innovation, and community programs, plus the reports behind them.',
    icon: BookMarked,
    children: [
      {
        label: 'Projects',
        href: '/programs',
        description:
          'Our digital literacy, mentorship, innovation, and community programs.',
        icon: FolderOpen,
      },
      {
        label: 'Reports',
        href: '/reports',
        description:
          'Program outcomes and impact documentation.',
        icon: FileText,
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
      'Listen to our podcasts and radio talkshows.',
    icon: Headphones,
    children: [
      {
        label: 'Podcasts',
        href: '/resources',
        description:
          'Conversations, stories, and insights from the GoGirls ICT community.',
        icon: Headphones,
      },
      {
        label: 'Radio Talkshows',
        href: '/resources?type=talkshows',
        description:
          'Recordings of our on-air radio talkshow appearances.',
        icon: Radio,
      },
    ],
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
    children: [
      {
        label: 'Events',
        href: '/get-involved',
        description:
          'Upcoming workshops, bootcamps, trainings, and community activities.',
        icon: Calendar,
      },
      {
        label: 'Volunteer',
        href: '/get-involved?section=volunteer',
        description:
          'Ways to mentor, facilitate, or support our community.',
        icon: HeartHandshake,
      },
      {
        label: 'Reachout',
        href: '/get-involved?section=reachout',
        description:
          'Get in touch with the GoGirls ICT team.',
        icon: MessageCircle,
      },
      {
        label: 'Donate',
        href: '/get-involved?section=donate',
        description:
          'Support our mission with a contribution.',
        icon: Heart,
      },
    ],
  },
];

export const donateLink = {
  label: 'Donate',
  href: '/get-involved?section=donate',
};
