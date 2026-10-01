import React, { useState } from 'react';
import { CurrencyCode } from '../types/travel';
import { formatPrice, calculateCustomQuote } from '../utils/formatters';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Compass, CheckCircle } from 'lucide-react';

interface CustomTripPlannerProps {
  currency: CurrencyCode;
  isOpen: boolean;
  onClose: () => void;
}

const DESTINATION_OPTIONS = [
  'Swiss Alps & Rail',
  'Amalfi Coast & Capri',
  'Kyoto & Tokyo Heritage',
  'Serengeti & Zanzibar Safari',
  'Patagonia Glaciers & Fjords',
  'Greek Cyclades Yachting',
  'Bali & Komodo Islands',
  'Iceland Northern Lights',
  'Norwegian Fjords',
  'Peruvian Andes & Machu Picchu'
];

const INTEREST_TAGS = [
  'Culinary & Wine Masterclasses',
  'High-Altitude Alpine Hiking',
  'Big 5 Wildlife Encounters',
  'Private Yacht Cruising',
  'Ancient History & Architecture',
  'Holistic Spa & Thermal Onsens',
  'Wildlife Photography',
  'Remote Glamping & Eco-Lodges'
];

export const CustomTripPlanner: React.FC<CustomTripPlannerProps> = ({
  currency,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(['Swiss Alps & Rail', 'Amalfi Coast & Capri']);
  const [durationDays, setDurationDays] = useState(10);
  const [travelers, setTravelers] = useState(2);
  const [style, setStyle] = useState<'comfort' | 'luxury' | 'ultra-luxe'>('luxury');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Culinary & Wine Masterclasses',
    'Private Yacht Cruising'
  ]);
  const [departureWindow, setDepartureWindow] = useState('Summer 2026 (June - August)');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleDestination = (dest: string) => {
    if (selectedDestinations.includes(dest)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter(d => d !== dest));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, dest]);
    }
  };

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const estimatedTotalUSD = calculateCustomQuote({
    travelers,
    days: durationDays,
    style,
    destinationsCount: selectedDestinations.length,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white text-stone-900 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden border border-stone-200 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">
                Bespoke Travel Studio
              </span>
              <h3 className="text-base sm:text-lg font-bold font-serif-luxury text-white">
                Design Your Tailor-Made Journey
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Destinations of Interest */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    01. Select Destinations of Interest ({selectedDestinations.length} selected)
                  </label>
                  <span className="text-[11px] text-stone-500">Pick one or combine multiple</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {DESTINATION_OPTIONS.map((dest) => {
                    const isSelected = selectedDestinations.includes(dest);
                    return (
                      <button
                        key={dest}
                        type="button"
                        onClick={() => toggleDestination(dest)}
                        className={`text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'border-amber-600 bg-amber-500/10 font-semibold text-stone-900'
                            : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700'
                        }`}
                      >
                        <span className="truncate mr-1">{dest}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Trip Parameters & Travel Style */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-stone-200">
                {/* Duration Slider / Input */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-stone-900 uppercase tracking-wider">Duration</span>
                    <span className="font-bold text-amber-700">{durationDays} Days</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={24}
                    value={durationDays}
                    onChange={(e) => setDurationDays(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400">
                    <span>5 Days (Getaway)</span>
                    <span>14 Days</span>
                    <span>24 Days (Grand Tour)</span>
                  </div>
                </div>

                {/* Travelers Count */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-stone-900 uppercase tracking-wider">Party Size</span>
                    <span className="font-bold text-amber-700">{travelers} Guests</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={12}
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400">
                    <span>1 Solo</span>
                    <span>2 Couple</span>
                    <span>6+ Private Party</span>
                  </div>
                </div>

                {/* Travel Style */}
                <div className="space-y-2">
                  <span className="font-bold text-stone-900 uppercase tracking-wider text-xs block">
                    Luxury Tier
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { id: 'comfort', label: 'Boutique Comfort (4-Star)' },
                      { id: 'luxury', label: 'Signature Luxury (5-Star)' },
                      { id: 'ultra-luxe', label: 'Ultra-Luxe & Private Estates' },
                    ].map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setStyle(tier.id as any)}
                        className={`text-left px-3 py-1.5 rounded-lg border text-xs transition-all cursor-pointer ${
                          style === tier.id
                            ? 'border-amber-600 bg-amber-500/10 font-bold text-amber-900'
                            : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                        }`}
                      >
                        {tier.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Specific Experiences */}
              <div className="space-y-3 pt-4 border-t border-stone-200">
                <label className="text-xs font-bold text-stone-900 uppercase tracking-wider block">
                  03. Signature Experiences & Passions
                </label>
                <div className="flex flex-wrap gap-2">
                  {INTEREST_TAGS.map((tag) => {
                    const isTagged = selectedInterests.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleInterest(tag)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                          isTagged
                            ? 'bg-stone-900 text-stone-100 border-stone-900 font-medium'
                            : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Live Estimate & Guest Contact */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
                      Estimated Custom Investment
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                        {formatPrice(estimatedTotalUSD, currency)}
                      </span>
                      <span className="text-xs text-stone-500">
                        inclusive for {travelers} guests ({durationDays} days)
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-stone-500 max-w-xs text-left sm:text-right">
                    Includes all private transfers, premier boutique suites, curated experiences & 24/7 personal guide director.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Alistair Finch"
                      className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      placeholder="alistair@domain.com"
                      className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">
                    Additional Notes, Desired Departures or Special Occasions
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Celebrating 25th anniversary, preference for cliffside villas and quiet private wine tastings..."
                    className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Custom Itinerary & Proposal</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold block mb-1">
                  Bespoke Brief Received
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
                  Thank You, {guestName}!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-md mx-auto">
                  Our private travel designers have begun drafting your {durationDays}-day tailor-made expedition across{' '}
                  <strong className="text-stone-900">{selectedDestinations.join(' & ')}</strong>.
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between text-stone-600">
                  <span>Target Duration:</span>
                  <span className="font-semibold text-stone-900">{durationDays} Days</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Travelers:</span>
                  <span className="font-semibold text-stone-900">{travelers} Guests</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Estimated Budget:</span>
                  <span className="font-bold text-stone-900">{formatPrice(estimatedTotalUSD, currency)}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Concierge Follow-up:</span>
                  <span className="font-semibold text-amber-700">Within 24 Hours</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  Close & Continue Exploring
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
