import { Link } from 'react-router-dom';
import { ChevronRight, FileText, Download, Calendar, HardDrive, Eye } from 'lucide-react';
import { clientDocuments } from '../data/clientDocuments';

export default function ClientDocumentsPage() {
  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return <FileText className="w-8 h-8 text-red-500" />;
      case 'docx':
      case 'doc':
        return <FileText className="w-8 h-8 text-blue-500" />;
      case 'xlsx':
      case 'xls':
        return <FileText className="w-8 h-8 text-green-500" />;
      default:
        return <FileText className="w-8 h-8 text-gray-500" />;
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
            <span className="text-white font-medium">Документы для клиентов</span>
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
              Документация
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Документы для <span className="text-brand-500">клиентов</span>
            </h1>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg">
              Формы заявок, инструкции и шаблоны документов для работы с продукцией
            </p>
            <p className="text-gray-400 leading-relaxed">
              Все необходимые документы для оформления заказов, аренды инструмента и организации транспортировки
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">{clientDocuments.length}</div>
              <div className="text-sm text-gray-400">Документов</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">
                {clientDocuments.reduce((acc, doc) => acc + doc.downloads, 0)}
              </div>
              <div className="text-sm text-gray-400">Скачиваний</div>
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

      {/* Documents List */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Все документы</h2>
            <p className="text-gray-400">Доступно для скачивания: {clientDocuments.length} документов</p>
          </div>

          <div className="space-y-4">
            {clientDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  {/* File Icon */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                      {getFileIcon(doc.fileType)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/documents/client/${doc.slug}`}
                        className="text-xl font-bold text-white hover:text-brand-400 transition-colors mb-2 block"
                      >
                        {doc.title}
                      </Link>
                      <p className="text-sm text-gray-400 line-clamp-2">{doc.description}</p>
                    </div>
                  </div>

                  {/* File Info */}
                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <HardDrive size={16} className="text-brand-400" />
                      <span>{doc.fileSize}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Download size={16} className="text-brand-400" />
                      <span>{doc.downloads} скачиваний</span>
                    </div>
                    <div className="px-3 py-1 bg-brand-500/10 text-brand-400 text-xs font-medium rounded-full">
                      {doc.fileType}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <Link
                      to={`/documents/client/${doc.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30 text-white text-sm font-medium rounded-lg transition-all duration-300"
                    >
                      <Eye size={16} />
                      Подробнее
                    </Link>
                    <a
                      href={doc.downloadUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <Download size={16} />
                      Скачать
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Не нашли нужный <span className="text-brand-500">документ?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы предоставим необходимую документацию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacts"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
            >
              Связаться с нами
            </Link>
            <Link
              to="/documents"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30 text-white font-medium rounded-lg transition-all duration-300"
            >
              Все документы
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
