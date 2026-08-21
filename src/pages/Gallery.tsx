import { useState } from 'react';
import { 
  Images, 
  X, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles,
  ShieldCheck,
  Building2,
  Phone,
  MessageCircle
} from 'lucide-react';
import { galleryData } from '../data/galleryData';
import { GalleryItem } from '../types';
import { SEOHead } from '../components/SEOHead';
import { SITE_CONFIG } from '../config/siteConfig';

interface GalleryProps {
  onOpenWhatsAppModal: () => void;
}

export default function Gallery({ onOpenWhatsAppModal }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Store Interior', 'Medicine Shelves', 'Healthcare Products', 'Medical Equipment', 'Front View'];

  const filteredItems = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex(i => i.id === item.id);
    if (idx !== -1) {
      setActiveLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === 0 ? filteredItems.length - 1 : activeLightboxIndex - 1
      );
    }
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === filteredItems.length - 1 ? 0 : activeLightboxIndex + 1
      );
    }
  };

  const activeLightboxItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="bg-[#0A0A0A] text-[#E0E0E0] transition-colors min-h-screen">
      <SEOHead 
        title="Photo Gallery | Store Photos & Facilities"
        description="View store photos, modern pharmaceutical storage, clean pharmacy interiors, and medical diagnostic equipment at Seraj Medical Hall Jehanabad."
        canonicalPath="/gallery"
        schemaType="CollectionPage"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#141414] via-[#0E0E0E] to-[#0A0A0A] text-white py-16 sm:py-24 relative overflow-hidden border-b border-[#1A1A1A]">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold mb-4 uppercase tracking-wider">
              <Images className="w-3.5 h-3.5 text-[#D4AF37]" /> Pharmacy Tour &amp; Facility
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display">
              Store Gallery &amp; Healthcare Facilities
            </h1>
            <p className="text-[#888888] text-sm sm:text-base mt-4 leading-relaxed">
              Take a visual tour of our sanitized retail counter, temperature-monitored pharmaceutical racks, diagnostic devices, and baby care section in Jehanabad.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="py-6 bg-[#0E0E0E] border-b border-[#1A1A1A] sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                    : 'bg-[#141414] border border-[#242424] text-[#888888] hover:text-white hover:bg-[#1C1C1C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative bg-[#111111] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-[#222222] hover:border-[#D4AF37]/50 transition duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="h-64 sm:h-72 overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#333333] text-xs font-bold uppercase tracking-wider shadow-sm font-mono">
                    {item.category}
                  </span>

                  {/* Zoom Overlay Icon */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#181818] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition duration-300">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="font-bold text-base text-white mb-1 group-hover:text-[#D4AF37] transition font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#888888] leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP LIGHTBOX WITH ZOOM & NAVIGATION */}
      {activeLightboxItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-3 rounded-full bg-[#1A1A1A] hover:bg-[#282828] border border-[#333333] text-[#888888] hover:text-white transition z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1A1A1A] hover:bg-[#282828] border border-[#333333] text-white transition z-50 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1A1A1A] hover:bg-[#282828] border border-[#333333] text-white transition z-50 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-4xl w-full bg-[#111111] rounded-3xl overflow-hidden shadow-2xl border border-[#282828] text-white my-auto">
            <div className="relative max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={activeLightboxItem.imageUrl}
                alt={activeLightboxItem.alt}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-6 bg-[#111111] border-t border-[#222222] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider block mb-1 font-mono">
                  {activeLightboxItem.category} • Image {activeLightboxIndex! + 1} of {filteredItems.length}
                </span>
                <h3 className="text-lg font-bold font-display">{activeLightboxItem.title}</h3>
                <p className="text-xs text-[#888888] mt-1 max-w-xl">{activeLightboxItem.caption}</p>
              </div>

              <button
                onClick={() => {
                  closeLightbox();
                  onOpenWhatsAppModal();
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#D4AF37] hover:bg-[#B8962D] text-black font-bold uppercase tracking-wider rounded-xl text-xs transition shadow-lg shadow-[#D4AF37]/20 shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Inquire on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Store Info Banner */}
      <section className="py-12 bg-[#0E0E0E] border-t border-[#1A1A1A] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Building2 className="w-10 h-10 text-[#D4AF37] mx-auto mb-3" />
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
            Visit Our Store on Gaya-Patna Main Road
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] mb-6">
            We are open 7:00 AM – 11:00 PM every day for retail walk-ins, consultations, and quick prescription pickups.
          </p>
          <a
            href={SITE_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#B8962D] text-black text-xs sm:text-sm font-bold uppercase tracking-wider rounded-2xl transition shadow-lg shadow-[#D4AF37]/20"
          >
            Get Google Maps Directions
          </a>
        </div>
      </section>
    </div>
  );
}
