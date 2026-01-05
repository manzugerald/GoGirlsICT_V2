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
    about?: string | null;
    logo?: string | null;
    banner?: string | null;
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
          about: json?.about ?? '',
          logo: json?.logo ?? null,
          banner: json?.banner ?? null,
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

  // upload generic file (video/image) to server endpoint.
  // Accepts any file and expects the server to return JSON with a url property OR a path string starting with '/'
  async function uploadFile(file: File, acceptTypes: string[], maxSizeBytes: number) {
    setUploadError(null);
    if (!file) throw new Error('No file provided');
    if (file.size > maxSizeBytes)
      throw new Error(
        `File is too large. Max ${Math.round(maxSizeBytes / 1024 / 1024)}MB allowed.`
      );
    const ext = file.name?.split('.').pop()?.toLowerCase() ?? '';
    const mime = file.type || '';
    // if acceptTypes provided as extensions or mime prefixes, validate
    const ok = acceptTypes.some((t) =>
      t.startsWith('.') ? t.slice(1) === ext : mime.startsWith(t)
    );
    if (!ok) {
      throw new Error(`Unsupported file type. Allowed types: ${acceptTypes.join(', ')}`);
    }

    setUploading(true);
    setUploadProgress(0);

    return await new Promise<string>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', ENDPOINT_BASE + '/upload', true); // server should accept uploads at /api/homepage/upload
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
      // optionally indicate target folder on server: for logos store under /assets/images/logo
      // server can respect `targetPath` form field (implement server-side)
      xhr.send(form);
    });
  }

  async function uploadHeroVideoFile(file: File) {
    // video allowed
    return await uploadFile(file, ['video/', '.gif'], 50 * 1024 * 1024);
  }

  async function uploadImageFile(file: File) {
    // images only
    return await uploadFile(file, ['image/'], 5 * 1024 * 1024);
  }

  async function handleHeroFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUploadError(null);
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await uploadHeroVideoFile(file);
      setHomeData((d) => ({ ...(d ?? {}), heroVideo: url }));
      setUploadError(null);
    } catch (err: any) {
      setUploadError(err?.message || 'Upload failed');
    } finally {
      try {
        (e.target as HTMLInputElement).value = '';
      } catch {}
    }
  }

  async function handleBannerFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUploadError(null);
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await uploadImageFile(file);
      setHomeData((d) => ({ ...(d ?? {}), banner: url }));
      setUploadError(null);
    } catch (err: any) {
      setUploadError(err?.message || 'Upload failed');
    } finally {
      try {
        (e.target as HTMLInputElement).value = '';
      } catch {}
    }
  }

  async function handleLogoFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUploadError(null);
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await uploadImageFile(file);
      setHomeData((d) => ({ ...(d ?? {}), logo: url }));
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
      about: homeData?.about ?? '',
      logo: homeData?.logo ?? null,
      banner: homeData?.banner ?? null,
    };

    // basic validation (you can relax as needed)
    if (!dataToSend.heroVideo?.trim()) {
      setHomeError('Hero video is required');
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
        about: body?.about ?? dataToSend.about,
        logo: body?.logo ?? dataToSend.logo,
        banner: body?.banner ?? dataToSend.banner,
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
    <div className="w-full space-y-6">
      {/* Top action buttons */}
      <div className="flex gap-2 justify-end">
        <Button onClick={openHomeModal} disabled={homeLoading || homeSaving}>
          Edit Home Page Content
        </Button>
        <Button onClick={fetchHomeContent} variant="outline" disabled={homeLoading || homeSaving}>
          Refresh
        </Button>
      </div>

      <section className="space-y-4">
        {/* Hero video - full width card */}
        <div className="bg-background rounded-xl shadow p-0 overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Hero video</h3>
          </div>
          <div className="w-full">
            {homeLoading ? (
              <div className="p-6 text-muted-foreground">Loading hero…</div>
            ) : homeData?.heroVideo ? (
              <div className="w-full">
                <video controls className="w-full max-h-[56vh] bg-black">
                  <source src={homeData.heroVideo} />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="p-6 text-muted-foreground">No hero video set.</div>
            )}
            {homeData?.heroVideo && (
              <div className="px-4 py-3 text-xs text-muted-foreground break-all">
                {homeData.heroVideo}
              </div>
            )}
          </div>
        </div>

        {/* Banner - full width card */}
        <div className="bg-background rounded-xl shadow p-0 overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Site banner</h3>
          </div>
          <div className="w-full p-4">
            {homeLoading ? (
              <div className="text-muted-foreground">Loading banner…</div>
            ) : homeData?.banner ? (
              <img
                src={homeData.banner}
                alt="Site banner"
                className="w-full object-cover rounded"
              />
            ) : (
              <div className="text-muted-foreground">No banner set.</div>
            )}
          </div>
        </div>

        {/* Logo - full width card */}
        <div className="bg-background rounded-xl shadow p-0 overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Logo</h3>
          </div>
          <div className="w-full p-4 flex items-center gap-4">
            {homeLoading ? (
              <div className="text-muted-foreground">Loading logo…</div>
            ) : homeData?.logo ? (
              <img src={homeData.logo} alt="Site logo" className="h-24 object-contain" />
            ) : (
              <div className="text-muted-foreground">No logo set.</div>
            )}
            <div className="text-sm text-muted-foreground">
              Recommended: place logo files under <code>/public/assets/images/logo</code> on the
              server.
            </div>
          </div>
        </div>

        {/* About - full width card */}
        <div className="bg-background rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">About GoGirls ICT Initiative</h3>
          <div className="text-sm text-muted-foreground">{renderRich(homeData?.about ?? null)}</div>
        </div>

        {/* Values block (Vision/Mission/Focus/Core values) - full width card */}
        <div className="bg-background rounded-xl shadow p-4">
          <h3 className="font-semibold mb-3">Strategic statements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-transparent p-3 rounded">
              {renderValue('Vision', homeData?.vision ?? null)}
            </div>
            <div className="bg-transparent p-3 rounded">
              {renderValue('Mission', homeData?.mission ?? null)}
            </div>
            <div className="bg-transparent p-3 rounded">
              {renderValue('Focus', homeData?.focus ?? null)}
            </div>
            <div className="bg-transparent p-3 rounded">
              {renderValue('Core values', homeData?.coreValues ?? null)}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom action buttons (replicated) */}
      <div className="flex gap-2 justify-end">
        <Button onClick={openHomeModal} disabled={homeLoading || homeSaving}>
          Edit Home Page Content
        </Button>
        <Button onClick={fetchHomeContent} variant="outline" disabled={homeLoading || homeSaving}>
          Refresh
        </Button>
      </div>

      {/* Modal/dialog for edit */}
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
                </div>

                <div>
                  <label className="text-sm block mb-1">Banner image</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleBannerFileChange}
                      disabled={uploading || homeSaving}
                      className="text-sm"
                    />
                    {uploading && uploadProgress !== null && (
                      <div className="text-sm text-muted-foreground">
                        Uploading: {uploadProgress}%
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Recommended banner width: full-width
                  </div>
                </div>

                <div>
                  <label className="text-sm block mb-1">Logo image</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoFileChange}
                      disabled={uploading || homeSaving}
                      className="text-sm"
                    />
                    {uploading && uploadProgress !== null && (
                      <div className="text-sm text-muted-foreground">
                        Uploading: {uploadProgress}%
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Recommended: save logo under <code>/public/assets/images/logo</code>
                  </div>
                </div>

                <div>
                  <label className="text-sm block mb-1">About</label>
                  <textarea
                    value={homeData?.about ?? ''}
                    onChange={(e) => setHomeData((d) => ({ ...(d ?? {}), about: e.target.value }))}
                    className="w-full border p-2 rounded h-28"
                    placeholder="About the GoGirls ICT Initiative"
                  />
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
                    placeholder="Integrity, Inclusion, ..."
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
