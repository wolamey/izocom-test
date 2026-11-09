// Заглушки разделов админ-панели (Каталог, Новости) — будут реализованы позже.
import { AdminSectionCard } from '../../components/admin/fields';

function ComingSoon({ title, description }: { title: string; description: string }) {
  return (
    <div className="pb-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <AdminSectionCard title="Раздел в разработке" subtitle="Редактирование появится после подключения API">
        <p className="text-sm text-gray-400">
          Этот раздел находится в процессе проектирования. Здесь будет управление соответствующим содержимым сайта.
        </p>
      </AdminSectionCard>
    </div>
  );
}

export function AdminCatalogCategoriesPage() {
  return (
    <ComingSoon
      title="Каталог — Категории"
      description="Управление категориями продукции: названия, описания, иконки, порядок"
    />
  );
}

export function AdminCatalogProductsPage() {
  return (
    <ComingSoon
      title="Каталог — Товары"
      description="Управление товарами: название, описание, характеристики, размеры, документы, изображения"
    />
  );
}

export function AdminNewsListPage() {
  return (
    <ComingSoon
      title="Новости — Список"
      description="Управление списком новостей: создание, редактирование, публикация, удаление"
    />
  );
}

export function AdminNewsCreatePage() {
  return (
    <ComingSoon
      title="Новости — Добавить новость"
      description="Форма создания новости: заголовок, дата, категория, изображение, текст"
    />
  );
}

// Универсальная заглушка для остальных страниц сайта
export function AdminPlaceholderPage({ title, description }: { title: string; description: string }) {
  return <ComingSoon title={title} description={description} />;
}
