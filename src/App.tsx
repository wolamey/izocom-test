import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import DocumentsPage from './pages/DocumentsPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import RequestPage from './pages/RequestPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
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
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/request" element={<RequestPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
