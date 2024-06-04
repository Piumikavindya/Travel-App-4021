import React from 'react'

import "../styles/Home.css";
import Hbar from '../components/User/Hbar';
import Button from '../components/User/Button';
//import AllJourneys from '../form/AllJourneys';
import nature from '../nature.mp4';
import { Link } from 'react-router-dom';


export default function Home({ isAuthenticated }) {
  return (
    <>
     <section className='home-section' style={{ backgroundColor: '#9EDDFF' }} >
     
    
       
      <div>
<Hbar></Hbar>
      <div className='overlay'>
      <div className=''></div>
            <video src={nature} muted autoPlay loop className='veido'>
            <img src="/logo.png"  alt="" className="h-20 mx-auto "></img>
              Your browser does not support the video tag.
            </video>
            <img src="/logo.png" alt="" className="logo" />
            <div className="button-container">    </div>
            {isAuthenticated ? ( 
            <Button to="/pages/CreateJourney">Start Your Plan</Button>
          ) : (
            <Link to="/auth/signin">
              <Button>Start Your Plan</Button>
            </Link>
          )}
      

          
          <div className="horizontal-buttons p-5">
     
            <Button to='pages/Packages'>Packages</Button>
            <Button to='pages/Locations'>Locations</Button>
            <Button to='pages/Events'>Events</Button>
            <Button to='pages/Resorts'>Resorts</Button>
          </div>
  
  {isAuthenticated ? ( 
            <Button to="/form/AllJourneys" style={{ margin: '10px 20px' }}>
              Your Journeys
            </Button>
          ) : (
            <Link to="/auth/signin">
              <Button>Your Journeys</Button>
            </Link>
          )}
  </div>
  

</div>
       
    </section>
        
      
    </>   
      
      
      
  )
}
