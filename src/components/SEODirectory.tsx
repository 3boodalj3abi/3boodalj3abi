/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

// Generates systematic high-value Arabic SEO search queries to ensure 500+ unique, highly relevant phrases
function generateSeoKeywords() {
  const actions = ['تأجير', 'إيجار', 'شركة تأجير', 'أفضل شركة تأجير', 'خدمة تأجير', 'مكتب تأجير', 'رقم حجز', 'حجز'];
  const vehicles = ['حافلات', 'باصات', 'حافلة', 'باص', 'كوستر', 'فان', 'فانات', 'باصات مرسيدس', 'حافلات مرسيدس', 'ميكروباص'];
  const specifications = ['فاخرة', 'VIP', 'حديثة', 'سياحية', 'عائلية', 'موديل حديث', 'درجة أولى', 'فخمة', 'ممتازة', 'مكيفة'];
  const locations = [
    'الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام', 'المنطقة الشرقية', 'السعودية', 
    'الطائف', 'أبها', 'تبوك', 'القصيم', 'نيوم', 'الجبيل', 'الخبر', 'حفر الباطن', 'خميس مشيط'
  ];
  const purposes = [
    'للمعتمرين والحجاج', 'لاستقبال المطارات', 'للمؤتمرات والوفود', 'للرحلات السياحية', 
    'للموظفين والشركات', 'للمدارس والجامعات', 'للمناسبات والأفراح', 'لنقل الوفود الدبلوماسية',
    'للرحلات الطويلة', 'للعائلات الكبيرة'
  ];

  const keywords: string[] = [];
  
  // Seed direct, industry-recognized primary long-tail keywords manually to guarantee pristine quality
  const primaryKeywords = [
    'تأجير حافلات الرياض فاخرة مع سائق',
    'إيجار باصات جدة نقل معتمرين',
    'مكتب تأجير باص مرسيدس 50 راكب الرياض',
    'حافلات نقل الوفود والزوار VIP السعودية',
    'باصات الكوستر 22 راكب للإيجار المعتمد بالرياض وجدة',
    'حجز فان عائلي مرسيدس فيانو استقبال مطار الرياض',
    'تأجير حافلات سياحية حديثة مكة والمدينة المنورة',
    'شركات النقل البري المعتمدة من هيئة النقل في السعودية',
    'أسعار تأجير الحافلات والفاخرة بالرياض والمحافظات',
    'ارقام شركات نقل الموظفين والعقود الشهرية والسنوية',
    'تأجير باصات رحلات سياحية داخلية وخارجية بالمملكة',
    'أفضل خدمة توصيل مطار الملك خالد الدولي بحافلات فخمة',
    'باص مرسيدس ترافيكو إيجار واستئجار لخدمات الحج والعمرة',
    'باصات تويوتا هايس للإيجار اليومي والشهري مع سائق',
    'إيجار حافلات النقل المدرسي والجامعي في دول الخليج العربي',
    'عقود باصات للمشاريع الإنشائية وشركات البناء حفر الباطن والجبيل'
  ];

  primaryKeywords.forEach(kw => keywords.push(kw));

  // Loop systematically until we exceed 510+ distinct variations
  let actIdx = 0;
  let vehIdx = 0;
  let specIdx = 0;
  let locIdx = 0;
  let purIdx = 0;

  while (keywords.length < 520) {
    const act = actions[actIdx % actions.length];
    const veh = vehicles[vehIdx % vehicles.length];
    const spec = specifications[specIdx % specifications.length];
    const loc = locations[locIdx % locations.length];
    const pur = purposes[purIdx % purposes.length];

    const phrase = `${act} ${veh} ${spec} في ${loc} ${pur}`;
    
    // Ensure uniqueness
    if (!keywords.includes(phrase)) {
      keywords.push(phrase);
    }

    // Increment indices sequentially to mix and match all possibilities
    actIdx++;
    if (actIdx % actions.length === 0) {
      vehIdx++;
      if (vehIdx % vehicles.length === 0) {
        specIdx++;
        if (specIdx % specifications.length === 0) {
          locIdx++;
          if (locIdx % locations.length === 0) {
            purIdx++;
          }
        }
      }
    }
  }

  return keywords;
}

const ALL_SEARCH_PHRASES = generateSeoKeywords();

export default function SEODirectory() {
  return (
    <section id="seo-index" className="py-2.5 bg-neutral-950/60 border-t border-white/5 relative select-none cursor-default">
      <div className="max-w-7xl mx-auto px-4 text-right">
        
        {/* Tiny Metadata Identifier for Crawlers/AdBots, extremely unobtrusive for clients */}
        <div className="flex items-center justify-end gap-1.5 mb-1 opacity-10">
          <span className="text-[8px] font-sans text-gray-500 tracking-wider">SECURE CLOUD PORTAL / SEO SITE INDEX / METADATA</span>
          <span className="w-1 h-1 rounded-full bg-emerald-500" />
        </div>

        {/* Micro-sized Keywords Cloud */}
        <div className="w-full text-justify text-[7px] leading-3 text-gray-600/15 hover:text-gray-400/40 transition-colors duration-500 font-sans max-h-[22px] overflow-y-auto pr-1 select-all select-none scrollbar-none antialiased">
          {ALL_SEARCH_PHRASES.join(' | ')}
        </div>

      </div>
    </section>
  );
}
