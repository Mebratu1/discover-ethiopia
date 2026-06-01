import { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { galleryImages } from '../data/destinations';
import { X, ZoomIn } from 'lucide-react';

const CATEGORIES = ['All', 'Mountains', 'Churches', 'Lakes', 'Wildlife', 'Culture', 'Volcanoes'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const titleRef = useScrollReveal();
  const gridRef  = useScrollReveal();

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox  = useCallback((img) => setLightbox(img), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const handleCategory = useCallback((cat) => setActiveCategory(cat), []);

  return (
    <section id="gallery" className="bg-[#0a0a0a] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-14">
          <span className="text-amber-400 text-xs font-medium tracking-[0.4em] uppercase">
            Visual Journey
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mt-4">
            Ethiopia Through
            <br />
            <em className="not-italic gold-text">The Lens</em>
          </h2>
          <div className="w-16 h-px bg-amber-600 mx-auto mt-8" aria-hidden="true" />
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" role="group" aria-label="Filter gallery by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-amber-600 text-white'
                  : 'border border-white/15 text-white/60 hover:border-amber-500/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div
          ref={gridRef}
          className="reveal columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3"
          role="list"
          aria-label="Gallery images"
        >
          {filtered.map((img, i) => (
            <div
              key={`${img.title}-${i}`}
              className="gallery-item relative break-inside-avoid overflow-hidden rounded-xl cursor-pointer group"
              role="listitem"
              onClick={() => openLightbox(img)}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(img)}
              tabIndex={0}
              aria-label={`View ${img.title}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="gallery-overlay absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2" aria-hidden="true">
                <ZoomIn className="w-8 h-8 text-white" />
                <span className="text-white text-sm font-medium">{img.title}</span>
                <span className="text-amber-400 text-xs">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close image lightbox"
          >
            <X className="w-8 h-8" aria-hidden="true" />
          </button>
          <div
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src.replace('w=600', 'w=1200')}
              alt={lightbox.title}
              className="max-h-[80vh] w-auto rounded-xl shadow-2xl mx-auto"
            />
            <div className="text-center mt-4">
              <p className="text-white font-semibold">{lightbox.title}</p>
              <p className="text-amber-400 text-sm">{lightbox.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
