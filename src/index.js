import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Headers from './Layout/Header';
import Section from './Layout/Section';
import Footers from './Layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Headers />
    <Section />
    <App />
    <Footers />
  </React.StrictMode>
);


reportWebVitals();
