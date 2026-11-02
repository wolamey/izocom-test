import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Clock, FileText, HeadphonesIcon, Phone, Mail, Zap } from 'lucide-react';
import RequestForm from '../components/RequestForm';

export default function RequestPage() {
  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Запрос расчёта</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gray-900 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs sm:text-sm font-medium rounded-full mb-4">
              <Zap size={14} />
              Быстрый расчёт
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Запросить <span className="text-brand-500">расчёт</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400">
              Заполните форму, и наш инженер подготовит коммерческое предложение с учётом ваших требований
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative bg-gray-800 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-brand-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand-500/10 rounded-xl flex items-center justify-center">
                    <FileText size={20} className="text-brand-400" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Форма заявки</h2>
                </div>
                <RequestForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-4 sm:space-y-6">
                {/* Benefits */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-brand-500/30 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-5">Что вы получите</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { icon: CheckCircle2, text: 'Коммерческое предложение с ценами', color: 'green' },
                      { icon: Clock, text: 'Ответ в течение 1 рабочего дня', color: 'blue' },
                      { icon: FileText, text: 'Расчёт по вашей спецификации', color: 'purple' },
                      { icon: HeadphonesIcon, text: 'Техническая консультация', color: 'amber' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className={`w-9 h-9 sm:w-10 sm:h-10 bg-${item.color}-500/10 border border-${item.color}-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon size={16} className={`sm:hidden text-${item.color}-400`} />
                          <item.icon size={18} className={`hidden sm:block text-${item.color}-400`} />
                        </div>
                        <div className="flex-1 pt-1.5">
                          <span className="text-xs sm:text-sm text-gray-300">{item.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-br from-brand-600/10 to-brand-600/5 border border-brand-500/20 rounded-2xl p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <Phone size={18} className="text-brand-400" />
                    <h3 className="text-lg sm:text-xl font-bold text-white">Или позвоните</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Отдел продаж работает Пн–Пт с 9:00 до 18:00</p>
                  <a
                    href="tel:+74951234567"
                    className="inline-flex items-center gap-2 text-brand-400 font-semibold text-lg sm:text-xl hover:text-brand-300 transition-colors mb-2"
                  >
                    <Phone size={18} />
                    +7 (495) 123-45-67
                  </a>
                  <p className="text-xs text-gray-400 mt-3">
                    или напишите на{' '}
                    <a href="mailto:info@izocomplast.ru" className="text-brand-400 hover:text-brand-300 transition-colors">
                      info@izocomplast.ru
                    </a>
                  </p>
                </div>

                {/* FAQ */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-brand-500/30 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-5">Частые вопросы</h3>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="group">
                      <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-brand-400 transition-colors">
                        Какие сроки изготовления?
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        Стандартный срок — 5–10 рабочих дней в зависимости от объёма.
                      </p>
                    </div>
                    <div className="border-t border-white/5 pt-4 sm:pt-5 group">
                      <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-brand-400 transition-colors">
                        Работаете ли с малыми объёмами?
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        Да, отгружаем от 1 трубы. Минимальный заказ не ограничен.
                      </p>
                    </div>
                    <div className="border-t border-white/5 pt-4 sm:pt-5 group">
                      <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-brand-400 transition-colors">
                        Есть ли доставка?
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        Доставка по всей России. Рассчитаем стоимость при оформлении заказа.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gray-900 py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Остались <span className="text-brand-500">вопросы?</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом — мы готовы помочь вам с выбором продукции и расчётом стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+74951234567"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
            >
              <Phone size={18} />
              Позвонить
            </a>
            <a
              href="mailto:info@izocomplast.ru"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30 text-white font-medium rounded-lg transition-all duration-300"
            >
              <Mail size={18} />
              Написать
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
