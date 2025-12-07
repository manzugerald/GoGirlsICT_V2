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
"[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DownloadColumnsModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function DownloadColumnsModal({ isOpen, onClose, columns, onDownload, defaultSelected = [] }) {
    const [available, setAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setAvailable(columns.filter((c)=>!defaultSelected.includes(c.id)));
            setSelected(columns.filter((c)=>defaultSelected.includes(c.id)));
        }
    }, [
        isOpen
    ]); // Only reset when modal opens
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerSensor"], {
        activationConstraint: {
            distance: 5
        }
    }));
    function handleDragEnd(event) {
        const { active, over } = event;
        // Reordering in selected
        if (active && over && selected.find((c)=>c.id === active.id) && selected.find((c)=>c.id === over.id) && active.id !== over.id) {
            setSelected((items)=>{
                const oldIndex = items.findIndex((i)=>i.id === active.id);
                const newIndex = items.findIndex((i)=>i.id === over.id);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayMove"])(items, oldIndex, newIndex);
            });
            return;
        }
        // Drag from available to selected area
        if (active && over && available.find((c)=>c.id === active.id) && over.id === 'selected-drop-area') {
            const col = available.find((c)=>c.id === active.id);
            setAvailable((prev)=>prev.filter((c)=>c.id !== col.id));
            setSelected((prev)=>[
                    ...prev,
                    col
                ]);
        }
    }
    function handleAdd(col) {
        setAvailable((prev)=>prev.filter((c)=>c.id !== col.id));
        setSelected((prev)=>[
                ...prev,
                col
            ]);
    }
    function handleRemove(col) {
        setSelected((prev)=>prev.filter((c)=>c.id !== col.id));
        setAvailable((prev)=>[
                ...prev,
                col
            ]);
    }
    // PDF Export Helper: handles serial number and date formatting
    function handleDownload() {
        onDownload(selected);
        onClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onClose: onClose,
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 dark:bg-black/70",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-2xl mx-auto p-6 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"].Title, {
                        className: "text-lg font-bold mb-2 dark:text-white",
                        children: "Select & Order Columns"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold mb-2 dark:text-gray-200",
                                        children: "All Columns"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DndContext"], {
                                        sensors: sensors,
                                        collisionDetection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closestCenter"],
                                        onDragEnd: handleDragEnd,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "border rounded p-2 min-h-[200px] bg-gray-50 dark:bg-gray-800",
                                            children: [
                                                available.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DraggableColumnItem, {
                                                        id: col.id,
                                                        label: col.label,
                                                        onAdd: ()=>handleAdd(col)
                                                    }, col.id, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this)),
                                                available.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "text-gray-400 dark:text-gray-500 text-sm",
                                                    children: "All columns selected"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold mb-2 dark:text-gray-200",
                                        children: "To Download (drag to reorder)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DndContext"], {
                                        sensors: sensors,
                                        collisionDetection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closestCenter"],
                                        onDragEnd: handleDragEnd,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortableContext"], {
                                            items: selected.map((c)=>c.id),
                                            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalListSortingStrategy"],
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                id: "selected-drop-area",
                                                className: "border rounded p-2 min-h-[200px] bg-gray-50 dark:bg-gray-800",
                                                children: [
                                                    selected.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableColumnItem, {
                                                            id: col.id,
                                                            label: col.label,
                                                            onRemove: ()=>handleRemove(col)
                                                        }, col.id, false, {
                                                            fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, this)),
                                                    selected.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-gray-400 dark:text-gray-500 text-sm",
                                                        children: "No columns selected"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end mt-6 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 rounded",
                                onClick: onClose,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded disabled:opacity-50",
                                disabled: selected.length === 0,
                                onClick: handleDownload,
                                children: "Download PDF"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
// Draggable item for available columns (left)
function DraggableColumnItem({ id, label, onAdd }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSortable"])({
        id
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: setNodeRef,
        style: {
            transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
            transition,
            opacity: isDragging ? 0.5 : 1
        },
        className: "flex items-center gap-2 bg-white dark:bg-gray-900 border-b last:border-b-0 border-gray-100 dark:border-gray-800 py-1 px-2 rounded cursor-pointer group",
        ...attributes,
        ...listeners,
        tabIndex: 0,
        onClick: onAdd,
        title: "Add to Download",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "cursor-move text-gray-400 dark:text-gray-500 select-none",
                "aria-label": "Drag to select column",
                title: "Drag to select column",
                children: "☰"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex-1 dark:text-gray-100",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
// Draggable/sortable item for selected columns (right)
function SortableColumnItem({ id, label, onRemove }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSortable"])({
        id
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: setNodeRef,
        style: {
            transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
            transition,
            opacity: isDragging ? 0.5 : 1
        },
        className: "flex items-center gap-2 bg-white dark:bg-gray-900 border-b last:border-b-0 border-gray-100 dark:border-gray-800 py-1 px-2 rounded cursor-move group",
        ...attributes,
        ...listeners,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "cursor-move text-gray-400 dark:text-gray-500 select-none",
                "aria-label": "Drag to reorder",
                title: "Drag to reorder",
                children: "☰"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex-1 dark:text-gray-100",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onRemove,
                className: "ml-auto text-gray-400 hover:text-red-500 dark:hover:text-red-400",
                title: "Remove",
                type: "button",
                children: "✕"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
} // This code defines a modal component for selecting and ordering columns to download as a PDF.
 // It uses DnD Kit for drag-and-drop functionality, allowing users to reorder selected columns
}}),
"[externals]/module [external] (module, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}}),
"[project]/app/(admin)/admin/dashboard/components/handleDownloadPDF.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleDownloadPDF": (()=>handleDownloadPDF)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-ssr] (ecmascript)");
;
;
// Update with your correct logo path
const LOGO_URL = '/assets/images/system/goGirlsLogoV2.png';
const HEADER_BG_COLOR = '#9f004d';
const FOOTER_BG_COLOR = '#9f004d';
const HEADER_HEIGHT = 28; // in jsPDF units (about 7mm)
const FOOTER_HEIGHT = 20;
const dateFields = [
    'createdAt',
    'updatedAt',
    'date',
    'dateOfBirth'
];
// Helper for Day.Month.Year format (e.g. 12.07.2025)
function getCurrentDayMonthYear() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}.${month}.${year}`;
}
async function handleDownloadPDF(data, columns, cardName) {
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
        orientation: 'landscape'
    });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    // Load logo as base64
    const logoImg = await fetch(LOGO_URL).then((r)=>r.blob()).then((blob)=>new Promise((resolve)=>{
            const reader = new FileReader();
            reader.onloadend = ()=>resolve(reader.result);
            reader.readAsDataURL(blob);
        }));
    // ----- HEADER -----
    // Draw header background
    doc.setFillColor(HEADER_BG_COLOR);
    doc.rect(0, 0, pageWidth, HEADER_HEIGHT, 'F');
    // Vertically center everything in the header
    const centerY = HEADER_HEIGHT / 2 + 1; // small correction for optical centering
    // Logo (vertically centered)
    const logoHeight = 18;
    const logoWidth = 18;
    const logoY = centerY - logoHeight / 2;
    doc.addImage(logoImg, 'PNG', 10, logoY, logoWidth, logoHeight);
    // "GoGirls ICT Initiative" (white, bold, large)
    doc.setFontSize(22);
    doc.setTextColor('#FFFFFF');
    doc.setFont('helvetica', 'bold');
    const orgName = 'GoGirls ICT Initiative';
    const orgNameX = 10 + logoWidth + 10; // logo + spacing
    doc.text(orgName, orgNameX, centerY, {
        baseline: 'middle'
    });
    // Card Name (black, bold, large, right-aligned, same line)
    doc.setFontSize(22);
    doc.setTextColor('#000000');
    doc.setFont('helvetica', 'bold');
    const cardTextWidth = doc.getTextWidth(cardName);
    doc.text(cardName, pageWidth - 10 - cardTextWidth, centerY, {
        baseline: 'middle'
    });
    // ----- TABLE -----
    const headers = columns.map((col)=>col.label);
    const rows = data.map((row, idx)=>columns.map((col)=>{
            if (col.id === 'number') return idx + 1;
            if (dateFields.includes(col.id) && row[col.id]) {
                // Format all dates as Day.Month.Year
                const d = new Date(row[col.id]);
                return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`;
            }
            return row[col.id] ?? '';
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(doc, {
        head: [
            headers
        ],
        body: rows,
        startY: HEADER_HEIGHT + 6,
        margin: {
            left: 10,
            right: 10
        },
        didDrawPage: function(data) {
            // ----- FOOTER -----
            // Draw footer background
            doc.setFillColor(FOOTER_BG_COLOR);
            doc.rect(0, pageHeight - FOOTER_HEIGHT, pageWidth, FOOTER_HEIGHT, 'F');
            // Footer content: copyright, day.month.year, org name, centered
            doc.setFontSize(13);
            doc.setTextColor('#FFFFFF');
            doc.setFont('helvetica', 'bold');
            const dayMonthYear = getCurrentDayMonthYear();
            const footerText = `System-Generated on ${dayMonthYear} ©GoGirls ICT Initiative`;
            const textWidth = doc.getTextWidth(footerText);
            const centerX = pageWidth / 2;
            const footerY = pageHeight - FOOTER_HEIGHT / 2 + 1; // optical center
            doc.text(footerText, centerX - textWidth / 2, footerY, {
                baseline: 'middle'
            });
        }
    });
    doc.save('table.pdf');
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
"[project]/app/(admin)/admin/dashboard/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/useHybridCachedData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$downloadColumnsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$handleDownloadPDF$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/handleDownloadPDF.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$permissions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/permissions.ts [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './components/ProjectsSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/ReportsSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/EventsSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/InstitutionsSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/BeneficiariesSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/BeneficiaryMessagesSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/BeneficiaryRequestsSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/BeneficiaryRequestResponseSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/ChartsSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/AdminSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/HomePageSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
// ...Dynamic imports for forms and column/data-table imports as before
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
    // --- State and hooks as before ---
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
    // --- Effects for permissions, data, search, etc. (same as before) ---
    // ...All useEffects from your original code
    // --- Helpers ---
    function norm(v) {
        return (v ?? '').trim().toLowerCase();
    }
    function filterOwn(section, rows) {
    // ...same as your code
    }
    async function handleCardClick(section) {
    // ...same as your code
    }
    function handleEdit(record) {
    // ...same as your code
    }
    async function handleDelete(type, id) {
    // ...same as your code
    }
    // --- Section features (used for prop passing) ---
    const sectionFeatures = {
    };
    const role = session?.user?.role ?? 'guest';
    const activePermKey = activeSection ? permKeyMap[activeSection] : undefined;
    const canViewThisSection = activePermKey ? canView(activePermKey, role) : true;
    const sortedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
    // ...same as your code
    }, [
        data,
        sortBy,
        sortOrder,
        activeSection
    ]);
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
    // ...same as your code
    }, [
        sortedData,
        search,
        activeSection
    ]);
    const pageCount = Math.ceil(filteredData.length / rowsPerPage);
    const paginatedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage), [
        filteredData,
        page,
        rowsPerPage
    ]);
    // --- TableActions as before ---
    const TableActions = ({ data, columns, tableRef })=>{
    // ...same as your code
    };
    // --- Render active section ---
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
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 203,
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
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 214,
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
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 225,
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
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 236,
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
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 247,
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
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 269,
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
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 281,
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
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 297,
                    columnNumber: 11
                }, this);
            case 'charts':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartsSection, {}, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 307,
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
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 310,
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
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 321,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    }
    // --- Main render ---
    if (status === 'loading') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Checking session ..."
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
            lineNumber: 346,
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
                            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                            lineNumber: 372,
                            columnNumber: 13
                        }, this)
                    }, section, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, this),
            activeSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: renderSection()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 376,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$downloadColumnsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: downloadModalOpen,
                onClose: ()=>setDownloadModalOpen(false),
                columns: downloadColumns,
                onDownload: (selectedColumns)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$handleDownloadPDF$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleDownloadPDF"])(pendingDownloadData, selectedColumns, activeSection ? activeSection.charAt(0).toUpperCase() + activeSection.slice(1) : 'Data');
                }
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 350,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c5b986b6._.js.map