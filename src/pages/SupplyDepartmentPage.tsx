import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, Clock, MessageSquare, Send, Users, Package, ArrowRight } from 'lucide-react';
import { LinkButton } from '../components/ui/Button';
import RequestForm from '../components/RequestForm';

export default function SupplyDepartmentPage() {
  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <Link to="/contacts" className="hover:text-brand-400 transition-colors">Контакты</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Отдел снабжения</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium rounded-full mb-4">
              <Package size={14} />
              Отдел снабжения
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Отдел материально-технического <span className="text-brand-500">снабжения</span>
            </h1>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg">
              Вопросы по закупкам, поставкам и логистике продукции
            </p>
            <p className="text-gray-400 leading-relaxed">
              Свяжитесь с нами для обсуждения условий сотрудничества, сроков поставки и технических вопросов
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-500/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-8">Контактная информация</h2>
              
              <div className="space-y-6">
                {/* Phone with messengers */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-brand-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400 mb-1">Телефон (Андрей)</div>
                    <a href="tel:+375447181120" className="text-white font-medium hover:text-brand-400 transition-colors text-lg block mb-2">
                      +375 (44) 718-11-20
                    </a>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                        Viber
                      </span>
                      <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                        WhatsApp
                      </span>
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                        Telegram
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <a href="mailto:7181120@izocom.by" className="text-white font-medium hover:text-brand-400 transition-colors text-lg block">
                      7181120@izocom.by
                    </a>
                    <a href="mailto:omtsizokom@gmail.com" className="text-white font-medium hover:text-brand-400 transition-colors text-lg block">
                      omstsizokom@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Skype */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <MessageSquare size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Skype</div>
                    <div className="text-white font-medium text-lg">andrei.koniukh</div>
                    <div className="text-white font-medium text-lg">live:27722795369c5f7a</div>
                  </div>
                </div>
                
                {/* Working hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Режим работы</div>
                    <div className="text-white font-medium">Мы на связи!</div>
                    <div className="text-gray-300">По будням с 8:00 до 17:00</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Быстрая связь</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+375447181120"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <Phone size={18} />
                    Позвонить
                  </a>
                  <a
                    href="mailto:7181120@izocom.by"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30 text-white font-medium rounded-lg transition-all duration-300"
                  >
                    <Mail size={18} />
                    Написать
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-500/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-2">Ваше сообщение</h2>
              <p className="text-gray-400 mb-6">Заполните форму, и мы свяжемся с вами в ближайшее время</p>
              
              <RequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Working Hours */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center">
                  <Clock size={24} className="text-brand-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Режим работы</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-sm text-gray-400">Понедельник - Пятница</div>
                    <div className="text-white font-semibold text-lg">08:00 - 17:00</div>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-sm text-gray-400">Суббота - Воскресенье</div>
                    <div className="text-gray-500 font-semibold text-lg">Выходной</div>
                  </div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full" />
                </div>
              </div>
            </div>
            
            {/* Help Message */}
            <div className="lg:col-span-2 bg-gradient-to-br from-brand-600/10 to-brand-600/5 border border-brand-500/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Users size={28} className="text-brand-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Отдел материально-технического снабжения
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Обеспечиваем бесперебойные поставки продукции, логистику и техническую поддержку. Поможем с выбором оптимальных решений для вашего проекта.
                  </p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-brand-400 mb-1">24ч</div>
                  <div className="text-sm text-gray-400">Время ответа</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-brand-400 mb-1">100%</div>
                  <div className="text-sm text-gray-400">Заказов в срок</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-brand-400 mb-1">18+</div>
                  <div className="text-sm text-gray-400">Лет опыта</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium rounded-full mb-4">
                  <Package size={14} />
                  Материально-техническое снабжение
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Комплексное снабжение вашего проекта
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Обеспечиваем полный цикл поставок: от подбора продукции до доставки на объект. Работаем с крупными и малыми заказами.
                </p>
                <LinkButton
                  to="/products"
                  variant="primary"
                  size="lg"
                  iconRight={<ArrowRight size={18} />}
                >
                  Каталог продукции
                </LinkButton>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-sm text-gray-400">Поставок в год</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">60+</div>
                  <div className="text-sm text-gray-400">Регионов</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Поддержка</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm text-gray-400">Качество</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
