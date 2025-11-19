import React, { useState } from 'react';
import { Product } from '../../context/types';
import Button from '../common/Button';
import { formatCurrency } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import Modal from '../common/Modal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { dispatch } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_PRODUCT', payload: product.id });
    setIsModalOpen(false);
  };

  return (
    <div className="product-card">
      <div>
        <h3>{product.ten}</h3>
        <p><strong>Danh mục:</strong> {product.danhMuc}</p>
        <p><strong>Giá:</strong> {formatCurrency(product.gia)}</p>
        <p><strong>Số lượng:</strong> {product.soLuong}</p>
      </div>
      <div className="actions">
        <Button variant="primary" onClick={() => navigate(`/products/${product.id}`)}>
          Chi tiết
        </Button>
        <Button variant="secondary" onClick={() => navigate(`/edit/${product.id}`)}>
          Sửa
        </Button>
        <Button variant="danger" onClick={() => setIsModalOpen(true)}>
          Xóa
        </Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        title="Xác nhận xóa"
      >
        Bạn có chắc chắn muốn xóa sản phẩm **{product.ten}** không?
      </Modal>
    </div>
  );
};

export default ProductCard;