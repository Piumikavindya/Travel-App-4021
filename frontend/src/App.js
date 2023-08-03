
import React from 'react'

import Navbar from "./components/User/Navbar";
import Signup from './components/auth/Signup';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Signin from './components/auth/Signin';
import ForgetPassword from './components/auth/ForgetPassword';

export default function App() {
  return (
  <> 
  <Navbar/>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/auth/signin' element={<Signin/>}/>
    <Route path='/auth/signup' element={<Signup/>}/>
    <Route path='/auth/forget-password' element={<ForgetPassword/>}/>
 </Routes>
    </>  //render the navbar
  )
}

