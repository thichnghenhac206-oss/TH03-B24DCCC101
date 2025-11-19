import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1><Link to="/">Quản Lý Sản Phẩm</Link></h1>
        <nav>
          <Link to="/">Trang Chủ</Link>
          <Link to="/add">Thêm Sản Phẩm</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;