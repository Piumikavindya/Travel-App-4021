import React from 'react'
import Pagebar from '../User/Pagebar'
import beach from '../../assets/images/beach.jpg';

export default function CreateJourney() {

  const barColor = 'rgb(123, 241, 186);'
  
  
  return (

    
    <div>
     
    
      <Pagebar backgroundImage={beach} backgroundColor={barColor}  >
      <h1 className='text-black'>Create Your Journey Here</h1>
      <div className='vertical-bar-outside-text'>
       <h1>this is create </h1>
      </div>
      </Pagebar>


      
     
    </div>

    
  )
}
