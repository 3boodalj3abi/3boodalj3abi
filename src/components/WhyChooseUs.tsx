/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, Compass, Timer, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'أكثر من 10 سنوات خبرة',
      desc: 'حضور عريق في السوق السعودية نابع من تنفيذ ملايين رحلات نقل كبار الشخصيات والشركات والهيئات والمجموعات السياحية بنجاح.',
      icon: Award,
    },
    {
      title: 'أسطول حديث وفاخر',
      desc: 'نمتلك أحدث النماذج المحدثة سنوياً من سيارات مرسيدس الرائدة من حافلات وباصات لتواكب فخامة تطلعاتكم وأناقتكم.',
      icon: Sparkles,
    },
    {
      title: 'تغطية جميع مدن السعودية',
      desc: 'نسير حافلاتنا في كافة مدن ومحافظات المملكة العربية السعودية لضمان تواصل وخدمة سلسة لكم في أي بقعة من أرجاء الوطن الغالي.',
      icon: Compass,
    },
    {
      title: 'خدمة عملاء ممتازة',
      desc: 'ممثلو خدمة العملاء متاحون طيلة اليوم لتلبية متطلباتكم، تحديث الحجوزات، والإجابة عن جميع استفساراتكم بكل رحابة صدر وود.',
      icon: HeartHandshake,
    },
    {
      title: 'التزام بالمواعيد بالثانية',
      desc: 'نقدر وقتكم الثمين، لذا نلتزم التزاماً صارماً بالمواعيد المحددة والوصول إلى نقطة اللقاء قبل توقيت الرحلة للتجهيز والاستعداد.',
      icon: Timer,
    },
    {
      title: 'راحة وأمان تام وحماية',
      desc: 'مركباتنا مجهزة بأعلى مواصفات السلامة والتحسس الإلكتروني للطرق وخاضعة لتأمين شامل لضمان سلامة وراحة مطلقة للمسافرين.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-luxury-navy text-white relative">
      {/* Background Ornaments */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      {/* Decorative Golden Line Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
        
        {/* Why choose us header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-luxury-gold font-sans text-sm font-semibold tracking-widest uppercase">رؤية الريادة والامتياز</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-3">
            لماذا يختار النخبة شركة <span className="text-luxury-gold">تأجير حافلات</span>؟
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-luxury-gold-dark via-luxury-gold to-luxury-gold-light mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Box with side panel and grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Side Banner (5 Columns) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden group shadow-2xl border border-white/5 h-[480px]">
            <img
              src="https://i.postimg.cc/cJdmmftK/Chat-GPT-Image-22-mayw-2026-10-02-58-m.png"
              alt="Luxury Bus Mercedes interior"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-black/75 backdrop-blur-md p-6 text-right border-t border-white/10 flex flex-col justify-end">
              <span className="text-luxury-gold text-sm font-sans font-bold">بوابة النقل الفخم</span>
              <h3 className="text-xl sm:text-2xl font-serif font-black text-white mt-1.5 leading-normal">
                رحلاتكم برعايتنا: راحة فائقة، أمان متكامل، وضيافة مستحقة تليق بكم.
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm font-sans font-light mt-3 leading-relaxed">
                نسخر كافة طاقات أسطولنا وخبرات سائقينا لنمنحكم ذكريات وتجربة ريادة منقطعة النظير في السفر والترحال داخل المملكة العربية السعودية.
              </p>
            </div>
          </div>

          {/* Points Grid (7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {points.map((point, index) => (
              <div 
                key={index} 
                className="bg-luxury-navy-light/40 border border-white/5 rounded-2xl p-6 hover:border-luxury-gold/25 hover:bg-luxury-navy-light/80 transition-all duration-300 flex flex-col items-start text-right shadow-md"
              >
                <div className="p-3.5 bg-luxury-navy rounded-xl border border-white/5 text-luxury-gold mb-4 shadow-lg flex items-center justify-center">
                  <point.icon className="w-5.5 h-5.5" />
                </div>
                
                <h4 className="text-lg font-serif font-bold text-white mb-2">
                  {point.title}
                </h4>
                
                <p className="text-gray-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
