import React from 'react'
import JourneyCard from '../components/form/JourneyCard'
import "../styles/Locations.css";


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
  imageSrc="/assets/images/r1.jpg"
  title="Amari Galle"
  description="Located in Galle, 1.5 km from Rathgama Beach, Arrow Beach Resort provides accommodation with an outdoor swimming pool, free private parking,"
  buttonLabel="Learn More"
  style={{ padding: '16px' }} 
/>

  <JourneyCard
  imageSrc="/assets/images/r2.jpg"
  title="Odailem Resort - Talpe "
  description="Situated in Galle, Odailem Resort - Talpe is 7 km from Galle Light house and offers various facilities, such as a garden. Boasting room service, this property also provides guests with a restaurant"
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} 
/>

<JourneyCard
  imageSrc="/assets/images/r3.jpg"
  title="Arrow Beach Resort"
  description="Located in Galle, 1.5 km from Rathgama Beach, Arrow Beach Resort provides accommodation with an outdoor swimming pool, free private parking, a garden and a terrace."
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} 
/>


<JourneyCard
  imageSrc="/assets/images/r5.jpg"
  title="Mount Marina Villas"
  description="Mount Marina Villas features a garden, a shared lounge and a sun terrace with swimming pool and continental breakfast in Galle. Popular points of interest nearby include Galle International Cricke"
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }}
/>

<JourneyCard
  imageSrc="/assets/images/r4.jpg"
  title="Mangrove Paradise Resort & spa"
  description="  LKR 2,272...Set in Galle, 2 km from Bonavista Beach, Mangrove Paradise Resort & spa offers accommodation with a garden, free private parking, a terrace and a restaurant."
  buttonLabel="Learn More" className="JCard"
  style={{ padding: '16px' }} 
/>

  </div>
    </div>
    </div>
  )
}
