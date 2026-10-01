export type TourCategory = 
  | 'all'
  | 'cultural' 
  | 'adventure' 
  | 'luxury' 
  | 'nature' 
  | 'coastal' 
  | 'romantic';

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  destination: string;
  country: string;
  continent: 'Europe' | 'Asia' | 'Africa' | 'Americas' | 'Oceania';
  category: Exclude<TourCategory, 'all'>;
  durationDays: number;
  durationNights: number;
  groupSizeMax: number;
  physicalRating: 'Easy' | 'Moderate' | 'Challenging';
  priceUSD: number;
  originalPriceUSD?: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  featuredImage: string;
  gallery: string[];
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    mealPlan: string;
    accommodation: string;
    activities: string[];
  }[];
  included: string[];
  notIncluded: string[];
  departureDates: string[];
  availableSeats: number;
  bestSeason: string;
}

export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'AUD' | 'INR' | 'JPY';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateFromUSD: number;
  label: string;
}

export interface TravelerReview {
  id: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  tripTitle: string;
  comment: string;
  verified: boolean;
}

export interface TravelArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
  summary: string;
  keyAdvice: string[];
}

export interface BookingSubmission {
  bookingId: string;
  tour: TourPackage;
  selectedDate: string;
  travelers: number;
  roomType: 'standard' | 'deluxe' | 'suite';
  addOnPrivateGuide: boolean;
  addOnTravelInsurance: boolean;
  totalPrice: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  guestCountry: string;
  specialRequests?: string;
  bookingDate: string;
}
