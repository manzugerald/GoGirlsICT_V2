(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/utils/useHybridCachedData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useHybridCachedData": (()=>useHybridCachedData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useHybridCachedData(key, fetcher, options = {}) {
    _s();
    // Default staleTime is 1 minutes
    const { initialData, staleTime = 1 * 60 * 1000 } = options;
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!initialData);
    // Always show cached data if available, but always fetch in background for freshness
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHybridCachedData.useEffect": ()=>{
            let cancelled = false;
            async function load() {
                // Try localStorage first
                let usedCache = false;
                try {
                    const raw = localStorage.getItem(key);
                    if (raw) {
                        const parsed = JSON.parse(raw);
                        setData(parsed.value);
                        setIsLoading(false);
                        usedCache = true;
                    }
                } catch  {}
                // Use initialData if provided and nothing in cache
                if (!usedCache && initialData !== undefined) {
                    setData(initialData);
                    setIsLoading(false);
                }
                // Always fetch in background
                setIsLoading(true);
                const fresh = await fetcher();
                if (!cancelled) {
                    setData(fresh);
                    setIsLoading(false);
                    try {
                        localStorage.setItem(key, JSON.stringify({
                            value: fresh,
                            ts: Date.now()
                        }));
                    } catch  {}
                }
            }
            load();
            return ({
                "useHybridCachedData.useEffect": ()=>{
                    cancelled = true;
                }
            })["useHybridCachedData.useEffect"];
        // eslint-disable-next-line
        }
    }["useHybridCachedData.useEffect"], [
        key
    ]);
    // Manual refresh
    const refresh = async ()=>{
        setIsLoading(true);
        const fresh = await fetcher();
        setData(fresh);
        setIsLoading(false);
        try {
            localStorage.setItem(key, JSON.stringify({
                value: fresh,
                ts: Date.now()
            }));
        } catch  {}
    };
    return {
        data,
        isLoading,
        refresh
    };
}
_s(useHybridCachedData, "VYg+YRNNHXYAisVjLvi/7MYWFrc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/permissions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Role definitions:
// super: Full control, including user create/delete
// admin: Broad management, except user create/delete
// moderator: Content management/moderation
// beneficiary: Manage own profile, requests/messages
// guest: View published content only
__turbopack_context__.s({
    "permissions": (()=>permissions)
});
const permissions = {
    // --- Users ---
    User: {
        create: [
            'super'
        ],
        update: [
            'super',
            'admin'
        ],
        delete: [
            'super'
        ],
        view: [
            'super',
            'admin',
            'moderator'
        ],
        updateOwn: [
            'beneficiary'
        ]
    },
    // --- Projects ---
    Project: {
        createDraft: [
            'super',
            'admin',
            'moderator'
        ],
        updateDraft: [
            'super',
            'admin',
            'moderator'
        ],
        publish: [
            'super',
            'admin'
        ],
        delete: [
            'super',
            'admin'
        ],
        view: [
            'super',
            'admin',
            'moderator',
            'beneficiary',
            'guest'
        ]
    },
    // --- Reports ---
    Report: {
        createDraft: [
            'super',
            'admin',
            'moderator'
        ],
        updateDraft: [
            'super',
            'admin',
            'moderator'
        ],
        publish: [
            'super',
            'admin'
        ],
        delete: [
            'super',
            'admin'
        ],
        view: [
            'super',
            'admin',
            'moderator',
            'beneficiary',
            'guest'
        ]
    },
    // --- Messages ---
    Message: {
        createDraft: [
            'super',
            'admin',
            'moderator',
            'beneficiary'
        ],
        createForBeneficiary: [
            'super',
            'admin',
            'moderator',
            'beneficiary'
        ],
        updateDraft: [
            'super',
            'admin',
            'moderator',
            'beneficiary'
        ],
        publish: [
            'super',
            'admin',
            'moderator'
        ],
        delete: [
            'super',
            'admin'
        ],
        view: [
            'super',
            'admin',
            'moderator',
            'beneficiary',
            'guest'
        ],
        updateOwn: [
            'beneficiary'
        ]
    },
    // --- Events ---
    Event: {
        createDraft: [
            'super',
            'admin',
            'moderator'
        ],
        updateDraft: [
            'super',
            'admin',
            'moderator'
        ],
        publish: [
            'super',
            'admin'
        ],
        delete: [
            'super',
            'admin'
        ],
        view: [
            'super',
            'admin',
            'moderator',
            'beneficiary',
            'guest'
        ]
    },
    // --- Institutions ---
    Institution: {
        create: [
            'super',
            'admin',
            'moderator'
        ],
        update: [
            'super',
            'admin'
        ],
        approve: [
            'super',
            'admin'
        ],
        delete: [
            'super',
            'admin'
        ],
        view: [
            'super',
            'admin',
            'moderator',
            'beneficiary',
            'guest'
        ]
    },
    // --- Beneficiaries ---
    Beneficiary: {
        create: [
            'super',
            'admin'
        ],
        update: [
            'super',
            'admin',
            'beneficiary'
        ],
        approve: [
            'super',
            'admin'
        ],
        delete: [
            'super',
            'admin'
        ],
        view: [
            'super',
            'admin',
            'moderator',
            'beneficiary',
            'guest'
        ],
        updateOwn: [
            'beneficiary'
        ]
    },
    // --- Beneficiary Requests ---
    BeneficiaryRequest: {
        createDraft: [
            'super',
            'admin',
            'moderator',
            'beneficiary'
        ],
        updateDraft: [
            'super',
            'admin',
            'moderator',
            'beneficiary'
        ],
        publish: [
            'super',
            'admin',
            'moderator'
        ],
        delete: [
            'super',
            'admin'
        ],
        view: [
            'super',
            'admin',
            'moderator',
            'beneficiary',
            'guest'
        ],
        updateOwn: [
            'beneficiary'
        ]
    },
    // --- Beneficiary Messages ---
    BeneficiaryMessage: {
        createDraft: [
            'super',
            'admin',
            'moderator',
            'beneficiary'
        ],
        updateDraft: [
            'super',
            'admin',
            'moderator',
            'beneficiary'
        ],
        publish: [
            'super',
            'admin',
            'moderator'
        ],
        delete: [
            'super',
            'admin'
        ],
        view: [
            'super',
            'admin',
            'moderator',
            'beneficiary',
            'guest'
        ],
        updateOwn: [
            'beneficiary'
        ]
    },
    // --- Beneficiary Request Response ---
    BeneficiaryRequestResponse: {
        create: [
            'super',
            'admin',
            'moderator'
        ],
        update: [
            'super',
            'admin',
            'moderator'
        ],
        delete: [
            'super',
            'admin'
        ],
        view: [
            'super',
            'admin',
            'moderator',
            'beneficiary'
        ]
    },
    // --- HomePage ---
    HomePage: {
        update: [
            'super',
            'admin'
        ],
        view: [
            'super',
            'admin',
            'moderator',
            'beneficiary',
            'guest'
        ]
    },
    // --- Video / Facebook / CacheMeta ---
    Video: {
        view: [
            'super',
            'admin',
            'moderator',
            'beneficiary',
            'guest'
        ]
    },
    FacebookPost: {
        view: [
            'super',
            'admin',
            'moderator',
            'beneficiary',
            'guest'
        ]
    },
    FacebookCacheMeta: {
        view: [
            'super',
            'admin',
            'moderator'
        ]
    },
    YouTubeCacheMeta: {
        view: [
            'super',
            'admin',
            'moderator'
        ]
    },
    // --- Location ---
    Location: {
        create: [
            'super',
            'admin'
        ],
        update: [
            'super',
            'admin'
        ],
        delete: [
            'super',
            'admin'
        ],
        view: [
            'super',
            'admin',
            'moderator',
            'beneficiary',
            'guest'
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminDashboardPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/useHybridCachedData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/permissions.ts [app-client] (ecmascript)");
// Icons
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// Rearranged sections with charts first
const sections = [
    'charts',
    'projects',
    'events',
    'reports',
    'institutions',
    'beneficiaries',
    'beneficiaryMessages',
    'beneficiaryRequests',
    'beneficiaryRequestResponse',
    'Home Page',
    'admin'
];
// Icons with color classes supporting dark mode via Tailwind (use text-... and dark:text-...)
const sectionIcons = {
    charts: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChartPie"], {
        className: "text-pink-600 dark:text-pink-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 61,
        columnNumber: 11
    }, this),
    projects: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaClipboardList"], {
        className: "text-yellow-600 dark:text-yellow-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 62,
        columnNumber: 13
    }, this),
    events: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCalendarAlt"], {
        className: "text-green-600 dark:text-green-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 63,
        columnNumber: 11
    }, this),
    reports: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFilePdf"], {
        className: "text-red-600 dark:text-red-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 64,
        columnNumber: 12
    }, this),
    institutions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUniversity"], {
        className: "text-blue-600 dark:text-blue-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 65,
        columnNumber: 17
    }, this),
    beneficiaries: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUsers"], {
        className: "text-indigo-600 dark:text-indigo-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 66,
        columnNumber: 18
    }, this),
    beneficiaryMessages: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
        className: "text-orange-500 dark:text-orange-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 67,
        columnNumber: 24
    }, this),
    beneficiaryRequests: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaClipboardList"], {
        className: "text-teal-600 dark:text-teal-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 68,
        columnNumber: 24
    }, this),
    beneficiaryRequestResponse: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReply"], {
        className: "text-purple-600 dark:text-purple-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 69,
        columnNumber: 31
    }, this),
    'Home Page': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHome"], {
        className: "text-pink-700 dark:text-pink-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 70,
        columnNumber: 16
    }, this),
    admin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserCog"], {
        className: "text-gray-700 dark:text-gray-300"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 71,
        columnNumber: 10
    }, this)
};
const sectionLabels = {
    charts: 'Charts',
    projects: 'Projects',
    events: 'Events',
    reports: 'Reports',
    institutions: 'Institutions',
    beneficiaries: 'Beneficiaries',
    beneficiaryMessages: 'Beneficiary Messages',
    beneficiaryRequests: 'Beneficiary Requests',
    beneficiaryRequestResponse: 'Beneficiary Request Response',
    'Home Page': 'Home Page',
    admin: 'Admin'
};
const rowsPerPageOptions = [
    5,
    10,
    25,
    50
];
const permKeyMap = {
    projects: 'Project',
    reports: 'Report',
    admin: 'User',
    events: 'Event',
    institutions: 'Institution',
    beneficiaries: 'Beneficiary',
    beneficiaryMessages: 'BeneficiaryMessage',
    beneficiaryRequests: 'BeneficiaryRequest',
    beneficiaryRequestResponse: 'BeneficiaryRequestResponse',
    charts: 'Project',
    'Home Page': 'HomePage'
};
function canView(type, role) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["permissions"][type]?.view?.includes(role);
}
function AdminDashboardPage() {
    _s();
    // State and hooks...
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('charts');
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editRecord, setEditRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showCreateForm, setShowCreateForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showExecMsgForm, setShowExecMsgForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('createdAt');
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('desc');
    const [rowsPerPage, setRowsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(activeSection);
    const [showCreateBeneficiaryMessageForm, setShowCreateBeneficiaryMessageForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCreateBeneficiaryRequestForm, setShowCreateBeneficiaryRequestForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedBeneficiaryId, setSelectedBeneficiaryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showRespondForm, setShowRespondForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [respondRequestId, setRespondRequestId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const homepageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const defaultRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [downloadModalOpen, setDownloadModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [downloadColumns, setDownloadColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pendingDownloadData, setPendingDownloadData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [responsesCountMap, setResponsesCountMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [messagesCountMap, setMessagesCountMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [requestsCountMap, setRequestsCountMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const { data: homepageData, isLoading: loadingHomepage, refresh: refreshHomepage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHybridCachedData"])('admin-dashboard-homepage-v1', {
        "AdminDashboardPage.useHybridCachedData": async ()=>{
            const res = await fetch('/api/homepage-content');
            if (!res.ok) throw new Error('Failed to fetch homepage data');
            const d = await res.json();
            return d ? [
                d
            ] : [];
        }
    }["AdminDashboardPage.useHybridCachedData"]);
    const { data: messagesData, isLoading: loadingMessages, refresh: refreshMessages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHybridCachedData"])('admin-dashboard-messages-v1', {
        "AdminDashboardPage.useHybridCachedData": async ()=>{
            const res = await fetch('/api/executive-messages');
            if (!res.ok) throw new Error('Failed to fetch messages data');
            return await res.json();
        }
    }["AdminDashboardPage.useHybridCachedData"]);
    // ...effects for counts, permissions, etc. as before...
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboardPage.useEffect": ()=>{
            const searchType = searchParams.get('type');
            const defalultSection = 'charts';
            const sectionToLoad = searchType && sections.includes(searchType) ? searchType : defalultSection;
            handleMenuClick(sectionToLoad);
        // eslint-disable-next-line
        }
    }["AdminDashboardPage.useEffect"], []);
    async function handleMenuClick(section) {
        const newUrl = `${pathname}?type=${section}`;
        router.replace(newUrl);
        setActiveSection(section);
        setEditRecord(null);
        setShowCreateForm(false);
        setShowExecMsgForm(false);
        setShowCreateBeneficiaryMessageForm(false);
        setShowCreateBeneficiaryRequestForm(false);
        setSelectedBeneficiaryId(null);
        setShowRespondForm(false);
        setRespondRequestId(null);
        setPage(1);
        sectionRef.current = section;
        const feat = sectionFeatures[section];
        if (section === 'Home Page') {
        // nothing, handled below
        } else if (feat?.apiRoute) {
            try {
                const res = await fetch(feat.apiRoute);
                if (!res.ok) {
                    setData([]);
                    return;
                }
                const rawData = await res.json();
                setData(filterOwn(section, rawData));
            } catch  {
                setData([]);
            }
        } else {
            setData([]);
        }
    }
    // ...all other helper functions, defensive array handling, TableActions, renderSection, etc...
    // Layout
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `transition-all duration-300 bg-white dark:bg-gray-950 border-r dark:border-gray-800 shadow-sm h-full ${sidebarCollapsed ? 'w-16' : 'w-60'} flex flex-col`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-2 py-4 border-b dark:border-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold text-pink-600 dark:text-pink-400 hidden sm:block",
                                children: !sidebarCollapsed && 'Dashboard'
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "ml-auto p-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400",
                                onClick: ()=>setSidebarCollapsed((c)=>!c),
                                "aria-label": sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar',
                                children: sidebarCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaAngleRight"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaAngleLeft"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 62
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "mt-2 flex-1 overflow-y-auto",
                        children: sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleMenuClick(section),
                                className: `w-full flex items-center gap-3 px-2 py-2 rounded transition-all font-medium
                ${activeSection === section ? 'bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-pink-700 dark:hover:text-pink-400'}
              `,
                                style: {
                                    minWidth: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: sectionIcons[section]
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this),
                                    !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: sectionLabels[section]
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, section, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 overflow-y-auto p-4 bg-white dark:bg-gray-900 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: sectionIcons[activeSection]
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold text-gray-700 dark:text-gray-100",
                                children: sectionLabels[activeSection]
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: activeSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: renderSection()
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                            lineNumber: 267,
                            columnNumber: 32
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
_s(AdminDashboardPage, "z1CGaoWYlDw1J/KaDG5V2f+0PJ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHybridCachedData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHybridCachedData"]
    ];
});
_c = AdminDashboardPage;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_fb6f2e62._.js.map