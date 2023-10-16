import React from 'react'

import "../../styles/Home.css";
import Hbar from '../User/Hbar';
import Button from '../User/Button';
import AllJourneys from '../form/AllJourneys';

export default function Home() {
  return (
    <>
     <section className='home-section' >
     
      <Hbar>
        
      </Hbar>
       
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
  <div>
    <Button to='/pages/CreateJourney'>+ Add Journey</Button>

  </div>

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
    <Button to='pages/Register' style={{ margin: '0px 20px' }}>Register</Button>
  </div>
</div>

      
       
    </section>
        <AllJourneys>
          
        </AllJourneys>
      
    </>   
      
      
      
  )
}
