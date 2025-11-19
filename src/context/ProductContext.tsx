import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { initialProducts } from '../data';
import { Product, ProductState, ProductAction, ProductContextType } from './types';

// Tìm id lớn nhất trong dữ liệu mẫu để bắt đầu đếm nextId
const maxId = initialProducts.reduce((max, product) => Math.max(max, product.id), 0);

const initialState: ProductState = {
  products: initialProducts,
  nextId: maxId + 1,
};

// Reducer Function
const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, { ...action.payload, id: state.nextId }],
        nextId: state.nextId + 1,
      };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(p =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload),
      };
    default:
      return state;
  }
};

// Tạo Context
export const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Context Provider Component
export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom Hook để sử dụng Context
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};