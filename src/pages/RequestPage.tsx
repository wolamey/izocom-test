import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Clock, FileText, HeadphonesIcon } from 'lucide-react';
import RequestForm from '../components/RequestForm';

export default function RequestPage() {
  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-600 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900 font-medium">Запрос расчёта</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Запросить расчёт</h1>
            <p className="text-gray-600 mb-8">
              Заполните форму, и наш инженер подготовит коммерческое предложение с учётом ваших требований.
            </p>

            <div className="bg-white border border-gray-100 rounded-xl p-6 lg:p-8">
              <RequestForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Benefits */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Что вы получите</h3>
                <div className="space-y-3">
                  {[
                    { icon: CheckCircle2, text: 'Коммерческое предложение с ценами' },
                    { icon: Clock, text: 'Ответ в течение 1 рабочего дня' },
                    { icon: FileText, text: 'Расчёт по вашей спецификации' },
                    { icon: HeadphonesIcon, text: 'Техническая консультация' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <item.icon size={18} className="text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-brand-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Или позвоните</h3>
                <p className="text-sm text-gray-600 mb-3">Отдел продаж работает Пн–Пт с 9:00 до 18:00</p>
                <a
                  href="tel:+74951234567"
                  className="inline-flex items-center gap-2 text-brand-600 font-semibold text-lg hover:text-brand-700 transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
                <p className="text-xs text-gray-500 mt-2">или напишите на{' '}
                  <a href="mailto:info@izocomplast.ru" className="text-brand-600 hover:underline">info@izocomplast.ru</a>
                </p>
              </div>

              {/* FAQ */}
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Частые вопросы</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">Какие сроки изготовления?</h4>
                    <p className="text-xs text-gray-500">Стандартный срок — 5–10 рабочих дней в зависимости от объёма.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">Работаете ли с малыми объёмами?</h4>
                    <p className="text-xs text-gray-500">Да, отгружаем от 1 трубы. Минимальный заказ не ограничен.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">Есть ли доставка?</h4>
                    <p className="text-xs text-gray-500">Доставка по всей России. Рассчитаем стоимость при оформлении заказа.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
