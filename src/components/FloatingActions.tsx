/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 items-end select-none">
      
      {/* WhatsApp Floating Trigger */}
      <motion.a
        href="https://wa.me/966500000000"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-[0_4px_20px_rgba(16,185,129,0.4)] transition-all cursor-pointer border border-emerald-400/25"
      >
        {/* Tooltip on hover */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-luxury-navy text-white text-xs font-sans font-bold py-2 px-4 rounded-xl shadow-xl transition-all whitespace-nowrap border border-luxury-gold/30 pointer-events-none">
          دردشة واتساب الفورية 🟢
        </span>
        
        {/* Pulsing visual halo */}
        <span className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-30 pointer-events-none -z-10" />
        
        <MessageSquare className="w-6 h-6 fill-white text-emerald-500" />
      </motion.a>

      {/* Direct Call Floating Trigger */}
      <motion.a
        href="tel:+966500000000"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-luxury-gold to-luxury-gold-dark hover:from-luxury-gold-dark hover:to-luxury-gold text-luxury-navy rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer border border-luxury-gold-light/35"
      >
        {/* Tooltip on hover */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-luxury-navy text-white text-xs font-sans font-bold py-2 px-4 rounded-xl shadow-xl transition-all whitespace-nowrap border border-luxury-gold/30 pointer-events-none">
          اتصال هاتفي مباشر 📞
        </span>
        
        {/* Pulsing visual halo */}
        <span className="absolute inset-0 bg-luxury-gold rounded-full animate-pulse opacity-15 pointer-events-none -z-10" />

        <Phone className="w-5 h-5 fill-luxury-navy" />
      </motion.a>

    </div>
  );
}
