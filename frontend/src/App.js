
import React from 'react'
import Navbar from "./components/User/Navbar";
import Signup from './components/auth/Signup';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Signin from './components/auth/Signin';
import ForgetPassword from './components/auth/ForgetPassword';
import Packages from './components/pages/Packages';
import Locations from './components/pages/Locations';
import CreateJourney from './components/pages/CreateJourney';
import Events from './components/pages/Events';
import Register from './components/pages/Register';
import Resorts from './components/pages/Resorts';

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
    <Route path='/pages/Locations' element={<Locations/>}/>
    <Route path='/pages/CreateJourney' element={<CreateJourney/>}/>
    <Route path='/pages/Events' element={<Events/>}/>
    <Route path='/pages/Register' element={<Register/>}/>
    <Route path='/pages/Resorts' element={<Resorts/>}/>
    
    
 </Routes>
    </> //render the navbar
  )
}

