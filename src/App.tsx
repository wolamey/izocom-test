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
import RequestPage from './pages/RequestPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <CursorFollower />
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
            <Route path="/request" element={<RequestPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
