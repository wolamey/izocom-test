import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { LinkButton } from './ui/Button';
import ProductImage from './ProductImage';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: { value: string; label: string }[];
}

const slides: Slide[] = [
  {
    title: 'Предизолированные трубы ППУ',
    subtitle: 'Стальные трубы в пенополиуретановой изоляции',
    description: 'Для бесканальной прокладки тепловых сетей. Снижение теплопотерь до 40%.',
    image: 'pipe-pe',
    stats: [
      { value: '30+', label: 'лет службы' },
      { value: '−40%', label: 'теплопотерь' },
      { value: '1020', label: 'мм макс. Ø' },
    ],
  },
  {
    title: 'Фасонные изделия',
    subtitle: 'Отводы, тройники, компенсаторы',
    description: 'Полный ассортимент в ППУ изоляции заводского изготовления по ГОСТ 30732-2006.',
    image: 'fitting-elbow',
    stats: [
      { value: '30–90°', label: 'углы отводов' },
      { value: '57–1020', label: 'мм диаметры' },
      { value: 'ГОСТ', label: '30732-2006' },
    ],
  },
  {
    title: 'Системы ОДК',
    subtitle: 'Оперативно-дистанционный контроль',
    description: 'Мониторинг состояния изоляции трубопроводов с точностью определения повреждений.',
    image: 'odk-system',
    stats: [
      { value: '20 км', label: 'контроль' },
      { value: '±1 м', label: 'точность' },
      { value: '256', label: 'датчиков' },
    ],
  },
  {
    title: 'Комплектующие',
    subtitle: 'Термоусаживаемые муфты и ленты',
    description: 'Всё для заделки стыков и ремонта изоляции. Простой монтаж и полная герметичность.',
    image: 'mufta',
    stats: [
      { value: '90–1600', label: 'мм диаметры' },
      { value: '100%', label: 'герметичность' },
      { value: 'УФ', label: 'защита' },
    ],
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const slide = slides[currentSlide];

  // Calculate position on semicircle for right side
  const getSlidePosition = (index: number) => {
    const total = slides.length;
    const diff = ((index - currentSlide + total) % total);

    // Semicircle trajectory — adjusted to fit within container
    const angle = (diff / total) * Math.PI;
    const radiusX = 35;
    const radiusY = 30;
    const centerX = 50;
    const centerY = 50;

    const x = centerX + Math.cos(angle - Math.PI / 2) * radiusX;
    const y = centerY - Math.sin(angle - Math.PI / 2) * radiusY;

    const scale = diff === 0 ? 1 : diff === 1 || diff === total - 1 ? 0.7 : 0.5;
    const opacity = diff === 0 ? 1 : diff === 1 || diff === total - 1 ? 0.6 : 0.25;
    const zIndex = diff === 0 ? 30 : diff === 1 || diff === total - 1 ? 20 : 10;

    return { x, y, scale, opacity, zIndex };
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-brand-50" style={{ height: 'calc(100vh - 116px)', minHeight: '600px' }}>
      {/* Subtle background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
          {/* Left side — animated text */}
          <div className="relative z-10">
            <div
              key={currentSlide + '-badge'}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-50 text-brand-700 text-sm font-medium rounded-full mb-5 animate-fade-in-up"
            >
              <Zap size={14} />
              Производство с 2005 года
            </div>

            <h1
              key={currentSlide + '-title'}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4"
            >
              {slide.title.split(' ').map((word, i) => (
                <span
                  key={`${currentSlide}-${i}`}
                  className="inline-block mr-3 animate-slide-in-word"
                  style={{ animationDelay: `${100 + i * 100}ms` }}
                >
                  {i === slide.title.split(' ').length - 1 ? (
                    <span className="text-brand-600 relative">
                      {word}
                      <span className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-600/20 rounded-full animate-scale-in" style={{ animationDelay: `${500 + i * 100}ms` }} />
                    </span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            <p
              key={currentSlide + '-subtitle'}
              className="text-xl text-gray-600 mb-2 animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              {slide.subtitle}
            </p>

            <p
              key={currentSlide + '-desc'}
              className="text-lg text-gray-500 mb-6 leading-relaxed max-w-lg animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              {slide.description}
            </p>

            <div
              key={currentSlide + '-buttons'}
              className="flex flex-col sm:flex-row gap-3 animate-fade-in-up"
              style={{ animationDelay: '500ms' }}
            >
              <LinkButton
                to="/products"
                variant="primary"
                size="lg"
                iconRight={<ArrowRight size={18} />}
              >
                Каталог продукции
              </LinkButton>
              <LinkButton
                to="/request"
                variant="outline"
                size="lg"
              >
                Запросить расчёт
              </LinkButton>
            </div>
          </div>

          {/* Right side — semicircle slider */}
          <div className="hidden lg:block relative h-full max-h-[550px]">
            {/* Semicircle track */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
              <path
                d="M 50 450 Q 50 100 400 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 4"
                className="text-brand-600"
              />
            </svg>

            {slides.map((s, i) => {
              const pos = getSlidePosition(i);
              const isActive = i === currentSlide;
              return (
                <div
                  key={i}
                  className="absolute transition-all duration-1000 ease-out"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: `translate(-50%, -50%) scale(${pos.scale})`,
                    opacity: pos.opacity,
                    zIndex: pos.zIndex,
                  }}
                >
                  <div className={`relative bg-white rounded-2xl p-4 w-64 transition-all duration-500 ${
                    isActive
                      ? 'shadow-2xl shadow-brand-600/20 border-2 border-brand-200'
                      : 'shadow-lg border border-gray-100'
                  }`}>
                    {isActive && (
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-brand-600 rounded-full animate-pulse" />
                    )}
                    <ProductImage type={s.image} className="aspect-[4/3] rounded-xl" />
                    <div className="mt-3 grid grid-cols-3 gap-1.5">
                      {s.stats.map((stat, j) => (
                        <div key={j} className={`text-center p-1.5 rounded-lg transition-colors ${
                          isActive ? 'bg-brand-50' : 'bg-gray-50'
                        }`}>
                          <div className={`text-sm font-bold transition-colors ${isActive ? 'text-brand-600' : 'text-gray-700'}`}>{stat.value}</div>
                          <div className="text-[9px] text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-100">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentSlide(i);
                      setTimeout(() => setIsAnimating(false), 1000);
                    }
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    i === currentSlide
                      ? 'w-8 h-2 bg-brand-600'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
