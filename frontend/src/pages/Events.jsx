import React from 'react'
import "../styles/Locations.css";
import JourneyCard from '../components/form/JourneyCard';
import Button from '../components/User/Button';


export default function Events() {
  return (
    <div>
    
      
      <div  className='header'>

        <div className='headerTitle'>
        <h1 className='headerTitleLg'>
        Events
      </h1>
      <p className='headerTitleSm'>You can find best destinations from here to plan your journey</p>
        </div>
      <img src="/assets/images/pp.jpg" className='headerImg' alt="C" />

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
  title="Galle Night"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More"
  style={{ padding: '16px' }} 
/>

  <JourneyCard
  imageSrc="/assets/images/pp2.jpg"
  title="Mucical Show"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} // Adjust the padding value as needed
/>

<JourneyCard
  imageSrc="/assets/images/galledutchport.jpg"
  title="Culural Event"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} // Adjust the padding value as needed
/>


<JourneyCard
  imageSrc="/assets/images/galledutchport.jpg"
  title="Art Gallory"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} // Adjust the padding value as needed
/>

<JourneyCard
  imageSrc="/assets/images/galledutchport.jpg"
  title="Galle Fes"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} // Adjust the padding value as needed
/>

  </div>
   

    </div>
  )
}
