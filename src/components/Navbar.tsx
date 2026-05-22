/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Bus, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'أسطولنا', href: '#fleet' },
    { name: 'المميزات', href: '#features' },
    { name: 'لماذا نحن', href: '#why-us' },
    { name: 'عن الشركة', href: '#about' },
    { name: 'آراء العملاء', href: '#testimonials' },
    { name: 'شروط الدفع والأسئلة', href: '#faq' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 rtl ${
        isScrolled
          ? 'bg-luxury-navy/90 backdrop-blur-md border-b border-luxury-gold/25 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-luxury-navy/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => handleScrollTo('#home')}>
            <div className="relative p-2.5 bg-gradient-to-br from-luxury-gold to-luxury-gold-dark rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.3)] border border-luxury-gold-light/20 flex items-center justify-center">
              <Bus className="h-6 w-6 text-luxury-navy" />
              <div className="absolute -top-1 -right-1 bg-emerald-500 w-3 h-3 rounded-full border-2 border-luxury-navy animate-pulse" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif font-black tracking-wide text-white flex items-center gap-1.5">
                <span className="text-luxury-gold font-sans">تأجير</span>
                <span>حافلات</span>
              </div>
              <p className="text-[9px] text-luxury-gold-light font-sans font-light tracking-widest text-right mt-[-3px]">
                نخبة الفخامة والخدمة بالمملكة 🇸🇦
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScrollTo(item.href)}
                className="text-gray-300 font-sans hover:text-luxury-gold text-sm font-medium transition-colors duration-300 relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-luxury-gold to-luxury-gold-dark group-hover:w-full transition-all duration-300 rounded" />
              </button>
            ))}
          </div>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+966537352271"
              className="flex items-center gap-2 text-white/90 hover:text-luxury-gold text-xs font-mono transition-all duration-300 bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-lg border border-white/10"
            >
              <Phone className="h-3.5 w-3.5 text-luxury-gold animate-bounce" />
              <span>+966 53 735 2271</span>
            </a>
            
            <button
              onClick={() => handleScrollTo('#booking')}
              className="bg-gradient-to-r from-luxury-gold to-luxury-gold-dark hover:from-luxury-gold-dark hover:to-luxury-gold text-luxury-navy font-bold text-sm px-6 py-2.5 rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_22px_rgba(212,175,55,0.35)] transform hover:-translate-y-0.5 border border-luxury-gold-light/30 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-luxury-navy" />
              <span>احجز الآن</span>
            </button>
          </div>

          {/* Hamburger button for Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleScrollTo('#booking')}
              className="sm:hidden bg-gradient-to-r from-luxury-gold to-luxury-gold-dark text-luxury-navy font-bold text-xs px-3.5 py-2 rounded-lg shadow-md"
            >
              احجز
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-all border border-transparent hover:border-white/10"
              aria-expanded="false"
            >
              <span className="sr-only">فتح القائمة</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-luxury-navy border-b border-luxury-gold/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScrollTo(item.href)}
                  className="block w-full text-right px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-luxury-gold hover:bg-luxury-navy-light/55 transition-all"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-4 pb-2 border-t border-white/5 flex flex-col gap-3">
                <a
                  href="tel:+966537352271"
                  className="flex items-center justify-center gap-2 text-white/90 hover:text-luxury-gold text-sm font-mono py-3 bg-white/5 rounded-xl border border-white/10"
                >
                  <Phone className="h-4 w-4 text-luxury-gold" />
                  <span>+966 53 735 2271</span>
                </a>
                
                <button
                  onClick={() => handleScrollTo('#booking')}
                  className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold-dark text-luxury-navy text-center font-bold py-3.5 rounded-xl shadow-[0_4px_15px_rgba(212,175,55,0.2)] flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span>احجز رحلتك الفاخرة الآن</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
