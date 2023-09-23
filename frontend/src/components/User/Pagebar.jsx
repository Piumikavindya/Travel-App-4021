import React from 'react'
import "../../styles/Home.css";
import "../../styles/Common.css";


export default function Pagebar({ backgroundImage, backgroundColor, children }) {
    const sideImageStyle = {
      backgroundImage: `url(${backgroundImage})`,
    };
  
    const verticalBarStyle = {
      backgroundColor: backgroundColor,
    };
  
    return (
      <nav className='vertical_bar w-80 min-h-screen border-gray-300' style={verticalBarStyle}>
        <ul p-5>
          <li>'
          <img src='/logo2.png' alt='logo' className='logo' />
          </li>
          <li>
          <div className='side-image vertical-bar-text' style={sideImageStyle}>
          {children}
        </div>
          </li>
        
        </ul>
     
        
       
      </nav>
      
      
  )
}
