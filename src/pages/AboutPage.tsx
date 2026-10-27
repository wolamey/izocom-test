import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Award, Users, Factory, Calendar, ArrowRight } from 'lucide-react';
import { LinkButton } from '../components/ui/Button';

export default function AboutPage() {
  const presentationImages = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    url: `https://izocom.by/images/okompani/presentation_2025/Izokom_Corporate_Presentation_2025_${String(i + 1).padStart(2, '0')}.png`,
    alt: `Презентация компании - слайд ${i + 1}`
  }));

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">О компании</span>
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
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium rounded-full mb-4">
                <Factory size={14} />
                О компании
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Изоком Пласт — <span className="text-brand-500">надёжный партнёр</span>
              </h1>
              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                Компания «Изоком Пласт» — российский производитель предизолированных стальных труб, фасонных изделий и комплектующих для строительства тепловых сетей.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Мы работаем с 2005 года и за это время поставили продукцию для объектов теплоснабжения в более чем 60 регионах России. Наше производство оснащено современным оборудованием и соответствует требованиям ГОСТ 30732-2006.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Мы обеспечиваем полный цикл — от подбора продукции и расчёта до доставки и технического сопровождения монтажа.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
                <Calendar size={32} className="mx-auto text-brand-500 mb-3" />
                <div className="text-4xl font-bold text-white mb-1">18+</div>
                <div className="text-sm text-gray-400">лет на рынке</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
                <Factory size={32} className="mx-auto text-blue-400 mb-3" />
                <div className="text-4xl font-bold text-white mb-1">5000</div>
                <div className="text-sm text-gray-400">м² производство</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
                <Users size={32} className="mx-auto text-green-400 mb-3" />
                <div className="text-4xl font-bold text-white mb-1">120+</div>
                <div className="text-sm text-gray-400">сотрудников</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
                <Award size={32} className="mx-auto text-amber-400 mb-3" />
                <div className="text-4xl font-bold text-white mb-1">60+</div>
                <div className="text-sm text-gray-400">регионов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Наши принципы</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Фундаментальные ценности, которые определяют нашу работу</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Качество', desc: 'Вся продукция проходит многоступенчатый контроль и соответствует ГОСТ', icon: <Award size={32} className="text-brand-500" /> },
              { title: 'Надёжность', desc: 'Стабильные сроки производства и поставок по всей России', icon: <CheckCircle2 size={32} className="text-green-400" /> },
              { title: 'Экспертиза', desc: 'Инженеры с опытом проектирования и монтажа тепловых сетей', icon: <Users size={32} className="text-blue-400" /> },
              { title: 'Сервис', desc: 'Техническая поддержка на каждом этапе работы с клиентом', icon: <Factory size={32} className="text-amber-400" /> },
            ].map((item, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-500/30 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Производственный процесс</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Шесть этапов от сырья до готовой продукции</p>
          </div>
          
          <div className="space-y-4">
            {[
              { step: '01', title: 'Подготовка стальной трубы', desc: 'Входной контроль, очистка поверхности, подготовка к изоляции' },
              { step: '02', title: 'Сборка конструкции', desc: 'Установка центрирующих опор, размещение сигнальных проводов ОДК' },
              { step: '03', title: 'Нанесение защитной оболочки', desc: 'Экструзия полиэтилена или монтаж оцинкованной оболочки' },
              { step: '04', title: 'Заливка ППУ', desc: 'Подготовка композиции, заливка пенополиуретана между трубой и оболочкой' },
              { step: '05', title: 'Контроль качества', desc: 'Проверка плотности, теплопроводности, герметичности, геометрии' },
              { step: '06', title: 'Маркировка и отгрузка', desc: 'Нанесение маркировки, оформление паспорта, подготовка к отгрузке' },
            ].map((item, i) => (
              <div key={i} className="group flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-brand-500/30 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-brand-500/10 border border-brand-500/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-brand-400 font-bold text-lg">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Сертификация</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Полный пакет документов, подтверждающих качество продукции</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Сертификат соответствия ГОСТ 30732-2006',
              'Сертификат пожарной безопасности',
              'Санитарно-эпидемиологическое заключение',
              'Протокол испытаний на теплопроводность',
              'Протокол испытаний на прочность',
              'Сертификат системы менеджмента качества ISO 9001',
            ].map((cert, i) => (
              <div key={i} className="group flex items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-green-500/30 hover:bg-white/10 transition-all duration-300">
                <CheckCircle2 size={20} className="text-green-400 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <LinkButton
              to="/documents"
              variant="outline"
              size="md"
              iconRight={<ArrowRight size={16} />}
              className="border-white/20 text-white hover:bg-white/5 bg-transparent! hover:border-brand-500/50"
            >
              Все документы
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Corporate Presentation Gallery */}
      <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium rounded-full mb-4">
              <Award size={14} />
              Презентация
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Корпоративная презентация 2025</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Подробная информация о компании, производстве и продукции</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presentationImages.map((image) => (
              <a
                key={image.id}
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-300"
              >
                <div className="aspect-video bg-gray-800 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <div className="text-sm font-medium">Слайд {image.id}</div>
                    <div className="text-xs text-gray-300">Нажмите для просмотра</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Готовы начать <span className="text-brand-500">сотрудничество?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для расчёта стоимости, подбора продукции или получения технической консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton
              to="/request"
              variant="primary"
              size="lg"
              iconRight={<ArrowRight size={18} />}
            >
              Запросить расчёт
            </LinkButton>
            <LinkButton
              to="/contacts"
              variant="outline"
              size="lg"
              className="border-white/20 bg-transparent! text-white hover:bg-white/5 hover:border-brand-500/50"
            >
              Связаться с нами
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
