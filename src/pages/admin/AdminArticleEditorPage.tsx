import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { AdminSectionCard, TextField, TextareaField, ImageField, RepeatableList } from '../../components/admin/fields';

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

interface TagForm { name: string }
const emptyTag = (): TagForm => ({ name: '' });

function SubBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-gray-900/60 border border-white/10 rounded-xl p-4">
      <p className="text-sm font-semibold text-gray-200 mb-3">{title}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export default function AdminArticleEditorPage() {
  const { id } = useParams<{ id: string }>();
  const isNew = !id || id === 'create';

  // Мета
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [views, setViews] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [tags, setTags] = useState<TagForm[]>([emptyTag()]);
  const updateTag = (i: number, name: string) =>
    setTags((prev) => prev.map((t, idx) => (idx === i ? { name } : t)));

  // Контент
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

  const handleSave = () => alert('Сохранение будет доступно после подключения API.');

  return (
    <div className="pb-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-brand-400 font-semibold mb-1">Всё о трубах</p>
          <h1 className="text-2xl font-bold text-white">
            {isNew ? 'Новая статья' : `Редактирование статьи #${id}`}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {isNew ? 'Заполните поля и сохраните черновик или опубликуйте статью' : 'Измените поля и сохраните'}
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            to="/admin/pages/about-pipes/articles"
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
        {/* 1. Мета */}
        <AdminSectionCard title="1. Основное" subtitle="Заголовок, slug, описание, обложка, статус">
          <TextField label="Заголовок" value={title} onChange={setTitle} />
          <TextField label="Slug (URL)" value={slug} onChange={setSlug} hint="например: kak-vybrat-muftu" />
          <TextareaField label="Краткое описание (для карточки)" value={shortDescription} onChange={setShortDescription} rows={3} />
          <ImageField label="Обложка статьи" value={coverImage} onChange={setCoverImage} />
          <div className="grid sm:grid-cols-3 gap-3">
            <TextField label="Просмотры" value={views} onChange={setViews} />
            <TextField label="Дата (ISO)" value={date} onChange={setDate} hint="2024-11-12" />
            <div>
              <p className="text-xs text-gray-400 mb-1">Статус</p>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}
                className="w-full bg-gray-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500/50"
              >
                <option value="draft">Черновик</option>
                <option value="published">Опубликовано</option>
              </select>
            </div>
          </div>
          <RepeatableList title="Теги" addLabel="Добавить тег" onAdd={() => setTags([...tags, emptyTag()])}>
            {tags.map((t, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto] gap-2 items-center">
                <input
                  value={t.name}
                  onChange={(e) => updateTag(i, e.target.value)}
                  placeholder="Название тега"
                  className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50"
                />
                <button
                  type="button"
                  onClick={() => setTags(tags.filter((_, ti) => ti !== i))}
                  className="text-gray-500 hover:text-brand-400 text-sm px-1"
                >✕</button>
              </div>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* 2. Контент */}
        <AdminSectionCard
          title="2. Содержимое статьи"
          subtitle="Блочный редактор: абзацы, заголовки, изображения, цитаты"
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
      </div>
    </div>
  );
}