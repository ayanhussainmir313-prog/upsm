import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const nextIndex = (currentIndex + 1) % items.length;
        onSelect(items[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onSelect(items[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items, onClose, onSelect]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#07132B] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Lightbox Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-[#050E20]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-800/60">
              {item.category}
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Photo {currentIndex + 1} of {items.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main Photo Display Area */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[320px] max-h-[65vh]">
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-contain max-h-[65vh] select-none"
            referrerPolicy="no-referrer"
          />

          {/* Previous and Next Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-slate-700/60 shadow-lg transition-all duration-200 hover:scale-105"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-slate-700/60 shadow-lg transition-all duration-200 hover:scale-105"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Details Bar */}
        <div className="p-5 sm:p-6 bg-[#07132B] border-t border-slate-800 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
            <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
              {item.title}
            </h3>
            {item.badgeText && (
              <span className="text-xs text-amber-300 font-semibold inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {item.badgeText}
              </span>
            )}
          </div>
          <p className="text-sm text-slate-300">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};
