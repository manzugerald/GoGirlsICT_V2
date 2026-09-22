'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import DateTimePicker from '@/components/ui/datetime-picker';
import SearchableSelect, { SearchableSelectOption } from '@/components/ui/searchable-select';
import '@/assets/styles/tiptap-editor.css';
import { EMPTY_TIPTAP_DOC, extractPlainText, isTiptapDocEmpty, normalizeTiptapDoc } from '@/lib/tiptap';
import { RichTextEditorProvider } from '@/components/editor/rich-text-context';
import RichTextToolbar from '@/components/editor/rich-text-toolbar';
import RichTextField from '@/components/editor/rich-text-field';

const eventStatusOptions = ['pending', 'ongoing', 'completed', 'paused'] as const;
const publishOptions = ['draft', 'published'] as const;
const attendanceOptions = ['public', 'registration_required'] as const;
const eventModeOptions = ['on_site', 'virtual', 'hybrid'] as const;
const registrationTypeOptions = ['internal', 'external'] as const;

type EventStatus = (typeof eventStatusOptions)[number];
type PublishStatus = (typeof publishOptions)[number];
type AttendanceType = (typeof attendanceOptions)[number];
type EventMode = (typeof eventModeOptions)[number];
type RegistrationType = (typeof registrationTypeOptions)[number];

type EventFormProps = {
  mode?: 'create' | 'edit';
  initialData?: {
    id?: string;
    eventTitle: object; // Tiptap JSON doc
    eventDescription: object;
    eventDetails?: object;
    eventLocation?: string;
    eventBanner: string; // string (URL or empty)
    eventImages: string[];
    eventFile: string;
    eventStartDate: string;
    eventEndDate: string;
    postedAt?: string | null;
    editedAt?: string | null;
    eventTags: string[];
    eventStatus: EventStatus;
    publishStatus: PublishStatus;
    eventAttendance: AttendanceType;
    maxAttendees?: number;
    eventMode?: EventMode;
    participationLink?: string | null;
    registrationType?: RegistrationType;
    registrationLink?: string | null;
    registrationStartDate?: string | null;
    registrationEndDate?: string | null;
    project?: { id: number } | null;
    report?: { id: number } | null;
  };
  onSuccess?: () => void;
  onCancel?: () => void;
  currentUserId?: string;
};

export default function CreateEventForm({
  mode = 'create',
  initialData,
  onSuccess,
  onCancel,
}: EventFormProps) {
  const router = useRouter();

  const [form, setForm] = useState({
    eventTitle: EMPTY_TIPTAP_DOC as object,
    eventDescription: EMPTY_TIPTAP_DOC as object,
    eventDetails: EMPTY_TIPTAP_DOC as object,
    eventLocation: '',
    eventBanner: '', // string (URL or empty)
    eventImages: [] as string[],
    eventFile: '',
    eventStartDate: '',
    eventEndDate: '',
    // Left blank, the API defaults these to "now" (auto) on save — see
    // handleSubmit and app/api/events/upload|[id]/route.ts.
    postedAt: '',
    editedAt: '',
    eventTags: [] as string[],
    eventStatus: 'pending' as EventStatus,
    publishStatus: 'draft' as PublishStatus,
    eventAttendance: 'public' as AttendanceType,
    maxAttendees: '',
    eventMode: 'on_site' as EventMode,
    participationLink: '',
    registrationType: 'internal' as RegistrationType,
    registrationLink: '',
    registrationStartDate: '',
    registrationEndDate: '',
    projectId: '',
    reportId: '',
    files: null as FileList | null,
    bannerFile: null as File | null,
    eventFileUpload: null as File | null,
  });
  const [imagesToRemove, setImagesToRemove] = useState<string[]>([]);
  const [fileToRemove, setFileToRemove] = useState<string | null>(null);
  const [removeBanner, setRemoveBanner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [projectOptions, setProjectOptions] = useState<SearchableSelectOption[]>([]);
  const [reportOptions, setReportOptions] = useState<SearchableSelectOption[]>([]);
  const [pickerOptionsLoading, setPickerOptionsLoading] = useState(true);

  useEffect(() => {
    setPickerOptionsLoading(true);
    Promise.all([
      fetch('/api/projects').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/reports').then((res) => (res.ok ? res.json() : [])),
    ])
      .then(([projects, reports]) => {
        const projectsArr = Array.isArray(projects) ? projects : [];
        const reportsArr = Array.isArray(reports) ? reports : [];
        setProjectOptions(
          projectsArr.map((p: { id: number; title: unknown }) => ({
            id: String(p.id),
            label: extractPlainText(p.title) || `Project #${p.id}`,
          }))
        );
        setReportOptions(
          reportsArr.map((r: { id: number; title: string }) => ({
            id: String(r.id),
            label: r.title || `Report #${r.id}`,
          }))
        );
      })
      .finally(() => setPickerOptionsLoading(false));
  }, []);

  useEffect(() => {
    if (initialData) {
      console.log('initialData.eventBanner:', initialData.eventBanner);
      const toDatetimeLocal = (s: string | null | undefined) =>
        s ? new Date(s).toISOString().slice(0, 16) : '';
      setForm({
        eventTitle: initialData.eventTitle ? normalizeTiptapDoc(initialData.eventTitle) : EMPTY_TIPTAP_DOC,
        eventDescription: initialData.eventDescription ? normalizeTiptapDoc(initialData.eventDescription) : EMPTY_TIPTAP_DOC,
        eventDetails: initialData.eventDetails ? normalizeTiptapDoc(initialData.eventDetails) : EMPTY_TIPTAP_DOC,
        eventLocation:
          initialData.eventMode === 'virtual' ? 'Virtual' : initialData.eventLocation ?? '',
        eventBanner: initialData.eventBanner ?? '',
        eventImages: Array.isArray(initialData.eventImages) ? initialData.eventImages : [],
        eventFile: initialData.eventFile ?? '',
        eventStartDate: toDatetimeLocal(initialData.eventStartDate),
        eventEndDate: toDatetimeLocal(initialData.eventEndDate),
        postedAt: toDatetimeLocal(initialData.postedAt),
        editedAt: toDatetimeLocal(initialData.editedAt),
        eventTags: Array.isArray(initialData.eventTags) ? initialData.eventTags : [],
        eventStatus: initialData.eventStatus ?? 'pending',
        publishStatus: initialData.publishStatus ?? 'draft',
        eventAttendance: initialData.eventAttendance ?? 'public',
        maxAttendees:
          typeof initialData.maxAttendees === 'number'
            ? initialData.maxAttendees.toString()
            : initialData.maxAttendees ?? '',
        eventMode: initialData.eventMode ?? 'on_site',
        participationLink: initialData.participationLink ?? '',
        registrationType: initialData.registrationType ?? 'internal',
        registrationLink: initialData.registrationLink ?? '',
        registrationStartDate: toDatetimeLocal(initialData.registrationStartDate),
        registrationEndDate: toDatetimeLocal(initialData.registrationEndDate),
        projectId: initialData.project?.id ? String(initialData.project.id) : '',
        reportId: initialData.report?.id ? String(initialData.report.id) : '',
        files: null,
        bannerFile: null,
        eventFileUpload: null,
      });
      setFileToRemove(null);
      setImagesToRemove([]);
      setRemoveBanner(false);
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement & HTMLSelectElement;
    if (name === 'files' && files) {
      setForm((prev) => ({ ...prev, files }));
    } else if (name === 'bannerFile' && files && files[0]) {
      setForm((prev) => ({ ...prev, bannerFile: files[0] }));
    } else if (name === 'eventFileUpload' && files && files[0]) {
      setForm((prev) => ({ ...prev, eventFileUpload: files[0] }));
    } else if (name === 'eventTags') {
      setForm((prev) => ({ ...prev, eventTags: value.split(',').map((t) => t.trim()) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Location follows event mode: virtual events don't have a physical
  // venue, so the field auto-fills "Virtual" and stops being editable.
  // Leaving virtual mode clears that auto-filled value back out (but
  // leaves an admin's own typed location alone when just toggling
  // between on_site and hybrid).
  const handleEventModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMode = e.target.value as EventMode;
    setForm((prev) => ({
      ...prev,
      eventMode: newMode,
      eventLocation:
        newMode === 'virtual'
          ? 'Virtual'
          : prev.eventLocation === 'Virtual'
            ? ''
            : prev.eventLocation,
    }));
  };

  const handleTitleChange = (json: object) => {
    setForm((prev) => ({ ...prev, eventTitle: json }));
  };

  const handleEditorChange = (json: object) => {
    setForm((prev) => ({ ...prev, eventDescription: json }));
  };

  const handleDetailsEditorChange = (json: object) => {
    setForm((prev) => ({ ...prev, eventDetails: json }));
  };

  const handleRemoveImage = (url: string) => {
    setImagesToRemove((prev) => [...prev, url]);
    setForm((prev) => ({
      ...prev,
      eventImages: prev.eventImages.filter((img) => img !== url),
    }));
  };

  const handleRemoveBanner = () => {
    setRemoveBanner(true);
    setForm((prev) => ({
      ...prev,
      eventBanner: '',
    }));
  };

  const handleRemoveFile = () => {
    setFileToRemove(form.eventFile);
    setForm((prev) => ({
      ...prev,
      eventFile: '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (mode === 'create' && !form.bannerFile) {
      alert('Please upload an event banner image.');
      setLoading(false);
      return;
    }

    if (!form.eventStartDate || !form.eventEndDate) {
      alert('Please provide both event start and end dates.');
      setLoading(false);
      return;
    }

    if (isTiptapDocEmpty(form.eventTitle)) {
      alert('Please give this event a title.');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('eventTitle', JSON.stringify(form.eventTitle));
    formData.append('eventDescription', JSON.stringify(form.eventDescription));
    formData.append('eventDetails', JSON.stringify(form.eventDetails));
    formData.append('eventLocation', form.eventLocation);
    formData.append('eventStartDate', form.eventStartDate);
    formData.append('eventEndDate', form.eventEndDate);
    // Left blank, the server defaults these to "now" (auto) — see
    // app/api/events/upload/route.ts and app/api/events/[id]/route.ts.
    formData.append('postedAt', form.postedAt);
    formData.append('editedAt', form.editedAt);
    formData.append('eventTags', JSON.stringify(form.eventTags));
    formData.append('eventStatus', form.eventStatus);
    formData.append('publishStatus', form.publishStatus);
    formData.append('eventAttendance', form.eventAttendance);
    formData.append('maxAttendees', form.maxAttendees);
    formData.append('eventMode', form.eventMode);
    formData.append('participationLink', form.participationLink);
    formData.append('registrationType', form.registrationType);
    formData.append('registrationLink', form.registrationLink);
    formData.append('registrationStartDate', form.registrationStartDate);
    formData.append('registrationEndDate', form.registrationEndDate);
    formData.append('projectId', form.projectId);
    formData.append('reportId', form.reportId);

    if (mode === 'edit') {
      formData.append('eventImages', JSON.stringify(form.eventImages));
      formData.append('imagesToRemove', JSON.stringify(imagesToRemove));
      if (fileToRemove) {
        formData.append('fileToRemove', fileToRemove);
      }
      formData.append('eventBanner', removeBanner ? '' : form.eventBanner);
    }

    if (form.bannerFile) {
      formData.append('bannerFile', form.bannerFile);
    }
    if (form.files && form.files.length > 0) {
      Array.from(form.files).forEach((file) => {
        formData.append('files', file);
      });
    }
    if (form.eventFileUpload) {
      formData.append('eventFileUpload', form.eventFileUpload);
    }

    try {
      let res;
      if (mode === 'edit' && initialData?.id) {
        res = await fetch(`/api/events/${initialData.id}`, {
          method: 'PUT',
          body: formData,
        });
      } else {
        res = await fetch('/api/events/upload', {
          method: 'POST',
          body: formData,
        });
      }

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        // `detail` (a 500's real error name/message — see the API
        // routes' catch blocks) is more useful than the generic `error`
        // string when present.
        const errorMessage =
          errorData?.detail || errorData?.error || `Failed to ${mode} event`;
        throw new Error(errorMessage);
      }

      if (onSuccess) onSuccess();
      router.refresh();
      router.push('/admin/dashboard');
    } catch (err) {
      // Surface the server's actual validation message (e.g. "Missing
      // required fields") instead of a generic "there was an error" —
      // the bare error was previously discarded entirely, making the
      // real cause of a failed submit invisible to whoever hit it.
      const message = err instanceof Error ? err.message : null;
      alert(
        message ||
          `There was an error ${
            mode === 'edit' ? 'updating' : 'creating'
          } the event. Please try again.`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!initialData?.id) return;
    if (
      !window.confirm('Are you sure you want to delete this event? This action cannot be undone.')
    )
      return;

    setDeleting(true);
    try {
      const res = await fetch(`/api/events/${initialData.id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        const errorMessage = errorData?.error || 'Failed to delete event';
        throw new Error(errorMessage);
      }

      if (onSuccess) onSuccess();
      router.refresh();
      router.push('/admin/dashboard');
    } catch {
      alert('There was an error deleting the event. Please try again.');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto mt-4 space-y-6 p-6 bg-background rounded-xl shadow"
      encType="multipart/form-data"
    >
      <div className="text-2xl font-bold mb-4 text-center">
        {mode === 'edit' ? 'Edit Event' : 'Create New Event'}
      </div>
      {/*
        One toolbar shared by all three fields below: it acts on whichever
        of Title / Description / Additional Details was last focused,
        instead of each field carrying its own separate toolbar.
      */}
      <RichTextEditorProvider key={initialData?.id ?? 'new'}>
        <div className="tiptap-wrapper">
          <RichTextToolbar showLinkUnlink />

          <div className="space-y-2 p-3">
            <Label htmlFor="eventTitle">Title</Label>
            <RichTextField
              content={form.eventTitle}
              onChange={handleTitleChange}
              placeholder="Event title..."
            />
          </div>

          <div className="space-y-2 border-t border-gray-200 p-3 dark:border-gray-800">
            <Label htmlFor="eventDescription">Description</Label>
            <RichTextField
              content={form.eventDescription}
              onChange={handleEditorChange}
            />
          </div>

          <div className="space-y-2 border-t border-gray-200 p-3 dark:border-gray-800">
            <Label htmlFor="eventDetails">Additional Details</Label>
            <RichTextField
              content={form.eventDetails}
              onChange={handleDetailsEditorChange}
            />
          </div>
        </div>
      </RichTextEditorProvider>
      {/* Event Mode */}
      <div className="space-y-2">
        <Label htmlFor="eventMode">Event Mode</Label>
        <select
          id="eventMode"
          name="eventMode"
          value={form.eventMode}
          onChange={handleEventModeChange}
          className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
        >
          {eventModeOptions.map((mode) => (
            <option key={mode} value={mode}>
              {mode === 'on_site' ? 'On-site' : mode === 'virtual' ? 'Virtual' : 'Hybrid'}
            </option>
          ))}
        </select>
      </div>
      {/* Participation Link — only meaningful when there's a virtual
          component to the event. */}
      {form.eventMode !== 'on_site' && (
        <div className="space-y-2">
          <Label htmlFor="participationLink">Participation Link (optional)</Label>
          <Input
            id="participationLink"
            name="participationLink"
            type="url"
            placeholder="e.g. https://zoom.us/j/..."
            value={form.participationLink}
            onChange={handleChange}
          />
        </div>
      )}
      {/* Event Location — follows Event Mode: a virtual event has no
          physical venue, so this auto-fills "Virtual" and locks; on-site
          and hybrid events leave it as a free-typed, optional field. */}
      <div className="space-y-2">
        <Label htmlFor="eventLocation">
          Location {form.eventMode === 'virtual' ? '(automatic)' : '(optional)'}
        </Label>
        <Input
          id="eventLocation"
          name="eventLocation"
          value={form.eventLocation}
          onChange={handleChange}
          disabled={form.eventMode === 'virtual'}
        />
      </div>
      {/* Related Project / Report (optional) */}
      <div className="space-y-2">
        <Label htmlFor="projectId">Related Project (optional)</Label>
        <SearchableSelect
          id="projectId"
          value={form.projectId}
          onChange={(v) => setForm((prev) => ({ ...prev, projectId: v }))}
          options={projectOptions}
          loading={pickerOptionsLoading}
          placeholder="No related project"
          searchPlaceholder="Search projects..."
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="reportId">Related Report (optional)</Label>
        <SearchableSelect
          id="reportId"
          value={form.reportId}
          onChange={(v) => setForm((prev) => ({ ...prev, reportId: v }))}
          options={reportOptions}
          loading={pickerOptionsLoading}
          placeholder="No related report"
          searchPlaceholder="Search reports..."
        />
      </div>
      {/* Banner Upload */}
      <div className="space-y-2">
        <Label htmlFor="bannerFile">
          {mode === 'edit'
            ? 'Banner Image (optional, will replace current)'
            : 'Banner Image (required)'}
        </Label>
        <Input
          id="bannerFile"
          name="bannerFile"
          type="file"
          accept="image/*"
          onChange={handleChange}
          required={mode === 'create'}
        />
      </div>
      {/* Current Banner (edit mode) */}
      {mode === 'edit' && form.eventBanner && !removeBanner && (
        <div className="space-y-2">
          <Label>Current Banner Image</Label>
          <div className="relative w-fit">
            <img
              src={form.eventBanner}
              alt="Current Event Banner"
              className="w-full max-w-xs object-cover rounded border"
            />
            <button
              type="button"
              className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
              onClick={handleRemoveBanner}
              title="Remove banner"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      {/* Existing Images (edit mode) */}
      {mode === 'edit' && form.eventImages && form.eventImages.length > 0 && (
        <div className="space-y-2">
          <Label>Current Images</Label>
          <div className="flex flex-wrap gap-4">
            {form.eventImages.map((img) => (
              <div key={img} className="relative">
                <img src={img} alt="Event" className="w-24 h-24 object-cover rounded border" />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  onClick={() => handleRemoveImage(img)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Upload event images */}
      <div className="space-y-2">
        <Label htmlFor="files">
          {mode === 'edit'
            ? 'Event Images (optional, will add/replace)'
            : 'Event Images (optional)'}
        </Label>
        <Input
          id="files"
          name="files"
          type="file"
          accept="image/*"
          multiple
          onChange={handleChange}
        />
      </div>
      {/* Existing Event File (edit mode) */}
      {mode === 'edit' && form.eventFile && (
        <div className="space-y-2">
          <Label>Current Event File</Label>
          <div className="flex items-center gap-2">
            <a
              href={form.eventFile}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              {form.eventFile.split('/').pop()}
            </a>
            <button
              type="button"
              className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
              onClick={handleRemoveFile}
              title="Remove file"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      {/* Event File Upload */}
      <div className="space-y-2">
        <Label htmlFor="eventFileUpload">Event File (optional, e.g. PDF, DOCX)</Label>
        <Input
          id="eventFileUpload"
          name="eventFileUpload"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
        />
      </div>
      {/* Start Date — a date+time field with an explicit "Set Date & Time"
          confirm step (see components/ui/datetime-picker.tsx) instead of a
          bare native datetime-local input, whose value could otherwise
          reach the form half-committed (date picked, time not yet, or
          vice versa) if submitted while the browser's own picker was mid-
          selection — the most likely cause of a "please provide a valid
          date" error despite a date visibly being chosen. */}
      <div className="space-y-2">
        <Label htmlFor="eventStartDate">Start Date</Label>
        <DateTimePicker
          id="eventStartDate"
          value={form.eventStartDate}
          onChange={(v) => setForm((prev) => ({ ...prev, eventStartDate: v }))}
          required
        />
      </div>
      {/* End Date */}
      <div className="space-y-2">
        <Label htmlFor="eventEndDate">End Date</Label>
        <DateTimePicker
          id="eventEndDate"
          value={form.eventEndDate}
          onChange={(v) => setForm((prev) => ({ ...prev, eventEndDate: v }))}
          required
        />
      </div>
      {/* Posted date — optional, defaults to the system date/time when
          left blank (see handleSubmit / the API routes). Can be backdated
          to before the event itself — useful when logging an event that
          already happened. */}
      <div className="space-y-2">
        <Label htmlFor="postedAt">Posted</Label>
        <DateTimePicker
          id="postedAt"
          value={form.postedAt}
          onChange={(v) => setForm((prev) => ({ ...prev, postedAt: v }))}
          placeholder="Not set — defaults to now"
        />
      </div>
      {/* Edited date — unlike Posted, this only has something to default
          to once a real modification happens: left blank on create it
          stays unset (this is the event's first save, not an edit yet);
          left blank on an update it becomes "now" (see the API routes). */}
      <div className="space-y-2">
        <Label htmlFor="editedAt">Edited</Label>
        <DateTimePicker
          id="editedAt"
          value={form.editedAt}
          onChange={(v) => setForm((prev) => ({ ...prev, editedAt: v }))}
          placeholder={
            mode === 'edit' ? 'Not set — defaults to now' : 'Not set — stays unset until first edited'
          }
        />
      </div>
      {/* Event Tags */}
      <div className="space-y-2">
        <Label htmlFor="eventTags">Event Tags (comma separated)</Label>
        <Input
          id="eventTags"
          name="eventTags"
          value={form.eventTags.join(',')}
          onChange={handleChange}
          placeholder="e.g. tech, leadership, youth"
        />
      </div>
      {/* Publish Status */}
      <div className="space-y-2">
        <Label htmlFor="publishStatus">Publish Status</Label>
        <select
          id="publishStatus"
          name="publishStatus"
          value={form.publishStatus}
          onChange={handleChange}
          className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
        >
          {publishOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      {/* Event Status */}
      <div className="space-y-2">
        <Label htmlFor="eventStatus">Event Status</Label>
        <select
          id="eventStatus"
          name="eventStatus"
          value={form.eventStatus}
          onChange={handleChange}
          className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
        >
          {eventStatusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      {/* Attendance */}
      <div className="space-y-2">
        <Label htmlFor="eventAttendance">Attendance Type</Label>
        <select
          id="eventAttendance"
          name="eventAttendance"
          value={form.eventAttendance}
          onChange={handleChange}
          className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
        >
          {attendanceOptions.map((status) => (
            <option key={status} value={status}>
              {status.replace('_', ' ')}
            </option>
          ))}
        </select>
      </div>
      {/* Registration Type — only meaningful when registration is
          required: internal keeps the site's own EventRegistrationForm,
          external hands off to an outside registration page/link. */}
      {form.eventAttendance === 'registration_required' && (
        <div className="space-y-2">
          <Label htmlFor="registrationType">Registration Type</Label>
          <select
            id="registrationType"
            name="registrationType"
            value={form.registrationType}
            onChange={handleChange}
            className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
          >
            {registrationTypeOptions.map((type) => (
              <option key={type} value={type}>
                {type === 'internal' ? 'Internal (use site registration form)' : 'External (link to another site)'}
              </option>
            ))}
          </select>
        </div>
      )}
      {form.eventAttendance === 'registration_required' &&
        form.registrationType === 'external' && (
          <div className="space-y-2">
            <Label htmlFor="registrationLink">Registration Link</Label>
            <Input
              id="registrationLink"
              name="registrationLink"
              type="url"
              placeholder="e.g. https://forms.gle/..."
              value={form.registrationLink}
              onChange={handleChange}
            />
          </div>
        )}
      {/* Registration window — optional, either end can be left unset. */}
      {form.eventAttendance === 'registration_required' && (
        <div className="space-y-2">
          <Label htmlFor="registrationStartDate">Registration Opens (optional)</Label>
          <DateTimePicker
            id="registrationStartDate"
            value={form.registrationStartDate}
            onChange={(v) => setForm((prev) => ({ ...prev, registrationStartDate: v }))}
            placeholder="Not set"
          />
        </div>
      )}
      {form.eventAttendance === 'registration_required' && (
        <div className="space-y-2">
          <Label htmlFor="registrationEndDate">Registration Closes (optional)</Label>
          <DateTimePicker
            id="registrationEndDate"
            value={form.registrationEndDate}
            onChange={(v) => setForm((prev) => ({ ...prev, registrationEndDate: v }))}
            placeholder="Not set"
          />
        </div>
      )}
      {/* Max Attendees */}
      <div className="space-y-2">
        <Label htmlFor="maxAttendees">Maximum Attendees (optional)</Label>
        <Input
          id="maxAttendees"
          name="maxAttendees"
          type="number"
          min={1}
          value={form.maxAttendees}
          onChange={handleChange}
        />
      </div>
      {/* Form actions */}
      <div className="flex flex-center gap-2 w-full">
        <Button type="submit" disabled={loading} className="w-1/3 bg-[#9f004d]">
          {loading
            ? mode === 'edit'
              ? 'Updating...'
              : 'Creating...'
            : mode === 'edit'
            ? 'Update Event'
            : 'Create Event'}
        </Button>
        <Button type="button" onClick={onCancel} disabled={loading} className="w-1/3 bg-black">
          Cancel
        </Button>
        {mode === 'edit' && (
          <Button
            type="button"
            onClick={handleDelete}
            disabled={deleting}
            className="w-1/3 bg-red-700"
          >
            {deleting ? 'Deleting Event...' : 'Delete Event'}
          </Button>
        )}
      </div>
    </form>
  );
}
