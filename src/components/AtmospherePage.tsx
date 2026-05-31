/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, ArrowUpRight, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { SIGNATURE_EXPERIENCES, TESTIMONIALS, PROCESS_STEPS } from '../data';

interface AtmospherePageProps {
  setActivePage: (page: PageId) => void;
}

// Curated cinematic visuals for the hero cross-fade
const HERO_BACKGROUNDS = [
  {
    url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=2000',
    caption: 'Thoughtful setups for memorable celebrations'
  },
  {
    url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=2000',
    caption: 'The ancient art of stone-ground ceremonial matcha'
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000',
    caption: 'Conversations taking flight over warm porcelain'
  }
];

export default function AtmospherePage({ setActivePage }: AtmospherePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Looping background cross-fade for a cinematic experience
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-text">
        {/* Background Visuals Crossfade */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.55, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${HERO_BACKGROUNDS[currentSlide].url})` }}
            />
          </AnimatePresence>
          {/* Subtle vignette gradient to preserve text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-text/90 via-brand-text/30 to-brand-text/50 z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-12 text-center text-brand-primary flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center space-x-2 mb-6"
          >
            <span className="w-8 h-[1px] bg-brand-accent/60" />
            <span className="text-[10px] sm:text-xs font-mono-luxury tracking-[0.4em] uppercase text-brand-stone">
              NŌTO Hospitality Studio
            </span>
            <span className="w-8 h-[1px] bg-brand-accent/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-light tracking-wide leading-[1.15] mb-8"
          >
            Hospitality that shapes<br />
            <span className="italic font-serif">the atmosphere.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-lg text-brand-secondary/80 max-w-2xl font-light leading-relaxed mb-12 tracking-wide"
          >
            Specialty coffee, ceremonial matcha and thoughtful hospitality experiences for weddings, private gatherings, corporate events and memorable occasions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto"
          >
            <button
              onClick={() => setActivePage('begin')}
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-oak text-brand-primary text-xs uppercase tracking-[0.25em] font-medium transition-luxury cursor-pointer shadow-md"
              id="hero-cta-quote"
            >
              Get a Quote
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('signature-experiences-anchor');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-primary/25 hover:border-brand-primary hover:bg-brand-primary/5 text-brand-primary text-xs uppercase tracking-[0.25em] font-medium transition-luxury cursor-pointer"
              id="hero-cta-moments"
            >
              View Experiences
            </button>
          </motion.div>
        </div>

        {/* Floating Indicator of current slide description */}
        <div className="absolute bottom-8 left-6 sm:left-12 z-20 hidden sm:flex items-center space-x-3 text-brand-stone/60 select-none">
          <span className="text-[10px] font-mono-luxury uppercase tracking-wider">
            0{currentSlide + 1}
          </span>
          <span className="w-10 h-[1px] bg-brand-stone/20" />
          <span className="text-xs font-light">
            {HERO_BACKGROUNDS[currentSlide].caption}
          </span>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="bg-brand-secondary py-28 sm:py-36 border-b border-brand-stone/20">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center space-y-8">
          <div className="inline-flex items-center justify-center space-x-2 text-brand-accent">
            <Sparkles className="w-4 h-4 stroke-[1.25]" />
            <span className="text-[10px] font-mono-luxury uppercase tracking-[0.3em]">Our Manifesto</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-brand-text tracking-wide leading-tight">
            Atmosphere is the detail<br />
            <span className="italic">people remember.</span>
          </h2>
          <div className="w-12 h-[1px] bg-brand-accent/40 mx-auto" />
          <p className="text-base sm:text-xl text-brand-text/80 font-light leading-relaxed max-w-2xl mx-auto italic">
            "Most people remember how a gathering felt long after they've forgotten what was served."
          </p>
          <p className="text-sm sm:text-base text-brand-text/70 font-light leading-relaxed max-w-2xl mx-auto">
            At NŌTO, every coffee poured, every pastry baked and every interaction delivered exists to create an atmosphere guests carry home with them. We treat food and drink not as products, but as tactile cues that invite comfort and foster connection.
          </p>
        </div>
      </section>

      {/* 3. SIGNATURE EXPERIENCES (Large Alternating Editorial Panels) */}
      <section id="signature-experiences-anchor" className="bg-brand-primary py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="mb-20 text-center sm:text-left">
            <span className="text-[10px] font-mono-luxury tracking-[0.4em] uppercase text-brand-accent block mb-2">
              Sensory Occasions
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-brand-text tracking-wide">
              Signature Chapters of the <span className="italic font-serif">Daily Craft</span>
            </h2>
          </div>

          <div className="space-y-24 sm:space-y-36">
            {SIGNATURE_EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                id={`signature-${exp.id}`}
              >
                {/* Visual Area */}
                <div className="w-full md:w-1/2 overflow-hidden aspect-[4/3] bg-brand-secondary ring-1 ring-brand-stone/15">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full bg-cover bg-center cursor-crosshair"
                    style={{ backgroundImage: `url(${exp.imageUrl})` }}
                  />
                </div>

                {/* Content Area */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-brand-accent">0{idx + 1}</span>
                    <span className="w-6 h-[1px] bg-brand-stone/35" />
                    <span className="text-[10px] font-mono-luxury uppercase tracking-widest text-brand-stone">
                      Design Narrative
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-light text-brand-text tracking-wide">
                    The {exp.title} Interaction
                  </h3>
                  <p className="text-sm sm:text-base text-brand-text/70 font-light leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setActivePage('rituals')}
                      className="group flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-brand-accent hover:text-brand-text transition-colors duration-300 font-medium cursor-pointer"
                      id={`sig-btn-${exp.id}`}
                    >
                      <span>Explore Rituals</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION (Minimal and elegant, focusing on emotional impact) */}
      <section className="bg-brand-secondary py-24 sm:py-32 border-y border-brand-stone/20">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono-luxury uppercase tracking-[0.3em] text-brand-accent block mb-2">
              Shared Moments
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-brand-text tracking-wide font-serif">
              What stays in the heart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-brand-primary p-8 sm:p-10 border border-brand-stone/15 flex flex-col justify-between space-y-8"
                id={`testimonial-${idx}`}
              >
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-brand-oak fill-brand-oak" />
                    ))}
                  </div>
                  <p className="text-sm text-brand-text/80 font-light leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                <div>
                  <div className="w-8 h-[1px] bg-brand-accent/40 mb-3" />
                  <p className="text-xs uppercase tracking-[0.15em] font-mono-luxury text-brand-text">
                    {t.author}
                  </p>
                  <p className="text-[11px] text-brand-accent font-light mt-0.5">
                    {t.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDIVIDUAL PROCESS TRACKER */}
      <section className="bg-brand-primary py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-[10px] font-mono-luxury uppercase tracking-[0.3em] text-brand-accent">
              The Choreography
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-brand-text tracking-wide">
              How we work together
            </h2>
            <p className="text-xs sm:text-sm text-brand-text/60 font-light leading-relaxed">
              We take care of every detail, from corporate boardroom setups to grand wedding glasshouses, matching the precise speed and etiquette your guests deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-4 divide-y md:divide-y-0 md:divide-x divide-brand-stone/20">
            {PROCESS_STEPS.map((p) => (
              <div key={p.step} className="pt-8 md:pt-0 md:px-6 space-y-4" id={`process-step-${p.step}`}>
                <span className="text-3xl sm:text-4xl font-serif text-brand-accent/30 font-light italic block">
                  {p.step}
                </span>
                <h3 className="text-lg font-light text-brand-text tracking-wide">
                  {p.title}
                </h3>
                <p className="text-xs text-brand-text/60 font-light leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA BANNER */}
      <section className="relative bg-brand-paper py-28 sm:py-36 border-t border-brand-stone/30 overflow-hidden">
        {/* Subtle decorative mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#D8D0C4_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 text-center space-y-8">
          <span className="text-[10px] font-mono-luxury uppercase tracking-[0.3em] text-brand-accent">
            Inquire Today
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-wide text-brand-text leading-tight">
            Every gathering deserves moments<br />
            <span className="italic font-serif">worth remembering.</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-text/70 max-w-2xl mx-auto font-light leading-relaxed">
            Thoughtful hospitality begins with a conversation. Share your plans with us, and we will craft a bespoke specialty beverage, hand-baked pastry, and aesthetic service experience tailored precisely for your venue.
          </p>
          <div className="pt-6">
            <button
              onClick={() => setActivePage('begin')}
              className="px-10 py-5 bg-brand-text hover:bg-brand-accent text-brand-primary text-xs uppercase tracking-[0.3em] font-medium transition-luxury cursor-pointer shadow-md inline-flex items-center space-x-3 group"
              id="fcta-begin-btn"
            >
              <span>Begin a Conversation</span>
              <ArrowUpRight className="w-4 h-4 text-brand-primary/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
