(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/editor/editor-client.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EditorClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/starter-kit/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-underline/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-link/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-image/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$heading$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-heading/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-table/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$row$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-table-row/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$cell$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-table-cell/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$header$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-table-header/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$code$2d$block$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-code-block/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$horizontal$2d$rule$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-horizontal-rule/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$hard$2d$break$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-hard-break/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$style$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-text-style/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$color$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-color/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
const colors = [
    "#000000",
    "#ffffff",
    "#f87171",
    "#fbbf24",
    "#34d399",
    "#60a5fa",
    "#a78bfa",
    "#f472b6",
    "#d1d5db"
];
function EditorClient({ content, onChange, showLinkUnlink = true }) {
    _s();
    const [showTablePrompt, setShowTablePrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tableRows, setTableRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [tableCols, setTableCols] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [includeHeader, setIncludeHeader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedImagePos, setSelectedImagePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showLinkInput, setShowLinkInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [linkValue, setLinkValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])({
        content,
        onUpdate: {
            "EditorClient.useEditor[editor]": ({ editor })=>{
                // The key change: send Tiptap JSON, not HTML
                onChange(editor.getJSON());
            }
        }["EditorClient.useEditor[editor]"],
        immediatelyRender: false,
        extensions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$style$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$color$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                openOnClick: false,
                autolink: true,
                linkOnPaste: true,
                HTMLAttributes: {
                    rel: 'noopener noreferrer',
                    target: '_blank',
                    class: 'underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend({
                addAttributes () {
                    return {
                        ...this.parent?.(),
                        width: {
                            default: 'auto'
                        },
                        float: {
                            default: null
                        }
                    };
                },
                addNodeView () {
                    return ({
                        "EditorClient.useEditor[editor]": ({ node, getPos, editor })=>{
                            const img = document.createElement('img');
                            img.src = node.attrs.src;
                            img.style.width = node.attrs.width ?? 'auto';
                            img.style.float = node.attrs.float ?? '';
                            img.className = 'tiptap-img';
                            img.contentEditable = 'false';
                            const wrapper = document.createElement('span');
                            wrapper.style.position = 'relative';
                            wrapper.style.display = 'inline-block';
                            wrapper.appendChild(img);
                            const btn = document.createElement('button');
                            btn.innerHTML = '×';
                            btn.className = 'tiptap-img-delete';
                            btn.onclick = ({
                                "EditorClient.useEditor[editor]": (e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                    if (typeof getPos === 'function') {
                                        editor.chain().focus().deleteRange({
                                            from: getPos(),
                                            to: getPos() + 1
                                        }).run();
                                    }
                                }
                            })["EditorClient.useEditor[editor]"];
                            wrapper.appendChild(btn);
                            let startX = 0;
                            let startWidth = 0;
                            const resizeHandle = document.createElement('div');
                            resizeHandle.className = 'tiptap-img-resize';
                            resizeHandle.onmousedown = ({
                                "EditorClient.useEditor[editor]": (e)=>{
                                    e.preventDefault();
                                    startX = e.clientX;
                                    startWidth = img.width;
                                    document.onmousemove = ({
                                        "EditorClient.useEditor[editor]": (moveEvent)=>{
                                            const newWidth = Math.max(32, startWidth + (moveEvent.clientX - startX));
                                            img.width = newWidth;
                                            if (typeof getPos === 'function') {
                                                editor.commands.command({
                                                    "EditorClient.useEditor[editor]": ({ tr })=>{
                                                        tr.setNodeMarkup(getPos(), undefined, {
                                                            ...node.attrs,
                                                            width: `${newWidth}px`
                                                        });
                                                        return true;
                                                    }
                                                }["EditorClient.useEditor[editor]"]);
                                            }
                                        }
                                    })["EditorClient.useEditor[editor]"];
                                    document.onmouseup = ({
                                        "EditorClient.useEditor[editor]": ()=>{
                                            document.onmousemove = null;
                                            document.onmouseup = null;
                                        }
                                    })["EditorClient.useEditor[editor]"];
                                }
                            })["EditorClient.useEditor[editor]"];
                            wrapper.appendChild(resizeHandle);
                            wrapper.onclick = ({
                                "EditorClient.useEditor[editor]": (e)=>{
                                    setSelectedImagePos({
                                        from: getPos(),
                                        to: getPos() + 1
                                    });
                                    e.stopPropagation();
                                }
                            })["EditorClient.useEditor[editor]"];
                            return {
                                dom: wrapper,
                                contentDOM: null,
                                stopEvent: ({
                                    "EditorClient.useEditor[editor]": ()=>true
                                })["EditorClient.useEditor[editor]"]
                            };
                        }
                    })["EditorClient.useEditor[editor]"];
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$heading$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                levels: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ]
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                resizable: true
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$header$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend({
                addAttributes () {
                    return {
                        ...this.parent?.(),
                        backgroundColor: {
                            default: null,
                            parseHTML: ({
                                "EditorClient.useEditor[editor]": (element)=>element.getAttribute('data-background-color')
                            })["EditorClient.useEditor[editor]"],
                            renderHTML: ({
                                "EditorClient.useEditor[editor]": (attributes)=>attributes.backgroundColor ? {
                                        style: `background-color: ${attributes.backgroundColor}`,
                                        'data-background-color': attributes.backgroundColor
                                    } : {}
                            })["EditorClient.useEditor[editor]"]
                        }
                    };
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$cell$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend({
                addAttributes () {
                    return {
                        ...this.parent?.(),
                        backgroundColor: {
                            default: null,
                            parseHTML: ({
                                "EditorClient.useEditor[editor]": (element)=>element.getAttribute('data-background-color')
                            })["EditorClient.useEditor[editor]"],
                            renderHTML: ({
                                "EditorClient.useEditor[editor]": (attributes)=>attributes.backgroundColor ? {
                                        style: `background-color: ${attributes.backgroundColor}`,
                                        'data-background-color': attributes.backgroundColor
                                    } : {}
                            })["EditorClient.useEditor[editor]"]
                        }
                    };
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$row$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$code$2d$block$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$horizontal$2d$rule$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$hard$2d$break$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        ],
        editorProps: {
            attributes: {
                class: 'prose dark:prose-invert min-h-[200px] p-2 focus:outline-none tiptap'
            },
            handleClickOn (view, pos, node, nodePos) {
                if (node.type.name === 'image') {
                    setSelectedImagePos({
                        from: nodePos,
                        to: nodePos + node.nodeSize
                    });
                } else {
                    setSelectedImagePos(null);
                }
                return false;
            }
        }
    });
    const setCellColor = (color)=>editor?.chain().focus().setCellAttribute("backgroundColor", color).run();
    const setTextColor = (color)=>editor?.chain().focus().setColor(color).run();
    const setImageFloat = (float)=>{
        if (selectedImagePos && editor) {
            editor.chain().focus().setNodeAttribute("image", "float", float === "none" ? null : float).run();
        }
    };
    const setImageWidth = (width)=>{
        if (selectedImagePos && editor) {
            editor.chain().focus().setNodeAttribute("image", "width", width).run();
        }
    };
    const removeImage = ()=>{
        if (selectedImagePos && editor) {
            editor.chain().focus().deleteRange(selectedImagePos).run();
            setSelectedImagePos(null);
        }
    };
    const insertImage = (file)=>{
        const reader = new FileReader();
        reader.onload = ()=>{
            const base64 = reader.result;
            editor?.chain().focus().setImage({
                src: base64
            }).run();
        };
        reader.readAsDataURL(file);
    };
    if (!editor) return null;
    // Link form interaction
    const openLinkInput = ()=>{
        setLinkValue(editor.getAttributes("link").href || "");
        setShowLinkInput(true);
        setTimeout(()=>{
            const el = document.getElementById("tiptap-link-input");
            if (el) el.focus();
        }, 0);
    };
    const handleLinkInputKeyDown = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            editor.chain().focus();
            if (!linkValue) {
                editor.chain().unsetLink().run();
            } else {
                editor.chain().extendMarkRange("link").setLink({
                    href: linkValue
                }).run();
            }
            setShowLinkInput(false);
        }
        if (e.key === "Escape") {
            setShowLinkInput(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tiptap-toolbar mb-2 flex flex-wrap gap-2 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().setParagraph().run(),
                        className: editor.isActive("paragraph") ? "tiptap-btn-active" : "tiptap-btn",
                        children: "Normal"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    [
                        1,
                        2,
                        3
                    ].map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>editor.chain().focus().toggleHeading({
                                    level
                                }).run(),
                            className: editor.isActive("heading", {
                                level
                            }) ? "tiptap-btn-active" : "tiptap-btn",
                            children: [
                                "H",
                                level
                            ]
                        }, level, true, {
                            fileName: "[project]/components/editor/editor-client.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleBold().run(),
                        className: editor.isActive("bold") ? "tiptap-btn-active" : "tiptap-btn",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "B"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/editor-client.tsx",
                            lineNumber: 275,
                            columnNumber: 162
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleItalic().run(),
                        className: editor.isActive("italic") ? "tiptap-btn-active" : "tiptap-btn",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            children: "I"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/editor-client.tsx",
                            lineNumber: 276,
                            columnNumber: 166
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleUnderline().run(),
                        className: editor.isActive("underline") ? "tiptap-btn-active" : "tiptap-btn",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("u", {
                            children: "U"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/editor-client.tsx",
                            lineNumber: 277,
                            columnNumber: 172
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleBulletList().run(),
                        className: editor.isActive("bulletList") ? "tiptap-btn-active" : "tiptap-btn",
                        children: "• List"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleOrderedList().run(),
                        className: editor.isActive("orderedList") ? "tiptap-btn-active" : "tiptap-btn",
                        children: "1. List"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleBlockquote().run(),
                        className: "tiptap-btn",
                        children: "❝ Quote"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleCodeBlock().run(),
                        className: "tiptap-btn",
                        children: "⌨ Code"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().setHorizontalRule().run(),
                        className: "tiptap-btn",
                        children: "― Rule"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        type: "button",
                        onClick: ()=>editor.chain().focus().setHardBreak().run(),
                        className: "tiptap-btn",
                        children: "↵ New Line"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "color",
                        onChange: (e)=>setTextColor(e.target.value),
                        value: editor.getAttributes("textStyle").color || "#000000",
                        className: "tiptap-color-input",
                        title: "Text color"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().unsetColor().run(),
                        className: "tiptap-btn",
                        children: "Remove Color"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    !showLinkInput ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: openLinkInput,
                                className: editor.isActive("link") ? "tiptap-btn-active" : "tiptap-btn",
                                children: "🔗 Link"
                            }, void 0, false, {
                                fileName: "[project]/components/editor/editor-client.tsx",
                                lineNumber: 297,
                                columnNumber: 13
                            }, this),
                            showLinkUnlink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>editor.chain().focus().unsetLink().run(),
                                className: editor.isActive("link") ? "tiptap-btn" : "tiptap-btn-disabled",
                                disabled: !editor.isActive("link"),
                                children: "⛔ Unlink"
                            }, void 0, false, {
                                fileName: "[project]/components/editor/editor-client.tsx",
                                lineNumber: 305,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "tiptap-link-input",
                        className: "tiptap-link-input",
                        type: "text",
                        placeholder: "Paste or type a URL and press Enter",
                        value: linkValue,
                        onChange: (e)=>setLinkValue(e.target.value),
                        onKeyDown: handleLinkInputKeyDown,
                        onBlur: ()=>setShowLinkInput(false),
                        style: {
                            minWidth: 180,
                            fontSize: "1rem",
                            border: "1px solid #e5e7eb",
                            borderRadius: 4,
                            padding: "2px 6px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "tiptap-btn cursor-pointer",
                        children: [
                            "🖼️ Image",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*",
                                hidden: true,
                                onChange: (e)=>{
                                    const file = e.target.files?.[0];
                                    if (file) insertImage(file);
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/editor/editor-client.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setShowTablePrompt(true),
                        className: "tiptap-btn",
                        children: "➕ Table"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().deleteTable().run(),
                        className: "tiptap-btn",
                        children: "❌ Table"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().addColumnBefore().run(),
                        className: "tiptap-btn",
                        children: "|◀️ Col"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().addColumnAfter().run(),
                        className: "tiptap-btn",
                        children: "Col ▶️|"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().deleteColumn().run(),
                        className: "tiptap-btn",
                        children: "⛔ Col"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().addRowBefore().run(),
                        className: "tiptap-btn",
                        children: "▲ Row"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().addRowAfter().run(),
                        className: "tiptap-btn",
                        children: "▼ Row"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().deleteRow().run(),
                        className: "tiptap-btn",
                        children: "⛔ Row"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().undo().run(),
                        className: "tiptap-btn",
                        children: "↶ Undo"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().redo().run(),
                        className: "tiptap-btn",
                        children: "↷ Redo"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 356,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/editor-client.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            editor.isActive("table") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tiptap-table-colors mb-2 flex flex-wrap gap-1 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs mr-2",
                        children: "Cell Color:"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 361,
                        columnNumber: 11
                    }, this),
                    colors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "tiptap-table-color-btn",
                            style: {
                                backgroundColor: color
                            },
                            onClick: ()=>setCellColor(color),
                            "aria-label": `Set cell color ${color}`,
                            type: "button"
                        }, color, false, {
                            fileName: "[project]/components/editor/editor-client.tsx",
                            lineNumber: 363,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/editor-client.tsx",
                lineNumber: 360,
                columnNumber: 9
            }, this),
            selectedImagePos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tiptap-img-menu flex flex-wrap gap-2 mb-2 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs",
                        children: "Image:"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 377,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "tiptap-btn",
                        onClick: ()=>setImageFloat("left"),
                        children: "⬅️ Float Left"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 378,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "tiptap-btn",
                        onClick: ()=>setImageFloat("right"),
                        children: "Float Right ➡️"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 379,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "tiptap-btn",
                        onClick: ()=>setImageFloat("none"),
                        children: "No Float"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 380,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "tiptap-btn",
                        onClick: ()=>setImageWidth("100%"),
                        children: "100% Width"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 381,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "tiptap-btn",
                        onClick: ()=>setImageWidth("50%"),
                        children: "50% Width"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 382,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "tiptap-btn",
                        onClick: removeImage,
                        children: "❌ Delete Image"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 383,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/editor-client.tsx",
                lineNumber: 376,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                editor: editor
            }, void 0, false, {
                fileName: "[project]/components/editor/editor-client.tsx",
                lineNumber: 387,
                columnNumber: 7
            }, this),
            showTablePrompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 border p-4 rounded-md bg-muted text-muted-foreground space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Rows:"
                            }, void 0, false, {
                                fileName: "[project]/components/editor/editor-client.tsx",
                                lineNumber: 392,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: tableRows,
                                min: 1,
                                max: 10,
                                onChange: (e)=>setTableRows(+e.target.value),
                                className: "border p-1 w-16"
                            }, void 0, false, {
                                fileName: "[project]/components/editor/editor-client.tsx",
                                lineNumber: 393,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Cols:"
                            }, void 0, false, {
                                fileName: "[project]/components/editor/editor-client.tsx",
                                lineNumber: 394,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: tableCols,
                                min: 1,
                                max: 10,
                                onChange: (e)=>setTableCols(+e.target.value),
                                className: "border p-1 w-16"
                            }, void 0, false, {
                                fileName: "[project]/components/editor/editor-client.tsx",
                                lineNumber: 395,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: includeHeader,
                                        onChange: ()=>setIncludeHeader(!includeHeader)
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/editor-client.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this),
                                    "Header"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/editor/editor-client.tsx",
                                lineNumber: 396,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 391,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "tiptap-btn",
                                onClick: ()=>{
                                    editor.chain().focus().insertTable({
                                        rows: tableRows,
                                        cols: tableCols,
                                        withHeaderRow: includeHeader
                                    }).run();
                                    setShowTablePrompt(false);
                                },
                                children: "✅ Insert"
                            }, void 0, false, {
                                fileName: "[project]/components/editor/editor-client.tsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowTablePrompt(false),
                                className: "tiptap-btn",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/editor/editor-client.tsx",
                                lineNumber: 416,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/editor/editor-client.tsx",
                        lineNumber: 401,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/editor-client.tsx",
                lineNumber: 390,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/editor/editor-client.tsx",
        lineNumber: 256,
        columnNumber: 5
    }, this);
}
_s(EditorClient, "afmIEdvFkwIdjAcICqcx1hdT30Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"]
    ];
});
_c = EditorClient;
var _c;
__turbopack_context__.k.register(_c, "EditorClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/editor/editor-client.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/components/editor/editor-client.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=components_editor_editor-client_tsx_777b267e._.js.map