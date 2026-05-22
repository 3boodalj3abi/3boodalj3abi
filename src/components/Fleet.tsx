/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VEHICLES } from '../data';
import { Vehicle } from '../types';
import { Users2, Briefcase, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';

interface FleetProps {
  onSelectVehicle: (vehicleId: string) => void;
}

export default function Fleet({ onSelectVehicle }: FleetProps) {
  const [filter, setFilter] = useState<string>('all');

  const filteredVehicles = VEHICLES.filter((v) => {
    if (filter === 'all') return true;
    return v.type === filter;
  });

  const handleWhatsAppBookDirect = (vehicleName: string) => {
    const message = `السلام عليكم ورحمة الله وبركاته، أرغب في تأكيد حجز الحافلة الفاخرة التالية:
---
🚍 *اسم المركبة:* ${vehicleName}
---
يرجى إرسال تفاصيل العقد وتأكيد إتاحة السيارة ومواصفات الخدمة المقترحة وشكراً لكم.`;
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=966500000000&text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBook = (vehicleId: string) => {
    onSelectVehicle(vehicleId);
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'coach', label: 'حافلات وباصات كبيرة' },
    { id: 'sprinter', label: 'باصات سبرينتر وميني' },
    { id: 'van', label: 'فانات وعائلية فاخرة' },
  ];

  return (
    <section id="fleet" className="py-24 bg-luxury-navy text-white relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-luxury-gold font-sans text-sm font-semibold tracking-widest uppercase">أسطولنا الفاخر والمتطوّر</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-3">
            اختر الحافلة المناسبة لمناسبتك ورحلتك
          </h2>
          <p className="text-gray-400 font-sans mt-3 font-light text-sm">
            نوفر تشكيلة فريدة وممتازة من الباصات والفانات والميني كاب بمواصفات أمان ملكية مجهزة لراحتكم وسعادتكم في السفر.
          </p>
          <div className="w-16 h-1 bg-luxury-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-14" id="fleet-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium font-sans transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-luxury-gold to-luxury-gold-dark text-luxury-navy shadow-lg shadow-luxury-gold/25 scale-105 font-bold'
                  : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5 hover:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vehicles Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle: Vehicle) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={vehicle.id}
                className="bg-luxury-navy-light rounded-2xl overflow-hidden border border-white/5 hover:border-luxury-gold/40 transition-all duration-300 group flex flex-col justify-between shadow-[0_15px_45px_rgba(0,0,0,0.25)] h-full"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* VIP & Gold Accent Badge */}
                  {vehicle.isVip && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-luxury-gold to-luxury-gold-dark text-luxury-navy font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 fill-luxury-navy" />
                      <span>تصنيف VIP ملكي</span>
                    </span>
                  )}
                  
                  {/* Capacity Tag */}
                  <span className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white font-sans text-xs font-bold px-3 py-1 rounded-lg border border-white/10 flex items-center gap-1.5">
                    <Users2 className="w-3.5 h-3.5 text-luxury-gold" />
                    <span>{vehicle.capacity} راكب</span>
                  </span>

                  {/* Bags Tag */}
                  <span className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white font-sans text-xs font-bold px-3 py-1 rounded-lg border border-white/10 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-luxury-gold" />
                    <span>{vehicle.bags} حقيبة</span>
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Header Name */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-serif font-black text-white group-hover:text-luxury-gold transition-colors">
                        {vehicle.name}
                      </h3>
                    </div>

                    <p className="text-gray-400 text-xs sm:text-sm font-sans font-light leading-relaxed mb-4 text-right">
                      {vehicle.description}
                    </p>

                    {/* Divider */}
                    <div className="h-[1px] bg-white/5 my-4" />

                    {/* Specs / Features Bullets */}
                    <ul className="space-y-2 mb-6">
                      {vehicle.specs.slice(0, 3).map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-luxury-gold flex-shrink-0 mt-0.5" />
                          <span className="font-sans font-light leading-normal text-right">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Action */}
                  <div className="mt-auto">
                    <button
                      onClick={() => handleWhatsAppBookDirect(vehicle.name)}
                      className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold-dark hover:from-luxury-gold-dark hover:to-luxury-gold text-luxury-navy font-bold text-sm px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-luxury-gold/10"
                    >
                      <MessageSquare className="w-4 h-4 fill-luxury-navy" />
                      <span>احجز الآن عبر واتساب</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
