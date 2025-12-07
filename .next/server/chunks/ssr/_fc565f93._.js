module.exports = {

"[project]/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/utils/useHybridCachedData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useHybridCachedData": (()=>useHybridCachedData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useHybridCachedData(key, fetcher, options = {}) {
    // Default staleTime is 1 minutes
    const { initialData, staleTime = 1 * 60 * 1000 } = options;
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!initialData);
    // Always show cached data if available, but always fetch in background for freshness
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        return ()=>{
            cancelled = true;
        };
    // eslint-disable-next-line
    }, [
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
}}),
"[project]/lib/permissions.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/app/(admin)/admin/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminDashboardPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/useHybridCachedData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './components/downloadColumnsModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/handleDownloadPDF'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$permissions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/permissions.ts [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './components/sections/ProjectsSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/sections/ReportsSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/sections/EventsSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/sections/InstitutionsSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/sections/BeneficiariesSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/sections/BeneficiaryMessagesSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/sections/BeneficiaryRequestsSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/sections/BeneficiaryRequestResponseSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/sections/ChartsSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/sections/AdminSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/sections/HomePageSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Your dynamic form imports, keep as in your original code
const CreateHomepageForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            null
        ]
    },
    ssr: false
});
const CreateExecutiveMessageForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            null
        ]
    },
    ssr: false
});
const CreateBeneficiaryForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            null
        ]
    },
    ssr: false
});
const CreateBeneficiaryMessageForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            null
        ]
    },
    ssr: false
});
const CreateBeneficiaryRequestForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            null
        ]
    },
    ssr: false
});
const CreateBeneficiaryRequestResponseForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            null
        ]
    },
    ssr: false
});
const sections = [
    'events',
    'projects',
    'reports',
    'institutions',
    'beneficiaries',
    'beneficiaryMessages',
    'beneficiaryRequests',
    'beneficiaryRequestResponse',
    'charts',
    'Home Page',
    'admin'
];
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$permissions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["permissions"][type]?.view?.includes(role);
}
function AdminDashboardPage() {
    // State and hooks
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editRecord, setEditRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showCreateForm, setShowCreateForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showExecMsgForm, setShowExecMsgForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('createdAt');
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('desc');
    const [rowsPerPage, setRowsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(activeSection);
    const [showCreateBeneficiaryMessageForm, setShowCreateBeneficiaryMessageForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCreateBeneficiaryRequestForm, setShowCreateBeneficiaryRequestForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedBeneficiaryId, setSelectedBeneficiaryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showRespondForm, setShowRespondForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [respondRequestId, setRespondRequestId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const homepageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const defaultRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [downloadModalOpen, setDownloadModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [downloadColumns, setDownloadColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pendingDownloadData, setPendingDownloadData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [responsesCountMap, setResponsesCountMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [messagesCountMap, setMessagesCountMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [requestsCountMap, setRequestsCountMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const { data: homepageData, isLoading: loadingHomepage, refresh: refreshHomepage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHybridCachedData"])('admin-dashboard-homepage-v1', async ()=>{
        const res = await fetch('/api/homepage-content');
        if (!res.ok) throw new Error('Failed to fetch homepage data');
        const d = await res.json();
        return d ? [
            d
        ] : [];
    });
    const { data: messagesData, isLoading: loadingMessages, refresh: refreshMessages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHybridCachedData"])('admin-dashboard-messages-v1', async ()=>{
        const res = await fetch('/api/executive-messages');
        if (!res.ok) throw new Error('Failed to fetch messages data');
        return await res.json();
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeSection === 'beneficiaryRequests' && data.length > 0) {
            fetch('/api/beneficiaryRequestResponse').then((res)=>res.json()).then((responses)=>{
                const map = {};
                responses.forEach((resp)=>{
                    const reqId = resp.responseId;
                    map[reqId] = (map[reqId] || 0) + 1;
                });
                setResponsesCountMap(map);
            }).catch(()=>{});
        }
    }, [
        activeSection,
        data
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeSection === 'beneficiaries') {
            fetch('/api/beneficiaryMessages').then((res)=>res.json()).then((messages)=>{
                const map = {};
                messages.forEach((msg)=>{
                    if (msg.beneficiaryId) {
                        map[msg.beneficiaryId] = (map[msg.beneficiaryId] || 0) + 1;
                    }
                });
                setMessagesCountMap(map);
            });
            fetch('/api/beneficiaryRequests').then((res)=>res.json()).then((requests)=>{
                const map = {};
                requests.forEach((req)=>{
                    if (req.beneficiaryId) {
                        map[req.beneficiaryId] = (map[req.beneficiaryId] || 0) + 1;
                    }
                });
                setRequestsCountMap(map);
            });
        }
    }, [
        activeSection
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (status === 'unauthenticated') {
            router.replace('/admin');
        }
    }, [
        status,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const searchType = searchParams.get('type');
        const defalultSection = 'charts';
        const sectionToLoad = searchType && sections.includes(searchType) ? searchType : defalultSection;
        handleCardClick(sectionToLoad);
    // eslint-disable-next-line
    }, []);
    function norm(v) {
        return (v ?? '').trim().toLowerCase();
    }
    function filterOwn(section, rows) {
        const u = session?.user;
        if (!u) return [];
        if (u.role !== 'beneficiary') return rows;
        const meFirst = norm(u.firstName);
        const meLast = norm(u.lastName);
        if (section === 'beneficiaries') {
            return rows.filter((r)=>norm(r.firstName) === meFirst && norm(r.lastName) === meLast);
        }
        if (section === 'beneficiaryMessages' || section === 'beneficiaryRequests') {
            return rows.filter((r)=>{
                const b = r?.beneficiary ?? {};
                return norm(b.firstName) === meFirst && norm(b.lastName) === meLast;
            });
        }
        if (section === 'beneficiaryRequestResponse') {
            return rows.filter((r)=>{
                const b = r?.request?.beneficiary ?? {};
                return norm(b.firstName) === meFirst && norm(b.lastName) === meLast;
            });
        }
        return rows;
    }
    async function handleCardClick(section) {
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
    function handleEdit(record) {
        if (activeSection === 'Home Page' && messagesData && messagesData.some((msg)=>msg.id === record.id)) {
            setEditRecord(record);
            setShowExecMsgForm(true);
            setShowCreateForm(false);
        } else if (activeSection === 'Home Page' && homepageData && homepageData.some((home)=>home.id === record.id)) {
            setEditRecord(record);
            setShowCreateForm(true);
            setShowExecMsgForm(false);
        } else {
            setEditRecord(record);
            setShowCreateForm(false);
            setShowExecMsgForm(false);
        }
    }
    async function handleDelete(type, id) {
        const typeLabel = type.replace('-', ' ').replace(/s$/, '');
        if (!confirm(`Are you sure you want to delete this ${typeLabel}?`)) return;
        try {
            const res = await fetch(`/api/${type}/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                setData((prev)=>prev.filter((item)=>item.id !== id));
                if (type === 'homepage-content') refreshHomepage();
                if (type === 'executive-messages') refreshMessages();
            } else {
                const data = await res.json();
                alert(data.error || `Failed to delete ${typeLabel}. Please try again`);
            }
        } catch (error) {
            console.error(`Error deleting ${typeLabel}:`, error);
            alert(`An error occurred while deleting the ${typeLabel}.`);
        }
    }
    // Section features for columns and API routes (keep as in your original code)
    const sectionFeatures = {
    };
    const role = session?.user?.role ?? 'guest';
    const activePermKey = activeSection ? permKeyMap[activeSection] : undefined;
    const canViewThisSection = activePermKey ? canView(activePermKey, role) : true;
    // Defensive array handling
    const sortedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!data) return [];
        if (!activeSection || !sectionFeatures[activeSection]?.sortable) return data ?? [];
        let sorted = [
            ...data
        ];
        sorted.sort((a, b)=>{
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
    }, [
        data,
        sortBy,
        sortOrder,
        activeSection
    ]);
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!sortedData) return [];
        if (!activeSection || !sectionFeatures[activeSection]?.searchable || !search.trim()) return sortedData ?? [];
        const lower = search.toLowerCase();
        return sortedData.filter((item)=>Object.keys(item).some((key)=>typeof item[key] === 'string' && item[key].toLowerCase().includes(lower)));
    }, [
        sortedData,
        search,
        activeSection
    ]);
    const pageCount = Math.ceil((filteredData?.length ?? 0) / rowsPerPage);
    const paginatedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(filteredData ?? []).slice((page - 1) * rowsPerPage, page * rowsPerPage), [
        filteredData,
        page,
        rowsPerPage
    ]);
    // TableActions as in your original code
    const TableActions = ({ data, columns, tableRef })=>{
        const handleExportExcel = ()=>{
            const headers = columns.filter((col)=>col.header && col.header !== 'Actions' && col.header !== 'Delete').map((col)=>typeof col.header === 'function' ? col.header({}) : col.header);
            const exportableCols = columns.filter((col)=>col.header && col.header !== 'Actions' && col.header !== 'Delete');
            const rows = data.map((row, idx)=>exportableCols.map((col)=>{
                    if (col.id === 'number') return idx + 1;
                    return row[col.id || col.accessorKey] ?? '';
                }));
            const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet([
                headers,
                ...rows
            ]);
            const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, 'Sheet1');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"])(wb, 'table.xlsx');
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-2 inline-flex gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-2 py-1 border rounded text-sm",
                    title: "Export to Excel",
                    onClick: handleExportExcel,
                    children: "Export to Excel"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/page.tsx",
                    lineNumber: 401,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-2 py-1 border rounded text-sm",
                    title: "Download as PDF",
                    onClick: ()=>{
                        const columnOptions = columns.filter((col)=>col.header && col.header !== 'Actions' && col.header !== 'Delete').map((col)=>({
                                id: col.id || col.accessorKey,
                                label: typeof col.header === 'function' ? col.header({}) : col.header
                            }));
                        setDownloadColumns(columnOptions);
                        setPendingDownloadData(data);
                        setDownloadModalOpen(true);
                    },
                    children: "Download as PDF"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/page.tsx",
                    lineNumber: 408,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/admin/page.tsx",
            lineNumber: 400,
            columnNumber: 7
        }, this);
    };
    // Render active section
    function renderSection() {
        switch(activeSection){
            case 'projects':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectsSection, {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleDelete: (id)=>handleDelete('projects', id),
                    TableActions: TableActions
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/page.tsx",
                    lineNumber: 434,
                    columnNumber: 11
                }, this);
            case 'reports':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportsSection, {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleDelete: (id)=>handleDelete('reports', id),
                    TableActions: TableActions
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/page.tsx",
                    lineNumber: 445,
                    columnNumber: 11
                }, this);
            case 'events':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EventsSection, {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleDelete: (id)=>handleDelete('events', id),
                    TableActions: TableActions
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/page.tsx",
                    lineNumber: 456,
                    columnNumber: 11
                }, this);
            case 'institutions':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InstitutionsSection, {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleDelete: (id)=>handleDelete('institutions', id),
                    TableActions: TableActions
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/page.tsx",
                    lineNumber: 467,
                    columnNumber: 11
                }, this);
            case 'beneficiaries':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BeneficiariesSection, {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleDelete: (id)=>handleDelete('beneficiaries', id),
                    messagesCountMap: messagesCountMap,
                    requestsCountMap: requestsCountMap,
                    currentUserRole: role,
                    TableActions: TableActions,
                    onAddMessage: (id)=>{
                        setSelectedBeneficiaryId(id);
                        setShowCreateBeneficiaryMessageForm(true);
                    },
                    onAddRequest: (id)=>{
                        setSelectedBeneficiaryId(id);
                        setShowCreateBeneficiaryRequestForm(true);
                    }
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/page.tsx",
                    lineNumber: 478,
                    columnNumber: 11
                }, this);
            case 'beneficiaryMessages':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BeneficiaryMessagesSection, {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleDelete: (id)=>handleDelete('beneficiaryMessages', id),
                    currentUserRole: role,
                    TableActions: TableActions
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/page.tsx",
                    lineNumber: 500,
                    columnNumber: 11
                }, this);
            case 'beneficiaryRequests':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BeneficiaryRequestsSection, {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleDelete: (id)=>handleDelete('beneficiaryRequests', id),
                    responsesCountMap: responsesCountMap,
                    TableActions: TableActions,
                    onRespond: (id)=>{
                        setRespondRequestId(id);
                        setShowRespondForm(true);
                    }
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/page.tsx",
                    lineNumber: 512,
                    columnNumber: 11
                }, this);
            case 'beneficiaryRequestResponse':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BeneficiaryRequestResponseSection, {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleDelete: (id)=>handleDelete('beneficiaryRequestResponse', id),
                    TableActions: TableActions
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/page.tsx",
                    lineNumber: 528,
                    columnNumber: 11
                }, this);
            case 'charts':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartsSection, {}, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/page.tsx",
                    lineNumber: 538,
                    columnNumber: 16
                }, this);
            case 'admin':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminSection, {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleDelete: (id)=>handleDelete('users', id),
                    TableActions: TableActions
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/page.tsx",
                    lineNumber: 541,
                    columnNumber: 11
                }, this);
            case 'Home Page':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HomePageSection, {
                    homepageData: homepageData,
                    messagesData: messagesData,
                    handleEdit: handleEdit,
                    handleDelete: handleDelete,
                    showExecMsgAddButton: activeSection === 'Home Page' && !showCreateForm && !showExecMsgForm && !editRecord,
                    onAddExecMsg: ()=>{
                        setEditRecord(null);
                        setShowExecMsgForm(true);
                        setShowCreateForm(false);
                    },
                    TableActions: TableActions,
                    homepageRef: homepageRef,
                    messagesRef: messagesRef
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/page.tsx",
                    lineNumber: 552,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    }
    // Main render
    if (status === 'loading') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Checking session ..."
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/page.tsx",
            lineNumber: 577,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 mb-4",
                children: sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        onClick: ()=>handleCardClick(section),
                        className: `
              cursor-pointer 
              px-4 py-3
              flex items-center justify-center text-center
              rounded-sm  
              whitespace-nowrap
              font-medium
              transition 
              ${activeSection === section ? 'bg-[#9f004d] text-white shadow-2xl border-2 border-[#9f004d] scale-105' : 'text-gray-400 opacity-70 grayscale hover:opacity-100 hover:grayscale-0'}
              `,
                        style: {
                            width: 'auto',
                            minWidth: '3rem',
                            maxWidth: '100%'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2",
                            children: section.replace(/([A-Z])/g, ' $1').toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/page.tsx",
                            lineNumber: 603,
                            columnNumber: 13
                        }, this)
                    }, section, false, {
                        fileName: "[project]/app/(admin)/admin/page.tsx",
                        lineNumber: 584,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/page.tsx",
                lineNumber: 582,
                columnNumber: 7
            }, this),
            activeSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: renderSection()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/page.tsx",
                lineNumber: 607,
                columnNumber: 25
            }, this),
            pageCount > 1 && !showCreateForm && !showExecMsgForm && !editRecord && !showCreateBeneficiaryMessageForm && !showCreateBeneficiaryRequestForm && !showRespondForm && activeSection !== 'Home Page' && canViewThisSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mt-4 justify-end items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-2 py-1 rounded border",
                        disabled: page === 1,
                        onClick: ()=>setPage(page - 1),
                        children: "Prev"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/page.tsx",
                        lineNumber: 619,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Page ",
                            page,
                            " of ",
                            pageCount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/page.tsx",
                        lineNumber: 626,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-2 py-1 rounded border",
                        disabled: page === pageCount,
                        onClick: ()=>setPage(page + 1),
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/page.tsx",
                        lineNumber: 629,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/page.tsx",
                lineNumber: 618,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DownloadColumnsModal, {
                isOpen: downloadModalOpen,
                onClose: ()=>setDownloadModalOpen(false),
                columns: downloadColumns,
                onDownload: (selectedColumns)=>{
                    handleDownloadPDF(pendingDownloadData, selectedColumns, activeSection ? activeSection.charAt(0).toUpperCase() + activeSection.slice(1) : 'Data');
                }
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/page.tsx",
                lineNumber: 639,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/page.tsx",
        lineNumber: 581,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=_fc565f93._.js.map