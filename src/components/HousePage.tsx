/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, ArrowUpRight, Compass, Sparkles, BookOpen } from 'lucide-react';
import { MENU } from '../data';

// Signature Highlight Items before full menu list
const HOUSE_HIGHLIGHTS = [
  {
    id: 'h-coffee',
    title: 'Signature Coffee',
    category: 'SENSORY COFFEE BAR',
    description: 'Direct-trade beans roasted in small micro-batches. We calibrate extraction factors multiple times a day to guarantee the exact tasting notes of dark chocolate and stone fruit.',
    imageUrl: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'h-matcha',
    title: 'Ceremonial Matcha',
    category: '京都宇治 • MARUKYU KOYAMAEN',
    description: 'Imported directly from Uji, Kyoto. Whiskeyed using traditional bamboo Chasen under precise water temperatures to release the purest creamy green notes and full umami.',
    imageUrl: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'h-viennoiserie',
    title: 'Artisan Viennoiserie',
    category: 'ORGANIC BAKERY SHELVES',
    description: 'Formed at dawn using imported French butter and a 36-hour slow fermentation technique. Warm, crisp, structured layers that shatter softly upon bite.',
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'h-desserts',
    title: 'Seasonal Desserts',
    category: 'PREMIUM CONFECTIONERY',
    description: 'A quiet marriage of local tropical fruits and classical Japanese baking styles. Perfect strawberry matcha cream tarts and wood-smoked hojicha basque cakes.',
    imageUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800'
  }
];

export default function HousePage() {
  const [activeMenuTab, setActiveMenuTab] = useState<string>('All');

  const menuCategories = ['All', ...MENU.map(cat => cat.title.split(' ')[0])];

  return (
    <div className="w-full pt-32 sm:pt-40">
      {/* 1. KINFOLK ARCHITECTURAL BANNER */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 pb-16 border-b border-brand-stone/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-2 text-brand-accent">
              <Compass className="w-4 h-4 stroke-[1.25]" />
              <span className="text-[10px] font-mono-luxury uppercase tracking-[0.3em]">The Sanctuary // SS19 Subang Jaya</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-light tracking-wide text-brand-text leading-tight">
              The place where hospitality is practiced <br />
              <span className="italic font-serif">every day.</span>
            </h1>
            <p className="text-sm sm:text-base text-brand-text/70 font-light leading-relaxed max-w-xl">
              The House is where recipes are refined, ideas are explored, and hospitality is practiced daily. Everything that we serve at weddings, corporate launches, and private gatherings begins here.
            </p>

            {/* Address and Working Hours Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-brand-stone/15">
              <div className="space-y-2">
                <p className="text-[10px] font-mono-luxury text-brand-accent tracking-widest uppercase flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-oak" />
                  <span>The Location</span>
                </p>
                <p className="text-xs text-brand-text/80 font-light leading-relaxed">
                  NŌTO Café & Bakery<br />
                  4, Jln SS19/6, SS19<br />
                  47500 Subang Jaya, Selangor, Malaysia
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-mono-luxury text-brand-accent tracking-widest uppercase flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-oak" />
                  <span>The Operating Hours</span>
                </p>
                <p className="text-xs text-brand-text/80 font-light leading-relaxed">
                  Monday – Sunday: 8:00 AM – 6:00 PM<br />
                  <span className="text-brand-accent italic">(Baked fresh daily until sold out)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-[350px] lg:h-[450px] overflow-hidden bg-brand-secondary border border-brand-stone/30">
            <div
              className="w-full h-full bg-cover bg-center transition-all hover:scale-103 duration-700 cursor-crosshair"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200')` }}
            />
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE OFFERINGS HIGHLIGHT SECTION */}
      <section className="bg-brand-secondary py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-mono-luxury uppercase tracking-[0.3em] text-brand-accent">
              Daily Offerings
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-brand-text tracking-wide">
              Crafted with care. <br /><span className="italic font-serif">Presented with intention.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOUSE_HIGHLIGHTS.map((h) => (
              <div
                key={h.id}
                className="bg-brand-primary border border-brand-stone/20 overflow-hidden flex flex-col justify-between group h-full"
                id={`house-highlight-${h.id}`}
              >
                <div className="aspect-square overflow-hidden bg-brand-secondary relative">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${h.imageUrl})` }}
                  />
                  <div className="absolute top-3 left-3 bg-brand-primary/90 px-2.5 py-1 border border-brand-stone/15">
                    <span className="text-[8px] font-mono-luxury uppercase tracking-widest text-brand-accent">
                      {h.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-light text-brand-text tracking-wide group-hover:text-brand-accent transition-colors">
                      {h.title}
                    </h3>
                    <p className="text-xs text-brand-text/60 font-light leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COFFEEHOUSE PRINTED MENU SPREAD */}
      <section className="bg-brand-primary py-24 sm:py-32 border-t border-brand-stone/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          {/* Header layout */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-brand-stone/30 pb-8 mb-12">
            <div className="space-y-3 mb-6 md:mb-0">
              <span className="text-[10px] font-mono-luxury uppercase tracking-[0.4em] text-brand-accent block">
                The House Catalogue
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-brand-text tracking-wide flex items-center space-x-3">
                <BookOpen className="w-6 sm:w-8 h-6 sm:h-8 stroke-[1.25] text-brand-accent" />
                <span>The Café Menu</span>
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm text-brand-text/60 font-light max-w-sm space-y-1">
              <span>Prices listed are in RM (Ringgit Malaysia). All items are baked, brewed, and plated strictly using fresh daily seasonal batches.</span>
            </p>
          </div>

          {/* Elegant menu grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {MENU.map((category, catIdx) => (
              <div
                key={category.title}
                className="space-y-6"
                id={`menu-cat-${category.title.split(' ')[0].toLowerCase()}`}
              >
                {/* Category Title Header */}
                <div className="border-b border-brand-stone/25 pb-3 flex items-baseline justify-between">
                  <h3 className="text-lg uppercase tracking-[0.25em] text-brand-text font-serif">
                    {category.title}
                  </h3>
                  <span className="text-[10px] font-mono-luxury text-brand-stone font-light select-none">
                    SECTION {catIdx + 1}
                  </span>
                </div>

                {/* Categories Items list */}
                <div className="space-y-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex flex-col space-y-1"
                      id={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-sm font-semibold text-brand-text group-hover:text-brand-accent transition-colors">
                            {item.name}
                          </h4>
                          {item.nameJa && (
                            <span className="text-[10px] text-brand-stone font-light select-none font-sans bg-brand-secondary px-1.5 py-0.5 rounded">
                              {item.nameJa}
                            </span>
                          )}
                        </div>
                        <span className="h-[1px] bg-brand-stone/20 flex-grow mx-4 border-dashed" />
                        <span className="text-sm font-serif font-medium text-brand-text">
                          {item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-[11px] sm:text-xs text-brand-text/60 font-light max-w-md leading-relaxed italic">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
