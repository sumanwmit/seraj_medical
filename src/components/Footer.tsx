import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  Facebook,
  Instagram,
  FileCheck2,
  Lock
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function Footer() {
  // === GLOBAL TRACKING HOOK (MANDATORY STEP 11) ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') as string);
    }
    if (!cid) return;
    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };
    window.addEventListener('popstate', handleLocationChange);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-[#050505] text-[#A0A0A0] pt-16 pb-12 border-t border-[#1C1C1C] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#997A1E] text-black flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
                <HeartPulse className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="text-xl font-bold text-white tracking-wider font-display">
                SERAJ <span className="text-[#D4AF37]">MEDICAL</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
              Your most trusted retail pharmacy in Jehanabad, Bihar. Providing 100% genuine allopathic, generic, pediatric, and surgical medical essentials since 2012.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href={SITE_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141414] hover:bg-[#D4AF37] border border-[#262626] text-[#AAAAAA] hover:text-black flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141414] hover:bg-[#D4AF37] border border-[#262626] text-[#AAAAAA] hover:text-black flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#161616] border border-[#2E2E2E] text-[11px] text-[#D4AF37]">
                <ShieldCheck className="w-3.5 h-3.5" />
                DL No: {SITE_CONFIG.licenseNumber}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 border-l-2 border-[#D4AF37] pl-2.5">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-[#888888] hover:text-[#D4AF37] transition flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#888888] hover:text-[#D4AF37] transition flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> About Our Store &amp; Pharmacist
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#888888] hover:text-[#D4AF37] transition flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> Healthcare Services &amp; Stock Checker
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#888888] hover:text-[#D4AF37] transition flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> Photo Gallery &amp; Facility
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#888888] hover:text-[#D4AF37] transition flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> Contact &amp; Store Location
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-[#888888] hover:text-[#D4AF37] transition flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#D4AF37]" /> Customer &amp; Staff Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Working Hours & Emergency */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 border-l-2 border-[#D4AF37] pl-2.5">
              Working Hours
            </h3>
            <ul className="space-y-2 text-xs text-[#888888]">
              <li className="flex justify-between py-1 border-b border-[#1A1A1A]">
                <span>Monday – Friday:</span>
                <span className="text-[#E0E0E0] font-medium">7:00 AM – 11:00 PM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-[#1A1A1A]">
                <span>Saturday – Sunday:</span>
                <span className="text-[#E0E0E0] font-medium">7:00 AM – 11:00 PM</span>
              </li>
              <li className="mt-3 p-3 bg-[#111111] rounded-xl border border-[#222222] text-xs">
                <span className="text-[#D4AF37] font-bold block flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 24/7 Emergency Medicine
                </span>
                <span className="text-[#777777] text-[11px] mt-0.5 block">
                  Available on phone call for urgent critical medications.
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Store Location & Direct Contact */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 border-l-2 border-[#D4AF37] pl-2.5">
              Store Location
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#888888]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <span>
                  {SITE_CONFIG.address.fullAddress}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-[#E0E0E0] hover:text-[#D4AF37] transition">
                  {SITE_CONFIG.formattedPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#AAAAAA] hover:text-[#D4AF37] transition text-xs">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#141414] hover:bg-[#1C1C1C] text-[#D4AF37] text-xs font-semibold rounded-xl border border-[#262626] transition"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Get Google Maps Directions
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Policies */}
        <div className="py-6 border-t border-b border-[#1A1A1A] text-[11px] text-[#666666] space-y-2">
          <p>
            <strong>Medical Disclaimer:</strong> Information provided on this website is for informational and pharmaceutical ordering assistance only and does not substitute professional medical advice, diagnosis, or treatment. Always consult a qualified physician for your medical conditions. Prescription drugs will only be dispensed upon verification of a valid prescription.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[#888888] pt-1">
            <Link to="/about" className="hover:text-[#D4AF37] transition">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-[#D4AF37] transition">Terms &amp; Conditions</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-[#D4AF37] transition">Disclaimer</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#D4AF37] transition">Prescription Guidelines</Link>
          </div>
        </div>

        {/* Mandatory Copyright and WMIT Anchor / Popup Trigger */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.businessName}. All rights reserved.
          </p>

          {/* EXACT MANDATORY REQUIRED TRIGGER FROM PROMPT STEP 12 */}
          <div className="text-center">
            <a href="#" className="wmit-popup-trigger text-[#AAAAAA] hover:text-[#D4AF37] transition font-medium underline underline-offset-4 tracking-wide">
              Developed by WMIT
            </a>
          </div>

          <p className="text-center md:text-right text-[11px] text-[#777777]">
            Jehanabad, Bihar 804408 • Genuine Care Always
          </p>
        </div>
      </div>
    </footer>
  );
}
