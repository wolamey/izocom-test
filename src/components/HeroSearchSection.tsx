import { useState, useMemo } from 'react';
import { Search, ArrowRight, Zap } from 'lucide-react';
import { LinkButton } from './ui/Button';
import { categories } from '../data/products';

interface SearchResult {
  type: 'category' | 'product';
  id: string;
  title: string;
  description: string;
  path: string;
}

export default function HeroSearchSection() {
  const [searchQuery, setSearchQuery] = useState('');

  // Быстрые категории
  const quickLinks = [
    { label: 'Теплоснабжение', query: 'теплоснабжение' },
    { label: 'ГВС', query: 'гвс горячее водоснабжение' },
    { label: 'ХВС', query: 'хвс холодное водоснабжение' },
    { label: 'Фитинги', query: 'фитинги отвод тройник' },
    { label: 'Комплектующие', query: 'комплектующие муфта' },
    { label: 'Документы', query: 'документы сертификаты гост' },
  ];

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

  const handleQuickLinkClick = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <section className="relative min-h-[calc(100vh-116px)] flex items-center bg-gradient-to-br from-gray-50 via-white to-brand-50 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-700 text-sm font-medium rounded-full">
            <Zap size={14} />
            Подбор продукции за 30 секунд
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl lg:text-6xl font-bold text-center text-gray-900 mb-6 leading-tight">
          Подберите решение для{' '}
          <span className="text-brand-600">вашего проекта</span>
        </h1>

        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Введите название продукции, серию, диаметр или опишите задачу — мы найдём подходящее решение
        </p>

        {/* Search box */}
        <div className="relative max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Search
              size={24}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Например: труба для теплоснабжения 110 мм"
              className="w-full pl-14 pr-6 py-5 text-lg bg-white border-2 border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:border-brand-500 focus:shadow-xl transition-all"
            />
          </div>

          {/* Search results dropdown */}
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden z-50">
              {searchResults.map((result) => (
                <a
                  key={result.id}
                  href={`#${result.path}`}
                  className="block px-5 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                      result.type === 'category' ? 'bg-brand-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 mb-1">{result.title}</div>
                      <div className="text-sm text-gray-500 line-clamp-1">{result.description}</div>
                    </div>
                    <ArrowRight size={16} className="text-gray-400 shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Quick links */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 mb-3">Популярные запросы:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {quickLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => handleQuickLinkClick(link.query)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-all shadow-sm hover:shadow"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog link */}
        <div className="text-center">
          <LinkButton
            to="/products"
            variant="ghost"
            size="md"
            iconRight={<ArrowRight size={16} />}
            className="text-gray-600 hover:text-brand-600"
          >
            Посмотреть весь каталог
          </LinkButton>
        </div>
      </div>
    </section>
  );
}