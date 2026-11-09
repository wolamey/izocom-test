// Редактор главной страницы сайта.
// Структура повторяет блоки HomePage.tsx: Hero-слайдер, Каталог, Области применения,
// Преимущества, Статистика, О компании, Производство, АПТС, Представительства, Заявка.
// Все поля пустые — наполнение будет приходить из API.
import { useState } from 'react';
import type { ReactNode } from 'react';
import { AdminSectionCard, TextField, TextareaField, ImageField, RepeatableList } from '../../components/admin/fields';

interface SlideForm {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  stats: { value: string; label: string }[];
}

const emptySlide = (): SlideForm => ({
  badge: '',
  title: '',
  subtitle: '',
  description: '',
  image: '',
  primaryButtonText: '',
  primaryButtonLink: '',
  secondaryButtonText: '',
  secondaryButtonLink: '',
  stats: [{ value: '', label: '' }, { value: '', label: '' }, { value: '', label: '' }],
});

interface AreaForm {
  title: string;
  desc: string;
  info: string;
  icon: string;
}

const emptyArea = (): AreaForm => ({ title: '', desc: '', info: '', icon: '' });

interface AccordionForm {
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
  icon: string;
}

const emptyAccordion = (): AccordionForm => ({ title: '', desc: '', stat: '', statLabel: '', icon: '' });

interface StatForm {
  value: string;
  unit: string;
  label: string;
}

const emptyStat = (): StatForm => ({ value: '', unit: '', label: '' });

interface CheckItemForm {
  text: string;
}

const emptyCheckItem = (): CheckItemForm => ({ text: '' });

interface CtaBenefitForm {
  title: string;
  desc: string;
}

const emptyCtaBenefit = (): CtaBenefitForm => ({ title: '', desc: '' });

interface CtaMiniStatForm {
  value: string;
  label: string;
}

const emptyCtaMiniStat = (): CtaMiniStatForm => ({ value: '', label: '' });

function SubBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-gray-900/60 border border-white/10 rounded-xl p-4">
      <p className="text-sm font-semibold text-gray-200 mb-3">{title}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export default function AdminHomePageEditor() {
  // ===== Блок 1. Hero-слайдер =====
  const [slides, setSlides] = useState<SlideForm[]>([emptySlide()]);
  const updateSlide = (i: number, patch: Partial<SlideForm>) =>
    setSlides((prev) => prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)));
  const updateSlideStat = (i: number, j: number, patch: Partial<{ value: string; label: string }>) =>
    setSlides((prev) =>
      prev.map((s, idx) =>
        idx === i
          ? { ...s, stats: s.stats.map((st, sj) => (sj === j ? { ...st, ...patch } : st)) }
          : s
      )
    );

  // ===== Блок 2. Каталог на главной =====
  const [catalogBadge, setCatalogBadge] = useState('');
  const [catalogTitle, setCatalogTitle] = useState('');
  const [catalogSubtitle, setCatalogSubtitle] = useState('');
  const [catalogButtonText, setCatalogButtonText] = useState('');
  const [catalogButtonLink, setCatalogButtonLink] = useState('');

  // ===== Блок 3. Области применения =====
  const [areasTitle, setAreasTitle] = useState('');
  const [areasSubtitle, setAreasSubtitle] = useState('');
  const [areasCaption, setAreasCaption] = useState('');
  const [areas, setAreas] = useState<AreaForm[]>([emptyArea()]);
  const updateArea = (i: number, patch: Partial<AreaForm>) =>
    setAreas((prev) => prev.map((a, idx) => (idx === i ? { ...a, ...patch } : a)));

  // ===== Блок 4. Преимущества (аккордеон) =====
  const [advBadge, setAdvBadge] = useState('');
  const [advTitle, setAdvTitle] = useState('');
  const [advSubtitle, setAdvSubtitle] = useState('');
  const [advItems, setAdvItems] = useState<AccordionForm[]>([emptyAccordion()]);
  const updateAdv = (i: number, patch: Partial<AccordionForm>) =>
    setAdvItems((prev) => prev.map((a, idx) => (idx === i ? { ...a, ...patch } : a)));

  // ===== Блок 5. Статистика =====
  const [statsTitleFirst, setStatsTitleFirst] = useState('');
  const [statsTitleAccent, setStatsTitleAccent] = useState('');
  const [statsSubtitle, setStatsSubtitle] = useState('');
  const [stats, setStats] = useState<StatForm[]>([emptyStat()]);
  const updateStat = (i: number, patch: Partial<StatForm>) =>
    setStats((prev) => prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)));
  const [statsCtaText, setStatsCtaText] = useState('');
  const [statsCtaButtonText, setStatsCtaButtonText] = useState('');
  const [statsCtaButtonLink, setStatsCtaButtonLink] = useState('');

  // ===== Блок 6. О компании =====
  const [aboutBadge, setAboutBadge] = useState('');
  const [aboutTitle, setAboutTitle] = useState('');
  const [aboutText1, setAboutText1] = useState('');
  const [aboutText2, setAboutText2] = useState('');
  const [aboutPrimaryButtonText, setAboutPrimaryButtonText] = useState('');
  const [aboutPrimaryButtonLink, setAboutPrimaryButtonLink] = useState('');
  const [aboutSecondaryButtonText, setAboutSecondaryButtonText] = useState('');
  const [aboutSecondaryButtonLink, setAboutSecondaryButtonLink] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState('');

  // ===== Блок 7. Производство =====
  const [productionTitle, setProductionTitle] = useState('');
  const [productionText, setProductionText] = useState('');
  const [productionList, setProductionList] = useState<CheckItemForm[]>([emptyCheckItem()]);
  const updateProductionItem = (i: number, text: string) =>
    setProductionList((prev) => prev.map((it, idx) => (idx === i ? { text } : it)));
  const [productionLinkText, setProductionLinkText] = useState('');
  const [productionLinkUrl, setProductionLinkUrl] = useState('');
  const [productionTiles, setProductionTiles] = useState<StatForm[]>([
    { value: '', unit: '', label: '' },
    { value: '', unit: '', label: '' },
    { value: '', unit: '', label: '' },
    { value: '', unit: '', label: '' },
  ]);
  const updateProductionTile = (i: number, patch: Partial<StatForm>) =>
    setProductionTiles((prev) => prev.map((t, idx) => (idx === i ? { ...t, ...patch } : t)));

  // ===== Блок 8. АПТС =====
  const [aptsBadge, setAptsBadge] = useState('');
  const [aptsTitle, setAptsTitle] = useState('');
  const [aptsText, setAptsText] = useState('');
  const [aptsLinkText, setAptsLinkText] = useState('');
  const [aptsLinkUrl, setAptsLinkUrl] = useState('');
  const [aptsLogo, setAptsLogo] = useState('');
  const [aptsLogoCaption, setAptsLogoCaption] = useState('');

  // ===== Блок 9. Представительства =====
  const [dealersBadge, setDealersBadge] = useState('');
  const [dealersTitle, setDealersTitle] = useState('');
  const [dealersSubtitle, setDealersSubtitle] = useState('');

  // ===== Блок 10. Заявка (CTA с формой) =====
  const [ctaBadge, setCtaBadge] = useState('');
  const [ctaTitleFirst, setCtaTitleFirst] = useState('');
  const [ctaTitleAccent, setCtaTitleAccent] = useState('');
  const [ctaText, setCtaText] = useState('');
  const [ctaBenefits, setCtaBenefits] = useState<CtaBenefitForm[]>([emptyCtaBenefit()]);
  const updateCtaBenefit = (i: number, patch: Partial<CtaBenefitForm>) =>
    setCtaBenefits((prev) => prev.map((b, idx) => (idx === i ? { ...b, ...patch } : b)));
  const [ctaMiniStats, setCtaMiniStats] = useState<CtaMiniStatForm[]>([emptyCtaMiniStat()]);
  const updateCtaMiniStat = (i: number, patch: Partial<CtaMiniStatForm>) =>
    setCtaMiniStats((prev) => prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)));
  const [formTitle, setFormTitle] = useState('');

  const handleSave = () => {
    // TODO: отправить данные всех блоков на сервер, когда backend будет готов.
    alert('Сохранение будет доступно после подключения API.');
  };

  return (
    <div className="pb-10">
      {/* Шапка редактора */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-brand-400 font-semibold mb-1">Страницы</p>
          <h1 className="text-2xl font-bold text-white">Редактор главной страницы</h1>
          <p className="text-sm text-gray-500 mt-1">
            Блоки соответствуют структуре главной страницы сайта. Изменения вступят в силу после сохранения.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="shrink-0 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white text-sm font-medium rounded-lg px-5 py-2.5 transition-colors shadow-lg shadow-brand-600/20"
        >
          Сохранить изменения
        </button>
      </div>

      <div className="space-y-6">
        {/* ==================== 1. HERO ==================== */}
        <AdminSectionCard
          title="1. Первый экран (Hero-слайдер)"
          subtitle="Верхний баннер с автоматической сменой слайдов"
          badge="Слайдер"
        >
          <RepeatableList addLabel="Добавить слайд" onAdd={() => setSlides([...slides, emptySlide()])}>
            {slides.map((slide, i) => (
              <SubBlock key={i} title={`Слайд ${i + 1}`}>
                <TextField label="Плашка (бейдж)" value={slide.badge} onChange={(v) => updateSlide(i, { badge: v })} />
                <TextField label="Заголовок" value={slide.title} onChange={(v) => updateSlide(i, { title: v })} />
                <TextField label="Подзаголовок" value={slide.subtitle} onChange={(v) => updateSlide(i, { subtitle: v })} />
                <TextareaField label="Описание" value={slide.description} onChange={(v) => updateSlide(i, { description: v })} rows={3} />
                <ImageField label="Изображение слайда" value={slide.image} onChange={(v) => updateSlide(i, { image: v })} />
                <div className="grid sm:grid-cols-2 gap-3">
                  <TextField label="Текст основной кнопки" value={slide.primaryButtonText} onChange={(v) => updateSlide(i, { primaryButtonText: v })} />
                  <TextField label="Ссылка основной кнопки" value={slide.primaryButtonLink} onChange={(v) => updateSlide(i, { primaryButtonLink: v })} />
                  <TextField label="Текст вторичной кнопки" value={slide.secondaryButtonText} onChange={(v) => updateSlide(i, { secondaryButtonText: v })} />
                  <TextField label="Ссылка вторичной кнопки" value={slide.secondaryButtonLink} onChange={(v) => updateSlide(i, { secondaryButtonLink: v })} />
                </div>
                <RepeatableList title="Мини-статистика слайда (3 значения)" addLabel="Добавить значение" onAdd={() => updateSlide(i, { stats: [...slide.stats, { value: '', label: '' }] })}>
                  {slide.stats.map((stat, j) => (
                    <div key={j} className="grid grid-cols-[1fr_2fr_auto] gap-2 items-center">
                      <input
                        value={stat.value}
                        onChange={(e) => updateSlideStat(i, j, { value: e.target.value })}
                        placeholder="Значение"
                        className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                      />
                      <input
                        value={stat.label}
                        onChange={(e) => updateSlideStat(i, j, { label: e.target.value })}
                        placeholder="Подпись"
                        className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                      />
                      <button
                        type="button"
                        onClick={() => updateSlide(i, { stats: slide.stats.filter((_, sj) => sj !== j) })}
                        className="text-gray-500 hover:text-brand-400 text-sm px-1"
                        aria-label="Удалить"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </RepeatableList>
              </SubBlock>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* ==================== 2. КАТАЛОГ ==================== */}
        <AdminSectionCard
          title="2. Каталог на главной («Что производим»)"
          subtitle="Карточки категорий берутся из раздела «Каталог» — здесь редактируются только заголовки блока"
        >
          <TextField label="Плашка (бейдж)" value={catalogBadge} onChange={setCatalogBadge} />
          <TextField label="Заголовок" value={catalogTitle} onChange={setCatalogTitle} />
          <TextareaField label="Подзаголовок" value={catalogSubtitle} onChange={setCatalogSubtitle} rows={2} />
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Текст кнопки «Весь каталог»" value={catalogButtonText} onChange={setCatalogButtonText} />
            <TextField label="Ссылка кнопки" value={catalogButtonLink} onChange={setCatalogButtonLink} />
          </div>
        </AdminSectionCard>

        {/* ==================== 3. ОБЛАСТИ ПРИМЕНЕНИЯ ==================== */}
        <AdminSectionCard
          title="3. Области применения"
          subtitle="Интерактивный список отраслей с визуальной схемой справа"
          badge="Список"
        >
          <TextField label="Заголовок блока" value={areasTitle} onChange={setAreasTitle} />
          <TextareaField label="Подзаголовок" value={areasSubtitle} onChange={setAreasSubtitle} rows={2} />
          <TextField label="Подпись под схемой" value={areasCaption} onChange={setAreasCaption} />
          <RepeatableList title="Отрасли" addLabel="Добавить отрасль" onAdd={() => setAreas([...areas, emptyArea()])}>
            {areas.map((area, i) => (
              <SubBlock key={i} title={`Отрасль ${i + 1}`}>
                <div className="grid sm:grid-cols-2 gap-3">
                  <TextField label="Название" value={area.title} onChange={(v) => updateArea(i, { title: v })} />
                  <TextField label="Иконка (название)" value={area.icon} onChange={(v) => updateArea(i, { icon: v })} hint="например: heat-network, industry, oil" />
                </div>
                <TextareaField label="Краткое описание" value={area.desc} onChange={(v) => updateArea(i, { desc: v })} rows={2} />
                <TextareaField label="Всплывающая информация (при наведении)" value={area.info} onChange={(v) => updateArea(i, { info: v })} rows={2} />
              </SubBlock>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* ==================== 4. ПРЕИМУЩЕСТВА ==================== */}
        <AdminSectionCard
          title="4. Преимущества («Почему выбирают нас»)"
          subtitle="Аккордеон с раскрывающимися пунктами"
          badge="Аккордеон"
        >
          <TextField label="Плашка (бейдж)" value={advBadge} onChange={setAdvBadge} />
          <TextField label="Заголовок" value={advTitle} onChange={setAdvTitle} />
          <TextareaField label="Подзаголовок" value={advSubtitle} onChange={setAdvSubtitle} rows={2} />
          <RepeatableList title="Пункты преимуществ" addLabel="Добавить пункт" onAdd={() => setAdvItems([...advItems, emptyAccordion()])}>
            {advItems.map((item, i) => (
              <SubBlock key={i} title={`Пункт ${i + 1}`}>
                <div className="grid sm:grid-cols-2 gap-3">
                  <TextField label="Заголовок" value={item.title} onChange={(v) => updateAdv(i, { title: v })} />
                  <TextField label="Иконка (название)" value={item.icon} onChange={(v) => updateAdv(i, { icon: v })} />
                </div>
                <TextareaField label="Описание" value={item.desc} onChange={(v) => updateAdv(i, { desc: v })} rows={3} />
                <div className="grid sm:grid-cols-2 gap-3">
                  <TextField label="Число (крупная цифра)" value={item.stat} onChange={(v) => updateAdv(i, { stat: v })} />
                  <TextField label="Подпись к числу" value={item.statLabel} onChange={(v) => updateAdv(i, { statLabel: v })} />
                </div>
              </SubBlock>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* ==================== 5. ЦИФРЫ ==================== */}
        <AdminSectionCard
          title="5. Статистика («Цифры говорят сами за себя»)"
          subtitle="Сетка крупных показателей + CTA-плашка под ней"
          badge="Цифры"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Заголовок (первая часть)" value={statsTitleFirst} onChange={setStatsTitleFirst} />
            <TextField label="Заголовок (акцентная часть)" value={statsTitleAccent} onChange={setStatsTitleAccent} />
          </div>
          <TextareaField label="Подзаголовок" value={statsSubtitle} onChange={setStatsSubtitle} rows={2} />
          <RepeatableList title="Показатели" addLabel="Добавить показатель" onAdd={() => setStats([...stats, emptyStat()])}>
            {stats.map((stat, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_2fr_auto] gap-2 items-center">
                <input
                  value={stat.value}
                  onChange={(e) => updateStat(i, { value: e.target.value })}
                  placeholder="Значение"
                  className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                />
                <input
                  value={stat.unit}
                  onChange={(e) => updateStat(i, { unit: e.target.value })}
                  placeholder="Единица (п.м., %)"
                  className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                />
                <input
                  value={stat.label}
                  onChange={(e) => updateStat(i, { label: e.target.value })}
                  placeholder="Подпись"
                  className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                />
                <button
                  type="button"
                  onClick={() => setStats(stats.filter((_, si) => si !== i))}
                  className="text-gray-500 hover:text-brand-400 text-sm px-1 justify-self-start"
                  aria-label="Удалить"
                >
                  ✕
                </button>
              </div>
            ))}
          </RepeatableList>
          <div className="grid sm:grid-cols-3 gap-3">
            <TextField label="Текст CTA-плашки" value={statsCtaText} onChange={setStatsCtaText} />
            <TextField label="Текст кнопки" value={statsCtaButtonText} onChange={setStatsCtaButtonText} />
            <TextField label="Ссылка кнопки" value={statsCtaButtonLink} onChange={setStatsCtaButtonLink} />
          </div>
        </AdminSectionCard>

        {/* ==================== 6. О КОМПАНИИ ==================== */}
        <AdminSectionCard
          title="6. О компании"
          subtitle="Текстовый блок слева, видео YouTube справа"
        >
          <TextField label="Плашка (бейдж)" value={aboutBadge} onChange={setAboutBadge} />
          <TextField label="Заголовок" value={aboutTitle} onChange={setAboutTitle} />
          <TextareaField label="Абзац 1" value={aboutText1} onChange={setAboutText1} rows={4} />
          <TextareaField label="Абзац 2" value={aboutText2} onChange={setAboutText2} rows={4} />
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Текст основной кнопки" value={aboutPrimaryButtonText} onChange={setAboutPrimaryButtonText} />
            <TextField label="Ссылка основной кнопки" value={aboutPrimaryButtonLink} onChange={setAboutPrimaryButtonLink} />
            <TextField label="Текст вторичной кнопки" value={aboutSecondaryButtonText} onChange={setAboutSecondaryButtonText} />
            <TextField label="Ссылка вторичной кнопки" value={aboutSecondaryButtonLink} onChange={setAboutSecondaryButtonLink} />
          </div>
          <TextField label="URL видео (YouTube embed)" value={videoUrl} onChange={setVideoUrl} hint="https://www.youtube.com/embed/..." />
          <TextField label="Название видео (alt/title)" value={videoTitle} onChange={setVideoTitle} />
        </AdminSectionCard>

        {/* ==================== 7. ПРОИЗВОДСТВО ==================== */}
        <AdminSectionCard
          title="7. Собственное производство"
          subtitle="Текст со списком пунктов и плитка показателей справа"
        >
          <TextField label="Заголовок" value={productionTitle} onChange={setProductionTitle} />
          <TextareaField label="Описание" value={productionText} onChange={setProductionText} rows={4} />
          <RepeatableList title="Пункты списка (галочки)" addLabel="Добавить пункт" onAdd={() => setProductionList([...productionList, emptyCheckItem()])}>
            {productionList.map((item, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto] gap-2 items-center">
                <input
                  value={item.text}
                  onChange={(e) => updateProductionItem(i, e.target.value)}
                  placeholder="Текст пункта"
                  className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                />
                <button
                  type="button"
                  onClick={() => setProductionList(productionList.filter((_, pi) => pi !== i))}
                  className="text-gray-500 hover:text-brand-400 text-sm px-1"
                  aria-label="Удалить"
                >
                  ✕
                </button>
              </div>
            ))}
          </RepeatableList>
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Текст ссылки «Подробнее о производстве»" value={productionLinkText} onChange={setProductionLinkText} />
            <TextField label="Ссылка" value={productionLinkUrl} onChange={setProductionLinkUrl} />
          </div>
          <RepeatableList title="Плитка показателей (4 шт.)" addLabel="Добавить показатель" onAdd={() => setProductionTiles([...productionTiles, emptyStat()])}>
            {productionTiles.map((tile, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_2fr_auto] gap-2 items-center">
                <input
                  value={tile.value}
                  onChange={(e) => updateProductionTile(i, { value: e.target.value })}
                  placeholder="Значение"
                  className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                />
                <input
                  value={tile.unit}
                  onChange={(e) => updateProductionTile(i, { unit: e.target.value })}
                  placeholder="Единица"
                  className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                />
                <input
                  value={tile.label}
                  onChange={(e) => updateProductionTile(i, { label: e.target.value })}
                  placeholder="Подпись"
                  className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                />
                <button
                  type="button"
                  onClick={() => setProductionTiles(productionTiles.filter((_, ti) => ti !== i))}
                  className="text-gray-500 hover:text-brand-400 text-sm px-1 justify-self-start"
                  aria-label="Удалить"
                >
                  ✕
                </button>
              </div>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* ==================== 8. АПТС ==================== */}
        <AdminSectionCard
          title="8. Членство в ассоциации (АПТС)"
          subtitle="Плашка с текстом, ссылкой и логотипом ассоциации"
        >
          <TextField label="Плашка (бейдж)" value={aptsBadge} onChange={setAptsBadge} />
          <TextareaField label="Заголовок" value={aptsTitle} onChange={setAptsTitle} rows={2} />
          <TextareaField label="Текст" value={aptsText} onChange={setAptsText} rows={3} />
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Текст ссылки" value={aptsLinkText} onChange={setAptsLinkText} />
            <TextField label="URL ссылки" value={aptsLinkUrl} onChange={setAptsLinkUrl} />
          </div>
          <ImageField label="Логотип ассоциации" value={aptsLogo} onChange={setAptsLogo} />
          <TextareaField label="Подпись под логотипом" value={aptsLogoCaption} onChange={setAptsLogoCaption} rows={2} />
        </AdminSectionCard>

        {/* ==================== 9. ПРЕДСТАВИТЕЛЬСТВА ==================== */}
        <AdminSectionCard
          title="9. Наши представительства"
          subtitle="Карточки дилеров управляются отдельно — здесь только заголовки блока"
        >
          <TextField label="Плашка (бейдж)" value={dealersBadge} onChange={setDealersBadge} />
          <TextField label="Заголовок" value={dealersTitle} onChange={setDealersTitle} />
          <TextareaField label="Подзаголовок" value={dealersSubtitle} onChange={setDealersSubtitle} rows={2} />
          <p className="text-xs text-gray-500">
            Список представительств редактируется в разделе «Страницы → Контакты → Представительства».
          </p>
        </AdminSectionCard>

        {/* ==================== 10. ЗАЯВКА ==================== */}
        <AdminSectionCard
          title="10. Блок заявки (CTA с формой)"
          subtitle="Текстовая часть слева; поля самой формы заявки — глобальные настройки"
          badge="CTA"
        >
          <TextField label="Плашка (бейдж)" value={ctaBadge} onChange={setCtaBadge} />
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Заголовок (первая часть)" value={ctaTitleFirst} onChange={setCtaTitleFirst} />
            <TextField label="Заголовок (акцентная часть)" value={ctaTitleAccent} onChange={setCtaTitleAccent} />
          </div>
          <TextareaField label="Текст под заголовком" value={ctaText} onChange={setCtaText} rows={3} />
          <RepeatableList title="Список преимуществ" addLabel="Добавить преимущество" onAdd={() => setCtaBenefits([...ctaBenefits, emptyCtaBenefit()])}>
            {ctaBenefits.map((b, i) => (
              <SubBlock key={i} title={`Преимущество ${i + 1}`}>
                <TextField label="Заголовок" value={b.title} onChange={(v) => updateCtaBenefit(i, { title: v })} />
                <TextField label="Подпись" value={b.desc} onChange={(v) => updateCtaBenefit(i, { desc: v })} />
              </SubBlock>
            ))}
          </RepeatableList>
          <RepeatableList title="Мини-показатели (3 шт.)" addLabel="Добавить показатель" onAdd={() => setCtaMiniStats([...ctaMiniStats, emptyCtaMiniStat()])}>
            {ctaMiniStats.map((s, i) => (
              <div key={i} className="grid grid-cols-[1fr_2fr_auto] gap-2 items-center">
                <input
                  value={s.value}
                  onChange={(e) => updateCtaMiniStat(i, { value: e.target.value })}
                  placeholder="Значение"
                  className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                />
                <input
                  value={s.label}
                  onChange={(e) => updateCtaMiniStat(i, { label: e.target.value })}
                  placeholder="Подпись"
                  className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                />
                <button
                  type="button"
                  onClick={() => setCtaMiniStats(ctaMiniStats.filter((_, mi) => mi !== i))}
                  className="text-gray-500 hover:text-brand-400 text-sm px-1"
                  aria-label="Удалить"
                >
                  ✕
                </button>
              </div>
            ))}
          </RepeatableList>
          <TextField label="Заголовок формы заявки" value={formTitle} onChange={setFormTitle} />
        </AdminSectionCard>
      </div>
    </div>
  );
}
