import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Truck, Award, Factory, Zap, ThermometerSun, CheckCircle2, Sparkles, Layers, ChevronDown, MapPin, Phone, Mail, Globe, Building2 } from 'lucide-react';
import { categories } from '../data/products';
import ProductImage from '../components/ProductImage';
import RequestForm from '../components/RequestForm';
import HeroSection from '../components/HeroSection';
import HeroSearchSection from '../components/HeroSearchSection';
import { LinkButton } from '../components/ui/Button';
import { useState } from 'react';

export default function HomePage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [activeArea, setActiveArea] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* Hero Search Section - скрыт */}
      {/* <HeroSearchSection /> */}

      {/* Categories — чёрный фон */}
      <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-600/5 rounded-full blur-3xl" />
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
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600/0 to-brand-600/0 group-hover:from-brand-600/10 group-hover:to-transparent transition-all duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 bg-white/10 group-hover:bg-brand-500/30 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500">
                    <div className="text-white/50 group-hover:text-brand-400 transition-colors duration-500">
                      <CategoryIcon type={cat.icon} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors">{cat.name}</h3>
                  <p className="text-sm text-gray-400 mb-5 line-clamp-2">{cat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white font-medium flex items-center gap-1 group-hover:gap-2 group-hover:text-brand-400 transition-all">
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

      {/* Application areas — интерактивный список с SVG */}
      <section className="py-20 lg:py-28 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Области применения</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Наша продукция используется в различных отраслях промышленности и ЖКХ</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left — interactive list */}
            <div className="space-y-3">
              {[
                { title: 'Тепловые сети', desc: 'Горячее водоснабжение и отопление городов и посёлков', icon: <HeatNetworkIcon />, info: 'Снижение теплопотерь до 40% по сравнению с традиционными методами прокладки' },
                { title: 'Промышленные трубопроводы', desc: 'Транспорт теплоносителя на промышленных предприятиях', icon: <IndustryIcon />, info: 'Рабочая температура до 140°C, давление до 1.6 МПа' },
                { title: 'Нефтегазовая отрасль', desc: 'Трубопроводы с подогревом для вязких сред', icon: <OilIcon />, info: 'Системы подогрева для предотвращения застывания нефтепродуктов' },
                { title: 'ЖКХ', desc: 'Замена ветхих сетей с сокращением теплопотерь', icon: <HousingIcon />, info: 'Срок службы более 30 лет, минимальное обслуживание' },
                { title: 'Энергетика', desc: 'Паропроводы и трубопроводы ТЭЦ и котельных', icon: <EnergyIcon />, info: 'Высокая энергоэффективность для крупных энергетических объектов' },
                { title: 'Инфраструктура', desc: 'Сети теплоснабжения для новых жилых комплексов', icon: <InfrastructureIcon />, info: 'Бесканальная прокладка, экономия пространства' },
              ].map((item, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActiveArea(i)}
                  onMouseLeave={() => setActiveArea(null)}
                  className={`group flex items-start gap-4 p-5 border rounded-xl transition-all duration-300 cursor-pointer ${
                    activeArea === i
                      ? 'bg-brand-600/20 border-brand-500/50 shadow-lg shadow-brand-600/20 scale-[1.02]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    activeArea === i ? 'bg-brand-500 scale-110' : 'bg-white/10 group-hover:bg-brand-500/30'
                  }`}>
                    <div className={`transition-colors duration-300 ${activeArea === i ? 'text-white' : 'text-brand-400'}`}>
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold transition-colors mb-1 ${
                      activeArea === i ? 'text-brand-400' : 'text-white group-hover:text-brand-400'
                    }`}>{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                  <ArrowRight size={18} className={`transition-all shrink-0 mt-1 ${
                    activeArea === i ? 'text-brand-400 translate-x-1' : 'text-white/30 group-hover:text-brand-400 group-hover:translate-x-1'
                  }`} />
                </div>
              ))}
            </div>

            {/* Right — visual */}
            <div className="relative lg:sticky lg:top-32">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-white/10">
                <div className="aspect-square max-w-md mx-auto relative">
                  <svg viewBox="0 0 400 400" className="w-full h-full transition-transform duration-700" style={{
                    transform: activeArea !== null ? `rotate(${-activeArea * 60}deg)` : 'rotate(0deg)'
                  }}>
                    {/* Central circle */}
                    <circle cx="200" cy="200" r="60" fill="#dc2626" opacity="0.1" className="transition-all duration-500" />
                    <circle cx="200" cy="200" r="40" fill="#dc2626" opacity="0.2" className="transition-all duration-500" />
                    {/* Text with counter-rotation to stay readable */}
                    <g style={{
                      transform: activeArea !== null ? `rotate(${activeArea * 60}deg)` : 'rotate(0deg)',
                      transformOrigin: '200px 200px',
                      transition: 'transform 0.7s ease'
                    }}>
                      <text x="200" y="205" textAnchor="middle" fill="#dc2626" fontSize="14" fontWeight="600">ППУ</text>
                    </g>
                    
                    {/* Orbiting circles */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                      const rad = (angle * Math.PI) / 180;
                      const x = 200 + Math.cos(rad) * 140;
                      const y = 200 + Math.sin(rad) * 140;
                      const isActive = activeArea === i;
                      return (
                        <g key={i} className="transition-all duration-500">
                          {/* Dashed line - always dashed, but brighter when active */}
                          <line x1="200" y1="200" x2={x} y2={y} stroke="#dc2626" strokeWidth={isActive ? "2" : "1"} opacity={isActive ? "0.8" : "0.3"} strokeDasharray="6 4" className="transition-all duration-500" />
                          <circle cx={x} cy={y} r={isActive ? "35" : "25"} fill={isActive ? "#dc2626" : "#1f2937"} stroke="#dc2626" strokeWidth={isActive ? "3" : "2"} opacity={isActive ? "1" : "0.8"} className="transition-all duration-500" />
                          <circle cx={x} cy={y} r={isActive ? "20" : "15"} fill={isActive ? "#1f2937" : "#dc2626"} opacity={isActive ? "0.3" : "0.2"} className="transition-all duration-500" />
                        </g>
                      );
                    })}
                  </svg>
                  
                  {/* Info overlay when hovering */}
                  {activeArea !== null && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-brand-500/30 max-w-[200px] text-center animate-fade-in">
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {activeArea !== null && [
                            'Снижение теплопотерь до 40% по сравнению с традиционными методами прокладки',
                            'Рабочая температура до 140°C, давление до 1.6 МПа',
                            'Системы подогрева для предотвращения застывания нефтепродуктов',
                            'Срок службы более 30 лет, минимальное обслуживание',
                            'Высокая энергоэффективность для крупных энергетических объектов',
                            'Бесканальная прокладка, экономия пространства'
                          ][activeArea]}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-400">6 отраслей — одна технология</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages — аккордеон */}
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

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              { icon: Shield, title: 'Качество по ГОСТ', desc: 'Вся продукция сертифицирована и соответствует ГОСТ 30732-2006. Многоступенчатый контроль качества на каждом этапе производства.', stat: '100%', statLabel: 'соответствие ГОСТ' },
              { icon: Clock, title: '30 лет эксплуатации', desc: 'Подтверждённый срок службы предизолированных труб. Снижение аварийности тепловых сетей до 4 раз.', stat: '30+', statLabel: 'лет службы' },
              { icon: Truck, title: 'Доставка по РФ', desc: 'Отгрузка со склада в Москве, доставка в любой регион России. Собственный автопарк и логистические партнёры.', stat: '60+', statLabel: 'регионов' },
              { icon: Award, title: 'Техподдержка', desc: 'Консультации проектировщикам и помощь в подборе продукции. Бесплатный расчёт и подготовка документации.', stat: '24/7', statLabel: 'поддержка' },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white/5 border rounded-xl overflow-hidden transition-all duration-300 ${
                  openAccordion === i ? 'border-brand-500/50' : 'border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/5 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openAccordion === i ? 'bg-brand-500/30 scale-110' : 'bg-white/5'
                  }`}>
                    <item.icon size={22} className={`transition-colors duration-300 ${openAccordion === i ? 'text-brand-400' : 'text-white/50'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`text-2xl font-bold transition-colors duration-300 ${openAccordion === i ? 'text-white' : 'text-white/70'}`}>{item.stat}</div>
                    <div className={`text-xs transition-colors duration-300 ${openAccordion === i ? 'text-brand-400' : 'text-gray-500'}`}>{item.statLabel}</div>
                  </div>
                  <ChevronDown size={20} className={`text-white/30 transition-transform duration-300 shrink-0 ${openAccordion === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === i ? 'max-h-40' : 'max-h-0'}`}>
                  <div className="px-5 pb-5 pl-20">
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats showcase — нестандартный черный блок */}
      <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Цифры говорят <span className="text-brand-500">сами за себя</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Более 18 лет мы создаём надёжные решения для тепловых сетей России
            </p>
          </div>

          {/* Animated stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: '50 000', unit: 'п.м.', label: 'труб произведено в 2024', color: 'from-red-500 to-orange-500' },
              { value: '60+', unit: '', label: 'регионов поставки', color: 'from-blue-500 to-cyan-500' },
              { value: '500', unit: '+', label: 'реализованных проектов', color: 'from-green-500 to-emerald-500' },
              { value: '99.8', unit: '%', label: 'клиентов рекомендуют нас', color: 'from-purple-500 to-pink-500' },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-2xl lg:text-3xl font-bold text-white/60">{stat.unit}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{stat.label}</p>
                </div>

                {/* Decorative corner */}
                <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`} />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
              <span className="text-gray-400 text-sm">Хотите стать частью нашей статистики?</span>
              <LinkButton
                to="/request"
                variant="primary"
                size="sm"
                iconRight={<ArrowRight size={16} />}
              >
                Начать проект
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* About us with YouTube */}
      <section className="relative py-20 lg:py-28 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-brand-400 text-sm font-medium rounded-full mb-4">
                <Building2 size={14} />
                О компании
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Изоком Пласт — надёжный партнёр</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Компания «Изоком Пласт» — российский производитель предизолированных стальных труб, фасонных изделий и комплектующих для строительства тепловых сетей.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Мы работаем с 2005 года и за это время поставили продукцию для объектов теплоснабжения в более чем 60 регионах России. Наше производство оснащено современным оборудованием и соответствует требованиям ГОСТ 30732-2006.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <LinkButton
                  to="/about"
                  variant="primary"
                  size="md"
                  iconRight={<ArrowRight size={16} />}
                >
                  Подробнее о компании
                </LinkButton>
                <LinkButton
                  to="/contacts"
                  variant="outline"
                  size="md"
                >
                  Связаться с нами
                </LinkButton>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/kDR3dP0Rgfc?si=RBBNHx1I_PXSepnu"
                  title="Изоком Пласт — видео о компании"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="relative py-20 lg:py-28 bg-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Собственное производство</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
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
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <LinkButton
                to="/about"
                variant="ghost"
                size="md"
                iconRight={<ArrowRight size={16} />}
                className="mt-8 text-gray-300 hover:text-brand-400"
              >
                Подробнее о производстве
              </LinkButton>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <Factory size={32} className="mx-auto text-brand-500 mb-2" />
                  <div className="text-2xl font-bold text-white">5000+</div>
                  <div className="text-sm text-gray-400">м² производства</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <ThermometerSun size={32} className="mx-auto text-blue-400 mb-2" />
                  <div className="text-2xl font-bold text-white">50 000</div>
                  <div className="text-sm text-gray-400">п.м. в год</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <Award size={32} className="mx-auto text-green-400 mb-2" />
                  <div className="text-2xl font-bold text-white">18</div>
                  <div className="text-sm text-gray-400">лет на рынке</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <Truck size={32} className="mx-auto text-amber-400 mb-2" />
                  <div className="text-2xl font-bold text-white">60+</div>
                  <div className="text-sm text-gray-400">регионов доставки</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* АПТС — член ассоциации */}
      <section className="relative py-16 bg-gray-900 border-t border-white/5">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 lg:p-12 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium rounded-full mb-4">
                  <Award size={14} />
                  Членство в ассоциации
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  ООО "Изоком Пласт" — член Ассоциации производителей трубопроводных систем
                </h2>
                <p className="text-gray-400 mb-6">
                  Мы являемся активным участником профессионального сообщества, что подтверждает наш статус надёжного производителя.
                </p>
                <a
                  href="https://rapts.ru/tpost/sg46tkjm71-v-apts-vstupili-9-novih-organizatsii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-400 font-medium hover:gap-3 transition-all"
                >
                  Подробнее на сайте АПТС <ArrowRight size={16} />
                </a>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-48 h-48 bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 bg-brand-500/20 rounded-full flex items-center justify-center">
                      <Award size={32} className="text-brand-400" />
                    </div>
                    <div className="text-sm font-semibold text-white">АПТС</div>
                    <div className="text-xs text-gray-400">Ассоциация производителей<br/>трубопроводных систем</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наши представительства */}
      <section className="relative py-20 lg:py-28 bg-gray-800">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-brand-400 text-sm font-medium rounded-full mb-4">
              <Globe size={14} />
              География
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Наши представительства</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Официальные представители завода на территории Российской Федерации</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dealers.map((dealer, i) => (
              <DealerCard key={i} dealer={dealer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Request form */}
      <section className="relative py-16 lg:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 lg:p-12 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Запросить расчёт</h2>
                <p className="text-gray-300 mb-6">
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
              <div className="bg-gray-800 rounded-xl p-6 border border-white/10">
                <RequestForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// SVG Icons for Application Areas
function HeatNetworkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12h4l3-9 4 18 3-9h4" />
    </svg>
  );
}

function IndustryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 20h20V8l-6 4V8l-6 4V4H2v16z" />
    </svg>
  );
}

function OilIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2C8 6 6 10 6 14a6 6 0 0 0 12 0c0-4-2-8-6-12z" />
    </svg>
  );
}

function HousingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function EnergyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function InfrastructureIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="16" y2="14" />
    </svg>
  );
}

function CategoryIcon({ type }: { type: string }) {
  switch (type) {
    case 'pipe':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="8" width="20" height="8" rx="4" /><line x1="6" y1="8" x2="6" y2="16" /><line x1="18" y1="8" x2="18" y2="16" /></svg>;
    case 'fitting':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 16V8h8v8H4z" /><path d="M12 12h8" /><path d="M16 8v8" /></svg>;
    case 'odk':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>;
    case 'accessory':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /></svg>;
    default:
      return null;
  }
}

// Dealer data
const dealers = [
  {
    name: 'АПРОМ',
    description: 'ООО "АПРОМ" - официальный представитель завода на территории РФ',
    phone: '8(473)229-83-00',
    mobile: '8(929)009-21-00',
    email: 'sale@apromvrn.ru',
    website: 'https://apromvrn.ru/',
    address: '394019, Россия, г. Воронеж, ул. Солнечная, д. 7Д, офис 25',
  },
  {
    name: 'РЕГИОН СЕРВИС',
    description: 'ООО "Регион Сервис" - официальный представитель завода на территории РФ',
    phone: '+7(473) 290-34-26',
    mobile: '+7(930) 400-65-56',
    email: 'office@regionservis-vrn.ru',
    website: 'https://regionservis-vrn.ru/',
    address: 'Россия, 394088, г.Воронеж, ул.Антонова-Овсеенко, д.35В, офис 4',
  },
  {
    name: 'Гибкие инженерные системы',
    description: 'Представительство в Москве - ООО «Гибкие инженерные системы». Официальный представитель завода на территории Российской Федерации',
    phone: '8 (495) 147 44 85',
    mobile: '8 909 960 22 37',
    email: 'info@groupgis.ru',
    website: 'https://groupgis.ru/',
    address: '143082, Московская область, г.о. Одинцовский, д. Раздоры тер. Рублево-Успенское шоссе, км. 1-й, д.1, оф.206',
  },
  {
    name: 'КОМПЛЕКСНОЕ СНАБЖЕНИЕ',
    description: 'ООО "КОМПЛЕКСНОЕ СНАБЖЕНИЕ" - официальный представитель завода на территории РФ',
    phone: '8-800-550-17-56',
    email: 'sales@intsupply.ru',
    website: 'http://intsupply.ru/',
    address: '197341, город Санкт-Петербург, Коломяжский пр-кт, д. 28 к. 3 литер а, помещ. 19н, кабинет 7',
  },
  {
    name: 'ДИНАМИКА',
    description: 'Инженерные системы: тепло и вода с комфортом',
    phone: '+7912 241 2346',
    email: 'dinamika.teplo@gmail.com',
    address: '620023 г. Екатеринбург, ул. Зимняя, 22',
  },
  {
    name: 'ВАРМОКОМ',
    description: 'Компания ВАРМОКОМ является официальным представителем производителя гибких предварительно изолированных труб (ГПИ-труб) ООО "Изоком Пласт" в Тверской области и на территории Российской Федерации.',
    phone: '+7 920 689 29 69',
    email: 'warmocom@yandex.ru',
    website: 'https://warmocom.ru/',
    address: 'Российская Федерация, г. Тверь, ул. Ерофеева, д. 7, корп. 2, кв. 21',
  },
  {
    name: 'КОНЕКС',
    description: 'ООО "КОНЕКС"',
    email: 'konexspb@gmail.com',
    website: 'http://konex.spb.ru',
    address: '196066, г. Санкт-Петербург, Московский пр-кт, д.212, литера А, помещение 27, офис 6033-1',
  },
  {
    name: 'ЭНЕРГОСИСТЕМА',
    phone: '+7 (994) 1080108',
    phone2: '+7 (423) 2712668',
    email: 'energydv@bk.ru',
    website: 'https://izocomflex.ru/',
    address: '690105 г. Владивосток ул. Полковника Фесюна 20, 211',
  },
  {
    name: 'Компания СпецПоток',
    description: 'ООО "СпецПоток" - официальный представитель завода на территории РФ',
    phone: '+7 (952) 206-01-61',
    mobile: '+7 (981) 201-01-03',
    email: 'info@specpotok.com',
    website: 'https://specpotok.com/',
    address: 'РФ, 199406, Санкт-Петербург, улица Опочинина, дом 16, литера А, помещение 6-Н, кабинет №30',
  },
  {
    name: 'ТВК Пластик',
    description: 'Официальный представитель завода на территории Российской Федерации',
    email: 'tvkplastic@mail.ru',
    website: 'https://tvkplastic.ru/',
    address: '121351, г. Москва, ул. Екатерины Будановой, д. 1',
    hours: 'Пн–Пт: 8:00 – 17:00',
  },
];

interface Dealer {
  name: string;
  description?: string;
  phone?: string;
  phone2?: string;
  mobile?: string;
  email?: string;
  website?: string;
  address: string;
  hours?: string;
}

function DealerCard({ dealer }: { dealer: Dealer }) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-white/10 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-600/10 transition-all duration-300">
      <h3 className="text-lg font-bold text-white mb-2">{dealer.name}</h3>
      {dealer.description && <p className="text-sm text-gray-400 mb-4">{dealer.description}</p>}
      
      <div className="space-y-2 text-sm">
        {dealer.phone && (
          <div className="flex items-center gap-2 text-gray-300">
            <Phone size={14} className="text-brand-400 shrink-0" />
            <a href={`tel:${dealer.phone.replace(/\s/g, '')}`} className="hover:text-brand-400 transition-colors">{dealer.phone}</a>
          </div>
        )}
        {dealer.phone2 && (
          <div className="flex items-center gap-2 text-gray-300">
            <Phone size={14} className="text-brand-400 shrink-0" />
            <a href={`tel:${dealer.phone2.replace(/\s/g, '')}`} className="hover:text-brand-400 transition-colors">{dealer.phone2}</a>
          </div>
        )}
        {dealer.mobile && (
          <div className="flex items-center gap-2 text-gray-300">
            <Phone size={14} className="text-brand-400 shrink-0" />
            <span>{dealer.mobile}</span>
          </div>
        )}
        {dealer.email && (
          <div className="flex items-center gap-2 text-gray-300">
            <Mail size={14} className="text-brand-400 shrink-0" />
            <a href={`mailto:${dealer.email}`} className="hover:text-brand-400 transition-colors">{dealer.email}</a>
          </div>
        )}
        {dealer.website && (
          <div className="flex items-center gap-2 text-gray-300">
            <Globe size={14} className="text-brand-400 shrink-0" />
            <a href={dealer.website} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">{dealer.website.replace('https://', '').replace('http://', '')}</a>
          </div>
        )}
        <div className="flex items-start gap-2 text-gray-400 pt-2">
          <MapPin size={14} className="text-brand-400 shrink-0 mt-0.5" />
          <span className="text-xs">{dealer.address}</span>
        </div>
        {dealer.hours && (
          <div className="text-xs text-gray-500 pt-1">{dealer.hours}</div>
        )}
      </div>
      
      {dealer.website && (
        <a
          href={dealer.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-4 text-sm text-brand-400 font-medium hover:gap-2 transition-all"
        >
          Подробнее <ArrowRight size={14} />
        </a>
      )}
    </div>
  );
}