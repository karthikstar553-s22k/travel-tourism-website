import React, { useState } from 'react';
import { TourPackage, CurrencyCode } from '../types/travel';
import { formatPrice } from '../utils/formatters';
import { 
  X, Star, MapPin, Calendar, Clock, Users, Mountain, Check, 
  ChevronDown, ChevronUp, ShieldCheck, Heart, ArrowRight, 
  Utensils, Hotel, Sparkles
} from 'lucide-react';

interface TourDetailModalProps {
  tour: TourPackage | null;
  currency: CurrencyCode;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (tourId: string) => void;
  onProceedToBooking: (bookingDraft: {
    tour: TourPackage;
    departureDate: string;
    travelers: number;
    roomType: 'standard' | 'deluxe' | 'suite';
    addOnPrivateGuide: boolean;
    addOnTravelInsurance: boolean;
    totalPriceUSD: number;
  }) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  currency,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onProceedToBooking,
}) => {
  if (!tour) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(tour.departureDates[0] || '2026-06-15');
  const [travelers, setTravelers] = useState(2);
  const [roomType, setRoomType] = useState<'standard' | 'deluxe' | 'suite'>('standard');
  const [addOnPrivateGuide, setAddOnPrivateGuide] = useState(false);
  const [addOnTravelInsurance, setAddOnTravelInsurance] = useState(true);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'highlights' | 'inclusions'>('itinerary');

  // Calculate pricing based on options
  const basePricePerPerson = tour.priceUSD;
  const roomUpgradeCost = roomType === 'deluxe' ? 350 : roomType === 'suite' ? 750 : 0;
  const insuranceCost = addOnTravelInsurance ? 120 : 0;
  const guideCost = addOnPrivateGuide ? 450 : 0;

  const totalPerPerson = basePricePerPerson + roomUpgradeCost + insuranceCost;
  const totalTourUSD = (totalPerPerson * travelers) + guideCost;

  const handleBookingSubmit = () => {
    onProceedToBooking({
      tour,
      departureDate: selectedDate,
      travelers,
      roomType,
      addOnPrivateGuide,
      addOnTravelInsurance,
      totalPriceUSD: totalTourUSD,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white text-stone-900 rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-stone-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header bar with close button */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-stone-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-amber-700 font-bold">
              {tour.continent} · {tour.country}
            </span>
            <span className="text-stone-300">|</span>
            <span className="text-xs text-stone-500 font-medium">
              {tour.durationDays} Days / {tour.durationNights} Nights
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleWishlist(tour.id)}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
              title="Bookmark expedition"
            >
              <Heart
                className={`w-5 h-5 ${
                  isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-stone-500'
                }`}
              />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Title & Subtitle */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 uppercase tracking-widest mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{tour.tagline}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif-luxury text-stone-900 tracking-tight mb-2">
              {tour.title}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {tour.subtitle}
            </p>
          </div>

          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-stone-100 shadow-inner">
              <img
                src={tour.gallery[activeImageIndex] || tour.featuredImage}
                alt={`${tour.title} image`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {tour.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`aspect-[16/9] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx ? 'border-amber-600 scale-[0.98]' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Key Attributes Matrix (Clean unboxed style) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-stone-200 text-stone-700">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <span className="block text-[11px] text-stone-400 uppercase">Duration</span>
                <span className="text-xs sm:text-sm font-semibold">{tour.durationDays} Days / {tour.durationNights} Nts</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <span className="block text-[11px] text-stone-400 uppercase">Group Size</span>
                <span className="text-xs sm:text-sm font-semibold">Max {tour.groupSizeMax} Travelers</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mountain className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <span className="block text-[11px] text-stone-400 uppercase">Physical Activity</span>
                <span className="text-xs sm:text-sm font-semibold">{tour.physicalRating}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500 shrink-0" />
              <div>
                <span className="block text-[11px] text-stone-400 uppercase">Guest Score</span>
                <span className="text-xs sm:text-sm font-semibold">{tour.rating} ({tour.reviewsCount} reviews)</span>
              </div>
            </div>
          </div>

          {/* Two-Column Layout: Left Details / Right Booking Calculator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Itinerary & Inclusions (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Navigation Segment Tabs */}
              <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl border border-stone-200">
                <button
                  type="button"
                  onClick={() => setActiveTab('itinerary')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'itinerary'
                      ? 'bg-white text-stone-900 shadow-sm'
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  Day-by-Day Itinerary ({tour.itinerary.length} Days)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('highlights')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'highlights'
                      ? 'bg-white text-stone-900 shadow-sm'
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  Expedition Highlights
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('inclusions')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'inclusions'
                      ? 'bg-white text-stone-900 shadow-sm'
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  What's Included
                </button>
              </div>

              {/* Tab 1: Itinerary Accordion */}
              {activeTab === 'itinerary' && (
                <div className="space-y-3">
                  {tour.itinerary.map((day) => {
                    const isExpanded = expandedDay === day.day;
                    return (
                      <div
                        key={day.day}
                        className="border border-stone-200 rounded-xl overflow-hidden transition-all bg-white"
                      >
                        <button
                          type="button"
                          onClick={() => setExpandedDay(isExpanded ? null : day.day)}
                          className="w-full text-left px-5 py-3.5 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0">
                              D{day.day}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-stone-900">
                              {day.title}
                            </span>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-stone-400 shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="px-5 pb-5 pt-1 space-y-3 text-xs sm:text-sm text-stone-600 border-t border-stone-100">
                            <p className="leading-relaxed text-stone-700">
                              {day.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-stone-500">
                              <div className="flex items-center gap-2">
                                <Hotel className="w-3.5 h-3.5 text-amber-600" />
                                <span>{day.accommodation}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Utensils className="w-3.5 h-3.5 text-amber-600" />
                                <span>{day.mealPlan}</span>
                              </div>
                            </div>

                            {day.activities.length > 0 && (
                              <div className="pt-2">
                                <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                                  Scheduled Experiences:
                                </span>
                                <ul className="space-y-1">
                                  {day.activities.map((act, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs text-stone-600">
                                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                                      <span>{act}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Tab 2: Highlights */}
              {activeTab === 'highlights' && (
                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-4">
                  <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                    Curated Signature Moments
                  </h4>
                  <ul className="space-y-3">
                    {tour.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                        <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-stone-200">
                    <span className="text-xs text-stone-500">
                      Best Traveling Season: <strong className="text-stone-800">{tour.bestSeason}</strong>
                    </span>
                  </div>
                </div>
              )}

              {/* Tab 3: Inclusions */}
              {activeTab === 'inclusions' && (
                <div className="space-y-6">
                  <div className="bg-emerald-50/70 border border-emerald-200/80 p-5 rounded-2xl">
                    <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-3">
                      Included with every reservation:
                    </h4>
                    <ul className="space-y-2">
                      {tour.included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-emerald-950">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-stone-50 border border-stone-200 p-5 rounded-2xl">
                    <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
                      Not Included (Available upon request):
                    </h4>
                    <ul className="space-y-2">
                      {tour.notIncluded.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                          <span className="text-stone-400 font-bold">✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Live Booking & Configuration Matrix (5 cols) */}
            <div className="lg:col-span-5 bg-stone-50 p-6 rounded-3xl border border-stone-200 space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-amber-700 font-bold block mb-1">
                  Custom Expedition Quote
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-stone-900">
                    {formatPrice(totalTourUSD, currency)}
                  </span>
                  <span className="text-xs text-stone-500">
                    total for {travelers} {travelers === 1 ? 'traveler' : 'travelers'}
                  </span>
                </div>
              </div>

              {/* Step A: Select Guaranteed Departure Date */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span>Guaranteed Departure Date</span>
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs font-medium text-stone-800 focus:outline-none focus:border-amber-600"
                >
                  {tour.departureDates.map((date) => (
                    <option key={date} value={date}>
                      {new Date(date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })} (Seats Available: {tour.availableSeats})
                    </option>
                  ))}
                </select>
              </div>

              {/* Step B: Guests Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-700 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-600" />
                    <span>Number of Guests</span>
                  </span>
                  <span className="text-[11px] text-stone-500 font-normal">Max {tour.groupSizeMax}</span>
                </label>
                <div className="flex items-center gap-3 bg-white border border-stone-300 rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    className="w-8 h-8 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-stone-900 text-sm">
                    {travelers} {travelers === 1 ? 'Guest' : 'Guests'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setTravelers(Math.min(tour.groupSizeMax, travelers + 1))}
                    className="w-8 h-8 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Step C: Room Tier Upgrade */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-700">
                  Accommodation Tier
                </label>
                <div className="grid grid-cols-1 gap-2">
                  <label className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    roomType === 'standard' ? 'border-amber-600 bg-amber-500/10 font-semibold' : 'border-stone-200 bg-white'
                  }`}>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="roomType"
                        checked={roomType === 'standard'}
                        onChange={() => setRoomType('standard')}
                        className="accent-amber-600"
                      />
                      <span>Superior Suite (Included)</span>
                    </div>
                    <span className="text-stone-500">+$0</span>
                  </label>

                  <label className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    roomType === 'deluxe' ? 'border-amber-600 bg-amber-500/10 font-semibold' : 'border-stone-200 bg-white'
                  }`}>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="roomType"
                        checked={roomType === 'deluxe'}
                        onChange={() => setRoomType('deluxe')}
                        className="accent-amber-600"
                      />
                      <span>Deluxe Panoramic Villa</span>
                    </div>
                    <span className="text-amber-800">+{formatPrice(350, currency)}/person</span>
                  </label>

                  <label className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    roomType === 'suite' ? 'border-amber-600 bg-amber-500/10 font-semibold' : 'border-stone-200 bg-white'
                  }`}>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="roomType"
                        checked={roomType === 'suite'}
                        onChange={() => setRoomType('suite')}
                        className="accent-amber-600"
                      />
                      <span>Presidential Penthouse</span>
                    </div>
                    <span className="text-amber-800">+{formatPrice(750, currency)}/person</span>
                  </label>
                </div>
              </div>

              {/* Step D: Add-On Services */}
              <div className="space-y-2 pt-2 border-t border-stone-200">
                <span className="text-xs font-semibold text-stone-700 block">
                  Curated Add-Ons
                </span>
                
                <label className="flex items-center justify-between p-2.5 rounded-xl border border-stone-200 bg-white text-xs cursor-pointer hover:bg-stone-50">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={addOnPrivateGuide}
                      onChange={(e) => setAddOnPrivateGuide(e.target.checked)}
                      className="accent-amber-600 rounded"
                    />
                    <span>Private Expedition Chauffeur & Guide</span>
                  </div>
                  <span className="text-stone-600 font-medium">+{formatPrice(450, currency)}</span>
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-xl border border-stone-200 bg-white text-xs cursor-pointer hover:bg-stone-50">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={addOnTravelInsurance}
                      onChange={(e) => setAddOnTravelInsurance(e.target.checked)}
                      className="accent-amber-600 rounded"
                    />
                    <span>Global Medical & Trip Protection</span>
                  </div>
                  <span className="text-stone-600 font-medium">+{formatPrice(120, currency)}/person</span>
                </label>
              </div>

              {/* Reserve Button */}
              <button
                type="button"
                onClick={handleBookingSubmit}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Reserve Expedition</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>20% flexible deposit · Zero change fees up to 60 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
