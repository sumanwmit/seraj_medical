import { HealthTip } from '../types';

export const healthTipsData: HealthTip[] = [
  {
    id: 'tip-1',
    title: 'Safe Storage of Insulin & Sensitive Injectables at Home',
    category: 'Diabetes Care',
    readTime: '3 min read',
    summary: 'Essential guidelines on temperature control, avoiding freezing, and checking expiration of insulin pens and vials.',
    content: 'Unopened insulin must always be stored in a refrigerator at 2°C to 8°C (never in the freezer). Once an insulin pen or vial is opened and in use, it can be kept at room temperature (below 25°C - 30°C) away from direct sunlight for up to 28 days. Never expose insulin to direct dashboard sunlight or freezing conditions.',
    author: 'Pharmacist Advisory Desk',
    date: 'August 2026',
    tags: ['Insulin', 'Diabetes', 'Storage Tips'],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tip-2',
    title: 'Why Completing Full Antibiotic Courses is Crucial',
    category: 'Medication Safety',
    readTime: '4 min read',
    summary: 'Learn why stopping antibiotics early when you feel better breeds drug-resistant bacteria.',
    content: 'Even if your fever drops or pain diminishes after 2 days of antibiotics, stopping early allows stronger surviving bacteria to mutate into drug-resistant superbugs. Always finish the exact duration prescribed by your doctor and never take leftover antibiotics without a fresh prescription.',
    author: 'Seraj Medical Clinical Team',
    date: 'August 2026',
    tags: ['Antibiotics', 'Dosage', 'Health Safety'],
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tip-3',
    title: 'Monsoon Healthcare: Preventing Waterborne Infections & Dengue',
    category: 'Seasonal Wellness',
    readTime: '3 min read',
    summary: 'Practical precautions for clean drinking water, ORS hydration, and vector prevention.',
    content: 'Boil or filter drinking water during wet seasons, keep mosquito repellents active, and maintain oral rehydration salts (ORS) at home for rapid response to diarrhea or dehydration symptoms. Consult a doctor promptly if high fever or joint pain persists.',
    author: 'Public Health Department',
    date: 'August 2026',
    tags: ['Monsoon', 'ORS', 'Hygiene'],
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800&auto=format&fit=crop'
  }
];
