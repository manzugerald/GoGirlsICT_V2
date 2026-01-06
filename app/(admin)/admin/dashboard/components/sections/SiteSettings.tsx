'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Star, Target, Search, Gem } from 'lucide-react';

const ENDPOINT_BASE = '/api/homepage';

function ordinal(n: number) {
  const s = ['th', 'st', 'nd', 'rd'],
    v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

function formatDateTime(iso?: string | null) {
  if (!iso) return 'Never';
  try {
    const d = new Date(iso);
    const month = d.toLocaleString('default', { month: 'short' }); // "Jan"
    const day = d.getDate();
    const year = d.getFullYear();
    const time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // locale-aware hh:mm
    return `${month} ${day}${ordinal(day)} ${year}, at ${time}`;
  } catch {
    return iso;
  }
}

type EditSectionKey =
  | 'hero'
  | 'banner'
  | 'identity' // siteName + logo + about
  | 'vision'
  | 'mission'
  | 'focus'
  | 'coreValues'
  | null;

export default function SiteSettings() {
  const [homeLoading, setHomeLoading] = useState(false);
  const [homeSaving, setHomeSaving] = useState(false);
  const [homeError, setHomeError] = useState<string | null>(null);
  const [homeSuccess, setHomeSuccess] = useState<string | null>(null);
  const [homeData, setHomeData] = useState<{
    id?: number | string;
    siteName?: string | null;
    heroVideo?: string;
    vision?: string;
    mission?: string;
    focus?: string;
    coreValues?: string;
    about?: string | null;
    logo?: string | null;
    banner?: string | null;
    createdAt?: string;
    updatedAt?: string | null;
  } | null>(null);

  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // modal state
  const [homeModalOpen, setHomeModalOpen] = useState(false);
  const [editSection, setEditSection] = useState<EditSectionKey>(null);

  // refs
  const heroUrlRef = useRef<HTMLInputElement | null>(null);
  const siteNameRef = useRef<HTMLInputElement | null>(null);
  const aboutRef = useRef<HTMLTextAreaElement | null>(null);
  const visionRef = useRef<HTMLTextAreaElement | null>(null);
  const missionRef = useRef<HTMLTextAreaElement | null>(null);
  const focusRef = useRef<HTMLTextAreaElement | null>(null);
  const coreValuesRef = useRef<HTMLInputElement | null>(null);
  const bannerFileRef = useRef<HTMLInputElement | null>(null);
  const logoFileRef = useRef<HTMLInputElement | null>(null);

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
          siteName: json?.siteName ?? null,
          heroVideo: json?.heroVideo ?? '',
          vision: json?.vision ?? '',
          mission: json?.mission ?? '',
          focus: json?.focus ?? '',
          coreValues: json?.coreValues ?? '',
          about: json?.about ?? '',
          logo: json?.logo ?? null,
          banner: json?.banner ?? null,
          createdAt: json?.createdAt ?? undefined,
          updatedAt: json?.updatedAt ?? null,
        });
      }
    } catch (err: any) {
      setHomeError(err?.message || 'Failed to load homepage content');
    } finally {
      setHomeLoading(false);
    }
  }

  function openHomeModalFor(section: EditSectionKey) {
    setEditSection(section);
    setHomeModalOpen(true);
    setHomeError(null);
    setHomeSuccess(null);
    fetchHomeContent();
  }
  function closeHomeModal() {
    setHomeModalOpen(false);
    setEditSection(null);
    setHomeError(null);
    setHomeSuccess(null);
    setUploadError(null);
    setUploadProgress(null);
  }

  async function uploadFile(file: File, acceptTypes: string[], maxSizeBytes: number) {
    setUploadError(null);
    if (!file) throw new Error('No file provided');
    if (file.size > maxSizeBytes)
      throw new Error(
        `File is too large. Max ${Math.round(maxSizeBytes / 1024 / 1024)}MB allowed.`
      );
    const ext = file.name?.split('.').pop()?.toLowerCase() ?? '';
    const mime = file.type || '';
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
      xhr.open('POST', ENDPOINT_BASE + '/upload', true);
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
      xhr.send(form);
    });
  }

  async function uploadHeroVideoFile(file: File) {
    return await uploadFile(file, ['video/', '.gif'], 50 * 1024 * 1024);
  }
  async function uploadImageFile(file: File) {
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

  // submit only the fields for the currently edited section
  async function submitSection() {
    if (!editSection) return;
    setHomeError(null);
    setHomeSuccess(null);
    setHomeSaving(true);
    try {
      const payload: Record<string, any> = {};
      switch (editSection) {
        case 'hero':
          payload.heroVideo = homeData?.heroVideo ?? '';
          break;
        case 'banner':
          payload.banner = homeData?.banner ?? null;
          break;
        case 'identity':
          payload.siteName = homeData?.siteName ?? null;
          payload.logo = homeData?.logo ?? null;
          payload.about = homeData?.about ?? null;
          break;
        case 'vision':
          payload.vision = homeData?.vision ?? '';
          break;
        case 'mission':
          payload.mission = homeData?.mission ?? '';
          break;
        case 'focus':
          payload.focus = homeData?.focus ?? '';
          break;
        case 'coreValues':
          payload.coreValues = homeData?.coreValues ?? '';
          break;
        default:
          break;
      }

      let res: Response;
      if (homeData?.id)
        res = await fetch(`${ENDPOINT_BASE}/${homeData.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify(payload),
        });
      else
        res = await fetch(ENDPOINT_BASE, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify(payload),
        });

      const text = await res.text().catch(() => '');
      let payloadResp: any = null;
      try {
        payloadResp = text ? JSON.parse(text) : null;
      } catch {
        payloadResp = null;
      }
      if (!res.ok)
        throw new Error(payloadResp?.error || payloadResp?.message || text || 'Save failed');

      // merge updated values into local state
      const body = payloadResp ?? payload;
      setHomeData((prev) => ({ ...(prev ?? {}), ...(body ?? {}) }));
      setHomeSuccess('Content saved');
      setTimeout(() => {
        setHomeSuccess(null);
        setHomeModalOpen(false);
        setEditSection(null);
      }, 700);
    } catch (err: any) {
      setHomeError(err?.message || 'Failed to save section');
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
        setEditSection(null);
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

  const renderStatCard = (label: string, content: React.ReactNode, onEdit?: () => void) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 w-full">
      <div className="flex items-start justify-between">
        <div className="text-lg font-semibold mb-2">{label}</div>
        {onEdit && (
          <div>
            <Button onClick={onEdit} variant="outline">
              Edit Content
            </Button>
          </div>
        )}
      </div>
      <div>{content}</div>
    </div>
  );

  const renderSmallCard = (
    label: 'Vision' | 'Mission' | 'Focus' | 'Core values',
    value?: string | null,
    onEdit?: () => void
  ) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm w-full">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">{getFieldIcon(label)}</div>
          <div>
            <div className="text-base font-semibold">{label}</div>
            <div className="text-sm mt-2">{renderRich(value)}</div>
          </div>
        </div>
        {onEdit && (
          <div>
            <Button onClick={onEdit} variant="outline" size="sm">
              Edit Content
            </Button>
          </div>
        )}
      </div>
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

  const aboutTitle = homeData?.siteName
    ? `About ${homeData.siteName}`
    : 'About (Site name not set)';

  // focus modal field when editing a specific section
  useEffect(() => {
    if (!homeModalOpen || !editSection) return;
    const id = setTimeout(() => {
      const map: Record<string, any> = {
        hero: heroUrlRef.current,
        identity: siteNameRef.current ?? aboutRef.current,
        banner: bannerFileRef.current,
        vision: visionRef.current,
        mission: missionRef.current,
        focus: focusRef.current,
        coreValues: coreValuesRef.current,
      };
      const el = map[editSection];
      if (el) {
        try {
          if (typeof el.focus === 'function') el.focus();
          if (typeof el.scrollIntoView === 'function')
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } catch {}
      }
    }, 160);
    return () => clearTimeout(id);
  }, [homeModalOpen, editSection]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Top action row: only Refresh + Updated on */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-2">
          <Button onClick={fetchHomeContent} variant="outline" disabled={homeLoading || homeSaving}>
            Refresh
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          Updated on: {formatDateTime(homeData?.updatedAt ?? null)}
        </div>
      </div>

      {/* Hero - wrapped in its own container */}
      <section
        className="bg-background rounded-xl shadow overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="p-4 border-b flex items-center justify-between">
          <h3 id="hero-heading" className="font-semibold m-0">
            Hero video
          </h3>
          <Button onClick={() => openHomeModalFor('hero')} variant="outline">
            Edit Content
          </Button>
        </div>

        <div
          className="container mx-auto px-4 py-4"
          role="region"
          aria-label="Hero video container"
        >
          {homeLoading ? (
            <div className="p-6 text-muted-foreground">Loading hero…</div>
          ) : homeData?.heroVideo ? (
            <div className="w-full">
              <video controls className="w-full h-auto max-h-[64vh] bg-black">
                <source src={homeData.heroVideo} />
              </video>
              <div className="mt-3 text-xs text-muted-foreground break-all">
                {homeData.heroVideo}
              </div>
              {getVideoNameFromUrl(homeData.heroVideo) && (
                <div className="mt-1 text-sm font-medium">
                  {getVideoNameFromUrl(homeData.heroVideo)}
                </div>
              )}
            </div>
          ) : (
            <div className="p-6 text-muted-foreground">No hero video set.</div>
          )}
        </div>
      </section>

      {/* Banner - wrapped in its own container */}
      <section
        className="bg-background rounded-xl shadow overflow-hidden"
        aria-labelledby="banner-heading"
      >
        <div className="p-4 border-b flex items-center justify-between">
          <h3 id="banner-heading" className="font-semibold m-0">
            Site banner
          </h3>
          <Button onClick={() => openHomeModalFor('banner')} variant="outline">
            Edit Content
          </Button>
        </div>

        <div
          className="container mx-auto px-4 py-4"
          role="region"
          aria-label="Site banner container"
        >
          {homeLoading ? (
            <div className="p-6 text-muted-foreground">Loading banner…</div>
          ) : homeData?.banner ? (
            <div className="w-full overflow-hidden rounded">
              <div className="w-full h-[240px] md:h-[360px] overflow-hidden rounded">
                <img
                  src={homeData.banner}
                  alt="Site banner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="p-6 text-muted-foreground">No banner set.</div>
          )}
        </div>
      </section>

      {/* Site Identity */}
      <div className="bg-background rounded-xl shadow p-4">
        <div className="text-lg font-semibold mb-4">Site Identity</div>
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm w-full">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-6">
                <div>
                  {homeLoading ? (
                    <div className="text-muted-foreground">Loading logo…</div>
                  ) : homeData?.logo ? (
                    <img
                      src={homeData.logo}
                      alt="Site logo"
                      className="h-24 object-contain rounded"
                    />
                  ) : (
                    <div className="text-muted-foreground h-24 w-24 flex items-center justify-center border rounded">
                      No logo
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">
                    Recommended: store logo files under <code>/public/assets/images/logo</code>.
                  </div>
                  <div className="text-lg font-semibold">
                    {homeData?.siteName ?? (
                      <span className="text-muted-foreground">Site name not set</span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <Button onClick={() => openHomeModalFor('identity')} variant="outline">
                  Edit Content
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm w-full">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-base font-semibold mb-2">{aboutTitle}</div>
                <div className="text-sm">{renderRich(homeData?.about ?? null)}</div>
              </div>
              <div>
                <Button onClick={() => openHomeModalFor('identity')} variant="outline">
                  Edit Content
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic statements */}
      <div className="bg-background rounded-xl shadow p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-semibold">Strategic statements</div>
        </div>
        <div className="space-y-4">
          {renderSmallCard('Vision', homeData?.vision ?? null, () => openHomeModalFor('vision'))}
          {renderSmallCard('Mission', homeData?.mission ?? null, () => openHomeModalFor('mission'))}
          {renderSmallCard('Focus', homeData?.focus ?? null, () => openHomeModalFor('focus'))}
          {renderSmallCard('Core values', homeData?.coreValues ?? null, () =>
            openHomeModalFor('coreValues')
          )}
        </div>
      </div>

      {/* Bottom actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-2">
          <Button onClick={fetchHomeContent} variant="outline" disabled={homeLoading || homeSaving}>
            Refresh
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          Updated on: {formatDateTime(homeData?.updatedAt ?? null)}
        </div>
      </div>

      {/* Modal: conditional content based on editSection */}
      <Dialog open={homeModalOpen} onOpenChange={(val) => !val && closeHomeModal()}>
        <DialogContent className="max-w-3xl w-full max-h-[85vh] p-0 sm:rounded-lg overflow-hidden">
          <DialogHeader>
            <DialogTitle className="px-4 py-3 border-b">
              {homeData?.id ? 'Edit content' : 'Create content'}
            </DialogTitle>
          </DialogHeader>

          <div className="p-4 overflow-y-auto max-h-[72vh] space-y-4">
            {homeLoading ? (
              <div className="p-6 text-center">Loading…</div>
            ) : editSection === 'hero' ? (
              <>
                <div>
                  <label className="text-sm block mb-1">Hero video URL</label>
                  <input
                    ref={heroUrlRef}
                    type="text"
                    value={homeData?.heroVideo ?? ''}
                    onChange={(e) =>
                      setHomeData((d) => ({ ...(d ?? {}), heroVideo: e.target.value }))
                    }
                    className="w-full border p-2 rounded"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="text-sm block mb-1">Upload hero video (.mov, .mp4, .gif)</label>
                  <input
                    type="file"
                    accept=".mov,.mp4,.gif,video/*,image/gif"
                    onChange={handleHeroFileChange}
                    disabled={uploading || homeSaving}
                  />
                  {uploading && uploadProgress !== null && (
                    <div className="text-sm text-muted-foreground">
                      Uploading: {uploadProgress}%
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button onClick={submitSection} disabled={homeSaving}>
                    {homeSaving ? 'Saving…' : 'Save'}
                  </Button>
                  <Button variant="outline" onClick={closeHomeModal} disabled={homeSaving}>
                    Cancel
                  </Button>
                </div>
              </>
            ) : editSection === 'banner' ? (
              <>
                <div>
                  <label className="text-sm block mb-1">Banner image</label>
                  <input
                    ref={bannerFileRef}
                    type="file"
                    accept="image/*"
                    onChange={handleBannerFileChange}
                    disabled={uploading || homeSaving}
                  />
                  {uploading && uploadProgress !== null && (
                    <div className="text-sm text-muted-foreground">
                      Uploading: {uploadProgress}%
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button onClick={submitSection} disabled={homeSaving}>
                    {homeSaving ? 'Saving…' : 'Save'}
                  </Button>
                  <Button variant="outline" onClick={closeHomeModal} disabled={homeSaving}>
                    Cancel
                  </Button>
                </div>
              </>
            ) : editSection === 'identity' ? (
              <>
                <div>
                  <label className="text-sm block mb-1">Site name</label>
                  <input
                    ref={siteNameRef}
                    type="text"
                    value={homeData?.siteName ?? ''}
                    onChange={(e) =>
                      setHomeData((d) => ({ ...(d ?? {}), siteName: e.target.value }))
                    }
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="text-sm block mb-1">Logo image</label>
                  <input
                    ref={logoFileRef}
                    type="file"
                    accept="image/*"
                    onChange={handleLogoFileChange}
                    disabled={uploading || homeSaving}
                  />
                  {uploading && uploadProgress !== null && (
                    <div className="text-sm text-muted-foreground">
                      Uploading: {uploadProgress}%
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-sm block mb-1">About</label>
                  <textarea
                    ref={aboutRef}
                    className="w-full border p-2 rounded h-28"
                    value={homeData?.about ?? ''}
                    onChange={(e) => setHomeData((d) => ({ ...(d ?? {}), about: e.target.value }))}
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={submitSection} disabled={homeSaving}>
                    {homeSaving ? 'Saving…' : 'Save'}
                  </Button>
                  <Button variant="outline" onClick={closeHomeModal} disabled={homeSaving}>
                    Cancel
                  </Button>
                </div>
              </>
            ) : editSection === 'vision' ||
              editSection === 'mission' ||
              editSection === 'focus' ||
              editSection === 'coreValues' ? (
              <>
                {/* Strategic statements grouped */}
                <div>
                  <label className="text-sm block mb-1">Vision</label>
                  <textarea
                    ref={visionRef}
                    className="w-full border p-2 rounded h-24"
                    value={homeData?.vision ?? ''}
                    onChange={(e) => setHomeData((d) => ({ ...(d ?? {}), vision: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="text-sm block mb-1">Mission</label>
                  <textarea
                    ref={missionRef}
                    className="w-full border p-2 rounded h-24"
                    value={homeData?.mission ?? ''}
                    onChange={(e) =>
                      setHomeData((d) => ({ ...(d ?? {}), mission: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label className="text-sm block mb-1">Focus</label>
                  <textarea
                    ref={focusRef}
                    className="w-full border p-2 rounded h-20"
                    value={homeData?.focus ?? ''}
                    onChange={(e) => setHomeData((d) => ({ ...(d ?? {}), focus: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="text-sm block mb-1">Core values (comma separated)</label>
                  <input
                    ref={coreValuesRef}
                    type="text"
                    className="w-full border p-2 rounded"
                    value={homeData?.coreValues ?? ''}
                    onChange={(e) =>
                      setHomeData((d) => ({ ...(d ?? {}), coreValues: e.target.value }))
                    }
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={submitSection} disabled={homeSaving}>
                    {homeSaving ? 'Saving…' : 'Save all'}
                  </Button>
                  <Button variant="outline" onClick={closeHomeModal} disabled={homeSaving}>
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <div className="p-4 text-sm text-muted-foreground">Select a section to edit.</div>
            )}
            {homeError && <div className="text-sm text-red-500 mt-2">{homeError}</div>}
            {homeSuccess && <div className="text-sm text-green-600 mt-2">{homeSuccess}</div>}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
