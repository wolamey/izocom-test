import { useParams, Link } from 'react-router-dom';
import { ChevronRight, FileText, Download, Phone, ArrowRight, Package, CheckCircle2 } from 'lucide-react';
import { getProductById, getCategoryById } from '../data/products';
import { documents } from '../data/documents';
import ProductImage from '../components/ProductImage';
import RequestForm from '../components/RequestForm';
import { LinkButton } from '../components/ui/Button';

export default function ProductPage() {
  const { productId } = useParams();
  const product = getProductById(productId || '');
  const category = product ? getCategoryById(product.categoryId) : undefined;

  if (!product || !category) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Продукт не найден</h1>
          <Link to="/products" className="text-brand-400 hover:underline">Вернуться в каталог</Link>
        </div>
      </div>
    );
  }

  const productDocs = documents.filter(d => product.documents.includes(d.id));

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400 flex-wrap">
            <Link to="/" className="hover:text-brand-400 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-brand-400 transition-colors">Каталог</Link>
            <ChevronRight size={14} />
            <Link to={`/products/${category.id}`} className="hover:text-brand-400 transition-colors">{category.name}</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Product Section */}
      <section className="relative bg-gray-900 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Product Image */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-brand-500/30 transition-all duration-300">
              <ProductImage type={product.image} className="aspect-[4/3] rounded-xl" />
            </div>

            {/* Product Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs sm:text-sm font-medium rounded-full mb-4">
                <Package size={14} />
                {product.category}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {product.name}
              </h1>

              <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Ключевые особенности</h3>
                <ul className="space-y-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                      <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick specs */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Основные параметры</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {product.specs.slice(0, 4).map((s, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-3">
                      <div className="text-xs text-gray-400 mb-1">{s.label}</div>
                      <div className="text-sm sm:text-base font-semibold text-white">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+74951234567"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30 text-white text-sm font-medium rounded-lg transition-all duration-300"
                >
                  <Phone size={16} />
                  Позвонить
                </a>
                <a
                  href="#request"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Запросить расчёт
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full specs table */}
      <section className="relative bg-gray-800 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Характеристики</h2>
            <p className="text-sm sm:text-base text-gray-400">Полные технические характеристики продукции</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <tbody>
                  {product.specs.map((s, i) => (
                    <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/5' : 'bg-transparent'} hover:bg-white/10 transition-colors`}>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-400 font-medium w-1/2">{s.label}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-white font-semibold">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes table */}
      {product.sizes.length > 0 && (
        <section className="relative bg-gray-900 py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Типоразмеры</h2>
              <p className="text-sm sm:text-base text-gray-400">Доступные размеры и модификации</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="bg-brand-500/10 border-b border-white/10">
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-brand-400 uppercase tracking-wider">DN, мм</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-brand-400 uppercase tracking-wider">Изоляция, мм</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-brand-400 uppercase tracking-wider">Стенка, мм</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-brand-400 uppercase tracking-wider">Масса, кг/м</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.sizes.map((s, i) => (
                      <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/5' : 'bg-transparent'} hover:bg-white/10 transition-colors`}>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-white font-semibold">{s.dn}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-300">{s.isolation}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-300">{s.wall}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-300">{s.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Documents */}
      {productDocs.length > 0 && (
        <section className="relative bg-gray-800 py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Документы</h2>
              <p className="text-sm sm:text-base text-gray-400">Техническая документация и сертификаты</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {productDocs.map(doc => (
                <a
                  key={doc.id}
                  href="#"
                  className="group flex items-start gap-3 p-4 sm:p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-brand-500/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FileText size={20} className="text-brand-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm sm:text-base font-medium text-white group-hover:text-brand-400 transition-colors line-clamp-2 mb-2">
                      {doc.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="px-2 py-0.5 bg-brand-500/10 text-brand-400 rounded-full">{doc.format}</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                  <Download size={18} className="text-gray-400 group-hover:text-brand-400 shrink-0 mt-1 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Request form */}
      <section id="request" className="scroll-mt-24 relative bg-gray-900 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 lg:p-12 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Запросить расчёт</h2>
                <p className="text-sm sm:text-base text-gray-400 mb-6">
                  Заполните форму — мы подготовим коммерческое предложение для «{product.name}»
                </p>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-400" />
                    Ответ в течение 1 рабочего дня
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-400" />
                    Расчёт по спецификации заказчика
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-400" />
                    Технические консультации бесплатно
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                <RequestForm productName={product.name} compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="relative bg-gray-800 py-8 sm:py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to={`/products/${category.id}`}
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium transition-colors"
            >
              <ArrowRight size={16} className="rotate-180" />
              Назад к категории
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium transition-colors"
            >
              Весь каталог
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
