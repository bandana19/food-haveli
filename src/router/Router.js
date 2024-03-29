import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../view/dashboard/admin/Dashboard'
import Login from '../view/authentication/Login';
import Register from '../view/authentication/Register';
import ForgetPassword from '../view/authentication/ForgetPassword';
import Footer from '../layout/Footer';
import HomePages from '../view/open-pages/HomePages';
import Productlist from '../components/products/productList';
import Carousel from '../components/products/Corousel';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register'element={<Register/>}/>
        <Route path='/forgetPass' element={< ForgetPassword/>}/>
        <Route path='/product' element={<Productlist/>}/>
        <Route path='/corousel' element={<Carousel/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router

