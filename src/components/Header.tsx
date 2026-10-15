import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Search, FileText } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Продукция', path: '/products' },
    { name: 'Проектировщикам', path: '/documents' },
    { name: 'О компании', path: '/about' },
    { name: 'Где купить', path: '/contacts' },
    { name: 'Контакты', path: '/contacts' },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 text-sm text-gray-500">
          <span>г. Москва, ул. Промышленная, д. 12</span>
          <div className="hidden sm:flex items-center gap-4">
            <a href="mailto:info@izocomplast.ru" className="hover:text-brand-600 transition-colors">info@izocomplast.ru</a>
            <span>•</span>
            <span>Пн–Пт: 9:00–18:00</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">И</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900 text-lg leading-tight">Изоком Пласт</div>
              <div className="text-xs text-gray-500">Теплоизоляция трубопроводов</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.path + item.name}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-gray-700 hover:text-brand-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg text-gray-500 hover:text-brand-600 hover:bg-gray-50 transition-colors"
              aria-label="Поиск"
            >
              <Search size={20} />
            </button>

            <a
              href="tel:+74951234567"
              className="hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
            >
              <Phone size={16} />
              <span>+7 (495) 123-45-67</span>
            </a>

            <Link
              to="/request"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors shadow-sm"
            >
              <FileText size={16} />
              <span>Запросить расчёт</span>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-brand-600 hover:bg-gray-50 transition-colors"
              aria-label="Меню"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-4">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск по продукции, документам..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            {navItems.map(item => (
              <Link
                key={item.path + item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-gray-700 hover:text-brand-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-3">
              <a
                href="tel:+74951234567"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700"
              >
                <Phone size={16} />
                +7 (495) 123-45-67
              </a>
              <Link
                to="/request"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-brand-600 text-white text-sm font-medium rounded-lg"
              >
                <FileText size={16} />
                Запросить расчёт
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
