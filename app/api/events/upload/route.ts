import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { EventStatus, PublishStatus, AttendanceType } from '@/lib/generated/prisma';
import { slugify } from '@/lib/utils';
import { extractPlainText, isTiptapDocEmpty } from '@/lib/tiptap';
import { saveUploadedFile, saveUploadedFiles } from '@/lib/uploadHelpers';
import { revalidatePath } from 'next/cache';

function toEnum<T>(enumObject: T, value: string): T[keyof T] | undefined {
  return (enumObject as Record<string, unknown>)[value] as T[keyof T] | undefined;
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const userId = session.user.id;
    const formData = await req.formData();

    // --- Parse fields ---
    const eventTitleRaw = formData.get('eventTitle')?.toString() || '';
    const eventDescriptionRaw = formData.get('eventDescription')?.toString() || '{}';
    const eventDetailsRaw = formData.get('eventDetails')?.toString() || '{}';
    const eventLocation = formData.get('eventLocation')?.toString() || '';

    const eventStartDateRaw = formData.get('eventStartDate')?.toString() || '';
    const eventEndDateRaw = formData.get('eventEndDate')?.toString() || '';
    const eventTagsRaw = formData.get('eventTags')?.toString() || '[]';
    const eventStatusRaw = formData.get('eventStatus')?.toString() || '';
    const publishStatusRaw = formData.get('publishStatus')?.toString() || '';
    const eventAttendanceRaw = formData.get('eventAttendance')?.toString() || '';
    const maxAttendeesRaw = formData.get('maxAttendees')?.toString() || '';

    // --- Parse JSON fields ---
    let eventTitle;
    let eventDescription;
    let eventDetails;
    let eventTags: string[];
    try {
      eventTitle = eventTitleRaw ? JSON.parse(eventTitleRaw) : null;
    } catch {
      eventTitle = null;
    }
    try {
      eventDescription = JSON.parse(eventDescriptionRaw);
    } catch {
      eventDescription = {};
    }
    try {
      eventDetails = JSON.parse(eventDetailsRaw);
    } catch {
      eventDetails = {};
    }
    try {
      eventTags = JSON.parse(eventTagsRaw);
      if (!Array.isArray(eventTags)) eventTags = [];
    } catch {
      eventTags = [];
    }

    // --- Validate required fields ---
    if (isTiptapDocEmpty(eventTitle) || !eventDescription || !eventStartDateRaw || !eventEndDateRaw) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // --- Convert dates ---
    const eventStartDate = new Date(eventStartDateRaw);
    const eventEndDate = new Date(eventEndDateRaw);

    if (isNaN(eventStartDate.getTime()) || isNaN(eventEndDate.getTime())) {
      return NextResponse.json({ error: 'Invalid date format' }, { status: 400 });
    }

    // --- Convert enums ---
    const eventStatus = toEnum(EventStatus, eventStatusRaw) || EventStatus.pending;
    const publishStatus = toEnum(PublishStatus, publishStatusRaw) || PublishStatus.draft;
    const eventAttendance = toEnum(AttendanceType, eventAttendanceRaw) || AttendanceType.public;
    const maxAttendees = maxAttendeesRaw ? Number(maxAttendeesRaw) : null;

    // --- Slug ---
    const slug = slugify(extractPlainText(eventTitle).trim());

    // --- Handle file uploads using updated helper ---
    // Banner (single file, required on create)
    let eventBanner = '';
    const bannerUrl = await saveUploadedFile(formData, 'bannerFile', 'image', slug);
    if (bannerUrl) eventBanner = bannerUrl;

    // Event Images (multiple, optional)
    const eventImages = await saveUploadedFiles(formData, 'files', 'image', slug);

    // Event File (single, optional, pdf/doc)
    let eventFile = '';
    const eventFileUrl = await saveUploadedFile(formData, 'eventFileUpload', 'pdf', slug);
    if (eventFileUrl) eventFile = eventFileUrl;

    // --- Create the event ---
    const createdEvent = await prisma.event.create({
      data: {
        eventTitle,
        slug,
        eventDescription,
        eventDetails,
        eventLocation,
        eventBanner,
        eventImages,
        eventFile,
        eventStartDate,
        eventEndDate,
        eventTags,
        eventStatus,
        publishStatus,
        eventAttendance,
        maxAttendees,
        createdById: userId,
        updatedById: userId,
      },
    });

    revalidatePath('/');
    revalidatePath('/impact');
    revalidatePath('/get-involved');
    revalidatePath(`/events/${createdEvent.slug}`);

    return NextResponse.json(createdEvent);
  } catch (error) {
    console.error('Failed to create event:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
