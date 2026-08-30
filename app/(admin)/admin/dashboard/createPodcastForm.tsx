"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { computeWaveformPeaks } from "@/lib/audioWaveform";
import { EMPTY_TIPTAP_DOC, extractPlainText, isTiptapDocEmpty, normalizeTiptapDoc } from "@/lib/tiptap";
import "@/assets/styles/tiptap-editor.css";
import { RichTextEditorProvider } from "@/components/editor/rich-text-context";
import RichTextToolbar from "@/components/editor/rich-text-toolbar";
import RichTextField from "@/components/editor/rich-text-field";

const publishOptions = ["draft", "published"] as const;
type PublishStatus = (typeof publishOptions)[number];
type HostType = "beneficiary" | "admin" | "guest";
type Mode = "create" | "edit";

type PickerOption = { id: number; label: string };
type StringPickerOption = { id: string; label: string };

interface PodcastData {
  id?: string;
  title: object; // Tiptap JSON doc
  description: object;
  image?: string | null;
  audioUrl?: string;
  waveform?: number[];
  publishedAt?: string;
  publishStatus: PublishStatus;
  accessCount?: number;
  projectId?: number | null;
  eventId?: number | null;
  reportId?: number | null;
  institutionId?: string | null;
  talkshowId?: number | null;
  hostType?: HostType | '' | null;
  hostBeneficiaryId?: string | null;
  hostUserId?: string | null;
  hostFirstName?: string | null;
  hostLastName?: string | null;
  beneficiaries?: { beneficiaryId?: string; beneficiary?: { id?: string; firstName?: string; lastName?: string } }[];
}

interface CreatePodcastFormProps {
  mode?: Mode;
  initialValues?: PodcastData & { id?: string | number };
  onSuccess?: () => void;
  onCancel?: () => void;
}

async function uploadFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/podcasts/upload", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("File upload failed");
  }

  const { path } = await res.json();
  return path as string;
}

// The picker-list fetches below hydrate simple {id,label} lists from
// several different API endpoints/models — genuinely dynamic, hence one
// deliberate loose alias here instead of scattering `any`.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ApiListItem = any;

function toDateInputValue(value?: string | Date | null) {
  if (!value) return new Date().toISOString().slice(0, 10);
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return new Date().toISOString().slice(0, 10);
  return d.toISOString().slice(0, 10);
}

export default function CreatePodcastForm({
  mode,
  initialValues,
  onSuccess,
  onCancel,
}: CreatePodcastFormProps) {
  const router = useRouter();
  const resolvedMode: Mode = mode ?? (initialValues?.id ? "edit" : "create");

  const [form, setForm] = useState({
    title: initialValues?.title ? normalizeTiptapDoc(initialValues.title) : EMPTY_TIPTAP_DOC,
    description: initialValues?.description ? normalizeTiptapDoc(initialValues.description) : EMPTY_TIPTAP_DOC,
    publishedAt: toDateInputValue(initialValues?.publishedAt),
    publishStatus: (initialValues?.publishStatus as PublishStatus) || "draft",
    projectId: initialValues?.projectId ? String(initialValues.projectId) : '',
    eventId: initialValues?.eventId ? String(initialValues.eventId) : '',
    reportId: initialValues?.reportId ? String(initialValues.reportId) : '',
    institutionId: initialValues?.institutionId || '',
    talkshowId: initialValues?.talkshowId ? String(initialValues.talkshowId) : '',
    hostType: (initialValues?.hostType as HostType) || '',
    hostBeneficiaryId: initialValues?.hostBeneficiaryId || '',
    hostUserId: initialValues?.hostUserId || '',
    hostFirstName: initialValues?.hostFirstName || '',
    hostLastName: initialValues?.hostLastName || '',
  });

  const [existingImage, setExistingImage] = useState<string | null>(
    initialValues?.image || null
  );
  const [existingAudio, setExistingAudio] = useState<string | null>(
    initialValues?.audioUrl || null
  );

  const [existingWaveform, setExistingWaveform] = useState<number[]>(
    initialValues?.waveform || []
  );

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [waveform, setWaveform] = useState<number[]>([]);
  const [analyzingAudio, setAnalyzingAudio] = useState(false);
  const [loading, setLoading] = useState(false);

  // Linked-content / host / participants picker options.
  const [projectOptions, setProjectOptions] = useState<PickerOption[]>([]);
  const [eventOptions, setEventOptions] = useState<PickerOption[]>([]);
  const [reportOptions, setReportOptions] = useState<PickerOption[]>([]);
  const [institutionOptions, setInstitutionOptions] = useState<StringPickerOption[]>([]);
  const [talkshowOptions, setTalkshowOptions] = useState<PickerOption[]>([]);
  const [beneficiaryOptions, setBeneficiaryOptions] = useState<StringPickerOption[]>([]);
  const [userOptions, setUserOptions] = useState<StringPickerOption[]>([]);
  const [optionsLoading, setOptionsLoading] = useState(false);

  const [participantSearch, setParticipantSearch] = useState('');
  const [selectedParticipantIds, setSelectedParticipantIds] = useState<string[]>(
    () =>
      initialValues?.beneficiaries
        ?.map((p) => p.beneficiaryId ?? p.beneficiary?.id)
        .filter((id): id is string => typeof id === 'string') ?? []
  );

  useEffect(() => {
    if (resolvedMode === "edit" && initialValues) {
      setForm({
        title: initialValues.title ? normalizeTiptapDoc(initialValues.title) : EMPTY_TIPTAP_DOC,
        description: initialValues.description ? normalizeTiptapDoc(initialValues.description) : EMPTY_TIPTAP_DOC,
        publishedAt: toDateInputValue(initialValues.publishedAt),
        publishStatus: (initialValues.publishStatus as PublishStatus) || "draft",
        projectId: initialValues.projectId ? String(initialValues.projectId) : '',
        eventId: initialValues.eventId ? String(initialValues.eventId) : '',
        reportId: initialValues.reportId ? String(initialValues.reportId) : '',
        institutionId: initialValues.institutionId || '',
        talkshowId: initialValues.talkshowId ? String(initialValues.talkshowId) : '',
        hostType: (initialValues.hostType as HostType) || '',
        hostBeneficiaryId: initialValues.hostBeneficiaryId || '',
        hostUserId: initialValues.hostUserId || '',
        hostFirstName: initialValues.hostFirstName || '',
        hostLastName: initialValues.hostLastName || '',
      });
      setExistingImage(initialValues.image || null);
      setExistingAudio(initialValues.audioUrl || null);
      setExistingWaveform(initialValues.waveform || []);
      setSelectedParticipantIds(
        initialValues.beneficiaries
          ?.map((p) => p.beneficiaryId ?? p.beneficiary?.id)
          .filter((id): id is string => typeof id === 'string') ?? []
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedMode, initialValues?.id]);

  useEffect(() => {
    setOptionsLoading(true);
    Promise.all([
      fetch('/api/projects').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/events').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/reports').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/institutions').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/talkshows').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/beneficiaries').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/users').then((res) => (res.ok ? res.json() : [])),
    ])
      .then(([projects, events, reports, institutions, talkshows, beneficiaries, users]) => {
        const projectsArr = Array.isArray(projects) ? projects : [];
        const eventsArr = Array.isArray(events) ? events : [];
        const reportsArr = Array.isArray(reports?.reports) ? reports.reports : Array.isArray(reports) ? reports : [];
        const institutionsArr = Array.isArray(institutions) ? institutions : [];
        const talkshowsArr = Array.isArray(talkshows) ? talkshows : [];
        const beneficiariesArr = Array.isArray(beneficiaries) ? beneficiaries : [];
        const usersArr = Array.isArray(users) ? users : [];

        setProjectOptions(
          projectsArr.map((p: ApiListItem) => ({ id: p.id, label: extractPlainText(p.title) || `Project #${p.id}` }))
        );
        setEventOptions(
          eventsArr.map((e: ApiListItem) => ({ id: e.id, label: extractPlainText(e.eventTitle) || `Event #${e.id}` }))
        );
        setReportOptions(reportsArr.map((r: ApiListItem) => ({ id: r.id, label: r.title || `Report #${r.id}` })));
        setInstitutionOptions(institutionsArr.map((i: ApiListItem) => ({ id: i.id, label: i.name })));
        setTalkshowOptions(talkshowsArr.map((t: ApiListItem) => ({ id: t.id, label: t.title || `Talkshow #${t.id}` })));
        setBeneficiaryOptions(
          beneficiariesArr.map((b: ApiListItem) => ({
            id: b.id,
            label: `${b.firstName ?? ''} ${b.lastName ?? ''}`.trim() || `Beneficiary #${b.id}`,
          }))
        );
        setUserOptions(
          usersArr.map((u: ApiListItem) => ({
            id: u.id,
            label: `${u.firstName ?? ''} ${u.lastName ?? ''}`.trim() || u.username || `User #${u.id}`,
          }))
        );
      })
      .finally(() => setOptionsLoading(false));
  }, []);

  const filteredBeneficiaryOptions = (() => {
    const q = participantSearch.trim().toLowerCase();
    if (!q) return beneficiaryOptions;
    return beneficiaryOptions.filter(
      (opt) => selectedParticipantIds.includes(opt.id) || opt.label.toLowerCase().includes(q)
    );
  })();

  const toggleParticipant = (id: string) => {
    setSelectedParticipantIds((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTitleChange = (json: object) => {
    setForm((prev) => ({ ...prev, title: json }));
  };

  const handleEditorChange = (json: object) => {
    setForm((prev) => ({ ...prev, description: json }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleAudioChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setAudioFile(file);
    setWaveform([]);
    setAnalyzingAudio(true);

    try {
      const peaks = await computeWaveformPeaks(file);
      setWaveform(peaks);
    } finally {
      setAnalyzingAudio(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!existingAudio && !audioFile) {
      alert("Please attach an MP3 audio file for this podcast.");
      return;
    }

    if (isTiptapDocEmpty(form.title)) {
      alert("Please give this podcast a title.");
      return;
    }

    setLoading(true);

    try {
      const imagePath = imageFile ? await uploadFile(imageFile) : existingImage;
      const audioPath = audioFile ? await uploadFile(audioFile) : existingAudio;

      const payload = {
        title: form.title,
        description: form.description,
        image: imagePath || null,
        audioUrl: audioPath,
        waveform: audioFile ? waveform : existingWaveform,
        publishedAt: new Date(form.publishedAt).toISOString(),
        publishStatus: form.publishStatus,
        accessCount: initialValues?.accessCount || 0,
        projectId: form.projectId || null,
        eventId: form.eventId || null,
        reportId: form.reportId || null,
        institutionId: form.institutionId || null,
        talkshowId: form.talkshowId || null,
        hostType: form.hostType || null,
        hostBeneficiaryId: form.hostType === 'beneficiary' ? form.hostBeneficiaryId || null : null,
        hostUserId: form.hostType === 'admin' ? form.hostUserId || null : null,
        hostFirstName: form.hostType === 'guest' ? form.hostFirstName || null : null,
        hostLastName: form.hostType === 'guest' ? form.hostLastName || null : null,
        beneficiaryIds: selectedParticipantIds,
      };

      let res;
      if (resolvedMode === "edit" && initialValues?.id) {
        res = await fetch(`/api/podcasts/${initialValues.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch("/api/podcasts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        const errorMessage =
          errorData?.error ||
          (resolvedMode === "edit" ? "Failed to update podcast" : "Failed to create podcast");
        throw new Error(errorMessage);
      }

      if (onSuccess) {
        onSuccess();
      } else {
        router.refresh();
        router.push("/admin");
      }
    } catch (err) {
      console.error("Error saving podcast:", err);
      alert(
        `There was an error ${resolvedMode === "edit" ? "updating" : "creating"} the podcast. Please try again.`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6 p-6 bg-background rounded-xl shadow"
    >
      <h2 className="font-semibold text-xl mb-4">
        {resolvedMode === "edit" ? "Edit Podcast" : "Create New Podcast"}
      </h2>

      {/*
        Shared toolbar sits on top of the form: it acts on whichever
        rich-text field below (Title or Description) is currently (or
        was last) focused.
      */}
      <RichTextEditorProvider key={initialValues?.id ?? "new-podcast"}>
        <div className="tiptap-wrapper">
          <RichTextToolbar showLinkUnlink />
          <div className="space-y-2 p-3">
            <Label htmlFor="title">Title</Label>
            <RichTextField
              content={form.title}
              onChange={handleTitleChange}
              placeholder="Podcast title..."
            />
          </div>
          <div className="space-y-2 border-t border-gray-200 p-3 dark:border-gray-800">
            <Label htmlFor="description">Description</Label>
            <RichTextField content={form.description} onChange={handleEditorChange} />
          </div>
        </div>
      </RichTextEditorProvider>

      <div className="space-y-2">
        <Label htmlFor="publishedAt">Date</Label>
        <Input
          id="publishedAt"
          name="publishedAt"
          type="date"
          value={form.publishedAt}
          onChange={handleChange}
          required
        />
      </div>

      {/* Existing illustration image (for edit) */}
      {existingImage && (
        <div className="space-y-2">
          <Label>Current Illustration</Label>
          <div className="flex items-center gap-3">
            <img
              src={existingImage}
              alt="Podcast illustration"
              className="h-16 w-16 rounded-lg object-cover border"
            />
            <Button
              type="button"
              size="sm"
              variant="destructive"
              className="text-xs"
              onClick={() => setExistingImage(null)}
            >
              Remove
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="image">Illustration Image (PNG, JPG, JPEG)</Label>
        <Input
          id="image"
          name="image"
          type="file"
          accept=".png,.jpg,.jpeg"
          onChange={handleImageChange}
        />
        <div className="text-xs text-muted-foreground">{imageFile?.name}</div>
      </div>

      {/* Existing audio (for edit) */}
      {existingAudio && (
        <div className="space-y-2">
          <Label>Current Audio</Label>
          <div className="flex items-center gap-2">
            <audio controls src={existingAudio} className="h-9 max-w-full" />
            <Button
              type="button"
              size="sm"
              variant="destructive"
              className="text-xs"
              onClick={() => setExistingAudio(null)}
            >
              Remove
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="audio">Audio File (MP3)</Label>
        <Input id="audio" name="audio" type="file" accept=".mp3" onChange={handleAudioChange} />
        <div className="text-xs text-muted-foreground">
          {analyzingAudio
            ? "Analyzing waveform..."
            : audioFile
            ? `${audioFile.name}${waveform.length ? " — waveform ready" : ""}`
            : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Linked content (optional)</Label>
        <p className="text-xs text-muted-foreground">
          Connect this podcast to a related project, event, report, institution, or radio talkshow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="projectId" className="text-xs text-muted-foreground">
              Project
            </Label>
            <select
              id="projectId"
              name="projectId"
              value={form.projectId}
              onChange={handleChange}
              disabled={optionsLoading}
              className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
            >
              <option value="">None</option>
              {projectOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="eventId" className="text-xs text-muted-foreground">
              Event
            </Label>
            <select
              id="eventId"
              name="eventId"
              value={form.eventId}
              onChange={handleChange}
              disabled={optionsLoading}
              className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
            >
              <option value="">None</option>
              {eventOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="reportId" className="text-xs text-muted-foreground">
              Report
            </Label>
            <select
              id="reportId"
              name="reportId"
              value={form.reportId}
              onChange={handleChange}
              disabled={optionsLoading}
              className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
            >
              <option value="">None</option>
              {reportOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="institutionId" className="text-xs text-muted-foreground">
              Institution
            </Label>
            <select
              id="institutionId"
              name="institutionId"
              value={form.institutionId}
              onChange={handleChange}
              disabled={optionsLoading}
              className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
            >
              <option value="">None</option>
              {institutionOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="talkshowId" className="text-xs text-muted-foreground">
              Radio Talkshow
            </Label>
            <select
              id="talkshowId"
              name="talkshowId"
              value={form.talkshowId}
              onChange={handleChange}
              disabled={optionsLoading}
              className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
            >
              <option value="">None</option>
              {talkshowOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Participants (optional)</Label>
        <p className="text-xs text-muted-foreground">Beneficiaries who took part in this podcast episode.</p>
        <div className="flex items-center justify-between">
          <Input
            type="search"
            value={participantSearch}
            onChange={(e) => setParticipantSearch(e.target.value)}
            placeholder="Search beneficiaries..."
            className="h-8 text-sm"
          />
          {selectedParticipantIds.length > 0 && (
            <span className="ml-2 whitespace-nowrap text-xs text-muted-foreground">
              {selectedParticipantIds.length} selected
            </span>
          )}
        </div>
        <div className="mt-1 max-h-40 overflow-y-auto rounded-md border border-input p-2 space-y-1">
          {optionsLoading && <div className="text-xs text-muted-foreground">Loading…</div>}
          {!optionsLoading && beneficiaryOptions.length === 0 && (
            <div className="text-xs text-muted-foreground">No beneficiaries yet.</div>
          )}
          {!optionsLoading && beneficiaryOptions.length > 0 && filteredBeneficiaryOptions.length === 0 && (
            <div className="text-xs text-muted-foreground">No matches.</div>
          )}
          {filteredBeneficiaryOptions.map((opt) => (
            <label key={opt.id} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={selectedParticipantIds.includes(opt.id)}
                onChange={() => toggleParticipant(opt.id)}
              />
              <span className="truncate">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="hostType">By (optional)</Label>
        <p className="text-xs text-muted-foreground">Who hosted or presented this podcast episode.</p>
        <select
          id="hostType"
          name="hostType"
          value={form.hostType}
          onChange={handleChange}
          className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
        >
          <option value="">Not specified</option>
          <option value="beneficiary">A beneficiary</option>
          <option value="admin">An admin (team member)</option>
          <option value="guest">Someone else (enter a name)</option>
        </select>

        {form.hostType === 'beneficiary' && (
          <select
            name="hostBeneficiaryId"
            value={form.hostBeneficiaryId}
            onChange={handleChange}
            disabled={optionsLoading}
            className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
          >
            <option value="">Select a beneficiary</option>
            {beneficiaryOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        )}

        {form.hostType === 'admin' && (
          <select
            name="hostUserId"
            value={form.hostUserId}
            onChange={handleChange}
            disabled={optionsLoading}
            className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
          >
            <option value="">Select an admin</option>
            {userOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        )}

        {form.hostType === 'guest' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              name="hostFirstName"
              value={form.hostFirstName}
              onChange={handleChange}
              placeholder="First name"
            />
            <Input
              name="hostLastName"
              value={form.hostLastName}
              onChange={handleChange}
              placeholder="Last name"
            />
          </div>
        )}
      </div>

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

      <div className="flex gap-3">
        <Button
          type="submit"
          disabled={loading || analyzingAudio}
          className="flex-1 bg-[#9f004d] hover:bg-[#7c003c] text-white"
        >
          {analyzingAudio
            ? "Analyzing waveform..."
            : loading
            ? resolvedMode === "edit"
              ? "Updating..."
              : "Creating..."
            : resolvedMode === "edit"
            ? "Update Podcast"
            : "Create Podcast"}
        </Button>
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            className="flex-1 border-[#9f004d] text-[#9f004d] hover:bg-[#f5e3ec]"
            onClick={onCancel}
            disabled={loading || analyzingAudio}
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}
