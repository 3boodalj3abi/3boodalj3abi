/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bus, Mail, MapPin, Phone, MessageSquare, Shield, Milestone } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="footer" className="bg-luxury-navy text-white relative border-t border-luxury-gold/15">
      {/* Absolute Overlays */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-luxury-gold/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Main content grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 text-right">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & Corporate profile */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 justify-end cursor-pointer" onClick={() => handleScrollTo('#home')}>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-black tracking-wide text-white flex items-center gap-1.5 justify-end">
                  <span className="text-luxury-gold font-sans">تأجير</span>
                  <span>حافلات</span>
                </div>
                <p className="text-[9px] text-luxury-gold-light font-sans font-light tracking-widest text-right mt-[-3px]">
                  نخبة الفخامة والخدمة بالمملكة 🇸🇦
                </p>
              </div>
              <div className="p-2.5 bg-gradient-to-br from-luxury-gold to-luxury-gold-dark rounded-xl shadow-lg border border-luxury-gold-light/20 flex items-center justify-center">
                <Bus className="h-6 w-6 text-luxury-navy" />
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
              منصة تأجير حافلات متخصصة في توفير كبرى الباصات الفاخرة والفانات وسيارات السبرينتر VIP المجهزة بأعلى مواصفات الراحة والسلامة لرحلات المجموعات والوفود الدبلوماسية وسياح المملكة.
            </p>

            {/* Certifications & Badges placeholder */}
            <div className="flex items-center gap-3 justify-end flex-wrap pt-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-500 font-sans font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <Shield className="w-3 h-3" />
                <span>مصرح ومرخص رسمياً</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] text-luxury-gold font-sans font-semibold bg-luxury-gold/10 px-2.5 py-1 rounded-full border border-luxury-gold/20">
                <Milestone className="w-3 h-3" />
                <span>تغطية 100% للمدن</span>
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-5">
            <h4 className="text-base font-serif font-bold text-white relative pb-2.5 after:absolute after:bottom-0 after:right-0 after:w-12 after:h-[1px] after:bg-luxury-gold">
              روابط سريعة ومباشرة
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'الرئيسية والترحيب', href: '#home' },
                { name: 'استعراض وحجز الحافلات', href: '#fleet' },
                { name: 'أبرز مميزات خدماتنا', href: '#features' },
                { name: 'شركاء النجاح وآراء العملاء', href: '#testimonials' },
                { name: 'من نحن وقيم الشركة', href: '#about' },
                { name: 'الأسئلة الشائعة وتأكيد الحجز', href: '#faq' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScrollTo(link.href)}
                    className="text-gray-400 text-xs sm:text-sm font-sans hover:text-luxury-gold transition-colors duration-200"
                  >
                    ✦ {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet quick category links */}
          <div className="space-y-5">
            <h4 className="text-base font-serif font-bold text-white relative pb-2.5 after:absolute after:bottom-0 after:right-0 after:w-12 after:h-[1px] after:bg-luxury-gold">
              شمال وجنوب أسطولنا
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'حافلات مرسيدس الإمبراطورية 50 راكب', href: '#fleet' },
                { name: 'حافلات مرسيدس كبار الشخصيات 25 راكب', href: '#fleet' },
                { name: 'باصات مرسيدس سبرينتر VIP لـ 12 راكب', href: '#fleet' },
                { name: 'سيارة مرسيدس فيانو VIP لـ 5 ركاب', href: '#fleet' },
                { name: 'فان مرسيدس فيتو العائلية لـ 5 ركاب', href: '#fleet' },
                { name: 'ميني باص تويوتا الفاخرة لـ 14 راكب', href: '#fleet' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScrollTo(link.href)}
                    className="text-gray-400 text-xs sm:text-sm font-sans hover:text-luxury-gold transition-colors duration-200"
                  >
                    🚍 {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct contact and Location */}
          <div className="space-y-5">
            <h4 className="text-base font-serif font-bold text-white relative pb-2.5 after:absolute after:bottom-0 after:right-0 after:w-12 after:h-[1px] after:bg-luxury-gold">
              معلومات الاتصال الفوري
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 justify-end">
                <div className="text-right">
                  <span className="text-gray-400 text-[10px] font-sans block">المكتب الرئيسي بالرياض:</span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xs sm:text-sm font-sans hover:text-luxury-gold transition-colors"
                  >
                    حي العليا - الرياض، المملكة العربية السعودية
                  </a>
                </div>
                <MapPin className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
              </li>

              <li className="flex items-start gap-3 justify-end">
                <div className="text-right">
                  <span className="text-gray-400 text-[10px] font-sans block">عبر الهاتف المباشر:</span>
                  <a
                    href="tel:+966500000000"
                    className="text-white text-xs sm:text-sm font-mono hover:text-luxury-gold transition-colors"
                  >
                    +966 50 000 0000
                  </a>
                </div>
                <Phone className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
              </li>

              <li className="flex items-start gap-3 justify-end">
                <div className="text-right">
                  <span className="text-gray-400 text-[10px] font-sans block">واتساب السريع والمباشر:</span>
                  <a
                    href="https://wa.me/966500000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xs sm:text-sm font-mono hover:text-luxury-gold transition-colors"
                  >
                    +966 50 000 0000
                  </a>
                </div>
                <MessageSquare className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
              </li>

              <li className="flex items-start gap-3 justify-end">
                <div className="text-right">
                  <span className="text-gray-400 text-[10px] font-sans block">البريد الإلكتروني للأعمال:</span>
                  <a
                    href="mailto:info@luxurybus-rental.sa"
                    className="text-white text-xs sm:text-sm font-sans hover:text-luxury-gold transition-colors"
                  >
                    info@luxurybus-rental.sa
                  </a>
                </div>
                <Mail className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
              </li>
            </ul>
          </div>

        </div>

        {/* Divider line page */}
        <div className="h-[1px] bg-white/5 my-12" />

        {/* Bottom footer bar copyrights */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap text-center">
          <p className="text-gray-500 text-xs font-sans tracking-wide">
            © {new Date().getFullYear()} تأجير حافلات فاخرة. جميع الحقوق محفوظة لوزارة النقل والهيئة التنظيمية بالمملكة.
          </p>
          
          <div className="flex gap-4 text-[10px] sm:text-xs text-gray-500">
            <a href="#faq" className="hover:text-luxury-gold transition-colors">سياسة الخصوصية</a>
            <span>•</span>
            <a href="#faq" className="hover:text-luxury-gold transition-colors">الشروط والأحكام</a>
            <span>•</span>
            <a href="#booking" className="hover:text-luxury-gold transition-colors">تفاصيل الفوترة والضمان</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
