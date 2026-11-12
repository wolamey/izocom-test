// Редактор страницы «Всё о трубах» (общие настройки блога).
// Управление статьями вынесено в AdminArticlesListPage / AdminArticleEditorPage.
import { useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AdminSectionCard, TextField, TextareaField, ImageField, RepeatableList } from '../../components/admin/fields';

interface TagForm { name: string; count: string }
const emptyTag = (): TagForm => ({ name: '', count: '' });

interface PopularForm { slug: string; title: string; views: string; date: string }
const emptyPopular = (): PopularForm => ({ slug: '', title: '', views: '', date: '' });

interface NewsForm { slug: string; title: string; image: string }
const emptyNews = (): NewsForm => ({ slug: '', title: '', image: '' });

function SubBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-gray-900/60 border border-white/10 rounded-xl p-4">
      <p className="text-sm font-semibold text-gray-200 mb-3">{title}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export default function AdminAllAboutPipesEditorPage() {
  // Hero
  const [heroBadge, setHeroBadge] = useState('');
  const [heroTitleFirst, setHeroTitleFirst] = useState('');
  const [heroTitleAccent, setHeroTitleAccent] = useState('');
  const [heroText1, setHeroText1] = useState('');
  const [heroText2, setHeroText2] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [heroImageAlt, setHeroImageAlt] = useState('');

  // Кнопка «Показать ещё»
  const [loadMoreText, setLoadMoreText] = useState('');
  const [loadMoreEnabled, setLoadMoreEnabled] = useState(true);
  const [articlesPerPage, setArticlesPerPage] = useState('');

  // Сайдбар — Популярное
  const [popularTitle, setPopularTitle] = useState('');
  const [popularItems, setPopularItems] = useState<PopularForm[]>([emptyPopular()]);
  const updatePopular = (i: number, patch: Partial<PopularForm>) =>
    setPopularItems((prev) => prev.map((p, idx) => (idx === i ? { ...p, ...patch } : p)));

  // Сайдбар — Последние новости
  const [newsTitle, setNewsTitle] = useState('');
  const [newsItems, setNewsItems] = useState<NewsForm[]>([emptyNews()]);
  const updateNews = (i: number, patch: Partial<NewsForm>) =>
    setNewsItems((prev) => prev.map((n, idx) => (idx === i ? { ...n, ...patch } : n)));

  // Сайдбар — Облако тегов
  const [tagsTitle, setTagsTitle] = useState('');
  const [tags, setTags] = useState<TagForm[]>([emptyTag()]);
  const updateTag = (i: number, patch: Partial<TagForm>) =>
    setTags((prev) => prev.map((t, idx) => (idx === i ? { ...t, ...patch } : t)));

  const handleSave = () => alert('Сохранение будет доступно после подключения API.');

  return (
    <div className="pb-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-brand-400 font-semibold mb-1">Страницы</p>
          <h1 className="text-2xl font-bold text-white">Редактор страницы «Всё о трубах»</h1>
          <p className="text-sm text-gray-500 mt-1">
            Общие настройки блога. Управление самими статьями — в разделе «Статьи».
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            to="/admin/pages/about-pipes/articles"
            className="shrink-0 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-lg px-4 py-2.5 transition-colors"
          >
            Перейти к статьям →
          </Link>
          <button
            onClick={handleSave}
            className="shrink-0 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg px-5 py-2.5 transition-colors"
          >
            Сохранить
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* 1. HERO */}
        <AdminSectionCard title="1. Hero-блок" subtitle="Верхняя секция страницы блога" badge="Hero">
          <TextField label="Плашка (бейдж)" value={heroBadge} onChange={setHeroBadge} />
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Заголовок (обычная часть)" value={heroTitleFirst} onChange={setHeroTitleFirst} />
            <TextField label="Заголовок (акцентная часть)" value={heroTitleAccent} onChange={setHeroTitleAccent} />
          </div>
          <TextareaField label="Абзац 1" value={heroText1} onChange={setHeroText1} rows={3} />
          <TextareaField label="Абзац 2" value={heroText2} onChange={setHeroText2} rows={3} />
          <ImageField label="Изображение справа" value={heroImage} onChange={setHeroImage} />
          <TextField label="Alt-текст изображения" value={heroImageAlt} onChange={setHeroImageAlt} />
        </AdminSectionCard>

        {/* 2. Список статей — кнопка «Показать ещё» */}
        <AdminSectionCard
          title="2. Сетка статей"
          subtitle="Настройки отображения списка статей в блоге"
          badge="Лента"
        >
          <TextField label="Текст кнопки «Показать ещё»" value={loadMoreText} onChange={setLoadMoreText} />
          <label className="flex items-center gap-2 text-sm text-gray-300">
            <input
              type="checkbox"
              checked={loadMoreEnabled}
              onChange={(e) => setLoadMoreEnabled(e.target.checked)}
              className="accent-brand-600"
            />
            Показывать кнопку «Показать ещё»
          </label>
          <TextField
            label="Статей на странице (пагинация)"
            value={articlesPerPage}
            onChange={setArticlesPerPage}
            hint="например: 9"
          />
        </AdminSectionCard>

        {/* 3. Сайдбар — Популярное */}
        <AdminSectionCard title="3. Сайдбар: «Популярное в блоге»" subtitle="Список популярных статей" badge="Сайдбар">
          <TextField label="Заголовок блока" value={popularTitle} onChange={setPopularTitle} />
          <RepeatableList addLabel="Добавить статью" onAdd={() => setPopularItems([...popularItems, emptyPopular()])}>
            {popularItems.map((p, i) => (
              <SubBlock key={i} title={`Статья ${i + 1}`}>
                <TextField label="Slug статьи" value={p.slug} onChange={(v) => updatePopular(i, { slug: v })} hint="из реестра /articles/{slug}" />
                <TextField label="Заголовок" value={p.title} onChange={(v) => updatePopular(i, { title: v })} />
                <div className="grid sm:grid-cols-2 gap-3">
                  <TextField label="Просмотры" value={p.views} onChange={(v) => updatePopular(i, { views: v })} />
                  <TextField label="Дата (ISO)" value={p.date} onChange={(v) => updatePopular(i, { date: v })} />
                </div>
              </SubBlock>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* 4. Сайдбар — Новости */}
        <AdminSectionCard title="4. Сайдбар: «Последние новости»" subtitle="Мини-лента новостей" badge="Сайдбар">
          <TextField label="Заголовок блока" value={newsTitle} onChange={setNewsTitle} />
          <RepeatableList addLabel="Добавить новость" onAdd={() => setNewsItems([...newsItems, emptyNews()])}>
            {newsItems.map((n, i) => (
              <SubBlock key={i} title={`Новость ${i + 1}`}>
                <TextField label="Slug новости" value={n.slug} onChange={(v) => updateNews(i, { slug: v })} hint="из раздела /news/{slug}" />
                <TextField label="Заголовок" value={n.title} onChange={(v) => updateNews(i, { title: v })} />
                <ImageField label="Изображение" value={n.image} onChange={(v) => updateNews(i, { image: v })} />
              </SubBlock>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* 5. Сайдбар — Теги */}
        <AdminSectionCard title="5. Сайдбар: «Облако тегов»" subtitle="Теги с весом для размера шрифта" badge="Сайдбар">
          <TextField label="Заголовок блока" value={tagsTitle} onChange={setTagsTitle} />
          <RepeatableList addLabel="Добавить тег" onAdd={() => setTags([...tags, emptyTag()])}>
            {tags.map((t, i) => (
              <div key={i} className="grid grid-cols-[2fr_1fr_auto] gap-2 items-center">
                <input
                  value={t.name}
                  onChange={(e) => updateTag(i, { name: e.target.value })}
                  placeholder="Название тега"
                  className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                />
                <input
                  value={t.count}
                  onChange={(e) => updateTag(i, { count: e.target.value })}
                  placeholder="Вес"
                  className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                />
                <button
                  type="button"
                  onClick={() => setTags(tags.filter((_, ti) => ti !== i))}
                  className="text-gray-500 hover:text-brand-400 text-sm px-1"
                  aria-label="Удалить"
                >✕</button>
              </div>
            ))}
          </RepeatableList>
        </AdminSectionCard>
      </div>
    </div>
  );
}