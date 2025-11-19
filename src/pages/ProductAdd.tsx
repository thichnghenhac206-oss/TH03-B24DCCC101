import React from 'react';
import ProductForm from '../components/product/ProductForm';
import { useProducts } from '../context/ProductContext';
import { Product } from '../context/types';
import { useNavigate } from 'react-router-dom';

const ProductAdd: React.FC = () => {
  const { dispatch } = useProducts();
  const navigate = useNavigate();

  const handleAddProduct = (product: Omit<Product, 'id'>) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product as Product }); // Thêm id trong reducer
    alert('Thêm sản phẩm thành công!');
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Thêm Sản Phẩm Mới</h2>
      <ProductForm onSubmit={handleAddProduct} isEdit={false} />
    </div>
  );
};

export default ProductAdd;