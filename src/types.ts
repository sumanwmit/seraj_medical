export interface MedicineItem {
  id: string;
  name: string;
  genericName?: string;
  brand: string;
  category: 'OTC' | 'Prescription' | 'Health Devices' | 'Surgical Supplies' | 'Supplements' | 'Baby Care' | 'Personal Care' | 'Ayurvedic & Herbal';
  mrp: number;
  discountPrice?: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  dosageForm: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Ointment' | 'Drops' | 'Powder' | 'Device' | 'Consumable';
  packSize: string;
  prescriptionRequired: boolean;
  description: string;
  indications: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge?: string;
  features: string[];
  popularItems: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Store Interior' | 'Medicine Shelves' | 'Healthcare Products' | 'Medical Equipment' | 'Front View';
  imageUrl: string;
  alt: string;
  caption: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  medicinesBought?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Orders' | 'Prescription' | 'Stock' | 'Timings & Delivery' | 'Payments';
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  imageUrl: string;
}
