'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import { extractPlainText, isTiptapDoc } from '@/lib/tiptap';
import DownloadColumnsModal, { ColumnOption } from './components/downloadColumnsModal';
import { handleDownloadPDF } from './components/handleDownloadPDF';

/**
 * This dashboard page is a generic dispatcher across ~15 different Prisma
 * models (messages, responses, projects, events, beneficiaries, users, ...);
 * which shape applies depends on the runtime `activeSection`, and each
 * concrete shape is resolved/typed properly inside its own section
 * component. Keeping the record type here as `any` (rather than a fake
 * union that nothing actually narrows on) is the honest choice — hence the
 * single, deliberate suppression below instead of ~25 scattered ones.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DashRecord = any;

import {
  FaUsers,
  FaUserCog,
  FaEnvelope,
  FaReply,
  FaCogs,
  FaHome,
  FaClipboardList,
  FaCalendarAlt,
  FaFilePdf,
  FaUniversity,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDown,
  FaLightbulb,
  FaFacebook,
  FaYoutube,
  FaPodcast,
  FaMicrophone,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from 'react-icons/fa';

// Sections we keep + Charts/Home + Projects/Events/Reports/Institutions
import BeneficiariesSection from './components/sections/BeneficiariesSection';
import MessagesSection from './components/sections/MessagesSection';
import ResponsesSection from './components/sections/ResponsesSection';
import UsersSection from './components/sections/UsersSection';
import SettingsSection from './components/sections/SettingsSection';
import ChartSection from './chartSection'; // Chart / Home section
import ProjectsSection from './components/sections/ProjectsSection';
import EventsSection from './components/sections/EventsSection';
import ReportsSection from './components/sections/ReportsSection';
import PodcastsSection from './components/sections/PodcastsSection';
import RadioTalkshowsSection from './components/sections/RadioTalkshowsSection';
import InstitutionsSection from './components/sections/InstitutionsSection';
import FAQsSection from './components/sections/FAQsSection';
import FacebookSection from './components/sections/FacebookSection';
import YouTubeSection from './components/sections/YouTubeSection';
import SiteSettings from './components/sections/SiteSettings';
import AccountSettings from './components/sections/AccountSettings';
import TeamsSection from './components/sections/TeamsSection'; // <-- use TeamsSection

// Sidebar Dropdown (reusable)
import SidebarDropdown from './components/sidebar/SidebarDropdown';

// Create/edit forms we keep + new ones
import CreateBeneficiaryForm from './createBeneficiaryForm';
import CreateMessageForm from './createMessageForm';
import CreateResponseForm from './createResponseForm';
import CreateUserForm from './createUserForm';
import CreateProjectForm from './createProjectForm';
import CreateReportForm from './createReportForm';
import CreatePodcastForm from './createPodcastForm';
import CreateTalkshowForm from './createTalkshowForm';
import CreateEventForm from './createEventForm';
import CreateInstitutionForm from './createInstitutionForm';
import CreateFAQForm from './createFAQForm';
import CreateTeamForm from './createTeamForm'; // <-- CreateTeamForm import

// View-only components we keep + new ones
import BeneficiaryView from './components/views/beneficiaryView';
import MessageView from './components/views/messageView';
import ResponseView from './components/views/responseView';
import InstitutionView from './components/views/institutionView';

// Table controls component for search/filter/add/export
function TableControls({
  search,
  setSearch,
  onAddNew,
  exportExcel,
  downloadPDF,
  activeSection,
  sectionLabels,
  hideSearch,
  addNewLabel,
  hideAllControls,
}: {
  search: string;
  setSearch: (s: string) => void;
  onAddNew: () => void;
  exportExcel: () => void;
  downloadPDF: () => void;
  activeSection: string;
  sectionLabels: Record<string, string>;
  hideSearch?: boolean;
  addNewLabel?: string;
  // when true, hide export/download/add buttons regardless of hideSearch
  hideAllControls?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 justify-start mb-4">
      <div className="flex items-center gap-2 flex-1 min-w-0">
        {!hideSearch && (
          <input
            type="text"
            className="border px-3 py-2 rounded w-64 max-w-full focus:outline-pink-500 dark:bg-gray-800 dark:text-white"
            placeholder={`Search ${sectionLabels[activeSection] || 'records'}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}

        {/* Export / Download / Add New - inline group */}
        {!hideSearch && !hideAllControls && (
          <div className="flex items-center gap-2 flex-wrap">
            <button
              className="px-2 py-1 border rounded text-sm bg-green-50 hover:bg-green-100 dark:bg-gray-800 dark:hover:bg-green-900"
              title="Export to Excel"
              onClick={exportExcel}
            >
              Export to Excel
            </button>
            <button
              className="px-2 py-1 border rounded text-sm bg-yellow-50 hover:bg-yellow-100 dark:bg-gray-800 dark:hover:bg-yellow-900"
              title="Download as PDF"
              onClick={downloadPDF}
            >
              Download as PDF
            </button>

            {addNewLabel && (
              <button
                className="px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-900 text-sm font-semibold"
                onClick={onAddNew}
              >
                {addNewLabel}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Sections (we still list all for type safety)
const sections = [
  'home',
  'projects',
  'team',
  'events',
  'reports',
  'podcasts',
  'talkshows',
  'institutions',
  'faqs',
  'beneficiaries',
  'messages',
  'responses',
  'facebook_posts',
  'youtube_videos',
  'account_settings',
  'site_settings',
  'logout',
  'users',
  'settings',
] as const;
type Section = (typeof sections)[number];

const sectionFeatures: Record<Section, { apiRoute?: string }> = {
  home: {},
  projects: { apiRoute: '/api/projects' },
  team: { apiRoute: '/api/teams' },
  events: { apiRoute: '/api/events' },
  reports: { apiRoute: '/api/reports' },
  podcasts: { apiRoute: '/api/podcasts' },
  talkshows: { apiRoute: '/api/talkshows' },
  institutions: { apiRoute: '/api/institutions' },
  faqs: { apiRoute: '/api/faq' },
  beneficiaries: { apiRoute: '/api/beneficiaries' },
  messages: { apiRoute: '/api/messages' },
  responses: { apiRoute: '/api/responses' },
  facebook_posts: {},
  youtube_videos: {},
  account_settings: {},
  site_settings: {},
  logout: {},
  users: { apiRoute: '/api/users' },
  settings: {},
};

const sectionIcons: Record<Section, React.ReactNode> = {
  home: <FaHome className="text-pink-600 dark:text-pink-400" />,
  projects: <FaClipboardList className="text-yellow-600 dark:text-yellow-400" />,
  team: <FaUserCircle className="text-teal-600 dark:text-teal-400" />,
  events: <FaCalendarAlt className="text-green-600 dark:text-green-400" />,
  reports: <FaFilePdf className="text-red-600 dark:text-red-400" />,
  podcasts: <FaPodcast className="text-purple-600 dark:text-purple-400" />,
  talkshows: <FaMicrophone className="text-rose-600 dark:text-rose-400" />,
  institutions: <FaUniversity className="text-blue-600 dark:text-blue-400" />,
  faqs: <FaLightbulb className="text-yellow-600 dark:text-yellow-400" />,
  beneficiaries: <FaUsers className="text-indigo-600 dark:text-indigo-400" />,
  messages: <FaEnvelope className="text-orange-500 dark:text-orange-400" />,
  responses: <FaReply className="text-purple-600 dark:text-purple-400" />,
  facebook_posts: <FaFacebook className="text-blue-700 dark:text-blue-400" />,
  youtube_videos: <FaYoutube className="text-red-600 dark:text-red-400" />,
  account_settings: <FaUserCircle className="text-gray-700 dark:text-gray-300" />,
  site_settings: <FaCog className="text-gray-700 dark:text-gray-300" />,
  logout: <FaSignOutAlt className="text-gray-700 dark:text-gray-300" />,
  users: <FaUserCog className="text-gray-700 dark:text-gray-300" />,
  settings: <FaCogs className="text-gray-700 dark:text-gray-300" />,
};

const sectionLabels: Record<Section, string> = {
  home: 'Home',
  projects: 'Projects',
  team: 'Team',
  events: 'Events',
  reports: 'Reports',
  podcasts: 'Podcasts',
  talkshows: 'Radio Talkshows',
  institutions: 'Institutions',
  faqs: 'FAQs',
  beneficiaries: 'Beneficiaries',
  messages: 'Messages',
  responses: 'Responses',
  facebook_posts: 'Facebook Posts',
  youtube_videos: 'YouTube Videos',
  account_settings: 'Account Settings',
  site_settings: 'Site Settings',
  logout: 'Logout',
  users: 'Users',
  settings: 'Settings',
};

const singularLabels: Record<Section, string> = {
  home: 'Home',
  projects: 'Project',
  team: 'Team Member',
  events: 'Event',
  reports: 'Report',
  podcasts: 'Podcast',
  talkshows: 'Radio Talkshow',
  institutions: 'Institution',
  faqs: 'FAQ',
  beneficiaries: 'Beneficiary',
  messages: 'Message',
  responses: 'Response',
  facebook_posts: 'Facebook Post',
  youtube_videos: 'YouTube Video',
  account_settings: 'Account Settings',
  site_settings: 'Site Settings',
  logout: 'Logout',
  users: 'User',
  settings: 'Settings',
};

export default function AdminDashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<Section>('beneficiaries');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  // Below `lg`, the sidebar is an off-canvas drawer (closed by default)
  // instead of a permanent column — at 240px expanded it would eat most
  // of a phone screen. Desktop's collapse/expand toggle above is
  // unaffected; this is purely the mobile show/hide state.
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [data, setData] = useState<DashRecord[]>([]);
  const [editRecord, setEditRecord] = useState<DashRecord | null>(null);
  const [viewRecord, setViewRecord] = useState<DashRecord | null>(null);
  const [deleteId, setDeleteId] = useState<string | number | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [sortBy] = useState('createdAt');
  const [sortOrder] = useState<'asc' | 'desc'>('desc');
  const [rowsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState('');
  const sectionRef = useRef<Section>('beneficiaries');

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadColumns, setDownloadColumns] = useState<ColumnOption[]>([]);
  const [pendingDownloadData, setPendingDownloadData] = useState<DashRecord[]>([]);

  const [hideControls, setHideControls] = useState(false);

  useEffect(() => {
    const searchType = (searchParams.get('type') as Section) ?? null;
    const sectionToLoad: Section =
      searchType && sections.includes(searchType) ? searchType : 'beneficiaries';
    handleMenuClick(sectionToLoad, false);
    // eslint-disable-next-line
  }, []);

  async function handleMenuClick(section: Section, replaceUrl = true) {
    setMobileSidebarOpen(false);

    if (section === 'logout') {
      if (confirm('Sign out from the admin dashboard?')) {
        signOut();
      }
      return;
    }

    const newUrl = `${pathname}?type=${section}`;
    if (replaceUrl) {
      try {
        router.replace(newUrl);
      } catch {}
    }

    setActiveSection(section);
    sectionRef.current = section;
    setEditRecord(null);
    setViewRecord(null);
    setDeleteId(null);
    setPage(1);
    setHideControls(false);

    const feat = sectionFeatures[section];
    if (feat?.apiRoute) {
      try {
        const res = await fetch(feat.apiRoute, { cache: 'no-store' });
        if (!res.ok) {
          setData([]);
          return;
        }
        const rawData = await res.json();
        if (Array.isArray(rawData)) setData(rawData);
        else if (rawData == null) setData([]);
        else setData([rawData]);
      } catch {
        setData([]);
      }
    } else {
      setData([]);
    }
  }

  function getSortedData(data: DashRecord[], sortBy: string, sortOrder: 'asc' | 'desc') {
    if (!Array.isArray(data)) return [];
    const sorted = [...data];
    sorted.sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];
      if (sortBy === 'createdAt' || sortBy === 'updatedAt') {
        valA = new Date(valA).getTime();
        valB = new Date(valB).getTime();
      }
      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  }

  function getFilteredData(sortedData: DashRecord[], search: string) {
    if (!Array.isArray(sortedData)) return [];
    if (!search.trim()) return sortedData;
    const lower = search.toLowerCase();
    return sortedData.filter((item) =>
      Object.keys(item).some((key) => {
        const value = item[key];
        if (typeof value === 'string') return value.toLowerCase().includes(lower);
        // Tiptap JSON doc fields (title, content, etc.) — search their plain text
        if (isTiptapDoc(value)) return extractPlainText(value).toLowerCase().includes(lower);
        return false;
      })
    );
  }

  function getPaginatedData(filteredData: DashRecord[], page: number, rowsPerPage: number) {
    if (!Array.isArray(filteredData)) return [];
    return (filteredData ?? []).slice((page - 1) * rowsPerPage, page * rowsPerPage);
  }

  const sortedData = getSortedData(data, sortBy, sortOrder);
  const filteredData = getFilteredData(sortedData, search);
  const pageCount = Math.max(1, Math.ceil((filteredData?.length ?? 0) / rowsPerPage));
  const paginatedData = getPaginatedData(filteredData, page, rowsPerPage);

  function handleEdit(record: DashRecord) {
    setHideControls(true);
    setEditRecord(record);
  }
  function handleCancelEdit() {
    setHideControls(false);
    setEditRecord(null);
  }
  async function handleSaveEdit() {
    setHideControls(false);
    setEditRecord(null);
    await handleMenuClick(activeSection);
  }

  function handleRespondToMessage(messageId: number | string) {
    setHideControls(true);
    setActiveSection('responses');
    setEditRecord({ messageId });
    setViewRecord(null);
  }

  async function handleView(record: DashRecord, source?: Section) {
    setHideControls(true);

    if (!record) {
      setViewRecord(null);
      return;
    }

    if (source === 'messages' || sectionRef.current === 'messages') {
      try {
        const id = record?.id ?? record;
        const msgRes = await fetch(`/api/messages/${id}`);
        const msgData = msgRes.ok ? await msgRes.json() : record;

        const respRes = await fetch(`/api/responses`);
        const respData = respRes.ok ? await respRes.json() : [];

        const parentId = typeof msgData.id === 'number' ? msgData.id : Number(msgData.id);
        const linkedResponses = Array.isArray(respData)
          ? respData.filter(
              (r: DashRecord) =>
                (r.message && (r.message.id === parentId || Number(r.message.id) === parentId)) ||
                (r.messageId && Number(r.messageId) === parentId)
            )
          : [];

        setViewRecord({ ...msgData, responses: linkedResponses });
        setActiveSection('messages');
        return;
      } catch {
        // fallback
      }
    }

    if (source === 'responses' || sectionRef.current === 'responses') {
      try {
        const id = record?.id ?? record;
        const res = await fetch(`/api/responses/${id}`);
        if (res.ok) {
          const fullRecord = await res.json();
          setViewRecord(fullRecord);
          setActiveSection('responses');
          return;
        }
      } catch {
        // fallback
      }
    }

    setViewRecord(record);
  }

  function handleCloseView() {
    setHideControls(false);
    setViewRecord(null);
  }

  async function handleDelete(id: string | number) {
    setDeleteId(id);
    setDeleteLoading(true);
    try {
      let apiRoute = sectionFeatures[activeSection]?.apiRoute;
      if (!apiRoute) throw new Error('Delete API route not defined');
      if (apiRoute.endsWith('/')) apiRoute = apiRoute.slice(0, -1);
      const url = `${apiRoute}/${id}`;
      const res = await fetch(url, { method: 'DELETE' });
      const text = await res.text();
      if (!res.ok) {
        alert(`Failed to delete record: ${res.status}\n${text}`);
      } else {
        await handleMenuClick(activeSection);
      }
    } catch (err) {
      alert('Error deleting record: ' + err);
    } finally {
      setDeleteLoading(false);
      setDeleteId(null);
    }
  }

  function handleDeleteMessage(id: string | number) {
    setData((prev) => {
      if (!Array.isArray(prev)) return prev;
      return prev.filter((item) => String(item.id) !== String(id));
    });
    if (viewRecord && String(viewRecord.id) === String(id)) {
      setViewRecord(null);
      setHideControls(false);
    }
  }

  function handleDeleteResponse(id: string | number) {
    setData((prev) => {
      if (!Array.isArray(prev)) return prev;
      const mapped = prev.map((item) => {
        if (!item) return item;
        if (Array.isArray(item.responses)) {
          return {
            ...item,
            responses: item.responses.filter((r: DashRecord) => String(r.id) !== String(id)),
          };
        }
        return item;
      });
      if (activeSection === 'responses') {
        return mapped.filter((item) => String(item.id) !== String(id));
      }
      return mapped;
    });

    if (viewRecord && Array.isArray(viewRecord.responses)) {
      setViewRecord({
        ...viewRecord,
        responses: viewRecord.responses.filter((r: DashRecord) => String(r.id) !== String(id)),
      });
    }

    if (viewRecord && String(viewRecord.id) === String(id)) {
      setViewRecord(null);
      setHideControls(false);
    }
  }

  function handlePasswordEdit(record: DashRecord) {
    setHideControls(true);
    setEditRecord({ ...record, _passwordOnly: true });
  }

  function getCurrentColumns(): DashRecord[] {
    return [];
  }
  const handleExportExcel = () => {
    const columns = getCurrentColumns();
    const headers = columns
      .filter((col) => col.header && col.header !== 'Actions' && col.header !== 'Delete')
      .map((col) => (typeof col.header === 'function' ? col.header({}) : col.header));
    const exportableCols = columns.filter(
      (col) => col.header && col.header !== 'Actions' && col.header !== 'Delete'
    );
    const rows = paginatedData.map((row, idx) =>
      exportableCols.map((col) => {
        if (col.id === 'number') return idx + 1;
        return row[col.id || col.accessorKey] ?? '';
      })
    );
    const ws = XLSX.utils.aoa_to_sheet([headers, ...rows]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'table.xlsx');
  };
  const handleDownloadPDFButton = () => {
    const columns = getCurrentColumns();
    const columnOptions: ColumnOption[] = columns
      .filter((col) => col.header && col.header !== 'Actions' && col.header !== 'Delete')
      .map((col) => ({
        id: col.id || col.accessorKey,
        label: typeof col.header === 'function' ? col.header({}) : col.header,
      }));
    setDownloadColumns(columnOptions);
    setPendingDownloadData(paginatedData);
    setDownloadModalOpen(true);
  };

  function handleAddNew() {
    setHideControls(true);
    setEditRecord({});
    setViewRecord(null);
  }

  function renderSection() {
    if (viewRecord) {
      switch (activeSection) {
        case 'messages':
          return (
            <MessageView
              data={viewRecord}
              onClose={handleCloseView}
              onRespond={handleRespondToMessage}
            />
          );
        case 'responses':
          return <ResponseView data={viewRecord} onClose={handleCloseView} />;
        case 'beneficiaries':
          return <BeneficiaryView data={viewRecord} onClose={handleCloseView} />;
        case 'projects':
          return (
            <ProjectsSection
              paginatedData={paginatedData}
              page={page}
              rowsPerPage={rowsPerPage}
              handleEdit={handleEdit}
              handleView={(r: DashRecord) => handleView(r, 'projects')}
              handleDelete={handleDelete}
              TableActions={() => null}
              deleteId={deleteId}
              deleteLoading={deleteLoading}
              onToggleControls={(hide: boolean) => setHideControls(hide)}
            />
          );
        case 'institutions':
          return <InstitutionView data={viewRecord} onClose={handleCloseView} />;
        case 'home':
          return <ChartSection />;
        case 'settings':
          return <SettingsSection currentUserId={session?.user?.id} />;
        default:
          return null;
      }
    }

    if (editRecord) {
      switch (activeSection) {
        case 'projects':
          return (
            <CreateProjectForm
              mode={editRecord?.id ? 'edit' : 'create'}
              initialData={editRecord}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          );
        case 'reports':
          return (
            <CreateReportForm
              mode={editRecord?.id ? 'edit' : 'create'}
              initialData={editRecord}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          );
        case 'podcasts':
          return (
            <CreatePodcastForm
              mode={editRecord?.id ? 'edit' : 'create'}
              initialValues={editRecord}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          );
        case 'talkshows':
          return (
            <CreateTalkshowForm
              mode={editRecord?.id ? 'edit' : 'create'}
              initialValues={editRecord?.id ? editRecord : undefined}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          );
        case 'events':
          return (
            <CreateEventForm
              mode={editRecord?.id ? 'edit' : 'create'}
              initialData={editRecord}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          );
        case 'institutions':
          return (
            <CreateInstitutionForm
              mode={editRecord?.id ? 'edit' : 'create'}
              initialData={editRecord}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          );
        case 'beneficiaries':
          return (
            <CreateBeneficiaryForm
              initialData={editRecord}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
              mode={editRecord?.id ? 'edit' : 'create'}
            />
          );
        case 'messages':
          return (
            <CreateMessageForm
              mode={editRecord?.id ? 'edit' : 'create'}
              initialData={editRecord}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          );
        case 'responses':
          return (
            <CreateResponseForm
              messageId={editRecord?.messageId}
              editId={editRecord?.id}
              initialData={editRecord?.id ? editRecord : undefined}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          );
        case 'users':
          return (
            <CreateUserForm
              mode="edit"
              userId={String(editRecord?.id ?? editRecord?.userId ?? '')}
              initialData={editRecord ?? undefined}
              onlyPasswordFields={!!editRecord?._passwordOnly}
              requireCurrentPassword={!editRecord?._passwordOnly}
              hidePasswordFields={!editRecord?._passwordOnly}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          );
        case 'faqs':
          return (
            <CreateFAQForm
              mode={editRecord?.id ? 'edit' : 'create'}
              initialData={editRecord?.id ? editRecord : undefined}
              currentUserId={session?.user?.id}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          );
        case 'team':
          return (
            <CreateTeamForm
              mode={editRecord?.id ? 'edit' : 'create'}
              teamId={editRecord?.id ? String(editRecord.id) : undefined}
              initialData={editRecord?.id ? editRecord : undefined}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
              onDelete={async (id: string) => {
                await handleDelete(id);
                await handleMenuClick('team');
              }}
            />
          );
        default:
          return null;
      }
    }

    switch (activeSection) {
      case 'home':
        return <ChartSection />;
      case 'projects':
        return (
          <ProjectsSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleView={(r: DashRecord) => handleView(r, 'projects')}
            handleDelete={handleDelete}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
            onToggleControls={(hide: boolean) => setHideControls(hide)}
          />
        );
      case 'team':
        return (
          <TeamsSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleView={(r: DashRecord) => handleView(r, 'team')}
            handleDelete={handleDelete}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
            onToggleControls={(hide: boolean) => setHideControls(hide)}
          />
        );
      case 'events':
        return (
          <EventsSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleView={(r: DashRecord) => handleView(r, 'events')}
            handleDelete={handleDelete}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
            onToggleControls={(hide: boolean) => setHideControls(hide)}
          />
        );
      case 'reports':
        return (
          <ReportsSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            currentUserRole={session?.user?.role ?? ''}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
            onToggleControls={(hide: boolean) => setHideControls(hide)}
          />
        );
      case 'podcasts':
        return (
          <PodcastsSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
            onToggleControls={(hide: boolean) => setHideControls(hide)}
          />
        );
      case 'talkshows':
        return (
          <RadioTalkshowsSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
            onToggleControls={(hide: boolean) => setHideControls(hide)}
          />
        );
      case 'institutions':
        return (
          <InstitutionsSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleView={(r: DashRecord) => handleView(r, 'institutions')}
            handleDelete={handleDelete}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
          />
        );
      case 'faqs':
        return (
          <FAQsSection
            paginatedData={paginatedData}
            handleEdit={(rec) => {
              setHideControls(true);
              setEditRecord(rec);
            }}
            handleDelete={handleDelete}
            onToggleControls={(hide: boolean) => setHideControls(hide)}
          />
        );
      case 'beneficiaries':
        return (
          <BeneficiariesSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleView={(r: DashRecord) => handleView(r, 'beneficiaries')}
            handleDelete={handleDelete}
            messagesCountMap={{}}
            requestsCountMap={{}}
            currentUserRole={session?.user?.role ?? ''}
            TableActions={() => null}
            onAddMessage={(id: string) => {
              setHideControls(true);
              setEditRecord({ beneficiaryId: id });
            }}
            onAddRequest={() => {}}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
          />
        );
      case 'messages':
        return (
          <MessagesSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleView={(r: DashRecord) => handleView(r, 'messages')}
            handleDeleteMessage={handleDeleteMessage}
            handleDeleteResponse={handleDeleteResponse}
            onRespond={handleRespondToMessage}
            currentUserRole={session?.user?.role ?? ''}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
            onToggleControls={(hide: boolean) => setHideControls(hide)}
          />
        );
      case 'responses':
        return (
          <ResponsesSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleView={(r: DashRecord) => handleView(r, 'responses')}
            handleDeleteResponse={handleDeleteResponse}
            handleDeleteMessage={handleDeleteMessage}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
            onToggleControls={(hide: boolean) => setHideControls(hide)}
          />
        );
      case 'facebook_posts':
        return <FacebookSection />;
      case 'youtube_videos':
        return <YouTubeSection />;
      case 'account_settings':
        return <AccountSettings currentUserId={session?.user?.id} />;
      case 'site_settings':
        return <SiteSettings />;
      case 'logout':
        return (
          <div className="p-8">
            <h2 className="text-xl font-semibold mb-4">Logout</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              You can sign out from this dashboard.
            </p>
            <div>
              <button
                className="px-4 py-2 rounded bg-red-600 text-white"
                onClick={() => {
                  if (confirm('Sign out from the admin dashboard?')) signOut();
                }}
              >
                Sign out
              </button>
            </div>
          </div>
        );
      case 'users':
        return (
          <UsersSection
            paginatedData={paginatedData}
            handleEdit={handleEdit}
            handlePasswordEdit={handlePasswordEdit}
            handleDelete={handleDelete}
          />
        );
      case 'settings':
        return <SettingsSection currentUserId={session?.user?.id} />;
      default:
        return null;
    }
  }

  const isSettingsSection = activeSection === 'settings';
  const singularLabel =
    singularLabels[activeSection] ?? sectionLabels[activeSection].replace(/s$/i, '');
  const isHome = activeSection === 'home';

  const effectiveHideControls = hideControls || Boolean(editRecord) || Boolean(viewRecord);

  const expandedWidth = 240;
  const collapsedWidth = 64;

  const sidebarWidth = sidebarCollapsed ? collapsedWidth : expandedWidth;

  return (
    // A bounded app-shell: exactly viewport height minus the fixed 56px admin
    // header, with its own overflow. Previously this row had no height limit
    // and the sidebar was `fixed` to the viewport, so scrolling the outer page
    // (e.g. past a tall section, or down to the site footer) left the sidebar
    // pinned on screen, visually overlapping the footer beneath it. Bounding
    // this row and letting the sidebar scroll away with it — instead of being
    // fixed independently of page scroll — means the sidebar can never sit on
    // top of content that isn't part of the dashboard.
    <div className="flex h-[calc(100vh-3.5rem)] overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Below `lg` the sidebar is an off-canvas drawer — at its default
          240px width it would eat most of a phone screen if it stayed a
          permanent column. This backdrop closes it on outside tap. */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-x-0 top-14 bottom-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        style={{ width: sidebarWidth }}
        className={`fixed top-14 bottom-0 left-0 z-40 shrink-0 bg-white dark:bg-gray-950 border-r dark:border-gray-800 shadow-sm flex flex-col transition-[width,transform] duration-300 ease-in-out lg:static lg:top-auto lg:bottom-auto lg:h-full lg:z-auto lg:translate-x-0 ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-2 py-4 border-b dark:border-gray-800">
          <span className="text-xl font-bold text-pink-600 dark:text-pink-400 hidden sm:block">
            {!sidebarCollapsed && 'Dashboard'}
          </span>
          <button
            className="ml-auto p-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400"
            onClick={() => setSidebarCollapsed((c) => !c)}
            aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {sidebarCollapsed ? <FaAngleRight size={18} /> : <FaAngleLeft size={18} />}
          </button>
        </div>

        <nav className="mt-2 flex-1 overflow-y-auto px-0">
          <div>
            <button
              onClick={() => handleMenuClick('home')}
              className={`w-full flex items-center gap-3 pl-4 pr-2 py-2 rounded transition-all font-medium
                ${
                  activeSection === 'home'
                    ? 'bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400'
                    : 'text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-pink-700 dark:hover:text-pink-400'
                }
              `}
              style={{ minWidth: 0 }}
            >
              <span
                className={`transition-all ${activeSection === 'home' ? 'text-2xl' : 'text-xl'}`}
              >
                {sectionIcons.home}
              </span>
              {!sidebarCollapsed && (
                <span
                  className={`truncate ${
                    activeSection === 'home' ? 'text-lg font-semibold' : 'text-sm'
                  }`}
                >
                  {sectionLabels.home}
                </span>
              )}
            </button>
          </div>

          {/* Content dropdown (wrapped to show collapse indicator when collapsed) */}
          <div className="relative">
            <SidebarDropdown
              id="content-dropdown"
              label="Content"
              icon={<FaClipboardList className="text-yellow-600 dark:text-yellow-400" />}
              items={[
                {
                  key: 'projects',
                  label: 'Projects',
                  subtitle: 'Manage projects',
                  icon: sectionIcons.projects,
                },
                {
                  key: 'events',
                  label: 'Events',
                  subtitle: 'Manage events',
                  icon: sectionIcons.events,
                },
                {
                  key: 'reports',
                  label: 'Reports',
                  subtitle: 'Manage reports',
                  icon: sectionIcons.reports,
                },
                {
                  key: 'podcasts',
                  label: 'Podcasts',
                  subtitle: 'Manage podcasts',
                  icon: sectionIcons.podcasts,
                },
                {
                  key: 'talkshows',
                  label: 'Radio Talkshows',
                  subtitle: 'Manage radio talkshows',
                  icon: sectionIcons.talkshows,
                },
              ]}
              activeKey={activeSection}
              onNavigate={(k) => handleMenuClick(k as Section)}
              sidebarCollapsed={sidebarCollapsed}
            />
            {sidebarCollapsed && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-12 pointer-events-none">
                <FaAngleDown className="text-gray-400 dark:text-gray-500" size={12} />
              </div>
            )}
          </div>

          {/* Remaining top-level items (skipping ones grouped into dropdowns) */}
          {sections.map((section) => {
            if (
              section === 'home' ||
              section === 'projects' ||
              section === 'events' ||
              section === 'reports' ||
              section === 'podcasts' ||
              section === 'talkshows' ||
              section === 'beneficiaries' ||
              section === 'institutions' ||
              section === 'team' ||
              section === 'account_settings' ||
              section === 'site_settings' ||
              section === 'settings' ||
              section === 'logout'
            ) {
              return null;
            }
            const isActive = activeSection === section;
            return (
              <button
                key={section}
                onClick={() => handleMenuClick(section)}
                className={`w-full flex items-center gap-3 pl-4 pr-2 py-2 rounded transition-all font-medium
                  ${
                    isActive
                      ? 'bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400'
                      : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-pink-700 dark:hover:text-pink-400'
                  }
                `}
                style={{ minWidth: 0 }}
              >
                <span className={`transition-all ${isActive ? 'text-2xl' : 'text-xl'}`}>
                  {sectionIcons[section]}
                </span>
                {!sidebarCollapsed && (
                  <span
                    className={`truncate transition-all ${
                      isActive ? 'text-lg font-semibold' : 'text-sm'
                    }`}
                  >
                    {sectionLabels[section]}
                  </span>
                )}
              </button>
            );
          })}

          {/* Partners dropdown now includes Team */}
          <div className="relative">
            <SidebarDropdown
              id="partners-dropdown"
              label="Partners"
              icon={<FaUsers className="text-indigo-600 dark:text-indigo-400" />}
              items={[
                {
                  key: 'beneficiaries',
                  label: 'Beneficiaries',
                  subtitle: 'Manage beneficiaries',
                  icon: sectionIcons.beneficiaries,
                },
                {
                  key: 'institutions',
                  label: 'Institutions',
                  subtitle: 'Manage institutions',
                  icon: sectionIcons.institutions,
                },
                {
                  key: 'team',
                  label: 'Team',
                  subtitle: 'Manage team',
                  icon: sectionIcons.team,
                },
              ]}
              activeKey={activeSection}
              onNavigate={(k) => handleMenuClick(k as Section)}
              sidebarCollapsed={sidebarCollapsed}
            />
            {sidebarCollapsed && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-12 pointer-events-none">
                <FaAngleDown className="text-gray-400 dark:text-gray-500" size={12} />
              </div>
            )}
          </div>

          {/* Settings dropdown */}
          <div className="relative">
            <SidebarDropdown
              id="settings-dropdown"
              label="Settings"
              icon={<FaCogs className="text-gray-700 dark:text-gray-300" />}
              items={[
                {
                  key: 'site_settings',
                  label: 'Site Settings',
                  subtitle: 'Homepage content',
                  icon: sectionIcons.site_settings,
                },
                {
                  key: 'account_settings',
                  label: 'Account Settings',
                  subtitle: 'Profile & password',
                  icon: sectionIcons.account_settings,
                },
              ]}
              activeKey={activeSection}
              onNavigate={(k) => handleMenuClick(k as Section)}
              sidebarCollapsed={sidebarCollapsed}
            />
            {sidebarCollapsed && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-12 pointer-events-none">
                <FaAngleDown className="text-gray-400 dark:text-gray-500" size={12} />
              </div>
            )}
          </div>
        </nav>

        <div className="border-t dark:border-gray-800 p-3 mt-auto">
          <button
            onClick={() => {
              if (confirm('Sign out from the admin dashboard?')) signOut();
            }}
            className="w-full flex items-center gap-3 pl-4 pr-2 py-2 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <span className="text-xl">{sectionIcons.logout}</span>
            {!sidebarCollapsed && <span className="truncate text-sm">{sectionLabels.logout}</span>}
          </button>
        </div>
      </aside>

      <main
        className="flex-1 min-w-0 h-full overflow-y-auto p-4 bg-white dark:bg-gray-900 transition-colors"
      >
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              aria-label="Open menu"
              className="p-2 -ml-2 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
            >
              <FaBars size={20} />
            </button>
            <span className="text-2xl">{sectionIcons[activeSection]}</span>
            <h1 className="text-3xl font-extrabold text-left text-gray-800 dark:text-gray-100">
              {sectionLabels[activeSection]}
            </h1>
          </div>

          {!effectiveHideControls && (
            <div className="mt-4">
              <TableControls
                search={search}
                setSearch={setSearch}
                onAddNew={handleAddNew}
                exportExcel={handleExportExcel}
                downloadPDF={handleDownloadPDFButton}
                activeSection={activeSection}
                sectionLabels={sectionLabels}
                hideSearch={isHome}
                addNewLabel={isSettingsSection || isHome ? undefined : `Add a new ${singularLabel}`}
                hideAllControls={effectiveHideControls}
              />
            </div>
          )}
        </div>

        <div className="w-full flex flex-col">
          {activeSection && <div className="mt-2 w-full">{renderSection()}</div>}
        </div>

        {pageCount > 1 && !effectiveHideControls && (
          <div className="flex gap-2 mt-4 justify-end items-center">
            <button
              className="px-2 py-1 rounded border dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Prev
            </button>
            <span className="dark:text-gray-100">
              Page {page} of {pageCount}
            </span>
            <button
              className="px-2 py-1 rounded border dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
              disabled={page === pageCount}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        )}

        <DownloadColumnsModal
          isOpen={downloadModalOpen}
          onClose={() => setDownloadModalOpen(false)}
          columns={downloadColumns}
          onDownload={(selectedColumns) => {
            handleDownloadPDF(
              pendingDownloadData,
              selectedColumns,
              activeSection
                ? activeSection.charAt(0).toUpperCase() + activeSection.slice(1)
                : 'Data'
            );
          }}
        />
      </main>
    </div>
  );
}
