import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ShieldAlert, 
  Clock, 
  MapPin, 
  Lock,
  HeartPulse
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onOpenWhatsAppModal: () => void;
  onOpenSearchModal: () => void;
}

export function Navbar({ theme, toggleTheme, onOpenWhatsAppModal, onOpenSearchModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login', isLogin: true }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Notice Bar */}
      <div className="bg-[#050505] text-[#999999] text-xs py-2 px-4 border-b border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-[#D4AF37] font-medium tracking-wide">
              <Clock className="w-3.5 h-3.5" />
              Open Today: 7:00 AM - 11:00 PM
            </span>
            <span className="hidden md:inline text-[#333333]">•</span>
            <span className="flex items-center gap-1 text-[#AAAAAA]">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              Gaya - Patna Main Rd, Jehanabad, Bihar
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:inline text-[#777777] uppercase tracking-widest text-[10px]">
              24/7 Emergency Support:
            </span>
            <a 
              href={`tel:${SITE_CONFIG.phone}`}
              className="font-bold text-[#E0E0E0] hover:text-[#D4AF37] flex items-center gap-1.5 transition tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              {SITE_CONFIG.formattedPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-xl shadow-black/80 py-3 border-[#222222]'
            : 'bg-[#0A0A0A] py-4 border-[#1C1C1C]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#997A1E] text-black flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 group-hover:scale-105 transition">
                <HeartPulse className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold tracking-wider text-[#FFFFFF] flex items-center gap-1.5 font-display">
                  SERAJ <span className="text-[#D4AF37]">MEDICAL</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-[#888888] block -mt-0.5 uppercase">
                  Pharmacy &amp; Health Store
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition uppercase ${
                    isActive(link.path)
                      ? 'bg-[#181818] text-[#D4AF37] border border-[#D4AF37]/30 shadow-xs'
                      : link.isLogin
                      ? 'text-[#CCCCCC] hover:bg-[#161616] hover:text-[#FFFFFF] border border-transparent hover:border-[#2A2A2A] flex items-center gap-1.5'
                      : 'text-[#AAAAAA] hover:text-[#D4AF37] hover:bg-[#141414]'
                  }`}
                >
                  {link.isLogin && <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />}
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions: Search, PWA Add to Home, Theme Toggle, WhatsApp CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Button */}
              <button
                onClick={onOpenSearchModal}
                className="p-2 sm:px-3 sm:py-2 text-[#AAAAAA] hover:text-[#D4AF37] bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] rounded-xl transition flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                aria-label="Search medicines and products"
              >
                <Search className="w-4 h-4 text-[#D4AF37]" />
                <span className="hidden sm:inline">Search</span>
              </button>

              {/* 📲 Add to Home PWA Button */}
              <PWAInstallButton variant="navbar" className="hidden sm:inline-flex" />

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-[#AAAAAA] hover:text-[#D4AF37] bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] rounded-xl transition cursor-pointer"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#D4AF37]" />
                ) : (
                  <Moon className="w-4 h-4 text-[#AAAAAA]" />
                )}
              </button>

              {/* WhatsApp Order Button */}
              <button
                onClick={onOpenWhatsAppModal}
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-[#D4AF37] hover:bg-[#B8962D] text-black text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition shadow-lg shadow-[#D4AF37]/20 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Order</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#E0E0E0] bg-[#141414] border border-[#262626] hover:bg-[#1C1C1C] rounded-xl transition cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[108px] bottom-0 z-30 bg-[#0A0A0A]/98 backdrop-blur-md border-b border-[#222222] p-6 overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            <div className="mb-4">
              <PWAInstallButton variant="drawer" />
            </div>

            <nav className="space-y-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between p-3.5 rounded-2xl text-sm font-semibold tracking-wide uppercase transition ${
                    isActive(link.path)
                      ? 'bg-[#181818] text-[#D4AF37] border border-[#D4AF37]/40'
                      : 'text-[#CCCCCC] hover:bg-[#141414] border border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.isLogin && <Lock className="w-4 h-4 text-[#D4AF37]" />}
                    {link.name}
                  </span>
                  <span className="text-xs text-[#D4AF37]">→</span>
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-[#222222] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#D4AF37] text-black font-bold uppercase tracking-wider rounded-2xl text-xs shadow-lg shadow-[#D4AF37]/20"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Prescription Order</span>
              </button>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#141414] hover:bg-[#1C1C1C] border border-[#2A2A2A] text-[#E0E0E0] rounded-2xl font-medium text-xs tracking-wide"
              >
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
