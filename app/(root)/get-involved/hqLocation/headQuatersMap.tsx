'use client';

import React, { useRef, useState } from 'react';
import {
  Map,
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  ScaleControl,
} from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useTheme } from 'next-themes';

const HQ_LAT = parseFloat(process.env.NEXT_PUBLIC_HQ_LAT!);
const HQ_LNG = parseFloat(process.env.NEXT_PUBLIC_HQ_LNG!);
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;

const MAPBOX_STYLES = [
  { label: 'Streets', value: 'mapbox://styles/mapbox/streets-v12' },
  { label: 'Outdoors', value: 'mapbox://styles/mapbox/outdoors-v12' },
  { label: 'Light', value: 'mapbox://styles/mapbox/light-v11' },
  { label: 'Dark', value: 'mapbox://styles/mapbox/dark-v11' },
  { label: 'Satellite', value: 'mapbox://styles/mapbox/satellite-v9' },
  { label: 'Satellite Streets', value: 'mapbox://styles/mapbox/satellite-streets-v12' },
  { label: 'Navigation Day', value: 'mapbox://styles/mapbox/navigation-day-v1' },
  { label: 'Navigation Night', value: 'mapbox://styles/mapbox/navigation-night-v1' },
];

// South Sudan bounding box: southwest [lon, lat], northeast [lon, lat]
const SOUTH_SUDAN_BOUNDS: [[number, number], [number, number]] = [
  [23.44, 3.47],
  [35.95, 12.24],
];

const HQ_ADDRESS = (
  <>
    Plot #208 Suk Militia, Munuki Payam,
    <br />
    Juba County, Juba City - South Sudan
  </>
);

const HeadQuartersMap = () => {
  const { resolvedTheme } = useTheme();

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);

  // Main map state
  const [viewState, setViewState] = useState({
    latitude: HQ_LAT,
    longitude: HQ_LNG,
    zoom: 18,
    bearing: 0,
    pitch: 0,
  });

  // Modal map state
  const [modalViewState, setModalViewState] = useState({
    latitude: HQ_LAT,
    longitude: HQ_LNG,
    zoom: 18,
    bearing: 0,
    pitch: 0,
  });

  const [mapStyle, setMapStyle] = useState(MAPBOX_STYLES[0].value);
  const mapRef = useRef<any>(null);

  // Get current map style label
  const currentMapStyleLabel =
    MAPBOX_STYLES.find((style) => style.value === mapStyle)?.label ?? 'Streets';

  // Prevent click on type label or style switcher from triggering modal
  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Popup theme-aware classes for text only
  const popupTitleClass =
    'text-sm font-semibold ' + (resolvedTheme === 'dark' ? 'text-gray-800' : 'text-gray-900');
  const popupAddressClass =
    'text-xs mt-1 text-center ' + (resolvedTheme === 'dark' ? 'text-gray-600' : 'text-gray-700');

  // Map box for modal and normal
  const renderMap = (
    currentViewState: any,
    setCurrentViewState: (v: any) => void,
    height: string = '100%'
  ) => (
    <div className="relative w-full h-full" style={{ height }}>
      {/* Type Label and Switcher in the map, top right */}
      <div
        className="absolute top-3 right-3 z-20 flex flex-col items-end gap-2"
        onClick={handleOverlayClick}
      >
        <div
          className="bg-white/80 border border-gray-200 rounded px-3 py-1 text-xs font-bold text-pink-700 shadow select-none mb-2 text-right cursor-default"
          tabIndex={-1}
        >
          {currentMapStyleLabel}
        </div>
        <div className="bg-white/80 border border-gray-200 rounded px-2 py-1 flex items-center gap-2">
          <label htmlFor="map-style" className="text-xs text-black font-medium mr-1">
            Map Type:
          </label>
          <select
            id="map-style"
            className="rounded p-1 text-xs bg-white text-black border border-gray-300"
            value={mapStyle}
            onChange={(e) => setMapStyle(e.target.value)}
          >
            {MAPBOX_STYLES.map((style) => (
              <option key={style.value} value={style.value}>
                {style.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Map
        ref={mapRef}
        {...currentViewState}
        onMove={(evt) => setCurrentViewState(evt.viewState)}
        mapStyle={mapStyle}
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{ width: '100%', height: '100%' }}
        cooperativeGestures={true}
        attributionControl={false}
        minZoom={5}
        maxZoom={18}
        maxBounds={SOUTH_SUDAN_BOUNDS}
      >
        {/* Marker at HQ */}
        <Marker latitude={HQ_LAT} longitude={HQ_LNG} anchor="bottom">
          <div className="relative">
            <svg height={40} viewBox="0 0 24 24" style={{ display: 'block' }}>
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                fill="#d02670"
              />
              <circle cx="12" cy="9" r="2.5" fill="white" />
            </svg>
          </div>
        </Marker>
        {/* Popup for HQ */}
        <Popup
          latitude={HQ_LAT}
          longitude={HQ_LNG}
          anchor="top"
          closeButton={false}
          offset={3}
          focusAfterOpen={false}
        >
          <div className="flex flex-col items-center">
            <div className={popupTitleClass}>GoGirls ICT HeadQuaters</div>
            <div className={popupAddressClass} style={{ lineHeight: 1.2 }}>
              {HQ_ADDRESS}
            </div>
          </div>
        </Popup>

        {/* Navigation & rich controls */}
        <NavigationControl position="bottom-right" showCompass showZoom />
        <GeolocateControl
          position="top-left"
          showAccuracyCircle={true}
          showUserLocation={true}
          trackUserLocation={true}
          auto
        />
        <FullscreenControl position="top-left" />
        <ScaleControl position="bottom-left" maxWidth={120} unit="metric" />
      </Map>
    </div>
  );

  return (
    <>
      {/* Main Map */}
      <div
        className="w-full h-full min-h-[340px] rounded-xl overflow-hidden shadow relative cursor-pointer"
        onClick={() => setModalOpen(true)}
        tabIndex={0}
        role="button"
        aria-label="Open headquarter location in full screen"
      >
        {renderMap(viewState, setViewState)}
        {/* Overlay for click-to-enlarge */}
        <div className="absolute inset-0 bg-transparent hover:bg-black/10 transition-opacity z-10 flex items-center justify-center pointer-events-none" />
        {/* Copyright */}
        <div className="absolute bottom-1 left-2 text-xs text-gray-500 z-20 bg-white/80 px-2 py-0.5 rounded pointer-events-none">
          2025 &copy;GoGirls ICT &nbsp; &copy;Mapbox
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-xl max-w-3xl w-full h-[70vh] shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal close button */}
            <button
              className="absolute top-2 right-2 z-10 bg-black/60 text-white rounded-full p-1.5 hover:bg-black/80"
              onClick={() => setModalOpen(false)}
              aria-label="Close full-screen map"
            >
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth={2} />
                <path d="M6 18L18 6" stroke="currentColor" strokeWidth={2} />
              </svg>
            </button>
            <div className="w-full h-full rounded-xl overflow-hidden">
              {renderMap(modalViewState, setModalViewState, '100%')}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeadQuartersMap;
