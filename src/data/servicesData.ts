import { ServiceCategory } from '../types';

export const servicesData: ServiceCategory[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines',
    shortDesc: '100% genuine doctor-prescribed medications from certified pharmaceutical manufacturers.',
    fullDesc: 'We stock a complete inventory of doctor-prescribed brand-name and generic medicines with strict batch verification and climate-controlled storage for maximum potency and safety.',
    iconName: 'Pill',
    badge: 'Doctor Prescribed',
    features: [
      'Genuine batch tracking & authentic sourcing',
      'Cold-chain storage for sensitive injectables & vaccines',
      'Expert dosage & interaction advisory by licensed pharmacist',
      'Refill alerts and WhatsApp prescription dispatch'
    ],
    popularItems: ['Cardiac & BP Medications', 'Anti-diabetic Therapies', 'Antibiotics & Anti-infectives', 'Neurology & Psychotropic Drugs']
  },
  {
    id: 'otc-medicines',
    title: 'OTC Daily Healthcare',
    shortDesc: 'Over-the-counter essentials for fever, pain, colds, allergies, acidity, and first-aid.',
    fullDesc: 'Immediate relief formulations and everyday health products available on demand. Get safe guidance from our on-duty pharmacist for common non-chronic ailments.',
    iconName: 'HeartPulse',
    badge: 'Instant OTC',
    features: [
      'Fast-acting analgesics & antipyretics',
      'Antacids, digestive enzymes & ORS electrolytes',
      'Allergy tablets, nasal sprays & cough syrups',
      'Comprehensive first-aid bandages, cotton & antiseptic lotions'
    ],
    popularItems: ['Dolo 650', 'Digene Gel', 'Volini Spray', 'Electral ORS', 'Vicks Inhaler']
  },
  {
    id: 'health-devices',
    title: 'Health Devices & Diagnostic Monitors',
    shortDesc: 'Digital BP apparatus, glucometers, nebulizers, pulse oximeters, and clinical thermometers.',
    fullDesc: 'Empower home health monitoring with certified digital diagnostic tools from international brands like Omron, Accu-Chek, and Dr. Morepen. We also provide free device calibration guidance.',
    iconName: 'Activity',
    badge: 'Clinical Grade',
    features: [
      'Digital automatic blood pressure monitors',
      'Blood glucose testing kits & replacement strip packs',
      'Ultrasonic & compressor nebulizers for asthma management',
      'Non-contact infrared thermometers & digital oximeters'
    ],
    popularItems: ['Omron BP Monitor', 'Accu-Chek Active Strips', 'Compressor Nebulizer', 'Digital Thermometers']
  },
  {
    id: 'surgical-supplies',
    title: 'Surgical Supplies & Hospital Consumables',
    shortDesc: 'Sterile surgical gauze, IV sets, syringes, catheters, surgical gloves, and orthopedic braces.',
    fullDesc: 'Supplying hospital-grade sterile surgical items and post-operative recovery aids for patients, clinics, and local healthcare centers in and around Jehanabad.',
    iconName: 'Stethoscope',
    badge: 'Hospital Grade',
    features: [
      'Sterile gauze swabs, micropore tapes & rolled bandages',
      'Latex & nitrile examination gloves (Powder-free)',
      'Surgical disposable syringes, IV cannulas & infusion sets',
      'Cervical collars, knee braces, lumbar belts & arm slings'
    ],
    popularItems: ['Betadine 10% Solution', 'Micropore Tape', 'Sterile Syringes', 'Knee Support Braces']
  },
  {
    id: 'baby-care',
    title: 'Baby & Infant Wellness Care',
    shortDesc: 'Gentle infant formula, pediatric syrups, hypoallergenic wipes, baby diapers, and gentle lotions.',
    fullDesc: 'Everything your newborn and growing toddler needs for healthy development. Formulated baby foods, pediatric vitamins, colic drops, and gentle skin care products from pediatrician-trusted brands.',
    iconName: 'Baby',
    badge: 'Pediatric Care',
    features: [
      'Infant formulas & nutrient-rich baby cereals',
      'Gentle baby wipes, diaper rash creams & sensitive skin lotions',
      'Pediatric digestive gripe water & colic relief drops',
      'Premium breathable baby diapers across all sizes (NB to XL)'
    ],
    popularItems: ['Pampers Diapers', 'Himalaya Baby Oil', 'Woodward Gripe Water', 'Sebamed Baby Lotion']
  },
  {
    id: 'supplements',
    title: 'Vitamins, Nutrition & Supplements',
    shortDesc: 'Calcium with D3, multivitamin complexes, protein supplements, and immunity boosters.',
    fullDesc: 'Target nutritional deficiencies and enhance vitality with lab-tested dietary supplements suitable for elderly care, working professionals, athletes, and women health.',
    iconName: 'Sparkles',
    badge: 'Vitality & Immunity',
    features: [
      'Bone-density calcium, magnesium & vitamin D3 complexes',
      'High-potency B-complex & Vitamin C effervescent tablets',
      'Ayurvedic immunity formulations & chyawanprash',
      'Nutritional protein powders for clinical recovery'
    ],
    popularItems: ['Shelcal 500', 'Neurobion Forte', 'Limcee 500mg', 'Revital H Capsules']
  },
  {
    id: 'home-care',
    title: 'Home Care & Elderly Assistance',
    shortDesc: 'Adult diapers, walker sticks, air beds, hot water bags, and geriatric care products.',
    fullDesc: 'Comprehensive mobility, comfort, and nursing essentials to help elderly and bedridden family members maintain dignity, hygiene, and comfortable living at home.',
    iconName: 'Home',
    badge: 'Elderly Support',
    features: [
      'High-absorbency adult incontinence pull-up diapers & underpads',
      'Anti-decubitus air mattresses for bed-sore prevention',
      'Adjustable aluminum walking sticks & quad canes',
      'Orthopedic memory foam seat cushions & bed pans'
    ],
    popularItems: ['Friends Adult Diapers', 'Anti-Bed Sore Air Bed', 'Quad Walking Stick', 'Orthopedic Heating Pad']
  },
  {
    id: 'personal-care',
    title: 'Personal Care & Hygiene Essentials',
    shortDesc: 'Antiseptic solutions, dermatological skin cleansers, oral rinses, and feminine hygiene.',
    fullDesc: 'Maintain everyday cleanliness and skin barrier protection with trusted personal grooming and sanitation products.',
    iconName: 'ShieldCheck',
    badge: 'Daily Hygiene',
    features: [
      'Hospital-grade antiseptic skin & surface disinfectants',
      'Dermatologically tested face washes & medicated soaps',
      'Chlorhexidine antibacterial mouthwashes & dental floss',
      'Eco-friendly sanitary napkins & intimate hygiene washes'
    ],
    popularItems: ['Dettol Antiseptic', 'Cetaphil Cleanser', 'Betadine Gargle', 'Whisper Ultra Clean']
  }
];
