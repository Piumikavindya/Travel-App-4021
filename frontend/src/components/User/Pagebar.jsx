import React from 'react'
import "../../styles/Home.css";
import "../../styles/Common.css";


export default function Pagebar({ backgroundImage, children }) {
  return (
    <div className='vertical_bar'>
      <div className='side-image' style={{ backgroundImage: `url(${backgroundImage})` }}>
      {children}
      </div>
    </div>
  )
}
