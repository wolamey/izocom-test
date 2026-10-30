import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, Download, Filter, Search, BookOpen, Shield, Wrench } from 'lucide-react';
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'gost':
        return <Shield size={20} className="text-brand-400" />;
      case 'certificate':
        return <Shield size={20} className="text-green-400" />;
      case 'catalog':
        return <BookOpen size={20} className="text-blue-400" />;
      case 'instruction':
        return <Wrench size={20} className="text-amber-400" />;
      case 'drawing':
        return <FileText size={20} className="text-purple-400" />;
      case 'bim':
        return <FileText size={20} className="text-cyan-400" />;
      default:
        return <FileText size={20} className="text-gray-400" />;
    }
  };

  const formatColor = (format: string) => {
    switch (format) {
      case 'PDF': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'DWG': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'RFA': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'XLS': return 'bg-green-500/10 text-green-400 border-green-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Проектировщикам</span>
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
              <FileText size={14} />
              Техническая документация
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Проектировщикам и <span className="text-brand-500">документы</span>
            </h1>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg">
              Каталог технической документации: ГОСТы, сертификаты, инструкции по монтажу, чертежи в DWG и BIM-библиотека
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">{documents.length}</div>
              <div className="text-sm text-gray-400">Документов</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">7</div>
              <div className="text-sm text-gray-400">Типов</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-gray-400">Доступ</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-gray-400">Актуальность</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Documents */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 hover:border-brand-500/30 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Filter size={16} className="text-brand-400" />
              <span className="text-sm font-medium text-white">Фильтры</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Поиск документа..."
                  className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>
              <select
                value={typeFilter}
                onChange={e => setTypeFilter(e.target.value)}
                className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              >
                {types.map(t => (
                  <option key={t.id} value={t.id} className="bg-gray-800">{t.name}</option>
                ))}
              </select>
              <select
                value={categoryFilter}
                onChange={e => setCategoryFilter(e.target.value)}
                className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              >
                <option value="all" className="bg-gray-800">Все категории продукции</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id} className="bg-gray-800">{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="text-sm text-gray-400 mb-6">
            Найдено: {filtered.length} {filtered.length === 1 ? 'документ' : filtered.length < 5 ? 'документа' : 'документов'}
          </div>

          {/* Documents list */}
          {filtered.length > 0 ? (
            <div className="space-y-3">
              {filtered.map(doc => (
                <a
                  key={doc.id}
                  href="#"
                  className="group flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-brand-500/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {getTypeIcon(doc.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base lg:text-lg font-medium text-white group-hover:text-brand-400 transition-colors line-clamp-1 mb-1">
                      {doc.name}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="px-2 py-0.5 bg-brand-500/10 text-brand-400 rounded-full">
                        {doc.typeName}
                      </span>
                      <span className="text-gray-500">{doc.date}</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${formatColor(doc.format)}`}>
                      {doc.format}
                    </span>
                    <span className="text-xs text-gray-500">{doc.size}</span>
                  </div>
                  <Download size={20} className="text-gray-400 group-hover:text-brand-400 shrink-0 transition-colors" />
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-gray-400">Документы не найдены. Попробуйте изменить фильтры.</p>
            </div>
          )}

          {/* Info block */}
          <div className="mt-12 bg-gradient-to-br from-brand-600/10 to-brand-600/5 border border-brand-500/20 rounded-2xl p-6 lg:p-8">
            <h3 className="font-semibold text-white mb-2">Нужна консультация?</h3>
            <p className="text-sm text-gray-300 mb-4">
              Если вам нужна помощь в подборе документации или технические консультации для проектирования — свяжитесь с нами.
            </p>
            <Link
              to="/request"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Связаться с инженером
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
