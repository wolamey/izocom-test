import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Package, Layers } from 'lucide-react';
import { categories } from '../data/products';

interface SearchResult {
  type: 'category' | 'product';
  id: string;
  title: string;
  description: string;
  path: string;
}

export default function CatalogHeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  // Поиск по продукции
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    // Поиск по категориям
    categories.forEach(cat => {
      if (
        cat.name.toLowerCase().includes(query) ||
        cat.description.toLowerCase().includes(query)
      ) {
        results.push({
          type: 'category',
          id: cat.id,
          title: cat.name,
          description: cat.description,
          path: `/products/${cat.id}`,
        });
      }

      // Поиск по продуктам в категории
      cat.products.forEach(product => {
        const searchableText = [
          product.name,
          product.shortDescription,
          product.description,
          ...product.features,
          ...product.specs.map(s => `${s.label} ${s.value}`),
        ].join(' ').toLowerCase();

        if (searchableText.includes(query)) {
          results.push({
            type: 'product',
            id: product.id,
            title: product.name,
            description: product.shortDescription,
            path: `/products/${cat.id}/${product.id}`,
          });
        }
      });
    });

    return results.slice(0, 5); // Показываем максимум 5 результатов
  }, [searchQuery]);

  return (
    <section className="relative bg-gray-900 py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs sm:text-sm font-medium rounded-full mb-4">
            <Package size={14} />
            Каталог продукции
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Найдите идеальное <span className="text-brand-500">решение</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
            Введите название продукции, серию, диаметр или опишите задачу — мы найдём подходящее решение
          </p>
        </div>

        {/* Search box */}
        <div className="relative max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Например: труба ППУ 108 мм"
              className="w-full pl-12 sm:pl-14 pr-4 sm:pr-6 py-4 sm:py-5 text-base sm:text-lg bg-white/5 border-2 border-white/10 rounded-2xl shadow-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all"
            />
          </div>

          {/* Search results dropdown */}
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
              {searchResults.map((result) => (
                <Link
                  key={result.id}
                  to={result.path}
                  className="block px-4 sm:px-5 py-3 sm:py-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                      result.type === 'category' ? 'bg-brand-500' : 'bg-blue-400'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-white mb-1 text-sm sm:text-base">{result.title}</div>
                      <div className="text-xs sm:text-sm text-gray-400 line-clamp-1">{result.description}</div>
                    </div>
                    <ArrowRight size={16} className="text-gray-400 shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Categories */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Layers size={16} className="text-brand-400" />
            <h2 className="text-lg sm:text-xl font-semibold text-white">Категории продукции</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/products/${cat.id}`}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-500/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600/0 to-brand-600/0 group-hover:from-brand-600/10 group-hover:to-transparent transition-all duration-500" />

                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 group-hover:bg-brand-500/30 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-5 transition-all duration-300">
                    <CategoryIcon type={cat.icon} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 group-hover:text-brand-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-5 line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-white font-medium flex items-center gap-1 group-hover:gap-2 group-hover:text-brand-400 transition-all">
                      {cat.products.length} {cat.products.length === 1 ? 'позиция' : 'позиции'}
                    </span>
                    <ArrowRight size={14} className="sm:hidden text-white/30 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
                    <ArrowRight size={16} className="hidden sm:block text-white/30 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryIcon({ type }: { type: string }) {
  switch (type) {
    case 'pipe':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-400">
          <rect x="2" y="8" width="20" height="8" rx="4" />
          <line x1="6" y1="8" x2="6" y2="16" />
          <line x1="18" y1="8" x2="18" y2="16" />
        </svg>
      );
    case 'fitting':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-400">
          <path d="M4 16V8h8v8H4z" />
          <path d="M12 12h8" />
          <path d="M16 8v8" />
        </svg>
      );
    case 'odk':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-400">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      );
    case 'accessory':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-400">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    default:
      return null;
  }
}
