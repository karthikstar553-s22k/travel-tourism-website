import React from 'react';
import { TourCategory } from '../types/travel';
import { SlidersHorizontal, ArrowUpDown, X } from 'lucide-react';

interface TourFiltersProps {
  selectedCategory: TourCategory;
  onSelectCategory: (cat: TourCategory) => void;
  selectedContinent: string;
  onSelectContinent: (cont: string) => void;
  searchQuery: string;
  onSearchQueryChange: (q: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalResults: number;
  onResetFilters: () => void;
}

const CATEGORIES: { id: TourCategory; label: string }[] = [
  { id: 'all', label: 'All Expeditions' },
  { id: 'adventure', label: 'Mountain & Trek' },
  { id: 'nature', label: 'Safari & Wildlife' },
  { id: 'cultural', label: 'Culture & Heritage' },
  { id: 'coastal', label: 'Coastal & Cruise' },
  { id: 'romantic', label: 'Romantic & Honeymoon' },
  { id: 'luxury', label: 'Wellness Sanctuary' },
];

const CONTINENTS = ['All', 'Europe', 'Asia', 'Africa', 'Americas'];

export const TourFilters: React.FC<TourFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedContinent,
  onSelectContinent,
  searchQuery,
  onSearchQueryChange,
  sortBy,
  onSortChange,
  totalResults,
  onResetFilters,
}) => {
  const isFiltered = selectedCategory !== 'all' || selectedContinent !== 'All' || searchQuery !== '';

  return (
    <div className="space-y-6">
      {/* Category Tabs (Interactive segmented buttons allowed by design constitution) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Secondary Bar: Continent filter chips, Search, Sort & Clear */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-stone-200">
        {/* Continent Pills / Selector */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-stone-500 font-medium mr-1">Region:</span>
          {CONTINENTS.map((cont) => {
            const isContActive = selectedContinent === cont;
            return (
              <button
                key={cont}
                type="button"
                onClick={() => onSelectContinent(cont)}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  isContActive
                    ? 'bg-stone-900 text-stone-100 font-semibold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                {cont}
              </button>
            );
          })}
        </div>

        {/* Search, Sort and Reset */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
              placeholder="Filter by keyword..."
              className="w-40 sm:w-52 text-xs bg-white border border-stone-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-600 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchQueryChange('')}
                className="absolute right-2 top-2 text-stone-400 hover:text-stone-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-stone-600 bg-white border border-stone-300 rounded-lg px-2.5 py-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-stone-500" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured Curations</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Longest Duration</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="text-xs text-amber-700 hover:text-amber-800 underline font-medium cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Results Count Feedback */}
      <div className="flex items-center justify-between text-xs text-stone-500">
        <span>
          Showing <strong className="text-stone-900 font-semibold">{totalResults}</strong> curated expeditions matching your criteria
        </span>
      </div>
    </div>
  );
};
