import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../view/dashboard/admin/Dashboard'
import Login from '../view/authentication/Login';
import Header from '../layout/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router

