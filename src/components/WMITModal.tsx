import { useState, useEffect } from 'react';
import { X, ExternalLink, Code2, Globe, ShieldCheck, Sparkles } from 'lucide-react';

export function WMITModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleTriggerClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('.wmit-popup-trigger');
      if (target) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener('click', handleTriggerClick);
    return () => document.removeEventListener('click', handleTriggerClick);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#111111] rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#262626] text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wmit-modal-title"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-[#888888] hover:text-white rounded-full hover:bg-[#1A1A1A] transition"
          aria-label="Close WMIT modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2E2E2E] text-[#D4AF37] flex items-center justify-center font-bold text-xl shadow-md">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h3 id="wmit-modal-title" className="font-bold text-xl leading-tight font-display">WebMaker IT Solutions</h3>
            <p className="text-xs text-[#D4AF37] font-medium">Digital Engineering & Medical Web Solutions</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-[#AAAAAA] mb-6">
          <p>
            This website and Progressive Web App for <strong className="text-white">Seraj Medical Hall</strong> was architected and deployed by <strong className="text-white">WebMaker IT Solutions (WMIT)</strong>.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-[#161616] rounded-xl border border-[#222222] flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-xs block text-white">Production Grade</span>
                <span className="text-xs text-[#888888]">High speed, PWA installable, WCAG accessible.</span>
              </div>
            </div>
            
            <div className="p-3 bg-[#161616] rounded-xl border border-[#222222] flex items-start gap-2.5">
              <Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-xs block text-white">Local SEO & CRM</span>
                <span className="text-xs text-[#888888]">Local business search ranking & WhatsApp leads.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://webmakerit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#D4AF37] hover:bg-[#B8962D] text-black font-bold uppercase tracking-wider rounded-xl text-xs transition shadow-lg shadow-[#D4AF37]/20"
          >
            <Globe className="w-4 h-4" />
            Visit WMIT Official
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="py-3 px-5 bg-[#1A1A1A] hover:bg-[#222222] border border-[#2A2A2A] text-[#CCCCCC] hover:text-white font-medium rounded-xl text-xs transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
