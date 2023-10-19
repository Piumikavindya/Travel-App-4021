import React from 'react'

import "../../styles/Home.css";
import Hbar from '../User/Hbar';
import Button from '../User/Button';
//import AllJourneys from '../form/AllJourneys';
import nature from '../../assets/images/nature (2).mp4';

export default function Home() {
  return (
    <>
     <section className='home-section' >
     
    
       
      <div>
<Hbar></Hbar>
      <div className='overlay'></div>
      
            <video src={nature} muted autoPlay loop className='veido'>
            <img src="/logo2.png"  alt="" className="h-20 mx-auto "></img>
              Your browser does not support the video tag.
            </video>
            <img src="/logo2.png" alt="" className="logo" />
            <Button to='/pages/CreateJourney'>+ Add Journey</Button>
          

  <div>
    <Button to='pages/Packages' style={{ margin: '0px 20px' }}>Packages</Button>
   
  </div>

  <div>
    <Button to='pages/Locations' style={{ margin: '0px 20px' }}>Locations</Button>
    
  </div>

  <div>
    <Button to='pages/Events' style={{ margin: '0px 20px' }}>Events</Button>
   
  </div>
  <div>
    <Button to='pages/Resorts' style={{ margin: '0px 20px' }}>Resorts</Button>
   
  </div>
  <div>
    <Button to='/form/AllJourneys' style={{ margin: '0px 20px' }}>AllJourneys</Button>
  </div>
</div>

      
       
    </section>
        
      
    </>   
      
      
      
  )
}
