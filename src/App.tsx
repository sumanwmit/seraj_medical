import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { WMITModal } from './components/WMITModal';
import { useTheme } from './hooks/useTheme';
import { HeartPulse, Loader2 } from 'lucide-react';

// Lazy load the 6 dedicated pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));

// Scroll to top helper on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Fallback loader
function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 text-[#D4AF37]">
      <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-[#262626] flex items-center justify-center animate-pulse shadow-lg shadow-black/50">
        <HeartPulse className="w-7 h-7 text-[#D4AF37]" />
      </div>
      <div className="flex items-center gap-2.5 text-xs font-medium tracking-widest uppercase text-neutral-400">
        <Loader2 className="w-4 h-4 animate-spin text-[#D4AF37]" />
        <span>Loading Seraj Medical...</span>
      </div>
    </div>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [initialOrderMed, setInitialOrderMed] = useState('');

  const handleOpenWhatsAppModal = (medicineName?: string) => {
    setInitialOrderMed(medicineName || '');
    setWhatsAppModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#E0E0E0] font-sans selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB]">
        {/* Sticky Header Navigation */}
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
          onOpenSearchModal={() => setSearchModalOpen(true)}
        />

        {/* Main Content with Suspense for 6 Lazy Loaded Pages */}
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route 
                path="/" 
                element={
                  <Home 
                    onOpenWhatsAppModal={handleOpenWhatsAppModal}
                    onOpenSearchModal={() => setSearchModalOpen(true)}
                  />
                } 
              />
              <Route 
                path="/about" 
                element={<About onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />} 
              />
              <Route 
                path="/services" 
                element={<Services onOpenWhatsAppModal={handleOpenWhatsAppModal} />} 
              />
              <Route 
                path="/gallery" 
                element={<Gallery onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />} 
              />
              <Route 
                path="/contact" 
                element={<Contact onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              {/* Fallback route */}
              <Route 
                path="*" 
                element={
                  <Home 
                    onOpenWhatsAppModal={handleOpenWhatsAppModal}
                    onOpenSearchModal={() => setSearchModalOpen(true)}
                  />
                } 
              />
            </Routes>
          </Suspense>
        </main>

        {/* Global Floating Actions (WhatsApp, Call, Back to Top) */}
        <FloatingActions onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

        {/* Global Interactive Modals */}
        <WhatsAppOrderModal
          isOpen={whatsAppModalOpen}
          onClose={() => setWhatsAppModalOpen(false)}
          initialMedicineName={initialOrderMed}
        />

        <QuickSearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          onSelectMedicineForOrder={(med) => handleOpenWhatsAppModal(med)}
        />

        {/* Mandatory WMIT Popup Trigger Handler */}
        <WMITModal />

        {/* Mandatory Footer with Global Tracking Hook & WMIT Trigger */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
