(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/(root)/gallery/components/gallerySwiper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GallerySwiper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './modal-image-slider'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const fetchGalleryImages = async ()=>{
    const [projectsRes, reportsRes, eventsRes] = await Promise.all([
        fetch('/api/projects'),
        fetch('/api/reports'),
        fetch('/api/events')
    ]);
    const [projects, reports, events] = await Promise.all([
        projectsRes.json(),
        reportsRes.json(),
        eventsRes.json()
    ]);
    const projectImages = (projects ?? []).flatMap((p)=>(p.images || []).map((img)=>({
                src: img,
                alt: p.title ?? 'Project image',
                key: `project-${p.id}-${img}`
            })));
    const reportImages = (reports ?? []).flatMap((r)=>(r.images || []).map((img)=>({
                src: img,
                alt: r.title ?? 'Report image',
                key: `report-${r.id}-${img}`
            })));
    const eventImages = (events ?? []).flatMap((e)=>(e.eventImages || []).map((img)=>({
                src: img,
                alt: e.eventTitle ?? 'Event image',
                key: `event-${e.id}-${img}`
            })));
    return [
        ...projectImages,
        ...reportImages,
        ...eventImages
    ];
};
function shuffleArray(array) {
    const arr = [
        ...array
    ];
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [
            arr[j],
            arr[i]
        ];
    }
    return arr;
}
function GallerySwiper() {
    _s();
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sliderImages, setSliderImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sliderStart, setSliderStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GallerySwiper.useEffect": ()=>{
            fetchGalleryImages().then(setImages).finally({
                "GallerySwiper.useEffect": ()=>setLoading(false)
            }["GallerySwiper.useEffect"]);
        }
    }["GallerySwiper.useEffect"], []);
    // Grid settings
    const getCols = ()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        if (window.innerWidth >= 1280) return 5;
        if (window.innerWidth >= 1024) return 4;
        if (window.innerWidth >= 768) return 3;
        return 2;
    };
    const [cols, setCols] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getCols());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GallerySwiper.useEffect": ()=>{
            setCols(getCols());
            const handleResize = {
                "GallerySwiper.useEffect.handleResize": ()=>setCols(getCols())
            }["GallerySwiper.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "GallerySwiper.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["GallerySwiper.useEffect"];
        }
    }["GallerySwiper.useEffect"], []);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex items-center justify-center text-xl",
        children: "Loading gallery..."
    }, void 0, false, {
        fileName: "[project]/app/(root)/gallery/components/gallerySwiper.tsx",
        lineNumber: 86,
        columnNumber: 7
    }, this);
    if (!images.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex items-center justify-center text-xl",
        children: "No images found."
    }, void 0, false, {
        fileName: "[project]/app/(root)/gallery/components/gallerySwiper.tsx",
        lineNumber: 92,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full grid",
                style: {
                    gridTemplateColumns: `repeat(${cols}, 1fr)`,
                    gridAutoRows: '1fr',
                    gap: 8,
                    minHeight: '80vh',
                    padding: 12,
                    boxSizing: 'border-box'
                },
                children: images.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden rounded-lg shadow-md group cursor-pointer",
                        style: {
                            background: '#222',
                            aspectRatio: '1/1'
                        },
                        onClick: ()=>{
                            setSliderImages(images.map((i)=>i.src)); // original order
                            setSliderStart(idx);
                            setModalOpen(true);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: img.src,
                                alt: img.alt,
                                className: "w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105",
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/gallery/components/gallerySwiper.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-2 py-1 text-xs text-white",
                                children: img.alt
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/gallery/components/gallerySwiper.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        ]
                    }, img.key, true, {
                        fileName: "[project]/app/(root)/gallery/components/gallerySwiper.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(root)/gallery/components/gallerySwiper.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            modalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalImageSlider, {
                images: sliderImages,
                initialSlide: sliderStart,
                onClose: ()=>setModalOpen(false),
                onShuffle: ()=>{
                    // Shuffle images, but start the slider on the currently viewed image (after shuffle)
                    // Get the current image src
                    const currentSrc = sliderImages[sliderStart];
                    const shuffled = shuffleArray(sliderImages);
                    let newStart = shuffled.indexOf(currentSrc);
                    if (newStart === -1) newStart = 0;
                    setSliderImages(shuffled);
                    setSliderStart(newStart);
                }
            }, void 0, false, {
                fileName: "[project]/app/(root)/gallery/components/gallerySwiper.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(GallerySwiper, "uRhNM4sNx9RlHTFNKssASYd8tEo=");
_c = GallerySwiper;
var _c;
__turbopack_context__.k.register(_c, "GallerySwiper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_%28root%29_gallery_components_gallerySwiper_tsx_268f272d._.js.map