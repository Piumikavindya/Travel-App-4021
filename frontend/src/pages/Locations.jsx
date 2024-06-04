import React from 'react'

import "../styles/Locations.css";
import "../styles/Home.css";
import JourneyCard from '../components/form/JourneyCard';
import Button from '../components/User/Button';


export default function Locations() {
  return (

    <div>
      
      <div  className='header'>

        <div className='headerTitle'>
        <h1 className='headerTitleLg'>
        Locations
      </h1>
      <p className='headerTitleSm'>You can find best destinations from here to plan your journey</p>
        </div>
      <img src="/camera.jpg" className='headerImg' alt="C" />
      <div className="horizontal-buttons p-5">
     
     <Button to='pages/Packages'>Packages</Button>
     <Button to='pages/Locations'>Locations</Button>
     <Button to='pages/Events'>Events</Button>
     <Button to='pages/Resorts'>Resorts</Button>
   </div>
      
      </div>
    
      
  <div className='JCard'>
  <JourneyCard



  imageSrc="/assets/images/galledutchport.jpg"
  title="Galle Fort, Sri Lanka"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More"
  style={{ padding: '16px' }} // Adjust the padding value as needed
/>

  <JourneyCard
  imageSrc="/assets/images/jungaleBeach.jpg"
  title="Jungle Beach"
  description=" Jungle Beach is situated near Rumassala, just a short drive away from the historic Galle Fort on the southern coast of Sri Lanka. It's nestled in a lush jungle area"
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} // Adjust the padding value as needed
/>

<JourneyCard
  imageSrc="/assets/images/seaTortle0.jpg"
  title="Sea turtle hatchery"
  description="A sea turtle hatchery in Galle, Sri Lanka is a conservation facility dedicated to the protection and preservation of sea turtles, particularly the endangered species such as the Green Turtle, Olive Ridley,"
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} // Adjust the padding value as needed
/>


<JourneyCard
  imageSrc="/assets/images/light.jpg"
  title="Light House"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} // Adjust the padding value as needed
/>

<JourneyCard
  imageSrc="/assets/images/hikkaduwa.jpg"
  title="Galle Fort, Sri Lanka"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} // Adjust the padding value as needed
/>

  </div>
    </div>

    
  )
}
