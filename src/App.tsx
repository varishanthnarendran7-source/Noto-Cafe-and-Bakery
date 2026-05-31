/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Instagram, Send, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { PageId } from './types';
import { BRAND_INFO } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import AtmospherePage from './components/AtmospherePage';
import GatheringsPage from './components/GatheringsPage';
import RitualsPage from './components/RitualsPage';
import MomentsPage from './components/MomentsPage';
import HousePage from './components/HousePage';
import BeginPage from './components/BeginPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('atmosphere');
  
  // State to transport computed quotes from Rituals to Begin contacts
  const [savedQuoteEstimate, setSavedQuoteEstimate] = useState<{
    cups: number;
    rate: number;
    total: number;
  } | null>(null);

  const clearSavedQuote = () => setSavedQuoteEstimate(null);

  // Dynamic Page Renderer with beautiful animation blocks
  const renderPage = () => {
    switch (activePage) {
      case 'atmosphere':
        return <AtmospherePage setActivePage={setActivePage} />;
      case 'gatherings':
        return <GatheringsPage setActivePage={setActivePage} />;
      case 'rituals':
        return (
          <RitualsPage
            setActivePage={setActivePage}
            setSavedQuoteEstimate={setSavedQuoteEstimate}
          />
        );
      case 'moments':
        return <MomentsPage setActivePage={setActivePage} />;
      case 'house':
        return <HousePage />;
      case 'begin':
        return (
          <BeginPage
            savedQuoteEstimate={savedQuoteEstimate}
            clearSavedQuote={clearSavedQuote}
          />
        );
      default:
        return <AtmospherePage setActivePage={setActivePage} />;
    }
  };

  const handleMobileStickyClick = () => {
    setActivePage('begin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-secondary text-brand-text flex flex-col justify-between selection:bg-brand-accent/20">
      
      {/* 1. BRAND GLOBAL NAV HEADER */}
      <Header activePage={activePage} setActivePage={setActivePage} />

      {/* 2. CHOREOGRAPHED PAGE CONTAINER CONTROLS */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. GLOBAL HOSPITALITY FOOTER SPREAD */}
      <Footer setActivePage={setActivePage} />

      {/* 4. UTILITY OVERLAY: FLOATING BRAND ACTIONS */}
      <div className="fixed bottom-8 right-6 sm:right-10 z-40 flex flex-col space-y-3.5 items-end">
        {/* Floating WhatsApp Action button */}
        <a
          href={BRAND_INFO.whatsappLink}
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          className="group flex items-center bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:p-4 rounded-full shadow-lg transition-transform hover:scale-105 duration-300"
          title="Inquire instantly on WhatsApp"
          id="floating-whatsapp-trigger"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out font-mono-luxury uppercase tracking-widest text-[9px] font-semibold whitespace-nowrap text-white mr-0 group-hover:mr-2">
            WhatsApp Inquiry
          </span>
          <MessageCircle className="w-5 h-5 fill-white stroke-[1.2]" />
        </a>

        {/* Floating Instagram Action button */}
        <a
          href={BRAND_INFO.instagramLink}
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          className="group flex items-center bg-brand-text hover:bg-brand-accent text-brand-primary p-3.5 sm:p-4 rounded-full shadow-lg transition-transform hover:scale-105 duration-300 border border-brand-stone/30"
          title="Browse our atmospheric stories on Instagram"
          id="floating-instagram-trigger"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out font-mono-luxury uppercase tracking-widest text-[9px] font-semibold whitespace-nowrap text-brand-primary mr-0 group-hover:mr-2">
            Instagram Feed
          </span>
          <Instagram className="w-5 h-5 stroke-[1.2]" />
        </a>
      </div>

      {/* 5. MOBILE STICKY ENQUIRY BAR (Locks on mobile footer when not on 'begin' form page) */}
      <AnimatePresence>
        {activePage !== 'begin' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 w-full z-45 md:hidden bg-brand-primary/95 backdrop-blur-md border-t border-brand-stone/20 p-4 flex items-center justify-between shadow-xl"
            id="mobile-sticky-enquiry-bar"
          >
            <div className="flex flex-col items-start text-left">
              <span className="text-[9px] font-mono-luxury uppercase tracking-[0.2em] text-brand-accent font-semibold flex items-center space-x-1">
                <Sparkles className="w-3 h-3 text-brand-oak fill-brand-oak" />
                <span>NŌTO EVENTS</span>
              </span>
              <p className="text-xs text-brand-text font-light tracking-wide mt-0.5">Shaping luxury gathering atmospheres</p>
            </div>
            
            <button
              onClick={handleMobileStickyClick}
              className="px-5 py-2.5 bg-brand-text hover:bg-brand-accent text-brand-primary text-[10px] uppercase tracking-[0.2em] font-medium transition-luxury cursor-pointer inline-flex items-center space-x-1.5 focus:outline-none"
              id="mobile-sticky-cta-btn"
            >
              <span>Enquire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
