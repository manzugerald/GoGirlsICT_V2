'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  mode?: 'create' | 'edit';
  userId?: string;
  initialData?: any;
  onSuccess?: (updatedUser?: any) => void;
  onCancel?: () => void;
  onDelete?: (userId: string) => void;
  // Props for SettingsSection/modal control:
  hideUsernameField?: boolean;
  hidePasswordFields?: boolean;
  hideRoleField?: boolean;
  onlyPasswordFields?: boolean;
  requireCurrentPassword?: boolean;
  showDeleteAccount?: boolean; // NEW: Show "Delete Account" button if true
};

const ROLE_OPTIONS = [
  { value: 'super', label: 'Super' },
  { value: 'admin', label: 'Admin' },
  { value: 'moderator', label: 'Moderator' },
  { value: 'beneficiary', label: 'Beneficiary' },
  { value: 'guest', label: 'Guest' },
] as const;

export default function CreateOrEditUserForm({
  mode = 'create',
  userId,
  initialData,
  onSuccess,
  onCancel,
  onDelete,
  hideUsernameField = false,
  hidePasswordFields = false,
  hideRoleField = false,
  onlyPasswordFields = false,
  requireCurrentPassword = true,
  showDeleteAccount = false,
}: Props) {
  const isEdit = mode === 'edit' || !!userId || !!initialData;
  const initialRef = useRef<any>(initialData ?? null);

  useEffect(() => {
    if (initialData) initialRef.current = initialData;
  }, [initialData]);

  const [form, setForm] = useState({
    firstName: initialData?.firstName ?? '',
    lastName: initialData?.lastName ?? '',
    username: initialData?.username ?? '',
    email: initialData?.email ?? '',
    about: initialData?.about ?? '',
    password: '',
    confirmPassword: '',
    role: initialData?.role ?? '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>(initialData?.image || '');
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image || null);
  const [imageToDelete, setImageToDelete] = useState<string | null>(null);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  // If onlyPasswordFields, skip fetching profile data.
  useEffect(() => {
    if (isEdit && userId && !initialData && !onlyPasswordFields) {
      (async () => {
        try {
          const res = await fetch(`/api/users/${encodeURIComponent(String(userId))}`);
          if (!res.ok) throw new Error(await res.text());
          const json = await res.json();
          initialRef.current = json;
          setForm({
            firstName: json?.firstName ?? '',
            lastName: json?.lastName ?? '',
            username: json?.username ?? '',
            email: json?.email ?? '',
            about: json?.about ?? '',
            password: '',
            confirmPassword: '',
            role: json?.role ?? '',
          });
          setImageUrl(json?.image || '');
          setImagePreview(json?.image || null);
        } catch (e) {
          setError((e as Error).message || 'Failed to fetch user');
        }
      })();
    }
  }, [isEdit, userId, initialData, onlyPasswordFields]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    if (onlyPasswordFields) {
      if (requireCurrentPassword && !currentPassword) {
        setError('Current password is required.');
        setIsSubmitting(false);
        return;
      }
      if (!newPassword || !confirmNewPassword) {
        setError('New password and confirmation are required.');
        setIsSubmitting(false);
        return;
      }
      if (newPassword !== confirmNewPassword) {
        setError('New passwords do not match.');
        setIsSubmitting(false);
        return;
      }
    } else if (!hidePasswordFields) {
      if (!isEdit && (!form.password || !form.confirmPassword)) {
        setError('Password and confirmation required.');
        setIsSubmitting(false);
        return;
      }
      if (!isEdit && form.password !== form.confirmPassword) {
        setError('Passwords do not match.');
        setIsSubmitting(false);
        return;
      }
    }

    try {
      const formData = new FormData();

      if (onlyPasswordFields) {
        formData.append('password', newPassword);
        if (requireCurrentPassword) formData.append('currentPassword', currentPassword);
      } else {
        if (!hideUsernameField) formData.append('username', form.username);
        formData.append('firstName', form.firstName);
        formData.append('lastName', form.lastName);
        formData.append('email', form.email);
        formData.append('about', form.about ?? '');
        if (!hidePasswordFields && form.password) {
          formData.append('password', form.password);
        }
        if (!hideRoleField && form.role) formData.append('role', form.role);
        if (imageFile) formData.append('image', imageFile);
        if (imageToDelete) formData.append('oldImageUrl', imageToDelete);
      }

      let res;
      if (isEdit) {
        const idToUse = userId ?? initialRef.current?.id;
        res = await fetch(`/api/users/${encodeURIComponent(String(idToUse))}`, {
          method: 'PATCH',
          body: formData,
        });
      } else {
        res = await fetch('/api/users', {
          method: 'POST',
          body: formData,
        });
      }

      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error((data && (data.error || data.message)) || 'Operation failed');

      setSuccess(isEdit ? 'User updated!' : 'User created!');
      if (data?.user && onSuccess) onSuccess(data.user);
      else if (onSuccess) onSuccess(data ?? undefined);

      if (!isEdit) {
        setTimeout(() => {
          router.push('/');
        }, 800);
      }
    } catch (err: any) {
      setError(err?.message || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
      setForm((f) => ({ ...f, password: '', confirmPassword: '' }));
    }
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    else router.back();
  };

  // Only render password fields if modal is for password change
  if (onlyPasswordFields) {
    return (
      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        {requireCurrentPassword && (
          <div>
            <label className="text-sm block mb-1">Current password</label>
            <input
              type="password"
              placeholder="Current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="border p-2 rounded w-full"
              autoComplete="current-password"
            />
          </div>
        )}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="text-sm block mb-1">New password</label>
            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border p-2 rounded w-full"
              autoComplete="new-password"
            />
          </div>
          <div className="w-1/2">
            <label className="text-sm block mb-1">Confirm new password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="border p-2 rounded w-full"
              autoComplete="new-password"
            />
          </div>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}
        <div className="flex gap-3">
          <button
            type="submit"
            className="w-1/2 bg-green-600 text-white py-2 rounded flex items-center justify-center"
            disabled={isSubmitting}
          >
            Change password
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-1/2 bg-black text-white py-2 rounded"
            disabled={isSubmitting}
          >
            Cancel
          </button>
        </div>
        {showDeleteAccount && onDelete && !onlyPasswordFields && (
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => onDelete(userId)}
              className="w-full bg-red-600 text-white py-2 rounded mt-2"
              disabled={isSubmitting}
            >
              Delete Account
            </button>
          </div>
        )}
      </form>
    );
  }

  // Otherwise, normal form
  return (
    <div className="flex max-w-lg items-center justify-center mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        {!hideUsernameField && (
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="text-sm block mb-1">Username</label>
              <input
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                autoComplete="off"
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm block mb-1">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                autoComplete="off"
              />
            </div>
          </div>
        )}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="text-sm block mb-1">First name</label>
            <input
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="w-1/2">
            <label className="text-sm block mb-1">Last name</label>
            <input
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>
        <div className="mt-2">
          <label className="text-sm block mb-1">About</label>
          <textarea
            name="about"
            value={form.about}
            onChange={(e) => setForm({ ...form, about: e.target.value })}
            className="border p-2 rounded w-full"
            rows={4}
            placeholder="Tell us a few words about this user (optional)"
          />
        </div>
        {!hideRoleField && (
          <div className="mt-2">
            <label className="text-sm block mb-1">Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option value="">— select role —</option>
              {ROLE_OPTIONS.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>
        )}
        {!hidePasswordFields && (
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="text-sm block mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={form.password}
                className="border p-2 rounded w-full"
                autoComplete="new-password"
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm block mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={form.confirmPassword}
                className="border p-2 rounded w-full"
                autoComplete="new-password"
              />
            </div>
          </div>
        )}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}
        <div className="flex gap-3">
          <button
            type="submit"
            className="w-1/2 bg-green-600 text-white py-2 rounded flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isEdit ? 'Save changes' : 'Register'}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-1/2 bg-black text-white py-2 rounded"
            disabled={isSubmitting}
          >
            Cancel
          </button>
        </div>
        {isEdit && onDelete && (
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => onDelete && userId && onDelete(userId)}
              className="w-full bg-red-600 text-white py-2 rounded mt-2"
              disabled={isSubmitting}
            >
              {showDeleteAccount ? 'Delete Account' : 'Delete User'}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
