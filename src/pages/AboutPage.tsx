import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Award, Users, Factory, Calendar } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-600 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900 font-medium">О компании</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">О компании Изоком Пласт</h1>
            <p className="text-gray-600  mb-4">
              Компания «Изоком Пласт» — российский производитель предизолированных стальных труб, фасонных изделий и комплектующих для строительства тепловых сетей.
            </p>
            <p className="text-gray-600  mb-4">
              Мы работаем с 2005 года и за это время поставили продукцию для объектов теплоснабжения в более чем 60 регионах России. Наше производство оснащено современным оборудованием и соответствует требованиям ГОСТ 30732-2006.
            </p>
            <p className="text-gray-600 ">
              Мы обеспечиваем полный цикл — от подбора продукции и расчёта до доставки и технического сопровождения монтажа.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-brand-50 rounded-xl p-6 text-center">
              <Calendar size={28} className="mx-auto text-brand-600 mb-2" />
              <div className="text-3xl font-bold text-gray-900">18+</div>
              <div className="text-sm text-gray-500">лет на рынке</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <Factory size={28} className="mx-auto text-blue-600 mb-2" />
              <div className="text-3xl font-bold text-gray-900">5000</div>
              <div className="text-sm text-gray-500">м² производство</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <Users size={28} className="mx-auto text-green-600 mb-2" />
              <div className="text-3xl font-bold text-gray-900">120+</div>
              <div className="text-sm text-gray-500">сотрудников</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 text-center">
              <Award size={28} className="mx-auto text-amber-600 mb-2" />
              <div className="text-3xl font-bold text-gray-900">60+</div>
              <div className="text-sm text-gray-500">регионов</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Наши принципы</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Качество', desc: 'Вся продукция проходит многоступенчатый контроль и соответствует ГОСТ', icon: '🏆' },
              { title: 'Надёжность', desc: 'Стабильные сроки производства и поставок по всей России', icon: '🤝' },
              { title: 'Экспертиза', desc: 'Инженеры с опытом проектирования и монтажа тепловых сетей', icon: '🔧' },
              { title: 'Сервис', desc: 'Техническая поддержка на каждом этапе работы с клиентом', icon: '💬' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Production process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Производственный процесс</h2>
          <div className="space-y-4">
            {[
              { step: '01', title: 'Подготовка стальной трубы', desc: 'Входной контроль, очистка поверхности, подготовка к изоляции' },
              { step: '02', title: 'Сборка конструкции', desc: 'Установка центрирующих опор, размещение сигнальных проводов ОДК' },
              { step: '03', title: 'Нанесение защитной оболочки', desc: 'Экструзия полиэтилена или монтаж оцинкованной оболочки' },
              { step: '04', title: 'Заливка ППУ', desc: 'Подготовка композиции, заливка пенополиуретана между трубой и оболочкой' },
              { step: '05', title: 'Контроль качества', desc: 'Проверка плотности, теплопроводности, герметичности, геометрии' },
              { step: '06', title: 'Маркировка и отгрузка', desc: 'Нанесение маркировки, оформление паспорта, подготовка к отгрузке' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl hover:border-brand-200 transition-colors">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-brand-600 font-bold text-sm">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Сертификация</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Сертификат соответствия ГОСТ 30732-2006',
              'Сертификат пожарной безопасности',
              'Санитарно-эпидемиологическое заключение',
              'Протокол испытаний на теплопроводность',
              'Протокол испытаний на прочность',
              'Сертификат системы менеджмента качества ISO 9001',
            ].map((cert, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                <span className="text-sm text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/documents" className="inline-flex items-center gap-2 text-brand-600 font-medium text-sm hover:gap-3 transition-all">
              Все документы <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
