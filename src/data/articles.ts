// Реестр статей блога «Всё о трубах».
// Пока данные моковые — при подключении API будут подтягиваться с сервера.

export interface ArticleBlock {
  type: 'paragraph' | 'heading' | 'image' | 'quote';
  text?: string;        // для paragraph/heading/quote
  image?: string;       // для image
  caption?: string;     // для image
  level?: 2 | 3;        // для heading
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  coverImage: string | null;
  views: number;
  date: string;               // ISO
  tags: string[];
  blocks: ArticleBlock[];     // контент статьи
  status: 'published' | 'draft';
}

export const articles: Article[] = [
  {
    id: 102,
    slug: 'termo-mufta-klyuchevoy-faktor',
    title: 'Ключевой фактор долговечности ПИ и ГПИ-трубопроводов: надежность термоусаживаемой муфты',
    shortDescription:
      'Предварительно изолированные трубы (ПИ-трубы) являются основой современных тепловых сетей, обеспечивая эффективную транспортировку теплоносителя с минимальными потерями. Однако, как показывает мировая практика...',
    coverImage: 'https://izocomplast.ru/images/vse-o-trubah/termo-i-holodnaya-usadka-muft.png',
    views: 2273,
    date: '2024-11-12',
    tags: ['Муфты', 'Надёжность', 'Монтаж'],
    status: 'published',
    blocks: [
      { type: 'paragraph', text: 'Предварительно изолированные трубы (ПИ-трубы) являются основой современных тепловых сетей, обеспечивая эффективную транспортировку теплоносителя с минимальными потерями.' },
      { type: 'heading', level: 2, text: 'Почему муфта — ключевой элемент' },
      { type: 'paragraph', text: 'Именно стыковое соединение — самое уязвимое место любого трубопровода. Качественная термоусаживаемая муфта обеспечивает герметичность, защиту от коррозии и долговечность всей системы.' },
      { type: 'quote', text: 'Надёжность трубопровода определяется надёжностью его самого слабого звена — стыка.' },
      { type: 'paragraph', text: 'При монтаже важно соблюдать температурный режим усадки, следить за равномерностью прогрева и не допускать образования воздушных полостей под муфтой.' },
    ],
  },
  {
    id: 88,
    slug: 'armirovannye-truby-pex-a',
    title: 'Преимущества армированных труб PEX-a для высокотемпературных сетей (до 115°С и 1,6 МПа)',
    shortDescription:
      'Почему обычные полимерные трубы не справляются с высокими температурами? Традиционные неармированные трубы из сшитого полиэтилена (PEX) или полиэтилена PE-RT имеют...',
    coverImage: 'https://izocomplast.ru/images/vse-o-trubah/3aa95333-7606-428d-ae31-cdaf793a81f7.jpg',
    views: 1991,
    date: '2024-10-03',
    tags: ['PEX-a', 'Армирование', 'Технологии'],
    status: 'published',
    blocks: [
      { type: 'paragraph', text: 'Традиционные неармированные трубы из сшитого полиэтилена (PEX) имеют ограничения по рабочей температуре и давлению. Армирование позволяет расширить этот диапазон.' },
      { type: 'heading', level: 2, text: 'Что даёт армирование' },
      { type: 'paragraph', text: 'Слой армирования (стекловолокно или алюминий) снижает линейное расширение, повышает стойкость к внутреннему давлению и продлевает срок службы.' },
    ],
  },
  {
    id: 89,
    slug: 'nepreryvnoe-proizvodstvo-gpi',
    title: 'Технология непрерывного производства ГПИ-труб: в чем секрет качества?',
    shortDescription:
      'Два принципиально разных подхода к производству. Качество и долговечность предварительно изолированных труб закладываются на этапе производства. Существует два принципиально разных подхода...',
    coverImage: null,
    views: 1623,
    date: '2024-09-18',
    tags: ['Производство', 'ГПИ', 'Технологии'],
    status: 'published',
    blocks: [
      { type: 'paragraph', text: 'Качество и долговечность предварительно изолированных труб закладываются на этапе производства. Существует два принципиально разных подхода: периодический и непрерывный.' },
    ],
  },
  {
    id: 103,
    slug: 'soedineniya-polimernyh-trub',
    title: 'Надёжные соединения полимерных труб для систем отопления и ГВС: какой способ выбрать?',
    shortDescription:
      'При монтаже или реконструкции систем отопления и горячего водоснабжения (ГВС) вопрос надёжности соединений труб выходит на первый план. От правильного выбора...',
    coverImage: 'https://izocomplast.ru/images/sborka_fitinga_1.jpg',
    views: 2770,
    date: '2024-08-30',
    tags: ['Соединения', 'ГВС', 'Монтаж'],
    status: 'published',
    blocks: [
      { type: 'paragraph', text: 'При монтаже или реконструкции систем отопления и ГВС вопрос надёжности соединений труб выходит на первый план.' },
      { type: 'heading', level: 2, text: 'Основные способы соединения' },
      { type: 'paragraph', text: 'Сварка, пресс-фитинги, компрессионные фитинги — у каждого способа есть свои преимущества и ограничения.' },
    ],
  },
  {
    id: 104,
    slug: 'gpi-sovremennoe-reshenie',
    title: 'Гибкие предварительно изолированные трубы (ГПИ): современное решение для энергоэффективных тепловых сетей',
    shortDescription:
      'В 2002 году в Беларуси было принято решение, согласно которому строительство новых теплосетей и реконструкция существующих должны производиться с использованием предварительно...',
    coverImage: 'https://izocomplast.ru/images/40079713-889f-42a3-8b51-9ef836ebb331.jpg',
    views: 3447,
    date: '2024-07-15',
    tags: ['ГПИ', 'Энергоэффективность', 'Тепловые сети'],
    status: 'published',
    blocks: [
      { type: 'paragraph', text: 'В 2002 году в Беларуси было принято решение, согласно которому строительство новых теплосетей и реконструкция существующих должны производиться с использованием предварительно изолированных труб.' },
    ],
  },
  {
    id: 101,
    slug: 'teploizolyaciya-otopitelnyh-trub',
    title: 'Теплоизоляция отопительных трубопроводов',
    shortDescription:
      'Теплоизоляция отопительных трубопроводов – это мероприятие по уменьшению потерь тепла в отопительных системах, которые просто неизбежны в холодное время года. Эффективная...',
    coverImage: 'https://izocomplast.ru/images/vse-o-trubah/1-2.jpg',
    views: 1325,
    date: '2024-06-10',
    tags: ['Теплоизоляция', 'Отопление'],
    status: 'published',
    blocks: [
      { type: 'paragraph', text: 'Теплоизоляция отопительных трубопроводов — мероприятие по уменьшению потерь тепла в отопительных системах.' },
    ],
  },
  {
    id: 99,
    slug: 'termousazhivaemaya-mufta-sposob-soedineniya',
    title: 'Термоусажеваемая муфта - надежный способ соединения труб',
    shortDescription:
      'Герметичность, надежность и прочность соединений пи-трубопроводов и теплосетей обеспечивается с помощью муфт. Термоусаживаемая муфта – современная разновидность муфт, широко применяемая тогда...',
    coverImage: 'https://izocomplast.ru/images/vse-o-trubah/ob23.png',
    views: 2490,
    date: '2024-05-22',
    tags: ['Муфты', 'Соединения', 'Монтаж'],
    status: 'published',
    blocks: [
      { type: 'paragraph', text: 'Герметичность, надёжность и прочность соединений ПИ-трубопроводов и теплосетей обеспечивается с помощью муфт.' },
    ],
  },
  {
    id: 97,
    slug: 'izolyaciya-stykov-termousazhivaemymi-muftami',
    title: 'Изоляция стыков при помощи термоусаживаемых муфт',
    shortDescription:
      'Один из эффективных способов изоляции стыков при монтаже пи-трубопроводов и теплосетей – использование термоусаживаемых муфт. Утепление труб, изоляция стыков трубопровода нужны для...',
    coverImage: 'https://izocomplast.ru/images/vse-o-trubah/termousagivaemie_mufti_montazh_04_0.jpg',
    views: 2106,
    date: '2024-04-14',
    tags: ['Муфты', 'Изоляция', 'Монтаж'],
    status: 'published',
    blocks: [
      { type: 'paragraph', text: 'Использование термоусаживаемых муфт — эффективный способ изоляции стыков при монтаже ПИ-трубопроводов.' },
    ],
  },
];

// Утилиты
export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);

export const getRelatedArticles = (current: Article, limit = 3) =>
  articles
    .filter((a) => a.id !== current.id && a.status === 'published')
    .filter((a) => a.tags.some((t) => current.tags.includes(t)))
    .slice(0, limit);

// Популярные статьи (для сайдбара)
export const popularArticles = [
  { slug: 'kategorii-truboprovodov', title: 'Категории технологических и магистральных трубопроводов', views: 5615, date: '2015-01-14' },
  { slug: 'truby-pex-osobennosti-montazha', title: 'Трубы из сшитого полиэтилена PEX: особенности монтажа', views: 3745, date: '2015-07-28' },
  { slug: 'gpi-sovremennoe-reshenie', title: 'Гибкие предварительно изолированные трубы (ГПИ): современное решение для энергоэффективных тепловых сетей', views: 3447, date: '2015-07-09' },
];

// Последние новости (для сайдбара)
export const latestNewsForSidebar = [
  { slug: 'minsk-ulan-bator', title: 'Минск — Улан-Батор: «Изоком Пласт» укрепляет деловые связи с Монголией', image: 'https://izocomplast.ru/images/news/2026/10/27102026.jpg' },
  { slug: 'obuchenie-energotehprom-2', title: 'Качественный монтаж начинается с обучения: день с «ЭНЕРГОТЕХПРОМ-2»', image: 'https://izocomplast.ru/images/news/2026/06/16/IMG_20260616_140230.jpg' },
  { slug: 'teploseti-novogo-pokoleniya', title: 'Теплосети нового поколения: ГК «Изоком» представила инновационные решения на Форуме «Эффективная РСО»', image: 'https://izocom.by/images/news/2026/03/25/photo_2026-04-01_15-04-24.jpg' },
  { slug: 'obuchenie-gpi', title: 'Обучение по монтажу ГПИ-труб', image: 'https://izocomplast.ru/images/news/2026/022026/45598034-1997-4e96-b7f8-75d7b6d08d0f.jpg' },
  { slug: 'innovacionnaya-tehnologiya', title: 'ООО «Изоком Пласт»: инновационная технология для энергоэффективных тепловых сетей', image: 'https://io.sb.by/storage01/iblock/7ac/7acc9c2b0eb5e9e5b85052b866122097/7ea47a27916602c50b9c4ecaf2d0fad1.jpg' },
];

// Теги (для сайдбара)
export const sidebarTags = [
  { name: 'Эффективность', count: 16 },
  { name: 'Энергоэффективные решения', count: 11 },
  { name: 'Опыт применения', count: 9 },
  { name: 'Развитие', count: 9 },
  { name: 'Знак качества', count: 8 },
  { name: 'О компании', count: 8 },
  { name: 'Продукт года', count: 7 },
];