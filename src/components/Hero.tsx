/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, ArrowDownLeft, Compass, Award, Users } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-luxury-navy overflow-hidden pt-28 pb-16"
    >
      {/* Background Image with Full Opacity and Brightness */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center brightness-100 saturate-[1.1]"
        style={{
          backgroundImage: `url('https://i.postimg.cc/cJdmmftK/Chat-GPT-Image-22-mayw-2026-10-02-58-m.png')`,
        }}
      />
      
      {/* Subtle fade-out overlays to merge with header and next sections smoothly without altering the main image transparency */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-luxury-navy/80 to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-luxury-navy to-transparent z-10 pointer-events-none" />

      {/* Elegant Radial Glow Accent behind glass pane */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none z-0" />

      {/* Main Content Area in Glassmorphic Container for high readability and premium aesthetic */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 text-center py-8">
        <div className="bg-luxury-navy/85 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Superior Gold Line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />

          {/* Superior Top Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luxury-gold/15 border border-luxury-gold/30 text-luxury-gold mb-8 text-xs sm:text-sm font-sans tracking-wide mx-auto"
          >
            <Award className="h-4 w-4 text-luxury-gold" />
            <span className="font-extrabold">الشركة رقم #1 لتأجير الحافلات الفاخرة بالمملكة</span>
          </motion.div>

          {/* Catchy Large Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-snug md:leading-normal max-w-4xl mx-auto drop-shadow-md pb-2"
          >
            أفضل خدمات تأجير <span className="text-transparent bg-clip-text bg-gradient-to-l from-luxury-gold-light via-luxury-gold to-luxury-gold-dark font-sans font-bold">الحافلات والباصات الفاخرة</span> في السعودية
          </motion.h1>

          {/* Sophisticated Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 font-sans font-light max-w-2xl mx-auto leading-relaxed"
          >
            نوفر أحدث الحافلات والفانات الفاخرة لجميع الرحلات السياحية، الشركات، المناسبات، والمطارات بخبرة تتجاوز 10 سنوات.
          </motion.p>

          {/* Premium Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
          >
            <button
              onClick={() => handleScrollTo('#booking')}
              className="w-full sm:w-auto bg-gradient-to-r from-luxury-gold to-luxury-gold-dark hover:from-luxury-gold-dark hover:to-luxury-gold text-luxury-navy font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-300 shadow-[0_5px_22px_rgba(212,175,55,0.30)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.45)] transform hover:-translate-y-0.5 border border-luxury-gold-light/20 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <ShieldCheck className="w-5 h-5" />
              <span>احجز حافلتك الآن</span>
            </button>

            <button
              onClick={() => handleScrollTo('#fleet')}
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-300 border border-white/10 hover:border-luxury-gold/40 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
            >
              <Compass className="w-5 h-5 text-luxury-gold-light" />
              <span>استعرض الحافلات</span>
            </button>
          </motion.div>

          {/* Quick Trust Statistics Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { label: 'سنة خبرة موثوقة', value: '+10', icon: Award },
              { label: 'حافلة حديثة وفاخرة', value: '+50', icon: ShieldCheck },
              { label: 'سائق محترف ومفحوص', value: '100%', icon: Users },
              { label: 'عميل سعيد وممتن', value: '+25K', icon: ShieldCheck },
            ].map((stat, i) => (
              <div
                key={i}
                className="relative p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-luxury-gold/40 transition-all duration-300 flex flex-col items-center justify-center"
              >
                <div className="absolute top-1.5 right-1.5 text-white/5 group-hover:text-luxury-gold/10 transition-colors duration-300">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-xl sm:text-2xl font-mono text-luxury-gold font-bold">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-1 font-sans font-medium text-center">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          onClick={() => handleScrollTo('#features')}
          className="mt-10 inline-flex flex-col items-center gap-1.5 text-gray-400 hover:text-luxury-gold text-xs font-sans cursor-pointer mx-auto group"
        >
          <span>اسحب لأسفل لاستكشاف المزيد</span>
          <ArrowDownLeft className="w-4 h-4 text-luxury-gold transition-transform group-hover:scale-125" />
        </motion.div>

      </div>
    </section>
  );
}
