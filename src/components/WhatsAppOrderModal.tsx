import React, { useState, useEffect } from 'react';
import { X, Send, PhoneCall, UploadCloud, CheckCircle2, FileText, Clock, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicineName?: string;
}

export function WhatsAppOrderModal({ isOpen, onClose, initialMedicineName = '' }: WhatsAppOrderModalProps) {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicines, setMedicines] = useState(initialMedicineName);
  const [hasPrescription, setHasPrescription] = useState<'Yes' | 'No'>('Yes');
  const [preferredTime, setPreferredTime] = useState('Earliest Possible');
  const [notes, setNotes] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (initialMedicineName) {
      setMedicines(initialMedicineName);
    }
  }, [initialMedicineName]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
      setHasPrescription('Yes');
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setFormError('Please enter your full name');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!medicines.trim() && hasPrescription === 'No') {
      setFormError('Please specify the required medicine names or upload a prescription.');
      return;
    }

    setFormError('');

    const text = `Hello ${SITE_CONFIG.businessName},
*New Medicine Order Request*

👤 *Customer Name:* ${customerName}
📞 *Phone:* ${phone}
${email ? `✉️ *Email:* ${email}\n` : ''}📍 *Delivery Address:* ${address || 'Local Pick-up / Jehanabad'}
💊 *Medicine Required:* ${medicines || 'Prescription Attached via WhatsApp image'}
📄 *Prescription Available:* ${hasPrescription}${uploadedFileName ? ` (File: ${uploadedFileName})` : ''}
⏰ *Preferred Delivery Time:* ${preferredTime}
${notes ? `📝 *Notes/Instructions:* ${notes}\n` : ''}
_Please verify availability, calculate total bill with discount, and confirm my order._`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#111111] rounded-3xl shadow-2xl p-6 sm:p-8 border border-[#262626] text-[#E0E0E0] my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="whatsapp-order-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#888888] hover:text-[#D4AF37] rounded-full hover:bg-[#1A1A1A] transition cursor-pointer"
          aria-label="Close WhatsApp order dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center font-bold text-2xl">
            💬
          </div>
          <div>
            <h3 id="whatsapp-order-title" className="font-bold text-xl leading-tight text-white font-display">
              Order via WhatsApp
            </h3>
            <p className="text-xs text-[#888888]">Direct prescription dispatch to registered pharmacist</p>
          </div>
        </div>

        {formError && (
          <div className="mb-4 p-3 bg-red-950/40 border border-red-800/80 rounded-xl text-red-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{formError}</span>
          </div>
        )}

        <form onSubmit={handleSendWhatsApp} className="space-y-4 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#CCCCCC] mb-1">
                Customer Name <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#2E2E2E] bg-[#181818] text-white placeholder-[#666666] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none text-sm transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#CCCCCC] mb-1">
                Mobile Number <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 7004493684"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#2E2E2E] bg-[#181818] text-white placeholder-[#666666] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none text-sm transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#CCCCCC] mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. ramesh@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#2E2E2E] bg-[#181818] text-white placeholder-[#666666] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none text-sm transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#CCCCCC] mb-1">
                Preferred Delivery / Pickup Time
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#2E2E2E] bg-[#181818] text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none text-sm transition"
              >
                <option value="Earliest Possible">Earliest Possible (Within 1-2 hrs)</option>
                <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                <option value="Store Pickup (Today)">Store Pickup Today</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#CCCCCC] mb-1">
              Delivery Address (Jehanabad & Surrounding Areas)
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. Near Station Mor, House No 12, Jehanabad"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#2E2E2E] bg-[#181818] text-white placeholder-[#666666] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none text-sm transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#CCCCCC] mb-1">
              Medicine Names & Quantities
            </label>
            <textarea
              rows={2}
              value={medicines}
              onChange={(e) => setMedicines(e.target.value)}
              placeholder="e.g. Dolo 650 (1 strip), Pan-D (1 strip), Shelcal 500 (1 strip)"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#2E2E2E] bg-[#181818] text-white placeholder-[#666666] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none text-sm transition"
            />
          </div>

          {/* Prescription Upload Area */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-[#CCCCCC]">
                Doctor Prescription
              </label>
              <div className="flex items-center gap-3 text-xs">
                <label className="flex items-center gap-1 cursor-pointer text-[#CCCCCC]">
                  <input
                    type="radio"
                    name="prescriptionOpt"
                    value="Yes"
                    checked={hasPrescription === 'Yes'}
                    onChange={() => setHasPrescription('Yes')}
                    className="accent-[#D4AF37]"
                  />
                  <span>Yes, I have it</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer text-[#CCCCCC]">
                  <input
                    type="radio"
                    name="prescriptionOpt"
                    value="No"
                    checked={hasPrescription === 'No'}
                    onChange={() => setHasPrescription('No')}
                    className="accent-[#D4AF37]"
                  />
                  <span>No (OTC Only)</span>
                </label>
              </div>
            </div>

            {hasPrescription === 'Yes' && (
              <div className="mt-1 border-2 border-dashed border-[#2E2E2E] hover:border-[#D4AF37]/60 rounded-2xl p-4 text-center transition bg-[#161616]">
                <input
                  type="file"
                  id="prescription-file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="prescription-file" className="cursor-pointer flex flex-col items-center justify-center">
                  <UploadCloud className="w-7 h-7 text-[#D4AF37] mb-1" />
                  <span className="text-xs font-semibold text-[#E0E0E0]">
                    {uploadedFileName ? uploadedFileName : 'Click to select prescription photo or PDF'}
                  </span>
                  <span className="text-[11px] text-[#777777] mt-0.5">
                    (You can also directly attach the photo in WhatsApp chat)
                  </span>
                </label>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#CCCCCC] mb-1">
              Special Notes / Instructions (Optional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Call before coming, urgent requirement"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#2E2E2E] bg-[#181818] text-white placeholder-[#666666] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none text-sm transition"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 bg-[#D4AF37] hover:bg-[#B8962D] text-black font-bold uppercase tracking-wider rounded-xl text-xs sm:text-sm transition shadow-lg shadow-[#D4AF37]/20 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Send via WhatsApp
            </button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 py-3 px-5 bg-[#1C1C1C] hover:bg-[#252525] border border-[#2E2E2E] text-[#E0E0E0] font-semibold rounded-xl text-xs sm:text-sm transition cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              Call Now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
