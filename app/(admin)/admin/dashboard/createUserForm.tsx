'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { generateBrowserPassword } from '@/lib/admin-password-change/browserPassword';

type Props = {
  mode?: 'create' | 'edit';
  userId?: string;
  initialData?: any;
  onSuccess?: (updatedUser?: any) => void;
  onCancel?: () => void;
  onDelete?: (userId: string) => void;
  hideUsernameField?: boolean;
  hidePasswordFields?: boolean;
  hideRoleField?: boolean;
  onlyPasswordFields?: boolean;
  requireCurrentPassword?: boolean;
  showDeleteAccount?: boolean;
};

const ROLE_OPTIONS = [
  { value: 'super', label: 'Super' },
  { value: 'admin', label: 'Admin' },
  { value: 'moderator', label: 'Moderator' },
  { value: 'beneficiary', label: 'Beneficiary' },
  { value: 'guest', label: 'Guest' },
] as const;

function browserGeneratePassword(length = 12) {
  // keep local alias that wraps our shared generator for compatibility with existing code
  return generateBrowserPassword(length);
}

export default function CreateUserForm({
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

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [generatedPwd, setGeneratedPwd] = useState<string | null>(null);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // visibility toggles for password inputs (eye icons)
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirmNew, setShowConfirmNew] = useState(false);
  const [showFormPassword, setShowFormPassword] = useState(false);
  const [showFormConfirm, setShowFormConfirm] = useState(false);

  const router = useRouter();
  const { data: session } = useSession();
  const sessionUserId = (session as any)?.user?.id ?? null;

  useEffect(() => {
    if (initialData) {
      setForm((f) => ({
        ...f,
        firstName: initialData.firstName ?? '',
        lastName: initialData.lastName ?? '',
        username: initialData.username ?? '',
        email: initialData.email ?? '',
        about: initialData.about ?? '',
        role: initialData.role ?? '',
      }));
    }
  }, [initialData]);

  const validatePasswordClient = (pwd: string) => {
    const reasons: string[] = [];
    if (!pwd || pwd.length < 8) reasons.push('must be at least 8 characters');
    if (!/[A-Z]/.test(pwd)) reasons.push('must include an uppercase letter');
    if (!/[a-z]/.test(pwd)) reasons.push('must include a lowercase letter');
    if (!/[0-9]/.test(pwd)) reasons.push('must include a number');
    if (!/[^A-Za-z0-9]/.test(pwd)) reasons.push('must include a special character');
    return { valid: reasons.length === 0, reasons };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  function handleGenerate() {
    setError('');
    setSuccess('');
    try {
      const pwd = browserGeneratePassword(12);
      setGeneratedPwd(pwd);
      setNewPassword(pwd);
      setConfirmNewPassword(pwd);
      setSuccess('Generated a password — review it and press Apply/Save.');
      setShowNew(false);
      setShowConfirmNew(false);
    } catch (err) {
      console.error('Password generation failed (browser fallback)', err);
      const pwd = browserGeneratePassword(12);
      setGeneratedPwd(pwd);
      setNewPassword(pwd);
      setConfirmNewPassword(pwd);
      setSuccess('Generated a password (fallback) — review it and press Apply/Save.');
      setShowNew(false);
      setShowConfirmNew(false);
    }
  }

  const copyGenerated = async () => {
    if (!generatedPwd) return;
    try {
      await navigator.clipboard.writeText(generatedPwd);
      setSuccess('Copied generated password to clipboard');
      setTimeout(() => setSuccess(''), 2000);
    } catch {
      setError('Failed to copy to clipboard');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    // Password-only flow
    if (onlyPasswordFields) {
      const pwdToUse = newPassword || generatedPwd || '';
      if (requireCurrentPassword && !currentPassword) {
        setError('Current password is required.');
        setIsSubmitting(false);
        return;
      }
      if (!pwdToUse || !confirmNewPassword) {
        setError('New password and confirmation are required.');
        setIsSubmitting(false);
        return;
      }
      if (pwdToUse !== confirmNewPassword) {
        setError('New passwords do not match.');
        setIsSubmitting(false);
        return;
      }
      const { valid, reasons } = validatePasswordClient(pwdToUse);
      if (!valid) {
        setError('Password requirements: ' + reasons.join(', '));
        setIsSubmitting(false);
        return;
      }

      try {
        // Call admin-force-change-password endpoint (PATCH)
        const payload: any = {
          newPassword: pwdToUse,
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
        };

        // If this is a self-change, include currentPassword; otherwise include actorId for auditing.
        if (requireCurrentPassword) {
          payload.currentPassword = currentPassword;
        } else {
          if (sessionUserId) payload.actorId = String(sessionUserId);
        }

        const res = await fetch(
          `/api/users/${encodeURIComponent(String(userId))}/admin-force-change-password`,
          {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          }
        );

        const data = await res.json().catch(() => null);
        if (!res.ok) {
          throw new Error((data && (data.error || data.message)) || `HTTP ${res.status}`);
        }

        setSuccess('Password updated.');
        if (onSuccess) onSuccess(data?.user ?? undefined);
      } catch (err: any) {
        setError(err?.message || 'Failed to update password');
      } finally {
        setIsSubmitting(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
        setGeneratedPwd(null);
      }
      return;
    }

    // Non-password flows (create or edit basic fields)
    // When hidePasswordFields is true, skip password fields
    if (!hidePasswordFields) {
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
      if (!hideUsernameField) formData.append('username', form.username);
      formData.append('firstName', form.firstName ?? '');
      formData.append('lastName', form.lastName ?? '');
      formData.append('email', form.email ?? '');
      formData.append('about', form.about ?? '');
      if (!hidePasswordFields && form.password) formData.append('password', form.password);
      if (!hideRoleField && form.role) formData.append('role', form.role);

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
      setForm((f) => ({ ...f, password: '', confirmPassword: '' }));
    }
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    else router.back();
  };

  // Reduced form width to match other forms (events/faqs), centered with adaptive background and border
  const formContainerClass =
    'space-y-4 w-full max-w-lg mx-auto border rounded-md p-6 transition-colors bg-white/95 dark:bg-gray-800/95 border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-lg';

  // Helper: build title for admin password force-change
  const targetFirst = initialRef.current?.firstName ?? initialData?.firstName ?? '';
  const targetLast = initialRef.current?.lastName ?? initialData?.lastName ?? '';
  const targetDisplayName = [targetFirst, targetLast].filter(Boolean).join(' ').trim();

  // OnlyPasswordFields rendering
  if (onlyPasswordFields) {
    return (
      <form onSubmit={handleSubmit} className={formContainerClass}>
        {/* Title */}
        <div>
          <h2 className="text-lg font-semibold">
            {`Admin Password Force-Change${targetDisplayName ? ' for ' + targetDisplayName : ''}`}
          </h2>
        </div>

        {/* Generator label + button on top */}
        <div className="flex items-center justify-between">
          <div>
            <label className="text-sm font-medium">Password generator</label>
            <div className="text-xs text-gray-600">Quickly generate a strong password</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleGenerate}
              className="px-3 py-1 bg-pink-600 text-white rounded text-sm"
            >
              Generate password
            </button>
            {generatedPwd && (
              <button
                type="button"
                onClick={copyGenerated}
                title="Copy generated password"
                className="px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded text-sm"
              >
                Copy
              </button>
            )}
          </div>
        </div>

        {/* Generated display */}
        {generatedPwd && (
          <div className="text-xs text-gray-700 dark:text-gray-200 break-words bg-gray-50 dark:bg-slate-700 p-2 rounded">
            <strong>Generated:</strong>{' '}
            <code className="select-all break-words">{generatedPwd}</code>
          </div>
        )}

        {/* Current password if required */}
        {requireCurrentPassword && (
          <div className="relative">
            <label className="text-sm block mb-1">Current password</label>
            <input
              type={showCurrent ? 'text' : 'password'}
              placeholder="Current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="border p-2 rounded w-full pr-10 bg-white dark:bg-gray-700"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowCurrent((s) => !s)}
              className="absolute right-2 top-8 text-gray-500"
              aria-label={showCurrent ? 'Hide current password' : 'Show current password'}
            >
              {showCurrent ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-6 0-10-7-10-7a18.84 18.84 0 012.59-3.68M6.2 6.2A9.956 9.956 0 0112 5c6 0 10 7 10 7a18.4 18.4 0 01-1.8 2.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 3l18 18"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        )}

        {/* New/Confirm on same row with eye toggles */}
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <label className="text-sm block mb-1">New password</label>
            <input
              type={showNew ? 'text' : 'password'}
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border p-2 rounded w-full pr-10 bg-white dark:bg-gray-700"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowNew((s) => !s)}
              className="absolute right-2 top-8 text-gray-500"
              aria-label={showNew ? 'Hide new password' : 'Show new password'}
            >
              {showNew ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-6 0-10-7-10-7a18.84 18.84 0 012.59-3.68M6.2 6.2A9.956 9.956 0 0112 5c6 0 10 7 10 7a18.4 18.4 0 01-1.8 2.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 3l18 18"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="flex-1 relative">
            <label className="text-sm block mb-1">Confirm new password</label>
            <input
              type={showConfirmNew ? 'text' : 'password'}
              placeholder="Confirm new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="border p-2 rounded w-full pr-10 bg-white dark:bg-gray-700"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmNew((s) => !s)}
              className="absolute right-2 top-8 text-gray-500"
              aria-label={showConfirmNew ? 'Hide confirm password' : 'Show confirm password'}
            >
              {showConfirmNew ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-6 0-10-7-10-7a18.84 18.84 0 012.59-3.68M6.2 6.2A9.956 9.956 0 0112 5c6 0 10 7 10 7a18.4 18.4 0 01-1.8 2.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 3l18 18"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-600">
            Your password must contain at least a number, an uppercase letter, a lowercase letter, a
            special character and be at least 8 characters long.
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-green-600 text-white py-2 rounded flex items-center justify-center"
            disabled={isSubmitting}
          >
            Apply password
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
      </form>
    );
  }

  // Normal full form rendering (reduced width to match other forms)
  return (
    <form onSubmit={handleSubmit} className={formContainerClass}>
      {!hideUsernameField && (
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="text-sm block mb-1">Username</label>
            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="border p-2 rounded w-full bg-white dark:bg-gray-700"
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
              className="border p-2 rounded w-full bg-white dark:bg-gray-700"
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
            className="border p-2 rounded w-full bg-white dark:bg-gray-700"
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
          <div className="w-1/2 relative">
            <label className="text-sm block mb-1">Password</label>
            <input
              type={showFormPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              value={form.password}
              className="border p-2 rounded w-full pr-10 bg-white dark:bg-gray-700"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowFormPassword((s) => !s)}
              className="absolute right-2 top-8 text-gray-500"
              aria-label={showFormPassword ? 'Hide password' : 'Show password'}
            >
              {showFormPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-6 0-10-7-10-7a18.84 18.84 0 012.59-3.68M6.2 6.2A9.956 9.956 0 0112 5c6 0 10 7 10 7a18.4 18.4 0 01-1.8 2.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 3l18 18"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="w-1/2 relative">
            <label className="text-sm block mb-1">Confirm Password</label>
            <input
              type={showFormConfirm ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              value={form.confirmPassword}
              className="border p-2 rounded w-full pr-10 bg-white dark:bg-gray-700"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowFormConfirm((s) => !s)}
              className="absolute right-2 top-8 text-gray-500"
              aria-label={showFormConfirm ? 'Hide confirm password' : 'Show confirm password'}
            >
              {showFormConfirm ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-6 0-10-7-10-7a18.84 18.84 0 012.59-3.68M6.2 6.2A9.956 9.956 0 0112 5c6 0 10 7 10 7a18.4 18.4 0 01-1.8 2.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 3l18 18"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">{success}</p>}

      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 bg-green-600 text-white py-2 rounded flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isEdit ? 'Save changes' : 'Register'}
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
  );
}
