import { Link } from 'react-router-dom';
import { ChevronRight, Eye, Calendar, TrendingUp, Tag, ArrowRight, Camera } from 'lucide-react';
import { LinkButton } from '../components/ui/Button';
import { articles, popularArticles, latestNewsForSidebar, sidebarTags } from '../data/articles';

export default function AllAboutPipesPage() {
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/articles/${article.slug}`}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-300"
              >
                {article.coverImage ? (
                  <div className="aspect-video bg-gray-800 overflow-hidden">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-video flex justify-center items-center bg-gray-800 overflow-hidden">
                    <Camera className="text-gray-600" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors mb-3 line-clamp-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {article.shortDescription}
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
              </Link>
            ))}
          </div>

          {/* Load more button */}
          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors">
              Показать ещё
            </button>
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
                    <Link to={`/articles/${article.slug}`} className="group block">
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
                    </Link>
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
                {latestNewsForSidebar.map((news, i) => (
                  <Link
                    key={i}
                    to={`/news/${news.slug}`}
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
                  </Link>
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
                {sidebarTags.map((tag, i) => (
                  <a
                    key={i}
                    href={`#/articles?tag=${encodeURIComponent(tag.name)}`}
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
            <LinkButton to="/request" variant="primary" size="lg" iconRight={<ArrowRight size={18} />}>
              Запросить расчёт
            </LinkButton>
            <LinkButton to="/contacts" variant="outline" size="lg">
              Связаться с нами
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}