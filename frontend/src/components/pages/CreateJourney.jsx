import React from 'react'
import "../../styles/Common.css";

import { Link } from 'react-router-dom';


//import Packages from  '../pages/Packages';
//import Pagebar from '../User/Pagebar'
//import add from '../../assets/images/add.jpg';


export default function CreateJourney() {

  
  
  
  return (

    
    <div>
    
    
    <nav className='vertical_bar w-80 min-h-screen border-gray-300 barColor'>
        <ul p-5>
          <li>'
          <img src='/logo2.png' alt='logo' className='p-2 w-15   h-20 ' style={{margin: '10px 25px 0px 50px'} }  />
          </li>
          <li>
          <h1 >Design Your Journey Here</h1>
       
          </li>

         
         <li>
         <Link className="text-black  flex items-center space-x-1 p-2 hover:opacity-80 font-semibold text-lg" to='/pages/Packages'>
Packages
 </Link>
         </li>
        
        </ul>
     
        
       
      </nav>
      
      

     
    </div>

    
  )
}
