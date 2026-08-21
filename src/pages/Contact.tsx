import { useState, FormEvent } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Clock, 
  Send, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  ShieldCheck,
  Navigation
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';

interface ContactProps {
  onOpenWhatsAppModal: () => void;
}

export default function Contact({ onOpenWhatsAppModal }: ContactProps) {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('Medicine Availability Inquiry');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!formPhone.trim() || formPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!formMessage.trim()) {
      setErrorMsg('Please enter your inquiry message');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);

    // Also offer direct WhatsApp dispatch
    const text = `Hello ${SITE_CONFIG.businessName},
*Website Contact / Inquiry Form*

👤 *Name:* ${formName}
📞 *Phone:* ${formPhone}
📌 *Subject:* ${formSubject}
💬 *Message:* ${formMessage}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[#0A0A0A] text-[#E0E0E0] transition-colors min-h-screen">
      <SEOHead 
        title="Contact Us & Store Location | Seraj Medical Hall Jehanabad"
        description="Visit Seraj Medical Hall on Gaya-Patna Main Rd, Jehanabad, Bihar 804408. Call 7004493684 for medicines, surgical supplies, and WhatsApp delivery."
        canonicalPath="/contact"
        schemaType="ContactPage"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#141414] via-[#0E0E0E] to-[#0A0A0A] text-white py-16 sm:py-24 relative overflow-hidden border-b border-[#1A1A1A]">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold mb-4 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Direct Contact &amp; Support
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display">
              Contact Seraj Medical Hall
            </h1>
            <p className="text-[#888888] text-sm sm:text-base mt-4 leading-relaxed">
              Reach our on-duty pharmacist directly for medicine inquiries, prescription orders, surgical requirements, or visit us in Jehanabad.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-20 -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Contact Info & Action Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Core Information Card */}
              <div className="bg-[#111111] rounded-3xl p-6 sm:p-8 shadow-xl border border-[#222222] space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1 font-display">
                    Store Location &amp; Details
                  </h2>
                  <p className="text-xs text-[#888888]">
                    Retail counter on the primary corridor of Jehanabad city.
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#161616] border border-[#222222]">
                    <div className="p-2.5 rounded-xl bg-[#1C1C1C] border border-[#282828] text-[#D4AF37] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-white block">Full Address</strong>
                      <span className="text-xs text-[#AAAAAA] leading-relaxed block mt-0.5">
                        {SITE_CONFIG.address.fullAddress}
                      </span>
                      <span className="text-[11px] text-[#D4AF37] font-semibold block mt-1">
                        Landmark: {SITE_CONFIG.address.locality}
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#161616] border border-[#222222]">
                    <div className="p-2.5 rounded-xl bg-[#1C1C1C] border border-[#282828] text-[#D4AF37] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-white block">Helpline / Call</strong>
                      <a href={`tel:${SITE_CONFIG.phone}`} className="text-xs font-bold text-[#D4AF37] block mt-0.5 hover:underline font-mono">
                        {SITE_CONFIG.formattedPhone}
                      </a>
                      <span className="text-[11px] text-[#777777] block">
                        Direct call to on-duty pharmacist
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#161616] border border-[#222222]">
                    <div className="p-2.5 rounded-xl bg-[#1C1C1C] border border-[#282828] text-[#D4AF37] shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-white block">WhatsApp Prescription Order</strong>
                      <button 
                        onClick={onOpenWhatsAppModal}
                        className="text-xs font-bold text-[#D4AF37] block mt-0.5 hover:underline text-left cursor-pointer font-mono"
                      >
                        +91 {SITE_CONFIG.whatsappNumber} (Click to Order)
                      </button>
                      <span className="text-[11px] text-[#777777] block">
                        Prescription photo verification &amp; fast billing
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#161616] border border-[#222222]">
                    <div className="p-2.5 rounded-xl bg-[#1C1C1C] border border-[#282828] text-[#D4AF37] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-white block">Official Email</strong>
                      <a href={`mailto:${SITE_CONFIG.email}`} className="text-xs text-[#D4AF37] block mt-0.5 hover:underline font-mono">
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="py-3 px-4 bg-[#181818] hover:bg-[#222222] border border-[#2A2A2A] text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    Call
                  </a>

                  <button
                    onClick={onOpenWhatsAppModal}
                    className="py-3 px-4 bg-[#D4AF37] hover:bg-[#B8962D] text-black rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition shadow-lg shadow-[#D4AF37]/20 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    WhatsApp
                  </button>

                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-[#181818] hover:bg-[#222222] border border-[#2A2A2A] text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition shadow-sm"
                  >
                    <Navigation className="w-4 h-4 text-[#D4AF37]" />
                    Directions
                  </a>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="bg-[#111111] rounded-3xl p-6 sm:p-8 shadow-xl border border-[#222222]">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                  <h3 className="text-base font-bold text-white font-display">
                    Official Pharmacy Operating Hours
                  </h3>
                </div>

                <div className="space-y-2 text-xs divide-y divide-[#1C1C1C]">
                  <div className="flex justify-between py-2">
                    <span className="text-[#888888]">Monday – Friday</span>
                    <span className="font-bold text-white font-mono">7:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#888888]">Saturday</span>
                    <span className="font-bold text-white font-mono">7:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#888888]">Sunday</span>
                    <span className="font-bold text-white font-mono">7:00 AM – 11:00 PM</span>
                  </div>
                </div>

                <div className="mt-4 p-3.5 bg-[#161616] rounded-2xl border border-[#2A2A2A] text-xs">
                  <span className="font-bold text-[#D4AF37] block uppercase tracking-wider">
                    🚨 24/7 Emergency Medicine Support
                  </span>
                  <span className="text-[#AAAAAA] text-[11px] block mt-0.5">
                    For emergency ICU injectables, oxygen accessories, or urgent prescriptions after 11 PM, call <span className="text-[#D4AF37] font-mono">{SITE_CONFIG.phone}</span>.
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form & Google Map Embed */}
            <div className="lg:col-span-7 space-y-6">
              {/* Contact Form */}
              <div className="bg-[#111111] rounded-3xl p-6 sm:p-8 shadow-xl border border-[#222222]">
                <h2 className="text-xl font-bold text-white mb-1 font-display">
                  Send a Quick Medical Inquiry
                </h2>
                <p className="text-xs text-[#888888] mb-6">
                  Inquire about rare medicine availability, surgical supplies, or request home delivery quotation.
                </p>

                {errorMsg && (
                  <div className="mb-4 p-3 bg-red-950/40 border border-red-800 rounded-xl text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {submitted ? (
                  <div className="p-6 bg-[#161616] rounded-2xl border border-[#D4AF37]/40 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                    <h3 className="font-bold text-lg text-white font-display">
                      Inquiry Dispatched Successfully!
                    </h3>
                    <p className="text-xs text-[#AAAAAA] max-w-md mx-auto">
                      Thank you, {formName}. Your message has been routed to our pharmacist on WhatsApp and email. We will respond promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 bg-[#D4AF37] text-black font-bold uppercase tracking-wider rounded-xl text-xs hover:bg-[#B8962D] transition shadow-lg shadow-[#D4AF37]/20"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#AAAAAA] mb-1">
                          Your Full Name <span className="text-[#D4AF37]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#2A2A2A] bg-[#161616] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none text-sm placeholder:text-[#555555]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#AAAAAA] mb-1">
                          Mobile Number <span className="text-[#D4AF37]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="e.g. 7004493684"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#2A2A2A] bg-[#161616] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none text-sm placeholder:text-[#555555]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#AAAAAA] mb-1">
                        Inquiry Subject
                      </label>
                      <select
                        value={formSubject}
                        onChange={(e) => setFormSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#2A2A2A] bg-[#161616] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none text-sm"
                      >
                        <option value="Medicine Availability Inquiry" className="bg-[#161616] text-white">Check Medicine Stock Availability</option>
                        <option value="Prescription Delivery Quotation" className="bg-[#161616] text-white">Prescription Delivery Quotation</option>
                        <option value="Surgical / Medical Equipment Inquiry" className="bg-[#161616] text-white">Surgical / Medical Equipment Inquiry</option>
                        <option value="Baby Care & Nutrition Products" className="bg-[#161616] text-white">Baby Care &amp; Nutrition Products</option>
                        <option value="Bulk Clinic Order / Hospital Supply" className="bg-[#161616] text-white">Bulk Clinic Order / Hospital Supply</option>
                        <option value="Other Feedback" className="bg-[#161616] text-white">Other Question / Feedback</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#AAAAAA] mb-1">
                        Message Details <span className="text-[#D4AF37]">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Specify medicine names, dosages, required quantities, or your question..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#2A2A2A] bg-[#161616] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none text-sm placeholder:text-[#555555]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 bg-[#D4AF37] hover:bg-[#B8962D] text-black font-bold uppercase tracking-wider rounded-xl text-xs transition shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Submit Inquiry &amp; Open WhatsApp
                    </button>
                  </form>
                )}
              </div>

              {/* Google Map Section */}
              <div className="bg-[#111111] rounded-3xl p-6 sm:p-8 shadow-xl border border-[#222222]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-bold text-base text-white font-display">
                      Google Maps Location
                    </h3>
                    <p className="text-xs text-[#888888]">
                      Gaya - Patna Main Rd, Jehanabad, Bihar 804408
                    </p>
                  </div>

                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#181818] hover:bg-[#242424] text-[#D4AF37] text-xs font-bold uppercase tracking-wider rounded-xl transition border border-[#2A2A2A]"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Open in Maps App
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="rounded-2xl overflow-hidden border border-[#222222] h-72 sm:h-80 relative bg-[#141414]">
                  <iframe
                    title="Seraj Medical Hall Location Map"
                    src="https://maps.google.com/maps?q=Jehanabad%2C+Bihar+804408+Gaya+Patna+Main+Road&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale contrast-125 invert opacity-80"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
