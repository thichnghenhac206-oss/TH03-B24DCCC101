import { Product } from '../src/context/types';

export const initialProducts: Product[] = [
  { 
    id: 1, 
    ten: 'iPhone 15 Pro Max', 
    danhMuc: 'Điện tử', 
    gia: 35000000, 
    soLuong: 5, 
    moTa: 'Điện thoại thông minh cao cấp nhất.',
    // Ảnh mẫu điện thoại
    hinhAnh: 'https://cdn.tgdd.vn/News/1548159/thuc-te-hinh-anh-iphone-15-pro-max-anh-iphone-15-1(1)-800x450-1.jpg' 
  },
  { 
    id: 2, 
    ten: 'Áo Polo Nam Trắng', 
    danhMuc: 'Quần áo', 
    gia: 350000, 
    soLuong: 50, 
    moTa: 'Áo polo cotton thoáng mát, dễ mặc.',
    // Ảnh mẫu quần áo
    hinhAnh: 'https://pos.nvncdn.com/778773-105877/ps/20230529_5xEM0bU9mm.jpeg?v=1685354812' 
  },
  { 
    id: 3, 
    ten: 'Bánh Quy Bơ Đan Mạch', 
    danhMuc: 'Đồ ăn', 
    gia: 120000, 
    soLuong: 20, 
    moTa: 'Hộp bánh quy bơ truyền thống.',
    // Ảnh mẫu đồ ăn (bánh)
    hinhAnh: 'https://cdn.tgdd.vn/Files/2020/01/07/1230357/banh-quy-bo-o-t-royal-danish-dang-cap-hoang-gia-202001071109182113.jpg' 
  },
  { 
    id: 4, 
    ten: 'Đắc Nhân Tâm', 
    danhMuc: 'Sách', 
    gia: 100000, 
    soLuong: 30, 
    moTa: 'Cuốn sách kinh điển về phát triển bản thân.', 
    // Ảnh mẫu sách
    hinhAnh: 'https://nxbhcm.com.vn/Image/Biasach/dacnhantam86.jpg' 
  },
  { 
    id: 5, 
    ten: 'Ổ Cứng SSD 1TB', 
    danhMuc: 'Điện tử', 
    gia: 1500000, 
    soLuong: 15, 
    moTa: 'Tăng tốc độ máy tính đáng kể.', 
    // Ảnh mẫu linh kiện điện tử
    hinhAnh: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/o/-/o-cung-di-dong-ssd-kingston-xs1000-usb-3-2-gen-2-den-1tb_3_.png' 
  },
  { 
    id: 6, 
    ten: 'Váy Công Sở A-line', 
    danhMuc: 'Quần áo', 
    gia: 550000, 
    soLuong: 25, 
    moTa: 'Thiết kế thanh lịch cho môi trường công sở.', 
    // Ảnh mẫu váy
    hinhAnh: 'https://www.acfc.com.vn/acfc_wp/wp-content/uploads/2023/09/chan-vay-cong-so-4-1024x1024.webp' 
  },
  { 
    id: 7, 
    ten: 'Sữa Tươi Tiệt Trùng', 
    danhMuc: 'Đồ ăn', 
    gia: 30000, 
    soLuong: 100, 
    moTa: 'Sữa tươi nguyên kem 100%.', 
    // Ảnh mẫu sữa
    hinhAnh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUG5PDvZkQszfvU4NMDmJlaDi-nxIciLSdpw&s' 
  },
  { 
    id: 8, 
    ten: 'Nhà Giả Kim', 
    danhMuc: 'Sách', 
    gia: 85000, 
    soLuong: 40, 
    moTa: 'Tiểu thuyết nổi tiếng của Paulo Coelho.', 
    // Ảnh mẫu tiểu thuyết
    hinhAnh: 'https://upload.wikimedia.org/wikipedia/vi/9/9c/Nh%C3%A0_gi%E1%BA%A3_kim_%28s%C3%A1ch%29.jpg' 
  },
  { 
    id: 9, 
    ten: 'Bàn Phím Cơ Gaming', 
    danhMuc: 'Khác', 
    gia: 950000, 
    soLuong: 12, 
    moTa: 'Bàn phím cơ với đèn LED RGB.', 
    // Ảnh mẫu bàn phím
    hinhAnh: 'https://cdn.tgdd.vn/Products/Images/4547/314636/ban-phim-co-day-gaming-rapoo-v50s-1-750x500.jpg' 
  },
  { 
    id: 10, 
    ten: 'Máy Tính Xách Tay Dell XPS', 
    danhMuc: 'Điện tử', 
    gia: 28000000, 
    soLuong: 8, 
    moTa: 'Laptop mỏng nhẹ, hiệu năng cao.', 
    // Ảnh mẫu laptop
    hinhAnh: 'https://tanphat.com.vn/media/product/2875_laptop_dell_xps_13_plus_9320_5cg57_oled.jpg' 
  },
  { 
    id: 11, 
    ten: 'Giày Thể Thao Nike', 
    danhMuc: 'Quần áo', 
    gia: 2000000, 
    soLuong: 18, 
    moTa: 'Giày chạy bộ chuyên nghiệp.', 
    // Ảnh mẫu giày
    hinhAnh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsd0EWt-Zo1hKqZM0VxHFQ-kzHeXpu765QcQ&s' 
  },
  { 
    id: 12, 
    ten: 'Nước Khoáng Lavie', 
    danhMuc: 'Đồ ăn', 
    gia: 5000, 
    soLuong: 200, 
    moTa: 'Nước khoáng thiên nhiên đóng chai.', 
    // Ảnh mẫu nước
    hinhAnh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVTB1cO9EN2I8DaAoII1ylzPSlUQF0pRyBA&s' 
  },
];