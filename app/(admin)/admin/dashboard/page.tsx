'use client';

import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import DownloadColumnsModal, { ColumnOption } from './components/downloadColumnsModal';
import { handleDownloadPDF } from './components/handleDownloadPDF';

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
import InstitutionsSection from './components/sections/InstitutionsSection';

// Create/edit forms we keep + new ones
import CreateBeneficiaryForm from './createBeneficiaryForm';
import CreateMessageForm from './createMessageForm';
import CreateResponseForm from './createResponseForm';
import CreateUserForm from './createUserForm';
import CreateProjectForm from './createProjectForm';
import CreateReportForm from './createReportForm';
import CreateEventForm from './createEventForm';
import CreateInstitutionForm from './createInstitutionForm';

// View-only components we keep + new ones
import BeneficiaryView from './components/views/beneficiaryView';
import MessageView from './components/views/messageView';
import ResponseView from './components/views/responseView';
import UserView from './components/views/userView';
import ProjectView from './components/views/projectView';
import ReportView from './components/views/reportView';
import EventView from './components/views/eventView';
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
}) {
  return (
    <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
      <div className="flex items-center gap-2 flex-1">
        {!hideSearch && (
          <input
            type="text"
            className="border px-3 py-2 rounded w-64 focus:outline-pink-500 dark:bg-gray-800 dark:text-white"
            placeholder={`Search ${sectionLabels[activeSection] || 'records'}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}
        {!hideSearch && (
          <>
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
          </>
        )}
      </div>
      <div>
        {addNewLabel && (
          <button
            className="px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-900 text-sm font-semibold"
            onClick={onAddNew}
          >
            {addNewLabel}
          </button>
        )}
      </div>
    </div>
  );
}

// Sections (added 'home', 'projects', 'events', 'reports', 'institutions')
const sections = [
  'home',
  'projects',
  'events',
  'reports',
  'institutions',
  'beneficiaries',
  'messages',
  'responses', // kept in list so section can still be used programmatically
  'users',
  'settings',
] as const;
type Section = (typeof sections)[number];

const sectionFeatures: Record<Section, { apiRoute?: string }> = {
  home: {},
  projects: { apiRoute: '/api/projects' },
  events: { apiRoute: '/api/events' },
  reports: { apiRoute: '/api/reports' },
  institutions: { apiRoute: '/api/institutions' },
  beneficiaries: { apiRoute: '/api/beneficiaries' },
  messages: { apiRoute: '/api/messages' },
  responses: { apiRoute: '/api/responses' },
  users: { apiRoute: '/api/users' },
  settings: {},
};

const sectionIcons: Record<Section, React.ReactNode> = {
  home: <FaHome className="text-pink-600 dark:text-pink-400" />,
  projects: <FaClipboardList className="text-yellow-600 dark:text-yellow-400" />,
  events: <FaCalendarAlt className="text-green-600 dark:text-green-400" />,
  reports: <FaFilePdf className="text-red-600 dark:text-red-400" />,
  institutions: <FaUniversity className="text-blue-600 dark:text-blue-400" />,
  beneficiaries: <FaUsers className="text-indigo-600 dark:text-indigo-400" />,
  messages: <FaEnvelope className="text-orange-500 dark:text-orange-400" />,
  responses: <FaReply className="text-purple-600 dark:text-purple-400" />,
  users: <FaUserCog className="text-gray-700 dark:text-gray-300" />,
  settings: <FaCogs className="text-gray-700 dark:text-gray-300" />,
};

const sectionLabels: Record<Section, string> = {
  home: 'Home',
  projects: 'Projects',
  events: 'Events',
  reports: 'Reports',
  institutions: 'Institutions',
  beneficiaries: 'Beneficiaries',
  messages: 'Messages',
  responses: 'Responses',
  users: 'Users',
  settings: 'Settings',
};

export default function AdminDashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<Section>('beneficiaries');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [editRecord, setEditRecord] = useState<any | null>(null);
  const [viewRecord, setViewRecord] = useState<any | null>(null);
  const [deleteId, setDeleteId] = useState<string | number | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState('');
  const sectionRef = useRef<Section>('beneficiaries');

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadColumns, setDownloadColumns] = useState<ColumnOption[]>([]);
  const [pendingDownloadData, setPendingDownloadData] = useState<any[]>([]);

  // Hide controls when viewing/editing/adding
  const [hideControls, setHideControls] = useState(false);

  useEffect(() => {
    const searchType = (searchParams.get('type') as Section) ?? null;
    const sectionToLoad: Section =
      searchType && sections.includes(searchType) ? searchType : 'beneficiaries';
    handleMenuClick(sectionToLoad);
    // eslint-disable-next-line
  }, []);

  async function handleMenuClick(section: Section) {
    const newUrl = `${pathname}?type=${section}`;
    router.replace(newUrl);
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
        const res = await fetch(feat.apiRoute);
        if (!res.ok) {
          setData([]);
          return;
        }
        const rawData = await res.json();
        if (Array.isArray(rawData)) {
          setData(rawData);
        } else if (rawData == null) {
          setData([]);
        } else {
          setData([rawData]);
        }
      } catch {
        setData([]);
      }
    } else {
      setData([]);
    }
  }

  function getSortedData(
    data: any[],
    sortBy: string,
    sortOrder: 'asc' | 'desc',
    activeSection: Section
  ) {
    if (!Array.isArray(data)) return [];
    let sorted = [...data];
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

  function getFilteredData(sortedData: any[], search: string) {
    if (!Array.isArray(sortedData)) return [];
    if (!search.trim()) return sortedData;
    const lower = search.toLowerCase();
    return sortedData.filter((item) =>
      Object.keys(item).some(
        (key) => typeof item[key] === 'string' && item[key].toLowerCase().includes(lower)
      )
    );
  }

  function getPaginatedData(filteredData: any[], page: number, rowsPerPage: number) {
    if (!Array.isArray(filteredData)) return [];
    return (filteredData ?? []).slice((page - 1) * rowsPerPage, page * rowsPerPage);
  }

  const sortedData = getSortedData(data, sortBy, sortOrder, activeSection);
  const filteredData = getFilteredData(sortedData, search);
  const pageCount = Math.max(1, Math.ceil((filteredData?.length ?? 0) / rowsPerPage));
  const paginatedData = getPaginatedData(filteredData, page, rowsPerPage);

  // Edit/View handlers
  function handleEdit(record: any) {
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

  // Unified view handler used by sections.

  async function handleView(record: any, source?: Section) {
    setHideControls(true);

    if (!record) {
      setViewRecord(null);
      return;
    }

    // If the request came from the messages list, show the MessageView (with responses)
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
              (r: any) =>
                (r.message && (r.message.id === parentId || Number(r.message.id) === parentId)) ||
                (r.messageId && Number(r.messageId) === parentId)
            )
          : [];

        setViewRecord({ ...msgData, responses: linkedResponses });
        setActiveSection('messages');
        return;
      } catch {
        // fallback to showing raw record
      }
    }

    // If the request came from responses, show ResponseView
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

    // NEW: If the request came from users, fetch full user details before showing UserView
    // This handles cases where UsersSection only passes an id (or a partial record).
    if (source === 'users' || sectionRef.current === 'users') {
      try {
        const id = record?.id ?? record;
        // Attempt to fetch the full user record from the API
        const res = await fetch(`/api/users/${id}`);
        if (res.ok) {
          const fullRecord = await res.json();
          setViewRecord(fullRecord);
          setActiveSection('users');
          return;
        }
        // If fetch fails (403/404), fall back to using the passed record (if it's an object)
      } catch {
        // ignore and fallback below
      }
    }

    // For beneficiaries, projects, events, reports, institutions or fallback, set viewRecord directly
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

  function getCurrentColumns(): any[] {
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
          return <ProjectView data={viewRecord} onClose={handleCloseView} />;
        case 'events':
          return <EventView data={viewRecord} onClose={handleCloseView} />;
        case 'reports':
          return <ReportView data={viewRecord} onClose={handleCloseView} />;
        case 'institutions':
          return <InstitutionView data={viewRecord} onClose={handleCloseView} />;
        case 'home':
          return <ChartSection />;
        case 'settings':
          // Settings section manages its own modal / edit UI internally
          return <SettingsSection currentUserId={(session?.user as any)?.id} />;
        default:
          return null;
      }
    }

    if (editRecord) {
      switch (activeSection) {
        case 'projects':
          return (
            <CreateProjectForm
              initialValues={editRecord}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          );
        case 'reports':
          return (
            <CreateReportForm
              initialValues={editRecord}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          );
        case 'events':
          return (
            <CreateEventForm
              initialValues={editRecord}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          );
        case 'institutions':
          return (
            <CreateInstitutionForm
              initialValues={editRecord}
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
              initialValues={editRecord}
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
          // Render the existing create/edit user form in edit mode.
          return (
            <CreateUserForm
              mode="edit"
              userId={String(editRecord?.id ?? editRecord?.userId ?? '')}
              initialData={editRecord?.initialData ?? undefined}
              onSuccess={handleSaveEdit}
              onCancel={handleCancelEdit}
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
            handleView={(r: any) => handleView(r, 'projects')}
            handleDelete={handleDelete}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
          />
        );
      case 'events':
        return (
          <EventsSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleView={(r: any) => handleView(r, 'events')}
            handleDelete={handleDelete}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
          />
        );
      case 'reports':
        return (
          <ReportsSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleView={(r: any) => handleView(r, 'reports')}
            handleDelete={handleDelete}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
          />
        );
      case 'institutions':
        return (
          <InstitutionsSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleView={(r: any) => handleView(r, 'institutions')}
            handleDelete={handleDelete}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
          />
        );
      case 'beneficiaries':
        return (
          <BeneficiariesSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleView={(r: any) => handleView(r, 'beneficiaries')}
            handleDelete={handleDelete}
            messagesCountMap={{}}
            requestsCountMap={{}}
            currentUserRole={(session?.user as any)?.role ?? ''}
            TableActions={() => null}
            onAddMessage={(id: string) => {
              // open create message modal bound to beneficiary
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
            handleView={(r: any) => handleView(r, 'messages')}
            handleDelete={handleDelete}
            onRespond={handleRespondToMessage}
            currentUserRole={(session?.user as any)?.role ?? ''}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
          />
        );
      case 'responses':
        return (
          <ResponsesSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleView={(r: any) => handleView(r, 'responses')}
            handleDelete={handleDelete}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
          />
        );
      case 'users':
        return (
          <UsersSection
            paginatedData={paginatedData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleEdit={handleEdit}
            handleView={(r: any) => handleView(r, 'users')}
            handleDelete={handleDelete}
            TableActions={() => null}
            deleteId={deleteId}
            deleteLoading={deleteLoading}
          />
        );
      case 'settings':
        // SettingsSection is rendered above when viewRecord is not set; here we also render it when selected as activeSection
        return <SettingsSection currentUserId={(session?.user as any)?.id} />;
      default:
        return null;
    }
  }

  const isSettingsSection = activeSection === 'settings';

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 bg-white dark:bg-gray-950 border-r dark:border-gray-800 shadow-sm h-full ${
          sidebarCollapsed ? 'w-16' : 'w-60'
        } flex flex-col`}
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
        <nav className="mt-2 flex-1 overflow-y-auto">
          {sections.map((section) => {
            // Comment out the Responses tab from the sidebar by skipping rendering for it.
            // We keep 'responses' in the sections array so the section can still be used programmatically.
            if (section === 'responses') {
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
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-y-auto p-4 bg-white dark:bg-gray-900 transition-colors">
        {/* Top bar */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-2xl">{sectionIcons[activeSection]}</span>
          <span className="text-xl font-bold text-gray-700 dark:text-gray-100">
            {sectionLabels[activeSection]}
          </span>
        </div>

        {/* Controls */}
        {!hideControls && (
          <TableControls
            search={search}
            setSearch={setSearch}
            onAddNew={handleAddNew}
            exportExcel={handleExportExcel}
            downloadPDF={handleDownloadPDFButton}
            activeSection={activeSection}
            sectionLabels={sectionLabels}
            hideSearch={false}
            addNewLabel={isSettingsSection ? undefined : `Add New ${sectionLabels[activeSection]}`}
          />
        )}

        {/* Section Content */}
        <div className="w-full flex flex-col">
          {activeSection && <div className="mt-2 w-full">{renderSection()}</div>}
        </div>

        {/* Pagination */}
        {pageCount > 1 && !hideControls && (
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

        {/* Download Modal */}
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
