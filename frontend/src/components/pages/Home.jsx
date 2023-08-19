import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Home.css";

export default function Home() {
  return (
    <>
     <section className='home-section' >
      
          <div className='background-image'>
            home
           
            
            </div>
            <div className='overlay-image'></div>
            <button className='sbutton text-black p-2 font-semibold'>
              <Link to='pages/Packages'>Packages</Link>
            </button>

            <button className='sbutton text-black p-2 font-semibold'>
              <Link to='pages/Locations'>Locations</Link>
            </button>

          
        
    </section>
      
      
    </>   
      
      
      
  )
}
