import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Eye, Newspaper } from 'lucide-react';
import { newsArticles } from '../data/news';

export default function NewsPage() {
  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Новости</span>
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
              <Newspaper size={14} />
              Новости компании
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Последние <span className="text-brand-500">новости</span>
            </h1>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg">
              Актуальные события, достижения и новости компании «Изоком Пласт»
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.slug}`}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-300"
              >
                <div className="aspect-video bg-gray-900 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {article.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={12} />
                      {article.views}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 line-clamp-3 mb-4">
                    {article.intro}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-brand-400 font-medium group-hover:gap-3 transition-all">
                    Читать далее
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
