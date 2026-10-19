import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Phone, Mail, Clock, Building2, Globe } from 'lucide-react';

const regions = [
  { id: 'moscow', name: 'Москва и МО', address: 'г. Москва, ул. Промышленная, д. 12', phone: '+7 (495) 123-45-67', email: 'moscow@izocomplast.ru', hours: 'Пн–Пт: 9:00–18:00', type: 'office' },
  { id: 'spb', name: 'Санкт-Петербург', address: 'г. Санкт-Петербург, пр. Энергетиков, д. 35', phone: '+7 (812) 987-65-43', email: 'spb@izocomplast.ru', hours: 'Пн–Пт: 9:00–18:00', type: 'office' },
  { id: 'kazan', name: 'Казань', address: 'г. Казань, ул. Промышленная, д. 8', phone: '+7 (843) 234-56-78', email: 'kazan@izocomplast.ru', hours: 'Пн–Пт: 9:00–17:30', type: 'representative' },
  { id: 'ekb', name: 'Екатеринбург', address: 'г. Екатеринбург, ул. Заводская, д. 22', phone: '+7 (343) 345-67-89', email: 'ekb@izocomplast.ru', hours: 'Пн–Пт: 9:00–18:00', type: 'representative' },
  { id: 'novosibirsk', name: 'Новосибирск', address: 'г. Новосибирск, ул. Сибирская, д. 15', phone: '+7 (383) 456-78-90', email: 'nsk@izocomplast.ru', hours: 'Пн–Пт: 9:00–17:30', type: 'representative' },
  { id: 'krasnodar', name: 'Краснодар', address: 'г. Краснодар, ул. Промышленная, д. 5', phone: '+7 (861) 567-89-01', email: 'krd@izocomplast.ru', hours: 'Пн–Пт: 9:00–18:00', type: 'representative' },
];

export default function ContactsPage() {
  const [selectedRegion, setSelectedRegion] = useState('moscow');
  const current = regions.find(r => r.id === selectedRegion) || regions[0];

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-600 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900 font-medium">Контакты</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Контакты и представительства</h1>
        <p className="text-gray-600 mb-10">Выберите регион, чтобы увидеть контактную информацию местного офиса или представителя.</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Region selector */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Globe size={18} className="text-brand-600" />
              Выберите регион
            </h2>
            <div className="space-y-2">
              {regions.map(region => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    selectedRegion === region.id
                      ? 'bg-brand-50 text-brand-700 border border-brand-200'
                      : 'bg-gray-50 text-gray-700 border border-transparent hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Building2 size={14} className={selectedRegion === region.id ? 'text-brand-600' : 'text-gray-400'} />
                    {region.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 ml-5">
                    {region.type === 'office' ? 'Офис и склад' : 'Представитель'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 rounded-xl p-6 lg:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{current.name}</h2>
                  <span className={`inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full ${
                    current.type === 'office'
                      ? 'bg-brand-50 text-brand-700'
                      : 'bg-blue-50 text-blue-700'
                  }`}>
                    {current.type === 'office' ? 'Офис и склад' : 'Представитель'}
                  </span>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-brand-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-0.5">Адрес</div>
                    <div className="text-gray-900 font-medium">{current.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-brand-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-0.5">Телефон отдела продаж</div>
                    <a href={`tel:${current.phone.replace(/\s/g, '')}`} className="text-gray-900 font-medium hover:text-brand-600 transition-colors">{current.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-brand-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-0.5">Email</div>
                    <a href={`mailto:${current.email}`} className="text-gray-900 font-medium hover:text-brand-600 transition-colors">{current.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-brand-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-0.5">Режим работы</div>
                    <div className="text-gray-900 font-medium">{current.hours}</div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-gray-100 rounded-xl h-64 flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Карта</p>
                  <p className="text-xs text-gray-400">{current.address}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 bg-brand-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Нужна консультация?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Свяжитесь с нами для расчёта стоимости, подбора продукции или получения технической документации.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/request"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors"
                >
                  Запросить расчёт
                </Link>
                <a
                  href={`tel:${current.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:border-brand-300 transition-colors"
                >
                  <Phone size={14} />
                  {current.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
