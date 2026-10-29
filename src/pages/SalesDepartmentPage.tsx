import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, Clock, MapPin, Send, Users, Globe, ArrowRight } from 'lucide-react';
import { LinkButton } from '../components/ui/Button';
import RequestForm from '../components/RequestForm';

export default function SalesDepartmentPage() {
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
            <span className="text-white font-medium">Отдел продаж</span>
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
              <Phone size={14} />
              Отдел продаж
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Свяжитесь с <span className="text-brand-500">отделом продаж</span>
            </h1>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg">
              Наши специалисты помогут вам сориентироваться в выборе продукции, учитывая современные тенденции и требования к качеству
            </p>
            <p className="text-gray-400 leading-relaxed">
              Обеспечим всей необходимой информацией для начала работы и подберём оптимальное решение для вашего проекта
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
              <h2 className="text-2xl font-bold text-white mb-8">Отдел продаж</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-brand-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Телефон</div>
                    <a href="tel:+375293090064" className="text-white font-medium hover:text-brand-400 transition-colors text-lg">
                      +375 (29) 3090064
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <a href="mailto:sales@izocomplast.ru" className="text-white font-medium hover:text-brand-400 transition-colors text-lg">
                      sales@izocomplast.ru
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Режим работы</div>
                    <div className="text-white font-medium">Мы на связи!</div>
                    <div className="text-gray-300">По будням с 8:30 до 17:30</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Быстрая связь</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+375293090064"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <Phone size={18} />
                    Позвонить
                  </a>
                  <a
                    href="mailto:sales@izocomplast.ru"
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
                    <div className="text-white font-semibold text-lg">08:30 - 17:30</div>
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
                    Наши специалисты помогут вам
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Сориентируемся в выборе продукции, учитывая современные тенденции и требования к качеству, а также обеспечим всей необходимой информацией для начала работы
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
                  <div className="text-sm text-gray-400">Консультаций</div>
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

      {/* Dealers Info */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium rounded-full mb-4">
                  <Globe size={14} />
                  Дилерская сеть
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Информация о наших дилерах
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Официальные представители завода на территории Российской Федерации и стран СНГ
                </p>
                <LinkButton
                  to="/contacts/dealers"
                  variant="primary"
                  size="lg"
                  iconRight={<ArrowRight size={18} />}
                >
                  Ознакомиться
                </LinkButton>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">10+</div>
                  <div className="text-sm text-gray-400">Дилеров</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">60+</div>
                  <div className="text-sm text-gray-400">Регионов</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">5</div>
                  <div className="text-sm text-gray-400">Стран</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
