import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  schemaType?: 'Pharmacy' | 'MedicalBusiness' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
}

export function SEOHead({
  title,
  description,
  keywords,
  canonicalPath = '/',
  ogImage = 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1200&auto=format&fit=crop',
  schemaType = 'Pharmacy'
}: SEOHeadProps) {
  const fullTitle = title 
    ? `${title} | ${SITE_CONFIG.businessName} Jehanabad`
    : `${SITE_CONFIG.businessName} | Leading Pharmacy & Healthcare Store in Jehanabad, Bihar`;

  const metaDesc = description || `${SITE_CONFIG.businessName} on Gaya-Patna Main Rd, Jehanabad, Bihar (804408). 100% genuine medicines, surgical supplies, and instant WhatsApp prescription order delivery.`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Update meta description
    let metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (!metaDescriptionEl) {
      metaDescriptionEl = document.createElement('meta');
      metaDescriptionEl.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionEl);
    }
    metaDescriptionEl.setAttribute('content', metaDesc);

    // Update canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', `https://serajmedicalhall.com${canonicalPath}`);

    // Inject JSON-LD Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": SITE_CONFIG.businessName,
      "alternateName": [SITE_CONFIG.altBusinessName, "Seraj Medical Jehanabad"],
      "image": ogImage,
      "description": metaDesc,
      "@id": `https://serajmedicalhall.com/#${schemaType.toLowerCase()}`,
      "url": "https://serajmedicalhall.com",
      "telephone": `+91-${SITE_CONFIG.phone}`,
      "priceRange": "₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE_CONFIG.address.street,
        "addressLocality": SITE_CONFIG.address.city,
        "addressRegion": SITE_CONFIG.address.state,
        "postalCode": SITE_CONFIG.address.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": SITE_CONFIG.coordinates.lat,
        "longitude": SITE_CONFIG.coordinates.lng
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "07:00",
          "closes": "23:00"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pharmacy and Medical Supplies",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Prescription & OTC Medicines"
          },
          {
            "@type": "OfferCatalog",
            "name": "Surgical Supplies & Hospital Consumables"
          },
          {
            "@type": "OfferCatalog",
            "name": "Baby Care & Nutrition"
          },
          {
            "@type": "OfferCatalog",
            "name": "Digital Health Diagnostic Monitors"
          }
        ]
      }
    };

    let scriptEl = document.getElementById('jsonld-schema') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'jsonld-schema';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(schemaData);

  }, [fullTitle, metaDesc, canonicalPath, ogImage, schemaType]);

  return null;
}
