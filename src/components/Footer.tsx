import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">И</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg">Изоком Пласт</div>
                <div className="text-xs text-gray-400">Теплоизоляция трубопроводов</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 ">
              Производство предизолированных труб, фасонных изделий и комплектующих для тепловых сетей.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Продукция</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products/steel-pipes-ppu" className="hover:text-white transition-colors">Трубы в ППУ изоляции</Link></li>
              <li><Link to="/products/fittings" className="hover:text-white transition-colors">Фасонные изделия</Link></li>
              <li><Link to="/products/odk" className="hover:text-white transition-colors">Системы ОДК</Link></li>
              <li><Link to="/products/accessories" className="hover:text-white transition-colors">Комплектующие</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">О компании</Link></li>
              <li><Link to="/documents" className="hover:text-white transition-colors">Документация</Link></li>
              <li><Link to="/contacts" className="hover:text-white transition-colors">Где купить</Link></li>
              <li><Link to="/request" className="hover:text-white transition-colors">Запросить расчёт</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="shrink-0 mt-0.5 text-brand-500" />
                <div>
                  <a href="tel:+74951234567" className="hover:text-white transition-colors">+7 (495) 123-45-67</a>
                  <div className="text-gray-500 text-xs mt-0.5">Отдел продаж</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="shrink-0 mt-0.5 text-brand-500" />
                <a href="mailto:info@izocomplast.ru" className="hover:text-white transition-colors">info@izocomplast.ru</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-brand-500" />
                <span>г. Москва, ул. Промышленная, д. 12</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2024 Изоком Пласт. Все права защищены.</p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
