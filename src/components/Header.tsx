import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Search, FileText, ChevronDown, Building2, Users, Wrench, FileText as DocIcon, MapPin, Newspaper } from 'lucide-react';

interface NavItem {
  name: string;
  path?: string;
  dropdown?: { name: string; path: string; icon: React.ReactNode; desc?: string }[];
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();

  const navItems: NavItem[] = [
    { name: 'Главная', path: '/' },
    {
      name: 'Компания',
      dropdown: [
        { name: 'О компании', path: '/about', icon: <Building2 size={18} />, desc: 'История и ценности' },
        { name: 'Энергоэффективность', path: '/energy', icon: <Wrench size={18} />, desc: 'Экономия ресурсов' },
        { name: 'Всё о трубах', path: '/about-pipes', icon: <Wrench size={18} />, desc: 'Технологии производства' },
        { name: 'Нормативные документы', path: '/standards', icon: <DocIcon size={18} />, desc: 'ГОСТы и стандарты' },
        { name: 'Наши объекты', path: '/projects', icon: <MapPin size={18} />, desc: 'Реализованные проекты' },
        { name: 'Новости', path: '/news', icon: <Newspaper size={18} />, desc: 'Последние события' },
      ],
    },
    { name: 'Каталог', path: '/products' },
    {
      name: 'Контакты',
      dropdown: [
        { name: 'Отдел продаж', path: '/contacts/sales', icon: <Phone size={18} />, desc: '+7 (495) 123-45-67' },
        { name: 'Отдел снабжения', path: '/contacts/supply', icon: <Users size={18} />, desc: 'Закупки и поставки' },
        { name: 'Наши дилеры', path: '/contacts/dealers', icon: <MapPin size={18} />, desc: 'География представителей' },
        { name: 'Бухгалтерия', path: '/contacts/accounting', icon: <DocIcon size={18} />, desc: 'Документооборот' },
      ],
    },
    { name: 'Документы', path: '/documents' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isParentActive = (item: NavItem) => {
    if (item.path) return isActive(item.path);
    if (item.dropdown) return item.dropdown.some(d => isActive(d.path));
    return false;
  };

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setSearchOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top bar — оставляем как есть */}
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

      {/* Main header — ступеньки и анимации */}
      <div className="relative border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-white font-bold text-lg relative z-10 transition-transform group-hover:scale-110">И</span>
                <div className="absolute inset-0 bg-brand-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-gray-900 text-lg leading-tight">Изоком Пласт</div>
                <div className="text-xs text-gray-500">Теплоизоляция трубопроводов</div>
              </div>
            </Link>

            {/* Desktop nav — ступеньки */}
            <nav className="hidden lg:flex items-center">
              {navItems.map((item, i) => {
                const hasDropdown = !!item.dropdown;
                const isOpen = activeDropdown === item.name;
                const active = isParentActive(item);

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => hasDropdown && handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.path ? (
                      <Link
                        to={item.path}
                        className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                          active ? 'text-brand-600' : 'text-gray-700 hover:text-brand-600'
                        }`}
                        style={{ marginLeft: i === 0 ? 0 : `${i * 2}px` }}
                      >
                        {item.name}
                        {active && (
                          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-600 rounded-full" />
                        )}
                      </Link>
                    ) : (
                      <button
                        className={`relative px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                          active || isOpen ? 'text-brand-600' : 'text-gray-700 hover:text-brand-600'
                        }`}
                        style={{ marginLeft: `${i * 2}px` }}
                      >
                        {item.name}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        {(active || isOpen) && (
                          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-600 rounded-full" />
                        )}
                      </button>
                    )}

                    {/* Dropdown */}
                    {hasDropdown && (
                      <div
                        className={`absolute top-full left-0 pt-2 transition-all duration-300 z-50 ${
                          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[280px] overflow-hidden">
                          <div className="absolute top-0 left-8 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45 -translate-y-2" />
                          {item.dropdown!.map((sub, j) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group/item"
                              style={{ animationDelay: `${j * 50}ms` }}
                            >
                              <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 shrink-0 group-hover/item:bg-brand-100 transition-colors">
                                {sub.icon}
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-medium text-gray-900 group-hover/item:text-brand-600 transition-colors">{sub.name}</div>
                                {sub.desc && <div className="text-xs text-gray-500 mt-0.5">{sub.desc}</div>}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search button с анимацией */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="relative p-2.5 rounded-full text-gray-500 hover:text-brand-600 hover:bg-brand-50 transition-all group"
                aria-label="Поиск"
              >
                <Search
                  size={20}
                  className={`transition-all duration-300 ${searchOpen ? 'scale-0 rotate-180' : 'scale-100 rotate-0 group-hover:scale-110'}`}
                />
                {searchOpen && (
                  <X size={20} className={`absolute inset-0 m-auto transition-all duration-300 ${searchOpen ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'}`} />
                )}
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
        </div>

        {/* Search overlay — красивая анимация */}
        <div
          className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 overflow-hidden transition-all duration-500 z-40 ${
            searchOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center">
                <Search
                  size={24}
                  className={`text-brand-600 transition-all duration-500 ${searchOpen ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}
                />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Поиск по продукции, документам, новостям..."
                className="w-full pl-14 pr-4 py-4 bg-transparent text-lg text-gray-900 placeholder-gray-400 focus:outline-none border-b-2 border-gray-200 focus:border-brand-600 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-brand-600 transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
            {/* Quick suggestions */}
            <div className={`mt-6 flex flex-wrap gap-2 transition-all duration-500 delay-200 ${searchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-sm text-gray-500 mr-2">Популярные:</span>
              {['Трубы ППУ', 'Фасонные изделия', 'ГОСТ 30732', 'Сертификаты', 'BIM-библиотека'].map(tag => (
                <button
                  key={tag}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-brand-50 hover:text-brand-600 text-sm text-gray-700 rounded-full transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
          {navItems.map(item => (
            <div key={item.name}>
              {item.path ? (
                <Link
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path) ? 'text-brand-600 bg-brand-50' : 'text-gray-700 hover:text-brand-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.name}</div>
                  {item.dropdown?.map(sub => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className="flex items-center gap-3 px-4 py-2.5 ml-2 rounded-lg text-sm text-gray-700 hover:text-brand-600 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-brand-600">{sub.icon}</span>
                      {sub.name}
                    </Link>
                  ))}
                </>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-gray-100 mt-3">
            <a href="tel:+74951234567" className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700">
              <Phone size={16} />
              +7 (495) 123-45-67
            </a>
            <Link to="/request" className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-brand-600 text-white text-sm font-medium rounded-lg">
              <FileText size={16} />
              Запросить расчёт
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
