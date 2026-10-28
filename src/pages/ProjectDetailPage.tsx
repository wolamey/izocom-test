import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, MapPin, Calendar, ArrowLeft } from 'lucide-react';

interface ProjectDetail {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  intro: string;
  fullText: string;
}

const projectsData: Record<string, ProjectDetail> = {
  'zhiloj-kompleks-druzhnyj': {
    id: 'zhiloj-kompleks-druzhnyj',
    title: 'Жилой комплекс Дружный',
    image: 'https://izocomplast.ru/images/obekti/druzniy.jpg',
    category: 'Объекты',
    date: '28 июня 2018',
    intro: 'ООО «Изоком» поставил более 1000 метров труб диаметром от 108 до 426 для жилого комплекса «Дружный», расположенного в столичном микрорайоне Малиновка – одном из самых экологически чистых и обустроенных районов Минска. Трасса объекта была полностью укомплектована "под ключ" вместе с необходимыми фасонными изделиями, системой ОДК и КЗС.',
    fullText: 'Жилой комплекс «Дружный» расположен по проспекту Дзержинского напротив гипермаркета «ProStore». Этот современный жилой миниполис имеет развитую инфраструктуру. Рядом – строительный гипермаркет «ОМА», а всего в 300 метрах от дома – станция метро «Малиновка». Во дворе жилого комплекса - современная школа с бассейном, в шаговой доступности расположены несколько детских садов. Рядом с домом находится Минская кольцевая автомобильная дорога, крупная транспортная развязка и сразу две транспортные магистрали столицы, которые позволяют оперативно добраться как до центра, так и до самых удаленных районов столицы. На первом этаже комплекса открыты аптека, банк, предприятия торговли, сервисного и бытового обслуживания. Во дворе дома также расположены детская площадка и зеленая зона.\n\nКвартиры в жилом комплексе «Дружный» имеют современную планировку: высокие потолки, французские балконы, эркеры. Также жильцам комплекса доступны индивидуальные машиноместа.',
  },
  'cet-nord-sa': {
    id: 'cet-nord-sa',
    title: 'CET-Nord SA',
    image: 'https://izocomplast.ru/images/obekti/cet-nord_3.jpg',
    category: 'Объекты',
    date: '2018',
    intro: 'Промышленный объект с использованием продукции Изоком Пласт.',
    fullText: 'Подробная информация об объекте будет доступна позже.',
  },
  'kiev': {
    id: 'kiev',
    title: 'Киев',
    image: 'https://izocomplast.ru/images/spsimpleportfolio/kiev/kiev_tv_600x800.png',
    category: 'Объекты',
    date: '2018',
    intro: 'Телевизионный объект в Киеве.',
    fullText: 'Подробная информация об объекте будет доступна позже.',
  },
  'gorod': {
    id: 'gorod',
    title: 'Город',
    image: 'https://izocomplast.ru/images/okompani/gorod2.png',
    category: 'Объекты',
    date: '2018',
    intro: 'Городской инфраструктурный проект.',
    fullText: 'Подробная информация об объекте будет доступна позже.',
  },
  'minskij-ledovyj-dvorets': {
    id: 'minskij-ledovyj-dvorets',
    title: 'Минский ледовый дворец',
    image: 'https://izocomplast.ru/images/obekti/ledvorec.jpg',
    category: 'Объекты',
    date: '2018',
    intro: 'Спортивный объект в Минске.',
    fullText: 'Подробная информация об объекте будет доступна позже.',
  },
  'doma-v-kamennoj-gorke': {
    id: 'doma-v-kamennoj-gorke',
    title: 'Дома в "Каменной горке"',
    image: 'https://izocomplast.ru/images/obekti/kamgorka.jpg',
    category: 'Объекты',
    date: '2018',
    intro: 'Жилой комплекс в районе Каменная горка.',
    fullText: 'Подробная информация об объекте будет доступна позже.',
  },
  'rup-beltamozhservis': {
    id: 'rup-beltamozhservis',
    title: 'РУП "Белтаможсервис"',
    image: 'https://izocomplast.ru/images/obekti/beltamozservis.jpg',
    category: 'Объекты',
    date: '2018',
    intro: 'Государственное учреждение.',
    fullText: 'Подробная информация об объекте будет доступна позже.',
  },
  'ledovyj-dvorets-v-orshe': {
    id: 'ledovyj-dvorets-v-orshe',
    title: 'Ледовый дворец в Орше',
    image: 'https://izocomplast.ru/images/obekti/orsha.jpg',
    category: 'Объекты',
    date: '2018',
    intro: 'Спортивный объект в Орше.',
    fullText: 'Подробная информация об объекте будет доступна позже.',
  },
  'chizhovka-arena': {
    id: 'chizhovka-arena',
    title: 'Чижовка арена',
    image: 'https://izocomplast.ru/images/obekti/chizovka.jpg',
    category: 'Объекты',
    date: '2018',
    intro: 'Спортивный комплекс в Минске.',
    fullText: 'Подробная информация об объекте будет доступна позже.',
  },
};

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Объект не найден</h1>
          <p className="text-gray-400 mb-8">Запрашиваемый объект не существует</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
          >
            <ArrowLeft size={18} />
            Вернуться к объектам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Главная</Link>
            <ChevronRight size={14} />
            <Link to="/projects" className="hover:text-brand-400 transition-colors">Наши объекты</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Project Image */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[21/9] bg-gray-800 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="relative bg-gray-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium rounded-full mb-4">
                <MapPin size={14} />
                {project.category}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>
              
              <div className="prose prose-invert max-w-none">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 mb-6">
                  <p className="text-gray-300 leading-relaxed text-lg mb-4">
                    {project.intro}
                  </p>
                  {project.fullText && (
                    <div className="text-gray-400 leading-relaxed whitespace-pre-line">
                      {project.fullText}
                    </div>
                  )}
                </div>
              </div>
              
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30 text-white font-medium rounded-lg transition-all duration-300"
              >
                <ArrowLeft size={18} />
                Назад к объектам
              </button>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Информация об объекте</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <Calendar size={18} className="text-brand-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Дата</div>
                      <div className="text-white font-medium">{project.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Категория</div>
                      <div className="text-white font-medium">{project.category}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Другие объекты
                  </h4>
                  <div className="space-y-3">
                    {Object.values(projectsData)
                      .filter(p => p.id !== project.id)
                      .slice(0, 3)
                      .map((p) => (
                        <Link
                          key={p.id}
                          to={`/projects/${p.id}`}
                          className="group flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-500/30 rounded-xl transition-all duration-300"
                        >
                          <div className="w-16 h-16 bg-gray-800 rounded-lg overflow-hidden shrink-0">
                            <img
                              src={p.image}
                              alt={p.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-gray-300 group-hover:text-brand-400 transition-colors line-clamp-2">
                              {p.title}
                            </div>
                          </div>
                        </Link>
                      ))}
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
