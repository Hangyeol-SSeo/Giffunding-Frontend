import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 하단 <App />. js 확장자 생략됨. 현재 디렉토리의 App.js파일 import
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // root 태그로 렌더링
root.render(
  <React.StrictMode>
    {/* ui전체 */}
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
