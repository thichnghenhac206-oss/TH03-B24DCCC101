import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import { ProductProvider } from './context/ProductContext';
import './App.css'; // Import global CSS

const App: React.FC = () => {
  return (
    <Router>
      <ProductProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/add" element={<ProductAdd />} />
          <Route path="/edit/:id" element={<ProductEdit />} />
          <Route path="*" element={<h2 className="container">404 - Không tìm thấy trang</h2>} />
        </Routes>
      </ProductProvider>
    </Router>
  );
};

export default App;