import { useParams, Link } from 'react-router-dom';
import { ChevronRight, FileText, Download, Phone, ArrowRight } from 'lucide-react';
import { getProductById, getCategoryById } from '../data/products';
import { documents } from '../data/documents';
import ProductImage from '../components/ProductImage';
import RequestForm from '../components/RequestForm';

export default function ProductPage() {
  const { productId } = useParams();
  const product = getProductById(productId || '');
  const category = product ? getCategoryById(product.categoryId) : undefined;

  if (!product || !category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Продукт не найден</h1>
        <Link to="/products" className="text-brand-600 hover:underline">Вернуться в каталог</Link>
      </div>
    );
  }

  const productDocs = documents.filter(d => product.documents.includes(d.id));

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <Link to="/" className="hover:text-brand-600 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-brand-600 transition-colors">Продукция</Link>
            <ChevronRight size={14} />
            <Link to={`/products/${category.id}`} className="hover:text-brand-600 transition-colors">{category.name}</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900 font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Product header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div>
            <ProductImage type={product.image} className="aspect-[4/3] rounded-xl border border-gray-100" />
          </div>
          <div>
            <div className="text-sm text-brand-600 font-medium mb-2">{product.category}</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6 ">{product.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Ключевые особенности</h3>
              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-brand-600 rounded-full shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick specs */}
            <div className="bg-gray-50 rounded-xl p-5 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Основные параметры</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.specs.slice(0, 4).map((s, i) => (
                  <div key={i}>
                    <div className="text-xs text-gray-500">{s.label}</div>
                    <div className="text-sm font-medium text-gray-900">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+74951234567"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-600 transition-colors"
              >
                <Phone size={16} />
                Позвонить
              </a>
              <a
                href="#request"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors"
              >
                Запросить расчёт
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Full specs table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Характеристики</h2>
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.specs.map((s, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-3.5 text-sm text-gray-500 font-medium w-1/2">{s.label}</td>
                    <td className="px-6 py-3.5 text-sm text-gray-900 font-medium">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sizes table */}
        {product.sizes.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Типоразмеры</h2>
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">DN, мм</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Изоляция, мм</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Стенка, мм</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Масса, кг/м</th>
                  </tr>
                </thead>
                <tbody>
                  {product.sizes.map((s, i) => (
                    <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="px-6 py-3 text-sm text-gray-900 font-medium">{s.dn}</td>
                      <td className="px-6 py-3 text-sm text-gray-600">{s.isolation}</td>
                      <td className="px-6 py-3 text-sm text-gray-600">{s.wall}</td>
                      <td className="px-6 py-3 text-sm text-gray-600">{s.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Documents */}
        {productDocs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Документы</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {productDocs.map(doc => (
                <a
                  key={doc.id}
                  href="#"
                  className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:border-brand-200 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                    <FileText size={18} className="text-brand-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-2">{doc.name}</h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                      <span>{doc.format}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                  <Download size={16} className="text-gray-400 group-hover:text-brand-600 shrink-0 mt-1 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Request form */}
        <div id="request" className="scroll-mt-24">
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Запросить расчёт</h2>
            <p className="text-gray-500 text-sm mb-6">
              Заполните форму — мы подготовим коммерческое предложение для «{product.name}»
            </p>
            <RequestForm productName={product.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
