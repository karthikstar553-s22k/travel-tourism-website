import React, { useState } from 'react';
import { TravelArticle } from '../types/travel';
import { TRAVEL_ARTICLES } from '../data/travelData';
import { BookOpen, Check, ArrowRight, X } from 'lucide-react';

export const TravelGuidesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<TravelArticle | null>(null);

  return (
    <section id="guides" className="py-20 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Field Notes & Expedition Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-900 tracking-tight">
            Curated Insights for the Discerning Explorer
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Written by certified alpine guides, marine naturalists, and cultural historians 
            to help you travel deeper with environmental consciousness and cultural respect.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAVEL_ARTICLES.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  {/* Unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span className="font-semibold text-amber-700">{art.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold font-serif-luxury text-stone-900 group-hover:text-amber-700 transition-colors mb-2 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3 mb-4">
                    {art.summary}
                  </p>

                  <div className="text-[11px] text-stone-400 font-medium">
                    By {art.author}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(art)}
                  className="w-full py-2.5 rounded-xl border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white text-stone-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Read Field Guide & Checklist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="relative bg-white text-stone-900 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden border border-stone-200">
            <div className="relative aspect-[21/9] overflow-hidden">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/70 text-white hover:bg-stone-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
                  <span>{selectedArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-stone-900">
                  {selectedArticle.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  By {selectedArticle.author} · Published {selectedArticle.date}
                </p>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                {selectedArticle.summary}
              </p>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  Essential Takeaway & Checklist
                </h4>
                <ul className="space-y-2">
                  {selectedArticle.keyAdvice.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-800">
                      <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
