import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { formatCurrency } from '../utils/helpers';
import Button from '../components/common/Button';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const productId = Number(id);
  const { state: { products } } = useProducts();

  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div className="container"><h2>Sản phẩm không tồn tại!</h2><Button onClick={() => navigate('/')}>Quay lại</Button></div>;
  }

  return (
    <div className="container">
      <h2>Chi tiết Sản phẩm: {product.ten}</h2>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        
        {/* 🟢 THẺ HÌNH ẢNH ĐÃ ĐƯỢC THÊM VÀO ĐÂY 🟢 */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img 
                src={product.hinhAnh} 
                alt={product.ten} 
                // Cung cấp kích thước lớn hơn cho trang chi tiết
                style={{ maxWidth: '400px', height: 'auto', borderRadius: '8px', border: '1px solid #ccc' }}
            />
        </div>
        {/* ------------------------------------------- */}

        <p><strong>ID:</strong> {product.id}</p>
        <p><strong>Tên sản phẩm:</strong> {product.ten}</p>
        <p><strong>Danh mục:</strong> {product.danhMuc}</p>
        <p><strong>Giá:</strong> {formatCurrency(product.gia)}</p>
        <p><strong>Số lượng:</strong> {product.soLuong}</p>
        <p><strong>Mô tả:</strong> {product.moTa}</p>
      </div>
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <Button onClick={() => navigate(`/edit/${product.id}`)}>Chỉnh sửa</Button>
        <Button variant="secondary" onClick={() => navigate('/')}>Quay lại</Button>
      </div>
    </div>
  );
};

export default ProductDetail;