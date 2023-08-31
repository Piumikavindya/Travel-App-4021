import React from 'react'
import Pagebar from '../User/Pagebar'
import beach from '../../assets/images/beach.jpg';

export default function CreateJourney() {
  return (
    <div>
     
     
      <Pagebar backgroundImage={beach}>
      <h1 className='text-black'>Create Your Journey Here</h1>

      </Pagebar>
      <div className='vertical-bar-text'>
        <p>Additional information about the journey goes here.</p>
      </div>
    </div>

    
  )
}
