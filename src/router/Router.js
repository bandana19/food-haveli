import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../view/dashboard/admin/Dashboard'
import Login from '../view/authentication/Login';
import Header from '../layout/Header';
import Register from '../view/authentication/Register';
import ForgetPassword from '../view/authentication/ForgetPassword';
import Footer from '../layout/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register'element={<Register/>}/>
        <Route path='/forgetPass' element={< ForgetPassword/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router

