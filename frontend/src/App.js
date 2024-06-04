import React, { useState } from 'react';
import Navbar from "./components/User/Navbar";
import Signup from './pages/auth/Signup';
import { useNavigate, Navigate,useLocation, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/auth/Signin';
import ForgetPassword from './pages/auth/ForgetPassword';
import Packages from './pages/Packages';
import Locations from './pages/Locations';
import CreateJourney from './pages/Journey/CreateJourney';
import Events from './pages/Events';
import Register from './pages/Register';
import Resorts from './pages/Resorts';
import UpdateJourney from './pages/Journey/UpdateJourney';
import PreviewJourney from './pages/Journey/PreviewJourney';
import DeleteJourney from './pages/Journey/DeleteJourney';
import AllJourneys from './pages/Journey/AllJourneys';
import AdminHome from './pages/admin/AdminHome';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // const renderNavbar = () => {
  //   if (location.pathname === "/") {
  //     return null;
  //   }
  //   return isAuthenticated ? (
  //     <Navbar isAuthenticated={isAuthenticated} handleSignOut={handleSignOut} />
  //   ) : (
  //     <Navbar isAuthenticated={isAuthenticated} handleSignIn={handleSignIn} />
  //   );
  // };


  const handleSignIn = (user) => {
    console.log("User details:", user);
    setIsAuthenticated(true);
    console.log("User authenticated state:", isAuthenticated);
    setLoggedInUser(user);
    navigate("/auth/signin");
  };

  const handleSignOut = () => {
    console.log("Signing out...");
    setIsAuthenticated(false);
    setLoggedInUser(null);
    console.log("User authenticated state:", isAuthenticated);
    console.log("Logged-in user:", loggedInUser);
    navigate("/");
  };

  return (
    <>
      <div>
        {/* {renderNavbar()} */}
        <Navbar isAuthenticated={isAuthenticated} handleSignOut={handleSignOut} /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path="/auth/signin"
            element={isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Signin setIsAuthenticated={setIsAuthenticated} />
            )} />

          <Route
            path="/:id"
            element={<Home
              isAuthenticated={isAuthenticated}
              loggedInUser={loggedInUser}
              handleSignOut={handleSignOut}
              handleSignIn={handleSignIn} />} />



          <Route path='/auth/signup' element={<Signup />} />
          <Route path='/auth/forget-password' element={<ForgetPassword />} />
          <Route path='/pages/Packages' element={<Packages />} />
          <Route path='/pages/Locations' element={<Locations />} />
          <Route path='/pages/CreateJourney' element={<CreateJourney />} />
          <Route path='/form/AllJourneys' element={<AllJourneys />} />
          <Route path='/pages/Events' element={<Events />} />
          <Route path='/pages/Register' element={<Register />} />
          <Route path='/pages/Resorts' element={<Resorts />} />
          <Route path='/update/:id' element={<UpdateJourney />} />
          <Route path='/preview/:id' element={<PreviewJourney />} />
          <Route path='/delete/:id' element={<DeleteJourney />} />
          <Route path='/adminHome/:id' element={<AdminHome />} />

        </Routes>
      </div>
    </> //render the navbar
  );
}


export default App;