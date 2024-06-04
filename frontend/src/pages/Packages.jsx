import React from 'react'
import JourneyCard from '../components/form/JourneyCard'
import Button from '../components/User/Button'


export default function Packages() {
  return (
    <div>
    
      
      <div  className='header'>

        <div className='headerTitle'>
        <h1 className='headerTitleLg'>
        Packages
      </h1>
      <p className='headerTitleSm'>You can find best destinations from here to plan your journey</p>
        </div>
      <img src="/assets/images/Adventure.jpg" className='headerImg' alt="C" />

      <div className="horizontal-buttons p-5">
     
     <Button to='pages/Packages'>Packages</Button>
     <Button to='pages/Locations'>Locations</Button>
     <Button to='pages/Events'>Events</Button>
     <Button to='pages/Resorts'>Resorts</Button>
   </div>
      </div>
    
      
  <div className='JCard'>
  <JourneyCard
  imageSrc="/assets/images/pp3.jpg"
  title="Adventure Package"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More"
  style={{ padding: '16px' }} 
/>

  <JourneyCard
  imageSrc="/assets/images/pp2.jpg"
  title="Cultural Package"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} 
/>

<JourneyCard
  imageSrc="/assets/images/galledutchport.jpg"
  title="Beach Package"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }}
/>



  </div>
   

    </div>
  )
}
