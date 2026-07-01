import type { LucideIcon } from 'lucide-react';
import {
  Home,
  Info,
  BookOpen,
  BarChart3,
  FileText,
  Images,
  HeartHandshake,
  Users,
  Handshake,
  CalendarDays,
  Newspaper,
  Youtube,
  Facebook,
  Download,
  Target,
  Award,
  Compass,
  BookMarked,
  Mail,
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
    description: 'Return to the GoGirls ICT landing page',
    icon: Home,
  },
  {
    label: 'About',
    href: '/about',
    description: 'Learn who we are, what we value, and the people behind the mission',
    icon: Info,
    children: [
      {
        label: 'Our Story',
        href: '/about',
        description: 'How GoGirls ICT began and why we exist',
        icon: BookOpen,
      },
      {
        label: 'Vision & Mission',
        href: '/about/vision-mission',
        description: 'Our purpose and long-term direction',
        icon: Target,
      },
      {
        label: 'Core Values',
        href: '/about/core-values',
        description: 'The principles guiding our work',
        icon: Award,
      },
      {
        label: 'Strategic Focus Areas',
        href: '/about/focus-areas',
        description: 'The areas where we concentrate our impact',
        icon: Compass,
      },
      {
        label: 'Our Team',
        href: '/about/team',
        description: 'Core team, advisory board, and mentors',
        icon: Users,
      },
      {
        label: 'Partners',
        href: '/about/partners',
        description: 'Funding, collaborating, and implementing stakeholders',
        icon: Handshake,
      },
      {
        label: 'Beneficiaries',
        href: '/about/beneficiaries',
        description: 'The girls, women, and communities we serve',
        icon: HeartHandshake,
      },
    ],
  },
  {
    label: 'Programs',
    href: '/programs',
    description: 'Explore our digital skills, mentorship, and community programs',
    icon: BookMarked,
    children: [
      {
        label: 'All Programs',
        href: '/programs',
        description: 'Browse all programs and initiatives',
        icon: BookMarked,
      },
      {
        label: 'Active Programs',
        href: '/programs?status=active',
        description: 'Currently running programs',
        icon: Target,
      },
      {
        label: 'Completed Programs',
        href: '/programs?status=completed',
        description: 'Past programs and completed initiatives',
        icon: Award,
      },
    ],
  },
  {
    label: 'Impact',
    href: '/impact',
    description: 'Explore our data, outcomes, and measurable change',
    icon: BarChart3,
  },
  {
    label: 'Resources',
    href: '/resources',
    description: 'Reports, publications, and downloadable materials',
    icon: FileText,
    children: [
      {
        label: 'Reports',
        href: '/resources/reports',
        description: 'Program reports, annual reports, and impact documents',
        icon: FileText,
      },
      {
        label: 'Publications',
        href: '/resources/publications',
        description: 'Research, articles, and public knowledge products',
        icon: Newspaper,
      },
      {
        label: 'Downloads',
        href: '/resources/downloads',
        description: 'Files and resources available for download',
        icon: Download,
      },
    ],
  },
  {
    label: 'Media',
    href: '/media',
    description: 'News, photos, videos, and social media updates',
    icon: Images,
    children: [
      {
        label: 'News',
        href: '/media/news',
        description: 'Latest announcements and stories',
        icon: Newspaper,
      },
      {
        label: 'Gallery',
        href: '/media/gallery',
        description: 'Photos from our activities and programs',
        icon: Images,
      },
      {
        label: 'YouTube',
        href: '/media/youtube',
        description: 'Videos, interviews, and program highlights',
        icon: Youtube,
      },
      {
        label: 'Facebook',
        href: '/media/facebook',
        description: 'Community updates from Facebook',
        icon: Facebook,
      },
    ],
  },
  {
    label: 'Get Involved',
    href: '/get-involved',
    description: 'Join, support, volunteer, or connect with us',
    icon: HeartHandshake,
    children: [
      {
        label: 'Events',
        href: '/events',
        description: 'Upcoming workshops, bootcamps, and activities',
        icon: CalendarDays,
      },
      {
        label: 'Volunteer',
        href: '/get-involved/volunteer',
        description: 'Support our programs with your time and skills',
        icon: Users,
      },
      {
        label: 'Contact',
        href: '/contact',
        description: 'Reach out to the GoGirls ICT team',
        icon: Mail,
      },
    ],
  },
];

export const donateLink = {
  label: 'Donate',
  href: '/donate',
};