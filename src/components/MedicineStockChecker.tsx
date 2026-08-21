import { useState, useMemo } from 'react';
import medicineStockData from '../data/medicineStock.json';
import { MedicineItem } from '../types';
import { Search, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, ShieldCheck, FileCheck, RefreshCw } from 'lucide-react';

interface MedicineStockCheckerProps {
  onSelectMedicineForOrder?: (medicineName: string) => void;
  className?: string;
}

export function MedicineStockChecker({ onSelectMedicineForOrder, className = '' }: MedicineStockCheckerProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedMedicine, setSelectedMedicine] = useState<MedicineItem | null>(null);

  // Cast JSON data
  const medicines: MedicineItem[] = medicineStockData as MedicineItem[];

  const categories = useMemo(() => {
    const list = Array.from(new Set(medicines.map((m) => m.category)));
    return ['All', ...list];
  }, [medicines]);

  const filteredMedicines = useMemo(() => {
    return medicines.filter((med) => {
      const matchesSearch = 
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (med.genericName && med.genericName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        med.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.indications.some(ind => ind.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || med.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [medicines, searchTerm, selectedCategory, selectedStatus]);

  const getStatusBadge = (status: MedicineItem['status'], quantity: number) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#182618] text-[#86EFAC] border border-[#234A23]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Available ({quantity} in stock)
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#2D240E] text-[#FDE047] border border-[#524115]">
            <AlertTriangle className="w-3.5 h-3.5" />
            Limited Stock ({quantity} left)
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#2A1515] text-[#FCA5A5] border border-[#4C2020]">
            <XCircle className="w-3.5 h-3.5" />
            Out of Stock
          </span>
        );
    }
  };

  return (
    <div className={`bg-[#0D0D0D] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#222222] ${className}`}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#1E1E1E]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" /> Live Store Inventory
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight font-display">
            Medicine Stock &amp; Availability Checker
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] mt-1">
            Search genuine medicines, check real-time stock levels, generic formulas, and order instantly.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#888888] self-start md:self-auto">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
          </span>
          <span>Verified Pharmacy Inventory</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#888888]" />
          <input
            type="text"
            id="medicine-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by brand name (e.g. Dolo 650, Pan-D, Shelcal) or generic (Paracetamol)..."
            className="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-[#2A2A2A] bg-[#141414] text-white placeholder-[#666666] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition text-sm"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#888888] hover:text-[#D4AF37] text-xs cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills & Stock Filter */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[#888888] font-medium mr-1">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full font-medium transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-xs'
                    : 'bg-[#181818] hover:bg-[#222222] border border-[#262626] text-[#AAAAAA] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[#888888] font-medium">Status:</span>
            {['All', 'Available', 'Limited Stock', 'Out of Stock'].map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-2.5 py-1 rounded-lg font-medium transition text-[11px] cursor-pointer ${
                  selectedStatus === status
                    ? 'bg-white text-black font-semibold'
                    : 'bg-[#181818] text-[#888888] hover:bg-[#222222] hover:text-white border border-[#262626]'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-[#888888] mb-4 px-1">
        <span>Showing <strong className="text-white">{filteredMedicines.length}</strong> items in inventory</span>
        {searchTerm && <span>Filtered by &quot;{searchTerm}&quot;</span>}
      </div>

      {/* Grid of Medicines */}
      {filteredMedicines.length === 0 ? (
        <div className="text-center py-12 px-4 bg-[#141414] rounded-2xl border border-dashed border-[#2A2A2A]">
          <div className="w-12 h-12 rounded-full bg-[#1F1F1F] text-[#888888] flex items-center justify-center mx-auto mb-3">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-white text-base mb-1">
            Medicine not found in catalog
          </h3>
          <p className="text-xs text-[#888888] max-w-md mx-auto mb-4">
            We regularly restock over 5,000+ formulations. Contact our pharmacist on WhatsApp directly to check off-shelf availability or request priority ordering.
          </p>
          <button
            onClick={() => onSelectMedicineForOrder && onSelectMedicineForOrder(searchTerm)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37] hover:bg-[#B8962D] text-black text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-lg shadow-[#D4AF37]/20 cursor-pointer"
          >
            Inquire &quot;{searchTerm || 'Medicine'}&quot; on WhatsApp
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMedicines.map((med) => (
            <div
              key={med.id}
              className="bg-[#141414] hover:bg-[#1A1A1A] border border-[#242424] hover:border-[#D4AF37]/50 rounded-2xl p-5 transition flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold text-[#D4AF37] bg-[#1E1E1E] border border-[#2E2E2E] px-2 py-0.5 rounded-md">
                    {med.category}
                  </span>
                  {getStatusBadge(med.status, med.availableQuantity)}
                </div>

                <h3 className="font-bold text-white text-base leading-snug group-hover:text-[#D4AF37] transition">
                  {med.name}
                </h3>
                {med.genericName && (
                  <p className="text-xs text-[#888888] line-clamp-1 mt-0.5">
                    {med.genericName}
                  </p>
                )}

                <div className="mt-3 flex items-center justify-between text-xs text-[#888888] pb-3 border-b border-[#222222]">
                  <span>Mfr: <strong className="text-[#CCCCCC]">{med.brand}</strong></span>
                  <span className="text-[#AAAAAA]">{med.packSize}</span>
                </div>

                <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
                  {med.prescriptionRequired && (
                    <span className="inline-flex items-center gap-1 text-[10px] bg-[#2A1515] text-[#FCA5A5] font-medium px-2 py-0.5 rounded-md border border-[#4C2020]">
                      <FileCheck className="w-3 h-3" /> Rx Required
                    </span>
                  )}
                  <span className="text-[10px] text-[#666666]">
                    Exp: {med.expiry}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#222222] flex items-center justify-between gap-2">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-bold text-white font-mono">
                      ₹{med.discountPrice || med.mrp}
                    </span>
                    {med.discountPrice && med.discountPrice < med.mrp && (
                      <span className="text-xs text-[#666666] line-through">
                        ₹{med.mrp}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-[#666666] block">
                    Incl. all taxes
                  </span>
                </div>

                <button
                  onClick={() => onSelectMedicineForOrder && onSelectMedicineForOrder(med.name)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                    med.status === 'Out of Stock'
                      ? 'bg-[#222222] text-[#888888] hover:bg-[#2A2A2A] hover:text-white'
                      : 'bg-[#D4AF37] hover:bg-[#B8962D] text-black font-bold uppercase tracking-wider shadow-md shadow-[#D4AF37]/15'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  {med.status === 'Out of Stock' ? 'Pre-Order' : 'Order Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
