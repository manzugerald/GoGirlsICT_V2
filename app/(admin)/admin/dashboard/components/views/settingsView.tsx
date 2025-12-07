'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

/**
 * SettingsView
 * Simple settings/profile editor. If isEditing is true, displays a save button.
 * Expects `data` to contain user/profile fields (id, name, email, phone, etc).
 */
export default function SettingsView({
  data,
  onClose,
  isEditing,
}: {
  data: any;
  onClose?: () => void;
  isEditing?: boolean;
}) {
  const [form, setForm] = useState({
    id: data?.id ?? '',
    firstName: data?.firstName ?? data?.name ?? '',
    lastName: data?.lastName ?? '',
    email: data?.email ?? '',
    phone: data?.phone ?? '',
    username: data?.username ?? '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setForm({
      id: data?.id ?? '',
      firstName: data?.firstName ?? data?.name ?? '',
      lastName: data?.lastName ?? '',
      email: data?.email ?? '',
      phone: data?.phone ?? '',
      username: data?.username ?? '',
    });
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      // Call a user update endpoint; adjust path as needed for your API
      const res = await fetch(`/api/users/${form.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          username: form.username,
        }),
      });
      if (!res.ok) {
        const txt = await res.text().catch(() => '');
        throw new Error(txt || 'Failed to update profile');
      }
      if (onClose) onClose();
    } catch (err) {
      alert('Failed to update profile: ' + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-lg font-semibold mb-4">My Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" value={form.email} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" value={form.phone} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="username">Username</Label>
          <Input id="username" name="username" value={form.username} onChange={handleChange} />
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <Button onClick={onClose} variant="outline">
          Close
        </Button>
        {isEditing && (
          <Button onClick={handleSave} disabled={loading} className="bg-[#9f004d]">
            {loading ? 'Saving...' : 'Save Profile'}
          </Button>
        )}
      </div>
    </div>
  );
}
