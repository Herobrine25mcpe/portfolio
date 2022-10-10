import React from 'react'
import './Footer.css'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import  Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import wave from "../../img/wave.png"


const Footer = () => {
  return (
    <div className='footer'>
      <img src={wave} alt="" style={{width: '100%'}}/>
      <div className="f-content">
        <span>tarunsingh199002@gmail.com</span>
        <div className="f-icon">
          <Facebook color ="white" size='3rem'/>
          <Github color ="white" size='3rem'/>
          <Linkedin color ="white" size='3rem'/> 
        </div>
      </div>
    </div>
  )
}

export default Footer