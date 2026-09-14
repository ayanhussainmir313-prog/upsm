import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, ZoomIn, Calendar, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
            <Camera className="w-3.5 h-3.5 text-blue-600" />
            <span>Campus Moments &amp; Activities</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A192F] tracking-tight">
            Gallery &amp; Events
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            A glimpse into the vibrant student life, scenic campus grounds, and spirited co-curricular events at Uswa Public School Minapin.
          </p>
        </div>

        {/* Gallery Grid - 5 Original Photographs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item, index) => {
            // Give the first item (School Building) a larger visual footprint if appropriate
            const isFeatured = index === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(item)}
                className={`group cursor-pointer rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col ${
                  isFeatured ? 'lg:col-span-2 lg:flex-row' : ''
                }`}
              >
                {/* Image Container with Hover Zoom */}
                <div
                  className={`relative overflow-hidden ${
                    isFeatured ? 'lg:w-3/5 h-64 sm:h-80 lg:h-auto min-h-[260px]' : 'h-60 sm:h-64'
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Gradient & Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Zoom indicator button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-900/30 backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-white text-blue-900 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-6 h-6 text-[#1E40AF]" />
                    </div>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700/60 shadow-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Content Description */}
                <div
                  className={`p-5 sm:p-6 bg-white flex flex-col justify-between border-t lg:border-t-0 ${
                    isFeatured ? 'lg:w-2/5 lg:border-l border-slate-100' : 'border-slate-100'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        {item.category}
                      </span>
                      {item.badgeText && (
                        <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                          {item.badgeText}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-lg text-[#0A192F] group-hover:text-blue-700 transition-colors mb-2 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1 text-blue-700 font-semibold group-hover:translate-x-1 transition-transform">
                      <span>View Photograph</span>
                      <span>&rarr;</span>
                    </span>
                    <span className="text-slate-400">UES Archive</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedPhoto}
        items={GALLERY_ITEMS}
        onClose={() => setSelectedPhoto(null)}
        onSelect={(photo) => setSelectedPhoto(photo)}
      />
    </section>
  );
};
