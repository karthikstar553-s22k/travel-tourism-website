import React from 'react';
import { TourPackage, CurrencyCode } from '../types/travel';
import { formatPrice } from '../utils/formatters';
import { X, Heart, Trash2, ArrowRight, Compass } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistTours: TourPackage[];
  currency: CurrencyCode;
  onRemoveFromWishlist: (id: string) => void;
  onClearWishlist: () => void;
  onSelectTour: (tour: TourPackage) => void;
  onQuickBook: (tour: TourPackage) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistTours,
  currency,
  onRemoveFromWishlist,
  onClearWishlist,
  onSelectTour,
  onQuickBook,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-stone-200">
          {/* Header */}
          <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <h3 className="text-base font-bold font-serif-luxury text-stone-900">
                Saved Expeditions ({wishlistTours.length})
              </h3>
            </div>

            <div className="flex items-center gap-2">
              {wishlistTours.length > 0 && (
                <button
                  type="button"
                  onClick={onClearWishlist}
                  className="text-[11px] text-stone-400 hover:text-rose-600 transition-colors mr-2 cursor-pointer"
                >
                  Clear All
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-full hover:bg-stone-200 text-stone-500 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* List or Empty State */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistTours.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mx-auto">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-semibold text-stone-700">Your Wishlist is Empty</h4>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Click the heart icon on any expedition to bookmark journeys and compare itineraries side by side.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 px-4 py-2 rounded-lg bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 transition-colors cursor-pointer"
                >
                  Discover Expeditions
                </button>
              </div>
            ) : (
              wishlistTours.map((tour) => (
                <div
                  key={tour.id}
                  className="group bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden p-3.5 flex gap-3 hover:border-amber-400 transition-colors"
                >
                  <img
                    src={tour.featuredImage}
                    alt={tour.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 cursor-pointer"
                    onClick={() => {
                      onClose();
                      onSelectTour(tour);
                    }}
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] uppercase font-bold text-amber-700 truncate">
                          {tour.country}
                        </span>
                        <button
                          type="button"
                          onClick={() => onRemoveFromWishlist(tour.id)}
                          className="text-stone-400 hover:text-rose-600 transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4
                        onClick={() => {
                          onClose();
                          onSelectTour(tour);
                        }}
                        className="text-xs font-bold text-stone-900 truncate hover:text-amber-700 transition-colors cursor-pointer"
                      >
                        {tour.title}
                      </h4>

                      <span className="text-[11px] text-stone-500 block">
                        {tour.durationDays} Days · {tour.physicalRating}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-stone-200/60 mt-1">
                      <span className="text-xs font-bold text-stone-900">
                        {formatPrice(tour.priceUSD, currency)}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onSelectTour(tour);
                          }}
                          className="text-[11px] text-stone-600 hover:text-stone-900 underline font-medium cursor-pointer"
                        >
                          Details
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onQuickBook(tour);
                          }}
                          className="px-2.5 py-1 rounded bg-amber-500 hover:bg-amber-400 text-stone-950 text-[10px] font-bold transition-colors cursor-pointer"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Action */}
          {wishlistTours.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-stone-50 space-y-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectTour(wishlistTours[0]);
                }}
                className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>View First Saved Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
