// Редактор страницы «Нормативные документы» (/standards).
// Структура повторяет блоки StandardsPage.tsx: Hero, Documents, Standards, Contact.
// Все поля пустые — наполнение будет приходить из API.
import { useState } from 'react';
import type { ReactNode } from 'react';
import { AdminSectionCard, TextField, TextareaField, ImageField, RepeatableList } from '../../components/admin/fields';

// ====== Типы и пустые фабрики ======

interface DocumentForm {
  title: string;
  format: string;     // PDF, DWG, RFA...
  size: string;       // 15.2 МБ
  url: string;
  icon: string;       // имя иконки: file-text, wrench, book-open...
}

const emptyDocument = (): DocumentForm => ({
  title: '',
  format: '',
  size: '',
  url: '',
  icon: '',
});

interface StandardItemForm {
  text: string;
}

const emptyStandardItem = (): StandardItemForm => ({ text: '' });

interface StandardCategoryForm {
  title: string;
  icon: string;       // shield, book-open, wrench...
  items: StandardItemForm[];
}

const emptyStandardCategory = (): StandardCategoryForm => ({
  title: '',
  icon: '',
  items: [emptyStandardItem()],
});

interface ContactItemForm {
  icon: string;        // phone, map-pin, mail, clock...
  label: string;       // «Телефоны отдела продаж»
  value: string;       // основная строка (может быть телефон / email / адрес)
  value2: string;      // доп. строка (например, второй телефон или адрес)
  link: string;        // tel: / mailto: / URL (необязательно)
}

const emptyContactItem = (): ContactItemForm => ({
  icon: '',
  label: '',
  value: '',
  value2: '',
  link: '',
});

function SubBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-gray-900/60 border border-white/10 rounded-xl p-4">
      <p className="text-sm font-semibold text-gray-200 mb-3">{title}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

// ====== Основной компонент ======

export default function AdminStandardsEditorPage() {
  // ===== 1. HERO =====
  const [heroBadge, setHeroBadge] = useState('');
  const [heroTitleFirst, setHeroTitleFirst] = useState('');
  const [heroTitleAccent, setHeroTitleAccent] = useState('');
  const [heroText1, setHeroText1] = useState('');
  const [heroText2, setHeroText2] = useState('');

  // ===== 2. DOCUMENTS =====
  const [docsTitle, setDocsTitle] = useState('');
  const [docsSubtitle, setDocsSubtitle] = useState('');
  const [documents, setDocuments] = useState<DocumentForm[]>([emptyDocument()]);
  const updateDocument = (i: number, patch: Partial<DocumentForm>) =>
    setDocuments((prev) => prev.map((d, idx) => (idx === i ? { ...d, ...patch } : d)));

  // ===== 3. STANDARDS =====
  const [standardsTitle, setStandardsTitle] = useState('');
  const [standardsSubtitle, setStandardsSubtitle] = useState('');
  const [standards, setStandards] = useState<StandardCategoryForm[]>([emptyStandardCategory()]);
  const updateStandardCategory = (i: number, patch: Partial<StandardCategoryForm>) =>
    setStandards((prev) => prev.map((c, idx) => (idx === i ? { ...c, ...patch } : c)));
  const updateStandardItem = (i: number, j: number, text: string) =>
    setStandards((prev) =>
      prev.map((c, idx) =>
        idx === i
          ? { ...c, items: c.items.map((it, sj) => (sj === j ? { text } : it)) }
          : c
      )
    );
  const addStandardItem = (i: number) =>
    setStandards((prev) =>
      prev.map((c, idx) => (idx === i ? { ...c, items: [...c.items, emptyStandardItem()] } : c))
    );
  const removeStandardItem = (i: number, j: number) =>
    setStandards((prev) =>
      prev.map((c, idx) =>
        idx === i ? { ...c, items: c.items.filter((_, sj) => sj !== j) } : c
      )
    );

  // ===== 4. CONTACT =====
  const [contactTitle, setContactTitle] = useState('');
  const [contactText, setContactText] = useState('');
  const [contacts, setContacts] = useState<ContactItemForm[]>([emptyContactItem()]);
  const updateContact = (i: number, patch: Partial<ContactItemForm>) =>
    setContacts((prev) => prev.map((c, idx) => (idx === i ? { ...c, ...patch } : c)));

  // ===== 4b. Contact — блок «Нужна помощь?» =====
  const [helpTitle, setHelpTitle] = useState('');
  const [helpText, setHelpText] = useState('');
  const [helpPrimaryText, setHelpPrimaryText] = useState('');
  const [helpPrimaryLink, setHelpPrimaryLink] = useState('');
  const [helpSecondaryText, setHelpSecondaryText] = useState('');
  const [helpSecondaryLink, setHelpSecondaryLink] = useState('');

  const handleSave = () => {
    // TODO: отправить данные на сервер, когда backend будет готов.
    alert('Сохранение будет доступно после подключения API.');
  };

  return (
    <div className="pb-10">
      {/* Шапка редактора */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-brand-400 font-semibold mb-1">Страницы</p>
          <h1 className="text-2xl font-bold text-white">Редактор страницы «Нормативные документы»</h1>
          <p className="text-sm text-gray-500 mt-1">
            Блоки соответствуют структуре страницы /standards. Изменения вступят в силу после сохранения.
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
          subtitle="Вводный блок страницы"
          badge="Hero"
        >
          <TextField label="Плашка (бейдж)" value={heroBadge} onChange={setHeroBadge} />
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Заголовок (обычная часть)" value={heroTitleFirst} onChange={setHeroTitleFirst} />
            <TextField label="Заголовок (акцентная часть)" value={heroTitleAccent} onChange={setHeroTitleAccent} />
          </div>
          <TextareaField label="Абзац 1" value={heroText1} onChange={setHeroText1} rows={3} />
          <TextareaField label="Абзац 2" value={heroText2} onChange={setHeroText2} rows={3} />
        </AdminSectionCard>

        {/* ==================== 2. DOCUMENTS ==================== */}
        <AdminSectionCard
          title="2. Документы для скачивания"
          subtitle="Сетка карточек с файлами (PDF, DWG, RFA и т.д.)"
          badge="Документы"
        >
          <TextField label="Заголовок секции" value={docsTitle} onChange={setDocsTitle} />
          <TextareaField label="Подзаголовок секции" value={docsSubtitle} onChange={setDocsSubtitle} rows={2} />
          <RepeatableList
            title="Документы"
            addLabel="Добавить документ"
            onAdd={() => setDocuments([...documents, emptyDocument()])}
          >
            {documents.map((doc, i) => (
              <SubBlock key={i} title={`Документ ${i + 1}`}>
                <TextField label="Название" value={doc.title} onChange={(v) => updateDocument(i, { title: v })} />
                <div className="grid sm:grid-cols-3 gap-3">
                  <TextField
                    label="Формат"
                    value={doc.format}
                    onChange={(v) => updateDocument(i, { format: v })}
                    hint="PDF, DWG, RFA…"
                  />
                  <TextField
                    label="Размер"
                    value={doc.size}
                    onChange={(v) => updateDocument(i, { size: v })}
                    hint="например: 15.2 МБ"
                  />
                  <TextField
                    label="Иконка"
                    value={doc.icon}
                    onChange={(v) => updateDocument(i, { icon: v })}
                    hint="file-text, wrench, book-open…"
                  />
                </div>
                <TextField
                  label="URL файла"
                  value={doc.url}
                  onChange={(v) => updateDocument(i, { url: v })}
                  hint="/images/katalog/... или https://..."
                />
              </SubBlock>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* ==================== 3. STANDARDS ==================== */}
        <AdminSectionCard
          title="3. Нормативно-техническая база"
          subtitle="Категории стандартов со списками документов"
          badge="Стандарты"
        >
          <TextField label="Заголовок секции" value={standardsTitle} onChange={setStandardsTitle} />
          <TextareaField label="Подзаголовок секции" value={standardsSubtitle} onChange={setStandardsSubtitle} rows={2} />
          <RepeatableList
            title="Категории"
            addLabel="Добавить категорию"
            onAdd={() => setStandards([...standards, emptyStandardCategory()])}
          >
            {standards.map((cat, i) => (
              <SubBlock key={i} title={`Категория ${i + 1}`}>
                <div className="grid sm:grid-cols-2 gap-3">
                  <TextField
                    label="Название категории"
                    value={cat.title}
                    onChange={(v) => updateStandardCategory(i, { title: v })}
                  />
                  <TextField
                    label="Иконка"
                    value={cat.icon}
                    onChange={(v) => updateStandardCategory(i, { icon: v })}
                    hint="shield, book-open, wrench…"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-400">Пункты списка</p>
                  {cat.items.map((item, j) => (
                    <div key={j} className="grid grid-cols-[1fr_auto] gap-2 items-start">
                      <textarea
                        value={item.text}
                        onChange={(e) => updateStandardItem(i, j, e.target.value)}
                        placeholder={`Пункт ${j + 1}`}
                        rows={2}
                        className="bg-gray-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50 resize-none"
                      />
                      <button
                        type="button"
                        onClick={() => removeStandardItem(i, j)}
                        className="text-gray-500 hover:text-brand-400 text-sm px-1 mt-1"
                        aria-label="Удалить"
                      >✕</button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addStandardItem(i)}
                    className="text-xs text-brand-400 hover:text-brand-300"
                  >
                    + Добавить пункт
                  </button>
                </div>
              </SubBlock>
            ))}
          </RepeatableList>
        </AdminSectionCard>

        {/* ==================== 4. CONTACT ==================== */}
        <AdminSectionCard
          title="4. Контактный блок"
          subtitle="Контакты отдела и блок «Нужна помощь?» с кнопками"
          badge="Контакты"
        >
          <TextField label="Заголовок блока" value={contactTitle} onChange={setContactTitle} />
          <TextareaField label="Текст под заголовком" value={contactText} onChange={setContactText} rows={2} />

          <RepeatableList
            title="Пункты контактов"
            addLabel="Добавить контакт"
            onAdd={() => setContacts([...contacts, emptyContactItem()])}
          >
            {contacts.map((c, i) => (
              <SubBlock key={i} title={`Контакт ${i + 1}`}>
                <div className="grid sm:grid-cols-2 gap-3">
                  <TextField
                    label="Иконка"
                    value={c.icon}
                    onChange={(v) => updateContact(i, { icon: v })}
                    hint="phone, map-pin, mail, clock…"
                  />
                  <TextField
                    label="Подпись"
                    value={c.label}
                    onChange={(v) => updateContact(i, { label: v })}
                    hint="например: Телефоны отдела продаж"
                  />
                </div>
                <TextField label="Значение (строка 1)" value={c.value} onChange={(v) => updateContact(i, { value: v })} />
                <TextField label="Значение (строка 2)" value={c.value2} onChange={(v) => updateContact(i, { value2: v })} hint="необязательно" />
                <TextField
                  label="Ссылка (tel:/mailto:/URL)"
                  value={c.link}
                  onChange={(v) => updateContact(i, { link: v })}
                  hint="например: tel:+375171234567 или mailto:minsk@izocom.by"
                />
              </SubBlock>
            ))}
          </RepeatableList>

          <SubBlock title="Блок «Нужна помощь?»">
            <TextField label="Заголовок" value={helpTitle} onChange={setHelpTitle} />
            <TextareaField label="Текст" value={helpText} onChange={setHelpText} rows={3} />
            <div className="grid sm:grid-cols-2 gap-3">
              <TextField label="Текст основной кнопки" value={helpPrimaryText} onChange={setHelpPrimaryText} />
              <TextField label="Ссылка основной кнопки" value={helpPrimaryLink} onChange={setHelpPrimaryLink} />
              <TextField label="Текст вторичной кнопки" value={helpSecondaryText} onChange={setHelpSecondaryText} />
              <TextField label="Ссылка вторичной кнопки" value={helpSecondaryLink} onChange={setHelpSecondaryLink} />
            </div>
          </SubBlock>
        </AdminSectionCard>
      </div>
    </div>
  );
}