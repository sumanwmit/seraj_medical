import { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';
import { Smartphone, Check } from 'lucide-react';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'navbar' | 'hero' | 'drawer';
}

export function PWAInstallButton({ className = '', variant = 'navbar' }: PWAInstallButtonProps) {
  const { isInstallable, isInstalled, showIOSModal, setShowIOSModal, triggerInstall } = usePWAInstall();
  const [installSuccess, setInstallSuccess] = useState(false);

  const handleClick = async () => {
    await triggerInstall();
    if (isInstalled) {
      setInstallSuccess(true);
      setTimeout(() => setInstallSuccess(false), 4000);
    }
  };

  // If already standalone installed
  if (isInstalled && !installSuccess) {
    return null;
  }

  // If not installable and not on iOS, keep a subtle accessible trigger
  if (!isInstallable && variant === 'navbar') {
    // Show installable button anyway for non-chrome browsers so they get guided
  }

  if (installSuccess) {
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181818] border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-semibold">
        <Check className="w-3.5 h-3.5" /> App Installed
      </div>
    );
  }

  return (
    <>
      <button
        id="pwa-install-btn"
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#D4AF37] ${
          variant === 'navbar'
            ? 'px-3 py-1.5 text-xs bg-[#141414] hover:bg-[#1C1C1C] text-[#D4AF37] border border-[#2A2A2A] hover:border-[#D4AF37]/40 shadow-xs'
            : variant === 'hero'
            ? 'px-5 py-3 text-xs sm:text-sm uppercase tracking-wider bg-[#141414]/90 hover:bg-[#1E1E1E] text-[#D4AF37] backdrop-blur-md border border-[#2E2E2E] hover:border-[#D4AF37]/50 shadow-xl'
            : 'w-full py-3 px-4 text-xs uppercase tracking-wider bg-[#D4AF37] hover:bg-[#B8962D] text-black rounded-xl font-bold shadow-lg shadow-[#D4AF37]/20'
        } ${className}`}
        aria-label="Add to Home screen / Install App"
      >
        <span className="text-base">📲</span>
        <span className="whitespace-nowrap">Add to Home</span>
      </button>

      <IOSInstallGuide isOpen={showIOSModal} onClose={() => setShowIOSModal(false)} />
    </>
  );
}
