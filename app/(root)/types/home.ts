export interface HomePageContent {
  id?: number;
  heroVideo?: string;
  vision?: string;
  mission?: string;
  focus?: string;
  coreValues?: string;
  about?: string;
  logo?: string;
  banner?: string;
  siteName?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ExecutiveMessage {
  id: number;
  title?: any | null; // Tiptap JSON doc
  name?: string | null;
  affiliated?: string | null;
  content: any; // JSON
  nameImageUrl?: string | null;
  messageImageUrl?: string | null;
  messageStatus: string;
  messageCategory: string;
  senderEmail?: string | null;
  senderIp?: string | null;
  allowResponses?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Project {
  id: number;
  title: any; // Tiptap JSON doc
  slug: string;
  content: any; // JSON
  images: string[];
  projectStatus: string; // Status enum
  publishStatus: string; // PublishStatus enum
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Report {
  id: number;
  title: string;
  slug: string;
  images: string[];
  files: string[];
  publishStatus: string; // PublishStatus enum
  accessCount?: number;
  downloadCount?: number;
  createdAt?: Date;
  updatedAt?: Date;
  projectId?: number | null;
}

export interface Event {
  id: number;
  slug: string;
  eventTitle: any; // Tiptap JSON doc
  eventDescription: any; // JSON
  eventDetails?: any | null; // JSON
  eventLocation?: string | null;
  eventBanner: string;
  eventImages: string[];
  eventFile: string;
  eventStartDate: Date;
  eventEndDate: Date;
  eventTags: string[];
  eventStatus: string; // EventStatus enum
  publishStatus: string; // PublishStatus enum
  eventAttendance: string; // AttendanceType enum
  maxAttendees?: number | null;
  accessCount?: number;
  downloadCount?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TeamMember {
  id: number;
  firstName: string;
  lastName: string;
  profileImage?: string | null;
  about?: string | null;
  email?: string | null;
  phone?: string | null;
  linkedInUrl?: string | null;
  facebookUrl?: string | null;
  xUrl?: string | null;
  websiteUrl?: string | null;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Partner is Institution from your schema
export interface Partner {
  id: string;
  name: string;
  email?: string | null;
  phone?: string | null;
  logo?: string | null;
  institutionImages: string[];
  headName?: string | null;
  institutionType: string; // InstitutionType enum
  institutionCategory: string;
  createdAt?: Date;
  updatedAt?: Date;
  locations?: {
    id: string;
    locationName?: string | null;
    latitude?: number | null;
    longitude?: number | null;
  }[];
  _count?: {
    beneficiaries: number;
  };
}

export interface Beneficiary {
  id: string;
  firstName: string;
  lastName: string;
  image?: string | null;
  images: string[];
  gender: string; // GenderType enum
  email?: string | null;
  phone?: string | null;
  dateOfBirth: Date;
  beneficiaryStatus: string; // PublishStatus enum
  createdAt?: Date;
  updatedAt?: Date;
  institutionId?: string | null;
}
