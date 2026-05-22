/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Bus, Users, Shield, Clock, HandCoins, Disc } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      title: 'مجموعة متنوعة من الحافلات',
      desc: 'نوفر أسطولاً متكاملاً من الحافلات الفاخرة، الميني باصات، الفانات التنفيذية الكبيرة، وسيارات الـ VIP المجهزة لجميع أعداد الركاب في رحلاتكم.',
      icon: Bus,
    },
    {
      title: 'فريق محترف وملتزم',
      desc: 'فريق عمل متكامل من منسقي الرحلات، الدعم الفني، وخدمة العملاء يسهر على تتبع وسير رحلتك من خطوة التخطيط حتى الوصول الآمن.',
      icon: Users,
    },
    {
      title: 'تجهيزات وتقنيات حديثة',
      desc: 'حافلاتنا مزودة بشبكات واي فاي مجانية فائقة السرعة، شواحن ذكية للتلفونات، شاشات ترفيهية خاصة، ثلاجات للمشروبات وبنية تكييف مخصصة للخليج.',
      icon: Disc,
    },
    {
      title: 'سائقون مؤهلون ومحترفون',
      desc: 'نخبة من السائقين الحاصلين على تراخيص تشغيل رسمية، مفحوصين بالكامل، وملمين بالمسارات السريعة والمعالم السياحية والطرق في السعودية.',
      icon: Shield,
    },
    {
      title: 'خدمة متوفرة على مدار الساعة 24/7',
      desc: 'دعم فني وتنسيق اتصالات متاح دون توقف طيلة أيام الأسبوع لتلبية طلبياتكم المستعجلة، التعديلات الطارئة، واستقبال الوفود في أي وقت.',
      icon: Clock,
    },
    {
      title: 'حجز مرن وتأكيد سريع',
      desc: 'نقدم نظام حجز مرن وسهل مع تواصل فوري ومباشر عبر واتساب لضمان حصولكم على الحافلة المطلوبة في أسرع وقت وبكل أمان.',
      icon: HandCoins,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id="features"
      className="py-24 bg-luxury-navy-light text-white relative overflow-hidden"
    >
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-luxury-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      {/* Decorative Golden Line Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
        
        {/* Header Title with Custom Design Elements */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-luxury-gold font-sans text-sm font-semibold tracking-widest uppercase">ميزاتنا وخدماتنا الفريدة</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-3 leading-tight">
            ماذا نقدم لعملائنا في <span className="text-luxury-gold">تأجير حافلات</span>؟
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold-dark via-luxury-gold to-luxury-gold-light mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic Motion Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresList.map((feat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, borderColor: 'rgba(212, 175, 55, 0.4)' }}
              className="p-8 pb-10 bg-luxury-navy border border-white/5 rounded-2xl group transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col items-start text-right"
            >
              {/* Golden circular outline icon structure */}
              <div className="p-4 bg-luxury-navy-light rounded-xl border border-white/10 group-hover:border-luxury-gold/30 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-navy transition-all duration-500 mb-6 flex items-center justify-center shadow-lg">
                <feat.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-serif font-bold text-white group-hover:text-luxury-gold-light transition-colors duration-300">
                {feat.title}
              </h3>
              
              <p className="text-gray-400 mt-4 leading-relaxed text-sm font-sans font-light">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
