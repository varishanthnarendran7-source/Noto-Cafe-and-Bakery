/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Users, Trophy, Coffee, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { STORIES } from '../data';

interface GatheringsPageProps {
  setActivePage: (page: PageId) => void;
}

const CATEGORIES = ['All Gatherings', 'Weddings', 'Brand Activations', 'Private', 'Corporate'];

export default function GatheringsPage({ setActivePage }: GatheringsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Gatherings');

  const filteredStories = selectedCategory === 'All Gatherings'
    ? STORIES
    : STORIES.filter(story => story.category === selectedCategory);

  return (
    <div className="w-full pt-32 sm:pt-40">
      {/* Editorial Intro Banner */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 pb-16 border-b border-brand-stone/20">
        <div className="max-w-3xl space-y-6">
          <span className="text-[10px] font-mono-luxury uppercase tracking-[0.4em] text-brand-accent block">
            Core Typologies
          </span>
          <h1 className="text-4xl sm:text-6xl font-light tracking-wide text-brand-text leading-tight">
            Events shaped by bespoke <span className="italic font-serif">hospitality.</span>
          </h1>
          <p className="text-sm sm:text-base text-brand-text/70 font-light leading-relaxed max-w-xl">
            We adapt our footprint, brewing styles, baking schedule, and service choreography to matching the distinct volume and energy of your gathering.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="mt-12 flex flex-wrap gap-2 sm:gap-4 border-t border-brand-stone/15 pt-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-luxury cursor-pointer focus:outline-none ${
                selectedCategory === cat
                  ? 'bg-brand-text text-brand-primary font-medium'
                  : 'bg-brand-primary text-brand-text/70 border border-brand-stone/20 hover:border-brand-text hover:text-brand-text'
              }`}
              id={`cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Cinematic Editorial Chapters */}
      <section className="bg-brand-secondary py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-32">
          {filteredStories.map((story, index) => (
            <div
              key={story.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              id={`gathering-chapter-${story.id}`}
            >
              {/* Media Block */}
              <div className="w-full lg:w-1/2 aspect-[3/2] overflow-hidden bg-brand-primary border border-brand-stone/20 group relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${story.imageUrl})` }}
                />
                <div className="absolute top-4 left-4 bg-brand-primary/90 backdrop-blur-sm px-4 py-1.5 border border-brand-stone/20">
                  <span className="text-[9px] font-mono-luxury uppercase tracking-widest text-brand-accent">
                    {story.category}
                  </span>
                </div>
              </div>

              {/* Text Block */}
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="text-[11px] font-mono-luxury text-brand-stone uppercase tracking-widest block">
                  Chapter 0{index + 1}
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-brand-text tracking-wide leading-tight">
                  {story.title}
                </h2>
                <p className="text-sm tracking-[0.05em] text-brand-accent italic font-serif">
                  {story.subtitle}
                </p>
                <div className="h-[1px] bg-brand-stone/30 w-16" />
                <p className="text-sm sm:text-base text-brand-text/80 font-light leading-relaxed">
                  {story.intro}
                </p>

                {/* Structured Features Bullet list */}
                <div className="space-y-3 pt-2">
                  <p className="text-[10px] font-mono-luxury uppercase tracking-widest text-brand-accent font-medium">
                    Signature Details:
                  </p>
                  <ul className="grid grid-cols-1 gap-2.5 text-xs text-brand-text/70 font-light">
                    {story.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-oak mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setActivePage('begin')}
                    className="px-6 py-3.5 bg-brand-primary hover:bg-brand-text hover:text-brand-primary text-brand-text text-[10px] uppercase tracking-[0.2em] font-medium border border-brand-stone/40 hover:border-brand-text transition-luxury cursor-pointer inline-flex items-center space-x-2 group focus:outline-none"
                    id={`gathering-btn-${story.id}`}
                  >
                    <span>Inquire for {story.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-accent group-hover:text-brand-primary transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Craft CTA Section */}
      <section className="bg-brand-primary py-24 border-t border-brand-stone/20">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 text-center space-y-6">
          <Calendar className="w-6 h-6 stroke-[1.25] text-brand-accent mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-light text-brand-text tracking-wide">
            Looking for a custom experience?
          </h2>
          <p className="text-sm text-brand-text/60 font-light max-w-xl mx-auto leading-relaxed">
            Our creative directors work alongside your event coordinators to build highly customized menus, bar configurations, and custom chocolate molds matching your brand layout.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setActivePage('begin')}
              className="px-8 py-4 bg-brand-text hover:bg-brand-accent text-brand-primary text-xs uppercase tracking-[0.25em] font-medium transition-luxury cursor-pointer"
              id="gatherings-bottom-cta"
            >
              Consult Creative Director
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
