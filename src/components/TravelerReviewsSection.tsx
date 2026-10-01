import React, { useState } from 'react';
import { TravelerReview } from '../types/travel';
import { TRAVEL_REVIEWS } from '../data/travelData';
import { Star, ShieldCheck, MessageSquarePlus, Check, X } from 'lucide-react';

export const TravelerReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<TravelerReview[]>(TRAVEL_REVIEWS);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [tripTitle, setTripTitle] = useState('Alpine Splendors & Glacier Express');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newRev: TravelerReview = {
      id: `rev-${Date.now()}`,
      author: name,
      location: location || 'Global Explorer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      rating,
      date: 'Just now',
      tripTitle,
      comment,
      verified: true,
    };

    setReviews([newRev, ...reviews]);
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      setModalOpen(false);
      setName('');
      setLocation('');
      setComment('');
    }, 1500);
  };

  return (
    <section id="reviews" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
              Unvarnished Perspectives
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-900 tracking-tight">
              Stories from the Horizon
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Read uncensored accounts from past guests who traversed glaciers, savannahs, and secluded seas with us.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="self-start sm:self-auto px-5 py-2.5 rounded-xl border border-stone-300 hover:border-amber-600 hover:text-amber-800 text-stone-800 text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <MessageSquarePlus className="w-4 h-4 text-amber-600" />
            <span>Share Traveler Experience</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-50 rounded-2xl border border-stone-200/80 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating ? 'fill-amber-500 text-amber-500' : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>

                  {rev.verified && (
                    <div className="flex items-center gap-1 text-[11px] text-emerald-800 font-medium bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>Verified Guest</span>
                    </div>
                  )}
                </div>

                <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-2">
                  Trip: {rev.tripTitle}
                </p>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-200/60">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover border border-stone-200"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900">{rev.author}</h4>
                  <div className="text-[11px] text-stone-500">
                    <span>{rev.location}</span>
                    <span className="mx-1">·</span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="relative bg-white text-stone-900 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden border border-stone-200">
            <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <h3 className="text-sm font-bold font-serif-luxury text-stone-900 uppercase tracking-wider">
                Write a Review
              </h3>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-stone-200 text-stone-500 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddReview} className="p-6 space-y-4">
              {successMsg ? (
                <div className="py-8 text-center space-y-2">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-stone-900">Thank you for your feedback!</h4>
                  <p className="text-xs text-stone-500">Your review has been verified and posted.</p>
                </div>
              ) : (
                <>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rachel Adams"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Home City & Country</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Toronto, Canada"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Tour Taken</label>
                    <select
                      value={tripTitle}
                      onChange={(e) => setTripTitle(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-amber-600 cursor-pointer"
                    >
                      <option value="Alpine Splendors & Glacier Express">Alpine Splendors & Glacier Express</option>
                      <option value="Amalfi Coast, Capri & Pompeii Odyssey">Amalfi Coast, Capri & Pompeii Odyssey</option>
                      <option value="Serengeti Great Migration & Zanzibar">Serengeti Great Migration & Zanzibar</option>
                      <option value="Kyoto Zen & Tokyo Heritage">Kyoto Zen & Tokyo Heritage</option>
                      <option value="Patagonia Fjords & Torres del Paine">Patagonia Fjords & Torres del Paine</option>
                      <option value="Santorini Sunset & Cyclades Yacht">Santorini Sunset & Cyclades Yacht</option>
                      <option value="Bali Spiritual Sanctuary & Komodo">Bali Spiritual Sanctuary & Komodo</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Overall Rating</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((starVal) => (
                        <button
                          key={starVal}
                          type="button"
                          onClick={() => setRating(starVal)}
                          className="p-1 focus:outline-none cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              starVal <= rating ? 'fill-amber-500 text-amber-500' : 'text-stone-300'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs text-stone-600 ml-2 font-medium">{rating} / 5 Stars</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Your Experience & Feedback *</label>
                    <textarea
                      rows={3}
                      required
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Describe the guide quality, hotel standard, scenery, and key moments..."
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-colors cursor-pointer"
                    >
                      Publish Traveler Review
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
