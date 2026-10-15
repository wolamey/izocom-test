export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  description: string;
  shortDescription: string;
  features: string[];
  specs: { label: string; value: string }[];
  sizes: { dn: string; isolation: string; wall: string; weight: string }[];
  documents: string[];
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: 'steel-pipes-ppu',
    name: 'Стальные трубы в ППУ изоляции',
    description: 'Предизолированные стальные трубы с пенополиуретановой изоляцией для тепловых сетей. Изготавливаются по ГОСТ 30732-2006.',
    icon: 'pipe',
    products: [
      {
        id: 'pipe-1',
        name: 'Труба стальная в ППУ-ПЭ изоляции',
        category: 'Стальные трубы в ППУ изоляции',
        categoryId: 'steel-pipes-ppu',
        description: 'Стальная труба с теплоизоляционным слоем из пенополиуретана и защитной оболочкой из полиэтилена низкой плотности. Применяется для бесканальной прокладки тепловых сетей.',
        shortDescription: 'Бесканальная прокладка тепловых сетей',
        features: ['Срок службы до 30 лет', 'Снижение теплопотерь на 40%', 'Бесканальная прокладка', 'Оперативное обнаружение повреждений (ОДК)'],
        specs: [
          { label: 'Диаметр трубы', value: '57–1020 мм' },
          { label: 'Толщина изоляции', value: '30–100 мм' },
          { label: 'Рабочее давление', value: 'до 1,6 МПа' },
          { label: 'Температура теплоносителя', value: 'до 140°C' },
          { label: 'Срок эксплуатации', value: 'не менее 30 лет' },
          { label: 'Стандарт', value: 'ГОСТ 30732-2006' },
        ],
        sizes: [
          { dn: '57', isolation: '30', wall: '3.5', weight: '6.8' },
          { dn: '76', isolation: '40', wall: '3.5', weight: '9.2' },
          { dn: '89', isolation: '40', wall: '3.5', weight: '10.5' },
          { dn: '108', isolation: '40', wall: '4.0', weight: '13.8' },
          { dn: '133', isolation: '40', wall: '4.0', weight: '16.2' },
          { dn: '159', isolation: '40', wall: '4.5', weight: '20.1' },
          { dn: '219', isolation: '50', wall: '6.0', weight: '35.4' },
          { dn: '273', isolation: '50', wall: '7.0', weight: '48.2' },
          { dn: '325', isolation: '50', wall: '8.0', weight: '62.5' },
          { dn: '530', isolation: '50', wall: '8.0', weight: '98.3' },
        ],
        documents: ['gost-30732', 'certificate-ppu', 'installation-guide'],
        image: 'pipe-pe',
      },
      {
        id: 'pipe-2',
        name: 'Труба стальная в ППУ-ОЦ изоляции',
        category: 'Стальные трубы в ППУ изоляции',
        categoryId: 'steel-pipes-ppu',
        description: 'Стальная труба с теплоизоляционным слоем из пенополиуретана и защитной оболочкой из оцинкованной стали. Применяется для надземной и канальной прокладки.',
        shortDescription: 'Надземная и канальная прокладка',
        features: ['Защита от УФ-излучения', 'Механическая прочность оболочки', 'Надземная прокладка', 'Система ОДК'],
        specs: [
          { label: 'Диаметр трубы', value: '57–1020 мм' },
          { label: 'Толщина изоляции', value: '30–100 мм' },
          { label: 'Рабочее давление', value: 'до 1,6 МПа' },
          { label: 'Температура теплоносителя', value: 'до 140°C' },
          { label: 'Срок эксплуатации', value: 'не менее 30 лет' },
          { label: 'Стандарт', value: 'ГОСТ 30732-2006' },
        ],
        sizes: [
          { dn: '57', isolation: '30', wall: '3.5', weight: '7.2' },
          { dn: '76', isolation: '40', wall: '3.5', weight: '10.1' },
          { dn: '89', isolation: '40', wall: '3.5', weight: '11.8' },
          { dn: '108', isolation: '40', wall: '4.0', weight: '14.5' },
          { dn: '159', isolation: '40', wall: '4.5', weight: '22.3' },
          { dn: '219', isolation: '50', wall: '6.0', weight: '38.1' },
          { dn: '325', isolation: '50', wall: '8.0', weight: '67.8' },
          { dn: '530', isolation: '50', wall: '8.0', weight: '105.2' },
        ],
        documents: ['gost-30732', 'certificate-ppu-oz'],
        image: 'pipe-oz',
      },
    ],
  },
  {
    id: 'fittings',
    name: 'Фасонные изделия',
    description: 'Отводы, тройники, компенсаторы, неподвижные опоры и другие фасонные изделия в ППУ изоляции.',
    icon: 'fitting',
    products: [
      {
        id: 'fitting-1',
        name: 'Отвод в ППУ изоляции',
        category: 'Фасонные изделия',
        categoryId: 'fittings',
        description: 'Гнутый отвод из стальной трубы с ППУ изоляцией. Угол отвода от 30° до 90°. Используется для изменения направления трубопровода.',
        shortDescription: 'Изменение направления трубопровода',
        features: ['Углы от 30° до 90°', 'Изоляция по ГОСТ 30732', 'Заводское изготовление', 'Полная герметичность'],
        specs: [
          { label: 'Угол отвода', value: '30°, 45°, 60°, 90°' },
          { label: 'Диаметр', value: '57–1020 мм' },
          { label: 'Радиус изгиба', value: '1.0–2.5 DN' },
          { label: 'Толщина изоляции', value: '30–100 мм' },
          { label: 'Стандарт', value: 'ГОСТ 30732-2006' },
        ],
        sizes: [
          { dn: '57', isolation: '40', wall: '3.5', weight: '5.2' },
          { dn: '89', isolation: '40', wall: '3.5', weight: '8.4' },
          { dn: '108', isolation: '40', wall: '4.0', weight: '11.2' },
          { dn: '159', isolation: '40', wall: '4.5', weight: '18.5' },
          { dn: '219', isolation: '50', wall: '6.0', weight: '32.1' },
          { dn: '325', isolation: '50', wall: '8.0', weight: '58.7' },
        ],
        documents: ['gost-30732', 'fittings-catalog'],
        image: 'fitting-elbow',
      },
      {
        id: 'fitting-2',
        name: 'Тройник в ППУ изоляции',
        category: 'Фасонные изделия',
        categoryId: 'fittings',
        description: 'Ответвление от основной магистрали с ППУ изоляцией. Производится с выводом под отвод или прямой.',
        shortDescription: 'Ответвление от магистрали',
        features: ['Равнопроходные и переходные', 'Заводская изоляция', 'Система ОДК', 'Все диаметры'],
        specs: [
          { label: 'Тип', value: 'Равнопроходной, переходной' },
          { label: 'Диаметр магистрали', value: '57–1020 мм' },
          { label: 'Диаметр ответвления', value: '32–530 мм' },
          { label: 'Толщина изоляции', value: '30–100 мм' },
          { label: 'Стандарт', value: 'ГОСТ 30732-2006' },
        ],
        sizes: [
          { dn: '89/57', isolation: '40', wall: '3.5', weight: '9.8' },
          { dn: '108/57', isolation: '40', wall: '4.0', weight: '12.5' },
          { dn: '159/89', isolation: '40', wall: '4.5', weight: '21.3' },
          { dn: '219/108', isolation: '50', wall: '6.0', weight: '38.7' },
          { dn: '325/159', isolation: '50', wall: '8.0', weight: '65.2' },
        ],
        documents: ['gost-30732', 'fittings-catalog'],
        image: 'fitting-tee',
      },
    ],
  },
  {
    id: 'odk',
    name: 'Системы ОДК',
    description: 'Системы оперативно-дистанционного контроля для мониторинга состояния изоляции трубопроводов.',
    icon: 'odk',
    products: [
      {
        id: 'odk-1',
        name: 'Система ОДК «Изоком-К»',
        category: 'Системы ОДК',
        categoryId: 'odk',
        description: 'Система оперативно-дистанционного контроля для обнаружения повреждений изоляции и определения их местоположения на трубопроводах в ППУ изоляции.',
        shortDescription: 'Мониторинг состояния изоляции',
        features: ['Опревление места повреждения', 'Непрерывный мониторинг', 'Совместимость с ГОСТ', 'Простой монтаж'],
        specs: [
          { label: 'Длина контролируемого участка', value: 'до 20 км' },
          { label: 'Точность определения', value: '±1 м' },
          { label: 'Количество датчиков', value: 'до 256 на линию' },
          { label: 'Питание', value: '12–24 В' },
          { label: 'Протокол связи', value: 'RS-485' },
        ],
        sizes: [],
        documents: ['odk-manual', 'odk-certificate'],
        image: 'odk-system',
      },
    ],
  },
  {
    id: 'accessories',
    name: 'Комплектующие',
    description: 'Термоусаживаемые муфты, ленты, компоненты для заделки стыков и ремонта изоляции.',
    icon: 'accessory',
    products: [
      {
        id: 'acc-1',
        name: 'Термоусаживаемая муфта',
        category: 'Комплектующие',
        categoryId: 'accessories',
        description: 'Термоусаживаемая муфта для заделки стыковых соединений труб в ППУ-ПЭ изоляции. Обеспечивает герметичность и восстановление защитной оболочки.',
        shortDescription: 'Заделка стыковых соединений',
        features: ['Полная герметичность', 'Простой монтаж', 'Устойчивость к УФ', 'Все диаметры'],
        specs: [
          { label: 'Диаметр', value: '90–1600 мм' },
          { label: 'Материал', value: 'Полиэтилен низкой плотности' },
          { label: 'Температура усадки', value: '120–150°C' },
          { label: 'Толщина стенки', value: '3–5 мм' },
        ],
        sizes: [
          { dn: '90–110', isolation: '—', wall: '3.0', weight: '0.3' },
          { dn: '125–140', isolation: '—', wall: '3.0', weight: '0.4' },
          { dn: '160–180', isolation: '—', wall: '3.5', weight: '0.6' },
          { dn: '200–225', isolation: '—', wall: '4.0', weight: '0.9' },
          { dn: '250–315', isolation: '—', wall: '4.0', weight: '1.4' },
          { dn: '355–400', isolation: '—', wall: '4.5', weight: '2.1' },
          { dn: '450–500', isolation: '—', wall: '5.0', weight: '3.2' },
          { dn: '560–630', isolation: '—', wall: '5.0', weight: '4.5' },
        ],
        documents: ['mufta-instruction'],
        image: 'mufta',
      },
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  for (const cat of categories) {
    const product = cat.products.find(p => p.id === id);
    if (product) return product;
  }
  return undefined;
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(c => c.id === id);
};
