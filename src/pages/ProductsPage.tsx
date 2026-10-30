import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Search, SlidersHorizontal, ArrowRight, Filter } from 'lucide-react';
import { categories, getCategoryById } from '../data/products';
import ProductImage from '../components/ProductImage';
import CatalogHeroSection from '../components/CatalogHeroSection';

export default function ProductsPage() {
  const { categoryId } = useParams();
  const [search, setSearch] = useState('');

  // If specific category
  if (categoryId) {
    const category = getCategoryById(categoryId);
    if (!category) {
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Категория не найдена</h1>
            <Link to="/products" className="text-brand-400 hover:underline">Вернуться в каталог</Link>
          </div>
        </div>
      );
    }

    const filtered = category.products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div>
        {/* Breadcrumbs */}
        <div className="bg-gray-900 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-brand-400 transition-colors">Главная</Link>
              <ChevronRight size={14} />
              <Link to="/products" className="hover:text-brand-400 transition-colors">Каталог</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">{category.name}</span>
            </nav>
          </div>
        </div>

        {/* Category Hero */}
        <section className="relative bg-gray-900 py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs sm:text-sm font-medium rounded-full mb-4">
                <Filter size={14} />
                Категория
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {category.name}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="relative bg-gray-800 py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 mb-8 hover:border-brand-500/30 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Search size={16} className="text-brand-400" />
                <span className="text-sm font-medium text-white">Поиск по категории</span>
              </div>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Поиск по названию..."
                  className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Products grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filtered.map(product => (
                  <Link
                    key={product.id}
                    to={`/products/${categoryId}/${product.id}`}
                    className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <ProductImage type={product.image} className="aspect-[4/3]" />
                    <div className="p-4 sm:p-5">
                      <h3 className="font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors text-base sm:text-lg">
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{product.shortDescription}</p>
                      <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                        {product.features.slice(0, 2).map((f, i) => (
                          <span key={i} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-md border border-white/10">
                            {f}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-brand-400 font-medium group-hover:gap-2 transition-all">
                        Подробнее <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-gray-400">Ничего не найдено по запросу «{search}»</p>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  // All categories - main catalog page
  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Каталог</span>
          </nav>
        </div>
      </div>

      {/* Hero with search and categories */}
      <CatalogHeroSection />

      {/* Full catalog section */}
      <section className="relative bg-gray-800 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Весь каталог</h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
              Предизолированные трубы, фасонные изделия, системы контроля и комплектующие для тепловых сетей.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {categories.map(category => (
              <div key={category.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-300">
                <div className="p-4 sm:p-6 lg:p-8 border-b border-white/10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{category.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-400">{category.description}</p>
                    </div>
                    <Link
                      to={`/products/${category.id}`}
                      className="hidden sm:inline-flex items-center gap-1 text-brand-400 font-medium text-sm hover:gap-2 transition-all shrink-0"
                    >
                      Все {category.products.length} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {category.products.map(product => (
                      <Link
                        key={product.id}
                        to={`/products/${category.id}/${product.id}`}
                        className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0">
                          <ProductImage type={product.image} className="w-full h-full rounded-lg" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-white text-sm sm:text-base group-hover:text-brand-400 transition-colors truncate">
                            {product.name}
                          </h4>
                          <p className="text-xs text-gray-400 mt-0.5 truncate">{product.shortDescription}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to={`/products/${category.id}`}
                    className="sm:hidden mt-4 inline-flex items-center gap-1 text-brand-400 font-medium text-sm"
                  >
                    Все позиции <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gray-900 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Не нашли нужную <span className="text-brand-500">продукцию?</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы подберём оптимальное решение для вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/request"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
            >
              Запросить расчёт
            </Link>
            <Link
              to="/contacts"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30 text-white font-medium rounded-lg transition-all duration-300"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
