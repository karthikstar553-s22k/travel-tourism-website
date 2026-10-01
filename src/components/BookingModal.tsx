import React, { useState } from 'react';
import { TourPackage, CurrencyCode, BookingSubmission } from '../types/travel';
import { formatPrice } from '../utils/formatters';
import { 
  X, CheckCircle, Calendar, Users, MapPin, ShieldCheck, 
  Download, Mail, Phone, ArrowLeft, CreditCard, Lock
} from 'lucide-react';

interface BookingDraft {
  tour: TourPackage;
  departureDate: string;
  travelers: number;
  roomType: 'standard' | 'deluxe' | 'suite';
  addOnPrivateGuide: boolean;
  addOnTravelInsurance: boolean;
  totalPriceUSD: number;
}

interface BookingModalProps {
  draft: BookingDraft | null;
  currency: CurrencyCode;
  onClose: () => void;
  onBookingConfirmed: (submission: BookingSubmission) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  draft,
  currency,
  onClose,
  onBookingConfirmed,
}) => {
  if (!draft) return null;

  const [step, setStep] = useState<'details' | 'confirmation'>('details');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('United States');
  const [specialRequests, setSpecialRequests] = useState('');
  const [paymentOption, setPaymentOption] = useState<'deposit' | 'full'>('deposit');
  const [bookingRef, setBookingRef] = useState('');
  const [copiedVoucher, setCopiedVoucher] = useState(false);

  const depositAmountUSD = Math.round(draft.totalPriceUSD * 0.2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const generatedRef = `EXP-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(generatedRef);

    const submission: BookingSubmission = {
      bookingId: generatedRef,
      tour: draft.tour,
      selectedDate: draft.departureDate,
      travelers: draft.travelers,
      roomType: draft.roomType,
      addOnPrivateGuide: draft.addOnPrivateGuide,
      addOnTravelInsurance: draft.addOnTravelInsurance,
      totalPrice: draft.totalPriceUSD,
      guestName: name,
      guestEmail: email,
      guestPhone: phone,
      guestCountry: country,
      specialRequests,
      bookingDate: new Date().toISOString(),
    };

    onBookingConfirmed(submission);
    setStep('confirmation');
  };

  const handleDownloadSummary = () => {
    const textContent = `
========================================
VAGABOND & CO. - EXPEDITION BOOKING CONFIRMATION
Reference: ${bookingRef}
Date: ${new Date().toLocaleDateString()}
========================================

TOUR: ${draft.tour.title}
DESTINATION: ${draft.tour.destination}, ${draft.tour.country}
DURATION: ${draft.tour.durationDays} Days / ${draft.tour.durationNights} Nights
DEPARTURE DATE: ${draft.departureDate}

LEAD TRAVELER: ${name}
EMAIL: ${email}
PHONE: ${phone}
COUNTRY: ${country}
GUESTS: ${draft.travelers} Travelers
ROOM TYPE: ${draft.roomType.toUpperCase()}
PRIVATE GUIDE: ${draft.addOnPrivateGuide ? 'Included' : 'None'}
TRAVEL INSURANCE: ${draft.addOnTravelInsurance ? 'Included' : 'None'}

TOTAL AMOUNT: ${formatPrice(draft.totalPriceUSD, currency)}
DEPOSIT STATUS: 20% Flexible Guarantee Authorized
SPECIAL REQUESTS: ${specialRequests || 'None'}

CONCIERGE CONTACT:
concierge@vagabondtours.com | +1 (800) 555-7890
========================================
`;
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Vagabond-Booking-${bookingRef}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white text-stone-900 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden border border-stone-200">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-600" />
            <span className="text-xs uppercase tracking-wider font-bold text-stone-700">
              {step === 'details' ? 'Secure Expedition Reservation' : 'Reservation Confirmed'}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-200 text-stone-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: Guest Information & Deposit Guarantee */}
        {step === 'details' && (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Quick Order Snapshot */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-800 font-bold block mb-0.5">
                  Selected Expedition
                </span>
                <h4 className="text-sm font-bold text-stone-900">{draft.tour.title}</h4>
                <div className="flex items-center gap-3 text-xs text-stone-600 mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>{draft.departureDate}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-amber-600" />
                    <span>{draft.travelers} Guests</span>
                  </span>
                </div>
              </div>

              <div className="text-left sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-amber-200">
                <span className="text-xs text-stone-500 block">Total Expedition Value</span>
                <span className="text-lg font-extrabold text-stone-900">
                  {formatPrice(draft.totalPriceUSD, currency)}
                </span>
              </div>
            </div>

            {/* Guest Form Fields */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                Lead Guest Contact Information
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Katherine Reynolds"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-700">Phone Number (with country code)</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-700">Country of Residence</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="United States, UK, Canada..."
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-stone-700">
                  Dietary Restrictions or Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Vegetarian meal preferences, anniversary celebration, twin beds request..."
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Payment Schedule Option */}
            <div className="space-y-3 pt-2 border-t border-stone-200">
              <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                Select Guarantee Option
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className={`p-4 rounded-2xl border text-xs cursor-pointer transition-all ${
                  paymentOption === 'deposit'
                    ? 'border-amber-600 bg-amber-500/10 font-medium'
                    : 'border-stone-200 bg-stone-50'
                }`}>
                  <input
                    type="radio"
                    name="payOption"
                    checked={paymentOption === 'deposit'}
                    onChange={() => setPaymentOption('deposit')}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-stone-900">20% Flexible Deposit</span>
                    <Lock className="w-3.5 h-3.5 text-amber-700" />
                  </div>
                  <p className="text-stone-600 text-[11px] mb-2">
                    Pay only {formatPrice(depositAmountUSD, currency)} now to lock dates and boutique suites. Balance due 45 days before trip.
                  </p>
                  <span className="text-amber-800 font-semibold">{formatPrice(depositAmountUSD, currency)} Due Today</span>
                </label>

                <label className={`p-4 rounded-2xl border text-xs cursor-pointer transition-all ${
                  paymentOption === 'full'
                    ? 'border-amber-600 bg-amber-500/10 font-medium'
                    : 'border-stone-200 bg-stone-50'
                }`}>
                  <input
                    type="radio"
                    name="payOption"
                    checked={paymentOption === 'full'}
                    onChange={() => setPaymentOption('full')}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-stone-900">Full Upfront Payment</span>
                    <CreditCard className="w-3.5 h-3.5 text-amber-700" />
                  </div>
                  <p className="text-stone-600 text-[11px] mb-2">
                    Complete settlement today with complimentary welcome champagne and complimentary airport lounge access.
                  </p>
                  <span className="text-stone-900 font-semibold">{formatPrice(draft.totalPriceUSD, currency)} Total</span>
                </label>
              </div>
            </div>

            {/* Final Action Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>
                  Confirm & Authorize Reservation (
                  {paymentOption === 'deposit'
                    ? formatPrice(depositAmountUSD, currency)
                    : formatPrice(draft.totalPriceUSD, currency)}
                  )
                </span>
              </button>

              <p className="text-center text-[11px] text-stone-500 mt-2.5">
                Bank-level 256-bit SSL encryption. 100% money-back guarantee within 24 hours of booking.
              </p>
            </div>
          </form>
        )}

        {/* STEP 2: Instant Confirmation */}
        {step === 'confirmation' && (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold block mb-1">
                Expedition Reserved
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
                You're Heading to {draft.tour.country}!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-md mx-auto">
                A personal confirmation and detailed pre-departure dossier have been dispatched to{' '}
                <strong className="text-stone-900">{email}</strong>.
              </p>
            </div>

            {/* Booking Reference Card */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 text-left space-y-3">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] text-stone-500 uppercase tracking-wider block">
                    Booking Reference
                  </span>
                  <span className="text-base font-mono font-bold text-amber-700">
                    {bookingRef}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-stone-500 uppercase tracking-wider block">
                    Lead Traveler
                  </span>
                  <span className="text-sm font-semibold text-stone-900">{name}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 pt-1">
                <div>
                  <span className="text-stone-400 block text-[10px]">TOUR</span>
                  <span className="font-medium text-stone-800">{draft.tour.title}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">DEPARTURE DATE</span>
                  <span className="font-medium text-stone-800">{draft.departureDate}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">PARTY SIZE</span>
                  <span className="font-medium text-stone-800">{draft.travelers} Guests</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">TOTAL EXPEDITION VALUE</span>
                  <span className="font-bold text-stone-900">{formatPrice(draft.totalPriceUSD, currency)}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleDownloadSummary}
                className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Travel Dossier</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setCopiedVoucher(true);
                  setTimeout(() => setCopiedVoucher(false), 2500);
                }}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-stone-100 border border-stone-300 text-stone-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                {copiedVoucher ? 'Voucher Code Copied!' : 'Copy Reference'}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-colors cursor-pointer"
              >
                Return to Expeditions
              </button>
            </div>

            {/* Dedicated Concierge note */}
            <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 flex items-center justify-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>Questions? Call our 24/7 travel desk at +1 (800) 555-7890</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
