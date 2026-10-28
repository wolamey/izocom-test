import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Calendar, Eye, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import { getNewsBySlug, getAdjacentNews, getRelatedNews } from '../data/news';

export default function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const article = slug ? getNewsBySlug(slug) : undefined;
  const { prev, next } = slug ? getAdjacentNews(slug) : {};
  const relatedNews = slug ? getRelatedNews(slug, 3) : [];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Новость не найдена</h1>
          <p className="text-gray-400 mb-8">Запрашиваемая новость не существует</p>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
          >
            <ArrowLeft size={18} />
            Вернуться к новостям
          </Link>
        </div>
      </div>
    );
  }

  // Разбиваем контент на параграфы
  const paragraphs = article.content.split('\n\n').filter(p => p.trim());

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <Link to="/news" className="hover:text-brand-400 transition-colors">Новости</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium line-clamp-1">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[21/9] bg-gray-800 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium rounded-full mb-4">
                <Tag size={14} />
                {article.category}
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>
              
              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8 pb-8 border-b border-white/10">
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-brand-400" />
                  {article.publishedAt}
                </span>
                <span className="flex items-center gap-2">
                  <Eye size={16} className="text-brand-400" />
                  {article.views} просмотров
                </span>
                {article.author && (
                  <span className="flex items-center gap-2">
                    Автор: {article.author}
                  </span>
                )}
              </div>
              
              {/* Article body */}
              <div className="prose prose-invert max-w-none">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Navigation */}
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between gap-4">
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30 text-white font-medium rounded-lg transition-all duration-300"
                >
                  <ArrowLeft size={18} />
                  Назад к новостям
                </button>
                
                <div className="flex items-center gap-2">
                  {prev && (
                    <Link
                      to={`/news/${prev.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30 text-white text-sm rounded-lg transition-all duration-300"
                      title={prev.title}
                    >
                      <ArrowLeft size={16} />
                      <span className="hidden sm:inline">Предыдущая</span>
                    </Link>
                  )}
                  {next && (
                    <Link
                      to={`/news/${next.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30 text-white text-sm rounded-lg transition-all duration-300"
                      title={next.title}
                    >
                      <span className="hidden sm:inline">Следующая</span>
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Читайте также</h3>
                
                <div className="space-y-4">
                  {relatedNews.map((related) => (
                    <Link
                      key={related.id}
                      to={`/news/${related.slug}`}
                      className="group flex items-start gap-3 p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-500/30 rounded-xl transition-all duration-300"
                    >
                      <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden shrink-0">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-gray-300 group-hover:text-brand-400 transition-colors line-clamp-2 mb-2">
                          {related.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {related.publishedAt}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
