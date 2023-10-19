import React from 'react'
import "../../styles/Locations.css";
import JourneyCard from '../form/JourneyCard';


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

      
      </div>
    
      
  <div className='JCard'>
  <JourneyCard
  imageSrc="/assets/images/pp3.jpg"
  title="Galle Fort, Sri Lanka"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More"
  style={{ padding: '16px' }} // Adjust the padding value as needed
/>

  <JourneyCard
  imageSrc="/assets/images/pp2.jpg"
  title="Galle Fort, Sri Lanka"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} // Adjust the padding value as needed
/>

<JourneyCard
  imageSrc="/assets/images/galledutchport.jpg"
  title="Galle Fort, Sri Lanka"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} // Adjust the padding value as needed
/>


<JourneyCard
  imageSrc="/assets/images/galledutchport.jpg"
  title="Galle Fort, Sri Lanka"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} // Adjust the padding value as needed
/>

<JourneyCard
  imageSrc="/assets/images/galledutchport.jpg"
  title="Galle Fort, Sri Lanka"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} // Adjust the padding value as needed
/>

  </div>
   

    </div>
  )
}
