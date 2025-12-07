(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DownloadColumnsModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
;
;
function DownloadColumnsModal({ isOpen, onClose, columns, onDownload, defaultSelected = [] }) {
    _s();
    const [available, setAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DownloadColumnsModal.useEffect": ()=>{
            if (isOpen) {
                setAvailable(columns.filter({
                    "DownloadColumnsModal.useEffect": (c)=>!defaultSelected.includes(c.id)
                }["DownloadColumnsModal.useEffect"]));
                setSelected(columns.filter({
                    "DownloadColumnsModal.useEffect": (c)=>defaultSelected.includes(c.id)
                }["DownloadColumnsModal.useEffect"]));
            }
        }
    }["DownloadColumnsModal.useEffect"], [
        isOpen
    ]); // Only reset when modal opens
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerSensor"], {
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
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayMove"])(items, oldIndex, newIndex);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onClose: onClose,
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 dark:bg-black/70",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-2xl mx-auto p-6 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Title, {
                        className: "text-lg font-bold mb-2 dark:text-white",
                        children: "Select & Order Columns"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold mb-2 dark:text-gray-200",
                                        children: "All Columns"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DndContext"], {
                                        sensors: sensors,
                                        collisionDetection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closestCenter"],
                                        onDragEnd: handleDragEnd,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "border rounded p-2 min-h-[200px] bg-gray-50 dark:bg-gray-800",
                                            children: [
                                                available.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DraggableColumnItem, {
                                                        id: col.id,
                                                        label: col.label,
                                                        onAdd: ()=>handleAdd(col)
                                                    }, col.id, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this)),
                                                available.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold mb-2 dark:text-gray-200",
                                        children: "To Download (drag to reorder)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DndContext"], {
                                        sensors: sensors,
                                        collisionDetection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closestCenter"],
                                        onDragEnd: handleDragEnd,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortableContext"], {
                                            items: selected.map((c)=>c.id),
                                            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verticalListSortingStrategy"],
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                id: "selected-drop-area",
                                                className: "border rounded p-2 min-h-[200px] bg-gray-50 dark:bg-gray-800",
                                                children: [
                                                    selected.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableColumnItem, {
                                                            id: col.id,
                                                            label: col.label,
                                                            onRemove: ()=>handleRemove(col)
                                                        }, col.id, false, {
                                                            fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, this)),
                                                    selected.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end mt-6 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 rounded",
                                onClick: onClose,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(DownloadColumnsModal, "CXCXPWn68v723MkowQ0EBxXMoVo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"]
    ];
});
_c = DownloadColumnsModal;
// Draggable item for available columns (left)
function DraggableColumnItem({ id, label, onAdd }) {
    _s1();
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"])({
        id
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: setNodeRef,
        style: {
            transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "cursor-move text-gray-400 dark:text-gray-500 select-none",
                "aria-label": "Drag to select column",
                title: "Drag to select column",
                children: "☰"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s1(DraggableColumnItem, "wZ9LrlAdu45h+k5IBlwhyTPFbVs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"]
    ];
});
_c1 = DraggableColumnItem;
// Draggable/sortable item for selected columns (right)
function SortableColumnItem({ id, label, onRemove }) {
    _s2();
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"])({
        id
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: setNodeRef,
        style: {
            transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
            transition,
            opacity: isDragging ? 0.5 : 1
        },
        className: "flex items-center gap-2 bg-white dark:bg-gray-900 border-b last:border-b-0 border-gray-100 dark:border-gray-800 py-1 px-2 rounded cursor-move group",
        ...attributes,
        ...listeners,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "cursor-move text-gray-400 dark:text-gray-500 select-none",
                "aria-label": "Drag to reorder",
                title: "Drag to reorder",
                children: "☰"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex-1 dark:text-gray-100",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s2(SortableColumnItem, "wZ9LrlAdu45h+k5IBlwhyTPFbVs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"]
    ];
});
_c2 = SortableColumnItem;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DownloadColumnsModal");
__turbopack_context__.k.register(_c1, "DraggableColumnItem");
__turbopack_context__.k.register(_c2, "SortableColumnItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/handleDownloadPDF.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleDownloadPDF": (()=>handleDownloadPDF)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-client] (ecmascript)");
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
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/table.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
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
_c = Table;
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = TableHeader;
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = TableBody;
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TableFooter;
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c4 = TableRow;
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c5 = TableHead;
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c6 = TableCell;
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground mt-4 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DataTable": (()=>DataTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-table/build/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/table-core/build/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function DataTable({ columns, data }) {
    _s();
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"])({
        data,
        columns,
        getCoreRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreRowModel"])(),
        enableColumnResizing: true,
        columnResizeMode: 'onChange'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-md border mt-6 overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                    children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                            children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    style: {
                                        position: 'relative',
                                        width: header.getSize(),
                                        minWidth: header.column.columnDef.minSize ?? 40,
                                        maxWidth: header.column.columnDef.maxSize ?? 1000
                                    },
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(header.column.columnDef.header, header.getContext()),
                                        header.column.getCanResize() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                    children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                            className: "hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors",
                            children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                    style: {
                                        width: cell.column.getSize(),
                                        minWidth: cell.column.columnDef.minSize ?? 40,
                                        maxWidth: cell.column.columnDef.maxSize ?? 1000
                                    },
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
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
_s(DataTable, "+qfJc9U8evODZQ8bBg9G2KVouAc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"]
    ];
});
_c = DataTable;
var _c;
__turbopack_context__.k.register(_c, "DataTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/projects.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "projectColumns": (()=>projectColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
function projectColumns({ onEdit, onDelete }) {
    return [
        {
            accessorKey: 'title',
            header: 'Title',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/projects.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function ProjectsSection({ paginatedData, page, rowsPerPage, handleEdit, handleDelete, TableActions }) {
    const columns = [
        {
            id: 'number',
            header: 'No.',
            cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
            size: 50
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectColumns"])({
            onEdit: handleEdit,
            onDelete: handleDelete
        })
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: columns,
                data: paginatedData
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: paginatedData,
                columns: columns,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = ProjectsSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/reports.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "reportColumns": (()=>reportColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
function reportColumns({ onEdit, onDelete }) {
    return [
        {
            accessorKey: 'title',
            header: 'Title',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ReportsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$reports$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/reports.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function ReportsSection({ paginatedData, page, rowsPerPage, handleEdit, handleDelete, TableActions }) {
    const columns = [
        {
            id: 'number',
            header: 'No.',
            cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
            size: 50
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$reports$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reportColumns"])({
            onEdit: handleEdit,
            onDelete: handleDelete
        })
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: columns,
                data: paginatedData
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: paginatedData,
                columns: columns,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = ReportsSection;
var _c;
__turbopack_context__.k.register(_c, "ReportsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/events.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "eventColumns": (()=>eventColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
function eventColumns({ onEdit, onDelete }) {
    return [
        {
            accessorKey: "eventTitle",
            header: "Title",
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EventsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$events$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/events.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function EventsSection({ paginatedData, page, rowsPerPage, handleEdit, handleDelete, TableActions }) {
    const columns = [
        {
            id: 'number',
            header: 'No.',
            cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
            size: 50
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$events$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventColumns"])({
            onEdit: handleEdit,
            onDelete: handleDelete
        })
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: columns,
                data: paginatedData
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: paginatedData,
                columns: columns,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = EventsSection;
var _c;
__turbopack_context__.k.register(_c, "EventsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "institutionColumns": (()=>institutionColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
function institutionColumns({ onEdit, onDelete }) {
    return [
        {
            accessorKey: 'name',
            header: 'Name',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc pl-4",
                    children: row.original.locations && row.original.locations.length > 0 ? row.original.locations.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: loc.locationName || 'Unnamed'
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this),
                                loc.latitude !== undefined && loc.latitude !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        ' ',
                                        "- ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                loc.longitude !== undefined && loc.longitude !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: row.original.institutionImages && row.original.institutionImages.length > 0 ? row.original.institutionImages.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: img,
                            alt: "Institution",
                            className: "w-12 h-12 object-cover rounded border"
                        }, img + idx, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx",
                            lineNumber: 121,
                            columnNumber: 15
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InstitutionsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$institutions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function InstitutionsSection({ paginatedData, page, rowsPerPage, handleEdit, handleDelete, TableActions }) {
    const columns = [
        {
            id: 'number',
            header: 'No.',
            cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
            size: 50
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$institutions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["institutionColumns"])({
            onEdit: handleEdit,
            onDelete: handleDelete
        })
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: columns,
                data: paginatedData
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: paginatedData,
                columns: columns,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = InstitutionsSection;
var _c;
__turbopack_context__.k.register(_c, "InstitutionsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "beneficiaryColumns": (()=>beneficiaryColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
function beneficiaryColumns({ onEdit, onView, onDelete, onAddMessage, onAddRequest, onMessageIdClick, onRequestIdClick, messagesCountMap, requestsCountMap, currentUserRole }) {
    const cols = [
        {
            accessorKey: 'firstName',
            header: 'First Name',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-normal break-words max-w-xs",
                    children: row.getValue('firstName')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
        },
        {
            accessorKey: 'lastName',
            header: 'Last Name',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-normal break-words max-w-xs",
                    children: row.getValue('lastName')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
        },
        {
            id: 'messagesCount',
            header: 'Messages',
            cell: ({ row })=>messagesCountMap && row.original.id ? messagesCountMap[row.original.id] || 0 : 0
        },
        {
            id: 'addMessage',
            header: '',
            cell: ({ row })=>onAddMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    className: "px-2 py-1 rounded bg-green-600 text-white hover:bg-green-700 dark:hover:bg-green-800 text-xs",
                    onClick: ()=>onAddMessage(row.original.id),
                    children: "Add Message"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this) : null
        },
        {
            id: 'requestsCount',
            header: 'Requests',
            cell: ({ row })=>requestsCountMap && row.original.id ? requestsCountMap[row.original.id] || 0 : 0
        },
        {
            id: 'addRequest',
            header: '',
            cell: ({ row })=>onAddRequest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    className: "px-2 py-1 rounded bg-green-600 text-white hover:bg-green-700 dark:hover:bg-green-800 text-xs",
                    onClick: ()=>onAddRequest(row.original.id),
                    children: "Add Request"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this) : null
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
            id: 'actions',
            header: 'Actions',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            size: "sm",
                            variant: "outline",
                            className: "transition-colors duration-150 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-900 dark:hover:text-blue-100",
                            onClick: ()=>onView(row.original),
                            children: "View"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            size: "sm",
                            variant: "outline",
                            className: "transition-colors duration-150 hover:bg-yellow-100 dark:hover:bg-yellow-800 hover:text-yellow-900 dark:hover:text-yellow-100",
                            onClick: ()=>onEdit(row.original),
                            children: "Edit"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
        }
    ];
    if (onDelete && currentUserRole !== 'beneficiary') {
        cols.push({
            id: 'delete',
            header: 'Delete',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "destructive",
                    className: "transition-colors duration-150 hover:bg-red-600 dark:hover:bg-red-800 hover:text-white dark:hover:text-white",
                    onClick: ()=>onDelete(row.original.id),
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
        });
    }
    return cols;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BeneficiariesSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function BeneficiariesSection({ paginatedData, page, rowsPerPage, handleEdit, handleView, handleDelete, messagesCountMap, requestsCountMap, currentUserRole, TableActions, onAddMessage, onAddRequest }) {
    const columns = [
        {
            id: 'number',
            header: 'No.',
            cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
            size: 50
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beneficiaryColumns"])({
            onEdit: handleEdit,
            onView: handleView,
            onDelete: handleDelete,
            messagesCountMap,
            requestsCountMap,
            currentUserRole,
            onAddMessage,
            onAddRequest
        })
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: columns,
                data: paginatedData
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: paginatedData,
                columns: columns,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = BeneficiariesSection;
var _c;
__turbopack_context__.k.register(_c, "BeneficiariesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryMessages.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "beneficiaryMessageColumns": (()=>beneficiaryMessageColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function beneficiaryMessageColumns({ onEdit, onView, onDelete, currentUserRole, deleteId, deleteLoading }) {
    var _s = __turbopack_context__.k.signature();
    const cols = [
        {
            accessorKey: 'title',
            header: 'Title',
            cell: ({ row })=>row.getValue('title')
        },
        {
            accessorKey: 'beneficiary',
            header: 'Beneficiary',
            cell: ({ row })=>{
                const b = row.original.beneficiary;
                return b ? `${b.firstName} ${b.lastName}` : '-';
            }
        },
        {
            accessorKey: 'status',
            header: 'Status',
            cell: ({ row })=>row.getValue('status') || '-'
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
            id: 'actions',
            header: 'Actions',
            cell: _s(({ row })=>{
                _s();
                const [deleteHovered, setDeleteHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
                const [viewHovered, setViewHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
                const [editHovered, setEditHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
                const isDeleting = onDelete && currentUserRole !== 'beneficiary' && deleteId === row.original.id && deleteLoading;
                // Theme-aware hover classes
                const viewBtnClass = 'transition-colors duration-150 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-900 dark:hover:text-blue-100';
                const editBtnClass = 'transition-colors duration-150 hover:bg-yellow-100 dark:hover:bg-yellow-800 hover:text-yellow-900 dark:hover:text-yellow-100';
                const deleteBtnClass = 'transition-colors duration-150 hover:bg-red-600 dark:hover:bg-red-800 hover:text-white dark:hover:text-white';
                // For delete "in progress" warning style
                const deletingStyle = {
                    cursor: 'not-allowed',
                    backgroundColor: '#ffa726',
                    borderColor: '#ffa726',
                    color: '#fff'
                };
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            onMouseEnter: ()=>setViewHovered(true),
                            onMouseLeave: ()=>setViewHovered(false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "sm",
                                variant: "outline",
                                className: viewBtnClass,
                                onClick: ()=>onView(row.original),
                                disabled: isDeleting,
                                children: "View"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryMessages.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryMessages.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            onMouseEnter: ()=>setEditHovered(true),
                            onMouseLeave: ()=>setEditHovered(false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "sm",
                                variant: "outline",
                                className: editBtnClass,
                                onClick: ()=>onEdit(row.original),
                                disabled: isDeleting,
                                children: "Edit"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryMessages.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryMessages.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        onDelete && currentUserRole !== 'beneficiary' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            onMouseEnter: ()=>setDeleteHovered(true),
                            onMouseLeave: ()=>setDeleteHovered(false),
                            style: {
                                display: 'inline-block'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "sm",
                                variant: isDeleting ? 'warning' : 'destructive',
                                className: deleteBtnClass,
                                style: isDeleting ? deletingStyle : {},
                                onClick: ()=>!isDeleting && onDelete(row.original.id),
                                disabled: isDeleting,
                                children: isDeleting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "This record will be deleted permanently"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryMessages.tsx",
                                        lineNumber: 154,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryMessages.tsx",
                                    lineNumber: 153,
                                    columnNumber: 21
                                }, this) : 'Delete'
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryMessages.tsx",
                                lineNumber: 143,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryMessages.tsx",
                            lineNumber: 138,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryMessages.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this);
            }, "t/k/R1wE37Ntxi+CvxWTtDIrlXs=")
        }
    ];
    return cols;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/BeneficiaryMessagesSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BeneficiaryMessagesSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaryMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryMessages.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function BeneficiaryMessagesSection({ paginatedData, page, rowsPerPage, handleEdit, handleView, handleDelete, currentUserRole, TableActions, deleteId, deleteLoading }) {
    const columns = [
        {
            id: 'number',
            header: 'No.',
            cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
            size: 50
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaryMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beneficiaryMessageColumns"])({
            onEdit: handleEdit,
            onView: handleView,
            onDelete: handleDelete,
            currentUserRole,
            deleteId,
            deleteLoading
        })
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: columns,
                data: paginatedData
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiaryMessagesSection.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: paginatedData,
                columns: columns,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiaryMessagesSection.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = BeneficiaryMessagesSection;
var _c;
__turbopack_context__.k.register(_c, "BeneficiaryMessagesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryRequestResponse.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "beneficiaryRequestResponseColumns": (()=>beneficiaryRequestResponseColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
function beneficiaryRequestResponseColumns({ onEdit, onDelete }) {
    return [
        {
            accessorKey: 'request',
            header: 'Request Title',
            cell: ({ row })=>row.original.request?.title || '-'
        },
        {
            accessorKey: 'responseText',
            header: 'Response Text',
            cell: ({ row })=>{
                const val = row.getValue('responseText');
                if (!val) return '';
                if (typeof val === 'string') return val;
                try {
                    return JSON.stringify(val);
                } catch  {
                    return '[object]';
                }
            }
        },
        {
            accessorKey: 'responder',
            header: 'Responder',
            cell: ({ row })=>{
                const responder = row.original.responder;
                return responder ? `${responder.firstName} ${responder.lastName}${responder.email ? ' (' + responder.email + ')' : ''}` : '-';
            }
        },
        {
            accessorKey: 'respondedAt',
            header: 'Responded At',
            cell: ({ row })=>row.getValue('respondedAt') ? new Date(row.getValue('respondedAt')).toLocaleDateString() : ''
        },
        {
            accessorKey: 'responseUpdatedAt',
            header: 'Updated At',
            cell: ({ row })=>row.getValue('responseUpdatedAt') ? new Date(row.getValue('responseUpdatedAt')).toLocaleDateString() : ''
        },
        {
            id: 'actions',
            header: 'Actions',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    onClick: ()=>onEdit(row.original),
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryRequestResponse.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
        },
        {
            id: 'delete',
            header: 'Delete',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "destructive",
                    onClick: ()=>onDelete(row.original.id),
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryRequestResponse.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
        }
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/BeneficiaryRequestsSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BeneficiaryRequestResponseSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaryRequestResponse$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryRequestResponse.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function BeneficiaryRequestResponseSection({ paginatedData, page, rowsPerPage, handleEdit, handleDelete, TableActions }) {
    const columns = [
        {
            id: 'number',
            header: 'No.',
            cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
            size: 50
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaryRequestResponse$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beneficiaryRequestResponseColumns"])({
            onEdit: handleEdit,
            onDelete: handleDelete
        })
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: columns,
                data: paginatedData
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiaryRequestsSection.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: paginatedData,
                columns: columns,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiaryRequestsSection.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = BeneficiaryRequestResponseSection;
var _c;
__turbopack_context__.k.register(_c, "BeneficiaryRequestResponseSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryRequests.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "beneficiaryRequestColumns": (()=>beneficiaryRequestColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
function beneficiaryRequestColumns({ onEdit, onDelete }) {
    return [
        {
            accessorKey: 'title',
            header: 'Title',
            cell: ({ row })=>row.getValue('title')
        },
        {
            accessorKey: 'beneficiaryRequestText',
            header: 'Request Text',
            cell: ({ row })=>{
                const val = row.getValue('beneficiaryRequestText');
                if (!val) return '';
                if (typeof val === 'string') return val;
                try {
                    return JSON.stringify(val);
                } catch  {
                    return '[object]';
                }
            }
        },
        {
            accessorKey: 'beneficiary',
            header: 'Beneficiary',
            cell: ({ row })=>{
                const beneficiary = row.original.beneficiary;
                return beneficiary ? `${beneficiary.firstName} ${beneficiary.lastName}` : '-';
            }
        },
        {
            accessorKey: 'status',
            header: 'Status',
            cell: ({ row })=>row.getValue('status') || '-'
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
            id: 'actions',
            header: 'Actions',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    onClick: ()=>onEdit(row.original),
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryRequests.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
        },
        {
            id: 'delete',
            header: 'Delete',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "destructive",
                    onClick: ()=>onDelete(row.original.id),
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryRequests.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
        }
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/BeneficiaryRequestResponseSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BeneficiaryRequestsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaryRequests$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryRequests.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function BeneficiaryRequestsSection({ paginatedData, page, rowsPerPage, handleEdit, handleDelete, responsesCountMap, TableActions, onRespond }) {
    const columns = [
        {
            id: 'number',
            header: 'No.',
            cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
            size: 50
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaryRequests$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beneficiaryRequestColumns"])({
            onEdit: handleEdit,
            onDelete: handleDelete
        }),
        {
            id: 'responsesCount',
            header: 'Responses',
            cell: ({ row })=>responsesCountMap[row.original.id] || 0
        },
        {
            id: 'respond',
            header: 'Respond',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-2 py-1 rounded bg-green-600 text-white hover:bg-green-700 text-xs",
                    onClick: ()=>onRespond(row.original.id),
                    children: "Respond"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiaryRequestResponseSection.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: columns,
                data: paginatedData
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiaryRequestResponseSection.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: paginatedData,
                columns: columns,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiaryRequestResponseSection.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = BeneficiaryRequestsSection;
var _c;
__turbopack_context__.k.register(_c, "BeneficiaryRequestsSection");
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
"[project]/app/(admin)/admin/dashboard/components/sections/ChartsSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ChartsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chartSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/chartSection.tsx [app-client] (ecmascript)");
'use client';
;
;
function ChartsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chartSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ChartsSection.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = ChartsSection;
var _c;
__turbopack_context__.k.register(_c, "ChartsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/users.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "userColumns": (()=>userColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
"use client";
;
;
;
function userColumns({ onEdit, onDelete }) {
    return [
        // --- Image column first ---
        {
            id: "image",
            header: "Image",
            cell: ({ row })=>{
                const src = row.original.image;
                return src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    alt: row.original.username,
                    className: "w-8 h-8 rounded-full object-cover border"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/users.tsx",
                    lineNumber: 25,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center justify-center w-8 h-8 rounded-full bg-muted border",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                        className: "w-6 h-6 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/users.tsx",
                        lineNumber: 28,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/users.tsx",
                    lineNumber: 27,
                    columnNumber: 13
                }, this);
            },
            size: 48
        },
        {
            accessorKey: "firstName",
            header: "First Name"
        },
        {
            accessorKey: "lastName",
            header: "Last Name"
        },
        {
            accessorKey: "username",
            header: "Username"
        },
        {
            accessorKey: "email",
            header: "Email"
        },
        {
            accessorKey: "role",
            header: "Role"
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            size: "sm",
                            variant: "outline",
                            onClick: ()=>onEdit(row.original),
                            children: "Edit"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/users.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            size: "sm",
                            variant: "destructive",
                            onClick: ()=>onDelete(row.original.id),
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/users.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/users.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
        }
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/AdminSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$users$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/users.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function AdminSection({ paginatedData, page, rowsPerPage, handleEdit, handleDelete, TableActions }) {
    const columns = [
        {
            id: 'number',
            header: 'No.',
            cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
            size: 50
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$users$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userColumns"])({
            onEdit: handleEdit,
            onDelete: handleDelete
        })
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: columns,
                data: paginatedData
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/AdminSection.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: paginatedData,
                columns: columns,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/AdminSection.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = AdminSection;
var _c;
__turbopack_context__.k.register(_c, "AdminSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/homepage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "homepageColumns": (()=>homepageColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
function homepageColumns({ onEdit, onDelete }) {
    return [
        {
            accessorKey: 'id',
            header: 'ID'
        },
        {
            accessorKey: 'heroVideo',
            header: 'Hero Video',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "truncate max-w-xs",
                    children: row.getValue('heroVideo')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/homepage.tsx",
                    lineNumber: 22,
                    columnNumber: 26
                }, this)
        },
        {
            accessorKey: 'vision',
            header: 'Vision',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-normal break-words max-w-xs",
                    children: row.getValue('vision')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/homepage.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
        },
        {
            accessorKey: 'mission',
            header: 'Mission',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-normal break-words max-w-xs",
                    children: row.getValue('mission')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/homepage.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
        },
        {
            accessorKey: 'focus',
            header: 'Focus',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-normal break-words max-w-xs",
                    children: row.getValue('focus')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/homepage.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
        },
        {
            accessorKey: 'coreValues',
            header: 'Core Values',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-normal break-words max-w-xs",
                    children: row.getValue('coreValues')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/homepage.tsx",
                    lineNumber: 49,
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
            id: 'actions',
            header: 'Actions',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    onClick: ()=>onEdit(row.original),
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/homepage.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
        },
        {
            id: 'delete',
            header: 'Delete',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "destructive",
                    onClick: ()=>onDelete(row.original.id),
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/homepage.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
        }
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/messages.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "messageColumns": (()=>messageColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
function messageColumns({ onEdit, onDelete }) {
    return [
        {
            accessorKey: 'id',
            header: 'ID'
        },
        {
            accessorKey: 'title',
            header: 'Title',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-normal break-words max-w-xs",
                    children: row.getValue('title')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/messages.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
        },
        {
            accessorKey: 'name',
            header: 'Name'
        },
        {
            accessorKey: 'affiliated',
            header: 'Affiliated'
        },
        {
            id: 'message',
            accessorKey: 'message',
            header: 'Message',
            cell: ({ getValue })=>{
                const value = getValue();
                if (!value) return '';
                const words = value.split(/\s+/);
                return words.length > 10 ? words.slice(0, 10).join(' ') + ' ...' : value;
            }
        },
        {
            accessorKey: 'messageStatus',
            header: 'Status'
        },
        {
            id: 'creator',
            header: 'Creator',
            cell: ({ row })=>{
                const creator = row.original.creator;
                if (!creator) return '--';
                return `${creator.firstName} ${creator.lastName}`;
            }
        },
        {
            id: 'approver',
            header: 'Approver',
            cell: ({ row })=>{
                const approver = row.original.approver;
                if (!approver) return '--';
                return `${approver.firstName} ${approver.lastName}`;
            }
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
            id: 'actions',
            header: 'Actions',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    onClick: ()=>onEdit(row.original),
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/messages.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
        },
        {
            id: 'delete',
            header: 'Delete',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "destructive",
                    onClick: ()=>onDelete(row.original.id),
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/messages.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
        }
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/HomePageSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePageSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$homepage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/homepage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$messages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/messages.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function HomePageSection({ homepageData, messagesData, handleEdit, handleDelete, showExecMsgAddButton, onAddExecMsg, TableActions, homepageRef, messagesRef }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end mb-2",
                        children: showExecMsgAddButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700",
                            onClick: onAddExecMsg,
                            children: "Add New Executive Message"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/HomePageSection.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/HomePageSection.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesRef,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                            columns: [
                                {
                                    id: 'number',
                                    header: 'No.',
                                    cell: ({ row })=>row.index + 1,
                                    size: 50
                                },
                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$messages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messageColumns"])({
                                    onEdit: handleEdit,
                                    onDelete: (id)=>handleDelete('executive-messages', id)
                                })
                            ],
                            data: messagesData || []
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/HomePageSection.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/HomePageSection.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                            data: messagesData || [],
                            columns: [
                                {
                                    id: 'number',
                                    header: 'No.',
                                    cell: ({ row })=>row.index + 1,
                                    size: 50
                                },
                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$messages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messageColumns"])({
                                    onEdit: handleEdit,
                                    onDelete: (id)=>handleDelete('executive-messages', id)
                                })
                            ],
                            tableRef: messagesRef
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/HomePageSection.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/HomePageSection.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/HomePageSection.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: homepageRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                    columns: [
                        {
                            id: 'number',
                            header: 'No.',
                            cell: ({ row })=>row.index + 1,
                            size: 50
                        },
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$homepage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["homepageColumns"])({
                            onEdit: handleEdit,
                            onDelete: (id)=>handleDelete('homepage-content', id)
                        })
                    ],
                    data: homepageData || []
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/HomePageSection.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/HomePageSection.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                    data: homepageData || [],
                    columns: [
                        {
                            id: 'number',
                            header: 'No.',
                            cell: ({ row })=>row.index + 1,
                            size: 50
                        },
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$homepage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["homepageColumns"])({
                            onEdit: handleEdit,
                            onDelete: (id)=>handleDelete('homepage-content', id)
                        })
                    ],
                    tableRef: homepageRef
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/HomePageSection.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/HomePageSection.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/HomePageSection.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = HomePageSection;
var _c;
__turbopack_context__.k.register(_c, "HomePageSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/createProjectForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateProjectForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const EditorClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/components/editor/editor-client.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/components/editor/editor-client.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = EditorClient;
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
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        content: {},
        files: null,
        projectStatus: "active",
        publishStatus: "draft",
        images: []
    });
    const [imagesToRemove, setImagesToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateProjectForm.useEffect": ()=>{
            if (initialData) {
                setForm({
                    "CreateProjectForm.useEffect": (prev)=>({
                            ...prev,
                            title: initialData.title || "",
                            content: initialData.content || {},
                            projectStatus: initialData.projectStatus || "active",
                            publishStatus: initialData.publishStatus || "draft",
                            images: initialData.images || []
                        })
                }["CreateProjectForm.useEffect"]);
            }
        }
    }["CreateProjectForm.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "w-full max-w-4xl mx-auto mt-4 space-y-6 p-6 bg-background rounded-xl shadow",
        encType: "multipart/form-data",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold mb-4 text-center",
                children: mode === "edit" ? "Edit Project" : "Create New Project"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "title",
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "content",
                        children: "Content"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorClient, {
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
            mode === "edit" && form.images && form.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Current Images"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4",
                        children: form.images.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: img,
                                        alt: "Project",
                                        className: "w-24 h-24 object-cover rounded border"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                                        lineNumber: 212,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "files",
                        children: mode === "edit" ? "Image Upload (optional, will replace/add to current images)" : "Image Upload (required)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "publishStatus",
                        children: "Publish Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "publishStatus",
                        name: "publishStatus",
                        value: form.publishStatus,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: publishOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "projectStatus",
                        children: "Project Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "projectStatus",
                        name: "projectStatus",
                        value: form.projectStatus,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: projectStatusOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading,
                        className: "w-1/2 bg-[#9f004d]",
                        children: loading ? mode === "edit" ? "Updating..." : "Creating..." : mode === "edit" ? "Update Project" : "Create Project"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
_s(CreateProjectForm, "3ieSlCp6PXjj7QSTR9hcfnEQ3uo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = CreateProjectForm;
var _c, _c1;
__turbopack_context__.k.register(_c, "EditorClient");
__turbopack_context__.k.register(_c1, "CreateProjectForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/createReportForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateReportForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: initialData?.title || "",
        publishStatus: initialData?.publishStatus || "draft"
    });
    // Store which existing images/files are marked for deletion
    const [existingImages, setExistingImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.images || []);
    const [existingFiles, setExistingFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.files || []);
    const [imageFiles, setImageFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pdfFiles, setPdfFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateReportForm.useEffect": ()=>{
            if (mode === "edit" && initialData) {
                setForm({
                    title: initialData.title || "",
                    publishStatus: initialData.publishStatus || "draft"
                });
                setExistingImages(initialData.images || []);
                setExistingFiles(initialData.files || []);
            }
        }
    }["CreateReportForm.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "max-w-2xl mx-auto space-y-6 p-6 bg-background rounded-xl shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-semibold text-xl mb-4",
                children: mode === "edit" ? "Edit Report" : "Create New Report"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "title",
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            mode === "edit" && initialData?.images && initialData.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Existing Images"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: existingImages.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "images",
                        children: "Images (PNG, JPG, JPEG)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            mode === "edit" && initialData?.files && initialData.files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Existing PDF Files"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: existingFiles.map((file, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "files",
                        children: "PDF Files"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "publishStatus",
                        children: "Publish Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "publishStatus",
                        name: "publishStatus",
                        value: form.publishStatus,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: publishOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading,
                        className: "flex-1 bg-[#9f004d] hover:bg-[#7c003c] text-white",
                        children: loading ? mode === "edit" ? "Updating..." : "Creating..." : mode === "edit" ? "Update Report" : "Create Report"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createReportForm.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
_s(CreateReportForm, "99VVcrp6da5tCEq6ZEVEkkzpu9c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CreateReportForm;
var _c;
__turbopack_context__.k.register(_c, "CreateReportForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/createEventForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateEventForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
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
const EditorClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/components/editor/editor-client.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/components/editor/editor-client.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = EditorClient;
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
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
    const [imagesToRemove, setImagesToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fileToRemove, setFileToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [removeBanner, setRemoveBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateEventForm.useEffect": ()=>{
            if (initialData) {
                console.log('initialData.eventBanner:', initialData.eventBanner);
                const toDatetimeLocal = {
                    "CreateEventForm.useEffect.toDatetimeLocal": (s)=>s ? new Date(s).toISOString().slice(0, 16) : ''
                }["CreateEventForm.useEffect.toDatetimeLocal"];
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
        }
    }["CreateEventForm.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "w-full max-w-4xl mx-auto mt-4 space-y-6 p-6 bg-background rounded-xl shadow",
        encType: "multipart/form-data",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold mb-4 text-center",
                children: mode === 'edit' ? 'Edit Event' : 'Create New Event'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventTitle",
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventDescription",
                        children: "Description"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorClient, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventDetails",
                        children: "Additional Details"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorClient, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventLocation",
                        children: "Location"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "bannerFile",
                        children: mode === 'edit' ? 'Banner Image (optional, will replace current)' : 'Banner Image (required)'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            mode === 'edit' && form.eventBanner && !removeBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Current Banner Image"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: form.eventBanner,
                                alt: "Current Event Banner",
                                className: "w-full max-w-xs object-cover rounded border"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            mode === 'edit' && form.eventImages && form.eventImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Current Images"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4",
                        children: form.eventImages.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: img,
                                        alt: "Event",
                                        className: "w-24 h-24 object-cover rounded border"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                                        lineNumber: 371,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "files",
                        children: mode === 'edit' ? 'Event Images (optional, will add/replace)' : 'Event Images (optional)'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            mode === 'edit' && form.eventFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Current Event File"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 403,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventFileUpload",
                        children: "Event File (optional, e.g. PDF, DOCX)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventStartDate",
                        children: "Start Date"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventEndDate",
                        children: "End Date"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventTags",
                        children: "Event Tags (comma separated)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "publishStatus",
                        children: "Publish Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 472,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "publishStatus",
                        name: "publishStatus",
                        value: form.publishStatus,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: publishOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventStatus",
                        children: "Event Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 489,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "eventStatus",
                        name: "eventStatus",
                        value: form.eventStatus,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: eventStatusOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "eventAttendance",
                        children: "Attendance Type"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 506,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "eventAttendance",
                        name: "eventAttendance",
                        value: form.eventAttendance,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: attendanceOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "maxAttendees",
                        children: "Maximum Attendees (optional)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-center gap-2 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading,
                        className: "w-1/3 bg-[#9f004d]",
                        children: loading ? mode === 'edit' ? 'Updating...' : 'Creating...' : mode === 'edit' ? 'Update Event' : 'Create Event'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createEventForm.tsx",
                        lineNumber: 535,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
                    mode === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
_s(CreateEventForm, "INFIh85goyg9Nf0vv64s7h+6HxU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = CreateEventForm;
var _c, _c1;
__turbopack_context__.k.register(_c, "EditorClient");
__turbopack_context__.k.register(_c1, "CreateEventForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateInstitutionForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
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
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
    const [imagesToRemove, setImagesToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateInstitutionForm.useEffect": ()=>{
            if (initialData) {
                setForm({
                    "CreateInstitutionForm.useEffect": (prev)=>({
                            ...prev,
                            name: initialData.name || '',
                            email: initialData.email || '',
                            phone: initialData.phone || '',
                            logo: initialData.logo || '',
                            logoFile: null,
                            headName: initialData.headName || '',
                            institutionType: initialData.institutionType || 'education',
                            institutionImages: initialData.institutionImages || [],
                            locations: initialData.locations && initialData.locations.length > 0 ? initialData.locations.map({
                                "CreateInstitutionForm.useEffect": (loc)=>({
                                        id: loc.id,
                                        locationName: loc.locationName || '',
                                        latitude: loc.latitude?.toString() || '',
                                        longitude: loc.longitude?.toString() || ''
                                    })
                            }["CreateInstitutionForm.useEffect"]) : [
                                {
                                    id: undefined,
                                    locationName: '',
                                    latitude: '',
                                    longitude: ''
                                }
                            ]
                        })
                }["CreateInstitutionForm.useEffect"]);
            }
        }
    }["CreateInstitutionForm.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "w-full max-w-4xl mx-auto mt-4 space-y-6 p-6 bg-background rounded-xl shadow",
        encType: "multipart/form-data",
        autoComplete: "off",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold mb-4 text-center",
                children: mode === 'edit' ? 'Edit Institution' : 'Create New Institution'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                lineNumber: 387,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "name",
                        children: INSTITUTION_LABEL
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "email",
                        children: EMAIL_LABEL
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "phone",
                        children: PHONE_LABEL
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
                    errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "logoFile",
                        children: mode === 'edit' ? 'Logo (optional, will replace current)' : 'Logo (required)'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
                    errors.logoFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-600 text-xs",
                        children: errors.logoFile
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 444,
                        columnNumber: 29
                    }, this),
                    form.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "headName",
                        children: HEAD_LABEL
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 454,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
                    errors.headName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institutionType",
                        children: "Institution Type"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "institutionType",
                        name: "institutionType",
                        value: form.institutionType,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: institutionTypeOptions.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            mode === 'edit' && form.institutionImages && form.institutionImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Current Images"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 484,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4",
                        children: form.institutionImages.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: img,
                                        alt: "Institution",
                                        className: "w-24 h-24 object-cover rounded border"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                                        lineNumber: 488,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "files",
                        children: mode === 'edit' ? 'Image Upload (optional, will replace/add to current images)' : 'Image Upload (required)'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 506,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
                    errors.files && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Locations"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this),
                    form.locations.map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 items-end mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
                                form.locations.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading,
                        className: "w-1/2 bg-[#9f004d]",
                        children: loading ? mode === 'edit' ? 'Updating...' : 'Creating...' : mode === 'edit' ? 'Update Institution' : 'Create Institution'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx",
                        lineNumber: 564,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
            mode === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
_s(CreateInstitutionForm, "IL08j0dqdyrxbRDwzTrqmNk7ZGU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = CreateInstitutionForm;
var _c;
__turbopack_context__.k.register(_c, "CreateInstitutionForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateBeneficiaryForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [institutions, setInstitutions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [institutionsLoading, setInstitutionsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: initialData?.firstName || '',
        lastName: initialData?.lastName || '',
        image: initialData?.image || undefined,
        images: initialData?.images || [],
        gender: initialData?.gender || 'male',
        email: initialData?.email || '',
        phone: initialData?.phone || '',
        dateOfBirth: initialData?.dateOfBirth ? new Date(initialData.dateOfBirth).toISOString().split('T')[0] : '',
        beneficiaryStatus: initialData?.beneficiaryStatus || 'draft',
        institutionId: initialData?.institutionId || '',
        beneficiaryRequests: initialData?.beneficiaryRequests || [],
        beneficiaryMessages: initialData?.beneficiaryMessages || []
    });
    const [requests, setRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.beneficiaryRequests || []);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.beneficiaryMessages || []);
    const [imageFiles, setImageFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showInstitutionForm, setShowInstitutionForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newInstitution, setNewInstitution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        headName: '',
        institutionType: 'education',
        logoFile: null
    });
    const [creatingInstitution, setCreatingInstitution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [institutionError, setInstitutionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateBeneficiaryForm.useEffect": ()=>{
            setInstitutionsLoading(true);
            fetch('/api/institutions').then({
                "CreateBeneficiaryForm.useEffect": (res)=>res.json()
            }["CreateBeneficiaryForm.useEffect"]).then({
                "CreateBeneficiaryForm.useEffect": (data)=>{
                    setInstitutions(data.map({
                        "CreateBeneficiaryForm.useEffect": (i)=>({
                                id: i.id,
                                name: i.name
                            })
                    }["CreateBeneficiaryForm.useEffect"]));
                    setInstitutionsLoading(false);
                }
            }["CreateBeneficiaryForm.useEffect"]).catch({
                "CreateBeneficiaryForm.useEffect": ()=>setInstitutionsLoading(false)
            }["CreateBeneficiaryForm.useEffect"]);
        }
    }["CreateBeneficiaryForm.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateBeneficiaryForm.useEffect": ()=>{
            if (mode === 'edit' && initialData) {
                setForm({
                    ...form,
                    ...initialData,
                    dateOfBirth: initialData.dateOfBirth ? new Date(initialData.dateOfBirth).toISOString().split('T')[0] : ''
                });
                setRequests(initialData.beneficiaryRequests || []);
                setMessages(initialData.beneficiaryMessages || []);
            }
        // eslint-disable-next-line
        }
    }["CreateBeneficiaryForm.useEffect"], [
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
    // Requests logic
    const handleRequestChange = (idx, field, value)=>{
        setRequests((prev)=>{
            const newArr = [
                ...prev
            ];
            newArr[idx] = {
                ...newArr[idx],
                [field]: value
            };
            return newArr;
        });
    };
    const addRequest = ()=>setRequests((prev)=>[
                ...prev,
                {
                    title: '',
                    beneficiaryRequestText: '',
                    status: 'draft'
                }
            ]);
    const removeRequest = (idx)=>setRequests((prev)=>prev.filter((_, i)=>i !== idx));
    // Messages logic
    const handleMessageChange = (idx, field, value)=>{
        setMessages((prev)=>{
            const newArr = [
                ...prev
            ];
            newArr[idx] = {
                ...newArr[idx],
                [field]: value
            };
            return newArr;
        });
    };
    const addMessage = ()=>setMessages((prev)=>[
                ...prev,
                {
                    title: '',
                    message: '',
                    status: 'draft'
                }
            ]);
    const removeMessage = (idx)=>setMessages((prev)=>prev.filter((_, i)=>i !== idx));
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
            // 1. Create Beneficiary via API
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
            // 2. POST Requests to /api/beneficiaryRequests
            for (const req of requests){
                await fetch('/api/beneficiaryRequests', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        beneficiaryId: beneficiary.id,
                        title: req.title,
                        beneficiaryRequestText: req.beneficiaryRequestText,
                        status: req.status || 'draft'
                    })
                });
            }
            // 3. POST Messages to /api/beneficiaryMessages
            for (const msg of messages){
                await fetch('/api/beneficiaryMessages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        beneficiaryId: beneficiary.id,
                        title: msg.title,
                        beneficiaryMessageText: msg.message,
                        status: msg.status || 'draft'
                    })
                });
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "max-w-2xl mx-auto space-y-6 p-6 bg-background rounded-xl shadow",
        encType: "multipart/form-data",
        autoComplete: "off",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-semibold text-xl mb-4",
                children: mode === 'edit' ? 'Edit Beneficiary' : 'Create New Beneficiary'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "firstName",
                        children: "First Name"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "firstName",
                        name: "firstName",
                        value: form.firstName,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "lastName",
                        children: "Last Name"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "lastName",
                        name: "lastName",
                        value: form.lastName,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "gender",
                        children: "Gender"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 377,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "gender",
                        name: "gender",
                        value: form.gender,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        required: true,
                        children: genderOptions.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: g,
                                children: g.charAt(0).toUpperCase() + g.slice(1)
                            }, g, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "dateOfBirth",
                        children: "Date of Birth"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "dateOfBirth",
                        name: "dateOfBirth",
                        type: "date",
                        value: form.dateOfBirth,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "email",
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 405,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "email",
                        name: "email",
                        type: "email",
                        value: form.email,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 406,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 404,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "phone",
                        children: "Phone"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "phone",
                        name: "phone",
                        type: "tel",
                        value: form.phone,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 408,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "images",
                        children: "Profile Images (PNG, JPG, JPEG)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "images",
                        name: "images",
                        type: "file",
                        accept: ".png,.jpg,.jpeg",
                        multiple: true,
                        onChange: handleImageChange
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-muted-foreground",
                        children: imageFiles.map((file)=>file.name).join(', ')
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 412,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institutionId",
                        children: "Institution"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "None"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                        lineNumber: 441,
                                        columnNumber: 13
                                    }, this),
                                    institutions.map((inst)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: inst.id,
                                            children: inst.name
                                        }, inst.id, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                            lineNumber: 443,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "outline",
                                className: "ml-2",
                                onClick: ()=>setShowInstitutionForm((val)=>!val),
                                children: "Add new institution"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, this),
            showInstitutionForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-md p-4 mt-2 bg-muted space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_name",
                        children: "Institution Name*"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 461,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "institution_name",
                        name: "name",
                        value: newInstitution.name,
                        onChange: handleInstitutionField,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 462,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_type",
                        children: "Type*"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 469,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "institution_type",
                        name: "institutionType",
                        value: newInstitution.institutionType,
                        onChange: handleInstitutionField,
                        required: true,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: institutionTypeOptions.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: type,
                                children: type.replace(/_/g, ' ')
                            }, type, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                lineNumber: 479,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 470,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_logo",
                        children: "Logo*"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 484,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "institution_logo",
                        name: "logoFile",
                        type: "file",
                        accept: ".png,.jpg,.jpeg",
                        onChange: handleInstitutionLogo,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 485,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_email",
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 493,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "institution_email",
                        name: "email",
                        value: newInstitution.email,
                        onChange: handleInstitutionField
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 494,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_phone",
                        children: "Phone"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 500,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "institution_phone",
                        name: "phone",
                        value: newInstitution.phone,
                        onChange: handleInstitutionField
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 501,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_headName",
                        children: "Head Name"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 507,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "institution_headName",
                        name: "headName",
                        value: newInstitution.headName,
                        onChange: handleInstitutionField
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 508,
                        columnNumber: 11
                    }, this),
                    institutionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-600 text-xs",
                        children: institutionError
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 514,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                className: "bg-blue-600 hover:bg-blue-700 text-white",
                                disabled: creatingInstitution,
                                onClick: handleCreateInstitution,
                                children: creatingInstitution ? 'Adding...' : 'Add Institution'
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                lineNumber: 516,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "outline",
                                className: "text-blue-600 border-blue-600 hover:bg-blue-50",
                                onClick: ()=>setShowInstitutionForm(false),
                                disabled: creatingInstitution,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                lineNumber: 524,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 515,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 460,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Beneficiary Requests"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 538,
                        columnNumber: 9
                    }, this),
                    requests.map((req, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border p-3 rounded-md mb-2 bg-muted",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            name: `request-title-${idx}`,
                                            placeholder: "Title",
                                            value: req.title,
                                            onChange: (e)=>handleRequestChange(idx, 'title', e.target.value),
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                            lineNumber: 542,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "destructive",
                                            onClick: ()=>removeRequest(idx),
                                            children: "Remove"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                            lineNumber: 549,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                    lineNumber: 541,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    name: `request-text-${idx}`,
                                    placeholder: "Request Text (JSON)",
                                    value: typeof req.beneficiaryRequestText === 'string' ? req.beneficiaryRequestText : JSON.stringify(req.beneficiaryRequestText),
                                    onChange: (e)=>handleRequestChange(idx, 'beneficiaryRequestText', e.target.value),
                                    className: "mt-2",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                    lineNumber: 553,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: req.status || 'draft',
                                    onChange: (e)=>handleRequestChange(idx, 'status', e.target.value),
                                    className: "mt-2",
                                    children: publishOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: opt,
                                            children: opt
                                        }, opt, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                            lineNumber: 571,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                    lineNumber: 565,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                            lineNumber: 540,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        onClick: addRequest,
                        children: "Add Request"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 578,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 537,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Beneficiary Messages"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 584,
                        columnNumber: 9
                    }, this),
                    messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border p-3 rounded-md mb-2 bg-muted",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            name: `message-title-${idx}`,
                                            placeholder: "Title",
                                            value: msg.title,
                                            onChange: (e)=>handleMessageChange(idx, 'title', e.target.value),
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                            lineNumber: 588,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "destructive",
                                            onClick: ()=>removeMessage(idx),
                                            children: "Remove"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                            lineNumber: 595,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                    lineNumber: 587,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    name: `message-text-${idx}`,
                                    placeholder: "Message (JSON)",
                                    value: typeof msg.message === 'string' ? msg.message : JSON.stringify(msg.message),
                                    onChange: (e)=>handleMessageChange(idx, 'message', e.target.value),
                                    className: "mt-2",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                    lineNumber: 599,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: msg.status || 'draft',
                                    onChange: (e)=>handleMessageChange(idx, 'status', e.target.value),
                                    className: "mt-2",
                                    children: publishOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: opt,
                                            children: opt
                                        }, opt, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                            lineNumber: 613,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                    lineNumber: 607,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                            lineNumber: 586,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        onClick: addMessage,
                        children: "Add Message"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 620,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 583,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "beneficiaryStatus",
                        children: "Beneficiary Publish Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 626,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "beneficiaryStatus",
                        name: "beneficiaryStatus",
                        value: form.beneficiaryStatus,
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: publishOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: status,
                                children: status
                            }, status, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                                lineNumber: 635,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 627,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 625,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading,
                        className: "flex-1 bg-[#9f004d] hover:bg-[#7c003c] text-white",
                        children: loading ? mode === 'edit' ? 'Updating...' : 'Creating...' : mode === 'edit' ? 'Update Beneficiary' : 'Create Beneficiary'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 643,
                        columnNumber: 9
                    }, this),
                    onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        className: "flex-1 border-[#9f004d] text-[#9f004d] hover:bg-[#f5e3ec]",
                        onClick: onCancel,
                        disabled: loading,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 657,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 642,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
        lineNumber: 347,
        columnNumber: 5
    }, this);
}
_s(CreateBeneficiaryForm, "63ccwkojjUhjwfsz9/YaNijr5Gs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CreateBeneficiaryForm;
var _c;
__turbopack_context__.k.register(_c, "CreateBeneficiaryForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateBeneficiaryMessageForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const s = (v)=>typeof v === 'string' ? v : '';
const normalizeId = (v)=>v && v !== 'undefined' && v !== 'null' ? v : '';
function CreateBeneficiaryMessageForm({ beneficiaryId, editId, initialData, onSuccess, onCancel }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const role = session?.user?.role ?? 'guest';
    const isBeneficiary = role === 'beneficiary';
    // robust edit detection
    const effectiveEditId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateBeneficiaryMessageForm.useMemo[effectiveEditId]": ()=>normalizeId(editId) || normalizeId(initialData?.id)
    }["CreateBeneficiaryMessageForm.useMemo[effectiveEditId]"], [
        editId,
        initialData?.id
    ]);
    const isEditing = Boolean(effectiveEditId);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        beneficiaryId: s(beneficiaryId),
        title: '',
        beneficiaryMessageText: '',
        status: 'draft'
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingInitial, setLoadingInitial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isEditing && !initialData);
    // Stringify any JSON for the input value
    const toText = (msg)=>{
        if (typeof msg === 'string') return msg;
        try {
            return JSON.stringify(msg ?? '', null, 2);
        } catch  {
            return '';
        }
    };
    // Load for edit or set create defaults
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateBeneficiaryMessageForm.useEffect": ()=>{
            if (initialData) {
                setForm({
                    beneficiaryId: s(initialData.beneficiaryId) || s(beneficiaryId),
                    title: s(initialData.title),
                    beneficiaryMessageText: toText(initialData.beneficiaryMessageText),
                    status: initialData.status ?? 'draft'
                });
                setLoadingInitial(false);
                return;
            }
            if (isEditing && effectiveEditId) {
                setLoadingInitial(true);
                fetch(`/api/beneficiaryMessages/${effectiveEditId}`).then({
                    "CreateBeneficiaryMessageForm.useEffect": (res)=>{
                        if (!res.ok) throw new Error('Failed to fetch beneficiary message');
                        return res.json();
                    }
                }["CreateBeneficiaryMessageForm.useEffect"]).then({
                    "CreateBeneficiaryMessageForm.useEffect": (data)=>{
                        setForm({
                            beneficiaryId: s(data.beneficiaryId) || s(beneficiaryId),
                            title: s(data.title),
                            beneficiaryMessageText: toText(data.beneficiaryMessageText),
                            status: publishOptions.includes(data.status) ? data.status : 'draft'
                        });
                    }
                }["CreateBeneficiaryMessageForm.useEffect"]).catch({
                    "CreateBeneficiaryMessageForm.useEffect": ()=>{
                        alert('Error loading existing message data.');
                    }
                }["CreateBeneficiaryMessageForm.useEffect"]).finally({
                    "CreateBeneficiaryMessageForm.useEffect": ()=>setLoadingInitial(false)
                }["CreateBeneficiaryMessageForm.useEffect"]);
                return;
            }
            // Create defaults
            setForm({
                beneficiaryId: s(beneficiaryId),
                title: '',
                beneficiaryMessageText: '',
                status: 'draft'
            });
        }
    }["CreateBeneficiaryMessageForm.useEffect"], [
        initialData,
        isEditing,
        effectiveEditId,
        beneficiaryId
    ]);
    // If user is a beneficiary, always clamp status to draft
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateBeneficiaryMessageForm.useEffect": ()=>{
            if (isBeneficiary && form.status !== 'draft') {
                setForm({
                    "CreateBeneficiaryMessageForm.useEffect": (prev)=>({
                            ...prev,
                            status: 'draft'
                        })
                }["CreateBeneficiaryMessageForm.useEffect"]);
            }
        }
    }["CreateBeneficiaryMessageForm.useEffect"], [
        isBeneficiary,
        form.status
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setForm((prev)=>({
                ...prev,
                [name]: name === 'status' ? value || 'draft' : s(value)
            }));
    };
    const handleMessageChange = (e)=>{
        setForm((prev)=>({
                ...prev,
                beneficiaryMessageText: s(e.target.value)
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            let messageToSend = form.beneficiaryMessageText;
            try {
                messageToSend = JSON.parse(form.beneficiaryMessageText);
            } catch  {
            // keep as string if not valid JSON
            }
            const url = isEditing ? `/api/beneficiaryMessages/${effectiveEditId}` : '/api/beneficiaryMessages';
            const method = isEditing ? 'PATCH' : 'POST';
            // Beneficiary: server resolves their beneficiaryId via session names; force draft
            // Admin/Mod/Super: must provide beneficiaryId on create; can choose status
            let payload;
            if (isEditing) {
                payload = {
                    title: form.title,
                    beneficiaryMessageText: messageToSend,
                    status: isBeneficiary ? 'draft' : form.status
                };
            } else if (isBeneficiary) {
                payload = {
                    title: form.title,
                    beneficiaryMessageText: messageToSend,
                    status: 'draft'
                };
            } else {
                if (!form.beneficiaryId) {
                    alert('Please select a beneficiary before creating a message.');
                    setLoading(false);
                    return;
                }
                payload = {
                    beneficiaryId: form.beneficiaryId,
                    title: form.title,
                    beneficiaryMessageText: messageToSend,
                    status: form.status
                };
            }
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                const error = await res.json().catch(()=>({}));
                throw new Error(error.error || 'Failed to save beneficiary message');
            }
            onSuccess ? onSuccess() : router.refresh();
        } catch  {
            alert('There was an error saving the beneficiary message.');
        } finally{
            setLoading(false);
        }
    };
    if (loadingInitial) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-40",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-600",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
            lineNumber: 213,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "max-w-xl mx-auto space-y-6 p-6 bg-background rounded-xl shadow",
        autoComplete: "off",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-semibold text-xl mb-4",
                children: isEditing ? 'Edit Beneficiary Message' : 'Create Beneficiary Message'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "hidden",
                name: "beneficiaryId",
                value: form.beneficiaryId
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "title",
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "title",
                        name: "title",
                        value: form.title,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "beneficiaryMessageText",
                        children: "Message (JSON or text)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "beneficiaryMessageText",
                        name: "beneficiaryMessageText",
                        className: "w-full min-h-[140px] border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        value: form.beneficiaryMessageText,
                        onChange: handleMessageChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            isBeneficiary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Publish Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600",
                        children: [
                            "Your message will be saved as ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: "draft"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                                lineNumber: 254,
                                columnNumber: 43
                            }, this),
                            ". An admin can publish it later."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                lineNumber: 251,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "status",
                        children: "Publish Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "status",
                        name: "status",
                        value: form.status ?? 'draft',
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: publishOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: status,
                                children: status
                            }, status, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                                lineNumber: 269,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                lineNumber: 259,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading || isEditing && !effectiveEditId,
                        className: "flex-1 bg-[#9f004d] hover:bg-[#7c003c] text-white",
                        children: loading ? isEditing ? 'Saving...' : 'Creating...' : isEditing ? 'Save Changes' : 'Create Message'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        className: "flex-1 border-[#9f004d] text-[#9f004d] hover:bg-[#f5e3ec]",
                        onClick: onCancel,
                        disabled: loading,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                        lineNumber: 292,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
_s(CreateBeneficiaryMessageForm, "LqzqsDN1CecvjFG4Zru27lcSdds=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = CreateBeneficiaryMessageForm;
var _c;
__turbopack_context__.k.register(_c, "CreateBeneficiaryMessageForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateBeneficiaryRequestForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const publishOptions = [
    'draft',
    'published'
];
// normalize to a safe controlled string
const s = (v)=>typeof v === 'string' ? v : '';
// normalize possibly stringified empties
const normalizeId = (v)=>v && v !== 'undefined' && v !== 'null' ? v : '';
function CreateBeneficiaryRequestForm({ beneficiaryId, editId, initialData, onSuccess, onCancel }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Decide edit vs create robustly
    const effectiveEditId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateBeneficiaryRequestForm.useMemo[effectiveEditId]": ()=>normalizeId(editId) || normalizeId(initialData?.id)
    }["CreateBeneficiaryRequestForm.useMemo[effectiveEditId]"], [
        editId,
        initialData?.id
    ]);
    const isEditing = Boolean(effectiveEditId);
    // Controlled defaults
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        beneficiaryId: s(beneficiaryId),
        title: '',
        beneficiaryRequestText: '',
        status: 'draft'
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingInitial, setLoadingInitial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isEditing && !initialData);
    // Load data for editing (or set create defaults)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateBeneficiaryRequestForm.useEffect": ()=>{
            if (initialData) {
                setForm({
                    beneficiaryId: s(initialData.beneficiaryId) || s(beneficiaryId),
                    title: s(initialData.title),
                    beneficiaryRequestText: s(initialData.beneficiaryRequestText),
                    status: initialData.status ?? 'draft'
                });
                setLoadingInitial(false);
                return;
            }
            if (isEditing && effectiveEditId) {
                setLoadingInitial(true);
                fetch(`/api/beneficiaryRequests/${effectiveEditId}`).then({
                    "CreateBeneficiaryRequestForm.useEffect": (res)=>{
                        if (!res.ok) throw new Error('Failed to fetch beneficiary request');
                        return res.json();
                    }
                }["CreateBeneficiaryRequestForm.useEffect"]).then({
                    "CreateBeneficiaryRequestForm.useEffect": (data)=>{
                        setForm({
                            beneficiaryId: s(data.beneficiaryId) || s(beneficiaryId),
                            title: s(data.title),
                            beneficiaryRequestText: s(data.beneficiaryRequestText),
                            status: publishOptions.includes(data.status) ? data.status : 'draft'
                        });
                    }
                }["CreateBeneficiaryRequestForm.useEffect"]).catch({
                    "CreateBeneficiaryRequestForm.useEffect": ()=>{
                        alert('Error loading existing request data.');
                    }
                }["CreateBeneficiaryRequestForm.useEffect"]).finally({
                    "CreateBeneficiaryRequestForm.useEffect": ()=>setLoadingInitial(false)
                }["CreateBeneficiaryRequestForm.useEffect"]);
                return;
            }
            // Create mode defaults
            setForm({
                beneficiaryId: s(beneficiaryId),
                title: '',
                beneficiaryRequestText: '',
                status: 'draft'
            });
        }
    }["CreateBeneficiaryRequestForm.useEffect"], [
        initialData,
        isEditing,
        effectiveEditId,
        beneficiaryId
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setForm((prev)=>({
                ...prev,
                [name]: name === 'status' ? value || 'draft' : s(value)
            }));
    };
    const handleRequestTextChange = (e)=>{
        setForm((prev)=>({
                ...prev,
                beneficiaryRequestText: s(e.target.value)
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            // On EDIT, do not send beneficiaryId (keep parent FK fixed)
            const payload = isEditing ? {
                title: form.title,
                beneficiaryRequestText: form.beneficiaryRequestText,
                status: form.status
            } : {
                beneficiaryId: form.beneficiaryId,
                title: form.title,
                beneficiaryRequestText: form.beneficiaryRequestText,
                status: form.status
            };
            const url = isEditing ? `/api/beneficiaryRequests/${effectiveEditId}` : '/api/beneficiaryRequests';
            const method = isEditing ? 'PATCH' : 'POST';
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                const error = await res.json().catch(()=>({}));
                throw new Error(error.error || 'Failed to save beneficiary request');
            }
            onSuccess ? onSuccess() : router.refresh();
        } catch  {
            alert('There was an error saving the beneficiary request.');
        } finally{
            setLoading(false);
        }
    };
    if (loadingInitial) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-40",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-600",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "max-w-xl mx-auto space-y-6 p-6 bg-background rounded-xl shadow",
        autoComplete: "off",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-semibold text-xl mb-4",
                children: isEditing ? 'Edit Beneficiary Request' : 'Create Beneficiary Request'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "hidden",
                name: "beneficiaryId",
                value: form.beneficiaryId
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "title",
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "title",
                        name: "title",
                        value: form.title,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "beneficiaryRequestText",
                        children: "Request Text (JSON or text)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "beneficiaryRequestText",
                        name: "beneficiaryRequestText",
                        value: form.beneficiaryRequestText,
                        onChange: handleRequestTextChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "status",
                        children: "Publish Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "status",
                        name: "status",
                        value: form.status ?? 'draft',
                        onChange: handleChange,
                        className: "w-full border border-input rounded-md p-2 text-sm bg-background text-foreground",
                        children: publishOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: status,
                                children: status
                            }, status, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading || isEditing && !effectiveEditId,
                        className: "flex-1 bg-[#9f004d] hover:bg-[#7c003c] text-white",
                        children: loading ? isEditing ? 'Saving...' : 'Creating...' : isEditing ? 'Save Changes' : 'Create Request'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        className: "flex-1 border-[#9f004d] text-[#9f004d] hover:bg-[#f5e3ec]",
                        onClick: onCancel,
                        disabled: loading,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s(CreateBeneficiaryRequestForm, "Zh0kzkdNVtBcmn6U4JzYNeP2x6Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CreateBeneficiaryRequestForm;
var _c;
__turbopack_context__.k.register(_c, "CreateBeneficiaryRequestForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestResponseForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateBeneficiaryRequestResponseForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CreateBeneficiaryRequestResponseForm({ responseId, editId, initialData, onSuccess, onCancel }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Use initialData.id as a fallback when editId is not explicitly passed
    const effectiveEditId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateBeneficiaryRequestResponseForm.useMemo[effectiveEditId]": ()=>editId ?? initialData?.id
    }["CreateBeneficiaryRequestResponseForm.useMemo[effectiveEditId]"], [
        editId,
        initialData?.id
    ]);
    const isEditing = Boolean(effectiveEditId && `${effectiveEditId}`.trim().length > 0);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        responseId: responseId ?? '',
        responseText: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingInitial, setLoadingInitial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isEditing && !initialData);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateBeneficiaryRequestResponseForm.useEffect": ()=>{
            if (initialData) {
                // Populate from initialData; keep parent link stable
                setForm({
                    responseId: initialData.responseId ?? responseId ?? '',
                    responseText: initialData.responseText ?? ''
                });
                setLoadingInitial(false);
                return;
            }
            if (isEditing && effectiveEditId) {
                setLoadingInitial(true);
                fetch(`/api/beneficiaryRequestResponse/${effectiveEditId}`).then({
                    "CreateBeneficiaryRequestResponseForm.useEffect": (res)=>{
                        if (!res.ok) throw new Error('Failed to fetch response');
                        return res.json();
                    }
                }["CreateBeneficiaryRequestResponseForm.useEffect"]).then({
                    "CreateBeneficiaryRequestResponseForm.useEffect": (data)=>{
                        setForm({
                            responseId: data.responseId ?? responseId ?? '',
                            responseText: data.responseText ?? ''
                        });
                    }
                }["CreateBeneficiaryRequestResponseForm.useEffect"]).catch({
                    "CreateBeneficiaryRequestResponseForm.useEffect": ()=>{
                        alert('Error loading existing response data.');
                    }
                }["CreateBeneficiaryRequestResponseForm.useEffect"]).finally({
                    "CreateBeneficiaryRequestResponseForm.useEffect": ()=>setLoadingInitial(false)
                }["CreateBeneficiaryRequestResponseForm.useEffect"]);
            } else {
                setForm({
                    responseId: responseId ?? '',
                    responseText: ''
                });
            }
        }
    }["CreateBeneficiaryRequestResponseForm.useEffect"], [
        initialData,
        isEditing,
        effectiveEditId,
        responseId
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setForm((prev)=>({
                ...prev,
                [name]: value ?? ''
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            // On EDIT, don’t send responseId (parent FK) to avoid accidental relinks
            const payload = isEditing ? {
                responseText: form.responseText ?? ''
            } : {
                responseId: form.responseId ?? '',
                responseText: form.responseText ?? ''
            };
            const url = isEditing ? `/api/beneficiaryRequestResponse/${effectiveEditId}` : '/api/beneficiaryRequestResponse';
            const method = isEditing ? 'PATCH' : 'POST';
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                const error = await res.json().catch(()=>({}));
                throw new Error(error.error || 'Failed to save beneficiary request response');
            }
            onSuccess ? onSuccess() : router.refresh();
        } catch (err) {
            alert('There was an error saving the beneficiary request response.');
        } finally{
            setLoading(false);
        }
    };
    if (loadingInitial) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-40",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-600",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestResponseForm.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestResponseForm.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "max-w-xl mx-auto space-y-6 p-6 bg-background rounded-xl shadow",
        autoComplete: "off",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-semibold text-xl mb-4",
                children: isEditing ? 'Edit Beneficiary Request Response' : 'Create Beneficiary Request Response'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestResponseForm.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "hidden",
                name: "responseId",
                value: form.responseId ?? ''
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestResponseForm.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "responseText",
                        children: "Response Text (JSON or text)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestResponseForm.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "responseText",
                        name: "responseText",
                        value: form.responseText ?? '',
                        onChange: handleChange,
                        required: true,
                        disabled: loading,
                        className: "block w-full rounded border px-2 py-1 min-h-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestResponseForm.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestResponseForm.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading,
                        className: "flex-1 bg-[#9f004d] hover:bg-[#7c003c] text-white",
                        children: loading ? isEditing ? 'Saving...' : 'Creating...' : isEditing ? 'Save Changes' : 'Create Response'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestResponseForm.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        className: "flex-1 border-[#9f004d] text-[#9f004d] hover:bg-[#f5e3ec]",
                        onClick: onCancel,
                        disabled: loading,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestResponseForm.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestResponseForm.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestResponseForm.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s(CreateBeneficiaryRequestResponseForm, "uoC//x/wDfR3vuoV/YLHTUE13hM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CreateBeneficiaryRequestResponseForm;
var _c;
__turbopack_context__.k.register(_c, "CreateBeneficiaryRequestResponseForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/createUserForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateOrEditUserForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Strict roles from Prisma schema
const roles = [
    {
        value: 'super',
        label: 'Super'
    },
    {
        value: 'admin',
        label: 'Admin'
    },
    {
        value: 'moderator',
        label: 'Moderator'
    },
    {
        value: 'beneficiary',
        label: 'Beneficiary'
    },
    {
        value: 'guest',
        label: 'Guest'
    }
];
function getCameFrom() {
    if ("TURBOPACK compile-time truthy", 1) {
        return sessionStorage.getItem('came-from') || '/admin/dashboard?type=admin';
    }
    "TURBOPACK unreachable";
}
function CreateOrEditUserForm({ mode = 'create', userId, initialData, onSuccess, onCancel, onDelete }) {
    _s();
    if (mode === 'edit' && !userId) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-500 text-center",
            children: "User ID missing. Cannot edit user"
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
            lineNumber: 40,
            columnNumber: 12
        }, this);
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: initialData?.firstName || '',
        lastName: initialData?.lastName || '',
        username: initialData?.username || '',
        email: initialData?.email || '',
        password: '',
        confirmPassword: '',
        role: initialData?.role || 'guest'
    });
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imageUrl, setImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.image || '');
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.image || null);
    const [imageToDelete, setImageToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [checkingUsername, setCheckingUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [usernameInvalid, setUsernameInvalid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registerDot, setRegisterDot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateOrEditUserForm.useEffect": ()=>{
            setForm({
                firstName: initialData?.firstName || '',
                lastName: initialData?.lastName || '',
                username: initialData?.username || '',
                email: initialData?.email || '',
                password: '',
                confirmPassword: '',
                role: initialData?.role || 'guest'
            });
            setImageUrl(initialData?.image || '');
            setImagePreview(initialData?.image || null);
            setImageFile(null);
            setImageToDelete(null);
        }
    }["CreateOrEditUserForm.useEffect"], [
        initialData
    ]);
    const handleUsernameBlur = async ()=>{
        if (form.username && userId && mode === 'edit') {
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
        setError('');
        setSuccess('');
        if (e.target.name === 'username') setUsernameInvalid(false);
    };
    const handleImageChange = (e)=>{
        const file = e.target.files?.[0] || null;
        if (file) {
            if (imageUrl) setImageToDelete(imageUrl);
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };
    const handleImageDelete = async ()=>{
        if (imageUrl) setImageToDelete(imageUrl);
        setImageFile(null);
        setImageUrl('');
        setImagePreview(null);
        if (userId && imageUrl) {
            await fetch('/api/users/delete-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    imageUrl
                })
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateOrEditUserForm.useEffect": ()=>{
            let dotInterval;
            if (isSubmitting) {
                dotInterval = setInterval({
                    "CreateOrEditUserForm.useEffect": ()=>{
                        setRegisterDot({
                            "CreateOrEditUserForm.useEffect": (prev)=>(prev + 1) % 3
                        }["CreateOrEditUserForm.useEffect"]);
                    }
                }["CreateOrEditUserForm.useEffect"], 400);
            } else {
                setRegisterDot(0);
            }
            return ({
                "CreateOrEditUserForm.useEffect": ()=>{
                    if (dotInterval) clearInterval(dotInterval);
                }
            })["CreateOrEditUserForm.useEffect"];
        }
    }["CreateOrEditUserForm.useEffect"], [
        isSubmitting
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        setSuccess('');
        setIsSubmitting(true);
        // --- Validation ---
        if (mode === 'create') {
            if (!form.firstName || !form.lastName || !form.username || !form.password || !form.confirmPassword || !form.role || !imageFile && !imagePreview) {
                setError('All fields and image are required');
                setIsSubmitting(false);
                return;
            }
            if (form.password !== form.confirmPassword) {
                setError('Passwords do not match');
                setIsSubmitting(false);
                return;
            }
        } else if (mode === 'edit') {
            if (form.password && form.password !== form.confirmPassword) {
                setError('Passwords do not match');
                setIsSubmitting(false);
                return;
            }
            if (usernameInvalid) {
                setError('The Username is incorrect.');
                setIsSubmitting(false);
                return;
            }
            if (!userId) {
                setIsSubmitting(false);
                setError('Invalid form mode or missing user ID');
                return;
            }
        }
        try {
            const formData = new FormData();
            formData.append('firstName', form.firstName);
            formData.append('lastName', form.lastName);
            formData.append('username', form.username);
            formData.append('role', form.role);
            if (form.email) formData.append('email', form.email);
            if (form.password) formData.append('password', form.password);
            if (imageFile) formData.append('image', imageFile);
            if (mode === 'edit' && imageToDelete) formData.append('oldImageUrl', imageToDelete);
            let res;
            if (mode === 'edit') {
                res = await fetch(`/api/users/${userId}`, {
                    method: 'PATCH',
                    body: formData
                });
            } else {
                res = await fetch('/api/users', {
                    method: 'POST',
                    body: formData
                });
            }
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Operation failed');
            setSuccess(mode === 'edit' ? 'User updated!' : 'User created!');
            // Always go back to previous URL after user is created (or updated)
            const cameFrom = getCameFrom();
            sessionStorage.removeItem('came-from');
            setTimeout(()=>{
                router.push(cameFrom);
            }, 800);
            // If you want to call onSuccess after navigation, move it inside setTimeout
            // If you want to call onSuccess before, call it here:
            if (onSuccess) onSuccess();
        } catch (err) {
            setError(err.message || 'Something went wrong');
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
        if (!window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) return;
        setDeleting(true);
        try {
            const res = await fetch(`/api/users/${userId}`, {
                method: 'DELETE'
            });
            if (!res.ok) {
                const data = await res.json().catch(()=>null);
                throw new Error(data?.error || 'Failed to delete user');
            }
            if (onDelete) onDelete(userId);
            if (onSuccess) onSuccess();
            router.refresh();
            router.push('/admin/dashboard');
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally{
            setDeleting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex max-w-lg items-center justify-center mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-6 w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        imagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imagePreview,
                                    alt: "User",
                                    className: "w-24 h-24 rounded-full object-cover border mx-auto"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 260,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center -mt-2 -mr-2",
                                    onClick: handleImageDelete,
                                    title: "Delete Image",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-24 rounded-full border flex items-center justify-center mb-2 text-gray-400",
                            children: "No Image"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 275,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: "image/*",
                            onChange: handleImageChange,
                            className: "mt-2 mb-2 block"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "firstName",
                            placeholder: "First Name",
                            value: form.firstName,
                            onChange: handleChange,
                            className: "border p-2 rounded w-1/2"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "lastName",
                            placeholder: "Last Name",
                            value: form.lastName,
                            onChange: handleChange,
                            className: "border p-2 rounded w-1/2"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "username",
                            placeholder: "Username",
                            value: form.username,
                            onChange: handleChange,
                            onBlur: mode === 'edit' ? handleUsernameBlur : undefined,
                            className: `border p-2 rounded w-1/2 ${usernameInvalid ? 'border-red-500' : ''}`,
                            autoComplete: "off"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "email",
                            type: "email",
                            placeholder: "Email",
                            value: form.email,
                            onChange: handleChange,
                            className: "border p-2 rounded w-1/2",
                            autoComplete: "off"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 306,
                    columnNumber: 9
                }, this),
                checkingUsername && mode === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs block",
                    children: "Checking username…"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 327,
                    columnNumber: 11
                }, this),
                usernameInvalid && mode === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-red-500 block",
                    children: "The Username is incorrect."
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 330,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "role",
                            className: "block text-sm font-medium mb-1",
                            children: "Role"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            name: "role",
                            id: "role",
                            value: form.role,
                            onChange: handleChange,
                            className: "border p-2 rounded w-full",
                            children: roles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: role.value,
                                    children: role.label
                                }, role.value, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 334,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            name: "password",
                            placeholder: mode === 'edit' ? 'New Password' : 'Password',
                            onChange: handleChange,
                            value: form.password,
                            className: "border p-2 rounded w-1/2",
                            autoComplete: "new-password"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 355,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            name: "confirmPassword",
                            placeholder: mode === 'edit' ? 'Confirm New Password' : 'Confirm Password',
                            onChange: handleChange,
                            value: form.confirmPassword,
                            className: "border p-2 rounded w-1/2",
                            autoComplete: "new-password"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this),
                form.password && form.confirmPassword && form.password !== form.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-red-500 block",
                    children: "Passwords do not match"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 375,
                    columnNumber: 11
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-sm",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 378,
                    columnNumber: 19
                }, this),
                success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-green-600 text-sm",
                    children: success
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 379,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-1/2 bg-green-600 text-white py-2 rounded flex items-center justify-center",
                            disabled: isSubmitting || checkingUsername || usernameInvalid || form.password && form.password !== form.confirmPassword,
                            children: [
                                mode === 'edit' ? 'Update User' : 'Register',
                                isSubmitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-2 flex",
                                    children: [
                                        0,
                                        1,
                                        2
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `transition-all w-1.5 h-1.5 rounded-full mx-0.5 inline-block ${registerDot === i ? 'bg-white' : 'bg-green-900 opacity-40'}`
                                        }, i, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                            lineNumber: 396,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleCancel,
                            className: "w-1/2 bg-black text-white py-2 rounded",
                            disabled: deleting,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 406,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 381,
                    columnNumber: 9
                }, this),
                mode === 'edit' && userId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: handleDelete,
                    className: "w-full bg-red-600 text-white py-2 rounded mt-2",
                    disabled: deleting,
                    children: deleting ? 'Deleting...' : 'Delete User'
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 416,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
            lineNumber: 255,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, this);
}
_s(CreateOrEditUserForm, "HGdYxAcshWIgfiNzbmJ4imB5sbs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CreateOrEditUserForm;
var _c;
__turbopack_context__.k.register(_c, "CreateOrEditUserForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateHomepageForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CreateHomepageForm({ mode = 'create', initialData, onSuccess, onCancel }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        heroVideo: '',
        vision: '',
        mission: '',
        focus: '',
        coreValues: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateHomepageForm.useEffect": ()=>{
            if (initialData) {
                setForm({
                    heroVideo: initialData.heroVideo || '',
                    vision: initialData.vision || '',
                    mission: initialData.mission || '',
                    focus: initialData.focus || '',
                    coreValues: initialData.coreValues || ''
                });
            }
        }
    }["CreateHomepageForm.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "w-full max-w-2xl mx-auto mt-4 space-y-6 p-6 bg-background rounded-xl shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold mb-4 text-center",
                children: mode === 'edit' ? 'Edit Home Page Content' : 'Create Home Page Content'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "heroVideo",
                        children: "Hero Video (URL)"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "vision",
                        children: "Vision"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "mission",
                        children: "Mission"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "focus",
                        children: "Focus"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "coreValues",
                        children: "Core Values"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-center gap-2 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading,
                        className: "w-1/2 bg-[#9f004d]",
                        children: loading ? mode === 'edit' ? 'Updating...' : 'Creating...' : mode === 'edit' ? 'Update' : 'Create'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
                    mode === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
_s(CreateHomepageForm, "OctXutoOzPhatvx6P6pF/p/peTE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CreateHomepageForm;
var _c;
__turbopack_context__.k.register(_c, "CreateHomepageForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BeneficiaryMessageView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function BeneficiaryMessageView({ data, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-xl mx-auto space-y-6 p-6 bg-background rounded-xl shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-semibold text-xl mb-4",
                children: "View Beneficiary Message"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: "Title:"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2",
                                children: data.title
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: "Beneficiary:"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2",
                                children: data.beneficiary ? `${data.beneficiary.firstName} ${data.beneficiary.lastName}` : '-'
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: "Status:"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2",
                                children: data.status
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: "Created At:"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2",
                                children: data.createdAt ? new Date(data.createdAt).toLocaleDateString() : ''
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: "Updated At:"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2",
                                children: data.updatedAt ? new Date(data.updatedAt).toLocaleDateString() : ''
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: "Message:"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 whitespace-pre-line",
                                children: data.beneficiaryMessageText
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "mt-6 px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-900",
                onClick: onClose,
                children: "Close"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = BeneficiaryMessageView;
var _c;
__turbopack_context__.k.register(_c, "BeneficiaryMessageView");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$downloadColumnsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$handleDownloadPDF$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/handleDownloadPDF.ts [app-client] (ecmascript)");
// Icons
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
// Section components
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/ProjectsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$ReportsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/ReportsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$EventsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/EventsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$InstitutionsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/InstitutionsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$BeneficiariesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$BeneficiaryMessagesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/BeneficiaryMessagesSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$BeneficiaryRequestsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/BeneficiaryRequestsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$BeneficiaryRequestResponseSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/BeneficiaryRequestResponseSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$ChartsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/ChartsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$AdminSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/AdminSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$HomePageSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/HomePageSection.tsx [app-client] (ecmascript)");
// Import all edit/create forms
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createProjectForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createProjectForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createReportForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createReportForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createEventForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createEventForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createInstitutionForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createBeneficiaryForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createBeneficiaryMessageForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createBeneficiaryRequestForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createBeneficiaryRequestResponseForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestResponseForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createUserForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createUserForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createHomePageForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx [app-client] (ecmascript)");
// Import all view-only components (add these for each section that needs "View" support)
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$beneficiaryMessageView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/beneficiaryMessageView.tsx [app-client] (ecmascript)");
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
// import other View components as needed
// Table controls component for search/filter/add/export
function TableControls({ search, setSearch, onAddNew, exportExcel, downloadPDF, activeSection, sectionLabels }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center justify-between mb-4 gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "border px-3 py-2 rounded w-64 focus:outline-pink-500 dark:bg-gray-800 dark:text-white",
                        placeholder: `Search ${sectionLabels[activeSection] || 'records'}...`,
                        value: search,
                        onChange: (e)=>setSearch(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-2 py-1 border rounded text-sm bg-green-50 hover:bg-green-100 dark:bg-gray-800 dark:hover:bg-green-900",
                        title: "Export to Excel",
                        onClick: exportExcel,
                        children: "Export to Excel"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-2 py-1 border rounded text-sm bg-yellow-50 hover:bg-yellow-100 dark:bg-gray-800 dark:hover:bg-yellow-900",
                        title: "Download as PDF",
                        onClick: downloadPDF,
                        children: "Download as PDF"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-900 text-sm font-semibold",
                    onClick: onAddNew,
                    children: [
                        "Add New ",
                        sectionLabels[activeSection]
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c = TableControls;
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
    beneficiaryMessages: {
        apiRoute: '/api/beneficiaryMessages'
    },
    beneficiaryRequests: {
        apiRoute: '/api/beneficiaryRequests'
    },
    beneficiaryRequestResponse: {
        apiRoute: '/api/beneficiaryRequestResponse'
    },
    charts: {},
    'Home Page': {
        apiRoute: '/api/homepage-content'
    },
    admin: {
        apiRoute: '/api/users'
    }
};
const sectionIcons = {
    charts: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChartPie"], {
        className: "text-pink-600 dark:text-pink-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 142,
        columnNumber: 11
    }, this),
    projects: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaClipboardList"], {
        className: "text-yellow-600 dark:text-yellow-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 143,
        columnNumber: 13
    }, this),
    events: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCalendarAlt"], {
        className: "text-green-600 dark:text-green-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 144,
        columnNumber: 11
    }, this),
    reports: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFilePdf"], {
        className: "text-red-600 dark:text-red-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 145,
        columnNumber: 12
    }, this),
    institutions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUniversity"], {
        className: "text-blue-600 dark:text-blue-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 146,
        columnNumber: 17
    }, this),
    beneficiaries: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUsers"], {
        className: "text-indigo-600 dark:text-indigo-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 147,
        columnNumber: 18
    }, this),
    beneficiaryMessages: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
        className: "text-orange-500 dark:text-orange-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 148,
        columnNumber: 24
    }, this),
    beneficiaryRequests: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaClipboardList"], {
        className: "text-teal-600 dark:text-teal-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 149,
        columnNumber: 24
    }, this),
    beneficiaryRequestResponse: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReply"], {
        className: "text-purple-600 dark:text-purple-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 150,
        columnNumber: 31
    }, this),
    'Home Page': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHome"], {
        className: "text-pink-700 dark:text-pink-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 151,
        columnNumber: 16
    }, this),
    admin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserCog"], {
        className: "text-gray-700 dark:text-gray-300"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 152,
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
function AdminDashboardPage() {
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('charts');
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editRecord, setEditRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewRecord, setViewRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteId, setDeleteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteLoading, setDeleteLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('createdAt');
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('desc');
    const [rowsPerPage, setRowsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(activeSection);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [downloadModalOpen, setDownloadModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [downloadColumns, setDownloadColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pendingDownloadData, setPendingDownloadData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
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
        setViewRecord(null);
        setDeleteId(null);
        setPage(1);
        sectionRef.current = section;
        const feat = sectionFeatures[section];
        if (feat?.apiRoute) {
            try {
                const res = await fetch(feat.apiRoute);
                if (!res.ok) {
                    setData([]);
                    return;
                }
                const rawData = await res.json();
                setData(rawData);
            } catch  {
                setData([]);
            }
        } else {
            setData([]);
        }
    }
    const sortedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminDashboardPage.useMemo[sortedData]": ()=>{
            if (!data) return [];
            if (!activeSection || !sectionFeatures[activeSection]?.apiRoute) return data;
            let sorted = [
                ...data
            ];
            sorted.sort({
                "AdminDashboardPage.useMemo[sortedData]": (a, b)=>{
                    let valA = a[sortBy];
                    let valB = b[sortBy];
                    if (sortBy === 'createdAt' || sortBy === 'updatedAt') {
                        valA = new Date(valA).getTime();
                        valB = new Date(valB).getTime();
                    }
                    if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
                    if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
                    return 0;
                }
            }["AdminDashboardPage.useMemo[sortedData]"]);
            return sorted;
        }
    }["AdminDashboardPage.useMemo[sortedData]"], [
        data,
        sortBy,
        sortOrder,
        activeSection
    ]);
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminDashboardPage.useMemo[filteredData]": ()=>{
            if (!sortedData) return [];
            if (!activeSection || !search.trim()) return sortedData;
            const lower = search.toLowerCase();
            return sortedData.filter({
                "AdminDashboardPage.useMemo[filteredData]": (item)=>Object.keys(item).some({
                        "AdminDashboardPage.useMemo[filteredData]": (key)=>typeof item[key] === 'string' && item[key].toLowerCase().includes(lower)
                    }["AdminDashboardPage.useMemo[filteredData]"])
            }["AdminDashboardPage.useMemo[filteredData]"]);
        }
    }["AdminDashboardPage.useMemo[filteredData]"], [
        sortedData,
        search,
        activeSection
    ]);
    const pageCount = Math.ceil((filteredData?.length ?? 0) / rowsPerPage);
    const paginatedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminDashboardPage.useMemo[paginatedData]": ()=>(filteredData ?? []).slice((page - 1) * rowsPerPage, page * rowsPerPage)
    }["AdminDashboardPage.useMemo[paginatedData]"], [
        filteredData,
        page,
        rowsPerPage
    ]);
    // Universal edit handler for all sections
    function handleEdit(record) {
        setEditRecord(record);
    }
    function handleCancelEdit() {
        setEditRecord(null);
    }
    async function handleSaveEdit() {
        setEditRecord(null);
        await handleMenuClick(activeSection);
    }
    // Universal view handler for all sections
    function handleView(record) {
        setViewRecord(record);
    }
    function handleCloseView() {
        setViewRecord(null);
    }
    // Universal delete handler for all sections
    async function handleDelete(id) {
        setDeleteId(id);
        setDeleteLoading(true);
        try {
            let apiRoute = sectionFeatures[activeSection]?.apiRoute;
            if (!apiRoute) throw new Error('Delete API route not defined');
            if (apiRoute.endsWith('/')) apiRoute = apiRoute.slice(0, -1);
            const url = `${apiRoute}/${id}`;
            console.log('Attempting DELETE:', url);
            const res = await fetch(url, {
                method: 'DELETE'
            });
            const text = await res.text();
            console.log('DELETE response:', res.status, text);
            if (!res.ok) {
                alert(`Failed to delete record: ${res.status}\n${text}`);
            } else {
                await handleMenuClick(activeSection); // reload data
            }
        } catch (err) {
            alert('Error deleting record: ' + err);
        } finally{
            setDeleteLoading(false);
            setDeleteId(null);
        }
    }
    // TableActions logic for export/download
    function getCurrentColumns() {
        // You should implement this to return the correct columns for the current section
        // For example, if you have a columns function, call it here
        // return beneficiaryMessageColumns({...});
        return []; // <-- Replace with actual columns
    }
    const handleExportExcel = ()=>{
        const columns = getCurrentColumns();
        const headers = columns.filter((col)=>col.header && col.header !== 'Actions' && col.header !== 'Delete').map((col)=>typeof col.header === 'function' ? col.header({}) : col.header);
        const exportableCols = columns.filter((col)=>col.header && col.header !== 'Actions' && col.header !== 'Delete');
        const rows = paginatedData.map((row, idx)=>exportableCols.map((col)=>{
                if (col.id === 'number') return idx + 1;
                return row[col.id || col.accessorKey] ?? '';
            }));
        const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet([
            headers,
            ...rows
        ]);
        const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"])(wb, 'table.xlsx');
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
        setEditRecord({});
        setViewRecord(null);
    }
    function renderSection() {
        // If viewing, render the view-only component for the section
        if (viewRecord) {
            switch(activeSection){
                case 'beneficiaryMessages':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$beneficiaryMessageView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        data: viewRecord,
                        onClose: handleCloseView
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 363,
                        columnNumber: 18
                    }, this);
                case 'beneficiaries':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BeneficiaryView, {
                        data: viewRecord,
                        onClose: handleCloseView
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 365,
                        columnNumber: 18
                    }, this);
                // Add similar cases for other sections, e.g. ProjectView, EventView, etc.
                // case 'projects':
                //   return <ProjectView data={viewRecord} onClose={handleCloseView} />;
                // --- Add other view components for other sections here ---
                default:
                    return null;
            }
        }
        // If editing, render the edit form for the section
        if (editRecord) {
            switch(activeSection){
                case 'projects':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createProjectForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 379,
                        columnNumber: 13
                    }, this);
                case 'reports':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createReportForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 387,
                        columnNumber: 13
                    }, this);
                case 'events':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createEventForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 395,
                        columnNumber: 13
                    }, this);
                case 'institutions':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createInstitutionForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 403,
                        columnNumber: 13
                    }, this);
                case 'beneficiaries':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createBeneficiaryForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 411,
                        columnNumber: 13
                    }, this);
                case 'beneficiaryMessages':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createBeneficiaryMessageForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        initialData: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 419,
                        columnNumber: 13
                    }, this);
                case 'beneficiaryRequests':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createBeneficiaryRequestForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 427,
                        columnNumber: 13
                    }, this);
                case 'beneficiaryRequestResponse':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createBeneficiaryRequestResponseForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 435,
                        columnNumber: 13
                    }, this);
                case 'admin':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createUserForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 443,
                        columnNumber: 13
                    }, this);
                case 'Home Page':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createHomePageForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 451,
                        columnNumber: 13
                    }, this);
                default:
                    return null;
            }
        }
        // Pass all handlers to sections
        switch(activeSection){
            case 'projects':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: handleView,
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 466,
                    columnNumber: 11
                }, this);
            case 'reports':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$ReportsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: handleView,
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 480,
                    columnNumber: 11
                }, this);
            case 'events':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$EventsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: handleView,
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 494,
                    columnNumber: 11
                }, this);
            case 'institutions':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$InstitutionsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: handleView,
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 508,
                    columnNumber: 11
                }, this);
            case 'beneficiaries':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$BeneficiariesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: handleView,
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
                    lineNumber: 522,
                    columnNumber: 11
                }, this);
            case 'beneficiaryMessages':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$BeneficiaryMessagesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: handleView,
                    handleDelete: handleDelete,
                    currentUserRole: "",
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 541,
                    columnNumber: 11
                }, this);
            case 'beneficiaryRequests':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$BeneficiaryRequestsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: handleView,
                    handleDelete: handleDelete,
                    responsesCountMap: {},
                    TableActions: ()=>null,
                    onRespond: ()=>{},
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 556,
                    columnNumber: 11
                }, this);
            case 'beneficiaryRequestResponse':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$BeneficiaryRequestResponseSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: handleView,
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 572,
                    columnNumber: 11
                }, this);
            case 'charts':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$ChartsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 585,
                    columnNumber: 16
                }, this);
            case 'admin':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$AdminSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: handleView,
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 588,
                    columnNumber: 11
                }, this);
            case 'Home Page':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$HomePageSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    homepageData: data,
                    messagesData: [],
                    handleEdit: handleEdit,
                    handleView: handleView,
                    handleDelete: handleDelete,
                    showExecMsgAddButton: false,
                    onAddExecMsg: ()=>{},
                    TableActions: ()=>null,
                    homepageRef: undefined,
                    messagesRef: undefined,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 602,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    }
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
                                lineNumber: 631,
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
                                    lineNumber: 639,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaAngleLeft"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                    lineNumber: 639,
                                    columnNumber: 62
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 634,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 630,
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
                                        lineNumber: 656,
                                        columnNumber: 15
                                    }, this),
                                    !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: sectionLabels[section]
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                        lineNumber: 657,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, section, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 644,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 642,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 625,
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
                                lineNumber: 666,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold text-gray-700 dark:text-gray-100",
                                children: sectionLabels[activeSection]
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 667,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 665,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableControls, {
                        search: search,
                        setSearch: setSearch,
                        onAddNew: handleAddNew,
                        exportExcel: handleExportExcel,
                        downloadPDF: handleDownloadPDFButton,
                        activeSection: activeSection,
                        sectionLabels: sectionLabels
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 673,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: activeSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: renderSection()
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                            lineNumber: 684,
                            columnNumber: 32
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 684,
                        columnNumber: 9
                    }, this),
                    pageCount > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mt-4 justify-end items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-2 py-1 rounded border dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100",
                                disabled: page === 1,
                                onClick: ()=>setPage(page - 1),
                                children: "Prev"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 689,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "dark:text-gray-100",
                                children: [
                                    "Page ",
                                    page,
                                    " of ",
                                    pageCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 696,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-2 py-1 rounded border dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100",
                                disabled: page === pageCount,
                                onClick: ()=>setPage(page + 1),
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 699,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 688,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$downloadColumnsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: downloadModalOpen,
                        onClose: ()=>setDownloadModalOpen(false),
                        columns: downloadColumns,
                        onDownload: (selectedColumns)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$handleDownloadPDF$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleDownloadPDF"])(pendingDownloadData, selectedColumns, activeSection ? activeSection.charAt(0).toUpperCase() + activeSection.slice(1) : 'Data');
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 710,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 663,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 623,
        columnNumber: 5
    }, this);
}
_s(AdminDashboardPage, "R89AKUWnqOCiBfIC0f5XkITJWV8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = AdminDashboardPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "TableControls");
__turbopack_context__.k.register(_c1, "AdminDashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_a4dc55bb._.js.map