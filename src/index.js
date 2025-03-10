import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Headers from './Layout/Header';
import Section from './Layout/Section';
import Footers from './Layout/Footer';
import Home from './pages/Home';
import Reacts from './pages/React';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Headers />
    <Section />
    <Router basename="/FE_NetTruyen/">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/react" element={<Reacts />}/>
        <Route path="/*" element={<h1 className='container'>Lỗi 404 Không tìm thấy Pages</h1>}/>
      </Routes>
    </Router>
    <Footers />
  </React.StrictMode>
);


reportWebVitals();
