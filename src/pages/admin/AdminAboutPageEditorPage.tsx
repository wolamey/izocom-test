// Редактор страницы «О компании».
// Структура повторяет блоки AboutPage.tsx: Hero, Принципы, Производственный процесс,
// Сертификация, Корпоративная презентация, CTA.
// Все поля пустые — наполнение будет приходить из API.
import { useState } from 'react';
import type { ReactNode } from 'react';
import { AdminSectionCard, TextField, TextareaField, ImageField, RepeatableList } from '../../components/admin/fields';

interface HeroStatForm {
  value: string;
  label: string;
  icon: string;
}

const emptyHeroStat = (): HeroStatForm => ({ value: '', label: '', icon: '' });

interface ValueForm {
  title: string;
  desc: string;
  icon: string;
}

const emptyValue = (): ValueForm => ({ title: '', desc: '', icon: '' });

interface StepForm {
  step: string;
  title: string;
  desc: string;
}

const emptyStep = (): StepForm => ({ step: '', title: '', desc: '' });

interface PresentationSlideForm {
  image: string;
  alt: string;
}

const emptyPresentationSlide = (): PresentationSlideForm => ({ image: '', alt: '' });

function SubBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-gray-900/60 border border-white/10 rounded-xl p-4">
      <p className="text-sm font-semibold text-gray-200 mb-3">{title}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export default function AdminAboutPageEditor() {
  // ===== Блок 1. Первый экран (Hero) =====
  const [heroBadge, setHeroBadge] = useState('');
  const [heroTitleFirst, setHeroTitleFirst] = useState('');
  const [heroTitleAccent, setHeroTitleAccent] = useState('');
  const [heroText1, setHeroText1] = useState('');
  const [heroText2, setHeroText2] = useState('');
  const [heroText3, setHeroText3] = useState('');
  const [heroStats, setHeroStats] = useState<HeroStatForm[]>([
    emptyHeroStat(),
    emptyHeroStat(),
    emptyHeroStat(),
    emptyHeroStat(),
  ]);
  const updateHeroStat = (i: number, patch: Partial<HeroStatForm>) =>
    setHeroStats((prev) => prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)));

  // ===== Блок 2. Наши принципы =====
  const [valuesTitle, setValuesTitle] = useState('');
  const [valuesSubtitle, setValuesSubtitle] = useState('');
  const [values, setValues] = useState<ValueForm[]>([emptyValue()]);
  const updateValue = (i: number, patch: Partial<ValueForm>) =>
    setValues((prev) => prev.map((v, idx) => (idx === i ? { ...v, ...patch } : v)));

  // ===== Блок 3. Производственный процесс =====
  const [processTitle, setProcessTitle] = useState('');
  const [processSubtitle, setProcessSubtitle] = useState('');
  const [steps, setSteps] = useState<StepForm[]>([emptyStep()]);
  const updateStep = (i: number, patch: Partial<StepForm>) =>
    setSteps((prev) => prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)));

  // ===== Блок 4. Сертификация =====
  const [certTitle, setCertTitle] = useState('');
  const [certSubtitle, setCertSubtitle] = useState('');
  const [certItems, setCertItems] = useState<string[]>(['']);
  const updateCertItem = (i: number, text: string) =>
    setCertItems((prev) => prev.map((it, idx) => (idx === i ? text : it)));
  const [certButtonText, setCertButtonText] = useState('');
  const [certButtonLink, setCertButtonLink] = useState('');

  // ===== Блок 5. Корпоративная презентация =====
  const [presBadge, setPresBadge] = useState('');
  const [presTitle, setPresTitle] = useState('');
  const [presSubtitle, setPresSubtitle] = useState('');
  const [slides, setSlides] = useState<PresentationSlideForm[]>([emptyPresentationSlide()]);
  const updateSlide = (i: number, patch: Partial<PresentationSlideForm>) =>
    setSlides((prev) => prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)));

  // ===== Блок 6. Призыв к сотрудничеству (CTA) =====
  const [ctaTitleFirst, setCtaTitleFirst] = useState('');
  const [ctaTitleAccent, setCtaTitleAccent] = useState('');
  const [ctaText, setCtaText] = useState('');
  const [ctaPrimaryButtonText, setCtaPrimaryButtonText] = useState('');
  const [ctaPrimaryButtonLink, setCtaPrimaryButtonLink] = useState('');
  const [ctaSecondaryButtonText, setCtaSecondaryButtonText] = useState('');
  const [ctaSecondaryButtonLink, setCtaSecondaryButtonLink] = useState('');

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
          <h1 className="text-2xl font-bold text-white">Редактор страницы «О компании»</h1>
          <p className="text-sm text-gray-500 mt-1">
            Блоки соответствуют структуре страницы «О компании». Изменения вступят в силу после сохранения.
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
          title="1. Первый экран (Hero)"
          subtitle="Заголовок страницы, описание компании и мини-показатели справа"
        >
          <TextField label="Плашка (бейдж)" value={heroBadge} onChange={setHeroBadge} />
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Заголовок — первая часть" value={heroTitleFirst} onChange={setHeroTitleFirst} hint="Например: «Изоком Пласт —»" />
            <TextField label="Заголовок — выделенная часть" value={heroTitleAccent} onChange={setHeroTitleAccent} hint="Отображается цветом бренда" />
          </div>
          <TextareaField label="Абзац 1 (введение)" value={heroText1} onChange={setHeroText1} rows={3} />
          <TextareaField label="Абзац 2 (история и производство)" value={heroText2} onChange={setHeroText2} rows={3} />
          <TextareaField label="Абзац 3 (цикл услуг)" value={heroText3} onChange={setHeroText3} rows={2} />
          <RepeatableList
            title="Мини-показатели (сетка 2×2)"
            addLabel="Добавить показатель"
            onAdd={() => setHeroStats([...heroStats, emptyHeroStat()])}
          >
            {heroStats.map((stat, i) => (
              <SubBlock key={i} title={`Показатель ${i + 1}`}>
                <div className="grid sm:grid-cols-3 gap-3">
                  <TextField label="Значение" value={stat.value} onChange={(v) => updateHeroStat(i, { value: v })} />
                  <TextField label="Подпись" value={stat.label} onChange={(v) => updateHeroStat(i, { label: v })} />
                  <TextField label="Иконка (название)" value={stat.icon} onChange={(v) => updateHeroStat(i, { icon: v })} hint="например: calendar, factory" />
                </div>
                <button
                  type="button"
                  onClick={() => setHeroStats(heroStats.filter((_, idx) => idx !== i))}
                  className="text-xs text-gray-500 hover:text-red-400 transition-colors"
                >
                  Удалить показатель
                </button>
              </SubBlock>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* ==================== 2. НАШИ ПРИНЦИПЫ ==================== */}
        <AdminSectionCard
          title="2. Наши принципы"
          subtitle="Карточки ценностей компании в сетке"
          badge="Список"
        >
          <TextField label="Заголовок блока" value={valuesTitle} onChange={setValuesTitle} />
          <TextareaField label="Подзаголовок" value={valuesSubtitle} onChange={setValuesSubtitle} rows={2} />
          <RepeatableList title="Принципы" addLabel="Добавить принцип" onAdd={() => setValues([...values, emptyValue()])}>
            {values.map((value, i) => (
              <SubBlock key={i} title={`Принцип ${i + 1}`}>
                <div className="grid sm:grid-cols-2 gap-3">
                  <TextField label="Название" value={value.title} onChange={(v) => updateValue(i, { title: v })} />
                  <TextField label="Иконка (название)" value={value.icon} onChange={(v) => updateValue(i, { icon: v })} hint="например: award, check" />
                </div>
                <TextareaField label="Описание" value={value.desc} onChange={(v) => updateValue(i, { desc: v })} rows={2} />
                <button
                  type="button"
                  onClick={() => setValues(values.filter((_, idx) => idx !== i))}
                  className="text-xs text-gray-500 hover:text-red-400 transition-colors"
                >
                  Удалить принцип
                </button>
              </SubBlock>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* ==================== 3. ПРОИЗВОДСТВЕННЫЙ ПРОЦЕСС ==================== */}
        <AdminSectionCard
          title="3. Производственный процесс"
          subtitle="Нумерованные этапы от сырья до готовой продукции"
          badge="Этапы"
        >
          <TextField label="Заголовок блока" value={processTitle} onChange={setProcessTitle} />
          <TextareaField label="Подзаголовок" value={processSubtitle} onChange={setProcessSubtitle} rows={2} />
          <RepeatableList title="Этапы" addLabel="Добавить этап" onAdd={() => setSteps([...steps, emptyStep()])}>
            {steps.map((step, i) => (
              <SubBlock key={i} title={`Этап ${i + 1}`}>
                <div className="grid sm:grid-cols-[120px_1fr] gap-3">
                  <TextField label="Номер этапа" value={step.step} onChange={(v) => updateStep(i, { step: v })} hint="например: 01" />
                  <TextField label="Название" value={step.title} onChange={(v) => updateStep(i, { title: v })} />
                </div>
                <TextareaField label="Описание" value={step.desc} onChange={(v) => updateStep(i, { desc: v })} rows={2} />
                <button
                  type="button"
                  onClick={() => setSteps(steps.filter((_, idx) => idx !== i))}
                  className="text-xs text-gray-500 hover:text-red-400 transition-colors"
                >
                  Удалить этап
                </button>
              </SubBlock>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* ==================== 4. СЕРТИФИКАЦИЯ ==================== */}
        <AdminSectionCard
          title="4. Сертификация"
          subtitle="Список документов, подтверждающих качество продукции"
        >
          <TextField label="Заголовок блока" value={certTitle} onChange={setCertTitle} />
          <TextareaField label="Подзаголовок" value={certSubtitle} onChange={setCertSubtitle} rows={2} />
          <RepeatableList title="Пункты сертификации" addLabel="Добавить пункт" onAdd={() => setCertItems([...certItems, ''])}>
            {certItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  value={item}
                  onChange={(e) => updateCertItem(i, e.target.value)}
                  placeholder="Название документа"
                  className="flex-1 bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                />
                <button
                  type="button"
                  onClick={() => setCertItems(certItems.filter((_, idx) => idx !== i))}
                  className="text-gray-500 hover:text-brand-400 text-sm px-1"
                  aria-label="Удалить"
                >
                  ✕
                </button>
              </div>
            ))}
          </RepeatableList>
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Текст кнопки «Все документы»" value={certButtonText} onChange={setCertButtonText} />
            <TextField label="Ссылка кнопки" value={certButtonLink} onChange={setCertButtonLink} />
          </div>
        </AdminSectionCard>

        {/* ==================== 5. КОРПОРАТИВНАЯ ПРЕЗЕНТАЦИЯ ==================== */}
        <AdminSectionCard
          title="5. Корпоративная презентация"
          subtitle="Галерея слайдов презентации — добавляйте изображения по порядку"
          badge="Галерея"
        >
          <TextField label="Плашка (бейдж)" value={presBadge} onChange={setPresBadge} />
          <TextField label="Заголовок блока" value={presTitle} onChange={setPresTitle} />
          <TextareaField label="Подзаголовок" value={presSubtitle} onChange={setPresSubtitle} rows={2} />
          <RepeatableList title="Слайды презентации" addLabel="Добавить слайд" onAdd={() => setSlides([...slides, emptyPresentationSlide()])}>
            {slides.map((slide, i) => (
              <SubBlock key={i} title={`Слайд ${i + 1}`}>
                <ImageField label="Изображение слайда" value={slide.image} onChange={(v) => updateSlide(i, { image: v })} />
                <TextField label="Alt-текст" value={slide.alt} onChange={(v) => updateSlide(i, { alt: v })} />
                <button
                  type="button"
                  onClick={() => setSlides(slides.filter((_, idx) => idx !== i))}
                  className="text-xs text-gray-500 hover:text-red-400 transition-colors"
                >
                  Удалить слайд
                </button>
              </SubBlock>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* ==================== 6. CTA ==================== */}
        <AdminSectionCard
          title="6. Призыв к сотрудничеству (CTA)"
          subtitle="Финальный блок с двумя кнопками"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Заголовок — первая часть" value={ctaTitleFirst} onChange={setCtaTitleFirst} />
            <TextField label="Заголовок — выделенная часть" value={ctaTitleAccent} onChange={setCtaTitleAccent} />
          </div>
          <TextareaField label="Текст под заголовком" value={ctaText} onChange={setCtaText} rows={2} />
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Текст основной кнопки" value={ctaPrimaryButtonText} onChange={setCtaPrimaryButtonText} />
            <TextField label="Ссылка основной кнопки" value={ctaPrimaryButtonLink} onChange={setCtaPrimaryButtonLink} />
            <TextField label="Текст вторичной кнопки" value={ctaSecondaryButtonText} onChange={setCtaSecondaryButtonText} />
            <TextField label="Ссылка вторичной кнопки" value={ctaSecondaryButtonLink} onChange={setCtaSecondaryButtonLink} />
          </div>
        </AdminSectionCard>
      </div>
    </div>
  );
}
