import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { TourCategory } from '../types/travel';

interface HeroProps {
  onSearch: (filters: {
    query: string;
    category: TourCategory;
    month: string;
    travelers: number;
  }) => void;
  onExploreClick: () => void;
  onPlanCustomTrip: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSearch,
  onExploreClick,
  onPlanCustomTrip,
}) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<TourCategory>('all');
  const [month, setMonth] = useState('any');
  const [travelers, setTravelers] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ query, category, month, travelers });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-between bg-stone-950 text-white overflow-hidden">
      {/* Background Hero Image with atmospheric gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
          alt="Breathtaking mountain valley landscape with mirror alpine lake"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Soft multi-directional overlays for readability & luxury warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-900/40" />
        <div className="absolute inset-0 bg-stone-950/30" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Subtle natural editorial kicker (anti-slop clean text) */}
          <div className="flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Curated Expeditions & High-End Tourism</span>
            <span aria-hidden="true" className="text-amber-500/50">·</span>
            <span>Season 2026/2027</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-serif-luxury leading-[1.1] mb-6">
            Where Raw Wonder Meets Curated Luxury.
          </h1>

          <p className="text-lg sm:text-xl text-stone-200/90 font-light leading-relaxed max-w-2xl mb-8">
            Experience hand-tailored small group expeditions across the Swiss Alps, 
            the dramatic Serengeti migration, secluded Greek Cyclades, and untouched Patagonian fjords.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              type="button"
              onClick={onExploreClick}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-xl shadow-amber-500/10 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Explore 2026 Expeditions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onPlanCustomTrip}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-stone-600 hover:border-amber-400/80 bg-stone-900/60 backdrop-blur-md text-stone-100 hover:text-amber-300 font-medium text-sm transition-all cursor-pointer"
            >
              <span>Design Bespoke Private Tour</span>
            </button>
          </div>
        </div>

        {/* Real-Time Expeditions Search Bar */}
        <div className="w-full max-w-5xl mt-6">
          <form
            onSubmit={handleSubmit}
            className="bg-stone-900/90 backdrop-blur-xl border border-stone-800 rounded-2xl p-4 sm:p-5 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center"
          >
            {/* Input 1: Destination Search */}
            <div className="space-y-1.5 px-2">
              <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Destination or Country</span>
              </label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Switzerland, Italy, Japan..."
                className="w-full bg-stone-800/80 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            {/* Input 2: Expedition Category */}
            <div className="space-y-1.5 px-2">
              <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-amber-400" />
                <span>Travel Style</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as TourCategory)}
                className="w-full bg-stone-800/80 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
              >
                <option value="all">All Styles & Landscapes</option>
                <option value="adventure">Mountain & Adventure Trek</option>
                <option value="nature">Safari & Wildlife</option>
                <option value="cultural">Culture & Heritage</option>
                <option value="coastal">Coastal & Yachting</option>
                <option value="romantic">Romantic & Honeymoon</option>
                <option value="luxury">Wellness & Luxury</option>
              </select>
            </div>

            {/* Input 3: Month of Departure */}
            <div className="space-y-1.5 px-2">
              <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Departure Window</span>
              </label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full bg-stone-800/80 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
              >
                <option value="any">Flexible / Any Month</option>
                <option value="05">May 2026 (Spring)</option>
                <option value="06">June 2026 (Early Summer)</option>
                <option value="07">July 2026 (Peak Summer)</option>
                <option value="08">August 2026 (Summer)</option>
                <option value="09">September 2026 (Autumn)</option>
                <option value="10">October 2026 (Fall Foliage)</option>
              </select>
            </div>

            {/* Input 4: Travelers & Submit Button */}
            <div className="flex items-center gap-3">
              <div className="space-y-1.5 flex-1 px-2">
                <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>Guests</span>
                </label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full bg-stone-800/80 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                >
                  <option value={1}>1 Solo Explorer</option>
                  <option value={2}>2 Travelers (Couple)</option>
                  <option value={3}>3 Travelers</option>
                  <option value={4}>4 Travelers (Family/Small Group)</option>
                  <option value={6}>6+ Private Charter</option>
                </select>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-5 py-2.5 rounded-lg text-sm flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
                  title="Search expeditions"
                >
                  <Search className="w-4 h-4" />
                  <span className="hidden sm:inline">Find</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Trust & Expedition Standards (Zero-pill text format with typographic dots) */}
      <div className="relative z-10 border-t border-stone-800/80 bg-stone-950/70 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-y-3 text-xs sm:text-sm text-stone-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="font-semibold text-white">4.97 / 5</span>
              <span>verified rating from 1,200+ guests</span>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-stone-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Intimate groups: 8–12 guests max</span>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-stone-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>100% Carbon-balanced itineraries</span>
            </div>

            <div className="flex items-center gap-2 text-stone-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>24/7 dedicated personal concierge</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
