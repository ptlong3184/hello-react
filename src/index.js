import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Kiểm tra xem bạn có file này không
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/ThemeContext'; // Nhập ThemeProvider

const root = ReactDOM.createRoot(document.getElementById('root'));

// Bọc App trong ThemeProvider
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
