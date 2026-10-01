import { CurrencyCode } from '../types/travel';
import { CURRENCIES } from '../data/travelData';

export function formatPrice(amountInUSD: number, currency: CurrencyCode): string {
  const cfg = CURRENCIES[currency] || CURRENCIES.USD;
  const converted = amountInUSD * cfg.rateFromUSD;
  
  if (currency === 'JPY') {
    return `${cfg.symbol}${Math.round(converted).toLocaleString()}`;
  }
  
  if (currency === 'INR') {
    return `${cfg.symbol}${Math.round(converted).toLocaleString('en-IN')}`;
  }

  return `${cfg.symbol}${Math.round(converted).toLocaleString('en-US')}`;
}

export function calculateCustomQuote(params: {
  travelers: number;
  days: number;
  style: 'comfort' | 'luxury' | 'ultra-luxe';
  destinationsCount: number;
}): number {
  let basePerDay = 280;
  if (params.style === 'luxury') basePerDay = 450;
  if (params.style === 'ultra-luxe') basePerDay = 780;

  const total = basePerDay * params.days * params.travelers + (params.destinationsCount * 180 * params.travelers);
  return total;
}
