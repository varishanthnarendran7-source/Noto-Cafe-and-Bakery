/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, Heart } from 'lucide-react';
import { BRAND_INFO } from '../data';
import { PageId } from '../types';

interface FooterProps {
  setActivePage: (page: PageId) => void;
}

const SEO_KEYWORDS = [
  'Luxury Hospitality Malaysia',
  'Coffee Catering Malaysia',
  'Matcha Catering Malaysia',
  'Wedding Coffee Bar Malaysia',
  'Wedding Matcha Bar Malaysia',
  'Corporate Coffee Catering Malaysia',
  'Luxury Event Hospitality Malaysia',
  'Private Event Hospitality Malaysia',
  'Subang Jaya Café',
  'NŌTO Café & Bakery'
];

export default function Footer({ setActivePage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-primary border-t border-brand-stone/30 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <button
              onClick={() => handleNavClick('atmosphere')}
              className="group flex flex-col items-start cursor-pointer text-left focus:outline-none"
              id="footer-logo-btn"
            >
              <span className="text-xl sm:text-2xl font-serif text-brand-text tracking-[0.2em] font-light transition-colors">
                NŌTO
              </span>
              <span className="text-[8px] font-mono-luxury uppercase tracking-[0.3em] text-brand-accent group-hover:text-brand-oak transition-colors duration-300 -mt-0.5">
                HOSPITALITY STUDIO
              </span>
            </button>
            <p className="text-sm text-brand-text/70 max-w-sm font-light leading-relaxed">
              A modern hospitality studio shaping the atmosphere of weddings, brand activations, and private gatherings through the art of artisan coffee and ceremonial matcha.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono-luxury uppercase tracking-[0.2em] text-brand-accent">
              Chapters
            </h4>
            <ul className="space-y-2 text-sm text-brand-text/70 font-light">
              <li>
                <button
                  onClick={() => handleNavClick('atmosphere')}
                  className="hover:text-brand-accent transition-colors"
                  id="footer-nav-atmosphere"
                >
                  Atmosphere (Home)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('gatherings')}
                  className="hover:text-brand-accent transition-colors"
                  id="footer-nav-gatherings"
                >
                  Gatherings (Bespoke)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('rituals')}
                  className="hover:text-brand-accent transition-colors"
                  id="footer-nav-rituals"
                >
                  Rituals & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('moments')}
                  className="hover:text-brand-accent transition-colors"
                  id="footer-nav-moments"
                >
                  Moments (Portfolio)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('house')}
                  className="hover:text-brand-accent transition-colors"
                  id="footer-nav-house"
                >
                  The House (Café)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('begin')}
                  className="hover:text-brand-accent transition-colors"
                  id="footer-nav-begin"
                >
                  Begin (Inquire)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact / Connection Column */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono-luxury uppercase tracking-[0.2em] text-brand-accent">
              Connect
            </h4>
            <div className="space-y-3 text-sm text-brand-text/70 font-light">
              <p className="leading-relaxed">
                {BRAND_INFO.address.line1}<br />
                {BRAND_INFO.address.line2}, {BRAND_INFO.address.city}<br />
                {BRAND_INFO.address.state}, Malaysia
              </p>
              <div className="pt-2 space-y-2">
                <a
                  href={BRAND_INFO.whatsappLink}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 hover:text-brand-accent transition-colors"
                  id="footer-whatsapp-link"
                >
                  <span>WhatsApp: {BRAND_INFO.whatsapp}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={BRAND_INFO.instagramLink}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 hover:text-brand-accent transition-colors"
                  id="footer-instagram-link"
                >
                  <span>Instagram: {BRAND_INFO.instagram}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant SEO Keywords Row as minimal editorial tag list */}
        <div className="border-t border-brand-stone/20 py-8">
          <p className="text-[10px] font-mono-luxury uppercase tracking-[0.2em] text-brand-stone mb-4">
            Aesthetic Search Registry
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {SEO_KEYWORDS.map((kw, i) => (
              <span
                key={i}
                className="text-[11px] text-brand-stone hover:text-brand-accent font-light cursor-default transition-colors duration-200"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Real Estate Signature Line */}
        <div className="border-t border-brand-stone/20 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-stone font-light space-y-4 sm:space-y-0">
          <p>© {currentYear} {BRAND_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center space-x-1">
            <span>Atmosphere First, Coffee Follows. Crafted with</span>
            <Heart className="w-3 h-3 text-brand-accent fill-brand-accent" />
            <span>in Selangor, Malaysia.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
