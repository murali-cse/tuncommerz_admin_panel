import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './pages/Dashboard.jsx'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Error404 from './pages/Error_404'
import Error500 from './pages/Error_500'
import Blankpage from './pages/Blankpage';
import Employees from './pages/Employees';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/blank" element={<Blankpage />} />
          <Route path="/employees" element={<Employees />} />
        </Route>
        <Route path="*" element={<Error404 />} />
        <Route path="500" element={<Error500 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
