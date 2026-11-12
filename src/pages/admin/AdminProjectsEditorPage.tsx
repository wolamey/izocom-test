// Редактор страницы «Наши объекты» (главная портфолио).
// Структура соответствует ProjectsPage.tsx: Hero, сетка проектов, Stats.
// Управление самими проектами — в AdminProjectsListPage / AdminProjectEditorPage.
import { useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AdminSectionCard, TextField, TextareaField, RepeatableList } from '../../components/admin/fields';

interface StatForm {
  value: string;
  label: string;
}

const emptyStat = (): StatForm => ({ value: '', label: '' });

function SubBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-gray-900/60 border border-white/10 rounded-xl p-4">
      <p className="text-sm font-semibold text-gray-200 mb-3">{title}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export default function AdminProjectsEditorPage() {
  // ===== 1. Hero =====
  const [heroBadge, setHeroBadge] = useState('');
  const [heroTitleFirst, setHeroTitleFirst] = useState('');
  const [heroTitleAccent, setHeroTitleAccent] = useState('');
  const [heroText1, setHeroText1] = useState('');
  const [heroText2, setHeroText2] = useState('');

  // ===== 2. Настройки сетки проектов =====
  // (Заголовки не отображаются на клиенте, но пригодятся при расширении.)
  const [gridTitle, setGridTitle] = useState('');
  const [gridSubtitle, setGridSubtitle] = useState('');
  const [projectsPerPage, setProjectsPerPage] = useState('');
  const [loadMoreText, setLoadMoreText] = useState('');
  const [loadMoreEnabled, setLoadMoreEnabled] = useState(false);

  // ===== 3. Stats =====
  const [statsTitle, setStatsTitle] = useState('');
  const [statsSubtitle, setStatsSubtitle] = useState('');
  const [stats, setStats] = useState<StatForm[]>([
    emptyStat(), emptyStat(), emptyStat(), emptyStat(),
  ]);
  const updateStat = (i: number, patch: Partial<StatForm>) =>
    setStats((prev) => prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)));

  const handleSave = () => alert('Сохранение будет доступно после подключения API.');

  return (
    <div className="pb-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-brand-400 font-semibold mb-1">Страницы</p>
          <h1 className="text-2xl font-bold text-white">Редактор страницы «Наши объекты»</h1>
          <p className="text-sm text-gray-500 mt-1">
            Общие настройки страницы портфолио. Управление проектами — в разделе «Проекты».
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            to="/admin/pages/projects/items"
            className="shrink-0 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-lg px-4 py-2.5 transition-colors"
          >
            Перейти к проектам →
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
        <AdminSectionCard title="1. Hero-блок" subtitle="Верхняя секция страницы портфолио" badge="Hero">
          <TextField label="Плашка (бейдж)" value={heroBadge} onChange={setHeroBadge} />
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Заголовок (обычная часть)" value={heroTitleFirst} onChange={setHeroTitleFirst} />
            <TextField label="Заголовок (акцентная часть)" value={heroTitleAccent} onChange={setHeroTitleAccent} />
          </div>
          <TextareaField label="Абзац 1" value={heroText1} onChange={setHeroText1} rows={3} />
          <TextareaField label="Абзац 2" value={heroText2} onChange={setHeroText2} rows={3} />
        </AdminSectionCard>

        {/* 2. Сетка проектов */}
        <AdminSectionCard
          title="2. Сетка проектов"
          subtitle="Настройки отображения списка проектов (заголовки, пагинация)"
          badge="Лента"
        >
          <TextField label="Заголовок секции (опционально)" value={gridTitle} onChange={setGridTitle} />
          <TextareaField label="Подзаголовок секции (опционально)" value={gridSubtitle} onChange={setGridSubtitle} rows={2} />
          <TextField
            label="Проектов на странице"
            value={projectsPerPage}
            onChange={setProjectsPerPage}
            hint="например: 9"
          />
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
        </AdminSectionCard>

        {/* 3. STATS */}
        <AdminSectionCard
          title="3. Блок статистики"
          subtitle="Сетка показателей под проектами"
          badge="Цифры"
        >
          <TextField label="Заголовок блока (опционально)" value={statsTitle} onChange={setStatsTitle} />
          <TextareaField label="Подзаголовок блока (опционально)" value={statsSubtitle} onChange={setStatsSubtitle} rows={2} />
          <RepeatableList
            title="Показатели"
            addLabel="Добавить показатель"
            onAdd={() => setStats([...stats, emptyStat()])}
          >
            {stats.map((s, i) => (
              <SubBlock key={i} title={`Показатель ${i + 1}`}>
                <div className="grid sm:grid-cols-2 gap-3">
                  <TextField label="Значение" value={s.value} onChange={(v) => updateStat(i, { value: v })} hint="например: 500+" />
                  <TextField label="Подпись" value={s.label} onChange={(v) => updateStat(i, { label: v })} />
                </div>
              </SubBlock>
            ))}
          </RepeatableList>
        </AdminSectionCard>
      </div>
    </div>
  );
}