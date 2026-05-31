/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, MapPin, Calendar, Columns } from 'lucide-react';
import { PageId } from '../types';
import { MOMENTS } from '../data';

interface MomentsPageProps {
  setActivePage: (page: PageId) => void;
}

const CATEGORIES = [
  'All',
  'Weddings',
  'Corporate Events',
  'Matcha Experiences',
  'Coffee Rituals',
  'Brand Activations',
  'Private Celebrations'
];

export default function MomentsPage({ setActivePage }: MomentsPageProps) {
  const [activeTab, setActiveTab] = useState('All');

  // Map user tags to portfolio dataset categories
  const matchesCategory = (itemCategory: string, tab: string) => {
    if (tab === 'All') return true;
    if (tab === 'Weddings' && itemCategory === 'Weddings') return true;
    if (tab === 'Corporate Events' && itemCategory === 'Corporate Events') return true;
    if (tab === 'Matcha Experiences' && itemCategory === 'Matcha Experiences') return true;
    if (tab === 'Coffee Rituals' && itemCategory === 'Coffee l') return true; // generic match
    if (tab === 'Brand Activations' && itemCategory === 'Brand Activations') return true;
    if (tab === 'Private Celebrations' && itemCategory === 'Private Celebrations') return true;
    
    // Fallback matches to make sure all items map safely
    if (tab.includes('Matcha') && itemCategory.includes('Matcha')) return true;
    if (tab.includes('Coffee') && itemCategory.includes('Coffee')) return true;
    if (tab.includes('Private') && itemCategory.includes('Private')) return true;
    if (tab.includes('Corporate') && itemCategory.includes('Corporate')) return true;

    return false;
  };

  const filteredMoments = MOMENTS.filter(item => matchesCategory(item.category, activeTab));

  return (
    <div className="w-full pt-32 sm:pt-40">
      {/* Cinematic intro */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 pb-16 border-b border-brand-stone/20">
        <div className="max-w-3xl space-y-6">
          <span className="text-[10px] font-mono-luxury uppercase tracking-[0.4em] text-brand-accent block">
            Visual Registry
          </span>
          <h1 className="text-4xl sm:text-6xl font-light tracking-wide text-brand-text leading-tight">
            Moments worth <span className="italic font-serif">remembering.</span>
          </h1>
          <p className="text-sm sm:text-base text-brand-text/70 font-light leading-relaxed max-w-xl">
            A archival record of warm cups, quiet glances, shared stories, and meticulous hospitality tables across Selangor and Kuala Lumpur.
          </p>
        </div>

        {/* Tab/Filter bar */}
        <div className="mt-12 flex flex-wrap gap-2 border-t border-brand-stone/15 pt-8">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.1em] transition-luxury cursor-pointer focus:outline-none ${
                activeTab === tab
                  ? 'bg-brand-accent text-brand-primary font-medium'
                  : 'bg-brand-secondary text-brand-text/70 border border-brand-stone/20 hover:border-brand-text hover:text-brand-text'
              }`}
              id={`portfolio-tab-${tab.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Editorial Grid Gallery */}
      <section className="bg-brand-secondary py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          {filteredMoments.length === 0 ? (
            <div className="text-center py-24 space-y-4 bg-brand-primary border border-brand-stone/20">
              <Camera className="w-8 h-8 text-brand-stone mx-auto stroke-[1]" />
              <p className="text-sm text-brand-text/70 font-light">No moments currently registered under this filter.</p>
              <button
                onClick={() => setActiveTab('All')}
                className="text-xs uppercase tracking-wider text-brand-accent hover:underline focus:outline-none"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredMoments.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    key={item.id}
                    className="bg-brand-primary border border-brand-stone/20 overflow-hidden flex flex-col justify-between group"
                    id={`moment-card-${item.id}`}
                  >
                    {/* Picture box */}
                    <div className="aspect-[4/3] overflow-hidden bg-brand-secondary relative">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                      />
                      <div className="absolute bottom-3 left-3 bg-brand-primary/90 backdrop-blur-sm px-3 py-1 border border-brand-stone/15">
                        <span className="text-[8px] font-mono-luxury uppercase tracking-widest text-brand-accent">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Context Narrative */}
                    <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-4 text-[10px] font-mono text-brand-stone">
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3 text-brand-accent" />
                            <span>{item.location}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{item.date}</span>
                          </span>
                        </div>
                        <h3 className="text-xl font-light text-brand-text tracking-wide group-hover:text-brand-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-brand-text/60 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-brand-stone/10 mt-auto">
                        <button
                          onClick={() => setActivePage('begin')}
                          className="text-[10px] uppercase font-mono-luxury tracking-widest text-brand-accent hover:text-brand-text transition-colors flex items-center space-x-1 cursor-pointer"
                          id={`moment-inquire-btn-${item.id}`}
                        >
                          <span>Recreate this Atmosphere</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Inspirational Bottom Banner */}
      <section className="bg-brand-paper py-24 border-t border-brand-stone/20">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center space-y-6">
          <span className="text-[10px] font-mono-luxury uppercase tracking-[0.4em] text-brand-accent block">
            Crafting the Album
          </span>
          <h2 className="text-2xl sm:text-4xl font-light text-brand-text tracking-wide">
            Add your event to our registered list of moments
          </h2>
          <p className="text-sm text-brand-text/70 font-light leading-relaxed max-w-xl mx-auto">
            From co-branded packaging for fashion activations in Kuala Lumpur to quiet matcha and pastry bars for Subang Jaya wedding mornings. Let us craft yours.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setActivePage('begin')}
              className="px-8 py-4 bg-brand-text hover:bg-brand-accent text-brand-primary text-xs uppercase tracking-[0.25em] font-medium transition-luxury cursor-pointer"
              id="portfolio-moments-cta"
            >
              Begin Planning
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
