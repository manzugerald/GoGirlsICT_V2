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
    const month = d.toLocaleString('default', { month: 'short' });
    const day = d.getDate();
    const year = d.getFullYear();
    const time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${month} ${day}${ordinal(day)} ${year}, at ${time}`;
  } catch {
    return iso;
  }
}

type EditSectionKey =
  | 'create' // full-create form when no record exists
  | 'hero'
  | 'banner'
  | 'logo' // Site Identity: Logo
  | 'siteName' // Site Identity: Site Name (separate card)
  | 'about' // Site Identity: About
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

  // refs for focusing inputs inside modal
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

  // open modal for exactly one section
  // if no homepage exists, open full create form (editSection = 'create')
  async function openHomeModalFor(section: EditSectionKey) {
    setHomeError(null);
    setHomeSuccess(null);
    await fetchHomeContent();
    // if no record, show create form so user can create required fields
    if (!homeData?.id) {
      setEditSection('create');
    } else {
      setEditSection(section);
    }
    setHomeModalOpen(true);
  }
  function closeHomeModal() {
    setHomeModalOpen(false);
    setEditSection(null);
    setHomeError(null);
    setHomeSuccess(null);
    setUploadError(null);
    setUploadProgress(null);
  }

  // Persist an uploaded file URL into the DB for the given field (if a homepage record exists).
  async function persistUploadedFieldToDB(
    targetField: 'heroVideo' | 'banner' | 'logo',
    url: string
  ) {
    if (!homeData) return;
    if (!homeData.id) {
      // No DB record yet — keep preview and inform user to create the homepage.
      setHomeError(
        'File uploaded and previewed locally. Create the homepage to persist this asset.'
      );
      setTimeout(() => setHomeError(null), 4000);
      return;
    }

    try {
      const payload: Record<string, any> = {};
      payload[targetField] = url;

      const res = await fetch(`${ENDPOINT_BASE}/${homeData.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || 'Failed to persist uploaded file to database');
      }

      const updated = await res.json();
      setHomeData((prev) => ({ ...(prev ?? {}), ...(updated ?? {}) }));
      setHomeSuccess('Upload saved to database');
      setTimeout(() => setHomeSuccess(null), 2000);
    } catch (err: any) {
      setUploadError(err?.message || 'Failed to persist uploaded file');
      // keep preview locally so user can still see upload
      setHomeData((d) => ({ ...(d ?? {}), [targetField]: url }));
    }
  }

  // Upload file to server endpoint (POST if no record, PATCH if record exists).
  // Server may return { url } (upload-only) or the updated homepage record.
  async function uploadFileToServer(file: File, target: 'hero' | 'banner' | 'logo') {
    if (!file) throw new Error('No file');
    setUploadError(null);
    setUploading(true);
    setUploadProgress(0);
    try {
      const form = new FormData();
      form.append('file', file);
      form.append('target', target);

      const url = homeData?.id ? `${ENDPOINT_BASE}/${homeData.id}` : ENDPOINT_BASE;
      const method = homeData?.id ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        body: form,
        credentials: 'same-origin',
      });

      setUploadProgress(100);

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || 'Upload failed');
      }

      const json = await res.json();

      // If server returned an upload-only { url } (no DB record created), use that url as preview.
      if (json?.url && !json?.id) {
        const returnedUrl: string = json.url;
        const field = target === 'logo' ? 'logo' : target === 'banner' ? 'banner' : 'heroVideo';
        setHomeData((prev) => ({ ...(prev ?? {}), [field]: returnedUrl }));

        // If we already have a DB record, persist the field to DB (PATCH)
        if (homeData?.id) {
          await persistUploadedFieldToDB(field as any, returnedUrl);
        } else {
          setHomeError(
            'Uploaded file is previewed locally. Create the homepage to persist the file.'
          );
          setTimeout(() => setHomeError(null), 3500);
        }
        return returnedUrl;
      }

      // If server returns the updated record (common for PATCH), merge it in and extract the relevant field
      if (json && typeof json === 'object') {
        setHomeData((prev) => ({ ...(prev ?? {}), ...(json ?? {}) }));
        if (json.logo) return json.logo;
        if (json.banner) return json.banner;
        if (json.heroVideo) return json.heroVideo;
      }

      return '';
    } finally {
      setUploading(false);
      setUploadProgress(null);
    }
  }

  // Updated file change handlers: after upload, ensure DB persist if possible and update preview
  async function handleHeroFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await uploadFileToServer(file, 'hero');
      if (url && homeData?.id) await persistUploadedFieldToDB('heroVideo', url);
      setHomeData((d) => ({ ...(d ?? {}), heroVideo: url }));
    } catch (err: any) {
      setUploadError(err?.message || 'Upload failed');
    } finally {
      try {
        (e.target as HTMLInputElement).value = '';
      } catch {}
    }
  }

  async function handleBannerFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await uploadFileToServer(file, 'banner');
      if (url && homeData?.id) await persistUploadedFieldToDB('banner', url);
      setHomeData((d) => ({ ...(d ?? {}), banner: url }));
    } catch (err: any) {
      setUploadError(err?.message || 'Upload failed');
    } finally {
      try {
        (e.target as HTMLInputElement).value = '';
      } catch {}
    }
  }

  async function handleLogoFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await uploadFileToServer(file, 'logo');
      if (url && homeData?.id) await persistUploadedFieldToDB('logo', url);
      setHomeData((d) => ({ ...(d ?? {}), logo: url }));
    } catch (err: any) {
      setUploadError(err?.message || 'Upload failed');
    } finally {
      try {
        (e.target as HTMLInputElement).value = '';
      } catch {}
    }
  }

  // submit only the field(s) intended for the opened modal, or create full record if editSection === 'create'
  async function submitSection() {
    if (!editSection) return;
    setHomeError(null);
    setHomeSuccess(null);
    setHomeSaving(true);

    try {
      // CREATE PATH (when no homepage exists and admin is creating)
      if (editSection === 'create') {
        // Build full payload - server requires heroVideo, vision, mission, focus, coreValues
        const payload = {
          heroVideo: homeData?.heroVideo ?? '',
          vision: homeData?.vision ?? '',
          mission: homeData?.mission ?? '',
          focus: homeData?.focus ?? '',
          coreValues: homeData?.coreValues ?? '',
          about: homeData?.about ?? null,
          logo: homeData?.logo ?? null,
          banner: homeData?.banner ?? null,
          siteName: homeData?.siteName ?? null,
        };

        // basic validation: required core fields must be non-empty
        if (
          !payload.heroVideo ||
          !payload.vision ||
          !payload.mission ||
          !payload.focus ||
          !payload.coreValues
        ) {
          setHomeError(
            'Please provide hero video, vision, mission, focus and core values to create the homepage.'
          );
          setHomeSaving(false);
          return;
        }

        const res = await fetch(ENDPOINT_BASE, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const text = await res.text().catch(() => '');
          throw new Error(text || 'Create failed');
        }
        const created = await res.json();
        setHomeData(created);
        setHomeSuccess('Homepage created');
        setTimeout(() => {
          setHomeSuccess(null);
          setHomeModalOpen(false);
          setEditSection(null);
        }, 700);
        setHomeSaving(false);
        return;
      }

      // UPDATE PATH
      if (!homeData?.id) {
        setHomeError('No homepage record exists. Please create one first.');
        setHomeSaving(false);
        return;
      }

      const payload: Record<string, any> = {};

      switch (editSection) {
        case 'hero':
          payload.heroVideo = homeData.heroVideo ?? '';
          break;
        case 'banner':
          payload.banner = homeData.banner ?? null;
          break;
        case 'logo':
          payload.logo = homeData.logo ?? null;
          break;
        case 'siteName':
          payload.siteName = homeData.siteName ?? null;
          break;
        case 'about':
          payload.about = homeData.about ?? null;
          break;
        case 'vision':
          payload.vision = homeData.vision ?? '';
          break;
        case 'mission':
          payload.mission = homeData.mission ?? '';
          break;
        case 'focus':
          payload.focus = homeData.focus ?? '';
          break;
        case 'coreValues':
          payload.coreValues = homeData.coreValues ?? '';
          break;
        default:
          break;
      }

      // Remove undefined keys so Prisma receives only explicit changes
      for (const k of Object.keys(payload)) {
        if (payload[k] === undefined) delete payload[k];
      }

      if (Object.keys(payload).length === 0) {
        setHomeError('Nothing to save');
        setHomeSaving(false);
        return;
      }

      const res = await fetch(`${ENDPOINT_BASE}/${homeData.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || 'Failed to save');
      }

      const updated = await res.json();
      setHomeData((prev) => ({ ...(prev ?? {}), ...(updated ?? {}) }));
      setHomeSuccess('Saved');
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

  // renderCard now uses a header background that adapts to light/dark themes.
  // Light theme: bg-gray-50 with dark text; Dark theme: bg-gray-800 with light text.
  const renderCard = (title: string, content: React.ReactNode, onEdit?: () => void) => (
    <section className="bg-background rounded-xl shadow overflow-hidden">
      <div
        className={
          // header: padded row with themed background + border
          'p-4 border-b flex items-center justify-between ' +
          // light / dark background and text
          'bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-100'
        }
      >
        <h3 className="font-semibold m-0">{title}</h3>
        {onEdit && (
          <div>
            <Button onClick={onEdit} variant="outline">
              Edit Content
            </Button>
          </div>
        )}
      </div>
      <div className="px-4 py-4">{content}</div>
    </section>
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

  // focus the appropriate control when modal opens
  useEffect(() => {
    if (!homeModalOpen || !editSection) return;
    const t = setTimeout(() => {
      const map: Record<string, any> = {
        hero: heroUrlRef.current,
        banner: bannerFileRef.current,
        logo: logoFileRef.current,
        siteName: siteNameRef.current,
        about: aboutRef.current,
        vision: visionRef.current,
        mission: missionRef.current,
        focus: focusRef.current,
        coreValues: coreValuesRef.current,
      };
      const el = map[editSection];
      if (el?.focus) el.focus();
    }, 120);
    return () => clearTimeout(t);
  }, [homeModalOpen, editSection]);

  // Build image URL with cache-buster so that newly uploaded files appear immediately
  function imageUrlWithCacheBuster(url?: string | null) {
    if (!url) return undefined;
    // ensure url starts with '/'
    const path = url.startsWith('/') ? url : `/${url}`;
    // use updatedAt if available to avoid stale cache; fallback to timestamp
    const stamp = homeData?.updatedAt ? new Date(homeData.updatedAt).getTime() : Date.now();
    return `${path}?t=${stamp}`;
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Actions */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <Button onClick={fetchHomeContent} variant="outline" disabled={homeLoading || homeSaving}>
            Refresh
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">
          Updated on: {formatDateTime(homeData?.updatedAt ?? null)}
        </div>
      </div>

      {/* Individual parent cards */}
      {renderCard(
        'Hero',
        homeLoading ? (
          <div className="p-6 text-muted-foreground">Loading…</div>
        ) : homeData?.heroVideo ? (
          <>
            <video controls className="w-full h-auto max-h-[56vh] bg-black">
              <source src={homeData.heroVideo} />
            </video>
            <div className="mt-3 text-xs text-muted-foreground break-all">{homeData.heroVideo}</div>
            {getVideoNameFromUrl(homeData.heroVideo) && (
              <div className="mt-1 text-sm font-medium">
                {getVideoNameFromUrl(homeData.heroVideo)}
              </div>
            )}
          </>
        ) : (
          <div className="p-6 text-muted-foreground">No hero video set.</div>
        ),
        () => openHomeModalFor('hero')
      )}

      {renderCard(
        'Site banner',
        homeLoading ? (
          <div className="p-6 text-muted-foreground">Loading…</div>
        ) : homeData?.banner ? (
          <div className="w-full h-[240px] md:h-[360px] overflow-hidden rounded">
            <img
              src={imageUrlWithCacheBuster(homeData?.banner)}
              alt="Site banner"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="p-6 text-muted-foreground">No banner set.</div>
        ),
        () => openHomeModalFor('banner')
      )}

      {renderCard(
        'Site Identity: Site Name',
        homeLoading ? (
          <div className="p-6 text-muted-foreground">Loading…</div>
        ) : (
          <div className="text-lg font-semibold">
            {homeData?.siteName ?? <span className="text-muted-foreground">Site name not set</span>}
          </div>
        ),
        () => openHomeModalFor('siteName')
      )}

      {renderCard(
        // About card title now includes the site name (reads from siteName)
        homeLoading
          ? 'Site Identity: About'
          : `Site Identity: About — ${homeData?.siteName ?? 'Site name not set'}`,
        homeLoading ? (
          <div className="p-6 text-muted-foreground">Loading…</div>
        ) : (
          <div className="text-sm">{renderRich(homeData?.about ?? null)}</div>
        ),
        () => openHomeModalFor('about')
      )}

      {renderCard(
        'Site Identity: Logo',
        homeLoading ? (
          <div className="p-6 text-muted-foreground">Loading…</div>
        ) : (
          <div className="flex items-center gap-6">
            <div>
              {homeData?.logo ? (
                <img
                  src={imageUrlWithCacheBuster(homeData?.logo)}
                  alt="logo"
                  className="h-24 object-contain rounded"
                />
              ) : (
                <div className="h-24 w-24 flex items-center justify-center border rounded text-muted-foreground">
                  No logo
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="text-sm text-muted-foreground mb-2">
                Recommended: /public/assets/images/logo
              </div>
            </div>
          </div>
        ),
        () => openHomeModalFor('logo')
      )}

      {renderCard(
        'Strategic Statement: Vision',
        homeLoading ? (
          <div className="p-6 text-muted-foreground">Loading…</div>
        ) : (
          <div className="text-sm">{renderRich(homeData?.vision ?? null)}</div>
        ),
        () => openHomeModalFor('vision')
      )}

      {renderCard(
        'Strategic Statement: Mission',
        homeLoading ? (
          <div className="p-6 text-muted-foreground">Loading…</div>
        ) : (
          <div className="text-sm">{renderRich(homeData?.mission ?? null)}</div>
        ),
        () => openHomeModalFor('mission')
      )}

      {renderCard(
        'Strategic Statement: Focus',
        homeLoading ? (
          <div className="p-6 text-muted-foreground">Loading…</div>
        ) : (
          <div className="text-sm">{renderRich(homeData?.focus ?? null)}</div>
        ),
        () => openHomeModalFor('focus')
      )}

      {renderCard(
        'Strategic Statement: Core values',
        homeLoading ? (
          <div className="p-6 text-muted-foreground">Loading…</div>
        ) : (
          <div className="text-sm">{renderRich(homeData?.coreValues ?? null)}</div>
        ),
        () => openHomeModalFor('coreValues')
      )}

      {/* Modal */}
      <Dialog
        open={homeModalOpen}
        onOpenChange={(val) => (val ? setHomeModalOpen(true) : closeHomeModal())}
      >
        <DialogContent className="max-w-3xl w-full max-h-[85vh] p-0 sm:rounded-lg overflow-hidden">
          <DialogHeader>
            <DialogTitle className="px-4 py-3 border-b">
              {editSection === 'create' ? 'Create homepage' : 'Edit content'}
            </DialogTitle>
          </DialogHeader>

          <div className="p-4 overflow-y-auto max-h-[72vh] space-y-4">
            {homeLoading && <div className="p-6 text-center">Loading…</div>}

            {/* CREATE: show full form so admin can create a homepage record */}
            {editSection === 'create' && !homeLoading && (
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
                    accept=".mov,.mp4,.gif,video/*"
                    onChange={handleHeroFileChange}
                    disabled={uploading || homeSaving}
                  />
                </div>

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
                  <label className="text-sm block mb-1">About</label>
                  <textarea
                    ref={aboutRef}
                    className="w-full border p-2 rounded h-28"
                    value={homeData?.about ?? ''}
                    onChange={(e) => setHomeData((d) => ({ ...(d ?? {}), about: e.target.value }))}
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
                </div>

                <div>
                  <label className="text-sm block mb-1">Banner image</label>
                  <input
                    ref={bannerFileRef}
                    type="file"
                    accept="image/*"
                    onChange={handleBannerFileChange}
                    disabled={uploading || homeSaving}
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={submitSection} disabled={homeSaving}>
                    {homeSaving ? 'Creating…' : 'Create homepage'}
                  </Button>
                  <Button variant="outline" onClick={closeHomeModal} disabled={homeSaving}>
                    Cancel
                  </Button>
                </div>
              </>
            )}

            {/* SITE NAME */}
            {editSection === 'siteName' && !homeLoading && (
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

                <div className="flex gap-2">
                  <Button onClick={submitSection} disabled={homeSaving}>
                    {homeSaving ? 'Saving…' : 'Save'}
                  </Button>
                  <Button variant="outline" onClick={closeHomeModal} disabled={homeSaving}>
                    Cancel
                  </Button>
                </div>
              </>
            )}

            {/* LOGO */}
            {editSection === 'logo' && !homeLoading && (
              <>
                <div>
                  <label className="text-sm block mb-1">Logo image</label>
                  <input
                    ref={logoFileRef}
                    type="file"
                    accept="image/*"
                    onChange={handleLogoFileChange}
                    disabled={uploading || homeSaving}
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
            )}

            {/* ABOUT */}
            {editSection === 'about' && !homeLoading && (
              <>
                <div>
                  <label className="text-sm block mb-1">{aboutTitle}</label>
                  <textarea
                    ref={aboutRef}
                    className="w-full border p-2 rounded h-28"
                    value={homeData?.about ?? ''}
                    onChange={(e) => setHomeData((d) => ({ ...(d ?? {}), about: e.target.value }))}
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={submitSection} disabled={homeSaving}>
                    {homeSaving ? 'Saving…' : 'Save About'}
                  </Button>
                  <Button variant="outline" onClick={closeHomeModal} disabled={homeSaving}>
                    Cancel
                  </Button>
                </div>
              </>
            )}

            {/* HERO / BANNER / STRATEGIC statements (single-field modals) */}
            {editSection === 'hero' && !homeLoading && (
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
                    accept=".mov,.mp4,.gif,video/*"
                    onChange={handleHeroFileChange}
                    disabled={uploading || homeSaving}
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
            )}

            {editSection === 'banner' && !homeLoading && (
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
            )}

            {editSection === 'vision' && !homeLoading && (
              <>
                <div>
                  <label className="text-sm block mb-1">Vision</label>
                  <textarea
                    ref={visionRef}
                    className="w-full border p-2 rounded h-28"
                    value={homeData?.vision ?? ''}
                    onChange={(e) => setHomeData((d) => ({ ...(d ?? {}), vision: e.target.value }))}
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
            )}

            {editSection === 'mission' && !homeLoading && (
              <>
                <div>
                  <label className="text-sm block mb-1">Mission</label>
                  <textarea
                    ref={missionRef}
                    className="w-full border p-2 rounded h-28"
                    value={homeData?.mission ?? ''}
                    onChange={(e) =>
                      setHomeData((d) => ({ ...(d ?? {}), mission: e.target.value }))
                    }
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
            )}

            {editSection === 'focus' && !homeLoading && (
              <>
                <div>
                  <label className="text-sm block mb-1">Focus</label>
                  <textarea
                    ref={focusRef}
                    className="w-full border p-2 rounded h-20"
                    value={homeData?.focus ?? ''}
                    onChange={(e) => setHomeData((d) => ({ ...(d ?? {}), focus: e.target.value }))}
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
            )}

            {editSection === 'coreValues' && !homeLoading && (
              <>
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
                    {homeSaving ? 'Saving…' : 'Save'}
                  </Button>
                  <Button variant="outline" onClick={closeHomeModal} disabled={homeSaving}>
                    Cancel
                  </Button>
                </div>
              </>
            )}

            {homeError && <div className="text-sm text-red-500 mt-2">{homeError}</div>}
            {homeSuccess && <div className="text-sm text-green-600 mt-2">{homeSuccess}</div>}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
