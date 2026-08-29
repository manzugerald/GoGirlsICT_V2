'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { extractPlainText } from '@/lib/tiptap';
import { computeWaveformPeaks } from '@/lib/audioWaveform';

const publishOptions = ['draft', 'published'] as const;
type PublishStatus = (typeof publishOptions)[number];
const hostTypeOptions = ['beneficiary', 'admin', 'guest'] as const;
type HostType = (typeof hostTypeOptions)[number];
type Mode = 'create' | 'edit';

type PickerOption = { id: number; label: string };
type StringPickerOption = { id: string; label: string };

interface TalkshowData {
  id?: number;
  title: string;
  date?: string | null;
  poster?: string | null;
  audioUrl?: string | null;
  waveform?: number[];
  publishStatus: PublishStatus;
  projectId?: number | null;
  eventId?: number | null;
  reportId?: number | null;
  institutionId?: string | null;
  hostType?: HostType | '' | null;
  hostBeneficiaryId?: string | null;
  hostUserId?: string | null;
  hostFirstName?: string | null;
  hostLastName?: string | null;
  participants?: { beneficiaryId?: string; beneficiary?: { id?: string; firstName?: string; lastName?: string } }[];
  podcasts?: { id?: number; title?: unknown }[];
}

function toDateInputValue(value?: string | Date | null) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toISOString().slice(0, 10);
}

export default function CreateTalkshowForm({
  mode,
  initialValues,
  onSuccess,
  onCancel,
}: {
  mode?: Mode;
  initialValues?: TalkshowData;
  onSuccess?: () => void;
  onCancel?: () => void;
}) {
  const router = useRouter();
  const resolvedMode: Mode = mode ?? (initialValues?.id ? 'edit' : 'create');

  const [form, setForm] = useState({
    title: initialValues?.title || '',
    date: toDateInputValue(initialValues?.date),
    publishStatus: (initialValues?.publishStatus as PublishStatus) || 'draft',
    projectId: initialValues?.projectId ? String(initialValues.projectId) : '',
    eventId: initialValues?.eventId ? String(initialValues.eventId) : '',
    reportId: initialValues?.reportId ? String(initialValues.reportId) : '',
    institutionId: initialValues?.institutionId || '',
    hostType: (initialValues?.hostType as HostType) || '',
    hostBeneficiaryId: initialValues?.hostBeneficiaryId || '',
    hostUserId: initialValues?.hostUserId || '',
    hostFirstName: initialValues?.hostFirstName || '',
    hostLastName: initialValues?.hostLastName || '',
  });

  const [existingPoster, setExistingPoster] = useState<string | null>(initialValues?.poster || null);
  const [posterFile, setPosterFile] = useState<File | null>(null);

  const [existingAudio, setExistingAudio] = useState<string | null>(initialValues?.audioUrl || null);
  const [existingWaveform, setExistingWaveform] = useState<number[]>(initialValues?.waveform || []);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [waveform, setWaveform] = useState<number[]>([]);
  const [analyzingAudio, setAnalyzingAudio] = useState(false);

  const [loading, setLoading] = useState(false);

  // Link/host pickers' option lists.
  const [projectOptions, setProjectOptions] = useState<PickerOption[]>([]);
  const [eventOptions, setEventOptions] = useState<PickerOption[]>([]);
  const [reportOptions, setReportOptions] = useState<PickerOption[]>([]);
  const [institutionOptions, setInstitutionOptions] = useState<StringPickerOption[]>([]);
  const [beneficiaryOptions, setBeneficiaryOptions] = useState<StringPickerOption[]>([]);
  const [userOptions, setUserOptions] = useState<StringPickerOption[]>([]);
  const [podcastOptions, setPodcastOptions] = useState<PickerOption[]>([]);
  const [optionsLoading, setOptionsLoading] = useState(false);

  const [participantSearch, setParticipantSearch] = useState('');
  const [selectedParticipantIds, setSelectedParticipantIds] = useState<string[]>(
    () =>
      initialValues?.participants
        ?.map((p) => p.beneficiaryId ?? p.beneficiary?.id)
        .filter((id): id is string => typeof id === 'string') ?? []
  );

  const [podcastSearch, setPodcastSearch] = useState('');
  const [selectedPodcastIds, setSelectedPodcastIds] = useState<number[]>(
    () => initialValues?.podcasts?.map((p) => p.id).filter((id): id is number => typeof id === 'number') ?? []
  );

  // Re-sync local state whenever the record being edited changes (e.g. the
  // admin closes this form and opens it again for a different talkshow) —
  // without this, the component can be reused across records and keep
  // showing the previous one's values, since useState only seeds on mount.
  useEffect(() => {
    if (resolvedMode !== 'edit' || !initialValues) return;
    setForm({
      title: initialValues.title || '',
      date: toDateInputValue(initialValues.date),
      publishStatus: (initialValues.publishStatus as PublishStatus) || 'draft',
      projectId: initialValues.projectId ? String(initialValues.projectId) : '',
      eventId: initialValues.eventId ? String(initialValues.eventId) : '',
      reportId: initialValues.reportId ? String(initialValues.reportId) : '',
      institutionId: initialValues.institutionId || '',
      hostType: (initialValues.hostType as HostType) || '',
      hostBeneficiaryId: initialValues.hostBeneficiaryId || '',
      hostUserId: initialValues.hostUserId || '',
      hostFirstName: initialValues.hostFirstName || '',
      hostLastName: initialValues.hostLastName || '',
    });
    setExistingPoster(initialValues.poster || null);
    setPosterFile(null);
    setExistingAudio(initialValues.audioUrl || null);
    setExistingWaveform(initialValues.waveform || []);
    setAudioFile(null);
    setSelectedParticipantIds(
      initialValues.participants
        ?.map((p) => p.beneficiaryId ?? p.beneficiary?.id)
        .filter((id): id is string => typeof id === 'string') ?? []
    );
    setSelectedPodcastIds(
      initialValues.podcasts?.map((p) => p.id).filter((id): id is number => typeof id === 'number') ?? []
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedMode, initialValues?.id]);

  useEffect(() => {
    setOptionsLoading(true);
    Promise.all([
      fetch('/api/projects').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/events').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/reports').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/institutions').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/beneficiaries').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/users').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/podcasts').then((res) => (res.ok ? res.json() : [])),
    ])
      .then(([projects, events, reports, institutions, beneficiaries, users, podcasts]) => {
        const projectsArr = Array.isArray(projects) ? projects : [];
        const eventsArr = Array.isArray(events) ? events : [];
        const reportsArr = Array.isArray(reports?.reports) ? reports.reports : Array.isArray(reports) ? reports : [];
        const institutionsArr = Array.isArray(institutions) ? institutions : [];
        const beneficiariesArr = Array.isArray(beneficiaries) ? beneficiaries : [];
        const usersArr = Array.isArray(users) ? users : [];
        const podcastsArr = Array.isArray(podcasts) ? podcasts : [];

        setProjectOptions(
          projectsArr.map((p: any) => ({ id: p.id, label: extractPlainText(p.title) || `Project #${p.id}` }))
        );
        setEventOptions(
          eventsArr.map((e: any) => ({ id: e.id, label: extractPlainText(e.eventTitle) || `Event #${e.id}` }))
        );
        setReportOptions(reportsArr.map((r: any) => ({ id: r.id, label: r.title || `Report #${r.id}` })));
        setInstitutionOptions(institutionsArr.map((i: any) => ({ id: i.id, label: i.name })));
        setBeneficiaryOptions(
          beneficiariesArr.map((b: any) => ({
            id: b.id,
            label: `${b.firstName ?? ''} ${b.lastName ?? ''}`.trim() || `Beneficiary #${b.id}`,
          }))
        );
        setUserOptions(
          usersArr.map((u: any) => ({
            id: u.id,
            label: `${u.firstName ?? ''} ${u.lastName ?? ''}`.trim() || u.username || `User #${u.id}`,
          }))
        );
        setPodcastOptions(
          podcastsArr.map((p: any) => ({ id: p.id, label: extractPlainText(p.title) || `Podcast #${p.id}` }))
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

  const filteredPodcastOptions = (() => {
    const q = podcastSearch.trim().toLowerCase();
    if (!q) return podcastOptions;
    return podcastOptions.filter(
      (opt) => selectedPodcastIds.includes(opt.id) || opt.label.toLowerCase().includes(q)
    );
  })();

  const togglePodcast = (id: number) => {
    setSelectedPodcastIds((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePosterChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setPosterFile(e.target.files[0]);
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
    if (!form.title.trim() || !form.date) {
      alert('Title and Date are required.');
      return;
    }
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', form.title.trim());
      formData.append('date', form.date);
      formData.append('publishStatus', form.publishStatus);
      if (form.projectId) formData.append('projectId', form.projectId);
      if (form.eventId) formData.append('eventId', form.eventId);
      if (form.reportId) formData.append('reportId', form.reportId);
      if (form.institutionId) formData.append('institutionId', form.institutionId);

      if (form.hostType) {
        formData.append('hostType', form.hostType);
        if (form.hostType === 'beneficiary' && form.hostBeneficiaryId) {
          formData.append('hostBeneficiaryId', form.hostBeneficiaryId);
        }
        if (form.hostType === 'admin' && form.hostUserId) {
          formData.append('hostUserId', form.hostUserId);
        }
        if (form.hostType === 'guest') {
          if (form.hostFirstName) formData.append('hostFirstName', form.hostFirstName.trim());
          if (form.hostLastName) formData.append('hostLastName', form.hostLastName.trim());
        }
      }

      formData.append('participantIds', JSON.stringify(selectedParticipantIds));
      formData.append('podcastIds', JSON.stringify(selectedPodcastIds));

      if (posterFile) {
        formData.append('poster', posterFile);
      } else if (resolvedMode === 'edit' && !existingPoster) {
        formData.append('removePoster', '1');
      }

      if (audioFile) {
        formData.append('audio', audioFile);
        formData.append('waveform', JSON.stringify(waveform));
      } else if (resolvedMode === 'edit' && !existingAudio) {
        formData.append('removeAudio', '1');
      }

      let res;
      if (resolvedMode === 'edit' && initialValues?.id) {
        res = await fetch(`/api/talkshows/${initialValues.id}`, { method: 'PATCH', body: formData });
      } else {
        res = await fetch('/api/talkshows', { method: 'POST', body: formData });
      }

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(
          errorData?.error ||
            (resolvedMode === 'edit' ? 'Failed to update talkshow' : 'Failed to create talkshow')
        );
      }

      if (onSuccess) {
        onSuccess();
      } else {
        router.refresh();
        router.push('/admin');
      }
    } catch (err) {
      console.error('Error saving talkshow:', err);
      alert(
        `There was an error ${resolvedMode === 'edit' ? 'updating' : 'creating'} the talkshow. Please try again.`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6 p-6 bg-background rounded-xl shadow"
      encType="multipart/form-data"
      autoComplete="off"
    >
      <h2 className="font-semibold text-xl mb-4">
        {resolvedMode === 'edit' ? 'Edit Radio Talkshow' : 'Create New Radio Talkshow'}
      </h2>

      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" value={form.title} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Date</Label>
        <Input id="date" name="date" type="date" value={form.date} onChange={handleChange} required />
      </div>

      {existingPoster && (
        <div className="space-y-2">
          <Label>Current Poster</Label>
          <div className="flex items-center gap-3">
            <img src={existingPoster} alt="Talkshow poster" className="h-16 w-16 rounded-lg object-cover border" />
            <Button
              type="button"
              size="sm"
              variant="destructive"
              className="text-xs"
              onClick={() => setExistingPoster(null)}
            >
              Remove
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="poster">Poster (PNG, JPG, JPEG) — optional</Label>
        <Input id="poster" name="poster" type="file" accept=".png,.jpg,.jpeg" onChange={handlePosterChange} />
        <div className="text-xs text-muted-foreground">{posterFile?.name}</div>
      </div>

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
        <Label htmlFor="audio">Audio File (MP3) — optional</Label>
        <Input id="audio" name="audio" type="file" accept=".mp3" onChange={handleAudioChange} />
        <div className="text-xs text-muted-foreground">
          {analyzingAudio
            ? 'Analyzing waveform...'
            : audioFile
            ? `${audioFile.name}${waveform.length ? ' — waveform ready' : ''}`
            : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Linked content (optional)</Label>
        <p className="text-xs text-muted-foreground">
          Connect this talkshow to a related project, event, report, or institution.
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
        </div>
      </div>

      <div className="space-y-2">
        <Label>Participants (optional)</Label>
        <p className="text-xs text-muted-foreground">Beneficiaries who took part in this talkshow.</p>
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
        <Label>Podcasts (optional)</Label>
        <p className="text-xs text-muted-foreground">
          Podcast episodes linked to this talkshow — editable from either side.
        </p>
        <div className="flex items-center justify-between">
          <Input
            type="search"
            value={podcastSearch}
            onChange={(e) => setPodcastSearch(e.target.value)}
            placeholder="Search podcasts..."
            className="h-8 text-sm"
          />
          {selectedPodcastIds.length > 0 && (
            <span className="ml-2 whitespace-nowrap text-xs text-muted-foreground">
              {selectedPodcastIds.length} selected
            </span>
          )}
        </div>
        <div className="mt-1 max-h-40 overflow-y-auto rounded-md border border-input p-2 space-y-1">
          {optionsLoading && <div className="text-xs text-muted-foreground">Loading…</div>}
          {!optionsLoading && podcastOptions.length === 0 && (
            <div className="text-xs text-muted-foreground">No podcasts yet.</div>
          )}
          {!optionsLoading && podcastOptions.length > 0 && filteredPodcastOptions.length === 0 && (
            <div className="text-xs text-muted-foreground">No matches.</div>
          )}
          {filteredPodcastOptions.map((opt) => (
            <label key={opt.id} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={selectedPodcastIds.includes(opt.id)}
                onChange={() => togglePodcast(opt.id)}
              />
              <span className="truncate">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="hostType">By (optional)</Label>
        <p className="text-xs text-muted-foreground">Who hosted or presented this talkshow.</p>
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
            ? 'Analyzing waveform...'
            : loading
            ? resolvedMode === 'edit'
              ? 'Updating...'
              : 'Creating...'
            : resolvedMode === 'edit'
            ? 'Update Talkshow'
            : 'Create Talkshow'}
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
