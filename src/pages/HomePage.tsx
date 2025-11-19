import React, { useState, useMemo } from 'react';
import { useProducts } from '../context/ProductContext';
import { FilterState, DanhMuc } from '../context/types';
import SearchBar from '../components/shared/SearchBar';
import Filter from '../components/shared/Filter';
import ProductList from '../components/product/ProductList';
import Pagination from '../components/shared/Pagination';

const ITEMS_PER_PAGE = 6;

const HomePage: React.FC = () => {
  const { state: { products } } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [filterState, setFilterState] = useState<FilterState>({
    search: '',
    category: 'Tất cả',
    minPrice: '',
    maxPrice: '',
  });

  const handleFilterChange = (name: keyof Omit<FilterState, 'search'>, value: any) => {
    setFilterState(prev => ({ ...prev, [name]: value }));
    setCurrentPage(1); // Reset về trang 1 khi filter thay đổi
  };

  const handleSearchChange = (search: string) => {
    setFilterState(prev => ({ ...prev, search }));
    setCurrentPage(1); // Reset về trang 1 khi search thay đổi
  }

  // Lọc và Tìm kiếm
  const filteredProducts = useMemo(() => {
    let result = products;

    // 1. Lọc theo Danh mục
    if (filterState.category !== 'Tất cả') {
      result = result.filter(p => p.danhMuc === filterState.category);
    }

    // 2. Lọc theo Khoảng giá
    const min = filterState.minPrice === '' ? -Infinity : filterState.minPrice;
    const max = filterState.maxPrice === '' ? Infinity : filterState.maxPrice;
    result = result.filter(p => p.gia >= min && p.gia <= max);
    
    // 3. Tìm kiếm theo Tên
    if (filterState.search.trim()) {
      const searchLower = filterState.search.trim().toLowerCase();
      result = result.filter(p => p.ten.toLowerCase().includes(searchLower));
    }

    return result;
  }, [products, filterState]);

  // Phân trang
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container">
      <h2>Danh sách Sản phẩm</h2>

      <div className="search-filter-area">
        <SearchBar search={filterState.search} onSearchChange={handleSearchChange} />
        <Filter
          category={filterState.category}
          onCategoryChange={(value) => handleFilterChange('category', value as DanhMuc | 'Tất cả')}
          minPrice={filterState.minPrice}
          maxPrice={filterState.maxPrice}
          onPriceChange={(name, value) => handleFilterChange(name, value)}
        />
      </div>

      <ProductList products={paginatedProducts} />
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredProducts.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;