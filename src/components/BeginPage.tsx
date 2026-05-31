/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, CornerDownRight, MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '../data';
import { EnquiryFormState } from '../types';

interface BeginPageProps {
  savedQuoteEstimate?: { cups: number; rate: number; total: number } | null;
  clearSavedQuote?: () => void;
}

export default function BeginPage({ savedQuoteEstimate, clearSavedQuote }: BeginPageProps) {
  const [form, setForm] = useState<EnquiryFormState>({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    venue: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Auto-intercept prefill from the interactive Estimator slider
  useEffect(() => {
    if (savedQuoteEstimate) {
      setForm((prev) => ({
        ...prev,
        guestCount: `${savedQuoteEstimate.cups} Cups`,
        message: `Estimator Quote Reference:\n- Poured Target Count: ${savedQuoteEstimate.cups} Cups\n- Price Category Rate: RM ${savedQuoteEstimate.rate} per cup\n- Estimated Base Investment Quote: RM ${savedQuoteEstimate.total.toLocaleString()}\n\nLet us proceed to outline the bespoke menu and floral detailing...`
      }));
    }
  }, [savedQuoteEstimate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate an agency premium response setup
    setTimeout(() => {
      setIsSubmitted(true);
      setSubmitting(false);
      if (clearSavedQuote) clearSavedQuote();
    }, 1500);
  };

  return (
    <div className="w-full pt-32 sm:pt-40">
      <section className="max-w-7xl mx-auto px-6 sm:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Hospitality Address & Information (5 columns) */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32">
            <div className="space-y-4">
              <span className="text-[10px] font-mono-luxury uppercase tracking-[0.4em] text-brand-accent block">
                Bespoke Dialogue
              </span>
              <h1 className="text-4xl sm:text-5xl font-light text-brand-text tracking-wide leading-tight">
                Tell us about the <br />
                atmosphere you’d <br />
                <span className="italic font-serif">like to create.</span>
              </h1>
              <p className="text-sm text-brand-text/70 font-light leading-relaxed max-w-sm">
                Thoughtful hospitality begins with a conversation. Share your plans with us, and we will create a tailored, sensory-rich experience for your occasion.
              </p>
            </div>

            {/* Direct Digital Touchpoints */}
            <div className="space-y-6 pt-6 border-t border-brand-stone/20">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-primary border border-brand-stone/25 rounded-md text-brand-accent">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] uppercase font-mono-luxury tracking-widest text-brand-stone">Chat Instantly</h4>
                  <a
                    href={BRAND_INFO.whatsappLink}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand-text hover:text-brand-accent transition-colors block"
                    id="begin-whatsapp-click"
                  >
                    WhatsApp: {BRAND_INFO.whatsapp}
                  </a>
                  <p className="text-[11px] text-brand-stone font-light">Available for immediate planning reviews</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-primary border border-brand-stone/25 rounded-md text-brand-accent">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] uppercase font-mono-luxury tracking-widest text-brand-stone">Visual Grid</h4>
                  <a
                    href={BRAND_INFO.instagramLink}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand-text hover:text-brand-accent transition-colors block"
                    id="begin-instagram-click"
                  >
                    Instagram: {BRAND_INFO.instagram}
                  </a>
                  <p className="text-[11px] text-brand-stone font-light">Watch our events and daily bakes unfold</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-primary border border-brand-stone/25 rounded-md text-brand-accent">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] uppercase font-mono-luxury tracking-widest text-brand-stone">Physical Studio</h4>
                  <p className="text-xs text-brand-text/80 font-light leading-relaxed">
                    NŌTO Café & Bakery<br />
                    4, Jln SS19/6, SS19<br />
                    47500 Subang Jaya, Selangor, Malaysia
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial citation banner */}
            <div className="bg-brand-paper p-6 border border-brand-stone/20">
              <p className="text-xs italic text-brand-text/70 leading-relaxed font-serif">
                "Specialty coffee is the tool. Ceremonial green tea is the ritual. Artisan baking is the physical detail. Atmosphere remains our absolute highest product."
              </p>
            </div>
          </div>

          {/* Right Column: Premium Inquiry Form (7 columns) */}
          <div className="lg:col-span-7 bg-brand-primary border border-brand-stone/20 p-8 sm:p-12 shadow-sm">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="inquiry-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  id="noto-enquiry-form"
                >
                  <div className="border-b border-brand-stone/35 pb-4 mb-4">
                    <h3 className="text-lg uppercase tracking-[0.15em] font-mono-luxury text-brand-text flex items-center space-x-2">
                      <CornerDownRight className="w-4 h-4 text-brand-accent" />
                      <span>The Enquiry Entry</span>
                    </h3>
                    <p className="text-[11px] text-brand-stone font-light mt-1">Please fill in your event particulars to trigger our planning draft.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono-luxury uppercase tracking-widest text-brand-text block" htmlFor="name">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-secondary border border-brand-stone/20 text-brand-text text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent font-light"
                        placeholder="e.g. Adrienne Lin"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono-luxury uppercase tracking-widest text-brand-text block" htmlFor="phone">
                        Phone Contact *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-secondary border border-brand-stone/20 text-brand-text text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent font-light"
                        placeholder="e.g. +60 12-345 6789"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono-luxury uppercase tracking-widest text-brand-text block" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-secondary border border-brand-stone/20 text-brand-text text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent font-light"
                        placeholder="e.g. adrienne@example.com"
                      />
                    </div>

                    {/* Event Type Dropdown */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono-luxury uppercase tracking-widest text-brand-text block" htmlFor="eventType">
                        Event Nature *
                      </label>
                      <select
                        name="eventType"
                        id="eventType"
                        required
                        value={form.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-secondary border border-brand-stone/20 text-brand-text text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent font-light"
                      >
                        <option value="">Select Event Nature</option>
                        <option value="Wedding Morning">Wedding Morning Slow-Bar</option>
                        <option value="Wedding Reception">Wedding Grand Reception</option>
                        <option value="Product Launch">Bespoke Product Launch</option>
                        <option value="Brand Activation">Corporate Brand Activation</option>
                        <option value="Private Gathering">Boutique Private Gathering</option>
                        <option value="Corporate Meeting">Executive Board Dinner</option>
                        <option value="Custom Experience">Custom Sensory Request</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Event Date */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono-luxury uppercase tracking-widest text-brand-text block" htmlFor="eventDate">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        id="eventDate"
                        required
                        value={form.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-secondary border border-brand-stone/20 text-brand-text text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent font-light"
                      />
                    </div>

                    {/* Guest Count */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono-luxury uppercase tracking-widest text-brand-text block" htmlFor="guestCount">
                        Guest Count / Cups *
                      </label>
                      <input
                        type="text"
                        name="guestCount"
                        id="guestCount"
                        required
                        value={form.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-secondary border border-brand-stone/20 text-brand-text text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent font-light"
                        placeholder="e.g. 120 Guests"
                      />
                    </div>

                    {/* Venue Location */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono-luxury uppercase tracking-widest text-brand-text block" htmlFor="venue">
                        Venue / Area *
                      </label>
                      <input
                        type="text"
                        name="venue"
                        id="venue"
                        required
                        value={form.venue}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-secondary border border-brand-stone/20 text-brand-text text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent font-light"
                        placeholder="e.g. Seputeh, KL"
                      />
                    </div>
                  </div>

                  {/* Message / Atmosphere narrative */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono-luxury uppercase tracking-widest text-brand-text block" htmlFor="message">
                      Tell us about the atmosphere you'd like to create *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-secondary border border-brand-stone/20 text-brand-text text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent font-light"
                      placeholder="e.g. We want to design a serene, woodland glasshouse wedding with double espresso baristas, high-end warm pastries served at twilight..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-brand-text hover:bg-brand-accent text-brand-primary text-xs uppercase tracking-[0.25em] font-semibold transition-luxury cursor-pointer shadow-md flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      id="submit-enquiry-btn"
                    >
                      {submitting ? (
                        <span>Initiating Planning Sequence...</span>
                      ) : (
                        <>
                          <span>Submit Hospitality Enquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-brand-stone text-center mt-3 font-light italic">
                      ✓ No transactional obligations. Our creative director will follow up with design boards within 24 working hours.
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="submission-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center space-y-6"
                  id="submission-success-card"
                >
                  <CheckCircle className="w-16 h-16 text-brand-accent mx-auto stroke-[1]" />
                  <div className="space-y-2">
                    <h3 className="text-3xl font-serif font-light text-brand-text">
                      Inquiry received with intention.
                    </h3>
                    <p className="text-xs uppercase tracking-[0.15em] font-mono-luxury text-brand-accent mt-1">
                      Drafting Sensory boards
                    </p>
                  </div>
                  <p className="text-sm text-brand-text/70 max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <span className="font-semibold">{form.name}</span>. We have captured your target parameters for <span className="italic">{form.eventType}</span> on <span className="font-medium">{form.eventDate}</span> at <span className="font-medium">{form.venue}</span>.
                  </p>
                  <p className="text-xs text-brand-stone font-light max-w-sm mx-auto leading-relaxed">
                    Our Senior Creative Director will review the layout of your location and draft custom menus aligned with your guest count. You will receive an initial consultation email at {form.email} shortly.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 border border-brand-stone/30 text-brand-text hover:border-brand-text text-xs uppercase tracking-[0.2em] font-medium transition-luxury cursor-pointer"
                      id="reset-form-btn"
                    >
                      File Another Enquiry
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>
    </div>
  );
}
