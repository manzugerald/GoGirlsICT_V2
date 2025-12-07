(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$mapbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/react-map-gl/dist/mapbox.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$navigation$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/navigation-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$geolocate$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/geolocate-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$fullscreen$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/fullscreen-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$scale$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/scale-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const HQ_LAT = parseFloat(("TURBOPACK compile-time value", "4.86389"));
const HQ_LNG = parseFloat(("TURBOPACK compile-time value", "31.57611"));
const MAPBOX_TOKEN = ("TURBOPACK compile-time value", "pk.eyJ1IjoibWFuenVnZXJhbGQiLCJhIjoiY21jbjVjbW9oMHNoaTJpcTAxdHMxdzRpNyJ9.yCTHPmhQkSJRM0GwHpFj2w");
const MAPBOX_STYLES = [
    {
        label: 'Streets',
        value: 'mapbox://styles/mapbox/streets-v12'
    },
    {
        label: 'Outdoors',
        value: 'mapbox://styles/mapbox/outdoors-v12'
    },
    {
        label: 'Light',
        value: 'mapbox://styles/mapbox/light-v11'
    },
    {
        label: 'Dark',
        value: 'mapbox://styles/mapbox/dark-v11'
    },
    {
        label: 'Satellite',
        value: 'mapbox://styles/mapbox/satellite-v9'
    },
    {
        label: 'Satellite Streets',
        value: 'mapbox://styles/mapbox/satellite-streets-v12'
    },
    {
        label: 'Navigation Day',
        value: 'mapbox://styles/mapbox/navigation-day-v1'
    },
    {
        label: 'Navigation Night',
        value: 'mapbox://styles/mapbox/navigation-night-v1'
    }
];
// South Sudan bounding box: southwest [lon, lat], northeast [lon, lat]
const SOUTH_SUDAN_BOUNDS = [
    [
        23.44,
        3.47
    ],
    [
        35.95,
        12.24
    ]
];
const HQ_ADDRESS = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        "Plot #208 Suk Militia, Munuki Payam,",
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
            lineNumber: 40,
            columnNumber: 5
        }, this),
        "Juba County, Juba City - South Sudan"
    ]
}, void 0, true);
const HeadQuartersMap = ()=>{
    _s();
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    // Modal state
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Main map state
    const [viewState, setViewState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        latitude: HQ_LAT,
        longitude: HQ_LNG,
        zoom: 18,
        bearing: 0,
        pitch: 0
    });
    // Modal map state
    const [modalViewState, setModalViewState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        latitude: HQ_LAT,
        longitude: HQ_LNG,
        zoom: 18,
        bearing: 0,
        pitch: 0
    });
    const [mapStyle, setMapStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MAPBOX_STYLES[0].value);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get current map style label
    const currentMapStyleLabel = MAPBOX_STYLES.find((style)=>style.value === mapStyle)?.label ?? 'Streets';
    // Prevent click on type label or style switcher from triggering modal
    const handleOverlayClick = (e)=>{
        e.stopPropagation();
    };
    // Popup theme-aware classes for text only
    const popupTitleClass = 'text-sm font-semibold ' + (resolvedTheme === 'dark' ? 'text-gray-800' : 'text-gray-900');
    const popupAddressClass = 'text-xs mt-1 text-center ' + (resolvedTheme === 'dark' ? 'text-gray-600' : 'text-gray-700');
    // Map box for modal and normal
    const renderMap = (currentViewState, setCurrentViewState, height = '100%')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full",
            style: {
                height
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-3 right-3 z-20 flex flex-col items-end gap-2",
                    onClick: handleOverlayClick,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/80 border border-gray-200 rounded px-3 py-1 text-xs font-bold text-pink-700 shadow select-none mb-2 text-right cursor-default",
                            tabIndex: -1,
                            children: currentMapStyleLabel
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                            lineNumber: 99,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/80 border border-gray-200 rounded px-2 py-1 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "map-style",
                                    className: "text-xs text-black font-medium mr-1",
                                    children: "Map Type:"
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                                    lineNumber: 106,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "map-style",
                                    className: "rounded p-1 text-xs bg-white text-black border border-gray-300",
                                    value: mapStyle,
                                    onChange: (e)=>setMapStyle(e.target.value),
                                    children: MAPBOX_STYLES.map((style)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: style.value,
                                            children: style.label
                                        }, style.value, false, {
                                            fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                                    lineNumber: 109,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                            lineNumber: 105,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                    lineNumber: 95,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"], {
                    ref: mapRef,
                    ...currentViewState,
                    onMove: (evt)=>setCurrentViewState(evt.viewState),
                    mapStyle: mapStyle,
                    mapboxAccessToken: MAPBOX_TOKEN,
                    style: {
                        width: '100%',
                        height: '100%'
                    },
                    cooperativeGestures: true,
                    attributionControl: false,
                    minZoom: 5,
                    maxZoom: 18,
                    maxBounds: SOUTH_SUDAN_BOUNDS,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                            latitude: HQ_LAT,
                            longitude: HQ_LNG,
                            anchor: "bottom",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    height: 40,
                                    viewBox: "0 0 24 24",
                                    style: {
                                        display: 'block'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
                                            fill: "#d02670"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "9",
                                            r: "2.5",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                            lineNumber: 137,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                            latitude: HQ_LAT,
                            longitude: HQ_LNG,
                            anchor: "top",
                            closeButton: false,
                            offset: 3,
                            focusAfterOpen: false,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: popupTitleClass,
                                        children: "GoGirls ICT HeadQuaters"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: popupAddressClass,
                                        style: {
                                            lineHeight: 1.2
                                        },
                                        children: HQ_ADDRESS
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                            lineNumber: 149,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$navigation$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationControl"], {
                            position: "bottom-right",
                            showCompass: true,
                            showZoom: true
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                            lineNumber: 166,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$geolocate$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeolocateControl"], {
                            position: "top-left",
                            showAccuracyCircle: true,
                            showUserLocation: true,
                            trackUserLocation: true,
                            auto: true
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                            lineNumber: 167,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$fullscreen$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FullscreenControl"], {
                            position: "top-left"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                            lineNumber: 174,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$scale$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScaleControl"], {
                            position: "bottom-left",
                            maxWidth: 120,
                            unit: "metric"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                            lineNumber: 175,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                    lineNumber: 123,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
            lineNumber: 93,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full min-h-[340px] rounded-xl overflow-hidden shadow relative cursor-pointer",
                onClick: ()=>setModalOpen(true),
                tabIndex: 0,
                role: "button",
                "aria-label": "Open headquarter location in full screen",
                children: [
                    renderMap(viewState, setViewState),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-transparent hover:bg-black/10 transition-opacity z-10 flex items-center justify-center pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1 left-2 text-xs text-gray-500 z-20 bg-white/80 px-2 py-0.5 rounded pointer-events-none",
                        children: "2025 ©GoGirls ICT   ©Mapbox"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            modalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center",
                onClick: ()=>setModalOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-gray-900 rounded-xl max-w-3xl w-full h-[70vh] shadow-lg relative",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-2 right-2 z-10 bg-black/60 text-white rounded-full p-1.5 hover:bg-black/80",
                            onClick: ()=>setModalOpen(false),
                            "aria-label": "Close full-screen map",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: 24,
                                height: 24,
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 6L18 18",
                                        stroke: "currentColor",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 18L18 6",
                                        stroke: "currentColor",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                                lineNumber: 215,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full rounded-xl overflow-hidden",
                            children: renderMap(modalViewState, setModalViewState, '100%')
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                    lineNumber: 205,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(root)/get-involved/hqLocation/headQuatersMap.tsx",
                lineNumber: 201,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(HeadQuartersMap, "mnovQTyZqSbu+Odwd7nZnNns0IY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = HeadQuartersMap;
const __TURBOPACK__default__export__ = HeadQuartersMap;
var _c;
__turbopack_context__.k.register(_c, "HeadQuartersMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/accordion.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Accordion": (()=>Accordion),
    "AccordionContent": (()=>AccordionContent),
    "AccordionItem": (()=>AccordionItem),
    "AccordionTrigger": (()=>AccordionTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Accordion({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "accordion",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/accordion.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Accordion;
function AccordionItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "accordion-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/accordion.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = AccordionItem;
function AccordionTrigger({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "accordion-trigger",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/components/ui/accordion.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/accordion.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/accordion.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = AccordionTrigger;
function AccordionContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "accordion-content",
        className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pt-0 pb-4", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/accordion.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/accordion.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c3 = AccordionContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Accordion");
__turbopack_context__.k.register(_c1, "AccordionItem");
__turbopack_context__.k.register(_c2, "AccordionTrigger");
__turbopack_context__.k.register(_c3, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(root)/get-involved/components/FAQAccordion.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/accordion.tsx [app-client] (ecmascript)");
'use client';
;
;
// Capitalize first alphabetical character, preserving leading whitespace
function capitalizeFirstWord(input) {
    if (!input) return '';
    const m = input.match(/[A-Za-z]/);
    if (!m) return input;
    const i = m.index;
    return input.slice(0, i) + input.charAt(i).toUpperCase() + input.slice(i + 1);
}
const FAQS = [
    {
        question: 'What is GoGirls ICT Initiative?',
        answer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "GoGirls ICT Initiative is a nonprofit based in Juba, South Sudan, founded in 2015 and registered officially in 2019..."
        }, void 0, false)
    },
    {
        question: 'What is the vision of GoGirls ICT Initiative?',
        answer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "Their vision is to: ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                    lineNumber: 38,
                    columnNumber: 29
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "italic",
                    children: "“Spark imaginations and curiosity in generations of problem solvers…”"
                }, void 0, false, {
                    fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true)
    },
    {
        question: 'What is their mission?',
        answer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "Their mission is summarized in three actions:",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc pl-5 mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Engage"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Educate"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Empower"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true)
    },
    {
        question: 'What are GoGirls ICT’s core values?',
        answer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Creativity, Innovation, Collaboration, Open-Mindedness, Flexibility, Responsibility, Consistency, Positivity."
        }, void 0, false)
    }
];
const FAQAccordion = ({ className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            'max-w-none w-full',
            // fully flat in both themes
            'bg-transparent dark:bg-transparent',
            'shadow-none drop-shadow-none ring-0 outline-none border-0',
            'rounded-none',
            className
        ].join(' '),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold px-6 py-4 text-center text-gray-900 dark:text-gray-100",
                children: "Frequently Asked Questions (FAQ)"
            }, void 0, false, {
                fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                type: "single",
                collapsible: true,
                // only subtle between-item dividers (no top/bottom edge)
                className: "px-6 pb-6 divide-y divide-gray-200/80 dark:divide-gray-700/60",
                children: FAQS.map((faq, idx)=>{
                    const questionText = capitalizeFirstWord(faq.question ?? '');
                    const answerContent = typeof faq.answer === 'string' ? capitalizeFirstWord(faq.answer) : faq.answer;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                        value: `${idx}`,
                        className: "py-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                className: "group w-full flex items-center gap-3 py-4 text-left text-xl font-semibold text-gray-900 dark:text-gray-100 [&>svg]:hidden focus:outline-none focus:ring-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-7 w-7 text-gray-900 dark:text-gray-100",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    className: "stroke-current"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "8",
                                                    y1: "12",
                                                    x2: "16",
                                                    y2: "12",
                                                    className: "stroke-current"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "8",
                                                    x2: "12",
                                                    y2: "16",
                                                    className: "stroke-current transition-opacity duration-200 group-data-[state=open]:opacity-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-left flex-1",
                                        children: questionText
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                className: "pl-9 pr-0 pb-4 text-lg text-gray-900 dark:text-gray-100",
                                children: answerContent
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this)
                        ]
                    }, faq.question, true, {
                        fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/get-involved/components/FAQAccordion.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
};
_c = FAQAccordion;
const __TURBOPACK__default__export__ = FAQAccordion;
var _c;
__turbopack_context__.k.register(_c, "FAQAccordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/accordion.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function toPlain(val) {
    if (val == null) return '';
    if (typeof val === 'string') return val;
    if (Array.isArray(val)) return val.map(toPlain).filter(Boolean).join('\n').trim();
    if (typeof val === 'object') {
        const o = val;
        if (Array.isArray(o.ops)) {
            try {
                return o.ops.map((op)=>typeof op?.insert === 'string' ? op.insert : '').join('').trim();
            } catch  {}
        }
        if (o.type === 'doc' && Array.isArray(o.content)) {
            const walk = (n)=>!n ? '' : n.type === 'text' && typeof n.text === 'string' ? n.text : Array.isArray(n.content) ? n.content.map(walk).join('') : '';
            try {
                return o.content.map(walk).join('').trim();
            } catch  {}
        }
        for (const k of [
            'text',
            'message',
            'body',
            'value'
        ])if (typeof o[k] === 'string') return String(o[k]);
        try {
            const joined = Object.values(o).map(toPlain).filter(Boolean).join('\n').trim();
            if (joined) return joined;
        } catch  {}
    }
    try {
        return JSON.stringify(val, null, 2);
    } catch  {
        return String(val);
    }
}
function capitalizeFirstWord(input) {
    if (!input) return '';
    const m = input.match(/[A-Za-z]/);
    if (!m) return input;
    const i = m.index;
    return input.slice(0, i) + input.charAt(i).toUpperCase() + input.slice(i + 1);
}
const BeneficiaryMessagesAccordion = ({ className = '' })=>{
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BeneficiaryMessagesAccordion.useEffect": ()=>{
            fetch('/api/beneficiaryMessages').then({
                "BeneficiaryMessagesAccordion.useEffect": (r)=>r.json()
            }["BeneficiaryMessagesAccordion.useEffect"]).then({
                "BeneficiaryMessagesAccordion.useEffect": (d)=>setMessages(Array.isArray(d) ? d : [])
            }["BeneficiaryMessagesAccordion.useEffect"]).finally({
                "BeneficiaryMessagesAccordion.useEffect": ()=>setLoading(false)
            }["BeneficiaryMessagesAccordion.useEffect"]);
        }
    }["BeneficiaryMessagesAccordion.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            'max-w-none w-full',
            'bg-transparent dark:bg-transparent',
            'shadow-none drop-shadow-none ring-0 outline-none border-0 rounded-none',
            className
        ].join(' '),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold px-6 py-4 text-center text-gray-900 dark:text-gray-100",
                children: "Recent Beneficiary Messages"
            }, void 0, false, {
                fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pb-6 text-center text-base text-gray-500 dark:text-gray-400",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            !loading && messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pb-6 text-center text-base text-gray-500 dark:text-gray-400",
                children: "No beneficiary messages yet."
            }, void 0, false, {
                fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                type: "single",
                collapsible: true,
                className: "px-6 pb-2 divide-y divide-gray-200 dark:divide-gray-700",
                children: messages.slice(0, 5).map((msg)=>{
                    const title = capitalizeFirstWord(msg.title ?? '');
                    const contentText = capitalizeFirstWord(toPlain(msg.beneficiaryMessageText));
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                        value: msg.id,
                        className: "py-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                className: "group w-full flex items-center gap-3 py-4 text-left text-xl font-semibold text-gray-900 dark:text-gray-100 [&>svg]:hidden focus:outline-none focus:ring-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-7 w-7 text-gray-900 dark:text-gray-100",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    className: "stroke-current"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "8",
                                                    y1: "12",
                                                    x2: "16",
                                                    y2: "12",
                                                    className: "stroke-current"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "8",
                                                    x2: "12",
                                                    y2: "16",
                                                    className: "stroke-current transition-opacity duration-200 group-data-[state=open]:opacity-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                                            lineNumber: 117,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                                        lineNumber: 116,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-left flex-1",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                                        lineNumber: 135,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                                lineNumber: 115,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                className: "pl-9 pr-0 pb-4 text-lg space-y-4 text-gray-900 dark:text-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-base text-gray-600 dark:text-gray-300",
                                        children: [
                                            msg.beneficiary ? `By ${msg.beneficiary.firstName} ${msg.beneficiary.lastName}` : 'By Beneficiary',
                                            ' ',
                                            "• ",
                                            new Date(msg.createdAt).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                                        lineNumber: 139,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "whitespace-pre-wrap break-words",
                                        children: contentText
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                                        lineNumber: 145,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-base capitalize text-gray-700 dark:text-gray-300",
                                        children: msg.status
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                                        lineNumber: 146,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                                lineNumber: 138,
                                columnNumber: 17
                            }, this)
                        ]
                    }, msg.id, true, {
                        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                        lineNumber: 114,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryMessagesCard.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
};
_s(BeneficiaryMessagesAccordion, "iENrkQA4ceL8nzHtV8t1eR+7xGM=");
_c = BeneficiaryMessagesAccordion;
const __TURBOPACK__default__export__ = BeneficiaryMessagesAccordion;
var _c;
__turbopack_context__.k.register(_c, "BeneficiaryMessagesAccordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/accordion.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function toPlain(val) {
    if (val == null) return '';
    if (typeof val === 'string') return val;
    if (Array.isArray(val)) return val.map(toPlain).filter(Boolean).join('\n').trim();
    if (typeof val === 'object') {
        const o = val;
        if (Array.isArray(o.ops)) {
            try {
                return o.ops.map((op)=>typeof op?.insert === 'string' ? op.insert : '').join('').trim();
            } catch  {}
        }
        if (o.type === 'doc' && Array.isArray(o.content)) {
            const walk = (n)=>!n ? '' : n.type === 'text' && typeof n.text === 'string' ? n.text : Array.isArray(n.content) ? n.content.map(walk).join('') : '';
            try {
                return o.content.map(walk).join('').trim();
            } catch  {}
        }
        for (const k of [
            'text',
            'message',
            'body',
            'value'
        ])if (typeof o[k] === 'string') return String(o[k]);
        try {
            const joined = Object.values(o).map(toPlain).filter(Boolean).join('\n').trim();
            if (joined) return joined;
        } catch  {}
    }
    try {
        return JSON.stringify(val, null, 2);
    } catch  {
        return String(val);
    }
}
function capitalizeFirstWord(input) {
    if (!input) return '';
    const m = input.match(/[A-Za-z]/);
    if (!m) return input;
    const i = m.index;
    return input.slice(0, i) + input.charAt(i).toUpperCase() + input.slice(i + 1);
}
const BeneficiaryRequestsAccordion = ({ className = '' })=>{
    _s();
    const [requests, setRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [responses, setResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BeneficiaryRequestsAccordion.useEffect": ()=>{
            let cancelled = false;
            ({
                "BeneficiaryRequestsAccordion.useEffect": async ()=>{
                    try {
                        const [reqRes, respRes] = await Promise.all([
                            fetch('/api/beneficiaryRequests'),
                            fetch('/api/beneficiaryRequestResponse')
                        ]);
                        const [reqJson, respJson] = await Promise.all([
                            reqRes.ok ? reqRes.json() : [],
                            respRes.ok ? respRes.json() : []
                        ]);
                        if (!cancelled) {
                            setRequests(Array.isArray(reqJson) ? reqJson : []);
                            setResponses(Array.isArray(respJson) ? respJson : []);
                        }
                    } catch  {
                        if (!cancelled) {
                            setRequests([]);
                            setResponses([]);
                        }
                    } finally{
                        if (!cancelled) setLoading(false);
                    }
                }
            })["BeneficiaryRequestsAccordion.useEffect"]();
            return ({
                "BeneficiaryRequestsAccordion.useEffect": ()=>{
                    cancelled = true;
                }
            })["BeneficiaryRequestsAccordion.useEffect"];
        }
    }["BeneficiaryRequestsAccordion.useEffect"], []);
    const responsesByRequestId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BeneficiaryRequestsAccordion.useMemo[responsesByRequestId]": ()=>{
            const map = new Map();
            for (const r of responses){
                if (!r?.responseId) continue;
                if (!map.has(r.responseId)) map.set(r.responseId, []);
                map.get(r.responseId).push(r);
            }
            for (const [k, arr] of map){
                arr.sort({
                    "BeneficiaryRequestsAccordion.useMemo[responsesByRequestId]": (a, b)=>{
                        const ta = a.respondedAt ? new Date(a.respondedAt).getTime() : 0;
                        const tb = b.respondedAt ? new Date(b.respondedAt).getTime() : 0;
                        return tb - ta;
                    }
                }["BeneficiaryRequestsAccordion.useMemo[responsesByRequestId]"]);
                map.set(k, arr);
            }
            return map;
        }
    }["BeneficiaryRequestsAccordion.useMemo[responsesByRequestId]"], [
        responses
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            'max-w-none w-full',
            'bg-transparent dark:bg-transparent',
            'shadow-none drop-shadow-none ring-0 outline-none border-0 rounded-none',
            className
        ].join(' '),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-center px-6 py-4 text-gray-900 dark:text-gray-100",
                children: "Recent Beneficiary Requests"
            }, void 0, false, {
                fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pb-6 text-center text-base text-gray-500 dark:text-gray-400",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this),
            !loading && requests.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pb-6 text-center text-base text-gray-500 dark:text-gray-400",
                children: "No beneficiary requests yet."
            }, void 0, false, {
                fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this),
            !loading && requests.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                type: "single",
                collapsible: true,
                className: "px-6 pb-6 divide-y divide-gray-200 dark:divide-gray-700",
                children: requests.slice(0, 5).map((req)=>{
                    const reqResponses = responsesByRequestId.get(req.id) || [];
                    const requestText = capitalizeFirstWord(toPlain(req.beneficiaryRequestText));
                    const requestTitle = capitalizeFirstWord(req.title);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                        value: req.id,
                        className: "py-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                className: "group w-full flex items-center gap-3 py-4 text-left text-xl font-semibold text-gray-900 dark:text-gray-100 [&>svg]:hidden focus:outline-none focus:ring-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-7 w-7 text-gray-900 dark:text-gray-100",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    className: "stroke-current"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "8",
                                                    y1: "12",
                                                    x2: "16",
                                                    y2: "12",
                                                    className: "stroke-current"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "8",
                                                    x2: "12",
                                                    y2: "16",
                                                    className: "stroke-current transition-opacity duration-200 group-data-[state=open]:opacity-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                                            lineNumber: 170,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                                        lineNumber: 169,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-left flex-1",
                                        children: requestTitle
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                                        lineNumber: 188,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                                lineNumber: 168,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                className: "pl-9 pr-0 pb-4 text-lg space-y-4 text-gray-900 dark:text-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-base text-gray-600 dark:text-gray-300",
                                        children: [
                                            req.beneficiary ? `By ${req.beneficiary.firstName} ${req.beneficiary.lastName}` : 'By Beneficiary',
                                            ' ',
                                            "• ",
                                            new Date(req.createdAt).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                                        lineNumber: 192,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "whitespace-pre-wrap break-words text-lg",
                                        children: requestText
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                                        lineNumber: 199,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-base capitalize text-gray-700 dark:text-gray-300",
                                        children: req.status
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                                        lineNumber: 201,
                                        columnNumber: 19
                                    }, this),
                                    reqResponses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 pl-4 border-l border-gray-200 dark:border-gray-700 space-y-4",
                                        children: reqResponses.map((resp)=>{
                                            const respText = capitalizeFirstWord(toPlain(resp.responseText));
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-base text-gray-600 dark:text-gray-300",
                                                        children: [
                                                            resp.responder ? `Response by ${resp.responder.firstName} ${resp.responder.lastName}` : 'Response',
                                                            ' ',
                                                            resp.respondedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    "• ",
                                                                    new Date(resp.respondedAt).toLocaleDateString()
                                                                ]
                                                            }, void 0, true)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "whitespace-pre-wrap break-words text-lg",
                                                        children: respText || '(no response text)'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, resp.id, true, {
                                                fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                                                lineNumber: 210,
                                                columnNumber: 27
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                                        lineNumber: 206,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                                lineNumber: 191,
                                columnNumber: 17
                            }, this)
                        ]
                    }, req.id, true, {
                        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                        lineNumber: 167,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/get-involved/components/BeneficiaryRequestsCard.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
};
_s(BeneficiaryRequestsAccordion, "al3hhhF1tq1UESLWJe0P9hZaXjA=");
_c = BeneficiaryRequestsAccordion;
const __TURBOPACK__default__export__ = BeneficiaryRequestsAccordion;
var _c;
__turbopack_context__.k.register(_c, "BeneficiaryRequestsAccordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_7d5cbf99._.js.map