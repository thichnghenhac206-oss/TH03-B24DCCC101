import { Product, DanhMuc } from '../context/types';

export const danhMucs: DanhMuc[] = ['Điện tử', 'Quần áo', 'Đồ ăn', 'Sách', 'Khác'];

export const formatCurrency = (amount: number): string => {
  return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};