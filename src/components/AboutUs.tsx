/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldAlert, Compass, Target, Sparkles, Milestone } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-luxury-navy-light text-white relative">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      {/* Decorative Golden Line Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
        
        {/* About corporate profile layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* text description and corporate statements (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-luxury-gold font-sans text-sm font-semibold tracking-widest uppercase">من نحن وعن الشركة</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-normal">
              شركة <span className="text-luxury-gold">تأجير حافلات</span> لنقل كبار الشخصيات والوفود السياحية بالمملكة
            </h2>
            <div className="w-16 h-1 bg-luxury-gold rounded-full" />
            
            <p className="text-gray-300 text-sm sm:text-lg font-sans font-light leading-relaxed">
              &ldquo;تأجير حافلات&rdquo; هي الذراع الرائد وبوابتك المتخصصة في تأجير الحافلات والباصات والفانات الفاخرة داخل المملكة العربية السعودية. نوفر حلول نقل راقية ومتكاملة للأفراد والشركات والسياح بأعلى معايير الجودة والراحة المطلقة التي تليق بنبل وتوقعات ضيوفنا الكرام.
            </p>

            <p className="text-gray-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
              منذ انطلاقتنا، كرسنا أحدث الابتكارات في إدارة أسطول النقل البري في الرياض وجدة وكافة مدن ومحافظات المملكة لتسهيل تجربة السفر. نلتزم بشروط الهيئة العامة للنقل في السعودية ومصنفون كأحد الرواد المعتمدين في النقل السياحي والوفدي للأمتياز التام.
            </p>

            {/* Sub-cards Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div className="p-5 rounded-xl bg-luxury-navy border border-white/5 space-y-2">
                <div className="flex items-center gap-2 justify-end mb-2">
                  <span className="text-sm font-serif font-bold text-white">رؤيـتـنـا</span>
                  <Target className="w-4 h-4 text-luxury-gold" />
                </div>
                <p className="text-gray-400 text-xs font-sans font-light leading-relaxed">
                  أن نكون المعيار الأول والأكثر موثوقية وفخامة لخدمات النقل السياحي والوفدي للشركات الكبرى والأفراد في عموم الخليج العربي.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-luxury-navy border border-white/5 space-y-2">
                <div className="flex items-center gap-2 justify-end mb-2">
                  <span className="text-sm font-serif font-bold text-white">رسـالـتـنـا</span>
                  <Milestone className="w-4 h-4 text-luxury-gold" />
                </div>
                <p className="text-gray-400 text-xs font-sans font-light leading-relaxed">
                  تطوير وابتكار خدمات نقل فاخرة وسريعة تلبي وتفوق سقف طموح العميل بمرونة عالية والتزام مطلق بالسلامة والمواعيد.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Showcase collage (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-luxury-gold/20 h-[380px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200"
                alt="Our Luxury Coach Team in Riyadh"
                className="w-full h-full object-cover brightness-[0.4]"
                referrerPolicy="no-referrer"
              />
              
              {/* Badge Overlay card */}
              <div className="absolute top-6 left-6 bg-luxury-navy/90 backdrop-blur-md p-4 rounded-xl border border-luxury-gold/30 text-right space-y-1 shadow-lg max-w-[210px]">
                <div className="flex items-center gap-2 justify-end">
                  <span className="text-xs text-white font-serif font-black">ترخيص تشغيل معتمد</span>
                  <Sparkles className="w-4.5 h-4.5 text-luxury-gold" />
                </div>
                <p className="text-[10px] text-gray-400 font-sans font-light">
                  مصدق من الهيئة العامة للنقل لمزاولة خدمات النقل والليموزين السياحي في السعودية.
                </p>
              </div>

              {/* Core Values card overlay bottom */}
              <div className="absolute bottom-6 inset-x-6 bg-gradient-to-r from-luxury-navy/95 to-luxury-navy/85 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-right">
                <span className="text-[10px] text-luxury-gold font-sans font-semibold">باقة الشراكات الاستراتيجية 🕋</span>
                <p className="text-xs text-slate-200 font-sans font-light mt-1.5 leading-relaxed">
                  نوفر حلول نقل من وإلى مطارات الرياض وجدة ومكة المكرمة لكبرى منظمات السياحة الدينية وخدمات الحج والعمرة الفاخرة للوفود VIP.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
