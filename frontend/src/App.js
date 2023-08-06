
import React from 'react'
import Navbar from "./components/User/Navbar";
import Signup from './components/auth/Signup';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Signin from './components/auth/Signin';
import ForgetPassword from './components/auth/ForgetPassword';
import Packages from './components/pages/Packages';

export default function App() {
  return (
  <>  
  <Navbar/>  
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/auth/signin' element={<Signin/>}/>
    <Route path='/auth/signup' element={<Signup/>}/>
    <Route path='/auth/forget-password' element={<ForgetPassword/>}/>
    <Route path='/pages/Packages' element={<Packages/>}/>
 </Routes>
    </> //render the navbar
  )
}

