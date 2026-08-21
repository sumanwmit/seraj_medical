import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  Target, 
  Eye, 
  Clock, 
  Users, 
  Building2, 
  Phone, 
  MessageCircle, 
  ThermometerSnowflake, 
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Stethoscope
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';

interface AboutProps {
  onOpenWhatsAppModal: () => void;
}

export default function About({ onOpenWhatsAppModal }: AboutProps) {
  const timelineEvents = [
    {
      year: '2012',
      title: 'Foundation on Gaya-Patna Main Road',
      description: 'Seraj Medical Hall opened its doors in Jehanabad with a dedicated mission to supply authentic doctor-prescribed medications and essential surgical goods.'
    },
    {
      year: '2016',
      title: 'Introduction of Dedicated Cold-Chain Storage',
      description: 'Installed medical-grade refrigeration units with inverter backups ensuring 100% potency protection for insulins, injectables, and vaccines.'
    },
    {
      year: '2019',
      title: 'Expanded Surgical & Home Diagnostic Wing',
      description: 'Partnered with Omron, Roche, and Dr. Morepen to bring digital BP apparatus, nebulizers, and blood glucose meters to local households.'
    },
    {
      year: '2022',
      title: 'WhatsApp Express Ordering & Local Dispatch',
      description: 'Pioneered digital prescription upload in Jehanabad, allowing patients to get prompt bill estimations and home delivery without long queue times.'
    },
    {
      year: '2026 & Beyond',
      title: 'Modern Digital Healthcare & PWA Platform',
      description: 'Serving over 25,000+ satisfied families with live digital stock verification, community health education, and 24/7 on-call emergency support.'
    }
  ];

  return (
    <div className="bg-[#0A0A0A] text-[#E0E0E0] transition-colors">
      <SEOHead 
        title="About Seraj Medical Hall | Licensed Pharmacy in Jehanabad"
        description="Learn about the journey, pharmacist mission, authentic drug sourcing, and values behind Seraj Medical Hall on Gaya - Patna Main Rd, Jehanabad, Bihar."
        canonicalPath="/about"
        schemaType="AboutPage"
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#141414] via-[#0E0E0E] to-[#0A0A0A] text-white py-16 sm:py-24 relative overflow-hidden border-b border-[#1A1A1A]">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold mb-4 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" /> Established 2012 • Jehanabad, Bihar
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display">
              About Seraj Medical Hall
            </h1>
            <p className="text-[#888888] text-sm sm:text-base mt-4 leading-relaxed">
              Serving the people of Jehanabad with unwavering integrity, clinical excellence, 100% genuine pharmaceuticals, and responsive patient care.
            </p>
          </div>
        </div>
      </section>

      {/* 1. BUSINESS STORY & STORE OVERVIEW */}
      <section className="py-16 sm:py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" /> Our Heritage &amp; Foundation
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-display">
                Over a Decade of Healthcare Trust in Jehanabad
              </h2>
              <p className="text-[#888888] text-sm sm:text-base leading-relaxed">
                Situated along the prime <strong className="text-white">Gaya - Patna Main Road</strong> in Jehanabad, Bihar, <strong className="text-white">Seraj Medical Hall</strong> was established in 2012 with a fundamental goal: to make authentic, life-saving medicines accessible to every citizen at fair prices.
              </p>
              <p className="text-[#888888] text-sm sm:text-base leading-relaxed">
                What began as a neighborhood community pharmacy has expanded into a full-scale healthcare center stocked with critical cardiac drugs, anti-diabetic therapeutics, surgical supplies, infant nutrition, and digital monitoring devices.
              </p>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#1C1C1C]">
                <div className="p-3.5 bg-[#111111] rounded-2xl border border-[#222222]">
                  <span className="block text-2xl font-bold text-white font-mono">14+</span>
                  <span className="text-xs text-[#888888]">Years of Service</span>
                </div>
                <div className="p-3.5 bg-[#111111] rounded-2xl border border-[#222222]">
                  <span className="block text-2xl font-bold text-white font-mono">25,000+</span>
                  <span className="text-xs text-[#888888]">Patients Served</span>
                </div>
                <div className="p-3.5 bg-[#111111] rounded-2xl border border-[#222222]">
                  <span className="block text-2xl font-bold text-white font-mono">5,000+</span>
                  <span className="text-xs text-[#888888]">Medicine SKUs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=600&auto=format&fit=crop"
                  alt="Store counter"
                  className="rounded-3xl shadow-md w-full h-48 object-cover border border-[#222222]"
                />
                <img
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=600&auto=format&fit=crop"
                  alt="Medicine racks"
                  className="rounded-3xl shadow-md w-full h-64 object-cover border border-[#222222]"
                />
              </div>
              <div className="space-y-4 pt-6">
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=600&auto=format&fit=crop"
                  alt="Sanitized pharmacy"
                  className="rounded-3xl shadow-md w-full h-64 object-cover border border-[#222222]"
                />
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop"
                  alt="Medical equipment"
                  className="rounded-3xl shadow-md w-full h-48 object-cover border border-[#222222]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION, VISION & VALUES */}
      <section className="py-16 sm:py-20 bg-[#0A0A0A] border-t border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="p-8 bg-[#111111] rounded-3xl border border-[#222222] shadow-sm hover:border-[#D4AF37]/50 transition">
              <div className="w-14 h-14 rounded-2xl bg-[#181818] border border-[#282828] text-[#D4AF37] flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                To guarantee absolute authenticity in every dose dispensed, promote safe medication practices, and ensure no patient in Jehanabad ever struggles to access emergency medicines.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 bg-[#111111] rounded-3xl border border-[#222222] shadow-sm hover:border-[#D4AF37]/50 transition">
              <div className="w-14 h-14 rounded-2xl bg-[#181818] border border-[#282828] text-[#D4AF37] flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                To stand as the benchmark community pharmacy in Bihar—blending compassionate personalized service with modern digital conveniences like instant WhatsApp ordering and live inventory transparency.
              </p>
            </div>

            {/* Values */}
            <div className="p-8 bg-[#111111] rounded-3xl border border-[#222222] shadow-sm hover:border-[#D4AF37]/50 transition">
              <div className="w-14 h-14 rounded-2xl bg-[#181818] border border-[#282828] text-[#D4AF37] flex items-center justify-center mb-6">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                Our Core Values
              </h3>
              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                Strict ethical standards, transparent pricing without hidden markups, patient confidentiality, continuous cold-chain compliance, and respectful community care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHARMACIST / OWNER MESSAGE */}
      <section className="py-16 sm:py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111111] rounded-3xl p-8 sm:p-12 text-white border border-[#222222] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#181818] border-2 border-[#D4AF37]/40 mx-auto flex items-center justify-center shadow-xl overflow-hidden mb-4">
                  <Stethoscope className="w-16 h-16 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-bold font-display">{SITE_CONFIG.pharmacistInCharge}</h3>
                <span className="text-xs text-[#D4AF37] block mt-0.5">Founder &amp; Chief Pharmacist</span>
                <span className="text-[11px] text-[#777777] block mt-1 font-mono">Drug License: {SITE_CONFIG.licenseNumber}</span>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
                  Pharmacist&apos;s Personal Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                  &ldquo;A pharmacy is not just a retail shop; it is a sacred trust between caregiver and patient.&rdquo;
                </h2>
                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                  When a family walks into Seraj Medical Hall with a doctor prescription, they are seeking relief, health, and peace of mind for their loved ones. We take this responsibility with the utmost gravity. Every medicine is stored under optimum laboratory conditions, verified against the doctor’s dosage instructions, and provided at the lowest possible cost.
                </p>
                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                  Thank you, Jehanabad, for giving us the opportunity to serve your families for over a decade. We pledge to uphold this standard of care every single day.
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={onOpenWhatsAppModal}
                    className="px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#B8962D] text-black font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-lg shadow-[#D4AF37]/20"
                  >
                    Order Medicines on WhatsApp
                  </button>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="px-5 py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#242424] text-[#E0E0E0] font-semibold text-xs border border-[#2E2E2E] transition cursor-pointer"
                  >
                    Direct Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BUSINESS TIMELINE & ACHIEVEMENTS */}
      <section className="py-16 sm:py-20 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5" /> Our Milestones
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-display">
              The Journey of Seraj Medical Hall
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-[#222222]">
            {timelineEvents.map((item, idx) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-bold text-xs shadow-md border-4 border-[#0A0A0A] shrink-0 z-10 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  ✓
                </div>

                {/* Content Box */}
                <div className="sm:w-1/2 sm:px-8 flex-1">
                  <div className="p-6 bg-[#111111] rounded-3xl border border-[#222222] shadow-sm hover:border-[#D4AF37]/40 transition">
                    <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-1 font-mono">
                      Year {item.year}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2 font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#888888] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA LINK TO SERVICES & CONTACT */}
      <section className="py-14 bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-t border-[#1E1E1E] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-display">
            Looking for a Specific Formulation or Surgical Item?
          </h2>
          <p className="text-[#888888] text-xs sm:text-sm mb-6">
            Search our live stock checker or message our pharmacy team directly on WhatsApp for prompt assistance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services"
              className="px-6 py-3 bg-[#D4AF37] hover:bg-[#B8962D] text-black font-bold uppercase tracking-wider rounded-2xl text-xs sm:text-sm shadow-lg shadow-[#D4AF37]/20 transition"
            >
              Browse Services &amp; Stock Checker
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#181818] hover:bg-[#222222] border border-[#2E2E2E] text-[#E0E0E0] font-bold rounded-2xl text-xs sm:text-sm transition"
            >
              Contact Pharmacy Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
