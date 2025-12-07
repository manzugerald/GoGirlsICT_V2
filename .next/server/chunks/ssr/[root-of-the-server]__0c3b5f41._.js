module.exports = {

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
"[project]/components/ui/table.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Table": (()=>Table),
    "TableBody": (()=>TableBody),
    "TableCaption": (()=>TableCaption),
    "TableCell": (()=>TableCell),
    "TableFooter": (()=>TableFooter),
    "TableHead": (()=>TableHead),
    "TableHeader": (()=>TableHeader),
    "TableRow": (()=>TableRow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground mt-4 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DataTable": (()=>DataTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-table/build/lib/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/table-core/build/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function DataTable({ columns, data }) {
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"])({
        data,
        columns,
        getCoreRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCoreRowModel"])(),
        enableColumnResizing: true,
        columnResizeMode: 'onChange'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-md border mt-6 overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                    children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                            children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    style: {
                                        position: 'relative',
                                        width: header.getSize(),
                                        minWidth: header.column.columnDef.minSize ?? 40,
                                        maxWidth: header.column.columnDef.maxSize ?? 1000
                                    },
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(header.column.columnDef.header, header.getContext()),
                                        header.column.getCanResize() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onMouseDown: header.getResizeHandler(),
                                            onTouchStart: header.getResizeHandler(),
                                            className: "resizer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx",
                                            lineNumber: 47,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, header.id, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx",
                                    lineNumber: 36,
                                    columnNumber: 17
                                }, this))
                        }, headerGroup.id, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                    children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                            className: "hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors",
                            children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                    style: {
                                        width: cell.column.getSize(),
                                        minWidth: cell.column.columnDef.minSize ?? 40,
                                        maxWidth: cell.column.columnDef.maxSize ?? 1000
                                    },
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
                                }, cell.id, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx",
                                    lineNumber: 65,
                                    columnNumber: 17
                                }, this))
                        }, row.id, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/projects.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "projectColumns": (()=>projectColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function projectColumns({ onEdit, onDelete }) {
    return [
        {
            accessorKey: 'title',
            header: 'Title',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-normal break-words max-w-xs",
                    children: row.getValue('title')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/projects.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
        },
        {
            accessorKey: 'createdAt',
            header: 'Created At',
            cell: ({ row })=>new Date(row.getValue('createdAt')).toLocaleDateString()
        },
        {
            accessorKey: 'updatedAt',
            header: 'Updated At',
            cell: ({ row })=>new Date(row.getValue('updatedAt')).toLocaleDateString()
        },
        {
            id: 'createdBy',
            header: 'Created By',
            cell: ({ row })=>{
                const createdBy = row.original.createdBy;
                if (!createdBy) return '--';
                return `${createdBy.firstName} ${createdBy.lastName}`;
            }
        },
        {
            accessorKey: 'projectStatus',
            header: 'Status'
        },
        {
            accessorKey: 'publishStatus',
            header: 'Publish'
        },
        {
            id: 'actions',
            header: 'Actions',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    onClick: ()=>onEdit(row.original),
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/projects.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
        },
        {
            id: 'delete',
            header: 'Delete',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "destructive",
                    onClick: ()=>onDelete(row.original.id),
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/projects.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
        }
    ];
}
}}),
"[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
const TiptapJsonViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/editor/tiptap-json-viewer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function ProjectView({ data, onClose }) {
    if (!data) return null;
    const renderContent = (c)=>{
        if (c === undefined || c === null) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-muted",
            children: "-"
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
            lineNumber: 42,
            columnNumber: 47
        }, this);
        if (typeof c === 'object') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded border bg-white dark:bg-gray-900 p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TiptapJsonViewer, {
                    content: c,
                    className: "tiptap tiptap-view-only"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "whitespace-pre-line",
            children: String(c)
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
            lineNumber: 50,
            columnNumber: 12
        }, this);
    };
    const created = data.createdAt ? new Date(data.createdAt).toLocaleString() : '-';
    const updated = data.updatedAt ? new Date(data.updatedAt).toLocaleString() : '-';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto p-4 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: data.title
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600 dark:text-gray-300 mt-1",
                                children: data.createdBy ? `${data.createdBy.firstName ?? ''} ${data.createdBy.lastName ?? ''}` : 'System'
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500 text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Status: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: data.projectStatus ?? '-'
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                                        lineNumber: 70,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Publish: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: data.publishStatus ?? '-'
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                                        lineNumber: 73,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500",
                        children: "Content"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: renderContent(data.content)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            Array.isArray(data.images) && data.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500 mb-2",
                        children: "Images"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                        children: data.images.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: img,
                                alt: "project",
                                className: "w-full h-28 object-cover rounded border"
                            }, img, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-500",
                        children: [
                            "Created: ",
                            created,
                            " · Updated: ",
                            updated
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: onClose,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$projects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/projects.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$projectView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/app/(admin)/dashboard/createProjectForm'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function ProjectsSection({ paginatedData, page, rowsPerPage, handleEdit, handleDelete, currentUserRole, TableActions }) {
    const [viewing, setViewing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openCreate, setOpenCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(paginatedData ?? []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setData(paginatedData ?? []);
    }, [
        paginatedData
    ]);
    const baseCols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$projects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectColumns"])({
            onEdit: handleEdit,
            onDelete: (id)=>handleDelete(id)
        }), [
        handleEdit,
        handleDelete
    ]);
    const viewColumn = {
        id: 'view',
        header: 'View',
        cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                size: "sm",
                onClick: ()=>setViewing(row.original),
                children: "View"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
    };
    const cols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return [
            ...baseCols.slice(0, -3),
            viewColumn,
            ...baseCols.slice(-3)
        ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        baseCols
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setOpenCreate(true),
                            className: "bg-green-600 text-white",
                            children: "Create Project"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: cols,
                data: data
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: data,
                columns: cols,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!viewing,
                onOpenChange: (val)=>!val && setViewing(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Project details"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        viewing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$projectView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            data: viewing,
                            onClose: ()=>setViewing(null)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                            lineNumber: 80,
                            columnNumber: 23
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: openCreate,
                onOpenChange: (val)=>!val && setOpenCreate(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Create Project"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateProjectForm, {
                                mode: "create",
                                onSuccess: ()=>{
                                    setOpenCreate(false);
                                },
                                onCancel: ()=>setOpenCreate(false)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/reports.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "reportColumns": (()=>reportColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function reportColumns({ onEdit, onDelete }) {
    return [
        {
            accessorKey: 'title',
            header: 'Title',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-normal break-words max-w-xs",
                    children: row.getValue('title')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/reports.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
        },
        {
            accessorKey: 'createdAt',
            header: 'Created At',
            cell: ({ row })=>new Date(row.getValue('createdAt')).toLocaleDateString()
        },
        {
            accessorKey: 'updatedAt',
            header: 'Updated At',
            cell: ({ row })=>new Date(row.getValue('updatedAt')).toLocaleDateString()
        },
        {
            id: 'createdBy',
            header: 'Created By',
            cell: ({ row })=>{
                const createdBy = row.original.createdBy;
                if (!createdBy) return '--';
                return `${createdBy.firstName} ${createdBy.lastName}`;
            }
        },
        {
            accessorKey: 'publishStatus',
            header: 'Publish'
        },
        {
            id: 'actions',
            header: 'Actions',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    onClick: ()=>onEdit(row.original),
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/reports.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
        },
        {
            id: 'delete',
            header: 'Delete',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "destructive",
                    onClick: ()=>onDelete(row.original.id),
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/reports.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
        }
    ];
}
}}),
"[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ReportView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
const TiptapJsonViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/editor/tiptap-json-viewer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function ReportView({ data, onClose }) {
    if (!data) return null;
    const created = data.createdAt ? new Date(data.createdAt).toLocaleString() : '-';
    const updated = data.updatedAt ? new Date(data.updatedAt).toLocaleString() : '-';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto p-4 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: data.title
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600 dark:text-gray-300 mt-1",
                                children: [
                                    data.createdBy ? `${data.createdBy.firstName ?? ''} ${data.createdBy.lastName ?? ''}` : 'System',
                                    data.project ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-3",
                                        children: [
                                            "· Project: ",
                                            data.project.title
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                                        lineNumber: 49,
                                        columnNumber: 29
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500 text-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                "Publish: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: data.publishStatus ?? '-'
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                                    lineNumber: 55,
                                    columnNumber: 22
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            Array.isArray(data.images) && data.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500 mb-2",
                        children: "Images"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                        children: data.images.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: img,
                                alt: "report",
                                className: "w-full h-28 object-cover rounded border"
                            }, img, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this),
            Array.isArray(data.files) && data.files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500 mb-2",
                        children: "Files"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc pl-5",
                        children: data.files.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: f,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-blue-600 underline",
                                    children: f.split('/').pop()
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this)
                            }, f, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-500",
                        children: [
                            "Created: ",
                            created,
                            " · Updated: ",
                            updated
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: onClose,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ReportsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$reports$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/reports.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$reportView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/app/(admin)/dashboard/createReportForm'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function ReportsSection({ paginatedData, page, rowsPerPage, handleEdit, handleDelete, currentUserRole, TableActions }) {
    const [viewing, setViewing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openCreate, setOpenCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(paginatedData ?? []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setData(paginatedData ?? []);
    }, [
        paginatedData
    ]);
    const baseCols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$reports$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reportColumns"])({
            onEdit: handleEdit,
            onDelete: (id)=>handleDelete(id)
        }), [
        handleEdit,
        handleDelete
    ]);
    const viewColumn = {
        id: 'view',
        header: 'View',
        cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                size: "sm",
                onClick: ()=>setViewing(row.original),
                children: "View"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
    };
    const cols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return [
            ...baseCols.slice(0, -3),
            viewColumn,
            ...baseCols.slice(-3)
        ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        baseCols
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setOpenCreate(true),
                            className: "bg-green-600 text-white",
                            children: "Create Report"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: cols,
                data: data
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: data,
                columns: cols,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!viewing,
                onOpenChange: (val)=>!val && setViewing(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Report details"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        viewing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$reportView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            data: viewing,
                            onClose: ()=>setViewing(null)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                            lineNumber: 80,
                            columnNumber: 23
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: openCreate,
                onOpenChange: (val)=>!val && setOpenCreate(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Create Report"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateReportForm, {
                                mode: "create",
                                onSuccess: ()=>setOpenCreate(false),
                                onCancel: ()=>setOpenCreate(false)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/events.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "eventColumns": (()=>eventColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function eventColumns({ onEdit, onDelete }) {
    return [
        {
            accessorKey: "eventTitle",
            header: "Title",
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-normal break-words max-w-xs",
                    children: row.getValue("eventTitle")
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/events.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
        },
        {
            accessorKey: "eventStartDate",
            header: "Start Date",
            cell: ({ row })=>row.getValue("eventStartDate") ? new Date(row.getValue("eventStartDate")).toLocaleDateString() : ""
        },
        {
            accessorKey: "eventEndDate",
            header: "End Date",
            cell: ({ row })=>row.getValue("eventEndDate") ? new Date(row.getValue("eventEndDate")).toLocaleDateString() : ""
        },
        {
            accessorKey: "createdAt",
            header: "Created At",
            cell: ({ row })=>new Date(row.getValue("createdAt")).toLocaleDateString()
        },
        {
            accessorKey: "updatedAt",
            header: "Updated At",
            cell: ({ row })=>new Date(row.getValue("updatedAt")).toLocaleDateString()
        },
        {
            id: "createdBy",
            header: "Created By",
            cell: ({ row })=>{
                const createdBy = row.original.createdBy;
                if (!createdBy) return "-";
                return `${createdBy.firstName} ${createdBy.lastName}`;
            }
        },
        {
            accessorKey: "eventStatus",
            header: "Status"
        },
        {
            accessorKey: "publishStatus",
            header: "Publish"
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    onClick: ()=>onEdit(row.original),
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/events.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
        },
        {
            id: "delete",
            header: "Delete",
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "destructive",
                    onClick: ()=>onDelete(row.original.id),
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/events.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
        }
    ];
}
}}),
"[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EventView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
const TiptapJsonViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/editor/tiptap-json-viewer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function EventView({ data, onClose }) {
    if (!data) return null;
    const renderJson = (c)=>{
        if (c === undefined || c === null) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-muted",
            children: "-"
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
            lineNumber: 54,
            columnNumber: 47
        }, this);
        if (typeof c === 'object') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded border bg-white dark:bg-gray-900 p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TiptapJsonViewer, {
                    content: c,
                    className: "tiptap tiptap-view-only"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "whitespace-pre-line",
            children: String(c)
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
            lineNumber: 62,
            columnNumber: 12
        }, this);
    };
    const start = data.eventStartDate ? new Date(data.eventStartDate).toLocaleString() : '-';
    const end = data.eventEndDate ? new Date(data.eventEndDate).toLocaleString() : '-';
    const created = data.createdAt ? new Date(data.createdAt).toLocaleString() : '-';
    const updated = data.updatedAt ? new Date(data.updatedAt).toLocaleString() : '-';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto p-4 space-y-4",
        children: [
            data.eventBanner ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full rounded overflow-hidden border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: data.eventBanner,
                    alt: data.eventTitle ?? 'Event banner',
                    className: "w-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: data.eventTitle
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600 dark:text-gray-300 mt-1",
                                children: [
                                    data.createdBy ? `${data.createdBy.firstName ?? ''} ${data.createdBy.lastName ?? ''}` : 'System',
                                    data.project ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-3",
                                        children: [
                                            "· Project: ",
                                            data.project.title
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                        lineNumber: 90,
                                        columnNumber: 29
                                    }, this) : null,
                                    data.report ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-3",
                                        children: [
                                            "· Report: ",
                                            data.report.title
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                        lineNumber: 91,
                                        columnNumber: 28
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500 text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Start: ",
                                    start
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "End: ",
                                    end
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2",
                                children: [
                                    "Status: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: data.eventStatus ?? '-'
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                        lineNumber: 99,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Publish: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: data.publishStatus ?? '-'
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                        lineNumber: 102,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500",
                                children: "Location"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-medium",
                                children: data.eventLocation ?? '-'
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500",
                                children: "Attendance"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-medium",
                                children: data.eventAttendance ?? '-'
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            typeof data.maxAttendees === 'number' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500 mt-1",
                                children: [
                                    "Max attendees: ",
                                    data.maxAttendees
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500",
                                children: "Tags"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mt-1",
                                children: Array.isArray(data.eventTags) && data.eventTags.length > 0 ? data.eventTags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800",
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-muted",
                                    children: "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500",
                        children: "Description"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: renderJson(data.eventDescription)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            data.eventDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500",
                        children: "Details"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: renderJson(data.eventDetails)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this),
            Array.isArray(data.eventImages) && data.eventImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500 mb-2",
                        children: "Images"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                        children: data.eventImages.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: img,
                                alt: "event",
                                className: "w-full h-28 object-cover rounded border"
                            }, img, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this),
            data.eventFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500",
                        children: "Attached File"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: data.eventFile,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "underline text-blue-600",
                            children: data.eventFile.split('/').pop()
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-500",
                        children: [
                            "Created: ",
                            created,
                            " · Updated: ",
                            updated
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: onClose,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EventsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$events$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/events.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$eventView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/app/admin/dashboard/createEventForm'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function EventsSection({ paginatedData, page, rowsPerPage, handleEdit, handleDelete, currentUserRole, TableActions }) {
    const [viewingEvent, setViewingEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openCreate, setOpenCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Keep a local copy of paginatedData for the table; merge server-provided values if needed
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(paginatedData ?? []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setData(paginatedData ?? []);
    }, [
        paginatedData
    ]);
    const baseCols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$events$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventColumns"])({
            onEdit: handleEdit,
            onDelete: (id)=>handleDelete(id)
        }), [
        handleEdit,
        handleDelete
    ]);
    // Add a "View" column so users can open the EventView dialog
    const viewColumn = {
        id: 'view',
        header: 'View',
        cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                size: "sm",
                onClick: ()=>setViewingEvent(row.original),
                children: "View"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
    };
    const cols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // append view column before actions for convenience
        return [
            ...baseCols.slice(0, -3),
            viewColumn,
            ...baseCols.slice(-3)
        ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        baseCols
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setOpenCreate(true),
                            className: "bg-green-600 text-white",
                            children: "Create Event"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: cols,
                data: data
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: data,
                columns: cols,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!viewingEvent,
                onOpenChange: (val)=>!val && setViewingEvent(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Event details"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        viewingEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$eventView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            data: viewingEvent,
                            onClose: ()=>{
                                setViewingEvent(null);
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: openCreate,
                onOpenChange: (val)=>!val && setOpenCreate(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Create Event"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateEventForm, {
                                mode: "create",
                                onSuccess: ()=>{
                                    setOpenCreate(false);
                                // parent page should refresh; we do a soft update by removing nothing here
                                },
                                onCancel: ()=>setOpenCreate(false)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "institutionColumns": (()=>institutionColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function institutionColumns({ onEdit, onDelete }) {
    return [
        {
            accessorKey: 'name',
            header: 'Name',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-normal break-words max-w-xs",
                    children: row.getValue('name')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
        },
        {
            accessorKey: 'institutionType',
            header: 'Type',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "capitalize",
                    children: String(row.getValue('institutionType')).replace(/_/g, ' ')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
        },
        {
            accessorKey: 'email',
            header: 'Email'
        },
        {
            accessorKey: 'phone',
            header: 'Phone'
        },
        {
            accessorKey: 'headName',
            header: 'Head Name'
        },
        {
            accessorKey: 'createdAt',
            header: 'Created At',
            cell: ({ row })=>new Date(row.getValue('createdAt')).toLocaleDateString()
        },
        {
            accessorKey: 'updatedAt',
            header: 'Updated At',
            cell: ({ row })=>new Date(row.getValue('updatedAt')).toLocaleDateString()
        },
        {
            id: 'createdBy',
            header: 'Created By',
            cell: ({ row })=>{
                const createdBy = row.original.createdBy;
                if (!createdBy) return '--';
                return `${createdBy.firstName} ${createdBy.lastName}`;
            }
        },
        {
            id: 'locations',
            header: 'Locations',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc pl-4",
                    children: row.original.locations && row.original.locations.length > 0 ? row.original.locations.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: loc.locationName || 'Unnamed'
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this),
                                loc.latitude !== undefined && loc.latitude !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        ' ',
                                        "- ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            children: "Lat:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                                            lineNumber: 97,
                                            columnNumber: 23
                                        }, this),
                                        " ",
                                        loc.latitude
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                                    lineNumber: 95,
                                    columnNumber: 19
                                }, this),
                                loc.longitude !== undefined && loc.longitude !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            children: "Lng:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                                            lineNumber: 103,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        loc.longitude
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                                    lineNumber: 101,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, loc.id, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                            lineNumber: 92,
                            columnNumber: 15
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "italic text-muted-foreground",
                        children: "No locations"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
        },
        {
            id: 'images',
            header: 'Images',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: row.original.institutionImages && row.original.institutionImages.length > 0 ? row.original.institutionImages.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: img,
                            alt: "Institution",
                            className: "w-12 h-12 object-cover rounded border"
                        }, img + idx, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                            lineNumber: 121,
                            columnNumber: 15
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "italic text-muted-foreground",
                        children: "No images"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                        lineNumber: 129,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
        },
        {
            id: 'actions',
            header: 'Actions',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    onClick: ()=>onEdit(row.original),
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
        },
        {
            id: 'delete',
            header: 'Delete',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "destructive",
                    onClick: ()=>onDelete(row.original.id),
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
        }
    ];
}
}}),
"[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InstitutionView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function InstitutionView({ data, onClose }) {
    if (!data) return null;
    const created = data.createdAt ? new Date(data.createdAt).toLocaleString() : '-';
    const updated = data.updatedAt ? new Date(data.updatedAt).toLocaleString() : '-';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto p-4 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: data.name
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600 dark:text-gray-300 mt-1",
                                children: [
                                    data.headName ? `Head: ${data.headName}` : null,
                                    data.createdBy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-3",
                                        children: [
                                            "· Created by: ",
                                            data.createdBy.firstName ?? '',
                                            " ",
                                            data.createdBy.lastName ?? ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500 text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Email: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: data.email ?? '-'
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                                        lineNumber: 59,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Phone: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: data.phone ?? '-'
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                                        lineNumber: 62,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            data.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500",
                        children: "Logo"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: data.logo,
                            alt: `${data.name} logo`,
                            className: "w-32 h-32 object-cover rounded border"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            Array.isArray(data.institutionImages) && data.institutionImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500 mb-2",
                        children: "Images"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                        children: data.institutionImages.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: img,
                                alt: "institution",
                                className: "w-full h-28 object-cover rounded border"
                            }, img, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this),
            Array.isArray(data.locations) && data.locations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500 mb-2",
                        children: "Locations"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc pl-5",
                        children: data.locations.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    loc.locationName ?? '-',
                                    ' ',
                                    loc.latitude !== undefined && loc.longitude !== undefined ? `· (${loc.latitude}, ${loc.longitude})` : null
                                ]
                            }, String(loc.id) || `${loc.locationName}`, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-500",
                        children: [
                            "Created: ",
                            created,
                            " · Updated: ",
                            updated
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: onClose,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/ui/label.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateInstitutionForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const institutionTypeOptions = [
    'education',
    'faith_based_organization',
    'local_community',
    'ngo',
    'government',
    'other'
];
const EMAIL_LABEL = 'Email: example@example.org or example@example.com, etc';
const PHONE_LABEL = 'Phone: Must contain a country code (e.g. +211..., +256..., 00254..., etc) and more than 8 digits';
const INSTITUTION_LABEL = 'Institution Name: GoGirls ICT Initiative, etc';
const HEAD_LABEL = 'Head Name: Nyoka Nawani Deng, etc';
function validateEmail(email) {
    return /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
}
function validatePhone(phone) {
    const cleaned = phone.replace(/\s+/g, '');
    if ((cleaned.startsWith('+') || cleaned.startsWith('00')) && cleaned.replace(/\D/g, '').length >= 9) {
        return true;
    }
    return false;
}
function validateName(name) {
    return name.trim().length > 2;
}
function validateHeadName(head) {
    return /^[A-Za-z\s\-\.]{6,}$/.test(head.trim());
}
function CreateInstitutionForm({ mode = 'create', initialData, onSuccess, onCancel }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        logoFile: null,
        headName: '',
        institutionType: 'education',
        files: null,
        institutionImages: [],
        logo: '',
        locations: [
            {
                id: undefined,
                locationName: '',
                latitude: '',
                longitude: ''
            }
        ]
    });
    const [imagesToRemove, setImagesToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialData) {
            setForm((prev)=>({
                    ...prev,
                    name: initialData.name || '',
                    email: initialData.email || '',
                    phone: initialData.phone || '',
                    logo: initialData.logo || '',
                    logoFile: null,
                    headName: initialData.headName || '',
                    institutionType: initialData.institutionType || 'education',
                    institutionImages: initialData.institutionImages || [],
                    locations: initialData.locations && initialData.locations.length > 0 ? initialData.locations.map((loc)=>({
                            id: loc.id,
                            locationName: loc.locationName || '',
                            latitude: loc.latitude?.toString() || '',
                            longitude: loc.longitude?.toString() || ''
                        })) : [
                        {
                            id: undefined,
                            locationName: '',
                            latitude: '',
                            longitude: ''
                        }
                    ]
                }));
        }
    }, [
        initialData
    ]);
    const handleChange = (e)=>{
        const { name, value, files } = e.target;
        setErrors((prev)=>({
                ...prev,
                [name]: ''
            }));
        if (name === 'files' && files) {
            setForm((prev)=>({
                    ...prev,
                    files
                }));
        } else if (name === 'logoFile' && files && files[0]) {
            setForm((prev)=>({
                    ...prev,
                    logoFile: files[0],
                    logo: URL.createObjectURL(files[0])
                }));
        } else {
            setForm((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
    };
    const handleLocationChange = (idx, e)=>{
        const { name, value } = e.target;
        setForm((prev)=>{
            const updated = [
                ...prev.locations
            ];
            updated[idx] = {
                ...updated[idx],
                [name]: value
            };
            return {
                ...prev,
                locations: updated
            };
        });
    };
    const addLocation = ()=>{
        setForm((prev)=>({
                ...prev,
                locations: [
                    ...prev.locations,
                    {
                        locationName: '',
                        latitude: '',
                        longitude: ''
                    }
                ]
            }));
    };
    const removeLocation = (idx)=>{
        setForm((prev)=>({
                ...prev,
                locations: prev.locations.filter((_, i)=>i !== idx)
            }));
    };
    const handleRemoveImage = (url)=>{
        setImagesToRemove((prev)=>[
                ...prev,
                url
            ]);
        setForm((prev)=>({
                ...prev,
                institutionImages: prev.institutionImages.filter((img)=>img !== url)
            }));
    };
    const validateForm = ()=>{
        const newErrors = {};
        if (!validateName(form.name)) newErrors['name'] = 'Please enter a valid institution name.';
        if (!validateEmail(form.email)) newErrors['email'] = 'Please enter a valid email (e.g., example@example.org).';
        if (!validatePhone(form.phone)) newErrors['phone'] = 'Phone must include a country code and be at least 9 digits.';
        if (!validateHeadName(form.headName)) newErrors['headName'] = 'Please use a valid head name (e.g., Nyoka Nawani Deng, at least 6 chars).';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleBlur = (e)=>{
        const { name, value } = e.target;
        let error = '';
        if (name === 'email' && value && !validateEmail(value)) {
            error = 'Please enter a valid email (e.g., example@example.org).';
        }
        if (name === 'phone' && value && !validatePhone(value)) {
            error = 'Phone must include a country code and be at least 9 digits.';
        }
        if (name === 'name' && value && !validateName(value)) {
            error = 'Please enter a valid institution name.';
        }
        if (name === 'headName' && value && !validateHeadName(value)) {
            error = 'Please use a valid head name (at least 6 chars, e.g. Nyoka Nawani Deng).';
        }
        if (error) setErrors((prev)=>({
                ...prev,
                [name]: error
            }));
        else setErrors((prev)=>({
                ...prev,
                [name]: ''
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);
        if (!session?.user?.id) {
            alert('You must be logged in.');
            setLoading(false);
            return;
        }
        if (mode === 'create' && (!form.files || form.files.length === 0)) {
            setErrors((prev)=>({
                    ...prev,
                    files: 'Please upload at least one image.'
                }));
            setLoading(false);
            return;
        }
        if (mode === 'create' && !form.logoFile) {
            setErrors((prev)=>({
                    ...prev,
                    logoFile: 'Please upload a logo image.'
                }));
            setLoading(false);
            return;
        }
        const institutionFormData = new FormData();
        institutionFormData.append('name', form.name.trim());
        institutionFormData.append('email', form.email.trim());
        institutionFormData.append('phone', form.phone.trim());
        institutionFormData.append('headName', form.headName.trim());
        institutionFormData.append('institutionType', form.institutionType);
        if (form.logoFile) {
            institutionFormData.append('logoFile', form.logoFile);
        }
        if (mode === 'edit') {
            institutionFormData.append('institutionImages', JSON.stringify(form.institutionImages));
            institutionFormData.append('imagesToRemove', JSON.stringify(imagesToRemove));
        }
        if (form.files && form.files.length > 0) {
            Array.from(form.files).forEach((file)=>{
                institutionFormData.append('files', file);
            });
        }
        let institutionId = null;
        try {
            let res;
            if (mode === 'edit' && initialData?.id) {
                res = await fetch(`/api/institutions/${initialData.id}`, {
                    method: 'PATCH',
                    body: institutionFormData
                });
            } else {
                institutionFormData.append('locations', JSON.stringify(form.locations.filter((loc)=>!loc.id).map((loc)=>({
                        locationName: loc.locationName,
                        latitude: loc.latitude ? parseFloat(loc.latitude) : null,
                        longitude: loc.longitude ? parseFloat(loc.longitude) : null
                    }))));
                res = await fetch('/api/institutions', {
                    method: 'POST',
                    body: institutionFormData
                });
            }
            if (!res.ok) {
                const errorData = await res.json().catch(()=>null);
                const errorMessage = errorData?.error || `Failed to ${mode} institution`;
                throw new Error(errorMessage);
            }
            const result = await res.json();
            institutionId = result.id || result.institution?.id;
        } catch (err) {
            alert(`There was an error ${mode === 'edit' ? 'updating' : 'creating'} the institution. Please try again.`);
            setLoading(false);
            return;
        }
        if (mode === 'edit' && institutionId) {
            try {
                for (const loc of form.locations){
                    if ((!loc.id || loc.id === '') && (loc.locationName || loc.latitude || loc.longitude)) {
                        await fetch('/api/locations', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                locationName: loc.locationName,
                                latitude: loc.latitude ? parseFloat(loc.latitude) : null,
                                longitude: loc.longitude ? parseFloat(loc.longitude) : null,
                                institutionId
                            })
                        });
                    }
                }
            } catch (err) {
                alert('Failed to update locations for the institution.');
                setLoading(false);
                return;
            }
        }
        if (onSuccess) onSuccess();
        router.refresh();
        router.push('/admin/dashboard');
        setLoading(false);
    };
    const handleDelete = async ()=>{
        if (!initialData?.id) return;
        if (!window.confirm('Are you sure you want to delete this institution? This action cannot be undone.')) return;
        setDeleting(true);
        try {
            const res = await fetch(`/api/institutions/${initialData.id}`, {
                method: 'DELETE'
            });
            if (!res.ok) {
                const errorData = await res.json().catch(()=>null);
                const errorMessage = errorData?.error || 'Failed to delete institution';
                throw new Error(errorMessage);
            }
            if (onSuccess) onSuccess();
            router.refresh();
            router.push('/admin/dashboard');
        } catch (err) {
            alert('There was an error deleting the institution. Please try again.');
        } finally{
            setDeleting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "w-full max-w-4xl mx-auto mt-4 space-y-6 p-6 bg-background rounded-xl shadow",
        encType: "multipart/form-data",
        autoComplete: "off",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold mb-4 text-center",
                children: mode === 'edit' ? 'Edit Institution' : 'Create New Institution'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                lineNumber: 387,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "name",
                        children: INSTITUTION_LABEL
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "name",
                        name: "name",
                        value: form.name,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        required: true,
                        placeholder: "GoGirls ICT Initiative, etc"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this),
                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-600 text-xs",
                        children: errors.name
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 401,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                lineNumber: 390,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "email",
                        children: EMAIL_LABEL
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "email",
                        name: "email",
                        type: "email",
                        value: form.email,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        required: true,
                        placeholder: "example@example.org, example@gmail.com, etc"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 405,
                        columnNumber: 9
                    }, this),
                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-600 text-xs",
                        children: errors.email
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 415,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "phone",
                        children: PHONE_LABEL
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "phone",
                        name: "phone",
                        type: "tel",
                        value: form.phone,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        required: true,
                        minLength: 9,
                        placeholder: "+211700000000, 00256780000000, etc"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 419,
                        columnNumber: 9
                    }, this),
                    errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-600 text-xs",
                        children: errors.phone
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 430,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "logoFile",
                        children: mode === 'edit' ? 'Logo (optional, will replace current)' : 'Logo (required)'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "logoFile",
                        name: "logoFile",
                        type: "file",
                        accept: "image/png,image/jpeg",
                        onChange: handleChange,
                        required: mode === 'create'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 436,
                        columnNumber: 9
                    }, this),
                    errors.logoFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-600 text-xs",
                        children: errors.logoFile
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 444,
                        columnNumber: 29
                    }, this),
                    form.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: form.logo,
                        alt: "Logo Preview",
                        className: "w-24 h-24 object-cover rounded border mt-2"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 446,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "headName",
                        children: HEAD_LABEL
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 454,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "headName",
                        name: "headName",
                        value: form.headName,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        required: true,
                        placeholder: "Nyoka Nawani Deng, etc"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 455,
                        columnNumber: 9
                    }, this),
                    errors.headName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-600 text-xs",
                        children: errors.headName
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 464,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                lineNumber: 453,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institutionType",
                        children: "Institution Type"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "institutionType",
                        name: "institutionType",
                        value: form.institutionType,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: institutionTypeOptions.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: type,
                                children: type.replace(/_/g, ' ')
                            }, type, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                                lineNumber: 476,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            mode === 'edit' && form.institutionImages && form.institutionImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Current Images"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 484,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4",
                        children: form.institutionImages.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: img,
                                        alt: "Institution",
                                        className: "w-24 h-24 object-cover rounded border"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                                        lineNumber: 488,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center",
                                        onClick: ()=>handleRemoveImage(img),
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                                        lineNumber: 493,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, img, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                                lineNumber: 487,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 485,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                lineNumber: 483,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "files",
                        children: mode === 'edit' ? 'Image Upload (optional, will replace/add to current images)' : 'Image Upload (required)'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 506,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "files",
                        name: "files",
                        type: "file",
                        accept: "image/png,image/jpeg",
                        multiple: true,
                        onChange: handleChange,
                        required: mode === 'create'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this),
                    errors.files && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-600 text-xs",
                        children: errors.files
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 520,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                lineNumber: 505,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Locations"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this),
                    form.locations.map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 items-end mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Location Name",
                                        name: "locationName",
                                        value: loc.locationName,
                                        onChange: (e)=>handleLocationChange(idx, e)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                                        lineNumber: 527,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                                    lineNumber: 526,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Latitude",
                                        name: "latitude",
                                        type: "number",
                                        value: loc.latitude,
                                        onChange: (e)=>handleLocationChange(idx, e)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                                        lineNumber: 535,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                                    lineNumber: 534,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Longitude",
                                        name: "longitude",
                                        type: "number",
                                        value: loc.longitude,
                                        onChange: (e)=>handleLocationChange(idx, e)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                                        lineNumber: 544,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                                    lineNumber: 543,
                                    columnNumber: 13
                                }, this),
                                form.locations.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    className: "bg-red-500",
                                    onClick: ()=>removeLocation(idx),
                                    children: "Remove"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                                    lineNumber: 553,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                            lineNumber: 525,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        onClick: addLocation,
                        className: "bg-[#9f004d]",
                        children: "Add Location"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 559,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                lineNumber: 522,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading,
                        className: "w-1/2 bg-[#9f004d]",
                        children: loading ? mode === 'edit' ? 'Updating...' : 'Creating...' : mode === 'edit' ? 'Update Institution' : 'Create Institution'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 564,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        onClick: onCancel,
                        disabled: loading,
                        className: "w-1/2 bg-black",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 573,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                lineNumber: 563,
                columnNumber: 7
            }, this),
            mode === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                onClick: handleDelete,
                disabled: deleting,
                className: "w-full mt-4 bg-red-700",
                children: deleting ? 'Deleting...' : 'Delete Institution'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                lineNumber: 578,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
        lineNumber: 381,
        columnNumber: 5
    }, this);
} // This form allows admins to create or edit institution records, including uploading images and managing locations.
 // It validates inputs, handles file uploads, and supports both creation and editing modes.
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InstitutionsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$institutions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$institutionView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createInstitutionForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function InstitutionsSection({ paginatedData, page, rowsPerPage, handleEdit, handleDelete, currentUserRole, TableActions }) {
    const [viewing, setViewing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openCreate, setOpenCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(paginatedData ?? []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setData(paginatedData ?? []);
    }, [
        paginatedData
    ]);
    const baseCols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$institutions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["institutionColumns"])({
            onEdit: handleEdit,
            onDelete: (id)=>handleDelete(id)
        }), [
        handleEdit,
        handleDelete
    ]);
    const viewColumn = {
        id: 'view',
        header: 'View',
        cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                size: "sm",
                onClick: ()=>setViewing(row.original),
                children: "View"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
    };
    const cols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return [
            ...baseCols.slice(0, -3),
            viewColumn,
            ...baseCols.slice(-3)
        ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        baseCols
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setOpenCreate(true),
                            className: "bg-green-600 text-white",
                            children: "Create Institution"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: cols,
                data: data
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: data,
                columns: cols,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!viewing,
                onOpenChange: (val)=>!val && setViewing(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Institution details"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        viewing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$institutionView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            data: viewing,
                            onClose: ()=>setViewing(null)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                            lineNumber: 80,
                            columnNumber: 23
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: openCreate,
                onOpenChange: (val)=>!val && setOpenCreate(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Create Institution"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createInstitutionForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                mode: "create",
                                onSuccess: ()=>setOpenCreate(false),
                                onCancel: ()=>setOpenCreate(false)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "beneficiaryColumns": (()=>beneficiaryColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function beneficiaryColumns({ onEdit, onView, onDelete, onAddMessage, onMessageIdClick, messagesCountMap, responsesCountMap, currentUserRole }) {
    const cols = [
        {
            accessorKey: 'firstName',
            header: 'First Name',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-normal break-words max-w-xs",
                    children: row.getValue('firstName')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
        },
        {
            accessorKey: 'lastName',
            header: 'Last Name',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-normal break-words max-w-xs",
                    children: row.getValue('lastName')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
        },
        {
            id: 'messagesCount',
            header: 'Messages',
            cell: ({ row })=>{
                const id = row.original.id;
                // Prefer server-provided count on the row, then fallback to the provided map
                const serverCount = row.original.messageCount ?? row.original.messagesCount;
                if (typeof serverCount === 'number') return serverCount;
                if (messagesCountMap && id) return messagesCountMap[id] ?? 0;
                return 0;
            }
        },
        {
            id: 'addMessage',
            header: '',
            cell: ({ row })=>onAddMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    className: "px-2 py-1 rounded bg-green-600 text-white hover:bg-green-700 dark:hover:bg-green-800 text-xs",
                    onClick: ()=>onAddMessage(row.original.id),
                    children: "Add Message"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 79,
                    columnNumber: 11
                }, this) : null
        },
        {
            id: 'responsesCount',
            header: 'Responses',
            cell: ({ row })=>{
                const id = row.original.id;
                const serverCount = row.original.responseCount ?? row.original.responsesCount;
                if (typeof serverCount === 'number') return serverCount;
                if (responsesCountMap && id) return responsesCountMap[id] ?? 0;
                return 0;
            }
        },
        {
            accessorKey: 'createdAt',
            header: 'Created At',
            cell: ({ row })=>row.getValue('createdAt') ? new Date(row.getValue('createdAt')).toLocaleDateString() : ''
        },
        {
            accessorKey: 'updatedAt',
            header: 'Updated At',
            cell: ({ row })=>row.getValue('updatedAt') ? new Date(row.getValue('updatedAt')).toLocaleDateString() : ''
        },
        {
            id: 'edit',
            header: 'Edit',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    className: "transition-colors duration-150 hover:bg-yellow-100 dark:hover:bg-yellow-800 hover:text-yellow-900 dark:hover:text-yellow-100",
                    onClick: ()=>onEdit(row.original),
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
        },
        {
            id: 'view',
            header: 'View',
            cell: ({ row })=>onView ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    className: "transition-colors duration-150 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-900 dark:hover:text-blue-100",
                    onClick: ()=>onView(row.original),
                    children: "View"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 141,
                    columnNumber: 11
                }, this) : null
        }
    ];
    if (onDelete && currentUserRole !== 'beneficiary') {
        cols.push({
            id: 'delete',
            header: 'Delete',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "destructive",
                    className: "transition-colors duration-150 hover:bg-red-600 dark:hover:bg-red-800 hover:text-white dark:hover:text-white",
                    onClick: ()=>onDelete(row.original.id),
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
        });
    }
    return cols;
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BeneficiariesSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaries$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/app/admin/dashboard/createMessageForm'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function BeneficiariesSection({ paginatedData, page, rowsPerPage, handleEdit, handleView, handleDelete, messagesCountMap: initialMessagesCountMap, responsesCountMap: initialResponsesCountMap, currentUserRole, TableActions, onAddMessage: externalOnAddMessage }) {
    // Local maps so the component can update counts immediately after creating a message
    const [messagesCountMap, setMessagesCountMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialMessagesCountMap ?? {});
    const [responsesCountMap, setResponsesCountMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialResponsesCountMap ?? {});
    // When paginatedData (server list) changes we merge server-provided counts into the maps
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!Array.isArray(paginatedData)) return;
        setMessagesCountMap((prev)=>{
            const merged = {
                ...prev
            };
            for (const b of paginatedData){
                const id = b?.id;
                const serverCount = typeof b?.messageCount === 'number' ? b.messageCount : typeof b?.messagesCount === 'number' ? b.messagesCount : undefined;
                if (id && typeof serverCount === 'number') merged[id] = serverCount;
            }
            return merged;
        });
        setResponsesCountMap((prev)=>{
            const merged = {
                ...prev
            };
            for (const b of paginatedData){
                const id = b?.id;
                const serverCount = typeof b?.responseCount === 'number' ? b.responseCount : typeof b?.responsesCount === 'number' ? b.responsesCount : undefined;
                if (id && typeof serverCount === 'number') merged[id] = serverCount;
            }
            return merged;
        });
    }, [
        paginatedData
    ]);
    // Dialog state
    const [openAddMessageFor, setOpenAddMessageFor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [creating, setCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const openCreateModal = (beneficiaryId)=>{
        if (externalOnAddMessage) {
            try {
                externalOnAddMessage(beneficiaryId);
            } catch  {
            // ignore
            }
        }
        setOpenAddMessageFor(beneficiaryId);
    };
    const closeCreateModal = ()=>{
        setOpenAddMessageFor(null);
    };
    // After message creation we refresh counts by fetching beneficiary endpoint.
    const handleCreateSuccess = async (beneficiaryId)=>{
        setCreating(true);
        try {
            const res = await fetch(`/api/beneficiaries/${encodeURIComponent(beneficiaryId)}`);
            if (!res.ok) {
                // optimistic fallback: increment messages
                setMessagesCountMap((prev)=>{
                    const prevCount = prev[beneficiaryId] ?? 0;
                    return {
                        ...prev,
                        [beneficiaryId]: prevCount + 1
                    };
                });
                setOpenAddMessageFor(null);
                setCreating(false);
                return;
            }
            const json = await res.json();
            const msgCount = typeof json.messageCount === 'number' ? json.messageCount : typeof json.messagesCount === 'number' ? json.messagesCount : undefined;
            const respCount = typeof json.responseCount === 'number' ? json.responseCount : typeof json.responsesCount === 'number' ? json.responsesCount : undefined;
            setMessagesCountMap((prev)=>typeof msgCount === 'number' ? {
                    ...prev,
                    [beneficiaryId]: msgCount
                } : {
                    ...prev,
                    [beneficiaryId]: (prev[beneficiaryId] ?? 0) + 1
                });
            if (typeof respCount === 'number') {
                setResponsesCountMap((prev)=>({
                        ...prev,
                        [beneficiaryId]: respCount
                    }));
            }
            setOpenAddMessageFor(null);
        } catch (err) {
            // optimistic fallback increment
            setMessagesCountMap((prev)=>{
                const prevCount = prev[beneficiaryId] ?? 0;
                return {
                    ...prev,
                    [beneficiaryId]: prevCount + 1
                };
            });
            setOpenAddMessageFor(null);
        } finally{
            setCreating(false);
        }
    };
    // Provide onAddMessage to columns so Add Message button opens our dialog
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return [
            {
                id: 'number',
                header: 'No.',
                cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
                size: 50
            },
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaries$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["beneficiaryColumns"])({
                onEdit: handleEdit,
                onView: handleView,
                onDelete: handleDelete,
                // pass our local handlers/maps
                messagesCountMap,
                responsesCountMap,
                currentUserRole,
                onAddMessage: (id)=>openCreateModal(id)
            })
        ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        page,
        rowsPerPage,
        handleEdit,
        handleView,
        handleDelete,
        messagesCountMap,
        responsesCountMap,
        currentUserRole
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: columns,
                data: paginatedData
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: paginatedData,
                columns: columns,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!openAddMessageFor,
                onOpenChange: (val)=>!val && closeCreateModal(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Create Message for beneficiary"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        openAddMessageFor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 max-w-3xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateMessageForm, {
                                    messageId: openAddMessageFor,
                                    onSuccess: async ()=>{
                                        await handleCreateSuccess(openAddMessageFor);
                                    },
                                    onCancel: closeCreateModal
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: closeCreateModal,
                                        disabled: creating,
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                                        lineNumber: 207,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MessagesSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function MessagesSection({ paginatedData, page, rowsPerPage, handleEdit, handleView, handleDelete, onRespond, currentUserRole, TableActions, deleteId, deleteLoading }) {
    const ownerLabel = (m)=>{
        if (m.name && `${m.name}`.trim().length > 0) return m.name;
        if (m.beneficiary) return `${m.beneficiary.firstName} ${m.beneficiary.lastName}`;
        return 'System';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            (!Array.isArray(paginatedData) || paginatedData.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8 text-gray-500",
                children: "No messages found."
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this),
            Array.isArray(paginatedData) && paginatedData.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0 cursor-pointer",
                                onClick: ()=>handleView(m, 'messages'),
                                role: "button",
                                tabIndex: 0,
                                onKeyDown: (e)=>{
                                    if (e.key === 'Enter' || e.key === ' ') handleView(m, 'messages');
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium truncate",
                                            children: ownerLabel(m)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                            lineNumber: 69,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm",
                                            children: m.messageKind ?? '-'
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                            lineNumber: 70,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500",
                                            children: [
                                                "Created: ",
                                                m.createdAt ? new Date(m.createdAt).toLocaleString() : '-'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500",
                                            children: [
                                                "Updated: ",
                                                m.updatedAt ? new Date(m.updatedAt).toLocaleString() : '-'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "px-2 py-1 border rounded text-sm bg-blue-50 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-blue-900",
                                        onClick: ()=>handleView(m, 'messages'),
                                        children: "View"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this),
                                    onRespond && m.allowResponses && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "px-2 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700",
                                        onClick: ()=>onRespond(m.id),
                                        children: "Respond"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                        lineNumber: 94,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "px-2 py-1 border rounded text-sm bg-yellow-50 hover:bg-yellow-100 dark:bg-gray-800 dark:hover:bg-yellow-900",
                                        onClick: ()=>handleEdit(m),
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "px-2 py-1 border rounded text-sm bg-red-50 hover:bg-red-100 dark:bg-gray-800 dark:hover:bg-red-900",
                                        onClick: ()=>handleDelete(m.id),
                                        disabled: Boolean(deleteLoading && deleteId === m.id),
                                        children: deleteLoading && deleteId === m.id ? 'Deleting...' : 'Delete'
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this)
                }, m.id, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: TableActions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                    data: paginatedData,
                    columns: [],
                    tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createRef()
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/ResponsesSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ResponsesSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/app/(admin)/admin/dashboard/data-table/columns/responses'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
;
function ResponsesSection({ paginatedData, page, rowsPerPage, handleEdit, handleView, handleDelete, TableActions, deleteId, deleteLoading }) {
    const columns = [
        {
            id: 'number',
            header: 'No.',
            cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
            size: 50
        },
        ...responseColumns({
            onEdit: handleEdit,
            onView: handleView,
            onDelete: handleDelete,
            deleteId,
            deleteLoading
        })
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: columns,
                data: paginatedData
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ResponsesSection.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: paginatedData,
                columns: columns,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ResponsesSection.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/AdminSection.tsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/(admin)/admin/dashboard/createProjectForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateProjectForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
;
;
;
const EditorClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/editor/editor-client.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const projectStatusOptions = [
    "active",
    "completed",
    "paused"
];
const publishOptions = [
    "draft",
    "published"
];
function CreateProjectForm({ mode = "create", initialData, onSuccess, onCancel }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        content: {},
        files: null,
        projectStatus: "active",
        publishStatus: "draft",
        images: []
    });
    const [imagesToRemove, setImagesToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialData) {
            setForm((prev)=>({
                    ...prev,
                    title: initialData.title || "",
                    content: initialData.content || {},
                    projectStatus: initialData.projectStatus || "active",
                    publishStatus: initialData.publishStatus || "draft",
                    images: initialData.images || []
                }));
        }
    }, [
        initialData
    ]);
    const handleChange = (e)=>{
        const { name, value, files } = e.target;
        if (name === "files" && files) {
            setForm((prev)=>({
                    ...prev,
                    files
                }));
        } else {
            setForm((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
    };
    const handleEditorChange = (json)=>{
        setForm((prev)=>({
                ...prev,
                content: json
            }));
    };
    const handleRemoveImage = (url)=>{
        setImagesToRemove((prev)=>[
                ...prev,
                url
            ]);
        setForm((prev)=>({
                ...prev,
                images: prev.images.filter((img)=>img !== url)
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        if (mode === "create" && (!form.files || form.files.length === 0)) {
            alert("Please upload at least one image.");
            setLoading(false);
            return;
        }
        const formData = new FormData();
        formData.append("title", form.title.trim());
        formData.append("content", JSON.stringify(form.content));
        formData.append("projectStatus", form.projectStatus);
        formData.append("publishStatus", form.publishStatus);
        if (mode === "edit") {
            formData.append("images", JSON.stringify(form.images));
            formData.append("imagesToRemove", JSON.stringify(imagesToRemove));
        }
        if (form.files && form.files.length > 0) {
            Array.from(form.files).forEach((file)=>{
                formData.append("files", file);
            });
        }
        try {
            let res;
            if (mode === "edit" && initialData?.id) {
                res = await fetch(`/api/projects/${initialData.id}`, {
                    method: "PATCH",
                    body: formData
                });
            } else {
                res = await fetch("/api/projects/upload", {
                    method: "POST",
                    body: formData
                });
            }
            if (!res.ok) {
                const errorData = await res.json().catch(()=>null);
                const errorMessage = errorData?.error || `Failed to ${mode} project`;
                throw new Error(errorMessage);
            }
            if (onSuccess) onSuccess();
            router.refresh();
            router.push("/admin/dashboard");
        } catch (err) {
            alert(`There was an error ${mode === "edit" ? "updating" : "creating"} the project. Please try again.`);
        } finally{
            setLoading(false);
        }
    };
    // --- DELETE HANDLER ---
    const handleDelete = async ()=>{
        if (!initialData?.id) return;
        if (!window.confirm("Are you sure you want to delete this project? This action cannot be undone.")) return;
        setDeleting(true);
        try {
            const res = await fetch(`/api/projects/${initialData.id}`, {
                method: "DELETE"
            });
            if (!res.ok) {
                const errorData = await res.json().catch(()=>null);
                const errorMessage = errorData?.error || "Failed to delete project";
                throw new Error(errorMessage);
            }
            if (onSuccess) onSuccess();
            router.refresh();
            router.push("/admin/dashboard");
        } catch (err) {
            alert("There was an error deleting the project. Please try again.");
        } finally{
            setDeleting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "w-full max-w-4xl mx-auto mt-4 space-y-6 p-6 bg-background rounded-xl shadow",
        encType: "multipart/form-data",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold mb-4 text-center",
                children: mode === "edit" ? "Edit Project" : "Create New Project"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "title",
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "title",
                        name: "title",
                        value: form.title,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "content",
                        children: "Content"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorClient, {
                        content: form.content,
                        onChange: handleEditorChange,
                        showLinkUnlink: true
                    }, form.title, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            mode === "edit" && form.images && form.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Current Images"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4",
                        children: form.images.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: img,
                                        alt: "Project",
                                        className: "w-24 h-24 object-cover rounded border"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                                        lineNumber: 212,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center",
                                        onClick: ()=>handleRemoveImage(img),
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, img, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                                lineNumber: 211,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                lineNumber: 207,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "files",
                        children: mode === "edit" ? "Image Upload (optional, will replace/add to current images)" : "Image Upload (required)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "files",
                        name: "files",
                        type: "file",
                        accept: "image/png,image/jpeg",
                        multiple: true,
                        onChange: handleChange,
                        required: mode === "create"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "publishStatus",
                        children: "Publish Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "publishStatus",
                        name: "publishStatus",
                        value: form.publishStatus,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: publishOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: status,
                                children: status
                            }, status, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "projectStatus",
                        children: "Project Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "projectStatus",
                        name: "projectStatus",
                        value: form.projectStatus,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: projectStatusOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: status,
                                children: status
                            }, status, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading,
                        className: "w-1/2 bg-[#9f004d]",
                        children: loading ? mode === "edit" ? "Updating..." : "Creating..." : mode === "edit" ? "Update Project" : "Create Project"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        onClick: onCancel,
                        disabled: loading,
                        className: "w-1/2 bg-black",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(admin)/admin/dashboard/createReportForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateReportForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const publishOptions = [
    "draft",
    "published"
];
async function uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/reports/upload", {
        method: "POST",
        body: formData
    });
    if (!res.ok) {
        throw new Error("File upload failed");
    }
    const { path } = await res.json();
    return path;
}
function CreateReportForm({ mode, initialData, onSuccess, onCancel }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: initialData?.title || "",
        publishStatus: initialData?.publishStatus || "draft"
    });
    // Store which existing images/files are marked for deletion
    const [existingImages, setExistingImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData?.images || []);
    const [existingFiles, setExistingFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData?.files || []);
    const [imageFiles, setImageFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pdfFiles, setPdfFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mode === "edit" && initialData) {
            setForm({
                title: initialData.title || "",
                publishStatus: initialData.publishStatus || "draft"
            });
            setExistingImages(initialData.images || []);
            setExistingFiles(initialData.files || []);
        }
    }, [
        mode,
        initialData
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setForm((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleImageChange = (e)=>{
        if (e.target.files) {
            setImageFiles(Array.from(e.target.files));
        }
    };
    const handlePdfChange = (e)=>{
        if (e.target.files) {
            setPdfFiles(Array.from(e.target.files));
        }
    };
    const handleRemoveExistingImage = (path)=>{
        setExistingImages((prev)=>prev.filter((img)=>img !== path));
    };
    const handleRemoveExistingFile = (path)=>{
        setExistingFiles((prev)=>prev.filter((file)=>file !== path));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            // Upload new images
            const imagePaths = await Promise.all(imageFiles.map((file)=>uploadFile(file)));
            // Upload new PDFs
            const pdfPaths = await Promise.all(pdfFiles.map((file)=>uploadFile(file)));
            // Compose images/files: keep those not deleted (existing), add new ones
            const imagesToSubmit = [
                ...existingImages,
                ...imagePaths
            ];
            const filesToSubmit = [
                ...existingFiles,
                ...pdfPaths
            ];
            const payload = {
                title: form.title.trim(),
                images: imagesToSubmit,
                files: filesToSubmit,
                publishStatus: form.publishStatus,
                accessCount: initialData?.accessCount || 0,
                downloadCount: initialData?.downloadCount || 0
            };
            let res;
            if (mode === "edit" && initialData?.id) {
                res = await fetch(`/api/reports/${initialData.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
            } else {
                res = await fetch("/api/reports", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
            }
            if (!res.ok) {
                const errorData = await res.json().catch(()=>null);
                const errorMessage = errorData?.error || (mode === "edit" ? "Failed to update report" : "Failed to create report");
                throw new Error(errorMessage);
            }
            if (onSuccess) {
                onSuccess();
            } else {
                router.refresh();
                router.push("/admin");
            }
        } catch (err) {
            console.error("Error saving report:", err);
            alert(`There was an error ${mode === "edit" ? "updating" : "creating"} the report. Please try again.`);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "max-w-2xl mx-auto space-y-6 p-6 bg-background rounded-xl shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-semibold text-xl mb-4",
                children: mode === "edit" ? "Edit Report" : "Create New Report"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "title",
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "title",
                        name: "title",
                        value: form.title,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            mode === "edit" && initialData?.images && initialData.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Existing Images"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: existingImages.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: img,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-blue-600 underline text-xs",
                                        children: img.split("/").pop()
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        size: "sm",
                                        variant: "destructive",
                                        className: "ml-1 px-2 py-0 text-xs",
                                        onClick: ()=>handleRemoveExistingImage(img),
                                        children: "Remove"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, img + idx, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                                lineNumber: 190,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "images",
                        children: "Images (PNG, JPG, JPEG)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "images",
                        name: "images",
                        type: "file",
                        accept: ".png,.jpg,.jpeg",
                        multiple: true,
                        onChange: handleImageChange
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-muted-foreground",
                        children: imageFiles.map((file)=>file.name).join(", ")
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            mode === "edit" && initialData?.files && initialData.files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Existing PDF Files"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: existingFiles.map((file, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: file,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-blue-600 underline text-xs",
                                        children: file.split("/").pop()
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        size: "sm",
                                        variant: "destructive",
                                        className: "ml-1 px-2 py-0 text-xs",
                                        onClick: ()=>handleRemoveExistingFile(file),
                                        children: "Remove"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, file + idx, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                                lineNumber: 228,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                lineNumber: 224,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "files",
                        children: "PDF Files"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "files",
                        name: "files",
                        type: "file",
                        accept: ".pdf",
                        multiple: true,
                        onChange: handlePdfChange
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-muted-foreground",
                        children: pdfFiles.map((file)=>file.name).join(", ")
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "publishStatus",
                        children: "Publish Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "publishStatus",
                        name: "publishStatus",
                        value: form.publishStatus,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: publishOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: status,
                                children: status
                            }, status, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading,
                        className: "flex-1 bg-[#9f004d] hover:bg-[#7c003c] text-white",
                        children: loading ? mode === "edit" ? "Updating..." : "Creating..." : mode === "edit" ? "Update Report" : "Create Report"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        className: "flex-1 border-[#9f004d] text-[#9f004d] hover:bg-[#f5e3ec]",
                        onClick: onCancel,
                        disabled: loading,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 292,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(admin)/admin/dashboard/createEventForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateEventForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
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
const EditorClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/editor/editor-client.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const eventStatusOptions = [
    'pending',
    'ongoing',
    'completed',
    'paused'
];
const publishOptions = [
    'draft',
    'published'
];
const attendanceOptions = [
    'public',
    'registration_required'
];
function CreateEventForm({ mode = 'create', initialData, onSuccess, onCancel, currentUserId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        eventTitle: '',
        eventDescription: {},
        eventDetails: {},
        eventLocation: '',
        eventBanner: '',
        eventImages: [],
        eventFile: '',
        eventStartDate: '',
        eventEndDate: '',
        eventTags: [],
        eventStatus: 'pending',
        publishStatus: 'draft',
        eventAttendance: 'public',
        maxAttendees: '',
        files: null,
        bannerFile: null,
        eventFileUpload: null
    });
    const [imagesToRemove, setImagesToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fileToRemove, setFileToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [removeBanner, setRemoveBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialData) {
            console.log('initialData.eventBanner:', initialData.eventBanner);
            const toDatetimeLocal = (s)=>s ? new Date(s).toISOString().slice(0, 16) : '';
            setForm({
                eventTitle: initialData.eventTitle ?? '',
                eventDescription: initialData.eventDescription ?? {},
                eventDetails: initialData.eventDetails ?? {},
                eventLocation: initialData.eventLocation ?? '',
                eventBanner: initialData.eventBanner ?? '',
                eventImages: Array.isArray(initialData.eventImages) ? initialData.eventImages : [],
                eventFile: initialData.eventFile ?? '',
                eventStartDate: toDatetimeLocal(initialData.eventStartDate),
                eventEndDate: toDatetimeLocal(initialData.eventEndDate),
                eventTags: Array.isArray(initialData.eventTags) ? initialData.eventTags : [],
                eventStatus: initialData.eventStatus ?? 'pending',
                publishStatus: initialData.publishStatus ?? 'draft',
                eventAttendance: initialData.eventAttendance ?? 'public',
                maxAttendees: typeof initialData.maxAttendees === 'number' ? initialData.maxAttendees.toString() : initialData.maxAttendees ?? '',
                files: null,
                bannerFile: null,
                eventFileUpload: null
            });
            setFileToRemove(null);
            setImagesToRemove([]);
            setRemoveBanner(false);
        }
    }, [
        initialData
    ]);
    const handleChange = (e)=>{
        const { name, value, files } = e.target;
        if (name === 'files' && files) {
            setForm((prev)=>({
                    ...prev,
                    files
                }));
        } else if (name === 'bannerFile' && files && files[0]) {
            setForm((prev)=>({
                    ...prev,
                    bannerFile: files[0]
                }));
        } else if (name === 'eventFileUpload' && files && files[0]) {
            setForm((prev)=>({
                    ...prev,
                    eventFileUpload: files[0]
                }));
        } else if (name === 'eventTags') {
            setForm((prev)=>({
                    ...prev,
                    eventTags: value.split(',').map((t)=>t.trim())
                }));
        } else {
            setForm((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
    };
    const handleEditorChange = (json)=>{
        setForm((prev)=>({
                ...prev,
                eventDescription: json
            }));
    };
    const handleDetailsEditorChange = (json)=>{
        setForm((prev)=>({
                ...prev,
                eventDetails: json
            }));
    };
    const handleRemoveImage = (url)=>{
        setImagesToRemove((prev)=>[
                ...prev,
                url
            ]);
        setForm((prev)=>({
                ...prev,
                eventImages: prev.eventImages.filter((img)=>img !== url)
            }));
    };
    const handleRemoveBanner = ()=>{
        setRemoveBanner(true);
        setForm((prev)=>({
                ...prev,
                eventBanner: ''
            }));
    };
    const handleRemoveFile = ()=>{
        setFileToRemove(form.eventFile);
        setForm((prev)=>({
                ...prev,
                eventFile: ''
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        if (mode === 'create' && !form.bannerFile) {
            alert('Please upload an event banner image.');
            setLoading(false);
            return;
        }
        if (!form.eventStartDate || !form.eventEndDate) {
            alert('Please provide both event start and end dates.');
            setLoading(false);
            return;
        }
        const formData = new FormData();
        formData.append('eventTitle', form.eventTitle.trim());
        formData.append('eventDescription', JSON.stringify(form.eventDescription));
        formData.append('eventDetails', JSON.stringify(form.eventDetails));
        formData.append('eventLocation', form.eventLocation);
        formData.append('eventStartDate', form.eventStartDate);
        formData.append('eventEndDate', form.eventEndDate);
        formData.append('eventTags', JSON.stringify(form.eventTags));
        formData.append('eventStatus', form.eventStatus);
        formData.append('publishStatus', form.publishStatus);
        formData.append('eventAttendance', form.eventAttendance);
        formData.append('maxAttendees', form.maxAttendees);
        if (mode === 'edit') {
            formData.append('eventImages', JSON.stringify(form.eventImages));
            formData.append('imagesToRemove', JSON.stringify(imagesToRemove));
            if (fileToRemove) {
                formData.append('fileToRemove', fileToRemove);
            }
            formData.append('eventBanner', removeBanner ? '' : form.eventBanner);
        }
        if (form.bannerFile) {
            formData.append('bannerFile', form.bannerFile);
        }
        if (form.files && form.files.length > 0) {
            Array.from(form.files).forEach((file)=>{
                formData.append('files', file);
            });
        }
        if (form.eventFileUpload) {
            formData.append('eventFileUpload', form.eventFileUpload);
        }
        try {
            let res;
            if (mode === 'edit' && initialData?.id) {
                res = await fetch(`/api/events/${initialData.id}`, {
                    method: 'PUT',
                    body: formData
                });
            } else {
                res = await fetch('/api/events/upload', {
                    method: 'POST',
                    body: formData
                });
            }
            if (!res.ok) {
                const errorData = await res.json().catch(()=>null);
                const errorMessage = errorData?.error || `Failed to ${mode} event`;
                throw new Error(errorMessage);
            }
            if (onSuccess) onSuccess();
            router.refresh();
            router.push('/admin/dashboard');
        } catch (err) {
            alert(`There was an error ${mode === 'edit' ? 'updating' : 'creating'} the event. Please try again.`);
        } finally{
            setLoading(false);
        }
    };
    const handleDelete = async ()=>{
        if (!initialData?.id) return;
        if (!window.confirm('Are you sure you want to delete this event? This action cannot be undone.')) return;
        setDeleting(true);
        try {
            const res = await fetch(`/api/events/${initialData.id}`, {
                method: 'DELETE'
            });
            if (!res.ok) {
                const errorData = await res.json().catch(()=>null);
                const errorMessage = errorData?.error || 'Failed to delete event';
                throw new Error(errorMessage);
            }
            if (onSuccess) onSuccess();
            router.refresh();
            router.push('/admin/dashboard');
        } catch (err) {
            alert('There was an error deleting the event. Please try again.');
        } finally{
            setDeleting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "w-full max-w-4xl mx-auto mt-4 space-y-6 p-6 bg-background rounded-xl shadow",
        encType: "multipart/form-data",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold mb-4 text-center",
                children: mode === 'edit' ? 'Edit Event' : 'Create New Event'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventTitle",
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "eventTitle",
                        name: "eventTitle",
                        value: form.eventTitle,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventDescription",
                        children: "Description"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorClient, {
                        content: form.eventDescription,
                        onChange: handleEditorChange,
                        showLinkUnlink: true
                    }, form.eventTitle + '_desc', false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventDetails",
                        children: "Additional Details"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorClient, {
                        content: form.eventDetails,
                        onChange: handleDetailsEditorChange,
                        showLinkUnlink: true
                    }, form.eventTitle + '_details', false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventLocation",
                        children: "Location"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "eventLocation",
                        name: "eventLocation",
                        value: form.eventLocation,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "bannerFile",
                        children: mode === 'edit' ? 'Banner Image (optional, will replace current)' : 'Banner Image (required)'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "bannerFile",
                        name: "bannerFile",
                        type: "file",
                        accept: "image/*",
                        onChange: handleChange,
                        required: mode === 'create'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            mode === 'edit' && form.eventBanner && !removeBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Current Banner Image"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: form.eventBanner,
                                alt: "Current Event Banner",
                                className: "w-full max-w-xs object-cover rounded border"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center",
                                onClick: handleRemoveBanner,
                                title: "Remove banner",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                                lineNumber: 353,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 347,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 345,
                columnNumber: 9
            }, this),
            mode === 'edit' && form.eventImages && form.eventImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Current Images"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4",
                        children: form.eventImages.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: img,
                                        alt: "Event",
                                        className: "w-24 h-24 object-cover rounded border"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                                        lineNumber: 371,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center",
                                        onClick: ()=>handleRemoveImage(img),
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                                        lineNumber: 372,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, img, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                                lineNumber: 370,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 368,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 366,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "files",
                        children: mode === 'edit' ? 'Event Images (optional, will add/replace)' : 'Event Images (optional)'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "files",
                        name: "files",
                        type: "file",
                        accept: "image/*",
                        multiple: true,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this),
            mode === 'edit' && form.eventFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Current Event File"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 403,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: form.eventFile,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "underline text-blue-600",
                                children: form.eventFile.split('/').pop()
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center",
                                onClick: handleRemoveFile,
                                title: "Remove file",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                                lineNumber: 413,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 404,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 402,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventFileUpload",
                        children: "Event File (optional, e.g. PDF, DOCX)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "eventFileUpload",
                        name: "eventFileUpload",
                        type: "file",
                        accept: ".pdf,.doc,.docx",
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventStartDate",
                        children: "Start Date"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "eventStartDate",
                        name: "eventStartDate",
                        type: "datetime-local",
                        value: form.eventStartDate,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 438,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventEndDate",
                        children: "End Date"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "eventEndDate",
                        name: "eventEndDate",
                        type: "datetime-local",
                        value: form.eventEndDate,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventTags",
                        children: "Event Tags (comma separated)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "eventTags",
                        name: "eventTags",
                        value: form.eventTags.join(','),
                        onChange: handleChange,
                        placeholder: "e.g. tech, leadership, youth"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 462,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 460,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "publishStatus",
                        children: "Publish Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 472,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "publishStatus",
                        name: "publishStatus",
                        value: form.publishStatus,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: publishOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: status,
                                children: status
                            }, status, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                                lineNumber: 481,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 471,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventStatus",
                        children: "Event Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 489,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "eventStatus",
                        name: "eventStatus",
                        value: form.eventStatus,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: eventStatusOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: status,
                                children: status
                            }, status, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                                lineNumber: 498,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 490,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventAttendance",
                        children: "Attendance Type"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 506,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "eventAttendance",
                        name: "eventAttendance",
                        value: form.eventAttendance,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: attendanceOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: status,
                                children: status.replace('_', ' ')
                            }, status, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                                lineNumber: 515,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 507,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 505,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "maxAttendees",
                        children: "Maximum Attendees (optional)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "maxAttendees",
                        name: "maxAttendees",
                        type: "number",
                        min: 1,
                        value: form.maxAttendees,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 522,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-center gap-2 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading,
                        className: "w-1/3 bg-[#9f004d]",
                        children: loading ? mode === 'edit' ? 'Updating...' : 'Creating...' : mode === 'edit' ? 'Update Event' : 'Create Event'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 535,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        onClick: onCancel,
                        disabled: loading,
                        className: "w-1/3 bg-black",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 544,
                        columnNumber: 9
                    }, this),
                    mode === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        onClick: handleDelete,
                        disabled: deleting,
                        className: "w-1/3 bg-red-700",
                        children: deleting ? 'Deleting Event...' : 'Delete Event'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 548,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 534,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateBeneficiaryForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const publishOptions = [
    'draft',
    'published'
];
const genderOptions = [
    'male',
    'female'
];
const institutionTypeOptions = [
    'education',
    'faith_based_organization',
    'local_community',
    'ngo',
    'government',
    'other'
];
function CreateBeneficiaryForm({ mode, initialData, onSuccess, onCancel }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [institutions, setInstitutions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [institutionsLoading, setInstitutionsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        firstName: initialData?.firstName || '',
        lastName: initialData?.lastName || '',
        image: initialData?.image || undefined,
        images: initialData?.images || [],
        gender: initialData?.gender || 'male',
        email: initialData?.email || '',
        phone: initialData?.phone || '',
        dateOfBirth: initialData?.dateOfBirth ? new Date(initialData.dateOfBirth).toISOString().split('T')[0] : '',
        beneficiaryStatus: initialData?.beneficiaryStatus || 'draft',
        institutionId: initialData?.institutionId || ''
    });
    const [imageFiles, setImageFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showInstitutionForm, setShowInstitutionForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newInstitution, setNewInstitution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        headName: '',
        institutionType: 'education',
        logoFile: null
    });
    const [creatingInstitution, setCreatingInstitution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [institutionError, setInstitutionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setInstitutionsLoading(true);
        fetch('/api/institutions').then((res)=>res.json()).then((data)=>{
            setInstitutions(data.map((i)=>({
                    id: i.id,
                    name: i.name
                })));
            setInstitutionsLoading(false);
        }).catch(()=>setInstitutionsLoading(false));
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mode === 'edit' && initialData) {
            setForm({
                ...form,
                ...initialData,
                dateOfBirth: initialData.dateOfBirth ? new Date(initialData.dateOfBirth).toISOString().split('T')[0] : ''
            });
        }
    // eslint-disable-next-line
    }, [
        mode,
        initialData
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setForm((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleImageChange = (e)=>{
        if (e.target.files) {
            setImageFiles(Array.from(e.target.files));
        }
    };
    // Institution logic unchanged
    const handleInstitutionField = (e)=>{
        const { name, value } = e.target;
        setNewInstitution((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleInstitutionLogo = (e)=>{
        if (e.target.files && e.target.files[0]) {
            setNewInstitution((prev)=>({
                    ...prev,
                    logoFile: e.target.files[0]
                }));
        }
    };
    const validateInstitutionForm = ()=>{
        if (!newInstitution.name || newInstitution.name.length < 2) {
            setInstitutionError('Institution name is required.');
            return false;
        }
        if (!newInstitution.logoFile) {
            setInstitutionError('Logo file is required.');
            return false;
        }
        if (!newInstitution.institutionType) {
            setInstitutionError('Institution type is required.');
            return false;
        }
        setInstitutionError(null);
        return true;
    };
    const handleCreateInstitution = async ()=>{
        if (!validateInstitutionForm()) return;
        setCreatingInstitution(true);
        try {
            const formData = new FormData();
            formData.append('name', newInstitution.name.trim());
            if (newInstitution.email) formData.append('email', newInstitution.email.trim());
            if (newInstitution.phone) formData.append('phone', newInstitution.phone.trim());
            if (newInstitution.headName) formData.append('headName', newInstitution.headName.trim());
            formData.append('institutionType', newInstitution.institutionType);
            if (newInstitution.logoFile) {
                formData.append('logoFile', newInstitution.logoFile);
            }
            const res = await fetch('/api/institutions', {
                method: 'POST',
                body: formData
            });
            if (!res.ok) {
                const error = await res.json().catch(()=>({}));
                throw new Error(error.error || 'Failed to create institution');
            }
            const institution = await res.json();
            setInstitutions((prev)=>[
                    ...prev,
                    {
                        id: institution.id,
                        name: institution.name
                    }
                ]);
            setShowInstitutionForm(false);
            setForm((prev)=>({
                    ...prev,
                    institutionId: institution.id
                }));
            setNewInstitution({
                name: '',
                email: '',
                phone: '',
                headName: '',
                institutionType: 'education',
                logoFile: null
            });
            setInstitutionError(null);
        } catch (err) {
            setInstitutionError(err.message || 'Failed to create institution');
        } finally{
            setCreatingInstitution(false);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            // Create or update Beneficiary via API
            const formData = new FormData();
            formData.append('firstName', form.firstName.trim());
            formData.append('lastName', form.lastName.trim());
            formData.append('gender', form.gender);
            formData.append('dateOfBirth', form.dateOfBirth);
            if (form.email) formData.append('email', form.email.trim());
            if (form.phone) formData.append('phone', form.phone.trim());
            if (form.institutionId) formData.append('institutionId', form.institutionId);
            formData.append('beneficiaryStatus', form.beneficiaryStatus);
            // Profile images
            imageFiles.forEach((file)=>{
                formData.append('images', file);
            });
            let res;
            let beneficiary;
            if (mode === 'edit' && initialData?.id) {
                res = await fetch(`/api/beneficiaries/${initialData.id}`, {
                    method: 'PATCH',
                    body: formData
                });
                beneficiary = await res.json();
            } else {
                res = await fetch('/api/beneficiaries', {
                    method: 'POST',
                    body: formData
                });
                if (!res.ok) {
                    const errorData = await res.json().catch(()=>null);
                    throw new Error(errorData?.error || (mode === 'edit' ? 'Failed to update beneficiary' : 'Failed to create beneficiary'));
                }
                beneficiary = await res.json();
            }
            if (onSuccess) {
                onSuccess();
            } else {
                router.refresh();
                router.push('/admin');
            }
        } catch (err) {
            console.error('Error saving beneficiary:', err);
            alert(`There was an error ${mode === 'edit' ? 'updating' : 'creating'} the beneficiary. Please try again.`);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "max-w-2xl mx-auto space-y-6 p-6 bg-background rounded-xl shadow",
        encType: "multipart/form-data",
        autoComplete: "off",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-semibold text-xl mb-4",
                children: mode === 'edit' ? 'Edit Beneficiary' : 'Create New Beneficiary'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "firstName",
                        children: "First Name"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "firstName",
                        name: "firstName",
                        value: form.firstName,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "lastName",
                        children: "Last Name"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "lastName",
                        name: "lastName",
                        value: form.lastName,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "gender",
                        children: "Gender"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "gender",
                        name: "gender",
                        value: form.gender,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        required: true,
                        children: genderOptions.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: g,
                                children: g.charAt(0).toUpperCase() + g.slice(1)
                            }, g, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "dateOfBirth",
                        children: "Date of Birth"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "dateOfBirth",
                        name: "dateOfBirth",
                        type: "date",
                        value: form.dateOfBirth,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "email",
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "email",
                        name: "email",
                        type: "email",
                        value: form.email,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "phone",
                        children: "Phone"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "phone",
                        name: "phone",
                        type: "tel",
                        value: form.phone,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "images",
                        children: "Profile Images (PNG, JPG, JPEG)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "images",
                        name: "images",
                        type: "file",
                        accept: ".png,.jpg,.jpeg",
                        multiple: true,
                        onChange: handleImageChange
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-muted-foreground",
                        children: imageFiles.map((file)=>file.name).join(', ')
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institutionId",
                        children: "Institution"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "institutionId",
                                name: "institutionId",
                                value: form.institutionId,
                                onChange: (e)=>{
                                    setForm((prev)=>({
                                            ...prev,
                                            institutionId: e.target.value
                                        }));
                                    setShowInstitutionForm(false);
                                },
                                className: "flex-1 border border-input rounded-md p-2 text-sm bg-background text-foreground",
                                disabled: institutionsLoading,
                                required: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "None"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                        lineNumber: 365,
                                        columnNumber: 13
                                    }, this),
                                    institutions.map((inst)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: inst.id,
                                            children: inst.name
                                        }, inst.id, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "outline",
                                className: "ml-2",
                                onClick: ()=>setShowInstitutionForm((val)=>!val),
                                children: "Add new institution"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this),
            showInstitutionForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-md p-4 mt-2 bg-muted space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_name",
                        children: "Institution Name*"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 385,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "institution_name",
                        name: "name",
                        value: newInstitution.name,
                        onChange: handleInstitutionField,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 386,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_type",
                        children: "Type*"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 393,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "institution_type",
                        name: "institutionType",
                        value: newInstitution.institutionType,
                        onChange: handleInstitutionField,
                        required: true,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: institutionTypeOptions.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: type,
                                children: type.replace(/_/g, ' ')
                            }, type, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                lineNumber: 403,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 394,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_logo",
                        children: "Logo*"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 408,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "institution_logo",
                        name: "logoFile",
                        type: "file",
                        accept: ".png,.jpg,.jpeg",
                        onChange: handleInstitutionLogo,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 409,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_email",
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 417,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "institution_email",
                        name: "email",
                        value: newInstitution.email,
                        onChange: handleInstitutionField
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 418,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_phone",
                        children: "Phone"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 424,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "institution_phone",
                        name: "phone",
                        value: newInstitution.phone,
                        onChange: handleInstitutionField
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 425,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_headName",
                        children: "Head Name"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 431,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "institution_headName",
                        name: "headName",
                        value: newInstitution.headName,
                        onChange: handleInstitutionField
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 432,
                        columnNumber: 11
                    }, this),
                    institutionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-600 text-xs",
                        children: institutionError
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 438,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                className: "bg-blue-600 hover:bg-blue-700 text-white",
                                disabled: creatingInstitution,
                                onClick: handleCreateInstitution,
                                children: creatingInstitution ? 'Adding...' : 'Add Institution'
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                lineNumber: 440,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "outline",
                                className: "text-blue-600 border-blue-600 hover:bg-blue-50",
                                onClick: ()=>setShowInstitutionForm(false),
                                disabled: creatingInstitution,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                lineNumber: 448,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 384,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "beneficiaryStatus",
                        children: "Beneficiary Publish Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 462,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "beneficiaryStatus",
                        name: "beneficiaryStatus",
                        value: form.beneficiaryStatus,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: publishOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: status,
                                children: status
                            }, status, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 463,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 461,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading,
                        className: "flex-1 bg-[#9f004d] hover:bg-[#7c003c] text-white",
                        children: loading ? mode === 'edit' ? 'Updating...' : 'Creating...' : mode === 'edit' ? 'Update Beneficiary' : 'Create Beneficiary'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this),
                    onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        className: "flex-1 border-[#9f004d] text-[#9f004d] hover:bg-[#f5e3ec]",
                        onClick: onCancel,
                        disabled: loading,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 493,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 478,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(admin)/admin/dashboard/createMessageForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateResponseForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function CreateResponseForm({ messageId, editId, initialData, onSuccess, onCancel }) {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if (initialData?.content && typeof initialData.content === 'string') return initialData.content;
        // If content might be JSON, stringify for editing
        if (initialData?.content && typeof initialData.content === 'object') return JSON.stringify(initialData.content, null, 2);
        return '';
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messageCreatorId, setMessageCreatorId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        // If editing an existing response, the initialData may include message.createdById
        return initialData?.message?.createdById ?? initialData?.message?.createdBy?.id ?? null;
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // If messageId provided, fetch message to determine creator (to show hint that the response will be tagged Author)
        async function fetchMessage() {
            const id = messageId ?? initialData?.message?.id;
            if (!id) return;
            try {
                const res = await fetch(`/api/messages/${id}`);
                if (!res.ok) return;
                const json = await res.json();
                setMessageCreatorId(json.createdById ?? json.createdBy?.id ?? null);
            } catch  {
            // ignore
            }
        }
        fetchMessage();
    // If initialData changes and contains message creator info, keep it
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        messageId,
        initialData?.message?.id
    ]);
    const submit = async (e)=>{
        e?.preventDefault();
        setError(null);
        const targetMessageId = messageId ?? initialData?.message?.id;
        if (!targetMessageId) {
            setError('No message selected to respond to.');
            return;
        }
        if (!content || !content.trim()) {
            setError('Content cannot be empty.');
            return;
        }
        setLoading(true);
        try {
            // Try to send JSON if the content looks like JSON, otherwise send as string
            let parsedContent = content;
            const trimmed = content.trim();
            if (trimmed.startsWith('{') && trimmed.endsWith('}') || trimmed.startsWith('[') && trimmed.endsWith(']')) {
                try {
                    parsedContent = JSON.parse(content);
                } catch  {
                    // keep as string if parsing fails
                    parsedContent = content;
                }
            }
            const payload = {
                messageId: targetMessageId,
                content: parsedContent
            };
            let res;
            if (editId || initialData?.id) {
                const id = editId ?? initialData?.id;
                res = await fetch(`/api/responses/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        content: payload.content
                    })
                });
            } else {
                res = await fetch(`/api/responses`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
            }
            if (!res.ok) {
                const body = await res.json().catch(()=>({}));
                setError(body?.error || `Request failed (${res.status})`);
                setLoading(false);
                return;
            }
            if (onSuccess) onSuccess();
        } catch (err) {
            setError(err?.message || 'Unexpected error');
        } finally{
            setLoading(false);
        }
    };
    const isAuthor = !!(session?.user?.id && messageCreatorId && session.user.id === messageCreatorId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: submit,
        className: "w-full max-w-3xl mx-auto p-6 bg-background rounded-xl shadow space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold",
                children: editId || initialData ? 'Edit Response' : 'Create Response'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            isAuthor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-gray-700 dark:text-gray-300 p-2 rounded bg-yellow-50 dark:bg-yellow-900",
                children: [
                    "You are the author of the original message — your response will be tagged as",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Author"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-1",
                        children: "Content"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: content,
                        onChange: (e)=>setContent(e.target.value),
                        rows: 8,
                        className: "w-full border rounded p-2 bg-white dark:bg-gray-800 dark:text-white"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mt-1",
                        children: "You can paste TipTap JSON or plain text. JSON will be preserved."
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                lineNumber: 158,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-800 disabled:opacity-60",
                        children: loading ? 'Saving...' : editId || initialData ? 'Save' : 'Create'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        className: "px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(admin)/admin/dashboard/createResponseForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateResponseForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function CreateResponseForm({ messageId, editId, initialData, onSuccess, onCancel }) {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if (initialData?.content && typeof initialData.content === 'string') return initialData.content;
        // If content might be JSON, stringify for editing
        if (initialData?.content && typeof initialData.content === 'object') return JSON.stringify(initialData.content, null, 2);
        return '';
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messageCreatorId, setMessageCreatorId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        // If editing an existing response, the initialData may include message.createdById
        return initialData?.message?.createdById ?? initialData?.message?.createdBy?.id ?? null;
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // If messageId provided, fetch message to determine creator (to show hint that the response will be tagged Author)
        async function fetchMessage() {
            const id = messageId ?? initialData?.message?.id;
            if (!id) return;
            try {
                const res = await fetch(`/api/messages/${id}`);
                if (!res.ok) return;
                const json = await res.json();
                setMessageCreatorId(json.createdById ?? json.createdBy?.id ?? null);
            } catch  {
            // ignore
            }
        }
        fetchMessage();
    // If initialData changes and contains message creator info, keep it
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        messageId,
        initialData?.message?.id
    ]);
    const submit = async (e)=>{
        e?.preventDefault();
        setError(null);
        const targetMessageId = messageId ?? initialData?.message?.id;
        if (!targetMessageId) {
            setError('No message selected to respond to.');
            return;
        }
        if (!content || !content.trim()) {
            setError('Content cannot be empty.');
            return;
        }
        setLoading(true);
        try {
            // Try to send JSON if the content looks like JSON, otherwise send as string
            let parsedContent = content;
            const trimmed = content.trim();
            if (trimmed.startsWith('{') && trimmed.endsWith('}') || trimmed.startsWith('[') && trimmed.endsWith(']')) {
                try {
                    parsedContent = JSON.parse(content);
                } catch  {
                    // keep as string if parsing fails
                    parsedContent = content;
                }
            }
            const payload = {
                messageId: targetMessageId,
                content: parsedContent
            };
            let res;
            if (editId || initialData?.id) {
                const id = editId ?? initialData?.id;
                res = await fetch(`/api/responses/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        content: payload.content
                    })
                });
            } else {
                res = await fetch(`/api/responses`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
            }
            if (!res.ok) {
                const body = await res.json().catch(()=>({}));
                setError(body?.error || `Request failed (${res.status})`);
                setLoading(false);
                return;
            }
            if (onSuccess) onSuccess();
        } catch (err) {
            setError(err?.message || 'Unexpected error');
        } finally{
            setLoading(false);
        }
    };
    const isAuthor = !!(session?.user?.id && messageCreatorId && session.user.id === messageCreatorId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: submit,
        className: "w-full max-w-3xl mx-auto p-6 bg-background rounded-xl shadow space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold",
                children: editId || initialData ? 'Edit Response' : 'Create Response'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            isAuthor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-gray-700 dark:text-gray-300 p-2 rounded bg-yellow-50 dark:bg-yellow-900",
                children: [
                    "You are the author of the original message — your response will be tagged as",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Author"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-1",
                        children: "Content"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: content,
                        onChange: (e)=>setContent(e.target.value),
                        rows: 8,
                        className: "w-full border rounded p-2 bg-white dark:bg-gray-800 dark:text-white"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mt-1",
                        children: "You can paste TipTap JSON or plain text. JSON will be preserved."
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                lineNumber: 158,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-800 disabled:opacity-60",
                        children: loading ? 'Saving...' : editId || initialData ? 'Save' : 'Create'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        className: "px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(admin)/admin/dashboard/createUserForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateOrEditUserForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function getCameFrom() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return "/";
}
function CreateOrEditUserForm({ mode = "create", userId, initialData, onSuccess, onCancel, onDelete }) {
    //Defensive: don't even render the form if edit mode and userId is missing
    if (mode === "edit" && !userId) {
        //optionally: log an error, show a message, or just return null
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-500 text-center",
            children: "User ID missing. Cannot edit user"
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
            lineNumber: 33,
            columnNumber: 12
        }, this);
    }
    // Always allow editing all fields in both modes
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        firstName: initialData?.firstName || "",
        lastName: initialData?.lastName || "",
        username: initialData?.username || "",
        email: initialData?.email || "",
        password: "",
        confirmPassword: ""
    });
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imageUrl, setImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData?.image || "");
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData?.image || null);
    const [imageToDelete, setImageToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [checkingUsername, setCheckingUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [usernameInvalid, setUsernameInvalid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registerDot, setRegisterDot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // When initialData changes, update form fields and image preview (including edit mode)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setForm({
            firstName: initialData?.firstName || "",
            lastName: initialData?.lastName || "",
            username: initialData?.username || "",
            email: initialData?.email || "",
            password: "",
            confirmPassword: ""
        });
        setImageUrl(initialData?.image || "");
        setImagePreview(initialData?.image || null);
        setImageFile(null);
        setImageToDelete(null);
    }, [
        initialData
    ]);
    // Username validation for update (must match DB for this userId)
    const handleUsernameBlur = async ()=>{
        if (form.username && userId && mode === "edit") {
            setCheckingUsername(true);
            const res = await fetch(`/api/users/check-exact?userId=${userId}&username=${encodeURIComponent(form.username)}`);
            const data = await res.json();
            setUsernameInvalid(!data.valid);
            setCheckingUsername(false);
        }
    };
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        setError("");
        setSuccess("");
        if (e.target.name === "username") setUsernameInvalid(false);
    };
    const handleImageChange = (e)=>{
        const file = e.target.files?.[0] || null;
        if (file) {
            // If editing and old image exists, mark it for deletion
            if (imageUrl) setImageToDelete(imageUrl);
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };
    const handleImageDelete = async ()=>{
        if (imageUrl) setImageToDelete(imageUrl);
        setImageFile(null);
        setImageUrl("");
        setImagePreview(null);
        if (userId && imageUrl) {
            await fetch("/api/users/delete-image", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    imageUrl
                })
            });
        }
    };
    // Animated dots for Register/Update button
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let dotInterval;
        if (isSubmitting) {
            dotInterval = setInterval(()=>{
                setRegisterDot((prev)=>(prev + 1) % 3);
            }, 400);
        } else {
            setRegisterDot(0);
        }
        return ()=>{
            if (dotInterval) clearInterval(dotInterval);
        };
    }, [
        isSubmitting
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setSuccess("");
        setIsSubmitting(true);
        // --- Validation ---
        if (mode === "create") {
            if (!form.firstName || !form.lastName || !form.username || !form.email || !form.password || !form.confirmPassword || !imageFile && !imagePreview) {
                setError("All fields and image are required");
                setIsSubmitting(false);
                return;
            }
            if (form.password !== form.confirmPassword) {
                setError("Passwords do not match");
                setIsSubmitting(false);
                return;
            }
        } else if (mode === "edit") {
            if (form.password && form.password !== form.confirmPassword) {
                setError("Passwords do not match");
                setIsSubmitting(false);
                return;
            }
            if (usernameInvalid) {
                setError("The Username is incorrect.");
                setIsSubmitting(false);
                return;
            }
            // No required fields in edit mode!
            if (!userId) {
                setIsSubmitting(false);
                setError("Invalid form mode or missing user ID");
                return;
            }
        }
        try {
            const formData = new FormData();
            formData.append("firstName", form.firstName);
            formData.append("lastName", form.lastName);
            formData.append("email", form.email);
            formData.append("username", form.username);
            // Only send password fields if they are filled in edit mode
            if (form.password) formData.append("password", form.password);
            if (imageFile) formData.append("image", imageFile);
            if (mode === "edit" && imageToDelete) formData.append("oldImageUrl", imageToDelete);
            let res;
            if (mode === "edit") {
                if (!userId) {
                    setIsSubmitting(false);
                    setError("Invalid form mode or missing user ID");
                    return;
                }
                res = await fetch(`/api/users/${userId}`, {
                    method: "PATCH",
                    body: formData
                });
            } else {
                res = await fetch("/api/users", {
                    method: "POST",
                    body: formData
                });
            }
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Operation failed");
            setSuccess(mode === "edit" ? "User updated!" : "User created!");
            if (mode === "create") {
                const cameFrom = getCameFrom();
                sessionStorage.removeItem('came-from');
                setTimeout(()=>{
                    router.push(cameFrom);
                }, 800);
            } else if (onSuccess) {
                onSuccess();
            }
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleCancel = ()=>{
        if (onCancel) onCancel();
        else router.back();
    };
    const handleDelete = async ()=>{
        if (!userId) return;
        if (!window.confirm("Are you sure you want to delete this user? This action cannot be undone.")) return;
        setDeleting(true);
        try {
            const res = await fetch(`/api/users/${userId}`, {
                method: "DELETE"
            });
            if (!res.ok) {
                const data = await res.json().catch(()=>null);
                throw new Error(data?.error || "Failed to delete user");
            }
            if (onDelete) onDelete(userId);
            if (onSuccess) onSuccess();
            router.refresh();
            router.push("/admin/dashboard");
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally{
            setDeleting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex max-w-lg items-center justify-center mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-6 w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        imagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imagePreview,
                                    alt: "User",
                                    className: "w-24 h-24 rounded-full object-cover border mx-auto"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center -mt-2 -mr-2",
                                    onClick: handleImageDelete,
                                    title: "Delete Image",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-24 rounded-full border flex items-center justify-center mb-2 text-gray-400",
                            children: "No Image"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: "image/*",
                            onChange: handleImageChange,
                            className: "mt-2 mb-2 block"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "firstName",
                            placeholder: "First Name",
                            value: form.firstName,
                            onChange: handleChange,
                            className: "border p-2 rounded w-1/2"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "lastName",
                            placeholder: "Last Name",
                            value: form.lastName,
                            onChange: handleChange,
                            className: "border p-2 rounded w-1/2"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "username",
                            placeholder: "Username",
                            value: form.username,
                            onChange: handleChange,
                            onBlur: mode === "edit" ? handleUsernameBlur : undefined,
                            className: `border p-2 rounded w-1/2 ${usernameInvalid ? "border-red-500" : ""}`,
                            autoComplete: "off"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "email",
                            type: "email",
                            placeholder: "Email",
                            value: form.email,
                            onChange: handleChange,
                            className: "border p-2 rounded w-1/2",
                            autoComplete: "off"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this),
                checkingUsername && mode === "edit" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs block",
                    children: "Checking username…"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 316,
                    columnNumber: 49
                }, this),
                usernameInvalid && mode === "edit" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-red-500 block",
                    children: "The Username is incorrect."
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 318,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            name: "password",
                            placeholder: mode === "edit" ? "New Password" : "Password",
                            onChange: handleChange,
                            value: form.password,
                            className: "border p-2 rounded w-1/2",
                            autoComplete: "new-password"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            name: "confirmPassword",
                            placeholder: mode === "edit" ? "Confirm New Password" : "Confirm Password",
                            onChange: handleChange,
                            value: form.confirmPassword,
                            className: "border p-2 rounded w-1/2",
                            autoComplete: "new-password"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this),
                form.password && form.confirmPassword && form.password !== form.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-red-500 block",
                    children: "Passwords do not match"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 343,
                    columnNumber: 11
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-sm",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 346,
                    columnNumber: 19
                }, this),
                success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-green-600 text-sm",
                    children: success
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 347,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-1/2 bg-green-600 text-white py-2 rounded flex items-center justify-center",
                            disabled: isSubmitting || checkingUsername || usernameInvalid || form.password && form.password !== form.confirmPassword,
                            children: [
                                mode === "edit" ? "Update User" : "Register",
                                isSubmitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-2 flex",
                                    children: [
                                        0,
                                        1,
                                        2
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `transition-all w-1.5 h-1.5 rounded-full mx-0.5 inline-block ${registerDot === i ? "bg-white" : "bg-green-900 opacity-40"}`
                                        }, i, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                            lineNumber: 359,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleCancel,
                            className: "w-1/2 bg-black text-white py-2 rounded",
                            disabled: deleting,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 349,
                    columnNumber: 9
                }, this),
                mode === "edit" && userId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: handleDelete,
                    className: "w-full bg-red-600 text-white py-2 rounded mt-2",
                    disabled: deleting,
                    children: deleting ? "Deleting..." : "Delete User"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 374,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
            lineNumber: 253,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateHomepageForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function CreateHomepageForm({ mode = 'create', initialData, onSuccess, onCancel }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        heroVideo: '',
        vision: '',
        mission: '',
        focus: '',
        coreValues: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialData) {
            setForm({
                heroVideo: initialData.heroVideo || '',
                vision: initialData.vision || '',
                mission: initialData.mission || '',
                focus: initialData.focus || '',
                coreValues: initialData.coreValues || ''
            });
        }
    }, [
        initialData
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setForm((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        if (!form.heroVideo || !form.vision || !form.mission || !form.focus || !form.coreValues) {
            alert('All fields are required.');
            setLoading(false);
            return;
        }
        try {
            let res;
            if (mode === 'edit' && initialData?.id) {
                res = await fetch(`/api/homepage-content/${initialData.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(form)
                });
            } else {
                res = await fetch('/api/homepage-content', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(form)
                });
            }
            if (!res.ok) {
                const errorData = await res.json().catch(()=>null);
                const errorMessage = errorData?.error || `Failed to ${mode} homepage`;
                throw new Error(errorMessage);
            }
            if (onSuccess) onSuccess();
            router.refresh();
            router.push('/admin/dashboard');
        } catch (err) {
            alert(`There was an error ${mode === 'edit' ? 'updating' : 'creating'} the homepage.`);
        } finally{
            setLoading(false);
        }
    };
    const handleDelete = async ()=>{
        if (!initialData?.id) return;
        if (!window.confirm('Are you sure you want to delete this homepage content? This action cannot be undone.')) return;
        setDeleting(true);
        try {
            const res = await fetch(`/api/homepage-content/${initialData.id}`, {
                method: 'DELETE'
            });
            if (!res.ok) {
                const errorData = await res.json().catch(()=>null);
                const errorMessage = errorData?.error || 'Failed to delete homepage';
                throw new Error(errorMessage);
            }
            if (onSuccess) onSuccess();
            router.refresh();
            router.push('/admin/dashboard');
        } catch (err) {
            alert('There was an error deleting the homepage content.');
        } finally{
            setDeleting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "w-full max-w-2xl mx-auto mt-4 space-y-6 p-6 bg-background rounded-xl shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold mb-4 text-center",
                children: mode === 'edit' ? 'Edit Home Page Content' : 'Create Home Page Content'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "heroVideo",
                        children: "Hero Video (URL)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "heroVideo",
                        name: "heroVideo",
                        value: form.heroVideo,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "vision",
                        children: "Vision"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "vision",
                        name: "vision",
                        value: form.vision,
                        onChange: handleChange,
                        required: true,
                        className: "w-full border rounded-md p-2 min-h-[60px]"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "mission",
                        children: "Mission"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "mission",
                        name: "mission",
                        value: form.mission,
                        onChange: handleChange,
                        required: true,
                        className: "w-full border rounded-md p-2 min-h-[60px]"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "focus",
                        children: "Focus"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "focus",
                        name: "focus",
                        value: form.focus,
                        onChange: handleChange,
                        required: true,
                        className: "w-full border rounded-md p-2 min-h-[60px]"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "coreValues",
                        children: "Core Values"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "coreValues",
                        name: "coreValues",
                        value: form.coreValues,
                        onChange: handleChange,
                        required: true,
                        className: "w-full border rounded-md p-2 min-h-[60px]"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-center gap-2 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading,
                        className: "w-1/2 bg-[#9f004d]",
                        children: loading ? mode === 'edit' ? 'Updating...' : 'Creating...' : mode === 'edit' ? 'Update' : 'Create'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        onClick: onCancel,
                        disabled: loading,
                        className: "w-1/2 bg-black",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    mode === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        onClick: handleDelete,
                        disabled: deleting,
                        className: "w-1/2 bg-red-700",
                        children: deleting ? 'Deleting...' : 'Delete'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
} // This code defines a form for creating or editing the homepage content of a website.
 // It includes fields for a hero video URL, vision, mission, focus, and core values.
 // The form handles both creation and editing modes, with appropriate API calls for each.
}}),
"[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BeneficiaryView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
;
// Use the viewer for read-only rich text display (if any rich text fields)
const TiptapJsonViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/editor/tiptap-json-viewer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function BeneficiaryView({ data, onClose }) {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const role = session?.user?.role ?? 'guest';
    const isPrivileged = role === 'super' || role === 'admin' || role === 'moderator';
    const isSelfBeneficiary = role === 'beneficiary' && !!data && // infer beneficiary identity from session first/last name match when possible
    session?.user?.firstName && session?.user?.lastName && session.user.firstName.trim().toLowerCase() === (data.firstName ?? '').trim().toLowerCase() && session.user.lastName.trim().toLowerCase() === (data.lastName ?? '').trim().toLowerCase();
    const [messageCount, setMessageCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(typeof data?.messageCount === 'number' ? data.messageCount : null);
    const [responseCount, setResponseCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(typeof data?.responseCount === 'number' ? data.responseCount : null);
    const [countsLoading, setCountsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // If counts are already provided by the server in `data`, don't fetch.
        if (messageCount !== null && responseCount !== null) return;
        // Only attempt to fetch counts if this view is for the logged-in beneficiary (self)
        // or the current user is privileged (admin/super/moderator).
        if (!isSelfBeneficiary && !isPrivileged) return;
        // Try a few strategies to obtain counts:
        // 1) /api/beneficiaries/:id/counts (preferred if you provide it)
        // 2) fallback to fetching messages and responses filtered by beneficiaryId (if supported)
        async function fetchCounts() {
            if (!data?.id) return;
            setCountsLoading(true);
            try {
                // try dedicated endpoint first
                const countsRes = await fetch(`/api/beneficiaries/${data.id}/counts`);
                if (countsRes.ok) {
                    const json = await countsRes.json();
                    if (typeof json.messageCount === 'number') setMessageCount(json.messageCount);
                    if (typeof json.responseCount === 'number') setResponseCount(json.responseCount);
                    setCountsLoading(false);
                    return;
                }
            } catch  {
            // ignore and fallback
            }
            try {
                // fallback: fetch messages for beneficiary and count
                const msgsRes = await fetch(`/api/messages?beneficiaryId=${encodeURIComponent(data.id)}`);
                if (msgsRes.ok) {
                    const msgs = await msgsRes.json();
                    if (Array.isArray(msgs)) setMessageCount(msgs.length);
                }
            } catch  {
            // ignore
            }
            try {
                // fallback: fetch responses for beneficiary by relying on responses API to filter by message->beneficiary
                const resRes = await fetch(`/api/responses?beneficiaryId=${encodeURIComponent(data.id)}`);
                if (resRes.ok) {
                    const rs = await resRes.json();
                    if (Array.isArray(rs)) setResponseCount(rs.length);
                }
            } catch  {
            // ignore
            }
            setCountsLoading(false);
        }
        fetchCounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        data?.id,
        isSelfBeneficiary,
        isPrivileged
    ]);
    // Render a compact card for beneficiary (for self) or a full info card (for privileged users)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-5xl mx-auto space-y-4 bg-background rounded-xl shadow p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-xl",
                        children: "Beneficiary"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600",
                        children: countsLoading ? 'Loading counts…' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Messages:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        messageCount !== null ? messageCount : 'N/A'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Responses:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        responseCount !== null ? responseCount : 'N/A'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Name:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    data.firstName ?? '-',
                                    " ",
                                    data.lastName ?? ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            isPrivileged && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Gender:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            data.gender ?? '-'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Email:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            data.email ?? '-'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Phone:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            data.phone ?? '-'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Date of Birth:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this),
                                            ' ',
                                            data.dateOfBirth ? new Date(data.dateOfBirth).toLocaleDateString() : '-'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Status:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            data.beneficiaryStatus ?? '-'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            !isPrivileged && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Email:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            data.email ? maskEmail(data.email) : '-'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Phone:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            data.phone ? maskPhone(data.phone) : '-'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            Array.isArray(data.images) && data.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Images:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 mt-2",
                                        children: data.images.map((img, idx)=>img ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: img,
                                                alt: `Beneficiary image ${idx + 1}`,
                                                className: "max-w-xs max-h-64 rounded shadow border",
                                                style: {
                                                    objectFit: 'cover'
                                                }
                                            }, idx, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this) : null)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            isPrivileged && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Institution:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            data.institution?.name ?? '-'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Created At:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this),
                                            ' ',
                                            data.createdAt ? new Date(data.createdAt).toLocaleString() : '-'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Updated At:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            ' ',
                                            data.updatedAt ? new Date(data.updatedAt).toLocaleString() : '-'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-4 py-2 bg-pink-700 text-white rounded",
                    onClick: onClose,
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                    lineNumber: 224,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
// small helpers to avoid showing raw contact details to other beneficiaries
function maskEmail(e) {
    try {
        const [local, domain] = e.split('@');
        if (!local || !domain) return e;
        if (local.length <= 2) return `*@${domain}`;
        return `${local[0]}${'*'.repeat(Math.max(1, local.length - 2))}${local.slice(-1)}@${domain}`;
    } catch  {
        return e;
    }
}
function maskPhone(p) {
    const digits = p.replace(/\D/g, '');
    if (digits.length <= 4) return '****';
    return `${'*'.repeat(Math.max(0, digits.length - 4))}${digits.slice(-4)}`;
}
}}),
"[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MessageView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
// TipTap JSON viewer for rich text message
const TiptapJsonViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/editor/tiptap-json-viewer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function AuthorBadge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "ml-2 inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
        children: "Author"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
function MessageView({ data, onClose, onRespond }) {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    if (!data) return null;
    const content = data.content;
    const renderContent = (c)=>{
        if (c === undefined || c === null) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "-"
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
            lineNumber: 73,
            columnNumber: 47
        }, this);
        if (typeof c === 'object') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded bg-white dark:bg-gray-900 mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TiptapJsonViewer, {
                    content: c,
                    className: "tiptap tiptap-view-only"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "whitespace-pre-line",
            children: String(c)
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
            lineNumber: 81,
            columnNumber: 12
        }, this);
    };
    const ownerLabel = ()=>{
        if (data.name && `${data.name}`.trim().length > 0) return data.name;
        if (data.beneficiary) return `${data.beneficiary.firstName} ${data.beneficiary.lastName}`;
        if (data.createdBy) return `${data.createdBy.firstName ?? ''} ${data.createdBy.lastName ?? ''}`.trim();
        return 'System';
    };
    const responderLabelText = (r)=>{
        if (!r) return 'System';
        if (r.responderUser) {
            const u = r.responderUser;
            return `${u.firstName} ${u.lastName}${u.email ? ` (${u.email})` : ''}`;
        }
        if (r.responderBeneficiary) {
            const b = r.responderBeneficiary;
            return `${b.firstName} ${b.lastName}`;
        }
        // fallback to role
        if (r.responderRole === 'AUTHOR') return 'Author';
        return 'System';
    };
    // Helper: strict identity-based author check
    const isResponseAuthor = (msg, r)=>{
        // 1) server-declared AUTHOR is authoritative
        if (r?.responderRole === 'AUTHOR') return true;
        // message-level keys
        const messageAuthorUserId = (msg.createdBy && msg.createdBy.id) ?? msg.createdById ?? undefined;
        const messageBeneficiaryId = msg.beneficiary?.id ?? msg.beneficiaryId ?? undefined;
        // responder-level keys
        const responderUserId = r?.responderUser?.id ?? undefined;
        const responderBeneficiaryId = r?.responderBeneficiary?.id ?? undefined;
        const responderBeneficiaryOwnerId = r?.responderBeneficiary?.createdById ?? undefined;
        // 2) If message was authored by a user account and responder is that same user
        if (messageAuthorUserId && responderUserId && String(messageAuthorUserId) === String(responderUserId)) return true;
        // 3) If message is tied to a beneficiary (author is that beneficiary) and responder is that beneficiary
        if (messageBeneficiaryId && responderBeneficiaryId && String(messageBeneficiaryId) === String(responderBeneficiaryId)) return true;
        // 4) If message was authored by a user account, and responder is a beneficiary whose createdById matches that user
        //    (i.e., the responder beneficiary account is owned by the same user who authored the message)
        if (messageAuthorUserId && responderBeneficiaryOwnerId && String(messageAuthorUserId) === String(responderBeneficiaryOwnerId)) return true;
        // No strict identity match => not author
        return false;
    };
    // split responses by responder being the author of the message or not
    const authorResponses = Array.isArray(data.responses) ? data.responses.filter((r)=>isResponseAuthor(data, r)) : [];
    const otherResponses = Array.isArray(data.responses) ? data.responses.filter((r)=>!isResponseAuthor(data, r)) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-5xl mx-auto space-y-6 p-6 bg-background rounded-xl shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-semibold text-xl mb-4",
                children: "View Message"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-medium",
                                children: ownerLabel()
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-xs",
                                children: data.messageCategory ?? '-'
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500",
                                children: [
                                    "Created: ",
                                    data.createdAt ? new Date(data.createdAt).toLocaleString() : '-'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500",
                                children: [
                                    "Updated: ",
                                    data.updatedAt ? new Date(data.updatedAt).toLocaleString() : '-'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-medium mb-1",
                                children: "Content"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-0",
                                children: renderContent(content)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    authorResponses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-lg mb-3",
                                children: "Author's response"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: authorResponses.map((r)=>{
                                    const isAuthor = isResponseAuthor(data, r);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 border-l-4 border-pink-600 bg-pink-50 dark:bg-pink-900 rounded",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-medium",
                                                                children: responderLabelText(r)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 25
                                                            }, this),
                                                            isAuthor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthorBadge, {}, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 38
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: r.createdAt ? new Date(r.createdAt).toLocaleString() : ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                                lineNumber: 196,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2",
                                                children: renderContent(r.content)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                                lineNumber: 205,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, r.id, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                        lineNumber: 192,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    otherResponses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-lg mb-3",
                                children: "Responses"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: otherResponses.map((r)=>{
                                    const isAuthor = isResponseAuthor(data, r);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 border rounded bg-white dark:bg-gray-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-medium",
                                                                children: responderLabelText(r)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 25
                                                            }, this),
                                                            isAuthor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthorBadge, {}, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 38
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: r.createdAt ? new Date(r.createdAt).toLocaleString() : ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                                lineNumber: 222,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2",
                                                children: renderContent(r.content)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, r.id, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                        lineNumber: 221,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 mt-4",
                children: [
                    onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700",
                        onClick: onClose,
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this),
                    onRespond && data.allowResponses && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",
                        onClick: ()=>onRespond(data.id),
                        children: "Respond"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$downloadColumnsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$handleDownloadPDF$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/handleDownloadPDF.ts [app-ssr] (ecmascript)");
// Icons
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
// Section components
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$ProjectsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$ReportsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$EventsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$InstitutionsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$BeneficiariesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$MessagesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$ResponsesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/ResponsesSection.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './components/sections/ChartsSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$AdminSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/AdminSection.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './components/sections/HomePageSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/sections/settingsSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/sections/FAQSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// Import all edit/create forms
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createProjectForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createProjectForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createReportForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createReportForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createEventForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createEventForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createInstitutionForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createBeneficiaryForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createMessageForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createMessageForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createResponseForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createResponseForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createUserForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createUserForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createHomePageForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './createSettingsForm'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './createFAQForm'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// Import all view-only components
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$beneficiaryView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$messageView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './components/views/responseView'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$eventView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/eventView.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './components/views/FAQView'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/views/homePageView'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$institutionView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/institutionView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$projectView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/projectView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$reportView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/reportView.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './components/views/userView'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/views/settingsView'");
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
// Table controls component for search/filter/add/export
function TableControls({ search, setSearch, onAddNew, exportExcel, downloadPDF, activeSection, sectionLabels, hideSearch, addNewLabel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center justify-between mb-4 gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 flex-1",
                children: [
                    !hideSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "border px-3 py-2 rounded w-64 focus:outline-pink-500 dark:bg-gray-800 dark:text-white",
                        placeholder: `Search ${sectionLabels[activeSection] || 'records'}...`,
                        value: search,
                        onChange: (e)=>setSearch(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    !hideSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-2 py-1 border rounded text-sm bg-green-50 hover:bg-green-100 dark:bg-gray-800 dark:hover:bg-green-900",
                                title: "Export to Excel",
                                onClick: exportExcel,
                                children: "Export to Excel"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-2 py-1 border rounded text-sm bg-yellow-50 hover:bg-yellow-100 dark:bg-gray-800 dark:hover:bg-yellow-900",
                                title: "Download as PDF",
                                onClick: downloadPDF,
                                children: "Download as PDF"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: addNewLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-900 text-sm font-semibold",
                    onClick: onAddNew,
                    children: addNewLabel
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
// Sections
const sections = [
    'charts',
    'projects',
    'events',
    'reports',
    'institutions',
    'beneficiaries',
    'messages',
    'responses',
    'Home Page',
    'admin',
    'settings',
    'FAQ',
    'executiveMessages'
];
const sectionFeatures = {
    projects: {
        apiRoute: '/api/projects'
    },
    reports: {
        apiRoute: '/api/reports'
    },
    events: {
        apiRoute: '/api/events'
    },
    institutions: {
        apiRoute: '/api/institutions'
    },
    beneficiaries: {
        apiRoute: '/api/beneficiaries'
    },
    messages: {
        apiRoute: '/api/messages'
    },
    responses: {
        apiRoute: '/api/responses'
    },
    charts: {},
    'Home Page': {
        apiRoute: '/api/homepage-content'
    },
    admin: {
        apiRoute: '/api/users'
    },
    settings: {
        apiRoute: '/api/settings'
    },
    FAQ: {
        apiRoute: '/api/faqs'
    },
    executiveMessages: {}
};
const sectionIcons = {
    charts: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChartPie"], {
        className: "text-pink-600 dark:text-pink-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 173,
        columnNumber: 11
    }, this),
    projects: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaClipboardList"], {
        className: "text-yellow-600 dark:text-yellow-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 174,
        columnNumber: 13
    }, this),
    events: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCalendarAlt"], {
        className: "text-green-600 dark:text-green-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 175,
        columnNumber: 11
    }, this),
    reports: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFilePdf"], {
        className: "text-red-600 dark:text-red-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 176,
        columnNumber: 12
    }, this),
    institutions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUniversity"], {
        className: "text-blue-600 dark:text-blue-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 177,
        columnNumber: 17
    }, this),
    beneficiaries: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUsers"], {
        className: "text-indigo-600 dark:text-indigo-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 178,
        columnNumber: 18
    }, this),
    messages: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEnvelope"], {
        className: "text-orange-500 dark:text-orange-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 179,
        columnNumber: 13
    }, this),
    responses: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaReply"], {
        className: "text-purple-600 dark:text-purple-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 180,
        columnNumber: 14
    }, this),
    'Home Page': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHome"], {
        className: "text-pink-700 dark:text-pink-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 181,
        columnNumber: 16
    }, this),
    admin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUserCog"], {
        className: "text-gray-700 dark:text-gray-300"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 182,
        columnNumber: 10
    }, this),
    settings: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCogs"], {
        className: "text-gray-700 dark:text-gray-300"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 183,
        columnNumber: 13
    }, this),
    FAQ: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaQuestionCircle"], {
        className: "text-blue-500 dark:text-blue-300"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 184,
        columnNumber: 8
    }, this),
    executiveMessages: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBullhorn"], {
        className: "text-red-500 dark:text-red-300"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 185,
        columnNumber: 22
    }, this)
};
const sectionLabels = {
    charts: 'Charts',
    projects: 'Projects',
    events: 'Events',
    reports: 'Reports',
    institutions: 'Institutions',
    beneficiaries: 'Beneficiaries',
    messages: 'Messages',
    responses: 'Responses',
    'Home Page': 'Home Page',
    admin: 'Admin',
    settings: 'Settings',
    FAQ: 'FAQ',
    executiveMessages: 'Executive Messages'
};
function AdminDashboardPage() {
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('charts');
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editRecord, setEditRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewRecord, setViewRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteId, setDeleteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteLoading, setDeleteLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('createdAt');
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('desc');
    const [rowsPerPage, setRowsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('charts');
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [downloadModalOpen, setDownloadModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [downloadColumns, setDownloadColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pendingDownloadData, setPendingDownloadData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Hide controls when viewing, editing or adding new
    const [hideControls, setHideControls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const searchType = searchParams.get('type');
        const defalultSection = 'charts';
        const sectionToLoad = searchType && sections.includes(searchType) ? searchType : defalultSection;
        handleMenuClick(sectionToLoad);
    // eslint-disable-next-line
    }, []);
    async function handleMenuClick(section) {
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
                    setData([
                        rawData
                    ]);
                }
            } catch  {
                setData([]);
            }
        } else {
            setData([]);
        }
    }
    function getSortedData(data, sortBy, sortOrder, activeSection) {
        if (!Array.isArray(data)) return [];
        if (!activeSection || !sectionFeatures[activeSection]?.apiRoute) return data;
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
    }
    function getFilteredData(sortedData, search, activeSection) {
        if (!Array.isArray(sortedData)) return [];
        if (!activeSection || !search.trim()) return sortedData;
        const lower = search.toLowerCase();
        return sortedData.filter((item)=>Object.keys(item).some((key)=>typeof item[key] === 'string' && item[key].toLowerCase().includes(lower)));
    }
    function getPaginatedData(filteredData, page, rowsPerPage) {
        if (!Array.isArray(filteredData)) return [];
        return (filteredData ?? []).slice((page - 1) * rowsPerPage, page * rowsPerPage);
    }
    const sortedData = getSortedData(data, sortBy, sortOrder, activeSection);
    const filteredData = getFilteredData(sortedData, search, activeSection);
    const pageCount = Math.ceil((filteredData?.length ?? 0) / rowsPerPage);
    const paginatedData = getPaginatedData(filteredData, page, rowsPerPage);
    // Modified handlers for edit/view/add to hide controls
    function handleEdit(record) {
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
    function handleRespondToMessage(messageId) {
        // open the responses create form bound to this message
        setHideControls(true);
        setActiveSection('responses');
        // pass messageId as initial payload to CreateResponseForm
        setEditRecord({
            messageId
        });
        setViewRecord(null);
    }
    // Which sections should show the search/export/pdf tools?
    const toolSections = [
        'messages',
        'responses',
        'settings',
        'Home Page'
    ];
    const showToolControls = !toolSections.includes(activeSection);
    // Unified view handler used by sections. `source` helps identify where the click came from.
    async function handleView(record, source) {
        setHideControls(true);
        if (!record) {
            setViewRecord(null);
            return;
        }
        // If the request came from the messages list, always show the MessageView (with responses)
        if (source === 'messages' || sectionRef.current === 'messages') {
            try {
                const id = record?.id ?? record;
                const msgRes = await fetch(`/api/messages/${id}`);
                const msgData = msgRes.ok ? await msgRes.json() : record;
                // Fetch responses related to this message
                const respRes = await fetch(`/api/responses`);
                const respData = respRes.ok ? await respRes.json() : [];
                const parentId = typeof msgData.id === 'number' ? msgData.id : Number(msgData.id);
                const linkedResponses = Array.isArray(respData) ? respData.filter((r)=>r.message && (r.message.id === parentId || Number(r.message.id) === parentId) || r.messageId && Number(r.messageId) === parentId) : [];
                setViewRecord({
                    ...msgData,
                    responses: linkedResponses
                });
                setActiveSection('messages'); // ensure MessageView is rendered
                return;
            } catch  {
            // fallback to showing the raw record
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
            } catch  {
            // fallback
            }
        }
        // fallback
        setViewRecord(record);
    }
    function handleCloseView() {
        setHideControls(false);
        setViewRecord(null);
    }
    async function handleDelete(id) {
        setDeleteId(id);
        setDeleteLoading(true);
        try {
            let apiRoute = sectionFeatures[activeSection]?.apiRoute;
            if (!apiRoute) throw new Error('Delete API route not defined');
            if (apiRoute.endsWith('/')) apiRoute = apiRoute.slice(0, -1);
            const url = `${apiRoute}/${id}`;
            const res = await fetch(url, {
                method: 'DELETE'
            });
            const text = await res.text();
            if (!res.ok) {
                alert(`Failed to delete record: ${res.status}\n${text}`);
            } else {
                await handleMenuClick(activeSection);
            }
        } catch (err) {
            alert('Error deleting record: ' + err);
        } finally{
            setDeleteLoading(false);
            setDeleteId(null);
        }
    }
    function getCurrentColumns() {
        return [];
    }
    const handleExportExcel = ()=>{
        const columns = getCurrentColumns();
        const headers = columns.filter((col)=>col.header && col.header !== 'Actions' && col.header !== 'Delete').map((col)=>typeof col.header === 'function' ? col.header({}) : col.header);
        const exportableCols = columns.filter((col)=>col.header && col.header !== 'Actions' && col.header !== 'Delete');
        const rows = paginatedData.map((row, idx)=>exportableCols.map((col)=>{
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
    const handleDownloadPDFButton = ()=>{
        const columns = getCurrentColumns();
        const columnOptions = columns.filter((col)=>col.header && col.header !== 'Actions' && col.header !== 'Delete').map((col)=>({
                id: col.id || col.accessorKey,
                label: typeof col.header === 'function' ? col.header({}) : col.header
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
            switch(activeSection){
                case 'messages':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$messageView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        data: viewRecord,
                        onClose: handleCloseView,
                        onRespond: handleRespondToMessage
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 478,
                        columnNumber: 13
                    }, this);
                case 'responses':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResponseView, {
                        data: viewRecord,
                        onClose: handleCloseView
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 485,
                        columnNumber: 18
                    }, this);
                case 'beneficiaries':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$beneficiaryView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        data: viewRecord,
                        onClose: handleCloseView
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 487,
                        columnNumber: 18
                    }, this);
                case 'events':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$eventView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        data: viewRecord,
                        onClose: handleCloseView
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 489,
                        columnNumber: 18
                    }, this);
                case 'Home Page':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HomePageView, {
                        data: viewRecord,
                        onClose: handleCloseView
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 491,
                        columnNumber: 18
                    }, this);
                case 'projects':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$projectView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        data: viewRecord,
                        onClose: handleCloseView
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 493,
                        columnNumber: 18
                    }, this);
                case 'reports':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$reportView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        data: viewRecord,
                        onClose: handleCloseView
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 495,
                        columnNumber: 18
                    }, this);
                case 'institutions':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$institutionView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        data: viewRecord,
                        onClose: handleCloseView
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 497,
                        columnNumber: 18
                    }, this);
                case 'admin':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UserView, {
                        data: viewRecord,
                        onClose: handleCloseView
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 499,
                        columnNumber: 18
                    }, this);
                case 'FAQ':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQView, {
                        data: viewRecord,
                        onClose: handleCloseView
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 501,
                        columnNumber: 18
                    }, this);
                case 'settings':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsView, {
                        data: viewRecord,
                        onClose: handleCloseView
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 503,
                        columnNumber: 18
                    }, this);
                case 'executiveMessages':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-4xl mx-auto p-6 bg-background rounded-xl shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold text-xl mb-2",
                                children: "Executive Messages"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 507,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600",
                                children: "Executive messages management is not available here."
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 508,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 506,
                        columnNumber: 13
                    }, this);
                default:
                    return null;
            }
        }
        if (editRecord) {
            switch(activeSection){
                case 'projects':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createProjectForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 522,
                        columnNumber: 13
                    }, this);
                case 'reports':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createReportForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 530,
                        columnNumber: 13
                    }, this);
                case 'events':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createEventForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 538,
                        columnNumber: 13
                    }, this);
                case 'institutions':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createInstitutionForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 546,
                        columnNumber: 13
                    }, this);
                case 'beneficiaries':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createBeneficiaryForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 554,
                        columnNumber: 13
                    }, this);
                case 'messages':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createMessageForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 562,
                        columnNumber: 13
                    }, this);
                case 'responses':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createResponseForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        messageId: editRecord?.messageId,
                        editId: editRecord?.id,
                        initialData: editRecord?.id ? editRecord : undefined,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 570,
                        columnNumber: 13
                    }, this);
                case 'admin':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createUserForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 580,
                        columnNumber: 13
                    }, this);
                case 'Home Page':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createHomePageForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 588,
                        columnNumber: 13
                    }, this);
                case 'settings':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateSettingsForm, {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 596,
                        columnNumber: 13
                    }, this);
                case 'FAQ':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateFAQForm, {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 604,
                        columnNumber: 13
                    }, this);
                default:
                    return null;
            }
        }
        switch(activeSection){
            case 'projects':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$ProjectsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: (r)=>handleView(r, 'projects'),
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 618,
                    columnNumber: 11
                }, this);
            case 'reports':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$ReportsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: (r)=>handleView(r, 'reports'),
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 632,
                    columnNumber: 11
                }, this);
            case 'events':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$EventsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: (r)=>handleView(r, 'events'),
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 646,
                    columnNumber: 11
                }, this);
            case 'institutions':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$InstitutionsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: (r)=>handleView(r, 'institutions'),
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 660,
                    columnNumber: 11
                }, this);
            case 'beneficiaries':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$BeneficiariesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: (r)=>handleView(r, 'beneficiaries'),
                    handleDelete: handleDelete,
                    messagesCountMap: {},
                    requestsCountMap: {},
                    currentUserRole: "",
                    TableActions: ()=>null,
                    onAddMessage: ()=>{},
                    onAddRequest: ()=>{},
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 674,
                    columnNumber: 11
                }, this);
            case 'messages':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$MessagesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: (r)=>handleView(r, 'messages'),
                    handleDelete: handleDelete,
                    onRespond: handleRespondToMessage,
                    currentUserRole: "",
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 693,
                    columnNumber: 11
                }, this);
            case 'responses':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$ResponsesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: (r)=>handleView(r, 'responses'),
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 709,
                    columnNumber: 11
                }, this);
            case 'charts':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartsSection, {}, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 722,
                    columnNumber: 16
                }, this);
            case 'admin':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$AdminSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: (r)=>handleView(r, 'admin'),
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 725,
                    columnNumber: 11
                }, this);
            case 'Home Page':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HomePageSection, {
                    homepageData: data,
                    handleEdit: handleEdit,
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    homepageRef: undefined,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 739,
                    columnNumber: 11
                }, this);
            case 'settings':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsSection, {
                    settingsData: data,
                    handleEdit: handleEdit,
                    handleView: (r)=>handleView(r, 'settings'),
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 751,
                    columnNumber: 11
                }, this);
            case 'FAQ':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQSection, {
                    faqData: data,
                    handleEdit: handleEdit,
                    handleView: (r)=>handleView(r, 'FAQ'),
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 763,
                    columnNumber: 11
                }, this);
            case 'executiveMessages':
                // placeholder for executive messages
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-4xl mx-auto p-6 bg-background rounded-xl shadow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-semibold text-xl mb-2",
                            children: "Executive Messages"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                            lineNumber: 777,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-600",
                            children: "Executive messages management is not available here."
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                            lineNumber: 778,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 776,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    }
    const isHomePageSection = activeSection === 'Home Page';
    const homePageHasData = Array.isArray(data) && data.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `transition-all duration-300 bg-white dark:bg-gray-950 border-r dark:border-gray-800 shadow-sm h-full ${sidebarCollapsed ? 'w-16' : 'w-60'} flex flex-col`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-2 py-4 border-b dark:border-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold text-pink-600 dark:text-pink-400 hidden sm:block",
                                children: !sidebarCollapsed && 'Dashboard'
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 800,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "ml-auto p-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400",
                                onClick: ()=>setSidebarCollapsed((c)=>!c),
                                "aria-label": sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar',
                                children: sidebarCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaAngleRight"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                    lineNumber: 808,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaAngleLeft"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                    lineNumber: 808,
                                    columnNumber: 62
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 803,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 799,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "mt-2 flex-1 overflow-y-auto",
                        children: sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleMenuClick(section),
                                className: `w-full flex items-center gap-3 px-2 py-2 rounded transition-all font-medium
                ${activeSection === section ? 'bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-pink-700 dark:hover:text-pink-400'}
              `,
                                style: {
                                    minWidth: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: sectionIcons[section]
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                        lineNumber: 825,
                                        columnNumber: 15
                                    }, this),
                                    !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: sectionLabels[section]
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                        lineNumber: 826,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, section, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 813,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 811,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 794,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 min-w-0 overflow-y-auto p-4 bg-white dark:bg-gray-900 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: sectionIcons[activeSection]
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 836,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold text-gray-700 dark:text-gray-100",
                                children: sectionLabels[activeSection]
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 837,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 835,
                        columnNumber: 9
                    }, this),
                    !hideControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: showToolControls ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableControls, {
                            search: search,
                            setSearch: setSearch,
                            onAddNew: handleAddNew,
                            exportExcel: handleExportExcel,
                            downloadPDF: handleDownloadPDFButton,
                            activeSection: activeSection,
                            sectionLabels: sectionLabels,
                            hideSearch: false,
                            addNewLabel: isHomePageSection ? homePageHasData ? 'Edit Existing Content' : 'Add New Home Page' : `Add New ${sectionLabels[activeSection]}`
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                            lineNumber: 846,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-900 text-sm font-semibold",
                                onClick: handleAddNew,
                                children: isHomePageSection ? homePageHasData ? 'Edit Existing Content' : 'Add New Home Page' : `Add New ${sectionLabels[activeSection]}`
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 865,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                            lineNumber: 864,
                            columnNumber: 15
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col",
                        children: activeSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 w-full",
                            children: renderSection()
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                            lineNumber: 882,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 881,
                        columnNumber: 9
                    }, this),
                    !isHomePageSection && pageCount > 1 && !hideControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mt-4 justify-end items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-2 py-1 rounded border dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100",
                                disabled: page === 1,
                                onClick: ()=>setPage(page - 1),
                                children: "Prev"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 888,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "dark:text-gray-100",
                                children: [
                                    "Page ",
                                    page,
                                    " of ",
                                    pageCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 895,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-2 py-1 rounded border dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100",
                                disabled: page === pageCount,
                                onClick: ()=>setPage(page + 1),
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 898,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 887,
                        columnNumber: 11
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
                        lineNumber: 909,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 833,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 792,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0c3b5f41._.js.map