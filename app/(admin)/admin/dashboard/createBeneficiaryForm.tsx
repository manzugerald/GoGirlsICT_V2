'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { EMPTY_TIPTAP_DOC, extractPlainText, isTiptapDocEmpty, normalizeTiptapDoc } from '@/lib/tiptap';
import '@/assets/styles/tiptap-editor.css';
import EditorClient from '@/components/editor/editor-client';

const publishOptions = ['draft', 'published'] as const;
type PublishStatus = (typeof publishOptions)[number];
const genderOptions = ['male', 'female'] as const;
type GenderType = (typeof genderOptions)[number];
type Mode = 'create' | 'edit';

const institutionTypeOptions = [
  'education',
  'faith_based_organization',
  'local_community',
  'ngo',
  'government',
  'other',
] as const;
type InstitutionType = (typeof institutionTypeOptions)[number];

interface BeneficiaryData {
  id?: string;
  firstName: string;
  lastName: string;
  image?: string | null;
  images?: string[] | null;
  // Only the name is required — everything else below is optional.
  gender?: GenderType | '' | null;
  email?: string | null;
  phone?: string | null;
  dateOfBirth?: string | null;
  beneficiaryStatus: PublishStatus;
  institutionId?: string | null;
  // "Beneficiary Voice" — an optional Tiptap rich-text testimonial.
  voice?: unknown;
  // Participation links, as returned by the API (join rows with the
  // related record nested inside).
  projects?: { projectId?: number; project?: { id?: number; title?: unknown } }[];
  events?: { eventId?: number; event?: { id?: number; eventTitle?: unknown } }[];
  reports?: { reportId?: number; report?: { id?: number; title?: string } }[];
  podcasts?: { podcastId?: number; podcast?: { id?: number; title?: unknown } }[];
  talkshows?: { talkshowId?: number; talkshow?: { id?: number; title?: string } }[];
}

type PickerOption = { id: number; label: string };

interface InstitutionData {
  id?: string;
  name: string;
  email?: string;
  phone?: string;
  headName?: string;
  institutionType: InstitutionType;
  logoFile?: File | null;
}

export default function CreateBeneficiaryForm({
  mode,
  initialData,
  onSuccess,
  onCancel,
}: {
  mode: Mode;
  initialData?: BeneficiaryData;
  onSuccess?: () => void;
  onCancel?: () => void;
}) {
  const router = useRouter();

  const [institutions, setInstitutions] = useState<{ id: string; name: string }[]>([]);
  const [institutionsLoading, setInstitutionsLoading] = useState(false);

  const [form, setForm] = useState<BeneficiaryData>({
    firstName: initialData?.firstName || '',
    lastName: initialData?.lastName || '',
    image: initialData?.image || undefined,
    images: initialData?.images || [],
    gender: initialData?.gender || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    dateOfBirth: initialData?.dateOfBirth
      ? new Date(initialData.dateOfBirth).toISOString().split('T')[0]
      : '',
    beneficiaryStatus: initialData?.beneficiaryStatus || 'draft',
    institutionId: initialData?.institutionId || '',
  });

  const [voice, setVoice] = useState<object>(() =>
    initialData?.voice ? normalizeTiptapDoc(initialData.voice) : EMPTY_TIPTAP_DOC
  );

  // Projects/Events/Reports/Podcasts/Talkshows this beneficiary can be linked to ("part of").
  const [projectOptions, setProjectOptions] = useState<PickerOption[]>([]);
  const [eventOptions, setEventOptions] = useState<PickerOption[]>([]);
  const [reportOptions, setReportOptions] = useState<PickerOption[]>([]);
  const [podcastOptions, setPodcastOptions] = useState<PickerOption[]>([]);
  const [talkshowOptions, setTalkshowOptions] = useState<PickerOption[]>([]);
  const [pickerOptionsLoading, setPickerOptionsLoading] = useState(false);

  // Per-picker search terms — these lists can get long, so each one is
  // filterable instead of always showing every project/event/report.
  const [projectSearch, setProjectSearch] = useState('');
  const [eventSearch, setEventSearch] = useState('');
  const [reportSearch, setReportSearch] = useState('');
  const [podcastSearch, setPodcastSearch] = useState('');
  const [talkshowSearch, setTalkshowSearch] = useState('');

  const [selectedProjectIds, setSelectedProjectIds] = useState<number[]>(
    () => initialData?.projects?.map((p) => p.projectId).filter((id): id is number => typeof id === 'number') ?? []
  );
  const [selectedEventIds, setSelectedEventIds] = useState<number[]>(
    () => initialData?.events?.map((e) => e.eventId).filter((id): id is number => typeof id === 'number') ?? []
  );
  const [selectedReportIds, setSelectedReportIds] = useState<number[]>(
    () => initialData?.reports?.map((r) => r.reportId).filter((id): id is number => typeof id === 'number') ?? []
  );
  const [selectedPodcastIds, setSelectedPodcastIds] = useState<number[]>(
    () => initialData?.podcasts?.map((p) => p.podcastId).filter((id): id is number => typeof id === 'number') ?? []
  );
  const [selectedTalkshowIds, setSelectedTalkshowIds] = useState<number[]>(
    () => initialData?.talkshows?.map((t) => t.talkshowId).filter((id): id is number => typeof id === 'number') ?? []
  );

  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const [showInstitutionForm, setShowInstitutionForm] = useState(false);
  const [newInstitution, setNewInstitution] = useState<InstitutionData>({
    name: '',
    email: '',
    phone: '',
    headName: '',
    institutionType: 'education',
    logoFile: null,
  });
  const [creatingInstitution, setCreatingInstitution] = useState(false);
  const [institutionError, setInstitutionError] = useState<string | null>(null);

  useEffect(() => {
    setInstitutionsLoading(true);
    fetch('/api/institutions')
      .then((res) => res.json())
      .then((data) => {
        setInstitutions(data.map((i: any) => ({ id: i.id, name: i.name })));
        setInstitutionsLoading(false);
      })
      .catch(() => setInstitutionsLoading(false));
  }, []);

  // Options for "which projects/events/reports/podcasts/talkshows is this beneficiary part of".
  useEffect(() => {
    setPickerOptionsLoading(true);
    Promise.all([
      fetch('/api/projects').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/events').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/reports').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/podcasts').then((res) => (res.ok ? res.json() : [])),
      fetch('/api/talkshows').then((res) => (res.ok ? res.json() : [])),
    ])
      .then(([projects, events, reports, podcasts, talkshows]) => {
        const projectsArr = Array.isArray(projects) ? projects : [];
        const eventsArr = Array.isArray(events) ? events : [];
        const reportsArr = Array.isArray(reports?.reports)
          ? reports.reports
          : Array.isArray(reports)
          ? reports
          : [];
        const podcastsArr = Array.isArray(podcasts) ? podcasts : [];
        const talkshowsArr = Array.isArray(talkshows) ? talkshows : [];
        setProjectOptions(
          projectsArr.map((p: any) => ({ id: p.id, label: extractPlainText(p.title) || `Project #${p.id}` }))
        );
        setEventOptions(
          eventsArr.map((e: any) => ({ id: e.id, label: extractPlainText(e.eventTitle) || `Event #${e.id}` }))
        );
        setReportOptions(reportsArr.map((r: any) => ({ id: r.id, label: r.title || `Report #${r.id}` })));
        setPodcastOptions(
          podcastsArr.map((p: any) => ({ id: p.id, label: extractPlainText(p.title) || `Podcast #${p.id}` }))
        );
        setTalkshowOptions(
          talkshowsArr.map((t: any) => ({ id: t.id, label: t.title || `Talkshow #${t.id}` }))
        );
      })
      .finally(() => setPickerOptionsLoading(false));
  }, []);

  useEffect(() => {
    if (mode === 'edit' && initialData) {
      // Build the next form state field-by-field (rather than spreading
      // initialData directly) so a nullable field coming back from the API
      // — email, phone, gender, institutionId, etc. — becomes the empty
      // string/undefined a controlled input expects, never a raw `null`.
      setForm({
        firstName: initialData.firstName || '',
        lastName: initialData.lastName || '',
        image: initialData.image || undefined,
        images: initialData.images || [],
        gender: initialData.gender || '',
        email: initialData.email || '',
        phone: initialData.phone || '',
        dateOfBirth: initialData.dateOfBirth
          ? new Date(initialData.dateOfBirth).toISOString().split('T')[0]
          : '',
        beneficiaryStatus: initialData.beneficiaryStatus || 'draft',
        institutionId: initialData.institutionId || '',
      });
      setVoice(initialData.voice ? normalizeTiptapDoc(initialData.voice) : EMPTY_TIPTAP_DOC);
      setSelectedProjectIds(
        initialData.projects?.map((p) => p.projectId).filter((id): id is number => typeof id === 'number') ?? []
      );
      setSelectedEventIds(
        initialData.events?.map((e) => e.eventId).filter((id): id is number => typeof id === 'number') ?? []
      );
      setSelectedReportIds(
        initialData.reports?.map((r) => r.reportId).filter((id): id is number => typeof id === 'number') ?? []
      );
      setSelectedPodcastIds(
        initialData.podcasts?.map((p) => p.podcastId).filter((id): id is number => typeof id === 'number') ?? []
      );
      setSelectedTalkshowIds(
        initialData.talkshows?.map((t) => t.talkshowId).filter((id): id is number => typeof id === 'number') ?? []
      );
    }
    // eslint-disable-next-line
  }, [mode, initialData]);

  const toggleId = (id: number, setter: React.Dispatch<React.SetStateAction<number[]>>) => {
    setter((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));
  };

  // Options matching the search term, plus anything already selected (so a
  // typed filter never hides a checked item and silently drops it on save).
  const filterOptions = (options: PickerOption[], search: string, selectedIds: number[]) => {
    const q = search.trim().toLowerCase();
    if (!q) return options;
    return options.filter(
      (opt) => selectedIds.includes(opt.id) || opt.label.toLowerCase().includes(q)
    );
  };

  const filteredProjectOptions = filterOptions(projectOptions, projectSearch, selectedProjectIds);
  const filteredEventOptions = filterOptions(eventOptions, eventSearch, selectedEventIds);
  const filteredReportOptions = filterOptions(reportOptions, reportSearch, selectedReportIds);
  const filteredPodcastOptions = filterOptions(podcastOptions, podcastSearch, selectedPodcastIds);
  const filteredTalkshowOptions = filterOptions(talkshowOptions, talkshowSearch, selectedTalkshowIds);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFiles(Array.from(e.target.files));
    }
  };

  // Institution logic unchanged
  const handleInstitutionField = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewInstitution((prev) => ({ ...prev, [name]: value }));
  };
  const handleInstitutionLogo = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewInstitution((prev) => ({
        ...prev,
        logoFile: e.target.files![0],
      }));
    }
  };

  const validateInstitutionForm = () => {
    if (!newInstitution.name || newInstitution.name.length < 2) {
      setInstitutionError('Institution name is required.');
      return false;
    }
    if (!newInstitution.logoFile) {
      setInstitutionError('Logo file is required.');
      return false;
    }
    if (!newInstitution.institutionType) {
      setInstitutionError('Institution type is required.');
      return false;
    }
    setInstitutionError(null);
    return true;
  };

  const handleCreateInstitution = async () => {
    if (!validateInstitutionForm()) return;
    setCreatingInstitution(true);
    try {
      const formData = new FormData();
      formData.append('name', newInstitution.name.trim());
      if (newInstitution.email) formData.append('email', newInstitution.email.trim());
      if (newInstitution.phone) formData.append('phone', newInstitution.phone.trim());
      if (newInstitution.headName) formData.append('headName', newInstitution.headName.trim());
      formData.append('institutionType', newInstitution.institutionType);
      if (newInstitution.logoFile) {
        formData.append('logoFile', newInstitution.logoFile);
      }

      const res = await fetch('/api/institutions', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.error || 'Failed to create institution');
      }

      const institution = await res.json();
      setInstitutions((prev) => [...prev, { id: institution.id, name: institution.name }]);
      setShowInstitutionForm(false);
      setForm((prev) => ({
        ...prev,
        institutionId: institution.id,
      }));
      setNewInstitution({
        name: '',
        email: '',
        phone: '',
        headName: '',
        institutionType: 'education',
        logoFile: null,
      });
      setInstitutionError(null);
    } catch (err: any) {
      setInstitutionError(err.message || 'Failed to create institution');
    } finally {
      setCreatingInstitution(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create or update Beneficiary via API
      const formData = new FormData();
      formData.append('firstName', form.firstName.trim());
      formData.append('lastName', form.lastName.trim());
      // Everything below is optional — only append what was actually filled in.
      if (form.gender) formData.append('gender', form.gender);
      if (form.dateOfBirth) formData.append('dateOfBirth', form.dateOfBirth);
      if (form.email) formData.append('email', form.email.trim());
      if (form.phone) formData.append('phone', form.phone.trim());
      if (form.institutionId) formData.append('institutionId', form.institutionId);
      formData.append('beneficiaryStatus', form.beneficiaryStatus);
      if (!isTiptapDocEmpty(voice)) formData.append('voice', JSON.stringify(voice));
      formData.append('projectIds', JSON.stringify(selectedProjectIds));
      formData.append('eventIds', JSON.stringify(selectedEventIds));
      formData.append('reportIds', JSON.stringify(selectedReportIds));
      formData.append('podcastIds', JSON.stringify(selectedPodcastIds));
      formData.append('talkshowIds', JSON.stringify(selectedTalkshowIds));

      // Profile images
      imageFiles.forEach((file) => {
        formData.append('images', file);
      });

      let res;
      let beneficiary: any;
      if (mode === 'edit' && initialData?.id) {
        res = await fetch(`/api/beneficiaries/${initialData.id}`, {
          method: 'PATCH',
          body: formData,
        });
      } else {
        res = await fetch('/api/beneficiaries', {
          method: 'POST',
          body: formData,
        });
      }
      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(
          errorData?.error ||
            (mode === 'edit' ? 'Failed to update beneficiary' : 'Failed to create beneficiary')
        );
      }
      beneficiary = await res.json();

      if (onSuccess) {
        onSuccess();
      } else {
        router.refresh();
        router.push('/admin');
      }
    } catch (err) {
      console.error('Error saving beneficiary:', err);
      alert(
        `There was an error ${
          mode === 'edit' ? 'updating' : 'creating'
        } the beneficiary. Please try again.`
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
        {mode === 'edit' ? 'Edit Beneficiary' : 'Create New Beneficiary'}
      </h2>
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
        <select
          id="gender"
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
        >
          <option value="">Not specified</option>
          {genderOptions.map((g) => (
            <option key={g} value={g}>
              {g.charAt(0).toUpperCase() + g.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="dateOfBirth">Date of Birth</Label>
        <Input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          value={form.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="images">Profile Images (PNG, JPG, JPEG)</Label>
        <Input
          id="images"
          name="images"
          type="file"
          accept=".png,.jpg,.jpeg"
          multiple
          onChange={handleImageChange}
        />
        <div className="text-xs text-muted-foreground">
          {imageFiles.map((file) => file.name).join(', ')}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="institutionId">Institution</Label>
        <p className="text-xs text-muted-foreground">
          Optional — a beneficiary can belong to one institution or to none at all.
        </p>
        <div className="flex gap-2 items-end">
          <select
            id="institutionId"
            name="institutionId"
            value={form.institutionId}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, institutionId: e.target.value }));
              setShowInstitutionForm(false);
            }}
            className="flex-1 border border-input rounded-md p-2 text-sm bg-background text-foreground"
            disabled={institutionsLoading}
          >
            <option value="">None</option>
            {institutions.map((inst) => (
              <option key={inst.id} value={inst.id}>
                {inst.name}
              </option>
            ))}
          </select>
          <Button
            type="button"
            variant="outline"
            className="ml-2"
            onClick={() => setShowInstitutionForm((val) => !val)}
          >
            Add new institution
          </Button>
        </div>
      </div>

      {showInstitutionForm && (
        <div className="border rounded-md p-4 mt-2 bg-muted space-y-2">
          <Label htmlFor="institution_name">Institution Name*</Label>
          <Input
            id="institution_name"
            name="name"
            value={newInstitution.name}
            onChange={handleInstitutionField}
            required
          />
          <Label htmlFor="institution_type">Type*</Label>
          <select
            id="institution_type"
            name="institutionType"
            value={newInstitution.institutionType}
            onChange={handleInstitutionField}
            required
            className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
          >
            {institutionTypeOptions.map((type) => (
              <option key={type} value={type}>
                {type.replace(/_/g, ' ')}
              </option>
            ))}
          </select>
          <Label htmlFor="institution_logo">Logo*</Label>
          <Input
            id="institution_logo"
            name="logoFile"
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={handleInstitutionLogo}
            required
          />
          <Label htmlFor="institution_email">Email</Label>
          <Input
            id="institution_email"
            name="email"
            value={newInstitution.email}
            onChange={handleInstitutionField}
          />
          <Label htmlFor="institution_phone">Phone</Label>
          <Input
            id="institution_phone"
            name="phone"
            value={newInstitution.phone}
            onChange={handleInstitutionField}
          />
          <Label htmlFor="institution_headName">Head Name</Label>
          <Input
            id="institution_headName"
            name="headName"
            value={newInstitution.headName}
            onChange={handleInstitutionField}
          />
          {institutionError && <div className="text-red-600 text-xs">{institutionError}</div>}
          <div className="flex gap-2 mt-2">
            <Button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={creatingInstitution}
              onClick={handleCreateInstitution}
            >
              {creatingInstitution ? 'Adding...' : 'Add Institution'}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="text-blue-600 border-blue-600 hover:bg-blue-50"
              onClick={() => setShowInstitutionForm(false)}
              disabled={creatingInstitution}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="voice">Beneficiary Voice (optional)</Label>
        <p className="text-xs text-muted-foreground">
          A first-person testimonial. Shown publicly as a "Beneficiary Voice" only once this
          record's publish status below is set to <strong>published</strong>.
        </p>
        <EditorClient
          key={initialData?.id ?? 'new-beneficiary'}
          content={voice}
          onChange={setVoice}
          placeholder="In their own words..."
        />
      </div>

      <div className="space-y-2">
        <Label>Part of (optional)</Label>
        <p className="text-xs text-muted-foreground">
          Link this beneficiary to the projects, events, reports, podcasts, or radio talkshows
          they took part in — e.g. to later show who attended a given event.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="flex items-center justify-between">
              <Label className="text-xs text-muted-foreground">Projects</Label>
              {selectedProjectIds.length > 0 && (
                <span className="text-xs text-muted-foreground">{selectedProjectIds.length} selected</span>
              )}
            </div>
            <Input
              type="search"
              value={projectSearch}
              onChange={(e) => setProjectSearch(e.target.value)}
              placeholder="Search projects..."
              className="mt-1 h-8 text-sm"
            />
            <div className="mt-1 max-h-40 overflow-y-auto rounded-md border border-input p-2 space-y-1">
              {pickerOptionsLoading && <div className="text-xs text-muted-foreground">Loading…</div>}
              {!pickerOptionsLoading && projectOptions.length === 0 && (
                <div className="text-xs text-muted-foreground">No projects yet.</div>
              )}
              {!pickerOptionsLoading && projectOptions.length > 0 && filteredProjectOptions.length === 0 && (
                <div className="text-xs text-muted-foreground">No matches.</div>
              )}
              {filteredProjectOptions.map((opt) => (
                <label key={opt.id} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedProjectIds.includes(opt.id)}
                    onChange={() => toggleId(opt.id, setSelectedProjectIds)}
                  />
                  <span className="truncate">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label className="text-xs text-muted-foreground">Events</Label>
              {selectedEventIds.length > 0 && (
                <span className="text-xs text-muted-foreground">{selectedEventIds.length} selected</span>
              )}
            </div>
            <Input
              type="search"
              value={eventSearch}
              onChange={(e) => setEventSearch(e.target.value)}
              placeholder="Search events..."
              className="mt-1 h-8 text-sm"
            />
            <div className="mt-1 max-h-40 overflow-y-auto rounded-md border border-input p-2 space-y-1">
              {pickerOptionsLoading && <div className="text-xs text-muted-foreground">Loading…</div>}
              {!pickerOptionsLoading && eventOptions.length === 0 && (
                <div className="text-xs text-muted-foreground">No events yet.</div>
              )}
              {!pickerOptionsLoading && eventOptions.length > 0 && filteredEventOptions.length === 0 && (
                <div className="text-xs text-muted-foreground">No matches.</div>
              )}
              {filteredEventOptions.map((opt) => (
                <label key={opt.id} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedEventIds.includes(opt.id)}
                    onChange={() => toggleId(opt.id, setSelectedEventIds)}
                  />
                  <span className="truncate">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label className="text-xs text-muted-foreground">Reports</Label>
              {selectedReportIds.length > 0 && (
                <span className="text-xs text-muted-foreground">{selectedReportIds.length} selected</span>
              )}
            </div>
            <Input
              type="search"
              value={reportSearch}
              onChange={(e) => setReportSearch(e.target.value)}
              placeholder="Search reports..."
              className="mt-1 h-8 text-sm"
            />
            <div className="mt-1 max-h-40 overflow-y-auto rounded-md border border-input p-2 space-y-1">
              {pickerOptionsLoading && <div className="text-xs text-muted-foreground">Loading…</div>}
              {!pickerOptionsLoading && reportOptions.length === 0 && (
                <div className="text-xs text-muted-foreground">No reports yet.</div>
              )}
              {!pickerOptionsLoading && reportOptions.length > 0 && filteredReportOptions.length === 0 && (
                <div className="text-xs text-muted-foreground">No matches.</div>
              )}
              {filteredReportOptions.map((opt) => (
                <label key={opt.id} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedReportIds.includes(opt.id)}
                    onChange={() => toggleId(opt.id, setSelectedReportIds)}
                  />
                  <span className="truncate">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label className="text-xs text-muted-foreground">Podcasts</Label>
              {selectedPodcastIds.length > 0 && (
                <span className="text-xs text-muted-foreground">{selectedPodcastIds.length} selected</span>
              )}
            </div>
            <Input
              type="search"
              value={podcastSearch}
              onChange={(e) => setPodcastSearch(e.target.value)}
              placeholder="Search podcasts..."
              className="mt-1 h-8 text-sm"
            />
            <div className="mt-1 max-h-40 overflow-y-auto rounded-md border border-input p-2 space-y-1">
              {pickerOptionsLoading && <div className="text-xs text-muted-foreground">Loading…</div>}
              {!pickerOptionsLoading && podcastOptions.length === 0 && (
                <div className="text-xs text-muted-foreground">No podcasts yet.</div>
              )}
              {!pickerOptionsLoading && podcastOptions.length > 0 && filteredPodcastOptions.length === 0 && (
                <div className="text-xs text-muted-foreground">No matches.</div>
              )}
              {filteredPodcastOptions.map((opt) => (
                <label key={opt.id} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedPodcastIds.includes(opt.id)}
                    onChange={() => toggleId(opt.id, setSelectedPodcastIds)}
                  />
                  <span className="truncate">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label className="text-xs text-muted-foreground">Radio Talkshows</Label>
              {selectedTalkshowIds.length > 0 && (
                <span className="text-xs text-muted-foreground">{selectedTalkshowIds.length} selected</span>
              )}
            </div>
            <Input
              type="search"
              value={talkshowSearch}
              onChange={(e) => setTalkshowSearch(e.target.value)}
              placeholder="Search talkshows..."
              className="mt-1 h-8 text-sm"
            />
            <div className="mt-1 max-h-40 overflow-y-auto rounded-md border border-input p-2 space-y-1">
              {pickerOptionsLoading && <div className="text-xs text-muted-foreground">Loading…</div>}
              {!pickerOptionsLoading && talkshowOptions.length === 0 && (
                <div className="text-xs text-muted-foreground">No radio talkshows yet.</div>
              )}
              {!pickerOptionsLoading && talkshowOptions.length > 0 && filteredTalkshowOptions.length === 0 && (
                <div className="text-xs text-muted-foreground">No matches.</div>
              )}
              {filteredTalkshowOptions.map((opt) => (
                <label key={opt.id} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedTalkshowIds.includes(opt.id)}
                    onChange={() => toggleId(opt.id, setSelectedTalkshowIds)}
                  />
                  <span className="truncate">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="beneficiaryStatus">Beneficiary Publish Status</Label>
        <select
          id="beneficiaryStatus"
          name="beneficiaryStatus"
          value={form.beneficiaryStatus}
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
          disabled={loading}
          className="flex-1 bg-[#9f004d] hover:bg-[#7c003c] text-white"
        >
          {loading
            ? mode === 'edit'
              ? 'Updating...'
              : 'Creating...'
            : mode === 'edit'
            ? 'Update Beneficiary'
            : 'Create Beneficiary'}
        </Button>
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            className="flex-1 border-[#9f004d] text-[#9f004d] hover:bg-[#f5e3ec]"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}
