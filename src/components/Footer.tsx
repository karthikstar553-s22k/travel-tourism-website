import React, { useState } from 'react';
import { Compass, Mail, Phone, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (id: string) => void;
  onOpenCustomPlanner: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToSection,
  onOpenCustomPlanner,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Newsletter Lead Magnet */}
        <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-8 sm:p-10 mb-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
              The Expedition Journal
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
              Receive the 2026 Private Itinerary Atlas
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-2 leading-relaxed">
              Curated seasonal departure guides, secret alpine routes, and priority reservation windows 
              delivered once monthly. No promotional clutter.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-4 py-3 rounded-xl">
                <CheckCircle className="w-4 h-4" />
                <span>Welcome to the circle! Check your inbox for the Itinerary Atlas.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="bg-stone-950 border border-stone-700 rounded-xl px-4 py-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 sm:w-72"
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-3 rounded-xl text-xs transition-colors shrink-0 cursor-pointer"
                >
                  Join Journal
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Navigation & Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800 text-xs">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Compass className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-lg font-bold font-serif-luxury text-white">
                Vagabond & Co.
              </span>
            </div>

            <p className="text-stone-400 leading-relaxed text-[11px]">
              Specialists in bespoke world exploration, luxury small-group departures, and restorative nature expeditions.
            </p>

            <div className="space-y-1.5 text-stone-400 text-[11px]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>45 Rockefeller Plaza, New York, NY 10111</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>+1 (800) 555-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>concierge@vagabondtours.com</span>
              </div>
            </div>
          </div>

          {/* Expeditions by Region */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Destinations
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><button onClick={() => onScrollToSection('tours')} className="hover:text-amber-400 cursor-pointer">Swiss Alpine Glaciers</button></li>
              <li><button onClick={() => onScrollToSection('tours')} className="hover:text-amber-400 cursor-pointer">Italian Amalfi & Capri</button></li>
              <li><button onClick={() => onScrollToSection('tours')} className="hover:text-amber-400 cursor-pointer">Tanzania Serengeti Migration</button></li>
              <li><button onClick={() => onScrollToSection('tours')} className="hover:text-amber-400 cursor-pointer">Kyoto & Japanese Ryokans</button></li>
              <li><button onClick={() => onScrollToSection('tours')} className="hover:text-amber-400 cursor-pointer">Patagonian Granite Spire Treks</button></li>
              <li><button onClick={() => onScrollToSection('tours')} className="hover:text-amber-400 cursor-pointer">Greek Cyclades Sailing</button></li>
            </ul>
          </div>

          {/* Travel Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Travel Experiences
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><button onClick={onOpenCustomPlanner} className="hover:text-amber-400 cursor-pointer">Bespoke Custom Trip Studio</button></li>
              <li><button onClick={() => onScrollToSection('tours')} className="hover:text-amber-400 cursor-pointer">Small Group Journeys (8–12 Max)</button></li>
              <li><button onClick={() => onScrollToSection('guides')} className="hover:text-amber-400 cursor-pointer">Alpine & Safari Field Guides</button></li>
              <li><button onClick={() => onScrollToSection('reviews')} className="hover:text-amber-400 cursor-pointer">Verified Guest Reviews</button></li>
              <li><button onClick={() => onScrollToSection('faq')} className="hover:text-amber-400 cursor-pointer">Flexible Deposit Policy</button></li>
            </ul>
          </div>

          {/* Certifications & Guarantees */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Assurances & Accreditation
            </h4>
            <div className="space-y-2.5 text-stone-400 text-[11px]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Financial Protection Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>IATA Licensed Travel Operator #94-8210</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Global Sustainable Tourism Council Member</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean quiet copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Vagabond & Co. Travel and Tourism Expeditions. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-stone-300 cursor-pointer">Privacy Charter</span>
            <span>·</span>
            <span className="hover:text-stone-300 cursor-pointer">Booking Terms & Conditions</span>
            <span>·</span>
            <span className="hover:text-stone-300 cursor-pointer">Sustainability Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
