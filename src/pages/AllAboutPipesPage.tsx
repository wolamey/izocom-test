import { Link } from 'react-router-dom';
import { ChevronRight, Eye, Calendar, TrendingUp, Tag, ArrowRight, Camera } from 'lucide-react';
import { LinkButton } from '../components/ui/Button';

export default function AllAboutPipesPage() {
  const articles = [
    {
      id: 102,
      title: 'Ключевой фактор долговечности ПИ и ГПИ-трубопроводов: надежность термоусаживаемой муфты',
      description: 'Предварительно изолированные трубы (ПИ-трубы) являются основой современных тепловых сетей, обеспечивая эффективную транспортировку теплоносителя с минимальными потерями. Однако, как показывает мировая практика...',
      image: 'https://izocomplast.ru/images/vse-o-trubah/termo-i-holodnaya-usadka-muft.png',
      views: 2273,
    },
    {
      id: 88,
      title: 'Преимущества армированных труб PEX-a для высокотемпературных сетей (до 115°С и 1,6 МПа)',
      description: 'Почему обычные полимерные трубы не справляются с высокими температурами? Традиционные неармированные трубы из сшитого полиэтилена (PEX) или полиэтилена PE-RT имеют...',
      image: 'https://izocomplast.ru/images/vse-o-trubah/3aa95333-7606-428d-ae31-cdaf793a81f7.jpg',
      views: 1991,
    },
    {
      id: 89,
      title: 'Технология непрерывного производства ГПИ-труб: в чем секрет качества?',
      description: 'Два принципиально разных подхода к производству. Качество и долговечность предварительно изолированных труб закладываются на этапе производства. Существует два принципиально разных подхода...',
      image: null,
      views: 1623,
    },
    {
      id: 103,
      title: 'Надёжные соединения полимерных труб для систем отопления и ГВС: какой способ выбрать?',
      description: 'При монтаже или реконструкции систем отопления и горячего водоснабжения (ГВС) вопрос надёжности соединений труб выходит на первый план. От правильного выбора...',
      image: 'https://izocomplast.ru/images/sborka_fitinga_1.jpg',
      views: 2770,
    },
    {
      id: 104,
      title: 'Гибкие предварительно изолированные трубы (ГПИ): современное решение для энергоэффективных тепловых сетей',
      description: 'В 2002 году в Беларуси было принято решение, согласно которому строительство новых теплосетей и реконструкция существующих должны производиться с использованием предварительно...',
      image: 'https://izocomplast.ru/images/40079713-889f-42a3-8b51-9ef836ebb331.jpg',
      views: 3447,
    },
    {
      id: 101,
      title: 'Теплоизоляция отопительных трубопроводов',
      description: 'Теплоизоляция отопительных трубопроводов – это мероприятие по уменьшению потерь тепла в отопительных системах, которые просто неизбежны в холодное время года. Эффективная...',
      image: 'https://izocomplast.ru/images/vse-o-trubah/1-2.jpg',
      views: 1325,
    },
    {
      id: 99,
      title: 'Термоусажеваемая муфта - надежный способ соединения труб',
      description: 'Герметичность, надежность и прочность соединений пи-трубопроводов и теплосетей обеспечивается с помощью муфт. Термоусаживаемая муфта – современная разновидность муфт, широко применяемая тогда...',
      image: 'https://izocomplast.ru/images/vse-o-trubah/ob23.png',
      views: 2490,
    },
    {
      id: 97,
      title: 'Изоляция стыков при помощи термоусаживаемых муфт',
      description: 'Один из эффективных способов изоляции стыков при монтаже пи-трубопроводов и теплосетей – использование термоусаживаемых муфт. Утепление труб, изоляция стыков трубопровода нужны для...',
      image: 'https://izocomplast.ru/images/vse-o-trubah/termousagivaemie_mufti_montazh_04_0.jpg',
      views: 2106,
    },
  ];

  const popularArticles = [
    {
      title: 'Категории технологических и магистральных трубопроводов',
      views: 5615,
      date: '2015-01-14',
    },
    {
      title: 'Трубы из сшитого полиэтилена PEX: особенности монтажа',
      views: 3745,
      date: '2015-07-28',
    },
    {
      title: 'Гибкие предварительно изолированные трубы (ГПИ): современное решение для энергоэффективных тепловых сетей',
      views: 3447,
      date: '2015-07-09',
    },
  ];

  const latestNews = [
    {
      title: 'Минск — Улан-Батор: «Изоком Пласт» укрепляет деловые связи с Монголией',
      image: 'https://izocomplast.ru/images/news/2026/10/27102026.jpg',
    },
    {
      title: 'Качественный монтаж начинается с обучения: день с «ЭНЕРГОТЕХПРОМ-2»',
      image: 'https://izocomplast.ru/images/news/2026/06/16/IMG_20260616_140230.jpg',
    },
    {
      title: 'Теплосети нового поколения: ГК «Изоком» представила инновационные решения на Форуме «Эффективная РСО»',
      image: 'https://izocom.by/images/news/2026/03/25/photo_2026-04-01_15-04-24.jpg',
    },
    {
      title: 'Обучение по монтажу ГПИ-труб',
      image: 'https://izocomplast.ru/images/news/2026/022026/45598034-1997-4e96-b7f8-75d7b6d08d0f.jpg',
    },
    {
      title: 'ООО «Изоком Пласт»: инновационная технология для энергоэффективных тепловых сетей',
      image: 'https://io.sb.by/storage01/iblock/7ac/7acc9c2b0eb5e9e5b85052b866122097/7ea47a27916602c50b9c4ecaf2d0fad1.jpg',
    },
  ];

  const tags = [
    { name: 'Эффективность', count: 16 },
    { name: 'Энергоэффективные решения', count: 11 },
    { name: 'Опыт применения', count: 9 },
    { name: 'Развитие', count: 9 },
    { name: 'Знак качества', count: 8 },
    { name: 'О компании', count: 8 },
    { name: 'Продукт года', count: 7 },
  ];

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Всё о трубах</span>
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
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium rounded-full mb-4">
                <Tag size={14} />
                Блог
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Всё о <span className="text-brand-500">трубах</span>
              </h1>
              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                Полезные статьи о технологиях производства, монтаже и эксплуатации трубопроводных систем
              </p>
              <p className="text-gray-400 leading-relaxed">
                Экспертные материалы от специалистов Изоком Пласт о предварительно изолированных трубах, фитингах, муфтах и современных решениях для тепловых сетей
              </p>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-300">
                <img
                  src="https://izocomplast.ru/images/vse-o-trubah/gpi-trubi.jpg"
                  alt="ГПИ трубы"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left images */}
            {/* <div className="hidden lg:block space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-300">
                <img
                  src="https://izocomplast.ru/images/blog/Energy_efficiency/energo.png"
                  alt="Энергоэффективность"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div> */}

            {/* Articles grid */}
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <article
                    key={article.id}
                    className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-300"
                  >
                    {article.image ? (
                      <div className="aspect-video bg-gray-800 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    ):(
                         <div className="aspect-video flex justify-center items-center bg-gray-800 overflow-hidden">
                     <Camera/>
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors mb-3 line-clamp-3">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye size={12} />
                          {article.views}
                        </span>
                        <span className="px-2 py-0.5 bg-brand-500/10 text-brand-400 rounded-full text-xs">
                          Все о трубах
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load more button */}
              <div className="mt-8 text-center">
                <button className="px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors">
                  Показать ещё
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Content - Popular, News, Tags */}
      <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Popular articles */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp size={24} className="text-brand-400" />
                Популярное в блоге
              </h3>
              <ul className="space-y-4">
                {popularArticles.map((article, i) => (
                  <li key={i}>
                    <a href="#" className="group block">
                      <div className="text-sm text-gray-300 group-hover:text-brand-400 transition-colors mb-2 line-clamp-2">
                        {article.title}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye size={10} />
                          {article.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={10} />
                          {article.date}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest news */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">
                Последние новости
              </h3>
              <div className="space-y-4">
                {latestNews.map((news, i) => (
                  <a
                    key={i}
                    href="#"
                    className="group flex gap-3"
                  >
                    <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-gray-300 group-hover:text-brand-400 transition-colors line-clamp-3">
                        {news.title}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Tags cloud */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Tag size={24} className="text-brand-400" />
                Облако тегов
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
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
      </section>

      {/* CTA Section */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Нужна <span className="text-brand-500">консультация?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Наши эксперты готовы ответить на ваши вопросы о трубопроводных системах и помочь с выбором продукции
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
              className="border-white/20 text-white bg-transparent! hover:bg-white/5 hover:border-brand-500/50"
            >
              Связаться с нами
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
