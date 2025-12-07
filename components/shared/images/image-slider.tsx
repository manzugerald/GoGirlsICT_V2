'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Pagination, EffectCube, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';

interface ModalImageSliderProps {
  images: string[];
  initialSlide?: number;
  onClose: () => void;
  onShuffle: () => void;
}

export default function ModalImageSlider({
  images,
  initialSlide = 0,
  onClose,
  onShuffle,
}: ModalImageSliderProps) {
  const [effect, setEffect] = useState<'cube' | 'coverflow'>('cube');
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // Ensure Swiper re-initializes on shuffle or effect change
  const [swiperKey, setSwiperKey] = useState(0);
  useEffect(() => {
    setSwiperKey((val) => val + 1);
  }, [images, effect, initialSlide]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90">
      <div className="absolute top-4 right-6 z-60 flex gap-2">
        <button
          onClick={onClose}
          className="text-3xl text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
          aria-label="Close"
        >
          &times;
        </button>
        <button
          onClick={onShuffle}
          className="text-lg px-4 py-1 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
        >
          Shuffle
        </button>
        <button
          onClick={() => setEffect((e) => (e === 'cube' ? 'coverflow' : 'cube'))}
          className="text-lg px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {effect === 'cube' ? 'Coverflow' : 'Cube'}
        </button>
      </div>
      <div className="w-full max-w-5xl mx-auto mt-8">
        <Swiper
          key={swiperKey}
          modules={[Navigation, Thumbs, Pagination, EffectCube, EffectCoverflow]}
          navigation
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full"
          initialSlide={initialSlide}
          loop
          effect={effect}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Slide ${idx}`}
                className="w-full h-[70vh] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails */}
        <div className="mt-4">
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            watchSlidesProgress
            className="rounded-md"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  className="w-full h-24 object-cover rounded cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
