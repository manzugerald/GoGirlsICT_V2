'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

type ShowOnly = 'all' | 'profile' | 'password' | 'username';

type Props = {
  mode?: 'create' | 'edit';
  userId?: string;
  initialData?: any; // optional preloaded data: {firstName, lastName, username, email, image, role, about, ...}
  onSuccess?: (updatedUser?: any) => void;
  onCancel?: () => void;
  onDelete?: (userId: string) => void;
  forceChangePassword?: boolean;
  forceChangeUsername?: boolean;
  // New: allow callers to render only a specific subsection of the form
  showOnly?: ShowOnly;
};

function getCameFrom() {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem('came-from') || '/';
  }
  return '/';
}

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
  forceChangePassword = false,
  forceChangeUsername = false,
  showOnly = 'all',
}: Props) {
  // Defensive: don't even render the form if edit mode and no id and no initialData
  if (mode === 'edit' && !userId && !initialData) {
    return <div className="text-red-500 text-center">User ID missing. Cannot edit user</div>;
  }

  // initialRef keeps a snapshot of the data we consider "original" for diffing
  const initialRef = useRef<any>(initialData ?? null);
  useEffect(() => {
    if (initialData) initialRef.current = initialData;
  }, [initialData]);

  const isEdit = mode === 'edit' || !!userId || !!initialData;

  // Form state (visible values)
  const [form, setForm] = useState({
    firstName: initialData?.firstName ?? '',
    lastName: initialData?.lastName ?? '',
    username: initialData?.username ?? '',
    email: initialData?.email ?? '',
    about: initialData?.about ?? '',
    password: '',
    confirmPassword: '',
    role: initialData?.role ?? '', // role included for both create & edit
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>(initialData?.image || '');
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image || null);
  const [imageToDelete, setImageToDelete] = useState<string | null>(null);

  const [changeUsername, setChangeUsername] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [confirmNewUsername, setConfirmNewUsername] = useState('');

  const [changePassword, setChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState(''); // NEW: current password required for edit password changes
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [usernameInvalid, setUsernameInvalid] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registerDot, setRegisterDot] = useState(0);

  const [loadingUser, setLoadingUser] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const router = useRouter();

  // Fetcher (used both on mount and on retry)
  async function fetchUserData(signal?: AbortSignal) {
    const idToUse = userId ?? initialRef.current?.id;
    if (!idToUse) return;
    setLoadingUser(true);
    setFetchError(null);
    try {
      const res = await fetch(`/api/users/${encodeURIComponent(String(idToUse))}`, { signal });
      if (!res.ok) {
        const txt = await res.text().catch(() => '');
        throw new Error(txt || `Failed to load user (${res.status})`);
      }
      const json = await res.json();
      // populate
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
      setImageUrl(json?.image ?? '');
      setImagePreview(json?.image ?? null);

      // Toggles from props
      setChangePassword(Boolean(forceChangePassword));
      setChangeUsername(Boolean(forceChangeUsername));
      setNewPassword('');
      setConfirmNewPassword('');
      setNewUsername('');
      setConfirmNewUsername('');
      setCurrentPassword('');
      setUsernameInvalid(false);
      setError('');
      setSuccess('');
    } catch (err: any) {
      if (err.name === 'AbortError') return;
      setFetchError(err?.message || 'Failed to load user');
    } finally {
      setLoadingUser(false);
    }
  }

  // If in edit mode and we have a userId, default behavior is to fetch the latest user data to populate the form.
  useEffect(() => {
    let controller: AbortController | null = null;
    const shouldFetch = isEdit && (userId ?? initialRef.current?.id);
    if (!shouldFetch) return;

    controller = new AbortController();
    fetchUserData(controller.signal);

    return () => {
      if (controller) controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, userId]);

  // If parent provides initialData explicitly (e.g., dashboard passed it), keep form in sync with that too.
  useEffect(() => {
    if (!initialData) return;
    setForm({
      firstName: initialData?.firstName ?? '',
      lastName: initialData?.lastName ?? '',
      username: initialData?.username ?? '',
      email: initialData?.email ?? '',
      about: initialData?.about ?? '',
      password: '',
      confirmPassword: '',
      role: initialData?.role ?? '',
    });
    setImageUrl(initialData?.image || '');
    setImagePreview(initialData?.image || null);
    setImageFile(null);
    setImageToDelete(null);

    setChangePassword(Boolean(forceChangePassword));
    setChangeUsername(Boolean(forceChangeUsername));
    setNewPassword('');
    setConfirmNewPassword('');
    setNewUsername('');
    setConfirmNewUsername('');
    setCurrentPassword('');
    setError('');
    setSuccess('');
    setUsernameInvalid(false);
    initialRef.current = initialData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData]);

  // Smart username availability/exact check:
  // - When creating: checkAvailable
  // - When editing:
  //    - if user edits the main username input (form.username !== orig.username): checkAvailable
  //    - else (unchanged): checkExact (validates that server still has same username)
  const handleUsernameBlur = async () => {
    if (!form.username) return;
    try {
      setCheckingUsername(true);

      const origUsername = initialRef.current?.username;
      const idToUse = userId ?? initialRef.current?.id;

      let url: string;
      if (mode === 'edit' && idToUse) {
        if (form.username !== origUsername) {
          // user changed main username field -> check availability
          url = `/api/users?checkAvailable=1&username=${encodeURIComponent(form.username)}`;
        } else {
          // unchanged -> verify exact
          url = `/api/users?checkExact=1&userId=${encodeURIComponent(
            String(idToUse)
          )}&username=${encodeURIComponent(form.username)}`;
        }
      } else {
        // create mode
        url = `/api/users?checkAvailable=1&username=${encodeURIComponent(form.username)}`;
      }

      const res = await fetch(url);
      if (!res.ok) {
        setUsernameInvalid(false);
        setCheckingUsername(false);
        return;
      }
      const data = await res.json().catch(() => null);
      const valid = data && (data.valid === true || data.available === true || data.ok === true);
      setUsernameInvalid(!valid);
    } catch {
      setUsernameInvalid(false);
    } finally {
      setCheckingUsername(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
    if (e.target.name === 'username') setUsernameInvalid(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      if (imageUrl) setImageToDelete(imageUrl);
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageDelete = async () => {
    if (imageUrl) setImageToDelete(imageUrl);
    setImageFile(null);
    setImageUrl('');
    setImagePreview(null);
    const idToUse = userId ?? initialRef.current?.id;
    if (idToUse && imageUrl) {
      try {
        // Merged route: POST /api/users with JSON { imageUrl } to delete image
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imageUrl }),
        });
        if (!res.ok) {
          // ignore failures for delete-image
        }
      } catch {
        // ignore
      }
    }
  };

  // Animated dots for submit button
  useEffect(() => {
    let dotInterval: any;
    if (isSubmitting) {
      dotInterval = setInterval(() => {
        setRegisterDot((prev) => (prev + 1) % 3);
      }, 400);
    } else {
      setRegisterDot(0);
    }
    return () => {
      if (dotInterval) clearInterval(dotInterval);
    };
  }, [isSubmitting]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    // --- Validation ---
    // If showOnly restricts the UI, validate only relevant fields
    if (!isEdit) {
      // create mode validation
      if (showOnly === 'all' || showOnly === 'profile') {
        if (
          !form.firstName ||
          !form.lastName ||
          !form.username ||
          !form.email ||
          (!imageFile && !imagePreview)
        ) {
          setError('All profile fields and image are required');
          setIsSubmitting(false);
          return;
        }
      }
      if (showOnly === 'all' || showOnly === 'password') {
        if (!form.password || !form.confirmPassword) {
          setError('Password and confirmation are required');
          setIsSubmitting(false);
          return;
        }
        if (form.password !== form.confirmPassword) {
          setError('Passwords do not match');
          setIsSubmitting(false);
          return;
        }
      }
    } else {
      // edit mode validation

      // Determine if username is being changed:
      // - changeUsername checkbox (explicit)
      // - OR user edited main username input (form.username !== orig.username)
      const orig = initialRef.current ?? {};
      const usernameEdited = form.username !== (orig.username ?? '');
      const wantsUsernameChangeExplicit = changeUsername;
      const wantsUsernameChange = wantsUsernameChangeExplicit || usernameEdited;

      if (wantsUsernameChangeExplicit) {
        // explicit flow requires newUsername + confirmNewUsername and they must match
        if (!newUsername || !confirmNewUsername) {
          setError('Please provide the new username and confirmation');
          setIsSubmitting(false);
          return;
        }
        if (newUsername !== confirmNewUsername) {
          setError('New usernames do not match');
          setIsSubmitting(false);
          return;
        }
      }

      if ((showOnly === 'all' || showOnly === 'password' || changePassword) && changePassword) {
        if (!currentPassword) {
          setError('Please provide your current password to change to a new password.');
          setIsSubmitting(false);
          return;
        }
        if (!newPassword || !confirmNewPassword) {
          setError('Please provide the new password and confirmation');
          setIsSubmitting(false);
          return;
        }
        if (newPassword !== confirmNewPassword) {
          setError('New passwords do not match');
          setIsSubmitting(false);
          return;
        }
      }
      if (usernameInvalid) {
        setError('The Username appears invalid');
        setIsSubmitting(false);
        return;
      }
      if (!userId && !initialRef.current?.id) {
        setError('Invalid form mode or missing user ID');
        setIsSubmitting(false);
        return;
      }
    }

    try {
      const formData = new FormData();

      if (!isEdit) {
        if (showOnly === 'all' || showOnly === 'profile') {
          formData.append('firstName', form.firstName);
          formData.append('lastName', form.lastName);
          formData.append('username', form.username);
          formData.append('email', form.email);
          formData.append('about', form.about ?? '');
          if (imageFile) formData.append('image', imageFile);
        }
        if (showOnly === 'all' || showOnly === 'password') {
          formData.append('password', form.password);
        }
        // include role on create when present
        if ((showOnly === 'all' || showOnly === 'profile') && form.role) {
          formData.append('role', form.role);
        }
      } else {
        const orig = initialRef.current ?? {};

        // include original username to help server-side checks
        if (orig.username) formData.append('username', orig.username);
        else if (form.username) formData.append('username', form.username);

        if (showOnly === 'all' || showOnly === 'profile') {
          if (form.firstName !== (orig.firstName ?? ''))
            formData.append('firstName', form.firstName);
          if (form.lastName !== (orig.lastName ?? '')) formData.append('lastName', form.lastName);
          if (form.email !== (orig.email ?? '')) formData.append('email', form.email);
          // include about field change or empty string to allow clearing
          if (form.about !== (orig.about ?? '')) {
            formData.append('about', form.about ?? '');
          } else {
            // include anyway to keep server handling simple
            formData.append('about', form.about ?? '');
          }
          if (imageFile) formData.append('image', imageFile);
          if (imageToDelete) formData.append('oldImageUrl', imageToDelete);

          // include role in edit (always include if provided)
          if (form.role && form.role !== (orig.role ?? '')) {
            formData.append('role', form.role);
          } else if (form.role) {
            // even if unchanged, include to make server-side handling simple
            formData.append('role', form.role);
          }
        }

        // username change flow:
        // - explicit (checkbox): use newUsername (and confirmation validated)
        // - implicit (user edited main username input): send newUsername = form.username
        const origUsername = orig.username ?? '';
        if (changeUsername) {
          formData.append('newUsername', newUsername || form.username);
        } else if (form.username !== origUsername) {
          // user edited the main username input without checking the box -> treat as username change
          formData.append('newUsername', form.username);
        }

        // password change flow (explicit or via showOnly)
        if (changePassword || showOnly === 'password') {
          const pw = newPassword || form.password;
          if (pw) {
            formData.append('password', pw);
            // include current password for verification when editing password
            formData.append('currentPassword', currentPassword);
          }
        } else if (form.password) {
          // backwards compatibility: if user typed in main password field, include it
          formData.append('password', form.password);
        }
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

      // Call onSuccess with the returned user (for optimistic parent updates)
      if (data?.user && onSuccess) {
        try {
          onSuccess(data.user);
        } catch {
          // ignore parent errors
        }
      } else if (onSuccess) {
        try {
          onSuccess(data ?? undefined);
        } catch {
          // ignore
        }
      }

      if (!isEdit) {
        const cameFrom = getCameFrom();
        sessionStorage.removeItem('came-from');
        setTimeout(() => {
          router.push(cameFrom);
        }, 800);
      } else {
        if (data?.user) {
          setImageUrl(data.user.image || '');
          setImagePreview(data.user.image || null);
          setForm((f) => ({
            ...f,
            username: data.user.username || f.username,
            role: data.user.role ?? f.role,
            about: data.user.about ?? f.about,
          }));
          initialRef.current = { ...(initialRef.current || {}), ...data.user };
        }
      }
    } catch (err: any) {
      setError(err?.message || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
      // clear sensitive fields
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    }
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    else router.back();
  };

  const handleDelete = async () => {
    const idToUse = userId ?? initialRef.current?.id;
    if (!idToUse) return;
    if (!window.confirm('Are you sure you want to delete this user? This action cannot be undone.'))
      return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/users/${encodeURIComponent(String(idToUse))}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Failed to delete user');
      }
      if (onDelete) onDelete(String(idToUse));
      if (onSuccess) onSuccess(undefined);
      router.refresh();
      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setDeleting(false);
    }
  };

  // Retry fetch user (exposed in UI when fetchError is set)
  const retryFetchUser = () => {
    setFetchError(null);
    fetchUserData();
  };

  // Render
  // If showOnly restricts the UI, we render only matching sections:
  const renderProfileFields = () => (
    <>
      {/* User Image */}
      <div className="flex flex-col items-center">
        <label className="text-sm block mb-1">Profile image</label>
        {imagePreview ? (
          <div className="relative flex flex-col items-center">
            <img
              src={imagePreview}
              alt="User"
              className="w-24 h-24 rounded-full object-cover border mx-auto"
            />
            <button
              type="button"
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center -mt-2 -mr-2"
              onClick={handleImageDelete}
              title="Delete Image"
            >
              ×
            </button>
          </div>
        ) : (
          <div className="w-24 h-24 rounded-full border flex items-center justify-center mb-2 text-gray-400">
            No Image
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-2 mb-2 block"
        />
      </div>

      {/* Name row */}
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

      {/* Username and Email */}
      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="text-sm block mb-1">Username</label>
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            onBlur={handleUsernameBlur}
            className={`border p-2 rounded w-full ${usernameInvalid ? 'border-red-500' : ''}`}
            autoComplete="off"
            disabled={changeUsername || showOnly === 'username'}
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

      {/* About - show in edit mode so admins/users can edit the about text */}
      {isEdit && (
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
      )}

      {/* Role select (visible in both create and edit profile sections) */}
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
    </>
  );

  const renderUsernameChange = () => (
    <div className="border rounded p-3 bg-gray-50 dark:bg-gray-800">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={changeUsername}
          onChange={() => {
            setChangeUsername(!changeUsername);
            setNewUsername('');
            setConfirmNewUsername('');
            setError('');
          }}
        />
        <span className="text-sm font-medium">Change username</span>
      </label>

      {changeUsername && (
        <div className="mt-3 space-y-2">
          <div>
            <label className="text-sm block mb-1">New username</label>
            <input
              placeholder="New username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="border p-2 rounded w-full"
              autoComplete="off"
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Confirm new username</label>
            <input
              placeholder="Confirm new username"
              value={confirmNewUsername}
              onChange={(e) => setConfirmNewUsername(e.target.value)}
              className="border p-2 rounded w-full"
              autoComplete="off"
            />
          </div>
          <div className="text-xs text-muted-foreground">
            If you change username, you'll be updating the account handle.
          </div>
        </div>
      )}
    </div>
  );

  const renderPasswordChange = () => (
    <div className="border rounded p-3 bg-gray-50 dark:bg-gray-800">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={changePassword}
          onChange={() => {
            setChangePassword(!changePassword);
            setNewPassword('');
            setConfirmNewPassword('');
            setCurrentPassword('');
            setError('');
          }}
        />
        <span className="text-sm font-medium">Change password</span>
      </label>

      {changePassword && (
        <div className="border rounded p-3 bg-gray-50 dark:bg-gray-800">
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

          <div className="flex gap-4 mt-3">
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
        </div>
      )}
      {!changePassword && (
        <div className="text-xs text-muted-foreground mt-2">
          Leave password blank to keep existing password.
        </div>
      )}
    </div>
  );

  return (
    <div className="flex max-w-lg items-center justify-center mx-auto">
      {loadingUser ? (
        <div className="p-6 text-center">Loading…</div>
      ) : fetchError ? (
        <div className="p-6 text-center">
          <div className="text-red-600 mb-2">Failed to load user: {fetchError}</div>
          <div className="flex gap-2 justify-center">
            <button onClick={retryFetchUser} className="px-3 py-2 bg-blue-600 text-white rounded">
              Retry
            </button>
            <button onClick={handleCancel} className="px-3 py-2 bg-gray-200 rounded">
              Close
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          {(showOnly === 'all' || showOnly === 'profile') && renderProfileFields()}

          {/* show username change section when requested (checkbox) */}
          {(showOnly === 'all' || showOnly === 'username') && isEdit && renderUsernameChange()}

          {/* show password fields depending on mode and showOnly */}
          {!isEdit && (showOnly === 'all' || showOnly === 'password') && (
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

          {isEdit && (showOnly === 'all' || showOnly === 'password') && renderPasswordChange()}

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          {/* Actions */}
          <div className="flex gap-3">
            {/* Primary: when showOnly restricts to a section, change label accordingly */}
            <button
              type="submit"
              className="w-1/2 bg-green-600 text-white py-2 rounded flex items-center justify-center"
              disabled={
                isSubmitting ||
                checkingUsername ||
                usernameInvalid ||
                (!isEdit &&
                  (showOnly === 'password'
                    ? form.password !== form.confirmPassword
                    : showOnly === 'all' && form.password !== form.confirmPassword)) ||
                (isEdit && changePassword && newPassword !== confirmNewPassword) ||
                (isEdit && changeUsername && newUsername !== confirmNewUsername)
              }
            >
              {isEdit
                ? showOnly === 'password'
                  ? 'Change password'
                  : showOnly === 'username'
                  ? 'Change username'
                  : 'Save changes'
                : 'Register'}
              {isSubmitting && (
                <span className="ml-2 flex">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className={`transition-all w-1.5 h-1.5 rounded-full mx-0.5 inline-block ${
                        registerDot === i ? 'bg-white' : 'bg-green-900 opacity-40'
                      }`}
                    ></span>
                  ))}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="w-1/2 bg-black text-white py-2 rounded"
              disabled={deleting}
            >
              Cancel
            </button>
          </div>

          {isEdit &&
            (userId ?? initialRef.current?.id) &&
            showOnly !== 'password' &&
            showOnly !== 'username' && (
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleDelete}
                  className="w-full bg-red-600 text-white py-2 rounded mt-2"
                  disabled={deleting}
                >
                  {deleting ? 'Deleting...' : 'Delete User'}
                </button>
              </div>
            )}
        </form>
      )}
    </div>
  );
}
