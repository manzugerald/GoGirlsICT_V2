(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/utils/styles/card-hover.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cardHoverClass": (()=>cardHoverClass)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const cardHoverClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('relative overflow-hidden rounded-xl transition-transform duration-300 perspective-[1200px]', 'cursor-pointer', 'bg-white text-gray-900 border border-gray-200 shadow-md shadow-gray-300/30', 'hover:shadow-2xl hover:scale-[1.02] hover:border-violet-700 hover:shadow-violet-700/60', 'dark:backdrop-blur-sm dark:bg-zinc-900/70 dark:text-white dark:border-card dark:shadow-md dark:shadow-black/30', 'dark:hover:shadow-2xl dark:hover:scale-[1.02] dark:hover:border-pink-700 dark:hover:shadow-pink-700/50');
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AnimatedStats)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$styles$2f$card$2d$hover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/styles/card-hover.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
// ---- Slightly reduced dimensions, animation untouched ----
const CARD_MIN_WIDTH = 160;
const CARD_PADDING_X = 10;
const CARD_PADDING_Y = 8;
const SVG_SIZE = 90;
const CIRCLE_RADIUS = 33;
const CIRCLE_STROKE_WIDTH = 9;
const CIRCLE_DASHARRAY = 2 * Math.PI * CIRCLE_RADIUS;
const FONT_SIZE = 38;
const ANIMATION_DURATION = 10; // seconds
const CIRCLE_DELAY_STEP = 0.32;
const STAT_LABEL_FONT_SIZE = 15;
function AnimatedStats() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const showUsers = pathname === '/admin' || pathname.startsWith('/admin/');
    const [counts, setCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        projects: 0,
        reports: 0,
        events: 0,
        users: 0,
        institutions: 0,
        beneficiaries: 0
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedStats.useEffect": ()=>{
            async function fetchCounts() {
                setLoading(true);
                try {
                    const [projectsRes, reportsRes, eventsRes, usersRes, institutionsRes, beneficiariesRes] = await Promise.all([
                        fetch('/api/projects'),
                        fetch('/api/reports'),
                        fetch('/api/events'),
                        fetch('/api/users'),
                        fetch('/api/institutions'),
                        fetch('/api/beneficiaries')
                    ]);
                    const [projects, reports, events, users, institutions, beneficiaries] = await Promise.all([
                        projectsRes.json(),
                        reportsRes.json(),
                        eventsRes.json(),
                        usersRes.json(),
                        institutionsRes.json(),
                        beneficiariesRes.json()
                    ]);
                    setCounts({
                        projects: Array.isArray(projects) ? projects.length : projects.count ?? 0,
                        reports: Array.isArray(reports) ? reports.length : reports.count ?? 0,
                        events: Array.isArray(events) ? events.length : events.count ?? 0,
                        users: Array.isArray(users) ? users.length : users.count ?? 0,
                        institutions: Array.isArray(institutions) ? institutions.length : institutions.count ?? 0,
                        beneficiaries: Array.isArray(beneficiaries) ? beneficiaries.length : beneficiaries.count ?? 0
                    });
                } catch (err) {
                    setCounts({
                        projects: 0,
                        reports: 0,
                        events: 0,
                        users: 0,
                        institutions: 0,
                        beneficiaries: 0
                    });
                }
                setLoading(false);
            }
            fetchCounts();
        }
    }["AnimatedStats.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-muted-foreground",
                style: {
                    fontSize: 24
                },
                children: "Loading stats..."
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this);
    }
    // Prepare stats to display
    const stats = [
        {
            label: 'Projects',
            value: counts.projects,
            color: '#7c3aed'
        },
        {
            label: 'Reports',
            value: counts.reports,
            color: '#f59e42'
        },
        {
            label: 'Events',
            value: counts.events,
            color: '#b87333'
        },
        {
            label: 'Institutions',
            value: counts.institutions,
            color: '#7c482b'
        },
        {
            label: 'Beneficiaries',
            value: counts.beneficiaries,
            color: '#059669'
        }
    ];
    if (showUsers) {
        stats.push({
            label: 'Users',
            value: counts.users,
            color: '#2563eb'
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full gap-5 overflow-x-auto overflow-y-visible justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
        @keyframes progressCircleDash {
          0% {
            stroke-dashoffset: ${CIRCLE_DASHARRAY};
          }
          60% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: ${CIRCLE_DASHARRAY};
          }
        }
      `
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        stat: stat,
                        index: i
                    }, stat.label, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(AnimatedStats, "XSt3KDY15n/IVIKJfFkmwZ4QbBw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AnimatedStats;
function StatCard({ stat, index }) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatCard.useEffect": ()=>{
            if (!ref.current) return;
            let start = 0;
            const end = stat.value;
            if (end === 0) {
                ref.current.textContent = '0';
                return;
            }
            const duration = 1800 + Math.random() * 800;
            const startTimestamp = performance.now();
            function animate(now) {
                const progress = Math.min((now - startTimestamp) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                if (ref.current) ref.current.textContent = value.toLocaleString();
                if (progress < 1) requestAnimationFrame(animate);
            }
            requestAnimationFrame(animate);
        }
    }["StatCard.useEffect"], [
        stat.value
    ]);
    // Stagger circle animation for each stat
    const circleDelay = `${index * CIRCLE_DELAY_STEP}s`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$styles$2f$card$2d$hover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardHoverClass"] + ' flex flex-col items-center justify-center' // center everything in the card
        ,
        style: {
            borderTop: `7px solid ${stat.color || '#7c3aed'}`,
            minWidth: CARD_MIN_WIDTH,
            padding: `${CARD_PADDING_Y}px ${CARD_PADDING_X}px`,
            height: 'auto',
            marginBottom: '16px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center relative mb-2",
                style: {
                    width: SVG_SIZE,
                    height: SVG_SIZE,
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: SVG_SIZE,
                        height: SVG_SIZE,
                        style: {
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            zIndex: 0,
                            display: 'block',
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: SVG_SIZE / 2,
                                cy: SVG_SIZE / 2,
                                r: CIRCLE_RADIUS,
                                fill: "none",
                                stroke: "#e5e7eb",
                                strokeWidth: CIRCLE_STROKE_WIDTH
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: SVG_SIZE / 2,
                                cy: SVG_SIZE / 2,
                                r: CIRCLE_RADIUS,
                                fill: "none",
                                stroke: stat.color || '#7c3aed',
                                strokeWidth: CIRCLE_STROKE_WIDTH,
                                strokeDasharray: CIRCLE_DASHARRAY,
                                strokeDashoffset: CIRCLE_DASHARRAY,
                                style: {
                                    transition: 'none',
                                    strokeLinecap: 'round',
                                    filter: `drop-shadow(0 0 8px ${stat.color || '#7c3aed'}66)`,
                                    transform: 'rotate(-90deg)',
                                    transformOrigin: '50% 50%',
                                    animation: `progressCircleDash ${ANIMATION_DURATION}s cubic-bezier(.56,1.84,.64,1) ${circleDelay} infinite`
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: ref,
                        className: "flex items-center justify-center",
                        style: {
                            color: stat.color || '#7c3aed',
                            position: 'relative',
                            zIndex: 1,
                            width: SVG_SIZE,
                            height: SVG_SIZE,
                            fontVariantNumeric: 'tabular-nums',
                            letterSpacing: '-0.02em',
                            userSelect: 'none',
                            fontSize: FONT_SIZE,
                            fontWeight: 800,
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        },
                        children: "0"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: STAT_LABEL_FONT_SIZE,
                    marginTop: 6,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#6b7280',
                    fontWeight: 600,
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: CARD_MIN_WIDTH
                },
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
} // This component displays animated stats cards with a progress circle animation.
 // It fetches counts for projects, reports, events, users, institutions, and beneficiaries from the API.
 // Each card shows a circular progress animation with the count value in the center.
_s1(StatCard, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c1 = StatCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedStats");
__turbopack_context__.k.register(_c1, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/chart/components/animatedPieceBarChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AnimatedPieceBarChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
// Added color for Beneficiaries. Institutions uses same as before.
const defaultColors = [
    '#7c3aed',
    '#f59e42',
    '#059669',
    '#7c482b',
    '#2563eb',
    '#eab308'
];
function AnimatedPieceBarChart({ values = [
    7,
    4,
    9,
    3,
    6,
    12
], labels = [
    'Projects',
    'Reports',
    'Events',
    'Institutions',
    'Users',
    'Beneficiaries'
], colors = defaultColors, animationDuration = 1600, loopPause = 800 }) {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // 0 to 1
    const [loopKey, setLoopKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // change to restart animation
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Looping fill animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedPieceBarChart.useEffect": ()=>{
            let frame;
            let start = null;
            let stopped = false;
            function animate(ts) {
                if (stopped) return;
                if (start === null) start = ts;
                const elapsed = ts - start;
                let pct = Math.min(elapsed / animationDuration, 1);
                setProgress(pct);
                if (pct < 1) {
                    frame = requestAnimationFrame(animate);
                } else {
                    // Pause with full bar, then restart
                    setTimeout({
                        "AnimatedPieceBarChart.useEffect.animate": ()=>{
                            if (!stopped) {
                                setProgress(0);
                                setLoopKey({
                                    "AnimatedPieceBarChart.useEffect.animate": (k)=>k + 1
                                }["AnimatedPieceBarChart.useEffect.animate"]);
                            }
                        }
                    }["AnimatedPieceBarChart.useEffect.animate"], loopPause);
                }
            }
            frame = requestAnimationFrame(animate);
            return ({
                "AnimatedPieceBarChart.useEffect": ()=>{
                    stopped = true;
                    cancelAnimationFrame(frame);
                }
            })["AnimatedPieceBarChart.useEffect"];
        // eslint-disable-next-line
        }
    }["AnimatedPieceBarChart.useEffect"], [
        loopKey,
        animationDuration,
        loopPause,
        values.join(',')
    ]);
    // Force chart update on each progress step
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedPieceBarChart.useEffect": ()=>{
            if (chartRef.current) {
                chartRef.current.update();
            }
        }
    }["AnimatedPieceBarChart.useEffect"], [
        progress,
        values
    ]);
    // Animate values from 0 to target value based on progress
    const animatedData = values.map((v)=>Math.round(v * progress * 100) / 100);
    const barData = {
        labels,
        datasets: [
            {
                label: 'Count',
                data: animatedData,
                backgroundColor: colors.slice(0, labels.length),
                borderRadius: 7,
                borderWidth: 0,
                maxBarThickness: 80
            }
        ]
    };
    const yMax = Math.max(1, ...values);
    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
            tooltip: {
                enabled: true
            }
        },
        animation: false,
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: yMax,
                ticks: {
                    font: {
                        size: 14
                    },
                    stepSize: 1
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 14
                    }
                }
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[250px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            ref: chartRef,
            data: barData,
            options: barOptions
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/chart/components/animatedPieceBarChart.tsx",
            lineNumber: 134,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/chart/components/animatedPieceBarChart.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
} // This component displays a bar chart with animated filling bars based on provided values and labels, including Institutions and Beneficiaries.
 // It uses Chart.js for rendering and supports custom colors, animation duration, and loop pause.
_s(AnimatedPieceBarChart, "jF9zD9ietYRz5QWBObi49saWOxY=");
_c = AnimatedPieceBarChart;
var _c;
__turbopack_context__.k.register(_c, "AnimatedPieceBarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DashboardChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$components$2f$animatedPieceBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/chart/components/animatedPieceBarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$styles$2f$card$2d$hover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/styles/card-hover.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/useHybridCachedData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"]);
const ANIMATION_DURATION = 4.2;
// Centralized fetcher that combines all counts in one API call
async function fetchDashboardCounts() {
    const [projectsRes, reportsRes, eventsRes, usersRes, institutionsRes, beneficiariesRes] = await Promise.all([
        fetch('/api/projects'),
        fetch('/api/reports'),
        fetch('/api/events'),
        fetch('/api/users'),
        fetch('/api/institutions'),
        fetch('/api/beneficiaries')
    ]);
    const [projects, reports, events, users, institutions, beneficiaries] = await Promise.all([
        projectsRes.json(),
        reportsRes.json(),
        eventsRes.json(),
        usersRes.json(),
        institutionsRes.json(),
        beneficiariesRes.json()
    ]);
    return {
        projects: Array.isArray(projects) ? projects.length : projects.count ?? 0,
        reports: Array.isArray(reports) ? reports.length : reports.count ?? 0,
        events: Array.isArray(events) ? events.length : events.count ?? 0,
        users: Array.isArray(users) ? users.length : users.count ?? 0,
        institutions: Array.isArray(institutions) ? institutions.length : institutions.count ?? 0,
        beneficiaries: Array.isArray(beneficiaries) ? beneficiaries.length : beneficiaries.count ?? 0
    };
}
function DashboardChart() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isAdmin = pathname === '/admin/dashboard';
    // Use the hybrid cache with a unique key and a 30min stale time
    const { data: counts, isLoading, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHybridCachedData"])('dashboard-counts-v1', fetchDashboardCounts, {
        staleTime: 1000 * 60 * 30
    });
    const [loop, setLoop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardChart.useEffect": ()=>{
            const interval = setInterval({
                "DashboardChart.useEffect.interval": ()=>setLoop({
                        "DashboardChart.useEffect.interval": (v)=>v + 1
                    }["DashboardChart.useEffect.interval"])
            }["DashboardChart.useEffect.interval"], (ANIMATION_DURATION + 0.7) * 1000);
            return ({
                "DashboardChart.useEffect": ()=>clearInterval(interval)
            })["DashboardChart.useEffect"];
        }
    }["DashboardChart.useEffect"], []);
    const safeCounts = counts ?? {
        projects: 0,
        reports: 0,
        events: 0,
        users: 0,
        institutions: 0,
        beneficiaries: 0
    };
    // Updated: Labels, values, and colors to include Institutions and Beneficiaries, and match animatedStats.tsx
    const labels = [
        'Projects',
        'Reports',
        'Events',
        'Institutions',
        'Beneficiaries'
    ].concat(isAdmin ? [
        'Users'
    ] : []);
    const dataValues = [
        safeCounts.projects,
        safeCounts.reports,
        safeCounts.events,
        safeCounts.institutions,
        safeCounts.beneficiaries,
        ...isAdmin ? [
            safeCounts.users
        ] : []
    ];
    const backgroundColors = [
        '#7c3aed',
        '#f59e42',
        '#059669',
        '#7c482b',
        '#eab308',
        ...isAdmin ? [
            '#2563eb'
        ] : []
    ];
    const total = dataValues.reduce((a, b)=>a + b, 0);
    const pieData = {
        labels,
        datasets: [
            {
                data: total > 0 ? dataValues : [
                    1,
                    1,
                    1,
                    1,
                    1,
                    1
                ].slice(0, labels.length),
                backgroundColor: backgroundColors,
                borderWidth: 1
            }
        ]
    };
    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            animateRotate: true,
            animateScale: true,
            duration: 1000,
            easing: 'easeOutQuart'
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true
            },
            title: {
                display: false
            }
        }
    };
    const piePercentPlugin = {
        id: 'piePercentPlugin',
        afterDraw (chart) {
            const ctx = chart.ctx;
            const dataset = chart.data.datasets[0];
            const total = dataset.data.reduce((sum, val)=>sum + val, 0);
            dataset.data.forEach((value, index)=>{
                const meta = chart.getDatasetMeta(0);
                const arc = meta.data[index];
                const angle = (arc.startAngle + arc.endAngle) / 2;
                const radius = (arc.outerRadius + arc.innerRadius) / 2;
                const x = arc.x + Math.cos(angle) * radius;
                const y = arc.y + Math.sin(angle) * radius;
                const percent = total > 0 ? (value / total * 100).toFixed(1) + '%' : '';
                ctx.fillStyle = '#fff';
                ctx.font = 'bold 14px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(percent, x, y);
            });
        }
    };
    const PieLegend = ({ labels, data, colors })=>{
        const total = data.reduce((a, b)=>a + b, 0);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "text-sm space-y-1",
            children: labels.map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block w-3 h-3 rounded",
                            style: {
                                backgroundColor: colors[i]
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        label,
                        " (",
                        data[i],
                        ") - ",
                        total ? (data[i] / total * 100).toFixed(1) : 0,
                        "%"
                    ]
                }, i, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
            lineNumber: 175,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full pb-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex flex-col items-center justify-center",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-muted-foreground",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                    lineNumber: 191,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-6 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$styles$2f$card$2d$hover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardHoverClass"]} w-full md:w-7/12`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$components$2f$animatedPieceBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        values: dataValues,
                                        labels: labels,
                                        colors: backgroundColors,
                                        animationDuration: 1600,
                                        loopPause: 1000
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                                        lineNumber: 198,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                                    lineNumber: 197,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$styles$2f$card$2d$hover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardHoverClass"]} w-full md:w-5/12 flex items-center justify-center md:flex-row gap-6 p-4`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row items-center justify-center gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-48 h-48",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                    data: pieData,
                                                    options: pieOptions,
                                                    plugins: [
                                                        piePercentPlugin
                                                    ]
                                                }, loop, false, {
                                                    fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:w-40",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PieLegend, {
                                                    labels: labels,
                                                    data: dataValues,
                                                    colors: backgroundColors
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                                                lineNumber: 223,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                                        lineNumber: 211,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                                    lineNumber: 208,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                            lineNumber: 195,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-3 py-1 text-xs rounded bg-violet-700 text-white hover:bg-violet-800",
                                onClick: refresh,
                                children: "Refresh Data"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                                lineNumber: 231,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                            lineNumber: 230,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                    lineNumber: 193,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
            lineNumber: 188,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
} // Note: This component assumes you have the necessary API endpoints set up to fetch the counts.
_s(DashboardChart, "YeK37dYglk4n/QX2EsGZxlTbOXQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHybridCachedData"]
    ];
});
_c = DashboardChart;
var _c;
__turbopack_context__.k.register(_c, "DashboardChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FilesStatsCharts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"]);
function formatSize(bytes) {
    if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    if (bytes >= 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return bytes + ' B';
}
const pieModuleLabels = [
    'Projects',
    'Events',
    'Reports',
    'Institutions'
];
function FilesStatsCharts() {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [counts, setCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        'Project Images': 0,
        'Project PDFs': 0,
        'Event Images': 0,
        'Event PDFs': 0,
        'Report Images': 0,
        'Report PDFs': 0,
        'Institution Images': 0
    });
    const [sizes, setSizes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        'Project Images': 0,
        'Project PDFs': 0,
        'Event Images': 0,
        'Event PDFs': 0,
        'Report Images': 0,
        'Report PDFs': 0,
        'Institution Images': 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilesStatsCharts.useEffect": ()=>{
            fetch('/api/file-stats').then({
                "FilesStatsCharts.useEffect": (res)=>res.json()
            }["FilesStatsCharts.useEffect"]).then({
                "FilesStatsCharts.useEffect": (data)=>{
                    setCounts({
                        ...data.counts,
                        'Institution Images': data.counts['Institution Images'] ?? 0
                    });
                    setSizes({
                        ...data.sizes,
                        'Institution Images': data.sizes['Institution Images'] ?? 0
                    });
                    setLoading(false);
                }
            }["FilesStatsCharts.useEffect"]);
        }
    }["FilesStatsCharts.useEffect"], []);
    const barLabels = [
        'Project Images',
        'Project PDFs',
        'Event Images',
        'Event PDFs',
        'Report Images',
        'Report PDFs',
        'Institution Images'
    ];
    const barColors = [
        '#7c3aed',
        '#a78bfa',
        '#059669',
        '#34d399',
        '#f59e42',
        '#fdba74',
        '#eab308'
    ];
    const chartBackgroundPlugin = {
        id: 'chartBackgroundPlugin',
        beforeDraw: (chart)=>{
            const { ctx, chartArea } = chart;
            ctx.save();
            ctx.fillStyle = '#f3f4f6'; // light gray
            ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
            ctx.strokeStyle = '#fff'; // outline color
            ctx.lineWidth = 2;
            ctx.strokeRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
            ctx.restore();
        }
    };
    const piePercentPlugin = {
        id: 'piePercentPlugin',
        afterDraw (chart) {
            const ctx = chart.ctx;
            const dataset = chart.data.datasets[0];
            const total = dataset.data.reduce((sum, val)=>sum + val, 0);
            dataset.data.forEach((value, index)=>{
                const meta = chart.getDatasetMeta(0);
                const arc = meta.data[index];
                const angle = (arc.startAngle + arc.endAngle) / 2;
                const radius = (arc.outerRadius + arc.innerRadius) / 2;
                const x = arc.x + Math.cos(angle) * radius;
                const y = arc.y + Math.sin(angle) * radius;
                const percent = (value / total * 100).toFixed(1) + '%';
                ctx.fillStyle = '#fff';
                ctx.font = 'bold 14px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(percent, x, y);
            });
        }
    };
    const pieImagesData = {
        labels: pieModuleLabels,
        datasets: [
            {
                label: 'Images Count',
                data: [
                    counts['Project Images'],
                    counts['Event Images'],
                    counts['Report Images'],
                    counts['Institution Images']
                ],
                backgroundColor: [
                    '#7c3aed',
                    '#059669',
                    '#f59e42',
                    '#eab308'
                ]
            }
        ]
    };
    const piePdfsData = {
        labels: pieModuleLabels.slice(0, 3),
        datasets: [
            {
                label: 'PDFs Count',
                data: [
                    counts['Project PDFs'],
                    counts['Event PDFs'],
                    counts['Report PDFs']
                ],
                backgroundColor: [
                    '#a78bfa',
                    '#34d399',
                    '#fdba74'
                ]
            }
        ]
    };
    const pieImagesSizeData = {
        labels: pieModuleLabels,
        datasets: [
            {
                label: 'Images Size (MB)',
                data: [
                    +(sizes['Project Images'] / 1048576).toFixed(2),
                    +(sizes['Event Images'] / 1048576).toFixed(2),
                    +(sizes['Report Images'] / 1048576).toFixed(2),
                    +(sizes['Institution Images'] / 1048576).toFixed(2)
                ],
                backgroundColor: [
                    '#7c3aed',
                    '#059669',
                    '#f59e42',
                    '#eab308'
                ]
            }
        ]
    };
    const piePdfsSizeData = {
        labels: pieModuleLabels.slice(0, 3),
        datasets: [
            {
                label: 'PDFs Size (MB)',
                data: [
                    +(sizes['Project PDFs'] / 1048576).toFixed(2),
                    +(sizes['Event PDFs'] / 1048576).toFixed(2),
                    +(sizes['Report PDFs'] / 1048576).toFixed(2)
                ],
                backgroundColor: [
                    '#a78bfa',
                    '#34d399',
                    '#fdba74'
                ]
            }
        ]
    };
    const barDataCounts = {
        labels: barLabels,
        datasets: [
            {
                label: 'Count',
                data: [
                    counts['Project Images'],
                    counts['Project PDFs'],
                    counts['Event Images'],
                    counts['Event PDFs'],
                    counts['Report Images'],
                    counts['Report PDFs'],
                    counts['Institution Images']
                ],
                backgroundColor: barColors
            }
        ]
    };
    const barDataSizes = {
        labels: barLabels,
        datasets: [
            {
                label: 'Size (MB)',
                data: [
                    +(sizes['Project Images'] / 1048576).toFixed(2),
                    +(sizes['Project PDFs'] / 1048576).toFixed(2),
                    +(sizes['Event Images'] / 1048576).toFixed(2),
                    +(sizes['Event PDFs'] / 1048576).toFixed(2),
                    +(sizes['Report Images'] / 1048576).toFixed(2),
                    +(sizes['Report PDFs'] / 1048576).toFixed(2),
                    +(sizes['Institution Images'] / 1048576).toFixed(2)
                ],
                backgroundColor: barColors
            }
        ]
    };
    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    precision: 0
                }
            }
        }
    };
    const pieOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true
            }
        }
    };
    const PieLegend = ({ labels, data, colors })=>{
        const total = data.reduce((a, b)=>a + b, 0);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "text-sm",
            children: labels.map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block w-4 h-4 rounded",
                            style: {
                                backgroundColor: colors[i]
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                            lineNumber: 263,
                            columnNumber: 13
                        }, this),
                        label,
                        " (",
                        data[i],
                        ") - ",
                        total ? (data[i] / total * 100).toFixed(1) : 0,
                        "%"
                    ]
                }, i, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                    lineNumber: 262,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
            lineNumber: 260,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-full max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "font-bold text-lg text-center",
                    children: "File Statistics"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-8 text-center text-muted-foreground",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                        lineNumber: 278,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-2/3 h-[350px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold mb-2",
                                                children: "Image & PDF Count"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                data: barDataCounts,
                                                options: barOptions,
                                                plugins: [
                                                    chartBackgroundPlugin
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                lineNumber: 286,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                        lineNumber: 284,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-1/3 flex flex-col gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-center mb-2",
                                                        children: "Images File Stats"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center gap-4 items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-40 h-40",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                                    data: pieImagesData,
                                                                    options: pieOptions,
                                                                    plugins: [
                                                                        piePercentPlugin
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                                    lineNumber: 299,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PieLegend, {
                                                                labels: pieImagesData.labels,
                                                                data: pieImagesData.datasets[0].data,
                                                                colors: pieImagesData.datasets[0].backgroundColor
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                                lineNumber: 305,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                lineNumber: 295,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-center mb-2",
                                                        children: "PDF File Stats"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center gap-4 items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-40 h-40",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                                    data: piePdfsData,
                                                                    options: pieOptions,
                                                                    plugins: [
                                                                        piePercentPlugin
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                                lineNumber: 316,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PieLegend, {
                                                                labels: piePdfsData.labels,
                                                                data: piePdfsData.datasets[0].data,
                                                                colors: piePdfsData.datasets[0].backgroundColor
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                lineNumber: 313,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                        lineNumber: 294,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                lineNumber: 282,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-2/3 h-[350px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold mb-2 text-center",
                                                children: "Image & PDF Sizes (MB)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                lineNumber: 333,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                data: barDataSizes,
                                                options: barOptions,
                                                plugins: [
                                                    chartBackgroundPlugin
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                lineNumber: 334,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm mt-2",
                                                children: [
                                                    "Total Images Size:",
                                                    ' ',
                                                    formatSize(sizes['Project Images'] + sizes['Event Images'] + sizes['Report Images'] + sizes['Institution Images']),
                                                    ", Total PDFs Size:",
                                                    ' ',
                                                    formatSize(sizes['Project PDFs'] + sizes['Event PDFs'] + sizes['Report PDFs'])
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                        lineNumber: 332,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-1/3 flex flex-col gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-center mb-2",
                                                        children: "Images Size Stats"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center gap-4 items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-40 h-40",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                                    data: pieImagesSizeData,
                                                                    options: pieOptions,
                                                                    plugins: [
                                                                        piePercentPlugin
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                                    lineNumber: 354,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PieLegend, {
                                                                labels: pieImagesSizeData.labels,
                                                                data: pieImagesSizeData.datasets[0].data,
                                                                colors: pieImagesSizeData.datasets[0].backgroundColor
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                lineNumber: 350,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-center mb-2",
                                                        children: "PDF Size Stats"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center gap-4 items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-40 h-40",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                                    data: piePdfsSizeData,
                                                                    options: pieOptions,
                                                                    plugins: [
                                                                        piePercentPlugin
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                                    lineNumber: 372,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PieLegend, {
                                                                labels: piePdfsSizeData.labels,
                                                                data: piePdfsSizeData.datasets[0].data,
                                                                colors: piePdfsSizeData.datasets[0].backgroundColor
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                lineNumber: 368,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                        lineNumber: 349,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                lineNumber: 330,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                        lineNumber: 280,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                    lineNumber: 276,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
            lineNumber: 274,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
        lineNumber: 272,
        columnNumber: 5
    }, this);
} // This file is responsible for displaying file statistics charts in the admin dashboard.
 // It fetches file counts and sizes from the API and renders bar and pie charts using Chart.js.
 // The charts include:    
_s(FilesStatsCharts, "NrWYgS22BvO+wqGED2qA6CE276E=");
_c = FilesStatsCharts;
var _c;
__turbopack_context__.k.register(_c, "FilesStatsCharts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/chartSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ChartSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$animatedStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$dashboardChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$fileStartsCharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function ChartSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$animatedStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/chartSection.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$dashboardChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/chartSection.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$fileStartsCharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/chartSection.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/chartSection.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = ChartSection;
var _c;
__turbopack_context__.k.register(_c, "ChartSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/chartSection.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(admin)/admin/dashboard/chartSection.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=_7bb15e9a._.js.map