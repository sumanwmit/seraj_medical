import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Truck, 
  Award, 
  HeartHandshake, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Search, 
  Activity, 
  Pill, 
  HelpCircle, 
  Star,
  ChevronDown,
  Mail,
  Send,
  ThermometerSnowflake,
  FileCheck
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { servicesData } from '../data/servicesData';
import { reviewsData } from '../data/reviewsData';
import { faqData } from '../data/faqData';
import { healthTipsData } from '../data/healthTipsData';
import medicineStockData from '../data/medicineStock.json';
import { SEOHead } from '../components/SEOHead';
import { MedicineItem } from '../types';

interface HomeProps {
  onOpenWhatsAppModal: (medName?: string) => void;
  onOpenSearchModal: () => void;
}

export default function Home({ onOpenWhatsAppModal, onOpenSearchModal }: HomeProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqData[0]?.id || null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const featuredMedicines: MedicineItem[] = (medicineStockData as MedicineItem[]).slice(0, 6);
  const previewServices = servicesData.slice(0, 6);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-[#E0E0E0] transition-colors">
      <SEOHead 
        title="Leading Pharmacy & Healthcare Store in Jehanabad"
        description="Seraj Medical Hall on Gaya-Patna Main Rd, Jehanabad, Bihar (804408). 100% genuine medicines, surgical supplies, and WhatsApp prescription ordering."
        canonicalPath="/"
      />

      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#141414] via-[#0E0E0E] to-[#0A0A0A] text-white pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-[#1A1A1A]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-luminosity">
          <img
            src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1920&auto=format&fit=crop"
            alt="Healthcare background"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Decorative ambient gold glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                Licensed &amp; Trusted Pharmacy • Jehanabad, Bihar
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-display">
                Your Trusted Medical Store for <span className="text-[#D4AF37] italic">Genuine Medicines</span> &amp; Healthcare.
              </h1>

              <p className="text-base sm:text-lg text-[#999999] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#181818] hover:bg-[#222222] border border-[#2E2E2E] hover:border-[#D4AF37]/50 text-[#E0E0E0] font-bold text-sm sm:text-base shadow-xl transition transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  Call Now
                </a>

                <button
                  onClick={() => onOpenWhatsAppModal()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#D4AF37] hover:bg-[#B8962D] text-black font-bold text-sm sm:text-base shadow-xl shadow-[#D4AF37]/20 transition transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  WhatsApp Order
                </button>

                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#141414] hover:bg-[#1C1C1C] text-[#AAAAAA] hover:text-white border border-[#262626] font-semibold text-sm sm:text-base transition cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  Get Directions
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#202020] max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <span className="block text-xl sm:text-2xl font-bold text-white font-mono">100%</span>
                  <span className="text-xs text-[#888888]">Genuine Stock</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-xl sm:text-2xl font-bold text-white font-mono">7 AM – 11 PM</span>
                  <span className="text-xs text-[#888888]">Open All 7 Days</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-xl sm:text-2xl font-bold text-white font-mono">14+ Yrs</span>
                  <span className="text-xs text-[#888888]">Serving Jehanabad</span>
                </div>
              </div>
            </div>

            {/* Right Card: Quick Order / Search Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#111111] border border-[#262626] rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                    Direct Prescription Dispatch
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1A1A1A] text-[#D4AF37] text-[11px] font-semibold border border-[#D4AF37]/30">
                    Fast Response
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold mb-2 font-display text-white">
                  Need Medicine Urgently?
                </h2>
                <p className="text-xs sm:text-sm text-[#888888] mb-6 leading-relaxed">
                  Upload your doctor prescription on WhatsApp. Our registered pharmacist will immediately verify and prepare your order for express doorstep delivery in Jehanabad.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#161616] border border-[#242424] text-xs text-[#CCCCCC]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Flat discounts on all prescribed medicines</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#161616] border border-[#242424] text-xs text-[#CCCCCC]">
                    <ThermometerSnowflake className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Cold-chain storage for insulins &amp; vaccines</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#161616] border border-[#242424] text-xs text-[#CCCCCC]">
                    <Truck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Quick home delivery across Jehanabad city</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => onOpenWhatsAppModal()}
                    className="w-full py-3 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#B8962D] text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 transition cursor-pointer uppercase tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    Order via WhatsApp
                  </button>
                  <Link
                    to="/services"
                    className="w-full py-3 px-4 rounded-xl bg-[#1A1A1A] hover:bg-[#222222] border border-[#2E2E2E] text-[#E0E0E0] font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition text-center"
                  >
                    Check Stock <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="py-16 sm:py-20 border-b border-[#1A1A1A] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image Col */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#242424]">
                <img
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=800&auto=format&fit=crop"
                  alt="Seraj Medical Hall store interior"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-6 text-white">
                  <div>
                    <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
                      Licensed Chemist &amp; Druggist
                    </span>
                    <span className="text-lg font-bold font-display">
                      Gaya - Patna Main Rd, Jehanabad
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" /> About Seraj Medical Hall
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-display">
                Committed to Authentic Healthcare for Every Family in Jehanabad
              </h2>

              <p className="text-[#888888] text-sm sm:text-base leading-relaxed">
                Founded with a mission to eliminate counterfeit medicines and supply authentic, doctor-prescribed pharmaceuticals, <strong className="text-white">Seraj Medical Hall</strong> has grown into Jehanabad’s premier medical store on the busy Gaya-Patna Main Road.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 bg-[#121212] rounded-2xl border border-[#222222]">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-white block">100% Certified Sourcing</strong>
                    <span className="text-xs text-[#888888]">Directly from authorized pharmaceutical company depots.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-[#121212] rounded-2xl border border-[#222222]">
                  <ThermometerSnowflake className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-white block">Strict 2°C – 8°C Cold Chain</strong>
                    <span className="text-xs text-[#888888]">Continuous power backup for biologicals and insulins.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#B8962D] text-black text-xs sm:text-sm font-bold uppercase tracking-wider rounded-2xl transition shadow-lg shadow-[#D4AF37]/20"
                >
                  View More About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6 PREVIEW) */}
      <section className="py-16 sm:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#242424] text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2">
                <Activity className="w-3.5 h-3.5" /> Healthcare Categories
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-display">
                Featured Healthcare Services
              </h2>
              <p className="text-[#888888] text-xs sm:text-sm mt-1 max-w-xl">
                Explore our core medicine departments, surgical consumables, and home diagnostic equipment.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D4AF37] hover:underline shrink-0"
            >
              View All Services &amp; Stock Checker <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#111111] rounded-3xl p-6 border border-[#222222] hover:border-[#D4AF37]/50 shadow-sm hover:shadow-xl transition flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#181818] border border-[#282828] text-[#D4AF37] flex items-center justify-center font-bold group-hover:bg-[#D4AF37] group-hover:text-black transition">
                      <Pill className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#181818] border border-[#282828] text-[#AAAAAA]">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition font-display">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#888888] leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs">
                  <span className="text-[#666666]">
                    {service.popularItems.slice(0, 2).join(', ')}
                  </span>
                  <Link
                    to="/services"
                    className="font-bold text-[#D4AF37] flex items-center gap-1 group-hover:translate-x-1 transition"
                  >
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-16 sm:py-20 bg-[#080808] text-white relative overflow-hidden border-t border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              The Seraj Medical Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mt-2 font-display">
              Why Jehanabad Trusts Seraj Medical Hall
            </h2>
            <p className="text-[#888888] text-xs sm:text-sm mt-2">
              Quality assurance, professional pharmacist guidance, and patient-first healthcare service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#111111] border border-[#222222]">
              <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] text-[#D4AF37] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold mb-2 font-display">100% Genuine Medicines</h3>
              <p className="text-xs text-[#888888] leading-relaxed">
                Zero tolerance for counterfeit drugs. Every strip is authenticated with verifiable batch numbers and manufacturer seals.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#111111] border border-[#222222]">
              <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] text-[#D4AF37] flex items-center justify-center mb-4">
                <ThermometerSnowflake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold mb-2 font-display">Cold-Chain Storage</h3>
              <p className="text-xs text-[#888888] leading-relaxed">
                Specialized 2°C – 8°C pharmaceutical refrigerators with battery backup for sensitive insulins and injectables.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#111111] border border-[#222222]">
              <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] text-[#D4AF37] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold mb-2 font-display">Open 7 AM – 11 PM</h3>
              <p className="text-xs text-[#888888] leading-relaxed">
                Convenient long retail hours plus 24/7 on-call emergency medicine support for urgent hospital requirements.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#111111] border border-[#222222]">
              <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] text-[#D4AF37] flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold mb-2 font-display">WhatsApp Order &amp; Delivery</h3>
              <p className="text-xs text-[#888888] leading-relaxed">
                Send prescription photos on 7004493684 for quick billing, discount confirmation, and prompt local dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS PREVIEW */}
      <section className="py-16 sm:py-20 bg-[#0A0A0A] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2">
                <Pill className="w-3.5 h-3.5" /> Popular Essentials
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-display">
                Featured Medicines &amp; Devices
              </h2>
              <p className="text-[#888888] text-xs sm:text-sm mt-1">
                Frequently prescribed formulations, daily healthcare remedies, and medical diagnostic units.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D4AF37] hover:underline"
            >
              Search Full Inventory ({medicineStockData.length}+ items) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMedicines.map((med) => (
              <div
                key={med.id}
                className="bg-[#111111] rounded-3xl p-6 border border-[#222222] hover:border-[#D4AF37]/50 flex flex-col justify-between shadow-sm hover:shadow-lg transition"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-[#D4AF37] bg-[#181818] border border-[#262626] px-2.5 py-0.5 rounded-md">
                      {med.category}
                    </span>
                    <span className="text-[#777777] text-[11px]">
                      {med.dosageForm}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 font-display">
                    {med.name}
                  </h3>
                  <p className="text-xs text-[#888888] line-clamp-1 mb-3">
                    {med.genericName}
                  </p>

                  <div className="text-xs text-[#888888] space-y-1 mb-4">
                    <div>Brand: <strong className="text-[#CCCCCC]">{med.brand}</strong></div>
                    <div>Pack: {med.packSize}</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1C1C1C] flex items-center justify-between">
                  <div>
                    <span className="text-base font-bold text-white font-mono">
                      ₹{med.discountPrice || med.mrp}
                    </span>
                    {med.discountPrice && med.discountPrice < med.mrp && (
                      <span className="text-xs text-[#666666] line-through ml-1.5 font-mono">
                        ₹{med.mrp}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onOpenWhatsAppModal(med.name)}
                    className="px-3.5 py-1.5 bg-[#D4AF37] hover:bg-[#B8962D] text-black rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-md shadow-[#D4AF37]/10"
                  >
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="py-16 sm:py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141414] border border-[#242424] text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              Verified Local Feedback
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-display">
              What Jehanabad Says About Us
            </h2>
            <p className="text-[#888888] text-xs sm:text-sm mt-1">
              Honest experiences from local residents, doctors, and families who rely on our pharmacy daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsData.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-[#111111] rounded-3xl p-6 border border-[#222222] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#D4AF37] mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#AAAAAA] leading-relaxed italic mb-4">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs">
                  <div>
                    <h3 className="font-bold text-white font-display">
                      {review.name}
                    </h3>
                    <span className="text-[#777777] text-[11px]">
                      {review.location}
                    </span>
                  </div>
                  {review.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-[#D4AF37] bg-[#181818] border border-[#282828] px-2 py-0.5 rounded-full font-medium">
                      <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 sm:py-20 bg-[#0A0A0A] border-t border-b border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" /> Common Questions
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqData.slice(0, 4).map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-[#222222] overflow-hidden bg-[#111111] transition"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#888888] shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#D4AF37]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#AAAAAA] leading-relaxed border-t border-[#1C1C1C] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#D4AF37] hover:underline"
            >
              Have another question? Contact our pharmacist <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. LATEST HEALTH TIPS PREVIEW */}
      <section className="py-16 sm:py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Community Health Corner
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-display">
                Latest Health &amp; Medication Tips
              </h2>
            </div>
            <Link
              to="/about"
              className="text-xs sm:text-sm font-bold text-[#D4AF37] hover:underline"
            >
              Read Pharmacist Guidance <ArrowRight className="w-3.5 h-3.5 inline" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {healthTipsData.map((tip) => (
              <div
                key={tip.id}
                className="bg-[#111111] rounded-3xl overflow-hidden border border-[#222222] shadow-sm flex flex-col justify-between"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-xs text-[#D4AF37] border border-[#D4AF37]/30 text-[11px] font-semibold">
                    {tip.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-[#777777] block mb-1">
                      {tip.readTime} • By {tip.author}
                    </span>
                    <h3 className="font-bold text-base text-white mb-2 leading-snug font-display">
                      {tip.title}
                    </h3>
                    <p className="text-xs text-[#888888] line-clamp-2 leading-relaxed">
                      {tip.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#666666]">{tip.date}</span>
                    <Link to="/about" className="font-bold text-[#D4AF37] flex items-center gap-1">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAST CTA BANNER */}
      <section className="py-14 bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-t border-b border-[#1E1E1E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-display">
                Have a Prescription Ready to Fill?
              </h2>
              <p className="text-[#888888] text-xs sm:text-sm mt-1 max-w-xl">
                Send it instantly via WhatsApp to 7004493684 or call our on-duty pharmacist for immediate door delivery in Jehanabad.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onOpenWhatsAppModal()}
                className="px-6 py-3 rounded-2xl bg-[#D4AF37] hover:bg-[#B8962D] text-black font-bold text-xs sm:text-sm shadow-xl shadow-[#D4AF37]/20 transition cursor-pointer uppercase tracking-wider"
              >
                Send Prescription Now
              </button>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="px-6 py-3 rounded-2xl bg-[#181818] hover:bg-[#222222] text-[#E0E0E0] font-bold text-xs sm:text-sm border border-[#2E2E2E] transition cursor-pointer"
              >
                Call: {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER */}
      <section className="py-14 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#141414] border border-[#262626] text-[#D4AF37] flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
            Subscribe for Health Alerts &amp; Restock Updates
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] max-w-md mx-auto mb-6">
            Get seasonal health tips, vaccine availability alerts, and exclusive medical discount updates straight to your inbox.
          </p>

          {newsletterSuccess ? (
            <div className="p-4 bg-[#142014] text-[#86EFAC] rounded-2xl border border-[#234A23] text-xs font-semibold">
              Thank you! You have successfully subscribed to Seraj Medical health updates.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3 rounded-xl border border-[#2E2E2E] bg-[#141414] text-white placeholder-[#666666] text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-[#D4AF37] hover:bg-[#B8962D] text-black font-bold text-xs sm:text-sm rounded-xl transition shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
              >
                <Send className="w-3.5 h-3.5" />
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
