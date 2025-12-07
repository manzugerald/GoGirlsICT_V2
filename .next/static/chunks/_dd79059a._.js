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
function numericOrUndefined(v) {
    if (typeof v === 'number' && !Number.isNaN(v)) return v;
    if (typeof v === 'string' && v.trim() !== '' && !Number.isNaN(Number(v))) return Number(v);
    return undefined;
}
function beneficiaryColumns({ onEdit, onView, onDelete, onAddMessage, onMessageIdClick, messagesCountMap, responsesCountMap, currentUserRole }) {
    const cols = [
        {
            accessorKey: 'firstName',
            header: 'First Name',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-normal break-words max-w-xs",
                    children: row.getValue('firstName')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 58,
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
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
        },
        {
            id: 'messagesCount',
            header: 'Messages',
            cell: ({ row })=>{
                const id = row.original.id;
                // Try a bunch of server-provided locations (to be resilient to different API shapes)
                const serverCandidates = [
                    row.original.messageCount,
                    row.original.messagesCount,
                    row.original._count?.messages,
                    numericOrUndefined(row.original._count?.messages),
                    numericOrUndefined(row.original.messageCount),
                    numericOrUndefined(row.original.messagesCount),
                    // sometimes the API returns the relation array
                    Array.isArray(row.original.beneficiaryMessages) ? row.original.beneficiaryMessages.length : undefined,
                    Array.isArray(row.original.messages) ? row.original.messages.length : undefined
                ];
                for (const cand of serverCandidates){
                    if (typeof cand === 'number') return cand;
                    if (typeof cand === 'string' && cand !== '') {
                        const parsed = Number(cand);
                        if (!Number.isNaN(parsed)) return parsed;
                    }
                }
                // Fallback to the messagesCountMap passed down from parent (optimistic updates)
                if (messagesCountMap && id) return messagesCountMap[id] ?? 0;
                // Last resort: zero
                return 0;
            }
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
                    lineNumber: 110,
                    columnNumber: 11
                }, this) : null
        },
        {
            id: 'responsesCount',
            header: 'Responses',
            cell: ({ row })=>{
                const id = row.original.id;
                const serverCandidates = [
                    row.original.responseCount,
                    row.original.responsesCount,
                    numericOrUndefined(row.original.responseCount),
                    numericOrUndefined(row.original.responsesCount),
                    Array.isArray(row.original.responses) ? row.original.responses.length : undefined
                ];
                for (const cand of serverCandidates){
                    if (typeof cand === 'number') return cand;
                    if (typeof cand === 'string' && cand !== '') {
                        const parsed = Number(cand);
                        if (!Number.isNaN(parsed)) return parsed;
                    }
                }
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    className: "transition-colors duration-150 hover:bg-yellow-100 dark:hover:bg-yellow-800 hover:text-yellow-900 dark:hover:text-yellow-100",
                    onClick: ()=>onEdit(row.original),
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
        },
        {
            id: 'view',
            header: 'View',
            cell: ({ row })=>onView ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    className: "transition-colors duration-150 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-900 dark:hover:text-blue-100",
                    onClick: ()=>onView(row.original),
                    children: "View"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 184,
                    columnNumber: 11
                }, this) : null
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
                    lineNumber: 202,
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
"[project]/components/ui/dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function BeneficiariesSection({ paginatedData, page, rowsPerPage, handleEdit, handleView, handleDelete, messagesCountMap: initialMessagesCountMap, responsesCountMap: initialResponsesCountMap, currentUserRole, TableActions, onAddMessage: externalOnAddMessage }) {
    _s();
    // Local maps so the component can update counts immediately after creating a message
    const [messagesCountMap, setMessagesCountMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMessagesCountMap ?? {});
    const [responsesCountMap, setResponsesCountMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialResponsesCountMap ?? {});
    // Merge server-provided counts from paginatedData whenever it changes (keeps UI accurate after refresh)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BeneficiariesSection.useEffect": ()=>{
            if (!Array.isArray(paginatedData)) return;
            setMessagesCountMap({
                "BeneficiariesSection.useEffect": (prev)=>{
                    const merged = {
                        ...prev
                    };
                    for (const b of paginatedData){
                        const id = b?.id;
                        // Accept many shapes for server-provided counts
                        const serverCount = typeof b?.messageCount === 'number' ? b.messageCount : typeof b?.messagesCount === 'number' ? b.messagesCount : typeof b?._count?.messages === 'number' ? b._count.messages : Array.isArray(b?.beneficiaryMessages) ? b.beneficiaryMessages.length : Array.isArray(b?.messages) ? b.messages.length : undefined;
                        if (id && typeof serverCount === 'number') merged[id] = serverCount;
                    }
                    return merged;
                }
            }["BeneficiariesSection.useEffect"]);
            setResponsesCountMap({
                "BeneficiariesSection.useEffect": (prev)=>{
                    const merged = {
                        ...prev
                    };
                    for (const b of paginatedData){
                        const id = b?.id;
                        const serverCount = typeof b?.responseCount === 'number' ? b.responseCount : typeof b?.responsesCount === 'number' ? b.responsesCount : Array.isArray(b?.responses) ? b.responses.length : undefined;
                        if (id && typeof serverCount === 'number') merged[id] = serverCount;
                    }
                    return merged;
                }
            }["BeneficiariesSection.useEffect"]);
        }
    }["BeneficiariesSection.useEffect"], [
        paginatedData
    ]);
    // Dialog state for creating a message
    const [openAddMessageFor, setOpenAddMessageFor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [creating, setCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    // After message creation we refresh counts by fetching beneficiary endpoint,
    // and also optimistically increment local map to show instant feedback.
    const handleCreateSuccess = async (beneficiaryId)=>{
        setCreating(true);
        // optimistic increment first
        setMessagesCountMap((prev)=>({
                ...prev,
                [beneficiaryId]: (prev[beneficiaryId] ?? 0) + 1
            }));
        try {
            const res = await fetch(`/api/beneficiaries/${encodeURIComponent(beneficiaryId)}`);
            if (!res.ok) {
                setOpenAddMessageFor(null);
                return;
            }
            const json = await res.json();
            const msgCount = typeof json?.messageCount === 'number' ? json.messageCount : typeof json?.messagesCount === 'number' ? json.messagesCount : typeof json?._count?.messages === 'number' ? json._count.messages : undefined;
            const respCount = typeof json?.responseCount === 'number' ? json.responseCount : typeof json?.responsesCount === 'number' ? json.responsesCount : undefined;
            if (typeof msgCount === 'number') {
                setMessagesCountMap((prev)=>({
                        ...prev,
                        [beneficiaryId]: msgCount
                    }));
            }
            if (typeof respCount === 'number') {
                setResponsesCountMap((prev)=>({
                        ...prev,
                        [beneficiaryId]: respCount
                    }));
            }
            setOpenAddMessageFor(null);
        } catch (err) {
            // already optimistic, ignore
            setOpenAddMessageFor(null);
        } finally{
            setCreating(false);
        }
    };
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BeneficiariesSection.useMemo[columns]": ()=>{
            return [
                {
                    id: 'number',
                    header: 'No.',
                    cell: {
                        "BeneficiariesSection.useMemo[columns]": ({ row })=>(page - 1) * rowsPerPage + row.index + 1
                    }["BeneficiariesSection.useMemo[columns]"],
                    size: 50
                },
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beneficiaryColumns"])({
                    onEdit: handleEdit,
                    onView: handleView,
                    onDelete: handleDelete,
                    // pass our local handlers/maps
                    messagesCountMap,
                    responsesCountMap,
                    currentUserRole,
                    onAddMessage: {
                        "BeneficiariesSection.useMemo[columns]": (id)=>openCreateModal(id)
                    }["BeneficiariesSection.useMemo[columns]"]
                })
            ];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["BeneficiariesSection.useMemo[columns]"], [
        page,
        rowsPerPage,
        handleEdit,
        handleView,
        handleDelete,
        messagesCountMap,
        responsesCountMap,
        currentUserRole
    ]);
    // local wrappers to call parent handlers
    function handleEdit(record) {
        handleEditProp(record);
    }
    function handleView(record) {
        handleViewProp(record);
    }
    function handleDelete(recordId) {
        handleDeleteProp(recordId);
    }
    // Because we renamed parent props above, rebind them here to avoid lint issues
    // (these are the original functions passed as props)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleEditProp = handleEdit;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleViewProp = handleView;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleDeleteProp = handleDelete;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: columns,
                data: paginatedData
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: paginatedData,
                columns: columns,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!openAddMessageFor,
                onOpenChange: (val)=>!val && closeCreateModal(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Create Message for beneficiary"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        openAddMessageFor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 max-w-3xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateMessageForm, {
                                    messageId: openAddMessageFor,
                                    onSuccess: async ()=>{
                                        await handleCreateSuccess(openAddMessageFor);
                                    },
                                    onCancel: closeCreateModal
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: closeCreateModal,
                                        disabled: creating,
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
_s(BeneficiariesSection, "PiLUCH89GN9UwSQWYIj/1Znfg7A=");
_c = BeneficiariesSection;
var _c;
__turbopack_context__.k.register(_c, "BeneficiariesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MessagesSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
function MessagesSection({ paginatedData, page, rowsPerPage, handleEdit, handleView, handleDelete, onRespond, currentUserRole, TableActions, deleteId, deleteLoading }) {
    const ownerLabel = (m)=>{
        if (m.name && `${m.name}`.trim().length > 0) return m.name;
        if (m.beneficiary) return `${m.beneficiary.firstName} ${m.beneficiary.lastName}`;
        return 'System';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            (!Array.isArray(paginatedData) || paginatedData.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8 text-gray-500",
                children: "No messages found."
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this),
            Array.isArray(paginatedData) && paginatedData.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0 cursor-pointer",
                                onClick: ()=>handleView(m, 'messages'),
                                role: "button",
                                tabIndex: 0,
                                onKeyDown: (e)=>{
                                    if (e.key === 'Enter' || e.key === ' ') handleView(m, 'messages');
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium truncate",
                                            children: ownerLabel(m)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                            lineNumber: 69,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm",
                                            children: m.messageKind ?? '-'
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                            lineNumber: 70,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "px-2 py-1 border rounded text-sm bg-blue-50 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-blue-900",
                                        onClick: ()=>handleView(m, 'messages'),
                                        children: "View"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this),
                                    onRespond && m.allowResponses && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "px-2 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700",
                                        onClick: ()=>onRespond(m.id),
                                        children: "Respond"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                        lineNumber: 94,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "px-2 py-1 border rounded text-sm bg-yellow-50 hover:bg-yellow-100 dark:bg-gray-800 dark:hover:bg-yellow-900",
                                        onClick: ()=>handleEdit(m),
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: TableActions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                    data: paginatedData,
                    columns: [],
                    tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef()
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
_c = MessagesSection;
var _c;
__turbopack_context__.k.register(_c, "MessagesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/responses.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "responseColumns": (()=>responseColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
function responseColumns({ onEdit, onView, onDelete, deleteId, deleteLoading }) {
    const cols = [
        {
            accessorKey: 'message',
            header: 'Message',
            cell: ({ row })=>row.original.message?.title ?? '-'
        },
        {
            accessorKey: 'message.messageKind',
            header: 'Message Kind',
            cell: ({ row })=>row.original.message?.messageKind ?? '-'
        },
        {
            accessorKey: 'responder',
            header: 'Responder',
            cell: ({ row })=>{
                const u = row.original.responderUser;
                const b = row.original.responderBeneficiary;
                if (u) return `${u.firstName} ${u.lastName}${u.email ? ` (${u.email})` : ''}`;
                if (b) return `${b.firstName} ${b.lastName}`;
                return 'System';
            }
        },
        {
            accessorKey: 'createdAt',
            header: 'Created At',
            cell: ({ row })=>row.getValue('createdAt') ? new Date(row.getValue('createdAt')).toLocaleString() : ''
        },
        {
            accessorKey: 'updatedAt',
            header: 'Updated At',
            cell: ({ row })=>row.getValue('updatedAt') ? new Date(row.getValue('updatedAt')).toLocaleString() : ''
        },
        {
            id: 'edit',
            header: 'Edit',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    className: "transition-colors duration-150 hover:bg-yellow-100 dark:hover:bg-yellow-800 hover:text-yellow-900 dark:hover:text-yellow-100",
                    onClick: ()=>onEdit(row.original),
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/responses.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
        },
        {
            id: 'view',
            header: 'View',
            cell: ({ row })=>onView ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    className: "transition-colors duration-150 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-900 dark:hover:text-blue-100",
                    onClick: ()=>onView(row.original),
                    children: "View"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/responses.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this) : null
        },
        {
            id: 'delete',
            header: 'Delete',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "destructive",
                    className: "transition-colors duration-150 hover:bg-red-600 dark:hover:bg-red-800 hover:text-white dark:hover:text-white",
                    onClick: ()=>onDelete && onDelete(row.original.id),
                    disabled: Boolean(deleteLoading && deleteId === row.original.id),
                    children: deleteLoading && deleteId === row.original.id ? 'Deleting...' : 'Delete'
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/responses.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
        }
    ];
    return cols;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/ResponsesSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ResponsesSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$responses$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/responses.tsx [app-client] (ecmascript)");
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
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$responses$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["responseColumns"])({
            onEdit: handleEdit,
            onView: handleView,
            onDelete: handleDelete,
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
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ResponsesSection.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: paginatedData,
                columns: columns,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/ResponsesSection.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = ResponsesSection;
var _c;
__turbopack_context__.k.register(_c, "ResponsesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/UsersSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>UsersSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function UsersSection({ paginatedData, page, rowsPerPage, handleEdit, handleView, handleDelete, messagesCountMap, responsesCountMap, currentUserRole, TableActions, onAddMessage }) {
    _s();
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UsersSection.useMemo[columns]": ()=>[
                {
                    id: 'number',
                    header: 'No.',
                    cell: {
                        "UsersSection.useMemo[columns]": ({ row })=>(page - 1) * rowsPerPage + row.index + 1
                    }["UsersSection.useMemo[columns]"],
                    size: 50
                },
                {
                    accessorKey: 'username',
                    header: 'Username',
                    cell: {
                        "UsersSection.useMemo[columns]": ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "whitespace-normal break-words max-w-xs",
                                children: row.getValue('username')
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/UsersSection.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                    }["UsersSection.useMemo[columns]"]
                },
                {
                    id: 'name',
                    header: 'Name',
                    cell: {
                        "UsersSection.useMemo[columns]": ({ row })=>`${row.original.firstName ?? ''} ${row.original.lastName ?? ''}`.trim() || '-'
                    }["UsersSection.useMemo[columns]"]
                },
                {
                    accessorKey: 'email',
                    header: 'Email',
                    cell: {
                        "UsersSection.useMemo[columns]": ({ row })=>row.getValue('email') ?? '-'
                    }["UsersSection.useMemo[columns]"]
                },
                {
                    id: 'role',
                    header: 'Role',
                    cell: {
                        "UsersSection.useMemo[columns]": ({ row })=>row.original.role ?? '-'
                    }["UsersSection.useMemo[columns]"]
                },
                {
                    accessorKey: 'createdAt',
                    header: 'Created At',
                    cell: {
                        "UsersSection.useMemo[columns]": ({ row })=>row.getValue('createdAt') ? new Date(row.getValue('createdAt')).toLocaleDateString() : ''
                    }["UsersSection.useMemo[columns]"]
                },
                {
                    id: 'view',
                    header: 'View',
                    cell: {
                        "UsersSection.useMemo[columns]": ({ row })=>handleView ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "sm",
                                variant: "outline",
                                className: "transition-colors duration-150 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-900 dark:hover:text-blue-100",
                                onClick: {
                                    "UsersSection.useMemo[columns]": ()=>handleView(row.original)
                                }["UsersSection.useMemo[columns]"],
                                children: "View"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/UsersSection.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this) : null
                    }["UsersSection.useMemo[columns]"]
                },
                {
                    id: 'edit',
                    header: 'Edit',
                    cell: {
                        "UsersSection.useMemo[columns]": ({ row })=>handleEdit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "sm",
                                variant: "outline",
                                className: "transition-colors duration-150 hover:bg-yellow-100 dark:hover:bg-yellow-800 hover:text-yellow-900 dark:hover:text-yellow-100",
                                onClick: {
                                    "UsersSection.useMemo[columns]": ()=>handleEdit(row.original)
                                }["UsersSection.useMemo[columns]"],
                                children: "Edit"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/UsersSection.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this) : null
                    }["UsersSection.useMemo[columns]"]
                },
                {
                    id: 'delete',
                    header: 'Delete',
                    cell: {
                        "UsersSection.useMemo[columns]": ({ row })=>handleDelete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "sm",
                                variant: "destructive",
                                className: "transition-colors duration-150 hover:bg-red-600 dark:hover:bg-red-800 hover:text-white dark:hover:text-white",
                                onClick: {
                                    "UsersSection.useMemo[columns]": ()=>handleDelete(row.original.id)
                                }["UsersSection.useMemo[columns]"],
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/UsersSection.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this) : null
                    }["UsersSection.useMemo[columns]"]
                }
            ]
    }["UsersSection.useMemo[columns]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        page,
        rowsPerPage,
        handleEdit,
        handleView,
        handleDelete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-center justify-end"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/UsersSection.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: columns,
                data: paginatedData
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/UsersSection.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                data: paginatedData,
                columns: columns,
                tableRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/UsersSection.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/UsersSection.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(UsersSection, "erkfbBpUuAY09jdvhSOqc0XsEHQ=");
_c = UsersSection;
var _c;
__turbopack_context__.k.register(_c, "UsersSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/views/settingsView.tsx [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/sections/SettingsSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SettingsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$settingsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/settingsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function SettingsSection({ currentUser, onEditProfile }) {
    if (!currentUser) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-muted",
                children: "No user data available."
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/SettingsSection.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/SettingsSection.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Account Settings"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/SettingsSection.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onEditProfile,
                            className: "bg-[#9f004d]",
                            children: "Edit my profile"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/sections/SettingsSection.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/SettingsSection.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/SettingsSection.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$settingsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: currentUser,
                isEditing: false
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/sections/SettingsSection.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/sections/SettingsSection.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = SettingsSection;
var _c;
__turbopack_context__.k.register(_c, "SettingsSection");
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
        institutionId: initialData?.institutionId || ''
    });
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
                lineNumber: 277,
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
                        lineNumber: 281,
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
                        lineNumber: 282,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 280,
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
                        lineNumber: 291,
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
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 290,
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
                        lineNumber: 301,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "dateOfBirth",
                        children: "Date of Birth"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 318,
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
                        lineNumber: 319,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 317,
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
                        lineNumber: 329,
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
                        lineNumber: 330,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 328,
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
                        lineNumber: 333,
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
                        lineNumber: 334,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                lineNumber: 332,
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
                        lineNumber: 337,
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
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institutionId",
                        children: "Institution"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 351,
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
                                        lineNumber: 365,
                                        columnNumber: 13
                                    }, this),
                                    institutions.map((inst)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
            showInstitutionForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-md p-4 mt-2 bg-muted space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_name",
                        children: "Institution Name*"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 385,
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
                        lineNumber: 386,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_type",
                        children: "Type*"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 393,
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
                                lineNumber: 403,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 394,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_logo",
                        children: "Logo*"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 408,
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
                        lineNumber: 409,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_email",
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 417,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "institution_email",
                        name: "email",
                        value: newInstitution.email,
                        onChange: handleInstitutionField
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 418,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_phone",
                        children: "Phone"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 424,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "institution_phone",
                        name: "phone",
                        value: newInstitution.phone,
                        onChange: handleInstitutionField
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 425,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "institution_headName",
                        children: "Head Name"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 431,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "institution_headName",
                        name: "headName",
                        value: newInstitution.headName,
                        onChange: handleInstitutionField
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 432,
                        columnNumber: 11
                    }, this),
                    institutionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-600 text-xs",
                        children: institutionError
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 438,
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
                                lineNumber: 440,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "beneficiaryStatus",
                        children: "Beneficiary Publish Status"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx",
                        lineNumber: 462,
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
                        lineNumber: 479,
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
_s(CreateBeneficiaryForm, "hIYn/fFNr2IGHPyFsLwd8qQN9vA=", false, function() {
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
"[project]/app/(admin)/admin/dashboard/createMessageForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateResponseForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CreateResponseForm({ messageId, editId, initialData, onSuccess, onCancel }) {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CreateResponseForm.useState": ()=>{
            if (initialData?.content && typeof initialData.content === 'string') return initialData.content;
            // If content might be JSON, stringify for editing
            if (initialData?.content && typeof initialData.content === 'object') return JSON.stringify(initialData.content, null, 2);
            return '';
        }
    }["CreateResponseForm.useState"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messageCreatorId, setMessageCreatorId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CreateResponseForm.useState": ()=>{
            // If editing an existing response, the initialData may include message.createdById
            return initialData?.message?.createdById ?? initialData?.message?.createdBy?.id ?? null;
        }
    }["CreateResponseForm.useState"]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateResponseForm.useEffect": ()=>{
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
        }
    }["CreateResponseForm.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: submit,
        className: "w-full max-w-3xl mx-auto p-6 bg-background rounded-xl shadow space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold",
                children: editId || initialData ? 'Edit Response' : 'Create Response'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            isAuthor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-gray-700 dark:text-gray-300 p-2 rounded bg-yellow-50 dark:bg-yellow-900",
                children: [
                    "You are the author of the original message — your response will be tagged as",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-1",
                        children: "Content"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: content,
                        onChange: (e)=>setContent(e.target.value),
                        rows: 8,
                        className: "w-full border rounded p-2 bg-white dark:bg-gray-800 dark:text-white"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                lineNumber: 158,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-800 disabled:opacity-60",
                        children: loading ? 'Saving...' : editId || initialData ? 'Save' : 'Create'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createMessageForm.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(CreateResponseForm, "ig8rcYWOH+43WWMV99rbv80hM7k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = CreateResponseForm;
var _c;
__turbopack_context__.k.register(_c, "CreateResponseForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/createResponseForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateResponseForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CreateResponseForm({ messageId, editId, initialData, onSuccess, onCancel }) {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CreateResponseForm.useState": ()=>{
            if (initialData?.content && typeof initialData.content === 'string') return initialData.content;
            // If content might be JSON, stringify for editing
            if (initialData?.content && typeof initialData.content === 'object') return JSON.stringify(initialData.content, null, 2);
            return '';
        }
    }["CreateResponseForm.useState"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messageCreatorId, setMessageCreatorId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CreateResponseForm.useState": ()=>{
            // If editing an existing response, the initialData may include message.createdById
            return initialData?.message?.createdById ?? initialData?.message?.createdBy?.id ?? null;
        }
    }["CreateResponseForm.useState"]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateResponseForm.useEffect": ()=>{
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
        }
    }["CreateResponseForm.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: submit,
        className: "w-full max-w-3xl mx-auto p-6 bg-background rounded-xl shadow space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold",
                children: editId || initialData ? 'Edit Response' : 'Create Response'
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            isAuthor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-gray-700 dark:text-gray-300 p-2 rounded bg-yellow-50 dark:bg-yellow-900",
                children: [
                    "You are the author of the original message — your response will be tagged as",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-1",
                        children: "Content"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: content,
                        onChange: (e)=>setContent(e.target.value),
                        rows: 8,
                        className: "w-full border rounded p-2 bg-white dark:bg-gray-800 dark:text-white"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                lineNumber: 158,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-800 disabled:opacity-60",
                        children: loading ? 'Saving...' : editId || initialData ? 'Save' : 'Create'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createResponseForm.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(CreateResponseForm, "ig8rcYWOH+43WWMV99rbv80hM7k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = CreateResponseForm;
var _c;
__turbopack_context__.k.register(_c, "CreateResponseForm");
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
function getCameFrom() {
    if ("TURBOPACK compile-time truthy", 1) {
        return sessionStorage.getItem('came-from') || '/';
    }
    "TURBOPACK unreachable";
}
function CreateOrEditUserForm({ mode = 'create', userId, initialData, onSuccess, onCancel, onDelete, forceChangePassword = false, forceChangeUsername = false }) {
    _s();
    // Defensive: don't even render the form if edit mode and userId is missing
    if (mode === 'edit' && !userId && !initialData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-500 text-center",
            children: "User ID missing. Cannot edit user"
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
            lineNumber: 36,
            columnNumber: 12
        }, this);
    }
    // initialRef keeps a snapshot of the data we consider "original" for diffing
    const initialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initialData ?? null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateOrEditUserForm.useEffect": ()=>{
            // keep ref in sync if parent passed new initialData
            if (initialData) initialRef.current = initialData;
        }
    }["CreateOrEditUserForm.useEffect"], [
        initialData
    ]);
    const isEdit = mode === 'edit' || !!userId || !!initialData;
    // Form state (visible values)
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: initialData?.firstName ?? '',
        lastName: initialData?.lastName ?? '',
        username: initialData?.username ?? '',
        email: initialData?.email ?? '',
        password: '',
        confirmPassword: ''
    });
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imageUrl, setImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.image || '');
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.image || null);
    const [imageToDelete, setImageToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [changeUsername, setChangeUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newUsername, setNewUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [confirmNewUsername, setConfirmNewUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [changePassword, setChangePassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newPassword, setNewPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [confirmNewPassword, setConfirmNewPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [checkingUsername, setCheckingUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [usernameInvalid, setUsernameInvalid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registerDot, setRegisterDot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loadingUser, setLoadingUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // If in edit mode and we have a userId, always fetch the latest user data to populate the form.
    // This ensures the form fields show existing data when "Edit" is clicked (even if parent didn't pass initialData).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateOrEditUserForm.useEffect": ()=>{
            let aborted = false;
            const shouldFetch = isEdit && userId;
            if (!shouldFetch) return;
            async function fetchUser() {
                setLoadingUser(true);
                setError('');
                try {
                    const res = await fetch(`/api/users/${encodeURIComponent(String(userId))}`);
                    if (!res.ok) {
                        const txt = await res.text().catch({
                            "CreateOrEditUserForm.useEffect.fetchUser": ()=>''
                        }["CreateOrEditUserForm.useEffect.fetchUser"]);
                        throw new Error(txt || `Failed to load user (${res.status})`);
                    }
                    const json = await res.json();
                    if (aborted) return;
                    // Populate form fields from fetched user
                    initialRef.current = json;
                    setForm({
                        firstName: json?.firstName ?? '',
                        lastName: json?.lastName ?? '',
                        username: json?.username ?? '',
                        email: json?.email ?? '',
                        password: '',
                        confirmPassword: ''
                    });
                    setImageUrl(json?.image ?? '');
                    setImagePreview(json?.image ?? null);
                    // Reset change toggles according to forced props (or false)
                    setChangePassword(Boolean(forceChangePassword));
                    setChangeUsername(Boolean(forceChangeUsername));
                    setNewPassword('');
                    setConfirmNewPassword('');
                    setNewUsername('');
                    setConfirmNewUsername('');
                    setUsernameInvalid(false);
                    setError('');
                    setSuccess('');
                } catch (err) {
                    if (!aborted) setError(err?.message || 'Failed to load user');
                } finally{
                    if (!aborted) setLoadingUser(false);
                }
            }
            fetchUser();
            return ({
                "CreateOrEditUserForm.useEffect": ()=>{
                    aborted = true;
                }
            })["CreateOrEditUserForm.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CreateOrEditUserForm.useEffect"], [
        isEdit,
        userId,
        forceChangePassword,
        forceChangeUsername
    ]);
    // If parent provides initialData explicitly (e.g., dashboard passed it), keep form in sync with that too.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateOrEditUserForm.useEffect": ()=>{
            if (!initialData) return;
            setForm({
                firstName: initialData?.firstName ?? '',
                lastName: initialData?.lastName ?? '',
                username: initialData?.username ?? '',
                email: initialData?.email ?? '',
                password: '',
                confirmPassword: ''
            });
            setImageUrl(initialData?.image || '');
            setImagePreview(initialData?.image || null);
            setImageFile(null);
            setImageToDelete(null);
            setChangePassword(Boolean(forceChangePassword));
            setChangeUsername(Boolean(forceChangeUsername));
            setNewPassword('');
            setConfirmNewPassword('');
            setNewUsername('');
            setConfirmNewUsername('');
            setError('');
            setSuccess('');
            setUsernameInvalid(false);
            initialRef.current = initialData;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CreateOrEditUserForm.useEffect"], [
        initialData
    ]);
    const handleUsernameBlur = async ()=>{
        if (!form.username) return;
        try {
            setCheckingUsername(true);
            const url = mode === 'edit' && userId ? `/api/users/check-exact?userId=${encodeURIComponent(userId)}&username=${encodeURIComponent(form.username)}` : `/api/users/check-available?username=${encodeURIComponent(form.username)}`;
            const res = await fetch(url);
            if (!res.ok) {
                setUsernameInvalid(false);
                setCheckingUsername(false);
                return;
            }
            const data = await res.json().catch(()=>null);
            const valid = data && (data.valid === true || data.available === true || data.ok === true);
            setUsernameInvalid(!valid);
        } catch  {
            setUsernameInvalid(false);
        } finally{
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
            try {
                await fetch('/api/users/delete-image', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        imageUrl
                    })
                });
            } catch  {
            // ignore
            }
        }
    };
    // Animated dots for submit button
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
        if (!isEdit) {
            if (!form.firstName || !form.lastName || !form.username || !form.email || !form.password || !form.confirmPassword || !imageFile && !imagePreview) {
                setError('All fields and image are required');
                setIsSubmitting(false);
                return;
            }
            if (form.password !== form.confirmPassword) {
                setError('Passwords do not match');
                setIsSubmitting(false);
                return;
            }
        } else {
            if (changeUsername) {
                if (!newUsername || !confirmNewUsername) {
                    setError('Please provide the new username and confirmation');
                    setIsSubmitting(false);
                    return;
                }
                if (newUsername !== confirmNewUsername) {
                    setError('New usernames do not match');
                    setIsSubmitting(false);
                    return;
                }
            }
            if (changePassword) {
                if (!newPassword || !confirmNewPassword) {
                    setError('Please provide the new password and confirmation');
                    setIsSubmitting(false);
                    return;
                }
                if (newPassword !== confirmNewPassword) {
                    setError('New passwords do not match');
                    setIsSubmitting(false);
                    return;
                }
            }
            if (usernameInvalid) {
                setError('The Username appears invalid');
                setIsSubmitting(false);
                return;
            }
            if (!userId && !initialRef.current?.id) {
                setError('Invalid form mode or missing user ID');
                setIsSubmitting(false);
                return;
            }
        }
        try {
            const formData = new FormData();
            if (!isEdit) {
                formData.append('firstName', form.firstName);
                formData.append('lastName', form.lastName);
                formData.append('username', form.username);
                formData.append('email', form.email);
                formData.append('password', form.password);
                if (imageFile) formData.append('image', imageFile);
            } else {
                const orig = initialRef.current ?? {};
                // include original username to help server-side checks
                if (orig.username) formData.append('username', orig.username);
                else if (form.username) formData.append('username', form.username);
                if (form.firstName !== (orig.firstName ?? '')) formData.append('firstName', form.firstName);
                if (form.lastName !== (orig.lastName ?? '')) formData.append('lastName', form.lastName);
                if (form.email !== (orig.email ?? '')) formData.append('email', form.email);
                if (changeUsername) formData.append('newUsername', newUsername);
                if (changePassword) formData.append('password', newPassword);
                else if (form.password) formData.append('password', form.password);
                if (imageFile) formData.append('image', imageFile);
                if (imageToDelete) formData.append('oldImageUrl', imageToDelete);
            }
            let res;
            if (isEdit) {
                const idToUse = userId ?? initialRef.current?.id;
                res = await fetch(`/api/users/${encodeURIComponent(String(idToUse))}`, {
                    method: 'PATCH',
                    body: formData
                });
            } else {
                res = await fetch('/api/users', {
                    method: 'POST',
                    body: formData
                });
            }
            const data = await res.json().catch(()=>null);
            if (!res.ok) throw new Error(data && (data.error || data.message) || 'Operation failed');
            setSuccess(isEdit ? 'User updated!' : 'User created!');
            if (!isEdit) {
                const cameFrom = getCameFrom();
                sessionStorage.removeItem('came-from');
                setTimeout(()=>{
                    router.push(cameFrom);
                }, 800);
            } else {
                if (data?.user) {
                    setImageUrl(data.user.image || '');
                    setImagePreview(data.user.image || null);
                    setForm((f)=>({
                            ...f,
                            username: data.user.username || f.username
                        }));
                    initialRef.current = {
                        ...initialRef.current || {},
                        ...data.user
                    };
                }
                if (onSuccess) onSuccess();
            }
        } catch (err) {
            setError(err?.message || 'Something went wrong');
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleCancel = ()=>{
        if (onCancel) onCancel();
        else router.back();
    };
    const handleDelete = async ()=>{
        const idToUse = userId ?? initialRef.current?.id;
        if (!idToUse) return;
        if (!window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) return;
        setDeleting(true);
        try {
            const res = await fetch(`/api/users/${encodeURIComponent(String(idToUse))}`, {
                method: 'DELETE'
            });
            if (!res.ok) {
                const data = await res.json().catch(()=>null);
                throw new Error(data?.error || 'Failed to delete user');
            }
            if (onDelete) onDelete(String(idToUse));
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
        children: loadingUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 text-center",
            children: "Loading…"
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
            lineNumber: 409,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
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
                                    lineNumber: 416,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center -mt-2 -mr-2",
                                    onClick: handleImageDelete,
                                    title: "Delete Image",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 421,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 415,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-24 rounded-full border flex items-center justify-center mb-2 text-gray-400",
                            children: "No Image"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 431,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: "image/*",
                            onChange: handleImageChange,
                            className: "mt-2 mb-2 block"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 435,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 413,
                    columnNumber: 11
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
                            lineNumber: 445,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "lastName",
                            placeholder: "Last Name",
                            value: form.lastName,
                            onChange: handleChange,
                            className: "border p-2 rounded w-1/2"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 452,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 444,
                    columnNumber: 11
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
                            autoComplete: "off",
                            disabled: changeUsername
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 463,
                            columnNumber: 13
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
                            lineNumber: 473,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 462,
                    columnNumber: 11
                }, this),
                checkingUsername && mode === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs block",
                    children: "Checking username…"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 484,
                    columnNumber: 13
                }, this),
                usernameInvalid && mode === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-red-500 block",
                    children: "The Username appears invalid."
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 487,
                    columnNumber: 13
                }, this),
                isEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border rounded p-3 bg-gray-50 dark:bg-gray-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: changeUsername,
                                    onChange: ()=>{
                                        setChangeUsername(!changeUsername);
                                        setNewUsername('');
                                        setConfirmNewUsername('');
                                        setError('');
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 494,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: "Change username"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 504,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 493,
                            columnNumber: 15
                        }, this),
                        changeUsername && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    placeholder: "New username",
                                    value: newUsername,
                                    onChange: (e)=>setNewUsername(e.target.value),
                                    className: "border p-2 rounded w-full",
                                    autoComplete: "off"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 509,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    placeholder: "Confirm new username",
                                    value: confirmNewUsername,
                                    onChange: (e)=>setConfirmNewUsername(e.target.value),
                                    className: "border p-2 rounded w-full",
                                    autoComplete: "off"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 516,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-muted-foreground",
                                    children: "If you change username, you'll be updating the account handle."
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 523,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 508,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 492,
                    columnNumber: 13
                }, this),
                !isEdit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            name: "password",
                            placeholder: "Password",
                            onChange: handleChange,
                            value: form.password,
                            className: "border p-2 rounded w-1/2",
                            autoComplete: "new-password"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 534,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            name: "confirmPassword",
                            placeholder: "Confirm Password",
                            onChange: handleChange,
                            value: form.confirmPassword,
                            className: "border p-2 rounded w-1/2",
                            autoComplete: "new-password"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 543,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 533,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border rounded p-3 bg-gray-50 dark:bg-gray-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: changePassword,
                                    onChange: ()=>{
                                        setChangePassword(!changePassword);
                                        setNewPassword('');
                                        setConfirmNewPassword('');
                                        setError('');
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 556,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: "Change password"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 566,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 555,
                            columnNumber: 15
                        }, this),
                        changePassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    placeholder: "New password",
                                    value: newPassword,
                                    onChange: (e)=>setNewPassword(e.target.value),
                                    className: "border p-2 rounded w-1/2",
                                    autoComplete: "new-password"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 571,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    placeholder: "Confirm new password",
                                    value: confirmNewPassword,
                                    onChange: (e)=>setConfirmNewPassword(e.target.value),
                                    className: "border p-2 rounded w-1/2",
                                    autoComplete: "new-password"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 579,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 570,
                            columnNumber: 17
                        }, this),
                        !changePassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-muted-foreground mt-2",
                            children: "Leave password blank to keep existing password."
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 590,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 554,
                    columnNumber: 13
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-sm",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 597,
                    columnNumber: 21
                }, this),
                success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-green-600 text-sm",
                    children: success
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 598,
                    columnNumber: 23
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-1/2 bg-green-600 text-white py-2 rounded flex items-center justify-center",
                            disabled: isSubmitting || checkingUsername || usernameInvalid || !isEdit && form.password !== form.confirmPassword || isEdit && changePassword && newPassword !== confirmNewPassword || isEdit && changeUsername && newUsername !== confirmNewUsername,
                            children: [
                                isEdit ? 'Edit' : 'Register',
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
                                            lineNumber: 617,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                                    lineNumber: 615,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 601,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleCancel,
                            className: "w-1/2 bg-black text-white py-2 rounded",
                            disabled: deleting,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                            lineNumber: 628,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 600,
                    columnNumber: 11
                }, this),
                isEdit && (userId ?? initialRef.current?.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleDelete,
                        className: "w-full bg-red-600 text-white py-2 rounded mt-2",
                        disabled: deleting,
                        children: deleting ? 'Deleting...' : 'Delete User'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                        lineNumber: 640,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
                    lineNumber: 639,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
            lineNumber: 411,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/createUserForm.tsx",
        lineNumber: 407,
        columnNumber: 5
    }, this);
}
_s(CreateOrEditUserForm, "6ce6BSFKff/hRFq5EyL7Z/W/b94=", false, function() {
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
"[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BeneficiaryView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Use the viewer for read-only rich text display (if any rich text fields)
const TiptapJsonViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c = ()=>__turbopack_context__.r("[project]/components/editor/tiptap-json-viewer.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/components/editor/tiptap-json-viewer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = TiptapJsonViewer;
function BeneficiaryView({ data, onClose }) {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const role = session?.user?.role ?? 'guest';
    const isPrivileged = role === 'super' || role === 'admin' || role === 'moderator';
    const isSelfBeneficiary = role === 'beneficiary' && !!data && // infer beneficiary identity from session first/last name match when possible
    session?.user?.firstName && session?.user?.lastName && session.user.firstName.trim().toLowerCase() === (data.firstName ?? '').trim().toLowerCase() && session.user.lastName.trim().toLowerCase() === (data.lastName ?? '').trim().toLowerCase();
    const [messageCount, setMessageCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(typeof data?.messageCount === 'number' ? data.messageCount : null);
    const [responseCount, setResponseCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(typeof data?.responseCount === 'number' ? data.responseCount : null);
    const [countsLoading, setCountsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BeneficiaryView.useEffect": ()=>{
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
        }
    }["BeneficiaryView.useEffect"], [
        data?.id,
        isSelfBeneficiary,
        isPrivileged
    ]);
    // Render a compact card for beneficiary (for self) or a full info card (for privileged users)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-5xl mx-auto space-y-4 bg-background rounded-xl shadow p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-xl",
                        children: "Beneficiary"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600",
                        children: countsLoading ? 'Loading counts…' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                            isPrivileged && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                            !isPrivileged && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            Array.isArray(data.images) && data.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Images:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 mt-2",
                                        children: data.images.map((img, idx)=>img ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                            isPrivileged && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(BeneficiaryView, "TUQreFzCQN9VAIlnzCfR/g2Frk4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c2 = BeneficiaryView;
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
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TiptapJsonViewer$dynamic");
__turbopack_context__.k.register(_c1, "TiptapJsonViewer");
__turbopack_context__.k.register(_c2, "BeneficiaryView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MessageView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// TipTap JSON viewer for rich text message
const TiptapJsonViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/components/editor/tiptap-json-viewer.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/components/editor/tiptap-json-viewer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = TiptapJsonViewer;
function AuthorBadge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "ml-2 inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
        children: "Author"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c1 = AuthorBadge;
function MessageView({ data, onClose, onRespond }) {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    if (!data) return null;
    const content = data.content;
    const renderContent = (c)=>{
        if (c === undefined || c === null) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "-"
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
            lineNumber: 73,
            columnNumber: 47
        }, this);
        if (typeof c === 'object') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded bg-white dark:bg-gray-900 mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TiptapJsonViewer, {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-5xl mx-auto space-y-6 p-6 bg-background rounded-xl shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-semibold text-xl mb-4",
                children: "View Message"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-medium",
                                children: ownerLabel()
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-xs",
                                children: data.messageCategory ?? '-'
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-medium mb-1",
                                children: "Content"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    authorResponses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-lg mb-3",
                                children: "Author's response"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: authorResponses.map((r)=>{
                                    const isAuthor = isResponseAuthor(data, r);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 border-l-4 border-pink-600 bg-pink-50 dark:bg-pink-900 rounded",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-medium",
                                                                children: responderLabelText(r)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 25
                                                            }, this),
                                                            isAuthor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthorBadge, {}, void 0, false, {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    otherResponses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-lg mb-3",
                                children: "Responses"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: otherResponses.map((r)=>{
                                    const isAuthor = isResponseAuthor(data, r);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 border rounded bg-white dark:bg-gray-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-medium",
                                                                children: responderLabelText(r)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 25
                                                            }, this),
                                                            isAuthor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthorBadge, {}, void 0, false, {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 mt-4",
                children: [
                    onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700",
                        onClick: onClose,
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this),
                    onRespond && data.allowResponses && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(MessageView, "xGqsfA9Yc4bug2CeORcyTsHwvXY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c2 = MessageView;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TiptapJsonViewer");
__turbopack_context__.k.register(_c1, "AuthorBadge");
__turbopack_context__.k.register(_c2, "MessageView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ResponseView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Lazy TipTap JSON viewer for rich text
const TiptapJsonViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/components/editor/tiptap-json-viewer.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/components/editor/tiptap-json-viewer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = TiptapJsonViewer;
function RoleBadge({ role }) {
    if (!role) return null;
    const cls = role === 'AUTHOR' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' : role === 'BENEFICIARY' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100' : role === 'SYSTEM' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100' : 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `ml-2 inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded ${cls}`,
        children: role === 'AUTHOR' ? 'Author' : role.charAt(0) + role.slice(1).toLowerCase()
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c1 = RoleBadge;
function ResponseView({ data, onClose }) {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    if (!data) return null;
    const renderContent = (c)=>{
        if (c === undefined || c === null) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "-"
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
            lineNumber: 101,
            columnNumber: 47
        }, this);
        if (typeof c === 'object') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TiptapJsonViewer, {
                content: c,
                className: "tiptap tiptap-view-only border rounded bg-white dark:bg-gray-900 p-3"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "whitespace-pre-line",
            children: String(c)
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
            lineNumber: 110,
            columnNumber: 12
        }, this);
    };
    const responderLabelText = ()=>{
        if (data.responderUser) {
            const u = data.responderUser;
            return `${u.firstName ?? ''} ${u.lastName ?? ''}`.trim() + (u.email ? ` (${u.email})` : '');
        }
        if (data.responderBeneficiary) {
            const b = data.responderBeneficiary;
            return `${b.firstName ?? ''} ${b.lastName ?? ''}`.trim();
        }
        return 'System';
    };
    // Determine if this response should be tagged "Author"
    const isAuthor = // 1) Server-declared author
    data.responderRole === 'AUTHOR' || !!data.message?.createdById && !!data.responderUser?.id && String(data.message.createdById) === String(data.responderUser.id) || !!data.message?.beneficiary?.id && !!data.responderBeneficiary?.id && String(data.message.beneficiary.id) === String(data.responderBeneficiary.id) || !!data.message?.createdById && !!data.responderBeneficiary?.createdById && String(data.message.createdById) === String(data.responderBeneficiary.createdById);
    const badgeRole = isAuthor ? 'AUTHOR' : data.responderRole ?? undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-3xl mx-auto p-6 bg-background rounded-xl shadow space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-medium",
                                        children: responderLabelText()
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleBadge, {
                                        role: badgeRole
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500 mt-1",
                                children: [
                                    data.createdAt ? new Date(data.createdAt).toLocaleString() : '',
                                    data.message?.title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2",
                                        children: [
                                            '· in "',
                                            data.message.title,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
                                        lineNumber: 155,
                                        columnNumber: 36
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right text-xs text-gray-500",
                        children: data.updatedAt ? `Updated ${new Date(data.updatedAt).toLocaleString()}` : ''
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-2 pb-4 border-t",
                children: renderContent(data.content)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700",
                    onClick: onClose,
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_s(ResponseView, "xGqsfA9Yc4bug2CeORcyTsHwvXY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c2 = ResponseView;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TiptapJsonViewer");
__turbopack_context__.k.register(_c1, "RoleBadge");
__turbopack_context__.k.register(_c2, "ResponseView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/components/views/userView.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>UserView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$UsersSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/UsersSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createUserForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createUserForm.tsx [app-client] (ecmascript)");
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
function UserView() {
    _s();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // create/edit-user dialog state
    const [openCreate, setOpenCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [creating, setCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createError, setCreateError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // edit state
    const [editUser, setEditUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openEdit, setOpenEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // form state for create (kept minimal; create form component handles full flow)
    const [firstName, setFirstName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [lastName, setLastName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchUsers = async ()=>{
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('/api/users');
            if (!res.ok) {
                const body = await res.text().catch(()=>'');
                throw new Error(body || `Failed to fetch users (${res.status})`);
            }
            const json = await res.json();
            setUsers(Array.isArray(json) ? json : []);
        } catch (err) {
            console.error('Failed to load users', err);
            setError(err?.message || 'Failed to load users');
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserView.useEffect": ()=>{
            fetchUsers();
        }
    }["UserView.useEffect"], []);
    const handleOpenCreate = ()=>{
        setCreateError(null);
        setFirstName('');
        setLastName('');
        setUsername('');
        setEmail('');
        setPassword('');
        setImageFile(null);
        setOpenCreate(true);
    };
    const handleCreateSubmit = async (e)=>{
        e?.preventDefault();
        setCreateError(null);
        if (!firstName || !lastName || !username || !email || !password || !imageFile) {
            setCreateError('All fields including image are required');
            return;
        }
        setCreating(true);
        try {
            const form = new FormData();
            form.append('firstName', firstName);
            form.append('lastName', lastName);
            form.append('username', username);
            form.append('email', email);
            form.append('password', password);
            form.append('image', imageFile);
            const res = await fetch('/api/users', {
                method: 'POST',
                body: form
            });
            const json = await res.json().catch(()=>null);
            if (!res.ok) {
                throw new Error(json && json.error || `Failed to create user (${res.status})`);
            }
            // refresh list after successful create
            await fetchUsers();
            setOpenCreate(false);
        } catch (err) {
            console.error('Create user failed', err);
            setCreateError(err?.message || 'Failed to create user');
        } finally{
            setCreating(false);
        }
    };
    const handleEdit = (u)=>{
        setEditUser(u);
        setOpenEdit(true);
    };
    const handleEditSuccess = async ()=>{
        setOpenEdit(false);
        setEditUser(null);
        await fetchUsers();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-6xl mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold",
                        children: "Users"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                onClick: fetchUsers,
                                disabled: loading,
                                children: "Refresh"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                onClick: handleOpenCreate,
                                children: "Add User"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$UsersSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                paginatedData: users,
                page: 1,
                rowsPerPage: 100,
                handleEdit: (u)=>handleEdit(u),
                handleView: (u)=>{
                    // view details: quick alert fallback (could open a details view instead)
                    alert(`User: ${u.username}\nName: ${u.firstName ?? ''} ${u.lastName ?? ''}\nEmail: ${u.email ?? ''}`);
                },
                handleDelete: (id)=>{
                    if (!confirm('Delete user? This cannot be undone.')) return;
                    fetch(`/api/users/${encodeURIComponent(String(id))}`, {
                        method: 'DELETE'
                    }).then((res)=>{
                        if (!res.ok) throw new Error('Delete failed');
                        return res.json();
                    }).then(()=>fetchUsers()).catch((err)=>alert(`Delete failed: ${err?.message ?? err}`));
                },
                messagesCountMap: {},
                responsesCountMap: {},
                currentUserRole: 'super',
                TableActions: ()=>null,
                onAddMessage: ()=>{}
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: openCreate,
                onOpenChange: (val)=>!val && setOpenCreate(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Create new user"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleCreateSubmit,
                            className: "space-y-3 p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "firstName",
                                            children: "First name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "firstName",
                                            value: firstName,
                                            onChange: (e)=>setFirstName(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "lastName",
                                            children: "Last name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "lastName",
                                            value: lastName,
                                            onChange: (e)=>setLastName(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "username",
                                            children: "Username"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "username",
                                            value: username,
                                            onChange: (e)=>setUsername(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "email",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "email",
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "password",
                                            children: "Password"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "password",
                                            type: "password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "image",
                                            children: "Image"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "image",
                                            type: "file",
                                            accept: ".png,.jpg,.jpeg",
                                            onChange: (e)=>setImageFile(e.target.files ? e.target.files[0] : null)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                createError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-red-600",
                                    children: createError
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                    lineNumber: 230,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 justify-end mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "outline",
                                            onClick: ()=>setOpenCreate(false),
                                            disabled: creating,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            disabled: creating,
                                            children: creating ? 'Creating…' : 'Create User'
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: openEdit,
                onOpenChange: (val)=>!val && setOpenEdit(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Edit user"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this),
                        editUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 max-w-3xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createUserForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                mode: "edit",
                                userId: editUser.id,
                                initialData: editUser,
                                onSuccess: handleEditSuccess,
                                onCancel: ()=>{
                                    setOpenEdit(false);
                                    setEditUser(null);
                                },
                                onDelete: (id)=>{
                                    // propagate delete and refresh
                                    fetch(`/api/users/${encodeURIComponent(String(id))}`, {
                                        method: 'DELETE'
                                    }).then((res)=>{
                                        if (!res.ok) throw new Error('Delete failed');
                                        return res.json();
                                    }).then(()=>{
                                        setOpenEdit(false);
                                        setEditUser(null);
                                        fetchUsers();
                                    }).catch((err)=>alert(`Delete failed: ${err?.message ?? err}`));
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                                lineNumber: 258,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-red-600 mt-4",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
                lineNumber: 287,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/components/views/userView.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(UserView, "wFbGq71N5EhfwpCq5UkptREs4p8=");
_c = UserView;
var _c;
__turbopack_context__.k.register(_c, "UserView");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
// Sections we keep
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$BeneficiariesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/BeneficiariesSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$MessagesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/MessagesSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$ResponsesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/ResponsesSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$UsersSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/UsersSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$SettingsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/sections/SettingsSection.tsx [app-client] (ecmascript)");
// Create/edit forms we keep
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createBeneficiaryForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createMessageForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createMessageForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createResponseForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createResponseForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createUserForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createUserForm.tsx [app-client] (ecmascript)");
// View-only components we keep
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$beneficiaryView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/beneficiaryView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$messageView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/messageView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$responseView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/responseView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$userView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/views/userView.tsx [app-client] (ecmascript)");
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
// Table controls component for search/filter/add/export
function TableControls({ search, setSearch, onAddNew, exportExcel, downloadPDF, activeSection, sectionLabels, hideSearch, addNewLabel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center justify-between mb-4 gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 flex-1",
                children: [
                    !hideSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "border px-3 py-2 rounded w-64 focus:outline-pink-500 dark:bg-gray-800 dark:text-white",
                        placeholder: `Search ${sectionLabels[activeSection] || 'records'}...`,
                        value: search,
                        onChange: (e)=>setSearch(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    !hideSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-2 py-1 border rounded text-sm bg-green-50 hover:bg-green-100 dark:bg-gray-800 dark:hover:bg-green-900",
                                title: "Export to Excel",
                                onClick: exportExcel,
                                children: "Export to Excel"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-2 py-1 border rounded text-sm bg-yellow-50 hover:bg-yellow-100 dark:bg-gray-800 dark:hover:bg-yellow-900",
                                title: "Download as PDF",
                                onClick: downloadPDF,
                                children: "Download as PDF"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: addNewLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-900 text-sm font-semibold",
                    onClick: onAddNew,
                    children: addNewLabel
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c = TableControls;
// Keep only these sections in the dashboard (added 'users' and 'settings')
const sections = [
    'beneficiaries',
    'messages',
    'responses',
    'users',
    'settings'
];
const sectionFeatures = {
    beneficiaries: {
        apiRoute: '/api/beneficiaries'
    },
    messages: {
        apiRoute: '/api/messages'
    },
    responses: {
        apiRoute: '/api/responses'
    },
    users: {
        apiRoute: '/api/users'
    },
    settings: {}
};
const sectionIcons = {
    beneficiaries: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUsers"], {
        className: "text-indigo-600 dark:text-indigo-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 119,
        columnNumber: 18
    }, this),
    messages: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
        className: "text-orange-500 dark:text-orange-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 120,
        columnNumber: 13
    }, this),
    responses: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReply"], {
        className: "text-purple-600 dark:text-purple-400"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 121,
        columnNumber: 14
    }, this),
    users: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserCog"], {
        className: "text-gray-700 dark:text-gray-300"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 122,
        columnNumber: 10
    }, this),
    settings: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCogs"], {
        className: "text-gray-700 dark:text-gray-300"
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 123,
        columnNumber: 13
    }, this)
};
const sectionLabels = {
    beneficiaries: 'Beneficiaries',
    messages: 'Messages',
    responses: 'Responses',
    users: 'Users',
    settings: 'Settings'
};
function AdminDashboardPage() {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('beneficiaries');
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
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('beneficiaries');
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [downloadModalOpen, setDownloadModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [downloadColumns, setDownloadColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pendingDownloadData, setPendingDownloadData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Hide controls when viewing/editing/adding
    const [hideControls, setHideControls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Settings -> edit flags (when Settings triggers edit, pass flags to the edit form)
    const [settingsForceChangePassword, setSettingsForceChangePassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settingsForceChangeUsername, setSettingsForceChangeUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboardPage.useEffect": ()=>{
            const searchType = searchParams.get('type') ?? null;
            const sectionToLoad = searchType && sections.includes(searchType) ? searchType : 'beneficiaries';
            handleMenuClick(sectionToLoad);
        // eslint-disable-next-line
        }
    }["AdminDashboardPage.useEffect"], []);
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
    function getFilteredData(sortedData, search) {
        if (!Array.isArray(sortedData)) return [];
        if (!search.trim()) return sortedData;
        const lower = search.toLowerCase();
        return sortedData.filter((item)=>Object.keys(item).some((key)=>typeof item[key] === 'string' && item[key].toLowerCase().includes(lower)));
    }
    function getPaginatedData(filteredData, page, rowsPerPage) {
        if (!Array.isArray(filteredData)) return [];
        return (filteredData ?? []).slice((page - 1) * rowsPerPage, page * rowsPerPage);
    }
    const sortedData = getSortedData(data, sortBy, sortOrder, activeSection);
    const filteredData = getFilteredData(sortedData, search);
    const pageCount = Math.max(1, Math.ceil((filteredData?.length ?? 0) / rowsPerPage));
    const paginatedData = getPaginatedData(filteredData, page, rowsPerPage);
    // Edit/View handlers
    function handleEdit(record) {
        setHideControls(true);
        setEditRecord(record);
    }
    function handleCancelEdit() {
        setHideControls(false);
        setEditRecord(null);
        // reset settings flags if any
        setSettingsForceChangePassword(false);
        setSettingsForceChangeUsername(false);
    }
    async function handleSaveEdit() {
        setHideControls(false);
        setEditRecord(null);
        // reset settings flags
        setSettingsForceChangePassword(false);
        setSettingsForceChangeUsername(false);
        await handleMenuClick(activeSection);
    }
    function handleRespondToMessage(messageId) {
        setHideControls(true);
        setActiveSection('responses');
        setEditRecord({
            messageId
        });
        setViewRecord(null);
    }
    // Unified view handler used by sections.
    async function handleView(record, source) {
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
                const linkedResponses = Array.isArray(respData) ? respData.filter((r)=>r.message && (r.message.id === parentId || Number(r.message.id) === parentId) || r.messageId && Number(r.messageId) === parentId) : [];
                setViewRecord({
                    ...msgData,
                    responses: linkedResponses
                });
                setActiveSection('messages');
                return;
            } catch  {
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
            } catch  {
            // fallback
            }
        }
        // For beneficiaries, users or fallback, set viewRecord directly (view rendering handles specific cases)
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
        setHideControls(true);
        setEditRecord({});
        setViewRecord(null);
    }
    // Handler called when SettingsSection signals "open edit"
    function handleSettingsOpen(payload) {
        // Open the users edit form in the main area
        const id = payload?.id ?? session?.user?.id ?? null;
        if (!id) return;
        setSettingsForceChangePassword(Boolean(payload.forceChangePassword));
        setSettingsForceChangeUsername(Boolean(payload.forceChangeUsername));
        // set the active section to users so renderSection will render the edit form
        setActiveSection('users');
        sectionRef.current = 'users';
        // set editRecord to an object that indicates edit for this user id;
        // CreateUserForm (the edit form) will fetch the user if no initialData is provided
        setEditRecord({
            id
        });
        setHideControls(true);
    }
    function renderSection() {
        if (viewRecord) {
            switch(activeSection){
                case 'messages':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$messageView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        data: viewRecord,
                        onClose: handleCloseView,
                        onRespond: handleRespondToMessage
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 431,
                        columnNumber: 13
                    }, this);
                case 'responses':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$responseView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        data: viewRecord,
                        onClose: handleCloseView
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 438,
                        columnNumber: 18
                    }, this);
                case 'beneficiaries':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$beneficiaryView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        data: viewRecord,
                        onClose: handleCloseView
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 440,
                        columnNumber: 18
                    }, this);
                case 'users':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$views$2f$userView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 442,
                        columnNumber: 18
                    }, this);
                case 'settings':
                    // Settings section will manage its own UI (edit profile etc.)
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$SettingsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        currentUserId: session?.user?.id,
                        onOpenEdit: (payload)=>{
                            handleSettingsOpen(payload);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 446,
                        columnNumber: 13
                    }, this);
                default:
                    return null;
            }
        }
        if (editRecord) {
            switch(activeSection){
                case 'beneficiaries':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createBeneficiaryForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        initialData: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit,
                        mode: editRecord?.id ? 'edit' : 'create'
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 462,
                        columnNumber: 13
                    }, this);
                case 'messages':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createMessageForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        initialValues: editRecord,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 471,
                        columnNumber: 13
                    }, this);
                case 'responses':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createResponseForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        messageId: editRecord?.messageId,
                        editId: editRecord?.id,
                        initialData: editRecord?.id ? editRecord : undefined,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 479,
                        columnNumber: 13
                    }, this);
                case 'users':
                    // Render the existing create/edit user form in edit mode.
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$createUserForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        mode: "edit",
                        userId: String(editRecord?.id ?? editRecord?.userId ?? ''),
                        initialData: editRecord?.initialData ?? undefined,
                        onSuccess: handleSaveEdit,
                        onCancel: handleCancelEdit,
                        forceChangePassword: settingsForceChangePassword,
                        forceChangeUsername: settingsForceChangeUsername
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 490,
                        columnNumber: 13
                    }, this);
                default:
                    return null;
            }
        }
        switch(activeSection){
            case 'beneficiaries':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$BeneficiariesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: (r)=>handleView(r, 'beneficiaries'),
                    handleDelete: handleDelete,
                    messagesCountMap: {},
                    requestsCountMap: {},
                    currentUserRole: session?.user?.role ?? '',
                    TableActions: ()=>null,
                    onAddMessage: (id)=>{
                        // open create message modal bound to beneficiary
                        setHideControls(true);
                        setEditRecord({
                            beneficiaryId: id
                        });
                    },
                    onAddRequest: ()=>{},
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 508,
                    columnNumber: 11
                }, this);
            case 'messages':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$MessagesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: (r)=>handleView(r, 'messages'),
                    handleDelete: handleDelete,
                    onRespond: handleRespondToMessage,
                    currentUserRole: session?.user?.role ?? '',
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 531,
                    columnNumber: 11
                }, this);
            case 'responses':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$ResponsesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    lineNumber: 547,
                    columnNumber: 11
                }, this);
            case 'users':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$UsersSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    paginatedData: paginatedData,
                    page: page,
                    rowsPerPage: rowsPerPage,
                    handleEdit: handleEdit,
                    handleView: (r)=>handleView(r, 'users'),
                    handleDelete: handleDelete,
                    TableActions: ()=>null,
                    deleteId: deleteId,
                    deleteLoading: deleteLoading
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 561,
                    columnNumber: 11
                }, this);
            case 'settings':
                // SettingsSection is rendered above when viewRecord is not set; here we also render it when selected as activeSection
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$sections$2f$SettingsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    currentUserId: session?.user?.id,
                    onOpenEdit: (payload)=>{
                        handleSettingsOpen(payload);
                    }
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 576,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    }
    const isSettingsSection = activeSection === 'settings';
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
                                lineNumber: 599,
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
                                    lineNumber: 607,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaAngleLeft"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                    lineNumber: 607,
                                    columnNumber: 62
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 602,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 598,
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
                                        lineNumber: 624,
                                        columnNumber: 15
                                    }, this),
                                    !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: sectionLabels[section]
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                        lineNumber: 625,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, section, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 612,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 610,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 593,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 min-w-0 overflow-y-auto p-4 bg-white dark:bg-gray-900 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: sectionIcons[activeSection]
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 635,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold text-gray-700 dark:text-gray-100",
                                children: sectionLabels[activeSection]
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 636,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 634,
                        columnNumber: 9
                    }, this),
                    !hideControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableControls, {
                        search: search,
                        setSearch: setSearch,
                        onAddNew: handleAddNew,
                        exportExcel: handleExportExcel,
                        downloadPDF: handleDownloadPDFButton,
                        activeSection: activeSection,
                        sectionLabels: sectionLabels,
                        hideSearch: false,
                        addNewLabel: isSettingsSection ? undefined : `Add New ${sectionLabels[activeSection]}`
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 643,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col",
                        children: activeSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 w-full",
                            children: renderSection()
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                            lineNumber: 658,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 657,
                        columnNumber: 9
                    }, this),
                    pageCount > 1 && !hideControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mt-4 justify-end items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-2 py-1 rounded border dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100",
                                disabled: page === 1,
                                onClick: ()=>setPage(page - 1),
                                children: "Prev"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 664,
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
                                lineNumber: 671,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-2 py-1 rounded border dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100",
                                disabled: page === pageCount,
                                onClick: ()=>setPage(page + 1),
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 674,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 663,
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
                        lineNumber: 685,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 632,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 591,
        columnNumber: 5
    }, this);
}
_s(AdminDashboardPage, "wsulej6HUIlYpxV5e4xFhSINBOA=", false, function() {
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

//# sourceMappingURL=_dd79059a._.js.map