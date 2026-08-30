'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

// The full /api/teams/:id record this form edits — genuinely dynamic, hence
// one deliberate loose alias here instead of scattering `any`.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TeamRecord = any;

type Props = {
  mode?: 'create' | 'edit';
  teamId?: string;
  initialData?: TeamRecord;
  onSuccess?: (updated?: TeamRecord) => void;
  onCancel?: () => void;
  onDelete?: (id: string) => void;
  showDeleteButton?: boolean;
};

export default function CreateTeamForm({
  mode = 'create',
  teamId,
  initialData,
  onSuccess,
  onCancel,
  onDelete,
  showDeleteButton = true,
}: Props) {
  const isEdit = mode === 'edit' || !!teamId || !!initialData;
  const initialRef = useRef<TeamRecord>(initialData ?? null);

  useEffect(() => {
    if (initialData) initialRef.current = initialData;
  }, [initialData]);

  const [form, setForm] = useState({
    firstName: initialData?.firstName ?? '',
    lastName: initialData?.lastName ?? '',
    about: initialData?.about ?? '',
    email: initialData?.email ?? '',
    phone: initialData?.phone ?? '',
    linkedInUrl: initialData?.linkedInUrl ?? '',
    facebookUrl: initialData?.facebookUrl ?? '',
    xUrl: initialData?.xUrl ?? '',
    websiteUrl: initialData?.websiteUrl ?? '',
    isActive: typeof initialData?.isActive === 'boolean' ? initialData.isActive : true,
  });

  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(
    initialData?.profileImage ?? null
  );

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (initialData) {
      setForm((f) => ({
        ...f,
        firstName: initialData.firstName ?? '',
        lastName: initialData.lastName ?? '',
        about: initialData.about ?? '',
        email: initialData.email ?? '',
        phone: initialData.phone ?? '',
        linkedInUrl: initialData.linkedInUrl ?? '',
        facebookUrl: initialData.facebookUrl ?? '',
        xUrl: initialData.xUrl ?? '',
        websiteUrl: initialData.websiteUrl ?? '',
        isActive: typeof initialData.isActive === 'boolean' ? initialData.isActive : true,
      }));
      setPreviewImage(initialData.profileImage ?? null);
    }
  }, [initialData]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
    setError('');
    setSuccess('');
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setProfileImageFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    }
  }

  const validate = () => {
    if (!form.firstName || !form.lastName) return 'First name and last name are required';
    // simple email format check if provided
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Invalid email';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    const v = validate();
    if (v) {
      setError(v);
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('firstName', form.firstName ?? '');
      formData.append('lastName', form.lastName ?? '');
      if (typeof form.about !== 'undefined') formData.append('about', form.about ?? '');
      if (form.email) formData.append('email', form.email);
      if (form.phone) formData.append('phone', form.phone);
      if (form.linkedInUrl) formData.append('linkedInUrl', form.linkedInUrl);
      if (form.facebookUrl) formData.append('facebookUrl', form.facebookUrl);
      if (form.xUrl) formData.append('xUrl', form.xUrl);
      if (form.websiteUrl) formData.append('websiteUrl', form.websiteUrl);
      formData.append('isActive', String(Boolean(form.isActive)));
      if (profileImageFile) formData.append('profileImage', profileImageFile);

      let res: Response;
      if (isEdit) {
        const idToUse = teamId ?? initialRef.current?.id;
        if (!idToUse) throw new Error('Missing team id for edit');
        res = await fetch(`/api/teams/${encodeURIComponent(String(idToUse))}`, {
          method: 'PATCH',
          body: formData,
        });
      } else {
        res = await fetch('/api/teams', {
          method: 'POST',
          body: formData,
        });
      }

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error((data && (data.error || data.message)) || `HTTP ${res.status}`);
      }

      setSuccess(isEdit ? 'Team member updated' : 'Team member created');
      if (onSuccess) onSuccess(data?.team ?? data);
      // refresh list by rerunning parent fetch (parent handles reloading on success)
      // optionally navigate away when created
      if (!isEdit) {
        setTimeout(() => {
          router.push('/'); // adjust to desired location
        }, 700);
      }
    } catch (err) {
      console.error('CreateTeamForm submit error', err);
      setError(err instanceof Error ? err.message : 'Failed to save team member');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    else router.back();
  };

  const handleDeleteClick = async () => {
    const idToUse = teamId ?? initialRef.current?.id;
    if (!idToUse) return;
    if (!confirm('Delete this team member? This action cannot be undone.')) return;
    try {
      const res = await fetch(`/api/teams/${encodeURIComponent(String(idToUse))}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || `HTTP ${res.status}`);
      }
      if (onDelete) onDelete(String(idToUse));
      setSuccess('Team member deleted');
    } catch (err) {
      console.error('Delete team error', err);
      setError(err instanceof Error ? err.message : 'Failed to delete team member');
    }
  };

  const formContainerClass =
    'space-y-4 w-full max-w-lg mx-auto border rounded-md p-6 transition-colors bg-white/95 dark:bg-gray-800/95 border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-lg';

  return (
    <form onSubmit={handleSubmit} className={formContainerClass}>
      <div>
        <h2 className="text-lg font-semibold">
          {isEdit ? 'Edit Team Member' : 'Create Team Member'}
        </h2>
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="text-sm block mb-1">First name</label>
          <input
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="border p-2 rounded w-full bg-white dark:bg-gray-700"
          />
        </div>
        <div className="w-1/2">
          <label className="text-sm block mb-1">Last name</label>
          <input
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="border p-2 rounded w-full bg-white dark:bg-gray-700"
          />
        </div>
      </div>

      <div className="mt-2">
        <label className="text-sm block mb-1">About</label>
        <textarea
          name="about"
          value={form.about}
          onChange={(e) => setForm({ ...form, about: e.target.value })}
          className="border p-2 rounded w-full bg-white dark:bg-gray-700"
          rows={4}
          placeholder="Short bio or role description (optional)"
        />
      </div>

      <div className="flex gap-4 mt-2">
        <div className="w-1/2">
          <label className="text-sm block mb-1">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email (optional)"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded w-full bg-white dark:bg-gray-700"
            autoComplete="email"
          />
        </div>

        <div className="w-1/2">
          <label className="text-sm block mb-1">Phone</label>
          <input
            name="phone"
            placeholder="Phone (optional)"
            value={form.phone}
            onChange={handleChange}
            className="border p-2 rounded w-full bg-white dark:bg-gray-700"
          />
        </div>
      </div>

      <div className="flex gap-4 mt-2">
        <div className="w-1/2">
          <label className="text-sm block mb-1">LinkedIn URL</label>
          <input
            name="linkedInUrl"
            placeholder="https://linkedin.com/..."
            value={form.linkedInUrl}
            onChange={handleChange}
            className="border p-2 rounded w-full bg-white dark:bg-gray-700"
          />
        </div>

        <div className="w-1/2">
          <label className="text-sm block mb-1">Facebook URL</label>
          <input
            name="facebookUrl"
            placeholder="https://facebook.com/..."
            value={form.facebookUrl}
            onChange={handleChange}
            className="border p-2 rounded w-full bg-white dark:bg-gray-700"
          />
        </div>
      </div>

      <div className="flex gap-4 mt-2">
        <div className="w-1/2">
          <label className="text-sm block mb-1">X (Twitter) URL</label>
          <input
            name="xUrl"
            placeholder="https://x.com/..."
            value={form.xUrl}
            onChange={handleChange}
            className="border p-2 rounded w-full bg-white dark:bg-gray-700"
          />
        </div>

        <div className="w-1/2">
          <label className="text-sm block mb-1">Website</label>
          <input
            name="websiteUrl"
            placeholder="https://..."
            value={form.websiteUrl}
            onChange={handleChange}
            className="border p-2 rounded w-full bg-white dark:bg-gray-700"
          />
        </div>
      </div>

      <div className="mt-2">
        <label className="text-sm block mb-1">Profile image</label>
        <div className="flex items-center gap-3">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {previewImage && (
            <img
              src={previewImage}
              alt="preview"
              className="w-20 h-20 object-cover rounded border"
            />
          )}
        </div>
      </div>

      <div className="mt-2 flex items-center gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isActive"
            checked={Boolean(form.isActive)}
            onChange={handleChange}
          />
          <span className="text-sm">Active</span>
        </label>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">{success}</p>}

      <div className="flex gap-3 mt-4">
        <button
          type="submit"
          className="flex-1 bg-green-600 text-white py-2 rounded flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isEdit ? 'Save changes' : 'Create Member'}
        </button>

        <button
          type="button"
          onClick={handleCancel}
          className="flex-1 bg-black text-white py-2 rounded"
          disabled={isSubmitting}
        >
          Cancel
        </button>
      </div>

      {isEdit && showDeleteButton && onDelete && (
        <div className="flex flex-col gap-2 mt-3">
          <button
            type="button"
            onClick={handleDeleteClick}
            className="w-full bg-red-600 text-white py-2 rounded"
            disabled={isSubmitting}
          >
            Delete Team Member
          </button>
        </div>
      )}
    </form>
  );
}
