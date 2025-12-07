'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

type HomePageData = {
  id?: string;
  heroVideo: string;
  vision: string;
  mission: string;
  focus: string;
  coreValues: string[] | string;
  createdAt?: string;
  updatedAt?: string;
};

export default function HomePageSection() {
  const { data: session } = useSession();
  const role = (session?.user?.role ?? 'guest') as
    | 'super'
    | 'admin'
    | 'moderator'
    | 'beneficiary'
    | 'guest';

  const [data, setData] = useState<HomePageData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Create dialog state
  const [openCreate, setOpenCreate] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // form state
  const [heroVideo, setHeroVideo] = useState('');
  const [vision, setVision] = useState('');
  const [mission, setMission] = useState('');
  const [focus, setFocus] = useState('');
  const [coreValuesText, setCoreValuesText] = useState(''); // newline-separated or JSON

  const fetchHome = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/homepage');
      if (!res.ok) {
        if (res.status === 404) {
          setData(null);
          return;
        }
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || `Failed to fetch homepage (${res.status})`);
      }
      const json = await res.json();
      setData(json);
    } catch (err: any) {
      console.error('Failed to fetch homepage', err);
      setError(err?.message || 'Failed to load homepage content');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHome();
  }, []);

  const openCreateDialog = () => {
    setSubmitError(null);
    // prefill form when editing existing entry
    setHeroVideo(data?.heroVideo ?? '');
    setVision(data?.vision ?? '');
    setMission(data?.mission ?? '');
    setFocus(data?.focus ?? '');
    if (data?.coreValues) {
      if (Array.isArray(data.coreValues)) setCoreValuesText(data.coreValues.join('\n'));
      else setCoreValuesText(String(data.coreValues));
    } else {
      setCoreValuesText('');
    }
    setOpenCreate(true);
  };

  const handleCreateSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setSubmitError(null);

    // basic validations
    if (!heroVideo || !vision || !mission || !focus || !coreValuesText) {
      setSubmitError('All fields are required.');
      return;
    }

    // prepare coreValues: try parse JSON, otherwise split by newline
    let coreValuesPayload: string[] | string = coreValuesText;
    const trimmed = coreValuesText.trim();
    if (
      (trimmed.startsWith('[') && trimmed.endsWith(']')) ||
      (trimmed.startsWith('"') && trimmed.endsWith('"'))
    ) {
      try {
        const parsed = JSON.parse(trimmed);
        coreValuesPayload = parsed;
      } catch {
        // fall back to newline parsing
        coreValuesPayload = trimmed
          .split(/\r?\n/)
          .map((s) => s.trim())
          .filter(Boolean);
      }
    } else {
      coreValuesPayload = trimmed
        .split(/\r?\n/)
        .map((s) => s.trim())
        .filter(Boolean);
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/homepage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          heroVideo: heroVideo.trim(),
          vision: vision.trim(),
          mission: mission.trim(),
          focus: focus.trim(),
          coreValues: coreValuesPayload,
        }),
      });

      const json = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error((json && json.error) || `Failed to save homepage (${res.status})`);
      }

      // Refresh view
      await fetchHome();
      setOpenCreate(false);
    } catch (err: any) {
      console.error('Failed to create/update homepage', err);
      setSubmitError(err?.message || 'Failed to save homepage');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-background rounded-xl shadow space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Homepage</h2>
        <div className="flex items-center gap-2">
          <Button onClick={fetchHome} disabled={loading}>
            Refresh
          </Button>
          {(role === 'super' || role === 'admin' || role === 'moderator') && (
            <Button onClick={openCreateDialog}>Create / Edit</Button>
          )}
        </div>
      </div>

      {loading && <div className="text-sm text-gray-600">Loading…</div>}
      {error && <div className="text-sm text-red-600">{error}</div>}

      {!loading && !error && !data && (
        <div className="text-sm text-muted-foreground">No homepage content found.</div>
      )}

      {!loading && !error && data && (
        <div className="space-y-4">
          <div>
            <div className="text-xs text-muted-foreground">Hero Video</div>
            <div className="text-sm">{data.heroVideo}</div>
          </div>

          <div>
            <div className="text-xs text-muted-foreground">Vision</div>
            <div className="text-sm">{data.vision}</div>
          </div>

          <div>
            <div className="text-xs text-muted-foreground">Mission</div>
            <div className="text-sm">{data.mission}</div>
          </div>

          <div>
            <div className="text-xs text-muted-foreground">Focus</div>
            <div className="text-sm">{data.focus}</div>
          </div>

          <div>
            <div className="text-xs text-muted-foreground">Core Values</div>
            <ul className="list-disc list-inside">
              {(Array.isArray(data.coreValues)
                ? data.coreValues
                : String(data.coreValues).split(/\r?\n/)
              ).map((v, idx) => (
                <li key={idx} className="text-sm">
                  {v}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-xs text-gray-500">
            {data.updatedAt ? `Updated: ${new Date(data.updatedAt).toLocaleString()}` : ''}
          </div>
        </div>
      )}

      {/* Create / Edit dialog */}
      <Dialog open={openCreate} onOpenChange={(val) => !val && setOpenCreate(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create / Edit Homepage</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleCreateSubmit} className="space-y-3 p-2">
            <div>
              <Label htmlFor="heroVideo">Hero Video (URL or embed)</Label>
              <Input
                id="heroVideo"
                value={heroVideo}
                onChange={(e) => setHeroVideo(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="vision">Vision</Label>
              <textarea
                id="vision"
                rows={3}
                className="w-full border rounded p-2"
                value={vision}
                onChange={(e) => setVision(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="mission">Mission</Label>
              <textarea
                id="mission"
                rows={3}
                className="w-full border rounded p-2"
                value={mission}
                onChange={(e) => setMission(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="focus">Focus</Label>
              <textarea
                id="focus"
                rows={2}
                className="w-full border rounded p-2"
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="coreValues">Core Values (newline separated or JSON array)</Label>
              <textarea
                id="coreValues"
                rows={4}
                className="w-full border rounded p-2"
                value={coreValuesText}
                onChange={(e) => setCoreValuesText(e.target.value)}
              />
            </div>

            {submitError && <div className="text-sm text-red-600">{submitError}</div>}

            <div className="flex gap-2 justify-end mt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpenCreate(false)}
                disabled={submitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={submitting}>
                {submitting ? 'Saving…' : 'Save'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
