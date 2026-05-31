/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Instagram } from 'lucide-react';
import { PageId } from '../types';
import { BRAND_INFO } from '../data';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'atmosphere', label: 'Atmosphere' },
  { id: 'gatherings', label: 'Gatherings' },
  { id: 'rituals', label: 'Rituals' },
  { id: 'moments', label: 'Moments' },
  { id: 'house', label: 'The House' },
  { id: 'begin', label: 'Begin' }
];

export default function Header({ activePage, setActivePage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-luxury ${
          scrolled
            ? 'bg-brand-secondary/95 backdrop-blur-md border-b border-brand-stone/40 py-3 shadow-sm'
            : 'bg-brand-secondary/45 border-b border-brand-stone/20 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Logo Brand Emblem */}
          <button
            onClick={() => handleNavClick('atmosphere')}
            className="group flex flex-col items-start cursor-pointer text-left focus:outline-none"
            id="brand-logo-btn"
          >
            <span className="text-xl sm:text-2xl font-serif text-brand-text tracking-[0.2em] font-light transition-colors duration-300">
              NŌTO
            </span>
            <span className="text-[8px] font-mono-luxury uppercase tracking-[0.3em] text-brand-accent group-hover:text-brand-oak transition-colors duration-300 -mt-0.5">
              HOSPITALITY STUDIO
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 text-[11px] uppercase tracking-[0.15em] cursor-pointer focus:outline-none transition-luxury ${
                  activePage === item.id
                    ? 'text-brand-text opacity-100 font-medium'
                    : 'text-brand-text/60 hover:opacity-100 hover:text-brand-text'
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
                {activePage === item.id && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-brand-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href={BRAND_INFO.instagramLink}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="text-brand-text/60 hover:text-brand-accent transition-colors duration-300"
              title="Follow our space on Instagram"
              id="instagram-nav-btn"
            >
              <Instagram className="w-4 h-4 stroke-[1.25]" />
            </a>
            <button
              onClick={() => handleNavClick('begin')}
              className="px-6 py-2 border border-brand-text text-[10px] uppercase tracking-[0.2em] hover:bg-brand-text hover:text-brand-primary transition-luxury focus:outline-none cursor-pointer"
              id="begin-nav-btn"
            >
              Begin
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center space-x-4">
            <a
              href={BRAND_INFO.instagramLink}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="text-brand-text/70 hover:text-brand-accent transition-colors"
              id="instagram-nav-btn-mobile"
            >
              <Instagram className="w-5 h-5 stroke-[1.25]" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-text hover:text-brand-accent transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6 stroke-[1.25]" /> : <Menu className="w-6 h-6 stroke-[1.25]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-brand-secondary/98 z-40 pt-28 px-8 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="flex flex-col space-y-8 mt-4">
              <span className="text-[10px] font-mono-luxury uppercase tracking-[0.4em] text-brand-stone border-b border-brand-stone/20 pb-2">
                Brand Chapters
              </span>
              <nav className="flex flex-col space-y-6">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleNavClick(item.id)}
                    className="flex items-center justify-between text-left cursor-pointer focus:outline-none text-2xl font-serif text-brand-text group"
                    id={`mobile-nav-${item.id}`}
                  >
                    <span className={activePage === item.id ? 'text-brand-accent font-medium italic' : ''}>
                      {item.label}
                    </span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 text-brand-accent transition-all animate-pulse" />
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Mobile overlay footer */}
            <div className="flex flex-col space-y-6">
              <div className="border-t border-brand-stone/20 pt-6">
                <p className="text-[11px] font-mono-luxury tracking-[0.1em] text-brand-stone uppercase mb-2">
                  Hospitality Studio
                </p>
                <p className="text-xs text-brand-text/70 font-light leading-relaxed">
                  {BRAND_INFO.address.line1}, {BRAND_INFO.address.line2}<br />
                  {BRAND_INFO.address.city}, {BRAND_INFO.address.state}, Malaysia
                </p>
              </div>
              
              <button
                onClick={() => handleNavClick('begin')}
                className="w-full py-4 bg-brand-text hover:bg-brand-accent text-brand-primary text-xs uppercase tracking-[0.2em] font-medium transition-luxury text-center"
                id="mobile-nav-cta"
              >
                Inquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
