import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Play,
  Pause,
  X,
  Sparkles
} from 'lucide-react';

export const SLIDE_IMAGES = [
  '/imgs/new_sl5.webp',
  '/imgs/new_sl1.webp',
  '/imgs/new_sl2.webp',
  '/imgs/new_sl3.webp',
  '/imgs/slide_bar_6.webp',
  '/imgs/slide_bar_7.webp',
  '/imgs/slide_bar_8.webp',
  '/imgs/new_sl4.webp',
];

interface AchievementSlidebarProps {
  lang?: 'ja' | 'en' | 'vi';
}

export const AchievementSlidebar: React.FC<AchievementSlidebarProps> = ({ lang = 'ja' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimerRef = useRef<any>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDE_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDE_IMAGES.length) % SLIDE_IMAGES.length);
  };

  // Autoplay handler: switches slide every 3.8 seconds
  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 3800);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isPlaying, isHovered]);

  const currentImage = SLIDE_IMAGES[currentIndex];

  return (
    <section id="achievement-slider" className="py-8 sm:py-12 scroll-mt-24 space-y-4">
      {/* Top Header: Pure title & controls, no misleading descriptions */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-300">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>
              {lang === 'ja'
                ? '画像ギャラリー'
                : lang === 'vi'
                ? 'Thư viện hình ảnh'
                : 'Gallery'}
            </span>
          </div>
          <span className="text-xs font-mono text-slate-400">
            {currentIndex + 1} / {SLIDE_IMAGES.length}
          </span>
        </div>

        {/* Autoplay & Zoom Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 border transition-all ${
              isPlaying
                ? 'bg-rose-500/10 border-rose-500/30 text-rose-300 hover:bg-rose-500/20'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title={isPlaying ? 'Tạm dừng tự chuyển' : 'Bật tự động chuyển'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">
              {isPlaying
                ? (lang === 'ja' ? '自動再生中' : lang === 'vi' ? 'Đang chạy' : 'Playing')
                : (lang === 'ja' ? '停止中' : lang === 'vi' ? 'Tạm dừng' : 'Paused')}
            </span>
          </button>

          <button
            onClick={() => setLightboxOpen(true)}
            className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all"
            title="Phóng to xem chi tiết"
          >
            <Maximize2 className="w-3.5 h-3.5 text-rose-400" />
            <span className="hidden sm:inline">
              {lang === 'ja' ? '拡大' : lang === 'vi' ? 'Phóng to' : 'Fullscreen'}
            </span>
          </button>
        </div>
      </div>

      {/* Main Slider Display (Pure Image, Auto Transitioning) */}
      <div
        className="relative rounded-3xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-xl shadow-2xl overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Image Stage */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[620px] flex items-center justify-center bg-slate-950 p-2 sm:p-4 select-none">
          <img
            key={currentImage}
            src={currentImage}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-contain rounded-2xl cursor-pointer transition-opacity duration-500"
            onClick={() => setLightboxOpen(true)}
          />

          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-slate-700/60 text-white shadow-xl backdrop-blur-md opacity-80 hover:opacity-100 transition-all hover:scale-110 active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-slate-700/60 text-white shadow-xl backdrop-blur-md opacity-80 hover:opacity-100 transition-all hover:scale-110 active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Slide Indicator Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 backdrop-blur-md">
            {currentIndex + 1} / {SLIDE_IMAGES.length}
          </div>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="p-3 bg-slate-950/95 border-t border-slate-800/80 overflow-x-auto scrollbar-thin">
          <div className="flex items-center justify-center gap-2 sm:gap-3 min-w-max mx-auto">
            {SLIDE_IMAGES.map((imgSrc, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={imgSrc}
                  onClick={() => setCurrentIndex(idx)}
                  className={`group relative rounded-xl overflow-hidden border transition-all p-1 ${
                    isActive
                      ? 'bg-rose-500/20 border-rose-500/70 shadow-lg shadow-rose-500/20 scale-105'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div className="w-14 h-10 sm:w-16 sm:h-11 rounded-lg bg-slate-950 overflow-hidden shrink-0 flex items-center justify-center">
                    <img
                      src={imgSrc}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col p-4 sm:p-6 overflow-hidden">
          {/* Lightbox Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-100">
            <span className="text-xs font-mono text-slate-400">
              {currentIndex + 1} / {SLIDE_IMAGES.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white"
                title="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white"
                title="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 ml-2"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Image Body */}
          <div className="flex-1 flex items-center justify-center p-2 sm:p-4 overflow-auto">
            <img
              src={currentImage}
              alt={`Slide ${currentIndex + 1}`}
              className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
