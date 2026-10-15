import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Truck, Award, Factory, ChevronRight, Zap, ThermometerSun, CheckCircle2 } from 'lucide-react';
import { categories } from '../data/products';
import ProductImage from '../components/ProductImage';
import RequestForm from '../components/RequestForm';

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-brand-50 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-50 text-brand-700 text-sm font-medium rounded-full mb-6">
                <Zap size={14} />
                Производство с 2005 года
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Предизолированные трубы
                <span className="text-brand-600"> ППУ</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                Стальные трубы в пенополиуретановой изоляции, фасонные изделия и комплектующие для тепловых сетей. Производство по ГОСТ 30732-2006.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20"
                >
                  Каталог продукции
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/request"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 hover:border-brand-300 hover:text-brand-600 transition-colors"
                >
                  Запросить расчёт
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-500" /> ГОСТ 30732-2006</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-500" /> Доставка по РФ</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-100 to-blue-100 rounded-3xl opacity-40 blur-xl" />
                <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <ProductImage type="pipe-pe" className="aspect-[4/3] rounded-xl" />
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-brand-600">30+</div>
                      <div className="text-xs text-gray-500">лет службы</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-brand-600">−40%</div>
                      <div className="text-xs text-gray-500">теплопотерь</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-brand-600">1020</div>
                      <div className="text-xs text-gray-500">мм макс. Ø</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Что производим</h2>
              <p className="text-gray-500">Полный ассортимент продукции для тепловых сетей</p>
            </div>
            <Link to="/products" className="hidden sm:inline-flex items-center gap-1 text-brand-600 font-medium text-sm hover:gap-2 transition-all">
              Весь каталог <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={`/products/${cat.id}`}
                className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-brand-200 hover:shadow-lg rounded-xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-50 group-hover:bg-brand-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <CategoryIcon type={cat.icon} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{cat.name}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{cat.description}</p>
                <span className="text-sm text-brand-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  {cat.products.length} {cat.products.length === 1 ? 'позиция' : 'позиции'} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <Link to="/products" className="sm:hidden mt-6 inline-flex items-center gap-1 text-brand-600 font-medium text-sm">
            Весь каталог <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Application areas */}
      <section className="py-16 lg:py-20 bg-gray-50">
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
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Почему выбирают нас</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Качество по ГОСТ', desc: 'Вся продукция сертифицирована и соответствует ГОСТ 30732-2006' },
              { icon: Clock, title: '30 лет эксплуатации', desc: 'Подтверждённый срок службы предизолированных труб' },
              { icon: Truck, title: 'Доставка по РФ', desc: 'Отгрузка со склада в Москве, доставка в любой регион' },
              { icon: Award, title: 'Техподдержка', desc: 'Консультации проектировщикам и помощь в подборе' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-brand-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="py-16 lg:py-20 bg-gray-50">
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
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-brand-600 font-medium hover:gap-3 transition-all"
              >
                Подробнее о производстве <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-50 rounded-xl p-6 text-center">
                  <Factory size={32} className="mx-auto text-brand-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">5000+</div>
                  <div className="text-sm text-gray-500">м² производства</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <ThermometerSun size={32} className="mx-auto text-blue-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50 000</div>
                  <div className="text-sm text-gray-500">п.м. в год</div>
                </div>
                <div className="bg-green-50 rounded-xl p-6 text-center">
                  <Award size={32} className="mx-auto text-green-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">18</div>
                  <div className="text-sm text-gray-500">лет на рынке</div>
                </div>
                <div className="bg-amber-50 rounded-xl p-6 text-center">
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
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-600"><rect x="2" y="8" width="20" height="8" rx="4" /><line x1="6" y1="8" x2="6" y2="16" /><line x1="18" y1="8" x2="18" y2="16" /></svg>;
    case 'fitting':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-600"><path d="M4 16V8h8v8H4z" /><path d="M12 12h8" /><path d="M16 8v8" /></svg>;
    case 'odk':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-600"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>;
    case 'accessory':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-600"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /></svg>;
    default:
      return null;
  }
}
