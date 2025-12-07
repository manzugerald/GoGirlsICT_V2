'use client';

import React, { useEffect, useState } from 'react';
import UsersSection from '../sections/UsersSection';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import CreateOrEditUserForm from '@/app/(admin)/admin/dashboard/createUserForm';

type UserRow = {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  role: string | null;
  image?: string | null;
  createdAt?: string | null;
};

export default function UserView() {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // create/edit-user dialog state
  const [openCreate, setOpenCreate] = useState(false);
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  // edit state
  const [editUser, setEditUser] = useState<UserRow | null>(null);
  const [openEdit, setOpenEdit] = useState(false);

  // form state for create (kept minimal; create form component handles full flow)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/users');
      if (!res.ok) {
        const body = await res.text().catch(() => '');
        throw new Error(body || `Failed to fetch users (${res.status})`);
      }
      const json = await res.json();
      setUsers(Array.isArray(json) ? json : []);
    } catch (err: any) {
      console.error('Failed to load users', err);
      setError(err?.message || 'Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleOpenCreate = () => {
    setCreateError(null);
    setFirstName('');
    setLastName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setImageFile(null);
    setOpenCreate(true);
  };

  const handleCreateSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setCreateError(null);

    if (!firstName || !lastName || !username || !email || !password || !imageFile) {
      setCreateError('All fields including image are required');
      return;
    }

    setCreating(true);
    try {
      const form = new FormData();
      form.append('firstName', firstName);
      form.append('lastName', lastName);
      form.append('username', username);
      form.append('email', email);
      form.append('password', password);
      form.append('image', imageFile);

      const res = await fetch('/api/users', {
        method: 'POST',
        body: form,
      });

      const json = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error((json && json.error) || `Failed to create user (${res.status})`);
      }

      // refresh list after successful create
      await fetchUsers();
      setOpenCreate(false);
    } catch (err: any) {
      console.error('Create user failed', err);
      setCreateError(err?.message || 'Failed to create user');
    } finally {
      setCreating(false);
    }
  };

  const handleEdit = (u: UserRow) => {
    setEditUser(u);
    setOpenEdit(true);
  };

  const handleEditSuccess = async () => {
    setOpenEdit(false);
    setEditUser(null);
    await fetchUsers();
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Users</h1>
        <div className="flex items-center gap-2">
          <Button type="button" onClick={fetchUsers} disabled={loading}>
            Refresh
          </Button>
          <Button type="button" onClick={handleOpenCreate}>
            Add User
          </Button>
        </div>
      </div>

      <UsersSection
        paginatedData={users}
        page={1}
        rowsPerPage={100}
        handleEdit={(u) => handleEdit(u)}
        handleView={(u) => {
          // view details: quick alert fallback (could open a details view instead)
          alert(
            `User: ${u.username}\nName: ${u.firstName ?? ''} ${u.lastName ?? ''}\nEmail: ${
              u.email ?? ''
            }`
          );
        }}
        handleDelete={(id) => {
          if (!confirm('Delete user? This cannot be undone.')) return;
          fetch(`/api/users/${encodeURIComponent(String(id))}`, { method: 'DELETE' })
            .then((res) => {
              if (!res.ok) throw new Error('Delete failed');
              return res.json();
            })
            .then(() => fetchUsers())
            .catch((err) => alert(`Delete failed: ${err?.message ?? err}`));
        }}
        messagesCountMap={{}}
        responsesCountMap={{}}
        currentUserRole={'super'}
        TableActions={() => null}
        onAddMessage={() => {}}
      />

      {/* Create user dialog */}
      <Dialog open={openCreate} onOpenChange={(val) => !val && setOpenCreate(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new user</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleCreateSubmit} className="space-y-3 p-2">
            <div>
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="image">Image</Label>
              <input
                id="image"
                type="file"
                accept=".png,.jpg,.jpeg"
                onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)}
              />
            </div>

            {createError && <div className="text-sm text-red-600">{createError}</div>}

            <div className="flex gap-2 justify-end mt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpenCreate(false)}
                disabled={creating}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={creating}>
                {creating ? 'Creating…' : 'Create User'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit user dialog (reuses create/edit form component) */}
      <Dialog open={openEdit} onOpenChange={(val) => !val && setOpenEdit(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit user</DialogTitle>
          </DialogHeader>

          {editUser && (
            <div className="p-4 max-w-3xl">
              <CreateOrEditUserForm
                mode="edit"
                userId={editUser.id}
                initialData={editUser}
                onSuccess={handleEditSuccess}
                onCancel={() => {
                  setOpenEdit(false);
                  setEditUser(null);
                }}
                onDelete={(id) => {
                  // propagate delete and refresh
                  fetch(`/api/users/${encodeURIComponent(String(id))}`, { method: 'DELETE' })
                    .then((res) => {
                      if (!res.ok) throw new Error('Delete failed');
                      return res.json();
                    })
                    .then(() => {
                      setOpenEdit(false);
                      setEditUser(null);
                      fetchUsers();
                    })
                    .catch((err) => alert(`Delete failed: ${err?.message ?? err}`));
                }}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {error && <div className="text-sm text-red-600 mt-4">{error}</div>}
    </div>
  );
}
