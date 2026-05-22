/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Shield, Scale, Coins, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LegalModalsProps {
  activeModal: 'privacy' | 'terms' | 'refund' | null;
  onClose: () => void;
}

export default function LegalModals({ activeModal, onClose }: LegalModalsProps) {
  
  const renderContent = () => {
    switch (activeModal) {
      case 'privacy':
        return (
          <div className="space-y-6 text-right font-sans">
            <div className="flex items-center gap-3 justify-end border-b border-white/10 pb-4">
              <h3 className="text-xl sm:text-2xl font-serif font-black text-white">سياسة خصوصية البيانات</h3>
              <Shield className="w-6 h-6 text-luxury-gold shrink-0" />
            </div>
            
            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed overflow-y-auto max-h-[60vh] pr-1 scrollbar-thin scrollbar-thumb-luxury-gold/20">
              <p className="font-bold text-white text-sm sm:text-base">تلتزم منصة "تأجير حافلات فاخرة بالمملكة" بحفظ خصوصية بيانات عملائها وزوار الموقع، وتعمل وفق أنظمة الهيئة العامة للنقل والتشريعات السعودية المعمول بها لحماية المعطيات الشخصية.</p>
              
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                <h4 className="font-bold text-luxury-gold">1. البيانات التي يتم جمعها</h4>
                <p>نقوم بجمع البيانات اللازمة لتقديم خدمة النقل وصياغة العقود فقط، وتشمل:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>الاسم الكامل لمقدم الطلب أو ممثل الوفد.</li>
                  <li>رقم الجوال الفعال (لتأكيد الجدول والمواعيد ومشاركتها مع السائق).</li>
                  <li>بيانات الرحلة (نقاط الانطلاق، المقصد، المواعيد ونوع الحافلة).</li>
                  <li>العنوان والبريد الإلكتروني للشركات والمؤسسات لإصدار الفواتير والأوراق الرسمية.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white">2. كوكيز وتتبع التصفح</h4>
                <p>يستخدم موقعنا بعض ملفات تعريف الارتباط الأساسية (Cookies) لتحسين جودة التصفح وتزويد زوارنا بتجربة سلسة، بالإضافة إلى تتبع مؤشرات الأداء الإعلاني متسقاً بالكامل مع معايير وسياسات إعلانات جوجل الآمنة التي تحظر جمع المعلومات الحساسة للمستخدمين.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white">3. سرية البيانات ومشاركتها</h4>
                <p>نحن نلتزم بمسؤوليتنا القانونية الكاملة بعدم تداول، بيع، أو مشاركة معلوماتك وهاتفك مع أي طرف ثالث لأغراض تسويقية أو غير قانونية. يتم حفظ البيانات في خوادم سحابية آمنة ومحمية، ولا يتم الإفصاح عن البيانات إلا في الحالات التالية:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>لأغراض الامتثال لتعليمات الهيئة العامة للنقل أو الجهات الأمنية لتصاريح السفر والتبليغ عن الركاب.</li>
                  <li>تزويد كابتن وتجهيزات الحافلة باسم ورقم العميل لتسهيل التواصل والوصول للمكان المطلوب.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white">4. تعديل وحذف البيانات</h4>
                <p>يحق لجميع عملائنا التواصل معنا عبر القنوات المتاحة وتعديل بياناتهم، أو طلب حذفها بالكامل من سجلاتنا فور انتهاء تنفيذ عقد حجز الحافلة واستكمال الإجراءات الرسمية للخدمة مع الجهات الإدارية المعتمدة.</p>
              </div>

              <div className="p-3 bg-luxury-gold/5 border border-luxury-gold/20 rounded-xl flex gap-3 text-[11px] text-gray-300">
                <p className="flex-1 leading-normal text-right">
                  نحن نضمن حماية معلومات عملائنا كأولوية قصوى لسمعة أعمالنا وامتثالاً لقواعد حماية المستهلك والهيئة التنظيمية للنقل والاتصالات بالمملكة العربية السعودية.
                </p>
                <AlertCircle className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
              </div>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-6 text-right font-sans">
            <div className="flex items-center gap-3 justify-end border-b border-white/10 pb-4">
              <h3 className="text-xl sm:text-2xl font-serif font-black text-white">الشروط والأحكام العامة</h3>
              <Scale className="w-6 h-6 text-luxury-gold shrink-0" />
            </div>
            
            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed overflow-y-auto max-h-[60vh] pr-1 scrollbar-thin scrollbar-thumb-luxury-gold/20">
              <p className="font-bold text-white text-sm sm:text-base">تحدد هذه الاتفاقية الأسس القانونية لاستئجار الحافلات والمشاوير السياحية والخدمية من منصتنا المعتمدة في المملكة العربية السعودية.</p>

              <div className="space-y-2">
                <h4 className="font-bold text-white">1. الحجز وعقود الإيجار</h4>
                <p>طلب الحجز المبدئي المنفذ عبر المنصة أو وتساب يعتبر طلباً تسعيرياً وتأكيداً مبدئياً على نية التعاقد. لا تصبح الخدمة ملزمة قانونياً إلا بعد إجراءات الحجز المتمثلة في:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>إصدار العقد الرسمي المعتمد من هيئة النقل برقم وتاريخ ثابتين.</li>
                  <li>سداد الدفعة الأولى أو كامل قيمة الحجز بحسب الاتفاق والفوترة الصادرة.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white">2. تحديد الأسعار والفوترة</h4>
                <p>جميع أسعار اليوم والمشوار المذكورة بالمنصة هي أسعار قياسية واسترشادية تختلف تبعاً لمواسم السياحة الدينية (مثل الحج والعمر والزيارات) أو تغير أسعار المحروقات الوطنية أو المسافات الشاسعة الإضافية بين مدن المملكة. يتم التوضيح والالتزام النهائي بالسعر المدرج في الفاتورة المكتوبة الرسمية الصادرة للعميل دون أي رسوم مخفية.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white">3. السلامة والالتزامات داخل الحافلة</h4>
                <ul className="list-disc list-inside space-y-1.5 text-gray-400">
                  <li>يمنع منعاً باتاً ممارسة التدخين بجميع أشكاله داخل الحافلة لضمان سلامة الركاب وأنظمة الحماية من الحريق.</li>
                  <li>يلتزم العميل بالحفاظ على مكونات الحافلة الفاخرة وشاشاتها ومقاعد الجلد وتتحمل الجهة المستأجرة أي أضرار ناتجة عن سوء الاستخدام.</li>
                  <li>جميع السائقين لدينا مدربون وملتزمون بقوانين المرور في المملكة، ولا يلتزم السائق بأي توجيه يخالف أنظمة السير والسلامة لمستأجر الباص.</li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-1 text-[11px] sm:text-xs">
                <p className="font-bold text-white text-right">ملاحظة تنظيمية هامة:</p>
                <p className="text-gray-400">تخضع هذه الاتفاقية وتفسر بموجب الأنظمة والقوانين السارية في المملكة العربية السعودية، وتختص محاكم المملكة بالنظر بأي خلاف قد ينشأ لا سمح الله.</p>
              </div>
            </div>
          </div>
        );

      case 'refund':
        return (
          <div className="space-y-6 text-right font-sans">
            <div className="flex items-center gap-3 justify-end border-b border-white/10 pb-4">
              <h3 className="text-xl sm:text-2xl font-serif font-black text-white">سياسة الإلغاء، الاسترجاع والفوترة</h3>
              <Coins className="w-6 h-6 text-luxury-gold shrink-0" />
            </div>
            
            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed overflow-y-auto max-h-[60vh] pr-1 scrollbar-thin scrollbar-thumb-luxury-gold/20">
              <p className="font-bold text-white text-sm sm:text-base">نعمل في منصة تأجير الحافلات الفاخرة على توضيح إجراءاتنا المالية لضمان أعلى مستويات الأمان المالي والمصداقية مع عملائنا الكرام وممتثلاً بكل دقة لتعليمات الإعلانات وحماية المستهلك.</p>

              <div className="space-y-2">
                <h4 className="font-bold text-white">1. قنوات ووسائل الدفع المقبولة</h4>
                <p>يتم سداد الحجوزات وإصدار الفواتير الضريبية المعتمدة عبر الوسائل التالية حصراً:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>التحويل البنكي المباشر على الحساب المصرفي الرسمي للمؤسسة والشركة المعتمدة.</li>
                  <li>أجهزة الدفع الإلكتروني مدي، فيزا، أو ماستركارد المتاحة عبر ممثلينا الرسميين.</li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-3">
                <h4 className="font-bold text-luxury-gold">2. شروط و جدول الإلغاء والتعويض</h4>
                <div className="grid grid-cols-1 divide-y divide-white/5 text-right text-xs gap-2">
                  <div className="pt-1.5 flex justify-between items-center flex-row-reverse text-right">
                    <span className="font-bold text-white">استرجاع كامل المبلغ (100% مجاناً)</span>
                    <span className="text-emerald-500 font-bold">قبل 48 ساعة أو أكثر</span>
                  </div>
                  <div className="pt-2 flex justify-between items-center flex-row-reverse text-right">
                    <span className="font-bold text-white">حسم 25% من قيمة الإيجار المبدئي</span>
                    <span className="text-amber-500 font-bold">بين 24 إلى 48 ساعة قبل الرحلة</span>
                  </div>
                  <div className="pt-2 flex justify-between items-center flex-row-reverse text-right">
                    <span className="font-bold text-white">حسم 50% من قيمة الإيجار المبدئي</span>
                    <span className="text-rose-400 font-bold">أقل من 24 ساعة من الرحلة</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white">3. آلية الاسترجاع المالي</h4>
                <p>في حال تمت الموافقة على الاسترجاع المالي وفقاً للجدول أعلاه، يتم إعادة الأموال إلى حساب العميل البنكي الذي تم السداد منه في غضون 7 إلى 14 يوم عمل كحد أقصى، مع إرسال إشعار فوري وتحديث حالة العقد للمستأجر.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white">4. الحالات الطارئة والظروف القاهرة</h4>
                <p>في حالات الظروف القاهرة الخارجة عن إرادة العميل مثل (الكوارث الطبيعية الشديدة، توجيهات المنع المروري الطارئ، أو إغلاق الطرق الرسمية للمدن بتوجيهات عليا)، يتم إلغاء رسوم الحسم وتقييم إعادة جدولة الرحلات مجاناً بنسبة 100% رعاية منا لعملائنا وتأميناً لرحلتكم.</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* Backdrop blur & black mask */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 30, stiffness: 350 }}
            className="bg-luxury-navy-light border border-luxury-gold/30 rounded-2xl w-full max-w-2xl overflow-hidden relative z-10 shadow-2xl flex flex-col max-h-[85vh]"
          >
            {/* Elegant Accent top bar */}
            <div className="h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
            
            {/* Close button ABSOLUTE */}
            <button
              onClick={onClose}
              className="absolute left-4 top-4 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer border border-white/5 z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Inner scrollable padding wrapper */}
            <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
              {renderContent()}
            </div>

            {/* Bottom action wrapper */}
            <div className="p-4 sm:p-6 bg-black/40 border-t border-white/5 text-center flex items-center justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gradient-to-r from-luxury-gold to-luxury-gold-dark text-luxury-navy font-bold rounded-xl text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all shadow-md cursor-pointer"
              >
                قرأت وفهمت المحتوى
              </button>
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
