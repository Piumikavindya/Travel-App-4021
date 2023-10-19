import React, { useState } from 'react';
import Navbar from "./components/User/Navbar";
import Signup from './components/auth/Signup';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Signin from './components/auth/Signin';
import ForgetPassword from './components/auth/ForgetPassword';
import Packages from './components/pages/Packages';
import Locations from './components/pages/Locations';
import CreateJourney from './components/pages/CreateJourney';
import Events from './components/pages/Events';
import Register from './components/pages/Register';
import Resorts from './components/pages/Resorts';
import UpdateJourney from './components/pages/UpdateJourney';
import PreviewJourney from './components/pages/PreviewJourney';
import DeleteJourney from './components/pages/DeleteJourney';
import AllJourneys from './components/form/AllJourneys';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    // Logic to handle user authentication and set isAuthenticated to true.
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // Logic to sign the user out and set isAuthenticated to false.
    setIsAuthenticated(false);
  };
  return (
  <>  
  <div>
  <Navbar isAuthenticated={isAuthenticated} handleSignOut={handleSignOut} /> 
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route
  path="/auth/signin"
  element={
    isAuthenticated ? (
      <Navigate to="/" />
    ) : (
      <Signin setIsAuthenticated={setIsAuthenticated} /> 
    )
  }
/>
    <Route path='/auth/signup' element={<Signup/>}/>
    <Route path='/auth/forget-password' element={<ForgetPassword/>}/>
    <Route path='/pages/Packages' element={<Packages/>}/>
    <Route path='/pages/Locations' element={<Locations/>}/>
    <Route path='/pages/CreateJourney' element={<CreateJourney/>}/>
    <Route path='/form/AllJourneys' element={<AllJourneys/>}/>
    <Route path='/pages/Events' element={<Events/>}/>
    <Route path='/pages/Register' element={<Register/>}/>
    <Route path='/pages/Resorts' element={<Resorts/>}/>
    <Route path='/update/:id' element={<UpdateJourney/>}/>
    <Route path='/preview/:id' element={<PreviewJourney/>}/>
    <Route path='/delete/:id' element={<DeleteJourney/>}/>
 </Routes>
 </div>
    </> //render the navbar
  )
}

