// Single source of truth for every "content table count" stat shown across
// the site — the admin dashboard's Home charts (all tables) and the public
// homepage's Impact section (a curated subset) both build their stats from
// this same metadata, so labels/colors never drift out of sync between them.

export type StatKey =
  | 'projects'
  | 'reports'
  | 'events'
  | 'podcasts'
  | 'talkshows'
  | 'institutions'
  | 'beneficiaries'
  | 'team'
  | 'faqs'
  | 'messages'
  | 'responses'
  | 'users'
  | 'facebookPosts'
  | 'youtubeVideos';

export type Stat = {
  label: string;
  value: number;
  color: string;
};

type StatMeta = {
  label: string;
  color: string;
  apiRoute: string;
  parse: (json: unknown) => number;
};

// Most endpoints return a plain array (or, on error, an object with no
// usable shape at all) — count whichever applies.
function countArray(json: unknown): number {
  if (Array.isArray(json)) return json.length;
  if (json && typeof json === 'object' && 'count' in (json as Record<string, unknown>)) {
    const c = (json as Record<string, unknown>).count;
    return typeof c === 'number' ? c : 0;
  }
  return 0;
}

// /api/facebook-posts and /api/youtube-videos wrap their array in
// `{ data: [...] }` instead of returning it directly.
function countDataField(json: unknown): number {
  if (json && typeof json === 'object' && 'data' in (json as Record<string, unknown>)) {
    const d = (json as Record<string, unknown>).data;
    return Array.isArray(d) ? d.length : 0;
  }
  return 0;
}

// Colors: the original six (Projects/Reports/Events/Institutions/
// Beneficiaries/Users) are kept exactly as they were — everything else here
// is new, chosen to stay visually distinct from those and from each other.
export const STAT_META: Record<StatKey, StatMeta> = {
  projects: { label: 'Projects', color: '#7c3aed', apiRoute: '/api/projects', parse: countArray },
  reports: { label: 'Reports', color: '#f59e42', apiRoute: '/api/reports', parse: countArray },
  events: { label: 'Events', color: '#b87333', apiRoute: '/api/events', parse: countArray },
  podcasts: { label: 'Podcasts', color: '#db2777', apiRoute: '/api/podcasts', parse: countArray },
  talkshows: {
    label: 'Radio Talkshows',
    color: '#0ea5e9',
    apiRoute: '/api/talkshows',
    parse: countArray,
  },
  institutions: {
    label: 'Institutions',
    color: '#7c482b',
    apiRoute: '/api/institutions',
    parse: countArray,
  },
  beneficiaries: {
    label: 'Beneficiaries',
    color: '#059669',
    apiRoute: '/api/beneficiaries',
    parse: countArray,
  },
  team: { label: 'Team', color: '#facc15', apiRoute: '/api/teams', parse: countArray },
  faqs: { label: 'FAQs', color: '#d946ef', apiRoute: '/api/faq', parse: countArray },
  messages: { label: 'Messages', color: '#64748b', apiRoute: '/api/messages', parse: countArray },
  responses: {
    label: 'Responses',
    color: '#0d9488',
    apiRoute: '/api/responses',
    parse: countArray,
  },
  users: { label: 'Users', color: '#2563eb', apiRoute: '/api/users', parse: countArray },
  facebookPosts: {
    label: 'Facebook Posts',
    color: '#4f46e5',
    apiRoute: '/api/facebook-posts',
    parse: countDataField,
  },
  youtubeVideos: {
    label: 'YouTube Videos',
    color: '#ef4444',
    apiRoute: '/api/youtube-videos',
    parse: countDataField,
  },
};

// Guard against two stats ever sharing a color (silently indistinguishable
// in the stat cards, bar chart, and pie chart alike) — checked once at
// module load, in development only.
if (process.env.NODE_ENV !== 'production') {
  const seen = new Map<string, StatKey>();
  for (const key of Object.keys(STAT_META) as StatKey[]) {
    const color = STAT_META[key].color.toLowerCase();
    const clash = seen.get(color);
    if (clash) {
      console.warn(
        `[statsConfig] "${key}" and "${clash}" share the color ${color} — give one of them a different color.`
      );
    }
    seen.set(color, key);
  }
}

// Admin dashboard Home: every content table in the database.
export const ADMIN_STAT_KEYS: StatKey[] = [
  'projects',
  'reports',
  'events',
  'podcasts',
  'talkshows',
  'institutions',
  'beneficiaries',
  'team',
  'faqs',
  'messages',
  'responses',
  'users',
  'facebookPosts',
  'youtubeVideos',
];

// Public homepage Impact section: a deliberately short, visitor-facing list.
export const PUBLIC_HOME_STAT_KEYS: StatKey[] = [
  'projects',
  'reports',
  'events',
  'talkshows',
  'podcasts',
];

export function buildStat(key: StatKey, value: number): Stat {
  const meta = STAT_META[key];
  return { label: meta.label, value, color: meta.color };
}

export async function fetchStatsForKeys(keys: StatKey[]): Promise<Stat[]> {
  const responses = await Promise.all(
    keys.map((key) => fetch(STAT_META[key].apiRoute).catch(() => null))
  );
  const jsons = await Promise.all(
    responses.map((res) => (res && res.ok ? res.json().catch(() => null) : null))
  );
  return keys.map((key, i) => buildStat(key, STAT_META[key].parse(jsons[i])));
}
