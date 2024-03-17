import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../view/dashboard/admin/Dashboard'
import Login from '../view/authentication/Login';
import Header from '../layout/Header';
import Register from '../view/authentication/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/regster'element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router

