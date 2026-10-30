import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Download, FileText, HardDrive, Calendar, Eye } from 'lucide-react';
import { getClientDocumentBySlug } from '../data/clientDocuments';

export default function ClientDocumentDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const document = slug ? getClientDocumentBySlug(slug) : undefined;

  if (!document) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Документ не найден</h1>
          <p className="text-gray-400 mb-8">Запрашиваемый документ не существует</p>
          <Link
            to="/documents/client"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
          >
            <ArrowLeft size={18} />
            Вернуться к документам
          </Link>
        </div>
      </div>
    );
  }

  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return <FileText className="w-16 h-16 text-red-500" />;
      case 'docx':
      case 'doc':
        return <FileText className="w-16 h-16 text-blue-500" />;
      case 'xlsx':
      case 'xls':
        return <FileText className="w-16 h-16 text-green-500" />;
      default:
        return <FileText className="w-16 h-16 text-gray-500" />;
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
            <Link to="/documents/client" className="hover:text-brand-400 transition-colors">
              Документы для клиентов
            </Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium line-clamp-1">{document.title}</span>
          </nav>
        </div>
      </div>

      {/* Document Detail */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium rounded-full mb-4">
                <FileText size={14} />
                {document.category}
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                {document.title}
              </h1>
              
              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8 pb-8 border-b border-white/10">
                <span className="flex items-center gap-2">
                  <HardDrive size={16} className="text-brand-400" />
                  {document.fileSize}
                </span>
                <span className="flex items-center gap-2">
                  <Download size={16} className="text-brand-400" />
                  {document.downloads} скачиваний
                </span>
                <span className="px-3 py-1 bg-brand-500/10 text-brand-400 text-xs font-medium rounded-full">
                  {document.fileType}
                </span>
              </div>
              
              {/* Document description */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 mb-6">
                <h2 className="text-xl font-bold text-white mb-4">Описание документа</h2>
                <p className="text-gray-300 leading-relaxed">
                  {document.description}
                </p>
              </div>

              {/* Instructions */}
              <div className="bg-gradient-to-br from-brand-600/10 to-brand-600/5 border border-brand-500/20 rounded-2xl p-6 lg:p-8">
                <h2 className="text-xl font-bold text-white mb-4">Как использовать документ</h2>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-brand-500/20 text-brand-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <span>Скачайте документ, нажав на кнопку "Скачать"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-brand-500/20 text-brand-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <span>Заполните все необходимые поля в документе</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-brand-500/20 text-brand-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <span>Отправьте заполненный документ на email: <a href="mailto:sales@izocomplast.ru" className="text-brand-400 hover:underline">sales@izocomplast.ru</a></span>
                  </li>
                </ol>
              </div>
              
              {/* Navigation */}
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between gap-4">
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30 text-white font-medium rounded-lg transition-all duration-300"
                >
                  <ArrowLeft size={18} />
                  Назад к документам
                </button>
                
                <a
                  href={document.downloadUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
                >
                  <Download size={18} />
                  Скачать документ
                </a>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Информация о файле</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                        {getFileIcon(document.fileType)}
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Тип файла</div>
                        <div className="text-white font-medium">{document.fileType}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <HardDrive size={20} className="text-brand-400" />
                      <div>
                        <div className="text-sm text-gray-400">Размер</div>
                        <div className="text-white font-medium">{document.fileSize}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Download size={20} className="text-brand-400" />
                      <div>
                        <div className="text-sm text-gray-400">Скачиваний</div>
                        <div className="text-white font-medium">{document.downloads}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Eye size={20} className="text-brand-400" />
                      <div>
                        <div className="text-sm text-gray-400">Категория</div>
                        <div className="text-white font-medium text-sm">{document.category}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <a
                  href={document.downloadUrl}
                  className="w-full mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
                >
                  <Download size={18} />
                  Скачать документ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
