import React from 'react'
import "../../styles/Home.css";
import "../../styles/Common.css";


export default function Pagebar({ backgroundImage, backgroundColor, children,outsideText }) {
    const sideImageStyle = {
      backgroundImage: `url(${backgroundImage})`,
    };
  
    const verticalBarStyle = {
      backgroundColor: backgroundColor,
    };
  
    return (
      <div className='vertical_bar' style={verticalBarStyle}>
        <img src='/logo2.png' alt='logo' className='logo' />
        <div className='side-image vertical-bar-text' style={sideImageStyle}>
          {children}
        </div>
        <div className='vertical-bar-outside-text'>
        {outsideText}
      </div>
      </div>
  )
}
