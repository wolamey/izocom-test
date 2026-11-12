import { Link } from 'react-router-dom';
import { AdminSectionCard } from '../../components/admin/fields';

// В будущем — загрузка с API. Сейчас — пустой массив-заглушка.
interface ProjectRow {
  id: string;        // slug
  title: string;
  category: string;
  date: string;
  status: 'published' | 'draft';
}

const mockRows: ProjectRow[] = [];

export default function AdminProjectsListPage() {
  const rows = mockRows;

  return (
    <div className="pb-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-brand-400 font-semibold mb-1">Наши объекты</p>
          <h1 className="text-2xl font-bold text-white">Проекты</h1>
          <p className="text-sm text-gray-500 mt-1">
            Управление проектами портфолио: создание, редактирование, публикация
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            to="/admin/pages/projects"
            className="shrink-0 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-lg px-4 py-2.5 transition-colors"
          >
            ← Настройки страницы
          </Link>
          <Link
            to="/admin/pages/projects/items/create"
            className="shrink-0 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg px-5 py-2.5 transition-colors"
          >
            + Создать проект
          </Link>
        </div>
      </div>

      <AdminSectionCard
        title="Все проекты"
        subtitle={rows.length === 0 ? 'Пока нет проектов — создайте первый' : `Всего: ${rows.length}`}
      >
        {rows.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">Проекты пока не созданы.</p>
            <Link
              to="/admin/pages/projects/items/create"
              className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg px-5 py-2.5 transition-colors"
            >
              Создать первый проект
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-400 border-b border-white/10">
                  <th className="py-2 pr-4">Название</th>
                  <th className="py-2 pr-4">Slug</th>
                  <th className="py-2 pr-4">Категория</th>
                  <th className="py-2 pr-4">Дата</th>
                  <th className="py-2 pr-4">Статус</th>
                  <th className="py-2 pr-4">Действия</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-b border-white/5">
                    <td className="py-2 pr-4 text-white">{r.title}</td>
                    <td className="py-2 pr-4 text-gray-500">{r.id}</td>
                    <td className="py-2 pr-4 text-gray-400">{r.category}</td>
                    <td className="py-2 pr-4 text-gray-400">{r.date}</td>
                    <td className="py-2 pr-4">
                      <span className={`px-2 py-0.5 rounded-full text-xs ${r.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {r.status === 'published' ? 'Опубликован' : 'Черновик'}
                      </span>
                    </td>
                    <td className="py-2 pr-4">
                      <Link
                        to={`/admin/pages/projects/items/${r.id}`}
                        className="text-brand-400 hover:underline"
                      >
                        Редактировать
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </AdminSectionCard>
    </div>
  );
}