import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  AdminSectionCard,
  TextField,
  TextareaField,
  ImageField,
  RepeatableList,
} from '../../components/admin/fields';

// ====== Блочный контент ======
interface ParagraphBlock { type: 'paragraph'; text: string }
interface HeadingBlock   { type: 'heading'; level: 2 | 3; text: string }
interface ImageBlock     { type: 'image'; image: string; caption: string }
interface QuoteBlock     { type: 'quote'; text: string }
type ContentBlock = ParagraphBlock | HeadingBlock | ImageBlock | QuoteBlock;

const emptyParagraph = (): ParagraphBlock => ({ type: 'paragraph', text: '' });
const emptyHeading  = (): HeadingBlock   => ({ type: 'heading', level: 2, text: '' });
const emptyImage    = (): ImageBlock     => ({ type: 'image', image: '', caption: '' });
const emptyQuote    = (): QuoteBlock     => ({ type: 'quote', text: '' });

function SubBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-gray-900/60 border border-white/10 rounded-xl p-4">
      <p className="text-sm font-semibold text-gray-200 mb-3">{title}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export default function AdminProjectEditorPage() {
  const { id } = useParams<{ id: string }>();
  const isNew = !id || id === 'create';

  // ===== 1. Мета =====
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');

  // ===== 2. Обложка и вступление =====
  const [coverImage, setCoverImage] = useState('');
  const [coverImageAlt, setCoverImageAlt] = useState('');
  const [intro, setIntro] = useState('');
  const [fullText, setFullText] = useState('');

  // ===== 3. Контент (блочный, на будущее) =====
  // На клиенте сейчас используется поле fullText, но для роста проекта
  // оставляем блочный редактор по аналогии со статьями блога.
  const [blocks, setBlocks] = useState<ContentBlock[]>([emptyParagraph()]);
  const addBlock = (block: ContentBlock) => setBlocks((prev) => [...prev, block]);
  const updateBlock = <T extends ContentBlock>(i: number, patch: Partial<T>) =>
    setBlocks((prev) => prev.map((b, idx) => (idx === i ? ({ ...b, ...patch } as ContentBlock) : b)));
  const removeBlock = (i: number) => setBlocks((prev) => prev.filter((_, idx) => idx !== i));
  const moveBlock = (i: number, dir: -1 | 1) => {
    setBlocks((prev) => {
      const next = [...prev];
      const j = i + dir;
      if (j < 0 || j >= next.length) return prev;
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  };

  // ===== 4. Настройки детальной страницы =====
  const [otherObjectsTitle, setOtherObjectsTitle] = useState('');
  const [backButtonText, setBackButtonText] = useState('');
  const [backButtonLink, setBackButtonLink] = useState('');

  const handleSave = () => alert('Сохранение будет доступно после подключения API.');

  return (
    <div className="pb-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-brand-400 font-semibold mb-1">Наши объекты</p>
          <h1 className="text-2xl font-bold text-white">
            {isNew ? 'Новый проект' : `Редактирование проекта #${id}`}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {isNew ? 'Заполните поля и сохраните черновик или опубликуйте проект' : 'Измените поля и сохраните'}
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            to="/admin/pages/projects/items"
            className="shrink-0 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-lg px-4 py-2.5 transition-colors"
          >
            ← К списку
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
        {/* 1. Основное */}
        <AdminSectionCard title="1. Основное" subtitle="Заголовок, slug, категория, дата, статус">
          <TextField label="Название проекта" value={title} onChange={setTitle} />
          <TextField
            label="Slug (URL)"
            value={slug}
            onChange={setSlug}
            hint="например: zhiloj-kompleks-druzhnyj"
          />
          <div className="grid sm:grid-cols-3 gap-3">
            <TextField label="Категория" value={category} onChange={setCategory} hint="например: Объекты" />
            <TextField label="Дата" value={date} onChange={setDate} hint="2018 или 28 июня 2018" />
            <div>
              <p className="text-xs text-gray-400 mb-1">Статус</p>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}
                className="w-full bg-gray-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500/50"
              >
                <option value="draft">Черновик</option>
                <option value="published">Опубликован</option>
              </select>
            </div>
          </div>
        </AdminSectionCard>

        {/* 2. Обложка и вступление */}
        <AdminSectionCard
          title="2. Обложка и вступление"
          subtitle="Баннер 21:9, вступительный текст и полный текст"
          badge="Контент"
        >
          <ImageField label="Изображение-баннер (21:9)" value={coverImage} onChange={setCoverImage} />
          <TextField label="Alt-текст баннера" value={coverImageAlt} onChange={setCoverImageAlt} />
          <TextareaField
            label="Вступление (intro)"
            value={intro}
            onChange={setIntro}
            rows={4}
            hint="Короткий текст, отображается в акцентной карточке"
          />
          <TextareaField
            label="Полный текст проекта (fullText)"
            value={fullText}
            onChange={setFullText}
            rows={10}
            hint="Основной текст; пустые строки переносятся как абзацы"
          />
        </AdminSectionCard>

        {/* 3. Блочный контент (на будущее) */}
        <AdminSectionCard
          title="3. Расширенный контент (опционально)"
          subtitle="Блочный редактор для подробного описания: абзацы, заголовки, изображения, цитаты"
          badge="Контент"
        >
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => addBlock(emptyParagraph())}
              className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs rounded-lg"
            >+ Абзац</button>
            <button
              onClick={() => addBlock(emptyHeading())}
              className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs rounded-lg"
            >+ Заголовок</button>
            <button
              onClick={() => addBlock(emptyImage())}
              className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs rounded-lg"
            >+ Изображение</button>
            <button
              onClick={() => addBlock(emptyQuote())}
              className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs rounded-lg"
            >+ Цитата</button>
          </div>

          <div className="space-y-3">
            {blocks.map((block, i) => (
              <SubBlock key={i} title={`Блок ${i + 1} — ${block.type}`}>
                <div className="flex gap-2">
                  <button
                    onClick={() => moveBlock(i, -1)}
                    disabled={i === 0}
                    className="text-xs text-gray-400 hover:text-brand-400 disabled:opacity-30"
                  >↑</button>
                  <button
                    onClick={() => moveBlock(i, 1)}
                    disabled={i === blocks.length - 1}
                    className="text-xs text-gray-400 hover:text-brand-400 disabled:opacity-30"
                  >↓</button>
                  <button
                    onClick={() => removeBlock(i)}
                    className="text-xs text-gray-500 hover:text-red-400 ml-auto"
                  >✕ Удалить блок</button>
                </div>

                {block.type === 'paragraph' && (
                  <TextareaField
                    label="Текст абзаца"
                    value={block.text}
                    onChange={(v) => updateBlock<ParagraphBlock>(i, { text: v })}
                    rows={3}
                  />
                )}
                {block.type === 'heading' && (
                  <>
                    <TextareaField
                      label="Текст заголовка"
                      value={block.text}
                      onChange={(v) => updateBlock<HeadingBlock>(i, { text: v })}
                      rows={2}
                    />
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Уровень</p>
                      <select
                        value={block.level}
                        onChange={(e) => updateBlock<HeadingBlock>(i, { level: Number(e.target.value) as 2 | 3 })}
                        className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white"
                      >
                        <option value={2}>H2</option>
                        <option value={3}>H3</option>
                      </select>
                    </div>
                  </>
                )}
                {block.type === 'image' && (
                  <>
                    <ImageField label="Изображение" value={block.image} onChange={(v) => updateBlock<ImageBlock>(i, { image: v })} />
                    <TextField label="Подпись" value={block.caption} onChange={(v) => updateBlock<ImageBlock>(i, { caption: v })} />
                  </>
                )}
                {block.type === 'quote' && (
                  <TextareaField
                    label="Текст цитаты"
                    value={block.text}
                    onChange={(v) => updateBlock<QuoteBlock>(i, { text: v })}
                    rows={2}
                  />
                )}
              </SubBlock>
            ))}
          </div>
        </AdminSectionCard>

        {/* 4. Настройки детальной страницы */}
        <AdminSectionCard
          title="4. Детальная страница"
          subtitle="Кнопка «Назад» и блок «Другие объекты»"
          badge="Настройки"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Текст кнопки «Назад»" value={backButtonText} onChange={setBackButtonText} hint="например: Назад к объектам" />
            <TextField label="Ссылка кнопки «Назад»" value={backButtonLink} onChange={setBackButtonLink} hint="например: /projects" />
          </div>
          <TextField
            label="Заголовок блока «Другие объекты»"
            value={otherObjectsTitle}
            onChange={setOtherObjectsTitle}
            hint="например: Другие объекты"
          />
          <p className="text-xs text-gray-500">
            Список «Другие объекты» формируется автоматически (3 последних опубликованных проекта, кроме текущего).
          </p>
        </AdminSectionCard>
      </div>
    </div>
  );
}