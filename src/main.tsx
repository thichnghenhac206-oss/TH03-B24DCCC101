import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Thêm các import cần thiết cho báo cáo hiệu suất nếu muốn dùng reportWebVitals
// import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Nếu bạn muốn bật tính năng đo hiệu suất:
// reportWebVitals(console.log);