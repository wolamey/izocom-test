import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Search, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { categories, getCategoryById } from '../data/products';
import ProductImage from '../components/ProductImage';

export default function ProductsPage() {
  const { categoryId } = useParams();
  const [search, setSearch] = useState('');

  // If specific category
  if (categoryId) {
    const category = getCategoryById(categoryId);
    if (!category) {
      return (
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Категория не найдена</h1>
          <Link to="/products" className="text-brand-600 hover:underline">Вернуться в каталог</Link>
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
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-brand-600 transition-colors">Главная</Link>
              <ChevronRight size={14} />
              <Link to="/products" className="hover:text-brand-600 transition-colors">Продукция</Link>
              <ChevronRight size={14} />
              <span className="text-gray-900 font-medium">{category.name}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Category header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{category.name}</h1>
            <p className="text-gray-600 max-w-2xl">{category.description}</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <div className="relative flex-1 w-full sm:max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Поиск по названию..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <SlidersHorizontal size={16} />
              Фильтры
            </button>
          </div>

          {/* Products grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(product => (
                <Link
                  key={product.id}
                  to={`/products/${categoryId}/${product.id}`}
                  className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all duration-300"
                >
                  <ProductImage type={product.image} className="aspect-[4/3]" />
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{product.shortDescription}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.features.slice(0, 2).map((f, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md">{f}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm text-brand-600 font-medium group-hover:gap-2 transition-all">
                      Подробнее <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Ничего не найдено по запросу «{search}»</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // All categories
  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-600 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900 font-medium">Продукция</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Каталог продукции</h1>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Предизолированные трубы, фасонные изделия, системы контроля и комплектующие для тепловых сетей.
        </p>

        <div className="space-y-8">
          {categories.map(category => (
            <div key={category.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
              <div className="p-6 lg:p-8 border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h2>
                    <p className="text-gray-500 text-sm">{category.description}</p>
                  </div>
                  <Link
                    to={`/products/${category.id}`}
                    className="hidden sm:inline-flex items-center gap-1 text-brand-600 font-medium text-sm hover:gap-2 transition-all shrink-0 ml-4"
                  >
                    Все {category.products.length} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.products.map(product => (
                    <Link
                      key={product.id}
                      to={`/products/${category.id}/${product.id}`}
                      className="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-16 h-16 shrink-0">
                        <ProductImage type={product.image} className="w-full h-full rounded-lg" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-medium text-gray-900 text-sm group-hover:text-brand-600 transition-colors truncate">{product.name}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{product.shortDescription}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  to={`/products/${category.id}`}
                  className="sm:hidden mt-4 inline-flex items-center gap-1 text-brand-600 font-medium text-sm"
                >
                  Все позиции <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
