import React from 'react'
import JourneyCard from '../form/JourneyCard'
import "../../styles/Locations.css";

export default function Resorts() {
  return (
    <div>
     <div>
      
      <div  className='header'>

        <div className='headerTitle'>
        <h1 className='headerTitleLg'>
        Resorts
      </h1>
      <p className='headerTitleSm'>Find best accomodation during your journey</p>
        </div>
      <img src="/assets/images/resort.jpg" className='headerImg' alt="C" />

      
      </div>
    
      
  <div className='JCard'>
  <JourneyCard
  imageSrc="/assets/images/resort.jpg"
  title="Galle Fort, Sri Lanka"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More"
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

<JourneyCard
  imageSrc="/assets/images/galledutchport.jpg"
  title="Galle Fort, Sri Lanka"
  description="Explore the historic Galle Fort, a UNESCO World Heritage Site, with its charming streets, Dutch-colonial architecture, and stunning ocean views."
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} // Adjust the padding value as needed
/>

  </div>
    </div>
    </div>
  )
}
