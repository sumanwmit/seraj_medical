import { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export function FloatingActions({ onOpenWhatsAppModal }: FloatingActionsProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Back To Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          className="pointer-events-auto p-3 rounded-full bg-[#141414] hover:bg-[#1F1F1F] border border-[#2A2A2A] hover:border-[#D4AF37] text-[#D4AF37] shadow-2xl backdrop-blur-md transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${SITE_CONFIG.phone}`}
        id="floating-call-btn"
        className="pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-full bg-[#161616] hover:bg-[#202020] border border-[#2E2E2E] hover:border-[#D4AF37]/60 text-white shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] group cursor-pointer"
        aria-label="Call Seraj Medical Hall directly"
      >
        <Phone className="w-5 h-5 text-[#D4AF37] animate-pulse" />
        <span className="hidden group-hover:inline text-xs font-semibold whitespace-nowrap text-[#E0E0E0]">
          Call {SITE_CONFIG.phone}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenWhatsAppModal}
        id="floating-whatsapp-btn"
        className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#D4AF37] hover:bg-[#B8962D] text-black shadow-xl shadow-[#D4AF37]/20 hover:shadow-2xl transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] group cursor-pointer font-bold"
        aria-label="Order medicine on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="text-xs font-bold whitespace-nowrap tracking-wide uppercase">
          Order on WhatsApp
        </span>
      </button>
    </div>
  );
}
