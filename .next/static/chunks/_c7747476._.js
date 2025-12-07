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
    const { initialData, staleTime = 60 * 60 * 1000 } = options;
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!initialData);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHybridCachedData.useEffect": ()=>{
            let cancelled = false;
            async function load() {
                // Try localStorage first
                try {
                    const raw = localStorage.getItem(key);
                    if (raw) {
                        const parsed = JSON.parse(raw);
                        const age = Date.now() - parsed.ts;
                        if (age < staleTime) {
                            setData(parsed.value);
                            setIsLoading(false);
                            return;
                        }
                    }
                } catch  {}
                // Use initialData if provided
                if (initialData !== undefined) {
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
} // Usage example:
 // const { data, isLoading, refresh } = useHybridCachedData('myDataKey', async () => {
 //   const res = await fetch('/api/my-data');
_s(useHybridCachedData, "VYg+YRNNHXYAisVjLvi/7MYWFrc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(root)/homePageContentClient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useExecutiveMessages": (()=>useExecutiveMessages),
    "useHomePageContent": (()=>useHomePageContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/useHybridCachedData.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
function useHomePageContent(ssrContent) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHybridCachedData"])('homepage-content-v1', {
        "useHomePageContent.useHybridCachedData": async ()=>{
            const res = await fetch('/api/homepage-content');
            if (!res.ok) throw new Error('Failed to fetch homepage content');
            return res.json();
        }
    }["useHomePageContent.useHybridCachedData"], {
        initialData: ssrContent,
        staleTime: 60 * 60 * 1000
    });
}
_s(useHomePageContent, "TBsoy/heVWhpIAPaqk/NsCref64=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHybridCachedData"]
    ];
});
function useExecutiveMessages(ssrMessages) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHybridCachedData"])('executive-messages-v1', {
        "useExecutiveMessages.useHybridCachedData": async ()=>{
            const res = await fetch('/api/executive-messages');
            if (!res.ok) throw new Error('Failed to fetch executive messages');
            return res.json();
        }
    }["useExecutiveMessages.useHybridCachedData"], {
        initialData: ssrMessages,
        staleTime: 60 * 60 * 1000
    });
}
_s1(useExecutiveMessages, "TBsoy/heVWhpIAPaqk/NsCref64=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHybridCachedData"]
    ];
});
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
"[project]/components/shared/cards/cardDogEar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$styles$2f$card$2d$hover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/styles/card-hover.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as StarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
;
;
const flapKeyframes = `
@keyframes dogEarSequence {
  0% { transform: rotateY(0deg); }
  18% { transform: rotateY(0deg); }
  33% { transform: rotateY(-50deg); }
  48% { transform: rotateY(-50deg); }
  60% { transform: rotateY(-30deg); }
  66% { transform: rotateY(-60deg); }
  72% { transform: rotateY(-30deg); }
  78% { transform: rotateY(-60deg); }
  84% { transform: rotateY(-50deg); }
  100% { transform: rotateY(0deg); }
}
`;
const CardDogEar = ({ title, content, icon: Icon, imgUrl, href })=>{
    const card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$styles$2f$card$2d$hover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardHoverClass"], 'p-0 m-0'),
        style: {
            transformStyle: 'preserve-3d'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: flapKeyframes
            }, void 0, false, {
                fileName: "[project]/components/shared/cards/cardDogEar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute top-0 right-0 w-0 h-0 z-30', 'border-t-[40px] border-l-[40px] border-t-white dark:border-t-zinc-900 border-l-yellow-400', 'origin-top-right', 'animate-[dogEarSequence_6s_ease-in-out_infinite]'),
                style: {
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                }
            }, void 0, false, {
                fileName: "[project]/components/shared/cards/cardDogEar.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute z-40 text-yellow-400 pointer-events-none', 'top-[6px] right-[7px]', 'origin-top-right', 'animate-[dogEarSequence_6s_ease-in-out_infinite]'),
                style: {
                    animationDelay: '0.03s',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarIcon$3e$__["StarIcon"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/components/shared/cards/cardDogEar.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/shared/cards/cardDogEar.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            imgUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full relative z-10 m-0 p-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imgUrl,
                        alt: title,
                        className: "w-full h-36 object-cover block m-0 p-0 rounded-none"
                    }, void 0, false, {
                        fileName: "[project]/components/shared/cards/cardDogEar.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-pink-800 text-white flex justify-between items-center px-4 py-3 m-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-white text-base font-semibold m-0 p-0",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/shared/cards/cardDogEar.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "h-5 w-5 text-white"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/cards/cardDogEar.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/cards/cardDogEar.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/cards/cardDogEar.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "pt-2 pb-3 px-4 text-sm relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: content
                }, void 0, false, {
                    fileName: "[project]/components/shared/cards/cardDogEar.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/shared/cards/cardDogEar.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/cards/cardDogEar.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
    return href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        children: card
    }, void 0, false, {
        fileName: "[project]/components/shared/cards/cardDogEar.tsx",
        lineNumber: 83,
        columnNumber: 17
    }, this) : card;
};
_c = CardDogEar;
const __TURBOPACK__default__export__ = CardDogEar;
var _c;
__turbopack_context__.k.register(_c, "CardDogEar");
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
"[project]/components/shared/heroVideo/heroVideo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HeroGif)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function HeroGif({ src, alt = 'Animated hero image' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[40vh] overflow-hidden relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: alt,
            className: "w-full h-full object-cover",
            style: {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
            }
        }, void 0, false, {
            fileName: "[project]/components/shared/heroVideo/heroVideo.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/heroVideo/heroVideo.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = HeroGif;
var _c;
__turbopack_context__.k.register(_c, "HeroGif");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FacebookPostsCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const POSTS_PER_PAGE = 3;
const AUTO_SCROLL_INTERVAL = 4000; // ms
function FacebookPostsCard() {
    _s();
    const [allPosts, setAllPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isHoveringCard, setIsHoveringCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FacebookPostsCard.useEffect": ()=>{
            async function fetchPosts() {
                setLoading(true);
                setError(null);
                try {
                    const res = await fetch('/api/facebook-posts');
                    const json = await res.json();
                    if (json.data) {
                        const withImages = json.data.map({
                            "FacebookPostsCard.useEffect.fetchPosts.withImages": (p)=>{
                                let image = p.fullPicture;
                                if (Array.isArray(p.images) && p.images.length > 0) {
                                    image = p.images[0];
                                }
                                if (image && p.message && p.message.trim()) {
                                    return {
                                        id: p.id,
                                        message: p.message,
                                        createdTime: p.createdTime,
                                        permalinkUrl: p.permalinkUrl,
                                        fullPicture: image,
                                        images: p.images
                                    };
                                }
                                return null;
                            }
                        }["FacebookPostsCard.useEffect.fetchPosts.withImages"]).filter(Boolean);
                        setAllPosts(withImages);
                        setPage(1);
                    } else {
                        setError('No posts found.');
                    }
                } catch (e) {
                    setError('Failed to load posts.');
                }
                setLoading(false);
            }
            fetchPosts();
            return ({
                "FacebookPostsCard.useEffect": ()=>{
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }
            })["FacebookPostsCard.useEffect"];
        }
    }["FacebookPostsCard.useEffect"], []);
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE) || 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FacebookPostsCard.useEffect": ()=>{
            if (!allPosts.length || isHoveringCard) return;
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = setInterval({
                "FacebookPostsCard.useEffect": ()=>{
                    setPage({
                        "FacebookPostsCard.useEffect": (prev)=>prev % totalPages + 1
                    }["FacebookPostsCard.useEffect"]);
                }
            }["FacebookPostsCard.useEffect"], AUTO_SCROLL_INTERVAL);
            return ({
                "FacebookPostsCard.useEffect": ()=>{
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }
            })["FacebookPostsCard.useEffect"];
        }
    }["FacebookPostsCard.useEffect"], [
        allPosts,
        totalPages,
        isHoveringCard
    ]);
    const onPageChange = (newPage)=>{
        setPage(newPage);
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(()=>{
            setPage((prev)=>prev % totalPages + 1);
        }, AUTO_SCROLL_INTERVAL);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-6xl mx-auto my-10 px-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-extrabold mb-8 text-center drop-shadow-md dark:text-white",
                    children: "Latest Facebook Feed"
                }, void 0, false, {
                    fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-muted-foreground text-xl",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-red-500 font-medium",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-neutral-900 rounded-3xl shadow-xl p-0 md:p-6 pt-6 md:pt-8 pb-3 md:pb-4 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden relative flex-1 rounded-3xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex transition-transform duration-[900ms] ease-in-out",
                            style: {
                                width: '100%',
                                transform: `translateX(-${(page - 1) * 100}%)`
                            },
                            children: Array.from({
                                length: totalPages
                            }).map((_, idx)=>{
                                const start = idx * POSTS_PER_PAGE;
                                let cards = allPosts.slice(start, start + POSTS_PER_PAGE);
                                if (cards.length < POSTS_PER_PAGE && allPosts.length > 0) {
                                    while(cards.length < POSTS_PER_PAGE){
                                        cards.push(allPosts[0]);
                                    }
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-3 gap-8",
                                    children: cards.map((post, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FbPostCard, {
                                            post: post,
                                            onHoverStart: ()=>setIsHoveringCard(true),
                                            onHoverEnd: ()=>setIsHoveringCard(false)
                                        }, post.id + i, false, {
                                            fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                                            lineNumber: 130,
                                            columnNumber: 23
                                        }, this))
                                }, idx, false, {
                                    fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                                    lineNumber: 125,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center pt-6 pb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pagination, {
                            currentPage: page,
                            totalPages: totalPages,
                            setPage: onPageChange
                        }, void 0, false, {
                            fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                            lineNumber: 144,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                        lineNumber: 143,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(FacebookPostsCard, "E4ImHZ5e+69ajv3So573SkPXKcc=");
_c = FacebookPostsCard;
function FbPostCard({ post, onHoverStart, onHoverEnd }) {
    // Clamp the message to 100 characters
    const trimmed = post.message && post.message.length > 100 ? post.message.slice(0, 100) + '...' : post.message || '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: onHoverStart,
        onMouseLeave: onHoverEnd,
        className: `
        flex flex-col w-full
        bg-gradient-to-tr from-blue-50 to-indigo-100 dark:from-neutral-900 dark:to-neutral-800
        border border-indigo-200 dark:border-neutral-700
        rounded-3xl shadow-2xl transition-all duration-300 transform
        hover:-translate-y-2 hover:scale-[1.025] hover:shadow-[0_8px_24px_0_rgba(31,38,135,0.21)]
        cursor-pointer group
        overflow-hidden
        min-h-0
      `,
        style: {
            minHeight: '0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: post.fullPicture,
                alt: "Facebook post",
                className: "w-full object-cover rounded-t-3xl group-hover:shadow-lg transition-shadow duration-300",
                style: {
                    maxHeight: '15rem',
                    minHeight: '15rem'
                }
            }, void 0, false, {
                fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col p-4 pb-3 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1 flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-extrabold text-pink-600 dark:text-pink-400 text-base text-center",
                                children: "GoGirls ICT Initiative"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500 dark:text-gray-400 font-medium mt-1 text-center",
                                children: [
                                    "posted on: ",
                                    formatDate(post.createdTime)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-800 dark:text-gray-100 text-sm font-medium drop-shadow-sm mb-4 text-center whitespace-pre-line",
                        children: trimmed
                    }, void 0, false, {
                        fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-end mt-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: post.permalinkUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "px-3 py-1.5 rounded-xl bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-950 font-bold shadow-md transition hover:bg-blue-700 dark:hover:bg-blue-400 hover:scale-105 text-sm",
                            children: "Read on Facebook"
                        }, void 0, false, {
                            fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_c1 = FbPostCard;
function Pagination({ currentPage, totalPages, setPage }) {
    const prev = ()=>setPage(currentPage === 1 ? totalPages : currentPage - 1);
    const next = ()=>setPage(currentPage === totalPages ? 1 : currentPage + 1);
    const renderPageNumbers = ()=>{
        let start = Math.max(1, currentPage - 2);
        let end = Math.min(totalPages, start + 4);
        if (end - start < 4) start = Math.max(1, end - 4);
        const pages = [];
        for(let i = start; i <= end; i++){
            pages.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `mx-1 px-3 py-1 rounded-lg font-semibold transition 
            ${i === currentPage ? 'bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900' : 'bg-blue-100 dark:bg-neutral-700 text-blue-800 dark:text-blue-200 hover:bg-blue-200 hover:dark:bg-neutral-600'}
          `,
                onClick: ()=>setPage(i),
                disabled: i === currentPage,
                children: i
            }, i, false, {
                fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, this));
        }
        return pages;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex items-center bg-transparent shadow-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: prev,
                className: "mx-1 px-3 py-1 rounded-lg font-semibold bg-blue-100 dark:bg-neutral-700 text-blue-800 dark:text-blue-200 hover:bg-blue-200 hover:dark:bg-neutral-600 transition",
                children: "Prev"
            }, void 0, false, {
                fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            renderPageNumbers(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: next,
                className: "mx-1 px-3 py-1 rounded-lg font-semibold bg-blue-100 dark:bg-neutral-700 text-blue-800 dark:text-blue-200 hover:bg-blue-200 hover:dark:bg-neutral-600 transition",
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx",
        lineNumber: 257,
        columnNumber: 5
    }, this);
}
_c2 = Pagination;
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
} // This function formats the date string into a more readable format
 // using the browser's locale settings. It returns a string like "Jan 1, 2023, 12:00 AM".
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FacebookPostsCard");
__turbopack_context__.k.register(_c1, "FbPostCard");
__turbopack_context__.k.register(_c2, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/resources/videos.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Videos = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: "Videos"
    }, void 0, false);
};
_c = Videos;
const __TURBOPACK__default__export__ = Videos;
var _c;
__turbopack_context__.k.register(_c, "Videos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/shared/pagination.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Pagination)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function Pagination({ currentPage, totalPages, onPageChange, className = "" }) {
    if (totalPages <= 1) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex justify-center gap-2 mt-4 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: currentPage === 1,
                className: `px-4 py-1 rounded border text-sm font-medium transition
          ${currentPage === 1 ? 'bg-gray-200 dark:bg-neutral-700 text-gray-400 border' : 'bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 border hover:bg-[#fce6f2]'}
        `,
                onClick: ()=>onPageChange(currentPage - 1),
                children: "Previous"
            }, void 0, false, {
                fileName: "[project]/components/shared/pagination.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "px-3 py-1 rounded text-sm font-medium",
                style: {
                    background: '#9f004d',
                    color: '#fff'
                },
                children: [
                    currentPage,
                    " / ",
                    totalPages
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/pagination.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: currentPage === totalPages,
                className: `px-4 py-1 rounded border text-sm font-medium transition
          ${currentPage === totalPages ? 'bg-gray-200 dark:bg-neutral-700 text-gray-400 border' : 'bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 border hover:bg-[#fce6f2]'}
        `,
                onClick: ()=>onPageChange(currentPage + 1),
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/components/shared/pagination.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/pagination.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(root)/resources/reports/components/reportList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pdf$2f$dist$2f$esm$2f$Document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Document$3e$__ = __turbopack_context__.i("[project]/node_modules/react-pdf/dist/esm/Document.js [app-client] (ecmascript) <export default as Document>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pdf$2f$dist$2f$esm$2f$Page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Page$3e$__ = __turbopack_context__.i("[project]/node_modules/react-pdf/dist/esm/Page.js [app-client] (ecmascript) <export default as Page>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__pdfjs$3e$__ = __turbopack_context__.i("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript) <export * as pdfjs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/pagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$styles$2f$card$2d$hover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/styles/card-hover.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// Configure PDF.js worker
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__pdfjs$3e$__["pdfjs"].GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__pdfjs$3e$__["pdfjs"].version}/pdf.worker.mjs`;
const DEFAULT_PAGE_SIZE = 8;
function formatDate(date) {
    if (!date) return '';
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}
const ReportList = ({ reports, onSelect, activeId, pageSize = DEFAULT_PAGE_SIZE })=>{
    _s();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const totalPages = Math.ceil(reports.length / pageSize);
    const paginatedReports = reports.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-6",
                children: paginatedReports.map((report, index)=>{
                    const isActive = activeId !== undefined && report.id === activeId;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        onClick: ()=>!isActive && onSelect(report.id),
                        tabIndex: 0,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('group flex flex-col justify-start w-full outline-none px-0 pt-4 pb-0', __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$styles$2f$card$2d$hover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardHoverClass"], isActive && 'ring-2 ring-primary ring-offset-2'),
                        style: {
                            minHeight: 370,
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-w-[240px] mx-auto h-[280px] bg-muted flex items-center justify-center rounded-t-xl overflow-hidden",
                                children: [
                                    report.files?.[0] && report.files[0].endsWith('.pdf') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pdf$2f$dist$2f$esm$2f$Document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Document$3e$__["Document"], {
                                        file: report.files[0],
                                        loading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: "Loading preview..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
                                            lineNumber: 67,
                                            columnNumber: 30
                                        }, void 0),
                                        error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-destructive",
                                            children: "Failed to load PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
                                            lineNumber: 68,
                                            columnNumber: 28
                                        }, void 0),
                                        noData: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: "No PDF file"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
                                            lineNumber: 69,
                                            columnNumber: 29
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pdf$2f$dist$2f$esm$2f$Page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Page$3e$__["Page"], {
                                            pageNumber: 1,
                                            width: 240,
                                            height: 280,
                                            renderTextLayer: false,
                                            renderAnnotationLayer: false
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
                                            lineNumber: 71,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
                                        lineNumber: 65,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center w-full h-full text-muted-foreground",
                                        children: "No preview"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
                                        lineNumber: 80,
                                        columnNumber: 19
                                    }, this),
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-primary/40 z-20 flex items-center justify-center pointer-events-none rounded-2xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-bold text-center text-lg",
                                            children: "Active"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
                                            lineNumber: 88,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
                                        lineNumber: 87,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col justify-center items-center w-full    bg-black/80 dark:bg-black/60 backdrop-blur-sm text-white text-center px-4 py-3 rounded-b-xl min-h-[90px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-semibold leading-snug line-clamp-2",
                                        children: report.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs mt-1",
                                        children: report.createdAt ? formatDate(report.createdAt) : ''
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this)
                        ]
                    }, report.id ?? index, true, {
                        fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                currentPage: currentPage,
                totalPages: totalPages,
                onPageChange: setCurrentPage,
                className: "mt-10"
            }, void 0, false, {
                fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/resources/reports/components/reportList.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
};
_s(ReportList, "6xAUoJ2motYJ38x4zeUWisA+X/4=");
_c = ReportList;
const __TURBOPACK__default__export__ = ReportList;
var _c;
__turbopack_context__.k.register(_c, "ReportList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/resources/articles.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Articles = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: "Articles"
    }, void 0, false);
};
_c = Articles;
const __TURBOPACK__default__export__ = Articles;
var _c;
__turbopack_context__.k.register(_c, "Articles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/resources/gallery.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Gallery = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: "Gallery"
    }, void 0, false);
};
_c = Gallery;
const __TURBOPACK__default__export__ = Gallery;
var _c;
__turbopack_context__.k.register(_c, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/resources/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/resources/index.js or index.ts
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$videos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resources/videos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$resources$2f$reports$2f$components$2f$reportList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(root)/resources/reports/components/reportList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$articles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resources/articles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$gallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resources/gallery.tsx [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/resources/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$videos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resources/videos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$resources$2f$reports$2f$components$2f$reportList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(root)/resources/reports/components/reportList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$articles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resources/articles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$gallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resources/gallery.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/resources/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(root)/resources/reports/components/reportList.tsx [app-client] (ecmascript) <export default as ReportList>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReportList": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$resources$2f$reports$2f$components$2f$reportList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$resources$2f$reports$2f$components$2f$reportList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(root)/resources/reports/components/reportList.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(root)/resources/reports/components/moreReports.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MoreReports)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/pagination.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const PAGE_SIZE = 3;
// Unicode-safe truncation to 30 characters
function truncateTitle(title, maxLength = 30) {
    const arr = Array.from(title);
    return arr.length > maxLength ? arr.slice(0, maxLength).join('') + '...' : title;
}
// Format date as "2025 June 11th" with "th" as superscript, left-justified
function formatDateWithSuperscript(dateString) {
    if (!dateString) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
        fileName: "[project]/app/(root)/resources/reports/components/moreReports.tsx",
        lineNumber: 24,
        columnNumber: 27
    }, this);
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
        fileName: "[project]/app/(root)/resources/reports/components/moreReports.tsx",
        lineNumber: 26,
        columnNumber: 37
    }, this);
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString('default', {
        month: 'long'
    });
    function getOrdinalSuffix(n) {
        if (n >= 11 && n <= 13) return 'th';
        switch(n % 10){
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    }
    const suffix = getOrdinalSuffix(day);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-xs text-gray-500 dark:text-gray-400 block text-left mt-1",
        children: [
            year,
            " ",
            month,
            " ",
            day,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                children: suffix
            }, void 0, false, {
                fileName: "[project]/app/(root)/resources/reports/components/moreReports.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/resources/reports/components/moreReports.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function MoreReports({ reports, activeId, onSelect }) {
    _s();
    // Exclude the active report
    const filteredReports = activeId !== undefined ? reports.filter((r)=>r.id !== activeId) : reports;
    // Sort by updatedAt, then createdAt as fallback (desc, latest first)
    const sortedReports = [
        ...filteredReports
    ].sort((a, b)=>new Date(b.updatedAt || b.createdAt || '').getTime() - new Date(a.updatedAt || a.createdAt || '').getTime());
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const pageCount = Math.ceil(sortedReports.length / PAGE_SIZE);
    // Current page of reports
    const pagedReports = sortedReports.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-100",
                children: "Latest Reports"
            }, void 0, false, {
                fileName: "[project]/app/(root)/resources/reports/components/moreReports.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 w-full",
                children: [
                    pagedReports.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-500 dark:text-gray-400 text-center",
                        children: "No more reports"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/resources/reports/components/moreReports.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    pagedReports.map((report)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full focus:outline-none",
                            onClick: ()=>onSelect(report.id),
                            type: "button",
                            tabIndex: 0,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-start px-3 py-2 rounded-lg shadow-sm border-2 transition min-w-0 w-full
                border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:shadow-md hover:border-[#9f004d] hover:bg-neutral-50 dark:hover:bg-neutral-700`,
                                style: {
                                    width: '100%'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-pink-800 flex items-center justify-center mr-2",
                                        style: {
                                            width: 28,
                                            height: 28,
                                            minWidth: 28,
                                            minHeight: 28
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            size: 18,
                                            color: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/resources/reports/components/moreReports.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/resources/reports/components/moreReports.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col min-w-0 max-w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base font-medium text-gray-900 dark:text-gray-100 text-left",
                                                style: {
                                                    wordBreak: 'break-word',
                                                    whiteSpace: 'normal'
                                                },
                                                children: truncateTitle(report.title)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/resources/reports/components/moreReports.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this),
                                            formatDateWithSuperscript(report.updatedAt || report.createdAt)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/resources/reports/components/moreReports.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/resources/reports/components/moreReports.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        }, report.id, false, {
                            fileName: "[project]/app/(root)/resources/reports/components/moreReports.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/resources/reports/components/moreReports.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            pageCount > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                currentPage: page + 1,
                totalPages: pageCount,
                onPageChange: (p)=>setPage(p - 1),
                className: "mt-4"
            }, void 0, false, {
                fileName: "[project]/app/(root)/resources/reports/components/moreReports.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/resources/reports/components/moreReports.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(MoreReports, "54dVtaqv/8WouJ+rx2t67oLHEmc=");
_c = MoreReports;
var _c;
__turbopack_context__.k.register(_c, "MoreReports");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(root)/resources/reports/components/reportDetails.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ReportDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$resources$2f$reports$2f$components$2f$moreReports$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(root)/resources/reports/components/moreReports.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$resources$2f$reports$2f$components$2f$reportList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(root)/resources/reports/components/reportList.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function formatDateWithSuperscript(dateStr) {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return 'N/A';
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', {
        month: 'long'
    });
    const day = date.getDate();
    const getOrdinal = (n)=>{
        if (n > 3 && n < 21) return 'th';
        switch(n % 10){
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    };
    const ordinal = getOrdinal(day);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            year,
            " ",
            month,
            " ",
            day,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                children: ordinal
            }, void 0, false, {
                fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function getFileExtension(filename = '') {
    const arr = filename.split('.');
    if (arr.length < 2) return '';
    return arr[arr.length - 1].toUpperCase();
}
const IMAGE_WIDTH = 280;
function ReportDetails({ reports, selectedReport, onBack, onSelect }) {
    _s();
    const [fileMeta, setFileMeta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [localAccessCount, setLocalAccessCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [localDownloadCount, setLocalDownloadCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportDetails.useEffect": ()=>{
            setLocalAccessCount(selectedReport?.accessCount ?? null);
            setLocalDownloadCount(selectedReport?.downloadCount ?? null);
        }
    }["ReportDetails.useEffect"], [
        selectedReport?.id,
        selectedReport?.accessCount,
        selectedReport?.downloadCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportDetails.useEffect": ()=>{
            if (selectedReport?.files?.[0]) {
                fetch(selectedReport.files[0], {
                    method: 'HEAD'
                }).then({
                    "ReportDetails.useEffect": (res)=>{
                        setFileMeta({
                            size: Number(res.headers.get('content-length'))
                        });
                    }
                }["ReportDetails.useEffect"]);
            } else {
                setFileMeta({});
            }
        }
    }["ReportDetails.useEffect"], [
        selectedReport
    ]);
    const handleDownload = ()=>{
        if (selectedReport?.files?.[0] && selectedReport?.id != null) {
            // Increment download count in the backend and update local
            fetch(`/api/reports/${selectedReport.id}/increment-download`, {
                method: 'POST'
            }).then((res)=>res.json()).then((data)=>{
                if (typeof data.downloadCount === 'number') {
                    setLocalDownloadCount(data.downloadCount);
                }
            });
            // Download file
            const link = document.createElement('a');
            link.href = selectedReport.files[0];
            link.download = selectedReport.title + '.pdf';
            link.target = '_blank';
            link.click();
        }
    };
    if (!selectedReport) return null;
    // Exclude the current report from the appended list
    const otherReports = reports.filter((r)=>r.id !== selectedReport.id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "mb-2 px-4 bg-gray-200 dark:bg-neutral-800 rounded hover:bg-gray-300 dark:hover:bg-neutral-700 text-gray-700 dark:text-gray-100 font-medium flex items-center",
                onClick: onBack,
                children: "← Back to reports"
            }, void 0, false, {
                fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex-shrink-0 flex flex-col items-center lg:items-start justify-center lg:justify-start",
                        style: {
                            maxWidth: `${IMAGE_WIDTH}px`,
                            minWidth: `${IMAGE_WIDTH}px`
                        },
                        children: [
                            selectedReport.images?.[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: selectedReport.images[0],
                                alt: selectedReport.title,
                                className: "max-h-[280px] w-full object-contain rounded shadow border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900",
                                style: {
                                    width: '100%',
                                    maxWidth: `${IMAGE_WIDTH}px`,
                                    minWidth: `${IMAGE_WIDTH}px`
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-muted-foreground text-center",
                                children: "No image available"
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            selectedReport.files?.[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `
                flex items-center mt-4 bg-[#9f004d] text-white rounded shadow transition
                w-full
                max-w-[${IMAGE_WIDTH}px]
                min-w-[${IMAGE_WIDTH}px]
                justify-center
                py-2
                hover:bg-gray-100 hover:text-[#9f004d]
                dark:hover:bg-neutral-100 dark:hover:text-[#9f004d]
                group
              `,
                                onClick: handleDownload,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-pink-800 flex items-center justify-center mr-2",
                                        style: {
                                            width: 28,
                                            height: 28,
                                            minWidth: 28,
                                            minHeight: 28
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            size: 18,
                                            color: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    "Download Report",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-pink-800 flex items-center justify-center mr-2",
                                        style: {
                                            width: 28,
                                            height: 28,
                                            minWidth: 28,
                                            minHeight: 28
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            size: 18,
                                            color: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-[340px] flex flex-col items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "table-auto border-collapse w-full shadow rounded bg-white dark:bg-neutral-800 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            colSpan: 2,
                                            className: "border border-neutral-200 dark:border-neutral-600 px-4 py-2 text-center text-lg bg-gray-100 dark:bg-neutral-700 font-semibold",
                                            children: "Report Information"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-[#9f004d] hover:text-white transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    children: "Access Count"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    children: localAccessCount ?? selectedReport.accessCount
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-[#9f004d] hover:text-white transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    children: "Download Count"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    children: localDownloadCount ?? selectedReport.downloadCount
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-[#9f004d] hover:text-white transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    children: "Date Created"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    children: formatDateWithSuperscript(selectedReport.createdAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-[#9f004d] hover:text-white transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    children: "Date Modified"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    children: formatDateWithSuperscript(selectedReport.updatedAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-[#9f004d] hover:text-white transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    children: "File Size"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    children: fileMeta.size !== undefined ? `${(fileMeta.size / 1024).toFixed(2)} KB` : 'Loading...'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-[#9f004d] hover:text-white transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    children: "Document Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    children: selectedReport.files?.[0] ? getFileExtension(selectedReport.files[0]) : ''
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                            lineNumber: 225,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-[340px] flex flex-col items-center lg:items-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$resources$2f$reports$2f$components$2f$moreReports$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            reports: reports,
                            activeId: selectedReport.id,
                            onSelect: onSelect
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            otherReports.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-7xl mx-auto mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-4",
                        children: "Other Reports"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$resources$2f$reports$2f$components$2f$reportList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        reports: otherReports,
                        onSelect: onSelect,
                        pageSize: 8,
                        activeId: undefined
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
                lineNumber: 241,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/resources/reports/components/reportDetails.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(ReportDetails, "MwEvYTlbopS5Dqg0rVctgnNu+ow=");
_c = ReportDetails;
var _c;
__turbopack_context__.k.register(_c, "ReportDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(root)/resources/reports/reportsSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/resources/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$resources$2f$reports$2f$components$2f$reportList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ReportList$3e$__ = __turbopack_context__.i("[project]/app/(root)/resources/reports/components/reportList.tsx [app-client] (ecmascript) <export default as ReportList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$resources$2f$reports$2f$components$2f$reportDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(root)/resources/reports/components/reportDetails.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ReportsSection = ({ setReportUploader, setReportUploaderImage, reports: propReports })=>{
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const reportIdParam = searchParams.get('report');
    const reportId = reportIdParam ? Number(reportIdParam) : null;
    const [reports, setReports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(propReports || []);
    const [selectedReport, setSelectedReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch only if propReports is not provided
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportsSection.useEffect": ()=>{
            if (propReports && propReports.length > 0) {
                setReports(propReports);
                return;
            }
            fetch('/api/reports').then({
                "ReportsSection.useEffect": (res)=>res.json()
            }["ReportsSection.useEffect"]).then({
                "ReportsSection.useEffect": (data)=>{
                    const cleaned = data.map({
                        "ReportsSection.useEffect.cleaned": (report)=>({
                                id: report.id,
                                title: report.title,
                                files: report.files || [],
                                images: report.images || [],
                                accessCount: report.accessCount ?? 0,
                                downloadCount: report.downloadCount ?? 0,
                                createdAt: report.createdAt,
                                updatedAt: report.updatedAt,
                                createdBy: report.createdBy ? {
                                    firstName: report.createdBy.firstName,
                                    lastName: report.createdBy.lastName,
                                    image: report.createdBy.image
                                } : undefined
                            })
                    }["ReportsSection.useEffect.cleaned"]);
                    setReports(cleaned);
                    if (reportId) {
                        const found = cleaned.find({
                            "ReportsSection.useEffect.found": (r)=>r.id === reportId
                        }["ReportsSection.useEffect.found"]);
                        setSelectedReport(found || null);
                        // Set uploader info in parent if report is found
                        if (found) {
                            let uploader = '';
                            if (found.createdBy) {
                                uploader = [
                                    found.createdBy.firstName,
                                    found.createdBy.lastName
                                ].filter(Boolean).join(' ');
                            }
                            setReportUploader?.(uploader || null);
                            setReportUploaderImage?.(found.createdBy?.image || null);
                        } else {
                            setReportUploader?.(null);
                            setReportUploaderImage?.(null);
                        }
                    } else {
                        setSelectedReport(null);
                        setReportUploader?.(null);
                        setReportUploaderImage?.(null);
                    }
                }
            }["ReportsSection.useEffect"]).catch({
                "ReportsSection.useEffect": (err)=>console.error('Failed to fetch reports:', err)
            }["ReportsSection.useEffect"]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ReportsSection.useEffect"], [
        reportId,
        propReports
    ]);
    const handleReportSelect = async (id)=>{
        const found = reports.find((r)=>r.id === id);
        if (!found) return;
        // update access count
        const res = await fetch(`/api/reports/${id}/increment-access`, {
            method: 'POST'
        });
        const data = await res.json();
        const updatedReport = {
            ...found,
            accessCount: typeof data.accessCount === 'number' ? data.accessCount : found.accessCount
        };
        setSelectedReport(updatedReport);
        // Set uploader info in parent
        let uploader = '';
        if (found.createdBy) {
            uploader = [
                found.createdBy.firstName,
                found.createdBy.lastName
            ].filter(Boolean).join(' ');
        }
        setReportUploader?.(uploader || null);
        setReportUploaderImage?.(found.createdBy?.image || null);
        // Only set the title in the URL; update to /resources/reports?report=...&reportTitle=...
        const params = new URLSearchParams();
        params.set('report', id.toString());
        params.set('reportTitle', found.title || '');
        router.push(`/resources/reports?${params.toString()}`);
    };
    const handleBack = ()=>{
        setSelectedReport(null);
        setReportUploader?.(null);
        setReportUploaderImage?.(null);
        router.push(`/resources/reports`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: !selectedReport ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$resources$2f$reports$2f$components$2f$reportList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ReportList$3e$__["ReportList"], {
            reports: reports,
            onSelect: handleReportSelect,
            activeId: selectedReport?.id ?? (reportId || undefined),
            pageSize: 8
        }, void 0, false, {
            fileName: "[project]/app/(root)/resources/reports/reportsSection.tsx",
            lineNumber: 122,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$resources$2f$reports$2f$components$2f$reportDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            reports: reports,
            selectedReport: selectedReport,
            onBack: handleBack,
            onSelect: handleReportSelect
        }, void 0, false, {
            fileName: "[project]/app/(root)/resources/reports/reportsSection.tsx",
            lineNumber: 129,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(root)/resources/reports/reportsSection.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
};
_s(ReportsSection, "5+OPtBDdDi4Sk9m7dn6t180Q+OA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ReportsSection;
const __TURBOPACK__default__export__ = ReportsSection;
var _c;
__turbopack_context__.k.register(_c, "ReportsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(root)/homePageClient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePageClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$homePageContentClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(root)/homePageContentClient.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$cards$2f$cardDogEar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/cards/cardDogEar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as EyeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FocusIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/focus.js [app-client] (ecmascript) <export default as FocusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as HeartIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TargetIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as TargetIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$dashboardChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$animatedStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$heroVideo$2f$heroVideo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/heroVideo/heroVideo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$facebookPostsCard$2f$facebookPostsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/facebookPostsCard/facebookPostsCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$resources$2f$reports$2f$reportsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(root)/resources/reports/reportsSection.tsx [app-client] (ecmascript)");
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
const visionImg = '/assets/images/vision-mission-values/vision.png';
const missionImg = '/assets/images/vision-mission-values/mission.png';
const focusImg = '/assets/images/vision-mission-values/focus.png';
const valuesImg = '/assets/images/vision-mission-values/values.png';
function HomePageClient({ ssrContent, ssrMessages }) {
    _s();
    const { data: content, isLoading: loadingContent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$homePageContentClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHomePageContent"])(ssrContent);
    const { data: executiveMessages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$homePageContentClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExecutiveMessages"])(ssrMessages);
    if (loadingContent) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading homepage..."
    }, void 0, false, {
        fileName: "[project]/app/(root)/homePageClient.tsx",
        lineNumber: 40,
        columnNumber: 30
    }, this);
    if (!content) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "No Home Page content found"
    }, void 0, false, {
        fileName: "[project]/app/(root)/homePageClient.tsx",
        lineNumber: 41,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            content.heroVideo?.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$heroVideo$2f$heroVideo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: content.heroVideo
            }, void 0, false, {
                fileName: "[project]/app/(root)/homePageClient.tsx",
                lineNumber: 45,
                columnNumber: 37
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrapper max-w-7xl mx-auto px-4 space-y-8 py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$cards$2f$cardDogEar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Vision",
                            content: content.vision,
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeIcon$3e$__["EyeIcon"],
                            imgUrl: visionImg
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/homePageClient.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$cards$2f$cardDogEar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Mission",
                            content: content.mission,
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TargetIcon$3e$__["TargetIcon"],
                            imgUrl: missionImg
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/homePageClient.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$cards$2f$cardDogEar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Focus",
                            content: content.focus,
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FocusIcon$3e$__["FocusIcon"],
                            imgUrl: focusImg
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/homePageClient.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$cards$2f$cardDogEar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Core Values",
                            content: content.coreValues,
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__["HeartIcon"],
                            imgUrl: valuesImg
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/homePageClient.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(root)/homePageClient.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(root)/homePageClient.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrapper max-w-7xl mx-auto px-4 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100 transition-colors duration-300 pb-4",
                                children: "Quick Starts: Our Impact at a Glance"
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/homePageClient.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$animatedStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/(root)/homePageClient.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(root)/homePageClient.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrapper max-w-7xl mx-auto px-4 pt-10 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-center pb-2 text-gray-800 dark:text-gray-100 transition-colors duration-300",
                                children: "Our Projects, Events, Reports, and Institutions by Numbers"
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/homePageClient.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$dashboardChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/(root)/homePageClient.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(root)/homePageClient.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex gap-4 p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$facebookPostsCard$2f$facebookPostsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(root)/homePageClient.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/homePageClient.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$resources$2f$reports$2f$reportsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/(root)/homePageClient.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/homePageClient.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(HomePageClient, "NIAm3yXX5xYyYgBl2Kw4mb9ycU0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$homePageContentClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHomePageContent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$homePageContentClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExecutiveMessages"]
    ];
});
_c = HomePageClient;
var _c;
__turbopack_context__.k.register(_c, "HomePageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_c7747476._.js.map