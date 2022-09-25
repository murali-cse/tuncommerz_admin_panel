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
import Category from './pages/Category';
import Orders from './pages/Orders';
import Reports from './pages/Reports';
import Faq from './pages/Faq';
import Accounts from './pages/Accounts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Customers from './pages/Customers';
import AddProducts from './pages/AddProducts';
import Product from './pages/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/blank" element={<Blankpage />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/account" element={<Accounts />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route path="/addproduct" element={<AddProducts />} />
          <Route path="/product" element={<Category />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
        <Route path="*" element={<Error404 />} />
        <Route path="500" element={<Error500 />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
