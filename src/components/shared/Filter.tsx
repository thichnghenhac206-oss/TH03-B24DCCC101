import React from 'react';
import { danhMucs } from '../../utils/helpers';
import { DanhMuc } from '../../context/types';

interface FilterProps {
  category: DanhMuc | 'Tất cả';
  onCategoryChange: (category: DanhMuc | 'Tất cả') => void;
  minPrice: number | '';
  maxPrice: number | '';
  onPriceChange: (name: 'minPrice' | 'maxPrice', value: number | '') => void;
}

const Filter: React.FC<FilterProps> = ({ category, onCategoryChange, minPrice, maxPrice, onPriceChange }) => {
  return (
    <>
      <div className="filter-select">
        <select
        title='Lọc theo Danh mục'
          value={category}
          onChange={(e) => onCategoryChange(e.target.value as DanhMuc | 'Tất cả')}
        >
          <option value="Tất cả">Lọc theo Danh mục</option>
          {danhMucs.map((dm) => (
            <option key={dm} value={dm}>{dm}</option>
          ))}
        </select>
      </div>

      <div className="price-filter">
        <input
          type="number"
          placeholder="Giá tối thiểu"
          value={minPrice}
          onChange={(e) => onPriceChange('minPrice', e.target.value === '' ? '' : Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Giá tối đa"
          value={maxPrice}
          onChange={(e) => onPriceChange('maxPrice', e.target.value === '' ? '' : Number(e.target.value))}
        />
      </div>
    </>
  );
};

export default Filter;