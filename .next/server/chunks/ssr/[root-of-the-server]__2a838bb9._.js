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
"[project]/app/(admin)/admin/dashboard/data-table/columns/users.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "userColumns": (()=>userColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
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
                return src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    alt: row.original.username,
                    className: "w-8 h-8 rounded-full object-cover border"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/users.tsx",
                    lineNumber: 25,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center justify-center w-8 h-8 rounded-full bg-muted border",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
function beneficiaryColumns({ onEdit, onDelete, onAddMessage, onAddRequest, onMessageIdClick, onRequestIdClick }) {
    return [
        {
            accessorKey: 'firstName',
            header: 'First Name',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-normal break-words max-w-xs",
                    children: row.getValue('firstName')
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 40,
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
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
        },
        {
            accessorKey: 'gender',
            header: 'Gender',
            cell: ({ row })=>{
                const val = row.getValue('gender');
                return val ? val[0].toUpperCase() + val.slice(1) : '';
            }
        },
        {
            accessorKey: 'dateOfBirth',
            header: 'Date of Birth',
            cell: ({ row })=>row.getValue('dateOfBirth') ? new Date(row.getValue('dateOfBirth')).toLocaleDateString() : ''
        },
        {
            accessorKey: 'email',
            header: 'Email',
            cell: ({ row })=>row.getValue('email') || '-'
        },
        {
            accessorKey: 'phone',
            header: 'Phone',
            cell: ({ row })=>row.getValue('phone') || '-'
        },
        {
            accessorKey: 'institution',
            header: 'Institution',
            cell: ({ row })=>{
                const institution = row.original.institution;
                return institution ? institution.name : '-';
            }
        },
        {
            accessorKey: 'beneficiaryMessages',
            header: 'Messages',
            cell: ({ row })=>{
                const messages = row.original.beneficiaryMessages ?? [];
                if (!messages.length) return '0';
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        messages.length,
                        " (",
                        messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "link",
                                className: "p-0 h-auto text-blue-700",
                                style: {
                                    fontSize: 12
                                },
                                onClick: ()=>onMessageIdClick && onMessageIdClick(msg.id),
                                children: [
                                    msg.title || msg.id,
                                    i < messages.length - 1 ? ', ' : ''
                                ]
                            }, msg.id, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this)),
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, this);
            }
        },
        {
            accessorKey: 'beneficiaryRequests',
            header: 'Requests',
            cell: ({ row })=>{
                const requests = row.original.beneficiaryRequests ?? [];
                if (!requests.length) return '0';
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        requests.length,
                        " (",
                        requests.map((req, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "link",
                                className: "p-0 h-auto text-blue-700",
                                style: {
                                    fontSize: 12
                                },
                                onClick: ()=>onRequestIdClick && onRequestIdClick(req.id),
                                children: [
                                    req.title || req.id,
                                    i < requests.length - 1 ? ', ' : ''
                                ]
                            }, req.id, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this)),
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this);
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
            id: 'createdBy',
            header: 'Created By',
            cell: ({ row })=>{
                const createdBy = row.original.createdBy;
                if (!createdBy) return '-';
                return `${createdBy.firstName} ${createdBy.lastName}`;
            }
        },
        {
            id: 'actions',
            header: 'Actions',
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            size: "sm",
                            variant: "outline",
                            onClick: ()=>onEdit(row.original),
                            children: "Edit"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        onAddMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            size: "sm",
                            variant: "secondary",
                            onClick: ()=>onAddMessage(row.original.id),
                            children: "Add Message"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this),
                        onAddRequest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            size: "sm",
                            variant: "secondary",
                            onClick: ()=>onAddRequest(row.original.id),
                            children: "Add Request"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 161,
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
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
        }
    ];
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryMessages.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "beneficiaryMessageColumns": (()=>beneficiaryMessageColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function beneficiaryMessageColumns({ onEdit, onDelete }) {
    return [
        {
            accessorKey: 'title',
            header: 'Title',
            cell: ({ row })=>row.getValue('title')
        },
        {
            accessorKey: 'beneficiaryMessageText',
            header: 'Message',
            cell: ({ row })=>{
                const msg = row.getValue('beneficiaryMessageText');
                if (!msg) return '';
                if (typeof msg === 'string') return msg;
                try {
                    return JSON.stringify(msg);
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    onClick: ()=>onEdit(row.original),
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryMessages.tsx",
                    lineNumber: 71,
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
                    fileName: "[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryMessages.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
        }
    ];
}
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryRequests.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "beneficiaryRequestColumns": (()=>beneficiaryRequestColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/homepage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "homepageColumns": (()=>homepageColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
}}),
"[project]/app/(admin)/admin/dashboard/data-table/columns/messages.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "messageColumns": (()=>messageColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
}}),
"[project]/utils/styles/card-hover.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cardHoverClass": (()=>cardHoverClass)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
const cardHoverClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('relative overflow-hidden rounded-xl transition-transform duration-300 perspective-[1200px]', 'cursor-pointer', 'bg-white text-gray-900 border border-gray-200 shadow-md shadow-gray-300/30', 'hover:shadow-2xl hover:scale-[1.02] hover:border-violet-700 hover:shadow-violet-700/60', 'dark:backdrop-blur-sm dark:bg-zinc-900/70 dark:text-white dark:border-card dark:shadow-md dark:shadow-black/30', 'dark:hover:shadow-2xl dark:hover:scale-[1.02] dark:hover:border-pink-700 dark:hover:shadow-pink-700/50');
}}),
"[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AnimatedStats)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$styles$2f$card$2d$hover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/styles/card-hover.ts [app-ssr] (ecmascript)");
'use client';
;
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
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const showUsers = pathname === '/admin' || pathname.startsWith('/admin/');
    const [counts, setCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        projects: 0,
        reports: 0,
        events: 0,
        users: 0,
        institutions: 0,
        beneficiaries: 0
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full gap-5 overflow-x-auto overflow-y-visible justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
                stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
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
function StatCard({ stat, index }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        stat.value
    ]);
    // Stagger circle animation for each stat
    const circleDelay = `${index * CIRCLE_DELAY_STEP}s`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$styles$2f$card$2d$hover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardHoverClass"] + ' flex flex-col items-center justify-center' // center everything in the card
        ,
        style: {
            borderTop: `7px solid ${stat.color || '#7c3aed'}`,
            minWidth: CARD_MIN_WIDTH,
            padding: `${CARD_PADDING_Y}px ${CARD_PADDING_X}px`,
            height: 'auto',
            marginBottom: '16px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center relative mb-2",
                style: {
                    width: SVG_SIZE,
                    height: SVG_SIZE,
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}}),
"[project]/app/(admin)/admin/dashboard/chart/components/animatedPieceBarChart.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AnimatedPieceBarChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
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
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // 0 to 1
    const [loopKey, setLoopKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // change to restart animation
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Looping fill animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
                setTimeout(()=>{
                    if (!stopped) {
                        setProgress(0);
                        setLoopKey((k)=>k + 1);
                    }
                }, loopPause);
            }
        }
        frame = requestAnimationFrame(animate);
        return ()=>{
            stopped = true;
            cancelAnimationFrame(frame);
        };
    // eslint-disable-next-line
    }, [
        loopKey,
        animationDuration,
        loopPause,
        values.join(',')
    ]);
    // Force chart update on each progress step
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (chartRef.current) {
            chartRef.current.update();
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[250px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
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
    const { initialData, staleTime = 60 * 60 * 1000 } = options;
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
"[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DashboardChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$components$2f$animatedPieceBarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/chart/components/animatedPieceBarChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$styles$2f$card$2d$hover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/styles/card-hover.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/useHybridCachedData.ts [app-ssr] (ecmascript)");
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
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"]);
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
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isAdmin = pathname === '/admin/dashboard';
    // Use the hybrid cache with a unique key and a 30min stale time
    const { data: counts, isLoading, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHybridCachedData"])('dashboard-counts-v1', fetchDashboardCounts, {
        staleTime: 1000 * 60 * 30
    });
    const [loop, setLoop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>setLoop((v)=>v + 1), (ANIMATION_DURATION + 0.7) * 1000);
        return ()=>clearInterval(interval);
    }, []);
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "text-sm space-y-1",
            children: labels.map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full pb-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex flex-col items-center justify-center",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-muted-foreground",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx",
                    lineNumber: 191,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-6 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$styles$2f$card$2d$hover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardHoverClass"]} w-full md:w-7/12`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$components$2f$animatedPieceBarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$styles$2f$card$2d$hover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardHoverClass"]} w-full md:w-5/12 flex items-center justify-center md:flex-row gap-6 p-4`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row items-center justify-center gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-48 h-48",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:w-40",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PieLegend, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}}),
"[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FilesStatsCharts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"]);
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
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [counts, setCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        'Project Images': 0,
        'Project PDFs': 0,
        'Event Images': 0,
        'Event PDFs': 0,
        'Report Images': 0,
        'Report PDFs': 0,
        'Institution Images': 0
    });
    const [sizes, setSizes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        'Project Images': 0,
        'Project PDFs': 0,
        'Event Images': 0,
        'Event PDFs': 0,
        'Report Images': 0,
        'Report PDFs': 0,
        'Institution Images': 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/api/file-stats').then((res)=>res.json()).then((data)=>{
            setCounts({
                ...data.counts,
                'Institution Images': data.counts['Institution Images'] ?? 0
            });
            setSizes({
                ...data.sizes,
                'Institution Images': data.sizes['Institution Images'] ?? 0
            });
            setLoading(false);
        });
    }, []);
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "text-sm",
            children: labels.map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-full max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "font-bold text-lg text-center",
                    children: "File Statistics"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-8 text-center text-muted-foreground",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                        lineNumber: 278,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-2/3 h-[350px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold mb-2",
                                                children: "Image & PDF Count"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-1/3 flex flex-col gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-center mb-2",
                                                        children: "Images File Stats"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center gap-4 items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-40 h-40",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PieLegend, {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-center mb-2",
                                                        children: "PDF File Stats"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center gap-4 items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-40 h-40",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PieLegend, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-2/3 h-[350px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold mb-2 text-center",
                                                children: "Image & PDF Sizes (MB)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                lineNumber: 333,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-1/3 flex flex-col gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-center mb-2",
                                                        children: "Images Size Stats"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center gap-4 items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-40 h-40",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PieLegend, {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-center mb-2",
                                                        children: "PDF Size Stats"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center gap-4 items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-40 h-40",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PieLegend, {
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
}}),
"[project]/app/(admin)/admin/dashboard/chartSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ChartSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$animatedStats$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/chart/animatedStats.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$dashboardChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/chart/dashboardChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$fileStartsCharts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/chart/fileStartsCharts.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ChartSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$animatedStats$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/chartSection.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$dashboardChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/chartSection.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chart$2f$fileStartsCharts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/data-table/data-table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$projects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/projects.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$reports$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/reports.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$users$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/users.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$events$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/events.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$institutions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/institutions.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaries$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaries.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaryMessages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryMessages.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaryRequests$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/beneficiaryRequests.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$homepage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/homepage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$messages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/data-table/columns/messages.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chartSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/chartSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/useHybridCachedData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$downloadColumnsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/downloadColumnsModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$handleDownloadPDF$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/dashboard/components/handleDownloadPDF.ts [app-ssr] (ecmascript)");
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
const CreateHomepageForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/app/(admin)/admin/dashboard/createHomePageForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const CreateExecutiveMessageForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/app/(admin)/admin/dashboard/createExecutiveMessageForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const CreateBeneficiaryForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const CreateBeneficiaryMessageForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/app/(admin)/admin/dashboard/createBeneficiaryMessageForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const CreateBeneficiaryRequestForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/app/(admin)/admin/dashboard/createBeneficiaryRequestForm.tsx [app-client] (ecmascript, next/dynamic entry)"
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
const createFormMap = {
    projects: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
        loadableGenerated: {
            modules: [
                "[project]/app/(admin)/admin/dashboard/createProjectForm.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        },
        ssr: false
    }),
    reports: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
        loadableGenerated: {
            modules: [
                "[project]/app/(admin)/admin/dashboard/createReportForm.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        },
        ssr: false
    }),
    admin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
        loadableGenerated: {
            modules: [
                "[project]/app/(admin)/admin/dashboard/createUserForm.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        },
        ssr: false
    }),
    events: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
        loadableGenerated: {
            modules: [
                "[project]/app/(admin)/admin/dashboard/createEventForm.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        },
        ssr: false
    }),
    institutions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
        loadableGenerated: {
            modules: [
                "[project]/app/(admin)/admin/dashboard/createInstitutionForm.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        },
        ssr: false
    }),
    beneficiaries: CreateBeneficiaryForm,
    beneficiaryMessages: CreateBeneficiaryMessageForm,
    beneficiaryRequests: CreateBeneficiaryRequestForm,
    charts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
        loadableGenerated: {
            modules: [
                "[project]/app/(admin)/admin/dashboard/chartSection.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        },
        ssr: false
    })
};
function AdminDashboardPage() {
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
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
    // New states for message/request forms (when adding from beneficiaries table)
    const [showCreateBeneficiaryMessageForm, setShowCreateBeneficiaryMessageForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCreateBeneficiaryRequestForm, setShowCreateBeneficiaryRequestForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedBeneficiaryId, setSelectedBeneficiaryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Table refs
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const homepageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const defaultRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // PDF download modal state
    const [downloadModalOpen, setDownloadModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [downloadColumns, setDownloadColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pendingDownloadData, setPendingDownloadData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { data: homepageData, isLoading: loadingHomepage, refresh: refreshHomepage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHybridCachedData"])('admin-dashboard-homepage-v1', async ()=>{
        const res = await fetch('/api/homepage-content');
        if (!res.ok) throw new Error('Failed to fetch homepage data');
        const d = await res.json();
        return d ? [
            d
        ] : [];
    }, {
        staleTime: 1000 * 60 * 30
    });
    const { data: messagesData, isLoading: loadingMessages, refresh: refreshMessages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useHybridCachedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHybridCachedData"])('admin-dashboard-messages-v1', async ()=>{
        const res = await fetch('/api/executive-messages');
        if (!res.ok) throw new Error('Failed to fetch messages data');
        return await res.json();
    }, {
        staleTime: 1000 * 60 * 30
    });
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
    const sectionFeatures = {
        projects: {
            searchable: true,
            sortable: true,
            addNew: true,
            apiRoute: '/api/projects',
            columns: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$projects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectColumns"],
            getColumns: ()=>[
                    {
                        id: 'number',
                        header: 'No.',
                        cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
                        size: 50
                    },
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$projects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectColumns"])({
                        onEdit: handleEdit,
                        onDelete: (id)=>handleDelete('projects', id)
                    })
                ]
        },
        reports: {
            searchable: true,
            sortable: true,
            addNew: true,
            apiRoute: '/api/reports',
            columns: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$reports$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reportColumns"],
            getColumns: ()=>[
                    {
                        id: 'number',
                        header: 'No.',
                        cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
                        size: 50
                    },
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$reports$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reportColumns"])({
                        onEdit: handleEdit,
                        onDelete: (id)=>handleDelete('reports', id)
                    })
                ]
        },
        admin: {
            searchable: true,
            sortable: true,
            addNew: true,
            apiRoute: '/api/users',
            columns: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$users$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userColumns"],
            getColumns: ()=>[
                    {
                        id: 'number',
                        header: 'No.',
                        cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
                        size: 50
                    },
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$users$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userColumns"])({
                        onEdit: handleEdit,
                        onDelete: (id)=>handleDelete('users', id)
                    })
                ]
        },
        events: {
            searchable: true,
            sortable: true,
            addNew: true,
            apiRoute: '/api/events',
            columns: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$events$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventColumns"],
            getColumns: ()=>[
                    {
                        id: 'number',
                        header: 'No.',
                        cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
                        size: 50
                    },
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$events$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventColumns"])({
                        onEdit: handleEdit,
                        onDelete: (id)=>handleDelete('events', id)
                    })
                ]
        },
        institutions: {
            searchable: true,
            sortable: true,
            addNew: true,
            apiRoute: '/api/institutions',
            columns: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$institutions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["institutionColumns"],
            getColumns: ()=>[
                    {
                        id: 'number',
                        header: 'No.',
                        cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
                        size: 50
                    },
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$institutions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["institutionColumns"])({
                        onEdit: handleEdit,
                        onDelete: (id)=>handleDelete('institutions', id)
                    })
                ]
        },
        beneficiaries: {
            searchable: true,
            sortable: true,
            addNew: true,
            apiRoute: '/api/beneficiaries',
            columns: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaries$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["beneficiaryColumns"],
            getColumns: ()=>[
                    {
                        id: 'number',
                        header: 'No.',
                        cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
                        size: 50
                    },
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaries$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["beneficiaryColumns"])({
                        onEdit: handleEdit,
                        onDelete: (id)=>handleDelete('beneficiaries', id),
                        onAddMessage: (id)=>{
                            setSelectedBeneficiaryId(id);
                            setShowCreateBeneficiaryMessageForm(true);
                        },
                        onAddRequest: (id)=>{
                            setSelectedBeneficiaryId(id);
                            setShowCreateBeneficiaryRequestForm(true);
                        }
                    })
                ]
        },
        beneficiaryMessages: {
            searchable: true,
            sortable: true,
            addNew: true,
            apiRoute: '/api/beneficiaryMessages',
            columns: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaryMessages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["beneficiaryMessageColumns"],
            getColumns: ()=>[
                    {
                        id: 'number',
                        header: 'No.',
                        cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
                        size: 50
                    },
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaryMessages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["beneficiaryMessageColumns"])({
                        onEdit: handleEdit,
                        onDelete: (id)=>handleDelete('beneficiaryMessages', id)
                    })
                ]
        },
        beneficiaryRequests: {
            searchable: true,
            sortable: true,
            addNew: true,
            apiRoute: '/api/beneficiaryRequests',
            columns: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaryRequests$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["beneficiaryRequestColumns"],
            getColumns: ()=>[
                    {
                        id: 'number',
                        header: 'No.',
                        cell: ({ row })=>(page - 1) * rowsPerPage + row.index + 1,
                        size: 50
                    },
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$beneficiaryRequests$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["beneficiaryRequestColumns"])({
                        onEdit: handleEdit,
                        onDelete: (id)=>handleDelete('beneficiaryRequests', id)
                    })
                ]
        },
        charts: {
            isChart: true
        },
        'Home Page': {
            searchable: false,
            sortable: false,
            addNew: false,
            getColumns: null
        }
    };
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
        setPage(1);
        sectionRef.current = section;
        const feat = sectionFeatures[section];
        if (section === 'Home Page') {
        // nothing, handled below
        } else if (feat?.apiRoute) {
            const res = await fetch(feat.apiRoute);
            const dat = await res.json();
            setData(dat);
        } else {
            setData([]);
        }
    }
    const sortedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!activeSection || !sectionFeatures[activeSection]?.sortable) return data;
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
        if (!activeSection || !sectionFeatures[activeSection]?.searchable || !search.trim()) return sortedData;
        const lower = search.toLowerCase();
        return sortedData.filter((item)=>Object.keys(item).some((key)=>typeof item[key] === 'string' && item[key].toLowerCase().includes(lower)));
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
    const getCreateFormComponent = ()=>{
        if (!activeSection) return null;
        if (activeSection === 'Home Page') {
            if (showExecMsgForm) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Loading form..."
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 434,
                    columnNumber: 31
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateExecutiveMessageForm, {
                    mode: editRecord ? 'edit' : 'create',
                    initialData: editRecord || undefined,
                    onSuccess: ()=>{
                        setShowExecMsgForm(false);
                        setEditRecord(null);
                        refreshMessages();
                    },
                    onCancel: ()=>{
                        setShowExecMsgForm(false);
                        setEditRecord(null);
                    }
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 435,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 434,
                columnNumber: 11
            }, this);
            if (showCreateForm) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Loading form..."
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 452,
                    columnNumber: 31
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateHomepageForm, {
                    mode: editRecord ? 'edit' : 'create',
                    initialData: editRecord || undefined,
                    onSuccess: ()=>{
                        setShowCreateForm(false);
                        setEditRecord(null);
                        refreshHomepage();
                    },
                    onCancel: ()=>{
                        setShowCreateForm(false);
                        setEditRecord(null);
                    }
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 453,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 452,
                columnNumber: 11
            }, this);
            return null;
        }
        if (showCreateBeneficiaryMessageForm && selectedBeneficiaryId) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Loading form..."
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 472,
                    columnNumber: 29
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateBeneficiaryMessageForm, {
                    beneficiaryId: selectedBeneficiaryId,
                    onSuccess: ()=>{
                        setShowCreateBeneficiaryMessageForm(false);
                        setSelectedBeneficiaryId(null);
                        handleCardClick(activeSection);
                    },
                    onCancel: ()=>{
                        setShowCreateBeneficiaryMessageForm(false);
                        setSelectedBeneficiaryId(null);
                    }
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 473,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 472,
                columnNumber: 9
            }, this);
        }
        if (showCreateBeneficiaryRequestForm && selectedBeneficiaryId) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Loading form..."
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 490,
                    columnNumber: 29
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateBeneficiaryRequestForm, {
                    beneficiaryId: selectedBeneficiaryId,
                    onSuccess: ()=>{
                        setShowCreateBeneficiaryRequestForm(false);
                        setSelectedBeneficiaryId(null);
                        handleCardClick(activeSection);
                    },
                    onCancel: ()=>{
                        setShowCreateBeneficiaryRequestForm(false);
                        setSelectedBeneficiaryId(null);
                    }
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 491,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 490,
                columnNumber: 9
            }, this);
        }
        if (!createFormMap[activeSection]) return null;
        const FormComponent = createFormMap[activeSection];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading form..."
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 509,
                columnNumber: 27
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormComponent, {
                mode: editRecord ? 'edit' : 'create',
                userId: editRecord?.id,
                initialData: editRecord || undefined,
                onSuccess: ()=>{
                    setShowCreateForm(false);
                    setEditRecord(null);
                    handleCardClick(activeSection);
                },
                onCancel: ()=>{
                    setShowCreateForm(false);
                    setEditRecord(null);
                }
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 510,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
            lineNumber: 509,
            columnNumber: 7
        }, this);
    };
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
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 558,
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
                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                    lineNumber: 565,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
            lineNumber: 557,
            columnNumber: 7
        }, this);
    };
    if (status === 'loading') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Checking session ..."
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
            lineNumber: 587,
            columnNumber: 12
        }, this);
    }
    const showExecMsgAddButton = activeSection === 'Home Page' && !showCreateForm && !showExecMsgForm && !editRecord;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-8 gap-4",
                children: sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        onClick: ()=>handleCardClick(section),
                        className: `
              cursor-pointer 
              p-4
              h-12
              flex items-center justify-center text-center
              rounded-sm  
              transition 
              ${activeSection === section ? 'bg-[#9f004d] text-white shadow-2xl border-2 border-[#9f004d] scale-105' : 'text-gray-400 opacity-70 grayscale hover:opacity-100 hover:grayscale-0'}`,
                        children: section.replace(/([A-Z])/g, ' $1').toUpperCase()
                    }, section, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 597,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 595,
                columnNumber: 7
            }, this),
            activeSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    !showCreateForm && !showExecMsgForm && !editRecord && !showCreateBeneficiaryMessageForm && !showCreateBeneficiaryRequestForm && !sectionFeatures[activeSection]?.isChart && activeSection !== 'Home Page' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 items-center",
                                children: [
                                    sectionFeatures[activeSection]?.searchable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: search,
                                        onChange: (e)=>{
                                            setSearch(e.target.value);
                                            setPage(1);
                                        },
                                        placeholder: "Search...",
                                        className: "rounded border px-2 py-1",
                                        style: {
                                            minWidth: 120
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                        lineNumber: 630,
                                        columnNumber: 21
                                    }, this),
                                    sectionFeatures[activeSection]?.sortable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mr-2 font-semibold",
                                                children: "Sort by:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                                lineNumber: 644,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "rounded border px-2 py-1",
                                                value: sortBy,
                                                onChange: (e)=>setSortBy(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "createdAt",
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                                        lineNumber: 650,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "title",
                                                        children: "Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                                        lineNumber: 651,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                                lineNumber: 645,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "ml-2 px-2 rounded border",
                                                onClick: ()=>setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'),
                                                children: sortOrder === 'asc' ? '↑' : '↓'
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                                lineNumber: 653,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                        lineNumber: 643,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mr-2 font-semibold",
                                                children: "Rows per page:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                                lineNumber: 662,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "rounded border px-2 py-1",
                                                value: rowsPerPage,
                                                onChange: (e)=>{
                                                    setRowsPerPage(Number(e.target.value));
                                                    setPage(1);
                                                },
                                                children: rowsPerPageOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: opt,
                                                        children: opt
                                                    }, opt, false, {
                                                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                                        lineNumber: 672,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                                lineNumber: 663,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                                                data: paginatedData,
                                                columns: sectionFeatures[activeSection]?.getColumns ? sectionFeatures[activeSection]?.getColumns() : sectionFeatures[activeSection]?.columns,
                                                tableRef: defaultRef
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                                lineNumber: 677,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                        lineNumber: 661,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 628,
                                columnNumber: 17
                            }, this),
                            sectionFeatures[activeSection]?.addNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setShowCreateForm(true);
                                    setEditRecord(null);
                                },
                                className: "inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700",
                                children: [
                                    "Add New",
                                    ' ',
                                    activeSection.replace(/^\w/, (c)=>c.toUpperCase()).replace(/_/g, ' ').slice(0, -1)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 689,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 627,
                        columnNumber: 15
                    }, this),
                    (showCreateForm || showExecMsgForm || editRecord || showCreateBeneficiaryMessageForm || showCreateBeneficiaryRequestForm) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10",
                        children: getCreateFormComponent()
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 711,
                        columnNumber: 13
                    }, this),
                    !showCreateForm && !showExecMsgForm && !editRecord && !showCreateBeneficiaryMessageForm && !showCreateBeneficiaryRequestForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: activeSection === 'Home Page' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end mb-2",
                                            children: showExecMsgAddButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700",
                                                onClick: ()=>{
                                                    setEditRecord(null);
                                                    setShowExecMsgForm(true);
                                                    setShowCreateForm(false);
                                                },
                                                children: "Add New Executive Message"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                                lineNumber: 725,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                            lineNumber: 723,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: messagesRef,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                                                columns: [
                                                    {
                                                        id: 'number',
                                                        header: 'No.',
                                                        cell: ({ row })=>row.index + 1,
                                                        size: 50
                                                    },
                                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$messages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messageColumns"])({
                                                        onEdit: handleEdit,
                                                        onDelete: (id)=>handleDelete('executive-messages', id)
                                                    })
                                                ],
                                                data: messagesData || []
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                                lineNumber: 738,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                            lineNumber: 737,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end mt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                                                data: messagesData || [],
                                                columns: [
                                                    {
                                                        id: 'number',
                                                        header: 'No.',
                                                        cell: ({ row })=>row.index + 1,
                                                        size: 50
                                                    },
                                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$messages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messageColumns"])({
                                                        onEdit: handleEdit,
                                                        onDelete: (id)=>handleDelete('executive-messages', id)
                                                    })
                                                ],
                                                tableRef: messagesRef
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                                lineNumber: 755,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                            lineNumber: 754,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                    lineNumber: 722,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: homepageRef,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                                        columns: [
                                            {
                                                id: 'number',
                                                header: 'No.',
                                                cell: ({ row })=>row.index + 1,
                                                size: 50
                                            },
                                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$homepage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homepageColumns"])({
                                                onEdit: handleEdit,
                                                onDelete: (id)=>handleDelete('homepage-content', id)
                                            })
                                        ],
                                        data: homepageData || []
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                        lineNumber: 774,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                    lineNumber: 773,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end mt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableActions, {
                                        data: homepageData || [],
                                        columns: [
                                            {
                                                id: 'number',
                                                header: 'No.',
                                                cell: ({ row })=>row.index + 1,
                                                size: 50
                                            },
                                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$columns$2f$homepage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homepageColumns"])({
                                                onEdit: handleEdit,
                                                onDelete: (id)=>handleDelete('homepage-content', id)
                                            })
                                        ],
                                        tableRef: homepageRef
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                        lineNumber: 791,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                    lineNumber: 790,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                            lineNumber: 721,
                            columnNumber: 19
                        }, this) : sectionFeatures[activeSection]?.isChart ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$chartSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                            lineNumber: 810,
                            columnNumber: 19
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: defaultRef,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$data$2d$table$2f$data$2d$table$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                                columns: sectionFeatures[activeSection]?.getColumns ? sectionFeatures[activeSection]?.getColumns() : sectionFeatures[activeSection]?.columns,
                                data: paginatedData
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 813,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                            lineNumber: 812,
                            columnNumber: 19
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 719,
                        columnNumber: 15
                    }, this),
                    pageCount > 1 && !showCreateForm && !showExecMsgForm && !editRecord && !showCreateBeneficiaryMessageForm && !showCreateBeneficiaryRequestForm && activeSection !== 'Home Page' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mt-4 justify-end items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-2 py-1 rounded border",
                                disabled: page === 1,
                                onClick: ()=>setPage(page - 1),
                                children: "Prev"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 834,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Page ",
                                    page,
                                    " of ",
                                    pageCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 841,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-2 py-1 rounded border",
                                disabled: page === pageCount,
                                onClick: ()=>setPage(page + 1),
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                                lineNumber: 844,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                        lineNumber: 833,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$downloadColumnsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: downloadModalOpen,
                onClose: ()=>setDownloadModalOpen(false),
                columns: downloadColumns,
                onDownload: (selectedColumns)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$dashboard$2f$components$2f$handleDownloadPDF$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleDownloadPDF"])(pendingDownloadData, selectedColumns, activeSection ? activeSection.charAt(0).toUpperCase() + activeSection.slice(1) : 'Data');
                }
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
                lineNumber: 855,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/dashboard/page.tsx",
        lineNumber: 594,
        columnNumber: 5
    }, this);
} // IGNORE: This file is auto-generated and should not be modified directly.
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__2a838bb9._.js.map