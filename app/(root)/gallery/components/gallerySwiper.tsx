'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import ImageSlider from './image-slider'; // <-- import your slider

const fetchGalleryImages = async () => {
  const [projectsRes, reportsRes, eventsRes] = await Promise.all([
    fetch('/api/projects'),
    fetch('/api/reports'),
    fetch('/api/events'),
  ]);
  const [projects, reports, events] = await Promise.all([
    projectsRes.json(),
    reportsRes.json(),
    eventsRes.json(),
  ]);
  const projectImages = (projects ?? []).flatMap((p: any) =>
    (p.images || []).map((img: string) => ({
      src: img,
      alt: p.title ?? 'Project image',
      key: `project-${p.id}-${img}`,
    }))
  );
  const reportImages = (reports ?? []).flatMap((r: any) =>
    (r.images || []).map((img: string) => ({
      src: img,
      alt: r.title ?? 'Report image',
      key: `report-${r.id}-${img}`,
    }))
  );
  const eventImages = (events ?? []).flatMap((e: any) =>
    (e.eventImages || []).map((img: string) => ({
      src: img,
      alt: e.eventTitle ?? 'Event image',
      key: `event-${e.id}-${img}`,
    }))
  );
  return [...projectImages, ...reportImages, ...eventImages];
};

function chunkAndFillArray(arr: any[], chunkSize: number) {
  if (!arr.length) return [];
  let slides = [];
  let start = 0;
  while (start < arr.length) {
    let chunk = arr.slice(start, start + chunkSize);
    if (chunk.length < chunkSize) {
      let deficit = chunkSize - chunk.length;
      chunk = [...chunk, ...arr.slice(0, deficit)];
      while (chunk.length < chunkSize) {
        chunk = [...chunk, ...arr.slice(0, Math.min(deficit, arr.length))];
      }
      chunk = chunk.slice(0, chunkSize);
    }
    slides.push(chunk);
    start += chunkSize;
  }
  if (slides.length === 0 && arr.length > 0) {
    let chunk = [...arr];
    while (chunk.length < chunkSize) {
      chunk = [...chunk, ...arr];
    }
    slides.push(chunk.slice(0, chunkSize));
  }
  return slides;
}

export default function GallerySwiper() {
  const [images, setImages] = useState<{ src: string; alt: string; key: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [sliderStartIndex, setSliderStartIndex] = useState(0);

  const getCols = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth >= 1280) return 5;
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 3;
    return 2;
  };

  const [cols, setCols] = useState(getCols());
  useEffect(() => {
    setCols(getCols());
    const handleResize = () => setCols(getCols());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetchGalleryImages()
      .then(setImages)
      .finally(() => setLoading(false));
  }, []);

  const rows = 2;
  const imagesPerSlide = cols * rows;
  const slides = chunkAndFillArray(images, imagesPerSlide);

  // Prepare the plain array of image srcs for the slider
  const imageSrcs = images.map((img) => img.src);

  if (loading)
    return (
      <div className="w-full h-full flex items-center justify-center text-xl p-8">
        Loading gallery...
      </div>
    );
  if (!images.length)
    return (
      <div className="w-full h-full flex items-center justify-center text-xl">No images found.</div>
    );

  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        speed={1200}
        className="w-full h-full"
        style={{ width: '100vw', height: '100vh' }}
      >
        {slides.map((slideImages, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full grid"
              style={{
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gridAutoRows: '1fr',
                gap: 8,
                height: '100vh',
                padding: 12,
                boxSizing: 'border-box',
              }}
            >
              {slideImages.map((img, i) => {
                // Find the global index of this image in the images array
                const globalIndex = images.findIndex((item) => item.key === img.key);
                return (
                  <div
                    key={img.key + '-' + i}
                    className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
                    style={{
                      height: `calc((100vh - ${(rows + 1) * 8 + 24}px) / ${rows})`,
                      background: '#222',
                    }}
                    onClick={() => {
                      setSliderStartIndex(globalIndex);
                      setModalOpen(true);
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-2 py-1 text-xs text-white">
                      {img.alt}
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal for image slider */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          style={{ backdropFilter: 'blur(2px)' }}
        >
          <div className="absolute top-4 right-6 z-60">
            <button
              onClick={() => setModalOpen(false)}
              className="text-3xl text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <div className="w-full max-w-3xl">
            <ImageSlider
              images={imageSrcs}
              autoPlay={false}
              delay={4000}
              key={sliderStartIndex} // force re-mount when index changes
              // Add a prop for initialSlide if your ImageSlider supports it
              initialSlide={sliderStartIndex}
            />
          </div>
        </div>
      )}
    </div>
  );
}
