/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { TourPackage, TourCategory, CurrencyCode, BookingSubmission } from './types/travel';
import { TOURS_DATA } from './data/travelData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TourFilters } from './components/TourFilters';
import { TourCard } from './components/TourCard';
import { TourDetailModal } from './components/TourDetailModal';
import { BookingModal } from './components/BookingModal';
import { CustomTripPlanner } from './components/CustomTripPlanner';
import { WishlistDrawer } from './components/WishlistDrawer';
import { TravelGuidesSection } from './components/TravelGuidesSection';
import { TravelerReviewsSection } from './components/TravelerReviewsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MapPin, Globe, Sparkles, Compass } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [wishlistIds, setWishlistIds] = useState<string[]>(['swiss-alps-odyssey', 'amalfi-capri-paradise']);
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [bookingDraft, setBookingDraft] = useState<{
    tour: TourPackage;
    departureDate: string;
    travelers: number;
    roomType: 'standard' | 'deluxe' | 'suite';
    addOnPrivateGuide: boolean;
    addOnTravelInsurance: boolean;
    totalPriceUSD: number;
  } | null>(null);

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCustomPlannerOpen, setIsCustomPlannerOpen] = useState(false);

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<TourCategory>('all');
  const [selectedContinent, setSelectedContinent] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Booking submissions history in state for feedback
  const [recentBookings, setRecentBookings] = useState<BookingSubmission[]>([]);

  // Wishlist toggle handler
  const handleToggleWishlist = (tourId: string) => {
    setWishlistIds((prev) =>
      prev.includes(tourId) ? prev.filter((id) => id !== tourId) : [...prev, tourId]
    );
  };

  const handleClearWishlist = () => {
    setWishlistIds([]);
  };

  // Scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hero search trigger
  const handleHeroSearch = (filters: {
    query: string;
    category: TourCategory;
    month: string;
    travelers: number;
  }) => {
    if (filters.query) setSearchQuery(filters.query);
    if (filters.category) setSelectedCategory(filters.category);
    scrollToSection('tours');
  };

  // Quick Book direct from card
  const handleQuickBook = (tour: TourPackage) => {
    setBookingDraft({
      tour,
      departureDate: tour.departureDates[0] || '2026-06-15',
      travelers: 2,
      roomType: 'standard',
      addOnPrivateGuide: false,
      addOnTravelInsurance: true,
      totalPriceUSD: tour.priceUSD * 2 + (120 * 2),
    });
  };

  const handleBookingConfirmed = (submission: BookingSubmission) => {
    setRecentBookings([submission, ...recentBookings]);
  };

  // Filtered and Sorted Tours
  const filteredTours = useMemo(() => {
    let result = [...TOURS_DATA];

    if (selectedCategory !== 'all') {
      result = result.filter((t) => t.category === selectedCategory);
    }

    if (selectedContinent !== 'All') {
      result = result.filter((t) => t.continent === selectedContinent);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.destination.toLowerCase().includes(q) ||
          t.country.toLowerCase().includes(q) ||
          t.subtitle.toLowerCase().includes(q) ||
          t.highlights.some((h) => h.toLowerCase().includes(q))
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.priceUSD - b.priceUSD);
        break;
      case 'price-high':
        result.sort((a, b) => b.priceUSD - a.priceUSD);
        break;
      case 'duration':
        result.sort((a, b) => b.durationDays - a.durationDays);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'featured' maintains default curated order
        break;
    }

    return result;
  }, [selectedCategory, selectedContinent, searchQuery, sortBy]);

  // Wishlisted tour objects
  const wishlistedTours = useMemo(() => {
    return TOURS_DATA.filter((t) => wishlistIds.includes(t.id));
  }, [wishlistIds]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-500/20 selection:text-amber-900 flex flex-col justify-between">
      {/* Navigation */}
      <Navbar
        currentCurrency={currency}
        onCurrencyChange={setCurrency}
        wishlistCount={wishlistIds.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCustomPlanner={() => setIsCustomPlannerOpen(true)}
        onScrollToSection={scrollToSection}
      />

      <main className="flex-1">
        {/* Hero Banner with Integrated Search */}
        <Hero
          onSearch={handleHeroSearch}
          onExploreClick={() => scrollToSection('tours')}
          onPlanCustomTrip={() => setIsCustomPlannerOpen(true)}
        />

        {/* Featured Continents / Quick Destination Showcase */}
        <section id="destinations" className="py-16 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">
                  Global Territories
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
                  Select a Region of Wonder
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-stone-500 max-w-md">
                Click any continent to jump directly to its curated expeditions and local master guides.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  continent: 'Europe',
                  destinations: 'Switzerland, Italy & Greece',
                  image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80',
                  toursCount: '3 Expeditions'
                },
                {
                  continent: 'Asia',
                  destinations: 'Japan & Bali Archipelago',
                  image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
                  toursCount: '2 Expeditions'
                },
                {
                  continent: 'Africa',
                  destinations: 'Tanzania & Zanzibar Isles',
                  image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80',
                  toursCount: '1 Expedition'
                },
                {
                  continent: 'Americas',
                  destinations: 'Chile & Argentina Patagonia',
                  image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=600&q=80',
                  toursCount: '1 Expedition'
                }
              ].map((region) => (
                <div
                  key={region.continent}
                  onClick={() => {
                    setSelectedContinent(region.continent);
                    scrollToSection('tours');
                  }}
                  className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
                >
                  <img
                    src={region.image}
                    alt={region.continent}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
                      {region.toursCount}
                    </span>
                    <h3 className="text-lg font-bold font-serif-luxury">{region.continent}</h3>
                    <p className="text-xs text-stone-300 truncate">{region.destinations}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curated Expeditions Grid & Filters */}
        <section id="tours" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
              Signature Departures 2026/2027
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-900 tracking-tight">
              Curated World Expeditions
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Every itinerary is strictly limited to 8–12 guests, paired with local certified guides 
              and five-star boutique sanctuary accommodations.
            </p>
          </div>

          {/* Interactive Filters Bar */}
          <div className="mb-10">
            <TourFilters
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              selectedContinent={selectedContinent}
              onSelectContinent={setSelectedContinent}
              searchQuery={searchQuery}
              onSearchQueryChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalResults={filteredTours.length}
              onResetFilters={() => {
                setSelectedCategory('all');
                setSelectedContinent('All');
                setSearchQuery('');
                setSortBy('featured');
              }}
            />
          </div>

          {/* Tour Cards Grid */}
          {filteredTours.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-3xl border border-stone-200 p-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mx-auto">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-800">No expeditions match your current search</h3>
              <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
                Try widening your filters or design a bespoke custom itinerary with our travel specialists.
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedContinent('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold cursor-pointer"
                >
                  Clear All Filters
                </button>
                <button
                  type="button"
                  onClick={() => setIsCustomPlannerOpen(true)}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold cursor-pointer"
                >
                  Design Custom Journey
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  currency={currency}
                  isWishlisted={wishlistIds.includes(tour.id)}
                  onToggleWishlist={handleToggleWishlist}
                  onSelectTour={setSelectedTour}
                  onQuickBook={handleQuickBook}
                />
              ))}
            </div>
          )}

          {/* Bespoke Custom Trip CTA Strip */}
          <div className="mt-16 bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-3xl p-8 sm:p-10 border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                Looking for Something Uniquely Yours?
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
                Create a Private Expedition with Your Preferred Dates & Companions
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-2">
                Our bespoke travel architects design custom private tours with private chauffeurs, 
                charter flights, and exclusive estate access.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsCustomPlannerOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-lg shadow-amber-500/10 cursor-pointer"
            >
              Start Custom Brief
            </button>
          </div>
        </section>

        {/* Travel Guides & Intelligence Section */}
        <TravelGuidesSection />

        {/* Traveler Stories & Verified Reviews */}
        <TravelerReviewsSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onScrollToSection={scrollToSection}
        onOpenCustomPlanner={() => setIsCustomPlannerOpen(true)}
      />

      {/* MODALS & DRAWERS */}

      {/* Tour Detail Modal with Interactive Itinerary & Quote Calculator */}
      <TourDetailModal
        tour={selectedTour}
        currency={currency}
        onClose={() => setSelectedTour(null)}
        isWishlisted={selectedTour ? wishlistIds.includes(selectedTour.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onProceedToBooking={(draft) => {
          setSelectedTour(null);
          setBookingDraft(draft);
        }}
      />

      {/* Booking Checkout & Confirmation Modal */}
      <BookingModal
        draft={bookingDraft}
        currency={currency}
        onClose={() => setBookingDraft(null)}
        onBookingConfirmed={handleBookingConfirmed}
      />

      {/* Custom Bespoke Trip Planner Modal */}
      <CustomTripPlanner
        currency={currency}
        isOpen={isCustomPlannerOpen}
        onClose={() => setIsCustomPlannerOpen(false)}
      />

      {/* Saved Trips Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistTours={wishlistedTours}
        currency={currency}
        onRemoveFromWishlist={handleToggleWishlist}
        onClearWishlist={handleClearWishlist}
        onSelectTour={(tour) => {
          setSelectedTour(tour);
        }}
        onQuickBook={handleQuickBook}
      />
    </div>
  );
}
