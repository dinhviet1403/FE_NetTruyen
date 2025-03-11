import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Reacts from './pages/React';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/FE_NetTruyen">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
          <Route path="react" element={<Reacts />}/>
        </Route>
        <Route path="/*" element={<h1 className='container'>Lỗi 404 Không tìm thấy Pages</h1>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
