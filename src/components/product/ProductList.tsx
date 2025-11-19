import React from 'react';
import { Product } from '../../context/types';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (products.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Không tìm thấy sản phẩm nào.</p>;
  }

  return (
    <div className="product-list-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;