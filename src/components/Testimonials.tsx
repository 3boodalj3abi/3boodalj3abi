/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, ChevronRight, ChevronLeft, Quote } from 'lucide-react';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevVal) => (prevVal === 0 ? TESTIMONIALS.length - 1 : prevVal - 1));
  };

  const next = () => {
    setCurrent((prevVal) => (prevVal === TESTIMONIALS.length - 1 ? 0 : prevVal + 1));
  };

  const currentItem = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-24 bg-luxury-navy text-white relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxury-gold/5 blur-[130px] rounded-full pointer-events-none" />
      
      {/* Decorative Golden Line Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-luxury-gold font-sans text-sm font-semibold tracking-widest uppercase">ثقة وامتنان نعتز بهما</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-3">
            ماذا يقول نخب وشركاء <span className="text-luxury-gold">تأجير حافلات</span>؟
          </h2>
          <p className="text-gray-400 font-sans mt-3 text-sm font-light">
            سعدنا بخدمة كبرى العلامات التجارية، الوفود الدبلوماسية، والشركات الرائدة في المملكة. إليكم آراؤهم الموثقة.
          </p>
          <div className="w-16 h-1 bg-luxury-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel slide card */}
        <div className="relative bg-luxury-navy-light rounded-3xl p-8 sm:p-14 border border-white/5 shadow-2xl flex flex-col justify-between items-stretch min-h-[380px]">
          
          {/* Quote icon background ornament */}
          <div className="absolute top-8 left-8 text-white/5 pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 relative"
            >
              {/* Rating stars */}
              <div className="flex gap-1 justify-end">
                {[...Array(currentItem.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-luxury-gold fill-luxury-gold" />
                ))}
              </div>

              {/* Real comment text */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-sans font-light leading-relaxed text-right md:line-clamp-4">
                &ldquo;{currentItem.comment}&rdquo;
              </p>

              {/* Separator */}
              <div className="h-[1px] bg-white/5 pt-4" />

              {/* Author Info */}
              <div className="flex items-center justify-between gap-4 pt-1 flex-wrap">
                <span className="text-xs text-luxury-gold font-mono">{currentItem.date}</span>
                
                <div className="text-right">
                  <h4 className="text-lg font-serif font-black text-white">{currentItem.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-sans mt-0.5">{currentItem.role}</p>
                  <p className="text-[10px] text-luxury-gold-light font-sans font-medium mt-1">تأجير في مدينة {currentItem.city}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controller buttons (Swapped in RTL) */}
          <div className="flex items-center gap-3 mt-8 justify-start">
            <button
              onClick={next}
              className="p-3 bg-white/5 hover:bg-luxury-gold hover:text-luxury-navy rounded-xl border border-white/10 hover:border-transparent transition-all"
              aria-label="المراجعة التالية"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <span className="font-mono text-xs text-gray-400">
              {current + 1} / {TESTIMONIALS.length}
            </span>

            <button
              onClick={prev}
              className="p-3 bg-white/5 hover:bg-luxury-gold hover:text-luxury-navy rounded-xl border border-white/10 hover:border-transparent transition-all"
              aria-label="المراجعة السابقة"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
