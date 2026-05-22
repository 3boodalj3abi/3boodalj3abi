/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-luxury-navy-light text-white relative">
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative Golden Line Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-luxury-gold font-sans text-sm font-semibold tracking-widest uppercase">شروط وإجراءات وإجابات واضحة</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-3">
            الأسئلة الشائعة وتفاصيل الحجوزات
          </h2>
          <p className="text-gray-400 font-sans mt-3 text-sm font-light">
            نوفر لكم إجابات سريعة وتفاصيل متكاملة عن إجراءات الدفع، تراخيص النقل والرحلات السياحية الطويلة بالمملكة.
          </p>
          <div className="w-16 h-1 bg-luxury-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Collapsible Accordion Grid Container */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-luxury-navy rounded-2xl border border-white/5 hover:border-luxury-gold/30 transition-all duration-300 overflow-hidden shadow-md"
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-right focus:outline-none focus:ring-1 focus:ring-luxury-gold/25"
                  aria-expanded={isOpen}
                >
                  {/* Chevron down indicator */}
                  <div className={`p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-all transform ${isOpen ? 'rotate-180 text-luxury-gold bg-luxury-gold/10' : ''}`}>
                    <ChevronDown className="w-4 h-4 transition-transform" />
                  </div>

                  {/* Question and icon on the right */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm sm:text-base font-serif font-bold text-white tracking-wide">
                      {faq.question}
                    </span>
                    <HelpCircle className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  </div>
                </button>

                {/* Animated content body with AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/5"
                    >
                      <div className="p-6 bg-luxury-navy-light/45 text-sm sm:text-base text-gray-300 font-sans font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
