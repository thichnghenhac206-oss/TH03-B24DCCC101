import React from 'react';

interface SearchBarProps {
  search: string;
  onSearchChange: (search: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Tìm kiếm theo tên sản phẩm..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;