export interface Dealer {
  id: string;
  name: string;
  description: string;
  phone?: string;
  phone2?: string;
  mobile?: string;
  email?: string;
  website?: string;
  address: string;
  hours?: string;
  logo?: string;
}

export const dealers: Dealer[] = [
  {
    id: 'aprom',
    name: 'АПРОМ',
    description: 'ООО "АПРОМ" - официальный представитель завода на территории РФ',
    phone: '8(473)229-83-00',
    mobile: '8(929)009-21-00',
    email: 'sale@apromvrn.ru',
    website: 'https://apromvrn.ru/',
    address: '394019, Россия, г. Воронеж, ул. Солнечная, д. 7Д, офис 25',
    logo: 'https://izocomplast.ru/images/logos/aprom_logo_red1.png',
  },
  {
    id: 'region-servis',
    name: 'РЕГИОН СЕРВИС',
    description: 'ООО "Регион Сервис" - официальный представитель завода на территории РФ',
    phone: '+7(473) 290-34-26',
    mobile: '+7(930) 400-65-56',
    email: 'office@regionservis-vrn.ru',
    website: 'https://regionservis-vrn.ru/',
    address: 'Россия, 394088, г.Воронеж, ул.Антонова-Овсеенко, д.35В, офис 4',
    logo: 'https://izocomplast.ru/images/logos/regionservis.png',
  },
  {
    id: 'gis',
    name: 'Гибкие инженерные системы',
    description: 'Представительство в Москве - ООО «Гибкие инженерные системы». Официальный представитель завода на территории Российской Федерации',
    phone: '8 (495) 147 44 85',
    mobile: '8 909 960 22 37',
    email: 'info@groupgis.ru',
    website: 'https://groupgis.ru/',
    address: '143082, Московская область, г.о. Одинцовский, д. Раздоры тер. Рублево-Успенское шоссе, км. 1-й, д.1, оф.206',
    logo: 'https://izocomplast.ru/images/logos/gis.png',
  },
  {
    id: 'kompleksnoe-snabzhenie',
    name: 'КОМПЛЕКСНОЕ СНАБЖЕНИЕ',
    description: 'ООО "КОМПЛЕКСНОЕ СНАБЖЕНИЕ" - официальный представитель завода на территории РФ',
    phone: '8-800-550-17-56',
    email: 'sales@intsupply.ru',
    website: 'http://intsupply.ru/',
    address: '197341, город Санкт-Петербург, Коломяжский пр-кт, д. 28 к. 3 литер а, помещ. 19н, кабинет 7',
    logo: 'https://izocomplast.ru/images/logos/logo-ks1.png',
  },
  {
    id: 'dinamika',
    name: 'ДИНАМИКА',
    description: 'Инженерные системы: тепло и вода с комфортом',
    phone: '+7912 241 2346',
    email: 'dinamika.teplo@gmail.com',
    address: '620023 г. Екатеринбург, ул. Зимняя, 22',
    logo: 'https://izocomplast.ru/images/logos/dinamika1.png',
  },
  {
    id: 'varmocom',
    name: 'ВАРМОКОМ',
    description: 'Компания ВАРМОКОМ является официальным представителем производителя гибких предварительно изолированных труб (ГПИ-труб) ООО "Изоком Пласт" в Тверской области и на территории Российской Федерации.',
    phone: '+7 920 689 29 69',
    email: 'warmocom@yandex.ru',
    website: 'https://warmocom.ru/',
    address: 'Российская Федерация, г. Тверь, ул. Ерофеева, д. 7, корп. 2, кв. 21',
    logo: 'https://izocomplast.ru/images/logos/warmocom.jpg',
  },
  {
    id: 'konex',
    name: 'КОНЕКС',
    description: 'ООО "КОНЕКС"',
    email: 'konexspb@gmail.com',
    website: 'http://konex.spb.ru',
    address: '196066, г. Санкт-Петербург, Московский пр-кт, д.212, литера А, помещение 27, офис 6033-1',
    logo: 'https://izocomplast.ru/images/logos/konex-1.png',
  },
  {
    id: 'energosistema',
    name: 'ЭНЕРГОСИСТЕМА',
    description: 'Официальный представитель завода на территории РФ',
    phone: '+7 (994) 1080108',
    phone2: '+7 (423) 2712668',
    email: 'energydv@bk.ru',
    website: 'https://izocomflex.ru/',
    address: '690105 г. Владивосток ул. Полковника Фесюна 20, 211',
    logo: 'https://izocomplast.ru/images/logos/energosistema.jpg',
  },
  {
    id: 'specpotok',
    name: 'Компания СпецПоток',
    description: 'ООО "СпецПоток" - официальный представитель завода на территории РФ',
    phone: '+7 (952) 206-01-61',
    mobile: '+7 (981) 201-01-03',
    email: 'info@specpotok.com',
    website: 'https://specpotok.com/',
    address: 'РФ, 199406, Санкт-Петербург, улица Опочинина, дом 16, литера А, помещение 6-Н, кабинет №30',
    logo: 'https://izocomplast.ru/images/logos/specpotok.png',
  },
  {
    id: 'tvk-plastic',
    name: 'ТВК Пластик',
    description: 'Официальный представитель завода на территории Российской Федерации',
    email: 'tvkplastic@mail.ru',
    website: 'https://tvkplastic.ru/',
    address: '121351, г. Москва, ул. Екатерины Будановой, д. 1',
    hours: 'Пн–Пт: 8:00 – 17:00',
    logo: 'https://tvkplastic.ru/img/logo.png',
  },
];
