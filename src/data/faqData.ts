import { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How can I order medicines via WhatsApp?',
    answer: 'Simply click our "WhatsApp Order" button or message us directly on 7004493684. Attach a clear photo of your doctor prescription along with your name and address. Our registered pharmacist will verify the prescription, calculate the discounted bill, and confirm your delivery or ready-for-pickup time.',
    category: 'Orders'
  },
  {
    id: 'faq-2',
    question: 'Is a doctor prescription compulsory for all medicines?',
    answer: 'Prescription is mandatory for Scheduled drugs (Schedule H & X) such as antibiotics, cardiovascular medications, psychiatric drugs, and anti-diabetic pills as per Indian Drug and Cosmetics Act regulations. Common OTC items like paracetamol, antacids, band-aids, and vitamins do not require a prescription.',
    category: 'Prescription'
  },
  {
    id: 'faq-3',
    question: 'Do you offer home delivery in Jehanabad?',
    answer: 'Yes! We provide prompt local home delivery across Jehanabad city and nearby localities along the Gaya-Patna Main Road for orders placed via WhatsApp or phone.',
    category: 'Timings & Delivery'
  },
  {
    id: 'faq-4',
    question: 'What are your working hours and emergency availability?',
    answer: 'Our pharmacy is open all 7 days from 7:00 AM to 11:00 PM. For critical emergency medicines after store hours, you can reach out directly on our 24/7 on-call helpline at 7004493684.',
    category: 'Timings & Delivery'
  },
  {
    id: 'faq-5',
    question: 'How do you ensure medicine authenticity and storage quality?',
    answer: 'All medicines at Seraj Medical Hall are sourced directly from authorized C&F distributors and licensed pharmaceutical companies. We maintain dedicated 24x7 temperature-controlled storage and a medical refrigerator (2°C - 8°C) with power backups for insulins and vaccines.',
    category: 'Stock'
  },
  {
    id: 'faq-6',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods including Cash on Delivery, UPI (Google Pay, PhonePe, Paytm), BHIM UPI QR scanner at counter, and Debit/Credit Cards.',
    category: 'Payments'
  }
];
