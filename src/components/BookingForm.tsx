/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VEHICLES, SAUDI_CITIES } from '../data';
import { BookingDetails } from '../types';
import { Calendar, User, Phone, MapPin, CheckSquare, Coins, Route, Send, MessageSquare, Sparkles } from 'lucide-react';

interface BookingFormProps {
  selectedVehicleId: string;
  onOpenLegal?: (type: 'privacy' | 'terms' | 'refund') => void;
}

export default function BookingForm({ selectedVehicleId, onOpenLegal }: BookingFormProps) {
  // Sync selected vehicle from parent
  const [vehicleId, setVehicleId] = useState(selectedVehicleId || VEHICLES[0].id);

  useEffect(() => {
    if (selectedVehicleId) {
      setVehicleId(selectedVehicleId);
    }
  }, [selectedVehicleId]);

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sourceCity, setSourceCity] = useState('الرياض');
  const [destinationCity, setDestinationCity] = useState('مكة المكرمة');
  const [tripType, setTripType] = useState<'one-way' | 'round-trip' | 'daily'>('daily');
  const [startDate, setStartDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(9, 0, 0, 0);
    const tzOffset = tomorrow.getTimezoneOffset() * 60000;
    return new Date(tomorrow.getTime() - tzOffset).toISOString().slice(0, 16);
  });
  const [durationDays, setDurationDays] = useState(1);
  const [notes, setNotes] = useState('');

  // UI state
  const [validated, setValidated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  // Get selected vehicle data
  const currentVehicle = VEHICLES.find((v) => v.id === vehicleId) || VEHICLES[0];

  // Live price estimator
  useEffect(() => {
    let base = currentVehicle.pricePerDay * durationDays;
    if (tripType === 'round-trip') {
      base = base * 1.5; // discounted return trip
    } else if (tripType === 'one-way') {
      base = base * 0.9;
    }
    setCalculatedPrice(Math.round(base));
  }, [vehicleId, durationDays, tripType, currentVehicle]);

  // Build WhatsApp pre-filled link
  const triggerWhatsApp = () => {
    const tripTypeArabic = 
      tripType === 'daily' ? 'إيجار يومي متكامل بالسائق' : 
      tripType === 'round-trip' ? 'ذهاب وعودة بين المدن' : 'ذهاب فقط اتجاه واحد';

    let formattedDate = startDate;
    try {
      const d = new Date(startDate);
      formattedDate = d.toLocaleString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch (err) {
      // fallback
    }

    const message = `السلام عليكم ورحمة الله وبركاته، أرغب في حجز حافلة فاخرة عبر موقعكم:
---
👤 *الاســم:* ${name}
📞 *رقم الجوال:* ${phone}
🚍 *الحافلة المطلوبة:* ${currentVehicle.name}
📍 *مدينة الانطلاق:* ${sourceCity}
🏁 *مدينة الوصول:* ${destinationCity}
⚙️ *نوع المشوار:* ${tripTypeArabic}
📅 *تاريخ وتوقيت الرحلة:* ${formattedDate}
⏱️ *مدة الإيجار:* ${durationDays} يوم / أيام
📝 *ملاحظات خاصة:* ${notes || 'لا يوجد'}
---
يرجى تأكيد إتاحة المركبة وإرسال عروض الأسعار وتجهيز العقد الرسمي وعرضها علي عبر واتساب. شكراً لكم.`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=966537352271&text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  // Handle Submit
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !startDate) {
      setValidated(true);
      return;
    }

    setValidated(false);
    setIsSubmitted(true);
    
    // Trigger WhatsApp immediately
    const tripTypeArabic = 
      tripType === 'daily' ? 'إيجار يومي متكامل بالسائق' : 
      tripType === 'round-trip' ? 'ذهاب وعودة بين المدن' : 'ذهاب فقط اتجاه واحد';

    let formattedDate = startDate;
    try {
      const d = new Date(startDate);
      formattedDate = d.toLocaleString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch (err) {
      // fallback
    }

    const message = `السلام عليكم ورحمة الله وبركاته، أرغب في حجز حافلة فاخرة عبر موقعكم:
---
👤 *الاســم:* ${name}
📞 *رقم الجوال:* ${phone}
🚍 *الحافلة المطلوبة:* ${currentVehicle.name}
📍 *مدينة الانطلاق:* ${sourceCity}
🏁 *مدينة الوصول:* ${destinationCity}
⚙️ *نوع المشوار:* ${tripTypeArabic}
📅 *تاريخ وتوقيت الرحلة:* ${formattedDate}
⏱️ *مدة الإيجار:* ${durationDays} يوم / أيام
📝 *ملاحظات خاصة:* ${notes || 'لا يوجد'}
---
يرجى تأكيد إتاحة المركبة وإرسال عروض الأسعار وتجهيز العقد الرسمي وعرضها علي عبر واتساب. شكراً لكم.`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=966537352271&text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-luxury-navy-light text-white relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-luxury-gold/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Decorative Traditional Arabic Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-luxury-gold font-sans text-sm font-semibold tracking-widest uppercase">تأكيد الحجز الفوري السريع</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-3">
            احجز حافلتك الفاخرة مع خدمة التنسيق الفوري
          </h2>
          <p className="text-gray-400 font-sans mt-3 text-sm font-light">
            املأ النموذج أدناه لتأكيد حجز رحلتك الفخمة وإرسال الطلب مباشرة لخدمة العملاء بضغطة زر واحدة.
          </p>
          <div className="w-20 h-1 bg-luxury-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Reservation Form (L: 7 Columns) */}
          <div className="lg:col-span-7 bg-luxury-navy rounded-2xl p-6 sm:p-10 border border-white/5 shadow-2xl flex flex-col justify-between">
            {!isSubmitted ? (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                {/* Stepper title / status */}
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 mb-2">
                  <CheckSquare className="w-5 h-5 text-luxury-gold animate-pulse" />
                  <span className="text-xs sm:text-sm text-gray-300 font-sans">
                    خدمات النقل والمشاوير مأمنة ومغطاة 100% بالترخيص الحكومي السعودي.
                  </span>
                </div>

                {/* Personal Inputs Grid (Name, Phone) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm text-gray-300 font-medium font-sans flex items-center gap-1.5 justify-end">
                      <span>الاسم الكريم بالكامل</span>
                      <span className="text-rose-500">*</span>
                      <User className="w-4 h-4 text-luxury-gold" />
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: عبدالله القحطاني"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full bg-luxury-navy-light border rounded-xl px-4 py-3.5 text-white font-sans text-right focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-all ${
                        validated && !name ? 'border-rose-500' : 'border-white/10'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm text-gray-300 font-medium font-sans flex items-center gap-1.5 justify-end">
                      <span>رقم الجوال النشط</span>
                      <span className="text-rose-500">*</span>
                      <Phone className="w-4 h-4 text-luxury-gold" />
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="مثال: 0537352271"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full bg-luxury-navy-light border rounded-xl px-4 py-3.5 text-white font-mono text-left focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-all ${
                        validated && !phone ? 'border-rose-500' : 'border-white/10'
                      }`}
                    />
                  </div>
                </div>

                {/* Vehicle Choice & Trip Type Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm text-gray-300 font-medium font-sans flex items-center gap-1.5 justify-end">
                      <span>الحافلة المطلوبة</span>
                      <Sparkles className="w-4 h-4 text-luxury-gold" />
                    </label>
                    <select
                      value={vehicleId}
                      onChange={(e) => setVehicleId(e.target.value)}
                      className="w-full bg-luxury-navy-light border border-white/10 rounded-xl px-4 py-3.5 text-white font-sans text-right focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-all"
                    >
                      {VEHICLES.map((v) => (
                        <option key={v.id} value={v.id} className="bg-luxury-navy text-white text-right">
                          {v.name} ({v.capacity} راكب)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm text-gray-300 font-medium font-sans flex items-center gap-1.5 justify-end">
                      <span>نوع الرحلة والمشوار</span>
                      <Route className="w-4 h-4 text-luxury-gold" />
                    </label>
                    <select
                      value={tripType}
                      onChange={(e) => setTripType(e.target.value as 'one-way' | 'round-trip' | 'daily')}
                      className="w-full bg-luxury-navy-light border border-white/10 rounded-xl px-4 py-3.5 text-white font-sans text-right focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-all"
                    >
                      <option value="daily" className="bg-luxury-navy text-white text-right">إيجار يومي متكامل بالسائق</option>
                      <option value="round-trip" className="bg-luxury-navy text-white text-right">ذهاب وعودة بين المدن</option>
                      <option value="one-way" className="bg-luxury-navy text-white text-right">ذهاب فقط (اتجاه واحد)</option>
                    </select>
                  </div>
                </div>

                {/* Destination & Source Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm text-gray-300 font-medium font-sans flex items-center gap-1.5 justify-end">
                      <span>مدينة الانطلاق</span>
                      <MapPin className="w-4 h-4 text-luxury-gold" />
                    </label>
                    <select
                      value={sourceCity}
                      onChange={(e) => setSourceCity(e.target.value)}
                      className="w-full bg-luxury-navy-light border border-white/10 rounded-xl px-4 py-3.5 text-white font-sans text-right focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-all"
                    >
                      {SAUDI_CITIES.map((c) => (
                        <option key={c} value={c} className="bg-luxury-navy text-white text-right">{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm text-gray-300 font-medium font-sans flex items-center gap-1.5 justify-end">
                      <span>مدينة الوصول والمقصد</span>
                      <MapPin className="w-4 h-4 text-luxury-gold" />
                    </label>
                    <select
                      value={destinationCity}
                      onChange={(e) => setDestinationCity(e.target.value)}
                      className="w-full bg-luxury-navy-light border border-white/10 rounded-xl px-4 py-3.5 text-white font-sans text-right focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-all"
                    >
                      {SAUDI_CITIES.map((c) => (
                        <option key={c} value={c} className="bg-luxury-navy text-white text-right">{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Timing & Counter Days Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm text-gray-300 font-medium font-sans flex items-center gap-1.5 justify-end">
                      <span>توقيت بدء الرحلة والانطلاق</span>
                      <span className="text-rose-500">*</span>
                      <Calendar className="w-4 h-4 text-luxury-gold" />
                    </label>
                    <input
                      type="datetime-local"
                      required
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className={`w-full bg-luxury-navy-light border rounded-xl px-4 py-3.5 text-white font-mono text-right focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-all ${
                        validated && !startDate ? 'border-rose-500' : 'border-white/10'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm text-gray-300 font-medium font-sans flex items-center gap-1.5 justify-end">
                      <span>عدد أيام الإيجار والخدمة</span>
                      <Coins className="w-4 h-4 text-luxury-gold" />
                    </label>
                    <div className="flex items-center justify-between bg-luxury-navy-light border border-white/10 rounded-xl p-1">
                      <button
                        type="button"
                        onClick={() => setDurationDays(Math.min(90, durationDays + 1))}
                        className="w-12 h-11 bg-white/5 hover:bg-luxury-gold hover:text-luxury-navy text-white text-lg font-bold rounded-lg transition-colors flex items-center justify-center font-mono"
                      >
                        +
                      </button>
                      <span className="font-mono text-lg text-white font-bold px-4">{durationDays} أيام</span>
                      <button
                        type="button"
                        onClick={() => setDurationDays(Math.max(1, durationDays - 1))}
                        className="w-12 h-11 bg-white/5 hover:bg-luxury-gold hover:text-luxury-navy text-white text-lg font-bold rounded-lg transition-colors flex items-center justify-center font-mono"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional notes */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm text-gray-300 font-medium font-sans flex items-center gap-1.5 justify-end">
                    <span>ملاحظات خاصة ومطالب الضيافة</span>
                    <span className="text-gray-500 text-xs">(اختياري)</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="امثلة: تطلب ثلاجة مشروبات غازية إضافية، مقاعد أطفال، كراسي متحركة للمسنين..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-luxury-navy-light border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-right focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-all resize-none"
                  />
                </div>

                {/* Clear submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold-dark hover:from-luxury-gold-dark hover:to-luxury-gold text-luxury-navy font-black text-base py-4 rounded-xl transition-all duration-300 shadow-[0_5px_22px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>تأكيد الإجراء والطلب الفوري</span>
                </button>

                {/* Google Ads Compliance explicit consent block */}
                <div className="flex items-start gap-2.5 justify-end text-right text-[11px] sm:text-xs text-gray-400 mt-4 bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="leading-relaxed">
                    بالنقر على زر الإرسال أعلاه، تـوافق صراحةً على{' '}
                    <button
                      type="button"
                      onClick={() => onOpenLegal?.('terms')}
                      className="text-luxury-gold hover:underline font-bold bg-transparent border-none cursor-pointer p-0 inline font-sans underline"
                    >
                      الشروط والأحكام العامة
                    </button>{' '}
                    و{' '}
                    <button
                      type="button"
                      onClick={() => onOpenLegal?.('privacy')}
                      className="text-luxury-gold hover:underline font-bold bg-transparent border-none cursor-pointer p-0 inline font-sans underline"
                    >
                      سياسة الخصوصية
                    </button>{' '}
                    و{' '}
                    <button
                      type="button"
                      onClick={() => onOpenLegal?.('refund')}
                      className="text-luxury-gold hover:underline font-bold bg-transparent border-none cursor-pointer p-0 inline font-sans underline"
                    >
                      سياسة الإلغاء والفوترة والاسترجاع
                    </button>{' '}
                    الخاصة بنا. لن نستخدم أو نشارك بياناتك مطلقاً لأغراض غير مصرح بها.
                  </div>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6 flex flex-col items-center justify-center h-full my-auto"
              >
                <div className="p-4 bg-emerald-500/10 border border-emerald-500 text-emerald-500 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                  <span className="text-5xl font-sans">✓</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
                  تـم تولـيد طلب الحـجز بنجـاح!
                </h3>
                
                <p className="text-gray-300 text-sm sm:text-base font-sans font-light max-w-md mx-auto leading-relaxed">
                  يا هلا بك أخي <strong className="text-luxury-gold font-bold">{name}</strong>. يرجى الضغط على الزر أدناه لإرسال تفاصيل الحجز وتأكيد طلبكم مباشرة عبر واتساب مع فريق خدمة العملاء.
                </p>

                <div className="bg-luxury-navy-light border border-emerald-500/20 rounded-2xl p-6 w-full max-w-sm space-y-3.5 text-right font-sans">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-gray-400 text-xs">المركبة المقترحة:</span>
                    <span className="text-white text-sm font-bold">{currentVehicle.name}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-gray-400 text-xs">مسار الرحلة:</span>
                    <span className="text-white text-sm font-bold">{sourceCity} ➔ {tripType === 'daily' ? 'جولة حرة' : destinationCity}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-gray-400 text-xs">مدة الإيجار:</span>
                    <span className="text-white text-sm font-bold">{durationDays} يوم</span>
                  </div>
                  <div className="flex justify-between items-center text-luxury-gold text-[15px] font-bold pt-1">
                    <span>حالة طلب الحجز:</span>
                    <span className="text-emerald-400 font-sans">جاهز للتأكيد فوراً</span>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-4 max-w-sm pt-2">
                  <button
                    onClick={triggerWhatsApp}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-base py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3.5"
                  >
                    <MessageSquare className="w-5 h-5 fill-white text-emerald-500" />
                    <span>تأكيد الحجز الفوري عبر واتساب</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setValidated(false);
                      setName('');
                      setPhone('');
                      setNotes('');
                    }}
                    className="text-gray-400 hover:text-white transition-colors text-xs py-2 bg-white/5 hover:bg-white/10 rounded-lg"
                  >
                    إجراء حجز جديد أو تعديل البيانات
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Pricing Estimation Showcase (R: 5 Columns) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-luxury-navy-light to-[#0E1724] rounded-2xl p-6 sm:p-8 border border-luxury-gold/15 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Selected bus image showcase */}
              <div className="relative h-44 rounded-xl overflow-hidden shadow-md border border-white/10">
                <img
                  src={currentVehicle.image}
                  alt={currentVehicle.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <span className="absolute bottom-3 right-3 text-white font-serif font-bold text-base bg-luxury-navy/85 backdrop-blur-md px-3.5 py-1 rounded-lg border border-luxury-gold/20">
                  {currentVehicle.name}
                </span>
              </div>

              {/* Specs & Capabilities Grid */}
              <div className="bg-luxury-navy p-5 rounded-xl border border-white/5 space-y-4">
                <span className="text-xs text-luxury-gold font-sans font-bold block">مواصفات وتجهيزات الحافلة:</span>
                <div className="grid grid-cols-2 gap-3">
                  {currentVehicle.features.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-gray-300 font-sans">
                      <span className="text-luxury-gold text-lg">✦</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transparent Value Checklist */}
              <div className="space-y-2.5">
                <span className="text-xs text-gray-400 font-sans block">رسوم الحجز دائمًا تشتمل على:</span>
                {[
                  'سائق محترف ومرخص وملم بالطرق',
                  'المحروقات (البنزين/الديزل) ورسوم الطرق',
                  'التأمين الشامل للمركبة والركاب',
                  'فحوصات سلامة شاملة يومياً قبل السفر',
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span className="font-sans font-light">{text}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Booking Guarantee Card */}
            <div className="mt-8 bg-luxury-navy border border-luxury-gold/30 rounded-xl p-5 shadow-lg relative overflow-hidden text-right">
              <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-luxury-gold/5 blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300 font-sans">المدة المقترحة:</span>
                <span className="text-white font-mono font-bold text-base">{durationDays} {durationDays === 1 ? 'يوم واحد' : durationDays === 2 ? 'يومين' : `${durationDays} أيام`}</span>
              </div>

              <div className="h-[1px] bg-white/5 my-3" />

              <div className="space-y-2">
                <span className="text-sm text-luxury-gold-light font-sans font-medium block">رحلة آمنة ومرخصة بالكامل</span>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  سيتم معالجة معلومات حجزكم فورياً وتأكيد الحافلة بالتنسيق معكم عبر واتساب لضمان راحتكم وسلامتكم طوال فترة السفر.
                </p>
              </div>

              <p className="text-[10px] text-gray-400 text-center mt-3 font-sans">
                * تطبق الشروط والأحكام. خدماتنا تخضع لمعايير الهيئة العامة لوزارة النقل بالمملكة العربية السعودية.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
