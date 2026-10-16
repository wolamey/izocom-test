import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Truck, Award, Factory, ChevronRight, Zap, ThermometerSun, CheckCircle2, Sparkles, Layers, Gauge, CircleDot } from 'lucide-react';
import { categories } from '../data/products';
import ProductImage from '../components/ProductImage';
import RequestForm from '../components/RequestForm';
import HeroSection from '../components/HeroSection';
import { LinkButton, Button } from '../components/ui/Button';

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* Categories — чёрный фон */}
      <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-600/5 rounded-full blur-3xl" />
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 lg:mb-16 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-white/70 text-sm font-medium rounded-full mb-4">
                <Layers size={14} />
                Каталог
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Что производим</h2>
              <p className="text-gray-400 max-w-lg">Полный ассортимент продукции для строительства и модернизации тепловых сетей</p>
            </div>
            <LinkButton
              to="/products"
              variant="ghost"
              size="md"
              iconRight={<ArrowRight size={16} />}
              className="text-white/70 hover:text-white hover:bg-white/10 border border-white/10"
            >
              Весь каталог
            </LinkButton>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                to={`/products/${cat.id}`}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-500/50 rounded-2xl p-6 transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600/0 to-brand-600/0 group-hover:from-brand-600/10 group-hover:to-transparent transition-all duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 bg-white/5 group-hover:bg-brand-500/20 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500">
                    <CategoryIcon type={cat.icon} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors">{cat.name}</h3>
                  <p className="text-sm text-gray-400 mb-5 line-clamp-2">{cat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      {cat.products.length} {cat.products.length === 1 ? 'позиция' : 'позиции'}
                    </span>
                    <ArrowRight size={16} className="text-white/30 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Application areas */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Области применения</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Тепловые сети', desc: 'Горячее водоснабжение и отопление городов и посёлков', icon: '🏙️' },
              { title: 'Промышленные трубопроводы', desc: 'Транспорт теплоносителя на промышленных предприятиях', icon: '🏭' },
              { title: 'Нефтегазовая отрасль', desc: 'Трубопроводы с подогревом для вязких сред', icon: '⛽' },
              { title: 'ЖКХ', desc: 'Замена ветхих сетей с сокращением теплопотерь', icon: '🏠' },
              { title: 'Энергетика', desc: 'Паропроводы и трубопроводы ТЭЦ и котельных', icon: '⚡' },
              { title: 'Инфраструктура', desc: 'Сети теплоснабжения для новых жилых комплексов', icon: '🏗️' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-brand-100 transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages — чёрный фон */}
      <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-white/70 text-sm font-medium rounded-full mb-4">
              <Sparkles size={14} />
              Преимущества
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Почему выбирают нас</h2>
            <p className="text-gray-400 max-w-lg mx-auto">Качество, надёжность и комплексный подход к каждому проекту</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Качество по ГОСТ', desc: 'Вся продукция сертифицирована и соответствует ГОСТ 30732-2006', color: 'from-blue-500/20 to-blue-500/5' },
              { icon: Clock, title: '30 лет эксплуатации', desc: 'Подтверждённый срок службы предизолированных труб', color: 'from-green-500/20 to-green-500/5' },
              { icon: Truck, title: 'Доставка по РФ', desc: 'Отгрузка со склада в Москве, доставка в любой регион', color: 'from-amber-500/20 to-amber-500/5' },
              { icon: Award, title: 'Техподдержка', desc: 'Консультации проектировщикам и помощь в подборе', color: 'from-purple-500/20 to-purple-500/5' },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={24} className="text-brand-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Собственное производство</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Производственная площадка оснащена современным оборудованием для изоляции труб диаметром от 57 до 1020 мм.
                Контроль качества на каждом этапе — от подготовки стальной трубы до нанесения защитной оболочки.
              </p>
              <div className="space-y-4">
                {[
                  'Центрирование трубы перед заливкой ППУ',
                  'Входной контроль стальных труб и компонентов',
                  'Лабораторные испытания плотности и теплопроводности',
                  'Маркировка каждой трубы с паспортом качества',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <LinkButton
                to="/about"
                variant="ghost"
                size="md"
                iconRight={<ArrowRight size={16} />}
                className="mt-8"
              >
                Подробнее о производстве
              </LinkButton>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
                  <Factory size={32} className="mx-auto text-brand-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">5000+</div>
                  <div className="text-sm text-gray-500">м² производства</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
                  <ThermometerSun size={32} className="mx-auto text-blue-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50 000</div>
                  <div className="text-sm text-gray-500">п.м. в год</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
                  <Award size={32} className="mx-auto text-green-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">18</div>
                  <div className="text-sm text-gray-500">лет на рынке</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
                  <Truck size={32} className="mx-auto text-amber-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">60+</div>
                  <div className="text-sm text-gray-500">регионов доставки</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Request form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Запросить расчёт</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Отправьте заявку — мы подберём продукцию, рассчитаем стоимость и подготовим коммерческое предложение.
                </p>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-400" />
                    Ответ в течение 1 рабочего дня
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-400" />
                    Расчёт по спецификации заказчика
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-400" />
                    Технические консультации бесплатно
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <RequestForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryIcon({ type }: { type: string }) {
  switch (type) {
    case 'pipe':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-400"><rect x="2" y="8" width="20" height="8" rx="4" /><line x1="6" y1="8" x2="6" y2="16" /><line x1="18" y1="8" x2="18" y2="16" /></svg>;
    case 'fitting':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-400"><path d="M4 16V8h8v8H4z" /><path d="M12 12h8" /><path d="M16 8v8" /></svg>;
    case 'odk':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-400"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>;
    case 'accessory':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-400"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /></svg>;
    default:
      return null;
  }
}
