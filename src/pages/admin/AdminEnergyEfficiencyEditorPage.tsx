// Редактор страницы «Энергоэффективность».
// Структура повторяет блоки EnergyEfficiencyPage.tsx: Breadcrumbs, Hero, Certificates+Sidebar,
// Technology, Latest News, CTA.
// Все поля пустые — наполнение будет приходить из API.
import { useState } from 'react';
import type { ReactNode } from 'react';
import { AdminSectionCard, TextField, TextareaField, ImageField, RepeatableList } from '../../components/admin/fields';

// ====== Типы и пустые фабрики ======

interface HeroStatForm {
  icon: string;
  value: string;
  label: string;
}

const emptyHeroStat = (): HeroStatForm => ({ icon: '', value: '', label: '' });

interface BlogTagForm {
  name: string;
  count: string;
}

const emptyBlogTag = (): BlogTagForm => ({ name: '', count: '' });

interface PopularPostForm {
  title: string;
  views: string;
  category: string;
  link: string;
}

const emptyPopularPost = (): PopularPostForm => ({ title: '', views: '', category: '', link: '' });

interface BlogCardForm {
  image: string;
  categoryIcon: string;
  categoryLabel: string;
  title: string;
  text: string;
  views: string;
  date: string;
  tags: BlogTagForm[];
}

const emptyBlogCard = (): BlogCardForm => ({
  image: '',
  categoryIcon: '',
  categoryLabel: '',
  title: '',
  text: '',
  views: '',
  date: '',
  tags: [{ name: '', count: '' }],
});

interface TechSectionForm {
  image: string;
  categoryIcon: string;
  categoryLabel: string;
  title: string;
  paragraphs: { text: string }[];
  tags: BlogTagForm[];
}

const emptyTechSection = (): TechSectionForm => ({
  image: '',
  categoryIcon: '',
  categoryLabel: '',
  title: '',
  paragraphs: [{ text: '' }],
  tags: [{ name: '', count: '' }],
});

interface NewsCardForm {
  image: string;
  date: string;
  title: string;
  link: string;
}

const emptyNewsCard = (): NewsCardForm => ({ image: '', date: '', title: '', link: '' });

// ====== Вспомогательные компоненты ======

function SubBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-gray-900/60 border border-white/10 rounded-xl p-4">
      <p className="text-sm font-semibold text-gray-200 mb-3">{title}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

// ====== Основной компонент ======

export default function AdminEnergyEfficiencyEditorPage() {
  // ===== Breadcrumbs =====
  const [breadcrumbsHomeLabel, setBreadcrumbsHomeLabel] = useState('');
  const [breadcrumbsHomeLink, setBreadcrumbsHomeLink] = useState('');
  const [breadcrumbsCurrentLabel, setBreadcrumbsCurrentLabel] = useState('');

  // ===== 1. Hero =====
  const [heroBadge, setHeroBadge] = useState('');
  const [heroTitleFirst, setHeroTitleFirst] = useState('');
  const [heroTitleAccent, setHeroTitleAccent] = useState('');
  const [heroText1, setHeroText1] = useState('');
  const [heroText2, setHeroText2] = useState('');
  const [heroStats, setHeroStats] = useState<HeroStatForm[]>([
    emptyHeroStat(),
    emptyHeroStat(),
    emptyHeroStat(),
    emptyHeroStat(),
  ]);
  const updateHeroStat = (i: number, patch: Partial<HeroStatForm>) =>
    setHeroStats((prev) => prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)));

  // ===== 2. Certificates — карточка-статья =====
  const [certCardImage, setCertCardImage] = useState('');
  const [certCardIcon, setCertCardIcon] = useState('');
  const [certCardCategory, setCertCardCategory] = useState('');
  const [certCardTitle, setCertCardTitle] = useState('');
  const [certCardText, setCertCardText] = useState('');
  const [certCardViews, setCertCardViews] = useState('');
  const [certCardDate, setCertCardDate] = useState('');
  const [certCardTags, setCertCardTags] = useState<BlogTagForm[]>([emptyBlogTag()]);
  const updateCertCardTag = (i: number, patch: Partial<BlogTagForm>) =>
    setCertCardTags((prev) => prev.map((t, idx) => (idx === i ? { ...t, ...patch } : t)));

  // ===== 2b. Certificates — сайдбар «Популярное в блоге» =====
  const [popularTitle, setPopularTitle] = useState('');
  const [popularPosts, setPopularPosts] = useState<PopularPostForm[]>([emptyPopularPost()]);
  const updatePopularPost = (i: number, patch: Partial<PopularPostForm>) =>
    setPopularPosts((prev) => prev.map((p, idx) => (idx === i ? { ...p, ...patch } : p)));

  // ===== 2c. Certificates — сайдбар «Облако тегов» =====
  const [tagsTitle, setTagsTitle] = useState('');
  const [sidebarTags, setSidebarTags] = useState<BlogTagForm[]>([emptyBlogTag()]);
  const updateSidebarTag = (i: number, patch: Partial<BlogTagForm>) =>
    setSidebarTags((prev) => prev.map((t, idx) => (idx === i ? { ...t, ...patch } : t)));

  // ===== 3. Technology =====
  const [techSection, setTechSection] = useState<TechSectionForm>(emptyTechSection());
  const updateTechParagraph = (i: number, text: string) =>
    setTechSection((prev) => ({
      ...prev,
      paragraphs: prev.paragraphs.map((p, idx) => (idx === i ? { text } : p)),
    }));
  const updateTechTag = (i: number, patch: Partial<BlogTagForm>) =>
    setTechSection((prev) => ({
      ...prev,
      tags: prev.tags.map((t, idx) => (idx === i ? { ...t, ...patch } : t)),
    }));

  // ===== 4. Latest News =====
  const [newsTitle, setNewsTitle] = useState('');
  const [newsSubtitle, setNewsSubtitle] = useState('');
  const [newsCards, setNewsCards] = useState<NewsCardForm[]>([emptyNewsCard()]);
  const updateNewsCard = (i: number, patch: Partial<NewsCardForm>) =>
    setNewsCards((prev) => prev.map((n, idx) => (idx === i ? { ...n, ...patch } : n)));

  // ===== 5. CTA =====
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
          <h1 className="text-2xl font-bold text-white">Редактор страницы «Энергоэффективность»</h1>
          <p className="text-sm text-gray-500 mt-1">
            Блоки соответствуют структуре страницы /energy. Изменения вступят в силу после сохранения.
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
          subtitle="Бейдж, заголовок, описание и сетка из четырёх показателей"
          badge="Hero"
        >
          <TextField label="Плашка (бейдж)" value={heroBadge} onChange={setHeroBadge} />
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Заголовок (обычная часть)" value={heroTitleFirst} onChange={setHeroTitleFirst} />
            <TextField label="Заголовок (акцентная часть)" value={heroTitleAccent} onChange={setHeroTitleAccent} />
          </div>
          <TextareaField label="Абзац 1" value={heroText1} onChange={setHeroText1} rows={3} />
          <TextareaField label="Абзац 2" value={heroText2} onChange={setHeroText2} rows={3} />
          <RepeatableList
            title="Карточки-показатели (4 шт.)"
            addLabel="Добавить карточку"
            onAdd={() => setHeroStats([...heroStats, emptyHeroStat()])}
          >
            {heroStats.map((stat, i) => (
              <SubBlock key={i} title={`Карточка ${i + 1}`}>
                <div className="grid sm:grid-cols-3 gap-3">
                  <TextField
                    label="Иконка (название)"
                    value={stat.icon}
                    onChange={(v) => updateHeroStat(i, { icon: v })}
                    hint="например: award, shield, trending-up, zap"
                  />
                  <TextField label="Значение (крупный текст)" value={stat.value} onChange={(v) => updateHeroStat(i, { value: v })} />
                  <TextField label="Подпись" value={stat.label} onChange={(v) => updateHeroStat(i, { label: v })} />
                </div>
              </SubBlock>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* ==================== 2. CERTIFICATES + SIDEBAR ==================== */}
        <AdminSectionCard
          title="2. Блок «Сертификация» (центральная статья + сайдбар)"
          subtitle="Левая колонка — карточка статьи; правая — «Популярное в блоге» и «Облако тегов»"
          badge="Блог"
        >
          {/* --- 2a. Карточка статьи --- */}
          <SubBlock title="Карточка статьи">
            <ImageField label="Изображение карточки" value={certCardImage} onChange={setCertCardImage} />
            <div className="grid sm:grid-cols-2 gap-3">
              <TextField label="Иконка категории (название)" value={certCardIcon} onChange={setCertCardIcon} hint="например: award" />
              <TextField label="Подпись категории" value={certCardCategory} onChange={setCertCardCategory} />
            </div>
            <TextField label="Заголовок статьи" value={certCardTitle} onChange={setCertCardTitle} />
            <TextareaField label="Текст статьи" value={certCardText} onChange={setCertCardText} rows={4} />
            <div className="grid sm:grid-cols-2 gap-3">
              <TextField label="Просмотры" value={certCardViews} onChange={setCertCardViews} />
              <TextField label="Дата (ISO)" value={certCardDate} onChange={setCertCardDate} hint="например: 2022-02-01" />
            </div>
            <RepeatableList
              title="Теги карточки"
              addLabel="Добавить тег"
              onAdd={() => setCertCardTags([...certCardTags, emptyBlogTag()])}
            >
              {certCardTags.map((tag, i) => (
                <div key={i} className="grid grid-cols-[1fr_auto] gap-2 items-center">
                  <input
                    value={tag.name}
                    onChange={(e) => updateCertCardTag(i, { name: e.target.value })}
                    placeholder="Название тега"
                    className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                  />
                  <button
                    type="button"
                    onClick={() => setCertCardTags(certCardTags.filter((_, ti) => ti !== i))}
                    className="text-gray-500 hover:text-brand-400 text-sm px-1"
                    aria-label="Удалить"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </RepeatableList>
          </SubBlock>

          {/* --- 2b. Популярное в блоге --- */}
          <SubBlock title="Сайдбар: «Популярное в блоге»">
            <TextField label="Заголовок блока" value={popularTitle} onChange={setPopularTitle} />
            <RepeatableList
              title="Статьи"
              addLabel="Добавить статью"
              onAdd={() => setPopularPosts([...popularPosts, emptyPopularPost()])}
            >
              {popularPosts.map((post, i) => (
                <SubBlock key={i} title={`Статья ${i + 1}`}>
                  <TextField label="Заголовок" value={post.title} onChange={(v) => updatePopularPost(i, { title: v })} />
                  <div className="grid sm:grid-cols-3 gap-3">
                    <TextField label="Просмотры" value={post.views} onChange={(v) => updatePopularPost(i, { views: v })} />
                    <TextField label="Категория" value={post.category} onChange={(v) => updatePopularPost(i, { category: v })} />
                    <TextField label="Ссылка" value={post.link} onChange={(v) => updatePopularPost(i, { link: v })} />
                  </div>
                </SubBlock>
              ))}
            </RepeatableList>
          </SubBlock>

          {/* --- 2c. Облако тегов --- */}
          <SubBlock title="Сайдбар: «Облако тегов»">
            <TextField label="Заголовок блока" value={tagsTitle} onChange={setTagsTitle} />
            <RepeatableList
              title="Теги"
              addLabel="Добавить тег"
              onAdd={() => setSidebarTags([...sidebarTags, emptyBlogTag()])}
            >
              {sidebarTags.map((tag, i) => (
                <div key={i} className="grid grid-cols-[2fr_1fr_auto] gap-2 items-center">
                  <input
                    value={tag.name}
                    onChange={(e) => updateSidebarTag(i, { name: e.target.value })}
                    placeholder="Название тега"
                    className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                  />
                  <input
                    value={tag.count}
                    onChange={(e) => updateSidebarTag(i, { count: e.target.value })}
                    placeholder="Кол-во (для размера)"
                    className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                  />
                  <button
                    type="button"
                    onClick={() => setSidebarTags(sidebarTags.filter((_, ti) => ti !== i))}
                    className="text-gray-500 hover:text-brand-400 text-sm px-1"
                    aria-label="Удалить"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </RepeatableList>
          </SubBlock>
        </AdminSectionCard>

        {/* ==================== 3. TECHNOLOGY ==================== */}
        <AdminSectionCard
          title="3. Блок «Технология»"
          subtitle="Крупная статья с баннером, текстом и набором тегов"
          badge="Статья"
        >
          <ImageField label="Изображение-баннер" value={techSection.image} onChange={(v) => setTechSection((p) => ({ ...p, image: v }))} />
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField
              label="Иконка категории (название)"
              value={techSection.categoryIcon}
              onChange={(v) => setTechSection((p) => ({ ...p, categoryIcon: v }))}
              hint="например: zap"
            />
            <TextField
              label="Подпись категории"
              value={techSection.categoryLabel}
              onChange={(v) => setTechSection((p) => ({ ...p, categoryLabel: v }))}
            />
          </div>
          <TextField label="Заголовок" value={techSection.title} onChange={(v) => setTechSection((p) => ({ ...p, title: v }))} />
          <RepeatableList
            title="Абзацы статьи"
            addLabel="Добавить абзац"
            onAdd={() => setTechSection((p) => ({ ...p, paragraphs: [...p.paragraphs, { text: '' }] }))}
          >
            {techSection.paragraphs.map((p, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto] gap-2 items-center">
                <textarea
                  value={p.text}
                  onChange={(e) => updateTechParagraph(i, e.target.value)}
                  placeholder={`Абзац ${i + 1}`}
                  rows={2}
                  className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50 resize-none"
                />
                <button
                  type="button"
                  onClick={() => setTechSection((p) => ({ ...p, paragraphs: p.paragraphs.filter((_, pi) => pi !== i) }))}
                  className="text-gray-500 hover:text-brand-400 text-sm px-1"
                  aria-label="Удалить"
                >
                  ✕
                </button>
              </div>
            ))}
          </RepeatableList>
          <RepeatableList
            title="Теги статьи"
            addLabel="Добавить тег"
            onAdd={() => setTechSection((p) => ({ ...p, tags: [...p.tags, emptyBlogTag()] }))}
          >
            {techSection.tags.map((tag, i) => (
              <div key={i} className="grid grid-cols-[2fr_1fr_auto] gap-2 items-center">
                <input
                  value={tag.name}
                  onChange={(e) => updateTechTag(i, { name: e.target.value })}
                  placeholder="Название тега"
                  className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                />
                <input
                  value={tag.count}
                  onChange={(e) => updateTechTag(i, { count: e.target.value })}
                  placeholder="Кол-во (необяз.)"
                  className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                />
                <button
                  type="button"
                  onClick={() => setTechSection((p) => ({ ...p, tags: p.tags.filter((_, ti) => ti !== i) }))}
                  className="text-gray-500 hover:text-brand-400 text-sm px-1"
                  aria-label="Удалить"
                >
                  ✕
                </button>
              </div>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* ==================== 4. LATEST NEWS ==================== */}
        <AdminSectionCard
          title="4. Блок «Последние новости»"
          subtitle="Сетка новостных карточек"
          badge="Новости"
        >
          <TextField label="Заголовок блока" value={newsTitle} onChange={setNewsTitle} />
          <TextareaField label="Подзаголовок" value={newsSubtitle} onChange={setNewsSubtitle} rows={2} />
          <RepeatableList
            title="Новостные карточки"
            addLabel="Добавить новость"
            onAdd={() => setNewsCards([...newsCards, emptyNewsCard()])}
          >
            {newsCards.map((card, i) => (
              <SubBlock key={i} title={`Новость ${i + 1}`}>
                <ImageField label="Изображение" value={card.image} onChange={(v) => updateNewsCard(i, { image: v })} />
                <div className="grid sm:grid-cols-2 gap-3">
                  <TextField label="Дата" value={card.date} onChange={(v) => updateNewsCard(i, { date: v })} hint="например: 2026-10-27" />
                  <TextField label="Ссылка" value={card.link} onChange={(v) => updateNewsCard(i, { link: v })} />
                </div>
                <TextField label="Заголовок" value={card.title} onChange={(v) => updateNewsCard(i, { title: v })} />
              </SubBlock>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* ==================== 5. CTA ==================== */}
        <AdminSectionCard
          title="5. Блок CTA"
          subtitle="Призыв к действию с двумя кнопками"
          badge="CTA"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Заголовок (обычная часть)" value={ctaTitleFirst} onChange={setCtaTitleFirst} />
            <TextField label="Заголовок (акцентная часть)" value={ctaTitleAccent} onChange={setCtaTitleAccent} />
          </div>
          <TextareaField label="Текст под заголовком" value={ctaText} onChange={setCtaText} rows={3} />
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