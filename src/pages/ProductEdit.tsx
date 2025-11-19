import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductForm from '../components/product/ProductForm';
import { Product } from '../context/types';
import Button from '../components/common/Button';

const ProductEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const productId = Number(id);
  const { state: { products }, dispatch } = useProducts();

  const product = products.find(p => p.id === productId);

  const handleUpdateProduct = (updatedData: Product | Omit<Product, 'id'>) => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: updatedData as Product });
    alert(`Cập nhật sản phẩm ID: ${productId} thành công!`);
    navigate('/');
  };

  if (!product) {
    return <div className="container"><h2>Sản phẩm không tồn tại!</h2><Button onClick={() => navigate('/')}>Quay lại</Button></div>;
  }

  return (
    <div className="container">
      <h2>Chỉnh sửa Sản phẩm: {product.ten}</h2>
      <ProductForm initialData={product} onSubmit={handleUpdateProduct} isEdit={true} />
    </div>
  );
};

export default ProductEdit;