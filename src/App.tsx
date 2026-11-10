import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import DocumentsPage from './pages/DocumentsPage';
import AboutPage from './pages/AboutPage';
import EnergyEfficiencyPage from './pages/EnergyEfficiencyPage';
import AllAboutPipesPage from './pages/AllAboutPipesPage';
import StandardsPage from './pages/StandardsPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ContactsPage from './pages/ContactsPage';
import SalesDepartmentPage from './pages/SalesDepartmentPage';
import SupplyDepartmentPage from './pages/SupplyDepartmentPage';
import DealersPage from './pages/DealersPage';
import AccountingPage from './pages/AccountingPage';
import ClientDocumentsPage from './pages/ClientDocumentsPage';
import ClientDocumentDetailPage from './pages/ClientDocumentDetailPage';
import RequestPage from './pages/RequestPage';
import ScrollToTop from './components/ScrollToTop';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminLayout from './components/admin/AdminLayout';
import AdminHomePageEditorPage from './pages/admin/AdminHomePageEditorPage';
import AdminAboutPageEditorPage from './pages/admin/AdminAboutPageEditorPage';
import {
  AdminCatalogCategoriesPage,
  AdminCatalogProductsPage,
  AdminNewsListPage,
  AdminNewsCreatePage,
  AdminPlaceholderPage,
} from './pages/admin/AdminPlaceholderPages';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <CursorFollower />
      <Routes>
        {/* Админ-панель — без шапки и подвала основной части сайта */}
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHomePageEditorPage />} />
          <Route path="home-page" element={<AdminHomePageEditorPage />} />
          {/* Страницы сайта */}
          <Route path="pages/about" element={<AdminAboutPageEditorPage />} />
          <Route path="pages/energy" element={<AdminPlaceholderPage title="Энергоэффективность" description="Редактирование страницы «Энергоэффективность»" />} />
          <Route path="pages/about-pipes" element={<AdminPlaceholderPage title="Всё о трубах" description="Редактирование страницы «Всё о трубах»" />} />
          <Route path="pages/standards" element={<AdminPlaceholderPage title="Стандарты" description="Редактирование страницы «Стандарты»" />} />
          <Route path="pages/projects" element={<AdminPlaceholderPage title="Проекты" description="Редактирование страницы «Проекты» и карточек проектов" />} />
          <Route path="pages/documents" element={<AdminPlaceholderPage title="Документы" description="Редактирование страницы «Документы»" />} />
          <Route path="pages/contacts" element={<AdminPlaceholderPage title="Контакты" description="Редактирование страницы «Контакты»" />} />
          <Route path="pages/dealers" element={<AdminPlaceholderPage title="Представительства" description="Редактирование карточек дилеров и представительств" />} />
          <Route path="pages/request" element={<AdminPlaceholderPage title="Страница заявки" description="Редактирование страницы «Заявка»" />} />
          {/* Каталог */}
          <Route path="catalog/categories" element={<AdminCatalogCategoriesPage />} />
          <Route path="catalog/products" element={<AdminCatalogProductsPage />} />
          {/* Новости */}
          <Route path="news/list" element={<AdminNewsListPage />} />
          <Route path="news/create" element={<AdminNewsCreatePage />} />
        </Route>

        {/* Пользовательская часть сайта */}
        <Route
          path="/*"
          element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/products/:categoryId" element={<ProductsPage />} />
                  <Route path="/products/:categoryId/:productId" element={<ProductPage />} />
                  <Route path="/documents" element={<DocumentsPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/energy" element={<EnergyEfficiencyPage />} />
                  <Route path="/about-pipes" element={<AllAboutPipesPage />} />
                  <Route path="/standards" element={<StandardsPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/news/:slug" element={<NewsDetailPage />} />
                  <Route path="/contacts" element={<ContactsPage />} />
                  <Route path="/contacts/sales" element={<SalesDepartmentPage />} />
                  <Route path="/contacts/supply" element={<SupplyDepartmentPage />} />
                  <Route path="/contacts/dealers" element={<DealersPage />} />
                  <Route path="/contacts/accounting" element={<AccountingPage />} />
                  <Route path="/documents/client" element={<ClientDocumentsPage />} />
                  <Route path="/documents/client/:slug" element={<ClientDocumentDetailPage />} />
                  <Route path="/request" element={<RequestPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}
