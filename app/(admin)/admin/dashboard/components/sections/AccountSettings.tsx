'use client';

import React, { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import CreateUserForm from '@/app/(admin)/admin/dashboard/createUserForm';

// currentUser is the full /api/users/:id payload merged with (and falling
// back to) the NextAuth session user — two differently-shaped sources — so
// one deliberate loose alias here instead of scattering `any`.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AccountUserRecord = any;

export default function AccountSettings({
  currentUserId,
}: {
  currentUserId?: string | number | null;
}) {
  const { data: session, status } = useSession();
  const sessionUser = session?.user ?? null;
  const sessionUserId = sessionUser?.id ?? null;
  const userRole = sessionUser?.role ?? '';

  const id = currentUserId ?? sessionUserId;
  const loading = status === 'loading';
  const [currentUser, setCurrentUser] = useState<AccountUserRecord | null>(null);
  const displayUser = currentUser ?? sessionUser ?? null;

  // Modal User Edit/Profile/Password
  const [openEditModal, setOpenEditModal] = useState<'profile' | 'password' | null>(null);

  // Account Delete logic
  const [deleteAccountLoading, setDeleteAccountLoading] = useState(false);
  const [deleteAccountError, setDeleteAccountError] = useState<string | null>(null);
  const [deleteAccountSuccess, setDeleteAccountSuccess] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function loadUser() {
      if (!id) {
        setCurrentUser(null);
        return;
      }
      try {
        const res = await fetch(`/api/users/${encodeURIComponent(String(id))}`, {
          credentials: 'same-origin',
        });
        if (!res.ok) throw new Error(await res.text());
        const json = await res.json();
        if (!cancelled) setCurrentUser(json);
      } catch {
        if (!cancelled) setCurrentUser(null);
      }
    }
    loadUser();
    return () => {
      cancelled = true;
    };
  }, [id]);

  async function handleDeleteAccount() {
    setDeleteAccountError(null);
    setDeleteAccountSuccess(null);

    if (!id) {
      setDeleteAccountError('No user id available.');
      return;
    }

    if (!confirm('Are you sure you want to delete your account? This action is permanent!')) {
      return;
    }

    setDeleteAccountLoading(true);
    try {
      const role = displayUser?.role ?? sessionUser?.role ?? '';
      if (role === 'super') {
        const res = await fetch(`/api/users/${id}`, {
          method: 'DELETE',
          credentials: 'same-origin',
        });
        if (!res.ok) throw new Error((await res.text()) || 'Failed to delete account');
        await signOut({ callbackUrl: '/' }); // End session and redirect
        return;
      }

      // Others: submit a deletion request to admins
      const payload = {
        title: 'Account Deletion Request',
        content: `User ${
          displayUser?.firstName || displayUser?.lastName
            ? `${displayUser.firstName ?? ''} ${displayUser.lastName ?? ''}`.trim()
            : displayUser?.username ?? displayUser?.email
        } (id: ${id}) requests account deletion.`,
        messageCategory: 'request',
        allowResponses: true,
        senderEmail: displayUser?.email ?? undefined,
        meta: { type: 'account-deletion-request', requesterId: id },
      };

      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const txt = await res.text().catch(() => '');
        throw new Error(txt || 'Failed to submit deletion request');
      }
      setDeleteAccountSuccess('Deletion request submitted. Administrators have been notified.');
    } catch (err) {
      setDeleteAccountError(err instanceof Error ? err.message : 'Failed to process request');
    } finally {
      setDeleteAccountLoading(false);
    }
  }

  const renderAvatar = (user: AccountUserRecord) => {
    const img = user?.image;
    const first = user?.firstName ?? user?.name?.split(' ')?.[0] ?? '';
    const last = user?.lastName ?? (user?.name ? user.name.split(' ').slice(1).join(' ') : '');
    const initials = (first?.[0] ?? '') + ((last && last?.[0]) ?? user?.username?.[0] ?? '');
    if (img)
      return (
        <img
          src={img}
          alt={`${first} ${last}`.trim() || user?.username || 'avatar'}
          className="w-14 h-14 rounded-full object-cover"
        />
      );
    return (
      <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-lg font-semibold text-gray-700 dark:text-gray-100">
        {initials.toUpperCase() || 'U'}
      </div>
    );
  };
  const fullName = () => {
    const u = displayUser;
    if (!u) return '';
    if (u.firstName || u.lastName) return `${u.firstName ?? ''} ${u.lastName ?? ''}`.trim();
    return u.name ?? u.username ?? '';
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <section className="p-6 bg-background rounded-xl shadow transition-shadow duration-200 hover:shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <User className="h-8 w-8 text-primary-500" aria-hidden />
          <h2 className="font-semibold text-xl m-0">User Settings</h2>
        </div>
        <div className="flex items-start gap-4 mb-3">
          <div className="flex-shrink-0">{renderAvatar(displayUser)}</div>
          <div className="flex-1">
            <div className="text-base font-semibold">{fullName() || 'You'}</div>
            <div className="text-sm text-muted-foreground">
              {displayUser?.username ? <span className="mr-2">@{displayUser.username}</span> : null}
              <span>{displayUser?.email ?? 'no email'}</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              {displayUser?.about && String(displayUser.about).trim().length > 0
                ? displayUser.about
                : 'None'}
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Edit your profile or change your password. The form opens in a modal.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Button onClick={() => setOpenEditModal('profile')} disabled={!id || loading}>
            Edit my profile
          </Button>
          <Button
            onClick={() => setOpenEditModal('password')}
            disabled={!id || loading}
            variant="outline"
          >
            Change my password
          </Button>
          <Button
            onClick={handleDeleteAccount}
            disabled={!id || deleteAccountLoading}
            className="bg-pink-900 text-white hover:bg-pink-800"
          >
            {deleteAccountLoading ? 'Processing…' : 'Delete account'}
          </Button>
        </div>
        {deleteAccountError && (
          <div className="text-sm text-red-500 mt-2">{deleteAccountError}</div>
        )}
        {deleteAccountSuccess && (
          <div className="text-sm text-green-600 mt-2">{deleteAccountSuccess}</div>
        )}
      </section>

      {openEditModal !== null && id && (
        <div>
          {openEditModal === 'profile' ? (
            <CreateUserForm
              mode="edit"
              userId={String(id)}
              hideUsernameField
              hidePasswordFields
              hideRoleField
              onSuccess={async () => {
                setOpenEditModal(null);
                try {
                  const r = await fetch(`/api/users/${id}`, { credentials: 'same-origin' });
                  if (r.ok) setCurrentUser(await r.json());
                } catch {}
              }}
              onCancel={() => setOpenEditModal(null)}
            />
          ) : (
            <CreateUserForm
              mode="edit"
              userId={String(id)}
              onlyPasswordFields
              requireCurrentPassword={userRole !== 'super'}
              showDeleteAccount
              onSuccess={async () => {
                setOpenEditModal(null);
                try {
                  const r = await fetch(`/api/users/${id}`, { credentials: 'same-origin' });
                  if (r.ok) setCurrentUser(await r.json());
                } catch {}
              }}
              onCancel={() => setOpenEditModal(null)}
              onDelete={async () => {
                await handleDeleteAccount();
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
