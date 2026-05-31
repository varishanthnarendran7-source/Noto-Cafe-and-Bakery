/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, HelpCircle, ArrowRight, Layers, Calculator, Coffee, CheckCircle } from 'lucide-react';
import { PageId } from '../types';
import { RITUALS } from '../data';

interface RitualsPageProps {
  setActivePage: (page: PageId) => void;
  setSavedQuoteEstimate?: (estimate: { cups: number; rate: number; total: number }) => void;
}

export default function RitualsPage({ setActivePage, setSavedQuoteEstimate }: RitualsPageProps) {
  // Interactive Pricing Calculator State
  const [cupsCount, setCupsCount] = useState<number>(120);

  // Calculate pricing based on volume
  const getPricingTier = (cups: number) => {
    if (cups >= 200) {
      return { rate: 10, tier: '200+ Cups Volume' };
    } else if (cups >= 150) {
      return { rate: 11, tier: '150–199 Cups Volume' };
    } else if (cups >= 100) {
      return { rate: 12, tier: '100–149 Cups Volume' };
    } else {
      return { rate: 13, tier: '50–99 Cups Volume' };
    }
  };

  const { rate, tier } = getPricingTier(cupsCount);
  const totalBasePrice = cupsCount * rate;

  const handleInquireQuote = () => {
    if (setSavedQuoteEstimate) {
      setSavedQuoteEstimate({ cups: cupsCount, rate, total: totalBasePrice });
    }
    setActivePage('begin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full pt-32 sm:pt-40">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 pb-16 border-b border-brand-stone/20">
        <div className="max-w-3xl space-y-6">
          <span className="text-[10px] font-mono-luxury uppercase tracking-[0.4em] text-brand-accent block">
            Sensory Blueprint
          </span>
          <h1 className="text-4xl sm:text-6xl font-light tracking-wide text-brand-text leading-tight animate-fade-in">
            We call them <span className="italic font-serif">rituals,</span> not services.
          </h1>
          <p className="text-sm sm:text-base text-brand-text/70 font-light leading-relaxed max-w-xl">
            A wedding morning, a corporate launch, or a private gallery toast. Each stage of an event requires a specific transition, tempo, and atmosphere.
          </p>
        </div>
      </section>

      {/* Rituals Storyboards */}
      <section className="bg-brand-secondary py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-24 sm:space-y-36">
          {RITUALS.map((ritual, idx) => (
            <div
              key={ritual.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              id={`ritual-row-${ritual.id}`}
            >
              {/* Media Section */}
              <div className="w-full lg:w-1/2 aspect-video lg:aspect-[4/3] overflow-hidden bg-brand-primary border border-brand-stone/20 ring-4 ring-brand-paper">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full bg-cover bg-center cursor-zoom-in"
                  style={{ backgroundImage: `url(${ritual.imageUrl})` }}
                />
              </div>

              {/* Text Context */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-mono-luxury text-brand-accent tracking-[0.15em]">0{idx + 1} //</span>
                  <span className="text-[10px] font-mono-luxury uppercase tracking-[0.3em] text-brand-stone">
                    Experiential Step
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-light text-brand-text tracking-wide leading-tight">
                  The {ritual.title}
                </h2>
                <p className="text-xs sm:text-sm text-brand-accent tracking-wide uppercase font-mono-luxury font-medium border-b border-brand-stone/25 pb-3">
                  {ritual.subtitle}
                </p>
                <p className="text-sm sm:text-base text-brand-text/70 font-light leading-relaxed">
                  {ritual.description}
                </p>

                {/* Conceptual highlight callout */}
                <div className="bg-brand-paper/50 p-5 border-l-2 border-brand-accent/50 space-y-1.5">
                  <p className="text-[10px] font-mono-luxury uppercase tracking-widest text-brand-accent font-semibold flex items-center space-x-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Atmospheric Integration:</span>
                  </p>
                  <p className="text-xs text-brand-text/80 font-light">
                    {ritual.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Pricing Section */}
      <section className="bg-brand-primary py-24 sm:py-32 border-t border-brand-stone/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-mono-luxury uppercase tracking-[0.4em] text-brand-accent block">
              Investment Transparency
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-brand-text tracking-wide">
              An elegant, honest <span className="italic font-serif">pricing structure.</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-text/60 font-light leading-relaxed">
              We charge transparently based on volume. No complex packages or hidden setups. We design custom bars optimized to match your estimated guest timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Real Price Cards Column (5-12 Grid ratio) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-mono-luxury uppercase tracking-[0.2em] text-brand-stone block mb-2">
                Standard Volume Tiers
              </span>
              
              <div className="bg-brand-secondary p-6 border border-brand-stone/20 flex justify-between items-center transition-all hover:translate-x-1" id="tier-card-50-99">
                <div>
                  <h4 className="text-sm font-semibold text-brand-text mb-0.5">50–99 Cups</h4>
                  <p className="text-xs text-brand-text/60 font-light">Perfect for boutique mornings</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-serif font-light text-brand-accent">From RM13</span>
                  <p className="text-[9px] font-mono-luxury text-brand-stone">per cup poured</p>
                </div>
              </div>

              <div className="bg-brand-secondary p-6 border border-brand-stone/20 flex justify-between items-center transition-all hover:translate-x-1" id="tier-card-100-149">
                <div>
                  <h4 className="text-sm font-semibold text-brand-text mb-0.5">100–149 Cups</h4>
                  <p className="text-xs text-brand-text/60 font-light">Ideal for intimate receptions</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-serif font-light text-brand-accent">From RM12</span>
                  <p className="text-[9px] font-mono-luxury text-brand-stone">per cup poured</p>
                </div>
              </div>

              <div className="bg-brand-secondary p-6 border border-brand-stone/20 flex justify-between items-center transition-all hover:translate-x-1" id="tier-card-150-199">
                <div>
                  <h4 className="text-sm font-semibold text-brand-text mb-0.5">150–199 Cups</h4>
                  <p className="text-xs text-brand-text/60 font-light">Great for corporate branding</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-serif font-light text-brand-accent">From RM11</span>
                  <p className="text-[9px] font-mono-luxury text-brand-stone">per cup poured</p>
                </div>
              </div>

              <div className="bg-brand-secondary p-6 border border-brand-stone/20 flex justify-between items-center transition-all hover:translate-x-1" id="tier-card-200">
                <div>
                  <h4 className="text-sm font-semibold text-brand-text mb-0.5">200+ Cups</h4>
                  <p className="text-xs text-brand-text/60 font-light">Suited for grand celebrations</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-serif font-light text-brand-accent">From RM10</span>
                  <p className="text-[9px] font-mono-luxury text-brand-stone">per cup poured</p>
                </div>
              </div>

              <p className="text-[11px] text-brand-stone italic font-light pt-2">
                * All experiences include a fully equipped luxury mobile bar, double-head espresso machinery, ice builders, Marukyu Koyamaen matchas, premium single-origin coffee beans, textured ceramic or branded compostable cup setups, and two polite, trained baristas.
              </p>
            </div>

            {/* Interactive Pricing and Service Calculator (7-12 Grid ratio) */}
            <div className="lg:col-span-7 bg-brand-paper p-8 lg:p-12 border border-brand-stone/40 space-y-8 shadow-sm">
              <div className="flex items-center space-x-3 border-b border-brand-stone/30 pb-4">
                <Calculator className="w-5 h-5 text-brand-accent stroke-[1.25]" />
                <h3 className="text-lg uppercase tracking-[0.15em] font-mono-luxury text-brand-text">
                  Bespoke Interactive Estimator
                </h3>
              </div>

              {/* Slider Input */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-mono-luxury text-brand-text uppercase tracking-widest block">
                    Estimated Cup Count
                  </label>
                  <span className="text-3xl font-serif text-brand-accent font-light italic">
                    {cupsCount} Cups
                  </span>
                </div>

                <div className="relative">
                  <input
                    type="range"
                    min="50"
                    max="350"
                    step="10"
                    value={cupsCount}
                    onChange={(e) => setCupsCount(Number(e.target.value))}
                    className="w-full h-1 bg-brand-stone rounded-lg appearance-none cursor-ew-resize accent-brand-accent"
                    id="calc-range-slider"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-brand-stone/70 pt-2">
                    <span>50 Cups (Min)</span>
                    <span>100</span>
                    <span>150</span>
                    <span>200</span>
                    <span>250</span>
                    <span>300</span>
                    <span>350+ Cups</span>
                  </div>
                </div>
              </div>

              {/* Estimate Calculations display screen */}
              <div className="border border-brand-stone/30 p-6 bg-brand-primary space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-brand-text/70 uppercase font-mono-luxury tracking-widest text-[10px]">Applied Price Tier:</span>
                  <span className="text-brand-text font-serif italic text-sm">{tier}</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-brand-stone/20 pb-3">
                  <span className="text-brand-text/70 uppercase font-mono-luxury tracking-widest text-[10px]">Tier Rate Reference:</span>
                  <span className="text-brand-accent font-medium">RM {rate} per cup</span>
                </div>
                <div className="flex justify-between items-end pt-2">
                  <div>
                    <span className="text-brand-text/70 uppercase font-mono-luxury tracking-widest text-[10px] block">Estimated Base Investment:</span>
                    <span className="text-[11px] text-brand-stone font-light">Custom baristas & travel setup included</span>
                  </div>
                  <span className="text-3xl font-serif text-brand-text font-semibold">
                    RM {totalBasePrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Recommended configurations list based on selection */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-mono-luxury uppercase tracking-widest text-brand-stone">
                  Recommended Setup Architecture:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-brand-text/70">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-brand-oak flex-shrink-0" />
                    <span>{cupsCount >= 150 ? 'Dual espresso baristas' : 'Senior Lead barista'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-brand-oak flex-shrink-0" />
                    <span>Double scale extraction testing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-brand-oak flex-shrink-0" />
                    <span>Marukyu Koyamaen Latte options</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-brand-oak flex-shrink-0" />
                    <span>Bespoke textured print menu card</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleInquireQuote}
                  className="w-full py-4 bg-brand-text hover:bg-brand-accent text-brand-primary text-xs uppercase tracking-[0.25em] font-semibold transition-luxury cursor-pointer shadow-sm flex items-center justify-center space-x-2"
                  id="calc-cta-inquire"
                >
                  <span>Inquire for {cupsCount} Cups Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
