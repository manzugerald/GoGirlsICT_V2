import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import {
  EventStatus,
  PublishStatus,
  AttendanceType,
  EventMode,
  RegistrationType,
} from '@/lib/generated/prisma';
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
    const postedAtRaw = formData.get('postedAt')?.toString() || '';
    const editedAtRaw = formData.get('editedAt')?.toString() || '';
    const eventTagsRaw = formData.get('eventTags')?.toString() || '[]';
    const eventStatusRaw = formData.get('eventStatus')?.toString() || '';
    const publishStatusRaw = formData.get('publishStatus')?.toString() || '';
    const eventAttendanceRaw = formData.get('eventAttendance')?.toString() || '';
    const maxAttendeesRaw = formData.get('maxAttendees')?.toString() || '';
    const eventModeRaw = formData.get('eventMode')?.toString() || '';
    const participationLinkRaw = formData.get('participationLink')?.toString().trim() || '';
    const registrationTypeRaw = formData.get('registrationType')?.toString() || '';
    const registrationLinkRaw = formData.get('registrationLink')?.toString().trim() || '';
    const registrationStartDateRaw = formData.get('registrationStartDate')?.toString() || '';
    const registrationEndDateRaw = formData.get('registrationEndDate')?.toString() || '';
    const projectIdRaw = formData.get('projectId')?.toString() || '';
    const reportIdRaw = formData.get('reportId')?.toString() || '';

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
    // One specific message per field instead of a single catch-all
    // "Missing required fields" — the client now surfaces this string
    // directly to whoever submitted the form, so it needs to actually say
    // what's missing.
    if (isTiptapDocEmpty(eventTitle)) {
      return NextResponse.json({ error: 'Please give this event a title.' }, { status: 400 });
    }
    if (!eventDescription) {
      return NextResponse.json({ error: 'Please provide an event description.' }, { status: 400 });
    }
    if (!eventStartDateRaw || !eventEndDateRaw) {
      return NextResponse.json(
        { error: 'Please provide both event start and end dates.' },
        { status: 400 }
      );
    }

    // --- Convert dates ---
    const eventStartDate = new Date(eventStartDateRaw);
    const eventEndDate = new Date(eventEndDateRaw);

    if (isNaN(eventStartDate.getTime()) || isNaN(eventEndDate.getTime())) {
      return NextResponse.json({ error: 'Invalid date format' }, { status: 400 });
    }

    // --- Posted: optional, "auto" (now) when left blank. Edited: this is
    // the event's *first* creation, not a modification, so it has nothing
    // to default to unless the admin explicitly backdates it — it stays
    // null until a real edit happens (see the PUT handler in
    // app/api/events/[id]/route.ts, which defaults it to "now" instead).
    // Unlike the required start/end dates, these are optional admin
    // metadata — a value that fails to parse degrades to "auto" instead
    // of blocking the whole event from saving; the admin can always fix
    // it afterward from the edit form.
    const now = new Date();
    const rawParsedPostedAt = postedAtRaw ? new Date(postedAtRaw) : null;
    const rawParsedEditedAt = editedAtRaw ? new Date(editedAtRaw) : null;
    const parsedPostedAt = rawParsedPostedAt && !isNaN(rawParsedPostedAt.getTime()) ? rawParsedPostedAt : null;
    const parsedEditedAt = rawParsedEditedAt && !isNaN(rawParsedEditedAt.getTime()) ? rawParsedEditedAt : null;
    if (rawParsedPostedAt && isNaN(rawParsedPostedAt.getTime())) {
      console.warn('[events/upload] Ignoring unparseable postedAt value:', postedAtRaw);
    }
    if (rawParsedEditedAt && isNaN(rawParsedEditedAt.getTime())) {
      console.warn('[events/upload] Ignoring unparseable editedAt value:', editedAtRaw);
    }
    const postedAt = parsedPostedAt ?? now;
    const editedAt = parsedEditedAt;

    // --- Convert enums ---
    const eventStatus = toEnum(EventStatus, eventStatusRaw) || EventStatus.pending;
    const publishStatus = toEnum(PublishStatus, publishStatusRaw) || PublishStatus.draft;
    const eventAttendance = toEnum(AttendanceType, eventAttendanceRaw) || AttendanceType.public;
    const maxAttendees = maxAttendeesRaw ? Number(maxAttendeesRaw) : null;
    const eventMode = toEnum(EventMode, eventModeRaw) || EventMode.on_site;
    // The link only means anything for virtual/hybrid — dropped otherwise
    // rather than trusting the client to have cleared it.
    const participationLink =
      eventMode !== EventMode.on_site && participationLinkRaw ? participationLinkRaw : null;
    const registrationType = toEnum(RegistrationType, registrationTypeRaw) || RegistrationType.internal;
    // The link only means anything for an external registration flow —
    // dropped otherwise rather than trusting the client to have cleared it.
    const registrationLink =
      eventAttendance === AttendanceType.registration_required &&
      registrationType === RegistrationType.external &&
      registrationLinkRaw
        ? registrationLinkRaw
        : null;

    // --- Registration window: optional, only meaningful alongside
    // registration_required, but harmless to drop otherwise rather than
    // trusting the client to have cleared it.
    const rawParsedRegistrationStartDate = registrationStartDateRaw ? new Date(registrationStartDateRaw) : null;
    const rawParsedRegistrationEndDate = registrationEndDateRaw ? new Date(registrationEndDateRaw) : null;
    const registrationStartDate =
      eventAttendance === AttendanceType.registration_required &&
      rawParsedRegistrationStartDate &&
      !isNaN(rawParsedRegistrationStartDate.getTime())
        ? rawParsedRegistrationStartDate
        : null;
    const registrationEndDate =
      eventAttendance === AttendanceType.registration_required &&
      rawParsedRegistrationEndDate &&
      !isNaN(rawParsedRegistrationEndDate.getTime())
        ? rawParsedRegistrationEndDate
        : null;

    // --- Related project/report: optional, dropped if not a valid number.
    const projectId = projectIdRaw && !isNaN(Number(projectIdRaw)) ? Number(projectIdRaw) : null;
    const reportId = reportIdRaw && !isNaN(Number(reportIdRaw)) ? Number(reportIdRaw) : null;

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
        postedAt,
        editedAt,
        eventTags,
        eventStatus,
        publishStatus,
        eventAttendance,
        maxAttendees,
        eventMode,
        participationLink,
        registrationType,
        registrationLink,
        registrationStartDate,
        registrationEndDate,
        projectId,
        reportId,
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
    // Temporarily includes the real error message/name in the response
    // (visible in the browser's Network tab response body) instead of
    // just "Internal Server Error" — makes a 500 diagnosable from the
    // client side alone when server-console access isn't handy. Revert
    // once the underlying cause is found; a raw error message shouldn't
    // ship to production long-term.
    const detail =
      error instanceof Error
        ? `${error.name}: ${error.message}`
        : typeof error === 'string'
          ? error
          : JSON.stringify(error);
    return NextResponse.json({ error: 'Internal Server Error', detail }, { status: 500 });
  }
}
