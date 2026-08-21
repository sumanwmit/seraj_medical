import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Pill, ArrowRight, Activity, ChevronRight } from 'lucide-react';
import medicineStockData from '../data/medicineStock.json';
import { servicesData } from '../data/servicesData';
import { MedicineItem } from '../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMedicineForOrder?: (medName: string) => void;
}

export function QuickSearchModal({ isOpen, onClose, onSelectMedicineForOrder }: QuickSearchModalProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const medicines = (medicineStockData as MedicineItem[]).filter(
    (m) =>
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      (m.genericName && m.genericName.toLowerCase().includes(query.toLowerCase())) ||
      m.brand.toLowerCase().includes(query.toLowerCase())
  );

  const matchedServices = servicesData.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.popularItems.some(i => i.toLowerCase().includes(query.toLowerCase()))
  );

  const handleMedicineClick = (name: string) => {
    onClose();
    if (onSelectMedicineForOrder) {
      onSelectMedicineForOrder(name);
    }
  };

  const handleServiceClick = () => {
    onClose();
    navigate('/services');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-2xl bg-[#111111] rounded-2xl shadow-2xl border border-[#262626] overflow-hidden text-[#E0E0E0]"
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4 border-b border-[#222222] flex items-center gap-3 bg-[#141414]">
          <Search className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type any medicine name, salt formula, or service category..."
            className="w-full bg-transparent text-[#FFFFFF] placeholder-[#666666] focus:outline-none text-sm sm:text-base"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-[#888888] hover:text-[#D4AF37] rounded-lg hover:bg-[#1E1E1E] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {query.trim() === '' ? (
            <div>
              <p className="text-xs font-semibold text-[#888888] uppercase tracking-[0.2em] mb-2.5">
                Popular Inquiries
              </p>
              <div className="flex flex-wrap gap-2">
                {['Dolo 650', 'Pan-D', 'Shelcal 500', 'Omron BP Monitor', 'Accu-Chek Strips', 'Baby Diapers', 'Nebulizer Machine'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleMedicineClick(item)}
                    className="px-3 py-1.5 rounded-xl bg-[#161616] hover:bg-[#202020] border border-[#262626] hover:border-[#D4AF37]/50 text-xs font-medium text-[#CCCCCC] hover:text-[#D4AF37] transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Pill className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {medicines.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-[#888888] uppercase tracking-[0.2em] mb-2">
                    Medicines &amp; Products ({medicines.length})
                  </p>
                  <div className="space-y-2">
                    {medicines.slice(0, 6).map((med) => (
                      <div
                        key={med.id}
                        onClick={() => handleMedicineClick(med.name)}
                        className="p-3 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-[#222222] hover:border-[#D4AF37]/40 flex items-center justify-between cursor-pointer group transition"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm text-[#FFFFFF] group-hover:text-[#D4AF37] transition">
                              {med.name}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#1F1F1F] border border-[#2A2A2A] text-[#AAAAAA]">
                              {med.brand}
                            </span>
                          </div>
                          <p className="text-xs text-[#777777]">
                            {med.genericName || med.category} • ₹{med.discountPrice || med.mrp}
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-[#D4AF37] flex items-center gap-1">
                          Order <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchedServices.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-[#888888] uppercase tracking-[0.2em] mb-2">
                    Healthcare Services
                  </p>
                  <div className="space-y-2">
                    {matchedServices.map((srv) => (
                      <div
                        key={srv.id}
                        onClick={handleServiceClick}
                        className="p-3 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-[#222222] hover:border-[#D4AF37]/40 flex items-center justify-between cursor-pointer group transition"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#1F1F1F] text-[#D4AF37] border border-[#2E2E2E]">
                            <Activity className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-semibold text-sm text-[#FFFFFF] group-hover:text-[#D4AF37] transition">
                              {srv.title}
                            </span>
                            <p className="text-xs text-[#777777]">
                              {srv.shortDesc}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#777777] group-hover:text-[#D4AF37] group-hover:translate-x-0.5 transition" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {medicines.length === 0 && matchedServices.length === 0 && (
                <div className="text-center py-8 text-[#777777] text-xs">
                  No direct results for &quot;{query}&quot;. You can request it directly on WhatsApp order form.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
