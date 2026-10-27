import { Link } from 'react-router-dom';
import { ChevronRight, Award, Zap, TrendingUp, Shield, Eye, Calendar, ArrowRight, Tag } from 'lucide-react';
import { LinkButton } from '../components/ui/Button';

export default function EnergyEfficiencyPage() {
  const popularTags = [
    { name: 'Эффективность', count: 16 },
    { name: 'Энергоэффективные решения', count: 11 },
    { name: 'Опыт применения', count: 9 },
    { name: 'Развитие', count: 9 },
    { name: 'Знак качества', count: 8 },
    { name: 'О компании', count: 8 },
    { name: 'Продукт года', count: 7 },
  ];

  const latestNews = [
    {
      title: 'Минск — Улан-Батор: «Изоком Пласт» укрепляет деловые связи с Монголией',
      image: 'https://izocomplast.ru/images/news/2026/10/27102026.jpg',
      date: '2026-10-27',
    },
    {
      title: 'Качественный монтаж начинается с обучения: день с «ЭНЕРГОТЕХПРОМ-2»',
      image: 'https://izocomplast.ru/images/news/2026/06/16/IMG_20260616_140230.jpg',
      date: '2026-06-16',
    },
    {
      title: 'Теплосети нового поколения: ГК «Изоком» представила инновационные решения на Форуме «Эффективная РСО»',
      image: 'https://izocom.by/images/news/2026/03/25/photo_2026-04-01_15-04-24.jpg',
      date: '2026-03-25',
    },
    {
      title: 'Обучение по монтажу ГПИ-труб',
      image: 'https://izocomplast.ru/images/news/2026/022026/45598034-1997-4e96-b7f8-75d7b6d08d0f.jpg',
      date: '2026-02-20',
    },
    {
      title: 'ООО «Изоком Пласт»: инновационная технология для энергоэффективных тепловых сетей',
      image: 'https://io.sb.by/storage01/iblock/7ac/7acc9c2b0eb5e9e5b85052b866122097/7ea47a27916602c50b9c4ecaf2d0fad1.jpg',
      date: '2026-01-15',
    },
  ];

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Энергоэффективность</span>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium rounded-full mb-4">
                <Zap size={14} />
                Энергоэффективность
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Энергоэффективные <span className="text-brand-500">решения</span> для тепловых сетей
              </h1>
              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                Инновационные технологии теплоизоляции, сертифицированные по европейским стандартам
              </p>
              <p className="text-gray-400 leading-relaxed">
                Наша продукция соответствует требованиям EN 253:2019 и EN 448:2019, что гарантирует высочайшее качество и энергоэффективность
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
                <Award size={32} className="mx-auto text-brand-500 mb-3" />
                <div className="text-4xl font-bold text-white mb-1">EN</div>
                <div className="text-sm text-gray-400">253:2019</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
                <Shield size={32} className="mx-auto text-green-400 mb-3" />
                <div className="text-4xl font-bold text-white mb-1">EN</div>
                <div className="text-sm text-gray-400">448:2019</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
                <TrendingUp size={32} className="mx-auto text-blue-400 mb-3" />
                <div className="text-4xl font-bold text-white mb-1">−40%</div>
                <div className="text-sm text-gray-400">теплопотерь</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
                <Zap size={32} className="mx-auto text-amber-400 mb-3" />
                <div className="text-4xl font-bold text-white mb-1">30+</div>
                <div className="text-sm text-gray-400">лет службы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left images */}
            {/* <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-300">
                <img
                  src="https://izocomplast.ru/images/blog/Energy_efficiency/energo.png"
                  alt="Энергоэффективность"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-300">
                <img
                  src="https://izocomplast.ru/images/blog/Energy_efficiency/energo_1.png"
                  alt="Энергоэффективность"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div> */}

            {/* Center article */}
            <div className="lg:col-span-1">
              <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-300">
                <div className=" bg-gray-800 overflow-hidden">
                  <img
                    src="https://izocomplast.ru/images/blog/Energy_efficiency/LOGO_.jpg"
                    alt="Сертификат EN 253, EN 448"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={16} className="text-brand-400" />
                    <span className="text-xs text-brand-400 font-medium">Сертификация</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Получен сертификат на соответствие требованиям европейских стандартов
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Получен сертификат EHP 001 на соответствие требованиям европейских стандартов EN 253, EN 448. Сертификационные испытания проводились как в ведущих лабораториях стран ЕС, так и в собственной лаборатории, аккредитованной под требования EN 253:2019, EN 448:2019
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Eye size={12} />
                      1774
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      2022-02-01
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-brand-500/10 text-brand-400 text-xs rounded-full">Сертификат</span>
                    <span className="px-2 py-1 bg-brand-500/10 text-brand-400 text-xs rounded-full">Энергоэффективные решения</span>
                    <span className="px-2 py-1 bg-brand-500/10 text-brand-400 text-xs rounded-full">Эффективность</span>
                  </div>
                </div>
              </article>
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">
              {/* Popular articles */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp size={20} className="text-brand-400" />
                  Популярное в блоге
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="group block">
                      <div className="text-sm text-gray-300 group-hover:text-brand-400 transition-colors mb-1">
                        Энергоэффективная технология теплоизоляции гибких предварительно изолированных труб
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye size={10} />
                          3481
                        </span>
                        <span>Энергоэффективность</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group block">
                      <div className="text-sm text-gray-300 group-hover:text-brand-400 transition-colors mb-1">
                        Получен сертификат на соответствие требованиям европейских стандартов
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye size={10} />
                          1774
                        </span>
                        <span>Энергоэффективность</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tags cloud */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Tag size={20} className="text-brand-400" />
                  Облако тегов
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, i) => (
                    <a
                      key={i}
                      href="#"
                      className="px-3 py-1.5 bg-white/5 hover:bg-brand-500/10 border border-white/10 hover:border-brand-500/30 text-gray-300 hover:text-brand-400 text-sm rounded-full transition-all duration-300"
                      style={{ fontSize: `${0.75 + (tag.count / 16) * 0.5}rem` }}
                    >
                      {tag.name}
                      <span className="ml-1 text-xs text-gray-500">({tag.count})</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-300">
            <div className=" bg-gray-800 overflow-hidden">
              <img
                src="https://izocomplast.ru/images/blog/Energy_efficiency/banner-energo.png"
                alt="Энергоэффективная технология теплоизоляции"
                className="w-full "
                loading="lazy"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={20} className="text-brand-400" />
                <span className="text-sm text-brand-400 font-medium">Технология</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Энергоэффективная технология теплоизоляции гибких предварительно изолированных труб
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Гибкие предварительно изолированные трубы (ГПИ-трубы) — это инновационное решение для строительства тепловых сетей, сочетающее в себе преимущества традиционных стальных труб в ППУ изоляции с гибкостью и удобством монтажа.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Технология позволяет сократить время монтажа до 3 раз, уменьшить количество стыковых соединений и повысить общую энергоэффективность системы теплоснабжения.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Благодаря использованию современных материалов и методов производства, ГПИ-трубы обеспечивают снижение теплопотерь до 40% по сравнению с традиционными методами прокладки трубопроводов.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1.5 bg-brand-500/10 text-brand-400 text-sm rounded-full">Эффективность</span>
                <span className="px-3 py-1.5 bg-brand-500/10 text-brand-400 text-sm rounded-full">Опыт применения</span>
                <span className="px-3 py-1.5 bg-brand-500/10 text-brand-400 text-sm rounded-full">Потери тепла</span>
                <span className="px-3 py-1.5 bg-brand-500/10 text-brand-400 text-sm rounded-full">Энергоэффективные решения</span>
                <span className="px-3 py-1.5 bg-brand-500/10 text-brand-400 text-sm rounded-full">Теплоизоляция</span>
                <span className="px-3 py-1.5 bg-brand-500/10 text-brand-400 text-sm rounded-full">Утепление</span>
                <span className="px-3 py-1.5 bg-brand-500/10 text-brand-400 text-sm rounded-full">Защита трубопровода</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Latest News */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Последние новости</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Актуальные события и достижения компании</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news, i) => (
              <a
                key={i}
                href="#"
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-300"
              >
                <div className="aspect-video bg-gray-800 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Calendar size={12} />
                    {news.date}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors line-clamp-3">
                    {news.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Готовы к <span className="text-brand-500">энергоэффективным решениям?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для расчёта стоимости, подбора продукции или получения технической консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton
              to="/request"
              variant="primary"
              size="lg"
              iconRight={<ArrowRight size={18} />}
            >
              Запросить расчёт
            </LinkButton>
            <LinkButton
              to="/contacts"
              variant="outline"
              size="lg"
              className="border-white/20 bg-transparent! text-white hover:bg-white/5 hover:border-brand-500/50"
            >
              Связаться с нами
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
