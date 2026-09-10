'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import type { ResourcePosterType } from '@/lib/resourcePosterMeta';

// Manages the single, whole-page poster image for one page — see
// lib/resourcePosterMeta.ts and /api/posters/[type]. Not tied to any one
// entry within that page (e.g. one podcast episode, one project).
export default function ResourcePosterManager({
  title,
  description,
  type,
}: {
  title: string;
  description: string;
  type: ResourcePosterType;
}) {
  const endpoint = `/api/posters/${type}`;
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(endpoint, { credentials: 'same-origin' });
      if (!res.ok) throw new Error(await res.text());
      const json = await res.json();
      setUrl(json?.url ?? null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load poster');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    setSaving(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch(endpoint, { method: 'POST', body: formData, credentials: 'same-origin' });
      const payload = await res.json().catch(() => null);
      if (!res.ok) throw new Error(payload?.error || 'Upload failed');
      setUrl(payload?.url ?? null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setSaving(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  }

  async function handleRemove() {
    if (!confirm(`Remove the ${title.toLowerCase()}?`)) return;
    setError(null);
    setSaving(true);
    try {
      const res = await fetch(endpoint, { method: 'DELETE', credentials: 'same-origin' });
      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        throw new Error(payload?.error || 'Failed to remove poster');
      }
      setUrl(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to remove poster');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="border border-input rounded-lg p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-xs text-muted-foreground mb-3">{description}</p>

      {loading ? (
        <div className="text-sm text-muted-foreground">Loading…</div>
      ) : url ? (
        <div className="mb-3">
          <img src={url} alt={title} className="w-full max-h-40 object-cover rounded-lg border" />
        </div>
      ) : (
        <div className="mb-3 text-sm text-muted-foreground">No poster set — the page falls back to its default gradient.</div>
      )}

      {error && <div className="text-sm text-red-500 mb-2">{error}</div>}

      <div className="flex flex-wrap items-center gap-2">
        <input
          ref={fileInputRef}
          type="file"
          accept=".png,.jpg,.jpeg"
          onChange={handleFileChange}
          disabled={saving}
          className="text-sm"
        />
        {url && (
          <Button type="button" size="sm" variant="destructive" onClick={handleRemove} disabled={saving}>
            Remove
          </Button>
        )}
      </div>
    </div>
  );
}
