export type DanhMuc = 'Điện tử' | 'Quần áo' | 'Đồ ăn' | 'Sách' | 'Khác';

export interface Product {
  id: number;
  ten: string;
  danhMuc: DanhMuc;
  gia: number;
  soLuong: number;
  moTa: string;
  hinhAnh: string; // <--- ĐÃ THÊM THUỘC TÍNH HÌNH ẢNH VÀO ĐÂY
}

// State
export interface ProductState {
  products: Product[];
  nextId: number;
}

// Actions
export type ProductAction =
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'UPDATE_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: number };

// Context
export interface ProductContextType {
  state: ProductState;
  dispatch: React.Dispatch<ProductAction>;
}

// Filters & Search
export interface FilterState {
  search: string;
  category: DanhMuc | 'Tất cả';
  minPrice: number | '';
  maxPrice: number | '';
}