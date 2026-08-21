import { useState } from 'react';
import { 
  Pill, 
  Activity, 
  Stethoscope, 
  Baby, 
  Sparkles, 
  Home as HomeIcon, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight,
  HelpCircle,
  Clock,
  Truck,
  HeartPulse
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface ServicesProps {
  onOpenWhatsAppModal: (initialMedicine?: string) => void;
}

export default function Services({ onOpenWhatsAppModal }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill': return <Pill className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
      case 'Baby': return <Baby className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Home': return <HomeIcon className="w-6 h-6" />;
      default: return <ShieldCheck className="w-6 h-6" />;
    }
  };

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.id === activeCategory);

  return (
    <div className="bg-[#0A0A0A] text-[#E0E0E0] transition-colors">
      <SEOHead 
        title="Pharmacy Services & Medicine Stock Checker"
        description="Check live stock for allopathic medicines, baby care, surgical supplies, and health monitors at Seraj Medical Hall Jehanabad. Fast WhatsApp ordering."
        canonicalPath="/services"
        schemaType="CollectionPage"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#141414] via-[#0E0E0E] to-[#0A0A0A] text-white py-16 sm:py-24 relative overflow-hidden border-b border-[#1A1A1A]">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold mb-4 uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 text-[#D4AF37]" /> Complete Pharmaceutical Range
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display">
              Healthcare Services &amp; Inventory
            </h1>
            <p className="text-[#888888] text-sm sm:text-base mt-4 leading-relaxed">
              Explore our comprehensive healthcare categories, search live medicine availability in Jehanabad, and order with a single click.
            </p>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: LIVE MEDICINE STOCK CHECKER */}
      <section id="stock-checker" className="py-12 sm:py-16 -mt-10 sm:-mt-14 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker onSelectMedicineForOrder={(med) => onOpenWhatsAppModal(med)} />
        </div>
      </section>

      {/* CATEGORY-WISE SERVICES SECTION */}
      <section className="py-16 sm:py-20 bg-[#080808] border-t border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2">
              <Pill className="w-3.5 h-3.5 text-[#D4AF37]" /> Department Breakdown
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-display">
              Our Healthcare &amp; Medical Categories
            </h2>
            <p className="text-[#888888] text-xs sm:text-sm mt-1">
              Detailed descriptions of our products and services with on-demand WhatsApp ordering for every department.
            </p>

            {/* Department quick filter pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                    : 'bg-[#141414] border border-[#262626] text-[#888888] hover:text-white hover:bg-[#1C1C1C]'
                }`}
              >
                All Departments ({servicesData.length})
              </button>
              {servicesData.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => setActiveCategory(srv.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                    activeCategory === srv.id
                      ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                      : 'bg-[#141414] border border-[#262626] text-[#888888] hover:text-white hover:bg-[#1C1C1C]'
                  }`}
                >
                  {srv.title}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#111111] rounded-3xl p-6 sm:p-8 border border-[#222222] hover:border-[#D4AF37]/50 flex flex-col justify-between transition shadow-sm hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#181818] border border-[#282828] text-[#D4AF37] flex items-center justify-center font-bold group-hover:bg-[#D4AF37] group-hover:text-black transition shadow-sm">
                      {getIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#1A1A1A] text-[#D4AF37] border border-[#333333] uppercase tracking-wider font-mono">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition font-display">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#888888] leading-relaxed mb-5">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Key Highlights:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#888888]">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#1C1C1C] mb-6">
                    <span className="text-xs text-[#666666] block mb-1.5 font-medium">
                      Popular Formulations &amp; Brands:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.popularItems.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-[#161616] text-[11px] font-semibold text-[#CCCCCC] border border-[#262626]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-[#1C1C1C]">
                  <span className="text-xs text-[#666666] font-medium">
                    Available in Jehanabad store
                  </span>
                  <button
                    onClick={() => onOpenWhatsAppModal(service.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D4AF37] hover:bg-[#B8962D] text-black rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-sm cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    Inquire / Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ORDER STEPS */}
      <section className="py-16 sm:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              How WhatsApp Medicine Ordering Works
            </h2>
            <p className="text-[#888888] text-xs sm:text-sm mt-1">
              Skip queues and save time with simple 3-step prescription fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#111111] border border-[#222222] text-center shadow-sm hover:border-[#D4AF37]/40 transition">
              <div className="w-12 h-12 rounded-2xl bg-[#181818] border border-[#282828] text-[#D4AF37] flex items-center justify-center mx-auto mb-4 font-bold text-lg font-mono">
                1
              </div>
              <h3 className="font-bold text-base text-white mb-2 font-display">
                Send Prescription Photo
              </h3>
              <p className="text-xs text-[#888888] leading-relaxed">
                Take a clear picture of your doctor prescription and send it on WhatsApp to <strong className="text-white font-mono">7004493684</strong>.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#111111] border border-[#222222] text-center shadow-sm hover:border-[#D4AF37]/40 transition">
              <div className="w-12 h-12 rounded-2xl bg-[#181818] border border-[#282828] text-[#D4AF37] flex items-center justify-center mx-auto mb-4 font-bold text-lg font-mono">
                2
              </div>
              <h3 className="font-bold text-base text-white mb-2 font-display">
                Pharmacist Verification
              </h3>
              <p className="text-xs text-[#888888] leading-relaxed">
                Our registered pharmacist reviews the prescription, applies eligible discounts, and sends the itemized bill.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#111111] border border-[#222222] text-center shadow-sm hover:border-[#D4AF37]/40 transition">
              <div className="w-12 h-12 rounded-2xl bg-[#181818] border border-[#282828] text-[#D4AF37] flex items-center justify-center mx-auto mb-4 font-bold text-lg font-mono">
                3
              </div>
              <h3 className="font-bold text-base text-white mb-2 font-display">
                Express Delivery / Pickup
              </h3>
              <p className="text-xs text-[#888888] leading-relaxed">
                Receive your neatly packed medicines at your home address in Jehanabad or pick up ready at the counter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
