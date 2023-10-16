import React from 'react'

import "../../styles/Home.css";
import Hbar from '../User/Hbar';
import Button from '../User/Button';

export default function Home() {
  return (
    <>
     <section className='home-section' >
     
      <Hbar>
        
      </Hbar>
       
       <div>

       <Button to='/pages/CreateJourney' style={{ margin: '0px 00px 00px 0px' }}>+ Add Journey</Button>
       <h1 className='-p-4'>Add Journey Section</h1>
       </div>

         
          <div>
            
          <Button to='pages/Packages' style={{ margin: '20px 100px 00px 0px'}}>Packages</Button>
          Packages Section
          </div>
      

      <div>
      <Button to='pages/Locations'>Locations</Button>
      Location Section
      </div>
        
      <div>
      <Button to='pages/Events'>Events</Button>
      Event Section
      </div>
        
      <div>
      <Button to='pages/Register'>Register</Button>
     
      </div>
      
        
    </section>
      
      
    </>   
      
      
      
  )
}
