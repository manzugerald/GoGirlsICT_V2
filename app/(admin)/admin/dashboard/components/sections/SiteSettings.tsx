'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Star, Target, Search, Gem } from 'lucide-react';

const ENDPOINT_BASE = '/api/homepage';

export default function SiteSettings() {
  const [homeLoading, setHomeLoading] = useState(false);
  const [homeSaving, setHomeSaving] = useState(false);
  const [homeError, setHomeError] = useState<string | null>(null);
  const [homeSuccess, setHomeSuccess] = useState<string | null>(null);
  const [homeData, setHomeData] = useState<{
    id?: number | string;
    heroVideo?: string;
    vision?: string;
    mission?: string;
    focus?: string;
    coreValues?: string;
  } | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const homeDataRef = useRef(homeData);
  useEffect(() => {
    homeDataRef.current = homeData;
  }, [homeData]);

  useEffect(() => {
    fetchHomeContent();
    function handleVisibility() {
      if (document.visibilityState === 'visible') fetchHomeContent();
    }
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchHomeContent() {
    setHomeLoading(true);
    setHomeError(null);
    try {
      const res = await fetch(ENDPOINT_BASE, { credentials: 'same-origin' });
      if (!res.ok) {
        if (res.status === 404) setHomeData(null);
        else throw new Error(await res.text());
      } else {
        const json = await res.json();
        setHomeData({
          id: json?.id,
          heroVideo: json?.heroVideo ?? '',
          vision: json?.vision ?? '',
          mission: json?.mission ?? '',
          focus: json?.focus ?? '',
          coreValues: json?.coreValues ?? '',
        });
      }
    } catch (err: any) {
      setHomeError(err?.message || 'Failed to load homepage content');
    } finally {
      setHomeLoading(false);
    }
  }

  const [homeModalOpen, setHomeModalOpen] = useState(false);

  function openHomeModal() {
    setHomeError(null);
    setHomeSuccess(null);
    setHomeModalOpen(true);
    fetchHomeContent();
  }
  function closeHomeModal() {
    setHomeModalOpen(false);
    setHomeError(null);
    setHomeSuccess(null);
    setUploadError(null);
    setUploadProgress(null);
  }

  async function uploadHeroVideoFile(file: File) {
    setUploadError(null);
    const maxSizeBytes = 50 * 1024 * 1024;
    if (file.size > maxSizeBytes) throw new Error('File is too large. Max 50MB allowed.');
    const ext = file.name?.split('.').pop()?.toLowerCase() ?? '';
    if (!['mov', 'mp4', 'gif'].includes(ext))
      throw new Error('Unsupported file extension. Allowed: .mov, .mp4, .gif');
    if (!file.type.startsWith('video/') && ext !== 'gif')
      throw new Error('Unsupported file type. Please select a video or gif file.');
    setUploading(true);
    setUploadProgress(0);

    return await new Promise<string>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', ENDPOINT_BASE, true);
      xhr.withCredentials = true;
      xhr.timeout = 120000;
      xhr.upload.onprogress = (ev) => {
        if (ev.lengthComputable) setUploadProgress(Math.round((ev.loaded / ev.total) * 100));
      };
      xhr.onload = () => {
        setUploading(false);
        setUploadProgress(null);
        const status = xhr.status;
        const respText = xhr.responseText ?? '';
        let json: any = null;
        try {
          json = respText ? JSON.parse(respText) : null;
        } catch {
          json = null;
        }
        if (status >= 200 && status < 300) {
          if (json?.url) return resolve(json.url);
          if (json?.heroVideo) return resolve(json.heroVideo);
          if (typeof respText === 'string' && respText.startsWith('/')) return resolve(respText);
          return reject(new Error('Upload succeeded but server did not return a usable url.'));
        } else {
          return reject(
            new Error(json?.error || json?.message || respText || `Upload failed (${status})`)
          );
        }
      };
      xhr.onerror = () => {
        setUploading(false);
        setUploadProgress(null);
        return reject(new Error('Network error during upload.'));
      };
      xhr.ontimeout = () => {
        setUploading(false);
        setUploadProgress(null);
        reject(new Error('Upload timed out.'));
      };
      const form = new FormData();
      form.append('file', file, file.name);
      form.append('ownerId', String('')); // ownerId not required for site settings upload
      xhr.send(form);
    });
  }

  async function handleHeroFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUploadError(null);
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const videoUrl = await uploadHeroVideoFile(file);
      setHomeData((d) => ({ ...(d ?? {}), heroVideo: videoUrl }));
      setUploadError(null);
    } catch (err: any) {
      setUploadError(err?.message || 'Upload failed');
    } finally {
      try {
        (e.target as HTMLInputElement).value = '';
      } catch {}
    }
  }

  async function saveHomeContent(e?: React.FormEvent) {
    if (e) e.preventDefault();
    setHomeError(null);
    setHomeSuccess(null);
    const dataToSend = {
      heroVideo: homeData?.heroVideo ?? '',
      vision: homeData?.vision ?? '',
      mission: homeData?.mission ?? '',
      focus: homeData?.focus ?? '',
      coreValues: homeData?.coreValues ?? '',
    };
    if (
      !dataToSend.heroVideo.trim() ||
      !dataToSend.vision.trim() ||
      !dataToSend.mission.trim() ||
      !dataToSend.focus.trim() ||
      !dataToSend.coreValues.trim()
    ) {
      setHomeError('All fields are required');
      return;
    }

    setHomeSaving(true);
    try {
      let res: Response;
      if (homeData?.id)
        res = await fetch(`${ENDPOINT_BASE}/${homeData.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify(dataToSend),
        });
      else
        res = await fetch(ENDPOINT_BASE, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify(dataToSend),
        });
      const text = await res.text().catch(() => '');
      let payload: any = null;
      try {
        payload = text ? JSON.parse(text) : null;
      } catch {
        payload = null;
      }
      if (!res.ok) throw new Error(payload?.error || payload?.message || text || 'Save failed');
      const body = payload ?? null;
      setHomeData({
        id: body?.id ?? homeData?.id,
        heroVideo: body?.heroVideo ?? dataToSend.heroVideo,
        vision: body?.vision ?? dataToSend.vision,
        mission: body?.mission ?? dataToSend.mission,
        focus: body?.focus ?? dataToSend.focus,
        coreValues: body?.coreValues ?? dataToSend.coreValues,
      });
      setHomeSuccess('Homepage content saved');
      setTimeout(() => {
        setHomeSuccess(null);
        setHomeModalOpen(false);
      }, 900);
    } catch (err: any) {
      setHomeError(err?.message || 'Failed to save homepage content');
      try {
        fetchHomeContent();
      } catch {}
    } finally {
      setHomeSaving(false);
    }
  }

  async function deleteHomeContent() {
    if (!homeData?.id) return;
    if (!confirm('Are you sure you want to delete the homepage content?')) return;
    setHomeSaving(true);
    setHomeError(null);
    setHomeData(null);
    try {
      const res = await fetch(`${ENDPOINT_BASE}/${homeData.id}`, {
        method: 'DELETE',
        credentials: 'same-origin',
      });
      const payload = await res.json().catch(() => null);
      if (!res.ok) throw new Error(payload?.error || `Delete failed`);
      setHomeSuccess('Homepage content deleted');
      setTimeout(() => {
        setHomeSuccess(null);
        setHomeModalOpen(false);
      }, 900);
    } catch (err: any) {
      setHomeError(err?.message || 'Failed to delete homepage content');
      try {
        fetchHomeContent();
      } catch {}
    } finally {
      setHomeSaving(false);
    }
  }

  const getFieldIcon = (label: 'Vision' | 'Mission' | 'Focus' | 'Core values') => {
    const base = 'h-6 w-6';
    switch (label) {
      case 'Vision':
        return <Star className={`${base} text-primary-400`} aria-hidden />;
      case 'Mission':
        return <Target className={`${base} text-primary-500`} aria-hidden />;
      case 'Focus':
        return <Search className={`${base} text-primary-600`} aria-hidden />;
      case 'Core values':
        return <Gem className={`${base} text-primary-700`} aria-hidden />;
      default:
        return <Star className={`${base} text-primary-500`} aria-hidden />;
    }
  };
  const renderRich = (text?: string | null) => {
    if (!text) return <span className="text-muted-foreground">— not set —</span>;
    const paragraphs = String(text).split(/\n\s*\n/);
    return (
      <div>
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-2 text-sm leading-relaxed">
            {p.split(/\n/).map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                {idx < p.split(/\n/).length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        ))}
      </div>
    );
  };
  const renderValue = (
    label: 'Vision' | 'Mission' | 'Focus' | 'Core values',
    value?: string | null
  ) => (
    <div className="mb-4">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">{getFieldIcon(label)}</div>
        <div className="text-lg font-semibold">{label}</div>
      </div>
      <div className="text-sm mt-2">{renderRich(value)}</div>
    </div>
  );

  const getVideoNameFromUrl = (url?: string | null) => {
    if (!url) return '';
    try {
      const pathPart = url.split('?')[0].split('#')[0];
      const last = pathPart.split('/').filter(Boolean).pop() ?? '';
      return last.replace(/\.[^/.]+$/, '');
    } catch {
      return '';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <section className="p-6 bg-background rounded-xl shadow transition-shadow duration-200 hover:shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="font-semibold text-xl m-0">Home Page Content</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Preview homepage content. Click "Edit homepage content" to upload a hero video or modify
          fields.
        </p>
        {homeLoading ? (
          <div className="text-sm text-muted-foreground">Loading homepage content…</div>
        ) : homeError ? (
          <div className="text-sm text-red-500">{homeError}</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-muted-foreground mb-1">Hero video URL / preview</div>
              {homeData?.heroVideo ? (
                <div className="mb-3">
                  <video controls className="w-full max-h-64 rounded">
                    <source src={homeData.heroVideo} />
                    Your browser does not support the video tag.
                  </video>
                  <div className="text-sm mt-2 text-muted-foreground break-all">
                    {homeData.heroVideo}
                  </div>
                  {getVideoNameFromUrl(homeData.heroVideo) ? (
                    <div className="text-sm font-medium mt-1">
                      {getVideoNameFromUrl(homeData.heroVideo)}
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="mb-3 text-sm text-muted-foreground">No hero video set.</div>
              )}
            </div>
            <div>
              {renderValue('Vision', homeData?.vision ?? null)}
              {renderValue('Mission', homeData?.mission ?? null)}
              {renderValue('Focus', homeData?.focus ?? null)}
              {renderValue('Core values', homeData?.coreValues ?? null)}
            </div>
          </div>
        )}
        <div className="flex gap-2 mt-3">
          <Button onClick={openHomeModal} disabled={homeLoading || homeSaving}>
            Edit homepage content
          </Button>
          <Button onClick={fetchHomeContent} variant="outline" disabled={homeLoading || homeSaving}>
            Refresh
          </Button>
          <Button onClick={saveHomeContent} disabled={homeSaving || uploading} variant="secondary">
            {homeSaving ? 'Saving…' : 'Save homepage'}
          </Button>
        </div>
      </section>

      <Dialog open={homeModalOpen} onOpenChange={(val) => !val && closeHomeModal()}>
        <DialogContent className="max-w-3xl w-full max-h-[85vh] p-0 sm:rounded-lg overflow-hidden">
          <DialogHeader>
            <DialogTitle className="px-4 py-3 border-b">
              {homeData?.id ? 'Edit homepage content' : 'Create homepage content'}
            </DialogTitle>
          </DialogHeader>
          <div className="p-4 overflow-y-auto max-h-[72vh]">
            {homeLoading ? (
              <div className="p-6 text-center">Loading…</div>
            ) : (
              <form onSubmit={saveHomeContent} className="space-y-4">
                {homeError && <div className="text-sm text-red-500">{homeError}</div>}
                {homeSuccess && <div className="text-sm text-green-600">{homeSuccess}</div>}
                <div>
                  <label className="text-sm block mb-1">Hero video URL</label>
                  <input
                    type="text"
                    value={homeData?.heroVideo ?? ''}
                    onChange={(e) =>
                      setHomeData((d) => ({ ...(d ?? {}), heroVideo: e.target.value }))
                    }
                    className="w-full border p-2 rounded"
                    placeholder="https://... (or upload a file below)"
                  />
                </div>
                <div>
                  <label className="text-sm block mb-1">Upload hero video (.mov, .mp4, .gif)</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      accept=".mov, .mp4, .gif, video/*, image/gif"
                      onChange={handleHeroFileChange}
                      disabled={uploading || homeSaving}
                      className="text-sm"
                    />
                    {uploading && uploadProgress !== null && (
                      <div className="text-sm text-muted-foreground">
                        Uploading: {uploadProgress}%
                      </div>
                    )}
                  </div>
                  {uploadError && <div className="text-sm text-red-500 mt-1">{uploadError}</div>}
                  <div className="text-xs text-muted-foreground mt-1">Max file size: 50MB.</div>
                </div>
                <div>
                  <label className="text-sm block mb-1">Vision</label>
                  <textarea
                    value={homeData?.vision ?? ''}
                    onChange={(e) => setHomeData((d) => ({ ...(d ?? {}), vision: e.target.value }))}
                    className="w-full border p-2 rounded h-24"
                  />
                </div>
                <div>
                  <label className="text-sm block mb-1">Mission</label>
                  <textarea
                    value={homeData?.mission ?? ''}
                    onChange={(e) =>
                      setHomeData((d) => ({ ...(d ?? {}), mission: e.target.value }))
                    }
                    className="w-full border p-2 rounded h-24"
                  />
                </div>
                <div>
                  <label className="text-sm block mb-1">Focus</label>
                  <textarea
                    value={homeData?.focus ?? ''}
                    onChange={(e) => setHomeData((d) => ({ ...(d ?? {}), focus: e.target.value }))}
                    className="w-full border p-2 rounded h-20"
                  />
                </div>
                <div>
                  <label className="text-sm block mb-1">Core values (comma separated)</label>
                  <input
                    type="text"
                    value={homeData?.coreValues ?? ''}
                    onChange={(e) =>
                      setHomeData((d) => ({ ...(d ?? {}), coreValues: e.target.value }))
                    }
                    className="w-full border p-2 rounded"
                    placeholder="Integrity, Inclusion, ... "
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" disabled={homeSaving}>
                    {homeSaving ? 'Saving…' : homeData?.id ? 'Save changes' : 'Create content'}
                  </Button>
                  <Button variant="outline" onClick={closeHomeModal} disabled={homeSaving}>
                    Cancel
                  </Button>
                  {homeData?.id && (
                    <Button variant="destructive" onClick={deleteHomeContent} disabled={homeSaving}>
                      Delete
                    </Button>
                  )}
                </div>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
