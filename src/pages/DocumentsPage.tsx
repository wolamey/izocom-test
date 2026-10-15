import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, Download, Filter, Search } from 'lucide-react';
import { documents } from '../data/documents';
import { categories } from '../data/products';

export default function DocumentsPage() {
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  const types = [
    { id: 'all', name: 'Все документы' },
    { id: 'gost', name: 'ГОСТ' },
    { id: 'certificate', name: 'Сертификаты' },
    { id: 'catalog', name: 'Каталоги' },
    { id: 'instruction', name: 'Инструкции' },
    { id: 'drawing', name: 'Чертежи' },
    { id: 'bim', name: 'BIM' },
  ];

  const filtered = documents.filter(d => {
    if (typeFilter !== 'all' && d.type !== typeFilter) return false;
    if (categoryFilter !== 'all' && !d.productCategories.includes(categoryFilter)) return false;
    if (search && !d.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const formatColor = (format: string) => {
    switch (format) {
      case 'PDF': return 'bg-red-50 text-red-700';
      case 'DWG': return 'bg-blue-50 text-blue-700';
      case 'RFA': return 'bg-purple-50 text-purple-700';
      case 'XLS': return 'bg-green-50 text-green-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-600 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900 font-medium">Проектировщикам</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Проектировщикам и документы</h1>
          <p className="text-gray-600 max-w-2xl">
            Каталог технической документации: ГОСТы, сертификаты, инструкции по монтажу, чертежи в DWG и BIM-библиотека.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white border border-gray-100 rounded-xl p-4 lg:p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={16} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Фильтры</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Поиск документа..."
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
            </div>
            <select
              value={typeFilter}
              onChange={e => setTypeFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
            >
              {types.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
            <select
              value={categoryFilter}
              onChange={e => setCategoryFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
            >
              <option value="all">Все категории продукции</option>
              {categories.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-gray-500 mb-4">
          Найдено: {filtered.length} {filtered.length === 1 ? 'документ' : filtered.length < 5 ? 'документа' : 'документов'}
        </div>

        {/* Documents list */}
        {filtered.length > 0 ? (
          <div className="space-y-3">
            {filtered.map(doc => (
              <a
                key={doc.id}
                href="#"
                className="flex items-center gap-4 p-4 lg:p-5 bg-white border border-gray-100 rounded-xl hover:border-brand-200 hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                  <FileText size={20} className="text-gray-500 group-hover:text-brand-600 transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm lg:text-base font-medium text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1">{doc.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className={`px-2 py-0.5 text-xs font-medium rounded ${formatColor(doc.format)}`}>{doc.format}</span>
                    <span className="text-xs text-gray-500">{doc.typeName}</span>
                    <span className="text-xs text-gray-400 hidden sm:inline">{doc.size}</span>
                    <span className="text-xs text-gray-400 hidden sm:inline">{doc.date}</span>
                  </div>
                </div>
                <Download size={18} className="text-gray-400 group-hover:text-brand-600 shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-500">Документы не найдены. Попробуйте изменить фильтры.</p>
          </div>
        )}

        {/* Info block */}
        <div className="mt-12 bg-brand-50 rounded-xl p-6 lg:p-8">
          <h3 className="font-semibold text-gray-900 mb-2">Нужна консультация?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Если вам нужна помощь в подборе документации или технические консультации для проектирования — свяжитесь с нами.
          </p>
          <Link
            to="/request"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors"
          >
            Связаться с инженером
          </Link>
        </div>
      </div>
    </div>
  );
}
