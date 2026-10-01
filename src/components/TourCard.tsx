import React from 'react';
import { TourPackage, CurrencyCode } from '../types/travel';
import { formatPrice } from '../utils/formatters';
import { Heart, Star, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface TourCardProps {
  tour: TourPackage;
  currency: CurrencyCode;
  isWishlisted: boolean;
  onToggleWishlist: (tourId: string) => void;
  onSelectTour: (tour: TourPackage) => void;
  onQuickBook: (tour: TourPackage) => void;
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  currency,
  isWishlisted,
  onToggleWishlist,
  onSelectTour,
  onQuickBook,
}) => {
  return (
    <article className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Card Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
          <img
            src={tour.featuredImage}
            alt={tour.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-80" />

          {/* Location & Tagline overlay */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-1.5 text-xs font-medium text-stone-200">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{tour.destination}, {tour.country}</span>
            </div>
            {tour.badge && (
              <span className="text-[11px] font-semibold text-amber-300 tracking-wide uppercase">
                {tour.badge}
              </span>
            )}
          </div>

          {/* Wishlist Heart Toggle Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(tour.id);
            }}
            className="absolute top-3 right-3 p-2.5 rounded-full bg-stone-900/60 backdrop-blur-md text-white hover:bg-stone-900 hover:text-rose-400 transition-all cursor-pointer"
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            title={isWishlisted ? 'Saved to Wishlist' : 'Save to Wishlist'}
          >
            <Heart
              className={`w-4 h-4 transition-transform active:scale-125 ${
                isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-stone-200'
              }`}
            />
          </button>
        </div>

        {/* Card Body Content */}
        <div className="p-5 sm:p-6">
          {/* Clean Unboxed Metadata with Typographic Separators */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-2.5">
            <span>{tour.durationDays} Days / {tour.durationNights} Nights</span>
            <span aria-hidden="true">·</span>
            <span>Max {tour.groupSizeMax} Guests</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-stone-700">{tour.physicalRating}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelectTour(tour)}
            className="text-lg sm:text-xl font-bold text-stone-900 font-serif-luxury group-hover:text-amber-700 transition-colors cursor-pointer leading-snug mb-2"
          >
            {tour.title}
          </h3>

          <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 mb-4 leading-relaxed">
            {tour.subtitle}
          </p>

          {/* Key Highlights bullet list */}
          <div className="space-y-1.5 mb-5">
            {tour.highlights.slice(0, 2).map((hl, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{hl}</span>
              </div>
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-stone-600 pt-3 border-t border-stone-100">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            </div>
            <span className="font-semibold text-stone-900">{tour.rating}</span>
            <span className="text-stone-400">({tour.reviewsCount} reviews)</span>
            <span className="text-stone-300 ml-auto">Best: {tour.bestSeason.split('&')[0]}</span>
          </div>
        </div>
      </div>

      {/* Card Footer: Pricing & Action Buttons */}
      <div className="px-5 sm:px-6 pb-6 pt-2 bg-stone-50/70 border-t border-stone-100 flex items-center justify-between gap-3">
        <div>
          <span className="text-[11px] text-stone-500 uppercase tracking-wider block">Starting From</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold text-stone-900">
              {formatPrice(tour.priceUSD, currency)}
            </span>
            {tour.originalPriceUSD && (
              <span className="text-xs text-stone-400 line-through">
                {formatPrice(tour.originalPriceUSD, currency)}
              </span>
            )}
            <span className="text-[11px] text-stone-500">/ person</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onSelectTour(tour)}
            className="px-3.5 py-2 rounded-lg text-xs font-semibold text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Itinerary</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
          
          <button
            type="button"
            onClick={() => onQuickBook(tour)}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 transition-colors shadow-sm cursor-pointer"
          >
            Book
          </button>
        </div>
      </div>
    </article>
  );
};
