'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const ENDPOINT_BASE = '/api/homepage';

/**
 * NOTE
 * - This file fragments the original single form into independent section forms.
 * - Each exported component updates only its own field(s) via PATCH /api/homepage/:id
 *   if an id is provided, or POST /api/homepage to create a record when no id exists.
 * - Each component accepts initial values and optional callbacks.
 *
 * Exported components:
 * - HeroSectionForm
 * - VisionSectionForm
 * - MissionSectionForm
 * - FocusSectionForm
 * - CoreValuesSectionForm
 *
 * For backward compatibility there's also a default export CreateHomepageForm that
 * renders all sections together (similar to the original combined form).
 */

/* Shared types */
type BaseProps = {
  id?: string | number | null; // existing record id (if editing)
  initial?: string;
  onSuccess?: (payload?: unknown) => void;
  onCancel?: () => void;
};

async function submitPartial(id: string | number | null | undefined, payload: Record<string, unknown>) {
  if (id) {
    const res = await fetch(`${ENDPOINT_BASE}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.text().catch(() => res.statusText);
      throw new Error(err || 'Failed to update');
    }
    return await res.json().catch(() => null);
  } else {
    // create new record with the provided partial payload
    const res = await fetch(ENDPOINT_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.text().catch(() => res.statusText);
      throw new Error(err || 'Failed to create');
    }
    return await res.json().catch(() => null);
  }
}

/* 1) Hero section form */
export function HeroSectionForm({ id, initial, onSuccess, onCancel }: BaseProps) {
  const [heroVideo, setHeroVideo] = useState(initial ?? '');
  const [loading, setLoading] = useState(false);

  useEffect(() => setHeroVideo(initial ?? ''), [initial]);

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setLoading(true);
    try {
      const payload = await submitPartial(id, { heroVideo });
      onSuccess?.(payload);
      // do not redirect here — caller decides
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to update hero video');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <div className="space-y-2">
        <Label htmlFor="heroVideo">Hero video (URL)</Label>
        <Input
          id="heroVideo"
          name="heroVideo"
          value={heroVideo}
          onChange={(e) => setHeroVideo(e.target.value)}
          placeholder="https://..."
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving…' : 'Save Hero'}
        </Button>
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}

/* 2) Vision */
export function VisionSectionForm({ id, initial, onSuccess, onCancel }: BaseProps) {
  const [vision, setVision] = useState(initial ?? '');
  const [loading, setLoading] = useState(false);

  useEffect(() => setVision(initial ?? ''), [initial]);

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setLoading(true);
    try {
      const payload = await submitPartial(id, { vision });
      onSuccess?.(payload);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to update vision');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <div className="space-y-2">
        <Label htmlFor="vision">Vision</Label>
        <textarea
          id="vision"
          name="vision"
          value={vision}
          onChange={(e) => setVision(e.target.value)}
          className="w-full border rounded-md p-2 min-h-[80px]"
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving…' : 'Save Vision'}
        </Button>
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}

/* 3) Mission */
export function MissionSectionForm({ id, initial, onSuccess, onCancel }: BaseProps) {
  const [mission, setMission] = useState(initial ?? '');
  const [loading, setLoading] = useState(false);

  useEffect(() => setMission(initial ?? ''), [initial]);

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setLoading(true);
    try {
      const payload = await submitPartial(id, { mission });
      onSuccess?.(payload);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to update mission');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <div className="space-y-2">
        <Label htmlFor="mission">Mission</Label>
        <textarea
          id="mission"
          name="mission"
          value={mission}
          onChange={(e) => setMission(e.target.value)}
          className="w-full border rounded-md p-2 min-h-[80px]"
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving…' : 'Save Mission'}
        </Button>
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}

/* 4) Focus */
export function FocusSectionForm({ id, initial, onSuccess, onCancel }: BaseProps) {
  const [focus, setFocus] = useState(initial ?? '');
  const [loading, setLoading] = useState(false);

  useEffect(() => setFocus(initial ?? ''), [initial]);

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setLoading(true);
    try {
      const payload = await submitPartial(id, { focus });
      onSuccess?.(payload);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to update focus');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <div className="space-y-2">
        <Label htmlFor="focus">Focus</Label>
        <textarea
          id="focus"
          name="focus"
          value={focus}
          onChange={(e) => setFocus(e.target.value)}
          className="w-full border rounded-md p-2 min-h-[80px]"
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving…' : 'Save Focus'}
        </Button>
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}

/* 5) Core values */
export function CoreValuesSectionForm({ id, initial, onSuccess, onCancel }: BaseProps) {
  const [coreValues, setCoreValues] = useState(initial ?? '');
  const [loading, setLoading] = useState(false);

  useEffect(() => setCoreValues(initial ?? ''), [initial]);

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setLoading(true);
    try {
      const payload = await submitPartial(id, { coreValues });
      onSuccess?.(payload);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to update core values');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <div className="space-y-2">
        <Label htmlFor="coreValues">Core Values (comma separated)</Label>
        <textarea
          id="coreValues"
          name="coreValues"
          value={coreValues}
          onChange={(e) => setCoreValues(e.target.value)}
          className="w-full border rounded-md p-2 min-h-[80px]"
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving…' : 'Save Core Values'}
        </Button>
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}

/* Default combined form for backward compatibility — renders all sub-forms and performs a full submit */
type CombinedProps = {
  mode?: 'create' | 'edit';
  initialData?: {
    id?: string | number;
    heroVideo?: string;
    vision?: string;
    mission?: string;
    focus?: string;
    coreValues?: string;
  };
  onSuccess?: () => void;
  onCancel?: () => void;
};

export default function CreateHomepageForm({
  mode = 'create',
  initialData,
  onSuccess,
  onCancel,
}: CombinedProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    heroVideo: initialData?.heroVideo ?? '',
    vision: initialData?.vision ?? '',
    mission: initialData?.mission ?? '',
    focus: initialData?.focus ?? '',
    coreValues: initialData?.coreValues ?? '',
  });
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setForm({
      heroVideo: initialData?.heroVideo ?? '',
      vision: initialData?.vision ?? '',
      mission: initialData?.mission ?? '',
      focus: initialData?.focus ?? '',
      coreValues: initialData?.coreValues ?? '',
    });
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!form.heroVideo || !form.vision || !form.mission || !form.focus || !form.coreValues) {
      alert('All fields are required.');
      setLoading(false);
      return;
    }

    try {
      let res;
      if (mode === 'edit' && initialData?.id) {
        res = await fetch(`${ENDPOINT_BASE}/${initialData.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch(ENDPOINT_BASE, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify(form),
        });
      }

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        const errorMessage = errorData?.error || `Failed to ${mode} homepage`;
        throw new Error(errorMessage);
      }

      onSuccess?.();
      router.refresh();
      router.push('/admin/dashboard');
    } catch {
      alert(`There was an error ${mode === 'edit' ? 'updating' : 'creating'} the homepage.`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!initialData?.id) return;
    if (
      !window.confirm(
        'Are you sure you want to delete this homepage content? This action cannot be undone.'
      )
    )
      return;

    setDeleting(true);
    try {
      const res = await fetch(`${ENDPOINT_BASE}/${initialData.id}`, {
        method: 'DELETE',
        credentials: 'same-origin',
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        const errorMessage = errorData?.error || 'Failed to delete homepage';
        throw new Error(errorMessage);
      }

      onSuccess?.();
      router.refresh();
      router.push('/admin/dashboard');
    } catch {
      alert('There was an error deleting the homepage content.');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto mt-4 space-y-6 p-6 bg-background rounded-xl shadow"
    >
      <div className="text-2xl font-bold mb-4 text-center">
        {mode === 'edit' ? 'Edit Home Page Content' : 'Create Home Page Content'}
      </div>

      {/* Hero */}
      <div className="space-y-2">
        <Label htmlFor="heroVideo">Hero Video (URL)</Label>
        <Input id="heroVideo" name="heroVideo" value={form.heroVideo} onChange={handleChange} />
      </div>

      {/* Vision */}
      <div className="space-y-2">
        <Label htmlFor="vision">Vision</Label>
        <textarea
          id="vision"
          name="vision"
          value={form.vision}
          onChange={handleChange}
          className="w-full border rounded-md p-2 min-h-[60px]"
        />
      </div>

      {/* Mission */}
      <div className="space-y-2">
        <Label htmlFor="mission">Mission</Label>
        <textarea
          id="mission"
          name="mission"
          value={form.mission}
          onChange={handleChange}
          className="w-full border rounded-md p-2 min-h-[60px]"
        />
      </div>

      {/* Focus */}
      <div className="space-y-2">
        <Label htmlFor="focus">Focus</Label>
        <textarea
          id="focus"
          name="focus"
          value={form.focus}
          onChange={handleChange}
          className="w-full border rounded-md p-2 min-h-[60px]"
        />
      </div>

      {/* Core values */}
      <div className="space-y-2">
        <Label htmlFor="coreValues">Core Values</Label>
        <textarea
          id="coreValues"
          name="coreValues"
          value={form.coreValues}
          onChange={handleChange}
          className="w-full border rounded-md p-2 min-h-[60px]"
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={loading} className="w-1/2">
          {loading
            ? mode === 'edit'
              ? 'Updating...'
              : 'Creating...'
            : mode === 'edit'
            ? 'Update'
            : 'Create'}
        </Button>
        <Button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="w-1/2"
          variant="outline"
        >
          Cancel
        </Button>
        {mode === 'edit' && (
          <Button
            type="button"
            onClick={handleDelete}
            disabled={deleting}
            className="w-1/2"
            variant="destructive"
          >
            {deleting ? 'Deleting...' : 'Delete'}
          </Button>
        )}
      </div>
    </form>
  );
}
