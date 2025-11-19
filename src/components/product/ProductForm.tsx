import React, { useState, useEffect } from 'react';
import { Product, DanhMuc } from '../../context/types';
import Button from '../common/Button';
import { danhMucs } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';

interface ProductFormProps {
  initialData?: Product;
  onSubmit: (product: Omit<Product, 'id'> | Product) => void;
  isEdit: boolean;
}

interface FormErrors {
  ten?: string;
  gia?: string;
  soLuong?: string;
  danhMuc?: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialData, onSubmit, isEdit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Omit<Product, 'id'> | Product>(
    initialData || {
      ten: '',
      danhMuc: 'Điện tử' as DanhMuc,
      gia: 0,
      soLuong: 0,
      moTa: '',
    }
  );
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: (name === 'gia' || name === 'soLuong') ? (value === '' ? '' : Number(value)) : value
    }));
    
    // Clear error khi người dùng bắt đầu nhập
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Tên sản phẩm
    if (!formData.ten || formData.ten.trim().length < 3) {
      newErrors.ten = 'Tên sản phẩm bắt buộc và tối thiểu 3 ký tự.';
    }

    // Giá
    if (typeof formData.gia !== 'number' || formData.gia <= 0) {
      newErrors.gia = 'Giá bắt buộc và phải là số dương.';
    }

    // Số lượng
    if (typeof formData.soLuong !== 'number' || formData.soLuong <= 0 || !Number.isInteger(formData.soLuong)) {
      newErrors.soLuong = 'Số lượng bắt buộc và phải là số nguyên dương.';
    }

    // Danh mục
    if (!formData.danhMuc || !danhMucs.includes(formData.danhMuc)) {
      newErrors.danhMuc = 'Vui lòng chọn danh mục hợp lệ.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      // Không cần reset form nếu là edit
      if (!isEdit) {
        setFormData({
          ten: '',
          danhMuc: 'Điện tử' as DanhMuc,
          gia: 0,
          soLuong: 0,
          moTa: '',
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="ten">Tên sản phẩm:</label>
        <input
          type="text"
          id="ten"
          name="ten"
          value={formData.ten}
          onChange={handleChange}
        />
        {errors.ten && <p className="error-message">{errors.ten}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="danhMuc">Danh mục:</label>
        <select
          id="danhMuc"
          name="danhMuc"
          value={formData.danhMuc}
          onChange={handleChange}
        >
          <option value="">-- Chọn danh mục --</option>
          {danhMucs.map(dm => (
            <option key={dm} value={dm}>{dm}</option>
          ))}
        </select>
        {errors.danhMuc && <p className="error-message">{errors.danhMuc}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="gia">Giá:</label>
        <input
          type="number"
          id="gia"
          name="gia"
          value={formData.gia === 0 && isEdit ? initialData?.gia : formData.gia}
          onChange={handleChange}
          min="0"
        />
        {errors.gia && <p className="error-message">{errors.gia}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="soLuong">Số lượng:</label>
        <input
          type="number"
          id="soLuong"
          name="soLuong"
          value={formData.soLuong === 0 && isEdit ? initialData?.soLuong : formData.soLuong}
          onChange={handleChange}
          min="1"
          step="1"
        />
        {errors.soLuong && <p className="error-message">{errors.soLuong}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="moTa">Mô tả:</label>
        <textarea
          id="moTa"
          name="moTa"
          value={formData.moTa}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <div className="form-actions">
        <Button type="submit">{isEdit ? 'Cập nhật' : 'Thêm Sản Phẩm'}</Button>
        <Button type="button" variant="secondary" onClick={() => navigate('/')}>
          Hủy
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;