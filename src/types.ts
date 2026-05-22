/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Vehicle {
  id: string;
  name: string;
  type: string; // 'coach' | 'sprinter' | 'van'
  capacity: number;
  pricePerDay: number; // Approximate price in SAR
  image: string;
  specs: string[];
  description: string;
  isVip: boolean;
  bags: number;
  features: string[];
}

export interface BookingDetails {
  customerName: string;
  phone: string;
  sourceCity: string;
  destinationCity: string;
  tripType: 'one-way' | 'round-trip' | 'daily';
  vehicleId: string;
  startDate: string;
  durationDays: number;
  notes?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  rating: number;
  comment: string;
  date: string;
}
