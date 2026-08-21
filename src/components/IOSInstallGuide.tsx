import { X, Share, PlusSquare, Smartphone } from 'lucide-react';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export function IOSInstallGuide({ isOpen, onClose }: IOSInstallGuideProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-[#111111] rounded-2xl shadow-2xl p-6 border border-[#262626] text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ios-install-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#888888] hover:text-white rounded-full hover:bg-[#1A1A1A] transition"
          aria-label="Close installation guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2E2E2E] text-[#D4AF37] flex items-center justify-center font-bold text-xl shadow-md">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h3 id="ios-install-title" className="font-bold text-lg leading-tight font-display">Install Seraj Medical App</h3>
            <p className="text-xs text-[#888888]">Add to your iPhone / iPad Home Screen</p>
          </div>
        </div>

        <p className="text-sm text-[#AAAAAA] mb-5 leading-relaxed">
          Follow these quick steps in Apple Safari to install the pharmacy app for fast offline access and 1-tap medicine orders:
        </p>

        <div className="space-y-3 mb-6 text-sm">
          <div className="flex items-start gap-3 p-3 bg-[#161616] rounded-xl border border-[#222222]">
            <div className="p-2 bg-[#1E1E1E] border border-[#2A2A2A] text-[#D4AF37] rounded-lg shrink-0">
              <Share className="w-5 h-5" />
            </div>
            <div>
              <span className="font-semibold text-white block">Step 1: Tap Share Icon</span>
              <span className="text-xs text-[#888888]">Tap the Share button at the bottom bar in Safari browser.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-[#161616] rounded-xl border border-[#222222]">
            <div className="p-2 bg-[#1E1E1E] border border-[#2A2A2A] text-[#D4AF37] rounded-lg shrink-0">
              <PlusSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="font-semibold text-white block">Step 2: Add to Home Screen</span>
              <span className="text-xs text-[#888888]">Scroll down the share sheet and select &quot;Add to Home Screen&quot;.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-[#161616] rounded-xl border border-[#222222]">
            <div className="p-2 bg-[#1E1E1E] border border-[#2A2A2A] text-[#D4AF37] rounded-lg shrink-0">
              <span className="font-bold text-xs">ADD</span>
            </div>
            <div>
              <span className="font-semibold text-white block">Step 3: Confirm &quot;Add&quot;</span>
              <span className="text-xs text-[#888888]">Tap &quot;Add&quot; in the top right corner to complete installation.</span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-[#D4AF37] hover:bg-[#B8962D] text-black font-bold uppercase tracking-wider rounded-xl text-xs transition shadow-lg shadow-[#D4AF37]/20"
        >
          Got it, thanks!
        </button>
      </div>
    </div>
  );
}
