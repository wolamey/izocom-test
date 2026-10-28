import { Link } from 'react-router-dom';
import { ChevronRight, FileText, Download, Phone, MapPin, Clock, Mail, ArrowRight, BookOpen, Shield, Wrench } from 'lucide-react';
import { LinkButton } from '../components/ui/Button';

export default function StandardsPage() {
  const documents = [
    {
      title: 'Альбом типовых решений для проектирования и монтажа',
      format: 'PDF',
      size: '15.2 МБ',
      url: '/images/katalog/album_project.pdf',
      icon: <FileText size={24} className="text-red-400" />,
    },
    {
      title: 'Рекомендации по погрузочно-разгрузочным работам, транспортировке, хранению, монтажу ГПИ-труб ИЗОКОМ',
      format: 'PDF',
      size: '8.7 МБ',
      url: '/images/katalog/recomendacii_tranport.pdf',
      icon: <FileText size={24} className="text-red-400" />,
    },
    {
      title: 'Альбом технических решений ООО "Изоком Пласт"',
      format: 'DWG',
      size: '42.3 МБ',
      url: '/images/katalog/albom_teh_reseniy.dwg',
      icon: <Wrench size={24} className="text-blue-400" />,
    },
    {
      title: 'Каталог продукции ООО "Изоком Пласт"',
      format: 'PDF',
      size: '24.5 МБ',
      url: '/images/katalog/katalog_plast.pdf',
      icon: <FileText size={24} className="text-red-400" />,
    },
    {
      title: 'BIM-модели трубопроводы и фитинги',
      format: 'RFA',
      size: '156 МБ',
      url: 'https://izocom.by/images/katalog/bim_models_all.rar',
      icon: <BookOpen size={24} className="text-purple-400" />,
    },
  ];

  const standards = [
    {
      category: 'Стандарты на ГПИ-трубы',
      icon: <Shield size={20} className="text-brand-400" />,
      items: [
        'ГОСТ 54468-2011 «Трубы гибкие с тепловой изоляцией для систем теплоснабжения, горячего и холодного водоснабжения»',
        'ГОСТ Р 56730-2015 «Трубы полимерные гибкие с тепловой изоляцией для систем теплоснабжения. Общие технические условия»',
        'ГОСТ Р 55596-2013 Сети тепловые. Нормы и методы расчета на прочность и сейсмические воздействия',
      ],
    },
    {
      category: 'Своды правил',
      icon: <BookOpen size={20} className="text-blue-400" />,
      items: [
        'СП 74.13330.2011 Тепловые сети (СНиП 3.05.03-85)',
        'СП 124.13330.2012 Тепловые сети (СНиП 41-02-2003)',
        'СП 315.1325800.2017 Тепловые сети бесканальной прокладки. Правила проектирования.',
        'СП 41-103-2000 «Проектирование тепловой изоляции оборудования и трубопроводов»',
        'СП 41-105-2002 «Проектирование и строительство тепловых сетей бесканальной прокладки из стальных труб с индустриальной тепловой изоляцией из пенополиуретана в полиэтиленовой оболочке»',
        'СП 41-107-2004 «Проектирование и монтаж подземных трубопроводов горячего водоснабжения из труб ПЭ-С с тепловой изоляцией из пенополиуретана в полиэтиленовой оболочке»',
        'СП 61.13330.2012 «Тепловая изоляция оборудования и трубопроводов»',
      ],
    },
    {
      category: 'Документы по монтажу ГПИ-труб Изоком',
      icon: <Wrench size={20} className="text-green-400" />,
      items: [
        'ГОСТ Р 70406-2022 «Монтаж и испытания внешних горячих трубопроводов из гибких неметаллических труб»',
        'ТТК-100299864.315-2021 «Типовая технологическая карта на бесканальную прокладку трубопроводов тепловых сетей и сетей хозяйственно-питьевого водоснабжения из труб гибких с тепловой изоляцией из пенополиуретана в полиэтиленовой трубе-оболочке»',
        'Рекомендации по погрузочно-разгрузочным работам, транспортировке, хранению, монтажу ГПИ-труб ИЗОКОМ',
      ],
    },
  ];

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Нормативные документы</span>
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
              <Shield size={14} />
              Нормативная база
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Нормативные <span className="text-brand-500">документы</span>
            </h1>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg">
              Нормативно-техническая база для применения ГПИ-труб для систем теплоснабжения в РФ
            </p>
            <p className="text-gray-400 leading-relaxed">
              Полная документация для проектирования, монтажа и эксплуатации трубопроводных систем
            </p>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Документы для скачивания</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Каталоги, альбомы технических решений, BIM-модели и рекомендации</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, i) => (
              <a
                key={i}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {doc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors mb-2 line-clamp-3">
                      {doc.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="px-2 py-0.5 bg-brand-500/10 text-brand-400 rounded-full">{doc.format}</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-400 font-medium group-hover:gap-3 transition-all">
                  <Download size={16} />
                  Скачать
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Table Section */}
      <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Нормативно-техническая база</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Стандарты, своды правил и документы по монтажу ГПИ-труб</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {standards.map((section, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{section.category}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0 mt-2" />
                      <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Контактная информация</h2>
                <p className="text-gray-400 mb-8">
                  Свяжитесь с нами для получения консультаций по нормативным документам и технической поддержке
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-brand-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Телефоны отдела продаж</div>
                      <div className="text-white font-medium">+375 (17) 3978701(02), 2639444, 2639555</div>
                      <div className="text-white font-medium">+375 (29) 3090964, 3527126, 3090559</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Адрес</div>
                      <div className="text-white font-medium">г. Минск</div>
                      <div className="text-gray-300">пр-т. Газеты "Правда", д. 9, оф 5Н</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Email</div>
                      <a href="mailto:minsk@izocom.by" className="text-white font-medium hover:text-brand-400 transition-colors">
                        minsk@izocom.by
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Время работы</div>
                      <div className="text-white font-medium">Мы на связи!</div>
                      <div className="text-gray-300">По будням с 8:30 до 17:30</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-full">
                  <h3 className="text-2xl font-bold text-white mb-4">Нужна помощь?</h3>
                  <p className="text-gray-400 mb-6">
                    Наши специалисты помогут подобрать необходимую документацию и ответят на все вопросы по нормативным требованиям
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <LinkButton
                      to="/request"
                      variant="primary"
                      size="lg"
                      iconRight={<ArrowRight size={18} />}
                    >
                      Запросить консультацию
                    </LinkButton>
                    <LinkButton
                      to="/contacts"
                      variant="outline"
                      size="lg"
                      className="border-white/20 text-white hover:bg-white/5 hover:border-brand-500/50"
                    >
                      Все контакты
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
