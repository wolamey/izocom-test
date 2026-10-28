import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Eye, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  image: string;
  category: string;
  date?: string;
}

const projects: Project[] = [
  {
    id: 'cet-nord-sa',
    title: 'CET-Nord SA',
    image: 'https://izocomplast.ru/images/spsimpleportfolio/cet-nord-sa/cet-nord_3_900x500.jpg',
    category: 'Объекты',
    date: '2018',
  },
  {
    id: 'kiev',
    title: 'Киев',
    image: 'https://izocomplast.ru/images/spsimpleportfolio/kiev/kiev_tv_600x800.png',
    category: 'Объекты',
    date: '2018',
  },
  {
    id: 'gorod',
    title: 'Город',
    image: 'https://izocomplast.ru/images/spsimpleportfolio/gorod/gorod2_600x600.png',
    category: 'Объекты',
    date: '2018',
  },
  {
    id: 'minskij-ledovyj-dvorets',
    title: 'Минский ледовый дворец',
    image: 'https://izocomplast.ru/images/spsimpleportfolio/minskij-ledovyj-dvorets/ledvorec_600x800.jpg',
    category: 'Объекты',
    date: '2018',
  },
  {
    id: 'doma-v-kamennoj-gorke',
    title: 'Дома в "Каменной горке"',
    image: 'https://izocomplast.ru/images/spsimpleportfolio/doma-v-kamennoj-gorke/kamgorka_900x500.jpg',
    category: 'Объекты',
    date: '2018',
  },
  {
    id: 'rup-beltamozhservis',
    title: 'РУП "Белтаможсервис"',
    image: 'https://izocomplast.ru/images/spsimpleportfolio/rup-beltamozhservis/beltamozservis_600x600.jpg',
    category: 'Объекты',
    date: '2018',
  },
  {
    id: 'zhiloj-kompleks-druzhnyj',
    title: 'Жилой комплекс Дружный',
    image: 'https://izocomplast.ru/images/spsimpleportfolio/zhiloj-kompleks-druzhnyj/druzniy_600x600.jpg',
    category: 'Объекты',
    date: '28 июня 2018',
  },
  {
    id: 'ledovyj-dvorets-v-orshe',
    title: 'Ледовый дворец в Орше',
    image: 'https://izocomplast.ru/images/spsimpleportfolio/ledovyj-dvorets-v-orshe/orsha_900x500.jpg',
    category: 'Объекты',
    date: '2018',
  },
  {
    id: 'chizhovka-arena',
    title: 'Чижовка арена',
    image: 'https://izocomplast.ru/images/spsimpleportfolio/chizhovka-arena/chizovka_600x800.jpg',
    category: 'Объекты',
    date: '2018',
  },
];

export default function ProjectsPage() {
  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Наши объекты</span>
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
              <MapPin size={14} />
              Портфолио
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Наши <span className="text-brand-500">объекты</span>
            </h1>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg">
              Реализованные проекты с использованием продукции Изоком Пласт
            </p>
            <p className="text-gray-400 leading-relaxed">
              Более 500 успешно реализованных объектов по всей России и странам СНГ
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-300"
              >
                <div className="aspect-video bg-gray-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-brand-500/20 backdrop-blur-sm border border-brand-500/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Eye size={24} className="text-brand-400" />
                      </div>
                      <div className="flex items-center gap-2 text-white font-medium">
                        Подробнее
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="px-2 py-0.5 bg-brand-500/10 text-brand-400 rounded-full">
                      {project.category}
                    </span>
                    {project.date && <span>{project.date}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-sm text-gray-400">Реализованных объектов</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">60+</div>
              <div className="text-sm text-gray-400">Регионов России</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">18+</div>
              <div className="text-sm text-gray-400">Лет опыта</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-gray-400">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
