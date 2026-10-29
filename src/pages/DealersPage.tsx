import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, Globe, MapPin, Clock, ExternalLink } from 'lucide-react';
import { dealers } from '../data/dealers';

export default function DealersPage() {
  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <Link to="/contacts" className="hover:text-brand-400 transition-colors">Контакты</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Наши дилеры</span>
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
              <Globe size={14} />
              Дилерская сеть
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Наши <span className="text-brand-500">дилеры</span>
            </h1>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg">
              Официальные представители завода на территории Российской Федерации
            </p>
            <p className="text-gray-400 leading-relaxed">
              Широкая география присутствия позволяет обеспечить оперативные поставки продукции в любой регион
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-sm text-gray-400">Дилеров</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">60+</div>
              <div className="text-sm text-gray-400">Регионов</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-sm text-gray-400">Стран</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-gray-400">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dealers Grid */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {dealers.map((dealer) => (
              <div
                key={dealer.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  {dealer.logo && (
                    <div className="w-20 h-20 bg-white rounded-xl p-2 flex items-center justify-center shrink-0">
                      <img
                        src={dealer.logo}
                        alt={dealer.name}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{dealer.name}</h3>
                    <p className="text-sm text-gray-400">{dealer.description}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  {dealer.phone && (
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-brand-400 shrink-0" />
                      <a
                        href={`tel:${dealer.phone.replace(/\s/g, '')}`}
                        className="text-gray-300 hover:text-brand-400 transition-colors"
                      >
                        {dealer.phone}
                      </a>
                    </div>
                  )}

                  {dealer.phone2 && (
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-brand-400 shrink-0" />
                      <a
                        href={`tel:${dealer.phone2.replace(/\s/g, '')}`}
                        className="text-gray-300 hover:text-brand-400 transition-colors"
                      >
                        {dealer.phone2}
                      </a>
                    </div>
                  )}

                  {dealer.mobile && (
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-brand-400 shrink-0" />
                      <span className="text-gray-300">{dealer.mobile}</span>
                    </div>
                  )}

                  {dealer.email && (
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-brand-400 shrink-0" />
                      <a
                        href={`mailto:${dealer.email}`}
                        className="text-gray-300 hover:text-brand-400 transition-colors"
                      >
                        {dealer.email}
                      </a>
                    </div>
                  )}

                  {dealer.website && (
                    <div className="flex items-center gap-3">
                      <Globe size={16} className="text-brand-400 shrink-0" />
                      <a
                        href={dealer.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-brand-400 transition-colors flex items-center gap-1"
                      >
                        {dealer.website.replace('https://', '').replace('http://', '')}
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-brand-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-400">{dealer.address}</span>
                  </div>

                  {dealer.hours && (
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-brand-400 shrink-0" />
                      <span className="text-sm text-gray-400">{dealer.hours}</span>
                    </div>
                  )}
                </div>

                {dealer.website && (
                  <a
                    href={dealer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Перейти на сайт
                    <ExternalLink size={14} />
                  </a>
                )}
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
            Хотите стать <span className="text-brand-500">дилером?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Мы всегда открыты для сотрудничества с новыми партнёрами. Свяжитесь с нами для обсуждения условий дилерского соглашения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacts/sales"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
            >
              Связаться с нами
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30 text-white font-medium rounded-lg transition-all duration-300"
            >
              Каталог продукции
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
