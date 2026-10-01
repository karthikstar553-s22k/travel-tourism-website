import React, { useState } from 'react';
import { Compass, Heart, Menu, X, Globe, PhoneCall } from 'lucide-react';
import { CurrencyCode } from '../types/travel';
import { CURRENCIES } from '../data/travelData';

interface NavbarProps {
  currentCurrency: CurrencyCode;
  onCurrencyChange: (c: CurrencyCode) => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenCustomPlanner: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  wishlistCount,
  onOpenWishlist,
  onOpenCustomPlanner,
  onScrollToSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900/90 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 group-hover:scale-105 transition-all">
              <Compass className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white font-serif-luxury">
                Vagabond & Co.
              </span>
              <p className="text-[11px] uppercase tracking-wider text-amber-400/90 font-medium">
                Travel & Tourism Expeditions
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
            <button 
              onClick={() => handleNavClick('tours')} 
              className="hover:text-amber-400 transition-colors cursor-pointer py-1"
            >
              Curated Expeditions
            </button>
            <button 
              onClick={() => handleNavClick('destinations')} 
              className="hover:text-amber-400 transition-colors cursor-pointer py-1"
            >
              Destinations
            </button>
            <button 
              onClick={onOpenCustomPlanner} 
              className="hover:text-amber-400 transition-colors cursor-pointer py-1"
            >
              Custom Trip Planner
            </button>
            <button 
              onClick={() => handleNavClick('guides')} 
              className="hover:text-amber-400 transition-colors cursor-pointer py-1"
            >
              Travel Insights
            </button>
            <button 
              onClick={() => handleNavClick('reviews')} 
              className="hover:text-amber-400 transition-colors cursor-pointer py-1"
            >
              Stories
            </button>
          </nav>

          {/* Right Action Controls: Currency, Wishlist, Concierge CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Currency selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-700 bg-stone-800/80 text-xs font-medium text-stone-200 hover:border-stone-600 transition-all cursor-pointer"
                title="Change display currency"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>{currentCurrency}</span>
              </button>

              {currencyDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-32 bg-stone-800 border border-stone-700 rounded-xl shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-100"
                  onMouseLeave={() => setCurrencyDropdownOpen(false)}
                >
                  {(Object.keys(CURRENCIES) as CurrencyCode[]).map((cur) => (
                    <button
                      key={cur}
                      type="button"
                      onClick={() => {
                        onCurrencyChange(cur);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                        currentCurrency === cur
                          ? 'bg-amber-500/20 text-amber-300 font-semibold'
                          : 'text-stone-300 hover:bg-stone-700/60'
                      }`}
                    >
                      <span>{CURRENCIES[cur].label}</span>
                      <span className="text-stone-400 text-[10px]">{CURRENCIES[cur].symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Saved Wishlist Trips button */}
            <button
              type="button"
              onClick={onOpenWishlist}
              className="relative p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800 hover:border-stone-700 transition-all cursor-pointer"
              title="Saved Expeditions"
              aria-label="Saved Expeditions"
            >
              <Heart className="w-5 h-5 text-stone-300 group-hover:text-amber-400" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-stone-950 font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Concierge Call / Plan Action */}
            <button
              type="button"
              onClick={onOpenCustomPlanner}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-semibold px-4 py-2 rounded-lg text-xs shadow-lg shadow-amber-950/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Tailor a Journey</span>
            </button>
          </div>

          {/* Mobile menu and wishlist buttons */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={onOpenWishlist}
              className="relative p-2 rounded-lg text-stone-300 hover:bg-stone-800"
              aria-label="View Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-stone-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-300 hover:bg-stone-800 border border-stone-700"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-stone-300">
            <button
              onClick={() => handleNavClick('tours')}
              className="text-left py-2 hover:text-amber-400"
            >
              Curated Expeditions
            </button>
            <button
              onClick={() => handleNavClick('destinations')}
              className="text-left py-2 hover:text-amber-400"
            >
              Destinations
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomPlanner();
              }}
              className="text-left py-2 hover:text-amber-400"
            >
              Custom Trip Planner
            </button>
            <button
              onClick={() => handleNavClick('guides')}
              className="text-left py-2 hover:text-amber-400"
            >
              Travel Insights
            </button>
            <button
              onClick={() => handleNavClick('reviews')}
              className="text-left py-2 hover:text-amber-400"
            >
              Traveler Stories
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left py-2 hover:text-amber-400"
            >
              FAQ & Policies
            </button>
          </div>

          <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-400">Currency:</span>
              <div className="flex gap-1">
                {(['USD', 'EUR', 'GBP', 'AUD'] as CurrencyCode[]).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => onCurrencyChange(cur)}
                    className={`px-2 py-1 text-xs rounded ${
                      currentCurrency === cur
                        ? 'bg-amber-500 text-stone-950 font-bold'
                        : 'bg-stone-800 text-stone-300'
                    }`}
                  >
                    {cur}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomPlanner();
              }}
              className="bg-amber-500 text-stone-950 font-semibold px-4 py-2 rounded-lg text-xs"
            >
              Custom Planner
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
